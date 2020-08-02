import { faArrowDown, faAlignLeft, faUsers } from '@fortawesome/free-solid-svg-icons';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
})
export class HomeComponent implements OnInit {
  faArrowDown = faArrowDown;
  faAlignLeft = faAlignLeft;
  faUsers = faUsers;

  constructor() {
  }

  ngOnInit() {
  }
}
