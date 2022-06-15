import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { AlertComponent } from './alert/alert.component';

@Component({
  selector: 'app-setup-alerts',
  templateUrl: './setup-alerts.component.html',
  styleUrls: ['./setup-alerts.component.scss']
})
export class SetupAlertsComponent {
  static openDialog: any;

  constructor(
    public dialog: MatDialog
  ) { }
  openDialog(): void {
    const dialogRef = this.dialog.open(AlertComponent, {
      width: '350px',
      data: 'La petición no se realizó correctamente.'
    });
    dialogRef.afterClosed().subscribe(res => {
      if (res) {

      }
    });
  }



}
