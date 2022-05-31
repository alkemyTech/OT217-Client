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

  postSlides<Slides>(slides:any):Observable<any>{
    return this.post<Slides>(slides);
  }

  getSlides<Slides>():Observable<any>{
    return this.get<Slides>('slides');
  }

  putSlides<Slides>(slides:any, id:string):Observable<Slides>{
    return this.put<Slides>(id,slides);
  }

  getSlidesById<Slides>(id:string):Observable<Slides>{
    return this.getById<Slides>('slides/'+id);
  }

  deleteSlides<Slides>(id:string):Observable<Slides>{
    return this.delete<Slides>("slides/" +id);
  }
}
