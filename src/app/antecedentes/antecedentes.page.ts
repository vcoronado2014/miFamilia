import { Component, ViewChild, OnInit } from '@angular/core';
import { NavigationExtras } from '@angular/router';
import { NavController, ToastController, Platform, ModalController, LoadingController, MenuController } from '@ionic/angular';

import { ServicioUtiles } from '../../app/services/ServicioUtiles';
import { ServicioAcceso } from '../../app/services/ServicioAcceso';

@Component({
  selector: 'app-antecedentes',
  templateUrl: './antecedentes.page.html',
  styleUrls: ['./antecedentes.page.scss'],
})
export class AntecedentesPage implements OnInit {
  miColor = '#FF4081';

  public usuarioAps;
  public usuarioApsFamilia=[];
  public listadoUsuario=[];

  constructor(
    public navCtrl: NavController,
    public toast: ToastController,
    public modalCtrl: ModalController,
    public platform: Platform,
    public loading: LoadingController,
    public menu:MenuController,
    public utiles: ServicioUtiles,
    public acceso: ServicioAcceso,
  ) { }

  ngOnInit() {
    this.miColor = this.utiles.entregaMiColor();
    this.cargarDatosInciales();
  }
  async cargarDatosInciales(){
    let loader = await this.loading.create({
      message: 'Cargando...<br>información',
      duration: 20000
    });

    await loader.present().then(async () => {

      if (sessionStorage.UsuarioAps) {
        this.usuarioAps = JSON.parse(sessionStorage.UsuarioAps);
        if (this.usuarioAps) {
          this.usuarioAps.UrlImagen = this.utiles.entregaMiImagen();
          this.usuarioAps.Color = this.utiles.entregaColor(this.usuarioAps);
        }
      }
      else{
        this.usuarioAps = {Nombres: '', PrimerApellido: '', SegundoApellido: '', UrlImagen:''};
      }
      
      //manejo de los usuarios de la familia
      if (sessionStorage.UsuariosFamilia) {
        this.usuarioApsFamilia = JSON.parse(sessionStorage.UsuariosFamilia);
        if (this.usuarioApsFamilia.length > 0){
          for(var s in this.usuarioApsFamilia){
            this.usuarioApsFamilia[s].UrlImagen = this.utiles.entregaImagen(this.usuarioApsFamilia[s]);
            this.usuarioApsFamilia[s].Color = this.utiles.entregaColor(this.usuarioApsFamilia[s]);
          }
        }

      }
      //ahora vamos a generar un solo listado de usuarios con los datos que necesitamos
      if (this.usuarioAps) {
        this.listadoUsuario.push(this.usuarioAps);
      }
      if (this.usuarioApsFamilia) {
        if (this.usuarioApsFamilia.length > 0) {
          for (var s in this.usuarioApsFamilia) {
            this.listadoUsuario.push(this.usuarioApsFamilia[s]);
          }
        }
      }
      loader.dismiss();
    });

  }
  ionViewWillEnter() {
    //si existen cambios se setean nuevamente
    this.miColor = this.utiles.entregaMiColor();
  }
  goToDetails(usuario) {
    const navigationExtras: NavigationExtras = {
      queryParams: {
        usuario: JSON.stringify(usuario)
      }
    };
    this.navCtrl.navigateRoot(['detail-usuario'], navigationExtras);

  }
  logout(){
    this.acceso.logout();
    this.navCtrl.navigateRoot('login');
  }

}
