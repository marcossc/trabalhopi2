import { Injectable } from '@angular/core';
import { Professor } from '../app/professor';

@Injectable()
export class CrudProfessoresService {
  professores: Professor[] = [
    { codigo: 1, nome: "Ries", email: "ries@senac.com", matricula: 123, vagas: 2 },
    { codigo: 2, nome: "Aline", email: "aline@senac.com", matricula: 456, vagas: 3 },
    { codigo: 3, nome: "Guilherme", email: "guilherme@senac.com", matricula: 789, vagas: 1 },
    { codigo: 4, nome: "Antônio", email: "antonio@senac.com", matricula: 101, vagas: 5 }
  ];
  autoIncrement:number=5;

  constructor() { }
  
  getProfessores(){
    return this.professores;
  }

  adicionarProfessor(professor:Professor){
    professor.codigo=this.autoIncrement++;
    this.professores.push(professor);
  }

  getProfessoresPorCodigo(codigo:number){
    return(this.professores.find(professor => professor.codigo == codigo));
  }

  removerProfessor(professor:Professor){
    let indice = this.professores.indexOf(professor, 0);
    if (indice > -1){
      this.professores.splice(indice, 1);
    }
  }

  atualizaProfessor(codigo:number, professor:Professor){
    let indice = this.professores.indexOf(this.getProfessoresPorCodigo(codigo), 0);
    this.professores[indice] = professor;
  }

}
