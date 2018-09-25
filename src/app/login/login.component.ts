import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginData = { email: '', pwd: '' };

  constructor(private authService: AuthService) { }

  ngOnInit() {
  }

  save() {
    this.authService.loginUser(this.loginData).subscribe(res => localStorage.setItem('token', res.token));
  }

}
