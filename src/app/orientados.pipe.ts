import { Pipe, PipeTransform } from '@angular/core';

import { Aluno } from './aluno';
import { Orientador } from './orientador';

@Pipe({
  name: 'orientados'
})
export class OrientadosPipe implements PipeTransform {

  transform(alunos: Aluno[]) {
    return alunos.filter(aluno => !aluno.possuiOrientador);
  }

}
