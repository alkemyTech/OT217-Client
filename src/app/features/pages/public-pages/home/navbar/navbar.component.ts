import { Component, Input, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { AuthService } from 'src/app/core/services/auth.service';
import { LogoutService } from 'src/app/core/services/logout.service';






@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  activo: any;

  constructor(private logoutService: LogoutService, private afAuth: AngularFireAuth, private authService: AuthService) { }

  public isLogged: boolean = false;
  user: any;


  ngOnInit() {
    this.onCheckUser();

  }

  getLoggedUser() {
    this.authService.getUserLogged().subscribe(res => {
      console.log(res?.displayName);
    });

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
      path: "/schoolCampaign",
      titulo: "Campaña materiales esc"
    },
    {
      path: "/toys",
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

  rutasbotonlogin: any[] = [
    {
      path: "",
      titulo: "Logout"
    }
  ]

}