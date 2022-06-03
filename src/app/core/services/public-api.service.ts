import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { environment } from "../../../environments/environment";


@Injectable({
  providedIn: "root",
})
export abstract class PublicApiService {
  constructor(public http: HttpClient) {}

  protected baseUrl: string = environment.baseUrl;

  abstract getUrl(): string;

  public post<T>(body: any): Observable<T> {
    return this.http.post<T>(this.baseUrl + this.getUrl(), body);
  }

  public get<T>(endpoint:string): Observable<T> {
    return this.http.get<T>(this.baseUrl + this.getUrl());
  }

  public put<T>(body: any, id: string): Observable<T> {
    return this.http.put<T>(this.baseUrl + id, body);
  }

  public getById<T>(id: string): Observable<T> {
    return this.http.get<T>(this.baseUrl + this.getUrl() +'/'+id);
  }

  public delete<T>(id: string): Observable<T> {
    return this.http.delete<T>(this.baseUrl + id);
  }
}
