import { Component, OnInit } from '@angular/core';
import { OrganizationListService } from 'src/app/core/services/organization-list.service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {

  public listaDatos: Array<any> = []
  route: any;


  constructor(private organizationListService: OrganizationListService) { }

  ngOnInit() {
    this.organizationListService.getOrganizationData().subscribe((data: any) => {
      this.listaDatos = data;
    });
  }

  rutas: any[] = [
    {
      path: "",
      titulo: "Inicio"
    },
    {
      path: "/nosotros",
      titulo: "Nosotros"
    },
    {
      path: "/actividades",
      titulo: "Actividades"
    },

    {
      path: "/novedades",
      titulo: "Novedades"
    },
    {
      path: "/testimonios",
      titulo: "Testimonios"
    },
    {
      path: "/contact",
      titulo: "Contacto"
    },
    {
      path: "/contribuye",
      titulo: "Contribuye"
    },
  ]

}

