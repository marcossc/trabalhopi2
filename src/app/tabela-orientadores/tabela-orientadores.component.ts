import { Component, OnInit } from '@angular/core';
import { Orientador } from "../../app/orientador";
import { CrudOrientadoresService } from "../../app/crud-orientadores.service";

@Component({
  selector: 'app-tabela-orientadores',
  templateUrl: './tabela-orientadores.component.html',
  styleUrls: ['./tabela-orientadores.component.css']
})
export class TabelaOrientadoresComponent implements OnInit {
  titulo = 'Tabela de Orientadores e Alunos';
  
  orientadores:Orientador[]=[];

  constructor(private servico:CrudOrientadoresService) { }

  ngOnInit() {
    this.orientadores = this.servico.getOrientadores();
  }

  remover(orientador:Orientador){
    orientador.professor.vagas++;
    orientador.aluno.possuiOrientador = false;
    this.servico.removerOrientador(orientador);
  }

}
