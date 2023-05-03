import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ModuloTransportePageRoutingModule } from './modulo-transporte-routing.module';

import { ModuloTransportePage } from './modulo-transporte.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ModuloTransportePageRoutingModule
  ],
  declarations: [ModuloTransportePage]
})
export class ModuloTransportePageModule {}
