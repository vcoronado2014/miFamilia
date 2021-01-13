import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RouterModule } from '@angular/router';

import { BusquedaAvanzadaPage } from './busqueda-avanzada.page';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MatFormFieldModule,
    MatSelectModule,
    RouterModule.forChild([
      {
        path: '',
        component: BusquedaAvanzadaPage
      }
    ])
  ],
  declarations: [BusquedaAvanzadaPage]
})
export class BusquedaAvanzadaPageModule {}