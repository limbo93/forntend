import { Component, OnInit } from '@angular/core';
import { AppService } from './app.service';
import { AuthService } from './auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'frontend';
  messages = [];

  constructor(private appService: AppService,
    public authService: AuthService) { }

  ngOnInit(): void { }

  fetchData() {
    this.appService.fetchData().subscribe(data => (this.messages = data));
  }

  logout() {
    this.authService.logout();
  }
}
