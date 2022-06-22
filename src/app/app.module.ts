import { FeaturesModule } from './features/features.module';
import { CoreModule } from './core/core.module';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { MaterialModule } from './material/material.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { environment } from '../environments/environment';
import { ROOT_REDUCERS } from './shared/state/app.state';
import { EffectsModule } from '@ngrx/effects';
import { ActivitiesEffects } from './shared/state/activities/activities.effects';
import { NewsEffects } from './shared/state/news/news.effects';
import { MatDialogModule, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { PdfViewerModule } from 'ng2-pdf-viewer';
import { AppRoutingModule } from './features/app-routing.module';
import { UserEffect } from './features/pages/private-pages/users/user/effects-users';
import { reducers } from './features/pages/private-pages/users/user/selector-users';



@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    CoreModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    FormsModule,
    MaterialModule,
    FeaturesModule,
    StoreModule.forRoot(reducers),
    EffectsModule.forRoot([UserEffect]),
    StoreDevtoolsModule.instrument({ maxAge: 25, logOnly: environment.production }),
    HttpClientModule,
    MatDialogModule,
    PdfViewerModule,
    AppRoutingModule,
    StoreModule.forRoot(ROOT_REDUCERS),
    StoreDevtoolsModule.instrument({ maxAge: 25, logOnly: environment.production }),
    EffectsModule.forRoot([NewsEffects, ActivitiesEffects]),],
  providers: [
    { provide: MatDialogRef, useValue: {} },
    { provide: MAT_DIALOG_DATA, useValue: [] },
    HttpClientModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
