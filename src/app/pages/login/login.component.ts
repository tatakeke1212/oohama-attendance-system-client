import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
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
  massage = '';

  constructor(private http: HttpClient, private router: Router) {}

  ngOnInit(): void {}

  onLogin() {
    console.log('login');
    console.log(this.name);
    console.log(this.password);
    this.Login().subscribe((res) => {
      console.log('res: ', res);
      if (res.status === 200) {
        this.router.navigate(['/manage']);
      } else {
        this.massage = 'ログインに失敗しました。';
      }
    });
  }

  Login() {
    return this.http.get<any>(
      `${base_url}api/admin-user/login?name=${this.name}&password=${this.password}`
    );
  }
}
