import { Injectable } from '@angular/core';
import { Platform, ToastController } from '@ionic/angular';
import { AppVersion } from '@ionic-native/app-version/ngx';
import { Calendar } from '@ionic-native/calendar/ngx';
import * as moment from 'moment';
import { environment } from '../../environments/environment';
//notificaciones locales
import { ELocalNotificationTriggerUnit, LocalNotifications } from '@ionic-native/local-notifications/ngx';
//utiles
import { ServicioUtiles } from '../../app/services/ServicioUtiles';

@Injectable()
export class ServicioCalendario{

    constructor(
        public platform : Platform,
        public appVersion: AppVersion,
        public toast: ToastController,
        private localNotifications: LocalNotifications,
        private utiles: ServicioUtiles,
        private calendario: Calendar
    ){
      //inicializamos los valores
      moment.locale('es');
  
    }
    addEvent(titulo, ubicacion, notas, dateStart, dateEnd, id){
        if (this.utiles.AGREGA_EVENTO_CALENDARIO() == '1'){
            if (this.utiles.isAppOnDevice()) {
                let options={
                    calendarId: id,
                    firstReminderMinutes: 90
                };
                this.calendario.createEventWithOptions(titulo, ubicacion, notas, dateStart, dateEnd, options).then((data: any) => {
                    console.log(data);
                    this.utiles.presentToast('Se ha creado el evento en su calendario', 'bottom', 2000);
                }).catch((error) => {
                    console.log(error);
                })
            }
            else {
                this.utiles.presentToast("No disponible el calendario", "bottom", 2000);
            }
        }
    }
    removeEventId(id, startDate){
        if (this.utiles.AGREGA_EVENTO_CALENDARIO() == '1'){
            if (this.utiles.isAppOnDevice()) {
                this.calendario.deleteEventById(id, startDate).then((data)=>{
                    this.utiles.presentToast('Se ha quitado el evento en su calendario', 'bottom', 2000);
                })
            }
            else{
                this.utiles.presentToast("No disponible el calendario", "bottom", 2000);
            }
        }
    }
    removeEvent(titulo, ubicacion, notas, dateStart, dateEnd){
        if (this.utiles.AGREGA_EVENTO_CALENDARIO() == '1'){
            if (this.utiles.isAppOnDevice()) {
                this.calendario.deleteEvent(titulo, ubicacion, notas, dateStart, dateEnd).then((data)=>{
                    this.utiles.presentToast('Se ha quitado el evento en su calendario', 'bottom', 2000);
                })
            }
            else{
                this.utiles.presentToast("No disponible el calendario", "bottom", 2000);
            }
        }
    }

}