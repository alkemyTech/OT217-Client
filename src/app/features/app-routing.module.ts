import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { RouterModule, Routes } from "@angular/router";
import { privateRoutingModule } from "./pages/private-pages/private-routing.module";
import { publicRoutingModule } from "./pages/public-pages/public-routing.module";
import { SlideHomeComponent } from "./pages/public-pages/slides/slide-home/slide-home.component";
import { HomeComponent } from "./pages/public-pages/home/home.component";
import { RegisterFormComponent } from "./pages/public-pages/auth/register-form/register-form.component";
import { LoginFormComponent } from "./pages/public-pages/auth/login-form/login-form.component";
import { ActivityFormComponent } from "./pages/public-pages/activities/activity-form/activity-form.component";
import { UserComponent } from "./pages/private-pages/users/user/user.component";
import { SlidesFormComponent } from "./pages/public-pages/slides/slides-form/slides-form.component";
import { NewsFormComponent } from "./pages/private-pages/news/news-form/news-form.component";
import { OrganizationEditComponent } from "./pages/private-pages/organization/organization-edit/organization-edit.component";
import { ThanksComponent } from "./pages/public-pages/donations/thanks/thanks.component";
import { DonationsComponent } from "./pages/public-pages/donations/donations.component";
import { SlidesListComponent } from "./pages/public-pages/slides/slides-list/slides-list.component";
import { ActivitiesPageComponent } from "./pages/public-pages/activities/activities-page/activities-page.component";
import { UserFormComponent } from "./pages/private-pages/users/user-form/user-form.component";
import { ActivitiesListComponent } from "./pages/public-pages/activities/activities-list/activities-list.component";
import { DetailComponent } from "./pages/public-pages/views/activities/detail/detail.component";
import { MembersComponent } from "./pages/public-pages/members/members.component";
import { DashBoardBackofficeComponent } from "./pages/private-pages/backoffice/dash-board-backoffice/dash-board-backoffice.component";
import { CreationActivitiesComponent } from "./pages/public-pages/activities/creation-activities/creation-activities.component";

const routes: Routes = [
  {
    path: "actividades",
    component: ActivitiesPageComponent,
  },
 {
   path: "backoffice/slides",
   component: SlidesListComponent,
  },
  {
    path: "donar",
    component: DonationsComponent,
  },
  {
    path: "gracias",
    component: ThanksComponent,
  },
  {
    path: "backoffice/organization/edit",
    component: OrganizationEditComponent,
  },
  {
    path: "backoffice/news",
    component: NewsFormComponent,
  },
  {
    path: "backoffice/news/:id",
    component: NewsFormComponent,
  },
  {
    path: "backoffice/newslide",
   component: SlidesFormComponent,
  },
  {
  path: "backoffice/slides/:id",
    component: SlidesFormComponent,
  },
  {
    path: "backoffice/users/:id",
    component: UserFormComponent,
  },
  {
    path: "backoffice/users",
    component: UserComponent,
  },
  {
    path: "backoffice/activities",
    component: ActivitiesListComponent,
  },
  {
    path: "activity",
    component: ActivityFormComponent,
  },
  {
    path: "activities/:id",
    component: DetailComponent,
  },
  {
    path: "login",
    component: LoginFormComponent,
  },
  {
    path: "register",
    component: RegisterFormComponent,
  },
  {
    path: "",
    component: HomeComponent,
  },
  {
    path: "backoffice/Home/:id",
    component: SlideHomeComponent,
  },
  {
    path: "members",
    component: MembersComponent,
  },
  {
    path: "",
    redirectTo: "actividades",
    pathMatch: "full",
  },

  {
    path: "backoffice",
    component: DashBoardBackofficeComponent
  },
  {
    path: "creationActividades",
    component: CreationActivitiesComponent
  },
  {
    path: "backoffice/activities/create",
    component: CreationActivitiesComponent
  },
  {
    path: "creationActividades/:id",
    component: CreationActivitiesComponent
  },
  {
    path: "**",
    redirectTo: "actividades",
    pathMatch: "full",
  },

]

@NgModule({
  declarations: [],
  exports: [RouterModule],
  imports: [CommonModule, RouterModule.forRoot(routes), privateRoutingModule, publicRoutingModule],
})
export class AppRoutingModule { }