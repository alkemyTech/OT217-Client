import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs'

@Injectable({
    providedIn: 'root'
})
export class OrganizationListService {

    constructor(private _http: HttpClient) { }

    organizationApiUrl = "https://ongapi.alkemy.org/api/organization"





    topOrganization(): Observable<any> {
        return this._http.get(this.organizationApiUrl);
    }
}


