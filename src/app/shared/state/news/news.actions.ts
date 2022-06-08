import { createAction, props } from "@ngrx/store";
import { News } from "../../models/News";

export const loadNews = createAction(
    '[News List] Load news'
)

export const loadedNews = createAction(
    '[News List] Load news success',
    props<{news:News[]}>()
)