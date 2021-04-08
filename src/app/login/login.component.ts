import { Component, OnInit, Output } from '@angular/core';
import { Router } from "@angular/router";
import { FormsModule } from "@angular/forms";
import { User } from "../user/user";
import { SessionService } from "../services/session.service";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  public email: string;
  public password: string;

  user: User;

  constructor(private sessionService: SessionService,
    private router: Router) { }

  ngOnInit(): void {
  }



  /**
   * login
   */
  public login() {
    this.sessionService.login(this.email, this.password)
      .then(result => {
        this.router.navigate(['main'])
          .then(route => {
            console.log('Routing successful');
          })
          .catch(err => {
            throw new Error("Routing error");
          })
      })
      .catch(err => {
        throw new Error('Email / contraseña incorrecto');
      })
  }

  /**
   * loadAdmin
   */
  public loadAdmin() {
    this.email = 'admin@utn.com';
    this.password = 'admin1234';
  }

}
