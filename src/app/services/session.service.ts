import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { User } from "../user/user";
import { AngularFirestore } from "@angular/fire/firestore";

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
  public register(email:string, password: string) {
    return this.firebase.createUserWithEmailAndPassword(email, password);
  }

  public saveUserData(user: User) {
    return this.firebase
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