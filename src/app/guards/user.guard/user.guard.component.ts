import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { HttpService } from 'src/app/core/services/http.service';


@Injectable({
  providedIn: 'root'
})
export class UserGuard implements CanActivate {
  constructor(private service: HttpService, private router: Router) { }
  canActivate(
    _route: ActivatedRouteSnapshot,
    _state: RouterStateSnapshot
  ): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    if (this.service.loginUser) {
      return true;
    } else {
      this.router.navigate(['/']);
      return false;
    }
  }
}
