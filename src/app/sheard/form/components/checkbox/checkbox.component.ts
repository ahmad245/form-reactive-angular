import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormArray } from '@angular/forms';
import { FieldConfig } from '../..';

@Component({
  selector: 'app-checkbox',
  templateUrl: './checkbox.component.html',
  styleUrls: ['./checkbox.component.scss']
})
export class CheckboxComponent implements OnInit {
  @Input() field: FieldConfig;
  @Input() control ;
  @Input() id ;
  @Input() name ;
  @Input() value='' ;
  @Input() class ='';
  @Input() items=[];
  @Input() item;
  

  @Output() sendEvent=new EventEmitter();
  constructor() { }

  ngOnInit(): void {
  }

  onCheckChange(event){
    
    this.sendEvent.emit(event);
  
  
  }

}
