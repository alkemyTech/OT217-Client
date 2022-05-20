import { Component, OnInit } from '@angular/core';
import { ActivityService } from 'src/app/core/services/activity.service';
import { Activity } from 'src/app/shared/models/Activity';

@Component({
  selector: 'app-activities-page',
  templateUrl: './activities-page.component.html',
  styleUrls: ['./activities-page.component.scss']
})
export class ActivitiesPageComponent implements OnInit {

  activities:Activity[] = [];

  constructor(private activitiesService:ActivityService) {
   }

  ngOnInit(): void {
    this.activitiesService.getActivities().subscribe(response =>{
      this.activities = response.data;
      console.log(this.activities);
    })
  }
}
