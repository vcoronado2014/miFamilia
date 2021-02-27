import { Component, OnInit, ViewChild } from '@angular/core';
import { NavController, ToastController, Platform, ModalController, LoadingController, MenuController, IonItem, AlertController } from '@ionic/angular';
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
import { MomentPipe } from '../../app/pipes/fecha.pipe';

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
  public citasIntegracion = [];
  public citasVerticalTodas = [];
  //datos para consultar citas
  runPaciente = '';
  codigoDeis = '';
  serviceType = '349';
  nodId;
  //para el manejo de los botones en las citas
  botonReservar = {
    Titulo: 'RESERVAR',
    Visible: false,
    Operacion: 'booked',
    Color: 'primary',
    Alert: '¿Reservar cita?'
  }
  botonConfirmar = {
    Titulo: 'CONFIRMAR',
    Visible: false,
    Operacion: 'confirmed',
    Color: 'primary',
    Alert: '¿Confirmar la reserva de cita?'
  }
  botonCancelar = {
    Titulo: 'ANULAR',
    Visible: false,
    Operacion: 'cancelled',
    Color: 'danger',
    Alert: '¿Anular la reserva de cita?'
  }
  @ViewChild('myList', {read: IonItem}) list: IonItem;
  //para controlar el cargando
  estaCargando = false;
  //para infinity scroll
  private topLimit: number = 5;
  private citasVerticalTodasTop: any = [];
  
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
    public cita: ServicioCitas,
    private alertController: AlertController,
  ) { }

  //DEBO EMPEZAR A TRABAJAR EN LA PAGINA DE DETALLE DE LOS EVENTOS,
  //OJO HAY VACUNAS CON FECHA PROXIMA 29-11-2020 Y NO VEO QUE APAREZCAN
  //CUANDO SELECCIONAS EL COMBO DE FECHA Y LUEGO VUELVES A SELECCIONAR 
  //UNA FECHA ANTERIOR POR EJEMPLO NO MUESTRA NADA
  
  ngOnInit() {
    moment().locale('es');
    //this.miColor = this.utiles.entregaMiColor();
    if (sessionStorage.UsuarioAps) {
      this.usuarioAps = JSON.parse(sessionStorage.UsuarioAps);
      if (this.usuarioAps) {
        this.miColor = this.utiles.entregaColor(this.usuarioAps);
        this.usuarioAps.UrlImagen = environment.URL_FOTOS + this.usuarioAps.UrlImagen;
        this.runPaciente = this.utiles.insertarGuion(this.usuarioAps.Rut);
        this.codigoDeis = this.usuarioAps.ConfiguracionNodo.CodigoDeis2014;
        this.nodId = this.usuarioAps.ConfiguracionNodo.NodId;
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
    //omplementación antigua
    //this.cargarEventosMes(mesActual, annoActual);
    //this.buscarDisponibilidad(new Date());
    //implementacion nueva
    this.cargarTodosLosEventos();

  }
  private getTime(date?: Date) {
    return date != null ? new Date(date).getTime() : 0;
  }
/*   ordenarDesc = function(a, b){
    var fechaA = moment(a.FechaCompleta).format();
    var fechaB = moment(b.FechaCompleta).format();
    //console.log(convertirFe)
    //return b-a;
    return fechaA - fechaB;
  }; */
  async cargarTodosLosEventos(){
    //usar citasVerticalTodas
    this.citasVerticalTodas = [];
    this.citasVerticalMostrar = [];
    var fechaActual = moment();
    var fechaAnterior = moment().subtract(1, 'month');
    var fechaPosterior = moment().add(1, 'month');
    var mesAnterior = {
      mes: fechaAnterior.month() + 1,
      anno: fechaAnterior.year()
    };
    var mesActual = {
      mes: fechaActual.month() + 1,
      anno: fechaActual.year()
    };
    var mesPosterior = {
      mes: fechaPosterior.month() + 1,
      anno: fechaPosterior.year()
    };

    let loader = await this.loading.create({
      message: 'Obteniendo...<br>Información del usuario',
      duration: 20000
    });

    await loader.present().then(async () => {
      if (!this.utiles.isAppOnDevice()) {
        //llamada web
        this.cita.entregaPorMesNuevo(this.usuarioAps.Id, this.usuarioAps.IdRyf, this.usuarioAps.NodId, mesAnterior.mes, mesAnterior.anno).subscribe(async (response: any)=>{
          this.citasVerticalTodas = response;
          //segunda llamada
          this.cita.entregaPorMesNuevo(this.usuarioAps.Id, this.usuarioAps.IdRyf, this.usuarioAps.NodId, mesActual.mes, mesActual.anno).subscribe(async (responseDos: any)=>{
            this.citasVerticalTodas = this.citasVerticalTodas.concat(responseDos);
            //tercera llamada
            this.cita.entregaPorMesNuevo(this.usuarioAps.Id, this.usuarioAps.IdRyf, this.usuarioAps.NodId, mesPosterior.mes, mesPosterior.anno).subscribe(async (responseTres: any)=>{
              this.citasVerticalTodas = this.citasVerticalTodas.concat(responseTres);
              //pruebas
              //this.pruebaProcesar(this.citasVerticalTodas);
              //aca procedemos a procesarlos

              this.procesarArregloCitasTodas();
              this.citasVerticalMostrar = this.citasVerticalTodas.filter(e => e.Mostrar == true);
              //console.log(this.citasVerticalMostrar);
              //ahora que tenemos las citas que queremos mostrar
              //ordenamos
              this.citasVerticalMostrar.sort((a:any, b:any)=>{ return this.getTime(b.FechaCompleta) - this.getTime(a.FechaCompleta)});
              //guardamos la variable de ordenamiento
              sessionStorage.setItem('ORDEN_EVENTOS', 'descendente');
              //creamos top limit al nuevo arreglo de citas
              this.citasVerticalTodasTop = this.citasVerticalMostrar.slice(0, this.topLimit);
              console.log(this.citasVerticalTodasTop);
              loader.dismiss();
            });
          });
        });
      }
      else{
        //llamada nativa
        this.cita.entregaPorMesNuevoNative(this.usuarioAps.Id, this.usuarioAps.IdRyf, this.usuarioAps.NodId, mesAnterior.mes, mesAnterior.anno).then(async (response: any)=>{
          this.citasVerticalTodas = JSON.parse(response.data);
          //segunda llamada
          this.cita.entregaPorMesNuevoNative(this.usuarioAps.Id, this.usuarioAps.IdRyf, this.usuarioAps.NodId, mesActual.mes, mesActual.anno).then(async (responseDos: any)=>{
            var dataDos = JSON.parse(responseDos.data);
            this.citasVerticalTodas = this.citasVerticalTodas.concat(dataDos);
            //tercera llamada
            this.cita.entregaPorMesNuevoNative(this.usuarioAps.Id, this.usuarioAps.IdRyf, this.usuarioAps.NodId, mesPosterior.mes, mesPosterior.anno).then(async (responseTres: any)=>{
              var dataTres = JSON.parse(responseTres.data);
              this.citasVerticalTodas = this.citasVerticalTodas.concat(dataTres);
              //aca procesamos
              this.procesarArregloCitasTodas();
              this.citasVerticalMostrar = this.citasVerticalTodas.filter(e => e.Mostrar == true);
                            //ahora que tenemos las citas que queremos mostrar
              //ordenamos
              this.citasVerticalMostrar.sort((a:any, b:any)=>{ return this.getTime(b.FechaCompleta) - this.getTime(a.FechaCompleta)});
              //guardamos la variable de ordenamiento
              sessionStorage.setItem('ORDEN_EVENTOS', 'descendente');
              //creamos top limit al nuevo arreglo de citas
              this.citasVerticalTodasTop = this.citasVerticalMostrar.slice(0, this.topLimit);
              console.log(this.citasVerticalTodasTop);
              loader.dismiss();
            });
          });
        });
      }
    }); 

  }


  logout(){
    this.acceso.logout();
    this.navCtrl.navigateRoot('nuevo-login');
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
            //this.cargarDatosWeb(mes, anno, loader);
            this.cargarDatosWebN(mes, anno, loader);
          }
          else {
            //llamada nativa
            this.cargarDatosNativeN(mes, anno, loader);
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
            this.citasVertical[s].Eventos[t].Imagen = 'agendar_citas.png';
            this.citasVertical[s].Eventos[t].DetalleEventoMes.Titulo = 'Cita programada';
          }
          if (this.citasVertical[s].Eventos[t].DetalleEventoMes.Subtitulo == 'Próxima Cita Web') {
            this.citasVertical[s].Eventos[t].Imagen = 'agendar_citas.png';
            this.citasVertical[s].Eventos[t].DetalleEventoMes.Titulo = 'Cita programada web';
          }
          if (this.citasVertical[s].Eventos[t].DetalleEventoMes.Subtitulo == 'Atención Realizada') {
            this.citasVertical[s].Eventos[t].Imagen = 'atenciones.png';
            this.citasVertical[s].Eventos[t].DetalleEventoMes.Titulo = 'Atención Realizada';
          }
          if (this.citasVertical[s].Eventos[t].DetalleEventoMes.Subtitulo == 'Fármaco en uso') {
            this.citasVertical[s].Eventos[t].Imagen = 'retiro-de-medicamentos.png';
            this.citasVertical[s].Eventos[t].DetalleEventoMes.Titulo = 'Fármaco en uso';
          }
          if (this.citasVertical[s].Eventos[t].DetalleEventoMes.Subtitulo == 'Fármaco Pendiente') {
            this.citasVertical[s].Eventos[t].Imagen = 'retiro-de-medicamentos.png';
            this.citasVertical[s].Eventos[t].DetalleEventoMes.Titulo = 'Fármaco en uso';

          }
          if (this.citasVertical[s].Eventos[t].DetalleEventoMes.Subtitulo == 'Alimento Entregado') {
            this.citasVertical[s].Eventos[t].Imagen = 'retiro-de-alimentos.png';
            this.citasVertical[s].Eventos[t].DetalleEventoMes.Titulo = 'Entrega de alimento';
          }
          if (this.citasVertical[s].Eventos[t].DetalleEventoMes.Subtitulo == 'Vacuna Administrada') {
            this.citasVertical[s].Eventos[t].Imagen = 'vacunas.png';
            this.citasVertical[s].Eventos[t].DetalleEventoMes.Titulo = 'Inmunización';
          }
          if (this.citasVertical[s].Eventos[t].DetalleEventoMes.Subtitulo == 'Vacuna por administrar') {
            this.citasVertical[s].Eventos[t].Imagen = 'vacunas.png';
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
  procesarArregloCitasTodas(){
    var contador = 0;
    for (var s in this.citasVerticalTodas) {
      for (var t in this.citasVerticalTodas[s].Eventos) {
        var fechaHora = (this.citasVerticalTodas[s].Eventos[t].DetalleEventoMes.FechaHora);
        var fechaEvento = moment(fechaHora, 'YYYY-MM-DD').toDate();
        var fechaHoy = moment().toDate();

        console.log('Evento: ' + fechaEvento);
        console.log('Hoy:' + fechaHoy);
        contador++;

        if (this.citasVerticalTodas[s].Eventos[t]) {

          if (this.citasVerticalTodas[s].Eventos[t].DetalleEventoMes.Subtitulo == 'Próxima Cita') {
            this.citasVerticalTodas[s].Eventos[t].Imagen = 'agendar_citas.png';
            this.citasVerticalTodas[s].Eventos[t].DetalleEventoMes.Titulo = 'Cita programada';
          }
          if (this.citasVerticalTodas[s].Eventos[t].DetalleEventoMes.Subtitulo == 'Próxima Cita Web') {
            this.citasVerticalTodas[s].Eventos[t].Imagen = 'agendar_citas.png';
            this.citasVerticalTodas[s].Eventos[t].DetalleEventoMes.Titulo = 'Cita programada web';
          }
          if (this.citasVerticalTodas[s].Eventos[t].DetalleEventoMes.Subtitulo == 'Atención Realizada') {
            this.citasVerticalTodas[s].Eventos[t].Imagen = 'atenciones.png';
            this.citasVerticalTodas[s].Eventos[t].DetalleEventoMes.Titulo = 'Atención Realizada';
          }
          if (this.citasVerticalTodas[s].Eventos[t].DetalleEventoMes.Subtitulo == 'Fármaco en uso') {
            this.citasVerticalTodas[s].Eventos[t].Imagen = 'retiro-de-medicamentos.png';
            this.citasVerticalTodas[s].Eventos[t].DetalleEventoMes.Titulo = 'Fármaco en uso';
          }
          if (this.citasVerticalTodas[s].Eventos[t].DetalleEventoMes.Subtitulo == 'Fármaco Pendiente') {
            this.citasVerticalTodas[s].Eventos[t].Imagen = 'retiro-de-medicamentos.png';
            this.citasVerticalTodas[s].Eventos[t].DetalleEventoMes.Titulo = 'Fármaco en uso';

          }
          if (this.citasVerticalTodas[s].Eventos[t].DetalleEventoMes.Subtitulo == 'Alimento Entregado') {
            this.citasVerticalTodas[s].Eventos[t].Imagen = 'retiro-de-alimentos.png';
            this.citasVerticalTodas[s].Eventos[t].DetalleEventoMes.Titulo = 'Entrega de alimento';
          }
          if (this.citasVerticalTodas[s].Eventos[t].DetalleEventoMes.Subtitulo == 'Vacuna Administrada') {
            this.citasVerticalTodas[s].Eventos[t].Imagen = 'vacunas.png';
            this.citasVerticalTodas[s].Eventos[t].DetalleEventoMes.Titulo = 'Inmunización';
          }
          if (this.citasVerticalTodas[s].Eventos[t].DetalleEventoMes.Subtitulo == 'Vacuna por administrar') {
            this.citasVerticalTodas[s].Eventos[t].Imagen = 'vacunas.png';
            this.citasVerticalTodas[s].Eventos[t].DetalleEventoMes.Titulo = 'Vacuna';
          }
        }
        if (fechaEvento < fechaHoy && this.citasVerticalTodas[s].Eventos[t].DetalleEventoMes.Titulo == 'Entrega de alimento') {
          this.citasVerticalTodas[s].Eventos[t].DetalleEventoMes.Titulo = 'Alimento entregado';
          console.log(this.citasVerticalTodas[s].Eventos[t].DetalleEventoMes);
        }
        if (fechaEvento < fechaHoy && this.citasVerticalTodas[s].Eventos[t].DetalleEventoMes.Titulo == 'Entrega de fármaco') {
          this.citasVerticalTodas[s].Eventos[t].DetalleEventoMes.Titulo = 'Fármaco entregado'
        }
        if (fechaEvento < fechaHoy && this.citasVerticalTodas[s].Eventos[t].DetalleEventoMes.Titulo == 'Inmunización') {
          this.citasVerticalTodas[s].Eventos[t].DetalleEventoMes.Titulo = 'Vacuna administrada'
        }
        if (fechaEvento < fechaHoy && this.citasVerticalTodas[s].Eventos[t].DetalleEventoMes.Titulo == 'Vacuna') {
          this.citasVerticalTodas[s].Eventos[t].DetalleEventoMes.Titulo = 'Vacuna por administrar'
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
  //ordena los elementos de forma descende o ascendente
  ordenar(){
    if (sessionStorage.getItem('ORDEN_EVENTOS')){
      var orden = sessionStorage.getItem('ORDEN_EVENTOS');
      if (orden == 'descendente'){
        this.citasVerticalTodasTop.sort((a:any, b:any)=>{ return this.getTime(a.FechaCompleta) - this.getTime(b.FechaCompleta)});
        sessionStorage.setItem('ORDEN_EVENTOS', 'ascendente');
      }
      else{
        this.citasVerticalTodasTop.sort((a:any, b:any)=>{ return this.getTime(b.FechaCompleta) - this.getTime(a.FechaCompleta)});
        sessionStorage.setItem('ORDEN_EVENTOS', 'descendente');
      }
    }
    else{
      this.citasVerticalTodasTop.sort((a:any, b:any)=>{ return this.getTime(b.FechaCompleta) - this.getTime(a.FechaCompleta)});
      sessionStorage.setItem('ORDEN_EVENTOS', 'descendente');
    }
  }
  loadData(event) {
    setTimeout(() => {
      //console.log('Done');
      this.topLimit += 5;
      this.citasVerticalTodasTop = this.citasVerticalMostrar.slice(0, this.topLimit);
      event.target.complete();
      //aplicamos disabled si la cantidad de registros es la misma que el total
      if (this.citasVerticalTodasTop.length == this.citasVerticalMostrar.length){
        event.target.disabled = true;
      }

    }, 500);
  }
  cargarDatosNative(mesConsultar, annoConsultar, loader){
    //lo cambiamos para probar el nuevo metodo
    //this.cita.entregaPorMesNative(this.usuarioAps.Id, this.usuarioAps.IdRyf, this.usuarioAps.NodId, mesConsultar, annoConsultar).then(async (response: any)=>{
    this.cita.entregaPorMesNuevoNative(this.usuarioAps.Id, this.usuarioAps.IdRyf, this.usuarioAps.NodId, mesConsultar, annoConsultar).then(async (response: any)=>{
      //this.procesarIndicadorValor(response, loader);
      this.citasVertical = JSON.parse(response.data);
      this.citasVerticalMostrar =this.citasVertical.filter( e => e.Mostrar == true );
      //aqui procesa citasVertical
      this.procesarArregloCitas();
      this.estaCargando = false;
      //terminamos el loader
      loader.dismiss();
      //ESTA INFORMACION ES PARA LLENAR EVENTOS DEL TIPO CALENDARIO
      if (environment.USA_CALENDARIO) {
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
          this.estaCargando = false;
          console.log('esta cargando ' + this.estaCargando);
        });
      }
      //busca disponibilidad
      if (this.utiles.entregaParametroUsaAgenda()) {
        //en moment hay que quitar un digito al mes
        //var fechaInicio = moment([parseInt(annoConsultar), parseInt(mesConsultar)-1, 1]);
        var fechaD = new Date(parseInt(annoConsultar), parseInt(mesConsultar)-1, 1, 0, 1,0,0);
       

        var fechaInicio = moment(fechaD);
        var diasDelMes = fechaInicio.daysInMonth();
        var fechaT = new Date(parseInt(annoConsultar), parseInt(mesConsultar)-1, diasDelMes, 23, 59,0,0);
        var fechaTermino = moment(fechaT);

        let loaderDisp = await this.loading.create({
          message: 'Cargando...<br>disponibilidad',
          duration: 20000
        });

        this.cita.getDisponibilidadNative(fechaInicio.format(), fechaTermino.format(), this.codigoDeis, this.runPaciente, this.serviceType, '', '', 'cita', this.nodId).then((response: any) => {
          this.citasIntegracion = [];
          var respuesta = JSON.parse(response.data);
          if (respuesta && respuesta.Mensaje) {
            //correcto
            if (respuesta.Mensaje.Detalle.Codigo == 'MSG_CORRECTO') {
              //ya tiene citas tomadas, hay que enviarlo a otra pagina
              //la de buscarcitas
              this.citasIntegracion = respuesta.CitasDisponibles;
              //hay que reprocesar los elementos
              if (this.citasIntegracion.length > 0){
                var nombrePaciente = this.usuarioAps.Nombres + ' ' + this.usuarioAps.ApellidoPaterno + ' ' + this.usuarioAps.ApellidoMaterno;
                this.utiles.insertaCitasAEventos(this.citasIntegracion, this.citasVertical, nombrePaciente);
                //volvemos a reprocesar
                this.procesarArregloCitas();
              }

            }
          }
          this.estaCargando = false;
          console.log('esta cargando ' + this.estaCargando);
          loaderDisp.dismiss();
        });
      }

    });
  }
  cargarDatosNativeN(mesConsultar, annoConsultar, loader){
    //lo cambiamos para probar el nuevo metodo
    //this.cita.entregaPorMesNative(this.usuarioAps.Id, this.usuarioAps.IdRyf, this.usuarioAps.NodId, mesConsultar, annoConsultar).then(async (response: any)=>{
    this.cita.entregaPorMesNuevoNative(this.usuarioAps.Id, this.usuarioAps.IdRyf, this.usuarioAps.NodId, mesConsultar, annoConsultar).then(async (response: any)=>{
      let consultaMes = this.cita.entregaPorMesNuevoNative(this.usuarioAps.Id, this.usuarioAps.IdRyf, this.usuarioAps.NodId, mesConsultar, annoConsultar).then(async (response: any)=>{
        this.citasVertical = JSON.parse(response.data);
        this.citasVerticalMostrar = this.citasVertical.filter(e => e.Mostrar == true);
        //aqui procesa citasVertical
        this.procesarArregloCitas();
        loader.dismiss();
      });
    });
  }
  async cargarDatosWebN(mesConsultar, annoConsultar, loader){
    //ACA NO SE REALIZA LA CONSULTA A INETGRACIÓN PARA MOSTRAR O MEZCLAR LAS CITAS, YA QUE EL SP TRAE LA INFO DE LAS CITAS WEB
    let consultaMes = this.cita.entregaPorMesNuevo(this.usuarioAps.Id, this.usuarioAps.IdRyf, this.usuarioAps.NodId, mesConsultar, annoConsultar).subscribe(async (response: any)=>{
      this.citasVertical = response;
      this.citasVerticalMostrar =this.citasVertical.filter( e => e.Mostrar == true );
      //aqui procesa citasVertical
      this.procesarArregloCitas();
      loader.dismiss();
    });
    
  }
/*   pruebaProcesar(arr){
    var fechaActual = moment().format("DD-MM-YYYY");
    var fechaManana = moment().add(1, 'day').format("DD-MM-YYYY");

    var nuevas = arr.filter(e=> e.Mostrar == true);
    var total = nuevas.filter(e=> moment(e.FechaCompleta).format("DD-MM-YYYY") == fechaActual || moment(e.FechaCompleta).format("DD-MM-YYYY") == fechaManana);
    if (total && total.length > 0){

    }

  } */
  cargarDatosWeb(mesConsultar, annoConsultar, loader){
    //lo comentamos por nueva implementacion
    //this.cita.entregaPorMes(this.usuarioAps.Id, this.usuarioAps.IdRyf, this.usuarioAps.NodId, mesConsultar, annoConsultar).subscribe(async (response: any)=>{
    this.cita.entregaPorMesNuevo(this.usuarioAps.Id, this.usuarioAps.IdRyf, this.usuarioAps.NodId, mesConsultar, annoConsultar).subscribe(async (response: any)=>{
      //this.procesarIndicadorValor(response, loader);
      this.citasVertical = response;
      this.citasVerticalMostrar =this.citasVertical.filter( e => e.Mostrar == true );
      //aqui procesa citasVertical
      this.procesarArregloCitas();
      this.estaCargando = false;
      //terminamos el loader
      loader.dismiss();
      //ESTA INFORMACION ES PARA LLENAR EVENTOS DEL TIPO CALENDARIO
      if (environment.USA_CALENDARIO) {
        this.estaCargando = true;
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
          this.estaCargando = false;
          console.log('esta cargando ' + this.estaCargando);
        });
      }
      //busca disponibilidad
      if (this.utiles.entregaParametroUsaAgenda()) {
        this.estaCargando = true;
        //en moment hay que quitar un digito al mes
        //var fechaInicio = moment([parseInt(annoConsultar), parseInt(mesConsultar)-1, 1]);
        var fechaD = new Date(parseInt(annoConsultar), parseInt(mesConsultar)-1, 1, 0, 1,0,0);
       

        var fechaInicio = moment(fechaD);
        var diasDelMes = fechaInicio.daysInMonth();
        var fechaT = new Date(parseInt(annoConsultar), parseInt(mesConsultar)-1, diasDelMes, 23, 59,0,0);
        var fechaTermino = moment(fechaT);

        let loaderDisp = await this.loading.create({
          message: 'Cargando...<br>disponibilidad',
          duration: 20000
        });

        this.cita.getDisponibilidad(fechaInicio.format(), fechaTermino.format(), this.codigoDeis, this.runPaciente, this.serviceType, '', '', 'cita', this.nodId).subscribe((response: any) => {
          this.citasIntegracion = [];
          if (response && response.Mensaje) {
            //correcto
            if (response.Mensaje.Detalle.Codigo == 'MSG_CORRECTO') {
              //ya tiene citas tomadas, hay que enviarlo a otra pagina
              //la de buscarcitas
              this.citasIntegracion = response.CitasDisponibles;
              //hay que reprocesar los elementos
              if (this.citasIntegracion.length > 0) {
                var nombrePaciente = this.usuarioAps.Nombres + ' ' + this.usuarioAps.ApellidoPaterno + ' ' + this.usuarioAps.ApellidoMaterno;
                this.utiles.insertaCitasAEventos(this.citasIntegracion, this.citasVertical, nombrePaciente);
                //volvemos a reprocesar
                this.procesarArregloCitas();
              }

            }
          }
          this.estaCargando = false;
          console.log('esta cargando ' + this.estaCargando);
          loaderDisp.dismiss();
        });
      }

    });
  }
  async cargarEventosMes(mesConsultar, annoConsultar){
    this.estaCargando = true;
    let loader = await this.loading.create({
      message: 'Obteniendo...<br>Información del usuario',
      duration: 20000
    });

    await loader.present().then(async () => {
      if (!this.utiles.isAppOnDevice()) {
        //llamada web
        //this.cargarDatosWeb(mesConsultar, annoConsultar, loader);
        this.cargarDatosWebN(mesConsultar, annoConsultar, loader);
      }
      else{
        //llamada nativa
        this.cargarDatosNativeN(mesConsultar, annoConsultar, loader);
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
    console.log(this.calendarioData);
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
    modal.onDidDismiss().then((data) => {
      if(data.data && data.data.accion){
        var accion = data.data.accion;
        //console.log(accion);
        //obtenemos la pagina actual
        //actualizar
        var annoActual = moment().year();
    
        var mesActual = moment().month() + 1;
        //var mesActual = this.mesActualSeleccionado;
        //console.log(mesActual);
        //***************************** */
        this.tratamientoMeses();
        if (accion === 'booked'){
          this.utiles.presentToast('Cita reservada con éxito!!', 'bottom', 3000);
        }
        else if (accion === 'confirmed'){
          this.utiles.presentToast('Cita confirmada con éxito!!', 'bottom', 3000);
        }
        else if (accion === 'cancelled'){
          this.utiles.presentToast('Cita anulada con éxito!!', 'bottom', 3000);
        }
        this.cargarTodosLosEventos();
        //this.cargarEventosMes(mesActual, annoActual);
      }
    });
    return await modal.present();
  }

  //para procesar citas
  //se debe buscar disponibilidad de acuerdo a la fecha que se consulta
  async buscarDisponibilidad(fecha) {
    //ACA ME FALTA CONTROLAR LOS MENSAJES
    var inicio = new Date(fecha.getFullYear(), fecha.getMonth(), fecha.getDate(), 6, 0, 0, 0);
    var ini = moment(inicio).format();
    var termino = new Date(fecha.getFullYear(), fecha.getMonth(), fecha.getDate(), 23, 59, 0, 0)
    var ter = moment(termino).format();
    let loader = await this.loading.create({
      message: 'Cargando...<br>disponibilidad',
      duration: 20000
    });

    await loader.present().then(async () => {
      if (!this.utiles.isAppOnDevice()) {
        //llamada web
        this.cita.getDisponibilidad(ini, ter, this.codigoDeis, this.runPaciente, this.serviceType, '', '', 'cita', this.nodId).subscribe((response: any) => {
          this.procesarRespuesta(response, loader);
        });
      }
      else {
        //llamada nativa
        this.cita.getDisponibilidadNative(ini, ter, this.codigoDeis, this.runPaciente, this.serviceType, '', '', 'cita', this.nodId).then((response: any) => {
          var respuesta = JSON.parse(response.data);
          this.procesarRespuesta(respuesta, loader);
        });
      }
    });
  }
  procesarRespuesta(data, loader) {
    this.citasIntegracion = [];
    if (data && data.Mensaje) {
      //correcto
      if (data.Mensaje.Detalle.Codigo == 'MSG_CORRECTO') {
        //ya tiene citas tomadas, hay que enviarlo a otra pagina
        //la de buscarcitas
        this.citasIntegracion = data.CitasDisponibles;

      }
      loader.dismiss();
    }
  }
  revisarCita(evento, tituloBoton){
    //aca hay solo booked y confirmed
    //si está booked puede confirmar y anular
    //si está confirmed solo puede anular
    //boton confirmar, anular
    var visible = [false, false];
    if (evento.DetalleEventoMes.Estado == 'booked'  && tituloBoton == 'Confirmar'){
      //si esta booked se puede confirmar
      visible = [true, true];
    }
    else if (evento.DetalleEventoMes.Estado == 'confirmed'  && tituloBoton == 'Anular'){
      //si esta booked se puede confirmar
      visible = [false, true];
    }
    else if (evento.DetalleEventoMes.Estado == 'booked'  && tituloBoton == 'Anular'){
      //si esta booked se puede confirmar
      visible = [true, true];
    }
    else{
      visible = [false, false]
    }
    return visible;
  }
  //manejo de citas
  async presentAlertConfirm(boton, evento) {
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
            this.accionCita(boton, evento);
          }
        }
      ]
    });

    await alert.present();
  }
  async accionCita(boton, evento){
    if (evento.DetalleEventoMes.Estado && evento.DetalleEventoMes.Estado != ''){
      var idPaciente = this.usuarioAps.Rut;
      var idCita = evento.DetalleEventoMes.IdElemento;
      var accion = boton.Operacion;
  
      let loader = await this.loading.create({
        message: 'Procesado...<br>Información',
        duration: 20000
      });
  
      await loader.present().then(async () => {
        var retorno = null;
        if (!this.utiles.isAppOnDevice()) {
          //llamada web
          this.cita.getOperacionCita(idCita, idPaciente, accion).subscribe((response: any)=>{
            this.procesarRespuestaAgendar(response, loader, accion);
          })
        }
        else{
          //llamada nativa
          //this.cargarDatosNative(mesConsultar, annoConsultar, loader);
          this.cita.getOperacionCitaNative(idCita, idPaciente, accion).then((responseData: any)=>{
            var response = JSON.parse(responseData.data);
            this.procesarRespuestaAgendar(response, loader, accion);
          })
        }
      });
    }

  }
  procesarRespuestaAgendar(data, loader, accion){
    var retorno = null;
    if (data && data.Mensaje){
      if (data.Mensaje.Codigo == 'correcto'){
        //todo bien
        //this.utiles.presentToast('Operación realizada con éxito', 'middle', 2000);
        retorno = data;
        //actualizar la pagina
        var annoActual = moment().year();
    
        var mesActual = moment().month() + 1;
        //var mesActual = this.mesActualSeleccionado;
        console.log(mesActual);
        //***************************** */
        this.tratamientoMeses();
        
        if (accion === 'booked'){
          this.utiles.presentToast('Cita reservada con éxito!!', 'bottom', 3000);
        }
        else if (accion === 'confirmed'){
          this.utiles.presentToast('Cita confirmada con éxito!!', 'bottom', 3000);
        }
        else if (accion === 'cancelled'){
          this.utiles.presentToast('Cita anulada con éxito!!', 'bottom', 3000);
        }
        this.cargarTodosLosEventos();
        //this.cargarEventosMes(mesActual, annoActual);
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
  }
  //abrir pagina de reservar hora
  openReservarHoraPage(){
    this.navCtrl.navigateRoot('pre-tiposatencion');
  }
  revisaEstado(item){
    var retorno = false;
    if (item.DetalleEventoMes){
      if (item.DetalleEventoMes.Estado){
        if (item.DetalleEventoMes.Estado != undefined && item.DetalleEventoMes.Estado != ''){
          retorno = true;
        }
      }
    }
    return retorno;
  }
  transformDate(value, format){
    var pi = new MomentPipe();
    return pi.transform(value, format);
  }

}
