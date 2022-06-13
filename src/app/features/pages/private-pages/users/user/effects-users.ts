import { Injectable } from '@angular/core';
import { Observable } from "rxjs/internal/Observable";
import { catchError, exhaustMap, map, switchMap, withLatestFrom } from "rxjs/operators";

import { Action, Store, select } from "@ngrx/store";
import { Actions, Effect, ofType } from "@ngrx/effects";

import * as fromUsers from "./selector-users"

import * as UsersAction from "./action-users";
import { of } from "rxjs/internal/observable/of";
import { empty } from "rxjs/internal/observable/empty";
import { UserService } from 'src/app/core/services/user.service';


@Injectable()
export class UserEffect {


  constructor(private userService:UserService,
    private action$: Actions, private store: Store<any>) {
  }

  @Effect()
  loadUsers$: Observable<Action> = this.action$.pipe(
    ofType(UsersAction.UsersActionTypes.Load),
    withLatestFrom(this.store.pipe(select(fromUsers.getLoaded))),
    switchMap(([, loaded]) => {
      if (loaded) {
        return empty();
      }
      return this.userService.getUser().pipe(
        map((users) => {
          return new UsersAction.LoadSuccess(users)
        }),
        catchError(err => of(new UsersAction.LoadFail(err)))
      )
    })
  )

  
}
