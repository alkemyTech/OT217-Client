import { Component, OnInit } from '@angular/core';
import { USERS } from './user-mock';
import { Users } from './User'; 

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {

  user:Users[] = USERS;
  constructor() { }

  ngOnInit(): void {
  }

}
