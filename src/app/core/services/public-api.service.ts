import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PublicApiService {

  constructor(public http:HttpClient) { }

  protected url:string = "https://ongapi.alkemy.org/api/"

  public post<T>(body:any):Observable<any>{
    return this.http.post(this.url,body);
  }

  
}
