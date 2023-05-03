import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ModuloCotizacionPageRoutingModule } from './modulo-cotizacion-routing.module';

import { ModuloCotizacionPage } from './modulo-cotizacion.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ModuloCotizacionPageRoutingModule
  ],
  declarations: [ModuloCotizacionPage]
})
export class ModuloCotizacionPageModule {}
