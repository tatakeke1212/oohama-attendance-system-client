import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  title = '管理者ログイン';

  constructor() { }

  ngOnInit(): void {
    console.log('login');
  }

}
