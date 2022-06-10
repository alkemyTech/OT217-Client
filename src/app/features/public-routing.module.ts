import { Component, NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { ActivitiesPageComponent } from "./pages/activities/activities-page/activities-page.component";
import { NewsListComponent } from "./pages/news/news-list/news-list.component";
import { DonationsComponent } from "./pages/donations/donations.component";
import { ThanksComponent } from "./pages/donations/thanks/thanks.component";
import { ActivityFormComponent } from "./pages/activities/activity-form/activity-form.component";
import { DetailComponent } from "./pages/views/activities/detail/detail.component";
import { LoginFormComponent } from "./pages/auth/login-form/login-form.component";
import { RegisterFormComponent } from "./pages/auth/register-form/register-form.component";
import { HomeComponent } from "./pages/home/home.component";
import { MembersComponent } from "./pages/members/members.component";
import { SetupAlertsComponent } from "./components/setup-alerts/setup-alerts.component";
import { CreationActivitiesComponent } from "./pages/activities/creation-activities/creation-activities.component";
import { OrganizationListComponent } from "./pages/organization/organization-list.component";
import { CommonModule } from "@angular/common";
import { privateRoutingModule } from "./private-routing.module";

const routes: Routes = [
  {
    path: "actividades",
    component: ActivitiesPageComponent,
  },
  {
    path: "news",
    component: NewsListComponent,
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
    path: "home",
    component: HomeComponent,
    pathMatch: "full",
  },
  {
    path: "members",
    component: MembersComponent,
  },
  {
    path: "setup_alert",
    component: SetupAlertsComponent,
  },

  {
    path: "creationActividades",
    component: CreationActivitiesComponent
  },
  {
    path: "organization/list",
    component: OrganizationListComponent
  },
  {
    path: "**",
    redirectTo: "home",
    pathMatch: "full",
  },
]

@NgModule({
  declarations: [],
  exports: [RouterModule],
  imports: [CommonModule, RouterModule.forRoot(routes), privateRoutingModule],
})
export class publicRoutingModule {
}
