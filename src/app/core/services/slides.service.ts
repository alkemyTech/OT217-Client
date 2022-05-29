import { Injectable } from '@angular/core';
import { PublicPostService } from './public/public-post.service';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class SlidesService {
  url:string = "https://ongapi.alkemy.org/api/slides";

  constructor(private https: PublicPostService, private http:HttpClient) { }

  getSlides():Observable<any>{
    return this.http.get(this.url);
  }

  postSlides(endpoint:string, slides:any):Observable<any>{
    return this.https.postSlides(endpoint, slides);
  }

  updateSlides(slides:any, id:string):Observable<any>{
    return this.http.put(this.url + `/${id}`,slides);
  }

  getSlidesId(id:string):Observable<any>{
    return this.http.get(this.url+`/${id}`);
  }

  deleteSlidesId(id:string):Observable<any>{
    return this.http.delete(this.url+`/${id}`);
  }
}
