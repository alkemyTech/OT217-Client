import { Injectable } from "@angular/core"
import { Actions, createEffect, ofType } from "@ngrx/effects"
import { map, mergeMap, switchMap} from "rxjs/operators"
import { UserService } from "src/app/core/services/user.service"
import {loadUsers, loadUsersSuccess, removeUsers, removeUsersSuccess} from "./action-users"



@Injectable()
export class EffectsUsers {
    constructor(private actions$:Actions, private userService: UserService){}

    cargarUsuarios$ = createEffect(
        () => {
            return this.actions$.pipe(
                ofType(loadUsers),
                mergeMap((action)=> {
                    return this.userService.getUser().pipe (
                        map ((users) => {
                        return loadUsersSuccess({users});
                        }
                        )
                    );
                })
            );
        })

        eliminarUsuarios$ = createEffect(()=>{
            return this.actions$.pipe(
                ofType(removeUsers),
                switchMap((action) => {
                    return this.userService.deleteUser(action.id).pipe(
                        map((data) => {
                            return removeUsersSuccess({id: action.id})
                        })
                    )
                })
            )
        })
}
