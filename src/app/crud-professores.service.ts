import { Injectable } from '@angular/core';
import { Professor } from '../app/professor';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/RX';

import 'rxjs/add/operator/map';

@Injectable()
export class CrudProfessoresService {
  professores:Professor[] = [];
  uri = "http://localhost:8080/CrudProfessores/webresources/professores/";

  constructor(private http:Http) { }
  
  getProfessores(): Observable<Professor[]>{
    return this.http.get(this.uri)
    .map((res: Response) => res.json());
    //return this.professores;
  }

  adicionarProfessor(professor: Professor):Observable<Professor>{
    let bodyString = JSON.stringify(professor);
    let cabecalho = new Headers({"Content-Type":"application/json"});
    let options = new RequestOptions({headers:cabecalho});
    
    return this.http.post(this.uri,bodyString,options)
      .map( (res:Response) => {} )
      .catch( (error:any) => Observable.throw(error) );
  }

  getProfessoresPorCodigo(codigo:number): Observable<Professor> {
    return this.http.get(this.uri+codigo)
    .map((res: Response) => res.json());
    //return(this.professores.find(professor => professor.codigo == codigo));
  }

  removerProfessor(codigo:number){
    return this.http.delete(this.uri+codigo).subscribe();
  }

  atualizaProfessor(codigo:number, professor:Professor){
    let bodyString = JSON.stringify(professor);
    let cabecalho = new Headers({"Content-Type":"application/json"});
    let options = new RequestOptions({headers:cabecalho});
    
    return this.http.put(this.uri+codigo,bodyString,options)
      .map( (res:Response) => {} )
      .catch( (error:any) => Observable.throw(error) );
  }

}
