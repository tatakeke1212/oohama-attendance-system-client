import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { EmployeeDetail } from 'src/app/models/employee-detail';
import { base_url } from 'src/environments/environment';

@Component({
  selector: 'app-employee-detail',
  templateUrl: './employee-detail.component.html',
  styleUrls: ['./employee-detail.component.css'],
})
export class EmployeeDetailComponent implements OnInit {
  // 従業員詳細データ
  employeeDetail = new EmployeeDetail();

  constructor(
    private http: HttpClient,
    private activatedRoute: ActivatedRoute
  ) {}

  ngOnInit(): void {
    // URLからパラメータ取得
    this.activatedRoute.params.subscribe((params) => {
      const id = params['id'];
      console.log(id);
      // 従業員詳細取得
      this.getEmployeeDetail(id).subscribe((res) => {
        console.log(res[0]);
        this.employeeDetail = res[0];
      });
    });
  }

  /** idをもとに従業員詳細を取得 */
  getEmployeeDetail(id: string) {
    return this.http.get<EmployeeDetail[]>(
      base_url + 'api/employee/detail/' + id
    );
  }

  onUpdateButtonClick() {}
}
