(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["home-home-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/home/home.page.html":
/*!***************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/home/home.page.html ***!
  \***************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-menu side=\"start\" menuId=\"first\" contentId=\"content\">\r\n  <ion-header>\r\n    <!-- <ion-toolbar [style.--background]=\"miColor\"> -->\r\n    <ion-toolbar color=\"primary\">\r\n      <!-- <ion-title class=\"fcw\">Menu</ion-title> -->\r\n    </ion-toolbar>\r\n  </ion-header>\r\n  <ion-content class=\"back-app\">\r\n    <!-- menu avatar -->\r\n    <ion-item lines=\"none\">\r\n      <ion-avatar slot=\"start\">\r\n        <img *ngIf = \"miImagen != ''\" src={{miImagen}}>\r\n        <img *ngIf = \"miImagen == ''\" src=\"../assets/img/no-imagen.jpg\">\r\n      </ion-avatar>\r\n      <ion-row>\r\n        <h3 class=\"text-avatar\">{{miNombre}}</h3>\r\n        <p class=\"subtext-avatar\">{{miInstitucion}}</p>\r\n      </ion-row>\r\n    </ion-item>\r\n    <ion-list>\r\n      <ion-item *ngFor=\"let p of pages\" (click)=\"openPage(p)\" button lines=\"none\">\r\n        <ion-icon name={{p.icon}} slot=\"start\"></ion-icon>\r\n        <ion-label>\r\n          {{p.title}}\r\n        </ion-label>\r\n      </ion-item>\r\n      <!-- cerrar sesión -->\r\n      <ion-item button lines=\"none\" (click)=\"logout()\">\r\n        <ion-icon name=\"close\" slot=\"start\"></ion-icon>\r\n        <ion-label>\r\n          Cerrar sesión\r\n        </ion-label>\r\n      </ion-item>\r\n\r\n    </ion-list>\r\n\r\n  </ion-content>\r\n</ion-menu>\r\n\r\n<ion-header>\r\n  <!-- <ion-toolbar [style.--background]=\"miColor\"> -->\r\n  <ion-toolbar color=\"primary\">\r\n    <ion-buttons slot=\"start\">\r\n      <ion-menu-button class=\"home\"></ion-menu-button>\r\n    </ion-buttons>\r\n    <ion-title class=\"home\">Mi salud familiar</ion-title>\r\n  </ion-toolbar>\r\n</ion-header>\r\n<ion-content class=\"card-background-page-home back-app\" id=\"content\">\r\n  <!-- card antecedentes -->\r\n  <ion-grid>\r\n    <ion-row>\r\n      <label class=\"text-seleccione\">Seleccione una de las siguientes opciones</label>\r\n    </ion-row>\r\n    <ion-row>\r\n      <!-- card antecedentes -->\r\n      <ion-col size=\"6\">\r\n        <mat-card style=\"padding: 0;\" (click)=\"openAntePage()\">\r\n          <img class=\"imgs-home\" src=\"./assets/img/home_antecedentes.png\">\r\n          <mat-card-header style=\"padding-left: 16px;\">\r\n              <!-- <mat-card-subtitle style=\"font-size: 10px; color: #000000DE; padding-top: 14px;margin-bottom: 6px;\">Antecedentes del usuario</mat-card-subtitle> -->\r\n              <mat-card-title style=\"padding-top: 16px;\">Antecedentes</mat-card-title>\r\n          </mat-card-header>\r\n        </mat-card>\r\n      </ion-col>\r\n      <!-- card exámenes -->\r\n      <ion-col size=\"6\">\r\n        <mat-card style=\"padding: 0;\" (click)=\"openOrdenesPage()\">\r\n          <img class=\"imgs-home\" src=\"./assets/img/muestra.jpg\">\r\n          <mat-card-header style=\"padding-left: 16px;\">\r\n              <!-- <mat-card-subtitle style=\"font-size: 10px; color: #000000DE; padding-top: 14px;margin-bottom: 6px;\">Exámenes del usuario</mat-card-subtitle> -->\r\n              <mat-card-title style=\"padding-top: 16px;\">Exámenes</mat-card-title>\r\n          </mat-card-header>\r\n        </mat-card>\r\n      </ion-col>\r\n      <!-- card calendario -->\r\n      <ion-col size=\"6\">\r\n        <mat-card style=\"padding: 0;\" (click)=\"openCalendarioPage()\">\r\n          <img class=\"imgs-home\" src=\"./assets/img/home_calendario.png\">\r\n          <mat-card-header style=\"padding-left: 16px;\">\r\n              <!-- <mat-card-subtitle style=\"font-size: 10px; color: #000000DE; padding-top: 14px;margin-bottom: 6px;\">Calendario del usuario</mat-card-subtitle> -->\r\n              <mat-card-title style=\"padding-top: 16px;\">Calendario</mat-card-title>\r\n          </mat-card-header>\r\n        </mat-card>\r\n      </ion-col>\r\n    </ion-row>\r\n  </ion-grid>\r\n</ion-content>\r\n\r\n\r\n");

/***/ }),

/***/ "./src/app/home/home.module.ts":
/*!*************************************!*\
  !*** ./src/app/home/home.module.ts ***!
  \*************************************/
/*! exports provided: HomePageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomePageModule", function() { return HomePageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _home_page__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./home.page */ "./src/app/home/home.page.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/card */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/card.js");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/button */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/button.js");









let HomePageModule = class HomePageModule {
};
HomePageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonicModule"],
            _angular_material_card__WEBPACK_IMPORTED_MODULE_7__["MatCardModule"],
            _angular_material_button__WEBPACK_IMPORTED_MODULE_8__["MatButtonModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_6__["RouterModule"].forChild([
                {
                    path: '',
                    component: _home_page__WEBPACK_IMPORTED_MODULE_5__["HomePage"]
                }
            ])
        ],
        declarations: [_home_page__WEBPACK_IMPORTED_MODULE_5__["HomePage"]]
    })
], HomePageModule);



/***/ }),

/***/ "./src/app/home/home.page.scss":
/*!*************************************!*\
  !*** ./src/app/home/home.page.scss ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("#container {\n  text-align: center;\n  position: absolute;\n  left: 0;\n  right: 0;\n  top: 50%;\n  transform: translateY(-50%);\n}\n\n#container strong {\n  font-size: 20px;\n  line-height: 26px;\n}\n\n#container p {\n  font-size: 16px;\n  line-height: 22px;\n  color: #8c8c8c;\n  margin: 0;\n}\n\n#container a {\n  text-decoration: none;\n}\n\n.reservar {\n  margin-top: -70px;\n  float: right;\n  margin-right: 20px;\n  --background: var(--ion-color-primary);\n  color: white;\n  padding: 20px;\n  font-size: 1.2em;\n}\n\n.footer {\n  width: 100%;\n  position: fixed;\n  left: 0;\n  bottom: 0;\n  text-align: end;\n}\n\n/* elementos del menu */\n\n.text-avatar {\n  font-family: \"Roboto\";\n  letter-spacing: 0.15px;\n  color: #000000DE;\n  font-size: 1.25em;\n  margin-bottom: 0;\n}\n\n.subtext-avatar {\n  font-family: \"Roboto\";\n  letter-spacing: 0.25px;\n  color: #00000099;\n  font-size: 0.875em;\n  margin-bottom: 0;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaG9tZS9GOlxcYXBwX21pZmFtaWxpYV9naXRcXG1pRmFtaWxpYV9wcmUvc3JjXFxhcHBcXGhvbWVcXGhvbWUucGFnZS5zY3NzIiwic3JjL2FwcC9ob21lL2hvbWUucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0Usa0JBQUE7RUFFQSxrQkFBQTtFQUNBLE9BQUE7RUFDQSxRQUFBO0VBQ0EsUUFBQTtFQUNBLDJCQUFBO0FDQUY7O0FER0E7RUFDRSxlQUFBO0VBQ0EsaUJBQUE7QUNBRjs7QURHQTtFQUNFLGVBQUE7RUFDQSxpQkFBQTtFQUVBLGNBQUE7RUFFQSxTQUFBO0FDRkY7O0FES0E7RUFDRSxxQkFBQTtBQ0ZGOztBRElBO0VBQ0UsaUJBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7RUFDQSxzQ0FBQTtFQUNBLFlBQUE7RUFDQSxhQUFBO0VBQ0EsZ0JBQUE7QUNERjs7QURHQTtFQUNFLFdBQUE7RUFDQSxlQUFBO0VBQ0EsT0FBQTtFQUNBLFNBQUE7RUFDQSxlQUFBO0FDQUY7O0FERUEsdUJBQUE7O0FBQ0E7RUFDRSxxQkFBQTtFQUNBLHNCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxpQkFBQTtFQUNBLGdCQUFBO0FDQ0Y7O0FEQ0E7RUFDRSxxQkFBQTtFQUNBLHNCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxrQkFBQTtFQUNBLGdCQUFBO0FDRUYiLCJmaWxlIjoic3JjL2FwcC9ob21lL2hvbWUucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiI2NvbnRhaW5lciB7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG5cclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgbGVmdDogMDtcclxuICByaWdodDogMDtcclxuICB0b3A6IDUwJTtcclxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTUwJSk7XHJcbn1cclxuXHJcbiNjb250YWluZXIgc3Ryb25nIHtcclxuICBmb250LXNpemU6IDIwcHg7XHJcbiAgbGluZS1oZWlnaHQ6IDI2cHg7XHJcbn1cclxuXHJcbiNjb250YWluZXIgcCB7XHJcbiAgZm9udC1zaXplOiAxNnB4O1xyXG4gIGxpbmUtaGVpZ2h0OiAyMnB4O1xyXG5cclxuICBjb2xvcjogIzhjOGM4YztcclxuXHJcbiAgbWFyZ2luOiAwO1xyXG59XHJcblxyXG4jY29udGFpbmVyIGEge1xyXG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxufVxyXG4ucmVzZXJ2YXJ7XHJcbiAgbWFyZ2luLXRvcDogLTcwcHg7XHJcbiAgZmxvYXQ6IHJpZ2h0O1xyXG4gIG1hcmdpbi1yaWdodDogMjBweDtcclxuICAtLWJhY2tncm91bmQ6IHZhcigtLWlvbi1jb2xvci1wcmltYXJ5KTtcclxuICBjb2xvcjogd2hpdGU7XHJcbiAgcGFkZGluZzogMjBweDtcclxuICBmb250LXNpemU6IDEuMmVtO1xyXG59XHJcbi5mb290ZXIge1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIHBvc2l0aW9uOiBmaXhlZDtcclxuICBsZWZ0OiAwO1xyXG4gIGJvdHRvbTogMDtcclxuICB0ZXh0LWFsaWduOiBlbmQ7O1xyXG59XHJcbi8qIGVsZW1lbnRvcyBkZWwgbWVudSAqL1xyXG4udGV4dC1hdmF0YXJ7XHJcbiAgZm9udC1mYW1pbHk6ICdSb2JvdG8nO1xyXG4gIGxldHRlci1zcGFjaW5nOiAwLjE1cHg7XHJcbiAgY29sb3I6ICMwMDAwMDBERTtcclxuICBmb250LXNpemU6IDEuMjVlbTtcclxuICBtYXJnaW4tYm90dG9tOiAwO1xyXG59XHJcbi5zdWJ0ZXh0LWF2YXRhcntcclxuICBmb250LWZhbWlseTogJ1JvYm90byc7XHJcbiAgbGV0dGVyLXNwYWNpbmc6IDAuMjVweDtcclxuICBjb2xvcjogIzAwMDAwMDk5O1xyXG4gIGZvbnQtc2l6ZTogMC44NzVlbTtcclxuICBtYXJnaW4tYm90dG9tOiAwO1xyXG59IiwiI2NvbnRhaW5lciB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBsZWZ0OiAwO1xuICByaWdodDogMDtcbiAgdG9wOiA1MCU7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtNTAlKTtcbn1cblxuI2NvbnRhaW5lciBzdHJvbmcge1xuICBmb250LXNpemU6IDIwcHg7XG4gIGxpbmUtaGVpZ2h0OiAyNnB4O1xufVxuXG4jY29udGFpbmVyIHAge1xuICBmb250LXNpemU6IDE2cHg7XG4gIGxpbmUtaGVpZ2h0OiAyMnB4O1xuICBjb2xvcjogIzhjOGM4YztcbiAgbWFyZ2luOiAwO1xufVxuXG4jY29udGFpbmVyIGEge1xuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG59XG5cbi5yZXNlcnZhciB7XG4gIG1hcmdpbi10b3A6IC03MHB4O1xuICBmbG9hdDogcmlnaHQ7XG4gIG1hcmdpbi1yaWdodDogMjBweDtcbiAgLS1iYWNrZ3JvdW5kOiB2YXIoLS1pb24tY29sb3ItcHJpbWFyeSk7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgcGFkZGluZzogMjBweDtcbiAgZm9udC1zaXplOiAxLjJlbTtcbn1cblxuLmZvb3RlciB7XG4gIHdpZHRoOiAxMDAlO1xuICBwb3NpdGlvbjogZml4ZWQ7XG4gIGxlZnQ6IDA7XG4gIGJvdHRvbTogMDtcbiAgdGV4dC1hbGlnbjogZW5kO1xufVxuXG4vKiBlbGVtZW50b3MgZGVsIG1lbnUgKi9cbi50ZXh0LWF2YXRhciB7XG4gIGZvbnQtZmFtaWx5OiBcIlJvYm90b1wiO1xuICBsZXR0ZXItc3BhY2luZzogMC4xNXB4O1xuICBjb2xvcjogIzAwMDAwMERFO1xuICBmb250LXNpemU6IDEuMjVlbTtcbiAgbWFyZ2luLWJvdHRvbTogMDtcbn1cblxuLnN1YnRleHQtYXZhdGFyIHtcbiAgZm9udC1mYW1pbHk6IFwiUm9ib3RvXCI7XG4gIGxldHRlci1zcGFjaW5nOiAwLjI1cHg7XG4gIGNvbG9yOiAjMDAwMDAwOTk7XG4gIGZvbnQtc2l6ZTogMC44NzVlbTtcbiAgbWFyZ2luLWJvdHRvbTogMDtcbn0iXX0= */");

/***/ }),

/***/ "./src/app/home/home.page.ts":
/*!***********************************!*\
  !*** ./src/app/home/home.page.ts ***!
  \***********************************/
/*! exports provided: HomePage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomePage", function() { return HomePage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _app_services_ServicioUtiles__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../app/services/ServicioUtiles */ "./src/app/services/ServicioUtiles.ts");
/* harmony import */ var _app_services_ServicioAcceso__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../app/services/ServicioAcceso */ "./src/app/services/ServicioAcceso.ts");
/* harmony import */ var _app_services_ServicioCitas__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../app/services/ServicioCitas */ "./src/app/services/ServicioCitas.ts");






let HomePage = class HomePage {
    constructor(navCtrl, toast, modalCtrl, platform, loading, menu, utiles, acceso, cita) {
        this.navCtrl = navCtrl;
        this.toast = toast;
        this.modalCtrl = modalCtrl;
        this.platform = platform;
        this.loading = loading;
        this.menu = menu;
        this.utiles = utiles;
        this.acceso = acceso;
        this.cita = cita;
        this.miColor = '#FF4081';
        this.pages = [];
        //datos para consultar citas
        this.runPaciente = '';
        this.codigoDeis = '';
        this.serviceType = '349';
        //semanas
        this.semanas = [];
        //tiene disponibilidad
        this.tieneCitaVigente = false;
        this.usaAgenda = false;
        //ESTOY TRABAJANDO EN LA DISPONIBILIDAD
        //HAY UNA VARIABLE DE SESXSION LLAMADA OPERACION
        //QUE SE ACTUALIZA SI ENCUENTRA O NO DISPONIBILIDAD
        //PARA LLAMAR A BUSCARDISPONIBILIDAD O BUSCARCITAS DEL PACIENTE
        this.pushes = [];
    }
    ngOnInit() {
        //this.miColor = this.utiles.entregaMiColor();
        this.usuarioAps = JSON.parse(sessionStorage.UsuarioAps);
        this.miColor = this.utiles.entregaColor(this.usuarioAps);
        //this.miImagen = this.utiles.entregaMiImagen();
        this.miImagen = this.utiles.entregaImagen(this.usuarioAps);
        this.miNombre = this.utiles.entregaMiNombre();
        if (this.usuarioAps.Establecimiento) {
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
        this.miImagen = this.utiles.entregaImagen(this.usuarioAps);
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
    openFamiliaPage() {
        this.navCtrl.navigateRoot('familia');
    }
    openAntePage() {
        this.navCtrl.navigateRoot('antecedentes');
    }
    openOrdenesPage() {
        this.navCtrl.navigateRoot('ordenes');
    }
    openCalendarioPage() {
        this.navCtrl.navigateRoot('calendario');
    }
    logout() {
        this.acceso.logout();
        this.navCtrl.navigateRoot('login');
    }
    openReservarHoraPage() {
        this.navCtrl.navigateRoot('pre-tiposatencion');
    }
};
HomePage.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ToastController"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ModalController"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["Platform"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["LoadingController"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["MenuController"] },
    { type: _app_services_ServicioUtiles__WEBPACK_IMPORTED_MODULE_3__["ServicioUtiles"] },
    { type: _app_services_ServicioAcceso__WEBPACK_IMPORTED_MODULE_4__["ServicioAcceso"] },
    { type: _app_services_ServicioCitas__WEBPACK_IMPORTED_MODULE_5__["ServicioCitas"] }
];
HomePage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-home',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./home.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/home/home.page.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./home.page.scss */ "./src/app/home/home.page.scss")).default]
    })
], HomePage);



/***/ })

}]);
//# sourceMappingURL=home-home-module-es2015.js.map