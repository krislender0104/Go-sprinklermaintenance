import { Component, OnInit } from '@angular/core';
import { SiteService } from '../site.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
@Component({
  selector: 'app-sitesearch',
  templateUrl: './sitesearch.component.html',
  styleUrls: ['./sitesearch.component.scss']
})
export class SitesearchComponent implements OnInit {
  sitenumber: any;
  constructor() { }

  ngOnInit() {
  }

}
