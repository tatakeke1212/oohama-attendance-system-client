import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { base_url } from 'src/environments/environment';

@Component({
  selector: 'app-select-employee',
  templateUrl: './select-employee.component.html',
  styleUrls: ['./select-employee.component.css']
})
export class SelectEmployeeComponent implements OnInit {
  /** 従業員一覧 */
  employeeList:any = [];

  user = '';

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    // 従業員一覧を取得
    this.getAllEmployees()
    .subscribe((res) => {
      console.log(res);
      this.employeeList = res;
      this.user = this.employeeList[0].name;
    });
  }
  
  /** 従業員一覧を取得 */
  getAllEmployees() {
    return this.http.get<any>(base_url + 'api/employee/');
  }

}
