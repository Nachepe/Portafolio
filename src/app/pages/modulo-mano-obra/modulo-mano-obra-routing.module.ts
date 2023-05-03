import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ModuloManoObraPage } from './modulo-mano-obra.page';

const routes: Routes = [
  {
    path: '',
    component: ModuloManoObraPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ModuloManoObraPageRoutingModule {}
