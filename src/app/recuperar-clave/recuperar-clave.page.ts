import { Component, OnInit } from '@angular/core';
import { NavController, LoadingController } from '@ionic/angular';
import { FormGroup, Validators, FormBuilder, FormControl, ValidatorFn } from '@angular/forms';
//servicios
import { ServicioUtiles } from '../../app/services/ServicioUtiles';
import { ServicioGeo } from '../../app/services/ServicioGeo';
import { NavigationExtras } from '@angular/router';

@Component({
  selector: 'app-recuperar-clave',
  templateUrl: './recuperar-clave.page.html',
  styleUrls: ['./recuperar-clave.page.scss'],
})
export class RecuperarClavePage implements OnInit {
  forma: FormGroup;
  expEmail = /^[^@\s]+@[^@\s]+\.[^@\s]+$/gm;
  constructor(
    private navCtrl: NavController,
    public utiles: ServicioUtiles,
    public servicioGeo: ServicioGeo,
    public loading: LoadingController,
    private formBuilder: FormBuilder
  ) { }

  ngOnInit() {
    this.cargarForma();
  }
  cargarForma(){
    this.forma = new FormGroup({
      'correo': new FormControl('', [Validators.required, Validators.pattern(this.expEmail)])      
    });
  }

    //para validar
    get f() { return this.forma.controls; }



}
