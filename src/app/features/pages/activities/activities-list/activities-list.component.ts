import { Component, OnInit } from "@angular/core";
import { Store } from "@ngrx/store";
import { Observable } from "rxjs";
import { ActivitiesServices } from "src/app/core/services/activities.service";
import { Activity } from "src/app/shared/models/Activity";
import { loadActivities } from "src/app/state/actions/activities.actions";
import { AppState } from "src/app/state/app.state";
import {
  selecListActivities,
  selecLoadingActivities,
} from "src/app/state/selectors/activities.selectors";
@Component({
  selector: "app-activities-list",
  templateUrl: "./activities-list.component.html",
  styleUrls: ["./activities-list.component.scss"],
  providers: [ActivitiesServices],
})
export class ActivitiesListComponent implements OnInit {
  // public activities: Activity[] = [];
  activities$: Observable<any> = new Observable();
  loading$: Observable<boolean> = new Observable();

  constructor(
    private _ActivitiesServices: ActivitiesServices,
    private store: Store<AppState>
  ) {}

  ngOnInit(): void {
    //  this.getActivities();
    //this.activities$ = this.store(selecListActivities)
    this.loading$ = this.store.select(selecLoadingActivities);
    this.store.dispatch(loadActivities());
    this.activities$ = this.store.select(selecListActivities);
  }
  /*
  getActivities() {
    this._ActivitiesServices.getActiviti().subscribe(
      (response) => {
        this.activities = response.data;
      },
      (error) => {}
    );
  }
*/
  deleteActivity = (event: any): void => {
    let id = String(event);
    this._ActivitiesServices.deleteActivities(id).subscribe(() => {
      // this.getActivities();
    });
  };
}
