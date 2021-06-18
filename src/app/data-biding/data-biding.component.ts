import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-data-biding',
  templateUrl: './data-biding.component.html',
  styleUrls: ['./data-biding.component.css']
})
export class DataBidingComponent implements OnInit {

  url:string = 'http://loiane.com';
  valorAtual:string = '';
  cursoAngular:boolean = true;
  valorSalvo: any = '';
  isMouseOver:boolean = false;
  nome:any = 'abc';
  pessoa:any = {
    nome: 'Digite seu nome',
    idade: "Digite sua idade"
    

  } 
  nomeDoCurso: string = 'Angular';
  urlImagem:string = 'http://lorempixel.com/400/200/nature/'

  getValor(){
    return 1;
  }

getCurtirCurso(){
  return true;

}

botaoClick(){

  alert('Botão clicado!');
}

onKeyUp(evento:KeyboardEvent){
  console.log;
  this.valorAtual =  ((<HTMLInputElement>evento.target).value);
  
  
}

salvarValor(valor:any){
  this.valorSalvo = valor;

}
onMouseOverOut(){
  this.isMouseOver = !this.isMouseOver;

}

  constructor() { }

  ngOnInit(): void {
  }

}
