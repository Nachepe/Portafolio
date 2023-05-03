import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ModuloManoObraPage } from './modulo-mano-obra.page';

describe('ModuloManoObraPage', () => {
  let component: ModuloManoObraPage;
  let fixture: ComponentFixture<ModuloManoObraPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(ModuloManoObraPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
