import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/core/services/user.service';




@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  activo: any;

  constructor(private userService: UserService) { }

  public isLogged: boolean = false;

  ngOnInit() {
    this.onCheckUser();
  }

  onCheckUser() {
    if (this.userService.getUser() == null) {
      this.isLogged = false;
    } else {
      this.isLogged = true;
    }
  }


  routes: any[] = [
    {
      path: "",
      titulo: "Inicio"
    },
    {
      path: "/members",
      titulo: "Nosotros"
    },
    {
      path: "/contact",
      titulo: "Contacto"
    },


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

}

