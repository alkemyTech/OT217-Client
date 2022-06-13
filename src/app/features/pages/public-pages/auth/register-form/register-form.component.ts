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

@Component({
    selector: 'app-register-form',
    templateUrl: './register-form.component.html',
    styleUrls: ['./register-form.component.scss']
})
export class RegisterFormComponent implements OnInit {
    createdForm: FormGroup | any;
    passPattern = "^(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{6,}$"
    password = new FormControl;

    constructor(private formBuilder: FormBuilder,
                private router: Router,
                private service: HttpService) {
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
                this.router.navigate(['/actividades']);
                this.service.addToken(r);
            },
            error => {
                this.router.navigate(['/register'])
                console.log(error);
            });
        ;
    }

}