import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PostService {
  url:string = "https://ongapi.alkemy.org/api/";
  headers:any;

  constructor(private http:HttpClient) {
    this.headers = new HttpHeaders({
      "Content-Type": "application/json",
      Authorization: "Bearer "+localStorage.getItem("token"),
    })
   }

  postSlides(endpoint:string, slides:any):Observable<any>{
    let fullUrl = this.url + endpoint;
    return this.http.post(fullUrl,slides, { headers: this.headers});
  }
}
