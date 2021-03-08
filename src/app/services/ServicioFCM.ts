import { Injectable } from '@angular/core';
import { Platform, ToastController } from '@ionic/angular';
import { AppVersion } from '@ionic-native/app-version/ngx';
import { Device } from '@ionic-native/device/ngx';
import * as moment from 'moment';
import { environment } from '../../environments/environment';
/* import { FCM } from 'cordova-plugin-fcm-with-dependecy-updated/ionic/ngx'; */
import { ServicioUtiles } from './ServicioUtiles';
import { ServicioNotificaciones } from './ServicioNotificaciones';
import { AngularFireMessaging  } from '@angular/fire/messaging';

@Injectable()
export class ServicioFCM{
    constructor(
        /* public fcm: FCM,  */
        public utiles: ServicioUtiles, 
        private fm: AngularFireMessaging,
        private notificaciones: ServicioNotificaciones ){

    }
    initFCM(){
        if (this.utiles.isAppOnDevice()) {
/*             this.fcm.getToken().then(token => {
                console.log('token fcm ' + token);
                localStorage.setItem('TOKEN_FIREBASE_MESSAGE', token);
            }) */
            this.fm.getToken.subscribe((token)=>{
                console.log(token);
                localStorage.setItem('TOKEN_FIREBASE_MESSAGE', token);
            })
        }
        else{
            //web
            this.fm.getToken.subscribe((token)=>{
                console.log(token);
                localStorage.setItem('TOKEN_FIREBASE_MESSAGE', token);
            })
        }

    }
    receiveMessage(esNotificacion){
        if (this.utiles.isAppOnDevice()){
            //nativo
            if (esNotificacion){
                this.fm.messages.subscribe((payload: any) => {
                    console.log(payload);
                    console.log(payload.notification);
                    //aca crear mensaje web con toast
                    this.notificaciones.crearNotificacion(payload.notification.tag, payload.notification.title, payload.notification.body);
                })

/*                 this.fcm.onNotification().subscribe((payload:any)=>{
                    if (payload.wasTapped){
                        //recibido en background
                        console.log('in background')
                        //this.notificaciones.crearNotificacion(payload.notification.tag, payload.notification.title, payload.notification.body);
                    }
                    else{
                        //recibido en foreground
                        console.log('in foregorund')
                        //this.notificaciones.crearNotificacion(payload.notification.tag, payload.notification.title, payload.notification.body);
                    }
                }) */
            }
        }
        else {
            if (esNotificacion){
                this.fm.messages.subscribe((payload: any) => {
                    console.log(payload);
                    console.log(payload.notification);
                    //aca crear mensaje web con toast
                    this.notificaciones.crearNotificacion(payload.notification.tag, payload.notification.title, payload.notification.body);
                });
            }
        }

    }
}