import { createAction, props } from '@ngrx/store';
import { MembersModel } from '../../models/members.model';




export const addMember = createAction(
  '[Members List] Add Member',
  props<{ member: MembersModel }>()
);

export const retrievedMembersList = createAction(
  '[Members List/API] Retrieve Members Success',
  props<{ members: ReadonlyArray<MembersModel> }>()
);


