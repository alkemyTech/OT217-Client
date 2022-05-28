import { FeaturesModule } from './features/features.module';
import { CoreModule } from './core/core.module';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';


import { AppComponent } from './app.component';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
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
    CommonModule,
    BrowserAnimationsModule,
    CommonModule,
    HttpClientModule
  ],
  exports: [
    BrowserAnimationsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

