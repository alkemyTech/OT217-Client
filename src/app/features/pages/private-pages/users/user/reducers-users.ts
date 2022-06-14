import { Users } from "src/app/shared/model/Users";
import { UsersActions, UsersActionTypes} from "./action-users"

export interface UsersState {
  users: Users[],
  loaded: boolean;
  error: string
}

const initialState: UsersState = {
  users: [],
  loaded: false,
  error: ''
};


export function UserReducer(state = initialState, action: UsersActions): UsersState {
  switch (action.type) {
case UsersActionTypes.LoadSuccess:
  return {
    ...state,
    ...(action.payload || []),
    loaded: true,
    error: '',
  }
    default:
      return state
  }
}