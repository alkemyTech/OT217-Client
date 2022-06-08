import { Component, Input, OnInit } from "@angular/core";

@Component({
  selector: "app-skeleton",
  templateUrl: "./skeleton.component.html",
  styleUrls: ["./skeleton.component.scss"],
})
export class SkeletonComponent implements OnInit {
  repeat: number[] = [];
  @Input() skeletonStyle: string = "";
  @Input() repetition: number = 0;

  fillArray(repetition: number) {
    for (let i = 0; i < repetition; i++) {
      this.repeat.push(1);
    }
  }

  constructor() {}

  ngOnInit(): void {
    this.fillArray(this.repetition);
  }
}
