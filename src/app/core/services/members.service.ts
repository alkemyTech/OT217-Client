import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs'

@Injectable({
    providedIn: 'root'
})
export class MembersService {

    constructor(private _http: HttpClient) { }

    organizationApiUrl = "https://ongapi.alkemy.org/api/members"


    getOrganization(): Observable<any> {
        return this._http.get(this.organizationApiUrl);
    }

}
