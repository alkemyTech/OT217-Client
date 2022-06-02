import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";

@Injectable({
  providedIn: "root",
})
export abstract class PublicApiService {
  constructor(public http: HttpClient) {}

  protected url: string = "https://ongapi.alkemy.org/api/";

  public post<T>(body: any): Observable<T> {
    return this.http.post<T>(this.url, body);
  }

  public get<T>(endpoint:string): Observable<T> {
    return this.http.get<T>(this.url+endpoint);
  }

  public put<T>(body: any, id: string): Observable<T> {
    return this.http.put<T>(this.url + id, body);
  }

  public getById<T>(id: string): Observable<T> {
    return this.http.get<T>(this.url+'/'+id);
  }

  public delete<T>(id: string): Observable<T> {
    return this.http.delete<T>(this.url + id);
  }
}
