import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormOrientadoresComponent } from './form-orientadores.component';

describe('FormOrientadoresComponent', () => {
  let component: FormOrientadoresComponent;
  let fixture: ComponentFixture<FormOrientadoresComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormOrientadoresComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormOrientadoresComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
