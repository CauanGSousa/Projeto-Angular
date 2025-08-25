import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GenerosLiterarios } from './generos-literarios';

describe('GenerosLiterarios', () => {
  let component: GenerosLiterarios;
  let fixture: ComponentFixture<GenerosLiterarios>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GenerosLiterarios]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GenerosLiterarios);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
