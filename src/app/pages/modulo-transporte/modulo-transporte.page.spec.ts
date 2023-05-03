import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ModuloTransportePage } from './modulo-transporte.page';

describe('ModuloTransportePage', () => {
  let component: ModuloTransportePage;
  let fixture: ComponentFixture<ModuloTransportePage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(ModuloTransportePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
