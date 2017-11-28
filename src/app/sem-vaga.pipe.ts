import { Pipe, PipeTransform } from '@angular/core';

import { Professor } from './professor';

@Pipe({
  name: 'semVaga'
})
export class SemVagaPipe implements PipeTransform {

  transform(professores: Professor[]) {
    return professores.filter(professor => professor.vagas > 0);
  }

}
