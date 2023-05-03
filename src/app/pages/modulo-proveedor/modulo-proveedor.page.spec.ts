import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ModuloProveedorPage } from './modulo-proveedor.page';

describe('ModuloProveedorPage', () => {
  let component: ModuloProveedorPage;
  let fixture: ComponentFixture<ModuloProveedorPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(ModuloProveedorPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
