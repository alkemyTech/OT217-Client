import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dash-board-backoffice',
  templateUrl: './dash-board-backoffice.component.html',
  styleUrls: ['./dash-board-backoffice.component.scss']
})
export class DashBoardBackofficeComponent implements OnInit {
  public textInitial: boolean;
  constructor() {
    this.textInitial= true
   }

  ngOnInit(): void {
  }

}
