import { Component, OnInit, ElementRef } from '@angular/core';
import * as XLSX from 'xlsx';
import { SiteService } from '../site.service';
import { ToastNotifications } from 'ngx-toast-notifications';
import { ViewChild } from '@angular/core';

@Component({
  selector: 'app-site-import',
  templateUrl: './site-import.component.html',
  styleUrls: ['./site-import.component.scss']
})

export class SiteImportComponent implements OnInit {

  @ViewChild('file') file: ElementRef;
  @ViewChild('fileHaz') fileHaz: ElementRef;
  myInputFile: any;
  myInputFileHaz: any;

  isError: boolean = false;
  isErrordisable: boolean = false;
  errorMsg: string = '';
  //file;
  excelData = [];
  response = null;
  isErrorHaz: boolean = false;
  isErrordisableHaz: boolean = false;
  errorMsgHaz: string = '';
  //fileHaz;
  excelDataHaz = [];
  excelDataMailAdd = [];
  responseHaz = null;
  siteImportColumns = ["IncNum","ClientID", "AccountNum", "Contact", "Company", "Address", "Address2", "City", "State", "zip", "Phone", "Ext", "Cell1", "Fax", "Email", "LocationID", "SiteType", "SiteUse", "TestMonth", "TestDay", "SurveyDue", "SurveyDue2", "SurveyFreq", "CityLimits", "UDF1", "UDF2", "UDF3", "UDF4", "UDF5", "UDF6", "UDF7", "UDF8", "UDF9", "UDF10", "UDF11", "UDF12", "UDF13", "UDF14", "UDF15", "UDF16", "UDF17", "UDF18", "UDF19", "UDF20", "UDF21", "UDF22"
    , "hAccountNum", "hSerialNum", "hMFG", "hModel", "hType", "hdevSize", "hMeter", "hHazardCat", "hLineSize", "hLocation", "hLocation2", "hRecommend", "hUDH1", "hUDH2", "hUDH3", "hUDH4", "hUDH5", "hUDH6", "hUDH7", "hUDH8", "hUDH9", "hUDH10", "hUDH11", "hTestDue", "hInstallDue"
    , "MCompany", "MContact", "MAddress", "MAddress2", "MCity", "MState", "Mzip", "MPhone", "MEmail"];
  HazardImportColumns = ["SiteID", "AccountNum", "SerialNum", "MFG", "Model", "Type", "devSize", "Meter", "HazardCat", "LineSize", "Location", "Location2", "Recommend", "UDH1", "UDH2", "UDH3", "UDH4", "UDH5", "UDH6", "UDH7", "UDH8", "UDH9", "UDH10", "UDH11", "TestDue", "InstallDue"];
  MailAddressImportColumns = ["MCompany", "MContact", "MAddress", "MAddress2", "MCity", "MState", "Mzip", "Phone", "Email"];
  constructor(private siteService: SiteService, private toasts: ToastNotifications) { }

  ngOnInit() {
  }
  //Import Hazard
  importHazard() {
    if (this.excelDataHaz.length === 0) {
      this.isErrorHaz = true;
      this.isErrordisableHaz = true;
      this.errorMsgHaz = 'Select a valid excel file with proper data';
      return;
    }
    this.siteService.importHazard(this.excelDataHaz).subscribe((res) => {
      console.log(res);
      this.responseHaz = res;
      if (res) {
        this.toasts.next({ text: 'Please check success and error tab', type: 'success' });
        this.myInputFileHaz.nativeElement.value = "";
        this.errorMsgHaz = '';
        this.isErrordisableHaz = true;
      } else {
        this.toasts.next({ text: 'Error Retry', type: 'danger' });
      }

    });
  }

  selectFileHaz(filesHaz) {
    if (filesHaz.length > 0) {
      this.fileHaz = filesHaz[0];
      this.excelDataHaz = [];
      this.errorMsgHaz = '';
      this.isErrorHaz = false;
      this.isErrordisableHaz = false;
      this.responseHaz = null;
      this.readExcelHaz(this.fileHaz);
    }
  }

  removeerrormgsHaz() {
    this.errorMsgHaz = '';
    this.isErrorHaz = false;
    this.isErrordisableHaz = false;
    this.myInputFileHaz.nativeElement.value = "";
  }

  readExcelHaz(fileHaz) {
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
      const columnsInExcel: any = data[0];
      if (columnsInExcel != undefined) {
        if (this.verifyHazardImportColumns(columnsInExcel)) {
          if (data.length === 1) {
            this.isErrorHaz = true;
            this.isErrordisableHaz = true;
            this.errorMsgHaz = 'Please enter value in column(s)';
            return;
          }
          for (let i = 1; i < data.length; i++) {
            const obj = {};
            for (let j = 0; j < columnsInExcel.length; j++) {
              const colName = columnsInExcel[j];
              const colValue = data[i][j];
              if (colName) {
                if (colValue !== undefined) {
                  obj[colName] = colValue;
                }
              }
            }
            this.excelDataHaz.push(obj);
          }
        }
      } else if (columnsInExcel == undefined) {
        this.isErrorHaz = true;
        this.isErrordisableHaz = true;
        this.errorMsgHaz = 'Please upload a valid file';
        return;
      }

    };
    reader.readAsBinaryString(fileHaz);
  }

  verifyHazardImportColumns(columns) {
    for (let i = 0; i < columns.length; i++) {
      const columnName = columns[i];
      if (columnName) {
        if (this.HazardImportColumns.indexOf(columnName) === -1) {
          this.isErrorHaz = true;
          this.isErrordisableHaz = true;
          this.errorMsgHaz = "Invalid Column '" + columnName + "', column name should match with template (case-senstive)";
          this.excelDataHaz = [];
          break;
        }
      }
    }
    return this.isErrorHaz ? false : true;
  }

  //Import Site
  importSite() {
    if (this.excelData.length === 0) {
      this.isError = true;
      this.isErrordisable = true;
      this.errorMsg = 'Select a valid excel file with proper data';
      return;
    }
    this.siteService.importSite(this.excelData).subscribe((res) => {
      console.log(res);
      this.response = res;
      if (res) {
        this.toasts.next({ text: 'Please check success and error tab', type: 'success' });
        if(this.myInputFile!=undefined){
          this.myInputFile.nativeElement.value = "";
          this.myInputFile.nativeElement.reset();
        }
        this.errorMsg = '';
        this.isErrordisable = true;
      } else {
        this.toasts.next({ text: 'Error Retry', type: 'danger' });
      }

    });
  }

  selectFile(files) {
    if (files.length > 0) {
      this.file = files[0];
      this.excelData = [];
      this.excelDataHaz = [];
      this.excelDataMailAdd = [];
      this.errorMsg = '';
      this.isError = false;
      this.isErrordisable = false;
      this.response = null;
      this.readExcel(this.file);
    }
  }

  removeerrormgs() {
    this.errorMsg = '';
    this.isError = false;
    this.isErrordisable = false;
    this.myInputFile.nativeElement.value = "";
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

      /* save site data */
      const data = (XLSX.utils.sheet_to_json(ws, { header: 1 }));
      const columnsInExcel: any = data[0];
      if (columnsInExcel != undefined) {
        if (this.verifySiteImportColumns(columnsInExcel)) {
          if (data.length === 1) {
            this.isError = true;
            this.isErrordisable = true;
            this.errorMsg = 'Please enter value in column(s)';
            return;
          }
          for (let i = 1; i < data.length; i++) {
            const obj = {};
            for (let j = 0; j < columnsInExcel.length; j++) {
              const colName = columnsInExcel[j];
              const colValue = data[i][j];
              if (colName) {
                if (colValue !== undefined) {
                  obj[colName] = colValue;
                }
              }
            }
            this.excelData.push(obj);
          }
        }
      } else if (columnsInExcel == undefined) {
        this.isError = true;
        this.isErrordisable = true;
        this.errorMsg = 'Please upload a valid file';
        return;
      }

      // /* grab second sheet */
      // const wsname2: string = wb.SheetNames[1];
      // const ws2: XLSX.WorkSheet = wb.Sheets[wsname2];

      // /* save hazard data */
      // const data2 = (XLSX.utils.sheet_to_json(ws2, { header: 1 }));
      // const columnsInExcel2: any = data2[0];
      // if (columnsInExcel2 != undefined) {
      //   if (this.verifyHazardImportColumns(columnsInExcel2)) {
      //     if (data2.length === 1) {
      //       this.isError = true;
      //       this.isErrordisable = true;
      //       this.errorMsg = 'Please enter value in column(s)';
      //       return;
      //     }
      //     for (let i = 1; i < data2.length; i++) {
      //       const obj = {};
      //       for (let j = 0; j < columnsInExcel2.length; j++) {
      //         const colName = columnsInExcel2[j];
      //         const colValue = data2[i][j];
      //         if (colName) {
      //           if (colValue !== undefined) {
      //             obj[colName] = colValue;
      //           }
      //         }
      //       }
      //       this.excelDataHaz.push(obj);
      //     }
      //   }
      // } else if (columnsInExcel2 == undefined) {
      //   this.isError = true;
      //   this.isErrordisable = true;
      //   this.errorMsg = 'Please upload a valid file';
      //   return;
      // }

      // /* grab third sheet */
      // const wsname3: string = wb.SheetNames[2];
      // const ws3: XLSX.WorkSheet = wb.Sheets[wsname3];

      // /* save mail data */
      // const data3 = (XLSX.utils.sheet_to_json(ws3, { header: 1 }));
      // const columnsInExcel3: any = data3[0];
      // if (columnsInExcel3 != undefined) {
      //   if (this.verifyMailAddressImportColumns(columnsInExcel3)) {
      //     if (data3.length === 1) {
      //       this.isError = true;
      //       this.isErrordisable = true;
      //       this.errorMsg = 'Please enter value in column(s)';
      //       return;
      //     }
      //     for (let i = 1; i < data3.length; i++) {
      //       const obj = {};
      //       for (let j = 0; j < columnsInExcel3.length; j++) {
      //         const colName = columnsInExcel3[j];
      //         const colValue = data3[i][j];
      //         if (colName) {
      //           if (colValue !== undefined) {
      //             obj[colName] = colValue;
      //           }
      //         }
      //       }
      //       this.excelDataMailAdd.push(obj);
      //     }
      //   }
      // } else if (columnsInExcel2 == undefined) {
      //   this.isError = true;
      //   this.isErrordisable = true;
      //   this.errorMsg = 'Please upload a valid file';
      //   return;
      // }

    };
    reader.readAsBinaryString(file);
  }

  verifySiteImportColumns(columns) {
    for (let i = 0; i < columns.length; i++) {
      const columnName = columns[i];
      if (columnName) {
        if (this.siteImportColumns.indexOf(columnName) === -1) {
          this.isError = true;
          this.isErrordisable = true;
          this.errorMsg = "Invalid Column '" + columnName + "', column name should match with template (case-senstive)";
          this.excelData = [];
          break;
        }
      }
    }
    return this.isError ? false : true;
  }

  verifyMailAddressImportColumns(columns) {
    for (let i = 0; i < columns.length; i++) {
      const columnName = columns[i];
      if (columnName) {
        if (this.MailAddressImportColumns.indexOf(columnName) === -1) {
          this.isError = true;
          this.isErrordisable = true;
          this.errorMsg = "Invalid Column '" + columnName + "', column name should match with template (case-senstive)";
          this.excelData = [];
          break;
        }
      }
    }
    return this.isError ? false : true;
  }

}
