import { Component, Inject, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { UserService } from "src/app/core/services/user.service";
import { Users } from "src/app/shared/model/Users";
import { User } from "src/app/shared/models/user";
import { MatDialog } from "@angular/material/dialog";
import { DialogContentComponent } from "src/app/features/components/dialog-content/dialog-content.component";

@Component({
  selector: "app-user",
  templateUrl: "./user.component.html",
  styleUrls: ["./user.component.scss"],
})
export class UserComponent implements OnInit {
  users: Users[] = [];
  creacion: string = "Aqui usted puede crear un nuevo Usuario";

  constructor(
    public dialog: MatDialog,
    private userService: UserService,
    private route: Router
  ) {}

  ngOnInit(): void {
    this.cargarData();
  }

  openDialog() {
    this.dialog.open(DialogContentComponent, {
      width: "200px",
      height: "200px",
    });
  }

  cargarData(): void {
    this.userService
      .getUser()
      .subscribe((response) => (this.users = response.data));
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
