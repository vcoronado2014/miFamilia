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

  ) {
    this.initializeApp();
  }
  //mirar background geolocation
  //https://github.com/mauron85/cordova-plugin-background-geolocation

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
      //seguimos intentando
      if (this.utiles.isAppOnDevice()) {
        //lo comentamos por mientras ya que aparece cierre inesperado.
        //this.backgroundMode.enable();
        //this.backgroundMode.disableWebViewOptimizations();
        this.notificacion.buscarCitas();
/*         setInterval(() => {
          //aca la logica para sacar las citas
          this.notificacion.buscarCitas();
        }, environment.TIEMPO_CONSULTA_NOTIFICACIONES); */


      }
      //comentamos esto porque no sirvió

/*       this.backgroudGeolocation.configure(config).then(()=>{
        this.backgroudGeolocation.on(BackgroundGeolocationEvents.location).subscribe((location: BackgroundGeolocationResponse)=>{
          var locationstr = localStorage.getItem("location");
          if (locationstr == null){
            this.arr.push(location);
          }
          else{
            var locationarr = JSON.parse(locationstr);
            this.arr = locationarr;
          }
          localStorage.setItem("location", JSON.stringify(this.arr));
          //aca vamos a hacer el llamado
          this.notificacion.buscarCitas();
        })
      })
      window.app = this; */

      //en backgroud
/*       if (this.utiles.isAppOnDevice()) {

        this.backgroundMode.enable();
        this.backgroundMode.disableWebViewOptimizations();
        setInterval(() => {
          //aca la logica para sacar las citas
          this.notificacion.buscarCitas();
        }, environment.TIEMPO_CONSULTA_NOTIFICACIONES);

      } */
    });
  }
}
