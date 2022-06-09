import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { RouterModule, Routes } from "@angular/router";
import { privateRoutingModule } from "./private-routing.module";
import { publicRoutingModule } from "./public-routing.module";

const routes: Routes = [

]

@NgModule({
  declarations: [],
  exports: [RouterModule],
  imports: [CommonModule, RouterModule.forRoot(routes), privateRoutingModule, publicRoutingModule],
})
export class AppRoutingModule { }