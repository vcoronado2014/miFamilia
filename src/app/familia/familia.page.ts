import { Component, DoCheck, OnInit, ViewChild } from '@angular/core';
import { NavController, ToastController, Platform, ModalController, LoadingController, MenuController, IonList } from '@ionic/angular';
//parametros
import { ActivatedRoute, Router } from '@angular/router';
//SERVICIOS
import { ServicioUtiles } from '../../app/services/ServicioUtiles';
import { environment } from 'src/environments/environment';
//modal
import { ModalAjustesPage } from '../modal-ajustes/modal-ajustes.page';

@Component({
  selector: 'app-familia',
  templateUrl: './familia.page.html',
  styleUrls: ['./familia.page.scss'],
})
export class FamiliaPage implements OnInit, DoCheck {
  //textColor Directive
  textColor = '#FFFFFF';
  //color
  miColor = '#FF4081';
  //otras variables
  hayInfo = true;
  public usuarioAps;
  public usuarioApsFamilia=[];
  public listadoUsuario=[];

  @ViewChild('myList', {read: IonList}) list: IonList;
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
  ) { }

  ngOnInit() {
    this.cargarDatosIniciales();
  }
  ionViewWillLeave() {
    console.log('ionViewWillLeave');  // <- Not in console when leaving
  }
  ngDoCheck() {
    //console.log('check');
    //this.miColor = this.utiles.entregaMiColor();
    //this.cargarDatosIniciales();
    //ESTOY VIENDO ESTO, YA QUE ES MUCHA CARGA HACER SIEMPRE LA
    //VALIDACIÓN EN EL DOCHECK, BUSCAR OTRA FORMA, BUSCAR TAMBIEN SACAR SIEMPRE EL COLOR DESDE
    //LA LOCALSTORAGE MI_COLOR Y MI_IMAGEN
    //verificamos el color
    if (localStorage.getItem('MI_COLOR')){
      var colorLocal = localStorage.getItem('MI_COLOR');
      var sessionColor = JSON.parse(sessionStorage.UsuarioAps);
      if (colorLocal != sessionColor.Color){
        //hay que cambiarlo
        console.log('Cambia color de '+ sessionColor.Color + ' a ' + colorLocal);
        localStorage.setItem('MI_COLOR', colorLocal);
        this.miColor = this.utiles.entregaMiColor();
        
      }
    }
  }

  async cargarDatosIniciales(){
    let loader = await this.loading.create({
      message: 'Obteniendo...<br>Información del usuario',
      duration: 20000
    });

    await loader.present().then(async () => {
      //cargamos mi color
      this.miColor = this.utiles.entregaMiColor();
      //demas cargas
      if (sessionStorage.UsuarioAps) {
        this.usuarioAps = JSON.parse(sessionStorage.UsuarioAps);
        if (this.usuarioAps) {
          this.usuarioAps.UrlImagen = environment.URL_FOTOS + this.usuarioAps.UrlImagen;
        }
      }
      else
        this.usuarioAps = { Nombres: '', PrimerApellido: '', SegundoApellido: '', UrlImagen: '' };

      //manejo de los usuarios de la familia
      if (sessionStorage.UsuariosFamilia) {
        this.usuarioApsFamilia = JSON.parse(sessionStorage.UsuariosFamilia);
        if (this.usuarioApsFamilia.length > 0) {
          for (var s in this.usuarioApsFamilia) {
            this.usuarioApsFamilia[s].UrlImagen = environment.URL_FOTOS + this.usuarioApsFamilia[s].UrlImagen;
          }
        }
      }
      //ahora vamos a generar un solo listado de usuarios con los datos que necesitamos
      if (this.usuarioAps){
        this.listadoUsuario.push(this.usuarioAps);
      }
      if (this.usuarioApsFamilia){
        if (this.usuarioApsFamilia.length > 0){
          for (var s in this.usuarioApsFamilia){
            this.listadoUsuario.push(this.usuarioApsFamilia[s]);
          }
        }
      }
      if (this.listadoUsuario.length == 0){
        this.hayInfo = false;
      }
      loader.dismiss();
    });
  }

  async openModalAjustes(item){
    const modal = await this.modalCtrl.create(
      {
        component: ModalAjustesPage,
        componentProps: {
          'usuario': JSON.stringify(item)
        }
      }
    );
    return await modal.present();
  }

}
