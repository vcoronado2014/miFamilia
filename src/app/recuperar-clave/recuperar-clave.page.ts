import { Component, OnInit } from '@angular/core';
import { NavController, LoadingController } from '@ionic/angular';
import { FormGroup, Validators, FormBuilder, FormControl, ValidatorFn } from '@angular/forms';
//servicios
import { ServicioUtiles } from '../../app/services/ServicioUtiles';
import { ServicioGeo } from '../../app/services/ServicioGeo';
import { NavigationExtras } from '@angular/router';

@Component({
  selector: 'app-recuperar-clave',
  templateUrl: './recuperar-clave.page.html',
  styleUrls: ['./recuperar-clave.page.scss'],
})
export class RecuperarClavePage implements OnInit {
  forma: FormGroup;
  expEmail = /^[^@\s]+@[^@\s]+\.[^@\s]+$/gm;
  constructor(
    private navCtrl: NavController,
    public utiles: ServicioUtiles,
    public servicioGeo: ServicioGeo,
    public loading: LoadingController,
    private formBuilder: FormBuilder
  ) { }

  ngOnInit() {
    this.cargarForma();
  }
  cargarForma(){
    this.forma = new FormGroup({
      'correo': new FormControl('', [Validators.required, Validators.pattern(this.expEmail)])      
    });
  }
  abrirLogin(){
    this.navCtrl.navigateRoot('nuevo-login');
  }

  async submit(){
    let correo = this.forma.controls.correo ? this.forma.controls.correo.value : '';
    if (correo == ''){
      this.utiles.presentToast('Debe ingresar un correo', 'middle', 2000);
      return;
    }
    
    let loader = await this.loading.create({
      message: 'Verificando...<br>correo',
      duration: 10000
    });

    await loader.present().then(async () => {
      if (!this.utiles.isAppOnDevice()) {
        //llamada web
        this.servicioGeo.postRecuperarClave(correo).subscribe((response: any)=>{
          if (response.CodigoMensaje == 0){
            //aca todo ok
            this.utiles.presentToast(response.Mensaje, 'middle', 3000);
            loader.dismiss();
            //llevar a login
            this.abrirLogin();
          }
          else{
            this.utiles.presentToast(response.Mensaje, 'middle', 3000);
            loader.dismiss();
          }
        });
      }
      else{
        //llamada nativa
        this.servicioGeo.postRecuperarClaveNative(correo).then((response: any)=>{
          let respuesta = JSON.parse(response.data);
          if (respuesta.CodigoMensaje == 0){
            //aca todo ok
            this.utiles.presentToast(respuesta.Mensaje, 'middle', 3000);
            loader.dismiss();
            //llevar a login
            this.abrirLogin();
          }
          else{
            this.utiles.presentToast(respuesta.Mensaje, 'middle', 3000);
            loader.dismiss();
          }
        },
        (error)=>{
          loader.dismiss();
          this.utiles.presentToast('Ocurrió un error de verificación', 'bottom', 4000);
        }
        );
      }
    })

  }

    //para validar
    get f() { return this.forma.controls; }



}