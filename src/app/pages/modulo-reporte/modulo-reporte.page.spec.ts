import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ModuloReportePage } from './modulo-reporte.page';

describe('ModuloReportePage', () => {
  let component: ModuloReportePage;
  let fixture: ComponentFixture<ModuloReportePage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(ModuloReportePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
