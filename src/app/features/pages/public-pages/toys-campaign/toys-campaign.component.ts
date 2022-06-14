import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-toys-campaign',
  templateUrl: './toys-campaign.component.html',
  styleUrls: ['./toys-campaign.component.scss']
})
export class ToysCampaignComponent implements OnInit {

  actualDate:any = Date.now();

  dDay = new Date("Aug 7, 2022 16:00").getTime();

  distance = this.dDay - this.actualDate;

  leftTime:any = {
    days:0,
    hours:0,
    minutes:0
  }

  constructor() { }

  ngOnInit(): void {
    this.leftTime = {
      days: Math.floor(this.distance / (1000 * 60 * 60 * 24)),
      hours: Math.floor((this.distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
      minutes: Math.floor((this.distance % (1000 * 60 * 60)) / (1000 * 60)),
    }
  }

}
