import { News } from "./News";

export interface newsState{
    loading:boolean,
    news: ReadonlyArray<News>
}