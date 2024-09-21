import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/views/home/home.component';
import { LoginComponent } from './components/views/login/login.component';
import { EmailComponent } from './components/views/conteudo/email/email.component';
import { SenhaComponent } from './components/views/conteudo/senha/senha.component';
import { ButtonComponent } from './components/views/button/button.component';

const routes: Routes = [
  { "path": "", component: HomeComponent},
  {"path": "login", component: LoginComponent },
  {"path": "email", component: EmailComponent},
  {"path": "senha", component: SenhaComponent},
  {"path": "button", component: ButtonComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
