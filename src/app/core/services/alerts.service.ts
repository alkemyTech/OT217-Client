import { Injectable } from "@angular/core";
import Swal from "sweetalert2";

@Injectable({
  providedIn: "root",
})
export class AlertsService {
  constructor() {}

  public onSuccess() {
    Swal.fire("Excelente!", "Guardado con exito", "success");
  }

  public onError() {
    Swal.fire({
      icon: "error",
      title: "Oops...",
      text: "Falló la conexión",
    });
  }
}
