import { Component } from '@angular/core';

import { Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
//componente para dejar la app en backgroud
import { BackgroundMode } from '@ionic-native/background-mode/ngx';
import { environment } from 'src/environments/environment';
//servicio de notificaciones para prueba
import { ServicioNotificaciones } from '../app/services/ServicioNotificaciones';
import { ServicioUtiles } from '../app/services/ServicioUtiles';
import { ServicioFirebase } from '../app/services/ServicioFirebase';
import { ServicioFCM } from '../app/services/ServicioFCM';
import { Appointment } from '../app/models/Appointment';
import { AngularFireMessaging } from '@angular/fire/messaging';
import { mergeMapTo } from 'rxjs/operators';

declare var window;

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss']
})
export class AppComponent {
  intervalo;
  arr;
  appointment: Appointment;
  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar,
    public notificacion: ServicioNotificaciones,
    public backgroundMode: BackgroundMode,
    public utiles: ServicioUtiles,
    public firebase: ServicioFirebase,
    public fcmService: ServicioFCM,
    private firebaseMessaging: AngularFireMessaging,
  ) {
    this.initializeApp();
  }
  //mirar background geolocation
  //https://github.com/mauron85/cordova-plugin-background-geolocation

  initializeApp() {
    this.platform.ready().then(async () => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
      this.notificacion.buscarCitas();
      await this.utiles.obtenerParametrosApp(environment.production);
      this.fcmService.initFCM();
      this.fcmService.receiveMessage(true);
      //prueba de guardado en firebase
/*       this.appointment = new Appointment();
      this.appointment.email = 'vcoronado.alarcon@gmail.com';
      this.appointment.idDispositivo = this.utiles.entregaIdDispositivo();
      this.appointment.mobile = 940178391;
      this.appointment.name = 'Victor coronado';
      this.appointment.run = '12343'; */
/*       this.firebase.createAppointment(this.appointment).then((response: any)=>{
        console.log(response);
      }) */

/*       this.firebase.getAppointmentList().valueChanges().subscribe((res:any)=>{
        console.log(res.filter(p=>p.run = '12343'));
        var obj = res.filter(p=>p.run = '12343');
        this.notificacion.crearNotificacion(obj[0].idDispositivo, obj[0].name, 'prueba de mensaje push ' + obj[0].email);
      }) */
/*       this.firebaseMessaging.requestPermission
        .pipe(mergeMapTo(this.firebaseMessaging.tokenChanges))
        .subscribe(
          (token) => { console.log('Permission granted!    Token:', token); },
          (error) => { console.error(error); },
        ); */
/*       this.firebaseMessaging.messages.subscribe(
        (message) => {
          console.log('Message received:', message);
        },
        (error) => { console.log("failed to subscribe to firebase messaging") }
      ); */
    

    });
    
  }
}
