import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'ClicknEat-APP';

  logged = localStorage.getItem('token');
  constructor(private router: Router) {

  }

  onLogout() {
    localStorage.removeItem('token');
    this.router.navigate(['login']);
  }
}
