import { Component, OnInit } from '@angular/core';
import { DialogContentPdfComponent } from '../dialog-content-pdf.component';

@Component({
  selector: 'app-dialog-pdf-open',
  templateUrl: './dialog-pdf-open.component.html',
  styleUrls: ['./dialog-pdf-open.component.scss']
})
export class DialogPdfOpenComponent implements OnInit {
  dialog: any;

  constructor() { }

  ngOnInit() {
  }

  openPDFDialog(): void {
    const dialogRef = this.dialog.open(DialogContentPdfComponent, {
      width: '600px'
    });
    dialogRef.afterClosed().subscribe((res: any) => {
      console.log(res);
      if (res) {

      }
    });

  }

}
