import { createReducer, on } from "@ngrx/store";
import { News } from "../../models/News";
import { loadNews } from "./news.actions";

export const initialState: {
    loading:boolean,
    news:ReadonlyArray<News>;
} = { loading: false, news: []}

export const newsReducer = createReducer(
    initialState,
    on(loadNews, (state) =>{
        return {...state, loading: true}
    })
)