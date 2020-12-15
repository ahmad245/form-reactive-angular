import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import {HttpClientModule} from '@angular/common/http';
import {ReactiveFormsModule} from '@angular/forms';

import {SheardModule} from './sheard/sheard.module';


import { NgxMaskModule, IConfig } from 'ngx-mask';
export const options: Partial<IConfig> | (() => Partial<IConfig>) = null;

import {NgxsModule} from '@ngxs/store';

import {NgxsLoggerPluginModule} from '@ngxs/logger-plugin';



import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { CardFormComponent } from './card-form/card-form.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ListComponent } from './components/list/list.component';
import { FormComponent } from './components/form/form.component';



@NgModule({
  declarations: [
    AppComponent,
    CardFormComponent,
    ListComponent,
    FormComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,

    NgxMaskModule,

    NgxsModule.forRoot(),
    NgxsLoggerPluginModule.forRoot(),
    

    SheardModule,

    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
