(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["ordenes-ordenes-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/ordenes/ordenes.page.html":
/*!*********************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/ordenes/ordenes.page.html ***!
  \*********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\r\n  <ion-toolbar color=\"primary\" mode=\"md\">\r\n    <ion-buttons slot=\"start\">\r\n      <ion-back-button defaultHref=\"/pre-ordenes\" class=\"fcw\"></ion-back-button>\r\n    </ion-buttons>\r\n    <ion-title class=\"fcw\">Exámenes</ion-title>\r\n    <ion-buttons *ngIf=\"tiene\" slot=\"end\" (click)=\"modalBusqueda()\" style=\"padding-right: 16px;\">\r\n      <ion-icon class=\"fcw\" slot=\"icon-only\" name=\"funnel\"></ion-icon>\r\n    </ion-buttons> \r\n    <ion-buttons *ngIf=\"tiene\" slot=\"end\" (click)=\"buscar()\" style=\"padding-right: 16px;\">\r\n      <ion-icon class=\"fcw\" slot=\"icon-only\" name=\"search\"></ion-icon>\r\n    </ion-buttons> \r\n  </ion-toolbar>\r\n  <ion-toolbar color=\"primary\" *ngIf=\"mostrarBusqueda\">\r\n    <ion-searchbar placeholder=\"Nombre examen\" (ionInput)=\"filterList($event)\"></ion-searchbar>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content class=\"back-app\">\r\n<!--SI HAY ORDENES -->\r\n<app-progress [mostrar]=\"estaCargando\" titulo=\"Cargando exámenes\"></app-progress>\r\n<div [hidden]=\"estaCargando\" style=\"padding-top: 24px;\">\r\n  <ion-item lines=\"none\" style=\"--background:#FAF9FA; padding-bottom: 24px;\">\r\n    <!-- poner avatar -->\r\n    <ion-avatar slot=\"start\">\r\n      <img *ngIf=\"usuarioAps.UrlImagen != ''\" src={{usuarioAps.UrlImagen}}>\r\n      <img *ngIf=\"usuarioAps.UrlImagen == ''\" src=\"../assets/img/no-imagen.jpg\">\r\n    </ion-avatar>\r\n    <ion-row style=\"display: block;\">\r\n      <div class=\"text-avatar\">{{usuarioAps.Nombres + ' ' + usuarioAps.ApellidoPaterno + ' ' + usuarioAps.ApellidoMaterno}}</div>\r\n      <div class=\"subtext-avatar\">{{usuarioAps.Parentezco.Nombre}}</div>\r\n    </ion-row>\r\n  </ion-item>\r\n</div>\r\n<!-- nueva implementación -->\r\n<div [hidden]=\"estaCargando\">\r\n  <ion-item lines=\"full\"  *ngFor=\"let exa of listadoExamenesCompleto\" (click)=\"ordenSelectedCompleto(exa)\">\r\n    <ion-grid>\r\n      <ion-row style=\" width: 100%;\">\r\n        <ion-col size=\"8\">\r\n          <div class=\"text-avatar-1\">{{exa.NombreExamen}}</div>\r\n        </ion-col>\r\n        <ion-col size=\"4\">\r\n          <div class=\"text-solicitud\" style=\"float: right;\">{{exa.FechaSolicitud}}</div>\r\n        </ion-col>\r\n      </ion-row>\r\n      <ion-row>\r\n        <ion-col>\r\n          <div class=\"subtext-avatar-1\" *ngIf=\"exa.Resultados == null\">\r\n            <div *ngIf=\"exa.FechaMuestra != '01-01-0001'\">\r\n              Fecha de toma {{exa.FechaMuestra}}\r\n            </div>\r\n          </div>\r\n          <div class=\"subtext-avatar-1\" *ngIf=\"exa.Resultados != null\">Fecha resultados {{exa.FechaResultado}}</div>\r\n        </ion-col>\r\n      </ion-row>\r\n    </ion-grid>\r\n</ion-item>\r\n</div>\r\n\r\n\r\n<!-- <ion-card [hidden]=\"estaCargando\" *ngFor=\"let item of listadoOrdenes\" (click)=\"ordenSelected(item)\">\r\n  <ion-card-content>\r\n    <app-avatar [lines]=\"none\" [urlImagen] = \"item.UrlImagen\" \r\n    [nombreCompleto]=\"item.NombreUsuario\" \r\n    [parentezco]=\"item.Parentezco\"></app-avatar>\r\n    <ion-item lines=\"none\">\r\n      <ion-grid>\r\n        <ion-row>\r\n          <ion-col>\r\n            <ion-label class=\"ion-text-wrap\">N° de órden: <strong>{{ item.Id }}</strong></ion-label>\r\n          </ion-col>\r\n          <ion-col>\r\n            <ion-label class=\"ion-text-wrap\">Estado: <strong>{{ item.Estado }}</strong></ion-label>\r\n          </ion-col>\r\n        </ion-row>\r\n      </ion-grid>\r\n    </ion-item>\r\n    <ion-item lines=\"none\">\r\n      <ion-badge color=\"primary\" slot=\"end\">{{ item.Fecha }}</ion-badge>\r\n    </ion-item>\r\n  </ion-card-content>\r\n</ion-card>   -->\r\n<!-- NO HAY ORDENES -->\r\n<div [hidden]=\"estaCargando\" *ngIf=\"tiene == false\" style=\"position: relative; height: 30vh;\">\r\n  <div style=\"position: absolute; display: table; height: 100%; font-size: 16pt; color:#0000008A; text-align: center;width: 100%;letter-spacing: 0.5pt;\">\r\n    <p style=\"display: table-cell; vertical-align: middle\">No tiene exámenes  <br>registrados\r\n    </p>\r\n  </div>\r\n</div>\r\n</ion-content>\r\n");

/***/ }),

/***/ "./src/app/ordenes/ordenes.module.ts":
/*!*******************************************!*\
  !*** ./src/app/ordenes/ordenes.module.ts ***!
  \*******************************************/
/*! exports provided: OrdenesPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OrdenesPageModule", function() { return OrdenesPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _ordenes_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./ordenes.page */ "./src/app/ordenes/ordenes.page.ts");
/* harmony import */ var _directives_text_avatar_index__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../directives/text-avatar/index */ "./src/directives/text-avatar/index.ts");
/* harmony import */ var _components_components_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../components/components.module */ "./src/app/components/components.module.ts");









let OrdenesPageModule = class OrdenesPageModule {
};
OrdenesPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _directives_text_avatar_index__WEBPACK_IMPORTED_MODULE_7__["TextAvatarModule"],
            _components_components_module__WEBPACK_IMPORTED_MODULE_8__["ComponentsModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterModule"].forChild([
                {
                    path: '',
                    component: _ordenes_page__WEBPACK_IMPORTED_MODULE_6__["OrdenesPage"]
                }
            ])
        ],
        declarations: [_ordenes_page__WEBPACK_IMPORTED_MODULE_6__["OrdenesPage"]]
    })
], OrdenesPageModule);



/***/ }),

/***/ "./src/app/ordenes/ordenes.page.scss":
/*!*******************************************!*\
  !*** ./src/app/ordenes/ordenes.page.scss ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".text-avatar-1 {\n  color: #000000DE;\n  font-size: 16pt;\n  letter-spacing: 0.5pt;\n  margin-top: 12px;\n}\n\n.subtext-avatar-1 {\n  color: #00000099;\n  font-size: 14pt;\n  letter-spacing: 0.25pt;\n  margin-bottom: 12px;\n}\n\n.text-solicitud {\n  color: #000000DE;\n  font-size: 12pt;\n  letter-spacing: 0.4pt;\n  margin-top: 12px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy92aWN0b3Jjb3JvbmFkby9EZXNrdG9wL21pRmFtaWxpYV9wcmUvc3JjL2FwcC9vcmRlbmVzL29yZGVuZXMucGFnZS5zY3NzIiwic3JjL2FwcC9vcmRlbmVzL29yZGVuZXMucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksZ0JBQUE7RUFDQSxlQUFBO0VBQ0EscUJBQUE7RUFDQSxnQkFBQTtBQ0NKOztBRENBO0VBQ0ksZ0JBQUE7RUFDQSxlQUFBO0VBQ0Esc0JBQUE7RUFDQSxtQkFBQTtBQ0VKOztBREFBO0VBQ0ksZ0JBQUE7RUFDQSxlQUFBO0VBQ0EscUJBQUE7RUFDQSxnQkFBQTtBQ0dKIiwiZmlsZSI6InNyYy9hcHAvb3JkZW5lcy9vcmRlbmVzLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi50ZXh0LWF2YXRhci0xe1xyXG4gICAgY29sb3I6IzAwMDAwMERFO1xyXG4gICAgZm9udC1zaXplOiAxNnB0O1xyXG4gICAgbGV0dGVyLXNwYWNpbmc6IDAuNXB0O1xyXG4gICAgbWFyZ2luLXRvcDogMTJweDtcclxufVxyXG4uc3VidGV4dC1hdmF0YXItMXtcclxuICAgIGNvbG9yOiMwMDAwMDA5OTtcclxuICAgIGZvbnQtc2l6ZTogMTRwdDtcclxuICAgIGxldHRlci1zcGFjaW5nOiAwLjI1cHQ7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAxMnB4O1xyXG59XHJcbi50ZXh0LXNvbGljaXR1ZHtcclxuICAgIGNvbG9yOiMwMDAwMDBERTtcclxuICAgIGZvbnQtc2l6ZTogMTJwdDtcclxuICAgIGxldHRlci1zcGFjaW5nOiAwLjRwdDtcclxuICAgIG1hcmdpbi10b3A6IDEycHg7XHJcbn0iLCIudGV4dC1hdmF0YXItMSB7XG4gIGNvbG9yOiAjMDAwMDAwREU7XG4gIGZvbnQtc2l6ZTogMTZwdDtcbiAgbGV0dGVyLXNwYWNpbmc6IDAuNXB0O1xuICBtYXJnaW4tdG9wOiAxMnB4O1xufVxuXG4uc3VidGV4dC1hdmF0YXItMSB7XG4gIGNvbG9yOiAjMDAwMDAwOTk7XG4gIGZvbnQtc2l6ZTogMTRwdDtcbiAgbGV0dGVyLXNwYWNpbmc6IDAuMjVwdDtcbiAgbWFyZ2luLWJvdHRvbTogMTJweDtcbn1cblxuLnRleHQtc29saWNpdHVkIHtcbiAgY29sb3I6ICMwMDAwMDBERTtcbiAgZm9udC1zaXplOiAxMnB0O1xuICBsZXR0ZXItc3BhY2luZzogMC40cHQ7XG4gIG1hcmdpbi10b3A6IDEycHg7XG59Il19 */");

/***/ }),

/***/ "./src/app/ordenes/ordenes.page.ts":
/*!*****************************************!*\
  !*** ./src/app/ordenes/ordenes.page.ts ***!
  \*****************************************/
/*! exports provided: OrdenesPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OrdenesPage", function() { return OrdenesPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _app_services_ServicioUtiles__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../app/services/ServicioUtiles */ "./src/app/services/ServicioUtiles.ts");
/* harmony import */ var _app_services_ServicioLaboratorio__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../app/services/ServicioLaboratorio */ "./src/app/services/ServicioLaboratorio.ts");
/* harmony import */ var _app_services_ServicioAcceso__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../app/services/ServicioAcceso */ "./src/app/services/ServicioAcceso.ts");
/* harmony import */ var _app_services_ServicioParametrosApp__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../app/services/ServicioParametrosApp */ "./src/app/services/ServicioParametrosApp.ts");
/* harmony import */ var _modal_examenes_modal_examenes_page__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../modal-examenes/modal-examenes.page */ "./src/app/modal-examenes/modal-examenes.page.ts");
/* harmony import */ var _modal_busqueda_modal_busqueda_page__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../modal-busqueda/modal-busqueda.page */ "./src/app/modal-busqueda/modal-busqueda.page.ts");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! moment */ "./node_modules/moment/moment.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_10__);



//parametros

//SERVICIOS




//modal

//modal

//moment

let OrdenesPage = class OrdenesPage {
    constructor(navCtrl, toast, modalCtrl, platform, menu, activatedRoute, router, utiles, loading, lab, acceso, parametrosApp) {
        this.navCtrl = navCtrl;
        this.toast = toast;
        this.modalCtrl = modalCtrl;
        this.platform = platform;
        this.menu = menu;
        this.activatedRoute = activatedRoute;
        this.router = router;
        this.utiles = utiles;
        this.loading = loading;
        this.lab = lab;
        this.acceso = acceso;
        this.parametrosApp = parametrosApp;
        this.miColor = '#FF4081';
        this.textColor = '#FFFFFF';
        //tiene registros
        this.tiene = true;
        this.estaCargando = false;
        //nueva busqueda
        this.listadoOrdenesCompleto = [];
        this.listadoOrdenesCompletoBackup = [];
        this.listadoExamenesCompleto = [];
        this.listadoExamenesCompletoBackUp = [];
        this.lineAvatar = 'none';
        this.mostrarBusqueda = false;
    }
    //var arrPresiones = this.presiones.sort((a: any, b: any) => { return this.getTime(moment(b.FechaPresion).toDate()) - this.getTime(moment(a.FechaPresion).toDate()) });
    ngOnInit() {
        moment__WEBPACK_IMPORTED_MODULE_10__["locale"]('es');
        this.activatedRoute.queryParams.subscribe(params => {
            if (params && params.usuario) {
                this.usuarioAps = JSON.parse(params.usuario);
                //console.log(this.usuarioAps);
            }
        });
        //this.loadInicio();
        this.loadInicioCompleto();
    }
    filterList(event) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            console.log(event.srcElement.value);
            this.listadoExamenesCompleto = this.listadoExamenesCompletoBackUp;
            //this.listadoOrdenesCompleto = this.listadoOrdenesCompletoBackup;
            const searchTerm = event.srcElement.value;
            if (!searchTerm) {
                return;
            }
            this.listadoExamenesCompleto = this.listadoExamenesCompleto.filter(examen => {
                if (examen.NombreExamen && searchTerm) {
                    return (examen.NombreExamen.toLowerCase().indexOf(searchTerm.toLowerCase()) > -1);
                }
            });
        });
    }
    buscar() {
        //this.listadoOrdenesCompleto = this.listadoOrdenesCompletoBackup;
        this.listadoExamenesCompleto = this.listadoExamenesCompletoBackUp;
        if (this.mostrarBusqueda == false) {
            this.mostrarBusqueda = true;
        }
        else {
            this.mostrarBusqueda = false;
        }
    }
    loadInicioCompleto() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            this.listadoOrdenesCompleto = [];
            if (this.usuarioAps) {
                this.estaCargando = true;
                let loader = yield this.loading.create({
                    cssClass: 'loading-vacio',
                    showBackdrop: false,
                    spinner: null,
                });
                yield loader.present().then(() => Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
                    if (!this.utiles.isAppOnDevice()) {
                        //llamada web
                        this.lab.getOrdenes(this.usuarioAps.Id).subscribe((response) => {
                            this.porocesarListaCompleto(response, loader);
                        }, error => {
                            console.log(error.message);
                            this.estaCargando = false;
                            loader.dismiss();
                        });
                    }
                    else {
                        //llamada nativa
                        this.lab.getOrdenesNative(this.usuarioAps.Id).then((response) => {
                            this.porocesarListaCompleto(JSON.parse(response.data), loader);
                        }).catch(error => {
                            console.log(error.message);
                            this.estaCargando = false;
                            loader.dismiss();
                        });
                    }
                }));
            }
        });
    }
    loadInicio() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            //mi color
            //this.miColor = this.utiles.entregaMiColor();
            //ordenes
            this.listadoOrdenes = [];
            if (this.usuarioAps) {
                this.miColor = this.utiles.entregaColor(this.usuarioAps);
                this.estaCargando = true;
                let loader = yield this.loading.create({
                    cssClass: 'loading-vacio',
                    showBackdrop: false,
                    spinner: null,
                });
                yield loader.present().then(() => Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
                    if (!this.utiles.isAppOnDevice()) {
                        //llamada web
                        this.lab.getOrdenes(this.usuarioAps.Id).subscribe((response) => {
                            this.porocesarLista(response, loader);
                        });
                    }
                    else {
                        //llamada nativa
                        this.lab.getOrdenesNative(this.usuarioAps.Id).then((response) => {
                            this.porocesarLista(JSON.parse(response.data), loader);
                        });
                    }
                }));
            }
        });
    }
    porocesarLista(data, loader) {
        var listado = data;
        if (listado) {
            for (var s in listado) {
                let fecha = moment__WEBPACK_IMPORTED_MODULE_10__(listado[s].FechaRegistro).format('DD-MM-YYYY');
                listado[s].Fecha = fecha;
                listado[s].UrlImagen = this.usuarioAps.UrlImagen;
                listado[s].Parentezco = this.usuarioAps.Parentezco.Nombre;
            }
            //ahora asignamos la variable
            this.listadoOrdenes = listado;
            if (this.listadoOrdenes.length == 0) {
                this.tiene = false;
            }
            //console.log(this.listadoOrdenes);
        }
        loader.dismiss();
        this.estaCargando = false;
    }
    porocesarListaCompleto(data, loader) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            var listado = data;
            if (listado) {
                for (var s in listado) {
                    let fecha = moment__WEBPACK_IMPORTED_MODULE_10__(listado[s].FechaRegistro).format('DD-MM-YYYY');
                    listado[s].Fecha = fecha;
                    listado[s].UrlImagen = this.usuarioAps.UrlImagen;
                    listado[s].Parentezco = this.usuarioAps.Parentezco.Nombre;
                    let entidad = {
                        Estado: listado[s].Estado,
                        Fecha: fecha,
                        Id: listado[s].Id,
                        IdEstado: listado[s].IdEstado,
                        UrlImagen: this.usuarioAps.UrlImagen,
                        Parentezco: this.usuarioAps.Parentezco.Nombre,
                        NombreUsuario: listado[s].NombreUsuario,
                        UspId: listado[s].UspId,
                        Examenes: []
                    };
                    this.listadoOrdenesCompleto.push(entidad);
                }
                //vamos a filtrar los resultados de acuerdo a la consulta
                this.listadoOrdenesCompleto = this.listadoOrdenesCompleto.filter(p => p.UspId == this.usuarioAps.Id);
                if (this.listadoOrdenesCompleto.length == 0) {
                    this.tiene = false;
                }
                //puede que traiga un elemento
                if (this.listadoOrdenesCompleto && this.listadoOrdenesCompleto.length == 1) {
                    if (this.listadoOrdenesCompleto[0].Estado == "No hay Información") {
                        this.tiene = false;
                    }
                }
                this.estaCargando = false;
                loader.dismiss();
                //aca hacer foreach para traer los examenes
                if (this.listadoOrdenesCompleto && this.listadoOrdenesCompleto.length > 0) {
                    for (var t in this.listadoOrdenesCompleto) {
                        let loaderUno = yield this.loading.create({
                            cssClass: 'loading-vacio',
                            showBackdrop: false,
                            spinner: null,
                        });
                        this.estaCargando = true;
                        yield loaderUno.present().then(() => Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
                            if (!this.utiles.isAppOnDevice()) {
                                //llamada web
                                this.lab.getExamenes(this.listadoOrdenesCompleto[t].Id).subscribe((response) => {
                                    //this.porocesarLista(response, loader);
                                    var data = response;
                                    if (data) {
                                        for (var s in data) {
                                            let fecha = moment__WEBPACK_IMPORTED_MODULE_10__(data[s].FechaRegistro).format('DD-MM-YYYY');
                                            let fechaMuestra = moment__WEBPACK_IMPORTED_MODULE_10__(data[s].FechaMuestra).format('DD-MM-YYYY');
                                            let fechaSolicitud = moment__WEBPACK_IMPORTED_MODULE_10__(data[s].FechaSolicitud).format('DD-MM-YYYY');
                                            let fechaResultado = moment__WEBPACK_IMPORTED_MODULE_10__(data[s].FechaResultado).format('DD-MM-YYYY');
                                            data[s].Fecha = fecha;
                                            data[s].FechaMuestra = fechaMuestra;
                                            data[s].FechaSolicitud = fechaSolicitud;
                                            data[s].FechaResultado = fechaResultado;
                                            this.listadoOrdenesCompleto[t].Examenes.push(data[s]);
                                            this.listadoExamenesCompleto.push(data[s]);
                                        }
                                        if (this.listadoExamenesCompleto.length > 0) {
                                            this.tiene = true;
                                        }
                                        this.listadoExamenesCompletoBackUp = this.listadoExamenesCompleto;
                                        this.estaCargando = false;
                                        loaderUno.dismiss();
                                    }
                                    else {
                                        this.estaCargando = false;
                                        loaderUno.dismiss();
                                    }
                                }, error => {
                                    console.log(error.message);
                                    this.estaCargando = false;
                                    loaderUno.dismiss();
                                });
                            }
                            else {
                                //llamada nativa
                                this.lab.getExamenesNative(this.listadoOrdenesCompleto[t].Id).then((response) => {
                                    var data = JSON.parse(response.data);
                                    if (data) {
                                        for (var s in data) {
                                            let fecha = moment__WEBPACK_IMPORTED_MODULE_10__(data[s].FechaRegistro).format('DD-MM-YYYY');
                                            let fechaMuestra = moment__WEBPACK_IMPORTED_MODULE_10__(data[s].FechaMuestra).format('DD-MM-YYYY');
                                            let fechaSolicitud = moment__WEBPACK_IMPORTED_MODULE_10__(data[s].FechaSolicitud).format('DD-MM-YYYY');
                                            let fechaResultado = moment__WEBPACK_IMPORTED_MODULE_10__(data[s].FechaResultado).format('DD-MM-YYYY');
                                            data[s].Fecha = fecha;
                                            data[s].FechaMuestra = fechaMuestra;
                                            data[s].FechaSolicitud = fechaSolicitud;
                                            data[s].FechaResultado = fechaResultado;
                                            this.listadoOrdenesCompleto[t].Examenes.push(data[s]);
                                            this.listadoExamenesCompleto.push(data[s]);
                                        }
                                        if (this.listadoExamenesCompleto.length > 0) {
                                            this.tiene = true;
                                        }
                                        this.listadoExamenesCompletoBackUp = this.listadoExamenesCompleto;
                                        this.estaCargando = false;
                                        loaderUno.dismiss();
                                    }
                                    else {
                                        this.estaCargando = false;
                                        loaderUno.dismiss();
                                    }
                                }).catch(error => {
                                    console.log(error.message);
                                    this.estaCargando = false;
                                    loaderUno.dismiss();
                                });
                            }
                        }));
                    }
                }
                /////console.log(this.listadoOrdenesCompleto);
                this.listadoOrdenesCompletoBackup = this.listadoOrdenesCompleto;
                console.log(this.listadoOrdenesCompletoBackup);
            }
            else {
                this.estaCargando = false;
                loader.dismiss();
            }
            /*     loader.dismiss();
                this.estaCargando = false; */
        });
    }
    ordenSelected(item) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const modal = yield this.modalCtrl.create({
                component: _modal_examenes_modal_examenes_page__WEBPACK_IMPORTED_MODULE_8__["ModalExamenesPage"],
                componentProps: {
                    'orden': JSON.stringify(item)
                }
            });
            return yield modal.present();
        });
    }
    ordenSelectedCompleto(item) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            /*     const modal = await this.modalCtrl.create(
                  {
                    component: ModalExamenesPage,
                    componentProps: {
                      'orden': JSON.stringify(item)
                    }
                  }
                );
                return await modal.present(); */
            console.log(item);
            if (item) {
                const navigationExtras = {
                    queryParams: {
                        resultados: JSON.stringify(item.Resultados),
                        nombreExamen: item.NombreExamen,
                        usuario: JSON.stringify(this.usuarioAps)
                    }
                };
                this.navCtrl.navigateRoot(['resultados'], navigationExtras);
            }
        });
    }
    logout() {
        this.acceso.logout();
        this.navCtrl.navigateRoot('login');
    }
    obtenerFiltro(data) {
        var filtro = '';
        if (data && data.length > 0) {
            for (var s in data) {
                if (data[s].Valor == true) {
                    filtro = data[s].Nombre.toUpperCase();
                }
            }
        }
        return filtro;
    }
    getTime(date) {
        return date != null ? new Date(date).getTime() : 0;
    }
    ordenar(nombreFiltro) {
        //arrPeso.sort((a: any, b: any) => { return this.getTime(moment(b.Fecha).toDate()) - this.getTime(moment(a.Fecha).toDate()) });
        if (nombreFiltro.toUpperCase() == 'FECHA DE SOLICITUD') {
            this.listadoExamenesCompleto.sort((a, b) => {
                return this.getTime(moment__WEBPACK_IMPORTED_MODULE_10__(this.transformDate(b.FechaSolicitud)).toDate()) - this.getTime(moment__WEBPACK_IMPORTED_MODULE_10__(this.transformDate(a.FechaSolicitud)).toDate());
            });
        }
        if (nombreFiltro.toUpperCase() == 'FECHA DE TOMA DE MUESTRA') {
            this.listadoExamenesCompleto.sort((a, b) => {
                return this.getTime(moment__WEBPACK_IMPORTED_MODULE_10__(this.transformDate(b.FechaMuestra)).toDate()) - this.getTime(moment__WEBPACK_IMPORTED_MODULE_10__(this.transformDate(a.FechaMuestra)).toDate());
            });
        }
        if (nombreFiltro.toUpperCase() == 'FECHA DE RESULTADOS') {
            this.listadoExamenesCompleto.sort((a, b) => {
                return this.getTime(moment__WEBPACK_IMPORTED_MODULE_10__(this.transformDate(b.FechaResultado)).toDate()) - this.getTime(moment__WEBPACK_IMPORTED_MODULE_10__(this.transformDate(a.FechaResultado)).toDate());
            });
        }
    }
    //para abrir el modal de busqueda
    modalBusqueda() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const modal = yield this.modalCtrl.create({
                component: _modal_busqueda_modal_busqueda_page__WEBPACK_IMPORTED_MODULE_9__["ModalBusquedaPage"],
                componentProps: {
                    'opciones': JSON.stringify(this.listadoExamenesCompletoBackUp)
                }
            });
            modal.onDidDismiss().then((data) => {
                if (data.data && data.data != undefined) {
                    //aca filtrar
                    console.log(data);
                    var filtro = this.obtenerFiltro(data.data.data);
                    this.ordenar(filtro);
                }
            });
            return yield modal.present();
        });
    }
    transformDate(dateString) {
        //formato DD-MM-YYYY
        var retorno = "";
        var partes = dateString.split("-");
        if (partes && partes.length == 3) {
            retorno = partes[2] + '-' + partes[1] + '-' + partes[0];
        }
        return retorno;
    }
};
OrdenesPage.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ToastController"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ModalController"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["Platform"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["MenuController"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] },
    { type: _app_services_ServicioUtiles__WEBPACK_IMPORTED_MODULE_4__["ServicioUtiles"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["LoadingController"] },
    { type: _app_services_ServicioLaboratorio__WEBPACK_IMPORTED_MODULE_5__["ServicioLaboratorio"] },
    { type: _app_services_ServicioAcceso__WEBPACK_IMPORTED_MODULE_6__["ServicioAcceso"] },
    { type: _app_services_ServicioParametrosApp__WEBPACK_IMPORTED_MODULE_7__["ServicioParametrosApp"] }
];
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('myList', { read: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonItem"] })
], OrdenesPage.prototype, "list", void 0);
OrdenesPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-ordenes',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./ordenes.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/ordenes/ordenes.page.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./ordenes.page.scss */ "./src/app/ordenes/ordenes.page.scss")).default]
    })
], OrdenesPage);



/***/ })

}]);
//# sourceMappingURL=ordenes-ordenes-module-es2015.js.map