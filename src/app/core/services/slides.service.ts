import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Observable } from 'rxjs';
import { PrivateApiServiceService } from './private-api-service.service';

@Injectable({
  providedIn: 'root'
})
export class SlidesService {

  constructor(private http: HttpClient, private privateApiServiceService:PrivateApiServiceService) { }

  url:string = "https://ongapi.alkemy.org/api/slides";

  getSlides():Observable<any>{
    return this.http.get(this.url);
  }

  postSlides(slides:any):Observable<any>{
    return this.privateApiServiceService.postSlides(this.url, slides);
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
