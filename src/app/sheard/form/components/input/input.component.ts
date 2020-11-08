import { Component, OnInit, Input } from '@angular/core';
import { FieldConfig } from '../..';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.scss']
})
export class InputComponent implements OnInit {
  @Input() field: FieldConfig;
  @Input() control :FormControl;
  @Input() id ;
  @Input() name ;
  @Input() value ;
  @Input() class ;

  constructor() { }

  ngOnInit(): void {
  }
  checkRequired(){
    return  this.control.invalid
  }

}
