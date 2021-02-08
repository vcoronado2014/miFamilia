import { Component, OnInit, ViewChild } from '@angular/core';
import { NavController, ToastController, Platform, ModalController, LoadingController, MenuController, IonItem, AlertController } from '@ionic/angular';
import { DomSanitizer } from '@angular/platform-browser';
//parametros
import { ActivatedRoute, Router } from '@angular/router';
import { ServicioUtiles } from '../../app/services/ServicioUtiles';
import { ServicioClaveUnica } from '../../app/services/ServicioClaveUnica';
@Component({
  selector: 'app-login-clave-unica',
  templateUrl: './login-clave-unica.page.html',
  styleUrls: ['./login-clave-unica.page.scss'],
})
export class LoginClaveUnicaPage implements OnInit {

  htmlClaveUnica: any;
  
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
    public claveUnica: ServicioClaveUnica,
    private alertController: AlertController,
    private sanitizer: DomSanitizer,
  ) { }

  ngOnInit() {

    /*
    //realizar llamada para mostrar el formulario
    if (!this.utiles.isAppOnDevice()) {
      //llamada web
      this.claveUnica.getLogin().subscribe((data:any)=>{
        this.htmlClaveUnica = data;
        console.log(this.htmlClaveUnica);
        //esto hay que renderizarlo dentro de la pagina
      });
    }
    else{
      //llamada nativa
      this.claveUnica.getLoginNative().then((data:any)=>{
        this.htmlClaveUnica = data.data;
        //esto hay que renderizarlo dentro de la pagina

      })
    }
    */
  }

}
