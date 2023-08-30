import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-select-attendance',
  templateUrl: './select-attendance.component.html',
  styleUrls: ['./select-attendance.component.css'],
})
export class SelectAttendanceComponent implements OnInit {
  constructor(
    private http: HttpClient,
    private activatedRoute: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.activatedRoute.params.subscribe((params) => {
      const id = params['id'];
      console.log('id: ' + id);
      // 従業員の出勤状況を取得
      // 出勤状況をもとに非活性のボタンを判定
    });
  }

  clickStart() {
    console.log('出勤');
  }

  clickEnd() {
    console.log('退勤');
  }

  clickRestIn() {
    console.log('休憩開始');
  }

  clickRestOut() {
    console.log('休憩終了');
  }
}
