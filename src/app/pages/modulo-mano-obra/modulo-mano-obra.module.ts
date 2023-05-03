import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ModuloManoObraPageRoutingModule } from './modulo-mano-obra-routing.module';

import { ModuloManoObraPage } from './modulo-mano-obra.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ModuloManoObraPageRoutingModule
  ],
  declarations: [ModuloManoObraPage]
})
export class ModuloManoObraPageModule {}
