import { createReducer, on } from "@ngrx/store";
import { loginUsers, registerUsers } from "./auth.actions";
import { authState } from "../../models/auth.state";
export const initialState: authState = { login: false, register: false, user: []  };

export const authReducer = createReducer(
  initialState,
  on(loginUsers, (state) => {
    return { ...state, login: true };
  }),
  on(registerUsers, (state) => {
    return { ...state, register: true };
  })
);
