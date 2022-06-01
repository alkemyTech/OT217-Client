import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { PublicapiserviceService } from "./publicapiservice.service";

@Injectable({
  providedIn: "root",
})
export class NewUsersService extends PublicapiserviceService {
  constructor(http: HttpClient) {
    super(http);
  }

  getUsers<Users>(endpoint: string, id: any): Observable<Users> {
    return this.get<Users>(endpoint, id);
  }

  postUsers<Users>(users: Users): Observable<Users> {
    return this.post<Users>(users);
  }
  putUsers<Users>(users: any, id: string): Observable<Users> {
    return this.put<Users>(users, id);
  }
  getUsersById<Users>(id: string): Observable<Users> {
    return this.getById<Users>("users/" + id);
  }

  deleteUsers<Users>(id: string): Observable<Users> {
    return this.delete<Users>("users/" + id);
  }
}
