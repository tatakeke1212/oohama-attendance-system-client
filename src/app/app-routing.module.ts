import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './pages/login/login.component';
import { EmployeeDetailComponent } from './pages/management/employee-detail/employee-detail.component';
import { EmployeeListComponent } from './pages/management/employee-list/employee-list.component';
import { ManageTopComponent } from './pages/management/manage-top/manage-top.component';
import { SelectEmployeeComponent } from './pages/select-employee/select-employee.component';
import { TopComponent } from './pages/top/top.component';

const routes: Routes = [
  { path: '', redirectTo: '/top', pathMatch: 'full' },
  { path: 'top', component: TopComponent },
  { path: 'selectEmployee', component: SelectEmployeeComponent },
  { path: 'login', component: LoginComponent },
  { path: 'management-top', component: ManageTopComponent },
  { path: 'employeeList', component: EmployeeListComponent },
  { path: 'employeeDetail/:id', component: EmployeeDetailComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
