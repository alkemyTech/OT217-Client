import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { select, Store } from "@ngrx/store";
import * as fromApp from "./reducers-users"
import {  Observable, Subject} from "rxjs";
import { UserService } from "src/app/core/services/user.service";
import { Users } from "src/app/shared/model/Users";
import * as userActions from "./action-users"
import * as fromUsers from "./selector-users"
import {
  debounceTime,
  distinctUntilChanged,
  switchMap,
  tap,
} from "rxjs/operators";



@Component({
  selector: "app-user",
  templateUrl: "./user.component.html",
  styleUrls: ["./user.component.scss"],
})
export class UserComponent implements OnInit {
  usuario$: Observable<Users[]>; 
  users:Users[]= []

  constructor(private userService: UserService, private route: Router, private store:Store<fromApp.UsersState>) {}

  ngOnInit(): void {
    this.store.dispatch(new userActions.Load());
   this.usuario$ = this.store.pipe(select(fromUsers.getUsers))
   this.getUsers();
}


  getUsers() {
    this.userService.getUsers().subscribe((response) => {
      this.users = response.data;
    });
  }

  deleteUsers= (args: any): void => {
    let id = String(args);
    this.userService.deleteUsers(id).subscribe(() => {
      this.getUsers();
    });
  };

}
