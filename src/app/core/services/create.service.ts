import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { Activities } from "../../../../src/app/features/models"
import { Global } from "./global";

@Injectable({
  providedIn: "root",
})
export class CreateService {
  private _groupId!: string;
  private _headers!: HttpHeaders;
  public url: string

  constructor(private http: HttpClient) {
    this._headers = new HttpHeaders({ Group: this._groupId });
    this.url= Global.url
  }

  postActivities(activities: Activities): Observable<any>{
    let params = JSON.stringify(activities)
    let headers = new HttpHeaders().set('Content-Type','application/json');
    return this.http.post(this.url+'activities', params, {headers:headers})
  }
}