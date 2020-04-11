import {Component, OnInit, ViewEncapsulation} from '@angular/core';
import {PROGRAMS} from '../../config/constants/programs';

@Component({
  selector: 'app-prices',
  templateUrl: './prices.component.html',
  styleUrls: ['./prices.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class PricesComponent implements OnInit {
  programs = PROGRAMS;
  currentType = 0;

  constructor() {
  }

  ngOnInit() {
  }

  changeCurrentType(newValue: number): void {
    this.currentType = newValue;
  }

  setBG(event, color): void {
    event.target.style.backgroundColor = color;
  }

  clear(event): void {
    event.target.style.backgroundColor = null;
  }
}
