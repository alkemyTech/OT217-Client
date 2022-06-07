import { FeaturesModule } from './features/features.module';
import { CoreModule } from './core/core.module';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { MaterialModule } from './material/material.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { environment } from '../environments/environment';
import { ROOT_REDUCERS } from './state/app.state';
import { EffectsModule } from '@ngrx/effects';
import { ActivitiesEffects } from './state/effects/activities.effects';
@NgModule({
  declarations: [
    AppComponent
  
  ],
  imports: [
    BrowserModule,
    CoreModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    FormsModule,
    MaterialModule,
    FeaturesModule,
    StoreModule.forRoot( ROOT_REDUCERS ),
    StoreDevtoolsModule.instrument({ name: 'TEST'}),
    EffectsModule.forRoot([ ActivitiesEffects])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
