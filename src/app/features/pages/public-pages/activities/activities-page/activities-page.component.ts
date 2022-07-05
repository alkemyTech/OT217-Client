import { Component, OnInit } from "@angular/core";
import { ActivityService } from "src/app/core/services/activity.service";
import { Activity } from "src/app/shared/models/Activity";
import { PageEvent } from "@angular/material/paginator";
import {
  debounceTime,
  distinctUntilChanged,
  switchMap,
  tap,
} from "rxjs/operators";
import { Subject } from "rxjs";
import { ActivitiesServices } from "src/app/core/services/activities.service";
import { ErrorActivitiesService } from "src/app/core/services/errorActivities.service";

@Component({
  selector: "app-activities-page",
  templateUrl: "./activities-page.component.html",
  styleUrls: ["./activities-page.component.scss"],
})
export class ActivitiesPageComponent implements OnInit {
  activities: Activity[] = [];

  private searchTerms = new Subject<string>();

  constructor(
    private activitiesService: ActivityService,
    private activitieService: ActivitiesServices,
    private dialog: ErrorActivitiesService
  ) {}

  page_size: number = 3;
  page_number: number = 1;
  pageSizeOptions: number[] = [3, 8];
  handlePage(e: PageEvent) {
    this.page_size = e.pageSize;
    this.page_number = e.pageIndex + 1;
  }

  ngOnInit(): void {
    this.loadActivities();
    this.searchTerms
      .pipe(
        debounceTime(300),
        distinctUntilChanged(),
        switchMap((term: string) =>
          this.activitieService.getActivitiesSearch(term)
        ),
        tap((activiti: any) => {
          this.activities = activiti.data;
        })
      )
      .subscribe();
  }
  loadActivities() {
    this.activitiesService.getActivities().subscribe((response) => {
      this.activities = response.data;
    }, error => {
       this.dialog.openSnackBar("Erro al obtener las actividades")
       
    });
  }
  shearsActie(search: any) {
    if (search.length >= 3) {
      this.searchTerms.next(search);
    } else {
      this.loadActivities();
    }
  }
}
