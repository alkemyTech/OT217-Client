import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-activity-form',
  templateUrl: './activity-form.component.html',
  styleUrls: ['./activity-form.component.scss']
})
export class ActivityFormComponent implements OnInit {
  title = 'base-ong-angular-client';

  constructor() {}
   public listSlide:Array<any>  = []
  ngOnInit(): void {
 
  this.listSlide = [
    {
      image: ['https://placeimg.com/1080/500/animals','https://placeimg.com/1080/500/arch', 'https://placeimg.com/1080/500/nature'], 
      title: ['titulo1','titulo2','titulo3'],
      description: ['descripcion1','descripcion2','descripcion3']
    }
  ]
}
}