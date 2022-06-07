import { Action } from '@ngrx/store';
import { HttpErrorResponse } from '@angular/common/http';
import { IMembers } from '../reducers/membersReducer';

export enum MembersActionTypes {
    GetMembersLoad = '[Members] Get Members',
    GetMembersSuccess = '[Members] Get Members Success',
    GetMembersFail = '[Members Get Members Fail',
    DeleteMembers = '[Members] Delete Members',
    DeleteMembersSuccess = '[Members] Delete Members Success',
    DeleteMembersFail = '[Members] Delete Members Fail',
    PostMembers = '[Members] Post Members',
    PostMembersSuccess = '[Members] Post Members Success',
    PostMembersFail = '[Members] Post Members Fail',

}


export class GetMembersLoad implements Action {
    public readonly type = MembersActionTypes.GetMembersLoad;
}

export class GetMembersSuccess implements Action {
    public readonly type = MembersActionTypes.GetMembersSuccess;

    constructor(public payload: IMembers[]) { }
}

export class GetMembersFail implements Action {
    public readonly type = MembersActionTypes.GetMembersFail;

    constructor(public error: HttpErrorResponse) { }
}

export class DeleteMembers implements Action {
    public readonly type = MembersActionTypes.DeleteMembers;

    constructor(public payload: IMembers) { }
}

export class DeleteMembersSuccess implements Action {
    public readonly type = MembersActionTypes.DeleteMembersSuccess;

    constructor(public payload: IMembers) { }
}

export class DeleteMembersFail implements Action {
    public readonly type = MembersActionTypes.DeleteMembersFail;
}

export class PostMembers implements Action {
    public readonly type = MembersActionTypes.PostMembers;

    constructor(public payload: IMembers) { }
}

export class PostMembersSuccess implements Action {
    public readonly type = MembersActionTypes.PostMembersSuccess;

    constructor(public payload: IMembers) { }
}

export class PostMembersFail implements Action {
    public readonly type = MembersActionTypes.PostMembersFail;


    constructor(public error: HttpErrorResponse) { }
}

export type MembersActions = GetMembersLoad | GetMembersSuccess | GetMembersFail | DeleteMembers | DeleteMembersSuccess | DeleteMembersFail | PostMembers | PostMembersSuccess | PostMembersFail;
