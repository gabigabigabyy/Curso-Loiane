import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TesteService {

  constructor() { }

  getCursos(){
    return ['Java', 'Type', 'Angular'];
  }
}
