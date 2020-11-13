import { Component, Input, OnInit } from '@angular/core';
import { FieldConfig } from '../..';

@Component({
  selector: 'app-select',
  templateUrl: './select.component.html',
  styleUrls: ['./select.component.scss']
})
export class SelectComponent implements OnInit {
  @Input() field: FieldConfig;
  @Input() control ;
  @Input() id ;
  @Input() name ;
  @Input() value='' ;
  @Input() class ='';
  @Input() items=[];
  @Input() optionValue;
  @Input() optionItem;


  constructor() { 
  
  }

  ngOnInit(): void {
    console.log(this.control);
    
  }

}
