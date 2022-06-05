import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { PublicApiService } from "./public-api.service";

@Injectable({
  providedIn: "root",
})
export class ActivitiesServices extends PublicApiService {
  public url: string = "https://ongapi.alkemy.org/api/";
  public constructor(http: HttpClient) {
    super(http);
  }
  postActivities<Activities>(activities: any): Observable<any> {
    return this.post<Activities>(this.url + "activities", activities);
  }
  getActiviti<Activities>(): Observable<any> {
    return this.get<Activities>(this.url + "activities");
  }
  getActivitiesID<Activities>(id: string): Observable<Activities> {
    return this.getById<Activities>(this.url + "activities/" + id);
  }
  deleteActivities<Activities>(id: string): Observable<Activities> {
    return this.delete(this.url + "activities/" + id);
  }
  putActivities<Activities>(
    activities: any,
    id: string
  ): Observable<Activities> {
    return this.put<Activities>(this.url + id, activities);
  }
}
