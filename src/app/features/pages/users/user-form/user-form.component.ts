import { Component } from "@angular/core";
import { Validators, FormBuilder } from "@angular/forms";
import { ActivatedRoute } from "@angular/router";
import { PublicapiServiceService } from "src/app/core/services/publicapi-service.service";
import { UserService } from "src/app/core/services/user.service";

@Component({
  selector: "app-user-form",
  templateUrl: "./user-form.component.html",
  styleUrls: ["./user-form.component.scss"],
})
export class UserFormComponent {
  formRecicler: any;
  userId: string | null = "";
  archivoImage: string = "";

  constructor(
    private FormBuilder: FormBuilder,
    private userService: UserService,
    private route: ActivatedRoute,
    private service:PublicapiServiceService
  ) {
    this.formRecicler = this.FormBuilder.group({
      name: ["", [Validators.required, Validators.minLength(4)]],
      password: ["", [Validators.required, Validators.minLength(4)]],
      email: ["", [Validators.required, Validators.email]],
      image: ["", Validators.required],
      rol_id: ["", Validators.required],
      description: ["", [Validators.required, Validators.minLength(10)]],
    });
    this.userId = this.route.snapshot.params.id;
    this.mostrarmetodoGet(1544)
  }

  get Name() {
    return this.formRecicler.get("name");
  }
  get Password() {
    return this.formRecicler.get("password");
  }
  get Email() {
    return this.formRecicler.get("email");
  }
  get Image() {
    return this.formRecicler.get("image");
  }
  get Rol() {
    return this.formRecicler.get("rol_id");
  }
  get Description() {
    return this.formRecicler.get("description");
  }

  submit() {
    let user = {
      name: this.formRecicler.get(["name"]).value,
      email: this.formRecicler.get(["email"]).value,
      rol_id: this.formRecicler.get(["rol_id"]).value,
      description: this.formRecicler.get(["description"]).value,
      password: this.formRecicler.get(["password"]).value,
      image: this.formRecicler.get(["image"]).value,
    };
    if (this.userId) {
      this.userService.putUser(user, this.userId).subscribe((response) => {
        this.formRecicler.reset();
      });
    } else {
      this.userService.postUser(user).subscribe((response) => {
        this.formRecicler.reset();
      });
    }
  }

  changeImageBase64(event: any) {
    let reader = new FileReader();
    reader.readAsDataURL(event.target.files[0]);
    reader.onload = () => {
      this.archivoImage = reader.result as string;
    };
  }
  mostrarmetodoGet(id:any){
    this.service.metodoGet(id).subscribe((response => {
      console.log(response)
    }))
  }

}