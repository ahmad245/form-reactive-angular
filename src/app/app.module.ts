import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import {SheardModule} from './sheard/sheard.module';


import { NgxMaskModule, IConfig } from 'ngx-mask';
export const options: Partial<IConfig> | (() => Partial<IConfig>) = null;



import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { CardFormComponent } from './card-form/card-form.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';



@NgModule({
  declarations: [
    AppComponent,
    CardFormComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,

    NgxMaskModule,
    

    SheardModule,

    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
