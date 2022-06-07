import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { loadNews } from 'src/app/shared/state/news/news.actions';

@Component({
  selector: 'app-news-list',
  templateUrl: './news-list.component.html',
  styleUrls: ['./news-list.component.scss']
})
export class NewsListComponent implements OnInit {

  constructor(private store:Store<any>) { }

  ngOnInit(): void {
    this.store.dispatch(loadNews())
  }

}
