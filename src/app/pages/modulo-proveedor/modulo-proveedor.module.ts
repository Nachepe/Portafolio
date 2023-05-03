import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ModuloProveedorPageRoutingModule } from './modulo-proveedor-routing.module';

import { ModuloProveedorPage } from './modulo-proveedor.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ModuloProveedorPageRoutingModule
  ],
  declarations: [ModuloProveedorPage]
})
export class ModuloProveedorPageModule {}
