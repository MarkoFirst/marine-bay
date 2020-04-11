import { Component, OnInit } from '@angular/core';
import {TRAINERS} from '../../config/constants/trainers';

@Component({
  selector: 'app-trainers',
  templateUrl: './trainers.component.html',
  styleUrls: ['./trainers.component.scss']
})
export class TrainersComponent implements OnInit {
  trainers = TRAINERS;

  constructor() {

  }

  ngOnInit() {
  }
}
