import { Component, Input } from "@angular/core";

@Component({
  selector: "app-setup-progress",
  templateUrl: "./setup-progress.component.html",
  styleUrls: ["./setup-progress.component.scss"],
})
export class SetupProgressComponent {
  @Input() data: boolean = false;
  bufferValue = 25;
  constructor() {}
}
