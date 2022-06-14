import {createFeatureSelector, createSelector, ActionReducerMap} from "@ngrx/store";
import * as fromUsers from './reducers-users'

export interface State {
  userFeature: fromUsers.UsersState;
}

export const reducers: ActionReducerMap<State> = {
  userFeature : fromUsers.UserReducer,
};

const getUsersFeatureState = createFeatureSelector<fromUsers.UsersState>('userFeature');

export const getUsers = createSelector(
    getUsersFeatureState,
  state => {
    return state.users
  }
);

export const getLoaded = createSelector(
    getUsersFeatureState,
  state => {
    return state.loaded
  }
);
