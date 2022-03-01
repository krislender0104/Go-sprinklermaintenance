import { DataService } from './../shared/data.service';
import { Component, OnInit, Injectable } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import { NestedTreeControl } from '@angular/cdk/tree';
import {NgxPaginationModule} from 'ngx-pagination';
import { MatTreeNestedDataSource } from '@angular/material/tree';
import { BehaviorSubject, of as observableOf } from 'rxjs';
// import { jslinq } from 'jslinq';
import { Router } from '@angular/router';
import { LetterService } from './letter.service';
import { Letter } from './letter';
//import {sendmail} from 'email';
//var email 	= require("./path/to/emailjs/email");
//import {email} from 'emailjs/email';
//const fs = require('emailjs');

/**
 * Json node data with nested structure. Each node has a filename and a value or a list of children
 */
export class FileNode {
  children: FileNode[];
  filename: string;
  type: any;
}


/**
 * File database, it can build a tree structured Json object from string.
 * Each node in Json object represents a file or a directory. For a file, it has filename and type.
 * For a directory, it has filename and children (a list of files or directories).
 * The input will be a json object string, and the output is a list of `FileNode` with nested
 * structure.
 */
@Injectable()
export class FileDatabase {
  dataChange: BehaviorSubject<FileNode[]> = new BehaviorSubject<FileNode[]>([]);
  get data(): FileNode[] { return this.dataChange.value; }
  testdata: any;
  constructor() {
    this.initialize();
  }

  initialize() {
    // Parse the string to json object.
    // const dataObject = JSON.parse(TREE_DATA);

    // Build the tree nodes from Json object. The result is a list of `FileNode` with nested
    //     file node as children.
    //const data = this.buildFileTree(dataObject, 0);

    // Notify the change.
    //this.dataChange.next(data);
  }

  /**
   * Build the file structure tree. The `value` is the Json object, or a sub-tree of a Json object.
   * The return value is the list of `FileNode`.
   */
  buildFileTree(value: any, level: number): FileNode[] {
    let data: any[] = [];
    for (let k in value) {
      let v = value[k];
      let node = new FileNode();
      node.filename = `${k}`;
      if (v === null || v === undefined) {
        // no action
      } else if (typeof v === 'object') {
        node.children = this.buildFileTree(v, level);


      } else {
        node.type = v;
      }
      data.push(node);
    }
    return data;
  }
}
export interface Instance {
  id?: string;
  name?: string;
  type: string;
}
@Component({
  selector: 'app-letter',
  templateUrl: './letter.component.html',
  styleUrls: ['./letter.component.scss'],
  providers: [FileDatabase]
})
export class LetterComponent {
  sites: any;
  tests: any;
  testdata: any;
  req: any;
  res: any;
  letters: Array<Letter>;
  searchText = '';
  p_letter = 1;
  EditLetter(letter) {
    // debugger;
    //this.mail.sendmail(this.req,this.res);

    // var server 	= email.server.connect({
    //    user:    "username", 
    //    password:"password", 
    //    host:    "smtp.your-email.com", 
    //    ssl:     true
    // });
    // server.send({
    //     text:    "Test Mail", 
    //     from:    "you <kirankumarj@kbstechsolutions.com>", 
    //     to:      "someone <kirankumarj@kbstechsolutions.com>",
    //     //to:      "someone <kirankumarj@kbstechsolutions.com>, another <another@your-email.com>",
    //     //cc:      "else <else@your-email.com>",
    //     subject: "testing emailjs"
    //  }, function(err, message) { console.log(err || message); });  
    if (letter) {
      letter.IsCreate = false;
      this.dataService.data = letter;
    }
    else {
      letter = new Letter();
      letter.IsCreate = true;
      this.dataService.data = letter;
    }
    this.letterService.getTable().subscribe(data=>{
      this.dataService.tables = data;
      this.route.navigate(['/apps/letter/editletter']);
    }, err=>{}, ()=>{});
  }
  ngOnInit() {
    this.getLetter();
    //alert(this.name());
    //   var data1 = [
    //     { id: 1, name: "one", category: 'fruits', countries: ["Italy", "Austria"] },
    //     { id: 2, name: "two", category: 'vegetables', countries: ["Italy", "Germany"] },
    //     { id: 3, name: "three", category: 'vegetables', countries: ["Germany"] },
    //     { id: 4, name: "four", category: 'fruits', countries: ["Japan"] },
    //     { id: 5, name: "five", category: 'fruits', countries: ["Japan", "Italy"] }
    // ];

    var data = [
      {
        "clientId": 10,
        "siteId": 1062608,
        "HazId": 1799209,
        "TesterID": 837116,
        "TestID": 2278535,
        "InstalledDate": null,
        "TestStatus": "active"
      },
      {
        "clientId": 10,
        "siteId": 1319241,
        "HazId": 2061211,
        "TesterID": 843182,
        "TestID": 2278885,
        "InstalledDate": null,
        "TestStatus": "Active"
      }
    ]
    //     var queryObj = jslinq(data);
    // var result = queryObj
    //     .count();
    let list: any = [];

    let newlist: any = [];

    // var newsite =[{
    //   "sites": 
    //     { 
    //       "SiteID":string

    //     }
    // }]
    for (var j = 0; j < data.length; j++) {

      var featureName = data[j].clientId;
      //var value=data[j].VALUE; 
      // alert('featureName----'+featureName);
      //console.log(featureName);
      // newsite[j].sites[0].SiteID=data[j].siteId;
      var instance: Instance = <Instance>({
        id: data[j].clientId.toString(),
        name: 'name1',
        type: 'type1'

      });
      newlist.push(instance);
      //  console.log(instance)
      // alert('value----'+value);
    }
    // console.log(newlist);
    //alert(data[0].clientId);
    const usersJson: any[] = Array.of(data);
    data.forEach(element => {
      list.push(element);
    });
    let idx: any = 0;
    for (let result of list) {
      // console.log(result.HazId);

      //newlist.push("clientId:10,siteId:1062608");
      //idx=idx+1;
    }

    // for (var j=0; j < data.length; j++) {

    //   var featureName=data[j].clientId; 
    //   //var value=data[j].VALUE; 
    //       // alert('featureName----'+featureName);
    //       console.log(featureName);
    //  // alert('value----'+value);
    //   }

  };
  name() {
    //return "test"  
  }
  nestedTreeControl: NestedTreeControl<FileNode>;

  nestedDataSource: MatTreeNestedDataSource<FileNode>;

  constructor(database: FileDatabase, private route: Router, private dataService: DataService, private letterService: LetterService) {
    this.nestedTreeControl = new NestedTreeControl<FileNode>(this._getChildren);
    this.nestedDataSource = new MatTreeNestedDataSource();

    database.dataChange.subscribe(data => this.nestedDataSource.data = data);
  }

  private _getChildren = (node: FileNode) => { return observableOf(node.children); };

  hasNestedChild = (_: number, nodeData: FileNode) => { return !(nodeData.type); };


  getLetter() {
    this.letterService.getLetters().subscribe(data => { this.letters = data; }, err => { }, () => { });
  }
}

