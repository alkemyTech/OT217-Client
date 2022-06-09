import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { PublicApiService } from './public-api.service';


@Injectable({
  providedIn: 'root'
})
export class NewsHomeService extends PublicApiService {

  endpointSlides: string = environment.slides;
  endpointNews: string = environment.news;
  endpointTestimonials: string = environment.testimonials;

  constructor(public http: HttpClient) { super(http) }

  getSlides<Slides>(): Observable<any> {
    return this.get<Slides>(this.endpointSlides);
  }

  getNews<News>(): Observable<any> {
    return this.get<News>(this.endpointNews);
  }

  getTestimonials<Testimonials>(): Observable<any> {
    return this.get<Testimonials>(this.endpointTestimonials);
  }

}



