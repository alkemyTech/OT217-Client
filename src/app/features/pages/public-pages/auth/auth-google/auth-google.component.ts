import { Component } from "@angular/core";
import { AuthGoogleService } from "src/app/core/services/authGoogle.service";
import { HttpService } from "src/app/core/services/http.service";
import { Router } from "@angular/router";
import { User } from "src/app/shared/models/user";
@Component({
  selector: "app-auth-google",
  templateUrl: "./auth-google.component.html",
  styleUrls: ["./auth-google.component.scss"],
})
export class AuthGoogleComponent {
  public newUser: boolean = false;
  public userGoogle: any;
  public user: User;
  constructor(
    private authService: AuthGoogleService,
    private saveService: HttpService,
    private router: Router
  ) {}

  IngresarGoogle() {
    this.authService.authGoogle().then((res) => {
      console.log("successful", res);
      this.newUser = res.additionalUserInfo.isNewUser;
      this.user = {
        name: res.user.providerData[0].displayName,
        email: res.user.providerData[0].email,
        password: res.user.uid,
      };
      this.saveCredetianls();
    });
  }

  saveCredetianls() {
    if (this.newUser) {
      this.saveService.registerUser(this.user).subscribe(
        (r) => {
          this.router.navigate(["/actividades"]);
          this.saveService.addToken(r);
        },
        (error) => {
          this.router.navigate(["/register"]);
        }
      );
    } else {
      this.saveService.loginUser(this.user).subscribe(
        (r) => {
          if (r.success) {
            this.router.navigate(["/actividades"]);
            this.saveService.addToken(r);
          }
        },
        (error) => {}
      );
    }
  }
}
