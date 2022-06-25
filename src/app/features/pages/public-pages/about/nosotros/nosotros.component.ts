import { Component, OnInit } from '@angular/core';
import { NosotrosService } from 'src/app/core/services/nosotros.service';
import { Organization } from 'src/app/features/models';
@Component({
  selector: 'app-nosotros',
  templateUrl: './nosotros.component.html',
  styleUrls: ['./nosotros.component.scss']
})
export class NosotrosComponent implements OnInit {

  

  constructor(
    private nosotrosService: NosotrosService,
  ) { }

  ngOnInit(): void {
    console.log(this.nosotrosService.getOrganization())
  }

}
