import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ModuloMaterialPage } from './modulo-material.page';

const routes: Routes = [
  {
    path: '',
    component: ModuloMaterialPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ModuloMaterialPageRoutingModule {}
