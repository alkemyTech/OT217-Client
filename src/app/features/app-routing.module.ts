import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { RouterModule, Routes } from "@angular/router";
import { ActivitiesPageComponent } from "./pages/activities/activities-page/activities-page.component";
import { NewsFormComponent } from "./pages/news/news-form/news-form.component";
import { SlidesFormComponent } from "./pages/slides/slides-form/slides-form.component";
import { LoginFormComponent } from "./pages/auth/login-form/login-form.component";
import { RegisterFormComponent } from "./pages/auth/register-form/register-form.component";
import { ActivityFormComponent } from "./pages/activities/activity-form/activity-form.component";
import { DonationsComponent } from "./pages/donations/donations.component";
import { ThanksComponent } from "./pages/donations/thanks/thanks.component";
import { DetailComponent } from "./pages/views/activities/detail/detail.component";
import { SlidesListComponent } from "./pages/slides/slides-list/slides-list.component";

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
    path: "backoffice/news",
    component: NewsFormComponent,
  },
  {
    path: "backoffice/news/:id",
    component: NewsFormComponent,
  },
  {
    path: "backoffice/slides",
    component: SlidesFormComponent,
  },
  {
    path: "backoffice/slides/:id",
    component: SlidesFormComponent,
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
    redirectTo: "actividades",
    pathMatch: "full",
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
export class AppRoutingModule {}
