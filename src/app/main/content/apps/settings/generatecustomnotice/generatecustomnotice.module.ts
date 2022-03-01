import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { GeneratecustomnoticeComponent } from './generatecustomnotice.component';
import { MatDialogModule, MatButtonModule, MatFormFieldModule, MatIconModule, MatInputModule, MatSelectModule, MatStepperModule, MatToolbarModule } from '@angular/material';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { MatTabsModule } from '@angular/material/tabs';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { FuseSharedModule } from '@fuse/shared.module';
import { MatRadioModule } from '@angular/material/radio';
import { MatDividerModule } from '@angular/material/divider';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { NgxCoolDialogsModule } from 'ngx-cool-dialogs';
import { MyDialogComponent } from './my-dialog/my-dialog.component';
import { NgxPaginationModule } from 'ngx-pagination';
const routes: Routes = [
  {
    path: '**',
    component: GeneratecustomnoticeComponent,
  }
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    MatButtonModule,
    MatFormFieldModule,
    MatIconModule,
    MatInputModule,
    MatSelectModule,
    MatStepperModule,
    FormsModule,
    ReactiveFormsModule,
    MatTabsModule,
    MatCheckboxModule,
    FuseSharedModule,
    MatRadioModule,
    MatDividerModule,
    MatDatepickerModule,
    MatToolbarModule,
    MatDialogModule,
    MatButtonModule,
    NgxPaginationModule,
    NgxCoolDialogsModule.forRoot()
  ],
  entryComponents: [
    MyDialogComponent
  ],
  declarations: [GeneratecustomnoticeComponent, MyDialogComponent]
})
export class GeneratecustomnoticeModule { }
