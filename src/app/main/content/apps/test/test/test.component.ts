import { Component, OnInit } from '@angular/core';
import { TestCreateService } from './testcreate.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastNotifications } from 'ngx-toast-notifications';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.scss']
})
export class TestComponent implements OnInit {
hazardid: string;
siteId: string;
newtest:any;
testform: FormGroup;
  constructor(private testcreateservice:TestCreateService,
    private toasts: ToastNotifications,
    private route: ActivatedRoute,private router:Router) { 
    this.hazardid=route.snapshot.url[0].path;
    this.siteId=route.snapshot.url[1].path;
    this.testform = new FormGroup({
      clientId:new FormControl(),
      siteId :new FormControl(),
      hazardId :new FormControl(this.hazardid),
      devicesn1 :new FormControl(),
      testdate1  :new FormControl(),
      tester1  :new FormControl(),
      result1  :new FormControl('',Validators.required),
      comments1  :new FormControl(),
      lasttest1  :new FormControl(),
      devicesn2 :new FormControl(),
      testdate2  :new FormControl(),
      tester2  :new FormControl(),
      result2  :new FormControl(),
      comments2  :new FormControl(),
      lasttest2  :new FormControl(),
      devicesn3 :new FormControl(),
      testdate3  :new FormControl(),
      tester3  :new FormControl(),
      result3  :new FormControl(),
      comments3  :new FormControl(),
      lasttest3  :new FormControl()
    });
    this.testcreateservice.getTestsfields('DevTests');
    this.testcreateservice.ontestsfieldsChanged.subscribe(data=>{
        this.testsfields=data;
    });
  }
  fieldName:any;
  testsfields:any;
  GetfieldName(fieldname)
  {
    var testfield = this.testsfields.filter(field=>field.FieldName==fieldname);
    if(testfield)
    {
        this.fieldName=testfield[0].Caption;
        return this.fieldName;
    }
  }
  ngOnInit() {
  }
  OnCreateTest() {
    let jsonString = JSON.parse(JSON.stringify(this.testform.value));
    this.newtest = this.testcreateservice.createTest(jsonString).subscribe(data => {
      if (data == 'Test Created') {
        this.toasts.next({ text: 'New Test Created', type: 'success' });
        this.router.navigate(['/apps/site/' + this.siteId])
      }
    });
  }
}
