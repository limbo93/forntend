import { Component, OnInit } from '@angular/core';
import { AppService } from '../app.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {

  users = [];

  constructor(private appService: AppService) { }

  ngOnInit() {
    this.fetchUses();
  }

  fetchUses() {
    this.appService.fetchUsers().subscribe(users => this.users = users);
  }

}
