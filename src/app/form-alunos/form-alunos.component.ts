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
      this.servico.getAlunosPorCodigo(this.codigo)
      .subscribe(arrProfessores => {this.aluno = arrProfessores});
    }
  }

  salvarAluno(){
    if (isNaN(this.codigo)){
      this.servico.adicionarAluno(this.aluno).subscribe(
        alunoVazio => {
          this.aluno = new Aluno();
          alert("Cadastro realizado com sucesso!");
        },
        erro => { console.log(erro); }
      );
    } else {
      this.servico.atualizaAluno(this.codigo, this.aluno).subscribe(
        alunoVazio => {
          this.aluno = new Aluno();
          alert("Cadastro atualizado com sucesso!");
        },
        erro => { console.log(erro); }
      ); 
    }
    this.router.navigate(['/alunos/lista']);
  }

  cancelar(){
    this.router.navigate(['/alunos/lista']);
  }

}
