import { Component, OnInit, ViewChild } from '@angular/core';
import { NavController, ToastController, Platform, ModalController, LoadingController, MenuController, IonItem } from '@ionic/angular';
//parametros
import { ActivatedRoute, Router } from '@angular/router';
//SERVICIOS
import { ServicioUtiles } from '../../app/services/ServicioUtiles';
import { ServicioInfoUsuario } from '../../app/services/ServicioInfoUsuario';
import { ServicioAcceso } from '../../app/services/ServicioAcceso';
import { ServicioCitas } from '../../app/services/ServicioCitas';
import { environment } from 'src/environments/environment';
//moment
import * as moment from 'moment';
//modal
import { ModalDetalleCitaPage } from '../modal-detalle-cita/modal-detalle-cita.page';

@Component({
  selector: 'app-calendario',
  templateUrl: './calendario.page.html',
  styleUrls: ['./calendario.page.scss'],
})
export class CalendarioPage implements OnInit {
  miColor = '#FF4081';
  tiene = true;
  textColor = '#FFFFFF';
  //variables propias
  eventSource;
  public userData;
  public usuarioAps;
  public citas;
  public citasVertical;
  public citasVerticalMostrar;
  public calendarioData = [];
  public current;
  public calendarioTodo = [];
  public hoy;
  public diaSem;
  public meses;
  public anio;
  public icon;
  public imgEvento;
  public latAndLong;
  public titulo;
  public mesesVertical: any;
  public mesActualSeleccionado: any;
  @ViewChild('myList', {read: IonItem}) list: IonItem;
  constructor(
    public navCtrl: NavController,
    public toast: ToastController,
    public modalCtrl: ModalController,
    public platform: Platform,
    public menu:MenuController,
    public activatedRoute: ActivatedRoute,
    private router: Router,
    public utiles: ServicioUtiles,
    public loading: LoadingController,
    public info: ServicioInfoUsuario,
    public acceso: ServicioAcceso,
    public cita: ServicioCitas
  ) { }

  //DEBO EMPEZAR A TRABAJAR EN LA PAGINA DE DETALLE DE LOS EVENTOS,
  //OJO HAY VACUNAS CON FECHA PROXIMA 29-11-2020 Y NO VEO QUE APAREZCAN
  //CUANDO SELECCIONAS EL COMBO DE FECHA Y LUEGO VUELVES A SELECCIONAR 
  //UNA FECHA ANTERIOR POR EJEMPLO NO MUESTRA NADA
  
  ngOnInit() {
    moment().locale('es');
    this.miColor = this.utiles.entregaMiColor();
    if (sessionStorage.UsuarioAps) {
      this.usuarioAps = JSON.parse(sessionStorage.UsuarioAps);
      if (this.usuarioAps) {
        this.usuarioAps.UrlImagen = environment.URL_FOTOS + this.usuarioAps.UrlImagen;
      }
    }
    //mes seleccionado
    this.mesActualSeleccionado = moment().month() + 1 + ',' + moment().year();
    //this.mesActualSeleccionado = moment().month() + 1;
    console.log('formato de mes seleccionado ===> ' + this.mesActualSeleccionado);
    //revisar estos parametros ya que estan en el otro codigo en el oninit
    let diasSemana = new Array("domingo", "lunes", "martes", "miércoles", "jueves", "viernes", "sábado");
    let meses = new Array("enero", "febrero", "marzo", "abril", "mayo", "junio", "julio", "agosto", "septiembre", "octubre", "noviembre", "diciembre");
    this.diaSem = diasSemana[new Date().getDay()];
    this.hoy = new Date().getDate();
    this.meses = meses[new Date().getMonth()];
    this.anio = new Date().getFullYear();
    //estos parametros estan en el ready
    //lamada para citas vertical
    var annoActual = moment().year();
    
    var mesActual = moment().month() + 1;
    //var mesActual = this.mesActualSeleccionado;
    console.log(mesActual);
    //***************************** */
    this.tratamientoMeses();
    this.cargarEventosMes(mesActual, annoActual);

  }
  logout(){
    this.acceso.logout();
    this.navCtrl.navigateRoot('login');
  }
  async mesSelected(item){
    //realizar la llamada para cargar los eventos del mes
    console.log(item.detail.value);
    var arr = item.detail.value.split(',');
    if (arr){
      if (arr.length == 2){
        var mes = arr[0];
        var anno = arr[1];
        // setear this.mesActualSeleccionado al mes seleccionado de lo contrario simpre sera el mes actual
        //this.mesActualSeleccionado = mes;
        this.mesActualSeleccionado = item.detail.value;
        let loader = await this.loading.create({
          message: 'Obteniendo...<br>Información del usuario',
          duration: 20000
        });
    
        await loader.present().then(async () => {
          if(!this.utiles.isAppOnDevice()){
            //llamada web
            this.cargarDatosWeb(mes, anno, loader);
          }
          else {
            //llamada nativa
            this.cargarDatosNative(mes, anno, loader);
          }
        });

      }
    }
         
  }
  procesarArregloCitas(){
    var contador = 0;
    for (var s in this.citasVertical) {
      for (var t in this.citasVertical[s].Eventos) {
        var fechaHora = (this.citasVertical[s].Eventos[t].DetalleEventoMes.FechaHora);
        var fechaEvento = moment(fechaHora, 'YYYY-MM-DD').toDate();
        var fechaHoy = moment().toDate();

        console.log('Evento: ' + fechaEvento);
        console.log('Hoy:' + fechaHoy);
        contador++;

        if (this.citasVertical[s].Eventos[t]) {

          if (this.citasVertical[s].Eventos[t].DetalleEventoMes.Subtitulo == 'Próxima Cita') {
            this.citasVertical[s].Eventos[t].Imagen = 'cita.png';
            this.citasVertical[s].Eventos[t].DetalleEventoMes.Titulo = 'Cita programada';
          }
          if (this.citasVertical[s].Eventos[t].DetalleEventoMes.Subtitulo == 'Atención Realizada') {
            this.citasVertical[s].Eventos[t].Imagen = 'diagnostico.png';
            this.citasVertical[s].Eventos[t].DetalleEventoMes.Titulo = 'Atención Realizada';
          }
          if (this.citasVertical[s].Eventos[t].DetalleEventoMes.Subtitulo == 'Fármaco en uso') {
            this.citasVertical[s].Eventos[t].Imagen = 'farmaco_uso.png';
            this.citasVertical[s].Eventos[t].DetalleEventoMes.Titulo = 'Fármaco en uso';
          }
          if (this.citasVertical[s].Eventos[t].DetalleEventoMes.Subtitulo == 'Fármaco Pendiente') {
            this.citasVertical[s].Eventos[t].Imagen = 'farmaco_pendiente.png';
            this.citasVertical[s].Eventos[t].DetalleEventoMes.Titulo = 'Fármaco en uso';

          }
          if (this.citasVertical[s].Eventos[t].DetalleEventoMes.Subtitulo == 'Alimento Entregado') {
            this.citasVertical[s].Eventos[t].Imagen = 'alimento.png';
            this.citasVertical[s].Eventos[t].DetalleEventoMes.Titulo = 'Entrega de alimento';
          }
          if (this.citasVertical[s].Eventos[t].DetalleEventoMes.Subtitulo == 'Vacuna Administrada') {
            this.citasVertical[s].Eventos[t].Imagen = 'inmunizacion.png';
            this.citasVertical[s].Eventos[t].DetalleEventoMes.Titulo = 'Inmunización';
          }
          if (this.citasVertical[s].Eventos[t].DetalleEventoMes.Subtitulo == 'Vacuna por administrar') {
            this.citasVertical[s].Eventos[t].Imagen = 'inmunizacion.png';
            this.citasVertical[s].Eventos[t].DetalleEventoMes.Titulo = 'Vacuna';
          }
        }
        if (fechaEvento < fechaHoy && this.citasVertical[s].Eventos[t].DetalleEventoMes.Titulo == 'Entrega de alimento') {
          this.citasVertical[s].Eventos[t].DetalleEventoMes.Titulo = 'Alimento entregado';
          console.log(this.citasVertical[s].Eventos[t].DetalleEventoMes);
        }
        if (fechaEvento < fechaHoy && this.citasVertical[s].Eventos[t].DetalleEventoMes.Titulo == 'Entrega de fármaco') {
          this.citasVertical[s].Eventos[t].DetalleEventoMes.Titulo = 'Fármaco entregado'
        }
        if (fechaEvento < fechaHoy && this.citasVertical[s].Eventos[t].DetalleEventoMes.Titulo == 'Inmunización') {
          this.citasVertical[s].Eventos[t].DetalleEventoMes.Titulo = 'Vacuna administrada'
        }
        if (fechaEvento < fechaHoy && this.citasVertical[s].Eventos[t].DetalleEventoMes.Titulo == 'Vacuna') {
          this.citasVertical[s].Eventos[t].DetalleEventoMes.Titulo = 'Vacuna por administrar'
        }

      }
    }
    //para determinar si tiene o no eventos
    if (contador == 0){
      this.tiene = false;
    }
    else{
      this.tiene = true;
    }
  }
  cargarDatosNative(mesConsultar, annoConsultar, loader){
    this.cita.entregaPorMesNative(this.usuarioAps.Id, this.usuarioAps.IdRyf, this.usuarioAps.NodId, mesConsultar, annoConsultar).then(async (response: any)=>{
      //this.procesarIndicadorValor(response, loader);
      this.citasVertical = JSON.parse(response.data);
      this.citasVerticalMostrar =this.citasVertical.filter( e => e.Mostrar == true );
      //aqui procesa citasVertical
      this.procesarArregloCitas();
      //terminamos el loader
      loader.dismiss();
      //ahora traeremos la información adicional
      let loader1 = await this.loading.create({
        message: 'Obteniendo...<br>Información del usuario',
        duration: 20000
      });
      await loader1.present().then(async () => {
        this.cita.getDiagnosticosByUspIdNative(this.usuarioAps.Id);
        this.citas = this.cita.arregloGeneral;
        this.eventSource = this.createEventsCalendario();
        loader1.dismiss();
      });
    });
  }
  cargarDatosWeb(mesConsultar, annoConsultar, loader){
    this.cita.entregaPorMes(this.usuarioAps.Id, this.usuarioAps.IdRyf, this.usuarioAps.NodId, mesConsultar, annoConsultar).subscribe(async (response: any)=>{
      //this.procesarIndicadorValor(response, loader);
      this.citasVertical = response;
      this.citasVerticalMostrar =this.citasVertical.filter( e => e.Mostrar == true );
      //aqui procesa citasVertical
      this.procesarArregloCitas();
      //terminamos el loader
      loader.dismiss();
      //ahora traeremos la información adicional
      let loader1 = await this.loading.create({
        message: 'Obteniendo...<br>Información del usuario',
        duration: 20000
      });
      await loader1.present().then(async () => {
        this.cita.getDiagnosticosByUspId(this.usuarioAps.Id);
        this.citas = this.cita.arregloGeneral;
        this.eventSource = this.createEventsCalendario();
        loader1.dismiss();
      });
    });
  }
  async cargarEventosMes(mesConsultar, annoConsultar){
    let loader = await this.loading.create({
      message: 'Obteniendo...<br>Información del usuario',
      duration: 20000
    });

    await loader.present().then(async () => {
      if (!this.utiles.isAppOnDevice()) {
        //llamada web
        this.cargarDatosWeb(mesConsultar, annoConsultar, loader);
      }
      else{
        //llamada nativa
        this.cargarDatosNative(mesConsultar, annoConsultar, loader);
      }
    });

  }
  
  tratamientoMeses(){
    this.mesesVertical = [];
    moment.locale('es-es');
    var fechaActual = moment();
    var fechaMenosUnMes = moment().subtract(1, 'month');
    var fechaMasUnMes = moment().add(1, 'month');

    var mesActualNumero = moment(fechaActual).month() + 1;
    var mesMenosUnMesNumero = moment(fechaMenosUnMes).month() + 1;
    var mesMasUnMesNumero = moment(fechaMasUnMes).month() + 1;
    
    var mesActualStr = moment(fechaActual).format("MMMM").toUpperCase();
    var mesMenosUnMesStr = moment(fechaMenosUnMes).format("MMMM").toUpperCase();
    var mesMasUnMesStr = moment(fechaMasUnMes).format("MMMM").toUpperCase();

    var annoActual = moment(fechaActual).format("YYYY");
    var annoMenosUnMes = moment(fechaMenosUnMes).format("YYYY");
    var annoMasUnMes = moment(fechaMasUnMes).format("YYYY");

    //ahora tenemos los años, meses podemos construir el arreglo.
    var entidadActual = { mesNumero: mesActualNumero + ',' + annoActual, mesTexto: mesActualStr, anno: annoActual };
    var entidadMenos = { mesNumero: mesMenosUnMesNumero+ ',' + annoMenosUnMes, mesTexto: mesMenosUnMesStr, anno: annoMenosUnMes };
    var entidadMas = { mesNumero: mesMasUnMesNumero+ ',' + annoMasUnMes, mesTexto: mesMasUnMesStr, anno: annoMasUnMes };

    //agregamos los elementos al arreglo
    this.mesesVertical.push(entidadMenos);
    this.mesesVertical.push(entidadActual);
    this.mesesVertical.push(entidadMas);

    console.log(this.mesesVertical);
  }
  createEventsCalendario(){
    this.calendarioData = this.citas;
    return this.calendarioData;
  }
  async goToDetalleCita(evento){
    //this.list.closeSlidingItems();
    //this.navCtrl.push(DetailCitasPage, {evento:evento, usuario: this.usuarioAps});
    const modal = await this.modalCtrl.create(
      {
        component: ModalDetalleCitaPage,
        componentProps: {
          'evento': JSON.stringify(evento),
          'usuario': JSON.stringify(this.usuarioAps)
        }
      }
    );
    return await modal.present();
  }

}
