import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { TextAvatarModule } from '../../directives/text-avatar/index'
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';

import { CardCalendarioComponent } from './card-calendario/card-calendario.component'
import { AvatarComponent } from './avatar/avatar.component'



@NgModule({
  declarations: [
    CardCalendarioComponent,
    AvatarComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TextAvatarModule,
    MatCardModule,
    MatButtonModule,
  ],
  exports: [
    CardCalendarioComponent,
    AvatarComponent
  ]
})
export class ComponentsModule { }
