import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class AuthService {
  path = 'http://localhost:3000/auth';

  constructor(private http: HttpClient) { }

  get token() {
    return localStorage.getItem('token');
  }

  registerUser(user): Observable<any> {
    return this.http.post(this.path + '/register', user);
  }

  loginUser(user): Observable<any> {
    return this.http.post(this.path + '/login', user);
  }
}
