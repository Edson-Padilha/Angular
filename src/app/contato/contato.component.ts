import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contato',
  templateUrl: './contato.component.html',
  styleUrls: ['./contato.component.css']
})
export class ContatoComponent implements OnInit {
  nome: string;
  dataNasc: string;
  eMail: string;

  logo: string="data:image/jpeg;base64,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"
  largura: number= 60
  altura: number= 60

  constructor() {
  
   }

  ngOnInit(): void {
  }
  limparCampos(){
    this.nome="";
    this.dataNasc="";
    this.eMail="";

  }
  enviarDados(){
    alert(`Ol?? ${this.nome} seus dados foram enviados e em breve te retornaremos no seu e-mail ${this.eMail}`)

  }

}
