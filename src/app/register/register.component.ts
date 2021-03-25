import { Component, OnInit } from '@angular/core';
import { SessionService } from "../services/session/session.service";

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  public password: string;
  public firstName: string;
  public lastName: string;
  public email: string;

  constructor(private session: SessionService) { }

  ngOnInit(): void {
  }


  public register() {

  }
  


}
