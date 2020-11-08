import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormModule } from './form/form.module';




@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    FormModule,
    
  ],
  exports:[
    FormModule,
    
  ]
})
export class SheardModule { }
