import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ModuloCredencialPage } from './modulo-credencial.page';

const routes: Routes = [
  {
    path: '',
    component: ModuloCredencialPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ModuloCredencialPageRoutingModule {}
