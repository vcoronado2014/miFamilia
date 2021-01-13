import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { HttpClientModule } from '@angular/common/http';
//nativos
import { AppVersion } from '@ionic-native/app-version/ngx'
import { Network } from '@ionic-native/network/ngx';
import { LocationAccuracy } from '@ionic-native/location-accuracy/ngx';
import { Geolocation } from '@ionic-native/geolocation/ngx';
import { HTTP } from '@ionic-native/http/ngx';
import { LaunchNavigator } from '@ionic-native/launch-navigator/ngx';
import { Device } from '@ionic-native/device/ngx';
import { InAppBrowser } from '@ionic-native/in-app-browser/ngx';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';

//Pipes
import { CelsiusPipe } from '../app/pipes/toCelsius.pipe';
import { SplitPipe } from '../app/pipes/split.pipe';
import { MomentPipe } from '../app/pipes/fecha.pipe';
import { FilterPipe } from '../app/pipes/filter.pipe';
//servicios
import { ServicioUtiles } from './services/ServicioUtiles';
import { ServicioGeo } from './services/ServicioGeo';
import { ServicioAcceso } from './services/ServicioAcceso';
import { ServicioInfoUsuario } from './services/ServicioInfoUsuario';
import { ServicioImagen } from './services/ServicioImagen';
import { ServicioLaboratorio } from './services/ServicioLaboratorio';
import { ServicioCitas } from './services/ServicioCitas';
import { ServicioPaginacion } from './services/ServicioPaginacion';
import { ServicioNotificaciones } from './services/ServicioNotificaciones';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
/** componentes material  */
import { MatCardModule  } from '@angular/material/card';
import { MatButtonModule  } from '@angular/material/button';
import { MatFormFieldModule  } from '@angular/material/form-field';
import { MatSelectModule  } from '@angular/material/select'
/* import { MatSelectModule  } from '@angular/material/select';
import { MatFormField  } from '@angular/material/form-field/form-field';
import { MatFormField  } from '@angular/material/form-field/label'; */
import { LocalNotifications } from '@ionic-native/local-notifications/ngx';
import { BackgroundMode } from '@ionic-native/background-mode/ngx';
/* import { BackgroundGeolocation } from '@ionic-native/background-geolocation/ngx'; */

@NgModule({
  declarations: [
    AppComponent,
    CelsiusPipe,
    SplitPipe,
    MomentPipe,
    FilterPipe,
  ],
  entryComponents: [],
  imports: [
    HttpClientModule,
    BrowserModule, 
    MatCardModule,
    MatButtonModule,
    MatFormFieldModule,
    MatSelectModule,
    IonicModule.forRoot(), 
    AppRoutingModule, BrowserAnimationsModule
  ],
  providers: [
    StatusBar,
    InAppBrowser,
    SplashScreen,
    AppVersion,
    Network,
    HTTP,
    Device,
    LocationAccuracy,
    Geolocation,
    ServicioUtiles,
    ServicioGeo,
    ServicioAcceso,
    ServicioInfoUsuario,
    ServicioImagen,
    ServicioLaboratorio,
    ServicioCitas,
    ServicioPaginacion,
    ServicioNotificaciones,
    LaunchNavigator,
    LocalNotifications,
    BackgroundMode,
   /*  BackgroundGeolocation, */
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
