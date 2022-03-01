import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { AngularDualListBoxModule } from 'angular-dual-listbox';

import {MatCheckboxModule} from '@angular/material/checkbox';
import { CustomListboxComponent } from './custom-listbox.component';

@NgModule({
	imports: [
		CommonModule,
		FormsModule,
MatCheckboxModule
	],
	declarations: [
		CustomListboxComponent
	],
	exports: [
		CustomListboxComponent
	]
})
export class CustomListboxModule { }
