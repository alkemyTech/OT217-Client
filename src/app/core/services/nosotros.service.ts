import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { Organization } from 'src/app/shared/models/organization';
import { map, filter } from 'rxjs/operators';
import { OrganizationService } from './organization.service';
import { OrganizationListComponent } from 'src/app/features/pages/private-pages/organization/organization-list.component';
@Injectable({
  providedIn: 'root'
})
export class NosotrosService {
  
  
  private urlApi: string = "https://ongapi.alkemy.org/api/organization";
  
  
  constructor(private http: HttpClient) { }
  
  getNosotros(): Observable<Organization[]>{
    return this.http.get<Organization[]>(this.urlApi);
  }
  }

 
  
    
  


 









