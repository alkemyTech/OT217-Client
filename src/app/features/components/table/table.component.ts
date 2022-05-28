import { Component, OnInit, Input } from "@angular/core";
import { SlidesService } from "src/app/core/services/slides.service";
import { Slides } from "src/app/shared/models/Slides";
import { Router } from "@angular/router";

@Component({
  selector: "app-table",
  templateUrl: "./table.component.html",
  styleUrls: ["./table.component.scss"],
})
export class TableComponent implements OnInit {
  // Array to populate Table
  @Input() dataArray: any;
  // Definition of column names
  @Input() firstCol: string = "First Column";
  @Input() secondCol: string = "Second Column";
  @Input() thirdCol: string = "Third Column";
  @Input() fourthCol: string = "Fourth Column";
  // Action Button definition
  @Input() editUrl: any;
  @Input() deleteElement: any = (args: any) => {};

  ngOnInit(): void {}
  displayedColumns: string[] = [
    "firstCol",
    "secondCol",
    "thirdCol",
    "fourthCol",
  ];

  constructor() {}
}
