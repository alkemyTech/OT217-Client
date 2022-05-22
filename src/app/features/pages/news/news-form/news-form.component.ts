import { Component, OnInit } from "@angular/core";
import { CategoriesService } from "src/app/core/services/categories.service";
import { NewsService } from "src/app/core/services/news.service";
import * as ClassicEditor from "@ckeditor/ckeditor5-build-classic";

@Component({
  selector: "app-news-form",
  templateUrl: "./news-form.component.html",
  styleUrls: ["./news-form.component.scss"],
})
export class NewsFormComponent implements OnInit {
  categories: any[] = [];
  cardImageBase64: string = "";

  public Editor = ClassicEditor;

  toBase64(event: any) {
    const reader = new FileReader();
    reader.onload = (e: any) => {
      const image = new Image();
      image.src = e.target.result;
      image.onload = (rs) => {};
      const imgBase64Path = e.target.result;
      this.cardImageBase64 = imgBase64Path;
    };
    reader.readAsDataURL(event.target.files[0]);
  }

  testing() {
    let newsSend = {
      name: "Esta es mi new prueba",
      content: "string",
      image: this.cardImageBase64,
    };

    this.newsService.postNews(newsSend).subscribe((response) => {
      console.log(response);
    });
  }

  constructor(
    private categoriesService: CategoriesService,
    private newsService: NewsService
  ) {}

  ngOnInit(): void {
    this.categoriesService.getCategories().subscribe((response) => {
      this.categories = response.data;
      console.log(this.categories);
    });
  }
}
