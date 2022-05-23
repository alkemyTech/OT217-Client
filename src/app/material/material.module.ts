import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatCardModule } from '@angular/material/card';
import { MatSelectModule } from '@angular/material/select';
import { MatButtonModule } from '@angular/material/button';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    MatFormFieldModule,
    MatInputModule,
    MatPaginatorModule,
    MatCardModule,
    MatSelectModule,
    MatButtonModule
  ],
  exports: [
    MatFormFieldModule,
    MatInputModule,
    MatPaginatorModule,
    MatCardModule,
    MatSelectModule,
    MatButtonModule
  ]
})
export class MaterialModule { }