import { Injectable } from '@angular/core';
import { FormGroup, FormControl, Validators, FormArray, ValidatorFn, AsyncValidatorFn } from '@angular/forms';
import { FieldConfig, Employee } from '../sheard/form';
@Injectable({
  providedIn: 'root'
})
export class CardFormService {

  employee:Employee;
  config :{[key:string]:FieldConfig} ={
    nameConfig: {
      name: 'name', inputType: 'text', label: 'Name',
      validations: [
        { name: 'required', message: 'must be required', validator: 'required' },
        { name: 'minlength', message: 'min length', validator: 'minLength' },
        { name: 'maxlength', message: 'max length', validator: 'minLength' },
      ]
    },
    emailConfig: {
      name: 'email', inputType: 'email', label: 'Email',
      validations: [
        { name: 'required', message: 'must be required', validator: 'required' },
        { name: 'minlength', message: 'min length', validator: 'minLength' },
        { name: 'maxlength', message: 'max length', validator: 'minLength' },
      ]
    },
  
    skilllNameConfig: {
      name: 'skillName', inputType: 'text', label: 'SkilllName',
      validations: [
        { name: 'required', message: 'must be required', validator: 'required' },
        { name: 'minlength', message: 'min length', validator: 'minLength' },
        { name: 'maxlength', message: 'max length', validator: 'minLength' },
      ]
    },
  
    experienceInYearConfig: {
      name: 'experienceInYear', inputType: 'number', label: 'ExperienceInYear',
      validations: [
        { name: 'required', message: 'must be required', validator: 'required' },
        { name: 'min', message: 'min length', validator: 'min' },
        { name: 'max', message: 'max length', validator: 'max' },
      ]
    },
    proficiencyConfig: {
      name: 'proficiency', inputType: 'radio', label: 'Proficiency',value:'',
      validations: [
       
      ]
    },
    questionConfig: {
      name: 'name', inputType: 'text', label: 'question',
      validations: [
        { name: 'required', message: 'must be required', validator: 'required' },
        { name: 'minlength', message: 'min length', validator: 'minLength' },
        { name: 'maxlength', message: 'max length', validator: 'minLength' },
      ]
    },
    optionTextConfig: {
      name: 'optionText', inputType: 'text',
      validations: [
        { name: 'required', message: 'must be required', validator: 'required' },
        { name: 'minlength', message: 'min length', validator: 'minLength' },
        { name: 'maxlength', message: 'max length', validator: 'minLength' },
      ]
    },
  }
  
  selectedList = [];
  checks = [
    'option1',
    'option2',
    'option3',
    'option4'
  ];
  answersList=[];

  constructor() { }

  creatForm(cb?): FormGroup {
    return new FormGroup({
      name: new FormControl('', [Validators.required, Validators.minLength(2), Validators.maxLength(20)]),
      email: new FormControl('', [Validators.required, Validators.minLength(2), Validators.maxLength(20)]),
     
      skills: new FormGroup({
        skillName: new FormControl('', [Validators.required, Validators.minLength(2), Validators.maxLength(20)]),
        experienceInYear: new FormControl('', [Validators.required, Validators.min(0), Validators.max(50)]),
         proficiency: new FormControl('')
      }),
      options:this.initOptions(),
      selectItem:new FormControl(1),
      optionsAll:new FormControl(),
      question:new FormControl(''),
      questionOptions:new FormArray([
        this.getGroupOtions(),
        this.getGroupOtions()
      ],minSelectedCheckboxes(1,'checkOption'))
    })
  }

  getGroupOtions(){
    return  new FormGroup({
      checkOption:new FormControl(false),
      optionText:new FormControl('',[Validators.required, Validators.minLength(2), Validators.maxLength(20)])
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
      },
      checks :[
        'option1',
        'option2',
        'option3',
        'option4'
      ],
      answers:['option1','option4'],
      questionOptions:[
        'option 1 for question q',
        'option 2 for question q',
        'option 3 for question q'
      ],
      questionOptionsAnswer:'option 2 for question q'
    }
    return this.employee;
  }

  initOptions():FormArray {
    const arr = this.checks.map((el) => {
      return new FormControl(false);
    })
    return new FormArray(arr);
  }
  setOptions(value):FormArray{
    this.selectedList=[];
    const arr = this.checks.map((el) => {
      if(el===value){
        this.selectedList.push(value);
        return new FormControl(true);
      }
      return new FormControl(false);
    })
    return new FormArray(arr);
  }
  setOptionsWithArray(values:string[],data:any[],validationFns:ValidatorFn[]=[minSelectedCheckboxes()]):FormArray{
    this.selectedList=[];
    const arr = data.map((el) => {
      let element=values.find(value=>value===el)
      if(element){
        this.selectedList.push(element);
        return new FormControl(true);
      }
      return new FormControl(false);
    })
    return new FormArray(arr,[...validationFns]);
  }

  setQuestionOption(answer){
    this.answersList=[]
     const arr=this.employee.questionOptions.
     map((option)=>{
       if(answer===option){
         this.answersList.push(option);
       }
       return new FormGroup({
        checkOption:new FormControl(answer===option),
        optionText:new FormControl(option,[Validators.required, Validators.minLength(2), Validators.maxLength(20)])
       })
     })
     return new FormArray(arr);
  }
}

function minSelectedCheckboxes(min = 1,formControl='') {
  const validator: ValidatorFn = (formArray: FormArray) => {
    const totalSelected = formArray.controls
      // get a list of checkbox values (boolean)
      .map(control => formControl !=='' ? control.value[formControl]: control.value)
      // total up the number of checked checkboxes
      .reduce((prev, next) => next ? prev + next : prev, 0);

    // if the total is not greater than the minimum, return the error message
    return totalSelected >= min ? null : { minSelect: true };
  };

  return validator;
}


