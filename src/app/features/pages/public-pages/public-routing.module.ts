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
import { OrganizationListComponent } from "../private-pages/organization/organization-list.component";
import { CommonModule } from "@angular/common";
import { privateRoutingModule } from "../private-pages/private-routing.module";
import { ToysCampaignComponent } from "./toys-campaign/toys-campaign.component";
import { PageNotFoundComponent } from "./page-not-found/page-not-found.component";
import { DialogPdfOpenComponent } from "../../components/dialog-content-pdf/dialog-pdf-open/dialog-pdf-open.component";
import { ContactComponent } from "./contact/contact.component";
import { SchoolCampanignComponent } from "./school-campanign/school-campanign.component";
import { SlideInicioComponent } from "./slides/slide-inicio/slide-inicio.component";
import { DonationsGuard } from "./guards/donations.guard";
import { ContactGuard } from "./guards/contac.guard";

const routes: Routes = [
  {
    path: "",
    redirectTo: "home",
    pathMatch: "full",
  },
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
    canActivate: [DonationsGuard],
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
    canActivate: [ContactGuard],
    path: "contact",
    component: ContactComponent,
  },
  { path: "schoolCampaign", component: SchoolCampanignComponent },
  {
    path: "organization/list",
    component: OrganizationListComponent,
  },
  {
    path: "**",
    component: PageNotFoundComponent,
  },
];

@NgModule({
  declarations: [],
  exports: [RouterModule],
  imports: [CommonModule, RouterModule.forRoot(routes), privateRoutingModule],
})
export class publicRoutingModule {}
