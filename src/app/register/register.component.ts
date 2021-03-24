import { Component, OnInit } from '@angular/core';
import { SessionService } from "../services/session.service";

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  password: string;
  firstName: string;
  lastName: string;
  email: string;

  constructor(private session: SessionService) { }

  ngOnInit(): void {
  }


  


}
