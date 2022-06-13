import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';



import { PublicApiService } from './public-api.service';

@Injectable({
  providedIn: 'root'
})
export class OrganizationListService extends PublicApiService {
  getUrl(): string {
    throw new Error('Error');
  }

  endpoint: string = environment.organizationList;

  public constructor(http: HttpClient) {
    super(http);
  }

  postOrganization<Organization>(organization: any): Observable<any> {
    return this.post<Organization>(this.endpoint);
  }

  getOrganization<Organization>(): Observable<any> {
    return this.get<Organization>(this.endpoint);
  }

  putOrganization<Organization>(organization: any, id: string): Observable<Organization> {
    return this.put<Organization>(this.endpoint + "/" + id, organization);
  }

  getOrganizationById<Organization>(id: string): Observable<Organization> {
    return this.getById<Organization>(this.endpoint + "/" + id);
  }


}
