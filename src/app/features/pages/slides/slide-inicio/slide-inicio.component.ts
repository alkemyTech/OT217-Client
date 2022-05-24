import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-slide-inicio',
  templateUrl: './slide-inicio.component.html',
  styleUrls: ['./slide-inicio.component.scss']
})
export class SlideInicioComponent implements OnInit {
  @Input() card:any;
  constructor() { }

  ngOnInit(): void {
  }

}
