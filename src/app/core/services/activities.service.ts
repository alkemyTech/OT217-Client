import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { PublicApiService } from "./public-api.service";
import { environment } from "src/environments/environment";

@Injectable({
  providedIn: "root",
})
export class ActivitiesServices extends PublicApiService {
  public url: string = environment.activities
  public constructor(http: HttpClient) {
    super(http);
  }
  postActivities<Activities>(activities: any): Observable<any> {
    return this.post<Activities>(this.url, activities);
  }
  getActiviti<Activities>(): Observable<any> {
    return this.get<Activities>(this.url);
  }
  getActivitiesID<Activities>(id: string): Observable<Activities> {
    return this.getById<Activities>(this.url + "/" + id);
  }
  deleteActivities<Activities>(id: string): Observable<Activities> {
    return this.delete(this.url + "/" + id);
  }
  putActivities<Activities>(
    activities: any,
    id: string
  ): Observable<Activities> {
    return this.put<Activities>(this.url + "/" + id, activities);
  }
}
