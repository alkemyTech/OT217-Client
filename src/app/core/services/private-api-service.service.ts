import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Observable } from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class PrivateApiServiceService {

  private headers = new HttpHeaders({
    'Content-Type': 'application/json',
    'Accept': 'application/json',
    'Authorization': `Bearer ${localStorage.getItem("token")}` ,
  });
  constructor(private http: HttpClient) {}

  private put<T>(url: string, id: string | number, body: any):Observable<T> {
    return this.http.put<T>(url, body , { headers: this.headers });
  }

  private patch<T>(url: string, id: string | number, body: any):Observable<T> {
    return this.http.put<T>(url, body , { headers: this.headers });
  }

}
