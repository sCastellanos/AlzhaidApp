import { Injectable } from '@angular/core';
import { User } from '../user/user.module'

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private isUserLoggedIn;
  public userLogged:User;

  constructor() { 
    this.isUserLoggedIn = false;
  }
  /*
    Método que setea un usuario para mantener su sesión abierta.
  */
  setUserLogged(user:User) {
    this.isUserLoggedIn = true;
    this.userLogged = user;
    localStorage.setItem('CurrentUser', JSON.stringify(user));
  }
  /*
    Método que obtiene el usuario al que se le mantiene la sesión abierta.
  */
  getUserLoggedIn() {
    return JSON.parse(localStorage.getItem('CurrentUser'));
  }
}