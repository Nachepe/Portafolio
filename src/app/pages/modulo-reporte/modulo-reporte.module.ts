import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ModuloReportePageRoutingModule } from './modulo-reporte-routing.module';

import { ModuloReportePage } from './modulo-reporte.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ModuloReportePageRoutingModule
  ],
  declarations: [ModuloReportePage]
})
export class ModuloReportePageModule {}
