import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InputComponent } from './components/input/input.component';
import { CheckboxComponent } from './components/checkbox/checkbox.component';
import {MaterialModule} from '../../material/material.module';
import { ReactiveFormsModule } from '@angular/forms';
import { RadioComponent } from './components/radio/radio.component';
import { SelectComponent } from './components/select/select.component';
import { NgSelectModule } from '@ng-select/ng-select';
import { StarRaterComponent } from './components/star-rater/star-rater.component';



@NgModule({
  declarations: [InputComponent, CheckboxComponent, RadioComponent, SelectComponent, StarRaterComponent],
  imports: [
    CommonModule,
    MaterialModule,
    ReactiveFormsModule,
    NgSelectModule
    
  ],
  exports:[InputComponent,CheckboxComponent,RadioComponent,MaterialModule,SelectComponent,StarRaterComponent,ReactiveFormsModule,NgSelectModule]
})
export class FormModule { }
