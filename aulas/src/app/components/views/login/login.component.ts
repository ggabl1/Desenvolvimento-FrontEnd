import { Component } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {

  public email!: string;
  public senha!: string;

  login(){
    alert('login efetuado com sucesso')
  }
}
