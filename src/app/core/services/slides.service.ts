

import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { PublicApiService } from './public-api.service';

@Injectable({
  providedIn: 'root'
})
export class SlidesService extends PublicApiService {

  public constructor(public publicApiService:PublicApiService) {
    super(publicApiService.http);
  }

  postSlides<Slides>(slides:any):Observable<any>{
    return this.http.post(this.url,slides);
  }

  // constructor(private http: HttpClient) { }
/* 
  url:string = "https://ongapi.alkemy.org/api/slides";

  getSlides():Observable<any>{
    return this.http.get(this.url);
  } */

/* 
  updateSlides(slides:any, id:string):Observable<any>{
    return this.http.put(this.url + `/${id}`,slides);
  }

  getSlidesId(id:string):Observable<any>{
    return this.http.get(this.url+`/${id}`);
  }

  deleteSlidesId(id:string):Observable<any>{
    return this.http.delete(this.url+`/${id}`);
  } */
}
