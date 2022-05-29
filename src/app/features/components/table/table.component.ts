import { Component, OnInit, Input } from "@angular/core";


@Component({
  selector: "app-table",
  templateUrl: "./table.component.html",
  styleUrls: ["./table.component.scss"],
})
export class TableComponent implements OnInit {
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
  @Input() deleteElement: any = (args: any) => {};

  //Data to be displayed in columns
  @Input() orderTrue: any;
  @Input() imageTrue: any;
  @Input() descriptionTrue: any;
  @Input() createdTrue: any;
  @Input() emailTrue: any;

  ngOnInit(): void {}
  displayedColumns: string[] = [
    "firstCol",
    "secondCol",
    "thirdCol"
  ];

  dateFormatter(date:string){
    let day = date.slice(0,10);
    let hour = date.slice(11,16);
    return `${day} ${hour}`; 
  }

  constructor() {}
}
