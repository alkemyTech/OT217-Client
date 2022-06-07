import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { Contacts } from "src/app/shared/models/contact";
import { environment } from "src/environments/environment";
import { PublicApiService } from "./public-api.service";

@Injectable({
  providedIn: "root",
})
export class NewContactsService extends PublicApiService {
  constructor(http: HttpClient) {
    super(http);
  }

  getContacts<Contacts>(): Observable<Contacts> {
    return this.get<Contacts>(this.getUrl());
  }

  postContacts<Contacts>(contacts: Contacts): Observable<Contacts> {
    return this.post<Contacts>(contacts);
  }

  putContacts<Contacts>(contacts: any, id: string): Observable<Contacts> {
    return this.put<Contacts>(id, contacts);
  }

  getContactsById<Contacts>(id: string): Observable<Contacts> {
    return this.getById<Contacts>(this.getUrl()+'/' + id);
  }
  deleteContacts<Contacts>(id: string): Observable<Contacts> {
    return this.delete<Contacts>(this.getUrl()+'/' + id);
  }
  getUrl(): string {
    return environment.contacts ;
  }
}
