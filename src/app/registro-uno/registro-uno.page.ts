import { Component, OnInit } from '@angular/core';
import { NavController, LoadingController } from '@ionic/angular';
import { FormGroup, Validators, FormBuilder, FormControl, ValidatorFn } from '@angular/forms';
//servicios
import { ServicioUtiles } from '../../app/services/ServicioUtiles';
import { ServicioGeo } from '../../app/services/ServicioGeo';
import { NavigationExtras } from '@angular/router';


@Component({
  selector: 'app-registro-uno',
  templateUrl: './registro-uno.page.html',
  styleUrls: ['./registro-uno.page.scss'],
})
export class RegistroUnoPage implements OnInit {
  rut;
  cargando = false;
  registroIncompleto: any;
  //formulario
  forma: FormGroup;
  //rut = new FormControl('', [Validators.required, this.runValidator]);
  //estoy implementando ell run
  constructor(
    private navCtrl: NavController,
    public utiles: ServicioUtiles,
    public servicioGeo: ServicioGeo,
    public loading: LoadingController,
    private formBuilder: FormBuilder
  ) { 

  }

  ngOnInit() {
    this.cargarForma();
  }
  cargarForma(){
    this.forma = new FormGroup({
      'run': new FormControl('', [Validators.required])      
    },{ validators: this.RunValidator });
  }

  volver(){
    this.navCtrl.navigateRoot('nuevo-login');
  }
  //para validar
  get f() { return this.forma.controls; }
  async verificaRegistro(){
    let run = this.forma.controls.run;
    let idDispositivo = this.utiles.entregaIdDispositivo();

    this.cargando = true;
    let loader = await this.loading.create({
      message: 'Verificando...<br>Registro',
      duration: 3000
    });

    //primero validamos nuevamente si cuenta con registro dentro de la app por run
    await loader.present().then(async () => {
      if (!this.utiles.isAppOnDevice()) {
        //llamada web
        this.servicioGeo.getRegistroAppRun(run.value, idDispositivo).subscribe((response:any)=>{
          //procesar
          //this.procesarInfo(response, loader);
          this.procesarRespuestaRegistro(response, loader);
        })
      }
      else{
        //llamada nativa
        this.servicioGeo.getRegistroAppNativeRun(run.value, idDispositivo).then((response:any)=>{
          var data = JSON.parse(response.data);
          this.procesarRespuestaRegistro(data, loader);
        },
        (error)=>{
          this.utiles.presentToast('Ocurrió un error de obtención identificador', 'bottom', 4000);
          loader.dismiss();
        }
        );
      }
    });

  }
  abrirLogin(){
    this.navCtrl.navigateRoot('nuevo-login');
  }
  procesarRespuestaRegistro(registro, loader){
    if (registro && registro != null){
      //verificamos si tiene su registro completo
      var tieneCorreo = !(registro.CorreoElectronico == null || registro.CorreoElectronico == "" || registro.CorreoElectronico == undefined);
      var tienePassword = !(registro.Password == null || registro.Password == "" || registro.Password == undefined);
      var tieneRun = !(registro.Run == null || registro.Run == "" || registro.Run == undefined);
      var tieneUsuario = !(registro.NombreUsuario == null || registro.NombreUsuario == "" || registro.NombreUsuario == undefined);
      if (tieneCorreo && tienePassword && tieneRun && tieneUsuario){
        //tiene registro completo, enviarlo a la pagina de login
        this.utiles.presentToast('Usted ya tiene registro', 'middle', 5000);
        loader.dismiss();
        this.abrirLogin();
      }
      else{
        //su registro esta incompleto, derivarlo a la pagina de registro de la app
        this.registroIncompleto = registro;
        //pasar como parametro el registro incompleto a la otra pantalla para que pueda completarlo
        //******* LLAMAR A LA PAGINA DE REGISTRO  *************/
        this.utiles.presentToast('Su registro está incompleto', 'middle', 5000);
        loader.dismiss();
        this.irARegistro();
      }
    }
    else{
      //no tiene registro, llamar a la api para buscarlo en rayen
      loader.dismiss();
      //llamamos a enrolamiento
      this.verficarEnrolamientoRayen();
      //console.log('Buscarlo en rayen');

    }
  }
  irARegistro(){
    //enviar registroIncompleto
    if (this.registroIncompleto){
      const navigationExtras: NavigationExtras = {
        queryParams: {
          usuario: JSON.stringify(this.registroIncompleto)
        }
      };
      this.navCtrl.navigateRoot(['registro-usuario'], navigationExtras);
    }

  }
  irAClaveUnica(){
      this.navCtrl.navigateRoot('login-clave-unica');
  }

  async verficarEnrolamientoRayen(){
    let run = this.forma.controls.run;

    this.cargando = true;
    let loader = await this.loading.create({
      message: 'Verificando...<br>Registro',
      duration: 3000
    });

    await loader.present().then(async () => {
      if (!this.utiles.isAppOnDevice()) {
        //llamada web
        this.servicioGeo.verificaEnrolamiento(run.value).subscribe((response:any)=>{
          //procesar
          console.log(response);
          this.procesaRespuestaEnrolamiento(response, loader);
        })
      }
      else{
        //llamada nativa
        this.servicioGeo.verificaEnrolamientoNative(run.value).then((response:any)=>{
          var data = JSON.parse(response.data);
          console.log(data);
          this.procesaRespuestaEnrolamiento(data, loader);
        },
        (error)=>{
          this.utiles.presentToast('Ocurrió un error de obtención identificador', 'bottom', 4000);
          loader.dismiss();
        }
        );
      }
    })

  }
  procesaRespuestaEnrolamiento(usuarioAps, loader){
    if (usuarioAps.RespuestaBase.CodigoMensaje == 0){
      let usuario = usuarioAps.UsuarioAps;
      this.registroIncompleto = {
        Activo: 1,
        Apellidos: usuario.ApellidoPaterno == null ? '' : usuario.ApellidoPaterno + ' ' + usuario.ApellidoMaterno == null ? '': usuario.ApellidoMaterno,
        Apodo: "",
        Avatar: "",
        Comuna: localStorage.getItem("comuna"),
        CorreoElectronico: "",
        Eliminado: 0,
        FechaBaja: "0001-01-01T00:00:00",
        FechaNacimiento: "0001-01-01T00:00:00",
        FechaRegistro: "0001-01-01T00:00:00",
        Id: 0,
        IdDispositivo: localStorage.getItem("token_dispositivo"),
        Latitud: sessionStorage.getItem("latitud"),
        Longitud: sessionStorage.getItem("longitud"),
        //registro mediante el enrolamiento
        ModoRegistro: 2,
        NombreUsuario: "",
        Nombres: usuario.Nombres,
        Pais: localStorage.getItem("pais"),
        Password: "",
        Plataforma: localStorage.getItem("plataforma"),
        Provincia: localStorage.getItem("provincia"),
        Run: this.utiles.insertarGuion(usuario.Rut),
        TelefonoContacto: ''
      }
      loader.dismiss();
      //acá estamos ok deberíamos mandarlo a que complete su fomrulario
      this.irARegistro();
    }
    else {
      //aca definitivamente debemos enviarlo a clave única
      loader.dismiss();
      console.log('clave unica');
      this.irAClaveUnica();
    }
  }


  RunValidator: ValidatorFn = (fg: FormGroup) => {
    const run = fg.get('run').value;
    if (run !== null && run !== "") {
      if (this.utiles.Rut(run) == false) {
        this.forma.controls.run.setErrors({ runInvalido: false });
      }
    }

    return run !== null ? null : null;
  };

}
