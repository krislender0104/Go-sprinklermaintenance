import { CreateUserService } from './create-user.service';
import { NgModule,CUSTOM_ELEMENTS_SCHEMA  } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { CreateUserComponent } from './create-user.component';
import { MatButtonModule, MatFormFieldModule, MatIconModule, MatInputModule, MatSelectModule, MatStepperModule, MatTreeModule  } from '@angular/material';
import {MatTabsModule} from '@angular/material/tabs';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatRadioModule} from '@angular/material/radio';
import { ReactiveFormsModule } from '@angular/forms';
const routes: Routes = [
  {
      path     : '**',
      component: CreateUserComponent,
      resolve:{
       user: CreateUserService
      }
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
    MatCheckboxModule,
    MatRadioModule,
    ReactiveFormsModule
  ],
  declarations: [CreateUserComponent],
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA
]
})
export class CreateUserModule {
  
 }


