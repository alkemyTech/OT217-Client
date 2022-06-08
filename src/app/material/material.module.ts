import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatCardModule } from '@angular/material/card';
import { MatSelectModule } from '@angular/material/select';
import { MatButtonModule } from '@angular/material/button';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatDialogModule } from '@angular/material/dialog';
import {MatSliderModule} from '@angular/material/slider';
import {MatIconModule} from '@angular/material/icon';
import {MatTableModule} from '@angular/material/table';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import { MatProgressBarModule } from '@angular/material/progress-bar';



@NgModule({
  declarations: [
  ],
  imports: [
    CommonModule,
    MatFormFieldModule,
    MatInputModule,
    MatPaginatorModule,
    MatCardModule,
    MatSelectModule,
    MatButtonModule,
    MatSnackBarModule,
    MatDialogModule,
    MatSliderModule,
    MatIconModule,
    MatTableModule,
    MatProgressSpinnerModule,
    MatProgressBarModule,
  ],
  exports: [
    MatFormFieldModule,
    MatInputModule,
    MatPaginatorModule,
    MatCardModule,
    MatSelectModule,
    MatButtonModule,
    MatSnackBarModule,
    MatDialogModule,
    MatSliderModule,
    MatIconModule,
    MatTableModule,
    MatProgressSpinnerModule,
    MatProgressBarModule,
  ]
})
export class MaterialModule { }