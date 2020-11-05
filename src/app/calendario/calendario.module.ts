import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RouterModule } from '@angular/router';

import { CalendarioPage } from './calendario.page';
import { TextAvatarModule } from '../../directives/text-avatar/index'

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TextAvatarModule,
    RouterModule.forChild([
      {
        path: '',
        component: CalendarioPage
      }
    ])
  ],
  declarations: [CalendarioPage]
})
export class CalendarioPageModule {}
