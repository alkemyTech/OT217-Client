import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-donations",
  templateUrl: "./donations.component.html",
  styleUrls: ["./donations.component.scss"],
})
export class DonationsComponent implements OnInit {
  donation: number = 300;

  setDonation($event: number) {
    this.donation = $event.valueOf();
  }

  makeDonation() {
    switch (this.donation) {
      case 100:
        window.open("https://mpago.la/2iv6WJp", "_blank");
        break;
      case 200:
        window.open("https://mpago.la/1b9B39s", "_blank");
        break;
      case 300:
        window.open("https://mpago.la/2e9nP98", "_blank");
        break;
      case 400:
        window.open("https://mpago.la/2e9nP98", "_blank");
        break;
      case 500:
        window.open("https://mpago.la/16kE57P", "_blank");
        break;

      default:
        break;
    }
  }

  constructor() {}

  ngOnInit(): void {}
}
