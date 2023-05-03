import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ModuloCatalogoPageRoutingModule } from './modulo-catalogo-routing.module';

import { ModuloCatalogoPage } from './modulo-catalogo.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ModuloCatalogoPageRoutingModule
  ],
  declarations: [ModuloCatalogoPage]
})
export class ModuloCatalogoPageModule {}
