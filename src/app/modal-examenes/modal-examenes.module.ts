import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RouterModule } from '@angular/router';

import { ModalExamenesPage } from './modal-examenes.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild([
      {
        path: '',
        component: ModalExamenesPage
      }
    ])
  ],
  declarations: [ModalExamenesPage]
})
export class ModalExamenesPageModule {}
