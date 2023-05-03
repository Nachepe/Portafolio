import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ModuloReportePage } from './modulo-reporte.page';

const routes: Routes = [
  {
    path: '',
    component: ModuloReportePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ModuloReportePageRoutingModule {}
