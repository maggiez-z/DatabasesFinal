import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { RouterModule } from '@angular/router';
import { ButtonModule } from 'primeng/button';
import { DataViewModule } from 'primeng/dataview';
import { DropdownModule } from 'primeng/dropdown';
import { FormsModule } from '@angular/forms';
import { InputTextModule } from 'primeng/inputtext';
import {TabMenu, TabMenuModule} from 'primeng/tabmenu';
import {MenuItem} from 'primeng/api';



@NgModule({
  declarations: [
    HomeComponent
  ],
  imports: [
    RouterModule.forChild([{ path: '', component: HomeComponent }]),
    RouterModule,
    ButtonModule,
    DataViewModule,
    DropdownModule,
    FormsModule,
    InputTextModule,
    TabMenuModule,
    CommonModule
  ]
})
export class HomeModule { }
