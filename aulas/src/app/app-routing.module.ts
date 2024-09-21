import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ButtonComponent } from './components/views/button/button.component';
import { IconComponent } from './components/views/icon/icon.component';
import { LoginComponent } from './components/views/login/login.component';

const routes: Routes = [
  {"path": "", component: ButtonComponent},
  {"path": "icon", component: IconComponent},
  {"path": "login", component: LoginComponent}
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
