import { Component, OnInit } from "@angular/core";
import { Store } from "@ngrx/store";
import { Observable } from "rxjs";
import {
  debounceTime,
  distinctUntilChanged,
  switchMap,
  tap,
} from "rxjs/operators";
import { Subject } from "rxjs";
import { NewsService } from "src/app/core/services/news.service";
import { AppState } from "src/app/shared/state/app.state";
import { loadNews } from "src/app/shared/state/news/news.actions";
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
  dataArray: any[] = [];
  loading$: Observable<boolean> = new Observable();

  private searchNews = new Subject<string>();

  constructor(
    private newsService: NewsService,
    private store: Store<AppState>
  ) {}

  ngOnInit(): void {
    this.getData();

    this.loading$ = this.store.select(selectNewsLoading);

    this.newsService.getNews().subscribe((res) => {
      console.log(res.data);
      this.dataArray = res.data;
    });

    this.store.dispatch(loadNews());

    this.newsList$ = this.store.select(selectNewsList);

    // At this point starts search logics
    this.searchNews
      .pipe(
        debounceTime(300),
        distinctUntilChanged(),
        switchMap((term: string) => this.newsService.searchNews(term)),
        tap((news: any) => {
          this.dataArray = news.data;
        })
      )
      .subscribe();
  }

  getData() {
    this.newsService.getNews().subscribe((res) => {
      this.dataArray = res.data;
    });
  }

  searchingNews(search: any) {
    if (search.length >= 3) {
      this.searchNews.next(search);
    } else {
      this.getData();
    }
  }
}
