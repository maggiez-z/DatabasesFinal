import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';
import {InputTextModule} from 'primeng/inputtext';


@NgModule({
  declarations: [
    LoginComponent
  ],
  imports: [
    CommonModule,
    InputTextModule
  ],
  exports : [
    LoginComponent
  ]
})
export class SharedModule { }
