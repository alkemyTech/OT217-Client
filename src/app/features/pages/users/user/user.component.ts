import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { Store } from "@ngrx/store";
import {  Observable} from "rxjs";
import { UserService } from "src/app/core/services/user.service";
import { Users } from "src/app/shared/model/Users";
import { loadUsers, loadUsersFailure, removeUsers } from "./action-users";
import { getUsers } from "./selector-users";
import { StateUsers } from "./users-state";


@Component({
  selector: "app-user",
  templateUrl: "./user.component.html",
  styleUrls: ["./user.component.scss"],
})
export class UserComponent implements OnInit {
  users:Users[] = [] ;
  usuario$: Observable<Users[] | null>; 
  creacion: string = "Aqui usted puede crear un nuevo Usuario";

  constructor(private userService: UserService, private route: Router, private store:Store<StateUsers>) {}

  ngOnInit(): void {
    this.usuario$ = this.store.select(getUsers);
    this.store.dispatch(loadUsers())

  }

  onDelete(id:string) {
    this.store.dispatch(removeUsers({id}));
  }

  onEdit(user: Users) {
    this.route.navigate([`/backoffice/users/${user.id}`]);
  }
}
