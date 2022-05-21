import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { Router } from "@angular/router";
import { HttpService } from "../../../../core/services/http.service";
import { User } from "../../../../shared/models/user";
import { MatSnackBar } from "@angular/material/snack-bar";

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.scss'],
})
export class LoginFormComponent implements OnInit {
  login: User [] = [];
  createdForm: FormGroup | any;
  r: any;
  constructor(private formBuilder: FormBuilder,
              private router: Router,
              private service: HttpService,
              private _snackBar: MatSnackBar) {
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
    this.service.loginUser(this.createdForm.getRawValue())
      .subscribe(r => {
          if (r.success) {
            this.router.navigate(['/actividades']);
            this.service.addToken(r);
          }
          this.openSnackBar("Credentials Invalid");
        },
        error => {
          console.log("error");
        });
  }

}
