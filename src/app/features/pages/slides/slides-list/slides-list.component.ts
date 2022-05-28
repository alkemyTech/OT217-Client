import { Component, OnInit } from "@angular/core";
import { SlidesService } from "src/app/core/services/slides.service";
import { Slides } from "src/app/shared/models/Slides";
import { Router } from "@angular/router";

@Component({
  selector: "app-slides-list",
  templateUrl: "./slides-list.component.html",
  styleUrls: ["./slides-list.component.scss"],
})
export class SlidesListComponent implements OnInit {
  slidesDataTable: Slides[] = [];

  ngOnInit(): void {}
  displayedColumns: string[] = ["order", "image", "description", "buttons"];

  edit(slideId: number) {
    this.router.navigate([`/backoffice/slides/${slideId}`]);
  }

  constructor(private slidesService: SlidesService, private router: Router) {
    this.populateArray();
  }

  populateArray() {
    this.slidesService.getSlides().subscribe((response) => {
      this.slidesDataTable = response.data;
    });
  }

  deleteElement(slideId: number) {
    this.slidesService.deleteSlidesId(String(slideId)).subscribe(() =>{
      this.populateArray();
    }
    );
    
  }
}
