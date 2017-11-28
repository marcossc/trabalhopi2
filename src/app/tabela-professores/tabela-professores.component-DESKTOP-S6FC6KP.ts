import { Component, OnInit } from '@angular/core';
import { Professor } from "../../app/professor";
import { CrudProfessoresService } from "../../app/crud-professores.service";

@Component({
  selector: 'app-tabela-professores',
  templateUrl: './tabela-professores.component.html',
  styleUrls: ['./tabela-professores.component.css']
})
export class TabelaProfessoresComponent implements OnInit {
  titulo = 'Tabela de Professores';

  professores;

  constructor(private servico: CrudProfessoresService) {
  }

  ngOnInit() {
    this.professores = this.servico.getProfessores().subscribe(p => this.professores = p);
    console.log(this.professores); 
  }

  remover(professor: Professor) {
    this.servico.removerProfessor(professor);
  }

}
