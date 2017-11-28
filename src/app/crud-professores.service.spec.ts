import { TestBed, inject } from '@angular/core/testing';

import { CrudProfessoresService } from './crud-professores.service';

describe('CrudProfessoresService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CrudProfessoresService]
    });
  });

  it('should be created', inject([CrudProfessoresService], (service: CrudProfessoresService) => {
    expect(service).toBeTruthy();
  }));
});
