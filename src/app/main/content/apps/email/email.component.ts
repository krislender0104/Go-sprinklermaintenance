import { Subscription } from 'rxjs';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Component, OnInit, AfterViewInit, ViewChild, ElementRef } from '@angular/core';
import { EmailServiceService } from '../../services/email-service.service';
import { ToastNotifications } from "ngx-toast-notifications";

@Component({
  selector: 'app-email',
  templateUrl: './email.component.html',
  styleUrls: ['./email.component.scss']
})
export class EmailComponent implements OnInit {

  showCC: boolean = false;
  fileList = [];
  emailForm: FormGroup;
  isSendingEmail: boolean = false;
  isSubmitted: boolean = false;
  constructor(private emailService: EmailServiceService, private toast: ToastNotifications) {
    this.emailForm = new FormGroup({
      to: new FormControl('', { validators: [Validators.email, Validators.required] }),
      subject: new FormControl(''),
      // cc: new FormControl(''),
      // bcc: new FormControl(''),
      body: new FormControl('', { validators: [Validators.required] })
    })
  }


  ngOnInit() {
  }

  toggleCCAndBCC() {
    if (this.showCC) {
      this.showCC = false;
    } else {
      this.showCC = true;
    }
  }

  selectFiles(files) {
    for (let i = 0; i < files.length; i++) {
      // console.log(files[i]);
      this.fileList.push(files[i]);
    }
  }

  removeFile(index) {
    this.fileList.splice(index, 1);
  }
  sendEmail() {
    this.isSubmitted = true;
    if (this.emailForm.valid) {
      this.isSendingEmail = true;
      const formData = new FormData();
      formData.append('email', this.emailForm.controls['to'].value);
      formData.append('subject', this.emailForm.controls['subject'].value);
      formData.append('content', this.emailForm.controls['body'].value);
      !!this.fileList[0] ? formData.append('file', this.fileList[0]) : "";
      // formData.append('cc', this.emailForm.controls['cc'].value);
      // formData.append('bcc', this.emailForm.controls['bcc'].value);


      this.emailService.sendSingleEmail(formData).subscribe((res) => {
        console.log(res);
        this.isSendingEmail = false;
        this.isSubmitted = false;
        if (res === 'success') {
          this.toast.next({
            text: 'Successfully sent!',
            caption: 'Sent',
            type: 'success',
          });
          this.emailForm.reset();
          this.fileList.length=0;
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
      console.log('Invalid Form')
    }
  }
  // ngAfterViewInit() 
  //   $('#summernote').summernote();
  //   $('#summernote_air').summernote({
  //       airMode: true
  //   });
  //   $('[data-provide="markdown"]').markdown({autofocus:false,savable:false});
  // }

}