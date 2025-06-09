import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetalleCategoriaPrincipalComponent } from './detalle-categoria-principal.component';

describe('DetalleCategoriaPrincipalComponent', () => {
  let component: DetalleCategoriaPrincipalComponent;
  let fixture: ComponentFixture<DetalleCategoriaPrincipalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DetalleCategoriaPrincipalComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DetalleCategoriaPrincipalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
