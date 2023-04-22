import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HooksComponent } from './hooks/hooks.component';



@NgModule({
  declarations: [
    HooksComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    HooksComponent
  ]
  
})
export class DemoModule { }
