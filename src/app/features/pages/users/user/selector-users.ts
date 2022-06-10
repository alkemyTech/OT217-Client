
import { createFeatureSelector, createSelector} from "@ngrx/store"
import { StateUsers } from "./users-state";



const getUsersState = createFeatureSelector<StateUsers>('users');

export const getUsers = createSelector(getUsersState, (state) =>
{
    return state.users;
})

/* export const getUsersById= createSelector(getUsersState, (state) => {
    return state.users[¡[]
}) */