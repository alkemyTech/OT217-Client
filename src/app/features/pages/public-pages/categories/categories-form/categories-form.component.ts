import { Component, OnInit } from "@angular/core";
import { FormBuilder, Validators } from "@angular/forms";
import { CategoriesService } from "src/app/core/services/categories.service";
import * as ClassicEditor from "@ckeditor/ckeditor5-build-classic";
import { ActivatedRoute } from "@angular/router";
@Component({
  selector: "app-categories-form",
  templateUrl: "./categories-form.component.html",
  styleUrls: ["./categories-form.component.scss"],
})
export class CategoriesFormComponent implements OnInit {
  
  categories: any;
  cardImageBase64: string = "";
  categoriesId: string | null = "";

  public Editor = ClassicEditor;

  constructor(
    private fb: FormBuilder,
    private categoriesService: CategoriesService,
    private route: ActivatedRoute
  ) {
    this.categoriesId = this.route.snapshot.params.id;
  }

  ngOnInit(): void {
    this.categories = this.fb.group({
      name: ["", [Validators.required, Validators.minLength(4)]],
      description: ["", Validators.required],
      image: ["", Validators.required],
    });
  }

  categoriesCommit() {
    let categoriesCommit = {
      name: this.categories.get(["name"]).value,
      description: this.categories.get(["description"]).value,
      image: this.cardImageBase64,
    };

    if (this.categoriesId) {
      this.categoriesService
        .putCategories(categoriesCommit, this.categoriesId)
        .subscribe((resp) => resp);
    } else if (!this.categoriesId) {
      this.categoriesService
        .postCategories(categoriesCommit)
        .subscribe((resp) => resp);
    }
  }

  toBase64(event: any) {
    const reader = new FileReader();
    reader.readAsDataURL(event.target.files[0]);
    reader.onload = () => {
      this.cardImageBase64 = reader.result as string;
    };
  }
}
