import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatCardModule } from '@angular/material/card';
import {MatSnackBarModule} from '@angular/material/snack-bar';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    MatFormFieldModule,
    MatInputModule,
    MatPaginatorModule,
    MatCardModule,
    MatSnackBarModule
  ],
  exports: [
    MatFormFieldModule,
    MatInputModule,
    MatPaginatorModule,
    MatCardModule,
    MatSnackBarModule
  ]
})
export class MaterialModule { }