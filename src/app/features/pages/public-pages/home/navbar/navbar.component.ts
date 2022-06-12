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
      path: "/contacto",
      titulo: "Contacto"
    },
    {
      path: "/campana_materiales_esc",
      titulo: "Campaña materiales esc"
    },
    {
      path: "/campana_juguetes",
      titulo: "Campaña juguetes"
    },

  ]

  rutasboton: any[] = [
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

