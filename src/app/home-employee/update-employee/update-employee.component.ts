import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { fetchingData } from '../../config/config.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { myValidation } from '../../assets/validation'
import { mySpinnerClass } from '../../config/spinner';

@Component({
  selector: 'app-update-employee',
  templateUrl: './update-employee.component.html',
  styleUrls: ['./update-employee.component.css'],
})
export class UpdateEmployeeComponent implements OnInit {
  constructor(private spinner : mySpinnerClass, private route: ActivatedRoute, private myService: fetchingData) { }

  //id: number = 0;
  successData: string = "success";
  successFully: string = "Successfully Updated!";
  showSpinner: boolean = false;
  passData: any;
  errorData: string = "Error";

  nameMinLength: number = myValidation.nameValidation.minLength;
  nameMaxLength: number = myValidation.nameValidation.maxLength;

  salaryMinLength: number = myValidation.salaryValidation.minLength;
  salaryMaxLength: number = myValidation.salaryValidation.maxLength;

  ageMinLength: number = myValidation.ageValidation.minLength;
  ageMaxLength: number = myValidation.salaryValidation.maxLength;

  ngOnInit() {
    this.passData = this.myService.getData();
    console.log(this.passData);
    this.setValue();
  }

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

  updateProfileForm = new FormGroup({
    name: this.nameValidation,
    salary: this.salaryValidation,
    age: this.ageValidation
  });

  setValue() {
    if(this.passData != undefined){
      this.updateProfileForm.setValue(
        { 
          "name": this.passData["employee_name"], 
          "salary": this.passData["employee_salary"], 
          "age": this.passData["employee_age"] 
        }
      );
    }
  }

  myUpdateData() {
    this.showSpinner = true;
    const id = this.passData["id"];
    this.updateProfileForm.value['id'] = id;
    const myData = JSON.stringify(this.updateProfileForm.value);
    this.myService.updateUser(id, myData)
      .subscribe(response => {
        if (response['status'] === this.successData) {
          this.showSpinner = false;
          this.spinner.openSnake(this.successData, this.successFully);
        }else{
          this.showSpinner = false;
          this.spinner.openSnake(this.errorData, this.errorData);
        }
      })
  }

  public hasError = (controlName: string, errorName: string) => {
    return this.updateProfileForm.controls[controlName].hasError(errorName);
  }
}
