
import { Component } from "@angular/core";
import { OrganizationService } from "src/app/core/services/organization.service";




@Component({
  selector: 'app-organization-list',
  templateUrl: './organization-list.component.html',
  styleUrls: ['./organization-list.component.scss']
})



export class OrganizationListComponent {





  constructor(private organizationService: OrganizationService) { }
  public listaDatos: Array<any> = [];





  ngOnInit(): void {
    this.organizationService.topOrganization().subscribe((result: any) => {
      this.listaDatos = result;
      console.log(result);
    });
  }
}


