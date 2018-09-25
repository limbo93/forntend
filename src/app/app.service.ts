import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class AppService {

    path = 'http://localhost:3000';

    constructor(private http: HttpClient) {

    }

    fetchData(): Observable<any> {
        return this.http.get(this.path + '/rnd');
    }

    fetchUsers(): Observable<any> {
        return this.http.get(this.path + '/users');
    }

    fetchProfile(profileId): Observable<any> {
        return this.http.get(this.path + '/profile/' + profileId);
    }

    createMessage(message): Observable<any> {
        return this.http.post(this.path + "/messages", message);
    }

    fetchMessages(userId): Observable<any> {
        return this.http.get(this.path + '/messages/' + userId);
    }
}