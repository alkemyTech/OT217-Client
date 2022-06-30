import { Component, OnInit } from '@angular/core';
import { MembersService } from 'src/app/core/services/members.service';
import { PageEvent } from '@angular/material/paginator';
import { Store } from '@ngrx/store';
import { retrievedMembersList } from 'src/app/shared/state/members/members.actions';
import { Observable } from 'rxjs';
import { selectMembers } from 'src/app/shared/state/members/members.selectors';



@Component({
  selector: 'app-members',
  templateUrl: './members.component.html',
  styleUrls: ['./members.component.scss']
})


export class MembersComponent implements OnInit {
  membersData: any;
  membersData$: Observable<any> = new Observable()

  constructor(private membersService: MembersService, private store: Store) {
    this.membersData$ = this.store.select(selectMembers)
  }

  page_size: number = 3;
  page_number: number = 1;
  pageSizeOptions: number[] = [3, 8];
  handlePage(e: PageEvent) {
    this.page_size = e.pageSize;
    this.page_number = e.pageIndex + 1;
  }

  ngOnInit(): void {
    this.loadData();

  }

  loadData() {
    this.membersService.topMembers().subscribe(response => {
      this.store.dispatch(retrievedMembersList({ members: response.data }))
      //this.membersData = response.data;
    })
  }

}
