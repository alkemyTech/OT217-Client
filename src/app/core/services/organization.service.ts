
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class OrganizationService {


  organizationApiUrl = "https://ongapi.alkemy.org/api/organization"
  headers: HttpHeaders | { [header: string]: string | string[]; } | undefined;


  topOrganization(): Observable<any> {
    return this._http.get(this.organizationApiUrl);
  }
  url: string = "https://ongapi.alkemy.org/api/organization/";
  constructor(private _http: HttpClient) { }

  getOrganization(id: string): Observable<any> {
    let headers = new HttpHeaders().set('Content-Type', 'application/json');
    return this._http.get(this.url + id, { headers: headers });
  }


  putOrganization(organization: any, id: string): Observable<any> {
    let params = JSON.stringify(organization)
    return this._http.put(this.url + id, params, { headers: this.headers })
  }

}
