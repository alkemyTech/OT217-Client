import { Component, OnInit } from '@angular/core';
import { SlidesService } from 'src/app/core/services/slides.service';
import { Slides } from 'src/app/shared/models/Slides';

@Component({
  selector: 'app-slides-list',
  templateUrl: './slides-list.component.html',
  styleUrls: ['./slides-list.component.scss']
})
export class SlidesListComponent implements OnInit {
  slidesDataTable:Slides[] = [];

  constructor(private slidesService:SlidesService) { }

  ngOnInit(): void {
    this.slidesService.getSlides().subscribe(response =>{
      this.slidesDataTable = response.data;
    })}
}
