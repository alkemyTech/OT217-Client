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
import { PrivateLayoutComponent } from "./private-layout/private-layout.component";
const routes: Routes = [
  {
    path: "backoffice",
    component: PrivateLayoutComponent,
    children: [
      {
        path: "",
        component: DashBoardBackofficeComponent,
      },
      {
        path: "slides",
        component: SlidesListComponent,
      },
      {
        path: "organization/edit",
        component: OrganizationEditComponent,
      },
      {
        path: "news",
        component: NewsFormComponent,
      },
      {
        path: "news/:id",
        component: NewsFormComponent,
      },
      {
        path: "newslide",
        component: SlidesFormComponent,
      },
      {
        path: "slides/:id",
        component: SlidesFormComponent,
      },
      {
        path: "users/:id",
        component: UserFormComponent,
      },
      {
        path: "users",
        component: UserComponent,
      },
      {
        path: "activities",
        component: ActivitiesListComponent,
      },
      {
        path: "Home/:id",
        component: SlideHomeComponent,
      },
      {
        path: "organization/list",
        component: OrganizationListComponent,
      },
      {
        path: "activities/create",
        component: CreationActivitiesComponent,
      },
      {
        path: "activities/create/:id",
        component: CreationActivitiesComponent,
      },
    ],
  },
];

@NgModule({
  declarations: [],
  exports: [RouterModule],
  imports: [CommonModule, RouterModule.forRoot(routes)],
})
export class privateRoutingModule {}
export const privateArrayComponents = [
  CreationActivitiesComponent,
  PrivateLayoutComponent,
  OrganizationListComponent,
  SlideHomeComponent,
  ActivitiesListComponent,
  UserComponent,
  UserFormComponent,
  SlidesFormComponent,
  NewsFormComponent,
  OrganizationEditComponent,
  SlidesListComponent,
];
