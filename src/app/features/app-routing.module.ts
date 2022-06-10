import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { RouterModule, Routes } from "@angular/router";
import { privateRoutingModule } from "./pages/private-pages/private-routing.module";
import { publicRoutingModule } from "./pages/public-pages/public-routing.module";

const routes: Routes = [

]

@NgModule({
  declarations: [],
  exports: [RouterModule],
  imports: [CommonModule, RouterModule.forRoot(routes), privateRoutingModule, publicRoutingModule],
})
export class AppRoutingModule { }