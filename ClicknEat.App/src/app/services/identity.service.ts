import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from '../identity/user.model';
import { Validators, FormBuilder } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class IdentityService {

  formModel = this.fb.group({
    email: ['', Validators.email],
    password: ['', Validators.required]
  });

  constructor(private fb: FormBuilder, private http: HttpClient) { }

  endPoint = 'https://localhost:5001/api/v1/';

  register() {
    const body = {
      email: this.formModel.value.email,
      password: this.formModel.value.password
    };

    return this.http.post(this.endPoint + 'Identity/Register', body);
  }

  login(formData: any) {
    return this.http.post(this.endPoint + 'Identity/Login', formData);
  }

  roleMatch(allowedRoles): boolean {
    let isMatch = false;
    const payLoad = JSON.parse(window.atob(localStorage.getItem('token').split('.')[1]));
    const userRole = payLoad.role;
    allowedRoles.forEach((element: any) => {
      if (userRole === element) {
        isMatch = true;
        return false;
      }
    });
    return isMatch;
  }

}
