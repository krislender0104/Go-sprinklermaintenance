import { Component, OnInit, AfterViewInit } from '@angular/core';
import { EmailServiceService } from '../../services/email-service.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ToastNotifications } from "ngx-toast-notifications";
import * as XLSX from 'xlsx';

@Component({
  selector: 'app-email',
  templateUrl: './email-list.component.html',
  styleUrls: ['./email-list.component.scss']
})
export class EmailListComponent implements OnInit {

  emailTypes: Array<any> = [];
  templateTypes: Array<any> = [];
  emailListForm: FormGroup;
  isSending: boolean = false;
  file;
  isSubmit: boolean = false;
  excelData = [];
  constructor(private emailService: EmailServiceService, private toast: ToastNotifications) {
    this.emailService.getNoticeList().subscribe((res) => {
      this.templateTypes = res;
    });

    this.emailListForm = new FormGroup({
      emailType: new FormControl('', { validators: [Validators.required] }),
      emailListFile: new FormControl(),
      templateType: new FormControl('', { validators: [Validators.required] })
    });

    this.emailTypes = [
      {
        id: '0',
        name: 'Sites'
      },
      {
        id: '1',
        name: 'Testers'
      }
    ];

  }

  sendBulkEmail() { 
    this.isSubmit = true;
    if (this.emailListForm.valid) {

      this.isSending = true;

      const formData = new FormData();
      formData.append('type', this.emailListForm.controls['emailType'].value);
      formData.append('notice', this.emailListForm.controls['templateType'].value);
      formData.append('file', this.file);
      formData.append('fileObject', JSON.stringify(this.excelData));



      this.emailService.sendBulkEmail(formData).subscribe(res => {
        console.log(res);
        this.isSending = false;
        this.isSubmit = false;
        if (res === 'success') {
          this.toast.next({
            text: 'Successfully sent!',
            caption: 'Sent',
            type: 'success',
          });
          this.emailListForm.reset();
          this.excelData=[];
        } else {
          this.toast.next({
            text: res,
            caption: 'Error',
            type: 'danger',
            lifetime: 5000
          });
        }
      });

    } else {
      console.log('Invalid Form');
    }
  }

  ngOnInit() {
  }

  selectFile(files) {
    if (files.length > 0) {
      this.file = files[0];
      this.readExcel(this.file);
    }
  }

  readExcel(file) {
    const reader: FileReader = new FileReader();
    reader.onload = (e: any) => {
      /* read workbook */
      const bstr: string = e.target.result;
      const wb: XLSX.WorkBook = XLSX.read(bstr, { type: 'binary' });

      /* grab first sheet */
      const wsname: string = wb.SheetNames[0];
      const ws: XLSX.WorkSheet = wb.Sheets[wsname];

      /* save data */
      const data = (XLSX.utils.sheet_to_json(ws, { header: 1 }));
      // console.log(data);
      for (let i = 1; i < data.length; i++) {
        const obj = {
          'Siteid': data[i][0],
          'Company': data[i][1],
          'Email': data[i][2]
        };
        this.excelData.push(obj);
      }
      console.log(this.excelData);
    };
    reader.readAsBinaryString(file);
  }


}
