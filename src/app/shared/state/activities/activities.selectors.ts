import { createSelector } from "@ngrx/store";
import { ACtivitiesState } from "src/app/shared/models/activities.state";
import { AppState } from "../app.state";

export const selectActivities = (state: AppState) => state.activities;

export const selecListActivities = createSelector(
  selectActivities,
  (state: ACtivitiesState) => state.activities
);
export const selecLoadingActivities = createSelector(
  selectActivities,
  (state: ACtivitiesState) => state.loading
);
