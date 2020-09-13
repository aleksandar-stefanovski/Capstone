import { Component } from '@angular/core';
import { navItems } from '../../_nav';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: './client-layout.component.html'
})
export class ClientLayoutComponent {

  constructor(private router: Router) {
  }
  public sidebarMinimized = false;
  public navItems = navItems;


  logged = localStorage.getItem('token');

  hideElement = this.logged ? 'display: block' : 'display: none;';

  isLoggedIn = this.logged ? 'Logout' : 'Login';
  isRegistered = this.logged ? '' : 'Register';

  toggleMinimize(e) {
    this.sidebarMinimized = e;
  }


  onRegister() {
    localStorage.removeItem('token');
    this.router.navigate(['/register']);
  }

  onLogout() {
    localStorage.removeItem('token');
    this.router.navigate(['/login']);
  }
}