import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { Router } from "@angular/router";
import { User } from "../../shared/models/user";

@Injectable({
  providedIn: "root",
})
export class HttpService {
  private _groupId!: string;
  private readonly _headers!: HttpHeaders;
  readonly url: string = 'https://ongapi.alkemy.org/api/login'

  readonly registerUrl: string = 'https://ongapi.alkemy.org/api/register'

  constructor(private http: HttpClient, private router: Router,) {
    this._headers = new HttpHeaders({ Group: this._groupId });
  }

  public get<T>(url: string, activateHeader:boolean = false ):Observable<T> {
    return this.http.get<T>(url, activateHeader ? { headers: this._headers }: {});

  }
  isLoggedIn() {
    if(localStorage.getItem("token")){
      return true
    }
    return false;
  }
  loginUser(login : User) : Observable<any>{
    console.log(login)
    return this.http.post(this.url, login);
  }

  logOut() {
    localStorage.removeItem("token");
    this.router.navigate(['/login']);
  }
  addToken(r: any) {
    localStorage.setItem("token", r.token)
  }

    registerUser(register : User) {
      return this.http.post(this.registerUrl, register);
    }
}



