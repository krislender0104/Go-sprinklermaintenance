import { Component, OnInit, ViewChild } from '@angular/core';
import { MatSort, MatPaginator, MatTableDataSource } from '@angular/material';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import { ToastNotifications } from 'ngx-toast-notifications';
import { Router } from '@angular/router';
import { MailMergeServices } from './mailmerge.service';

@Component({
  selector: 'app-mailmerge',
  templateUrl: './mailmerge.component.html',
  styleUrls: ['./mailmerge.component.scss']
})
export class MailmergeComponent implements OnInit {
  form_mailmergesetup: FormGroup;
  displayedColumns: string[] = ['Ncode', 'LetterType', 'SystemName', 'SystemAbbreviation', 'ImageAlt', 'SystemState', 'ExpectedMailDate', 'ShutoffThreatDate'];
  dataSource = new MatTableDataSource<UserElement>();
  jsonstring;
  ncode:any
  replicate:boolean=false;
  ncodelist:Array<any>=[];
  create:boolean=true;
  update:boolean=false;
  mailmerge: any;
  constructor(private mailmergeservice: MailMergeServices, private router: Router, private toast: ToastNotifications) {

    this.mailmergeservice.getMailMergelist().then(data => {
      for (var i=0;i<data["length"];i++){
        this.ncodelist.push(data[i].Ncode);
      }
      this.jsonstring = JSON.parse(JSON.stringify(data));
      this.dataSource = new MatTableDataSource<UserElement>(this.jsonstring);
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;
    })

    this.form_mailmergesetup = new FormGroup({
      Ncode: new FormControl('', Validators.required),
      LetterType: new FormControl(),
      SystemName: new FormControl(),
      SystemAbbreviation: new FormControl(),
      ImageAlt: new FormControl(),
      SystemState: new FormControl(),
      ExpectedMailDate: new FormControl(),
      ShutoffThreatDate: new FormControl()
    })
  }

  ngOnInit() {
  }
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  AddMailmerge() {
    var nvalue=this.form_mailmergesetup.controls['Ncode'].value;
    for(var i=0;i<this.ncodelist.length;i++){
      if(nvalue===this.ncodelist[i]){
        this.replicate=true;
      }
    }
    if(!this.replicate){
      let jsondata = JSON.parse(JSON.stringify(this.form_mailmergesetup.value));
      this.mailmergeservice.addMailmerge(jsondata).subscribe(data => {
        if (data != '0' && data != null) {
          this.toast.next({ text: 'Mail Merge Created', type: 'success' });
          this.mailmergeservice.getMailMergelist().then(data => {
            for (var i=0;i<data["length"];i++){
              this.ncodelist.push(data[i].Ncode);
            }
            this.jsonstring = JSON.parse(JSON.stringify(data));
            this.dataSource = new MatTableDataSource<UserElement>(this.jsonstring);
            this.dataSource.paginator = this.paginator;
            this.dataSource.sort = this.sort;
          })
          this.form_mailmergesetup.reset();
          this.form_mailmergesetup.controls['Ncode'].setErrors(null);
        } else{
          this.toast.next({ text: 'Mail Merge Not Created.', type: 'danger' });
        }
      });
    }else{
      this.toast.next({text:'Ncode is unique. Try other one.', type: 'danger'})
      this.replicate=false;
    }
    
  }

  Getmailmergebyid(Ncode) {
    this.mailmergeservice.getMailMergebyid(Ncode).then(data => {
      if (data) {
        this.form_mailmergesetup.setValue({
          Ncode: data[0].Ncode, LetterType: data[0].LetterType, SystemName: data[0].SystemName,
          SystemAbbreviation: data[0].SystemAbbreviation, ImageAlt: data[0].ImageAlt, SystemState: data[0].SystemState,
          ExpectedMailDate: data[0].ExpectedMailDate, ShutoffThreatDate: data[0].ShutoffThreatDate
        });
        this.ncode=data[0].Ncode;
        this.update=true;
        this.create=false;
        this.form_mailmergesetup.controls['Ncode'].disable();
      } else {
        this.toast.next({ text: 'No Data Found', type: 'danger' });
      }
    })
  }

  DeleteMailmerge(){
    this.form_mailmergesetup.controls['Ncode'].enable();
    this.form_mailmergesetup.patchValue({Ncode:this.ncode});
    this.mailmergeservice.DeleteMailMerge(this.ncode).subscribe(data=>{
      if(data!='0' && data!=null){
        this.toast.next(({text:'Mail Merge Deleted', type:'success'}));
        this.mailmergeservice.getMailMergelist().then(data => {
          for (var i=0;i<data["length"];i++){
            this.ncodelist.push(data[i].Ncode);
          }
          this.jsonstring = JSON.parse(JSON.stringify(data));
          this.dataSource = new MatTableDataSource<UserElement>(this.jsonstring);
          this.dataSource.paginator = this.paginator;
          this.dataSource.sort = this.sort;
        })
        this.form_mailmergesetup.reset();
        this.form_mailmergesetup.controls['Ncode'].setErrors(null);
        this.update=false;
        this.create=true;
      }else{
        this.toast.next({ text: 'Mail Merge Not Deleted', type: 'danger' });
      }
    })
  }

  UpdateMailmerge(){
    this.form_mailmergesetup.controls['Ncode'].enable();
    this.form_mailmergesetup.patchValue({Ncode:this.ncode});
    let jsondata = JSON.parse(JSON.stringify(this.form_mailmergesetup.value));
    this.mailmergeservice.updateMailMerge(jsondata).subscribe(data => {
      if (data != '0' && data != null) {
        this.toast.next({ text: 'Mail Merge Updated', type: 'success' });
        this.mailmergeservice.getMailMergelist().then(data => {
          this.jsonstring = JSON.parse(JSON.stringify(data));
          this.dataSource = new MatTableDataSource<UserElement>(this.jsonstring);
          this.dataSource.paginator = this.paginator;
          this.dataSource.sort = this.sort;
        })
        this.form_mailmergesetup.reset();
        this.form_mailmergesetup.controls['Ncode'].setErrors(null);
        this.update=false;
        this.create=true;
      } else {
        this.toast.next({ text: 'Mail Merge Not Updated', type: 'danger' });
      }
    });
  }

}
export interface UserElement {
  Ncode: string,
  LetterType: number,
  SystemName: string,
  SystemAbbreviation: string,
  ImageAlt: string,
  SystemState: string,
  ExpectedMailDate: string,
  ShutoffThreatDate: string
}
