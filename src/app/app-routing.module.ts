import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'login',
    loadChildren: () => import('./login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'antecedentes',
    loadChildren: () => import('./antecedentes/antecedentes.module').then( m => m.AntecedentesPageModule)
  },
  {
    path: 'detail-usuario',
    loadChildren: () => import('./detail-usuario/detail-usuario.module').then( m => m.DetailUsuarioPageModule)
  },
  {
    path: 'familia',
    loadChildren: () => import('./familia/familia.module').then( m => m.FamiliaPageModule)
  },
  {
    path: 'modal-ajustes',
    loadChildren: () => import('./modal-ajustes/modal-ajustes.module').then( m => m.ModalAjustesPageModule)
  },
  {
    path: 'ordenes',
    loadChildren: () => import('./ordenes/ordenes.module').then( m => m.OrdenesPageModule)
  },
  {
    path: 'modal-examenes',
    loadChildren: () => import('./modal-examenes/modal-examenes.module').then( m => m.ModalExamenesPageModule)
  },
  {
    path: 'calendario',
    loadChildren: () => import('./calendario/calendario.module').then( m => m.CalendarioPageModule)
  },
  {
    path: 'modal-detalle-cita',
    loadChildren: () => import('./modal-detalle-cita/modal-detalle-cita.module').then( m => m.ModalDetalleCitaPageModule)
  },
  {
    path: 'agenda-disponible',
    loadChildren: () => import('./agenda-disponible/agenda-disponible.module').then( m => m.AgendaDisponiblePageModule)
  },
  {
    path: 'modal-operacion-cita',
    loadChildren: () => import('./modal-operacion-cita/modal-operacion-cita.module').then( m => m.ModalOperacionCitaPageModule)
  },
  {
    path: 'cupos-disponibles',
    loadChildren: () => import('./cupos-disponibles/cupos-disponibles.module').then( m => m.CuposDisponiblesPageModule)
  },
  {
    path: 'pre-tiposatencion',
    loadChildren: () => import('./pre-tiposatencion/pre-tiposatencion.module').then( m => m.PreTiposatencionPageModule)
  },
  {
    path: 'busqueda-avanzada',
    loadChildren: () => import('./busqueda-avanzada/busqueda-avanzada.module').then( m => m.BusquedaAvanzadaPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
