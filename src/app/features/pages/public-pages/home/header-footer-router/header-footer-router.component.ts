import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header-footer-router',
  templateUrl: './header-footer-router.component.html',
  styleUrls: ['./header-footer-router.component.scss']
})
export class HeaderFooterRouterComponent implements OnInit {

  constructor() { }

  ngOnInit() {
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
      path: "",
      titulo: "Campaña materiales esc"
    },
    {
      path: "",
      titulo: "Campaña juguetes"
    }

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

