import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { User } from "../../user/user";

@Injectable({
  providedIn: 'root'
})
export class SessionService {

  public activeSession: boolean = false;

  constructor(private firebase: AngularFireAuth) { }

  /**
   * login
   */
  public login(email: string, password: string) {
    return this.firebase.signInWithEmailAndPassword(email, password);
  }

  /**
   * register
   */
  public register(user: User) {
    return this.firebase.createUserWithEmailAndPassword(user.getEmail(), user.getPassword());
  }


  public logout() {
    return this.firebase.signOut();
  }

  saveCurrentUser(user) {
    sessionStorage.setItem('user', user);
    
  }

  getCurrent(): string {
    return sessionStorage.getItem('user');
  }
}