import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ModuloCredencialPageRoutingModule } from './modulo-credencial-routing.module';

import { ModuloCredencialPage } from './modulo-credencial.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ModuloCredencialPageRoutingModule
  ],
  declarations: [ModuloCredencialPage]
})
export class ModuloCredencialPageModule {}
