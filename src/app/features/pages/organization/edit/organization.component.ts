import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormControl } from "@angular/forms";
import { OrganizationService } from "src/app/core/services/organization.service";

@Component({
  selector: "app-organization-form",
  templateUrl: "./organization-form.component.html",
  styleUrls: ["./organization.component.scss"],
})
export class OrganizationFormComponent implements OnInit {
  form;
  title = "material";

  selectedFile: any = null;

  onFileSelected(event: any): void {
    this.selectedFile = event.target.files[0] ?? null;
  }

  submit() {
    if (this.form.valid) {

    } else {
      alert("FILL ALL FIELDS");
    }
  }

  constructor(
    private formBuilder: FormBuilder,
    private organizationService: OrganizationService
  ) {

    this.form = formBuilder.group({
      firstname: [""],
      lastname: [""],
      description: [""],
      message: [""],
    });
  }

  ngOnInit() {
    this.organizationService.topOrganization().subscribe((data: any) => {

    });
  }
}
