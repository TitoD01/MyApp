import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { InterPolacionPage } from './inter-polacion.page';

const routes: Routes = [
  {
    path: '',
    component: InterPolacionPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class InterPolacionPageRoutingModule {}
