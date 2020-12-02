import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormModule } from './form/form.module';
import { TableComponent } from './table/table.component';
import { DataPropertyGetterPipe } from './pipes/data-property-getter.pipe';




@NgModule({
  declarations: [TableComponent, DataPropertyGetterPipe],
  imports: [
    CommonModule,
    FormModule,
    
  ],
  exports:[
    FormModule,
    TableComponent,
    DataPropertyGetterPipe
    
  ]
})
export class SheardModule { }
