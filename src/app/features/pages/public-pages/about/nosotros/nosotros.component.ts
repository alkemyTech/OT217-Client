import { Component, OnInit } from '@angular/core';
import { NosotrosService } from 'src/app/core/services/nosotros.service';
import { Injectable } from '@angular/core';
import { data } from 'jquery';
@Component({
  selector: 'app-nosotros',
  templateUrl: './nosotros.component.html',
  styleUrls: ['./nosotros.component.scss']
})
export class NosotrosComponent implements OnInit {

  getOrganization = [];
  name: string;
  _nosotros: any;

  constructor(
    private nosotrosService: NosotrosService,
  ) { }
   
   

  ngOnInit(): void {
    this.nosotrosService.getNosotros()
    .subscribe( data => this._nosotros = data)
  }

  petition(): void {
    

  }

}
