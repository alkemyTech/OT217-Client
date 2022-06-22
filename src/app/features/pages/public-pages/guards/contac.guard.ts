import { Injectable } from "@angular/core";
import { UserService } from "src/app/core/services/user.service";
import {
  ActivatedRouteSnapshot,
  CanActivate,
  Router,
  RouterStateSnapshot,
  UrlTree,
} from "@angular/router";
import { Observable } from "rxjs";

@Injectable({
  providedIn: "root",
})
export class ContactGuard implements CanActivate {
  constructor(private route: Router) {}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ):
    | Observable<boolean | UrlTree>
    | Promise<boolean | UrlTree>
    | boolean
    | UrlTree {
    const token = localStorage.getItem("token");
    console.log(token)


    if (token == 'admin') {
        this.route.navigate(['backoffice'])
        return false;
    } else {
      return true;
    }
  }
}
