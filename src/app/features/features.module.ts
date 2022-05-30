import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";
import { CommonModule } from "@angular/common";
import { AppRoutingModule } from "./app-routing.module";
import { MaterialModule } from "../material/material.module";
import { CKEditorModule } from '@ckeditor/ckeditor5-angular';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';

import { SlideInicioComponent } from './pages/slides/slide-inicio/slide-inicio.component';
import { ActivityFormComponent } from "./pages/activities/activity-form/activity-form.component";
import { LoginFormComponent } from "./pages/auth/login-form/login-form.component";
import { RegisterFormComponent } from "./pages/auth/register-form/register-form.component";
import { CategoriesFormComponent } from "./pages/categories/categories-form/categories-form.component";
import { NewsFormComponent } from "./pages/news/news-form/news-form.component";
import { SlidesFormComponent } from "./pages/slides/slides-form/slides-form.component";
import { TestimonialFormComponent } from "./pages/testimonials/testimonial-form/testimonial-form.component";
import { UserFormComponent } from "./pages/users/user-form/user-form.component";
import { FormContactComponent } from './pages/form-contact/form-contact.component';
import { ActivitiesPageComponent } from './pages/activities/activities-page/activities-page.component';
import { ActivityCardComponent } from './pages/activities/activity-card/activity-card.component';
import { PaginatePipe } from "../shared/pipes/paginate.pipe";
import { DonationsComponent } from './pages/donations/donations.component';
import { SlidesModalComponent } from './pages/slides/slides-modal/slides-modal.component';
import { ThanksComponent } from './pages/donations/thanks/thanks.component';
import { DetailComponent } from "./pages/views/activities/detail/detail.component";
import { SlidesListComponent } from './pages/slides/slides-list/slides-list.component';
import { TableComponent } from './components/table/table.component';
import { CardComponent } from "./pages/card/card.component";

@NgModule({
  declarations: [
    ActivityFormComponent,
    LoginFormComponent,
    RegisterFormComponent,
    CategoriesFormComponent,
    NewsFormComponent,
    SlidesFormComponent,
    TestimonialFormComponent,
    UserFormComponent,
    ActivitiesPageComponent,
    ActivityCardComponent,
    PaginatePipe,
    SlideInicioComponent,
    FormContactComponent,
    DonationsComponent,
    SlidesModalComponent,
    ThanksComponent,
    DetailComponent,
    SlidesListComponent,
    TableComponent,
    CardComponent,

  ],
  exports: [
    ActivityFormComponent,
    LoginFormComponent,
    RegisterFormComponent,
    CategoriesFormComponent,
    NewsFormComponent,
    SlidesFormComponent,
    TestimonialFormComponent,
    UserFormComponent,
    RouterModule,
    FormContactComponent
  ],
  imports: [CommonModule,CKEditorModule, ReactiveFormsModule, FormsModule, MaterialModule, AppRoutingModule, RouterModule,]
})
export class FeaturesModule {
}