import {Action} from "@ngrx/store";
import { Users } from "src/app/shared/model/Users";

export enum UsersActionTypes {
  Load = '[Users] Users',
  LoadSuccess = '[Users] Users Success',
  LoadFail = '[Users] Users Fail',
}


export class Load implements Action {
  readonly type = UsersActionTypes.Load;

  constructor() { }
}

export class LoadSuccess implements Action {
  readonly type = UsersActionTypes.LoadSuccess;

  constructor(public payload: Users[]) { }
}

export class LoadFail implements Action {
  readonly type = UsersActionTypes.LoadFail;

  constructor(public payload: string) {
  }

}

export type UsersActions = Load
  | LoadSuccess
  | LoadFail

