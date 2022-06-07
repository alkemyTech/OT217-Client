import { createReducer, on } from "@ngrx/store";
import { newsState } from "../../models/news.state";
import { loadedNews, loadNews } from "./news.actions";

export const initialState: newsState = { loading: false, news: [] };

export const newsReducer = createReducer(
  initialState,
  on(loadNews, (state) => {
    return { ...state, loading: true };
  }),
  on(loadedNews, (state, { news }) => {
    return { ...state, loading: false, news: news };
  })
);
