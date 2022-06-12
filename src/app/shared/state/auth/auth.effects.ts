import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { EMPTY } from 'rxjs';
import { map, mergeMap, catchError } from 'rxjs/operators';
import { HttpService } from "../../../core/services/http.service";
import { User } from "../../models/user";

@Injectable()
export class authEffects {
  private user!: User;

  loginUser$ = createEffect(() => this.actions$.pipe(
      ofType('[Login User] Login User'),
      mergeMap(() => this.loginService.loginUser(this.user)
        .pipe(
          map(news => ({ type: '[Login User] Login user success', user: this.user })),
          catchError(() => EMPTY)
        ))
    )
  );
  registerUser$ = createEffect(() => this.actions$.pipe(
      ofType('[Register User] Register User'),
      mergeMap(() => this.loginService.registerUser(this.user)
        .pipe(
          map(news => ({ type: '[Register User User] Register success', user: this.user })),
          catchError(() => EMPTY)
        ))
    )
  );

  constructor(
    private actions$: Actions,
    private loginService: HttpService
  ) {}
}