import { Component, OnInit } from "@angular/core";
import { ActivityService } from "src/app/core/services/activity.service";
import { Activity } from "src/app/shared/models/Activity";
import { PageEvent } from "@angular/material/paginator";

@Component({
  selector: "app-activities-page",
  templateUrl: "./activities-page.component.html",
  styleUrls: ["./activities-page.component.scss"],
})
export class ActivitiesPageComponent implements OnInit {
  activities: Activity[] = [];

  constructor(private activitiesService: ActivityService) {}

  page_size: number = 3;
  page_number: number = 1;
  pageSizeOptions: number[] = [3, 8];
  handlePage(e: PageEvent) {
    this.page_size = e.pageSize;
    this.page_number = e.pageIndex + 1;
  }

  ngOnInit(): void {
    this.activitiesService.getActivities().subscribe((response) => {
      this.activities = response.data;
    });
  }
}
