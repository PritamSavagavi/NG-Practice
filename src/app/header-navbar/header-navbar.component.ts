import { Component } from '@angular/core';

@Component({
  selector: 'app-header-navbar',
  templateUrl: './header-navbar.component.html',
  styleUrl: './header-navbar.component.scss'
})
export class HeaderNavbarComponent {
  isMenuActive = false;

  toggleMenu() {
    this.isMenuActive = !this.isMenuActive;
  }
}
