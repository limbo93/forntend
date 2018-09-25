import { Component, OnInit } from '@angular/core';
import { AppService } from '../app.service';

@Component({
  selector: 'app-message',
  templateUrl: './message.component.html',
  styleUrls: ['./message.component.css']
})
export class MessageComponent implements OnInit {

  message: string = '';

  constructor(private appService: AppService) { }

  ngOnInit() {
  }

  createMessage() {
    this.appService.createMessage({ message: this.message }).subscribe(data => console.log(data));
  }

  save() {
    this.createMessage();
  }
}
