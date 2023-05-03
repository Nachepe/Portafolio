import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ModuloCatalogoPage } from './modulo-catalogo.page';

describe('ModuloCatalogoPage', () => {
  let component: ModuloCatalogoPage;
  let fixture: ComponentFixture<ModuloCatalogoPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(ModuloCatalogoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
