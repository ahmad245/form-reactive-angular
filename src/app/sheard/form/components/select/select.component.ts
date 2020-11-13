import { Component, ElementRef, Input, OnInit, Renderer2 } from '@angular/core';
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
  list=[];

  search='';
  constructor(private renderer: Renderer2) { 
  
  }

  ngOnInit(): void {
   this.list=  this.items;
    
  }
  onClick(item:string){
  this.search=item;
    this.list= item ==='' ? this.items : this.list.filter(el=>el[this.optionItem].toLowerCase().includes(item.toLowerCase()));
  
    
  }
  matOPtion(item:string){

    if(this.search==='') return false;
     return item.toLowerCase().includes(this.search.toLowerCase())
  }
  focusInput(input:ElementRef){
    console.log(input);
   let element= this.renderer.selectRootElement(input);
   setTimeout(() => element.focus(), 0);
   // input.nativeElement.focus();
    
  }

}
