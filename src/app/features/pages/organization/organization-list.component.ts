
import { CommonModule } from "@angular/common";
import { Component, OnInit } from "@angular/core";
import { OrganizationService } from "src/app/core/services/organization.service";




@Component({
    selector: 'app-organization-list',
    templateUrl: './organization-list.component.html',
    styleUrls: ['./organization-list.component.scss']
  })
  

  export class OrganizationListComponent {
    
      public listaDatos: any=[]
  route: any;

      constructor(private organizationService: OrganizationService){}

      ngOnInit(): void {
        this.organizationService.topOrganization().subscribe((data:any) => {
          this.listaDatos = data;
          console.log(data);
        });
      }
  }

