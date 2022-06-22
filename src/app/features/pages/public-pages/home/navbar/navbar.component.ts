import { Component, OnInit } from '@angular/core';
import { LogoutService } from 'src/app/core/services/logout.service';
import { UserService } from 'src/app/core/services/user.service';




@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  activo: any;

  constructor(private userService: UserService, private logoutService: LogoutService) { }

  public isLogged: boolean = false;

  ngOnInit() {
    this.onCheckUser();
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

  buttonRoutes: any[] = [
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

