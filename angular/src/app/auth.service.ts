import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CookieService } from 'ngx-cookie';

import { User } from './user';

@Injectable()
export class AuthService {
  //private base = 'api/auth/';
  private base = 'api/auth/';
  constructor(
    private _http: HttpClient,
    private _cookeService : CookieService
  ) { }

  login(user: User){
    return this._http.post(this.base + 'login', user);
  }

  register(user: User){
    return this._http.post(this.base + 'register', user);
  }

  logout(){
    return this._http.delete(this.base + 'logout');
  }

  //we could use to activate route (weekend lecture), instead...
  //are we authorized, can we log in?
  isAuthed():boolean{
    const expired = parseInt(this._cookeService.get('expiration'),10);
    const userID = this._cookeService.get('userID');
    const session = this._cookeService.get('session');

    return session && expired && userID && expired > Date.now();
  }
}
