import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ModuloCotizacionPage } from './modulo-cotizacion.page';

const routes: Routes = [
  {
    path: '',
    component: ModuloCotizacionPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ModuloCotizacionPageRoutingModule {}
