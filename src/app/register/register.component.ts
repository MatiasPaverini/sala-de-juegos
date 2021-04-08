import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SessionService } from "../services/session/session.service";
import { User } from '../user/user';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  public firstName: string;
  public lastName: string;
  public email: string;
  public password: string;
  constructor(private session: SessionService,
    private router: Router) { }

  ngOnInit(): void {
  }


  public register() {
    let user: User = new User(this.firstName, this.lastName, this.email);
    this.session.register(this.email, this.password)
    .then( result => {
      alert('Usuario creado con éxito');
      this.router.navigate(['/login']);
    })
    .catch( err => {
      throw new Error('Error al crear el usuario.');
    }
    );
  }


}
