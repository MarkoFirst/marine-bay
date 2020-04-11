import { Component, OnInit } from '@angular/core';
import {SCHEDULE} from '../../config/constants/schedule';

@Component({
  selector: 'app-schedule',
  templateUrl: './schedule.component.html',
  styleUrls: ['./schedule.component.scss']
})
export class ScheduleComponent implements OnInit {
  schedule = SCHEDULE;

  constructor() { }

  ngOnInit() {
  }

}
