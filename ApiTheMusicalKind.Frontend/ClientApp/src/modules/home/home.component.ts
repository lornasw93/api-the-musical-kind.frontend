import { Component } from '@angular/core';
import { faArrowDown, faAlignLeft, faUsers } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
})
export class HomeComponent {
  faArrowDown = faArrowDown;
  faAlignLeft = faAlignLeft;
  faUsers = faUsers;
}
