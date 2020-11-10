import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormArray } from '@angular/forms';
import { FieldConfig } from '../sheard/form';
import { CardFormService } from './card-form.service';

@Component({
  selector: 'app-card-form',
  templateUrl: './card-form.component.html',
  styleUrls: ['./card-form.component.scss']
})
export class CardFormComponent implements OnInit {

  cartForm:FormGroup;
  nameConfig:FieldConfig;
  emailConfig:FieldConfig;
  skilllNameConfig:FieldConfig;
  proficiencyConfig:FieldConfig;
  experienceInYearConfig:FieldConfig;
  items=['bignner','intermediate','advanced'];
  checks = [
    {description: 'descr1', value: 'value1'},
    {description: "descr2", value: 'value2'},
    {description: "descr3", value: 'value3'}
  ];
  
  constructor(private fs :CardFormService){
  }
  ngOnInit(): void {
    this.cartForm=this.fs.creatForm();
    this.nameConfig=this.fs.nameConfig;
    this.emailConfig=this.fs.emailConfig;
    this.skilllNameConfig=this.fs.skilllNameConfig;
    this.proficiencyConfig=this.fs.proficiencyConfig;
    this.experienceInYearConfig=this.fs.experienceInYearConfig;
  }
  onloadData(){
    this.cartForm.patchValue({
      name:this.fs.get().name,
      email:this.fs.get().email,
   
      skills:{
        skillName:this.fs.get().skills.skillName,
        experienceInYear:this.fs.get().skills.experienceInYear,
        proficiency:this.fs.get().skills.proficiency,
      }
    })
  }

  onCheckChange(event) {
  
    
    const formArray: FormArray = this.cartForm.get('options') as FormArray;
    let eventValue;
    let isChecked;
    if(event.target){
       eventValue=event.target.value;
       isChecked=event.target.checked;
    }
    else{
      eventValue=event.source.value;
      isChecked=event.checked;
    }
  
    /* Selected */
    if(isChecked){
      // Add a new control in the arrayForm
      formArray.push(new FormControl(eventValue));
    }
    /* unselected */
    else{
      // find the unselected element
      let i: number = 0;
  
      formArray.controls.forEach((ctrl: FormControl) => {
        if(ctrl.value == eventValue) {
          // Remove the unselected element from the arrayForm
          formArray.removeAt(i);
          return;
        }
  
        i++;
      });
    }
  }

}
