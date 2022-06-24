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
    'Authorization': `Bearer ${localStorage.getItem("token")}`,
  });
  constructor(private http: HttpClient) { }

  public put<T>(url: string, id: string | number, body: any): Observable<T> {
    return this.http.put<T>(url, body, { headers: this.headers });
  }

  private delete<T>(url: string):Observable<T> {
    return this.http.delete<T>(url, { headers: this.headers});

    
    
  }
  public patch<T>(url: string, id: string | number, body: any):Observable<T> {
    return this.http.patch<T>(url, body , { headers: this.headers });
  }

  public post<T>(url: string, body: any): Observable<T> {
    return this.http.post<T>(url, body, { headers: this.headers });
  }

  public get<T>({ url, id }: { url: string; id: null; }): Observable<T> {
    return this.http.get<T>(url + { id }, { headers: this.headers });
  }



}
