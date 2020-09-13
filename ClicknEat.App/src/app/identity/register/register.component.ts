import { Component, OnInit } from '@angular/core';
import { IdentityService } from '../../services/identity.service';
import { routes } from '../../app.routing';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  logged = localStorage.getItem('token');

  isLoggedIn = this.logged ? 'Logout' : 'Login';
  isRegistered = this.logged ? '' : 'Register';
  
  constructor(public identityService: IdentityService, private router: Router) { }

  ngOnInit(): void {
    this.identityService.formModel.reset();
  }

  onSubmit() {
    this.identityService.register().subscribe(
      (res: any) => {
        if (res !== null) {
          console.log('New user created!', 'Registration successful.');
          this.identityService.formModel.reset();
          this.router.navigate(['/home']);

        } else {
          console.log('error');
        }
      },
      err => {
        console.log(err);
      }
    );
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
