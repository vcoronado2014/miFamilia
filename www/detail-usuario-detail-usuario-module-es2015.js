(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["detail-usuario-detail-usuario-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/detail-usuario/detail-usuario.page.html":
/*!***********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/detail-usuario/detail-usuario.page.html ***!
  \***********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\r\n  <!-- <ion-toolbar [style.--background]=\"miColor\" mode=\"md\"> -->\r\n  <ion-toolbar color=\"primary\" mode=\"md\">\r\n    <ion-buttons slot=\"start\">\r\n      <ion-back-button defaultHref=\"/antecedentes\" class=\"fcw\"></ion-back-button>\r\n    </ion-buttons>\r\n    <ion-title class=\"fcw\">Detalle</ion-title>\r\n  </ion-toolbar>\r\n</ion-header>\r\n<ion-content class=\"back-app\">\r\n<!--   <ion-refresher slot=\"fixed\" (ionRefresh)=\"doRefresh($event)\">\r\n    <ion-refresher-content></ion-refresher-content>\r\n  </ion-refresher> -->\r\n  <ion-card>\r\n    <img *ngIf=\"usuario.UrlImagen != ''\" src={{usuario.UrlImagen}} style=\"width: 100%;\" />\r\n    <ion-card-header>\r\n      <ion-card-title class=\"ion-text-wrap\" [style.--color]=\"miColor\">{{usuario.Nombres + ' ' + usuario.ApellidoPaterno + ' ' + usuario.ApellidoMaterno}}</ion-card-title>\r\n    </ion-card-header>\r\n    <ion-card-content>\r\n      <ion-item lines=\"none\">\r\n        <ion-label>Edad: {{usuario.Edad}} años.</ion-label>\r\n        <ion-badge slot=\"end\">{{usuario.Parentezco.Nombre}}</ion-badge>\r\n      </ion-item>\r\n\r\n    </ion-card-content>\r\n  </ion-card> \r\n  <!-- aca viene la lista de datos personales presion, altura, etc-->\r\n  <ion-list>\r\n    <ion-item>\r\n      <ion-icon name=\"pulse\" slot=\"start\"></ion-icon>\r\n      <ion-label>Presión</ion-label>\r\n      <ion-label slot=\"end\" class=\"ion-text-right\">{{valorPresion}}</ion-label>\r\n    </ion-item>\r\n    <ion-item>\r\n      <ion-icon name=\"body\" slot=\"start\"></ion-icon>\r\n      <ion-label>Altura</ion-label>\r\n      <ion-label slot=\"end\" class=\"ion-text-right\">{{valorAltura}}<span *ngIf=\"valorAltura != 'No informada'\">&nbsp;cm</span></ion-label>\r\n    </ion-item>\r\n    <ion-item>\r\n      <ion-icon name=\"logo-buffer\" slot=\"start\"></ion-icon>\r\n      <ion-label>Peso</ion-label>\r\n      <ion-label slot=\"end\" class=\"ion-text-right\">{{valorPeso}}<span *ngIf=\"valorPeso != 'No informado'\">&nbsp;Kg</span></ion-label>\r\n    </ion-item>\r\n    <ion-item>\r\n      <ion-icon name=\"heart\" slot=\"start\"></ion-icon>\r\n      <ion-label>IMC</ion-label>\r\n      <ion-label slot=\"end\" class=\"ion-text-right\">{{valorImc}}</ion-label>\r\n    </ion-item>\r\n\r\n  </ion-list>\r\n  <!-- aca poner el listado de alergias --> \r\n  <ion-list>\r\n    <ion-list-header>\r\n      <h5>{{title}}</h5>\r\n    </ion-list-header>\r\n    <ion-item *ngFor=\"let item of alergias\" class =\"lista-alergias\">\r\n      <ion-icon name=\"medkit\" slot=\"start\"></ion-icon>\r\n      <ion-label>{{item.Descripcion}}</ion-label>\r\n    </ion-item>\r\n  </ion-list> \r\n</ion-content>\r\n");

/***/ }),

/***/ "./src/app/detail-usuario/detail-usuario.module.ts":
/*!*********************************************************!*\
  !*** ./src/app/detail-usuario/detail-usuario.module.ts ***!
  \*********************************************************/
/*! exports provided: DetailUsuarioPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DetailUsuarioPageModule", function() { return DetailUsuarioPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _detail_usuario_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./detail-usuario.page */ "./src/app/detail-usuario/detail-usuario.page.ts");







let DetailUsuarioPageModule = class DetailUsuarioPageModule {
};
DetailUsuarioPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterModule"].forChild([
                {
                    path: '',
                    component: _detail_usuario_page__WEBPACK_IMPORTED_MODULE_6__["DetailUsuarioPage"]
                }
            ])
        ],
        declarations: [_detail_usuario_page__WEBPACK_IMPORTED_MODULE_6__["DetailUsuarioPage"]]
    })
], DetailUsuarioPageModule);



/***/ }),

/***/ "./src/app/detail-usuario/detail-usuario.page.scss":
/*!*********************************************************!*\
  !*** ./src/app/detail-usuario/detail-usuario.page.scss ***!
  \*********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2RldGFpbC11c3VhcmlvL2RldGFpbC11c3VhcmlvLnBhZ2Uuc2NzcyJ9 */");

/***/ }),

/***/ "./src/app/detail-usuario/detail-usuario.page.ts":
/*!*******************************************************!*\
  !*** ./src/app/detail-usuario/detail-usuario.page.ts ***!
  \*******************************************************/
/*! exports provided: DetailUsuarioPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DetailUsuarioPage", function() { return DetailUsuarioPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _app_services_ServicioUtiles__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../app/services/ServicioUtiles */ "./src/app/services/ServicioUtiles.ts");
/* harmony import */ var _app_services_ServicioInfoUsuario__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../app/services/ServicioInfoUsuario */ "./src/app/services/ServicioInfoUsuario.ts");
/* harmony import */ var _app_services_ServicioAcceso__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../app/services/ServicioAcceso */ "./src/app/services/ServicioAcceso.ts");
/* harmony import */ var _app_services_ServicioParametrosApp__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../app/services/ServicioParametrosApp */ "./src/app/services/ServicioParametrosApp.ts");



//parametros

//SERVICIOS




let DetailUsuarioPage = class DetailUsuarioPage {
    constructor(navCtrl, toast, modalCtrl, platform, menu, activatedRoute, router, utiles, loading, info, acceso, parametrosApp) {
        this.navCtrl = navCtrl;
        this.toast = toast;
        this.modalCtrl = modalCtrl;
        this.platform = platform;
        this.menu = menu;
        this.activatedRoute = activatedRoute;
        this.router = router;
        this.utiles = utiles;
        this.loading = loading;
        this.info = info;
        this.acceso = acceso;
        this.parametrosApp = parametrosApp;
        this.miColor = '#FF4081';
        this.indicadorValor = [];
        this.presiones = [];
        this.alergias = [];
        this.cargando = false;
    }
    //ARREGLAR TEMAS DE COLORES Y URL CUANDO SON VARIOS MIEMBROS DE LA FAMILIA
    ngOnInit() {
        //this.miColor = this.utiles.entregaMiColor();
        //capturamos los parametros
        this.activatedRoute.queryParams.subscribe(params => {
            if (params && params.usuario) {
                //store the temp in data
                this.usuario = JSON.parse(params.usuario);
                if (this.usuario.Parentezco && this.usuario.Parentezco.Id > 0) {
                    if (this.usuario.Parentezco.Nombre.toUpperCase() == 'LA MISMA PERSONA') {
                        this.usuario.Parentezco.Nombre = 'Yo';
                    }
                }
                else {
                    this.usuario.Parentezco.Nombre = 'No informado';
                }
                this.userImagen = this.usuario.UrlImagen;
                this.miColor = this.utiles.entregaColor(this.usuario);
                console.log(this.usuario);
                this.obtenerInfoUsuario(this.usuario.Id);
            }
        });
    }
    obtenerInfoUsuario(uspId) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            let loader = yield this.loading.create({
                message: 'Obteniendo...<br>Información del usuario',
                duration: 20000
            });
            yield loader.present().then(() => Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
                if (!this.utiles.isAppOnDevice()) {
                    //llamada web
                    if (this.parametrosApp.USA_API_MANAGEMENT()) {
                        //llamada api management
                        this.info.getIndicadorValorApi(uspId).subscribe((response) => {
                            this.procesarIndicadorValor(response, loader);
                        });
                        //presion
                        let loader1 = yield this.loading.create({
                            message: 'Obteniendo...<br>Presión',
                        });
                        yield loader1.present().then(() => Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
                            this.info.getPresionApi(uspId).subscribe((response) => {
                                this.procesarPresion(response, loader1);
                            });
                        }));
                        //alergias
                        let loader2 = yield this.loading.create({
                            message: 'Obteniendo...<br>Alergias',
                        });
                        yield loader2.present().then(() => Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
                            this.info.getAlergiasApi(uspId).subscribe((response) => {
                                this.procesarAlergias(response, loader2);
                            });
                        }));
                    }
                    else {
                        this.info.getIndicadorValor(uspId).subscribe((response) => {
                            this.procesarIndicadorValor(response, loader);
                        });
                        //presion
                        let loader1 = yield this.loading.create({
                            message: 'Obteniendo...<br>Presión',
                        });
                        yield loader1.present().then(() => Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
                            this.info.getPresion(uspId).subscribe((response) => {
                                this.procesarPresion(response, loader1);
                            });
                        }));
                        //alergias
                        let loader2 = yield this.loading.create({
                            message: 'Obteniendo...<br>Alergias',
                        });
                        yield loader2.present().then(() => Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
                            this.info.getAlergias(uspId).subscribe((response) => {
                                this.procesarAlergias(response, loader2);
                            });
                        }));
                    }
                }
                else {
                    if (this.parametrosApp.USA_API_MANAGEMENT()) {
                        //llamada nativa
                        this.info.getIndicadorValorNativeApi(uspId).then((response) => {
                            this.procesarIndicadorValor(JSON.parse(response.data), loader);
                        });
                        //presion
                        let loader1 = yield this.loading.create({
                            message: 'Obteniendo...<br>Presión',
                        });
                        yield loader1.present().then(() => Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
                            this.info.getPresionNativeApi(uspId).then((response) => {
                                this.procesarPresion(JSON.parse(response.data), loader1);
                            });
                        }));
                        //alergias
                        let loader2 = yield this.loading.create({
                            message: 'Obteniendo...<br>Alergias',
                        });
                        yield loader2.present().then(() => Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
                            this.info.getAlergiasNativeApi(uspId).then((response) => {
                                this.procesarAlergias(JSON.parse(response.data), loader2);
                            });
                        }));
                    }
                    else {
                        //llamada nativa
                        this.info.getIndicadorValorNative(uspId).then((response) => {
                            this.procesarIndicadorValor(JSON.parse(response.data), loader);
                        });
                        //presion
                        let loader1 = yield this.loading.create({
                            message: 'Obteniendo...<br>Presión',
                        });
                        yield loader1.present().then(() => Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
                            this.info.getPresionNative(uspId).then((response) => {
                                this.procesarPresion(JSON.parse(response.data), loader1);
                            });
                        }));
                        //alergias
                        let loader2 = yield this.loading.create({
                            message: 'Obteniendo...<br>Alergias',
                        });
                        yield loader2.present().then(() => Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
                            this.info.getAlergiasNative(uspId).then((response) => {
                                this.procesarAlergias(JSON.parse(response.data), loader2);
                            });
                        }));
                    }
                }
            }));
        });
    }
    procesarAlergias(data, loader) {
        this.alergias = data.AlergiasUsp;
        if (this.alergias) {
            if (this.alergias.length == 1) {
                this.title = "Alergia";
            }
            else {
                this.title = "Alergias";
            }
        }
        loader.dismiss();
    }
    procesarAlergiasSinLoader(data) {
        this.alergias = data.AlergiasUsp;
        if (this.alergias.length == 1) {
            this.title = "Alergia";
        }
        else {
            this.title = "Alergias";
        }
    }
    procesarPresion(data, loader) {
        this.presiones = data.PresionesUsp;
        if (this.presiones && this.presiones.length > 0) {
            //todo ok
            for (var s in this.presiones) {
                //altura
                this.valorPresion = this.presiones[s].ValorPresion;
                if (this.presiones[s].FechaPresion == null) {
                    this.fechaPresion = 'n/a';
                }
                else {
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
    procesarPresionSinLoader(data) {
        this.presiones = data.PresionesUsp;
        if (this.presiones && this.presiones.length > 0) {
            //todo ok
            for (var s in this.presiones) {
                //altura
                this.valorPresion = this.presiones[s].ValorPresion;
                if (this.presiones[s].FechaPresion == null) {
                    this.fechaPresion = 'n/a';
                }
                else {
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
    procesarIndicadorValor(data, loader) {
        this.indicadorValor = data.IndicadorValorUsp;
        if (this.indicadorValor) {
            if (this.indicadorValor.length > 0) {
                //todo ok
                for (var s in this.indicadorValor) {
                    //altura
                    if (this.indicadorValor[s].Descripcion.includes('Altura') || this.indicadorValor[s].Descripcion.includes('Talla')) {
                        this.valorAltura = this.indicadorValor[s].Valor.toString();
                        if (this.indicadorValor[s].fecha == null) {
                            this.fechaAltura = 'n/a';
                        }
                        else {
                            this.fechaAltura = '3 días';
                        }
                    }
                    //peso
                    if (this.indicadorValor[s].Descripcion.includes('Peso')) {
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
                this.valorPeso = 'No informado';
                this.fechaPeso = 'No informada';
                this.valorImc = 'No informado';
                this.fechaImc = 'No informada';
            }
        }
        else {
            //viene valor nulo
            //llenar con valores predeterminados
            this.valorAltura = 'No informada';
            this.fechaAltura = 'No informada';
            this.valorPeso = 'No informado';
            this.fechaPeso = 'No informada';
            this.valorImc = 'No informado';
            this.fechaImc = 'No informada';
        }
        loader.dismiss();
    }
    /*   doRefresh(event) {
        console.log('Begin async operation');
    
        setTimeout(() => {
          console.log('Async operation has ended');
          this.loadData(this.usuario.Id);
          event.target.complete();
        }, 2000);
      } */
    logout() {
        this.acceso.logout();
        this.navCtrl.navigateRoot('login');
    }
};
DetailUsuarioPage.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ToastController"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ModalController"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["Platform"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["MenuController"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] },
    { type: _app_services_ServicioUtiles__WEBPACK_IMPORTED_MODULE_4__["ServicioUtiles"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["LoadingController"] },
    { type: _app_services_ServicioInfoUsuario__WEBPACK_IMPORTED_MODULE_5__["ServicioInfoUsuario"] },
    { type: _app_services_ServicioAcceso__WEBPACK_IMPORTED_MODULE_6__["ServicioAcceso"] },
    { type: _app_services_ServicioParametrosApp__WEBPACK_IMPORTED_MODULE_7__["ServicioParametrosApp"] }
];
DetailUsuarioPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-detail-usuario',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./detail-usuario.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/detail-usuario/detail-usuario.page.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./detail-usuario.page.scss */ "./src/app/detail-usuario/detail-usuario.page.scss")).default]
    })
], DetailUsuarioPage);



/***/ })

}]);
//# sourceMappingURL=detail-usuario-detail-usuario-module-es2015.js.map