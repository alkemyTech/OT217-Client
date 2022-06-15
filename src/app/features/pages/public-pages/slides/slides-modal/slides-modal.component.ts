import { Component, Inject, OnInit } from "@angular/core";
import { MAT_DIALOG_DATA } from "@angular/material/dialog";
import { Slides } from "src/app/shared/models/Slides";
import { SlidesService } from "src/app/core/services/slides.service";
import { Router } from "@angular/router";

@Component({
  selector: "app-slides-modal",
  templateUrl: "./slides-modal.component.html",
  styleUrls: ["./slides-modal.component.scss"],
})
export class SlidesModalComponent implements OnInit {
  constructor(
    @Inject(MAT_DIALOG_DATA) public data: Slides,
    private slidesService: SlidesService,
    private router: Router
  ) {}
 
  quitar(slide: Slides, id: number) {
    let quitarSlide = {
      name: slide.name,
      order: 0,
    };
    this.slidesService
      .putSlides(quitarSlide, String(id))
      .subscribe((response) => {});
  }

  modificar(data: number) {
    this.router.navigate(["/backoffice/slides/", data]);
  } 

  ngOnInit(): void {}
}
