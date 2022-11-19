import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { base_url } from 'src/environments/environment';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  title = '管理者ログイン';

  name = '';
  password = '';

  constructor(private http: HttpClient) {}

  ngOnInit(): void {}

  onLogin() {
    // console.log('login');
    // console.log(this.name);
    // console.log(this.password);
    this.Login().subscribe((res) => {
      // console.log('res: ', res);
    });
  }

  Login() {
    return this.http.get<any>(
      `${base_url}api/admin-user/login?name=${this.name}&password=${this.password}`
    );
  }
}
