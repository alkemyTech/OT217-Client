import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";

@Injectable({
  providedIn: "root",
})
export class PublicapiserviceService {
  protected baseUrl: string = "https://ongapi.alkemy.org/api/";

  constructor(public http: HttpClient) {}

  public get<T>(endpoint: string, id: number | null): Observable<T> {
    return this.http.get<T>(this.baseUrl + endpoint + "/" + id);
  }
  public post<T>(body: any): Observable<T> {
    return this.http.post<T>(this.baseUrl, body);
  }
  public put<T>(body: any, id: string): Observable<T> {
    return this.http.put<T>(this.baseUrl + id, body);
  }

  public getById<T>(id: string): Observable<T> {
    return this.http.get<T>(this.baseUrl + id);
  }

  public delete<T>(id: string): Observable<T> {
    return this.http.delete<T>(this.baseUrl + id);
  }
}
