import { Component, OnInit } from '@angular/core';
import { ModalController, NavParams, NavController, ToastController, Platform,  LoadingController, MenuController } from '@ionic/angular';
//SERVICIOS
import { ServicioUtiles } from '../../app/services/ServicioUtiles';
import { ServicioLaboratorio } from '../../app/services/ServicioLaboratorio';
import { environment } from 'src/environments/environment';
//moment
import * as moment from 'moment';

@Component({
  selector: 'app-modal-detalle-cita',
  templateUrl: './modal-detalle-cita.page.html',
  styleUrls: ['./modal-detalle-cita.page.scss'],
})
export class ModalDetalleCitaPage implements OnInit {
  //color
  miColor = '#FF4081';
  public data;
  public tituloSuperior;
  public iconCita;
  public usuarioAps;
  public farmacos:any[];
  public medic;
  public dosis;
  public far;
  public title;
  public profesional;
  public prescripcion;
  redClassBool:boolean;

  constructor(
    public modalCtrl: ModalController,
    public navParams: NavParams,
    public utiles: ServicioUtiles,
    public navCtrl: NavController,
    public toast: ToastController,
    public platform: Platform,
    public menu:MenuController,
    public loading: LoadingController,
    private lab: ServicioLaboratorio,
  ) { }

  ngOnInit() {
    moment.locale('es');
    this.loadInicio();
  }
  loadInicio() {
    this.miColor = this.utiles.entregaMiColor();

    this.data = JSON.parse(this.navParams.get('evento'));
    console.log(this.data);

    this.farmacos = this.data.ListaFarmacos;
    console.log(this.farmacos);

    this.dosis = "";
    this.usuarioAps = JSON.parse(this.navParams.get('usuario'));
    var prev = (this.data.DetalleEventoMes.DescripcionPrincipal).split('-');
    var posologia = prev[1];
    if (this.data) {
      if (this.data.DetalleEventoMes) {
        this.tituloSuperior = this.data.DetalleEventoMes.Titulo;
      }
    }
    if (this.data) {
      if (this.data.DetalleEventoMes.Subtitulo == 'Próxima Cita') {
        this.data.Imagen = "cita.png";
        this.profesional = this.data.DetalleEventoMes.DescripcionSecundaria;
      }
      if (this.data.DetalleEventoMes.Subtitulo == 'Atencion Realizada') {
        this.data.Imagen = "diagnostico.png";
      }
      if (this.data.DetalleEventoMes.Subtitulo == 'Fármaco en uso') {
        this.data.Imagen = "farmaco_uso.png";
      }
      if (this.data.DetalleEventoMes.Subtitulo == 'Fármaco Pendiente') {
        this.data.Imagen = "farmaco_pendiente.png";
      }
      if (this.data.DetalleEventoMes.Subtitulo == 'Alimento Entregado') {
        this.data.Imagen = "alimento.png";
      }
      if (this.data.DetalleEventoMes.Subtitulo == 'Vacuna Administrada') {
        this.data.Imagen = "inmunizacion.png";
      }
      //convertimos la fecha a formato correcto
      if (this.data.DetalleEventoMes.FechaHora){
        var fecha = moment(this.data.DetalleEventoMes.FechaHora).format("dddd DD MMMM YYYY, HH:mm");
        //console.log(fecha);
        this.data.DetalleEventoMes.FechaHora = fecha;
      }
    }
    if (this.data.DetalleEventoMes.Titulo == 'Entrega de fármaco') {
      this.data.DetalleEventoMes.DescripcionPrincipal = prev[1];
    }
    if (this.data.DetalleEventoMes.Titulo == 'Inmunización') {
      if (this.data.DetalleEventoMes.DescripcionSecundaria) {
        this.dosis = this.data.DetalleEventoMes.DescripcionSecundaria;
      }
    }
    if (this.data.DetalleEventoMes.Subtitulo == 'Fármaco en uso') {
      this.data.DetalleEventoMes.DescripcionPrincipal = this.data.DetalleEventoMes.DescripcionPrincipal
    }
    if (this.data.DetalleEventoMes.Subtitulo == 'Fármaco Pendiente') {
      this.data.DetalleEventoMes.DescripcionPrincipal = this.data.NombreSecundario;
    }

    if (this.farmacos) {
      if (this.farmacos.length == 1) {
        this.title = "Prescripción";
      } else {

        this.title = "Prescripciones";
      }
    }
    //proceso de los iconos
    switch (this.data.DetalleEventoMes.Titulo) {
      case "Entrega de fármaco":
        return this.iconCita = "care-pill"
      case "Fármaco en uso":
        return this.iconCita = "care-pill"
      case "Fármaco entregado":
        return this.iconCita = "care-pill"
      case "Cita programada":
        return this.iconCita = "care-heartbeat"
      case "Atención Realizada":
        return this.iconCita = "care-heartbeat"
      case "Inmunización":
        return this.iconCita = "care-vaccine"
      case "Vacuna":
        return this.iconCita = "care-vaccine"
      case "Vacuna administrada":
        return this.iconCita = "care-vaccine"
      case "Alimento entregado":
        return this.iconCita = "care-coffee"
      case "Entrega de alimento":
        return this.iconCita = "care-coffee"
      default:
        this.iconCita;
        break;
    } 
  }
  dismiss() {
    this.modalCtrl.dismiss();
  }

}
