import { Component, OnInit } from "@angular/core";
import { Slides } from "src/app/shared/models/Slides";
import * as ClassicEditor from "@ckeditor/ckeditor5-build-classic";
import { FormBuilder, Validators } from "@angular/forms";
import { ActivatedRoute } from "@angular/router";
import { SlidesService } from "src/app/core/services/slides.service";
import { MatDialog } from "@angular/material/dialog";
import { SlidesModalComponent } from "../slides-modal/slides-modal.component";

@Component({
  selector: "app-slides-form",
  templateUrl: "./slides-form.component.html",
  styleUrls: ["./slides-form.component.scss"],
})
export class SlidesFormComponent implements OnInit {
  orderDuplicated: boolean = false;
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
    public dialog: MatDialog
  ) {
    this.slidesId = this.route.snapshot.params.id;
  }

  ngOnInit(): void {
    if (this.slidesId) {
      this.title = "Modificar Slide";
      this.slidesService.getSlidesId(this.slidesId).subscribe((response) => {
        this.currentSlides.push(response.data);
        console.log(this.currentSlides[0]);
        this.slides = this.formBuilder.group({
          name: [
            this.currentSlides[0].name,
            [Validators.required, Validators.minLength(4)],
          ],
          order: [this.currentSlides[0].order, Validators.required],
          description: [this.currentSlides[0].description, Validators.required],
        });
      });
    } else {
      this.title = "Crear Slide";
      this.slides = this.formBuilder.group({
        name: ["", [Validators.required, Validators.minLength(4)]],
        description: ["", Validators.required],
        order: ["null", Validators.required],
        image: ["", Validators.required],
      });
    }

    this.getOrderNumber();
  }

  getOrderNumber() {
    this.slidesService.getSlides().subscribe((response) => {
      for (let item of response.data) {
        this.slidesOrderNumber.push(item);
      }
    });
  }

  toBase64(event: any) {
    const reader = new FileReader();
    reader.readAsDataURL(event.target.files[0]);
    reader.onload = () => {
      this.cardImageBase64 = reader.result as string;
    };
  }

  checkOrder() {
    this.slidesOrderNumber.map((element) => {
      if (element.order == this.slides.get(["order"]).value) {
        this.dialog.open(SlidesModalComponent, {
          data: {
            ...element,
          },
        });
        this.orderDuplicated = true;
      } else {
        this.orderDuplicated = false;
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

    if (this.orderDuplicated === true) {
      
    } else {
      if (this.slidesId) {
        this.slidesService
          .updateSlides(slidesCommit, this.slidesId)
          .subscribe((response) => {
            console.log(response);
          });
        this.slides.reset();
      } else if (!this.slidesId) {
        this.slidesService.postSlides(slidesCommit).subscribe((response) => {
          console.log(response);
        });
        this.slides.reset();
      }
    }
  }
}
