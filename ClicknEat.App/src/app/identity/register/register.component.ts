import { Component, OnInit } from '@angular/core';
import { IdentityService } from '../../services/identity.service';

@Component({
  selector: 'app-dashboard',
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
        if (res !== null) {
          console.log('New user created!', 'Registration successful.');
          this.identityService.formModel.reset();
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
