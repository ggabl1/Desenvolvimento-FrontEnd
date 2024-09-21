import { Component } from '@angular/core';
import { produto } from '../../../models/produto';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
public produtos: Array<produto> = new Array<produto>();

constructor(){
  this.produtos.push({nome: 'bolu bom', valor: 500000})
  this.produtos.push({nome: 'bolu chocolate', valor: 20000})
  this.produtos.push({nome: 'bolu delicia', valor: 800000})
  this.produtos.push({nome: 'bolu de morango', valor: 70})
  console.log(this.produtos)
}
}
