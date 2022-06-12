import { ActionReducer, ActionReducerMap } from "@ngrx/store";
import { ACtivitiesState } from "../models/activities.state";
import { activitiesReducer } from "./activities/activities.reducers";
import { newsState } from "../models/news.state";
import { newsReducer } from "./news/news.reducers";
import { authReducer } from "./auth/auth.reducer";
import { authState } from "../models/auth.state";

export interface AppState {
  activities: ACtivitiesState;
  news: newsState;
  auth: authState;
}

export const ROOT_REDUCERS: ActionReducerMap<AppState> = {
  activities: activitiesReducer,
  news: newsReducer,
  auth: authReducer,
};
