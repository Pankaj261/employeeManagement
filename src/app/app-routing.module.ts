import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeEmployeeComponent } from './home-employee/home-employee.component';
import { UpdateEmployeeComponent } from './home-employee/update-employee/update-employee.component';
import { DeleteEmployeeComponent } from './home-employee/delete-employee/delete-employee.component';
import { CreateEmployeeComponent } from './home-employee/create-employee/create-employee.component';


const routes: Routes = [
  {path:'', component: HomeEmployeeComponent},
      {path:'home', component: HomeEmployeeComponent},
      {path:'update', component: UpdateEmployeeComponent},
      {path:'delete', component: DeleteEmployeeComponent},
      {path:'create', component: CreateEmployeeComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
