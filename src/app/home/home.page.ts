import { Component, ViewChild, OnInit } from '@angular/core';
import { NavController, ToastController, Platform, ModalController, LoadingController, MenuController } from '@ionic/angular';

import { ServicioUtiles } from '../../app/services/ServicioUtiles';
import { ServicioAcceso } from '../../app/services/ServicioAcceso';
import { ServicioCitas } from '../../app/services/ServicioCitas';
import { environment } from 'src/environments/environment';


@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {
  
  usuarioAps;
  miColor = '#FF4081';
  miImagen;
  miNombre;
  miInstitucion;
  pages: any = [];
  //datos para consultar citas
  runPaciente = '';
  codigoDeis = '';
  serviceType = '349';
  //semanas
  semanas: any = [];
  semana: any;
  //tiene disponibilidad
  tieneCitaVigente = false;
  usaAgenda = false;
  //ESTOY TRABAJANDO EN LA DISPONIBILIDAD
  //HAY UNA VARIABLE DE SESXSION LLAMADA OPERACION
  //QUE SE ACTUALIZA SI ENCUENTRA O NO DISPONIBILIDAD
  //PARA LLAMAR A BUSCARDISPONIBILIDAD O BUSCARCITAS DEL PACIENTE
  pushes: any = [];
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

  ) {}

  ngOnInit() {
    //this.miColor = this.utiles.entregaMiColor();
    this.usuarioAps = JSON.parse(sessionStorage.UsuarioAps);
    this.miColor = this.utiles.entregaColor(this.usuarioAps);
    //this.miImagen = this.utiles.entregaMiImagen();
    this.miImagen = this.utiles.entregaImagen(this.usuarioAps)
    this.miNombre = this.utiles.entregaMiNombre();
    if (this.usuarioAps.Establecimiento){
      this.miInstitucion = this.usuarioAps.Establecimiento.RazonSocial;
    }
    console.log(this.miColor);
    console.log(this.miImagen);
    console.log(this.miNombre);
    this.pages = this.utiles.entregaMenuPages();
    console.log(this.pages);
    this.runPaciente = this.utiles.insertarGuion(this.usuarioAps.Rut);
    this.codigoDeis = this.usuarioAps.ConfiguracionNodo.CodigoDeis2014;
    this.usaAgenda = this.utiles.entregaParametroUsaAgenda();
/*     if (this.utiles.entregaParametroUsaAgenda()){
      this.buscarDisponibilidad();
    } */

  }
  ionViewWillEnter() {
    //si existen cambios se setean nuevamente
    //this.miColor = this.utiles.entregaMiColor();
    this.miColor = this.utiles.entregaColor(this.usuarioAps);
    //this.miImagen = this.utiles.entregaMiImagen();
    this.miImagen = this.utiles.entregaImagen(this.usuarioAps)
    this.miNombre = this.utiles.entregaMiNombre();
    console.log(this.miColor);
    console.log(this.miImagen);
    console.log(this.miNombre);
  }
  openPage(pages) {
    // Reset the content nav to have just this page
    // we wouldn't want the back button to show in this scenario
    //this.navCtrl.push(pages.component,{ usuario: this.usuarioAps });
    console.log(pages);
    //ojo con esto
/*     if (pages.title == 'Cita'){
      //aca hay que comprobar si tiene o no citas agendadas
      this.navCtrl.navigateRoot('agenda-disponible');
    }
    else{ */
      this.navCtrl.navigateRoot(pages.src);
    /* } */
  }
  openFamiliaPage(){
    this.navCtrl.navigateRoot('familia');
  }  
  openAntePage(){
    this.navCtrl.navigateRoot('antecedentes');
  }
  openOrdenesPage(){
    this.navCtrl.navigateRoot('ordenes');
  }
  openCalendarioPage(){
    this.navCtrl.navigateRoot('calendario');
  }
  logout(){
    this.acceso.logout();
    this.navCtrl.navigateRoot('nuevo-login');
  }
  openReservarHoraPage(){
    this.navCtrl.navigateRoot('pre-tiposatencion');
  }
  //para procesar citas
  /*
  async buscarDisponibilidad(){
    //ACA ME FALTA CONTROLAR LOS MENSAJES
    var fecha = new Date();
    this.utiles.construyeSemana(this.runPaciente, this.codigoDeis, fecha);
    this.semana = this.utiles.semana;
    this.semanas = this.utiles.semanas;
    var ini = this.semana.semanas[0].start;
    var ter = this.semana.semanas[0].end;
    let loader = await this.loading.create({
      message: 'Cargando...<br>disponibilidad',
      duration: 20000
    });

    await loader.present().then(async () => {
      if (!this.utiles.isAppOnDevice()) {
        //llamada web
        this.cita.getDisponibilidad(ini, ter, this.codigoDeis, this.runPaciente, this.serviceType, '', '', 'disponibilidad').subscribe((response: any)=>{
          this.procesarRespuesta(response, loader);
        });
      }
      else {
        //llamada nativa
        this.cita.getDisponibilidadNative(ini, ter, this.codigoDeis, this.runPaciente, this.serviceType, '', '', 'disponibilidad').then((response: any)=>{
          var respuesta = JSON.parse(response.data);
          this.procesarRespuesta(respuesta, loader);
        });
      }
    });
  }
  procesarRespuesta(data, loader){
    if (data && data.Mensaje){
      //correcto
      if (data.Mensaje.Detalle.Codigo == 'MSG_CITA_VIGENTE'){
        //ya tiene citas tomadas, hay que enviarlo a otra pagina
        //la de buscarcitas
        this.tieneCitaVigente = true;
        sessionStorage.setItem('OPERACION', 'cita');
        loader.dismiss();
      }
      else{
        //lanzamos mensaje
        this.tieneCitaVigente = false;
        sessionStorage.setItem('OPERACION', 'disponibilidad')
        loader.dismiss();
      }
      //error
    }
  }
  */

}

