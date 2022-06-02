import { Component, Input, OnInit } from '@angular/core';
import { listData } from "src/app/shared/models/listData";

@Component({
  selector: 'app-organization-table',
  templateUrl: './organization-table.component.html',
  styleUrls: ['./organization-table.component.scss']
})
export class OrganizationTableComponent implements OnInit {

  listaDatos: listData[] = [];
  //Title to display
  @Input() title: string = "";
  // Array to populate Table
  @Input() dataArray: any;
  // Definition of column names
  @Input() firstCol: string = " ";
  @Input() secondCol: string = " ";
  @Input() thirdCol: string = " ";
  @Input() fourthCol: string = " ";
  // Action Button definition
  @Input() editUrl: any;
  @Input() deleteElement: any = (args: any) => { };

  //Data to be displayed in columns
  @Input() orderTrue: any;
  @Input() imageTrue: any;
  @Input() descriptionTrue: any;
  @Input() createdTrue: any;
  @Input() emailTrue: any;

  ngOnInit(): void { }
  displayedColumns: string[] = [
    "firstCol",
    "secondCol",
    "thirdCol"
  ];

  dateFormatter(date: string) {
    let day = date.slice(0, 10);
    let hour = date.slice(11, 16);
    return `${day} ${hour}`;
  }

  constructor() { }
}



