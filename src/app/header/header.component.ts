import { Component } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  titre = "Patrick Le Stégosaure";
  showMenu = false;

  toggleMenu() {
    this.showMenu = !this.showMenu;
  }
}
