import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder, NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { IdentityService } from '../../services/identity.service';

@Component({
    selector: 'app-dashboard',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.scss']
})
export class LogoutComponent implements OnInit {

    constructor(private router: Router) {
    }

    ngOnInit() {
        this.onLogout();
    }

    onLogout() {
        localStorage.removeItem('token');
        this.router.navigate(['/login']);
    }
}
