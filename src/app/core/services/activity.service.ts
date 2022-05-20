import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ActivityService {

  constructor(private http: HttpClient) { }

  url:string = "https://ongapi.alkemy.org/api/activities";

  getActivities():Observable<any>{
    return this.http.get(this.url);
  }

}
