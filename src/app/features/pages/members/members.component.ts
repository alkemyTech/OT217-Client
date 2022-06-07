import { Component, OnInit } from '@angular/core';
import { MembersService } from 'src/app/core/services/members.service';
import { PageEvent } from '@angular/material/paginator';
import { inject } from '@angular/core';



@Component({
  selector: 'app-members',
  templateUrl: './members.component.html',
  styleUrls: ['./members.component.scss']
})


export class MembersComponent implements OnInit {
  membersData: any;

  constructor(private membersService: MembersService) { }

  page_size: number = 3;
  page_number: number = 1;
  pageSizeOptions: number[] = [3, 8];
  handlePage(e: PageEvent) {
    this.page_size = e.pageSize;
    this.page_number = e.pageIndex + 1;
  }

  ngOnInit(): void {
    this.membersService.getOrganization().subscribe(response => {
      this.membersData = response.data;
    })
  }
}
