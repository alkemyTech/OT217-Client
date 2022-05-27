import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders } from "@angular/common/http";
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SlidesService {

  url:string = "https://ongapi.alkemy.org/api/slides";
  constructor(private _http: HttpClient) { }

  getSlide():Observable<any>{
    return this._http.get(this.url);
  }


  putSlide(slide: any, id: any):Observable<any>{
    let params = JSON.stringify(slide)
    let headers = new HttpHeaders().set('Content-Type', 'application/json');
    return this._http.put(this.url+'/'+id,params,{headers: headers});
  }
}
