import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Anime1Page } from './anime1.page';

const routes: Routes = [
  {
    path: '',
    component: Anime1Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Anime1PageRoutingModule {}
