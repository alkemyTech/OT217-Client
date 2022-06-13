import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { EMPTY } from "rxjs";
import { map, mergeMap, catchError } from "rxjs/operators";
import { ActivitiesServices } from "src/app/core/services/activities.service";

@Injectable()
export class ActivitiesEffects {
  loadActivities$ = createEffect(() =>
    this.actions$.pipe(
      ofType("[Activities List] Load activities"),
      mergeMap(() =>
        this.activitiesService.getActiviti().pipe(
          map((activities) => ({
            type: "[Activities List] Loaded success",
            activities: activities.data,
          })),
          catchError(() => EMPTY)
        )
      )
    )
  );
  constructor(
    private actions$: Actions,
    private activitiesService: ActivitiesServices
  ) {}
}
