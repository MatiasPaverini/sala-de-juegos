import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from "@angular/forms";

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { UserComponent } from './user/user.component';
import { MainComponent } from './main/main.component';
import { WhoAmIComponent } from './who-am-i/who-am-i.component';
import { RegisterComponent } from './register/register.component';
import { SessionService } from "./services/session/session.service";
import { GamesService } from "./services/games/games.service";
import { AngularFireModule } from "@angular/fire";
import { AngularFirestoreModule } from "@angular/fire/firestore";
import { environment } from 'src/environments/environment';
import { HeaderComponent } from './header/header.component';
import { GamesComponent } from './games/games.component';
import { PptComponent } from './ppt/ppt.component';



@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    UserComponent,
    MainComponent,
    WhoAmIComponent,
    RegisterComponent,
    HeaderComponent,
    GamesComponent,
    PptComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFirestoreModule,
  ],
  providers: [SessionService,
    GamesService],
  bootstrap: [AppComponent]
})
export class AppModule { }
