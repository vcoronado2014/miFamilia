import { Component, OnInit } from '@angular/core';
import { NavController, LoadingController } from '@ionic/angular';
import { FormGroup, Validators, FormBuilder, FormControl, ValidatorFn } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
//servicios
import { ServicioUtiles } from '../../app/services/ServicioUtiles';
import { ServicioGeo } from '../../app/services/ServicioGeo';
import { NavigationExtras } from '@angular/router';

import * as moment from 'moment';

@Component({
  selector: 'app-pre-registro-uno',
  templateUrl: './pre-registro-uno.page.html',
  styleUrls: ['./pre-registro-uno.page.scss'],
})
export class PreRegistroUnoPage implements OnInit {
  nombre;
  cargando = false;
  registroIncompleto: any;
  //formulario
  forma: FormGroup;
  tipoMovimiento = '1';
  estaAgregandoFamilia = false;

  constructor(
    private navCtrl: NavController,
    public utiles: ServicioUtiles,
    public servicioGeo: ServicioGeo,
    public loading: LoadingController,
    private formBuilder: FormBuilder,
    public activatedRoute: ActivatedRoute,
    private router: Router,
  ) { }

  ngOnInit() {
    moment.locale('es');
    this.activatedRoute.queryParams.subscribe(params => {
      if (params && params.estaAgregandoFamilia) {
        this.estaAgregandoFamilia = true;
      }
    });
    this.cargarForma();
  }
  cargarForma(){
    this.forma = new FormGroup({
      'nombre': new FormControl('', [Validators.required])      
    });
  }

  volver(){
    this.navCtrl.navigateRoot('nuevo-login');
  }
  //para validar
  get f() { return this.forma.controls; }
  irRegistroUno(){
    const navigationExtras: NavigationExtras = {
      queryParams: {
        nombre: this.forma.controls.nombre.value
      }
    };
    this.navCtrl.navigateRoot(['registro-uno'], navigationExtras);
  }

}
