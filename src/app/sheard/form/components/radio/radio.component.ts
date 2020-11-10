import { Component, OnInit, Input } from '@angular/core';
import { FormControl } from '@angular/forms';
import { FieldConfig } from '../..';

@Component({
  selector: 'app-radio',
  templateUrl: './radio.component.html',
  styleUrls: ['./radio.component.scss']
})
export class RadioComponent implements OnInit {
  @Input() field: FieldConfig;
  @Input() control ;
  @Input() id ;
  @Input() name ;
  @Input() value='' ;
  @Input() class ='';
  @Input() items=[];

  constructor() { }

  ngOnInit(): void {
  }

}
