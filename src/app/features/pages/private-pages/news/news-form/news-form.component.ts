import { Component, OnInit } from "@angular/core";
import { NewsService } from "src/app/core/services/news.service";
import { FormBuilder, FormControl, FormGroup, Validators } from "@angular/forms";
import { News } from "../../../../../shared/models/News";
import * as ClassicEditor from "@ckeditor/ckeditor5-build-classic";
import { ActivatedRoute } from "@angular/router";
import { MatDialog } from "@angular/material/dialog";
import { AlertComponent } from "src/app/features/components/setup-alerts/alert/alert.component";

@Component({
  selector: "app-news-form",
  templateUrl: "./news-form.component.html",
  styleUrls: ["./news-form.component.scss"],
})
export class NewsFormComponent implements OnInit {
  testError:boolean = true;

  categories: News[] = [];
  cardImageBase64: string = "";
  titleForm = new FormGroup({
    name: new FormControl('', Validators.minLength(4)),
  })
  news: any;
  newsId: string | null = "";
  currentNews: News[] = [];

  title: string = "";

  public Editor = ClassicEditor;

  toBase64(event: any) {
    const reader = new FileReader();
    reader.readAsDataURL(event.target.files[0]);
    reader.onload = () => {
      this.cardImageBase64 = reader.result as string;
    };
  }

  setError(){
    this.testError = false;
  }

  newsCommit() {
    let newsCommit = {
      id: 0,
      name: this.news.get(["name"]).value,
      category_id: this.news.get(["category_id"]).value,
      content: this.news.get(["content"]).value,
      image: this.cardImageBase64,
    };

    if (this.newsId) {
      this.newsService.putNews(newsCommit, this.newsId).subscribe(
        (response) => {
          return response;
        },
        (error) => {
          this.dialog.open(AlertComponent, {
            width: "350px",
            data: "La petición no se realizó correctamente.",
          });
        }
      );
      this.news.reset();
    } else if (!this.newsId) {
      this.newsService.postNews(newsCommit).subscribe(
        (response) => {
          return response;
        },
        (error) => {
          this.dialog.open(AlertComponent, {
            width: "350px",
            data: "La petición no se realizó correctamente.",
          });
        }
      );
      this.news.reset();
    }
  }

  constructor(
    private newsService: NewsService,
    private formBuilder: FormBuilder,
    private route: ActivatedRoute,
    public dialog: MatDialog
  ) {
    this.newsId = this.route.snapshot.params.id;
  }

  ngOnInit(): void {
/*     this.categoriesService.getCategories().subscribe((response) => {
      this.categories = response.data;
    }); */

    if (this.newsId) {
      this.title = "Modificar Novedad";
      this.newsService.getNewsById<any>(this.newsId).subscribe((response) => {
        this.currentNews.push(response.data);
        this.news = this.formBuilder.group({
          name: [
            this.currentNews[0].name,
            [Validators.required, Validators.minLength(4)],
          ],
          category_id: [this.currentNews[0].category_id, Validators.required],
          content: [this.currentNews[0].content, Validators.required],
          image: [this.currentNews[0].image, Validators.required],
        });
      },
      (error) => {
        this.dialog.open(AlertComponent, {
          width: "350px",
          data: "La petición no se realizó correctamente",
        });
      });
    } else {
      this.title = "Crear Novedad";
      this.news = this.formBuilder.group({
        name: ["", [Validators.required, Validators.minLength(4)]],
        category_id: ["", Validators.required],
        content: ["", Validators.required],
        image: [this.cardImageBase64, Validators.required],
      });
    }
  }
}
