import { Injectable } from '@angular/core';
import { Platform, ToastController } from '@ionic/angular';
import { AppVersion } from '@ionic-native/app-version/ngx';
import * as moment from 'moment';
import { environment } from '../../environments/environment';
//notificaciones locales
import { ELocalNotificationTriggerUnit, LocalNotifications } from '@ionic-native/local-notifications/ngx';
//utiles
import { ServicioUtiles } from '../../app/services/ServicioUtiles';
//citas
import { ServicioCitas } from '../../app/services/ServicioCitas';

@Injectable()
export class ServicioNotificaciones{
    citasArr = [];

    constructor(
        public platform : Platform,
        public appVersion: AppVersion,
        public toast: ToastController,
        private localNotifications: LocalNotifications,
        private utiles: ServicioUtiles,
        private citas : ServicioCitas,
    ){
      //inicializamos los valores
      moment.locale('es');
  
    }
    lanzarNotificacionPrueba(){
        if (this.utiles.isAppOnDevice()){
            this.localNotifications.schedule(
                {
                    id: 1,
                    title: 'Titulo prueba',
                    text: 'Notificación simple'
                }
            )
        }

    }
    crearNotificacion(id, titulo, texto){
        if (this.utiles.isAppOnDevice()){
            this.localNotifications.schedule(
                {
                    id: id,
                    title: titulo,
                    text: texto,
                    trigger: { in: 1, unit: ELocalNotificationTriggerUnit.MINUTE },
                    foreground: true,
                }
            )
        }
    }
    notificacionCita(accion, data){
        if (this.utiles.isAppOnDevice()){
            
            if (accion === 'booked'){
                //this.utiles.presentToast('Cita reservada con éxito!!', 'bottom', 3000);
                
                console.log(data);
              }
              else if (accion === 'confirmed'){
                //this.utiles.presentToast('Cita confirmada con éxito!!', 'bottom', 3000);
                console.log(data);
              }
              else if (accion === 'cancelled'){
                //this.utiles.presentToast('Cita anulada con éxito!!', 'bottom', 3000);
                console.log(data);
              }
        }
    }
    buscarCitas(){
        var usuario = null;
        if (localStorage.getItem('UsuarioAps')){
            usuario = JSON.parse(localStorage.getItem('UsuarioAps'));
        }
        this.citasArr = [];
        var fechaActual = moment();
        var mesActual = {
          mes: fechaActual.month() + 1,
          anno: fechaActual.year()
        };
        if (usuario != null){
           this.citas.entregaPorMesNuevoNative(usuario.Id, usuario.IdRyf, usuario.NodId, mesActual.mes, mesActual.anno).then((response:any)=>{
               //aca debemos procesar las citas
               var todas = JSON.parse(response.data);
               //aplicamos el primer filtro
               var nuevas = todas.filter( e => e.Mostrar == true );
               var fechaActual = moment().format("DD-MM-YYYY");
               var fechaManana = moment().add(1, 'day').format("DD-MM-YYYY");
               var total = nuevas.filter(e=> moment(e.FechaCompleta).format("DD-MM-YYYY") == fechaActual || moment(e.FechaCompleta).format("DD-MM-YYYY") == fechaManana);
               if (total && total.length > 0){
                 //por cada uno de estos debemos hacer un mensaje
                 for(var i=0; i < total.length; i++){
                     var fecha = moment(total[i].Eventos[0].DetalleEventoMes.FechaHora).format("DD-MM-YYYY");
                     var hora = total[i].Eventos[0].HoraInicioFin; 
                     var lugar = total[i].Eventos[0].DetalleEventoMes.Lugar;
                     var id = total[i].Eventos[0].DetalleEventoMes.IdElemento;
                     var titulo = total[i].Eventos[0].DetalleEventoMes.Titulo;
                     var texto = fecha + ' ' + hora + '\n' + total[i].Eventos[0].DetalleEventoMes.DescripcionPrincipal + '\n' + total[i].Eventos[0].DetalleEventoMes.DescripcionSecundaria + '\n' + lugar;
                     //var texto = total[i].Eventos[0].DetalleEventoMes.DescripcionPrincipal + ", " + total[i].Eventos[0].DetalleEventoMes.DescripcionSecundaria;
                    this.crearNotificacion(id, titulo, texto);
                 }
               }

               console.log(this.citasArr[0]);
           })
        }
    }

}