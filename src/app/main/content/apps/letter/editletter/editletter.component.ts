import { debug } from 'util';
import { Router } from '@angular/router';
import { Letter } from './../letter';
import { DataService } from './../../shared/data.service';
import { Component, OnInit, Inject, AfterViewInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import { EditletterService } from './editletter.service';
import { LetterComponent } from '../letter.component';

@Component({
  selector: 'app-editletter',
  templateUrl: './editletter.component.html',
  styleUrls: ['./editletter.component.scss']
})
export class EditletterComponent implements OnInit {
  
  editorConfig = {
    editable: true,
    spellcheck: true,
    toolbar: [
      ["bold", "italic", "underline", "strikeThrough", "superscript", "subscript"],
      ["fontName", "fontSize", "color"],
      ["justifyLeft", "justifyCenter", "justifyRight", "justifyFull", "indent", "outdent"],
      ["cut", "copy", "delete", "removeFormat", "undo", "redo"],
      ["paragraph", "blockquote", "removeBlockquote", "horizontalLine", "orderedList", "unorderedList"]
      //,["link", "unlink", "image", "video"]
    ],
    translate: 'no'
  };
  service: any;
  
  letter: Letter;
  tables: Array<any>;
  properties: Array<any>;
  qModule: any;
  error:any;
 

  constructor(private dataService: DataService, private editLetterService: EditletterService, private route: Router) {
    this.letter = new Letter();

    this.tables = (dataService.tables).map(function (item) {
      return item['TableName'];
    });
    let _this = this;
    this.qModule = {

      // {
      //   container: [['bold', 'italic'], ['customControl']],
      //   handlers: {
      //     'customControl': () => { console.log('customControl was clicked') }
      //   }
      toolbar: {
        container: [

          ['bold', 'italic', 'underline', 'strike'],        // toggled buttons
          ['blockquote', 'code-block'],

          [{ 'header': 1 }, { 'header': 2 }],               // custom button values
          [{ 'list': 'ordered' }, { 'list': 'bullet' }],
          [{ 'script': 'sub' }, { 'script': 'super' }],      // superscript/subscript
          [{ 'indent': '-1' }, { 'indent': '+1' }],          // outdent/indent
          [{ 'direction': 'rtl' }],                         // text direction

          [{ 'size': ['small', false, 'large', 'huge'] }],  // custom dropdown
          [{ 'header': [1, 2, 3, 4, 5, 6, false] }],

          [{ 'color': [] }, { 'background': [] }],          // dropdown with defaults from theme
          [{ 'font': [] }],
          [{ 'align': [] }],

          ['clean']                                         // remove formatting button

          //,['link', 'image', 'video']                     // link and image, video
          , [{ 'table': this.tables }]
          , [{ 'placeholder': [] }]
        ]
        , handlers: {
          // "placeholder": function (value) {
          //   debugger;
          //   if (value) {
          //     const cursorPosition = this.quill.getSelection().index;
          //     this.quill.insertText(cursorPosition, value);
          //     this.quill.setSelection(cursorPosition + value.length);
          //   }
          // },
          "table": function (value) {
            if (value) {
              _this.getPropByTable(value, this.quill);
              document.querySelector('.ql-table .ql-picker-label').innerHTML = value;
              // const cursorPosition = this.quill.getSelection().index;
              // //this.quill.insertText(cursorPosition, value);
              // this.quill.setSelection(cursorPosition + value.length);
            }
          }
        }
      }

    };
    //this.getTable();
  }
  toolbarClick(event) {
  }
  editorInit() {
    // console.log('testing letter edit------->');
    // quill.getModule('toolbar').addHandler('placeholder', this.placeholder.bind(this));
    // quill.focus();
  }
  placeholder(value) {

    if (value) {
      // const cursorPosition = this.quill.getSelection().index;
      // this.quill.insertText(cursorPosition, value);
      // this.quill.setSelection(cursorPosition + value.length);
    }
  }

  setQmodules() {

  }

  getTable() {
    //let data = ["Table1", "Table2"];

    this.editLetterService.getTable().subscribe(data => {
      // var names = items.map(function(item) {
      //   return item['name'];
      // });


      this.tables = data.map(function (item) {
        return item['TableName'];
      });




    }, err => { }, () => { });
  }
  removeElementsByClass(className) {
    var elements = document.getElementsByClassName(className);
    while (elements.length > 0) {
      elements[0].parentNode.removeChild(elements[0]);
    }
  }
  removeElementsByTag(className) {
    var elements = document.getElementsByTagName(className);
    while (elements.length > 0) {
      elements[0].parentNode.removeChild(elements[0]);
    }
  }
  getPropByTable(table, quill) {

    //this.properties = ["|Table1.Email|", "|Table1.Name|"];
    this.editLetterService.getPropByTable(table).subscribe(data => {
      this.properties = data.map(function (item) {
        return item['ColumnName'];
      });
      this.removeElementsByClass('.ql-placeholder .ql-picker-item');
      var elements = document.getElementsByClassName("ql-placeholder")[0].getElementsByClassName("ql-picker-item");
      while (elements.length > 0) {
        elements[0].parentNode.removeChild(elements[0]);
      }
      document.getElementsByClassName("ql-placeholder")[1].innerHTML = "";
      this.properties.forEach(item => {
        document.querySelector('.ql-placeholder .ql-picker-options').innerHTML += "<span tabindex=\"0\" role=\"button\" class=\"ql-picker-item\" data-value=" + item + ">" + item + "</span>";
        document.getElementsByClassName("ql-placeholder")[1].innerHTML += "<option value=" + item + "></option>";
      });

      const placeholderPickerItems = Array.prototype.slice.call(document.querySelectorAll('.ql-placeholder .ql-picker-item'));
      placeholderPickerItems.forEach(
        item => {
          item.textContent = item.dataset.value;
          item.addEventListener('click', function (value) {
            if (value) {
              quill.focus();
              const cursorPosition = quill.getSelection().index;
              quill.insertText(cursorPosition, '[' + value.currentTarget.textContent + ']');
              quill.setSelection(cursorPosition + value.currentTarget.textContent.length);
              document.querySelector('.ql-placeholder .ql-picker-label').innerHTML = value.currentTarget.textContent;
              var doc = <any>document.getElementsByClassName("ql-editor")[0];
              doc.click();
            }
          });
        }
      );
      if (document.querySelector('.ql-placeholder .ql-picker-label').textContent.trim() == "") {
        document.querySelector('.ql-placeholder .ql-picker-label').innerHTML = 'Select Placeholder ' + document.querySelector('.ql-placeholder .ql-picker-label').innerHTML;
      }
    }, err => { }, () => { });



  }

  // this.editLetterService.getPropByTable(table).subscribe(data => {
  //   this.properties = data;
  //   const placeholderPickerItems = Array.prototype.slice.call(document.querySelectorAll('.ql-placeholder .ql-picker-item'));
  //   placeholderPickerItems.forEach(item => item.textContent = item.dataset.value);
  //   document.querySelector('.ql-placeholder .ql-picker-label').innerHTML = 'Select Placeholder ' + document.querySelector('.ql-placeholder .ql-picker-label').innerHTML;
  // }, err => { }, () => { });


  ngOnInit() {
    this.letter = this.dataService.data;
    
    let str : string =this.letter.Body;
    if(str!=null){
    let startIndex = -1;
    let endIndex = -1;
    for (let i = 0; i < str.length; i++) {
      if (str.charAt(i) == '|') {
        if (startIndex == -1) {
          startIndex = i;
        }
        if (endIndex == -1 && startIndex > -1 && startIndex != i) {
          endIndex = i;
        }
        if (endIndex > -1 && startIndex > -1) {
          var foundStr = str.substring(startIndex, endIndex + 1);
          var toReplace = '[' + foundStr.substring(1, foundStr.length - 1) + ']';
          str = str.replace(foundStr, toReplace);
          startIndex = -1;
          endIndex = -1;
        }
      }
    }
  }
    this.letter.Body = str;
  
    // this.tables = this.dataService.tables;
    // debugger;
  }

  ngAfterViewInit() {


    const placeholderPickerItems = Array.prototype.slice.call(document.querySelectorAll('.ql-table .ql-picker-item'));
    placeholderPickerItems.forEach(item => item.textContent = item.dataset.value);
    document.querySelector('.ql-table .ql-picker-label').innerHTML = 'Select Tables' + document.querySelector('.ql-table .ql-picker-label').innerHTML;
  }

  parser(istr) {
    let found = "";          // an array to collect the strings that are found
    // rxp = /{([^}]+)}/g,
    let str: string = istr;
    // let curMatch;
    const rxp: RegExp = /\[(.*?)\]/;
    const words = str.match(/[^[\]]+(?=])/g);
    if (words) {
      words.forEach(word => {
        found += (word) + ",";
      });
    }
    // while (curMatch = rxp.exec(str)) {
    //   console.log(curMatch[1]);
    //   found += (curMatch[1]) + ",";
    // }
    return found;
  }

  save() {
    if(this.letter.Body!=null){
    this.letter.SelectedDefinition = this.parser(this.letter.Body);
    let str: string = this.letter.Body;
    this.letter.Body = str.replace(/\[/g, '|').replace(/]/g, '|');
    // console.log(this.letter);
    this.editLetterService.save(this.letter).subscribe(data => {
      this.route.navigate(['/apps/letter']);
    }, err => { }, () => { });
  }else{
    this.error=true;
  }
  }
}
