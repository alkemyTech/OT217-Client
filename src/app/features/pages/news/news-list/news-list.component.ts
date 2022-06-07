import { Component, OnInit } from "@angular/core";
import { Store } from "@ngrx/store";
import { Observable } from "rxjs";
import { NewsService } from "src/app/core/services/news.service";
import { AppState } from "src/app/shared/state/app.state";
import { loadedNews, loadNews } from "src/app/shared/state/news/news.actions";
import {
  selectNewsLoading,
  selectNewsList,
} from "src/app/shared/state/news/news.selectors";

@Component({
  selector: "app-news-list",
  templateUrl: "./news-list.component.html",
  styleUrls: ["./news-list.component.scss"],
})
export class NewsListComponent implements OnInit {
  newsList$: Observable<any> = new Observable();
  loading$: Observable<boolean> = new Observable();

  constructor(
    private store: Store<AppState>,
    private newsService: NewsService
  ) {}

  ngOnInit(): void {
    this.loading$ = this.store.select(selectNewsLoading);

    this.store.dispatch(loadNews());

    this.newsService.getNews().subscribe((response) => {
      this.store.dispatch(loadedNews({ news: response.data }));
    });

    this.newsList$ = this.store.select(selectNewsList);
  }
}
