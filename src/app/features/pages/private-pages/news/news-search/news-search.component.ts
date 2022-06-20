import { Component, ElementRef, ViewChild } from '@angular/core';
import { fromEvent } from 'rxjs';
import { debounceTime, map, distinctUntilChanged } from 'rxjs/operators';
import { NewsSearchService } from 'src/app/core/services/newsSearch.service';




@Component({
  selector: 'app-news-search',
  templateUrl: './news-search.component.html',
  styleUrls: ['./news-search.component.css']
})
export class NewsSearchComponent {

  @ViewChild('txtQuery', { static: true })
  txtQuery: ElementRef;
  search: string;
  showNews: any;


  constructor(private newsSearchService: NewsSearchService) { }



  ngOnInit() {
  }

  onQueryChanged() {

    fromEvent(this.txtQuery.nativeElement, 'keyup').pipe(
      map((k: KeyboardEvent) => k.target),
      debounceTime(1000),
      distinctUntilChanged(),
    ).subscribe(() => {
      this.newsSearchService.getQuery(this.search).subscribe((result: any) => {
        console.log(result);
        this.showNews = result.results;
      })
    }, (err: any) => {
      console.log('error', err);
    });

  }

}


