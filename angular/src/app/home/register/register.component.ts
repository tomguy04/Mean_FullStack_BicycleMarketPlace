import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { AuthService } from '../../auth.service';

import { User } from '../../user';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  user = new User();

  registrationErrors: string[] = [];

  constructor(private _auth: AuthService, private _router: Router) { }

  ngOnInit() {
  }

  onSubmit(user: User){
    console.log('registering user', user);

    this._auth.register(user).subscribe(
      ()=>{
        this._router.navigateByUrl('browse');
      },
      error => {
        console.log(error);
      }
    )
  }

}
