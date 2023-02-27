import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import { Employee } from 'src/app/models/employee';
import { base_url } from 'src/environments/environment';

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css'],
})
export class EmployeeListComponent implements OnInit {
  /** 従業員一覧 */
  employeeList: Employee[] = [];

  /** テーブル情報 */
  columnName = ['id', 'name', 'name_kana', 'gender', 'age', 'del_flg'];
  dataSource = new MatTableDataSource<Employee>();

  constructor(private http: HttpClient, private router: Router) {}

  ngOnInit(): void {
    // 従業員一覧を取得
    this.getAllEmployees().subscribe((res) => {
      console.log(res);
      if (res) {
        this.employeeList = res;
        this.dataSource = new MatTableDataSource<Employee>(this.employeeList);
      }
    });
  }

  /** 従業員一覧を取得 */
  getAllEmployees() {
    return this.http.get<Employee[]>(base_url + 'api/employee/');
  }

  dblClick(index: any) {
    console.log('dblClick', index);

    // 行indexをもとにIDを取得
    const id = this.employeeList[index].id;

    // 従業員詳細画面に遷移
    this.router.navigateByUrl(`/employeeDetail/${id}`);
  }
}
