import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { Organization } from 'src/app/shared/models/organization';
import { OrganizationService } from './organization.service';
@Injectable({
  providedIn: 'root'
})
export class NosotrosService {
  
  private urlApi: string = "https://ongapi.alkemy.org/api/organization";

  constructor(private http: HttpClient) { }
  

  getNosotros(): Observable<Organization[]>{
    return this.http.get<Organization[]>(this.urlApi)
  }
 
  }
    
  


 









