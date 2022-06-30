import { createSelector, createFeatureSelector } from '@ngrx/store';
import { MembersModel } from '../../models/members.model';


export const selectMembers = createFeatureSelector<ReadonlyArray<MembersModel>>('members');

