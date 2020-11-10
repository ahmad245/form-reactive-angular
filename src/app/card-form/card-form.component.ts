import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormArray } from '@angular/forms';
import { FieldConfig } from '../sheard/form';
import { CardFormService } from './card-form.service';

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
  nameConfig: FieldConfig;
  emailConfig: FieldConfig;
  skilllNameConfig: FieldConfig;
  proficiencyConfig: FieldConfig;
  experienceInYearConfig: FieldConfig;
  items = ['bignner', 'intermediate', 'advanced'];
  checks = [
    { description: 'descr1', value: 'value1' },
    { description: 'descr2', value: 'value2' },
    { description: 'descr3', value: 'value3' },
  ];
  checkAll={
    description: 'checkAll', value: 'all' }
  ;

  constructor(private fs: CardFormService) {
    this.cartForm = this.fs.creatForm();
    //this.getOptions();
  }
  ngOnInit(): void {
   
    this.nameConfig = this.fs.nameConfig;
    this.emailConfig = this.fs.emailConfig;
    this.skilllNameConfig = this.fs.skilllNameConfig;
    this.proficiencyConfig = this.fs.proficiencyConfig;
    this.experienceInYearConfig = this.fs.experienceInYearConfig;
  }
  onloadData() {
    this.cartForm.patchValue({
      name: this.fs.get().name,
      email: this.fs.get().email,
      options:['value3'],

      skills: {
        skillName: this.fs.get().skills.skillName,
        experienceInYear: this.fs.get().skills.experienceInYear,
        proficiency: this.fs.get().skills.proficiency,
      },
    });
  }

  get options(): FormArray { return this.cartForm.get('options') as FormArray; }

  onCheckChange(event) {
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

    /* Selected */
    if (isChecked) {
      // Add a new control in the arrayForm
      formArray.push(new FormControl(eventValue));
    } else {
    /* unselected */
      // find the unselected element
      let i: number = 0;

      formArray.controls.forEach((ctrl: FormControl) => {
        if (ctrl.value == eventValue) {
          // Remove the unselected element from the arrayForm
          formArray.removeAt(i);
          return;
        }

        i++;
      });
    }
  }

  onCheckChangeAll(event){
    
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
    if(isChecked){

    }
  }
  addFormControl(i,item){
    const formArray: FormArray = this.cartForm.get('options') as FormArray;
    let control=new FormControl()
    formArray.push(control);
    return control
  }
  getOptions(){
    const formArray: FormArray = this.cartForm.get('options') as FormArray;
    for (const item of this.checks) {
      let control=new FormControl()
      formArray.push(control);
  
      
    }
   
  }
}
