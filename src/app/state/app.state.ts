import { ActionReducer, ActionReducerMap } from "@ngrx/store";
import { Activities } from "../features/models";
import { ACtivitiesState } from "../shared/models/activities.state";
import { activitiesReducer } from "./reducers/activities.reducers";

export interface AppState {
  activities: ACtivitiesState;
}
export const ROOT_REDUCERS: ActionReducerMap<AppState> = {
  activities: activitiesReducer,
};
