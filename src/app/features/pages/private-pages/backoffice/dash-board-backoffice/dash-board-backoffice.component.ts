import { Component} from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-dash-board-backoffice',
  templateUrl: './dash-board-backoffice.component.html',
  styleUrls: ['./dash-board-backoffice.component.scss']
})
export class DashBoardBackofficeComponent{
  public textInitial: boolean;
  constructor(private router: Router) {
    this.textInitial= true
   }

   linkButtom(ruta:string){
     switch(ruta){
      case 'news':  this.router.navigate([''])
      break;
      case 'activities':  this.router.navigate(['backoffice/activities'])
       break; 
      case 'categories':  this.router.navigate([''])
      break;
      case 'testimonials':  this.router.navigate([''])
      break;
      case 'organization':  this.router.navigate([''])
       break; 
       case 'sliders':  this.router.navigate(['backoffice/slides'])
       break; 
       case 'users':  this.router.navigate(['backoffice/users'])
       break; 
       case 'members':  this.router.navigate([''])
       break; 
     }
   }

}
