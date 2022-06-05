import { CommonModule } from "@angular/common";
import { Component, OnInit } from "@angular/core";
import { OrganizationListService } from "src/app/core/services/organization-list.service";





@Component({
  selector: 'app-organization-list',
  templateUrl: './organization-list.component.html',
  styleUrls: ['./organization-list.component.scss']
})


export class OrganizationListComponent {

  public listaDatos: Array<any> = []
  route: any;

  constructor(private organizationListService: OrganizationListService) { }

  ngOnInit(): void {
    this.organizationListService.topOrganization().subscribe((data: any) => {
      this.listaDatos = data;
      console.log(data);
    });
  }
}

