import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { Global } from "./global";
import { Activities } from "src/app/features/models";

@Injectable({
  providedIn: "root",
})
export class Update{
  private _groupId!: string;
  private _headers!: HttpHeaders;
  public url : string;

  constructor(private http: HttpClient) {
    this._headers = new HttpHeaders({ Group: this._groupId });
    this.url = Global.url
  }

  putActivities(activities: any, id: string): Observable<any>{
    let params = JSON.stringify(activities)
    let headers = new HttpHeaders().set('Content-Type','application/json');
    return this.http.put(this.url+'activities/'+id, params, {headers:headers})
  }
}