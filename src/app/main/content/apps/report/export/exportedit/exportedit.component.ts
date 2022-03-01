import { navigations } from './../../../../../../navigation/navigation';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import { ExportEditService } from './exportedit.service';
import { Subscription } from 'rxjs';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastNotifications } from 'ngx-toast-notifications';

@Component({
  selector: 'app-exportedit',
  templateUrl: './exportedit.component.html',
  styleUrls: ['./exportedit.component.scss']
})
export class ExporteditComponent implements OnInit {
  value: number;
  static tube: Array<string> = [
  ]
  /* tslint:enable quotemark */
  target = [];
  message;
  source = ExporteditComponent.tube;
  compare(a: any, b: any) {
    const arr = ExporteditComponent.tube;
    return arr.indexOf(a._id) - arr.indexOf(b._id);
  }
  showMessage(e: any) {
    this.message = { selectChange: e };
  }

  exportsfilters: any[];
  editcondition: any[];
  form_exportedit: FormGroup;
  tableSubscription: Subscription;
  exportSubscription: Subscription;
  exportFilterSubscription: Subscription;
  exporttargetSubscription: Subscription;
  exports: any;
  tables: any;
  exportid: any;
  conditions: Array<{ columnName: string, operator: string, value: string, value1: string }> = [];
  multipleConditionSeparator = 'and';
  constructor(public ExportEditService: ExportEditService,
    private toasts: ToastNotifications,
    private route: ActivatedRoute, private router: Router) {
    this.ExportEditService.getTables();
    this.tableSubscription = this.ExportEditService.ontablesChanged
      .subscribe(data => {
        this.tables = data;
      });
    this.ExportEditService.getReportExports();
    this.exportSubscription = this.ExportEditService.onexportsChanged
      .subscribe(data => {
        this.exports = data;
      });

    if (route.snapshot.url[0]) {
      this.exportid = route.snapshot.url[0].path;
      this.FilterExportsBYID(this.exportid);
    }
    this.form_exportedit = new FormGroup({
      tablename: new FormControl(),
      fieldname: new FormControl(),
      ExportName: new FormControl(),
      ExportID: new FormControl()
    })
    this.value = Number(this.exportid);
  }
  FilterExportsBYID(exportId) {
    this.ExportEditService.FilterReportExportsByID(exportId);
    this.exporttargetSubscription = this.ExportEditService.onexportsFiltersByIdChanged
      .subscribe(data => {
        this.exportsfilters = data;
        this.target = this.exportsfilters;
        if (this.target == null) {
          this.editcondition = [];
        }
      });
    this.ExportEditService.GetConditionByID(exportId);
    this.ExportEditService.onexportsFiltersConditionByIdChanged
      .subscribe(data => {
        this.editcondition = data;
      });
  }
  FilterExports() {
    let jsonstring = JSON.parse(JSON.stringify(this.form_exportedit.value));
    this.ExportEditService.FilterReportExportsByName(jsonstring.tablename);
    this.exportFilterSubscription = this.ExportEditService.onexportsFiltersChanged
      .subscribe(data => {
        var ids = [];
        for (var i = 0; i < data.length; i++) {
          ids.push(data[i].TableName + '.' + data[i].FieldName)
        }
        this.exportsfilters = ids;
        console.log(ids);
      });
  }
  SaveExport() {
    let jsonstring = JSON.parse(JSON.stringify(this.form_exportedit.value));
    let selectedfields = JSON.parse(JSON.stringify(this.target));
    let definitionConditions = '';
    this.conditions.forEach((condition, index) => {
      if (index < this.conditions.length - 1) {
        if (condition.operator === 'between') {
          definitionConditions += condition.columnName + " between ''" + condition.value + "'' AND ''" + condition.value1 + "'' " + this.multipleConditionSeparator + " ";
        } else if (condition.operator == 'Is null' || condition.operator == 'Is not null') {
          definitionConditions += condition.columnName + " " + condition.operator + " " + this.multipleConditionSeparator + " ";
        }
        else {
          definitionConditions += condition.columnName + " " + condition.operator + "''" + condition.value + "'' " + this.multipleConditionSeparator + " ";
        }
      } else {
        if (condition.operator === 'between') {
          definitionConditions += condition.columnName + " between ''" + condition.value + "'' AND ''" + condition.value1 + "'' ";
        } else if (condition.operator == 'Is null' || condition.operator == 'Is not null') {
          definitionConditions += condition.columnName + " " + condition.operator;
        } else{
          definitionConditions += condition.columnName + " " + condition.operator + "''" + condition.value + "''";
        }
      }
    });
    const data = { definition: selectedfields, definitionCondition: definitionConditions };
    // console.log(data);
    this.ExportEditService.updateExport(data, this.exportid).subscribe((res) => {
      if (res) {
        this.toasts.next({ text: 'Export Saved', type: 'success' });
        this.router.navigate(['/apps/report/'])
      } else {
        console.log(res);
        this.toasts.next({ text: 'Error', type: 'danger' });
      }
    });

  }
  ExportReport() {
    let jsonstring = JSON.parse(JSON.stringify(this.form_exportedit.value));
    this.ExportEditService.ExportReport(jsonstring);
  }
  addCondition() {
    const newCondition = { columnName: '', operator: '', value: '', value1: '' };
    this.conditions.push(newCondition);
  }
  removCondition(index) {
    this.conditions.splice(index, 1);
  }
  clearOpertorAndValues(index) {
    this.conditions[index].operator = '';
    this.conditions[index].value = '';
    this.conditions[index].value1 = '';
  }
  ngOnInit() {
  }

}
