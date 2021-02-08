import { Component, ViewChild, OnInit } from '@angular/core';
import { NavigationExtras } from '@angular/router';
import { NavController, ToastController, Platform, ModalController, LoadingController, MenuController, IonItem } from '@ionic/angular';

import { ServicioUtiles } from '../../app/services/ServicioUtiles';
import { ServicioAcceso } from '../../app/services/ServicioAcceso';
import { ServicioCitas } from '../../app/services/ServicioCitas';
import * as moment from 'moment';
import { MomentPipe } from '../../app/pipes/fecha.pipe';
//modal
import { ModalOperacionCitaPage } from '../modal-operacion-cita/modal-operacion-cita.page';

@Component({
  selector: 'app-agenda-disponible',
  templateUrl: './agenda-disponible.page.html',
  styleUrls: ['./agenda-disponible.page.scss'],
})
export class AgendaDisponiblePage implements OnInit {
  miColor = '#FF4081';
  public usuarioAps;
  semanas: any = [];
  semana: any;
  textColor = '#FFFFFF';
  citas = [];
  citasAgrupadas = [];
  cuposAgrupadosSelected = [];
  objetoCita: any;
  //datos para consultar citas
  runPaciente = '';
  codigoDeis = '';
  serviceType = '349';
  //manejo de movimiento de semanas
  indiceAnterior = 0;
  indiceSiguiente = 1;
  indiceActual = 0;
  anteriorEnabled = false;
  siguienteEnabled = true;
  cantidadSemanas = 3;
  //tipo operacion
  tipoOperacion = 'cita';
  itemSelected;
  nodId;
   //tipos de atencion
   tiposAtencion = [];
   comboSeleccionado = "";

  //******************** */
  @ViewChild('myList', {read: IonItem}) list: IonItem;
  constructor(
    public navCtrl: NavController,
    public toast: ToastController,
    public modalCtrl: ModalController,
    public platform: Platform,
    public loading: LoadingController,
    public menu:MenuController,
    public utiles: ServicioUtiles,
    public acceso: ServicioAcceso,
    public cita: ServicioCitas,
  ) { }

  ngOnInit() {
    //el primer load lo hacemos con la fecha hora actual
    moment.locale('es');
/*     if (sessionStorage.getItem('OPERACION')){
      this.tipoOperacion = sessionStorage.getItem('OPERACION');
    } */

    if (sessionStorage.UsuarioAps) {
      this.usuarioAps = JSON.parse(sessionStorage.UsuarioAps);
      if (this.usuarioAps) {
        //this.usuarioAps.UrlImagen = this.utiles.entregaMiImagen();
        this.usuarioAps.UrlImagen = this.utiles.entregaImagen(this.usuarioAps);
        this.miColor = this.utiles.entregaColor(this.usuarioAps);
        this.runPaciente = this.utiles.insertarGuion(this.usuarioAps.Rut);
        this.codigoDeis = this.usuarioAps.ConfiguracionNodo.CodigoDeis2014;
        this.nodId = this.usuarioAps.ConfiguracionNodo.NodId;
      }
    }
    //this.cargarDatos();
    this.construyeSemanaBuscar(0, 'sig');
  }
  construyeSemanaBuscar(pagina, operacion){
    //si la pagina es 0 se debe construir la semana a contar de la fecha actual
    var factorDias = 0;
    var fecha = new Date();
    //en el caso que venga la misma pagina que se envio y la operacion nula, debemos tomar los datos de la semana
    //seleccionada actual

    if (operacion == null){
      if (this.semana){
        var fechaIni = moment();
        var date = new Date();
        if (operacion == 'ant'){
          //si es anterior hay que ver que pasa
          //deberiamos retroceder desde la fecha de inicio
          fechaIni = moment(this.semana.start).add(-8, 'day');
          date = new Date(fechaIni.year(), fechaIni.month(), fechaIni.date(), 0,0,0,0);
        }
        else{
          fechaIni = moment(this.semana.end);
          date = new Date(fechaIni.year(), fechaIni.month(), fechaIni.date(), 0,0,0,0);

        }
        this.utiles.construyeSemana(this.runPaciente, this.codigoDeis, date);

        this.semana = this.utiles.semana;
        this.semanas = this.utiles.semanas;
        //lo comentamos para consultar una semana completa
        //var ini = this.semana.semanas[0].start;
        //var ter = this.semana.semanas[0].end;
        var ini = this.semana.start;
        var ter = this.semana.end;
        sessionStorage.setItem("PAGINA_ACTUAL", pagina);
        this.buscarDisponibilidad(ini, ter, this.codigoDeis, this.runPaciente, this.serviceType, this.tipoOperacion);
      }
    }
    if (pagina == 0){
      this.utiles.construyeSemana(this.runPaciente, this.codigoDeis, fecha);
      this.semana = this.utiles.semana;
      this.semanas = this.utiles.semanas;
      
      //esto lo cambiamos para que obtenga la semana completa
      //var ini = this.semana.semanas[0].start;
      var ini = this.semana.start;
      //var ter = this.semana.semanas[0].end;
      var ter = this.semana.end;
      console.log(this.semana);
      //carga inicial
      sessionStorage.setItem("PAGINA_ACTUAL", pagina);
      this.buscarDisponibilidad(ini, ter, this.codigoDeis, this.runPaciente, this.serviceType, this.tipoOperacion);
    }
    else{
      //aca debemos sacar fecha inicio y termino
      if (this.semana){
        var fechaIni = moment();
        var date = new Date();
        if (operacion == 'ant'){
          //si es anterior hay que ver que pasa
          //deberiamos retroceder desde la fecha de inicio
          fechaIni = moment(this.semana.start).add(-8, 'day');
          date = new Date(fechaIni.year(), fechaIni.month(), fechaIni.date(), 0,0,0,0);
        }
        else{
          fechaIni = moment(this.semana.end);
          date = new Date(fechaIni.year(), fechaIni.month(), fechaIni.date(), 0,0,0,0);

        }
        this.utiles.construyeSemana(this.runPaciente, this.codigoDeis, date);

        this.semana = this.utiles.semana;
        this.semanas = this.utiles.semanas;
        //lo comentamos para consultar una semana completa
        //var ini = this.semana.semanas[0].start;
        //var ter = this.semana.semanas[0].end;
        var ini = this.semana.start;
        var ter = this.semana.end;
        sessionStorage.setItem("PAGINA_ACTUAL", pagina);
        this.buscarDisponibilidad(ini, ter, this.codigoDeis, this.runPaciente, this.serviceType, this.tipoOperacion);
      }
    }
  }

  logout(){
    this.acceso.logout();
    this.navCtrl.navigateRoot('nuevo-login');
  }
  async onClickSemana(item){
    console.log(item);
    if (item != null){
      if (this.semana.semanas && this.semana.semanas.length > 0){
        this.semana.semanas.forEach(sem => {
          if (sem.end == item.end){
            sem.selected = true;
          }
          else{
            sem.selected = false;
          }
          sem.total = 0;
          
        });
      }
      //ahora enviamos los datos
      var run = this.utiles.insertarGuion(this.usuarioAps.Rut);
      var codDeis = this.usuarioAps.ConfiguracionNodo.CodigoDeis2014;
      this.buscarDisponibilidad(item.start, item.end, codDeis, run, item.serviceType, this.tipoOperacion);
    }
  }
  procesarRespuestaTotal(data, loader){
    //vienen las citas sin fecha
    this.cuposAgrupadosSelected = [];
    this.tiposAtencion = [];
    console.log(this.semana);
    if (data && data.Mensaje){
      //correcto
      if (data.Mensaje.Codigo == 'correcto'){
        //todo bien procesar las citas
        var contador = 0;
        if (data.CitasDisponibles && data.CitasDisponibles.length > 0){
          data.CitasDisponibles.forEach(cit => {
            cit.horaInicio = moment(cit.FechaHoraInicio).format('HH:mm');
            cit.horaTermino = moment(cit.FechaHoraTermino).format('HH:mm');
            //pruebas
            contador++;
          });
        }
        if (data.TiposAtencion){
          this.tiposAtencion = this.crearTiposAtencion(data.TiposAtencion);
          if (this.tiposAtencion && this.tiposAtencion.length > 0){
            this.comboSeleccionado = this.tiposAtencion[0].Texto;
          }
        }
        //aca asignamos las citas
        this.citas = data.CitasDisponibles;
        //hacemos foreach a las semanas
        if (this.semana.semanas && this.semana.semanas.length > 0){
          this.semana.semanas.forEach(sem => {
            var cupos = 0;
            console.log(sem);
            if (this.citas && this.citas.length > 0){
              sem.Cupos = [];
              this.citas.forEach(cupo => {
                //cupos = 0;
                var fechaComparar = moment(cupo.FechaHoraInicio).format('YYYY-MM-DD');
                if (moment(sem.start).format('YYYY-MM-DD') == fechaComparar){
                  sem.Cupos.push(cupo);
                  cupos++;
                }
              });
            }
            console.log(cupos);
            sem.total = cupos;
            sem.CuposAgrupados = this.agruparCitasTodas(sem.Cupos);
          });
        }
        //console.log(this.citas);
        console.log(this.semana);
        //aca guardamos la semana en una variable de session
        sessionStorage.setItem('CUPOS_SEMANA', JSON.stringify(this.semana));
        //this.agruparCitas();
        //dejamos por defecto el primer item seleccionado
        this.cuposAgrupadosSelected = this.semana.semanas[0].CuposAgrupados;
        //filtramos
        this.filtrarTiposAtencion();
        loader.dismiss();
      }
      else{
        this.cuposAgrupadosSelected = [];
        loader.dismiss();
      }
      //error
    }
  }
  //este metodo lo vamos a acambiar, ya que ahora procesamos todo
  async buscarDisponibilidad(start, end, organization, patient, serviceType, tipoOperacion){
    //ACA ME FALTA CONTROLAR LOS MENSAJES
    let loader = await this.loading.create({
      message: 'Cargando...<br>disponibilidad',
      duration: 20000
    });

    await loader.present().then(async () => {
      this.citas = [];
      this.citasAgrupadas = [];
      if (!this.utiles.isAppOnDevice()) {
        //llamada web
        this.cita.getDisponibilidad(start, end, organization, patient, serviceType, '', '', tipoOperacion, this.nodId).subscribe((response: any)=>{
          this.procesarRespuestaTotal(response, loader);
        });
      }
      else {
        //llamada nativa
        this.cita.getDisponibilidadNative(start, end, organization, patient, serviceType, '', '', tipoOperacion, this.nodId).then((response: any)=>{
          var respuesta = JSON.parse(response.data);
          this.procesarRespuestaTotal(respuesta, loader);
        });
      }
    });
  }
  agruparCitasTodas(arrCupos){
    //aca vienen los cupos
    var cuposAgrupados = [];
    //this.citasAgrupadas = [];
    let nuevoObjeto = {}
    //primero sacamos los medicos distintos
    var medicos = [];
    if (arrCupos && arrCupos.length > 0) {
      arrCupos.forEach(x => {
        if (!nuevoObjeto.hasOwnProperty(x.RunMedico)) {
          nuevoObjeto[x.RunMedico] = {
            MedicoPrestador: {
              NombreCompletoMedico: x.NombresMedico + ' ' + x.ApellidosMedico,
              RunMedico: x.RunMedico
            },
            HorasDisponibles: []
          }
        }
        //Agregamos los datos de profesionales. 
        nuevoObjeto[x.RunMedico].HorasDisponibles.push({
          ApellidosMedico: x.ApellidosMedico,
          Estado: x.Estado,
          FechaHoraCreacion: x.FechaHoraCreacion,
          FechaHoraInicio: x.FechaHoraInicio,
          FechaHoraTermino: x.FechaHoraTermino,
          Id: x.Id,
          IdCita: x.IdCita,
          IdPaciente: x.IdPaciente,
          NombresMedico: x.NombresMedico,
          RunMedico: x.RunMedico,
          RunPaciente: x.RunPaciente,
          Servicio: {
            CodigoDeis: x.Servicio.CodigoDeis,
            IdServicio: x.Servicio.IdServicio,
            Nombre: x.Servicio.Nombre,
            NombreServicio: x.Servicio.NombreServicio
          },
          Tipo: x.Tipo,
          TipoAtencion: x.TipoAtencion,
          TipoServicio: {
            Codigo: x.TipoServicio.Codigo,
            Nombre: x.TipoServicio.Nombre
          },
          HoraInicio: this.transformDateIso(new Date(x.FechaHoraInicio).toISOString()),
          HoraTermino: this.transformDateIso(new Date(x.FechaHoraTermino).toISOString())
        });
      });
    }
    cuposAgrupados = Object.entries(nuevoObjeto);
    return cuposAgrupados;
  }
  //vamos a tener que agrupar, ya que muchas veces el médico es el mismo y solo cambia el horario
  agruparCitas(){
    this.citasAgrupadas = [];
    let nuevoObjeto = {}
    //primero sacamos los medicos distintos
    var medicos = [];
    if (this.citas && this.citas.length > 0) {
      this.citas.forEach(x => {
        if (!nuevoObjeto.hasOwnProperty(x.RunMedico)) {
          nuevoObjeto[x.RunMedico] = {
            MedicoPrestador: {
              NombreCompletoMedico: x.NombresMedico + ' ' + x.ApellidosMedico,
              RunMedico: x.RunMedico
            },
            HorasDisponibles: []
          }
        }
        //Agregamos los datos de profesionales. 
        nuevoObjeto[x.RunMedico].HorasDisponibles.push({
          ApellidosMedico: x.ApellidosMedico,
          Estado: x.Estado,
          FechaHoraCreacion: x.FechaHoraCreacion,
          FechaHoraInicio: x.FechaHoraInicio,
          FechaHoraTermino: x.FechaHoraTermino,
          Id: x.Id,
          IdCita: x.IdCita,
          IdPaciente: x.IdPaciente,
          NombresMedico: x.NombresMedico,
          RunMedico: x.RunMedico,
          RunPaciente: x.RunPaciente,
          Servicio: {
            CodigoDeis: x.Servicio.CodigoDeis,
            IdServicio: x.Servicio.IdServicio,
            Nombre: x.Servicio.Nombre,
            NombreServicio: x.Servicio.NombreServicio
          },
          Tipo: x.Tipo,
          TipoServicio: {
            Codigo: x.TipoServicio.Codigo,
            Nombre: x.TipoServicio.Nombre
          },
          HoraInicio: moment(x.FechaHoraInicio).format('HH:mm'),
          HoraTermino: moment(x.FechaHoraTermino).format('HH:mm')
        });
      });
    }
    this.objetoCita = nuevoObjeto;
    this.citasAgrupadas = Object.entries(this.objetoCita);
    console.log(this.objetoCita);
    console.log(this.citasAgrupadas);
  }
  transformDate(value, format){
    var pi = new MomentPipe();
    return pi.transform(value, format);
  }
  seleccionarCuposAgrupados(item){
    console.log(item);
    this.cuposAgrupadosSelected = [];
    if (item != null){
      if (this.semana.semanas && this.semana.semanas.length > 0){
        this.semana.semanas.forEach(sem => {
          if (sem.end == item.end){
            sem.selected = true;
            this.cuposAgrupadosSelected = sem.CuposAgrupados;
            console.log(this.cuposAgrupadosSelected);
            //filtramos
            this.filtrarTiposAtencion();
          }
          else{
            sem.selected = false;
          }
        });
      }
    }
  }
  onClickCupo(cupo){
    console.log(cupo);
  }
  onClickCambiarSemana(operacion){
    if (operacion == 'ant'){
      //console.log('anterior');
      if (this.indiceActual == 0){
        //console.log('no puedes volver');
        //console.log('inidice actual ' + this.indiceActual);
        return;
      }
      this.indiceActual--;
    }
    else{
      //console.log('siguiente');
      if (this.indiceActual < this.cantidadSemanas){
        //correcto
        this.indiceActual++;
      }
      else{
        //console.log('no puedes seguir');
        //console.log('inidice actual ' + this.indiceActual);
        return;
      }
    }
    //console.log('inidice actual ' + this.indiceActual);
    console.log('consultar pagina ' + this.indiceActual);
    this.construyeSemanaBuscar(this.indiceActual, operacion);

  }

  async citaSelected(item){
    if (item){
      this.itemSelected = item;
    }
    const modal = await this.modalCtrl.create(
      {
        component: ModalOperacionCitaPage,
        componentProps: {
          'cita': JSON.stringify(item),
          'operacion': 'reservar'
        }
      }
    );
    modal.onDidDismiss().then((data) => {
      if(data.data && data.data.accion){
        var accion = data.data.accion;
        //obtenemos la pagina actual
        var pag = 0;
        if (sessionStorage.getItem('NUMERO_PAGINA')){
          pag = parseInt(sessionStorage.getItem('NUMERO_PAGINA'));
        }
        this.construyeSemanaBuscar(pag, null);
        //revisar esto NO FUNCIONA
        //this.seleccionarCuposAgrupados(this.itemSelected);
        
      }
    });
    return await modal.present();
  }
  traduceString(texto){
    return this.utiles.traduceString(texto);
  }
  styleCita(estado){
    var retorno = '';
    switch (estado) {
      case 'cancelled':
        retorno = '--ion-color-danger';
        break;
    
      default:
        retorno = '';
        break;
    }
    return retorno;
  }
  crearTiposAtencion(tiposAtencion){
    var arr = [];
/*     var entidadInicial = {
      Texto: 'Todos',
      Valor: 0,
      Selected: true
    }
    arr.push(entidadInicial); */
    if (tiposAtencion && tiposAtencion.length > 0){
      tiposAtencion.forEach(tipo => {
        var contador = 1;
        var entidadTipo = {
          Texto: tipo,
          Valor: contador,
          Selected: false
        };
        arr.push(entidadTipo);
        contador++;
      });
    }

    return arr;
  }
  tipoSeleccionado(event){
    if (event.detail.value){
      this.comboSeleccionado = event.detail.value;
      console.log(this.comboSeleccionado);
      //this.seleccionarCuposAgrupados(this.itemSelected);
      this.filtrarTiposAtencion();
    }
  }
  contadorHorasDisponibles(cupos){
    var total = 0;
    if (cupos && cupos.length > 0){
      cupos.forEach(element => {
        if (element.TipoAtencion == this.comboSeleccionado){
          total++;
        }
      });
    }
    return total;
  }
  filtrarTiposAtencion(){
    //arr cuposAgrupadosSelected
    var total = 0;
    if (this.cuposAgrupadosSelected && this.cuposAgrupadosSelected.length > 0){
      this.cuposAgrupadosSelected.forEach(cupo => {
        if (cupo[1].HorasDisponibles && cupo[1].HorasDisponibles.length > 0){
          cupo[1].HorasDisponibles.forEach(element => {
            if (element.TipoAtencion != this.comboSeleccionado){
              element.Visible = false;
            }
            else{
              element.Visible = true;
              total++;
            }
          });
        }
      });
    }
    //volvemos a recontar los totales de la semana
    if (this.semana){
      if (this.semana && this.semana.semanas){
        this.semana.semanas.forEach(sem => {
          var tot = 0;
          if (sem.Cupos && sem.Cupos.length > 0){
            sem.Cupos.forEach(cupo => {
              if (cupo.TipoAtencion == this.comboSeleccionado){
                tot++;
              }
            });
          }
          sem.total = tot;
        });
      }
      sessionStorage.setItem('CUPOS_SEMANA', JSON.stringify(this.semana));
    }
    console.log(this.cuposAgrupadosSelected);

  }
  transformDateIso(dateString){
    var retorno = "";
    var parteT = dateString.split("T");
    if (parteT && parteT.length == 2){
      var partes = parteT[1].split(":");
      if (partes && partes.length > 1){
        retorno = partes[0] + ":" + partes[1];
      }
    }
    return retorno;
  }
}
