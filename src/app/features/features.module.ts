import { RouterModule } from "@angular/router";
import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { AppRoutingModule } from "./app-routing.module";
import { ActivityFormComponent } from "./pages/activities/activity-form/activity-form.component";
import { LoginFormComponent } from "./pages/auth/login-form/login-form.component";
import { RegisterFormComponent } from "./pages/auth/register-form/register-form.component";
import { CategoriesFormComponent } from "./pages/categories/categories-form/categories-form.component";
import { NewsFormComponent } from "./pages/news/news-form/news-form.component";
import { SlidesFormComponent } from "./pages/slides/slides-form/slides-form.component";
import { TestimonialFormComponent } from "./pages/testimonials/testimonial-form/testimonial-form.component";
import { UserFormComponent } from "./pages/users/user-form/user-form.component";
import { SingUpComponent } from './pages/sing-up/sing-up.component';
import { ReactiveFormsModule } from "@angular/forms";
import { MatCardModule } from "@angular/material/card";
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from "@angular/material/input";
import { MatButtonModule } from "@angular/material/button";

@NgModule({
    declarations: [
        ActivityFormComponent,
        RegisterFormComponent,
        LoginFormComponent,
        CategoriesFormComponent,
        NewsFormComponent,
        SlidesFormComponent,
        TestimonialFormComponent,
        UserFormComponent,
        SingUpComponent,
    ],
    exports: [
        ActivityFormComponent,
        LoginFormComponent,
        RegisterFormComponent,
        CategoriesFormComponent,
        NewsFormComponent,
        SlidesFormComponent,
        TestimonialFormComponent,
        UserFormComponent,
        RouterModule,
        ReactiveFormsModule,
    ],
    imports: [CommonModule, AppRoutingModule, RouterModule, ReactiveFormsModule, MatCardModule, MatFormFieldModule, MatInputModule, MatButtonModule
    ],
})
export class FeaturesModule {
}