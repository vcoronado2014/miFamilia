import { Component, OnInit } from '@angular/core';
import { ModalController, NavParams, NavController, ToastController, Platform,  LoadingController, MenuController } from '@ionic/angular';
//SERVICIOS
import { ServicioUtiles } from '../../app/services/ServicioUtiles';
import { environment } from 'src/environments/environment';
//plugins
import { Camera, CameraOptions } from '@ionic-native/camera';
import { ServicioImagen } from '../services/ServicioImagen';

@Component({
  selector: 'app-modal-ajustes',
  templateUrl: './modal-ajustes.page.html',
  styleUrls: ['./modal-ajustes.page.scss'],
})
export class ModalAjustesPage implements OnInit {
  public userData;
  public usuarioAps;
  public uspId;
  image: string = null;
  lastImage: string = null;

  imagenBD;
  public color: string = "#127bdc";
  fileP: File;
  //ACA QUEDE, ESTOY ARMANDO LA PANTALLA DE AJUSTES
  //color
  miColor = '#FF4081';
  constructor(
    public modalCtrl: ModalController,
    public navParams: NavParams,
    public utiles: ServicioUtiles,
    public navCtrl: NavController,
    public toast: ToastController,
    public platform: Platform,
    public menu:MenuController,
    public loading: LoadingController,
    private img: ServicioImagen
  ) { }

  ngOnInit() {
    this.miColor = this.utiles.entregaMiColor();
    this.usuarioAps= JSON.parse(this.navParams.get('usuario'));
    this.image = this.usuarioAps.UrlImagen;
    this.color = this.miColor;//this.usuarioAps.Color;
    console.log(this.usuarioAps);
  }
  dismiss(){
    this.modalCtrl.dismiss();
  }
  setColor(color){
    this.color = color;
  }
  changeListener($event): void {
    //lo comentamos por mientras

    /*     if (!this.utiles.isAppOnDevice()){
          this.utiles.presentToast('Esta operación no esta permitida', 'center', 3000);
          return;
        }
        else { */
    this.fileP = $event.target.files[0];

    if (this.fileP) {
      if (this.fileP.size <= 2048000) {
        this.putImagen(this.fileP);    
      } else {
        //this.presentToast('El tamaño de la imágen excede el máximo permitido.'); 
        this.utiles.presentToast('El tamaño de la imágen excede el máximo permitido.', 'center', 3000);
      }
    } else {
      //this.presentToast('No ha seleccionado ninguna imágen válida.'); 
      this.utiles.presentToast('No ha seleccionado ninguna imágen válida.', 'center', 3000);
    }
    /*  } */

  }
  async putImagen(files){
    var uspId = this.usuarioAps.Id.toString();
      console.log(files.size);
      let loader = await this.loading.create({
        message: 'Guardando...<br>Imagen del usuario.',
        duration: 20000
      });
  
      await loader.present().then(async () => {
        if (!this.utiles.isAppOnDevice()) {
          //llamada web
          this.img.putImagen(uspId, files).subscribe((data:any)=>{
            if (data){
              this.image = environment.URL_FOTOS + data;
              //cambiar la imagen del usuario aps
              //o de la familia
              if (this.usuarioAps) {
                if (this.usuarioAps.UrlImagen){
                  //dejamos al usuario con la nueva imagen
                  this.usuarioAps.UrlImagen = environment.URL_FOTOS + data;
                }
              }
              if (sessionStorage.UsuarioAps) {
                var nuevoUsuarioAps = JSON.parse(sessionStorage.UsuarioAps);
                //cambiamos este elemento solo si el usuario existe
                if (nuevoUsuarioAps.Id == uspId)
                  nuevoUsuarioAps.UrlImagen = environment.URL_FOTOS + data;
    
              }
            }
            //terminamos loader
            loader.dismiss();
          })
        }
        else{
          //lamada nativa
          this.img.putImagenNative(uspId, files).then((data:any)=>{
            if (data){
              this.image = environment.URL_FOTOS + JSON.parse(data.data);
              //cambiar la imagen del usuario aps
              //o de la familia
              if (this.usuarioAps) {
                if (this.usuarioAps.UrlImagen){
                  //dejamos al usuario con la nueva imagen
                  this.usuarioAps.UrlImagen = environment.URL_FOTOS + JSON.parse(data.data);
                }
              }
              if (sessionStorage.UsuarioAps) {
                var nuevoUsuarioAps = JSON.parse(sessionStorage.UsuarioAps);
                //cambiamos este elemento solo si el usuario existe
                if (nuevoUsuarioAps.Id == uspId)
                  nuevoUsuarioAps.UrlImagen = environment.URL_FOTOS + JSON.parse(data.data);
    
              }
            }
            //terminamos loader
            loader.dismiss();
          })

        }
      });
  }
  async putColor(){
    var uspId = this.usuarioAps.Id.toString();
    var colorGuardar = this.color;

      let loader = await this.loading.create({
        message: 'Guardando...<br>Color del usuario.',
        duration: 20000
      });
  
      await loader.present().then(async () => {
        if (!this.utiles.isAppOnDevice()) {
          //llamada web
          this.img.putColor(uspId, colorGuardar).subscribe((data:any)=>{
            if (data){
              //hay que setear el color del localstorage
              this.utiles.cambiaColorLocalStorage(data);
              this.color = data;
              if (this.usuarioAps) {
                if (this.usuarioAps.Color){
                  //dejamos al usuario con la nueva imagen
                  this.usuarioAps.Color = data;
                }
              }
              if (sessionStorage.UsuarioAps) {
                var nuevoUsuarioAps = JSON.parse(sessionStorage.UsuarioAps);
                //cambiamos este elemento solo si el usuario existe
                if (nuevoUsuarioAps.Id == uspId)
                  nuevoUsuarioAps.Color = data;
    
              }
              localStorage.setItem('MI_COLOR', data);
            }
            //terminamos loader
            loader.dismiss();
          })
        }
        else{
          //lamada nativa
          this.img.putColorNative(uspId, colorGuardar).then((data:any)=>{
            if (data){
              this.utiles.cambiaColorLocalStorage(JSON.parse(data.data));
              this.color = JSON.parse(data.data);
              if (this.usuarioAps) {
                if (this.usuarioAps.Color){
                  //dejamos al usuario con la nueva imagen
                  this.usuarioAps.Color = JSON.parse(data.data);
                }
              }
              if (sessionStorage.UsuarioAps) {
                var nuevoUsuarioAps = JSON.parse(sessionStorage.UsuarioAps);
                //cambiamos este elemento solo si el usuario existe
                if (nuevoUsuarioAps.Id == uspId)
                  nuevoUsuarioAps.Color = JSON.parse(data.data);
              }
            }
            //terminamos loader
            loader.dismiss();
          },
          (error)=>{
            loader.dismiss();
            this.utiles.presentToast(error, 'bottom', 4000);
          }
          )

        }
      });
  }

/*   putColor(){
    var uspId = this.usuarioAps.Id.toString();
    var colorGuardar = this.color;
    this.loading = true;
    this.img.putColor(uspId, colorGuardar).subscribe(
      data => {
        if (data){
          this.color = data.json();
          if (this.usuarioAps) {
            if (this.usuarioAps.Color){
              //dejamos al usuario con la nueva imagen
              this.usuarioAps.Color = data.json();
            }
          }
          if (sessionStorage.UsuarioAps) {
            var nuevoUsuarioAps = JSON.parse(sessionStorage.UsuarioAps);
            //cambiamos este elemento solo si el usuario existe
            if (nuevoUsuarioAps.Id == uspId)
              nuevoUsuarioAps.Color = data.json();

          }
        }
      },
      err => { 
        this.loading = false; 
        console.error(err);
        this.presentToast('Se ha presentado un error al guardar el color seleccionado, contacte al administrador.'); 
      },
      () => {
        this.loading = false; 
        console.log('get img ok');
        this.presentToast('El color de su perfil ha sido cambiado con éxito. Recuerda reiniciar tu app para visualizar el cambio');
      }
    );
  } */


}
