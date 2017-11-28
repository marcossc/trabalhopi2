import { Component, OnInit } from '@angular/core';
import { CrudOrientadoresService } from '../crud-orientadores.service';
import { Orientador } from '../orientador';
import { Router, ActivatedRoute } from '@angular/router';
import { Aluno } from '../aluno';
import { CrudAlunosService } from '../crud-alunos.service';
import { CrudProfessoresService } from '../crud-professores.service';
import { Professor } from '../professor';

@Component({
  selector: 'app-form-orientadores',
  templateUrl: './form-orientadores.component.html',
  styleUrls: ['./form-orientadores.component.css']
})
export class FormOrientadoresComponent implements OnInit {
  titulo = "Vincular orientador ao aluno";  
  orientador:Orientador;
  codigo:number;
  alunos: Aluno[];
  professores;
  orientadores:Orientador[];
  erro: String;
  orientadortemp: Orientador;

  constructor(private servicoOrientador:CrudOrientadoresService, private servicoAluno:CrudAlunosService, private servicoProfessor:CrudProfessoresService,private router:Router, private rota:ActivatedRoute) { }
  
  ngOnInit() {
    this.codigo = this.rota.snapshot.params['cod'];
    this.alunos = this.servicoAluno.getAlunos();
    this.professores = this.servicoProfessor.getProfessores();
    this.orientadores = this.servicoOrientador.getOrientadores();

    if (isNaN(this.codigo)){
      this.orientador = new Orientador();
    } else {
      this.orientador = Object.assign({}, this.servicoOrientador.getOrientadoresPorCodigo(this.codigo));
      this.orientadortemp = this.orientador;
      this.orientadortemp.aluno.possuiOrientador = false;
      this.orientadortemp.professor.vagas++;
    }
  }

  salvarOrientador(){
    let existe: boolean = this.orientadores.some(x => x.aluno.codigo == this.orientador.aluno.codigo);
    if (isNaN(this.codigo)){      
      if (existe){
        this.erro = "Aluno já possui orientador";
      } else {
        if (this.orientador.professor.vagas > 0){
          this.servicoOrientador.adicionarOrientador(this.orientador);
          this.orientador.aluno.possuiOrientador = true;
          this.orientador.professor.vagas--;
          this.orientador = new Orientador();
          this.router.navigate(['/orientadores/lista']);
        } else {
          this.erro = "Orientador não possui vagas disponíveis";
        }
      }
      
    } else {
      this.orientador.aluno.possuiOrientador = true;
      this.orientador.professor.vagas--;
      if (this.orientador.professor.codigo != this.orientadortemp.professor.codigo)
        this.orientadortemp.professor.vagas--;
      this.servicoOrientador.atualizaOrientador(this.codigo, this.orientador);
      this.router.navigate(['/orientadores/lista']);
    }
  }

  cancelar(){
    this.orientadortemp.aluno.possuiOrientador = true;
    this.orientadortemp.professor.vagas--;
    this.router.navigate(['/orientadores/lista']);
  }

}
