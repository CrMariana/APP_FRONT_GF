import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { InicoSesionPageRoutingModule } from './inico-sesion-routing.module';

import { InicoSesionPage } from './inico-sesion.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    InicoSesionPageRoutingModule
  ],
  declarations: [InicoSesionPage]
})
export class InicoSesionPageModule {}
