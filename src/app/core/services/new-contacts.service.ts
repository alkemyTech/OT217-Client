import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { Contacts } from "src/app/shared/models/contact";
import { PublicapiserviceService } from "./publicapiservice.service";

@Injectable({
  providedIn: "root",
})
export class NewContactsService extends PublicapiserviceService {
  constructor(http: HttpClient) {
    super(http);
  }

  getContacts<Contacts>(): Observable<Contacts> {
    return this.get<Contacts>("contacts");
  }

  postContacts<Contacts>(contacts: Contacts): Observable<Contacts> {
    return this.post<Contacts>(contacts);
  }

  putContacts<Contacts>(contacts: any, id: string): Observable<Contacts> {
    return this.put<Contacts>(id, contacts);
  }

  getContactsById<Contacts>(id: string): Observable<Contacts> {
    return this.getById<Contacts>("contacts/" + id);
  }
  deleteContacts<Contacts>(id: string): Observable<Contacts> {
    return this.delete<Contacts>("contacts/" + id);
  }
}
