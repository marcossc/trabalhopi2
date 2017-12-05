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
  professor:Professor;
  codigo: number;

  constructor(private servico: CrudProfessoresService, private router: Router, private rota: ActivatedRoute) { }

  ngOnInit() {
    this.codigo = this.rota.snapshot.params['cod'];

    if (isNaN(this.codigo)) {
      this.professor = new Professor();
    } else {
      this.servico.getProfessoresPorCodigo(this.codigo)
      .subscribe(arrProfessores => {this.professor = arrProfessores});    
    }
  }

  salvarProfessor() {
    if (isNaN(this.codigo)) {
      this.servico.adicionarProfessor(this.professor).subscribe(
        professorVazio => {
          this.professor = new Professor();
          alert("Cadastro realizado com sucesso!");
        },
        erro => { console.log(erro); }
      );
    } else {
      this.servico.atualizaProfessor(this.codigo, this.professor).subscribe(
        alunoVazio => {
          this.professor = new Professor();
          alert("Cadastro atualizado com sucesso!");
        },
        erro => { console.log(erro); }
      ); 
    }
    this.router.navigate(['/professores/lista']);
  }

  cancelar() {
    this.router.navigate(['/professores/lista']);
  }

}
