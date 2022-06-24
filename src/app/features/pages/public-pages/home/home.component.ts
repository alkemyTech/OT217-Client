import { Component, OnInit } from '@angular/core';
import { LogoutService } from 'src/app/core/services/logout.service';
import { OrganizationService } from 'src/app/core/services/organization.service';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor(private logoutService: LogoutService, private organizationService: OrganizationService) { }


  public isLogged: boolean = false;
  public listaDatos: Array<any> = [];


  ngOnInit() {
    this.onCheckUser();
    this.organizationService.topOrganization().subscribe((result: any) => {
      this.listaDatos = result;
    })
  }

  onCheckUser() {
    if (localStorage.getItem("token") == null) {
      this.isLogged = false;
    } else {
      this.isLogged = true;
    }
  }

  onLogout() {
    this.logoutService.logOut();
    localStorage.removeItem('token');
  }


  routes: any[] = [
    {
      path: "",
      titulo: "Inicio"
    },
    {
      path: "/nosotros",
      titulo: "Nosotros"
    },
    {
      path: "/contact",
      titulo: "Contacto"
    }
  ]

  buttonroutes: any[] = [
    {
      path: "/login",
      titulo: "Login"

    },
    {
      path: "/register",
      titulo: "Registrate"
    }
  ]

  campaignRoutes: any[] = [
    {
      path: "/schoolCampaign",
      titulo: "Materiales escolares"
    },
    {
      path: "/toys",
      titulo: "Juguetes"
    }
  ]


}
