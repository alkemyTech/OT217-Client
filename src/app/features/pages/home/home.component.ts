import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

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
      path: "/contactos",
      titulo: "Contactos"
    },
    {
      path: "/contribuye",
      titulo: "Contribuye"
    },

  ]

  constructor() { }

  ngOnInit() {
  }

}
