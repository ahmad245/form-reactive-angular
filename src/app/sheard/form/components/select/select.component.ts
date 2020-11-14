import { Component, ElementRef, Input, OnInit, Renderer2, TemplateRef, ViewContainerRef } from '@angular/core';
import { FieldConfig } from '../..';
import { MatSelect } from '@angular/material/select';

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
  selected=false;

  search='';
  constructor(private renderer: Renderer2) { 
  
  }

  ngOnInit(): void {
   this.list=  this.items;
    
  }
  onInput(item:string){
  this.search=item;
    this.list= item ==='' ? this.items : this.list.filter(el=>el[this.optionItem].toLowerCase().includes(item.toLowerCase()));
  }
  matOPtion(item:string,select:MatSelect){
    if(this.search==='')  return false;
    // if(select.panel){
    // let allOption=  select.panel.nativeElement.querySelectorAll('.mat-selected');
    // if(allOption.length>0){
    //   console.log(allOption.length);
    //   allOption.forEach((el,i)=>{
    //     if(i!==0 ){
    //       console.log(el.innerText);
          
    //       el.classList.remove('mat-selected')
    //     }
    //   })
    // }
 // }
    
    return  item.toLowerCase().includes(this.search.toLowerCase());
     
  }
  focusInput(input:ElementRef){
    console.log(input);
   let element= this.renderer.selectRootElement(input);
   setTimeout(() => element.focus(), 0);
   // input.nativeElement.focus();
    
  }

}
