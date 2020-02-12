import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators, FormControl } from '@angular/forms';
import { myValidation } from '../../assets/validation';
import { fetchingData } from '../../config/config.service';
import { mySpinnerClass } from '../../config/spinner';

@Component({
  selector: 'app-create-employee',
  templateUrl: './create-employee.component.html',
  styleUrls: ['./create-employee.component.css']
})
export class CreateEmployeeComponent implements OnInit {

  constructor(private myService: fetchingData, private spinner : mySpinnerClass) { }

  ngOnInit() {
  }

  successData: string = "success";
  successFully: string = "Successfully Created!";
  showSpinner: boolean = false;
  errorData: string = "Error";

  nameMinLength : number = myValidation.nameValidation.minLength;
  nameMaxLength : number = myValidation.nameValidation.maxLength;

  salaryMinLength : number = myValidation.salaryValidation.minLength;
  salaryMaxLength : number = myValidation.salaryValidation.maxLength;

  ageMinLength : number = myValidation.ageValidation.minLength;
  ageMaxLength : number = myValidation.salaryValidation.maxLength;

  nameValidation = new FormControl('', [ 
    Validators.required, 
    Validators.minLength(myValidation.nameValidation.minLength), 
    Validators.maxLength(myValidation.nameValidation.maxLength), 
    Validators.pattern(myValidation.nameValidation.patternRegex) 
  ]);

  salaryValidation = new FormControl('', [ 
    Validators.required, 
    Validators.minLength(myValidation.salaryValidation.minLength), 
    Validators.maxLength(myValidation.salaryValidation.maxLength), 
    Validators.pattern(myValidation.salaryValidation.patternRegex) 
  ]);

  ageValidation = new FormControl('', [ 
    Validators.required, 
    Validators.minLength(myValidation.ageValidation.minLength), 
    Validators.maxLength(myValidation.ageValidation.maxLength), 
    Validators.pattern(myValidation.ageValidation.patternRegex) 
  ]);

  createUser = new FormGroup({
    name: this.nameValidation,
    salary: this.salaryValidation,
    age: this.ageValidation
  });

  createNewUser(){
    this.showSpinner = true;
    const myData = JSON.stringify(this.createUser.value);
    this.myService.createUser(myData)
     .subscribe(response=>{
        if(response['status'] === this.successData){
          this.showSpinner = false;
          this.spinner.openSnake(this.successData, this.successFully);
        }else{
          this.showSpinner = false;
          this.spinner.openSnake(this.errorData, this.errorData);
        }
     })
  }

  public hasError = (controlName: string, errorName: string) => {
    return this.createUser.controls[controlName].hasError(errorName);
  }

}
