import { Injectable } from "@angular/core";
import { AngularFireAuth } from "@angular/fire/compat/auth";
import firebase from "firebase/compat/app";

@Injectable({
  providedIn: "root",
})
export class AuthGoogleService {
  constructor(private afauth: AngularFireAuth) {}
  authGoogle() {
    return this.afauth.signInWithPopup(new firebase.auth.GoogleAuthProvider());
  }
}
