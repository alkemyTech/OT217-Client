import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { RouterModule, Routes } from "@angular/router";
import { ActivitiesPageComponent } from "./pages/activities/activities-page/activities-page.component";
import { NewsFormComponent } from "./pages/news/news-form/news-form.component";

const routes: Routes = [
  { 
    path: "actividades", 
    component: ActivitiesPageComponent },
  {
    path: "",
    redirectTo: "actividades",
    pathMatch: "full",
  },
  // ESTO DEBE SER ELIMINADO ES SOLO PARA PRUEBAS
  { 
    path: "news", 
    component: NewsFormComponent },
  {
    path: "**",
    redirectTo: "actividades",
    pathMatch: "full",
  },
];

@NgModule({
  declarations: [],
  imports: [CommonModule, RouterModule.forRoot(routes)],
})
export class AppRoutingModule {}
