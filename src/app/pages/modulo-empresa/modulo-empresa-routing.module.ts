import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ModuloEmpresaPage } from './modulo-empresa.page';

const routes: Routes = [
  {
    path: '',
    component: ModuloEmpresaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ModuloEmpresaPageRoutingModule {}
