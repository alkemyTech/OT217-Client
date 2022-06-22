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
  searchUrl:string = "/news?search="
 
  public constructor(http:HttpClient)  {
    super(http);
  }

  searchNews(search: string): Observable<any> {
    return this.getById<any>(this.searchUrl + search);
  }

  postNews<News>(news:any):Observable<any>{
    return this.post<News>(this.getUrl(),);
  }

  getNews<News>():Observable<any>{
    return this.get<News>(this.getUrl());
  }

  putNews<News>(news:any, id:string):Observable<News>{
    return this.put<News>(this.getUrl() + "/" + id, news);
  }

  getNewsById<News>(id:string):Observable<News>{
    return this.getById<News>(this.getUrl()+ "/" + id);
  }

  deleteNews<News>(id:string):Observable<News>{
    return this.delete<News>(this.getUrl()+ "/" + id);
  }

  getUrl(): string {
    return environment.news ;
  }


}
