import { Component, OnInit } from "@angular/core";
import { CategoriesService } from "src/app/core/services/categories.service";
import { NewsService } from "src/app/core/services/news.service";
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from "@angular/forms";
import { News } from "../../../../shared/models/News";
import * as ClassicEditor from "@ckeditor/ckeditor5-build-classic";

@Component({
  selector: "app-news-form",
  templateUrl: "./news-form.component.html",
  styleUrls: ["./news-form.component.scss"],
})
export class NewsFormComponent implements OnInit {
  categories: News[] = [];
  cardImageBase64: any;
  news: any;

  public Editor = ClassicEditor;

  toBase64(event: any) {
    let permanent:string[] = []
    const reader = new FileReader();
    reader.readAsDataURL(event.target.files[0]);
    reader.onload = () => {
      this.cardImageBase64 = reader.result as string;
      permanent.push(this.cardImageBase64);
    };
  }

  testing() {
    console.log(this.news.value)
    console.log(this.cardImageBase64)
/*     this.newsService.postNews(this.news.value).subscribe(response=>{
      console.log(response)
    }) */
  }

  constructor(
    private categoriesService: CategoriesService,
    private newsService: NewsService,
    private formBuilder: FormBuilder
  ) {}

  ngOnInit(): void {
    this.categoriesService.getCategories().subscribe((response) => {
      this.categories = response.data;
    });

    this.news = this.formBuilder.group({
      name: ["", [Validators.required, Validators.minLength(4)]],
      category_id: ["", Validators.required],
      content: ["", Validators.required],
      image: [this.cardImageBase64]
    });
  }
}
