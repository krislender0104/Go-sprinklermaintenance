import { Component, OnInit, Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material';

@Component({
  selector: 'app-alertpopup',
  templateUrl: './alertpopup.component.html',
  styleUrls: ['./alertpopup.component.scss']
})
export class AlertpopupComponent implements OnInit {

  modalTitle: string;
  modalMessage: string;
  constructor(@Inject(MAT_DIALOG_DATA) public data: any) {
    this.modalTitle = data.title;
  }

  ngOnInit() {
  }

}
