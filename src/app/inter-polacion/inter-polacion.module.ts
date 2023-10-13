import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { InterPolacionPageRoutingModule } from './inter-polacion-routing.module';

import { InterPolacionPage } from './inter-polacion.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    InterPolacionPageRoutingModule
  ],
  declarations: [InterPolacionPage]
})
export class InterPolacionPageModule {}
