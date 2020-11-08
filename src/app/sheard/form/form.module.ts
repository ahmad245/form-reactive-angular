import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InputComponent } from './components/input/input.component';
import { CheckboxComponent } from './components/checkbox/checkbox.component';
import {MaterialModule} from '../../material/material.module';
import { ReactiveFormsModule } from '@angular/forms';
import { RadioComponent } from './components/radio/radio.component';




@NgModule({
  declarations: [InputComponent, CheckboxComponent, RadioComponent],
  imports: [
    CommonModule,
    MaterialModule,
    ReactiveFormsModule
    
  ],
  exports:[InputComponent,CheckboxComponent,RadioComponent,MaterialModule,ReactiveFormsModule]
})
export class FormModule { }
