import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
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
  items=['biggner','mid','advanced']
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

}
