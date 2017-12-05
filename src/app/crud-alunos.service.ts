import { Injectable } from '@angular/core';
import { Aluno } from '../app/aluno';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/RX';

import 'rxjs/add/operator/map';

@Injectable()
export class CrudAlunosService {
  alunos: Aluno[] = [];
  uri = "http://localhost:8080/CrudProfessores/webresources/alunos/";
  
  constructor(private http:Http) { }

  getAlunos(): Observable<Aluno[]>{
    return this.http.get(this.uri)
    .map((res: Response) => res.json());
  }

  adicionarAluno(aluno:Aluno): Observable<Aluno>{
    let bodyString = JSON.stringify(aluno);
    let cabecalho = new Headers({"Content-Type":"application/json"});
    let options = new RequestOptions({headers:cabecalho});
    
    return this.http.post(this.uri,bodyString,options)
      .map( (res:Response) => {} )
      .catch( (error:any) => Observable.throw(error) );
  }

  getAlunosPorCodigo(codigo:number): Observable<Aluno>{
    return this.http.get(this.uri+codigo)
    .map((res: Response) => res.json());
  }

  removerAluno(codigo:Number){
    return this.http.delete(this.uri+codigo).subscribe();    
  }

  atualizaAluno(codigo:number, aluno:Aluno){
    let bodyString = JSON.stringify(aluno);
    let cabecalho = new Headers({"Content-Type":"application/json"});
    let options = new RequestOptions({headers:cabecalho});
    
    return this.http.put(this.uri+codigo,bodyString,options)
      .map( (res:Response) => {} )
      .catch( (error:any) => Observable.throw(error) );
    //this.alunos[indice] = aluno;
  }

}
