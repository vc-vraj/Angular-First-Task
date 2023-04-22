import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { FormsModule } from '@angular/forms';
import { StringConcatComponent } from './string-concat/string-concat.component';



@NgModule({
  declarations: [
    HomeComponent,
    StringConcatComponent
  ],
  imports: [
    CommonModule,
    FormsModule
  ],
  exports: [
    HomeComponent,
    StringConcatComponent
  ]
})
export class DashboardModule { }
