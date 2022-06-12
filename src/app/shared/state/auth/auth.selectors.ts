import { createSelector } from "@ngrx/store";
import { AppState } from "../app.state";
import { authState } from "../../models/auth.state";
import { authReducer } from "./auth.reducer";

export const auth = (state: AppState) => state.auth;

export const registerUsers = createSelector(
  authReducer,
  (state: authState) => state.register
);
export const loginUser = createSelector(
  authReducer,
  (state: authState) => state.login
);
