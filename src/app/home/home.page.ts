import { Component, ViewChild, OnInit } from '@angular/core';
import { NavController, ToastController, Platform, ModalController, LoadingController, MenuController } from '@ionic/angular';

import { ServicioUtiles } from '../../app/services/ServicioUtiles';
import { ServicioAcceso } from '../../app/services/ServicioAcceso';

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
  pages: any = [];

  constructor(
    public navCtrl: NavController,
    public toast: ToastController,
    public modalCtrl: ModalController,
    public platform: Platform,
    public loading: LoadingController,
    public menu:MenuController,
    public utiles: ServicioUtiles,
    public acceso: ServicioAcceso,

  ) {}

  ngOnInit() {
    this.miColor = this.utiles.entregaMiColor();
    this.miImagen = this.utiles.entregaMiImagen();
    this.miNombre = this.utiles.entregaMiNombre();
    console.log(this.miColor);
    console.log(this.miImagen);
    console.log(this.miNombre);
    this.pages = this.utiles.entregaMenuPages();
    console.log(this.pages);

  }
  ionViewWillEnter() {
    //si existen cambios se setean nuevamente
    this.miColor = this.utiles.entregaMiColor();
    this.miImagen = this.utiles.entregaMiImagen();
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
    this.navCtrl.navigateRoot(pages.src);

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
    this.navCtrl.navigateRoot('login');
  }

}
