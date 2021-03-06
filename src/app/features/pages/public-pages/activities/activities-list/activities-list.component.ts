import { Component, OnInit } from "@angular/core";
import { Store } from "@ngrx/store";
import { Observable } from "rxjs";
import { ActivitiesServices } from "src/app/core/services/activities.service";
import { Activity } from "src/app/shared/models/Activity";
import { loadActivities } from "src/app/shared/state/activities/activities.actions";
import { AppState } from "src/app/shared/state/app.state";
import {
  selecListActivities,
  selecLoadingActivities,
} from "src/app/shared/state/activities/activities.selectors";
@Component({
  selector: "app-activities-list",
  templateUrl: "./activities-list.component.html",
  styleUrls: ["./activities-list.component.scss"],
  providers: [ActivitiesServices],
})
export class ActivitiesListComponent implements OnInit {
  activities$: Observable<any> = new Observable();

  constructor(
    private _ActivitiesServices: ActivitiesServices,
    private store: Store<AppState>
  ) {}

  ngOnInit(): void {
    this.store.dispatch(loadActivities());
    this.activities$ = this.store.select(selecListActivities);
  }

  deleteActivity = (event: any): void => {
    let id = String(event);
    this._ActivitiesServices.deleteActivities(id).subscribe(() => {
      this.store.dispatch(loadActivities());
      this.activities$ = this.store.select(selecListActivities);
    });
  };
}
