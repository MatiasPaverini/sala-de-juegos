import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from "./login/login.component";
import { MainComponent } from './main/main.component';
import { RegisterComponent } from './register/register.component';
import { WhoAmIComponent } from './who-am-i/who-am-i.component';

const routes: Routes = [
  { path: 'login', component: LoginComponent }, 
  { path: 'whoAmI', component: WhoAmIComponent },
  { path: 'register', component: RegisterComponent},
  { path: '', component: MainComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
