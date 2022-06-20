import { Component, ElementRef, ViewChild } from '@angular/core';
import { fromEvent } from 'rxjs';
import { debounceTime, map, distinctUntilChanged, filter } from 'rxjs/operators';
import { NewsSearchService } from 'src/app/core/services/news-search.service';





@Component({
  selector: 'app-news-search',
  templateUrl: './news-search.component.html',
  styleUrls: ['./news-search.component.scss']
})
export class NewsSearchComponent {

  @ViewChild('txtQuery', { static: true })
  txtQuery: ElementRef;
  search: any;
  showNews: any;



  constructor(private newsSearchService: NewsSearchService) { }



  ngOnInit() {
  }

  onQueryChanged() {
    fromEvent(this.txtQuery.nativeElement, 'keyup').pipe(
      map((event: any) => {
        return event.target.value;
      }),
      filter(res => res.length > 3),
      debounceTime(1000),
      distinctUntilChanged(),
    ).subscribe(() => {
      this.newsSearchService.getQuery(this.search).subscribe((result: any) => {
        console.log(result);
        this.showNews = result.data;
      })
    }, (err: any) => {
      console.log('error', err);
    });

  }

}




