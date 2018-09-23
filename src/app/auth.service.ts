import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class AuthService {

    constructor(private http: HttpClient) {

    }

    registerUser(user): Observable<any> {
        return this.http.post('http://localhost:3000/register', user);
    }

    loginUser(user): Observable<any> {
        return this.http.post('http://localhost:3000/login', user);
    }
}