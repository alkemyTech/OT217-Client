import { Component, OnInit } from '@angular/core';
import {
    AbstractControl,
    FormBuilder,
    FormControl,
    FormGroup,
    ValidationErrors,
    ValidatorFn,
    Validators
} from "@angular/forms";
import { Router } from "@angular/router";
import { HttpService } from "../../../../../core/services/http.service";
import { Store } from "@ngrx/store";
import { AppState } from "../../../../../shared/state/app.state";
import { loginUser, registerUser } from "../../../../../shared/state/auth/auth.selectors";
import { loginUsers, registerUsers } from "../../../../../shared/state/auth/auth.actions";
import { Observable } from "rxjs";

@Component({
    selector: 'app-register-form',
    templateUrl: './register-form.component.html',
    styleUrls: ['./register-form.component.scss']
})
export class RegisterFormComponent implements OnInit {
    createdForm: FormGroup | any;
    passPattern = "^(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{6,}$"
    password = new FormControl;
    private loading$:  Observable<boolean> = new Observable();;

    constructor(private formBuilder: FormBuilder,
                private router: Router,
                private service: HttpService,
                private store: Store<AppState>,
                ){
    }


    ngOnInit(): void {
        this.createdForm = this.formBuilder.group({
            name: ['', [Validators.required]],
            email: ['', [Validators.required]],
            password: ['', [Validators.required, Validators.pattern(this.passPattern)]],
            confirmPassword: ['', [Validators.required, Validators.pattern(this.passPattern)]],
        }, {
            validator: this.checkPasswords
        });
    }

    checkPasswords: ValidatorFn = (group: AbstractControl): ValidationErrors | null => {
        let pass = group.get('password')?.value;
        let confirmPass = group.get('confirmPassword')?.value
        return pass === confirmPass ? null : {notSame: true}
    }

    submit() {
        this.service.registerUser(this.createdForm?.getRawValue()).subscribe(r => {
                this.service.addToken(r);
                this.loading$ = this.store.select(registerUser);
                this.store.dispatch(registerUsers());
                this.router.navigate(['/home']);
            },
            error => {
                this.router.navigate(['/register'])
                console.log(error);
            });
        ;
    }

}