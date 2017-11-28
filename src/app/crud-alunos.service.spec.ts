import { TestBed, inject } from '@angular/core/testing';

import { CrudAlunosService } from './crud-alunos.service';

describe('CrudAlunosService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CrudAlunosService]
    });
  });

  it('should be created', inject([CrudAlunosService], (service: CrudAlunosService) => {
    expect(service).toBeTruthy();
  }));
});
