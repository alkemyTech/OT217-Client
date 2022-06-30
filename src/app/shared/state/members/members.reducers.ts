import { createReducer, on } from '@ngrx/store';
import { MembersModel } from '../../models/members.model';
import { addMember, retrievedMembersList } from './members.actions';




export const initialState: ReadonlyArray<MembersModel> = [];

export const membersReducer = createReducer(
    initialState,
    on(addMember, (oldstate, { member }) => {
        return [...oldstate, ...[member]]
    }),
    on(retrievedMembersList, (oldState, { members }) => {
        return [...oldState, ...members]
    })
); 