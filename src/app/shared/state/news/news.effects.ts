import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { EMPTY } from 'rxjs';
import { map, mergeMap, catchError } from 'rxjs/operators';
import { NewsService } from 'src/app/core/services/news.service';
 
@Injectable()
export class NewsEffects {
 
  loadNews$ = createEffect(() => this.actions$.pipe(
    ofType('[News List] Load news'),
    mergeMap(() => this.newsService.getNews()
      .pipe(
        map(news => ({ type: '[News List] Load news success', news })),
        catchError(() => EMPTY)
      ))
    )
  );
 
  constructor(
    private actions$: Actions,
    private newsService: NewsService
  ) {}
}