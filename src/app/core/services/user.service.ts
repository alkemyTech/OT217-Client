import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { Users } from "src/app/shared/model/Users";
import { map } from "rxjs/operators";

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

  getUser(): Observable<Users[]> {
    return this.http.get<Users[]>(this.url).pipe(map((data)  => {
      const users:Users[] = [];
      for (let key in data){
        users.push({...data[key], id:key});
      }
      return users;
    }) )
  }

  deleteUser(id:string) {
    return this.http.delete(`https://ongapi.alkemy.org/api/users${id}`);
  }
}
