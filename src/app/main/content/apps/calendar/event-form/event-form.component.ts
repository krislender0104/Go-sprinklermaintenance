import { Component, Inject, ViewEncapsulation } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material';

import { MatColors } from '@fuse/mat-colors';

import { CalendarEvent } from 'angular-calendar';
import { CalendarEventModel } from '../event.model';
import { DataService } from '../../shared/data.service';

@Component({
    selector     : 'fuse-calendar-event-form-dialog',
    templateUrl  : './event-form.component.html',
    styleUrls    : ['./event-form.component.scss'],
    encapsulation: ViewEncapsulation.None
})

export class FuseCalendarEventFormDialogComponent
{
    event: CalendarEvent;
    dialogTitle: string;
    eventForm: FormGroup;
    action: string;
    presetColors = MatColors.presets;
    tabelData : any;
    tableHeader : any;
    constructor(
        public dialogRef: MatDialogRef<FuseCalendarEventFormDialogComponent>,private sharedService:DataService,
        @Inject(MAT_DIALOG_DATA) private data: any,
        private formBuilder: FormBuilder
    )
    {
        if(data.data.length>0){
            for (let index = 0; index < data.data.length; index++) {
                data.data[index].Date=this.sharedService.convertdate(data.data[index].Date);
            }
        }
        this.event = data.event;
        this.action = data.action;
        this.tabelData = data.data;
        this.tableHeader = {column1:"Date", column2:"Company", column3:"HazID", column4:"Address",column5:"SiteType"};
        if(data.event.meta.notes == "appointment")this.tableHeader = {column1:"Date", column2:"SiteID", column3:"HazID", column4:"TesterID",column5:"TestType"};
        if ( this.action === 'edit' )
        {
            this.dialogTitle = this.event.title;
        }
        else
        {
            this.dialogTitle = 'New Event';
            this.event = new CalendarEventModel({
                start: data.date,
                end  : data.date
            });
        }
        this.eventForm = this.createEventForm();
    }

    createEventForm()
    {
        return new FormGroup({
            title : new FormControl(this.event.title),
            start : new FormControl(this.event.start),
            end   : new FormControl(this.event.end),
            allDay: new FormControl(this.event.allDay),
            color : this.formBuilder.group({
                primary  : new FormControl(this.event.color.primary),
                secondary: new FormControl(this.event.color.secondary)
            }),
            meta  :
                this.formBuilder.group({
                    location: new FormControl(this.event.meta.location),
                    notes   : new FormControl(this.event.meta.notes)
                })
        });
    }
}
