import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { PublicApiService } from './public-api.service';

@Injectable({
  providedIn: 'root'
})
export class SlidesService extends PublicApiService {

  public constructor(http:HttpClient) {
    super(http);
  }

  postSlides<Slides>(slides:Slides):Observable<Slides>{
    return this.post<Slides>(slides);
  }

  getSlides<Slides>():Observable<Slides>{
    return this.get<Slides>();
  }

  putSlides<Slides>(slides:Slides, id:string):Observable<Slides>{
    return this.put<Slides>(this.url+id,slides);
  }

  getSlidesById<Slides>(id:string):Observable<Slides>{
    return this.http.get<Slides>(this.url+id);
  }  
}
