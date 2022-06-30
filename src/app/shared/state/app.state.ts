import { ActionReducer, ActionReducerMap } from "@ngrx/store";
import { ACtivitiesState } from "../models/activities.state";
import { activitiesReducer } from "./activities/activities.reducers";
import { newsState } from "../models/news.state";
import { newsReducer } from "./news/news.reducers";
import { authReducer } from "./auth/auth.reducer";
import { authState } from "../models/auth.state";
import { membersState } from "../models/members.state";
import { membersReducer } from "./members/members.reducers";
import { MembersModel } from "../models/members.model";

export interface AppState {
  activities: ACtivitiesState;
  news: newsState;
  auth: authState;
  members: ReadonlyArray<MembersModel>;
}

export const ROOT_REDUCERS: ActionReducerMap<AppState> = {
  activities: activitiesReducer,
  news: newsReducer,
  auth: authReducer,
  members: membersReducer
};
