import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { Users } from "src/app/shared/model/Users";

@Injectable({
  providedIn: "root",
})
export class UserService {
  constructor(private http: HttpClient) {}

  url: string = "https://ongapi.alkemy.org/api/users";

  postUser(user: any): Observable<any> {
    return this.http.post(this.url, user);
  }

  putUser(user: any, id: string) {
    return this.http.put(this.url + `/${id}`, user);
  }

  getUser(): Observable<any> {
    return this.http.get(this.url);
  }

  deleteUser(user: Users): Observable<Users> {
    const url = `${this.url}/${user.id}`;
    return this.http.delete<Users>(url);
  }
}
