import { Router } from '@angular/router';
import { ExportService } from './export.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import { Subscription } from 'rxjs';
import { EventEmitter, IterableDiffers, Input, Output } from '@angular/core';
import { ToastNotifications } from 'ngx-toast-notifications';


@Component({
  selector: 'app-export',
  templateUrl: './export.component.html',
  styleUrls: ['./export.component.scss']
})

export class ExportComponent implements OnInit {
  static tube: Array<string> = [
  ]
  /* tslint:enable quotemark */
  target = [];
  message;
  source = ExportComponent.tube;
  compare(a: any, b: any) {
    const arr = ExportComponent.tube;
    return arr.indexOf(a._id) - arr.indexOf(b._id);
  }
  showMessage(e: any) {
    this.message = { selectChange: e };
  }

  form_exportcreate: FormGroup;
  tableSubscription: Subscription;
  fieldsSubscription: Subscription;
  exportFilterSubscription: Subscription;
  fields: any;
  tables: any;
  conditions: Array<{ columnName: string, operator: string, value: string, value1: string }> = [];
  multipleConditionSeparator = 'and';

  constructor(private expostservice: ExportService, private toasts: ToastNotifications,
    private router: Router) {
    this.expostservice.getTables();
    this.tableSubscription = this.expostservice.ontablesChanged
      .subscribe(data => {
        this.tables = data;
      });
    this.form_exportcreate = new FormGroup({
      tablename: new FormControl(),
      fieldname: new FormControl(),
      ExportName: new FormControl(),
    })
  }

  CreateExport() {
    let jsonstring = JSON.parse(JSON.stringify(this.form_exportcreate.value));
    let selectedfields = JSON.parse(JSON.stringify(this.target));
    let definitionConditions = '';
    this.conditions.forEach((condition, index) => {
      if (index < this.conditions.length - 1) {
        if (condition.operator === 'between') {
          definitionConditions += condition.columnName + " between ''" + condition.value + "'' AND ''" + condition.value1 + "'' " + this.multipleConditionSeparator + " ";
        } else if (condition.operator == 'Is null' || condition.operator == 'Is not null') {
          definitionConditions += condition.columnName + " " + condition.operator + " " + this.multipleConditionSeparator + " ";
        } else {
          definitionConditions += condition.columnName + " " + condition.operator + "''" + condition.value + "''" + this.multipleConditionSeparator + " ";
        }
      } else {
        if (condition.operator === 'between') {
          definitionConditions += condition.columnName + " between ''" + condition.value + "'' AND ''" + condition.value1 + "'' ";
        } else if (condition.operator == 'Is null' || condition.operator == 'Is not null') {
          definitionConditions += condition.columnName + " " + condition.operator;
        } else {
          definitionConditions += condition.columnName + " " + condition.operator + "''" + condition.value + "''";
        }
      }
    });
    const data = { definition: selectedfields, definitionCondition: definitionConditions };
    this.expostservice.CreateExport(jsonstring, data).subscribe((res) => {
      if (res) {
        this.toasts.next({ text: 'Export Created', type: 'success' });
        this.router.navigate(['/apps/report']);
      } else {
        console.log(res);
        this.toasts.next({ text: 'Error', type: 'danger' });
      }
    });
    // // alert('Export Created');

  }
  FilterExports() {
    this.expostservice.FilterReportExports(this.form_exportcreate.value.tablename);
    this.exportFilterSubscription = this.expostservice.onexportsFiltersChanged
      .subscribe(data => {
        var ids = [];
        for (var i = 0; i < data.length; i++) {
          ids.push(data[i].Name)
        }

        this.source = ids;
      });
  }
  addCondition() {
    const newCondition = { columnName: '', operator: '', value: '', value1: '' };
    this.conditions.push(newCondition);
  }
  removCondition(index) {
    this.conditions.splice(index, 1);
  }
  ngOnInit() {
  }

}

