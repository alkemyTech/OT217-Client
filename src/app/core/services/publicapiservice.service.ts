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
}
