import { Component, OnInit } from '@angular/core';
import { NavController, ToastController, Platform, ModalController, LoadingController, MenuController } from '@ionic/angular';
//parametros
import { ActivatedRoute, Router } from '@angular/router';
//SERVICIOS
import { ServicioUtiles } from '../../app/services/ServicioUtiles';
import { ServicioInfoUsuario } from '../../app/services/ServicioInfoUsuario';
import { ServicioAcceso } from '../../app/services/ServicioAcceso';

@Component({
  selector: 'app-detail-usuario',
  templateUrl: './detail-usuario.page.html',
  styleUrls: ['./detail-usuario.page.scss'],
})
export class DetailUsuarioPage implements OnInit {
  miColor = '#FF4081';
  //OTROS DATOS
  public usuario;
  public indicadorValor = [];
  public presiones = [];
  public alergias = [];
  //variables del Formulario
  public valorAltura;
  public fechaAltura;
  public valorPeso;
  public fechaPeso;
  public valorImc;
  public fechaImc;
  public valorPresion;
  public fechaPresion;
  public usuarioAps;
  public cargando = false;
  public userImagen;
  public title;
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
    public info: ServicioInfoUsuario,
    public acceso: ServicioAcceso,
  ) { 

  }

  ngOnInit() {
    this.miColor = this.utiles.entregaMiColor();
    //capturamos los parametros
    this.activatedRoute.queryParams.subscribe(params => {
      if (params && params.usuario) {
        //store the temp in data
        this.usuario = JSON.parse(params.usuario);
        this.userImagen = this.usuario.UrlImagen;
        console.log(this.usuario);
        this.obtenerInfoUsuario(this.usuario.Id);
      }
    });
  }
  loadData(uspId){
    this.info.getIndicadorValor(uspId).subscribe((response: any)=>{
      this.procesarIndicadorValorSinLoader(response);
    });
    this.info.getPresion(uspId).subscribe((response: any)=>{
      this.procesarPresionSinLoader(response);
    });
    this.info.getAlergias(uspId).subscribe((response: any)=>{
      this.procesarAlergiasSinLoader(response);
    });
  }
  async obtenerInfoUsuario(uspId){
    let loader = await this.loading.create({
      message: 'Obteniendo...<br>Información del usuario',
      duration: 20000
    });

    await loader.present().then(async () => {
      if (!this.utiles.isAppOnDevice()) {
        //llamada web
        this.info.getIndicadorValor(uspId).subscribe((response: any)=>{
          this.procesarIndicadorValor(response, loader);
        });
        //presion
        let loader1 = await this.loading.create({
          message: 'Obteniendo...<br>Presión',
          
        });
        await loader1.present().then(async () => {
          this.info.getPresion(uspId).subscribe((response: any)=>{
            this.procesarPresion(response, loader1);
          });
        });
        //alergias
        let loader2 = await this.loading.create({
          message: 'Obteniendo...<br>Alergias',
          
        });
        await loader2.present().then(async () => {
          this.info.getAlergias(uspId).subscribe((response: any)=>{
            this.procesarAlergias(response, loader2);
          });
        });

      }
      else{
        //llamada nativa
        this.info.getIndicadorValorNative(uspId).then((response: any)=>{
          this.procesarIndicadorValor(JSON.parse(response.data), loader);
        });
        //presion
        let loader1 = await this.loading.create({
          message: 'Obteniendo...<br>Presión',
          
        });
        await loader1.present().then(async () => {
          this.info.getPresionNative(uspId).then((response: any)=>{
            this.procesarPresion(JSON.parse(response.data), loader1);
          });
        });
        //alergias
        let loader2 = await this.loading.create({
          message: 'Obteniendo...<br>Alergias',
          
        });
        await loader2.present().then(async () => {
          this.info.getAlergiasNative(uspId).then((response: any)=>{
            this.procesarAlergias(JSON.parse(response.data), loader2);
          });
        });
      }
    });
  }
  procesarAlergias(data, loader){
    this.alergias = data.AlergiasUsp;
    if(this.alergias.length == 1){
      this.title = "Alergia";
    }else{
      this.title = "Alergias";
    }
    loader.dismiss();
  }
  procesarAlergiasSinLoader(data){
    this.alergias = data.AlergiasUsp;
    if(this.alergias.length == 1){
      this.title = "Alergia";
    }else{
      this.title = "Alergias";
    }
  }
  procesarPresion(data, loader){
    this.presiones = data.PresionesUsp;
    if (this.presiones && this.presiones.length > 0){
      //todo ok
      for (var s in this.presiones){
        //altura
        this.valorPresion = this.presiones[s].ValorPresion;
        if (this.presiones[s].FechaPresion == null){
           this.fechaPresion = 'n/a'; 
        }
        else
        {
            this.fechaPresion = this.presiones[s].FechaPresion;
        }
      }

    }
    else {
      //llenar con valores predeterminados
      this.valorPresion = 'N/A';
      this.fechaPresion = 'N/A';
    }
    loader.dismiss();
  }
  procesarPresionSinLoader(data){
    this.presiones = data.PresionesUsp;
    if (this.presiones && this.presiones.length > 0){
      //todo ok
      for (var s in this.presiones){
        //altura
        this.valorPresion = this.presiones[s].ValorPresion;
        if (this.presiones[s].FechaPresion == null){
           this.fechaPresion = 'n/a'; 
        }
        else
        {
            this.fechaPresion = this.presiones[s].FechaPresion;
        }
      }

    }
    else {
      //llenar con valores predeterminados
      this.valorPresion = 'N/A';
      this.fechaPresion = 'N/A';
    }
  }
  procesarIndicadorValor(data, loader){
    this.indicadorValor = data.IndicadorValorUsp;
    if (this.indicadorValor) {
      if (this.indicadorValor.length > 0) {
        //todo ok
        for (var s in this.indicadorValor) {
          //altura
          if (this.indicadorValor[s].Descripcion == 'Altura') {
            this.valorAltura = this.indicadorValor[s].Valor.toString();
            if (this.indicadorValor[s].fecha == null) {
              this.fechaAltura = 'n/a';
            }
            else {
              this.fechaAltura = '3 días';
            }
          }
          //peso
          if (this.indicadorValor[s].Descripcion == 'Peso') {
            this.valorPeso = this.indicadorValor[s].Valor.toString();
            if (this.indicadorValor[s].fecha == null) {
              this.fechaPeso = 'n/a';
            }
            else {
              this.fechaPeso = '3 días';
            }
          }
          //IMC
          if (this.indicadorValor[s].Descripcion == 'I.M.C.') {
            this.valorImc = this.indicadorValor[s].Valor.toString();
            if (this.indicadorValor[s].fecha == null) {
              this.fechaImc = 'n/a';
            }
            else {
              this.fechaImc = '3 días';
            }
          }
        }

      }
      else {
        //llenar con valores predeterminados
        this.valorAltura = 'No informada';
        this.fechaAltura = 'No informada';
        this.valorPeso = 'No informada';
        this.fechaPeso = 'No informada';
        this.valorImc = 'No informada';
        this.fechaImc = 'No informada';
      }
    }
    loader.dismiss();
  }
  procesarIndicadorValorSinLoader(data){
    this.indicadorValor = data.IndicadorValorUsp;
    if (this.indicadorValor) {
      if (this.indicadorValor.length > 0) {
        //todo ok
        for (var s in this.indicadorValor) {
          //altura
          if (this.indicadorValor[s].Descripcion == 'Altura') {
            this.valorAltura = this.indicadorValor[s].Valor.toString();
            if (this.indicadorValor[s].fecha == null) {
              this.fechaAltura = 'n/a';
            }
            else {
              this.fechaAltura = '3 días';
            }
          }
          //peso
          if (this.indicadorValor[s].Descripcion == 'Peso') {
            this.valorPeso = this.indicadorValor[s].Valor.toString();
            if (this.indicadorValor[s].fecha == null) {
              this.fechaPeso = 'n/a';
            }
            else {
              this.fechaPeso = '3 días';
            }
          }
          //IMC
          if (this.indicadorValor[s].Descripcion == 'I.M.C.') {
            this.valorImc = this.indicadorValor[s].Valor.toString();
            if (this.indicadorValor[s].fecha == null) {
              this.fechaImc = 'n/a';
            }
            else {
              this.fechaImc = '3 días';
            }
          }
        }

      }
      else {
        //llenar con valores predeterminados
        this.valorAltura = 'No informada';
        this.fechaAltura = 'No informada';
        this.valorPeso = 'No informada';
        this.fechaPeso = 'No informada';
        this.valorImc = 'No informada';
        this.fechaImc = 'No informada';
      }
    }
    
  }
/*   doRefresh(event) {
    console.log('Begin async operation');

    setTimeout(() => {
      console.log('Async operation has ended');
      this.loadData(this.usuario.Id);
      event.target.complete();
    }, 2000);
  } */
  logout(){
    this.acceso.logout();
    this.navCtrl.navigateRoot('login');
  }
}
