import { Component, OnInit } from "@angular/core";
import { ActivitiesServices } from "src/app/core/services/activities.service";
import { Activity } from "src/app/shared/models/Activity";
@Component({
  selector: "app-activities-list",
  templateUrl: "./activities-list.component.html",
  styleUrls: ["./activities-list.component.scss"],
  providers: [ActivitiesServices],
})
export class ActivitiesListComponent implements OnInit {
  public activities: Activity[] = [];

  constructor(private _ActivitiesServices: ActivitiesServices) {}

  ngOnInit(): void {
    this.getActivities();
  }

  getActivities() {
    this._ActivitiesServices.getActiviti().subscribe(
      (response) => {
        this.activities = response.data;
      },
      (error) => {}
    );
  }

  deleteActivity = (event: any): void => {
    let id = String(event);
    this._ActivitiesServices.deleteActivities(id).subscribe(() => {
      this.getActivities();
    });
  };
}
