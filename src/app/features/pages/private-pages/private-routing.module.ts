import { RouterModule, Routes } from "@angular/router";
import { SlidesListComponent } from "../public-pages/slides/slides-list/slides-list.component";
import { OrganizationEditComponent } from "./organization/organization-edit/organization-edit.component";
import { NewsFormComponent } from "./news/news-form/news-form.component";
import { SlidesFormComponent } from "../public-pages/slides/slides-form/slides-form.component";
import { UserFormComponent } from "./users/user-form/user-form.component";
import { UserComponent } from "./users/user/user.component";
import { ActivitiesListComponent } from "../public-pages/activities/activities-list/activities-list.component";
import { SlideHomeComponent } from "../public-pages/slides/slide-home/slide-home.component";
import { OrganizationListComponent } from "./organization/organization-list.component";
import { DashBoardBackofficeComponent } from "./backoffice/dash-board-backoffice/dash-board-backoffice.component";
import { CreationActivitiesComponent } from "../public-pages/activities/creation-activities/creation-activities.component";
import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { UserGuard } from "src/app/features/pages/private-pages/guards/user.guard/user.guard.component";
import { NewsSearchComponent } from "./news-search/news-search.component";
const routes: Routes = [
  {
    canActivate: [UserGuard],
    path: "backoffice/slides",
    component: SlidesListComponent,
  },
  {
    canActivate: [UserGuard],
    path: "backoffice/organization/edit",
    component: OrganizationEditComponent,
  },
  {
    canActivate: [UserGuard],
    path: "backoffice/news",
    component: NewsFormComponent,
  },
  {
    canActivate: [UserGuard],
    path: "backoffice/news/:id",
    component: NewsFormComponent,
  },
  {
    path: "news/search",
    component: NewsSearchComponent,
  },
  {
    canActivate: [UserGuard],
    path: "backoffice/newslide",
    component: SlidesFormComponent,
  },
  {
    canActivate: [UserGuard],
    path: "backoffice/slides/:id",
    component: SlidesFormComponent,
  },
  {
    canActivate: [UserGuard],
    path: "backoffice/users/:id",
    component: UserFormComponent,
  },
  {
    canActivate: [UserGuard],
    path: "backoffice/users",
    component: UserComponent,
  },
  {
    canActivate: [UserGuard],
    path: "backoffice/activities",
    component: ActivitiesListComponent,
  },
  {
    canActivate: [UserGuard],
    path: "backoffice/Home/:id",
    component: SlideHomeComponent,
  },
  {
    canActivate: [UserGuard],
    path: "backoffice/organization/list",
    component: OrganizationListComponent
  },
  {
    canActivate: [UserGuard],
    path: "backoffice",
    component: DashBoardBackofficeComponent
  },
  {
    canActivate: [UserGuard],
    path: "backoffice/activities/create",
    component: CreationActivitiesComponent
  },
  {
    canActivate: [UserGuard],
    path: "backoffice/activities/create/:id",
    component: CreationActivitiesComponent
  },
  {
    canActivate: [UserGuard],
    path: "backoffice/activities/create",
    component: CreationActivitiesComponent
  },
  {
    canActivate: [UserGuard],
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