import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-school-campanign",
  templateUrl: "./school-campanign.component.html",
  styleUrls: ["./school-campanign.component.scss"],
})
export class SchoolCampanignComponent implements OnInit {
  public currentDate = Date.now();
  public eventDate = new Date("Jun 20, 2022 13:00").getTime();
  public days: number;
  public hours: number;
  public minutes: number;

  constructor() {}

  ngOnInit(): void {
    this.diferenceData()
  }
  diferenceData() {
    var diferenceData = this.eventDate-this.currentDate;
    this.days = Math.floor(diferenceData / (1000 * 60 * 60 * 24));
    this.hours = Math.floor(
      (diferenceData % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
    );
    this.minutes = Math.floor((diferenceData % (1000 * 60 * 60)) / (1000 * 60));
  }
}
