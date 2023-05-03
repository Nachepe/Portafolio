import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ModuloEmpresaPageRoutingModule } from './modulo-empresa-routing.module';

import { ModuloEmpresaPage } from './modulo-empresa.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ModuloEmpresaPageRoutingModule
  ],
  declarations: [ModuloEmpresaPage]
})
export class ModuloEmpresaPageModule {}
