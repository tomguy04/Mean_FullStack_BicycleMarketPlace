import { Component, OnInit } from '@angular/core';
import { Service } from '../../object.service';
import { HttpClient } from '@angular/common/http'; 
import { ActivatedRoute, Params, Router } from '@angular/router';

@Component({
  selector: 'app-logout',
  templateUrl: './logout.component.html',
  styleUrls: ['./logout.component.css']
})
export class LogoutComponent implements OnInit {

  constructor(
    private _service:Service,
    private _http: HttpClient,
    private _router: Router
  ) { }

  ngOnInit() {
    console.log('in logout');
    let observable = this._service.logout();
    observable.subscribe(data => console.log(data, "this is data!"))
    this._router.navigateByUrl("/")
  }

}
