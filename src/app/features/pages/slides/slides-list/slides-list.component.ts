import { Component, OnInit, PipeTransform } from "@angular/core";
import { SlidesService } from "src/app/core/services/slides.service";
import { Slides } from "src/app/shared/models/Slides";
import {MatTableDataSource} from '@angular/material/table';
import { Router } from "@angular/router";


@Component({
  selector: "app-slides-list",
  templateUrl: "./slides-list.component.html",
  styleUrls: ["./slides-list.component.scss"],
})
export class SlidesListComponent implements OnInit {
  slidesDataTable: Slides[] = [];
  dataSource = new MatTableDataSource(this.slidesDataTable);

  ngOnInit(): void {
    this.slidesService.getSlides().subscribe((response) => {
      this.slidesDataTable = response.data;
    });
  }

  edit(slideId:number){
    let idUrl = String(slideId)
    this.router.navigate([`/backoffice/slides/${idUrl}`])
  }

  constructor(private slidesService: SlidesService, private router:Router) {}

}
