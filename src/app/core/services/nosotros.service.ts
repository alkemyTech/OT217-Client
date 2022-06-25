import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Organization } from 'src/app/features/models';

@Injectable({
  providedIn: 'root'
})
export class NosotrosService {
  
  private urlApi = "https://ongapi.alkemy.org/api/organization";
  
  constructor(private http: HttpClient) { 

  }
    
  

  getOrganization(): Observable<Organization[]> {
    return this.http.get<Organization[]>(this.urlApi)
  }

 




}




