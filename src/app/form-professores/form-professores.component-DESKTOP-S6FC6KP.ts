import { Component, OnInit } from '@angular/core';
import { CrudProfessoresService } from '../../app/crud-professores.service';
import { Professor } from '../professor';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-form-professores',
  templateUrl: './form-professores.component.html',
  styleUrls: ['./form-professores.component.css']
})
export class FormProfessoresComponent implements OnInit {
  titulo = "Cadastro de Professores";  
  professor;
  codigo:number;

  constructor(private servico:CrudProfessoresService, private router:Router, private rota:ActivatedRoute) { }
  
  ngOnInit() {
    this.codigo = this.rota.snapshot.params['cod'];

    if (isNaN(this.codigo)){
      this.professor = new Professor();
    } else {
      this.professor = this.servico.getProfessoresPorCodigo(this.codigo);
    }
  }

  salvarProfessor(){
    if (isNaN(this.codigo)){
      this.servico.adicionarProfessor(this.professor);
      //this.professor = new Professor();
    } else {
      //this.servico.atualizaProfessor(this.codigo, this.professor);
    }
    this.router.navigate(['/professores/lista']);
  }

  cancelar(){
    this.router.navigate(['/professores/lista']);
  }

}
