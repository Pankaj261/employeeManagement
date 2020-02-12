import { Component, OnInit, ElementRef } from '@angular/core';
import { fetchingData } from '../config/config.service';
import { Router } from '@angular/router';
import { MatSnackBar } from '@angular/material';

@Component({
  selector: 'app-home-employee',
  templateUrl: './home-employee.component.html',
  styleUrls: ['./home-employee.component.css'],
})

export class HomeEmployeeComponent implements OnInit {

  constructor(private myService: fetchingData, private elRef: ElementRef, private router: Router, private snakeBar : MatSnackBar) { }

  myData: any;
  name: string = 'pankaj';
  showMenuData: boolean = false;
  errorData: string = "Error";
  showSpinner: boolean = false;

  ngOnInit() {
    this.showConfig();
  }

  showConfig() {
    this.myService.getUserData()
      .subscribe(response => {
        if(!!response){
          this.myData = response["data"];
        }else{
          this.openSnake(this.errorData, response['message']);
        }
      });
  }

  passUpdate(data:object) {
    this.myService.setData(data);
    this.router.navigate(['/update']);
  }

  deleteData(id:number) {
    this.myService.setData(id);
    this.router.navigate(['/delete']);
  }

  openSnake(message:string, messageData:string){
    this.showSpinner = false;
    this.snakeBar.open(message, messageData, {
      duration: 4000,
    });
  }
  
}
