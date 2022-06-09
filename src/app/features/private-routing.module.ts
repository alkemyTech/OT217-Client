import { RouterModule, Routes } from "@angular/router";
import { SlidesListComponent } from "./pages/slides/slides-list/slides-list.component";
import { OrganizationEditComponent } from "./pages/organization/organization-edit/organization-edit.component";
import { NewsFormComponent } from "./pages/news/news-form/news-form.component";
import { SlidesFormComponent } from "./pages/slides/slides-form/slides-form.component";
import { UserFormComponent } from "./pages/users/user-form/user-form.component";
import { UserComponent } from "./pages/users/user/user.component";
import { ActivitiesListComponent } from "./pages/activities/activities-list/activities-list.component";
import { SlideHomeComponent } from "./pages/slides/slide-home/slide-home.component";
import { OrganizationListComponent } from "./pages/organization/organization-list.component";
import { DashBoardBackofficeComponent } from "./pages/backoffice/dash-board-backoffice/dash-board-backoffice.component";
import { CreationActivitiesComponent } from "./pages/activities/creation-activities/creation-activities.component";
import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
const routes: Routes = [
  {
    path: "backoffice/slides",
    component: SlidesListComponent,
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
    path: "backoffice/Home/:id",
    component: SlideHomeComponent,
  },
  {
    path: "backoffice/organization/list",
    component: OrganizationListComponent
  },
  {
    path: "backoffice",
    component: DashBoardBackofficeComponent
  },
  {
    path: "backoffice/activities/create",
    component: CreationActivitiesComponent
  },
  {
    path: "backoffice/activities/create/:id",
    component: CreationActivitiesComponent
  },
  {
    path: "backoffice/activities/create",
    component: CreationActivitiesComponent
  },
  {
    path: "backoffice/activities/create/:id",
    component: CreationActivitiesComponent
  },
]

@NgModule({
  declarations: [],
  exports: [RouterModule],
  imports: [CommonModule, RouterModule.forRoot(routes)],
})
export class privateRoutingModule { }