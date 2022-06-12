import { createAction, props } from "@ngrx/store";
import { User } from "../../models/user";


export const loginUser = createAction(
  '[User Login] Login user'
)

export const registerUser = createAction(
  '[User Register] Register user success',
  props<{User:User[]}>()
)