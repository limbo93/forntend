import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class AuthService {
  TOKEN_KEY = 'token';
  path = 'http://localhost:3000/auth';

  constructor(private http: HttpClient) { }

  get token() {
    return localStorage.getItem(this.TOKEN_KEY);
  }

  get isAuthenticated() {
    return !!localStorage.getItem(this.TOKEN_KEY);
  }

  registerUser(user): Observable<any> {
    return this.http.post(this.path + '/register', user);
  }

  loginUser(user): Observable<any> {
    return this.http.post(this.path + '/login', user);
  }

  logout() {
    localStorage.removeItem(this.TOKEN_KEY);
  }
}
