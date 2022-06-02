import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { PublicApiService } from './public-api.service';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class NewsService extends PublicApiService {

  endpoint:string = environment.news;

  public constructor(http:HttpClient)  {
    super(http);
  }

  postNews<News>(news:any):Observable<any>{
    return this.post<News>(this.endpoint,news);
  }

  getNews<News>():Observable<any>{
    return this.get<News>(this.endpoint);
  }

  putNews<News>(news:any, id:string):Observable<News>{
    return this.put<News>(this.endpoint + "/" + id, news);
  }

  getNewsById<News>(id:string):Observable<News>{
    return this.getById<News>(this.endpoint+ "/" + id);
  }

  deleteNews<News>(id:string):Observable<News>{
    return this.delete<News>(this.endpoint+ "/" + id);
  }
  
}
