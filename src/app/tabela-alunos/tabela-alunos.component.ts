import { Component, OnInit } from '@angular/core';
import { Aluno } from "../aluno";
import { CrudAlunosService } from "../crud-alunos.service";

@Component({
  selector: 'app-tabela-alunos',
  templateUrl: './tabela-alunos.component.html',
  styleUrls: ['./tabela-alunos.component.css']
})
export class TabelaAlunosComponent implements OnInit {
  titulo = 'Tabela de Alunos';
  
  alunos:Aluno[]=[];

  constructor(private servico:CrudAlunosService) { }

  ngOnInit() {
    this.alunos = this.servico.getAlunos();
  }

  remover(aluno:Aluno){
    this.servico.removerAluno(aluno);
  }

}
