import { Injectable } from '@angular/core';
import Swal from 'sweetalert2';

@Injectable({
  providedIn: 'root'
})
export class AlertsService {

  constructor() { }

  createdOk(){
    Swal.fire({
      position: 'center',
      icon: 'success',
      title: 'Creación exitosa',
      timer: 1500
    })
  }

  modifiedOk(){
    Swal.fire({
      position: 'center',
      icon: 'success',
      title: 'Modificación exitosa',
      timer: 1500
    })
  }
}
