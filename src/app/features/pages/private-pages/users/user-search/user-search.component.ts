import { Component, ElementRef, OnInit, ViewChild } from "@angular/core";
import { fromEvent } from "rxjs";
import {
  debounceTime,
  distinctUntilChanged,
  filter,
  map,
} from "rxjs/operators";
import { UserSearchService } from "src/app/core/services/user-search.service";

@Component({
  selector: "app-user-search",
  templateUrl: "./user-search.component.html",
  styleUrls: ["./user-search.component.scss"],
})
export class UserSearchComponent implements OnInit {
  @ViewChild("txtQuery", { static: true })
  txtQuery: ElementRef;
  search: any;
  screenUsers: any;

  constructor(private userSearchService: UserSearchService) {}

  ngOnInit(): void {}

  dateChanged() {
    fromEvent(this.txtQuery.nativeElement, "keyup")
      .pipe(
        map((event: any) => {
          return event.target.value;
        }),
        filter((response) => response.length > 1),
        debounceTime(1000),
        distinctUntilChanged()
      )
      .subscribe(() => {
        this.userSearchService
          .getQuery(this.search)
          .subscribe((result: any) => {
            this.screenUsers = result.data;
          });
      });
  }
}
