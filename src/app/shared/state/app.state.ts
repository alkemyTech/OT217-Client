import { ActionReducer, ActionReducerMap } from "@ngrx/store";
import { ACtivitiesState } from "../models/activities.state";
import { activitiesReducer } from "./activities/activities.reducers";

export interface AppState {
  activities: ACtivitiesState;
}
export const ROOT_REDUCERS: ActionReducerMap<AppState> = {
  activities: activitiesReducer,
};
