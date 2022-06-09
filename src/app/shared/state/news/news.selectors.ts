import { createSelector } from "@ngrx/store";
import { newsState } from "../../models/news.state";
import { AppState } from "../app.state";

export const selectNewsFeature = (state: AppState) => state.news;

export const selectNewsList = createSelector(
  selectNewsFeature,
  (state: newsState) => state.news
);

export const selectNewsLoading = createSelector(
  selectNewsFeature,
  (state: newsState) => state.loading
);
