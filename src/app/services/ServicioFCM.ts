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
//fcm native
import { FirebaseMessaging } from '@ionic-native/firebase-messaging/ngx';

@Injectable()
export class ServicioFCM{
    constructor(
        /* public fcm: FCM,  */
        public utiles: ServicioUtiles, 
        private fm: AngularFireMessaging,
        private firebaseMessaging: FirebaseMessaging,
        private notificaciones: ServicioNotificaciones ){

    }
    initFCM(){
        if (this.utiles.isAppOnDevice()) {
            //native
            this.firebaseMessaging.requestPermission({forceShow: true}).then(()=>{
                console.log('push permitido');
            })
            //pasaremos apn-string
            this.firebaseMessaging.getToken().then((token)=>{
                console.log('token native ' + token);
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
                //primer plano
                this.firebaseMessaging.onMessage().subscribe((payload:any)=>{
                   console.log(payload);
                });
                this.firebaseMessaging.onBackgroundMessage().subscribe((payload:any)=>{
                    console.log(payload);
                })
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