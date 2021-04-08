import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GamesService } from "./games.service";
import { GamesComponent } from "./games.component";
import { FormsModule } from "@angular/forms";
import { environment } from "../../environments/environment";
import { AngularFireModule } from "@angular/fire";



@NgModule({
  declarations: [
    GamesComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    AngularFireModule.initializeApp(environment.firebaseConfig)
  ],
  providers: [
    GamesService
  ],
  bootstrap: [
    GamesComponent
  ]
})
export class GamesModule { }
