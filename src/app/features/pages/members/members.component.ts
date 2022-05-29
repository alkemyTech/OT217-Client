import { CommonModule } from '@angular/common';
import { Component, NgModule, OnInit } from '@angular/core';
import { MembersService } from 'src/app/core/services/members.service';


@Component({
  selector: 'app-members',
  templateUrl: './members.component.html',
  styleUrls: ['./members.component.scss']
})


export class MembersComponent implements OnInit {
  membersData: any;

  constructor(private membersService: MembersService) { }

  ngOnInit(): void {
    this.membersService.getOrganization().subscribe(response => {
      this.membersData = response.data;
      console.log(response.data);
    })
  }

}
