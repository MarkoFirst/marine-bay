import { Component, OnInit } from '@angular/core';
import { ROUTES } from '../../config/constants/routes';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  routes = ROUTES;

  constructor() {}

  ngOnInit() {
  }

}
