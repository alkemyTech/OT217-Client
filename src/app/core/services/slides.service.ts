import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { PublicApiService } from './public-api.service';
import { environment } from "../../../environments/environment.prod";

@Injectable({
  providedIn: 'root'
})
export class SlidesService extends PublicApiService {

  postSlides<Slides>(slides: any): Observable<any> {
    return this.post<Slides>(slides);
  }

  getSlides<Slides>():Observable<any>{
    return this.get<Slides>(this.getUrl());
  }

  putSlides(slides: any, id: string): Observable<any> {
    return this.put<any>('https://ongapi.alkemy.org/api/slides/' + String(id), slides);
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


  newPut(slide:any, id:string):Observable<any>{
    return this.http.put('https://ongapi.alkemy.org/api/slides/' + id, slide)
  }
}
