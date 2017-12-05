import { Component, OnInit } from '@angular/core';
import { Professor } from "../../app/professor";
import { CrudProfessoresService } from "../../app/crud-professores.service";
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-tabela-professores',
  templateUrl: './tabela-professores.component.html',
  styleUrls: ['./tabela-professores.component.css']
})
export class TabelaProfessoresComponent implements OnInit {
  titulo = 'Tabela de Professores';
  
  professores:Professor[];

  constructor(private servico:CrudProfessoresService, private router:Router, private rota:ActivatedRoute) {
   }

  ngOnInit() {
    this.servico.getProfessores().subscribe(arrProfessores => {this.professores = arrProfessores});    
  }

  remover(codigo:number){
    this.servico.removerProfessor(codigo);
    alert("Removido com sucesso!");
    this.servico.getProfessores().subscribe(arrProfessores => {this.professores = arrProfessores});    
  }

}
