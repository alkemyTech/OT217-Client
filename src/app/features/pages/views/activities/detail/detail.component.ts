import {Component, OnInit} from '@angular/core';
import {Activity} from "../../../../../shared/models/Activity";
import {ActivityService} from "../../../../../core/services/activity.service";
import {ActivatedRoute} from "@angular/router";

@Component({
    selector: 'app-detail',
    templateUrl: './detail.component.html',
    styleUrls: ['./detail.component.scss']
})
export class DetailComponent implements OnInit {
     activities!: Activity;
     private id!: number;

    constructor(private activitiesService: ActivityService,
                private activatedRoute: ActivatedRoute,) {
    }

    ngOnInit(): void {
      this.id = this.activatedRoute.snapshot.params.id;
      this.getActivitiesById(this.id);
    }

    getActivitiesById(id: number) {
        this.activitiesService.getActivitiesById(id).subscribe((response) => {
            this.activities = response.data;
        });
    }
}
