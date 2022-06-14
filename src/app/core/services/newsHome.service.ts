import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { environment } from 'src/environments/environment';
import { catchError } from 'rxjs/operators';
import { SetupAlertsComponent } from 'src/app/features/components/setup-alerts/setup-alerts.component';

@Injectable({
  providedIn: 'root'
})
export class NewsHomeService {

  endpointSlides: string = environment.slidesUrl;
  endpointNews: string = environment.news;
  endpointTestimonials: string = environment.testimonials;
  errorMessage: any = SetupAlertsComponent.openDialog();

  constructor(public http: HttpClient) { }

  getSlides<Slides>(endpointSlides: string): Observable<any> {
    return this.getSlides<Slides>(endpointSlides).pipe(
      catchError(_err => throwError(() => new Error(this.errorMessage)))
    );

  }

  getNews<News>(endpointNews: string): Observable<any> {
    return this.getNews<News>(endpointNews).pipe(
      catchError(_err => throwError(() => new Error(this.errorMessage)))
    )
  }

  getTestimonials<Testimonials>(endpointTestimonials: string): Observable<any> {
    return this.getTestimonials<Testimonials>(endpointTestimonials).pipe(
      catchError(_err => throwError(() => new Error(this.errorMessage)))
    );
  }


}