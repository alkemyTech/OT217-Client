import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { PublicApiService } from './public-api.service';

@Injectable({
  providedIn: 'root'
})
export class NewsService extends PublicApiService {

  public constructor(http:HttpClient)  {
    super(http);
  }

  postNews<News>(news:any):Observable<any>{
    return this.post<News>(news);
  }

  getNews<News>():Observable<any>{
    return this.get<News>('news');
  }

  putNews<News>(news:any, id:string):Observable<News>{
    return this.put<News>(id,news);
  }

  getNewsById<News>(id:string):Observable<News>{
    return this.getById<News>('news/'+id);
  }

  deleteNews<News>(id:string):Observable<News>{
    return this.delete<News>("news/" +id);
  }
  
}
