import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [
    HomeComponent
  ],
  imports: [
    RouterModule.forChild([{ path: '', component: HomeComponent }]),
    RouterModule,
    CommonModule
  ]
})
export class HomeModule { }
