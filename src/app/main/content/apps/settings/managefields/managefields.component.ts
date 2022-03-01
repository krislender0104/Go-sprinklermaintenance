import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import { FieldsService } from './fields.service';
import { Subscription } from 'rxjs';
import { ToastNotifications } from 'ngx-toast-notifications';
@Component({
  selector: 'app-managefields',
  templateUrl: './managefields.component.html',
  styleUrls: ['./managefields.component.scss']
})
export class ManagefieldsComponent implements OnInit {
  form_managefields: FormGroup;
  tableSubscription: Subscription;
  fieldsSubscription: Subscription;
fields:any;
tables:any;
  constructor(private fieldsService:FieldsService,private toasts: ToastNotifications) {
    this.fieldsService.getTables();
    this.tableSubscription =this.fieldsService.ontablesChanged
    .subscribe(data => {
         this.tables= data;
    });

   // this.fieldsService.getFields();
    // this.fieldsSubscription =this.fieldsService.onfieldsChanged
    // .subscribe(data => {
    //      this.fields= data;
    // });
    this.form_managefields=new FormGroup({
      tablename:new FormControl(),
      fieldname:new FormControl()
    })
   }
SearchFields()
{
  let jsonString = JSON.parse(JSON.stringify(this.form_managefields.value));
  this.fieldsService.searchFields(jsonString);
     this.fieldsSubscription =
     this.fieldsService.onfieldsChanged
     .subscribe(data => {
          this.fields = data;
  });
}
onUpdateFields()
{
    let jsonString = JSON.parse(JSON.stringify(this.fields));
    this.fieldsService.saveFields(jsonString);
  //  alert('Fields Saved')
    this.toasts.next({text: 'Fields Saved',type: 'success'});
}
 ngOnInit() {
  }

}
