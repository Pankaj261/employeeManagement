import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(private router : Router) { }
  homeLink: string = "home";
  href: boolean = true;
  employeeManagement:string = "Employee Management";

  ngOnInit() {
    const urlEvents$ = this.router.events
    urlEvents$.subscribe(response=>{
      if(response['url'] != undefined){
        this.href = response['url'].indexOf(this.homeLink) < 0;
      }
    });
  }

}
