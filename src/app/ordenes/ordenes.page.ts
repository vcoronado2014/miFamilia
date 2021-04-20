import { Component, OnInit, ViewChild } from '@angular/core';
import { NavController, ToastController, Platform, ModalController, LoadingController, MenuController, IonItem } from '@ionic/angular';
//parametros
import { ActivatedRoute, Router } from '@angular/router';
//SERVICIOS
import { ServicioUtiles } from '../../app/services/ServicioUtiles';
import { ServicioLaboratorio } from '../../app/services/ServicioLaboratorio';
import { ServicioAcceso } from '../../app/services/ServicioAcceso';
import { ServicioParametrosApp } from '../../app/services/ServicioParametrosApp';
//modal
import { ModalExamenesPage } from '../modal-examenes/modal-examenes.page';
//moment
import * as moment from 'moment';

@Component({
  selector: 'app-ordenes',
  templateUrl: './ordenes.page.html',
  styleUrls: ['./ordenes.page.scss'],
})
export class OrdenesPage implements OnInit {
  @ViewChild('myList', {read: IonItem}) list: IonItem;
  miColor = '#FF4081';
  textColor = '#FFFFFF';
  //tiene registros
  tiene = true;
  public listadoOrdenes;
  public usuarioAps;
  estaCargando = false;
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
    private lab: ServicioLaboratorio,
    public acceso: ServicioAcceso,
    public parametrosApp: ServicioParametrosApp
  ) { }

  ngOnInit() {
    moment.locale('es');
    this.activatedRoute.queryParams.subscribe(params => {
      if (params && params.usuario) {
        this.usuarioAps = JSON.parse(params.usuario);
        console.log(this.usuarioAps);
      }
    });
/*     if (sessionStorage.getItem("RSS_ID")){
      if (this.parametrosApp.USA_LOG_MODULOS()){
        this.utiles.registrarMovimiento(sessionStorage.getItem("RSS_ID"), 'EXAMENES');
      }
    } */
    this.loadInicio();
  }
  async loadInicio(){
    //mi color
    //this.miColor = this.utiles.entregaMiColor();
    //ordenes
    this.listadoOrdenes = [];           
    if (this.usuarioAps){
      this.miColor = this.utiles.entregaColor(this.usuarioAps);
      this.estaCargando = true;
      let loader = await this.loading.create({
        cssClass: 'loading-vacio',
        showBackdrop: false,
        spinner:null,
      });

      await loader.present().then(async () => {
        if (!this.utiles.isAppOnDevice()) {
          //llamada web
          this.lab.getOrdenes(this.usuarioAps.Id).subscribe((response: any)=>{
            this.porocesarLista(response, loader);
          });
        }
        else {
          //llamada nativa
          this.lab.getOrdenesNative(this.usuarioAps.Id).then((response: any)=>{
            this.porocesarLista(JSON.parse(response.data), loader);
          });
        }
      });
    }
  }
  porocesarLista(data, loader) {
    var listado = data;
    if (listado) {
      for (var s in listado) {
        let fecha = moment(listado[s].FechaRegistro).format('DD-MM-YYYY');
        listado[s].Fecha = fecha;
        listado[s].UrlImagen = this.usuarioAps.UrlImagen;
        listado[s].Parentezco = this.usuarioAps.Parentezco.Nombre;
      }
      //ahora asignamos la variable
      this.listadoOrdenes = listado;
      if (this.listadoOrdenes.length == 0) {
        this.tiene = false;
      }
      console.log(this.listadoOrdenes);
    }
    loader.dismiss();
    this.estaCargando = false;
  }

  async ordenSelected(item){
    const modal = await this.modalCtrl.create(
      {
        component: ModalExamenesPage,
        componentProps: {
          'orden': JSON.stringify(item)
        }
      }
    );
    return await modal.present();
  }
  logout(){
    this.acceso.logout();
    this.navCtrl.navigateRoot('login');
  }

}
