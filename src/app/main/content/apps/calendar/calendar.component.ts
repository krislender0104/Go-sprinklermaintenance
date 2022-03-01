import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { MatDialog, MatDialogRef } from '@angular/material';
import { Subject } from 'rxjs';
import { startOfDay, isSameDay, isSameMonth } from 'date-fns';
import { CalendarEvent, CalendarEventAction, CalendarEventTimesChangedEvent, CalendarMonthViewDay } from 'angular-calendar';

import { FuseConfirmDialogComponent } from '@fuse/components/confirm-dialog/confirm-dialog.component';
import { fuseAnimations } from '@fuse/animations';

import { FuseCalendarEventFormDialogComponent } from './event-form/event-form.component';
import { CalendarEventModel } from './event.model';
import { CalendarService } from './calendar.service';
//import { promise } from 'protractor';
//import { reject } from 'q';
import urlconstants from 'urlconstants.js';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { DataService } from '../shared/data.service';


@Component({
    selector     : 'fuse-calendar',
    templateUrl  : './calendar.component.html',
    styleUrls    : ['./calendar.component.scss'],
    encapsulation: ViewEncapsulation.None,
    animations   : fuseAnimations
})
export class FuseCalendarComponent implements OnInit
{
    accesstoken: any;
    headers: any;
    options: any;
    view: string;
    viewDate: Date;
    events: CalendarEvent[];
    public actions: CalendarEventAction[];
    activeDayIsOpen: boolean;
    refresh: Subject<any> = new Subject();
    dialogRef: any;
    confirmDialogRef: MatDialogRef<FuseConfirmDialogComponent>;
    selectedDay: any;
    objSelectedNode: any;

    constructor(
        public dialog: MatDialog,
        public calendarService: CalendarService,
        private sharedService:DataService,
        private http: HttpClient
    )
    {
        this.accesstoken = "Bearer " + localStorage.getItem('accessToken');
        this.headers = new HttpHeaders({
            //'Content-Type': 'application/json',
            'Authorization': this.accesstoken
        });
        this.options = { headers: this.headers };
        this.view = 'month';
        this.viewDate = new Date();
        this.activeDayIsOpen = true;
        this.selectedDay = {date: startOfDay(new Date())};
        this.objSelectedNode = "";
        this.actions = [
            {
                label  : '<i class="material-icons s-16">edit</i>',
                onClick: ({event}: { event: CalendarEvent }): void => {
                    this.editEvent('edit', event);
                }
            }
        ];

        /**
         * Get events from service/server
         */
        this.setEvents();
    }

    ngOnInit()
    {
        /**
         * Watch re-render-refresh for updating db
         */
        this.refresh.subscribe(updateDB => {
            // console.warn('REFRESH');
            if ( updateDB )
            {
                // console.warn('UPDATE DB');
                this.calendarService.updateEvents(this.events);
            }
        });
        
        this.calendarService.onEventsUpdated.subscribe(events => {
            this.setEvents();
            this.refresh.next();
        });
    }

    getEventData(){
        this.events = this.calendarService.events.map(item => {
            
            item.actions = this.actions;
            return new CalendarEventModel(item);
        });
    }

    setEvents()
    {
        this.events = this.calendarService.events.map(item => {
            
            item.actions = this.actions;
            return new CalendarEventModel(item);
        });
    }

    /**
     * Before View Renderer
     * @param {any} header
     * @param {any} body
     */
    beforeMonthViewRender({header, body})
    {
        // console.info('beforeMonthViewRender');
        /**
         * Get the selected day
         */
        const _selectedDay = body.find((_day) => {
            return _day.date.getTime() === this.selectedDay.date.getTime();
        });

        if ( _selectedDay )
        {
            /**
             * Set selectedday style
             * @type {string}
             */
            _selectedDay.cssClass = 'mat-elevation-z3';
        }

    }

    /**
     * Day clicked
     * @param {MonthViewDay} day
     */
    dayClicked(day: CalendarMonthViewDay): void
    {
        const date: Date = day.date;
        const events: CalendarEvent[] = day.events;

        if ( isSameMonth(date, this.viewDate) )
        {
            if ( (isSameDay(this.viewDate, date) && this.activeDayIsOpen === true) || events.length === 0 )
            {
                this.activeDayIsOpen = false;
            }
            else
            {
                this.activeDayIsOpen = true;
                this.viewDate = date;
            }
        }
        this.selectedDay = day;
        this.refresh.next();
    }

    /**
     * Event times changed
     * Event dropped or resized
     * @param {CalendarEvent} event
     * @param {Date} newStart
     * @param {Date} newEnd
     */
    eventTimesChanged({event, newStart, newEnd}: CalendarEventTimesChangedEvent): void
    {
        event.start = newStart;
        event.end = newEnd;
        // console.warn('Dropped or resized', event);
        this.refresh.next(true);
    }

    /**
     * Delete Event
     * @param event
     */
    deleteEvent(event)
    {
        this.confirmDialogRef = this.dialog.open(FuseConfirmDialogComponent, {
            disableClose: false
        });

        this.confirmDialogRef.componentInstance.confirmMessage = 'Are you sure you want to delete?';

        this.confirmDialogRef.afterClosed().subscribe(result => {
            if ( result )
            {
                const eventIndex = this.events.indexOf(event);
                this.events.splice(eventIndex, 1);
                this.refresh.next(true);
            }
            this.confirmDialogRef = null;
        });

    }

    /**
     * Edit Event
     * @param {string} action
     * @param {CalendarEvent} event
     */
    editEvent(action: string, event: CalendarEvent)
    {
        const eventIndex = this.events.indexOf(event);
        this.objSelectedNode = {name: event.meta.notes, date: event.start};
        this.getDayEvents().then((responce)=>{
            this.dialogRef = this.dialog.open(FuseCalendarEventFormDialogComponent, {
                panelClass: 'event-form-dialog',
                data      : {
                    data: responce,
                    event : event,
                    action: action
                }
            });
            this.dialogRef.afterClosed()
            .subscribe(response => {
                if ( !response )
                {
                    return;
                }
                const actionType: string = response[0];
                const formData: FormGroup = response[1];
                switch ( actionType )
                {
                    /**
                     * Save
                     */
                    case 'save':

                        this.events[eventIndex] = Object.assign(this.events[eventIndex], formData.getRawValue());
                        this.refresh.next(true);

                        break;
                    /**
                     * Delete
                     */
                    case 'delete':

                        this.deleteEvent(event);

                        break;
                }
            });
        });
  
    }

    getDayEvents(){
            
        return new Promise((resolve, reject)=>{
            // this.http.post(urlconstants.apiurl + 'reports/getColumnCount')
            this.objSelectedNode.userid = JSON.parse(localStorage.getItem('currentUser'))[0]['Logon'];
            this.objSelectedNode.date=this.formatDate(this.objSelectedNode.date);
            this.http.post(urlconstants.apiurl + 'reports/getColumnCount', {
                id: 'events',
                data: this.objSelectedNode
            }, this.options).subscribe((response: any) => {
                    
                    resolve(response);
                }, reject); 
        });

    }

    /**
     * Add Event
     */
    addEvent(): void
    {
        this.dialogRef = this.dialog.open(FuseCalendarEventFormDialogComponent, {
            panelClass: 'event-form-dialog',
            data      : {
                action: 'new',
                date  : this.selectedDay.date
            }
        });
        this.dialogRef.afterClosed()
            .subscribe((response: FormGroup) => {
                if ( !response )
                {
                    return;
                }
                const newEvent = response.getRawValue();
                newEvent.actions = this.actions;
                this.events.push(newEvent);
                this.refresh.next(true);
            });
    }

    formatDate(date) {
        if (date == null||date=='')
          return null;
    
        var d = new Date(date),
          month = '' + (d.getMonth() + 1),
          day = '' + d.getDate(),
          year = d.getFullYear();
    
        if (month.length < 2) month = '0' + month;
        if (day.length < 2) day = '0' + day;
    
        return [year, month, day].join('-');
      }
}


