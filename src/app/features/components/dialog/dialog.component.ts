import { Component, OnInit } from "@angular/core";
import { MatDialog, MatDialogRef } from "@angular/material/dialog";
import { DialogContentComponent } from "../dialog-content/dialog-content.component";

@Component({
  selector: "app-dialog",
  templateUrl: "./dialog.component.html",
  styleUrls: ["./dialog.component.scss"],
})
export class DialogComponent implements OnInit {
  constructor(public dialog: MatDialog) {}

  ngOnInit(): void {}

  openDialog() {
    const dialogRef = this.dialog.open(DialogContentComponent, {
      data: { title: "Confirmar Acción" },
      width: "250px",
      height: "250px",
    });

    dialogRef
      .afterClosed()
      .subscribe((result) => console.log("dialog result", result));
  }
}
