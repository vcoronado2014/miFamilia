import { Component, OnInit } from '@angular/core';
import { NavController, LoadingController, AlertController } from '@ionic/angular';
import { FormGroup, Validators, FormBuilder, FormControl, ValidatorFn } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
//servicios
import { ServicioUtiles } from '../../app/services/ServicioUtiles';
import { ServicioGeo } from '../../app/services/ServicioGeo';
import { ServicioAcceso } from '../../app/services/ServicioAcceso';
import { ServicioParametrosApp } from '../../app/services/ServicioParametrosApp';
import { NavigationExtras } from '@angular/router';

import * as moment from 'moment';

@Component({
  selector: 'app-contactabilidad',
  templateUrl: './contactabilidad.page.html',
  styleUrls: ['./contactabilidad.page.scss'],
})
export class ContactabilidadPage implements OnInit {
  forma: FormGroup;
  //para validar
  patternOnlyLetter = '[a-zA-ZÀ-ÿ\u00f1\u00d1]+(\s*[a-zA-ZÀ-ÿ\u00f1\u00d1]*)*[a-zA-ZÀ-ÿ\u00f1\u00d1 ]+$';
  expCelular = /^(\+?56)?(\s?)(0?9)(\s?)[9876543]\d{7}$/gm;
  expPassword = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{4,8}$/gm;
  expEmail = /^[^@\s]+@[^@\s]+\.[^@\s]+$/gm;

  constructor(
    private navCtrl: NavController,
    public utiles: ServicioUtiles,
    public servicioGeo: ServicioGeo,
    public loading: LoadingController,
    private formBuilder: FormBuilder,
    public activatedRoute: ActivatedRoute,
    private router: Router,
    public acceso: ServicioAcceso,
    public parametrosApp: ServicioParametrosApp,
    public alertController: AlertController
  ) { }

  ngOnInit() {
    moment.locale('es');
    //cargamos la forma
    this.cargarForma();
  }
  cargarForma() {
    this.forma = new FormGroup({
      'nombreSocial': new FormControl('', [Validators.required]),
      'email': new FormControl('', [Validators.required, Validators.pattern(this.expEmail)]),
      'telefono': new FormControl('', [Validators.pattern(this.expCelular)]),
    });
  }

  get f() { return this.forma.controls; }
  
}
