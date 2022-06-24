import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { Router } from '@angular/router';



@Injectable({
  providedIn: 'root'
})
export class LogoutService {

  constructor(private afAuth: AngularFireAuth, private router: Router) { }

  logOut(): void {
    this.afAuth.signOut().then(() => {
      this.router.navigate(['/login']);
    });
  }


}

