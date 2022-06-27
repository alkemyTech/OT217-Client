import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";

@Injectable({
  providedIn: "root",
})
export class UserSearchService {
  constructor(private http: HttpClient) {}

  usersApi = "https://ongapi.alkemy.org/api/users?search=";

  getQuery(query: string) {
    const url = `${this.usersApi}${query}`;

    return this.http.get(url);
  }
}
