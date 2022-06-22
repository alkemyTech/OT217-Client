import { Injectable } from "@angular/core";
import {
  ActivatedRouteSnapshot,
  CanActivate,
  Router,
  RouterStateSnapshot,
  UrlTree,
} from "@angular/router";
import { Observable } from "rxjs";
import { AlertsService } from "src/app/core/services/alerts.service";

@Injectable({
  providedIn: "root",
})
export class DonationsGuard implements CanActivate {
  constructor(private alert: AlertsService, private route: Router) {}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ):
    | Observable<boolean | UrlTree>
    | Promise<boolean | UrlTree>
    | boolean
    | UrlTree {
    const role = localStorage.getItem("userId");

    if (role === 'admin') {
      this.alert.adminDonation()
      this.route.navigate(['backoffice'])
      return false;
    } else {
      return true;
    }
  }
}
