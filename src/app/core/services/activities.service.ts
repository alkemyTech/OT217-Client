import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable, throwError } from "rxjs";
import { PublicApiService } from "./public-api.service";
import { environment } from "../../../environments/environment.prod";
import { catchError } from "rxjs/operators";
import { ErrorActivitiesService } from "./errorActivities.service";
@Injectable({
  providedIn: "root",
})
export class ActivitiesServices extends PublicApiService {
  public url: string = environment.activities;
  public constructor(http: HttpClient, private errors: ErrorActivitiesService) {
    super(http);
  }
  postActivities<Activities>(activities: any): Observable<any> {
    return this.post<Activities>(activities).pipe(
      catchError((_err) => throwError(() => this.errors.openSnackBar(_err)))
    );
  }

  getActiviti<Activities>(): Observable<any> {
    return this.get<Activities>(this.baseUrl + this.getUrl()).pipe(
      catchError((_err) => throwError(() => this.errors.openSnackBar(_err)))
    );
  }
  getActivitiesID<Activities>(id: string): Observable<Activities> {
    return this.getById<Activities>(this.url + "/" + id).pipe(
      catchError((_err) => throwError(() => this.errors.openSnackBar(_err)))
    );
  }
  getActivitiesSearch<Activities>(search: string): Observable<Activities> {
    return this.getById<Activities>(this.url + "?search=" + search).pipe(
      catchError((_err) => throwError(() => this.errors.openSnackBar(_err)))
    );
  }
  deleteActivities<Activities>(id: string): Observable<Activities> {
    return this.delete(this.url + "/" + id);
  }
  putActivities<Activities>(
    activities: any,
    id: string
  ): Observable<Activities> {
    return this.put<Activities>(activities, this.url + "/" + id).pipe(
      catchError((_err) => throwError(() => this.errors.openSnackBar(_err)))
    );
  }

  getUrl(): string {
    return environment.activities;
  }
}
