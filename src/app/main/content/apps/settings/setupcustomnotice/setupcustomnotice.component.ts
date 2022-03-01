import { filter } from 'rxjs/operators';
import { element } from 'protractor';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { SetupCustomNoticeService } from './setupcustomnotice.service';
/*make sure you import it here*/
import { FormsModule }        from '@angular/forms';
import { ToastNotifications } from 'ngx-toast-notifications';

@Component({
  selector: 'app-setupcustomnotice',
  templateUrl: './setupcustomnotice.component.html',
  styleUrls: ['./setupcustomnotice.component.scss']
})
export class SetupcustomnoticeComponent implements OnInit {
  personList=[];
  paramsList=[];
  dataSet=[];
  editField: string;
    
  constructor( private _setupcustomnoticeService:SetupCustomNoticeService,
                private toasts:ToastNotifications) { }

  ngOnInit() {
    this.personList = [
    //   { DataSet: 1,NoticeType:'133', Letter: 'Aurelia Vega', TestRPT: 30, Testers: 'Deepends', Regs: 'Spain', Survey: 'Madrid', Doc6: '12', Doc7: '23' , Doc8: '34', Doc9: '45', Doc10: '56'},
    
    ];
     this._setupcustomnoticeService.getDataService().subscribe(data =>{
      this.dataSet = data;
     })
  }

  changeValue(id: number, property: string, event: any) {
    if(this.paramsList[id] === undefined){
      const tempData = Object.assign({},this.personList[id])
      tempData[property]=event
      this.paramsList[id]=tempData;
    } else {
        this.paramsList[id][property]=event;
    }
  }

    dataSetChange(e){
      this.personList=[];
      this.paramsList=[];
      this._setupcustomnoticeService.getViewTableData(e.value).subscribe(data => {
        this.personList = data;
        this.personList  = this.personList.filter(key => key.DataSet !== 0);
        data.forEach( (element,i)  => {
          const clientname = this.dataSet.filter(x => x.ClientID === data[i].DataSet)
          data[i]['DatasetName'] = clientname[0].ClientName;
        })

      });
     //this.dataSet.
    }

    onDataSave(){
      const tempCopy = Object.assign([],this.personList);
      const changedCopy = this.paramsList;
      tempCopy.forEach(function(element,index){
       if(changedCopy[index] !== undefined){
        tempCopy[index]=changedCopy[index];
       }
      }
    )
    
      const params= JSON.parse(JSON.stringify(this.renameKeys(tempCopy,'ClientID')));
      console.log(params);
      this._setupcustomnoticeService.postViewTableData(params).subscribe(data => {
        if(data!== undefined){
          this.toasts.next({text: data,type: 'success'});
          
        }else{
          this.toasts.next({text: 'Not Updated',type: 'danger'});
        }
        
      },err=>{
        this.toasts.next({text: 'Not Updated',type: 'danger'});
      });
    }
    renameKeys(obj, newKeys) {
      obj.forEach(function(e,i) {
        obj[i]['ClientID']= obj[i]['DataSet'];
      });

      return obj;
    }

}
