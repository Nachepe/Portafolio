import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ModuloEmpresaPage } from './modulo-empresa.page';

describe('ModuloEmpresaPage', () => {
  let component: ModuloEmpresaPage;
  let fixture: ComponentFixture<ModuloEmpresaPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(ModuloEmpresaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
