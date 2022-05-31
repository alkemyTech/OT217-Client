import { Injectable } from '@angular/core';
import { PublicApiServiceService } from './public-api-service.service';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Slides } from 'src/app/shared/models/Slides';

@Injectable({
  providedIn: 'root'
})
export class SlidesService {
  url:string = "https://ongapi.alkemy.org/api/slides";

  constructor(private https: PublicApiServiceService, private http:HttpClient) { }

  getSlides():Observable<any>{
    return this.http.get(this.url);
  }

  postSlides(endpoint:string, slides:any):Observable<Slides>{
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
