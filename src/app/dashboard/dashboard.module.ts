import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { FormsModule } from '@angular/forms';
import { StringConcatComponent } from './string-concat/string-concat.component';
import { FirstStringComponent } from './first-string/first-string.component';
import { SecondStringComponent } from './second-string/second-string.component';
import { UserDetailsComponent } from './user-details/user-details.component';




@NgModule({
  declarations: [
    HomeComponent,
    StringConcatComponent,
    FirstStringComponent,
    SecondStringComponent,
    UserDetailsComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
  ],
  exports: [
    HomeComponent,
    StringConcatComponent,
    UserDetailsComponent,
  ]
})
export class DashboardModule { }
