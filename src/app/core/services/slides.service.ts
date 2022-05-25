import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SlidesService {

  constructor(private http: HttpClient) { }

  url:string = "https://ongapi.alkemy.org/api/slides";

  getSlides():Observable<any>{
    return this.http.get(this.url);
  }

  postSlides(slides:any):Observable<any>{
    return this.http.post(this.url,slides);
  }

  updateSlides(slides:any, id:string):Observable<any>{
    return this.http.put(this.url + `/${id}`,slides);
  }

  getSlidesId(id:string):Observable<any>{
    return this.http.get(this.url+`/${id}`);
  }
}
