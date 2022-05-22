import { Component, OnInit } from "@angular/core";
import { CategoriesService } from "src/app/core/services/categories.service";
import { NewsService } from "src/app/core/services/news.service";
import { FormBuilder, Validators } from "@angular/forms";
import { News } from "../../../../shared/models/News";
import * as ClassicEditor from "@ckeditor/ckeditor5-build-classic";
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: "app-news-form",
  templateUrl: "./news-form.component.html",
  styleUrls: ["./news-form.component.scss"],
})
export class NewsFormComponent implements OnInit {
  categories: News[] = [];
  cardImageBase64: string = "";
  news: any;
  public id: string | null = "";

  public Editor = ClassicEditor;

  toBase64(event: any) {
    let permanent: string[] = [];
    const reader = new FileReader();
    reader.readAsDataURL(event.target.files[0]);
    reader.onload = () => {
      this.cardImageBase64 = reader.result as string;
    };
  }

  newsCommit() {
    let newsCommit = {
      name: this.news.get(["name"]).value,
      category_id: this.news.get(["category_id"]).value,
      content: this.news.get(["content"]).value,
      image: this.cardImageBase64,
    };

    if (newsCommit.image) {
      this.newsService.postNews(newsCommit).subscribe((response) => {
        console.log(response);
      });
    } else {
      alert("Agregue una imagen por favor")
    }
  }

  constructor(
    private categoriesService: CategoriesService,
    private newsService: NewsService,
    private formBuilder: FormBuilder,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.categoriesService.getCategories().subscribe((response) => {
      this.categories = response.data;

      let id = this.route.snapshot.params.id

      if(this.id){
        console.log(this.id)
      } else {
        console.log("Nada en el id")
      }
    });

    this.news = this.formBuilder.group({
      name: ["", [Validators.required, Validators.minLength(4)]],
      category_id: ["", Validators.required],
      content: ["", Validators.required],
    });
  }
}
