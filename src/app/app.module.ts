import { FeaturesModule } from './features/features.module';
import { CoreModule } from './core/core.module';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';


import { AppComponent } from './app.component';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { MatFormField, matFormFieldAnimations, MatFormFieldModule } from '@angular/material/form-field';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatRadioModule } from '@angular/material/radio';
import { MatSelectModule } from '@angular/material/select';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { OrganizationListComponent } from './features/pages/organization/organization-list.component';





@NgModule({
  declarations: [
    AppComponent,
    OrganizationListComponent
  ],
  imports: [
    BrowserModule,
    CoreModule,
    FeaturesModule,
    RouterModule,
    BrowserAnimationsModule,
    BrowserModule,
    BrowserAnimationsModule,
    MatFormFieldModule,
    MatInputModule,
    CommonModule,
    BrowserAnimationsModule,
    CommonModule,
    MatDatepickerModule,
    MatInputModule,
    FormsModule,
    ReactiveFormsModule,
    MatButtonModule,
    MatRadioModule,
    MatSelectModule,
    MatCheckboxModule,
    MatIconModule,
    MatCardModule,
    HttpClientModule
  ],
  exports: [
    BrowserAnimationsModule,
    MatFormFieldModule,
    MatInputModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

