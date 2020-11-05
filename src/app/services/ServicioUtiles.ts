import { Injectable } from '@angular/core';
import { Platform, ToastController } from '@ionic/angular';
import { AppVersion } from '@ionic-native/app-version/ngx';
import * as moment from 'moment';
import { environment } from '../../environments/environment';


@Injectable()
export class ServicioUtiles{
    plataforma;
	versionAppName;
    versionNumber;
    infoAplicacion = {
        VersionAppName: '',
        VersionNumnber: '',
        Plataforma: ''
    }
    pais;
    provincia;
    region;
    comuna;
    
    constructor(
        public platform : Platform,
        public appVersion: AppVersion,
        public toast: ToastController,
    ){
      //inicializamos los valores
      moment.locale('es');
  
    }

    isAppOnDevice(): boolean {
		if (window.location.port === '8100') {
			return false;
		} else {
			return true;
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

    async presentToast(mensaje, posicion, duracion) {
        const toas = await this.toast.create(
            {
                message: mensaje,
                position: posicion,
                duration: duracion
            }
        );
        toas.present();
    }
    insertarGuion(rut){
        var retorno = '';
        if (rut && rut.length >= 2){
            var index = rut.length -1;
            var parte1 = rut.slice(0, index);
            var parte2 = rut.slice(index, index+ 1);
            retorno = parte1 + '-' + parte2;
        }
        return retorno;
    }
    textoBienvenida(nombre){
        var fecha = moment();
        var hrs = fecha.hour();
        var sms = '';
        if (hrs<12){
            sms = 'Buenos días ' + nombre;
        }
        else if (hrs >= 12 && hrs <= 17){
            sms = 'Buenas tardes ' + nombre;
        }
        else if (hrs >= 17 && hrs <= 24){
            sms = 'Buenas noches ' + nombre;
        }
        return sms;
        
    }
/*     entregaMiColor(){
        var retorno = '#757575';
        if (sessionStorage.getItem('UsuarioAps')) {
            var usuarioAps = JSON.parse(sessionStorage.getItem('UsuarioAps'));
            if (usuarioAps.Color && usuarioAps.Color != '') {
                if (localStorage.getItem('MI_COLOR')) {
                    var colorSession = localStorage.getItem('MI_COLOR');
                    if (colorSession != usuarioAps.Color) {
                        retorno = colorSession;
                    }
                    else{
                        //esto hay que revisarlo
                        //retorno = usuarioAps.Color;
                        retorno = colorSession;
                    }
                }
                else {
                    retorno = usuarioAps.Color;
                }
            }
        }
        return retorno;
    } */
    entregaMiColor(){
        var retorno = '#757575';
        if (localStorage.getItem('MI_COLOR')){
            var miColor = localStorage.getItem('MI_COLOR');
            if (miColor != ''){
                retorno = miColor;
            }
        }
        return retorno;
    }
    cambiaColorLocalStorage(color){
        if (sessionStorage.getItem('UsuarioAps')){
            //si está lo obtenemos
            var usuarioAps = JSON.parse(sessionStorage.getItem('UsuarioAps'));
            if (usuarioAps){
                usuarioAps.Color = color;
            }
            //volvemos a guardar la variable
            sessionStorage.setItem('UsuarioAps', JSON.stringify(usuarioAps));
        }
    }
    entregaMenuPages(){
        var arrPages = [];
        var pagUno = {
            title: 'Antecedentes',
            visible: true,
            icon: 'list-circle-outline',
            src: 'antecedentes'
        };
        arrPages.push(pagUno);
        var pagDos = {
            title: 'Calendario',
            visible: true,
            segment:'calendario/:this.usuarioAps',
            icon: 'calendar'
        };
        arrPages.push(pagDos);
        var pagTres = {
            title: 'Familia',
            visible: true,
            icon: 'people',
            src: 'familia'
        };
        arrPages.push(pagTres);
        var pagCuatro = {
            title: 'Ajustes',  
            visible: true, 
            icon: 'construct',
            src: 'familia'
        }
        arrPages.push(pagCuatro);
        return arrPages;
    }
    entregaMiImagen(){
        var retorno = environment.URL_FOTOS + '/Recursos/logousuario.png';
        if (sessionStorage.getItem('UsuarioAps')) {
            var usuarioAps = JSON.parse(sessionStorage.getItem('UsuarioAps'));
            if (usuarioAps.UrlImagen && usuarioAps.UrlImagen != '') {
                if (localStorage.getItem('MI_IMAGEN')) {
                    var imagen = localStorage.getItem('MI_IMAGEN');
                    if (imagen != usuarioAps.Color) {
                        retorno = environment.URL_FOTOS + imagen;
                    }
                }
                else {
                    retorno = environment.URL_FOTOS + usuarioAps.UrlImagen;
                }
            }
        }
        //mostramos solo si tiene imagen valida
        if (retorno.includes('Recursos/logousuario.png')){
            retorno = '';
        }
        return retorno;
    }
    entregaColor(usuarioAps){
        var retorno = '#757575';
        if (usuarioAps) {
            if (usuarioAps.Color && usuarioAps.Color != '') {
                retorno = usuarioAps.Color;
            }
        }
        return retorno;
    }
    entregaImagen(usuarioAps){
        var retorno = environment.URL_FOTOS + '/Recursos/logousuario.png';
        if (usuarioAps) {
            if (usuarioAps.UrlImagen && usuarioAps.UrlImagen != '') {
                retorno = environment.URL_FOTOS  + usuarioAps.UrlImagen;
            }
        }
        //mostramos solo si tiene imagen valida
        if (retorno.includes('Recursos/logousuario.png')){
            retorno = '';
        }
        return retorno;
    }
    entregaMiNombre(){
        var retorno = '';
        if (sessionStorage.getItem('UsuarioAps')) {
            var usuarioAps = JSON.parse(sessionStorage.getItem('UsuarioAps'));
            var nombreInicial = usuarioAps.Nombres + ' ' + usuarioAps.ApellidoPaterno;
            if (nombreInicial != '') {
                if (localStorage.getItem('MI_NOMBRE')) {
                    var nombre = localStorage.getItem('MI_NOMBRE');
                    if (nombreInicial != nombre) {
                        retorno = nombre;
                    }
                    else {
                        retorno = nombreInicial;
                    }
                }
                else {
                    retorno = nombreInicial;
                }
            }
        }
        return retorno;
    }
}