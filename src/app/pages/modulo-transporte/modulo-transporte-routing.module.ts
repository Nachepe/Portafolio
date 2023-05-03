import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ModuloTransportePage } from './modulo-transporte.page';

const routes: Routes = [
  {
    path: '',
    component: ModuloTransportePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ModuloTransportePageRoutingModule {}
