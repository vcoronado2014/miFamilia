(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["detail-usuario-detail-usuario-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/detail-usuario/detail-usuario.page.html":
/*!***********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/detail-usuario/detail-usuario.page.html ***!
  \***********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\r\n  <!-- <ion-toolbar [style.--background]=\"miColor\" mode=\"md\"> -->\r\n  <ion-toolbar color=\"primary\" mode=\"md\">\r\n    <ion-buttons slot=\"start\">\r\n      <ion-back-button defaultHref=\"/antecedentes\" class=\"fcw\"></ion-back-button>\r\n    </ion-buttons>\r\n    <ion-title class=\"fcw\">Antecedentes</ion-title>\r\n  </ion-toolbar>\r\n</ion-header>\r\n<ion-content class=\"back-app\">\r\n  \r\n  <app-progress [mostrar]=\"estaCargando\" [titulo]=\"tituloProgress\"></app-progress>\r\n  \r\n<!--   <ion-item lines=\"none\" [hidden]=\"estaCargando\" style=\"padding-top: 15px;\">\r\n    <app-avatar [style]=\"false\" [urlImagen] = \"usuario.UrlImagen\" [nombreCompleto]=\"usuario.Nombres + ' ' + usuario.ApellidoPaterno + ' ' + usuario.ApellidoMaterno\" [parentezco]=\"usuario.Parentezco.Nombre\"></app-avatar>\r\n  </ion-item> -->\r\n\r\n<!--   <ion-grid [hidden]=\"estaCargando\">\r\n    \r\n      <ion-slides pager=\"true\" [options]=\"slideOpts\" #mySlider class=\"slides-back\" style=\"padding-bottom: 30px;\">\r\n        <ion-slide class=\"row ion-no-padding\" *ngIf=\"arrMedicionesParteUno.length > 0\" style=\"justify-content: left;\">\r\n            <ion-col size=\"4\" class=\"ion-no-padding\" *ngFor=\"let sl of arrMedicionesParteUno\">\r\n              <ion-card style=\"margin: 5px;\">\r\n                <ion-card-header style=\"background: #D1C4E9;\">\r\n                  <ion-card-subtitle style=\"color: #000000DE;font-size: 16pt;\">{{sl.Nombre}}</ion-card-subtitle>\r\n                </ion-card-header>\r\n                <ion-card-content style=\"display: block;padding-left: 5px;padding-right: 5px;\" class=\"ion-text-center\">\r\n                  <div style=\"margin-top: 11px;color: #000000DE;font-size: 20pt;\">{{sl.Valor.toString()}}&nbsp;\r\n                    <span *ngIf=\"sl.Medida == 'mg/dl'\" style=\"font-size: 12pt;\">{{sl.Medida}}</span>\r\n                    <span *ngIf=\"sl.Medida != 'mg/dl'\" style=\"font-size: 20pt;\">{{sl.Medida}}</span>\r\n                  </div>\r\n                  <div style=\"margin-top: 8px;font-size: 12pt;color: #0000008A;\">{{sl.Fecha}}</div>\r\n                </ion-card-content>\r\n              </ion-card>\r\n            </ion-col>\r\n\r\n        </ion-slide>\r\n        <ion-slide class=\"row ion-no-padding\" style=\"justify-content: left;\" *ngIf=\"arrMedicionesParteDos.length > 0\">\r\n          <ion-col size=\"4\" class=\"ion-no-padding\" *ngFor=\"let dl of arrMedicionesParteDos\">\r\n            <ion-card style=\"margin: 5px;\">\r\n              <ion-card-header style=\"background: #D1C4E9;\">\r\n                <ion-card-subtitle style=\"color: #000000DE;font-size: 16pt;\">{{dl.Nombre}}</ion-card-subtitle>\r\n              </ion-card-header>\r\n              <ion-card-content style=\"display: block;padding-left: 5px;padding-right: 5px;\" class=\"ion-text-center\">\r\n                <div style=\"margin-top: 11px;color: #000000DE;font-size: 20pt;\">{{dl.Valor.toString()}}&nbsp;\r\n                  <span *ngIf=\"dl.Medida == 'mg/dl'\" style=\"font-size: 12pt;\">{{dl.Medida}}</span>\r\n                  <span *ngIf=\"dl.Medida != 'mg/dl'\" style=\"font-size: 20pt;\">{{dl.Medida}}</span>\r\n                </div>\r\n                <div style=\"margin-top: 8px;font-size: 12pt;color: #0000008A;\">{{dl.Fecha}}</div>\r\n              </ion-card-content>\r\n            </ion-card>\r\n          </ion-col>\r\n\r\n      </ion-slide>\r\n      </ion-slides>\r\n    \r\n  </ion-grid> -->\r\n\r\n  \r\n<!--   <ion-list [hidden]=\"estaCargando\" style=\"padding-top: 0;\">\r\n    <ion-list-header *ngIf=\"alergias && alergias.length > 0\" style=\"background-color: #FAF9FA;\">\r\n      <div style=\"font-weight: 500; color: #000000DE; font-size: 14pt; margin-top: 0;margin-bottom: 24px;\">{{title}}</div>\r\n    </ion-list-header>\r\n    <ion-item *ngFor=\"let item of alergias\" class =\"lista-alergias\">\r\n      <ion-label class=\"ion-text-wrap\" style=\"color:#000000DE;font-size: 16pt;text-transform: capitalize;\">{{item.Descripcion.toLowerCase()}}</ion-label>\r\n    </ion-item>\r\n    <ion-list-header *ngIf=\"personales && personales.length > 0\" style=\"background-color: #FAF9FA;\">\r\n      <div style=\"font-weight: 500; color: #000000DE; font-size: 14pt; margin-top: 24px;margin-bottom: 24px;\">Diagnósticos relevantes</div>\r\n    </ion-list-header>\r\n    <ion-item *ngFor=\"let ante of personales\" class =\"lista-alergias\">\r\n      <ion-label class=\"ion-text-wrap\" style=\"color:#000000DE;font-size: 16pt;\">{{ante.Nombre}}</ion-label>\r\n    </ion-item>\r\n    <ion-list-header *ngIf=\"familiares && familiares.length > 0\" style=\"background-color: #FAF9FA;\">\r\n      <div style=\"font-weight: 500; color: #000000DE; font-size: 14pt; margin-top: 24px;margin-bottom: 24px;\">Diagnósticos familiares relevantes</div>\r\n    </ion-list-header>\r\n    <ion-item *ngFor=\"let fam of familiares\" class =\"lista-alergias\">\r\n      <ion-label class=\"ion-text-wrap\" style=\"color:#000000DE;font-size: 16pt;\">{{fam.Nombre}}</ion-label>\r\n    </ion-item>\r\n  </ion-list> -->\r\n  \r\n  <!-- implementacion con spinner independiente -->\r\n\r\n  <ion-item lines=\"none\" style=\"padding-top: 15px;\">\r\n    <app-avatar [style]=\"false\" [urlImagen] = \"usuario.UrlImagen\" [nombreCompleto]=\"usuario.Nombres + ' ' + usuario.ApellidoPaterno + ' ' + usuario.ApellidoMaterno\" [parentezco]=\"usuario.Parentezco.Nombre\"></app-avatar>\r\n  </ion-item>\r\n  <app-progress-minimo [mostrar]=\"estaCargandoDatosUsuario\" [titulo]=\"tituloProgressDatosUsuario\"></app-progress-minimo>\r\n  <ion-grid [hidden]=\"estaCargandoDatosUsuario\">\r\n  \r\n    <ion-slides pager=\"true\" [options]=\"slideOpts\" #mySlider class=\"slides-back\" style=\"padding-bottom: 30px;\">\r\n      <ion-slide class=\"row ion-no-padding\" *ngIf=\"arrMedicionesParteUno.length > 0\" style=\"justify-content: left;\">\r\n        <ion-col size=\"4\" class=\"ion-no-padding\" *ngFor=\"let sl of arrMedicionesParteUno\">\r\n          <ion-card style=\"margin: 5px;\">\r\n            <ion-card-header style=\"background: #D1C4E9;\">\r\n              <ion-card-subtitle style=\"color: #000000DE;font-size: 16pt;\">{{sl.Nombre}}</ion-card-subtitle>\r\n            </ion-card-header>\r\n            <ion-card-content style=\"display: block;padding-left: 5px;padding-right: 5px;\" class=\"ion-text-center\">\r\n              <div style=\"margin-top: 11px;color: #000000DE;font-size: 20pt;\">{{sl.Valor.toString()}}&nbsp;\r\n                <span *ngIf=\"sl.Medida == 'mg/dl'\" style=\"font-size: 12pt;\">{{sl.Medida}}</span>\r\n                <span *ngIf=\"sl.Medida != 'mg/dl'\" style=\"font-size: 20pt;\">{{sl.Medida}}</span>\r\n              </div>\r\n              <div style=\"margin-top: 8px;font-size: 12pt;color: #0000008A;\">{{sl.Fecha}}</div>\r\n            </ion-card-content>\r\n          </ion-card>\r\n        </ion-col>\r\n  \r\n      </ion-slide>\r\n      <ion-slide class=\"row ion-no-padding\" style=\"justify-content: left;\" *ngIf=\"arrMedicionesParteDos.length > 0\">\r\n        <ion-col size=\"4\" class=\"ion-no-padding\" *ngFor=\"let dl of arrMedicionesParteDos\">\r\n          <ion-card style=\"margin: 5px;\">\r\n            <ion-card-header style=\"background: #D1C4E9;\">\r\n              <ion-card-subtitle style=\"color: #000000DE;font-size: 16pt;\">{{dl.Nombre}}</ion-card-subtitle>\r\n            </ion-card-header>\r\n            <ion-card-content style=\"display: block;padding-left: 5px;padding-right: 5px;\" class=\"ion-text-center\">\r\n              <div style=\"margin-top: 11px;color: #000000DE;font-size: 20pt;\">{{dl.Valor.toString()}}&nbsp;\r\n                <span *ngIf=\"dl.Medida == 'mg/dl'\" style=\"font-size: 12pt;\">{{dl.Medida}}</span>\r\n                <span *ngIf=\"dl.Medida != 'mg/dl'\" style=\"font-size: 20pt;\">{{dl.Medida}}</span>\r\n              </div>\r\n              <div style=\"margin-top: 8px;font-size: 12pt;color: #0000008A;\">{{dl.Fecha}}</div>\r\n            </ion-card-content>\r\n          </ion-card>\r\n        </ion-col>\r\n  \r\n      </ion-slide>\r\n    </ion-slides>\r\n  \r\n  </ion-grid>\r\n\r\n  <app-progress-minimo [mostrar]=\"estaCargandoAlergias\" [titulo]=\"tituloProgressAlergias\"></app-progress-minimo>\r\n  <ion-list [hidden]=\"estaCargandoAlergias\" style=\"padding-top: 0;\">\r\n    <ion-list-header *ngIf=\"alergias && alergias.length > 0\" style=\"background-color: #FAF9FA;\">\r\n      <div style=\"font-weight: 500; color: #000000DE; font-size: 14pt; margin-top: 0;margin-bottom: 24px;\">{{title}}</div>\r\n    </ion-list-header>\r\n    <ion-item *ngFor=\"let item of alergias\" class =\"lista-alergias\">\r\n      <ion-label class=\"ion-text-wrap\" style=\"color:#000000DE;font-size: 16pt;text-transform: capitalize;\">{{item.Descripcion.toLowerCase()}}</ion-label>\r\n    </ion-item>\r\n  </ion-list>\r\n\r\n\r\n  <app-progress-minimo [mostrar]=\"estaCargandoMorbidos\" [titulo]=\"tituloProgressMorbidos\"></app-progress-minimo>\r\n  <ion-list [hidden]=\"estaCargandoMorbidos\" style=\"padding-top: 0;\">\r\n    <ion-list-header *ngIf=\"personales && personales.length > 0\" style=\"background-color: #FAF9FA;\">\r\n      <div style=\"font-weight: 500; color: #000000DE; font-size: 14pt; margin-top: 24px;margin-bottom: 24px;\">Diagnósticos relevantes</div>\r\n    </ion-list-header>\r\n    <ion-item *ngFor=\"let ante of personales\" class =\"lista-alergias\">\r\n      <ion-label class=\"ion-text-wrap\" style=\"color:#000000DE;font-size: 16pt;\">{{ante.Nombre}}</ion-label>\r\n    </ion-item>\r\n    <ion-list-header *ngIf=\"familiares && familiares.length > 0\" style=\"background-color: #FAF9FA;\">\r\n      <div style=\"font-weight: 500; color: #000000DE; font-size: 14pt; margin-top: 24px;margin-bottom: 24px;\">Diagnósticos familiares relevantes</div>\r\n    </ion-list-header>\r\n    <ion-item *ngFor=\"let fam of familiares\" class =\"lista-alergias\">\r\n      <ion-label class=\"ion-text-wrap\" style=\"color:#000000DE;font-size: 16pt;\">{{fam.Nombre}}</ion-label>\r\n    </ion-item>\r\n  </ion-list>\r\n  \r\n\r\n\r\n</ion-content>\r\n");

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
/* harmony import */ var _components_components_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../components/components.module */ "./src/app/components/components.module.ts");








let DetailUsuarioPageModule = class DetailUsuarioPageModule {
};
DetailUsuarioPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _components_components_module__WEBPACK_IMPORTED_MODULE_7__["ComponentsModule"],
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
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! moment */ "./node_modules/moment/moment.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_8__);



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
        //nuevo slide
        this.slideOpts = {
            initialSlide: 0,
            speed: 500,
            pager: true
        };
        this.miColor = '#FF4081';
        this.indicadorValor = [];
        this.presiones = [];
        this.alergias = [];
        this.cargando = false;
        //para controlar componente progess
        this.estaCargando = false;
        this.familiares = [];
        this.personales = [];
        //card mediciones
        this.arrMediciones = [];
        this.tituloProgress = '';
        //2 partes para los datos del usuario
        this.arrMedicionesParteUno = [];
        this.arrMedicionesParteDos = [];
        //pruebas de loading independientes
        this.estaCargandoDatosUsuario = false;
        this.tituloProgressDatosUsuario = '';
        this.estaCargandoAlergias = false;
        this.tituloProgressAlergias = '';
        this.estaCargandoMorbidos = false;
        this.tituloProgressMorbidos = '';
    }
    ngOnInit() {
        //this.miColor = this.utiles.entregaMiColor();
        //capturamos los parametros
        this.slideOpts = {
            initialSlide: 0,
            speed: 500,
            pager: true
        };
        this.activatedRoute.queryParams.subscribe((params) => Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
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
                //obtiene los datos del usuario incluyendo la presión
                //este desencadena las 3 llamadas
                //await this.construirArregloValores(this.usuario.Id);
                yield this.construirArregloValoresIndividual(this.usuario.Id);
                yield this.construirArregloAlergiasIndividual(this.usuario.Id);
                yield this.construirArregloMorbidosIndividual(this.usuario.Id);
            }
        }));
    }
    procesarAntecedentes(data, loader) {
        this.antecedentes = data;
        console.log(this.antecedentes);
        this.familiares = [];
        this.personales = [];
        if (this.antecedentes.Antecedentes) {
            if (this.antecedentes.Antecedentes.Familiares) {
                if (this.antecedentes.Antecedentes.Familiares.Antecedente && this.antecedentes.Antecedentes.Familiares.Antecedente.length > 0) {
                    let arr = this.antecedentes.Antecedentes.Familiares.Antecedente;
                    arr.forEach(ante => {
                        let entidad = {
                            Nombre: ante
                        };
                        this.familiares.push(entidad);
                    });
                }
            }
            if (this.antecedentes.Antecedentes.Personales) {
                if (this.antecedentes.Antecedentes.Personales.Antecedente && this.antecedentes.Antecedentes.Personales.Antecedente.length > 0) {
                    let arr = this.antecedentes.Antecedentes.Personales.Antecedente;
                    arr.forEach(perso => {
                        let entidad = {
                            Nombre: perso
                        };
                        this.personales.push(entidad);
                    });
                }
            }
        }
        this.estaCargando = false;
        this.tituloProgress = '';
        loader.dismiss();
    }
    procesarAlergias(data, loader) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            this.alergias = data.AlergiasUsp;
            if (this.alergias) {
                if (this.alergias.length == 1) {
                    this.title = "Alergia";
                }
                else {
                    this.title = "Alergias";
                }
            }
            this.estaCargando = false;
            this.tituloProgress = '';
            loader.dismiss();
            //esta bien, seguimos con los morbidos
            yield this.construirArregloMorbidos(this.usuario.Id);
        });
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
    procesarPresionApi(data, loader) {
        this.presiones = data.PresionesUsp;
        if (this.presiones && this.presiones.length > 0) {
            var arrPresiones = this.presiones.sort((a, b) => { return this.getTime(moment__WEBPACK_IMPORTED_MODULE_8__(b.FechaPresion).toDate()) - this.getTime(moment__WEBPACK_IMPORTED_MODULE_8__(a.FechaPresion).toDate()); });
            if (arrPresiones && arrPresiones.length > 0) {
                console.log('tiene presion');
                console.log(arrPresiones);
                //el primer elemento es el más nuevo
                this.valorPresion = arrPresiones[0].ValorPresion;
                this.fechaPresion = moment__WEBPACK_IMPORTED_MODULE_8__(arrPresiones[0].FechaPresion).format('DD-MM-YYYY HH:mm');
            }
            else {
                console.log('no tiene presion');
                this.valorPresion = 'N/A';
                this.fechaPresion = 'N/A';
            }
        }
        else {
            //llenar con valores predeterminados
            this.valorPresion = 'N/A';
            this.fechaPresion = 'N/A';
        }
        loader.dismiss();
        this.estaCargando = false;
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
        this.estaCargando = false;
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
    getTime(date) {
        return date != null ? new Date(date).getTime() : 0;
    }
    procesarNuevoArregloValores(response, loader) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            this.arrMediciones = [];
            this.arrMedicionesParteUno = [];
            this.arrMedicionesParteDos = [];
            var arreglo = [];
            if (response) {
                arreglo = response.IndicadorValorUsp;
            }
            ///altura
            var arrAltura = arreglo.filter(p => p.Descripcion.includes('Altura') || p.Descripcion.includes('Talla'));
            if (arrAltura && arrAltura.length > 0) {
                console.log('tiene altura');
                //fecha mas actualizada
                arrAltura.sort((a, b) => { return this.getTime(moment__WEBPACK_IMPORTED_MODULE_8__(b.Fecha).toDate()) - this.getTime(moment__WEBPACK_IMPORTED_MODULE_8__(a.Fecha).toDate()); });
                console.log(arrAltura);
                let entidad = {
                    Nombre: 'Altura',
                    Valor: arrAltura[0].Valor.toFixed(0),
                    Fecha: moment__WEBPACK_IMPORTED_MODULE_8__(arrAltura[0].Fecha).format('DD MMM YYYY'),
                    Medida: 'cm'
                };
                this.arrMediciones.push(entidad);
            }
            //peso
            var arrPeso = arreglo.filter(p => p.Descripcion.includes('Peso'));
            if (arrPeso && arrPeso.length > 0) {
                console.log('tiene peso');
                //fecha mas actualizada
                arrPeso.sort((a, b) => { return this.getTime(moment__WEBPACK_IMPORTED_MODULE_8__(b.Fecha).toDate()) - this.getTime(moment__WEBPACK_IMPORTED_MODULE_8__(a.Fecha).toDate()); });
                console.log(arrPeso);
                let entidad = {
                    Nombre: 'Peso',
                    Valor: arrPeso[0].Valor.toFixed(0),
                    Fecha: moment__WEBPACK_IMPORTED_MODULE_8__(arrPeso[0].Fecha).format('DD MMM YYYY'),
                    Medida: 'kg'
                };
                this.arrMediciones.push(entidad);
            }
            //imc
            var arrImc = arreglo.filter(p => p.Descripcion.includes('I.M.C.'));
            if (arrImc && arrImc.length > 0) {
                console.log('tiene imc');
                //fecha mas actualizada
                arrImc.sort((a, b) => { return this.getTime(moment__WEBPACK_IMPORTED_MODULE_8__(b.Fecha).toDate()) - this.getTime(moment__WEBPACK_IMPORTED_MODULE_8__(a.Fecha).toDate()); });
                console.log(arrImc);
                let entidad = {
                    Nombre: 'IMC',
                    Valor: arrImc[0].Valor.toFixed(0),
                    Fecha: moment__WEBPACK_IMPORTED_MODULE_8__(arrImc[0].Fecha).format('DD MMM YYYY'),
                    Medida: ''
                };
                this.arrMediciones.push(entidad);
            }
            //glicemia
            var arrGlicemia = arreglo.filter(p => p.Descripcion.includes('Glicemia'));
            if (arrGlicemia && arrGlicemia.length > 0) {
                console.log('tiene glicemia');
                //fecha mas actualizada
                arrGlicemia.sort((a, b) => { return this.getTime(moment__WEBPACK_IMPORTED_MODULE_8__(b.Fecha).toDate()) - this.getTime(moment__WEBPACK_IMPORTED_MODULE_8__(a.Fecha).toDate()); });
                console.log(arrGlicemia);
                //el primer elemento es el más nuevo
                let entidad = {
                    Nombre: 'Glicemia',
                    Valor: arrGlicemia[0].Valor.toFixed(0),
                    Fecha: moment__WEBPACK_IMPORTED_MODULE_8__(arrGlicemia[0].Fecha).format('DD MMM YYYY'),
                    Medida: 'mg/dl'
                };
                this.arrMediciones.push(entidad);
            }
            //sangre
            var arrSangre = arreglo.filter(p => p.Descripcion.includes('Sanguineo'));
            if (arrSangre && arrSangre.length > 0) {
                let valor = '';
                console.log('tiene sangre');
                //fecha mas actualizada
                arrSangre.sort((a, b) => { return this.getTime(moment__WEBPACK_IMPORTED_MODULE_8__(b.Fecha).toDate()) - this.getTime(moment__WEBPACK_IMPORTED_MODULE_8__(a.Fecha).toDate()); });
                console.log(arrSangre);
                //el primer elemento es el más nuevo
                if (arrSangre[0].Valor == 279) {
                    valor = "A";
                }
                else if (arrSangre[0].Valor == 280) {
                    valor = "B";
                }
                else if (arrSangre[0].Valor == 281) {
                    valor = "AB";
                }
                else if (arrSangre[0].Valor == 252) {
                    valor = "O";
                }
                else {
                    valor = "";
                }
                let entidad = {
                    Nombre: 'Grupo Sangre',
                    Valor: valor,
                    Fecha: moment__WEBPACK_IMPORTED_MODULE_8__(arrSangre[0].Fecha).format('DD MMM YYYY'),
                    Medida: ''
                };
                this.arrMediciones.push(entidad);
            }
            //presion diastolica
            var valorDiast = '';
            var tienePresion = false;
            var fechaPresion = '';
            var arrDiast = arreglo.filter(p => p.Descripcion.includes('Diastólica'));
            if (arrDiast && arrDiast.length > 0) {
                console.log('tiene diastolica');
                //fecha mas actualizada
                arrDiast.sort((a, b) => { return this.getTime(moment__WEBPACK_IMPORTED_MODULE_8__(b.Fecha).toDate()) - this.getTime(moment__WEBPACK_IMPORTED_MODULE_8__(a.Fecha).toDate()); });
                console.log(arrDiast);
                valorDiast = arrDiast[0].Valor;
                tienePresion = true;
            }
            var valorSist = '';
            var tienePresionSis = false;
            var arrSist = arreglo.filter(p => p.Descripcion.includes('Sistólica'));
            if (arrSist && arrSist.length > 0) {
                console.log('tiene sistolica');
                //fecha mas actualizada
                arrSist.sort((a, b) => { return this.getTime(moment__WEBPACK_IMPORTED_MODULE_8__(b.Fecha).toDate()) - this.getTime(moment__WEBPACK_IMPORTED_MODULE_8__(a.Fecha).toDate()); });
                console.log(arrSist);
                valorSist = arrSist[0].Valor;
                fechaPresion = moment__WEBPACK_IMPORTED_MODULE_8__(arrSist[0].Fecha).format('DD MMM YYYY');
                tienePresionSis = true;
            }
            if (tienePresion && tienePresionSis) {
                let entidad = {
                    Nombre: 'Presión',
                    Valor: valorSist.toString() + '/' + valorDiast.toString(),
                    Fecha: fechaPresion,
                    Medida: ''
                };
                this.arrMediciones.push(entidad);
            }
            console.log(this.arrMediciones);
            //aca partimos el arreglo
            this.arrMedicionesParteUno = this.arrMediciones.slice(0, 3);
            this.arrMedicionesParteDos = this.arrMediciones.slice(3, 6);
            //console.log(this.arrMedicionesParteUno);
            //console.log(this.arrMedicionesParteDos);
            this.estaCargando = false;
            this.tituloProgress = '';
            loader.dismiss();
            //todo ok seguimos con las alergias
            yield this.construirArregloAlergias(this.usuario.Id);
        });
    }
    construirArregloValores(uspId) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            this.arrMediciones = [];
            let loader = yield this.loading.create({
                cssClass: 'loading-vacio',
                showBackdrop: false,
                spinner: null
            });
            this.estaCargando = true;
            this.tituloProgress = 'Buscando datos del paciente';
            yield loader.present().then(() => Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
                if (!this.utiles.isAppOnDevice()) {
                    //llamada web
                    this.info.getIndicadorValorApi(uspId).subscribe((response) => {
                        console.log(response);
                        //correcto
                        this.procesarNuevoArregloValores(response, loader);
                    }, (error) => Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
                        console.log(error.message);
                        this.estaCargando = false;
                        this.tituloProgress = '';
                        loader.dismiss();
                        //si hubo error cargamos el siguiente
                        yield this.construirArregloAlergias(this.usuario.Id);
                    }));
                }
                else {
                    //llamada nativa
                    this.info.getIndicadorValorNativeApi(uspId).then((response) => {
                        //this.procesarIndicadorValor(JSON.parse(response.data), loader);
                        console.log(JSON.parse(response.data));
                        this.procesarNuevoArregloValores(JSON.parse(response.data), loader);
                    }).catch((error) => Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
                        console.log(error.message);
                        this.estaCargando = false;
                        this.tituloProgress = '';
                        loader.dismiss();
                        //si hubo error cargamos el siguiente
                        yield this.construirArregloAlergias(this.usuario.Id);
                    }));
                }
            }));
        });
    }
    construirArregloAlergias(uspId) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            let loader = yield this.loading.create({
                cssClass: 'loading-vacio',
                showBackdrop: false,
                spinner: null
            });
            this.estaCargando = true;
            this.tituloProgress = 'Buscando alergias del paciente';
            yield loader.present().then(() => Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
                if (!this.utiles.isAppOnDevice()) {
                    //llamada web
                    this.info.getAlergiasApi(uspId).subscribe((response) => {
                        console.log(response);
                        //correcto
                        this.procesarAlergias(response, loader);
                    }, (error) => Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
                        console.log(error.message);
                        this.tituloProgress = '';
                        this.estaCargando = false;
                        loader.dismiss();
                        //si hubo error continuamos con morbidos
                        yield this.construirArregloMorbidos(this.usuario.Id);
                    }));
                }
                else {
                    //llamada nativa
                    this.info.getAlergiasNativeApi(uspId).then((response) => {
                        //this.procesarIndicadorValor(JSON.parse(response.data), loader);
                        console.log(JSON.parse(response.data));
                        this.procesarAlergias(JSON.parse(response.data), loader);
                    }).catch((error) => Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
                        console.log(error.message);
                        this.tituloProgress = '';
                        this.estaCargando = false;
                        loader.dismiss();
                        //si hubo error continuamos con morbidos
                        yield this.construirArregloMorbidos(this.usuario.Id);
                    }));
                }
            }));
        });
    }
    construirArregloMorbidos(uspId) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            let loader = yield this.loading.create({
                cssClass: 'loading-vacio',
                showBackdrop: false,
                spinner: null
            });
            this.estaCargando = true;
            this.tituloProgress = 'Buscando otros datos del paciente';
            yield loader.present().then(() => Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
                if (!this.utiles.isAppOnDevice()) {
                    //llamada web
                    this.info.postAntecedentesApi(uspId).subscribe((response) => {
                        console.log(response);
                        //correcto
                        this.procesarAntecedentes(response, loader);
                    }, error => {
                        console.log(error.message);
                        this.estaCargando = false;
                        this.tituloProgress = '';
                        loader.dismiss();
                    });
                }
                else {
                    //llamada nativa
                    this.info.postAntecedentesNativeApi(uspId).then((response) => {
                        //this.procesarIndicadorValor(JSON.parse(response.data), loader);
                        console.log(JSON.parse(response.data));
                        this.procesarAntecedentes(JSON.parse(response.data), loader);
                    }).catch(error => {
                        console.log(error.message);
                        this.estaCargando = false;
                        this.tituloProgress = '';
                        loader.dismiss();
                    });
                }
            }));
        });
    }
    porcesarIndicadorValorApi(data, loader) {
        //Glicemia mg/dl
        //Grupo Sanguineo  279: A
        //280: B
        //281: AB
        //252: 0
        this.indicadorValor = [];
        if (data) {
            this.indicadorValor = data.IndicadorValorUsp;
        }
        if (this.indicadorValor && this.indicadorValor.length > 0) {
            //ahora procesamos los valores
            //altura
            var arrAltura = this.indicadorValor.filter(p => p.Descripcion.includes('Altura') || p.Descripcion.includes('Talla'));
            if (arrAltura && arrAltura.length > 0) {
                console.log('tiene altura');
                //fecha mas actualizada
                arrAltura.sort((a, b) => { return this.getTime(moment__WEBPACK_IMPORTED_MODULE_8__(b.Fecha).toDate()) - this.getTime(moment__WEBPACK_IMPORTED_MODULE_8__(a.Fecha).toDate()); });
                console.log(arrAltura);
                //el primer elemento es el más nuevo
                this.valorAltura = arrAltura[0].Valor;
                this.fechaAltura = moment__WEBPACK_IMPORTED_MODULE_8__(arrAltura[0].Fecha).format('DD-MM-YYYY HH:mm');
            }
            else {
                console.log('no tiene altura');
                this.valorAltura = 'No informada';
                this.fechaAltura = 'No informada';
            }
            //fin altura
            //peso
            var arrPeso = this.indicadorValor.filter(p => p.Descripcion.includes('Peso'));
            if (arrPeso && arrPeso.length > 0) {
                console.log('tiene peso');
                //fecha mas actualizada
                arrPeso.sort((a, b) => { return this.getTime(moment__WEBPACK_IMPORTED_MODULE_8__(b.Fecha).toDate()) - this.getTime(moment__WEBPACK_IMPORTED_MODULE_8__(a.Fecha).toDate()); });
                console.log(arrPeso);
                //el primer elemento es el más nuevo
                this.valorPeso = arrPeso[0].Valor.toFixed(2);
                this.fechaPeso = moment__WEBPACK_IMPORTED_MODULE_8__(arrPeso[0].Fecha).format('DD-MM-YYYY HH:mm');
            }
            else {
                console.log('no tiene peso');
                this.valorPeso = 'No informado';
                this.fechaPeso = 'No informada';
            }
            //fin peso
            var arrImc = this.indicadorValor.filter(p => p.Descripcion.includes('I.M.C.'));
            if (arrImc && arrImc.length > 0) {
                console.log('tiene imc');
                //fecha mas actualizada
                arrImc.sort((a, b) => { return this.getTime(moment__WEBPACK_IMPORTED_MODULE_8__(b.Fecha).toDate()) - this.getTime(moment__WEBPACK_IMPORTED_MODULE_8__(a.Fecha).toDate()); });
                console.log(arrImc);
                //el primer elemento es el más nuevo
                this.valorImc = arrImc[0].Valor.toFixed(2);
                this.fechaImc = moment__WEBPACK_IMPORTED_MODULE_8__(arrImc[0].Fecha).format('DD-MM-YYYY HH:mm');
            }
            else {
                console.log('no tiene imc');
                this.valorImc = 'No informado';
                this.fechaImc = 'No informada';
            }
            //fin imc
            var arrGlicemia = this.indicadorValor.filter(p => p.Descripcion.includes('Glicemia'));
            if (arrGlicemia && arrGlicemia.length > 0) {
                console.log('tiene glicemia');
                //fecha mas actualizada
                arrGlicemia.sort((a, b) => { return this.getTime(moment__WEBPACK_IMPORTED_MODULE_8__(b.Fecha).toDate()) - this.getTime(moment__WEBPACK_IMPORTED_MODULE_8__(a.Fecha).toDate()); });
                console.log(arrGlicemia);
                //el primer elemento es el más nuevo
                this.valorGlicemia = arrGlicemia[0].Valor;
                this.fechaGlicemia = moment__WEBPACK_IMPORTED_MODULE_8__(arrGlicemia[0].Fecha).format('DD-MM-YYYY HH:mm');
            }
            else {
                console.log('no tiene glicemia');
                this.valorGlicemia = 'No informada';
                this.fechaGlicemia = 'No informada';
            }
            //fin glicemia
            var arrSangre = this.indicadorValor.filter(p => p.Descripcion.includes('Sanguineo'));
            if (arrSangre && arrSangre.length > 0) {
                console.log('tiene sangre');
                //fecha mas actualizada
                arrSangre.sort((a, b) => { return this.getTime(moment__WEBPACK_IMPORTED_MODULE_8__(b.Fecha).toDate()) - this.getTime(moment__WEBPACK_IMPORTED_MODULE_8__(a.Fecha).toDate()); });
                console.log(arrSangre);
                //el primer elemento es el más nuevo
                if (arrSangre[0].Valor == 279) {
                    this.valorGrupoSangre = "A";
                }
                else if (arrSangre[0].Valor == 280) {
                    this.valorGrupoSangre = "B";
                }
                else if (arrSangre[0].Valor == 281) {
                    this.valorGrupoSangre = "AB";
                }
                else if (arrSangre[0].Valor == 252) {
                    this.valorGrupoSangre = "O";
                }
                else {
                    this.valorGrupoSangre = "";
                }
                this.fechaGrupoSangre = moment__WEBPACK_IMPORTED_MODULE_8__(arrSangre[0].Fecha).format('DD-MM-YYYY HH:mm');
            }
            else {
                console.log('no tiene sangre');
                this.valorGrupoSangre = 'No informada';
                this.fechaGrupoSangre = 'No informada';
            }
            loader.dismiss();
            //para progress
            this.estaCargando = false;
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
            this.valorGlicemia = 'No informada';
            this.fechaGlicemia = 'No informada';
            this.valorGrupoSangre = 'No informada';
            this.fechaGrupoSangre = 'No informada';
        }
        loader.dismiss();
        //para progress
        this.estaCargando = false;
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
                        if (this.indicadorValor[s].Fecha == null) {
                            this.fechaAltura = 'n/a';
                        }
                        else {
                            this.fechaAltura = '3 días';
                        }
                    }
                    //peso
                    if (this.indicadorValor[s].Descripcion.includes('Peso')) {
                        this.valorPeso = this.indicadorValor[s].Valor.toString();
                        if (this.indicadorValor[s].Fecha == null) {
                            this.fechaPeso = 'n/a';
                        }
                        else {
                            this.fechaPeso = '3 días';
                        }
                    }
                    //IMC
                    if (this.indicadorValor[s].Descripcion == 'I.M.C.') {
                        this.valorImc = this.indicadorValor[s].Valor.toString();
                        if (this.indicadorValor[s].Fecha == null) {
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
        //para progress
        this.estaCargando = false;
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
    //pruebas de carga individual
    construirArregloValoresIndividual(uspId) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            this.arrMediciones = [];
            let loader = yield this.loading.create({
                cssClass: 'loading-vacio',
                showBackdrop: false,
                spinner: null
            });
            this.estaCargandoDatosUsuario = true;
            this.tituloProgressDatosUsuario = 'Buscando datos del paciente';
            yield loader.present().then(() => Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
                if (!this.utiles.isAppOnDevice()) {
                    //llamada web
                    this.info.getIndicadorValorApi(uspId).subscribe((response) => {
                        console.log(response);
                        //correcto
                        this.procesarNuevoArregloValoresIndependiente(response, loader);
                    }, (error) => Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
                        console.log(error.message);
                        this.estaCargandoDatosUsuario = false;
                        this.tituloProgressDatosUsuario = '';
                        loader.dismiss();
                    }));
                }
                else {
                    //llamada nativa
                    this.info.getIndicadorValorNativeApi(uspId).then((response) => {
                        //this.procesarIndicadorValor(JSON.parse(response.data), loader);
                        console.log(JSON.parse(response.data));
                        this.procesarNuevoArregloValoresIndependiente(JSON.parse(response.data), loader);
                    }).catch((error) => Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
                        console.log(error.message);
                        this.estaCargandoDatosUsuario = false;
                        this.tituloProgressDatosUsuario = '';
                        loader.dismiss();
                    }));
                }
            }));
        });
    }
    procesarNuevoArregloValoresIndependiente(response, loader) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            this.arrMediciones = [];
            this.arrMedicionesParteUno = [];
            this.arrMedicionesParteDos = [];
            var arreglo = [];
            if (response) {
                arreglo = response.IndicadorValorUsp;
            }
            ///altura
            var arrAltura = arreglo.filter(p => p.Descripcion.includes('Altura') || p.Descripcion.includes('Talla'));
            if (arrAltura && arrAltura.length > 0) {
                console.log('tiene altura');
                //fecha mas actualizada
                arrAltura.sort((a, b) => { return this.getTime(moment__WEBPACK_IMPORTED_MODULE_8__(b.Fecha).toDate()) - this.getTime(moment__WEBPACK_IMPORTED_MODULE_8__(a.Fecha).toDate()); });
                console.log(arrAltura);
                let entidad = {
                    Nombre: 'Altura',
                    Valor: arrAltura[0].Valor.toFixed(0),
                    Fecha: moment__WEBPACK_IMPORTED_MODULE_8__(arrAltura[0].Fecha).format('DD MMM YYYY'),
                    Medida: 'cm'
                };
                this.arrMediciones.push(entidad);
            }
            //peso
            var arrPeso = arreglo.filter(p => p.Descripcion.includes('Peso'));
            if (arrPeso && arrPeso.length > 0) {
                console.log('tiene peso');
                //fecha mas actualizada
                arrPeso.sort((a, b) => { return this.getTime(moment__WEBPACK_IMPORTED_MODULE_8__(b.Fecha).toDate()) - this.getTime(moment__WEBPACK_IMPORTED_MODULE_8__(a.Fecha).toDate()); });
                console.log(arrPeso);
                let entidad = {
                    Nombre: 'Peso',
                    Valor: arrPeso[0].Valor.toFixed(0),
                    Fecha: moment__WEBPACK_IMPORTED_MODULE_8__(arrPeso[0].Fecha).format('DD MMM YYYY'),
                    Medida: 'kg'
                };
                this.arrMediciones.push(entidad);
            }
            //imc
            var arrImc = arreglo.filter(p => p.Descripcion.includes('I.M.C.'));
            if (arrImc && arrImc.length > 0) {
                console.log('tiene imc');
                //fecha mas actualizada
                arrImc.sort((a, b) => { return this.getTime(moment__WEBPACK_IMPORTED_MODULE_8__(b.Fecha).toDate()) - this.getTime(moment__WEBPACK_IMPORTED_MODULE_8__(a.Fecha).toDate()); });
                console.log(arrImc);
                let entidad = {
                    Nombre: 'IMC',
                    Valor: arrImc[0].Valor.toFixed(0),
                    Fecha: moment__WEBPACK_IMPORTED_MODULE_8__(arrImc[0].Fecha).format('DD MMM YYYY'),
                    Medida: ''
                };
                this.arrMediciones.push(entidad);
            }
            //glicemia
            var arrGlicemia = arreglo.filter(p => p.Descripcion.includes('Glicemia'));
            if (arrGlicemia && arrGlicemia.length > 0) {
                console.log('tiene glicemia');
                //fecha mas actualizada
                arrGlicemia.sort((a, b) => { return this.getTime(moment__WEBPACK_IMPORTED_MODULE_8__(b.Fecha).toDate()) - this.getTime(moment__WEBPACK_IMPORTED_MODULE_8__(a.Fecha).toDate()); });
                console.log(arrGlicemia);
                //el primer elemento es el más nuevo
                let entidad = {
                    Nombre: 'Glicemia',
                    Valor: arrGlicemia[0].Valor.toFixed(0),
                    Fecha: moment__WEBPACK_IMPORTED_MODULE_8__(arrGlicemia[0].Fecha).format('DD MMM YYYY'),
                    Medida: 'mg/dl'
                };
                this.arrMediciones.push(entidad);
            }
            //sangre
            var arrSangre = arreglo.filter(p => p.Descripcion.includes('Sanguineo'));
            if (arrSangre && arrSangre.length > 0) {
                let valor = '';
                console.log('tiene sangre');
                //fecha mas actualizada
                arrSangre.sort((a, b) => { return this.getTime(moment__WEBPACK_IMPORTED_MODULE_8__(b.Fecha).toDate()) - this.getTime(moment__WEBPACK_IMPORTED_MODULE_8__(a.Fecha).toDate()); });
                console.log(arrSangre);
                //el primer elemento es el más nuevo
                if (arrSangre[0].Valor == 279) {
                    valor = "A";
                }
                else if (arrSangre[0].Valor == 280) {
                    valor = "B";
                }
                else if (arrSangre[0].Valor == 281) {
                    valor = "AB";
                }
                else if (arrSangre[0].Valor == 252) {
                    valor = "O";
                }
                else {
                    valor = "";
                }
                let entidad = {
                    Nombre: 'Grupo Sangre',
                    Valor: valor,
                    Fecha: moment__WEBPACK_IMPORTED_MODULE_8__(arrSangre[0].Fecha).format('DD MMM YYYY'),
                    Medida: ''
                };
                this.arrMediciones.push(entidad);
            }
            //presion diastolica
            var valorDiast = '';
            var tienePresion = false;
            var fechaPresion = '';
            var arrDiast = arreglo.filter(p => p.Descripcion.includes('Diastólica'));
            if (arrDiast && arrDiast.length > 0) {
                console.log('tiene diastolica');
                //fecha mas actualizada
                arrDiast.sort((a, b) => { return this.getTime(moment__WEBPACK_IMPORTED_MODULE_8__(b.Fecha).toDate()) - this.getTime(moment__WEBPACK_IMPORTED_MODULE_8__(a.Fecha).toDate()); });
                console.log(arrDiast);
                valorDiast = arrDiast[0].Valor;
                tienePresion = true;
            }
            var valorSist = '';
            var tienePresionSis = false;
            var arrSist = arreglo.filter(p => p.Descripcion.includes('Sistólica'));
            if (arrSist && arrSist.length > 0) {
                console.log('tiene sistolica');
                //fecha mas actualizada
                arrSist.sort((a, b) => { return this.getTime(moment__WEBPACK_IMPORTED_MODULE_8__(b.Fecha).toDate()) - this.getTime(moment__WEBPACK_IMPORTED_MODULE_8__(a.Fecha).toDate()); });
                console.log(arrSist);
                valorSist = arrSist[0].Valor;
                fechaPresion = moment__WEBPACK_IMPORTED_MODULE_8__(arrSist[0].Fecha).format('DD MMM YYYY');
                tienePresionSis = true;
            }
            if (tienePresion && tienePresionSis) {
                let entidad = {
                    Nombre: 'Presión',
                    Valor: valorSist.toString() + '/' + valorDiast.toString(),
                    Fecha: fechaPresion,
                    Medida: ''
                };
                this.arrMediciones.push(entidad);
            }
            console.log(this.arrMediciones);
            //aca partimos el arreglo
            this.arrMedicionesParteUno = this.arrMediciones.slice(0, 3);
            this.arrMedicionesParteDos = this.arrMediciones.slice(3, 6);
            //console.log(this.arrMedicionesParteUno);
            //console.log(this.arrMedicionesParteDos);
            this.estaCargandoDatosUsuario = false;
            this.tituloProgressDatosUsuario = '';
            loader.dismiss();
        });
    }
    construirArregloAlergiasIndividual(uspId) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            let loader = yield this.loading.create({
                cssClass: 'loading-vacio',
                showBackdrop: false,
                spinner: null
            });
            this.estaCargandoAlergias = true;
            this.tituloProgressAlergias = 'Buscando alergias del paciente';
            yield loader.present().then(() => Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
                if (!this.utiles.isAppOnDevice()) {
                    //llamada web
                    this.info.getAlergiasApi(uspId).subscribe((response) => {
                        console.log(response);
                        //correcto
                        this.procesarAlergiasIndividual(response, loader);
                    }, (error) => Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
                        console.log(error.message);
                        this.tituloProgressAlergias = '';
                        this.estaCargandoAlergias = false;
                        loader.dismiss();
                    }));
                }
                else {
                    //llamada nativa
                    this.info.getAlergiasNativeApi(uspId).then((response) => {
                        //this.procesarIndicadorValor(JSON.parse(response.data), loader);
                        console.log(JSON.parse(response.data));
                        this.procesarAlergiasIndividual(JSON.parse(response.data), loader);
                    }).catch((error) => Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
                        console.log(error.message);
                        this.tituloProgressAlergias = '';
                        this.estaCargandoAlergias = false;
                        loader.dismiss();
                    }));
                }
            }));
        });
    }
    procesarAlergiasIndividual(data, loader) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            this.alergias = data.AlergiasUsp;
            if (this.alergias) {
                if (this.alergias.length == 1) {
                    this.title = "Alergia";
                }
                else {
                    this.title = "Alergias";
                }
            }
            this.estaCargandoAlergias = false;
            this.tituloProgressAlergias = '';
            loader.dismiss();
        });
    }
    construirArregloMorbidosIndividual(uspId) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            let loader = yield this.loading.create({
                cssClass: 'loading-vacio',
                showBackdrop: false,
                spinner: null
            });
            this.estaCargandoMorbidos = true;
            this.tituloProgressMorbidos = 'Buscando otros datos del paciente';
            yield loader.present().then(() => Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
                if (!this.utiles.isAppOnDevice()) {
                    //llamada web
                    this.info.postAntecedentesApi(uspId).subscribe((response) => {
                        console.log(response);
                        //correcto
                        this.procesarAntecedentesIndividual(response, loader);
                    }, error => {
                        console.log(error.message);
                        this.estaCargandoMorbidos = false;
                        this.tituloProgressMorbidos = '';
                        loader.dismiss();
                    });
                }
                else {
                    //llamada nativa
                    this.info.postAntecedentesNativeApi(uspId).then((response) => {
                        //this.procesarIndicadorValor(JSON.parse(response.data), loader);
                        console.log(JSON.parse(response.data));
                        this.procesarAntecedentesIndividual(JSON.parse(response.data), loader);
                    }).catch(error => {
                        console.log(error.message);
                        this.estaCargandoMorbidos = false;
                        this.tituloProgressMorbidos = '';
                        loader.dismiss();
                    });
                }
            }));
        });
    }
    procesarAntecedentesIndividual(data, loader) {
        this.antecedentes = data;
        console.log(this.antecedentes);
        this.familiares = [];
        this.personales = [];
        if (this.antecedentes.Antecedentes) {
            if (this.antecedentes.Antecedentes.Familiares) {
                if (this.antecedentes.Antecedentes.Familiares.Antecedente && this.antecedentes.Antecedentes.Familiares.Antecedente.length > 0) {
                    let arr = this.antecedentes.Antecedentes.Familiares.Antecedente;
                    arr.forEach(ante => {
                        let entidad = {
                            Nombre: ante
                        };
                        this.familiares.push(entidad);
                    });
                }
            }
            if (this.antecedentes.Antecedentes.Personales) {
                if (this.antecedentes.Antecedentes.Personales.Antecedente && this.antecedentes.Antecedentes.Personales.Antecedente.length > 0) {
                    let arr = this.antecedentes.Antecedentes.Personales.Antecedente;
                    arr.forEach(perso => {
                        let entidad = {
                            Nombre: perso
                        };
                        this.personales.push(entidad);
                    });
                }
            }
        }
        this.estaCargandoMorbidos = false;
        this.tituloProgressMorbidos = '';
        loader.dismiss();
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
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('mySlider', { static: true })
], DetailUsuarioPage.prototype, "slides", void 0);
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