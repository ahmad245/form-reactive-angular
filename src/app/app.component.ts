import { Overlay } from '@angular/cdk/overlay';
import { Component, ElementRef, ViewChild } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { MatMenuTrigger } from '@angular/material/menu';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
 
  @ViewChild(MatMenuTrigger) trigger: MatMenuTrigger;
  title = 'ReactiveFormReusable';
  hovered=false;
  constructor(private el: ElementRef,private overlay: Overlay){
   
  }
  ngOnInit(): void {
 
   console.log(this.trigger);
   
  
  }
  onClick(){
   
    this.trigger.closeMenu();
    this.hovered=true;
    setTimeout(()=>{
      this.trigger.openMenu();
    },400)
    
  }
  onClickBody(){
    this.hovered=false;
  }
  menuClosed(){
    this.hovered=false;
  }
  menuOpened(){
   
  }
 
}
