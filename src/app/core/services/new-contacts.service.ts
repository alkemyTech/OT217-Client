import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { contacts } from "src/app/shared/models/contact";

@Injectable({
  providedIn: "root",
})
export class NewContactsService {
  baseUrl: string = "https://ongapi.alkemy.org/api/contacts";

  constructor(private http: HttpClient) {}

  getContacts(id: number): Observable<contacts> {
    const url = this.baseUrl + id;
    return this.http.get<contacts>(url);
  }

  postContacts(contact: contacts): Observable<contacts> {
    return this.http.post<contacts>(this.baseUrl, contact);
  }

  putContacts(contact: contacts): Observable<contacts> {
    const url = this.baseUrl + contact.id;
    return this.http.put<contacts>(url, contact);
  }

  deleteContacts(id: number): Observable<any> {
    const url = this.baseUrl + id;
    return this.http.delete(url);
  }
}
