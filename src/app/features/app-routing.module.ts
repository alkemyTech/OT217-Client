import { ActivityFormComponent } from "./pages/activities/activity-form/activity-form.component";
import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { RouterModule, Routes } from "@angular/router";
import { LoginFormComponent } from "./pages/auth/login-form/login-form.component";
import { RegisterFormComponent } from "./pages/auth/register-form/register-form.component";

const routes: Routes = [
    {
        path: "actividades",
        component: ActivityFormComponent,
    },
    {
        path: "",
        redirectTo: "actividades",
        pathMatch: "full",
    },

    {
        path: "login",
        component: LoginFormComponent,
    },
    {
        path: "register",
        component: RegisterFormComponent,
    },
];

@NgModule({
    declarations: [],
    exports: [RouterModule],
    imports: [CommonModule, RouterModule.forRoot(routes)],
})
export class AppRoutingModule {
}
