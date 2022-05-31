import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";

@Injectable({
  providedIn: "root",
})
export class PublicapiServiceService {
  protected baseUrl: string = "https://ongapi.alkemy.org/api/users";

  constructor(private http: HttpClient) {}

  public get<Users>(endpoint: string): Observable<Users> {
    return this.http.get<Users>(this.baseUrl + endpoint);
  }
  public put<Users>(body: any, id: string): Observable<Users> {
    return this.http.put<Users>(this.baseUrl + id, body);
  }

  public getById<Users>(id: string): Observable<Users> {
    return this.http.get<Users>(this.baseUrl + id);
  }

  public delete<Users>(id: string): Observable<Users> {
    return this.http.delete<Users>(this.baseUrl + id);
  }
}
