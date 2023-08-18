import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PaginadoComponent } from './paginado.component';

describe('PaginadoComponent', () => {
  let component: PaginadoComponent;
  let fixture: ComponentFixture<PaginadoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PaginadoComponent]
    });
    fixture = TestBed.createComponent(PaginadoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
