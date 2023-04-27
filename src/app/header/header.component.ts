import { Component } from '@angular/core';
import { AuthService } from '../auth.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  isLoggin$: Observable<boolean>;
  titre = "Patrick Le Stégosaure";
  showMenu = false;

  constructor(private authService: AuthService) {
    this.isLoggin$ = authService.isUserLoggedIn$;
  }

  logout(): void {
    this.authService.logout();
  }

  toggleMenu() {
    this.showMenu = !this.showMenu;
  }
}
