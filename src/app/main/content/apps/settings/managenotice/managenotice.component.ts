import { element } from 'protractor';
import { Component, OnInit } from '@angular/core';
import { NoticeService } from './managenotice.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ToastNotifications } from 'ngx-toast-notifications';
import { SitelistService } from '../../site/sitelist/sitelist.service';

@Component({
  selector: 'app-managenotice',
  templateUrl: './managenotice.component.html',
  styleUrls: ['./managenotice.component.scss']
})
export class ManagenoticeComponent implements OnInit {
  notices:any;
  form_notice: FormGroup;
  companies=[];
  constructor(private noticeservice:NoticeService,
              private toasts: ToastNotifications,) { 
    this.form_notice= new FormGroup({
      datasetId: new FormControl( { validators: [Validators.required] }),
      //Survey
      Surv1:new FormControl(),
      survey_notice1_default:new FormControl(),
      Surv2:new FormControl(),
      survey_notice2_default:new FormControl(),
      Surv3:new FormControl(),
      survey_notice3_default:new FormControl(),
      Surv4:new FormControl(),
      survey_shutnotice_default:new FormControl(),

      //Test
      Test1:new FormControl(),
      test_notice1_default:new FormControl(),
      Test2:new FormControl(),
      test_notice2_default:new FormControl(),
      Test3:new FormControl(),
      test_notice3_default:new FormControl(),
      Test4:new FormControl(),
      test_shutnotice_default:new FormControl(),

      //Installs
      Inst1:new FormControl(),
      install_notice1_default:new FormControl(),
      Inst2:new FormControl(),
      install_notice2_default:new FormControl(),
      Inst3:new FormControl(),
      install_notice3_default:new FormControl(),
      Inst4:new FormControl(),
      install_shutnotice_default:new FormControl(),
    })
    /**
     * to get comapny dropdown values
     */
    let admin=  JSON.parse(localStorage.adminprivilages);
    this.noticeservice.getDataSets(admin.UserID, admin.AccessAll);
    this.noticeservice.companyDropdownList
      .subscribe(data => {
        this.companies = data;
      });

    /**
     * on update sucess
     */
    // this.noticeservice.onnoticesChanged
    // .subscribe(data =>{
    //   if(data){
    //     this.toasts.next({text: 'Notices Updated',type: 'success'});
    //   }
    // });
   
  }

  ngOnInit() {
    this.notices=this.noticeservice.notices;
  }
  LoadEditData(event)
  {
    for(var name in this.form_notice.controls) {
      if(name !== 'datasetId')
      (this.form_notice.controls[name]).setValue('');
    }
    this.noticeservice.getEditData(event.value).subscribe(data =>{
      data.forEach(element => {
        if(this.form_notice.controls[element.NoticeType] !== undefined)
        this.form_notice.controls[element.NoticeType].setValue(element.Days);
        
    });
   });
  }
  UpdateNotices()
  {
    const jsondata=JSON.parse(JSON.stringify(this.form_notice.value));
    //const clientid = this.form_notice.datasetId;

    const params =[
            {   "ClientID": this.form_notice.value.datasetId,
            "Type":"Inst1",
            "Days":parseInt(jsondata.Inst1)
        },
        {
            "ClientID": this.form_notice.value.datasetId,
            "Type":"Inst2",
            "Days":parseInt(jsondata.Inst2)
        },
        {
          "ClientID":this.form_notice.value.datasetId,
          "Type":"Inst3",
          "Days":parseInt(jsondata.Inst3) 
        },
        {
          "ClientID":this.form_notice.value.datasetId,
          "Type":"Inst4",
          "Days":parseInt(jsondata.Inst4) 
        },
        {
          "ClientID":this.form_notice.value.datasetId,
          "Type":"Surv1",
          "Days":parseInt(jsondata.Surv1) 
        },
        {
          "ClientID":this.form_notice.value.datasetId,
          "Type":"Surv2",
          "Days":parseInt(jsondata.Surv2) 
        },
        {
          "ClientID":this.form_notice.value.datasetId,
          "Type":"Surv3",
          "Days":parseInt(jsondata.Surv3)  
        },
        {
          "ClientID":this.form_notice.value.datasetId,
          "Type":"Surv4",
          "Days":parseInt(jsondata.Surv4)  
        },
        {
          "ClientID":this.form_notice.value.datasetId,
          "Type":"Test1",
          "Days":parseInt(jsondata.Test1)   
        },
        {
          "ClientID":this.form_notice.value.datasetId,
          "Type":"Test2",
          "Days":parseInt(jsondata.Test2)  
          },
        {
          "ClientID":this.form_notice.value.datasetId,
          "Type":"Test3",
          "Days":parseInt(jsondata.Test3)  
          },
        {
          "ClientID":this.form_notice.value.datasetId,
          "Type":"Test4",
          "Days":parseInt(jsondata.Test4)  
          }
      ]
    this.noticeservice.createUpdateData(params).subscribe(data =>{
      if(data === null){
        this.toasts.next({text: 'Notices Updated',type: 'success'});
        this.form_notice.reset();
      }
    });
    //alert('Notices Updated');
    //this.toasts.next({text: 'Notices Updated',type: 'success'});
  }
}
  