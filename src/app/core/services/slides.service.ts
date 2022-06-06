import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { PublicApiService } from './public-api.service';
import { environment } from "../../../environments/environment.prod";

@Injectable({
  providedIn: 'root'
})
export class SlidesService extends PublicApiService {

  public constructor(http:HttpClient) {
    super(http);
  }

  postSlides<Slides>(slides:any, body:any):Observable<any>{
    return this.post<Slides>(slides, body);
  }

  getSlides<Slides>():Observable<any>{
    return this.get<Slides>(this.getUrl());
  }

  putSlides<Slides>(slides:any, id:string):Observable<Slides>{
    return this.put<Slides>(id,slides);
  }

  getSlidesById<Slides>(id:string):Observable<Slides>{
    return this.getById<Slides>(this.getUrl()+'/'+id);
  }

  deleteSlides<Slides>(id:string):Observable<Slides>{
    return this.delete<Slides>(this.getUrl()+'/' +id);
  }
  getUrl(): string {
    return environment.slidesUrl;
  }

}
