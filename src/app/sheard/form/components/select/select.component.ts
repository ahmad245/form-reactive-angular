import { ChangeDetectionStrategy, Component, ElementRef, EventEmitter, HostListener, Input, OnInit, Output, Renderer2, TemplateRef, ViewChild, ViewContainerRef } from '@angular/core';
import { FieldConfig } from '../..';
import { MatSelect } from '@angular/material/select';
import { CdkDrag, CdkDragEnd, CdkDragMove } from '@angular/cdk/drag-drop';

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

  condition=false;

  search='';
  trans='';

  @Output() sendEvent=new EventEmitter();

  @ViewChild('select') select:MatSelect;
  @ViewChild('line') line:ElementRef;
  // @HostListener('document:mousemove', ['$event']) 
  // onMouseMove(e) {
  //   console.log(e);
  // }
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
  drop(event:CdkDragMove,svg){
    console.log(this.line);
    
  // this.trans=event.source.element.nativeElement.style.transform;
  //   if(event.pointerPosition.x >148 && event.pointerPosition.x <150){
  //        this.trans=event.source.element.nativeElement.style.transform
        
  //       }
     if (event.pointerPosition.x > 150 || event.pointerPosition.y > 150) {
  //   //  event.event.currentTarget.dispatchEvent('mouse')
  //   let tra=event.source.element.nativeElement.style.transform;
  //  let r=  tra.replace('translate3d','')
  //    .replace('(','')
  //    .replace(')','')
  //     console.log(r);
      
  //    // event.source.element.nativeElement.classList.add('ah') ;
  //   //  event.source.element.nativeElement.style.transform = `translate3d(150px, 1px, 0px) `
  //     event.source.element.nativeElement.style.left="150px";
  // //     event.pointerPosition.x=150;
  // //     event.pointerPosition.y=150;
  //      this.condition=true;
  // //     event.source.element.nativeElement.style.transform = 'none'      
  //      const source: any = event.source
  //      source._passiveTransform = { x: 0, y: 0 } // make it so new drag starts from same origin
  //     // console.log("drag stopped");
      
  //     // document.dispatchEvent(new Event('mouseup'));
   }else{
    this.condition=false;
    this.line.nativeElement.setAttribute('x1',event.pointerPosition.x );
    this.line.nativeElement.setAttribute('y1',event.pointerPosition.y );
  //  event.source.element.nativeElement.style.transform = `${this.trans}`
  //   console.log( event.source.element.nativeElement.style.transform);// distance: {x: -97, y: 0}
  //  console.log(event.pointerPosition.x);
  //  console.log(event.source.rootElementSelector);
   
   }
  // event.source.element.nativeElement.style.transform = "translate3d(83px, 1px, 0px); !important"
  

    
  }
 
}
