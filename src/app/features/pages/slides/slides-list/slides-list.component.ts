import { Component, OnInit, PipeTransform } from "@angular/core";
import { SlidesService } from "src/app/core/services/slides.service";
import { Slides } from "src/app/shared/models/Slides";
import { FormControl } from "@angular/forms";

import { Observable } from "rxjs";
import { map, startWith } from "rxjs/operators";

@Component({
  selector: "app-slides-list",
  templateUrl: "./slides-list.component.html",
  styleUrls: ["./slides-list.component.scss"],
})
export class SlidesListComponent implements OnInit {
  slidesDataTable: Slides[] = [];

  ngOnInit(): void {
    this.slidesService.getSlides().subscribe((response) => {
      this.slidesDataTable = response.data;
    });
  }

  search(text: string): Slides[] {
    return this.slidesDataTable.filter((slide) => {
      const term = text.toLowerCase();
      return slide.name.toLowerCase().includes(term);
    });
  }

  slides$: Observable<Slides[]>;
  filter = new FormControl("");

  constructor(private slidesService: SlidesService) {
    this.slides$ = this.filter.valueChanges.pipe(
      startWith(""),
      map((text) => this.search(text))
    );
  }
}
