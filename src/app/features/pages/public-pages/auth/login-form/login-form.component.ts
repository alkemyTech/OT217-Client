import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { Router } from "@angular/router";
import { HttpService } from "../../../../../core/services/http.service";
import { User } from "../../../../../shared/models/user";
import { MatSnackBar } from "@angular/material/snack-bar";
import { Observable } from "rxjs";
import { loginUser } from "../../../../../shared/state/auth/auth.selectors";
import { Store } from "@ngrx/store";
import { AppState } from "../../../../../shared/state/app.state";
import { loginUsers } from "../../../../../shared/state/auth/auth.actions";

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.scss'],
})
export class LoginFormComponent implements OnInit {
  login: User [] = [];
  createdForm: FormGroup | any;
  r: any;
  hide = true
  private loading$:  Observable<boolean> = new Observable();
  constructor(private formBuilder: FormBuilder,
              private router: Router,
              private service: HttpService,
              private _snackBar: MatSnackBar,
              private store: Store<AppState>,
  ) {
  }

  ngOnInit(): void {
    this.createdForm = this.formBuilder.group({
      email: ['', [Validators.required]],
      password: ['', [Validators.required]
      ]
    })


  }

  logIn(res: any) {
    localStorage.setItem("Token", res.token)
  }

  openSnackBar(message: string) {
    this._snackBar.open(message,'X',{
      duration: 3000,
    });
  }

  submit() {
    this.service.loginUser(this.createdForm.getRawValue()).subscribe(r => {
          if (r.success) {

            this.router.navigate(['/home']);
            this.service.addToken(r);
            this.loading$ = this.store.select(loginUser);
            this.store.dispatch(loginUsers())
          }
         else {
         this.openSnackBar("Credentials Invalid");
          }
        },
        error => {
          console.log("error");
        });
  }

}
