import { Injectable } from '@angular/core';
import { Aluno } from '../app/aluno';

@Injectable()
export class CrudAlunosService {
  alunos: Aluno[] = [
    { codigo: 1, nome: "Marcos", email: "marcos@castanheira.info", matricula: 631320297, possuiOrientador: false },
    { codigo: 2, nome: "Rodrigo", email: "rodrigo@castanheira.info", matricula: 631320197, possuiOrientador: false },
    { codigo: 3, nome: "Paulo", email: "paulo@castanheira.info", matricula: 631120297, possuiOrientador: false },
    { codigo: 4, nome: "Roberto", email: "roberto@castanheira.info", matricula: 765436798, possuiOrientador: false }
  ];
  autoIncrement:number=5;

  constructor() { }
  getAlunos(){
    return this.alunos;
  }

  adicionarAluno(aluno:Aluno){
    aluno.codigo=this.autoIncrement++;
    this.alunos.push(aluno);
  }

  getAlunosPorCodigo(codigo:number){
    return(this.alunos.find(aluno => aluno.codigo == codigo));
  }

  removerAluno(aluno:Aluno){
    let indice = this.alunos.indexOf(aluno, 0);
    if (indice > -1){
      this.alunos.splice(indice, 1);
    }
  }

  atualizaAluno(codigo:number, aluno:Aluno){
    let indice = this.alunos.indexOf(this.getAlunosPorCodigo(codigo), 0);
    this.alunos[indice] = aluno;
  }

}
