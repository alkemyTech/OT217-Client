import { Component, Inject, OnInit, ViewChild } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { PdfViewerComponent } from 'ng2-pdf-viewer';

@Component({
  selector: 'app-dialog-content-pdf',
  templateUrl: './dialog-content-pdf.component.html',
  styleUrls: ['./dialog-content-pdf.component.scss']
})
export class DialogContentPdfComponent implements OnInit {




  src = './assets/terms.pdf';


  constructor(
    public dialogRef: MatDialogRef<DialogContentPdfComponent>,
    @Inject(MAT_DIALOG_DATA) public message: string) {
  }

  ngOnInit() {
  }




}
