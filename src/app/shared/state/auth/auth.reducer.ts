import { createReducer, on } from "@ngrx/store";
import { loginUser, registerUser } from "./auth.actions";
import { authState } from "../../models/auth.state";
export const initialState: authState = { login: false, register: false, user: []  };

export const authReducer = createReducer(
  initialState,
  on(loginUser, (state) => {
    return { ...state, login: true };
  }),
  on(registerUser, (state) => {
    return { ...state, register: true };
  })
);
