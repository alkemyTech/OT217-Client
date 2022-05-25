import { ActivityFormComponent } from "./pages/activities/activity-form/activity-form.component";
import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { RouterModule, Routes } from "@angular/router";
import { HomeComponent } from "./pages/home/home.component";
import { OrganizationFormComponent } from "./pages/organization/edit/organization.component";
import { OrganizationListComponent } from "./pages/organization/organization-list.component";
import { BrowserModule } from "@angular/platform-browser";


const routes: Routes = [
  {
    path: "",
    component: HomeComponent
  },
  {
    path: "actividades",
    component: ActivityFormComponent
  },
  {
    path: "",
    redirectTo: "actividades",
    pathMatch: "full",
  },
  {
    path: "backoffice/organization/edit",
    component: OrganizationFormComponent
  },
  {
    path: "backoffice/organization",
    component: OrganizationListComponent
  },
  {
    path: "**",
    redirectTo: "actividades",
    pathMatch: "full",
  },

];

@NgModule({
  declarations: [],
  imports: [BrowserModule, CommonModule, RouterModule.forRoot(routes)],
})
export class AppRoutingModule { }
