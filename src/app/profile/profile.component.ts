import { Component, OnInit } from '@angular/core';
import { AppService } from '../app.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  profile: any;

  constructor(private appService: AppService,
    private route: ActivatedRoute) { }

  ngOnInit() {
    let profileId = this.route.snapshot.params.profileId;
    this.appService.fetchProfile(profileId).subscribe(profile => this.profile = profile);
  }

}
