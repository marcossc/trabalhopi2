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
    this.servico.getAlunos().subscribe(arrAlunos => {this.alunos = arrAlunos});    
  }

  remover(codigo:Number){
    this.servico.removerAluno(codigo);
    alert("Removido com sucesso!");
    this.servico.getAlunos().subscribe(arrAlunos => {this.alunos = arrAlunos});
  }

}
