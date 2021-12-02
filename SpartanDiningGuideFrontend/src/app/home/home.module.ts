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
import {CardModule} from 'primeng/card';
import { MenuComponent } from './menu/menu.component';
import { DishComponent } from './dish/dish.component';
import { QuestionComponent } from './question/question.component';
import { AnswerComponent } from './answer/answer.component';
import { RatingComponent } from './rating/rating.component';



@NgModule({
  declarations: [
    HomeComponent,
    MenuComponent,
    DishComponent,
    QuestionComponent,
    AnswerComponent,
    RatingComponent
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
    CardModule,
    CommonModule
  ]
})
export class HomeModule { }
