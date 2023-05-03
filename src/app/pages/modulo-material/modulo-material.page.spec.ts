import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ModuloMaterialPage } from './modulo-material.page';

describe('ModuloMaterialPage', () => {
  let component: ModuloMaterialPage;
  let fixture: ComponentFixture<ModuloMaterialPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(ModuloMaterialPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
