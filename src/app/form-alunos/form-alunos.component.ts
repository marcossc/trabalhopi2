import { Component, OnInit } from '@angular/core';
import { CrudAlunosService } from '../crud-alunos.service';
import { Aluno } from '../aluno';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-form-alunos',
  templateUrl: './form-alunos.component.html',
  styleUrls: ['./form-alunos.component.css']
})
export class FormAlunosComponent implements OnInit {
  titulo = "Cadastro de Alunos";  
  aluno:Aluno;
  codigo:number;

  constructor(private servico:CrudAlunosService, private router:Router, private rota:ActivatedRoute) { }
  
  ngOnInit() {
    this.codigo = this.rota.snapshot.params['cod'];

    if (isNaN(this.codigo)){
      this.aluno = new Aluno();
    } else {
      this.aluno = Object.assign({}, this.servico.getAlunosPorCodigo(this.codigo));
    }
  }

  salvarAluno(){
    if (isNaN(this.codigo)){
      this.aluno.possuiOrientador = false;
      this.servico.adicionarAluno(this.aluno);
      this.aluno = new Aluno();
    } else {
      this.servico.atualizaAluno(this.codigo, this.aluno);
    }
    this.router.navigate(['/alunos/lista']);
  }

  cancelar(){
    this.router.navigate(['/alunos/lista']);
  }

}
