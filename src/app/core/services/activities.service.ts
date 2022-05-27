import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { Global } from "./global";

@Injectable({
  providedIn: "root",
})
export class Listing{
  private _groupId!: string;
  private _headers!: HttpHeaders;
  public url : string;

  constructor(private http: HttpClient) {
    this._headers = new HttpHeaders({ Group: this._groupId });
    this.url = Global.url
  }


  getActivities(id: string): Observable<any>{
    let headers = new HttpHeaders().set('Content-Type', 'application/json');
    return this.http.get( this.url+'activities/'+id,{headers:headers})
  }
}