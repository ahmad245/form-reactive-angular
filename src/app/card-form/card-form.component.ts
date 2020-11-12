import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormArray } from '@angular/forms';
import { FieldConfig } from '../sheard/form';
import { CardFormService } from './card-form.service';
import { of } from 'rxjs';

@Component({
  selector: 'app-card-form',
  templateUrl: './card-form.component.html',
  styleUrls: ['./card-form.component.scss'],
})
export class CardFormComponent implements OnInit {
  cars = [
    { id: 1, value: 'Volvo' },
    { id: 2, value: 'Saab' },
    { id: 3, value: 'Opel' },
    { id: 4, value: 'Audi' },
  ];
  cartForm: FormGroup;
  items = ['bignner', 'intermediate', 'advanced'];
  answer = 'option1';
  checkAll ='all';
  checkedList=[];
  config:{[key:string]:FieldConfig}={};
  answersList=[];


  constructor(private fs: CardFormService) {
  }
  ngOnInit(): void {
    of(this.fs.get()).subscribe((observe) => {
      this.cartForm = this.fs.creatForm(this.fs.setOptionsWithArray.bind(this.fs, this.fs.get().answers, this.fs.get().checks));
      this.checkedList=observe.checks;
      this.config = this.fs.config;
      this.onloadData(observe);
    })

  }
  onloadData(objData) {
    this.cartForm.patchValue({
      name: objData.name,
      email: objData.email,
      skills: {
        skillName: objData.skills.skillName,
        experienceInYear: objData.skills.experienceInYear,
        proficiency: objData.skills.proficiency,
      },
    });
  }
  onCheckChange(event) {
    let eventValue;
    let isChecked;
    if (event.target) {
      eventValue = event.target.value;
      isChecked = event.target.checked;
    } else {
      eventValue = event.source.value;
      isChecked = event.checked;
    }
    /* Selected */
    if (isChecked) {
      
      this.selectedList.push(eventValue);
    } else {
      this.selectedList.forEach((el, i) => {
        if (el == eventValue) {
          this.selectedList.splice(i, 1)
          return;
        }
      });
    }
    if(this.selectedList.length===0){
      this.cartForm.get('optionsAll').setValue(false);
    }
    if(this.selectedList.length===this.checkedList.length){
      this.cartForm.get('optionsAll').setValue(true);
    }
  }

  onCheckChangeAll(event) {
    
    const formArray: FormArray = this.cartForm.get('options') as FormArray;
    let eventValue;
    let isChecked;
    if (event.target) {
      eventValue = event.target.value;
      isChecked = event.target.checked;
    } else {
      eventValue = event.source.value;
      isChecked = event.checked;
    }
    if (isChecked) {
      formArray.controls.forEach((controll)=>{
        controll.setValue(true);
      });
      this.selectedList=[];
      this.selectedList=[...this.checkedList];

    }else{
      formArray.controls.forEach((controll)=>{
        controll.setValue(false);
      })
      this.selectedList=[];
    }
    console.log('checkedList',this.checkedList);
    console.log('selectedList',this.selectedList);
    
  }
  get options(): FormArray { return this.cartForm.get('options') as FormArray; }
  get checks() { return this.fs.checks;}
  get selectedList() {return this.fs.selectedList;}
  set selectedList(list){this.fs.selectedList=list; }


  get questionOptions() {
    return  (this.cartForm.get('questionOptions') as FormArray).controls;
  }
  addOptions(){
    (this.cartForm.get('questionOptions') as FormArray).push(this.fs.getGroupOtions())
  }
  onCheckAnswer(event){
    let eventValue;
    let isChecked;
    if (event.target) {
      eventValue = event.target.value;
      isChecked = event.target.checked;
    } else {
      eventValue = event.source.value;
      isChecked = event.checked;
    }
    /* Selected */
    if (isChecked) {
      
      this.answersList.push(eventValue);
    } else {
      this.answersList.forEach((el, i) => {
        if (el == eventValue) {
          this.answersList.splice(i, 1)
          return;
        }
      });
    }
    console.log(this.answersList);
    
  }
  onClickCheck( event,value){
     if(value==''){
       event.preventDefault();
       return;
     }
  }
}
