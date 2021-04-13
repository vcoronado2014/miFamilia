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
import { ServicioFCM } from '../app/services/ServicioFCM';

declare var window;

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss']
})
export class AppComponent {
  intervalo;
  arr;
  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar,
    public notificacion: ServicioNotificaciones,
    public backgroundMode: BackgroundMode,
    public utiles: ServicioUtiles,
    public fcmService: ServicioFCM,

  ) {
    this.initializeApp();
  }
  //mirar background geolocation
  //https://github.com/mauron85/cordova-plugin-background-geolocation

  initializeApp() {
    this.platform.ready().then(async () => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
      //this.notificacion.buscarCitas();
      this.notificacion.buscarCitasTodas();
      await this.utiles.obtenerParametrosApp(environment.production);
      this.fcmService.initFCM();
      this.fcmService.receiveMessage(true);
    });
  }
}
