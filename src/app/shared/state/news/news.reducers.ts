import { createReducer, on } from "@ngrx/store";
import { newsState } from "../../models/news.state";
import { loadNews } from "./news.actions";

export const initialState:newsState={ loading: false, news: []}

export const newsReducer = createReducer(
    initialState,
    on(loadNews, (state) =>{
        return {...state, loading: true}
    })
)