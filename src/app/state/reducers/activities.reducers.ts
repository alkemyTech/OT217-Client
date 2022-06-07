import { createReducer, on } from "@ngrx/store";
import { ACtivitiesState } from "src/app/shared/models/activities.state";
import {
  loadActivities,
  loadedActivities,
} from "../actions/activities.actions";

export const initialState: ACtivitiesState = { loading: false, activities: [] };

export const activitiesReducer = createReducer(
  initialState,
  on(loadActivities, (state) => {
    return { ...state, loading: true };
  }),
  on(loadedActivities, (state, { activities }) => {
    return { ...state, loading: false, activities };
  })
);
