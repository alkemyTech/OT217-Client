import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NewsService {

  constructor(private http: HttpClient) { }

  url:string = "https://ongapi.alkemy.org/api/news";

  getNews():Observable<any>{
    return this.http.get(this.url);
  }

  postNews(news:any):Observable<any>{
    return this.http.post(this.url,news);
  }

  updateNews(news:any, id:string):Observable<any>{
    return this.http.put(this.url + `/${id}`,news);
  }

  getNewsId(id:string):Observable<any>{
    return this.http.get(this.url+`/${id}`);
  }
}
