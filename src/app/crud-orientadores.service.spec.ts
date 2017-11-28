import { TestBed, inject } from '@angular/core/testing';

import { CrudOrientadoresService } from './crud-orientadores.service';

describe('CrudOrientadoresService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CrudOrientadoresService]
    });
  });

  it('should be created', inject([CrudOrientadoresService], (service: CrudOrientadoresService) => {
    expect(service).toBeTruthy();
  }));
});
