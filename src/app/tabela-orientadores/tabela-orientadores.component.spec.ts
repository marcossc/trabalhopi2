import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TabelaOrientadoresComponent } from './tabela-orientadores.component';

describe('TabelaOrientadoresComponent', () => {
  let component: TabelaOrientadoresComponent;
  let fixture: ComponentFixture<TabelaOrientadoresComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TabelaOrientadoresComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TabelaOrientadoresComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
