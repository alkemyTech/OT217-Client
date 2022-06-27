import { Component, OnInit } from "@angular/core";
import { Slides } from "src/app/shared/models/Slides";
import * as ClassicEditor from "@ckeditor/ckeditor5-build-classic";
import { FormBuilder, Validators } from "@angular/forms";
import { ActivatedRoute, Router } from "@angular/router";
import { SlidesService } from "src/app/core/services/slides.service";
import { MatDialog } from "@angular/material/dialog";
import { SlidesModalComponent } from "../slides-modal/slides-modal.component";
import { AlertsService } from "src/app/core/services/alerts.service";

@Component({
  selector: "app-slides-form",
  templateUrl: "./slides-form.component.html",
  styleUrls: ["./slides-form.component.scss"],
})
export class SlidesFormComponent implements OnInit {
  slideDuplicates: boolean = false;
  slidesOrderNumber: Slides[] = [];
  cardImageBase64: string = "";
  slides: any;
  slidesId: string | null = "";
  currentSlides: Slides[] = [];

  title: string = "";

  public Editor = ClassicEditor;

  constructor(
    private formBuilder: FormBuilder,
    private route: ActivatedRoute,
    private slidesService: SlidesService,
    public dialog: MatDialog,
    private alert: AlertsService,
    private routes: Router
  ) {
    this.slidesId = this.route.snapshot.params.id;
  }

  ngOnInit(): void {
    if (this.slidesId) {
      this.title = "Modificar Slide";
      this.slidesService
        .getSlidesById<any>(this.slidesId)
        .subscribe((response) => {
          this.currentSlides.push(response.data);
          this.slides = this.formBuilder.group({
            name: [
              this.currentSlides[0].name,
              [Validators.required, Validators.minLength(4)],
            ],
            order: [this.currentSlides[0].order, Validators.required],
            description: [
              this.currentSlides[0].description,
              Validators.required,
            ],
          });
        });
    } else {
      this.title = "Crear Slide";
      this.slides = this.formBuilder.group({
        name: ["", [Validators.required, Validators.minLength(4)]],
        description: ["", Validators.required],
        order: [0, Validators.required],
        image: ["", Validators.required],
      });
    }

    this.getOrderNumber();
  }

  getOrderNumber() {
    this.slidesService.getSlides().subscribe((response) => {
      this.slidesOrderNumber = response.data;
    });
  }

  toBase64(event: any) {
    const reader = new FileReader();
    reader.readAsDataURL(event.target.files[0]);
    reader.onload = () => {
      this.cardImageBase64 = reader.result as string;
    };
  }

  checkOrderDuplicates() {
    this.slidesOrderNumber.map((element) => {
      if (element.order == this.slides.get(["order"]).value) {
        this.dialog.open(SlidesModalComponent, {
          data: {
            ...element,
          },
        });
      }
    });
  }

  // Slides Commit: Will POST or PATCH Slides elements to DataBase according if it's a new or modified element.
  slidesCommit() {
    let slidesCommit = {
      name: this.slides.get(["name"]).value,
      order: this.slides.get(["order"]).value,
      description: this.slides.get(["description"]).value,
      image: this.cardImageBase64,
    };

    if (this.slidesId) {
      this.slidesService
        .newPut(slidesCommit, this.slidesId)
        .subscribe((response) => {
          console.log(response);
          this.alert.modifiedOk();
          this.routes.navigate(['/backoffice/slides'])
        });
      this.slides.reset();
    } else if (!this.slidesId) {
      this.slidesService.postSlides(slidesCommit).subscribe((response) => {
        this.alert.createdOk();
        this.routes.navigate(['/backoffice/slides'])
      });
      this.slides.reset();
    }
  }
}
