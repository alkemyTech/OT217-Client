import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PublicapiServiceService {

  baseUrl:string = "https://ongapi.alkemy.org/api/"

  rutaendpoint = (id:any) =>{
    return this.baseUrl + id;
  }

  constructor(private http:HttpClient) { }


  metodoGet(id:any, users:any):Observable<any>{
    return this.http.get(this.rutaendpoint(id || null),users)
  }
}
