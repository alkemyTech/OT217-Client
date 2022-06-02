import { Component, Input, OnInit } from "@angular/core";
import { OrganizationListService } from "src/app/core/services/organization-list.service";
import { listData } from "src/app/shared/models/listData";


@Component({
  selector: "app-organization-list",
  templateUrl: "./organization-list.component.html",
  styleUrls: ["./organization-list.component.scss"],
})
export class OrganizationListComponent implements OnInit {

  listaDatos = [];




  ngOnInit(): void { }

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

  displayedColumns: string[] = ["firstCol", "secondCol", "thirdCol", "order", "image", "description", "buttons"];





  constructor(private organizationListService: OrganizationListService) {
    this.populateArray();
  }

  populateArray() {
    this.organizationListService.topOrganization().subscribe((response) => {
      this.listaDatos = response.data;
      console.log(response.data);
    });
  }


};

