import { createSelector } from "@ngrx/store";
import { AppState } from "../app.state";
import { authState } from "../../models/auth.state";

export const auth = (state: AppState) => state.auth;

export const registerUser = createSelector(
  auth,
   (state: authState) => state.register
);
export const loginUser = createSelector(
  auth,
  (state: authState) => state.login
);
