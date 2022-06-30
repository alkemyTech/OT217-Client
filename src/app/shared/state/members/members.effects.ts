import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { EMPTY } from 'rxjs';
import { map, mergeMap, catchError } from 'rxjs/operators';
import { MembersService } from 'src/app/core/services/members.service';


@Injectable()
export class MembersEffects {

    loadMembers$ = createEffect(() => this.actions$.pipe(
        ofType('[Members List] Add Member'),
        mergeMap(() => this.membersService.getMembers()
            .pipe(
                map(members => ({ type: '[Members List/API] Retrieve Members Success', payload: members })),
                catchError(() => EMPTY)
            ))
    )
    );

    constructor(
        private actions$: Actions,
        private membersService: MembersService
    ) { }
}