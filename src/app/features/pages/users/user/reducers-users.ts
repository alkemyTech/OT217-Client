import { createReducer, on } from "@ngrx/store";
import {
  loadUsersSuccess,
  loadUsersFailure,
  removeUsers,
  removeUsersSuccess,
  removeUsersFailure
} from "./action-users"
import { initialState } from "./users-state";


export const userReducer = createReducer(initialState, on(loadUsersSuccess, (state, {users}) =>{
  return {
    ...state,
    isloading:false,
    users
    
  }
}),
on(loadUsersFailure,(state,action) => {
  return {
    ...state,
    error: "hubo algun error"
  }
}),
on(removeUsersSuccess, (state, {id}) => {
  const updatedUsers = state.users.filter((user) => {
    return user.id !== id;
  })
  return {
    ...state,
    user: removeUsers,
    };
}),
on(removeUsersFailure,(state,action) => {
  return {
  ...state,
    error: "hubo algun error"
  }
}),
) 

