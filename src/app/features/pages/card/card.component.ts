import { Component, Injectable, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
@Injectable({
  providedIn: 'root'
})
export class CardComponent implements OnInit {
  @Input() card : any;
  @Input("name") name: any ;
  @Input("description") description: any = "";
  @Input("image") image: any = "";

  constructor() { }

  ngOnInit(): void {
  }

}
