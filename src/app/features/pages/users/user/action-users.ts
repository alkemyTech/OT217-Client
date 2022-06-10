import { Users } from "src/app/shared/model/Users";
import { createAction, props} from "@ngrx/store";

export const LOAD_USERS = '[USER GET] LOAD_USERS';
export const LOAD_USERS_SUCESS = '[USER GET] LOAD_USERS_SUCESS';
export const LOAD_USERS_FAIL= '[USER GET] LOAD_USERS_FAILURE'

export const REMOVE_USERS = '[USER DELETE] REMOVE_USERS';
export const REMOVE_USERS_SUCESS = '[USER DELETE] REMOVE_USERS_SUCESS';
export const REMOVE_USERS_FAIL= '[USER DELETE] REMOVE_USERS_FAILURE';


export const loadUsers = createAction(LOAD_USERS);
export const loadUsersSuccess = createAction(LOAD_USERS_SUCESS, props<{users:Users[]}>());
export const loadUsersFailure = createAction(LOAD_USERS_FAIL, props<{error:string}>());


export const removeUsers = createAction(REMOVE_USERS, props<{id:string}>());
export const removeUsersSuccess = createAction(REMOVE_USERS_SUCESS, props<{id:string}>());
export const removeUsersFailure = createAction(REMOVE_USERS_FAIL, props<{error:string}>() )
