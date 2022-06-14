import { Component, NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { ActivitiesPageComponent } from "./activities/activities-page/activities-page.component";
import { NewsListComponent } from "../private-pages/news/news-list/news-list.component";
import { DonationsComponent } from "./donations/donations.component";
import { ThanksComponent } from "./donations/thanks/thanks.component";
import { ActivityFormComponent } from "./activities/activity-form/activity-form.component";
import { DetailComponent } from "./views/activities/detail/detail.component";
import { LoginFormComponent } from "./auth/login-form/login-form.component";
import { RegisterFormComponent } from "./auth/register-form/register-form.component";
import { HomeComponent } from "./home/home.component";
import { MembersComponent } from "./members/members.component";
import { SetupAlertsComponent } from "../../components/setup-alerts/setup-alerts.component";
import { CreationActivitiesComponent } from "./activities/creation-activities/creation-activities.component";
import { OrganizationListComponent } from "../private-pages/organization/organization-list.component";
import { CommonModule } from "@angular/common";
import { privateRoutingModule } from "../private-pages/private-routing.module";
import { ToysCampaignComponent } from "./toys-campaign/toys-campaign.component";

const routes: Routes = [
  {
    path: "actividades",
    component: ActivitiesPageComponent,
  },
  {
    path: "toys",
    component: ToysCampaignComponent,
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
