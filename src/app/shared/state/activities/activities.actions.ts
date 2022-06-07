import { createAction, props } from "@ngrx/store";
import { Activity } from "src/app/shared/models/Activity";

export const loadActivities = createAction("[Activities List] Load activities");

export const loadedActivities = createAction(
  "[Activities List] Loaded success",
  props<{ activities: Activity[] }>()
);
