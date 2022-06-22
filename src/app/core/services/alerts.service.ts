import { Injectable } from '@angular/core';
import Swal from 'sweetalert2';

@Injectable({
  providedIn: 'root'
})
export class AlertsService {

  constructor() { }

  adminDonation(){
    Swal.fire('Los administradores tienen prohibido realizar donaciones')
  }
}
