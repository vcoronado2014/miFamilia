import { Component, OnInit } from '@angular/core';
import { NavController, LoadingController } from '@ionic/angular';
import { FormGroup, Validators, FormBuilder, FormControl, ValidatorFn } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
//servicios
import { ServicioUtiles } from '../../app/services/ServicioUtiles';
import { ServicioGeo } from '../../app/services/ServicioGeo';
import { ServicioAcceso } from '../../app/services/ServicioAcceso';
import { NavigationExtras } from '@angular/router';

import * as moment from 'moment';

@Component({
  selector: 'app-nuevo-login',
  templateUrl: './nuevo-login.page.html',
  styleUrls: ['./nuevo-login.page.scss'],
})
export class NuevoLoginPage implements OnInit {
  hide = true;

  registro;
  forma: FormGroup;
  nombreMostrar;
  //para validar
  patternOnlyLetter = '[a-zA-ZÀ-ÿ\u00f1\u00d1]+(\s*[a-zA-ZÀ-ÿ\u00f1\u00d1]*)*[a-zA-ZÀ-ÿ\u00f1\u00d1 ]+$';
  expCelular = /^(\+?56)?(\s?)(0?9)(\s?)[9876543]\d{7}$/gm;
  expPassword = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{4,8}$/gm;
  expEmail = /^[^@\s]+@[^@\s]+\.[^@\s]+$/gm;
  isLogged: boolean;
  loggedIn: boolean;
  CodigoMensaje: any;
  Mensaje: string;

  constructor(
    private navCtrl: NavController,
    public utiles: ServicioUtiles,
    public servicioGeo: ServicioGeo,
    public loading: LoadingController,
    private formBuilder: FormBuilder,
    public activatedRoute: ActivatedRoute,
    private router: Router,
    public acceso: ServicioAcceso,
  ) { }

  ngOnInit() {
    moment.locale('es');
    this.cargarForma();
  }
  abrirAsistente(){
    this.navCtrl.navigateRoot('registro-uno');
  }
  cargarForma(){
    this.forma = new FormGroup({
      'email': new FormControl('', [Validators.required, Validators.pattern(this.expEmail)]),
      'clave':new FormControl('', [Validators.required, Validators.minLength(3), Validators.maxLength(10)])    
    });
    //acá ver si dejamos preseteado el usuario y clave
    //por lo pronto lo comentamos

/*     if (this.registro && this.registro.Id > 0){
      this.forma.setValue({
        run: this.registro.Run,
        email: this.registro.CorreoElectronico,
        nombre: this.registro.Nombres,
        apellido: this.registro.Apellidos,
        telefono: this.registro.TelefonoContacto,
        genero: this.registro.Sexo.toString(),
        clave: '',
        repetirClave: ''
      })
    } */
  }

  async onSubmit() {
    if (this.forma.invalid) {
      return;
    } 

    let correo = this.forma.controls.email.value;
    let password = this.forma.controls.clave ? this.utiles.encriptar(this.forma.controls.clave.value) : '';

    //ahora guardamos
    let loader = await this.loading.create({
      message: 'Creando...<br>Registro',
      duration: 20000
    });
    await loader.present().then(async () => {
      if (!this.utiles.isAppOnDevice()) {
        //llamada web
        this.servicioGeo.getRegistroAppCorreoPassword(correo, password).subscribe((data)=>{
          if (data){
            let respuesta = data;
            localStorage.setItem('REGISTRO', JSON.stringify(respuesta));
            localStorage.setItem('TIENE_REGISTRO', 'true');
            loader.dismiss();
            //hay que mandarlo autentificado y con los datos del usuario aps
            //ver que hacemos aca
            let registro = JSON.parse(localStorage.getItem('REGISTRO'));

            this.autentificarse(registro.Run, password);
          }
          else{
            this.utiles.presentToast("No se encontró registro de usuario.", "middle", 3000);
          }

        })
      }
      else{
        //llamada nativa
        this.servicioGeo.getRegistroAppNativeCorreoPassword(correo, password).then((data)=>{
          let respuesta = JSON.parse(data.data);
          if (respuesta) {
            localStorage.setItem('REGISTRO', JSON.stringify(respuesta));
            localStorage.setItem('TIENE_REGISTRO', 'true');
            loader.dismiss();
            //hay que mandarlo autentificado y con los datos del usuario aps
            //ver que hacemos aca
            //this.irAHome();
            let registro = JSON.parse(localStorage.getItem('REGISTRO'));
            this.autentificarse(registro.Run, password);
          }
          else{
            this.utiles.presentToast("No se encontró registro de usuario.", "middle", 3000);
          }

        })
      }
    })


  }
  async autentificarse(userName, password){
    //en este caso ya el user name es el email
    let f = { UserName: userName, Password: password };
    let loader = await this.loading.create({
      message: 'Obteniendo...<br>Login',
      duration: 10000
    });

    await loader.present().then(async () => {
      if (!this.utiles.isAppOnDevice()) {
        //llamada web
        this.acceso.loginWebDirecto(f).subscribe((response: any)=>{
          this.procesarLogin(response, loader);
        });
      }
      else{
        //llamada nativa
        this.acceso.loginWebNative(f).then((response: any)=>{
          this.procesarLogin(JSON.parse(response.data), loader);
        },
        (error)=>{
          this.utiles.presentToast('Ocurrió un error de autentificación', 'bottom', 4000);
        }
        );
      }
    })

  }
  procesarLogin(response, loader){
    var retorno = response;
    let tieneUsuario = false;
    if (retorno.RespuestaBase){
      if (retorno.RespuestaBase.CodigoMensaje == 0) {
        //esta todo ok
        var user;
        var userFamilia;
        if (retorno.UsuarioAps){
          user = JSON.stringify(retorno.UsuarioAps);
          //variable de sessión muy importante para el resto de la app.
          sessionStorage.setItem("UsuarioAps", user);
          localStorage.setItem('MI_RUT', retorno.UsuarioAps.Rut);
          localStorage.setItem('MI_NOMBRE', retorno.UsuarioAps.Nombres +' ' + retorno.UsuarioAps.ApellidoPaterno);
          localStorage.setItem('MI_COLOR', retorno.UsuarioAps.Color);   
          localStorage.setItem('MI_IMAGEN', retorno.UsuarioAps.UrlImagen);
          //lo vamos a guardar en el local storage para realizar la llamada
          //en el background
          localStorage.setItem('UsuarioAps', user); 
          tieneUsuario = true;               
        }
        if (retorno.UsuariosFamilia){
          //debemos quitar los repetidos según última revisión
          let hash= {};
          var familia = retorno.UsuariosFamilia.filter(o => hash[o.Id] ? false : hash[o.Id] = true);
          retorno.UsuariosFamilia = familia;
          userFamilia = JSON.stringify(retorno.UsuariosFamilia);
          //variable de sessión muy importante para el resto de la app.
          sessionStorage.setItem("UsuariosFamilia", userFamilia);
        }


        this.CodigoMensaje = retorno.RespuestaBase.CodigoMensaje;
        this.Mensaje = retorno.RespuestaBase.Mensaje;

        this.loggedIn = true;
        loader.dismiss();
        //si tiene usuario está valido
        if (!tieneUsuario){
          this.utiles.presentToast("Tiene registro correcto, pero no cuenta con información en la red de salud.", "middle", 3000);
        }
        //this.crearToken();
        this.irAHome();
      }
      else {
        this.loggedIn = false;
        this.CodigoMensaje = retorno.RespuestaBase.CodigoMensaje;
        this.Mensaje = retorno.RespuestaBase.Mensaje;
        this.loggedIn = true;
        loader.dismiss();
        this.utiles.presentToast(this.Mensaje, 'middle', 4000);
      }

    }
    else{
      //error también
      this.loggedIn = false;
      this.CodigoMensaje = 1000;
      this.Mensaje = 'Error de llamada Http;';
      this.loggedIn = true;
      loader.dismiss();
      this.utiles.presentToast(this.Mensaje, 'middle', 4000);
    }
  }
  irAHome(){
    this.navCtrl.navigateRoot('home');
  }
  irRecuperarClave(){
    this.navCtrl.navigateRoot('recuperar-clave');
  }
  get f() { return this.forma.controls; }
}
