import { ChangeDetectionStrategy, Component, ElementRef, EventEmitter, Input, OnInit, Output, Renderer2, TemplateRef, ViewChild, ViewContainerRef } from '@angular/core';
import { FieldConfig } from '../..';
import { MatSelect } from '@angular/material/select';

@Component({
  selector: 'app-select',
  templateUrl: './select.component.html',
  styleUrls: ['./select.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
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

  @Output() sendEvent=new EventEmitter();

  @ViewChild('select') select:MatSelect;
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
  let allOPtion=  this.select.panel?.nativeElement.querySelectorAll('.mat-option')
    if(allOPtion?.length >1) return false;
    return  item.toLowerCase().includes(this.search.toLowerCase());
     
  }
  focusInput(input:ElementRef){
   
   let element= this.renderer.selectRootElement(input);
   setTimeout(() => element.focus(), 0);
   // input.nativeElement.focus();
    
  }

  onChange(event){ 
    this.sendEvent.emit(event);
  }
  ngAfterViewInit(): void {
    //Called after ngAfterContentInit when the component's view has been initialized. Applies to components only.
    //Add 'implements AfterViewInit' to the class.
    
    
  }
  ngAfterViewChecked(): void {
    //Called after every check of the component's view. Applies to components only.
    //Add 'implements AfterViewChecked' to the class.
  let allOption=  this.select.panel?.nativeElement.querySelectorAll('.mat-option')
 
  // if(allOption?.length>0){
  //     allOption.forEach((el,i)=>{     
  //       if(i!==0){
  //         el.classList.remove('mat-selected')
  //       }
           
                                
  //     })
  //   }
  }
  // we will set x,y for line as distance: {x: -97, y: 0} of event
  //cdkDragMoved emit event evry pixl
  drop(event){
    console.log(event);// distance: {x: -97, y: 0}
    
  }

}
