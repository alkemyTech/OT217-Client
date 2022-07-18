import { Component, OnInit } from '@angular/core';
import { Data } from 'popper.js';
import { NosotrosService } from 'src/app/core/services/nosotros.service';
import { Organization } from '../../../../../shared/models/organization';
@Component({
  selector: 'app-nosotros',
  templateUrl: './nosotros.component.html',
  styleUrls: ['./nosotros.component.scss']
})
export class NosotrosComponent implements OnInit {

  organization: Organization;
  _nosotros: any;
  
  //name: any;

  constructor(
    private nosotrosService: NosotrosService) { }

  ngOnInit() {
    this.nosotrosService.getNosotros()
      .subscribe( data => this._nosotros = data)
  }

  
 
  }

  


