import { Component, Input, OnInit } from "@angular/core";
import { SlidesService } from "src/app/core/services/slides.service";
import { Slides } from "src/app/shared/models/Slides";

@Component({
  selector: "app-slide-inicio",
  templateUrl: "./slide-inicio.component.html",
  styleUrls: ["./slide-inicio.component.scss"],
})
export class SlideInicioComponent implements OnInit {
  @Input() card: any;
  slides: Slides[] = [];
  constructor(private slideService: SlidesService) {}

  ngOnInit(): void {
    this.getSlides();
  }

  getSlides() {
    this.slideService.getSlides().subscribe((response) => {
      this.slides = response.data;
    });
  }
}
