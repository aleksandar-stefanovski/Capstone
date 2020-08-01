import { Component, OnInit } from '@angular/core';
import { IdentityService } from '../../../services/identity.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  constructor(public identityService: IdentityService) { }

  ngOnInit(): void {
    this.identityService.formModel.reset();
  }

  onSubmit() {
    this.identityService.register().subscribe(
      (res: any) => {
        if (res.succeeded) {
          this.identityService.formModel.reset();
          console.log('New user created!', 'Registration successful.');
        } else {
          console.log('error');
        }
      },
      err => {
        console.log(err);
      }
    );
  }
}
