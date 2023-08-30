import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Employee } from 'src/app/models/employee';
import { base_url } from 'src/environments/environment';

@Component({
  selector: 'app-select-employee',
  templateUrl: './select-employee.component.html',
  styleUrls: ['./select-employee.component.css'],
})
export class SelectEmployeeComponent implements OnInit {
  /** 従業員一覧 */
  employeeList: Employee[] = [];

  constructor(private http: HttpClient, private router: Router) {}

  ngOnInit(): void {
    // 従業員一覧を取得
    this.getAllEmployees().subscribe((res) => {
      console.log(res);
      this.employeeList = res;
    });
  }

  /** 従業員一覧を取得 */
  getAllEmployees() {
    return this.http.get<Employee[]>(base_url + 'api/employee/');
  }

  buttonClick(employee: Employee) {
    console.log('click');
    console.log(employee);

    // 勤怠選択画面に遷移
    this.router.navigateByUrl(`/selectAttendance/${employee.id}`);
  }
}
