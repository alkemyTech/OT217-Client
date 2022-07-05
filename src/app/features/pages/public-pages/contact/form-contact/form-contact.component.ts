import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";


@Component({
  selector: "app-form-contact",
  templateUrl: "./form-contact.component.html",
  styleUrls: ["./form-contact.component.scss"],
})
export class FormContactComponent {
  public formLogin: FormGroup;

  isCheck= true;
  showError=true;

  constructor(private formBuilder: FormBuilder) {
    this.formLogin = this.formBuilder.group({
      name: ["", Validators.required],
      telephone: ["", [Validators.required, Validators.minLength(8)]],
      email: ["", [Validators.required, Validators.email]],
      message: ["", Validators.required],
    });
  }

  get Name() {
    return this.formLogin.get("name");
  }
  get Telephone() {
    return this.formLogin.get("telephone");
  }
  get Email() {
    return this.formLogin.get("email");
  }
  get Message() {
    return this.formLogin.get("message");
  }
}
