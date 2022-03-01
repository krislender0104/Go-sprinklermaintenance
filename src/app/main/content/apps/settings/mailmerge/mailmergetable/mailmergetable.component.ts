import { Component, OnInit, ViewChild } from '@angular/core';
import {MatPaginator, MatSort, MatTableDataSource} from '@angular/material';

export interface PeriodicElement {
  ncode:string;
  lettertype: string;
  systemname: string;
  systemabbreviation: string;
  imagealt: string;
  systemstate: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {ncode: '1', lettertype: 'Hydrogen', systemname: '1.0079', systemabbreviation: '1.0079', imagealt: 'H', systemstate: 'H'},
  {ncode: '2', lettertype: 'Hydrogen', systemname: '1.0079', systemabbreviation: '1.0079', imagealt: 'H', systemstate: 'H'},
  {ncode: '3', lettertype: 'Hydrogen', systemname: '1.0079', systemabbreviation: '1.0079', imagealt: 'H', systemstate: 'H'},
  {ncode: '4', lettertype: 'Hydrogen', systemname: '1.0079', systemabbreviation: '1.0079', imagealt: 'H', systemstate: 'H'},
  {ncode: '5', lettertype: 'Hydrogen', systemname: '1.0079', systemabbreviation: '1.0079', imagealt: 'H', systemstate: 'H'},
  {ncode: '6', lettertype: 'Hydrogen', systemname: '1.0079', systemabbreviation: '1.0079', imagealt: 'H', systemstate: 'H'},
  {ncode: '7', lettertype: 'Hydrogen', systemname: '1.0079', systemabbreviation: '1.0079', imagealt: 'H', systemstate: 'H'},
  {ncode: '8', lettertype: 'Hydrogen', systemname: '1.0079', systemabbreviation: '1.0079', imagealt: 'H', systemstate: 'H'},
  {ncode: '9', lettertype: 'Hydrogen', systemname: '1.0079', systemabbreviation: '1.0079', imagealt: 'H', systemstate: 'H'},
  {ncode: '10', lettertype: 'Hydrogen', systemname: '1.0079', systemabbreviation: '1.0079', imagealt: 'H', systemstate: 'H'},
  {ncode: '11', lettertype: 'Hydrogen', systemname: '1.0079', systemabbreviation: '1.0079', imagealt: 'H', systemstate: 'H'},
  {ncode: '12', lettertype: 'Hydrogen', systemname: '1.0079', systemabbreviation: '1.0079', imagealt: 'H', systemstate: 'H'},
  {ncode: '13', lettertype: 'Hydrogen', systemname: '1.0079', systemabbreviation: '1.0079', imagealt: 'H', systemstate: 'H'},
  {ncode: '14', lettertype: 'Hydrogen', systemname: '1.0079', systemabbreviation: '1.0079', imagealt: 'H', systemstate: 'H'},
  {ncode: '15', lettertype: 'Hydrogen', systemname: '1.0079', systemabbreviation: '1.0079', imagealt: 'H', systemstate: 'H'},
  {ncode: '16', lettertype: 'Hydrogen', systemname: '1.0079', systemabbreviation: '1.0079', imagealt: 'H', systemstate: 'H'},
  {ncode: '17', lettertype: 'Hydrogen', systemname: '1.0079', systemabbreviation: '1.0079', imagealt: 'H', systemstate: 'H'},
  {ncode: '18', lettertype: 'Hydrogen', systemname: '1.0079', systemabbreviation: '1.0079', imagealt: 'H', systemstate: 'H'},
  {ncode: '19', lettertype: 'Hydrogen', systemname: '1.0079', systemabbreviation: '1.0079', imagealt: 'H', systemstate: 'H'},
  {ncode: '20', lettertype: 'Hydrogen', systemname: '1.0079', systemabbreviation: '1.0079', imagealt: 'H', systemstate: 'H'},
];

@Component({
  selector: 'app-mailmergetable',
  templateUrl: './mailmergetable.component.html',
  styleUrls: ['./mailmergetable.component.scss']
})
export class MailmergetableComponent implements OnInit {
  displayedColumns: string[] = ['ncode', 'lettertype', 'systemname', 'systemabbreviation', 'imagealt', 'systemstate'];
  dataSource = new MatTableDataSource<PeriodicElement>(ELEMENT_DATA);
 
    constructor() { }

  @ViewChild(MatSort) sort: MatSort;
  @ViewChild(MatPaginator) paginator: MatPaginator;

  	ngOnInit() {
  		this.dataSource.sort = this.sort;
  		this.dataSource.paginator = this.paginator
  	}

}
