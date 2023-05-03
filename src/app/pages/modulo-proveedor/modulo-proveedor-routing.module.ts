import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ModuloProveedorPage } from './modulo-proveedor.page';

const routes: Routes = [
  {
    path: '',
    component: ModuloProveedorPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ModuloProveedorPageRoutingModule {}
