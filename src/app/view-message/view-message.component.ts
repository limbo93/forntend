import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AppService } from '../app.service';

@Component({
  selector: 'app-view-message',
  templateUrl: './view-message.component.html',
  styleUrls: ['./view-message.component.css']
})
export class ViewMessageComponent implements OnInit {

  messages: any = [];

  constructor(private appService: AppService,
    private route: ActivatedRoute) { }

  ngOnInit() {
    let userId = this.route.snapshot.params.profileId;
    this.appService.fetchMessages(userId).subscribe(msg => this.messages = msg);
  }
}
