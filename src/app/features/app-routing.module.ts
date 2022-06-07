import { Component, NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { RouterModule, Routes } from "@angular/router";
import { CreationActivitiesComponent } from "./pages/activities/creation-activities/creation-activities.component";
import { ActivitiesPageComponent } from "./pages/activities/activities-page/activities-page.component";
import { NewsFormComponent } from "./pages/news/news-form/news-form.component";
import { SlidesFormComponent } from "./pages/slides/slides-form/slides-form.component";
import { LoginFormComponent } from "./pages/auth/login-form/login-form.component";
import { RegisterFormComponent } from "./pages/auth/register-form/register-form.component";
import { ActivityFormComponent } from "./pages/activities/activity-form/activity-form.component";
import { SlideHomeComponent } from "./pages/slides/slide-home/slide-home.component";
import { DashBoardBackofficeComponent } from "./pages/backoffice/dash-board-backoffice/dash-board-backoffice.component";
import { DonationsComponent } from "./pages/donations/donations.component";
import { ThanksComponent } from "./pages/donations/thanks/thanks.component";
import { DetailComponent } from "./pages/views/activities/detail/detail.component";
import { OrganizationEditComponent } from "./pages/organization/organization-edit/organization-edit.component";
import { UserComponent } from "./pages/users/user/user.component";
import { UserFormComponent } from "./pages/users/user-form/user-form.component";
import { SlidesListComponent } from "./pages/slides/slides-list/slides-list.component";
import { HomeComponent } from "./pages/home/home.component";
import { ActivitiesListComponent } from "./pages/activities/activities-list/activities-list.component";
import { MembersComponent } from "./pages/members/members.component";


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
  imports: [CommonModule, RouterModule.forRoot(routes)],
})
export class AppRoutingModule { }
