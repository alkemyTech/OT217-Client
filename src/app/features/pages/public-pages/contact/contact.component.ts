import { Component, OnInit } from "@angular/core";
import { latLng, marker, polyline, tileLayer, icon, point, Map } from "leaflet";

@Component({
  selector: "app-contact",
  templateUrl: "./contact.component.html",
  styleUrls: ["./contact.component.scss"],
})
export class ContactComponent {
  constructor() {}

  streetMaps = tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
    detectRetina: true,
    attribution:
      '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
  });
  wMaps = tileLayer("http://maps.wikimedia.org/osm-intl/{z}/{x}/{y}.png", {
    detectRetina: true,
    attribution:
      '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
  });

  summit = marker([-53.924, -68.654], {
    icon: icon({
      iconSize: [25, 41],
      iconAnchor: [13, 41],
      iconUrl: "leaflet/marker-icon.png",
      shadowUrl: "leaflet/marker-shadow.png",
    }),
  });

  BuenosAires = marker([-37.23, -59.634], {
    icon: icon({
      iconSize: [25, 41],
      iconAnchor: [13, 41],
      iconUrl: "leaflet/marker-icon.png",
      iconRetinaUrl: "leaflet/marker-icon-2x.png",
      shadowUrl: "leaflet/marker-shadow.png",
    }),
  });

  route = polyline([
    [-37.23, -59.634],
    [-31.766, -63.589],
    [-39.572, -67.28],
    [-47.577, -69.917],
    [-53.924, -68.654],
  ]);

  layersControl = {
    baseLayers: {
      "Street Maps": this.streetMaps,
      "Wikimedia Maps": this.wMaps,
    },
    overlays: {
      "Tierra del Fuego": this.summit,
      "Buenos Aires": this.BuenosAires,
      Destino: this.route,
    },
  };

  options = {
    layers: [this.streetMaps, this.route, this.summit, this.BuenosAires],
    zoom: 7,
    center: latLng([-53.924, -68.654]),
  };
}
