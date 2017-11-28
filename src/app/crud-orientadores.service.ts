import { Injectable } from '@angular/core';
import { Orientador } from '../app/orientador';

@Injectable()
export class CrudOrientadoresService {
  orientadores: Orientador[] = [];
  autoIncrement:number=1;

  constructor() { }
  getOrientadores(){
    return this.orientadores;
  }

  adicionarOrientador(orientador:Orientador){
    orientador.codigo=this.autoIncrement++;
    this.orientadores.push(orientador);
  }

  getOrientadoresPorCodigo(codigo:number){
    return(this.orientadores.find(orientador => orientador.codigo == codigo));
  }

  removerOrientador(orientador:Orientador){
    let indice = this.orientadores.indexOf(orientador, 0);
    if (indice > -1){
      this.orientadores.splice(indice, 1);
    }
  }

  atualizaOrientador(codigo:number, orientador:Orientador){
    let indice = this.orientadores.indexOf(this.getOrientadoresPorCodigo(codigo), 0);
    this.orientadores[indice] = orientador;
  }

}
