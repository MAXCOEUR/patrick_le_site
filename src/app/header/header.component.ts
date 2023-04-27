import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  titre = "Patrick Le Stégosaure";
  showMenu = false;
  constructor(private router: Router){}

  toggleMenu() {
    this.showMenu = !this.showMenu;
  }
  moveHome() {
    this.router.navigate(['/home']);
  }
  moveEpisode() {
    this.router.navigate(['/episode']);
  }
  movePersonnage() {
    this.router.navigate(['/personnage']);
  }
  moveJeux() {
    this.router.navigate(['/jeux']);
  }
}
