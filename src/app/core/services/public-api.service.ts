import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";

@Injectable({
  providedIn: "root",
})
export abstract class PublicApiService {
  constructor(public http: HttpClient) {}

  public post<T>(url:string, body: any): Observable<T> {
    return this.http.post<T>(url, body);
  }

  public get<T>(url:string): Observable<T> {
    return this.http.get<T>(url);
  }

  public put<T>(url: string, body: string): Observable<T> {
    return this.http.put<T>(url, body);
  }

  public getById<T>(url:string): Observable<T> {
    return this.http.get<T>(url);
  }

  public delete<T>(url:string): Observable<T> {
    return this.http.delete<T>(url);
  }
}
