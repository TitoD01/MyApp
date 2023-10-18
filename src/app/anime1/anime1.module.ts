import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http'; 

import { Anime1Page } from './anime1.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HttpClientModule, 
    RouterModule.forChild([
      {
        path: '',
        component: Anime1Page,
      },
    ]),
  ],
  declarations: [Anime1Page],
})
export class Anime1PageModule {}
