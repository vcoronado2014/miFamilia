import { Component, OnInit } from '@angular/core';
import { ModalController, NavParams, NavController, ToastController, Platform,  LoadingController, MenuController, AlertController } from '@ionic/angular';
//SERVICIOS
import { ServicioUtiles } from '../../app/services/ServicioUtiles';
import { ServicioLaboratorio } from '../../app/services/ServicioLaboratorio';
import { ServicioCitas } from '../../app/services/ServicioCitas';
import { environment } from 'src/environments/environment';
//moment
import * as moment from 'moment';
//pipe
import { SplitPipe } from '../../app/pipes/split.pipe';

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
  public cita = {
    IdCita: 0,
    IdPaciente: '',
    Estado:''
  };
  botonReservar = {
    Titulo: 'RESERVAR',
    Visible: false,
    Operacion: 'booked',
    Color: 'primary',
    Alert: '¿Está seguro de reservar la cita?'
  }
  botonConfirmar = {
    Titulo: 'CONFIRMAR',
    Visible: false,
    Operacion: 'confirmed',
    Color: 'primary',
    Alert: '¿Está seguro de confirmar la cita?'
  }
  botonCancelar = {
    Titulo: 'ANULAR',
    Visible: false,
    Operacion: 'cancelled',
    Color: 'danger',
    Alert: '¿Está seguro de anular la cita?'
  }
  titulo;
  //para mostrar el avatar
  miImagen;
  miNombre;
  miParentezco;

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
    private alertController: AlertController,
    private agendar:ServicioCitas,
  ) { }

  //QUEDE ACA POR MIENTRARS, ESTOY TRABAJANDO EN LOS ESTILOS
  ngOnInit() {
    moment.locale('es');
    this.loadInicio();
  }
  loadInicio() {
    //this.miColor = this.utiles.entregaMiColor();

    this.data = JSON.parse(this.navParams.get('evento'));
    console.log(this.data);

    this.farmacos = this.data.ListaFarmacos;
    console.log(this.farmacos);

    this.dosis = "";
    this.usuarioAps = JSON.parse(this.navParams.get('usuario'));
    this.miColor = this.utiles.entregaColor(this.usuarioAps);
    //parametros para avatar
    //primero determinamoos si es el mismo usuario o no
    //usuarioAps es el logueado
    var nombreCompletoUsuario = this.usuarioAps.Nombres + ' ' + this.usuarioAps.ApellidoPaterno + ' ' + this.usuarioAps.ApellidoMaterno;
    
    if (nombreCompletoUsuario == this.data.DetalleEventoMes.NombrePaciente){
      //el el mismo
      this.miNombre = nombreCompletoUsuario;
      this.miImagen = this.usuarioAps.UrlImagen;
      this.miParentezco = "Yo";
    }
    else{
      this.miNombre = this.data.DetalleEventoMes.NombrePaciente;
      //this.miImagen = this.utiles.entregaImagen(this.usuarioAps);
      if (sessionStorage.getItem('UsuariosFamilia')){
        var usuariosFamilia = JSON.parse(sessionStorage.getItem('UsuariosFamilia'));
        if (usuariosFamilia && usuariosFamilia.length > 0){
          usuariosFamilia.forEach(usu => {
            if (usu.Nombres + ' ' + usu.ApellidoPaterno + ' ' + usu.ApellidoMaterno == this.data.DetalleEventoMes.NombrePaciente){
              this.miImagen = this.utiles.entregaImagen(usu);
            }
          });
        }
      }
      
      this.miParentezco = "No informado";
    } 

    var prev = (this.data.DetalleEventoMes.DescripcionPrincipal).split('-');
    var posologia = prev[1];
    if (this.data) {
      if (this.data.DetalleEventoMes) {
        this.tituloSuperior = this.data.DetalleEventoMes.Titulo;
      }
    }
    if (this.data) {
      if (this.data.DetalleEventoMes.Subtitulo == 'Próxima Cita' || this.data.DetalleEventoMes.Subtitulo == 'Próxima Cita Web') {
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
    //esto hacemos para obtener los datos de la cita y del paciente
    if (this.data.DetalleEventoMes.Subtitulo == 'Próxima Cita Web' && this.data.DetalleEventoMes.Estado != ''){
      this.cita.IdCita = this.data.DetalleEventoMes.IdElemento;
      this.cita.IdPaciente = this.usuarioAps.Rut;
      this.cita.Estado = this.data.DetalleEventoMes.Estado;
      if (this.cita.Estado == 'proposed'){
        this.titulo = 'Reserva de horas';
        this.botonReservar.Visible = true;
        this.botonCancelar.Visible = false;
        this.botonConfirmar.Visible = false;
      }
      else if (this.cita.Estado == 'booked'){
        //si esta booked se puede confirmar
        this.titulo = 'Confirmar/Anular hora';
        this.botonReservar.Visible = false;
        this.botonCancelar.Visible = true;
        this.botonConfirmar.Visible = true;
      }
      else if (this.cita.Estado == 'confirmed'){
        //si esta booked se puede confirmar
        this.titulo = 'Anular hora';
        this.botonReservar.Visible = false;
        this.botonCancelar.Visible = true;
        this.botonConfirmar.Visible = false;
      }
      else{
        this.titulo = 'No Cita';
        this.botonReservar.Visible = false;
        this.botonCancelar.Visible = false;
        this.botonConfirmar.Visible = false;
        
      }
      console.log(this.cita);
      console.log(this.cita);
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
      case "Cita programada web":
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
  split(input: string, sep: string, inx: number){
    var pi = new SplitPipe();
    return pi.transform(input, sep, inx);
  }
  async presentAlertConfirm(boton) {
    var titulo = '';

    const alert = await this.alertController.create({
      header: boton.Titulo,
      message: boton.Alert,
      buttons: [
        {
          text: 'No',
          role: 'cancel',
          cssClass: 'danger',
          handler: (blah) => {
            console.log('Confirm Cancel: blah');
          }
        }, {
          text: 'Si',
          cssClass: 'success',
          handler: () => {
            //aca debemos realizar la operación
            this.accionCita(boton);
            //console.log('Confirm Okay');
          }
        }
      ]
    });

    await alert.present();
  }
  async accionCita(boton){
    var idPaciente = this.cita.IdPaciente;
    var idCita = this.cita.IdCita;
    var accion = boton.Operacion;

    let loader = await this.loading.create({
      message: 'Procesado...<br>Información',
      duration: 20000
    });

    await loader.present().then(async () => {
      var retorno = null;
      if (!this.utiles.isAppOnDevice()) {
        //llamada web
        this.agendar.getOperacionCita(idCita, idPaciente, accion).subscribe((response: any)=>{
          this.procesarRespuesta(response, loader, accion);
        })
      }
      else{
        //llamada nativa
        //this.cargarDatosNative(mesConsultar, annoConsultar, loader);
        this.agendar.getOperacionCitaNative(idCita, idPaciente, accion).then((responseData: any)=>{
          var response = JSON.parse(responseData.data);
          this.procesarRespuesta(response, loader, accion);
        })
      }
    });
  }
  procesarRespuesta(data, loader, accion){
    var retorno = null;
    if (data && data.Mensaje){
      if (data.Mensaje.Codigo == 'correcto'){
        //todo bien
        //this.utiles.presentToast('Operación realizada con éxito', 'middle', 2000);
        retorno = data;
      }
      else{
        this.utiles.presentToast(data.Mensaje.Detalle.Texto, 'middle', 2000);
      }
    }
    else{
      //error en la operacion
      this.utiles.presentToast('Error en la operación', 'middle', 2000);
    }
    loader.dismiss();
    //ACA SE DEBE ACTUALIZAR LA PAGINA DE AGENDA DISPONIBLE.
    this.modalCtrl.dismiss(
      {
        retorno: retorno,
        accion: accion
      }
    );
  }

}