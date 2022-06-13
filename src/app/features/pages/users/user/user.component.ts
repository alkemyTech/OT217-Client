import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { select, Store } from "@ngrx/store";
import * as fromApp from "./reducers-users"
import {  Observable} from "rxjs";
import { UserService } from "src/app/core/services/user.service";
import { Users } from "src/app/shared/model/Users";
import * as userActions from "./action-users"
import * as fromUsers from "./selector-users"



@Component({
  selector: "app-user",
  templateUrl: "./user.component.html",
  styleUrls: ["./user.component.scss"],
})
export class UserComponent implements OnInit {
  usuario$: Observable<Users[]>; 
  users:Users[]= []
  creacion: string = "Aqui usted puede crear un nuevo Usuario";

  constructor(private userService: UserService, private route: Router, private store:Store<fromApp.UsersState>) {}

  ngOnInit(): void {
    this.store.dispatch(new userActions.Load());
   this.usuario$ = this.store.pipe(select(fromUsers.getUsers))
  }


  onDelete(user: Users) {
    this.userService
      .deleteUser(user)
      .subscribe(
        () => (this.users = this.users.filter((u) => u.id !== user.id))
      );
  }
  onEdit(user: Users) {
    this.route.navigate([`/backoffice/users/${user.id}`]);
  } 
}
