import { Component, Input, OnInit } from "@angular/core";
import { OrganizationListService } from "src/app/core/services/organization-list.service";



@Component({
  selector: "app-organization-list",
  templateUrl: "./organization-list.component.html",
  styleUrls: ["./organization-list.component.scss"],
})
export class OrganizationListComponent implements OnInit {

  listaDatos = [];




  ngOnInit(): void {
    this.organizationListService.topOrganization().subscribe((response) => {
      this.listaDatos = response.data;
      console.log(response.data);
    })
  }








  constructor(private organizationListService: OrganizationListService) {

  }




};

