import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ModuloCredencialPage } from './modulo-credencial.page';

describe('ModuloCredencialPage', () => {
  let component: ModuloCredencialPage;
  let fixture: ComponentFixture<ModuloCredencialPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(ModuloCredencialPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
