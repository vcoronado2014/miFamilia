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
  selector: 'app-registro-usuario',
  templateUrl: './registro-usuario.page.html',
  styleUrls: ['./registro-usuario.page.scss'],
})
export class RegistroUsuarioPage implements OnInit {

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
    this.activatedRoute.queryParams.subscribe(params => {
      if (params && params.usuario) {
        //store the temp in data        
        this.registro = JSON.parse(params.usuario);
        this.nombreMostrar = this.registro.Nombres + " " + this.registro.Apellidos;
        console.log(this.registro);
        //cargamos la forma
        this.cargarForma();
      }
    });
  }
  cargarForma(){
    this.forma = new FormGroup({
      'run': new FormControl('', [Validators.required]),
      'email': new FormControl('', [Validators.required, Validators.pattern(this.expEmail)]),
      'nombre': new FormControl('', [Validators.required, Validators.minLength(3), Validators.maxLength(50), Validators.pattern(this.patternOnlyLetter)]),
      'apellido': new FormControl('', [Validators.required, Validators.pattern(this.patternOnlyLetter)]),
      'telefono': new FormControl('', [Validators.pattern(this.expCelular)]),
      'genero': new FormControl(),
      'clave':new FormControl('', [Validators.required, Validators.minLength(3), Validators.maxLength(10)]),
      'repetirClave': new FormControl('', [Validators.required, Validators.minLength(3), Validators.maxLength(10)])      
    }, { validators: this.EmailIgualesValidator });
    if (this.registro && this.registro.Id >= 0){
      let sexo = this.registro.Sexo ? this.registro.Sexo.toString(): "-1";
      this.forma.setValue({
        run: this.registro.Run,
        email: this.registro.CorreoElectronico,
        nombre: this.registro.Nombres,
        apellido: this.registro.Apellidos,
        telefono: this.registro.TelefonoContacto ?  this.registro.TelefonoContacto : '',
        genero: sexo,
        clave: '',
        repetirClave: ''
      })
    }
  }
  EmailIgualesValidator: ValidatorFn = (fg: FormGroup) => {
    const clave = fg.get('clave').value;
    const claveR = fg.get('repetirClave').value;
    if (clave !== null && claveR !== null && clave != claveR) {
      this.forma.controls.repetirClave.setErrors({ clavesIguales: false });
    }
    return clave !== null && claveR !== null && clave != claveR ? null : null;
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
  async onSubmit() {
    if (this.forma.invalid) {
      return;
    }
    //aca seguir con el formulario
    //seteamos los valores para enviar el formulario
    var fechaNac = moment();
    if (this.registro.FechaNacimiento){
      fechaNac = moment(this.registro.FechaNacimiento);
    }
    var pass = "";
    pass = this.forma.controls.clave ? this.utiles.encriptar(this.forma.controls.clave.value) : '';
    var entidadRegistro = {
      Id: this.registro.Id.toString(),
      Nombres: this.forma.controls.nombre ? this.forma.controls.nombre.value : '',
      Apellidos: this.forma.controls.apellido ? this.forma.controls.apellido.value : '',
      CorreoElectronico: this.forma.controls.email ? this.forma.controls.email.value : '',
      NombreUsuario: this.forma.controls.email ? this.forma.controls.email.value : '',
      //dejare por defecto genero no definido
      Sexo: this.forma.controls.genero ? this.forma.controls.genero.value : 2,
      DiaNacimiento: fechaNac.date(),
      MesNacimiento: fechaNac.month() + 1,
      AnioNacimiento: fechaNac.year(),
      Pais: localStorage.getItem('pais'),
      Provincia: localStorage.getItem('provincia'),
      Region: localStorage.getItem('region'),
      Comuna: localStorage.getItem('comuna'),
      Password: pass,
      ModoRegistro: 1,
      Apodo: '',
      Avatar: '',
      VersionAppName: localStorage.getItem('version_app_name'),
      IdDispositivo: localStorage.getItem('token_dispositivo'),
      Plataforma: localStorage.getItem('plataforma'),
      VersionAppNumber: localStorage.getItem('version_number'),
      TelefonoContacto: this.forma.controls.telefono ? this.forma.controls.telefono.value : '',
      Latitud: sessionStorage.getItem('latitud'),
      Longitud: sessionStorage.getItem('longitud'),
      Eliminado: '0',
      Activo: '1',
      Run: this.forma.controls.run ? this.forma.controls.run.value : ''
    };
    console.log(entidadRegistro);

    //ahora guardamos
    let loader = await this.loading.create({
      message: 'Creando...<br>Registro',
      duration: 20000
    });
    await loader.present().then(async () => {
      if (!this.utiles.isAppOnDevice()) {
        //llamada web
        this.servicioGeo.postRegistroFamilia(entidadRegistro).subscribe((data)=>{
          let respuesta = data;
          localStorage.setItem('REGISTRO', JSON.stringify(respuesta));
          localStorage.setItem('TIENE_REGISTRO', 'true');
          loader.dismiss();
          //hay que mandarlo autentificado y con los datos del usuario aps
          //ver que hacemos aca
          this.autentificarse(entidadRegistro.Run, entidadRegistro.Password);
        })
      }
      else{
        //llamada nativa
        this.servicioGeo.postRegistroFamiliaNative(entidadRegistro).then((data)=>{
          let respuesta = JSON.parse(data.data);
          localStorage.setItem('REGISTRO', JSON.stringify(respuesta));
          localStorage.setItem('TIENE_REGISTRO', 'true');
          loader.dismiss();
          //hay que mandarlo autentificado y con los datos del usuario aps
          //ver que hacemos aca
          //this.irAHome();
          this.autentificarse(entidadRegistro.Run, entidadRegistro.Password);
        })
      }
    })


  }
  get f() { return this.forma.controls; }

}
