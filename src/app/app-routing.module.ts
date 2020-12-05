import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddEmployeeComponent } from './components/add-employee/add-employee.component';
import { EmployeeDetailsComponent } from './components/employee-details/employee-details.component';
import { HomeEmployeeComponent } from './components/home-employee/home-employee.component';
import { ViewEmployeeComponent } from './components/view-employee/view-employee.component';


const routes: Routes = [
  {path:'', component: HomeEmployeeComponent},
  {path:'home', component: HomeEmployeeComponent},
  {path:'add', component: AddEmployeeComponent},
  {path:'view', component: ViewEmployeeComponent},
  {path:'view/:num', component: EmployeeDetailsComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents = [
  AddEmployeeComponent,
  HomeEmployeeComponent,
  ViewEmployeeComponent,
  EmployeeDetailsComponent,
]
