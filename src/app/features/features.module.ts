import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";
import { CommonModule } from "@angular/common";
import { AppRoutingModule } from "./app-routing.module";
import { MaterialModule } from "../material/material.module";
import { CKEditorModule } from '@ckeditor/ckeditor5-angular';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { SlideInicioComponent } from './pages/public-pages/slides/slide-inicio/slide-inicio.component';
import { ActivityFormComponent } from "./pages/public-pages/activities/activity-form/activity-form.component";
import { LoginFormComponent } from "./pages/public-pages/auth/login-form/login-form.component";
import { RegisterFormComponent } from "./pages/public-pages/auth/register-form/register-form.component";
import { CategoriesFormComponent } from "./pages/public-pages/categories/categories-form/categories-form.component";
import { NewsFormComponent } from "./pages/private-pages/news/news-form/news-form.component";
import { SlidesFormComponent } from "./pages/public-pages/slides/slides-form/slides-form.component";
import { TestimonialFormComponent } from "./pages/public-pages/testimonials/testimonial-form/testimonial-form.component";
import { UserFormComponent } from "./pages/private-pages/users/user-form/user-form.component";
import { CreationActivitiesComponent } from './pages/public-pages/activities/creation-activities/creation-activities.component';
import { FormContactComponent } from './pages/public-pages/form-contact/form-contact.component';
import { ActivitiesPageComponent } from './pages/public-pages/activities/activities-page/activities-page.component';
import { ActivityCardComponent } from './pages/public-pages/activities/activity-card/activity-card.component';
import { PaginatePipe } from "../shared/pipes/paginate.pipe";
import { SlideHomeComponent } from './pages/public-pages/slides/slide-home/slide-home.component';
import { DashBoardBackofficeComponent } from "./pages/private-pages/backoffice/dash-board-backoffice/dash-board-backoffice.component";
import { DonationsComponent } from './pages/public-pages/donations/donations.component';
import { SlidesModalComponent } from './pages/public-pages/slides/slides-modal/slides-modal.component';
import { ThanksComponent } from './pages/public-pages/donations/thanks/thanks.component';
import { DetailComponent } from "./pages/public-pages/views/activities/detail/detail.component";
import { MatIconModule } from "@angular/material/icon";
import { UserComponent } from './pages/private-pages/users/user/user.component';
import { SlidesListComponent } from './pages/public-pages/slides/slides-list/slides-list.component';
import { TableComponent } from './components/table/table.component';
import { CardComponent } from "./pages/card/card.component";
import { OrganizationEditComponent } from "./pages/private-pages/organization/organization-edit/organization-edit.component";
import { ActivitiesListComponent } from './pages/public-pages/activities/activities-list/activities-list.component';
import { MembersCardComponentComponent } from "./pages/public-pages/members/members-card-component/members-card-component.component";
import { MembersComponent } from "./pages/public-pages/members/members.component";
import { OrganizationListComponent } from "./pages/private-pages/organization/organization-list.component";
import { HomeComponent } from "./pages/public-pages/home/home.component";
import { FooterComponent } from "./pages/public-pages/home/footer/footer.component";
import { NavbarComponent } from "./pages/public-pages/home/navbar/navbar.component";
import { SkeletonComponent } from './components/skeleton/skeleton.component';
import { SetupAlertsComponent } from "./components/setup-alerts/setup-alerts.component";
import { AlertComponent } from "./components/setup-alerts/alert/alert.component";
import { SetupProgressComponent } from './components/setup-progress/setup-progress.component';
import { DialogComponent } from './components/dialog/dialog.component';
import { DialogContentComponent } from "./components/dialog-content/dialog-content.component";
import { NewsListComponent } from './pages/private-pages/news/news-list/news-list.component';
import { SpinnerComponent } from './components/spinner/spinner.component';
import { HeaderSidebarComponent } from './pages/private-pages/header-sidebar/header-sidebar.component';



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
    SlideHomeComponent,
    DashBoardBackofficeComponent,
    CreationActivitiesComponent,
    FormContactComponent,
    DonationsComponent,
    SlidesModalComponent,
    ThanksComponent,
    DetailComponent,
    UserComponent,
    SlidesListComponent,
    TableComponent,
    CardComponent,
    HomeComponent,
    FooterComponent,
    NavbarComponent,
    OrganizationEditComponent,
    ActivitiesListComponent,
    MembersCardComponentComponent,
    MembersComponent,
    OrganizationListComponent,
    HomeComponent,
    FooterComponent,
    NavbarComponent,
    SkeletonComponent,
    SetupAlertsComponent,
    AlertComponent,
    SetupProgressComponent,
    DialogComponent,
    DialogContentComponent,
    NewsListComponent,
    SpinnerComponent,
    HeaderSidebarComponent
  ],
  exports: [
    RegisterFormComponent,
    CategoriesFormComponent,
    SlidesFormComponent,
    UserFormComponent,
    RouterModule,
    FormContactComponent,
    OrganizationListComponent,
    DashBoardBackofficeComponent
  ],
  entryComponents: [SetupAlertsComponent],
  imports: [CommonModule, CKEditorModule, ReactiveFormsModule, FormsModule, MaterialModule, AppRoutingModule, RouterModule, MatIconModule]
})
export class FeaturesModule {
}