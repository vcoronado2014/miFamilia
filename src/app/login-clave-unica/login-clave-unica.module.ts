import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';

import { LoginClaveUnicaPage } from './login-clave-unica.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild([
      {
        path: '',
        component: LoginClaveUnicaPage
      }
    ])
  ],
  declarations: [LoginClaveUnicaPage]
})
export class LoginClaveUnicaPageModule {}
