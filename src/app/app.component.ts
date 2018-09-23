import { Component, OnInit } from '@angular/core';
import { AppService } from './app.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  title = 'frontend';
  messages = [];

  constructor(private appService: AppService) {

  }

  ngOnInit(): void {
    // this.fetchData();
  }

  fetchData() {
    this.appService.fetchData().subscribe(data => this.messages = data);
  }
}
