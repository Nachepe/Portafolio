import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ModuloCotizacionPage } from './modulo-cotizacion.page';

describe('ModuloCotizacionPage', () => {
  let component: ModuloCotizacionPage;
  let fixture: ComponentFixture<ModuloCotizacionPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(ModuloCotizacionPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
