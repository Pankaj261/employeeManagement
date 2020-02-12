import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { fetchingData } from 'src/app/config/config.service';
import { mySpinnerClass } from '../../config/spinner';

@Component({
  selector: 'app-delete-employee',
  templateUrl: './delete-employee.component.html',
  styleUrls: ['./delete-employee.component.css']
})
export class DeleteEmployeeComponent implements OnInit {

  constructor(private route : ActivatedRoute, private myService: fetchingData, private spinner : mySpinnerClass) { }

  getId: number = 0;
  successData: string = "success";
  errorData: string = "Error";
  successFully: string = "";
  showSpinner: boolean = false;

  ngOnInit() {
    this.getId = this.myService.getData();
  }

  deleteData(){
    this.showSpinner = true;
    this.myService.deleteUser(this.getId)
     .subscribe(response=>{
        if(response['status'] === this.successData){
          this.showSpinner = false;
          this.spinner.openSnake(this.successData, response['message']);
        }else{
          this.showSpinner = false;
          this.spinner.openSnake(this.errorData, this.errorData);
        }
     })
  }

}
