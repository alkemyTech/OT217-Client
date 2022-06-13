import { Component, OnInit, Input } from "@angular/core";

@Component({
  selector: "app-activity-card",
  templateUrl: "./activity-card.component.html",
  styleUrls: ["./activity-card.component.scss"],
})
export class ActivityCardComponent implements OnInit {
  @Input("name") name: any = "";
  @Input("description") description: any = "";
  @Input("image") image: any = "";
  @Input("id") id!: string;
  constructor() {}

  ngOnInit(): void {}
}
