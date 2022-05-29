import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PublicPostService {
  url:string = "https://ongapi.alkemy.org/api/";
  generateRoute = (endpoint:string) =>{
    return this.url + endpoint
  }

  constructor(private http:HttpClient) { }

  postSlides(endpoint:string, slides:any):Observable<any>{
    return this.http.post(this.generateRoute(endpoint),slides);
  }
}
