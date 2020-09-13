import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder, NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { IdentityService } from '../../services/identity.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  logged = localStorage.getItem('token');

  isLoggedIn = this.logged ? 'Logout' : 'Login';
  isRegistered = this.logged ? '' : 'Register';

  formModel = {
    email: '',
    password: ''
  };

  constructor(private identityService: IdentityService, private router: Router) {
  }

  ngOnInit() {
    this.redirectBasedOnRole();
  }

  redirectBasedOnRole() {
    const jwt = localStorage.getItem('token');
    if (jwt != null) {
      const jwtData = jwt.split('.')[1];
      const decodedJwtJsonData = window.atob(jwtData);
      const decodedJwtData = JSON.parse(decodedJwtJsonData);
      const role = decodedJwtData.role;
      if (role === 'Admin') {
        this.router.navigateByUrl('/dashboard');
      } else {
        this.router.navigateByUrl('/home');
      }
    }
  }

  onSubmit(form: NgForm) {
    this.identityService.login(form.value).subscribe(
      (res: any) => {
        localStorage.setItem('token', res.token);
        this.redirectBasedOnRole();
      },
      err => {
        if (err.status === 400) {
          console.log('Incorrect username or password.', 'Authentication failed.');
        } else {
          console.log(err);
        }
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
