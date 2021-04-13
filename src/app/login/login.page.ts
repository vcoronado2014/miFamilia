import { AfterViewInit, Component, OnInit, ɵConsole } from '@angular/core';
import { NavController, ToastController, Platform, ModalController, LoadingController } from '@ionic/angular';
import { ActivatedRoute, Router } from '@angular/router';
import { Geolocation } from '@ionic-native/geolocation/ngx';
import { Device } from '@ionic-native/device/ngx';
import { AppVersion } from '@ionic-native/app-version/ngx';
//servicios
import { ServicioUtiles } from '../../app/services/ServicioUtiles';
import { ServicioGeo } from '../../app/services/ServicioGeo';
import { ServicioAcceso } from '../../app/services/ServicioAcceso';

import * as moment from 'moment';
declare var window;

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  locations: any;
  recordarme = false;
  textoBienvenida;
  tokenDispositivo: any;
  subscription: any;
  esIOS = false;
  cargando = false;
  
  objetoEntrada = {
    VersionAppName: '',
    Plataforma: '',
    Token: '',
    VersionAppNumber: '',
    Fecha: new Date()
  };
  comuna;
  region;
  provincia;
  pais;
  //para el login
  usuario: string;
  password: string;
  isLogged: boolean;
  loggedIn: boolean;
  CodigoMensaje: any;
  Mensaje: string;
  //para el intervalo
  intervalo;

  constructor(
    public navCtrl: NavController,
    public toast: ToastController,
    public modalCtrl: ModalController,
    public platform: Platform,
    private route: ActivatedRoute,
    private router: Router,
    public geolocation: Geolocation,
    public device: Device,
    public appVersion: AppVersion,
    public loading: LoadingController,
    public utiles: ServicioUtiles,
    public servicioGeo: ServicioGeo,
    public acceso: ServicioAcceso,

  ) { 
    //ready
    platform.ready().then(() => {
      //geolocation
      this.geolocation.getCurrentPosition().then((resp) => {
        sessionStorage.setItem("latitud", JSON.stringify(resp.coords.latitude));
        sessionStorage.setItem("longitud", JSON.stringify(resp.coords.longitude));
        var lat = sessionStorage.getItem('latitud');
        var lon = sessionStorage.getItem('longitud');
        //obtener la info de registro y setear los campos que corresponden
        if (!this.utiles.isAppOnDevice()) {
          //this.doGeocode(lat, lon);
          console.log('web');
          this.doGeocode(lat, lon);
        }
        else{
          //this.doGeocodeNative(lat, lon);
          console.log('native');
          this.doGeocodeNative(lat, lon);
          
        }

      }).catch((error) => {
        console.log('Error getting location', error);
      });

      //para pruebas
      //notificacion.lanzarNotificacionPrueba();
/*       this.locations = [];
      this.StartBackgroundTracking(); */
    });

  }
/*   StartBackgroundTracking(){
    window.app.backgroudGeolocation.start();
  }
  StopBackgroundGeolocation(){
    window.app.backgroudGeolocation.stop();
  }
  GetLocations(){
    this.locations = (JSON.parse(localStorage.getItem("location")) == null) ?[] : JSON.parse(localStorage.getItem("location"));
  }
  ClearLocation(){
    localStorage.removeItem("location");
  } */

  onChangeRecordarme(event) {
    console.log(this.usuario);

    if (event.detail) {
      this.recordarme = event.detail.checked;
      localStorage.setItem('RECORDARME', JSON.stringify(this.recordarme));
      if (this.recordarme == false) {
        this.usuario = '';
        this.password = '';
        //localStorage.removeItem('MI_RUT');
      }
    }
    //console.log(this.esPublico);
  }

  ionViewWillEnter() {
    console.log('wil enter');
    if (localStorage.getItem('RECORDARME')){
      this.recordarme = JSON.parse(localStorage.getItem('RECORDARME'));
      if (this.recordarme && localStorage.getItem('MI_RUT') != undefined && localStorage.getItem('MI_NOMBRE')){
        //texto bienvenida
        this.textoBienvenida = this.utiles.textoBienvenida(localStorage.getItem('MI_NOMBRE'));
        this.usuario = localStorage.getItem('MI_RUT');
      }
    }
  }
  ngOnInit() {
    //this.startTrackingLoop();
  }
  doGeocodeNative(lat, lon){
        //antes para omitir tantas llamadas vamos a buscar la info
    //a local storage comuna region provincia pais
    this.comuna = localStorage.getItem('comuna');
    this.region = localStorage.getItem('region');
    this.provincia = localStorage.getItem('provincia');
    this.pais = localStorage.getItem('pais');
    if (this.comuna && this.pais && this.region && this.provincia){
      console.log('Datos politicos existentes');
      
    }
    else{
      this.servicioGeo.getMapaNative(lat, lon).then(response=>{
        //console.log(data);
        this.utiles.procesarRespuestaMapa(JSON.parse(response.data));
  
      });
    }

  }
  doGeocode(lat, lon){
    //antes para omitir tantas llamadas vamos a buscar la info
    //a local storage comuna region provincia pais
    this.comuna = localStorage.getItem('comuna');
    this.region = localStorage.getItem('region');
    this.provincia = localStorage.getItem('provincia');
    this.pais = localStorage.getItem('pais');
    if (this.comuna && this.pais && this.region && this.provincia){
      console.log('Datos politicos existentes');
      
    }
    else {
      this.servicioGeo.getMapaWeb(lat, lon).subscribe(data=>{
        //console.log(data);
        this.utiles.procesarRespuestaMapa(data);
  
      });
    }
  }

  async Signup(){
    let f = { UserName: this.usuario, Password: this.password };

    this.cargando = true;
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
    });

  }
  irAHome(){
    this.navCtrl.navigateRoot('home');
  }
  procesarLogin(response, loader){
    var retorno = response;
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
        }
        if (retorno.UsuariosFamilia){
          //debemos quitar los repetidos según última revisión
          let hash= {};
          var familia = retorno.UsuariosFamilia.filter(o => hash[o.Id] ? false : hash[o.Id] = true);
          retorno.UsuariosFamilia = familia;
          userFamilia = JSON.stringify(retorno.UsuariosFamilia);
          //variable de sessión muy importante para el resto de la app.
          localStorage.setItem("UsuariosFamilia", userFamilia);
        }


        this.CodigoMensaje = retorno.RespuestaBase.CodigoMensaje;
        this.Mensaje = retorno.RespuestaBase.Mensaje;

        this.loggedIn = true;
        loader.dismiss();
        this.cargando = false;
        this.crearToken();

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

  async crearToken(){
    var versionAppName;
    var versionNumber;
    var plataforma;
    let loader = await this.loading.create({
      message: 'Creando...<br>Token inicial',
      duration: 20000
    });

    await loader.present().then(async () => {
      if (!this.utiles.isAppOnDevice()) {
        //web
        //guardar local storage
        if (!localStorage.getItem('token_dispositivo')) {
          //crear token para web
          this.tokenDispositivo = (Math.random() * (1000000 - 1) + 1).toString() + ' web';
          localStorage.setItem('token_dispositivo', this.tokenDispositivo);
        }
        else {
          this.tokenDispositivo = localStorage.getItem('token_dispositivo');
        }
        versionAppName = "Mi salud familiar"
        versionNumber = "0.0";
        plataforma = "Web";
        //loader.dismiss();
        //otras variables
        localStorage.setItem('version_app_name', versionAppName);
        localStorage.setItem('version_number', versionNumber);
        localStorage.setItem('plataforma', plataforma);
        this.servicioGeo.getRegistroApp(this.tokenDispositivo).subscribe(async (data: any) => {
          //console.log(data);
          this.procesarRegistroL(data, loader);
          
        },
        (error) => {
          this.utiles.presentToast('No hay comunicación con el servidor', 'bottom', 5000);
          console.log(error);
          this.procesarRegistroL(null, loader);
        }
        );
      }
      else {
        if (this.platform.is('ios')){
          versionAppName = await this.appVersion.getAppName();
          versionNumber = await this.appVersion.getVersionNumber();
          plataforma = "iOS";
        } 
        else if (this.platform.is('android')){
          versionAppName = await this.appVersion.getAppName();
          versionNumber = await this.appVersion.getVersionNumber();
          plataforma = "Android";
        }
        else if (this.platform.is('mobileweb')){
          versionAppName = "Mi salud familiar"
          versionNumber = "0.0";
          plataforma = "Web";
        }
        else {
          versionAppName = "Mi salud familiar"
          versionNumber = "0.0";
          plataforma = "No informado";
        }
        //crear token para web
        this.tokenDispositivo = this.device.uuid;
        localStorage.setItem('token_dispositivo', this.tokenDispositivo);
        //otras variables
        localStorage.setItem('version_app_name', versionAppName);
        localStorage.setItem('version_number', versionNumber);
        localStorage.setItem('plataforma', plataforma);
        this.servicioGeo.getRegistroAppNative(this.tokenDispositivo).then(async (response: any) => {
          this.procesarRegistroL(JSON.parse(response.data), loader);

        },
        (error)=>{
          this.utiles.presentToast('No hay comunicación con el servidor', 'bottom', 5000);
          console.log(error);
          this.procesarRegistroL(null, loader);
        }
        );
      }

    })
  }

  procesarRegistroL(data, loading: any){
    if (data && data.Id > 0){
      if (data.Activo == 1 && data.Eliminado == 0) {
        //tiene registro
        var registro = JSON.stringify(data);
        localStorage.setItem('REGISTRO', registro);
        localStorage.setItem('TIENE_REGISTRO', 'true');
        loading.dismiss();
        this.cargando = false;
        //ya está registrado, lo enviamos a home
        this.irAHome();
        //this.irAHome();
      }
      else{
        localStorage.setItem('TIENE_REGISTRO', 'false');
        loading.dismiss();
        this.cargando = false;
        this.utiles.presentToast('Su registro se encuentra inactivo, vuelva a registrarse', 'middle', 10000);

      }
    }
    else {
      //no tiene registro
      loading.dismiss();
      this.cargando = false;
      //procedemos a registrarlo
      //ojo el rut viene sin guion
      //hay que dejarlo con guión
      var usuarioAps = JSON.parse(sessionStorage.getItem('UsuarioAps'));
      if (usuarioAps && usuarioAps.Rut && usuarioAps.Nombres && usuarioAps.ApellidoPaterno){
        var nuevoRut = this.utiles.insertarGuion(usuarioAps.Rut);
        usuarioAps.rut = nuevoRut;
        var fechaNac = moment();
        if (usuarioAps.FechaDeNacimiento){
          fechaNac = moment(usuarioAps.FechaDeNacimiento);
        }
        var correo = '';
        if (usuarioAps.Email && usuarioAps.Email != '' && usuarioAps.Email != undefined){
          correo = usuarioAps.Email;
        }
        else{
          correo = usuarioAps.Rut +'@apps.cl';
        }
        //creamos el objeto registro para guardar automaticamente
        var entidadRegistro = {
          Nombres: usuarioAps.Nombres,
          Apellidos: usuarioAps.ApellidoPaterno + ' ' + usuarioAps.ApellidoMaterno,
          CorreoElectronico: usuarioAps.Email,
          NombreUsuario: correo,
          Sexo: 0,
          DiaNacimiento: fechaNac.date(),
          MesNacimiento: fechaNac.month() + 1,
          AnioNacimiento: fechaNac.year(),
          Pais: sessionStorage.getItem('pais'),
          Provincia: sessionStorage.getItem('provincia'),
          Region: sessionStorage.getItem('region'),
          Comuna: sessionStorage.getItem('comuna'),
          Password: '',
          ModoRegistro: 0,
          Apodo: '',
          Avatar: '',
          VersionAppName: localStorage.getItem('version_app_name'),
          IdDispositivo: localStorage.getItem('token_dispositivo'),
          Plataforma: localStorage.getItem('plataforma'),
          VersionAppNumber: localStorage.getItem('version_number'),
          TelefonoContacto: '',
          Latitud: sessionStorage.getItem('latitud'),
          Longitud: sessionStorage.getItem('longitud'),
          Eliminado: '0',
          Activo: '1',
          //nuevo 03-06-2020
          Run: nuevoRut
        };
        this.registroAutomatico(entidadRegistro);

      }
      

    }
  }
  async registroAutomatico(entidadRegistro){
      //continuar y guardar
      let loader = await this.loading.create({
        message: 'Espere...<br><br>Realizando registro automático',
        duration: 20000
      });
  
      await loader.present().then(async () => {
        if (!this.utiles.isAppOnDevice()) {
          //llamada web
          this.servicioGeo.postRegistro(entidadRegistro).subscribe((data: any) => {
            localStorage.setItem('REGISTRO', JSON.stringify(data));
            localStorage.setItem('TIENE_REGISTRO', 'true');
            loader.dismiss();
            this.irAHome();
          });
        }
        else {
          //llamada nativa
          this.servicioGeo.postRegistroNative(entidadRegistro).then((response: any)=>{
            var data = JSON.parse(response.data);
            localStorage.setItem('REGISTRO', JSON.stringify(data));
            localStorage.setItem('TIENE_REGISTRO', 'true');
            loader.dismiss();
            this.irAHome();
          });

        }
      });
  }  

}
