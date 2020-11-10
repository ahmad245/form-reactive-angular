import { Injectable } from '@angular/core';
import { FormGroup, FormControl, Validators, FormArray } from '@angular/forms';
import { FieldConfig, Employee } from '../sheard/form';
@Injectable({
  providedIn: 'root'
})
export class CardFormService {

  employee:Employee;
  nameConfig: FieldConfig = {
    name: 'name', inputType: 'text', label: 'Name',
    validations: [
      { name: 'required', message: 'must be required', validator: 'required' },
      { name: 'minlength', message: 'min length', validator: 'minLength' },
      { name: 'maxlength', message: 'max length', validator: 'minLength' },
    ]
  };
  emailConfig: FieldConfig = {
    name: 'email', inputType: 'email', label: 'Email',
    validations: [
      { name: 'required', message: 'must be required', validator: 'required' },
      { name: 'minlength', message: 'min length', validator: 'minLength' },
      { name: 'maxlength', message: 'max length', validator: 'minLength' },
    ]
  };

  skilllNameConfig: FieldConfig = {
    name: 'skillName', inputType: 'text', label: 'SkilllName',
    validations: [
      { name: 'required', message: 'must be required', validator: 'required' },
      { name: 'minlength', message: 'min length', validator: 'minLength' },
      { name: 'maxlength', message: 'max length', validator: 'minLength' },
    ]
  };

  experienceInYearConfig: FieldConfig = {
    name: 'experienceInYear', inputType: 'text', label: 'ExperienceInYear',
    validations: [
      { name: 'required', message: 'must be required', validator: 'required' },
      { name: 'minlength', message: 'min length', validator: 'minLength' },
      { name: 'maxlength', message: 'max length', validator: 'minLength' },
    ]
  };
  proficiencyConfig: FieldConfig = {
    name: 'proficiency', inputType: 'radio', label: 'Proficiency',value:'',
    validations: [
     
    ]
  };


  constructor() { }

  creatForm(): FormGroup {
    return new FormGroup({
      name: new FormControl('', [Validators.required, Validators.minLength(2), Validators.maxLength(20)]),
      email: new FormControl('', [Validators.required, Validators.minLength(2), Validators.maxLength(20)]),
     
      skills: new FormGroup({
        skillName: new FormControl('', [Validators.required, Validators.minLength(2), Validators.maxLength(20)]),
        experienceInYear: new FormControl('', [Validators.required, Validators.minLength(2), Validators.maxLength(20)]),
         proficiency: new FormControl('')
      }),
      options:new FormArray([])
    })
  }

  get(){
    this.employee={
      name:'ahmad',
      email:'ahmad@gamil.com',
      skills:{
        skillName:'developer',
        experienceInYear:'10',
        proficiency:'advanced'
      }
    }
    return this.employee;
  }
}
