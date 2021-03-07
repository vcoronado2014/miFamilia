import { Injectable } from '@angular/core';
import { Platform, ToastController } from '@ionic/angular';
import { AppVersion } from '@ionic-native/app-version/ngx';
import { Device } from '@ionic-native/device/ngx';
import * as moment from 'moment';
import { environment } from '../../environments/environment';
import { Appointment } from '../models/Appointment'
import { AngularFireDatabase, AngularFireList, AngularFireObject  } from '@angular/fire/database'

@Injectable()
export class ServicioFirebase{

    appointmentListRef: AngularFireList<any>;
    appointmentRef: AngularFireObject<any>;

    constructor(
        public platform : Platform,
        public appVersion: AppVersion,
        public toast: ToastController,
        public device: Device,
        public db: AngularFireDatabase
    ){
      //inicializamos los valores
      moment.locale('es');
      //this.ref = this.dataBfirebase.database().ref('mensajes/');

  
    }
    //create
    createAppointment(apt: Appointment) {
        //return this.appointmentListRef.push({
        this.appointmentListRef = this.db.list('/appointment');
        return this.appointmentListRef.push({
          name: apt.name,
          email: apt.email,
          mobile: apt.mobile,
          idDispositivo: apt.idDispositivo,
          run: apt.run
        })
    }
     // Get Single
    getAppointment(id: string) {
        this.appointmentRef = this.db.object('/appointment/' + id);
        return this.appointmentRef;
    }
    // Get List
    getAppointmentList() {
        this.appointmentListRef = this.db.list('/appointment');
        return this.appointmentListRef;
    }
    // Update
    updateAppointment(id, apt: Appointment) {
        return this.appointmentRef.update({
            name: apt.name,
            email: apt.email,
            mobile: apt.mobile,
            idDispositivo: apt.idDispositivo,
            run: apt.run
        })
    }
    // Delete
    deleteAppointment(id: string) {
        this.appointmentRef = this.db.object('/appointment/' + id);
        this.appointmentRef.remove();
    }

}
