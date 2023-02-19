import {Routes} from "@angular/router";
import {MainComponent} from "../components/main-page/main.component";
import {RegisterComponent} from "../components/register/register.component";
import {LoginComponent} from "../components/login/login.component";

export const routes: Routes = [
  {path: '', component: RegisterComponent},
  {path: 'login', component: LoginComponent},
  {path: 'products', component: MainComponent}
]
