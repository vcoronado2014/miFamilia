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

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.page.html',
  styleUrls: ['./inicio.page.scss'],
})
export class InicioPage implements OnInit {
  cargando = false;
  //datos politicos
  comuna;
  region;
  provincia;
  pais;

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
    });
   }

  ngOnInit() {

    this.VerificarRegistro();
  }
  abrirLogin(){
    this.navCtrl.navigateRoot('nuevo-login');
  }
  abrirPrimerosPasos(){
    this.navCtrl.navigateRoot('registro-uno');
  }

  //mecanismo para determinar si el usuario tiene registro
  async VerificarRegistroRun(run){
    //let f = { UserName: this.usuario, Password: this.password };
    //this.utiles
    var idDispositivo = this.utiles.entregaIdDispositivo();
    this.cargando = true;
    let loader = await this.loading.create({
      message: 'Verificando...<br>Registro Run',
      duration: 3000
    });

    await loader.present().then(async () => {
      if (!this.utiles.isAppOnDevice()) {
        //llamada web
        this.servicioGeo.getRegistroAppRun(run, idDispositivo).subscribe((response:any)=>{
          //procesar
          this.procesarInfoRun(response, loader);
        })
      }
      else{
        //llamada nativa
        this.servicioGeo.getRegistroAppNativeRun(run, idDispositivo).then((response:any)=>{
          //procesar JSON.parse(response.data)
          this.procesarInfoRun(JSON.parse(response.data), loader);
        },
        (error)=>{
          this.utiles.presentToast('Ocurrió un error de obtención identificador', 'bottom', 4000);
        }
        );
      }
    });

  }
  async VerificarRegistro(){
    //let f = { UserName: this.usuario, Password: this.password };
    //this.utiles
    var idDispositivo = this.utiles.entregaIdDispositivo();
    this.cargando = true;
    let loader = await this.loading.create({
      message: 'Verificando...<br>Registro',
      duration: 3000
    });

    await loader.present().then(async () => {
      if (!this.utiles.isAppOnDevice()) {
        //llamada web
        this.servicioGeo.getRegistroApp(idDispositivo).subscribe((response:any)=>{
          //procesar
          this.procesarInfo(response, loader);
        })
      }
      else{
        //llamada nativa
        this.servicioGeo.getRegistroAppNative(idDispositivo).then((response:any)=>{
          //procesar JSON.parse(response.data)
          this.procesarInfo(JSON.parse(response.data), loader);
        },
        (error)=>{
          this.utiles.presentToast('Ocurrió un error de obtención identificador', 'bottom', 4000);
        }
        );
      }
    });

  }
  procesarInfoRun(registro, loader){
    console.log(registro);
    if (registro == null){
      //no tiene registro, hay que dejarlo acá
      console.log('no tiene registro');
      //limpiamos local storage
      this.limpiarRegistro();
      loader.dismiss();
    }
    else{
      //pasa a la pantalla login solo si tiene sus datos completos
      var tieneCorreo = !(registro.CorreoElectronico == null || registro.CorreoElectronico == "" || registro.CorreoElectronico == undefined);
      var tienePassword = !(registro.Password == null || registro.Password == "" || registro.Password == undefined);
      var tieneRun = !(registro.Run == null || registro.Run == "" || registro.Run == undefined);
      var tieneUsuario = !(registro.NombreUsuario == null || registro.NombreUsuario == "" || registro.NombreUsuario == undefined);
      if (tieneCorreo && tienePassword && tieneRun && tieneUsuario){
        //correcto se va al login
        loader.dismiss();
        this.abrirLogin();
      }
      else{
        loader.dismiss();
        this.limpiarRegistro();

      }

    }
  }
  procesarInfo(registro, loader){
    console.log(registro);
    if (registro == null){
      //no tiene registro, hay que dejarlo acá
      console.log('no tiene registro');
      //limpiamos local storage
      this.limpiarRegistro();
      loader.dismiss();
    }
    else{
      //pasa a la pantalla login solo si tiene sus datos completos
      var tieneCorreo = !(registro.CorreoElectronico == null || registro.CorreoElectronico == "" || registro.CorreoElectronico == undefined);
      var tienePassword = !(registro.Password == null || registro.Password == "" || registro.Password == undefined);
      var tieneRun = !(registro.Run == null || registro.Run == "" || registro.Run == undefined);
      var tieneUsuario = !(registro.NombreUsuario == null || registro.NombreUsuario == "" || registro.NombreUsuario == undefined);
      if (tieneCorreo && tienePassword && tieneRun && tieneUsuario){
        //correcto se va al login
        loader.dismiss();
        this.abrirLogin();
      }
      else{
        loader.dismiss();
        //lo volvemos a buscar, pero esta vez con el run
        let run = registro.Run;
        this.VerificarRegistroRun(run);
        //this.limpiarRegistro();
      }

    }
  }
  limpiarRegistro(){
    localStorage.removeItem("REGISTRO");
    localStorage.removeItem("MI_NOMBRE");
    localStorage.removeItem("MI_RUT");
    localStorage.removeItem("UsuarioAps");
    localStorage.setItem("TIENE_REGISTRO", "false");
  }
  doGeocodeNative(lat, lon) {
    //antes para omitir tantas llamadas vamos a buscar la info
    //a local storage comuna region provincia pais
    this.comuna = localStorage.getItem('comuna');
    this.region = localStorage.getItem('region');
    this.provincia = localStorage.getItem('provincia');
    this.pais = localStorage.getItem('pais');
    if (this.comuna && this.pais && this.region && this.provincia) {
      console.log('Datos politicos existentes');
    }
    else {
      this.servicioGeo.getMapaNative(lat, lon).then(response => {
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
  procesarRespuestaMapa(objeto){
    //lo cambiamos a local storage para hacerlo más global
    //y no consultar tantas veces para ocupar la api
    var retorno = false;
     try {
         if (objeto.results && objeto.results[0]) {
             if (objeto.results[0].address_components && objeto.results[0].address_components.length > 0) {
                 //ahora recorremos los elementos
                 objeto.results[0].address_components.forEach(element => {
                     let busquedaCom = element.types.find(ele => ele == 'administrative_area_level_3');
                     if (busquedaCom) {
                         this.comuna = element.long_name;
                         localStorage.setItem('comuna', this.comuna);
                     }
                     let busquedaReg = element.types.find(ele => ele == 'administrative_area_level_1');
                     if (busquedaReg) {
                         this.region = element.long_name;
                         localStorage.setItem('region', this.region);
                     }
                     let busquedaProv = element.types.find(ele => ele == 'administrative_area_level_2');
                     if (busquedaProv) {
                         this.provincia = element.long_name;
                         localStorage.setItem('provincia', this.provincia);
                     }
                     let busquedaPais = element.types.find(ele => ele == 'country');
                     if (busquedaPais) {
                         this.pais = element.long_name;
                         localStorage.setItem('pais', this.pais);
                     }
                 });
             }
         }
         retorno = true;
     }
     catch (error) {
         console.log(error);
         
     }
     return retorno;

    //console.log(this.pais + ' ' + this.region);
 }

}
