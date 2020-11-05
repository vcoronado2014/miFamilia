import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RouterModule } from '@angular/router';

import { ModalDetalleCitaPage } from './modal-detalle-cita.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild([
      {
        path: '',
        component: ModalDetalleCitaPage
      }
    ])
  ],
  declarations: [ModalDetalleCitaPage]
})
export class ModalDetalleCitaPageModule {}
