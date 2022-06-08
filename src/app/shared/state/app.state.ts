import { ActionReducerMap } from "@ngrx/store";
import { newsState } from "../models/news.state";
import { newsReducer } from "./news/news.reducers";

export interface AppState {
  news: newsState;
}

export const ROOT_REDUCERS:ActionReducerMap<AppState> ={
    news: newsReducer
}