import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ModuloMaterialPageRoutingModule } from './modulo-material-routing.module';

import { ModuloMaterialPage } from './modulo-material.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ModuloMaterialPageRoutingModule
  ],
  declarations: [ModuloMaterialPage]
})
export class ModuloMaterialPageModule {}
