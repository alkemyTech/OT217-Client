import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { Users } from "src/app/shared/model/Users";
import { map } from 'rxjs/operators'
import { PublicApiService } from "./public-api.service";
import { environment } from "src/environments/environment";

@Injectable({
  providedIn: "root",
})
export class UserService extends PublicApiService {
  getUrl(): string {
    return environment.users;
  }

  public constructor(http: HttpClient) {
    super(http);
  }
  url: string = "https://ongapi.alkemy.org/api/users";
  searchUrl:string = "/users?search="

  postUser(user: any): Observable<any> {
    return this.http.post(this.url, user);
  }

  putUser(user: any, id: string) {
    return this.http.put(this.url + `/${id}`, user);
  }

  getUser():Observable<Users[]>{
    return this.http.get<Users[]>(this.url).pipe
    (map((data) => {
      console.log(data)
      return data;
    }),
    )
    }

    deleteUser(user: Users): Observable<Users> {
      const url = `${this.url}/${user.id}`;
      return this.http.delete<Users>(url);
    }

    getUsers<Users>():Observable<any>{
      return this.get<Users>(this.getUrl());
    }

    deleteUsers<Users>(id:string):Observable<Users>{
      return this.delete<Users>(this.getUrl()+'/' +id);
    }
    
}
