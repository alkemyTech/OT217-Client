import { Component, OnInit, Input } from '@angular/core';



@Component({
  selector: 'app-members-card-component',
  templateUrl: './members-card-component.component.html',
  styleUrls: ['./members-card-component.component.scss']
})
export class MembersCardComponentComponent {

  constructor() { }

  @Input("name") name: any = "";
  @Input("description") description: any = "";
  @Input("facebookUrl") facebookUrl: any = "";
  @Input("linkedinUrl") linkedinUrl: any = "";
  @Input("image") image: any = "";
  @Input("id") id!: string;



}
