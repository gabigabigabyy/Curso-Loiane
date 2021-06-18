import { TesteService } from './teste.service';

import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-teste',
  templateUrl: './teste.component.html',
  styleUrls: ['./teste.component.css']
})
export class TesteComponent implements OnInit {

  cursos: string[];

  constructor(private TesteService: TesteService) {
    
   /*  for (let i=0; i<this.cursos.length; i++){
      let cursos = this.cursos[i];
    } */
    this.cursos = this.TesteService.getCursos();
    


   }

  ngOnInit(): void {
  }

}
