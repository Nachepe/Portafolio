import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ModuloCatalogoPage } from './modulo-catalogo.page';

const routes: Routes = [
  {
    path: '',
    component: ModuloCatalogoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ModuloCatalogoPageRoutingModule {}
