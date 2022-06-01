import { Component, OnInit } from "@angular/core";
import { OrganizationListService } from "src/app/core/services/organization-list.service";
import { listData } from "src/app/shared/models/listData";


@Component({
  selector: "app-organization-list",
  templateUrl: "./organization-list.component.html",
  styleUrls: ["./organization-list.component.scss"],
})
export class OrganizationListComponent implements OnInit {

  listaDatos: listData[] = [];



  ngOnInit(): void { }
  displayedColumns: string[] = ["order", "image", "description", "buttons"];

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

