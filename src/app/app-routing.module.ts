import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from "./login/login.component";
import { MainComponent } from './main/main.component';
import { PptComponent } from './games/ppt/ppt.component';
import { RegisterComponent } from './register/register.component';
import { WhoAmIComponent } from './who-am-i/who-am-i.component';

const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'whoami', component: WhoAmIComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'main', component: MainComponent },
  {path: 'ppt', component: PptComponent},
  { path: '', redirectTo: 'login', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
