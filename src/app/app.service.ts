import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../environments/environment';

@Injectable()
export class AppService {

    path = environment.servicePath;

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