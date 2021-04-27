(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["cupos-disponibles-cupos-disponibles-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/cupos-disponibles/cupos-disponibles.page.html":
/*!*****************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/cupos-disponibles/cupos-disponibles.page.html ***!
  \*****************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\r\n  <ion-toolbar [style.--background]=\"miColor\" mode=\"md\">\r\n    <ion-buttons slot=\"start\">\r\n      <ion-back-button defaultHref=\"/home\" class=\"fcw\"></ion-back-button>\r\n    </ion-buttons>\r\n    <ion-title class=\"fcw\">Cupos disponibles</ion-title>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content class=\"back-app\">\r\n\r\n  <ion-item>\r\n    <ion-label>Tipos de atención</ion-label>\r\n    <ion-select interface=\"popover\" (ionChange)=\"tipoSeleccionado($event)\" multiple=\"false\" value=\"{{comboSeleccionado}}\">\r\n      <ion-select-option *ngFor=\"let tipo of tiposAtencion\" [value]=\"tipo.Texto\">{{tipo.Texto}}</ion-select-option>\r\n    </ion-select>\r\n  </ion-item>\r\n\r\n  <ion-grid>\r\n    <ion-row>\r\n      <ion-col size=\"1\" class=\"ion-no-margin ion-no-padding\" [style.background]=\"miColor\" [style.color]=\"textColor\">\r\n        <ion-icon name=\"chevron-back-outline\" style=\"font-size: 2em;padding-top: 10px;\" *ngIf=\"indiceActual > 0\" (click)=\"onClickCambiarSemana('ant')\"></ion-icon>\r\n      </ion-col>\r\n      <ion-col class=\"ion-no-margin ion-no-padding\">\r\n        <ion-item [style.--background]=\"miColor\" [style.--color]=\"textColor\">\r\n          <ion-label class=\"ion-text-wrap ion-text-center titulo-semanas\">\r\n            {{semana.texto}}\r\n          </ion-label>\r\n        </ion-item>\r\n        <ion-grid class=\"ion-no-margin ion-no-padding\">\r\n          <ion-row>\r\n            <ion-col *ngFor=\"let item of semana.semanas\" class=\"ion-text-center ion-padding-bottom label-fecha\" \r\n              [style.background]=\"item.selected ? '#3880ff' : '#3dc2ff'\" \r\n              (click)=\"seleccionarCuposAgrupados(item)\"\r\n              [style.color]=\"textColor\">\r\n              <ion-label class=\"ion-text-center ion-text-capitalize\">\r\n                <strong>{{item.diaStr}}</strong> \r\n                <!-- {{item.texto}} -->\r\n              </ion-label>\r\n              <p class=\"ion-text-center ion-text-capitalize\">\r\n                {{item.texto}}\r\n              </p>\r\n              <ion-badge *ngIf=\"item.total > 0\" class=\"badge-cita\" color=\"success\"><ion-icon name=\"checkmark\"></ion-icon></ion-badge>\r\n            </ion-col>\r\n          </ion-row>\r\n        </ion-grid>\r\n      </ion-col>\r\n      <ion-col size=\"1\" class=\"ion-no-margin ion-no-padding\" [style.background]=\"miColor\" [style.color]=\"textColor\">\r\n        <ion-icon name=\"chevron-forward-outline\" style=\"font-size: 2em;padding-top: 10px;\" *ngIf=\"indiceActual < cantidadSemanas\" (click)=\"onClickCambiarSemana('sig')\"></ion-icon>\r\n      </ion-col>\r\n    </ion-row>\r\n  </ion-grid>\r\n  <div>\r\n   \r\n      <ion-list *ngFor=\"let cita of cuposAgrupadosSelected\" class=\"ion-padding-left\">\r\n        \r\n        <ion-list-header lines=\"inset\" [hidden]=\"contadorHorasDisponibles(cita[1].HorasDisponibles) == 0\">\r\n          <ion-label><h1>{{cita[1].MedicoPrestador.NombreCompletoMedico}}</h1></ion-label>\r\n          <ion-label>{{cita[0]}}</ion-label>\r\n        </ion-list-header>\r\n        <div *ngFor=\"let cupo of cita[1].HorasDisponibles\">\r\n          <ion-item lines=\"none\" [hidden]=\"!cupo.Visible\">\r\n            <ion-label class=\"ion-text-wrap\" [ngClass]=\"{'danger':cupo.Estado === 'cancelled'}\">\r\n              <h5><ion-icon name=\"navigate\" slot=\"start\"></ion-icon>&nbsp;{{cupo.Servicio.Nombre}}</h5>\r\n              <h6><ion-icon name=\"bandage\" slot=\"start\"></ion-icon>&nbsp;{{cupo.TipoAtencion}}</h6>\r\n              <h6 class=\"ion-text-capitalize\"><ion-icon name=\"alarm\" slot=\"start\"></ion-icon>&nbsp;{{transformDate(cupo.FechaHoraInicio, 'dddd DD MMMM YYYY')}}</h6>\r\n              <h6 class=\"ion-text-capitalize\">Estado: <strong>{{traduceString(cupo.Estado)}}</strong></h6>\r\n            </ion-label>\r\n            <ion-button \r\n              [ngClass]=\"{'danger-boton':cupo.Estado === 'cancelled', 'success-boton':cupo.Estado === 'booked' || cupo.Estado === 'confirmed'}\" \r\n              (click)=\"citaSelected(cupo)\">{{cupo.HoraInicio}} - {{cupo.HoraTermino}}\r\n              <ion-icon name=\"chevron-forward-outline\" slot=\"end\"></ion-icon>\r\n            </ion-button>\r\n          </ion-item>\r\n        </div>\r\n\r\n      </ion-list>\r\n   \r\n      <!-- no hay datos -->\r\n    <ion-row *ngIf=\"cuposAgrupadosSelected.length == 0\">\r\n      <div style=\"position: absolute; display: table; height: 80%; font-size: 30px; color:#BDBDBD; text-align: center;\" class=\"ion-padding\">\r\n        <p style=\"display: table-cell; vertical-align: middle\">No hay citas para el día seleccionado  <br>\r\n        <ion-icon name=\"information-circle\" style=\"font-size: 50px;\"></ion-icon></p>\r\n      </div>\r\n    </ion-row>\r\n\r\n  </div>\r\n</ion-content>\r\n<ion-fab vertical=\"bottom\" horizontal=\"end\" slot=\"fixed\">\r\n  <ion-fab-button (click)=\"logout()\" [style.--background]=\"miColor\">\r\n    <ion-icon name=\"close\"></ion-icon>\r\n  </ion-fab-button>\r\n</ion-fab>\r\n");

/***/ }),

/***/ "./src/app/cupos-disponibles/cupos-disponibles.module.ts":
/*!***************************************************************!*\
  !*** ./src/app/cupos-disponibles/cupos-disponibles.module.ts ***!
  \***************************************************************/
/*! exports provided: CuposDisponiblesPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CuposDisponiblesPageModule", function() { return CuposDisponiblesPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _cupos_disponibles_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./cupos-disponibles.page */ "./src/app/cupos-disponibles/cupos-disponibles.page.ts");







let CuposDisponiblesPageModule = class CuposDisponiblesPageModule {
};
CuposDisponiblesPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterModule"].forChild([
                {
                    path: '',
                    component: _cupos_disponibles_page__WEBPACK_IMPORTED_MODULE_6__["CuposDisponiblesPage"]
                }
            ])
        ],
        declarations: [_cupos_disponibles_page__WEBPACK_IMPORTED_MODULE_6__["CuposDisponiblesPage"]]
    })
], CuposDisponiblesPageModule);



/***/ }),

/***/ "./src/app/cupos-disponibles/cupos-disponibles.page.scss":
/*!***************************************************************!*\
  !*** ./src/app/cupos-disponibles/cupos-disponibles.page.scss ***!
  \***************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".titulo-semanas {\n  font-size: 0.8em;\n}\n\n.badge-cita {\n  position: absolute;\n  top: 2px;\n  right: 1px;\n  border-radius: 100%;\n}\n\n.danger {\n  color: var(--ion-color-danger);\n}\n\n.danger-boton {\n  --background: var(--ion-color-danger);\n}\n\n.success-boton {\n  --background: var(--ion-color-success);\n}\n\n.label-fecha {\n  padding-top: 28px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy92aWN0b3Jjb3JvbmFkby9EZXNrdG9wL21pRmFtaWxpYV9wcmUvc3JjL2FwcC9jdXBvcy1kaXNwb25pYmxlcy9jdXBvcy1kaXNwb25pYmxlcy5wYWdlLnNjc3MiLCJzcmMvYXBwL2N1cG9zLWRpc3BvbmlibGVzL2N1cG9zLWRpc3BvbmlibGVzLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGdCQUFBO0FDQ0o7O0FEQ0E7RUFDSSxrQkFBQTtFQUNBLFFBQUE7RUFDQSxVQUFBO0VBQ0EsbUJBQUE7QUNFSjs7QURBQTtFQUNJLDhCQUFBO0FDR0o7O0FEREE7RUFDSSxxQ0FBQTtBQ0lKOztBREZBO0VBQ0ksc0NBQUE7QUNLSjs7QURIQTtFQUNJLGlCQUFBO0FDTUoiLCJmaWxlIjoic3JjL2FwcC9jdXBvcy1kaXNwb25pYmxlcy9jdXBvcy1kaXNwb25pYmxlcy5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIudGl0dWxvLXNlbWFuYXN7XHJcbiAgICBmb250LXNpemU6IDAuOGVtO1xyXG59XHJcbi5iYWRnZS1jaXRhe1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgdG9wOjJweDtcclxuICAgIHJpZ2h0OiAxcHg7XHJcbiAgICBib3JkZXItcmFkaXVzOiAxMDAlO1xyXG59XHJcbi5kYW5nZXJ7XHJcbiAgICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLWRhbmdlcik7XHJcbn1cclxuLmRhbmdlci1ib3RvbntcclxuICAgIC0tYmFja2dyb3VuZDogdmFyKC0taW9uLWNvbG9yLWRhbmdlcik7XHJcbn1cclxuLnN1Y2Nlc3MtYm90b257XHJcbiAgICAtLWJhY2tncm91bmQ6IHZhcigtLWlvbi1jb2xvci1zdWNjZXNzKTtcclxufVxyXG4ubGFiZWwtZmVjaGF7XHJcbiAgICBwYWRkaW5nLXRvcDogMjhweDs7XHJcbn0iLCIudGl0dWxvLXNlbWFuYXMge1xuICBmb250LXNpemU6IDAuOGVtO1xufVxuXG4uYmFkZ2UtY2l0YSB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiAycHg7XG4gIHJpZ2h0OiAxcHg7XG4gIGJvcmRlci1yYWRpdXM6IDEwMCU7XG59XG5cbi5kYW5nZXIge1xuICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLWRhbmdlcik7XG59XG5cbi5kYW5nZXItYm90b24ge1xuICAtLWJhY2tncm91bmQ6IHZhcigtLWlvbi1jb2xvci1kYW5nZXIpO1xufVxuXG4uc3VjY2Vzcy1ib3RvbiB7XG4gIC0tYmFja2dyb3VuZDogdmFyKC0taW9uLWNvbG9yLXN1Y2Nlc3MpO1xufVxuXG4ubGFiZWwtZmVjaGEge1xuICBwYWRkaW5nLXRvcDogMjhweDtcbn0iXX0= */");

/***/ }),

/***/ "./src/app/cupos-disponibles/cupos-disponibles.page.ts":
/*!*************************************************************!*\
  !*** ./src/app/cupos-disponibles/cupos-disponibles.page.ts ***!
  \*************************************************************/
/*! exports provided: CuposDisponiblesPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CuposDisponiblesPage", function() { return CuposDisponiblesPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _app_services_ServicioUtiles__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../app/services/ServicioUtiles */ "./src/app/services/ServicioUtiles.ts");
/* harmony import */ var _app_services_ServicioAcceso__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../app/services/ServicioAcceso */ "./src/app/services/ServicioAcceso.ts");
/* harmony import */ var _app_services_ServicioCitas__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../app/services/ServicioCitas */ "./src/app/services/ServicioCitas.ts");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! moment */ "./node_modules/moment/moment.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _app_pipes_fecha_pipe__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../app/pipes/fecha.pipe */ "./src/app/pipes/fecha.pipe.ts");
/* harmony import */ var _app_pipes_filter_pipe__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../app/pipes/filter.pipe */ "./src/app/pipes/filter.pipe.ts");
/* harmony import */ var _modal_operacion_cita_modal_operacion_cita_page__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../modal-operacion-cita/modal-operacion-cita.page */ "./src/app/modal-operacion-cita/modal-operacion-cita.page.ts");








//pipe

//modal

let CuposDisponiblesPage = class CuposDisponiblesPage {
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
        this.semanas = [];
        this.textColor = '#FFFFFF';
        this.citas = [];
        this.citasAgrupadas = [];
        this.cuposAgrupadosSelected = [];
        //datos para consultar citas
        this.runPaciente = '';
        this.codigoDeis = '';
        this.serviceType = '349';
        //manejo de movimiento de semanas
        this.indiceAnterior = 0;
        this.indiceSiguiente = 1;
        this.indiceActual = 0;
        this.anteriorEnabled = false;
        this.siguienteEnabled = true;
        this.cantidadSemanas = 3;
        //tipo operacion
        this.tipoOperacion = 'disponibilidad';
        //tipos de atencion
        this.tiposAtencion = [];
        this.comboSeleccionado = "";
    }
    ngOnInit() {
        moment__WEBPACK_IMPORTED_MODULE_6__["locale"]('es');
        if (sessionStorage.UsuarioAps) {
            this.usuarioAps = JSON.parse(sessionStorage.UsuarioAps);
            if (this.usuarioAps) {
                //this.usuarioAps.UrlImagen = this.utiles.entregaMiImagen();
                this.usuarioAps.UrlImagen = this.utiles.entregaImagen(this.usuarioAps);
                this.miColor = this.utiles.entregaColor(this.usuarioAps);
                this.runPaciente = this.utiles.insertarGuion(this.usuarioAps.Rut);
                this.codigoDeis = this.usuarioAps.ConfiguracionNodo.CodigoDeis2014;
                this.nodId = this.usuarioAps.ConfiguracionNodo.NodId;
            }
        }
        //realizamos la llamada
        this.construyeSemanaBuscar(0, 'sig');
    }
    //llamada al servidor
    construyeSemanaBuscar(pagina, operacion) {
        //si la pagina es 0 se debe construir la semana a contar de la fecha actual
        var factorDias = 0;
        var fecha = new Date();
        //en el caso que venga la misma pagina que se envio y la operacion nula, debemos tomar los datos de la semana
        //seleccionada actual
        if (operacion == null) {
            if (this.semana) {
                var fechaIni = moment__WEBPACK_IMPORTED_MODULE_6__();
                var date = new Date();
                if (operacion == 'ant') {
                    //si es anterior hay que ver que pasa
                    //deberiamos retroceder desde la fecha de inicio
                    fechaIni = moment__WEBPACK_IMPORTED_MODULE_6__(this.semana.start).add(-8, 'day');
                    date = new Date(fechaIni.year(), fechaIni.month(), fechaIni.date(), 0, 0, 0, 0);
                }
                else {
                    fechaIni = moment__WEBPACK_IMPORTED_MODULE_6__(this.semana.end);
                    date = new Date(fechaIni.year(), fechaIni.month(), fechaIni.date(), 0, 0, 0, 0);
                }
                this.utiles.construyeSemana(this.runPaciente, this.codigoDeis, date);
                this.semana = this.utiles.semana;
                this.semanas = this.utiles.semanas;
                //lo comentamos para consultar una semana completa
                //var ini = this.semana.semanas[0].start;
                //var ter = this.semana.semanas[0].end;
                var ini = this.semana.start;
                var ter = this.semana.end;
                sessionStorage.setItem("PAGINA_ACTUAL", pagina);
                this.buscarDisponibilidad(ini, ter, this.codigoDeis, this.runPaciente, this.serviceType, this.tipoOperacion);
            }
        }
        if (pagina == 0) {
            this.utiles.construyeSemana(this.runPaciente, this.codigoDeis, fecha);
            this.semana = this.utiles.semana;
            this.semanas = this.utiles.semanas;
            //esto lo cambiamos para que obtenga la semana completa
            //var ini = this.semana.semanas[0].start;
            var ini = this.semana.start;
            //var ter = this.semana.semanas[0].end;
            var ter = this.semana.end;
            //console.log(this.semana);
            //carga inicial
            sessionStorage.setItem("PAGINA_ACTUAL", pagina);
            this.buscarDisponibilidad(ini, ter, this.codigoDeis, this.runPaciente, this.serviceType, this.tipoOperacion);
        }
        else {
            //aca debemos sacar fecha inicio y termino
            if (this.semana) {
                var fechaIni = moment__WEBPACK_IMPORTED_MODULE_6__();
                var date = new Date();
                if (operacion == 'ant') {
                    //si es anterior hay que ver que pasa
                    //deberiamos retroceder desde la fecha de inicio
                    fechaIni = moment__WEBPACK_IMPORTED_MODULE_6__(this.semana.start).add(-8, 'day');
                    date = new Date(fechaIni.year(), fechaIni.month(), fechaIni.date(), 0, 0, 0, 0);
                }
                else {
                    fechaIni = moment__WEBPACK_IMPORTED_MODULE_6__(this.semana.end);
                    date = new Date(fechaIni.year(), fechaIni.month(), fechaIni.date(), 0, 0, 0, 0);
                }
                this.utiles.construyeSemana(this.runPaciente, this.codigoDeis, date);
                this.semana = this.utiles.semana;
                this.semanas = this.utiles.semanas;
                //lo comentamos para consultar una semana completa
                //var ini = this.semana.semanas[0].start;
                //var ter = this.semana.semanas[0].end;
                var ini = this.semana.start;
                var ter = this.semana.end;
                sessionStorage.setItem("PAGINA_ACTUAL", pagina);
                this.buscarDisponibilidad(ini, ter, this.codigoDeis, this.runPaciente, this.serviceType, this.tipoOperacion);
            }
        }
    }
    buscarDisponibilidad(start, end, organization, patient, serviceType, tipoOperacion) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            //ACA ME FALTA CONTROLAR LOS MENSAJES
            let loader = yield this.loading.create({
                message: 'Cargando...<br>disponibilidad',
                duration: 20000
            });
            yield loader.present().then(() => Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
                this.citas = [];
                this.citasAgrupadas = [];
                if (!this.utiles.isAppOnDevice()) {
                    //llamada web
                    this.cita.getDisponibilidad(start, end, organization, patient, serviceType, '', '', tipoOperacion, this.nodId).subscribe((response) => {
                        this.procesarRespuestaTotal(response, loader);
                    });
                    /*         this.cita.getDisponibilidadApi(start, end, organization, patient, serviceType, '', '', tipoOperacion, this.nodId).subscribe((response: any)=>{
                              this.procesarRespuestaTotal(response, loader);
                            }); */
                }
                else {
                    //llamada nativa
                    this.cita.getDisponibilidadNative(start, end, organization, patient, serviceType, '', '', tipoOperacion, this.nodId).then((response) => {
                        var respuesta = JSON.parse(response.data);
                        this.procesarRespuestaTotal(respuesta, loader);
                    });
                    /*         this.cita.getDisponibilidadApiNative(start, end, organization, patient, serviceType, '', '', tipoOperacion, this.nodId).then((response: any)=>{
                              var respuesta = JSON.parse(response.data);
                              this.procesarRespuestaTotal(respuesta, loader);
                            }); */
                }
            }));
        });
    }
    procesarRespuestaTotal(data, loader) {
        //vienen las citas sin fecha
        this.cuposAgrupadosSelected = [];
        this.tiposAtencion = [];
        //console.log(this.semana);
        if (data && data.Mensaje) {
            //correcto
            if (data.Mensaje.Codigo == 'correcto') {
                //todo bien procesar las citas
                var contador = 0;
                if (data.CitasDisponibles && data.CitasDisponibles.length > 0) {
                    data.CitasDisponibles.forEach(cit => {
                        cit.horaInicio = moment__WEBPACK_IMPORTED_MODULE_6__(cit.FechaHoraInicio).format('HH:mm');
                        cit.horaTermino = moment__WEBPACK_IMPORTED_MODULE_6__(cit.FechaHoraTermino).format('HH:mm');
                        //pruebas
                        contador++;
                    });
                }
                if (data.TiposAtencion) {
                    this.tiposAtencion = this.crearTiposAtencion(data.TiposAtencion);
                    if (this.tiposAtencion && this.tiposAtencion.length > 0) {
                        this.comboSeleccionado = this.tiposAtencion[0].Texto;
                    }
                }
                //aca asignamos las citas
                this.citas = data.CitasDisponibles;
                //hacemos foreach a las semanas
                if (this.semana.semanas && this.semana.semanas.length > 0) {
                    this.semana.semanas.forEach(sem => {
                        var cupos = 0;
                        //console.log(sem);
                        if (this.citas && this.citas.length > 0) {
                            sem.Cupos = [];
                            this.citas.forEach(cupo => {
                                //cupos = 0;
                                var fechaComparar = moment__WEBPACK_IMPORTED_MODULE_6__(cupo.FechaHoraInicio).format('YYYY-MM-DD');
                                if (moment__WEBPACK_IMPORTED_MODULE_6__(sem.start).format('YYYY-MM-DD') == fechaComparar) {
                                    sem.Cupos.push(cupo);
                                    cupos++;
                                }
                            });
                        }
                        //console.log(cupos);
                        sem.total = cupos;
                        sem.CuposAgrupados = this.agruparCitasTodas(sem.Cupos);
                    });
                }
                ////console.log(this.citas);
                //console.log(this.semana);
                //aca guardamos la semana en una variable de session
                sessionStorage.setItem('CUPOS_SEMANA', JSON.stringify(this.semana));
                //this.agruparCitas();
                //dejamos por defecto el primer item seleccionado
                this.cuposAgrupadosSelected = this.semana.semanas[0].CuposAgrupados;
                //this.cuposAgrupadosSelected = this.filter(this.semana.semanas[0].CuposAgrupados);
                //filtramos
                this.filtrarTiposAtencion();
                loader.dismiss();
            }
            else {
                this.cuposAgrupadosSelected = [];
                loader.dismiss();
            }
            //error
        }
    }
    agruparCitasTodas(arrCupos) {
        //aca vienen los cupos
        var cuposAgrupados = [];
        //this.citasAgrupadas = [];
        let nuevoObjeto = {};
        //primero sacamos los medicos distintos
        var medicos = [];
        if (arrCupos && arrCupos.length > 0) {
            arrCupos.forEach(x => {
                if (!nuevoObjeto.hasOwnProperty(x.RunMedico)) {
                    nuevoObjeto[x.RunMedico] = {
                        MedicoPrestador: {
                            NombreCompletoMedico: x.NombresMedico + ' ' + x.ApellidosMedico,
                            RunMedico: x.RunMedico
                        },
                        HorasDisponibles: []
                    };
                }
                //Agregamos los datos de profesionales. 
                nuevoObjeto[x.RunMedico].HorasDisponibles.push({
                    ApellidosMedico: x.ApellidosMedico,
                    Estado: x.Estado,
                    FechaHoraCreacion: x.FechaHoraCreacion,
                    FechaHoraInicio: x.FechaHoraInicio,
                    FechaHoraTermino: x.FechaHoraTermino,
                    Id: x.Id,
                    IdCita: x.IdCita,
                    IdPaciente: x.IdPaciente,
                    NombresMedico: x.NombresMedico,
                    RunMedico: x.RunMedico,
                    RunPaciente: x.RunPaciente,
                    Servicio: {
                        CodigoDeis: x.Servicio.CodigoDeis,
                        IdServicio: x.Servicio.IdServicio,
                        Nombre: x.Servicio.Nombre,
                        NombreServicio: x.Servicio.NombreServicio
                    },
                    Tipo: x.Tipo,
                    TipoAtencion: x.TipoAtencion,
                    TipoServicio: {
                        Codigo: x.TipoServicio.Codigo,
                        Nombre: x.TipoServicio.Nombre
                    },
                    HoraInicio: this.transformDateIso(new Date(x.FechaHoraInicio).toISOString()),
                    HoraTermino: this.transformDateIso(new Date(x.FechaHoraTermino).toISOString()),
                    Visible: true
                });
            });
        }
        //this.objetoCita = nuevoObjeto;
        //this.citasAgrupadas = Object.entries(this.objetoCita);
        cuposAgrupados = Object.entries(nuevoObjeto);
        //console.log(this.objetoCita);
        //console.log(this.citasAgrupadas);
        return cuposAgrupados;
    }
    crearTiposAtencion(tiposAtencion) {
        var arr = [];
        /*     var entidadInicial = {
              Texto: 'Todos',
              Valor: 0,
              Selected: true
            }
            arr.push(entidadInicial); */
        if (tiposAtencion && tiposAtencion.length > 0) {
            tiposAtencion.forEach(tipo => {
                var contador = 1;
                var entidadTipo = {
                    Texto: tipo,
                    Valor: contador,
                    Selected: false
                };
                arr.push(entidadTipo);
                contador++;
            });
        }
        return arr;
    }
    transformDate(value, format) {
        var pi = new _app_pipes_fecha_pipe__WEBPACK_IMPORTED_MODULE_7__["MomentPipe"]();
        return pi.transform(value, format);
    }
    traduceString(texto) {
        return this.utiles.traduceString(texto);
    }
    logout() {
        this.acceso.logout();
        this.navCtrl.navigateRoot('login');
    }
    onClickCambiarSemana(operacion) {
        if (operacion == 'ant') {
            //console.log('anterior');
            if (this.indiceActual == 0) {
                return;
            }
            this.indiceActual--;
        }
        else {
            if (this.indiceActual < this.cantidadSemanas) {
                //correcto
                this.indiceActual++;
            }
            else {
                return;
            }
        }
        this.construyeSemanaBuscar(this.indiceActual, operacion);
    }
    filtrarSemana(semana) {
        if (semana) {
            //primero contamos
            if (semana.Cupos > 0) {
                var contador = 0;
                semana.Cupos.forEach(cupo => {
                    if (cupo.TipoAtencion == this.comboSeleccionado) {
                        contador++;
                    }
                });
                //total de horas por tipo atencion
                semana.total = contador;
                //ahora se deben reprocesar las citas
                if (semana.CuposAgrupados && semana.CuposAgrupados.length > 0) {
                    semana.CuposAgrupados.forEach(cupo => {
                        if (cupo[1].HorasDisponibles && cupo[1].HorasDisponibles.length > 0) {
                            cupo[1].HorasDisponibles.forEach(element => {
                                if (element.TipoAtencion != this.comboSeleccionado) {
                                    element.Visible = false;
                                }
                                else {
                                    element.Visible = true;
                                }
                            });
                        }
                    });
                }
            }
        }
    }
    seleccionarCuposAgrupados(item) {
        //console.log(item);
        this.itemSelected = item;
        this.cuposAgrupadosSelected = [];
        if (item != null) {
            if (this.semana.semanas && this.semana.semanas.length > 0) {
                this.semana.semanas.forEach(sem => {
                    if (sem.end == item.end) {
                        sem.selected = true;
                        this.cuposAgrupadosSelected = sem.CuposAgrupados;
                        //console.log(sem);
                        //this.cuposAgrupadosSelected = this.filter(sem.CuposAgrupados);
                        //filtramos
                        this.filtrarTiposAtencion();
                        //console.log(this.cuposAgrupadosSelected);
                    }
                    else {
                        sem.selected = false;
                    }
                });
            }
        }
    }
    tipoSeleccionado(event) {
        if (event.detail.value) {
            this.comboSeleccionado = event.detail.value;
            //console.log(this.comboSeleccionado);
            //this.seleccionarCuposAgrupados(this.itemSelected);
            this.filtrarTiposAtencion();
        }
    }
    filtrarTiposAtencion() {
        //arr cuposAgrupadosSelected
        var total = 0;
        if (this.cuposAgrupadosSelected && this.cuposAgrupadosSelected.length > 0) {
            this.cuposAgrupadosSelected.forEach(cupo => {
                if (cupo[1].HorasDisponibles && cupo[1].HorasDisponibles.length > 0) {
                    cupo[1].HorasDisponibles.forEach(element => {
                        if (element.TipoAtencion != this.comboSeleccionado) {
                            element.Visible = false;
                        }
                        else {
                            element.Visible = true;
                            total++;
                        }
                    });
                }
            });
        }
        //volvemos a recontar los totales de la semana
        if (this.semana) {
            if (this.semana && this.semana.semanas) {
                this.semana.semanas.forEach(sem => {
                    var tot = 0;
                    if (sem.Cupos && sem.Cupos.length > 0) {
                        sem.Cupos.forEach(cupo => {
                            if (cupo.TipoAtencion == this.comboSeleccionado) {
                                tot++;
                            }
                        });
                    }
                    sem.total = tot;
                });
            }
            sessionStorage.setItem('CUPOS_SEMANA', JSON.stringify(this.semana));
        }
        //console.log(this.cuposAgrupadosSelected);
    }
    contadorHorasDisponibles(cupos) {
        var total = 0;
        if (cupos && cupos.length > 0) {
            cupos.forEach(element => {
                if (element.TipoAtencion == this.comboSeleccionado) {
                    total++;
                }
            });
        }
        return total;
    }
    filter(cuposDisponibles) {
        var fi = new _app_pipes_filter_pipe__WEBPACK_IMPORTED_MODULE_8__["FilterPipe"]();
        var arr = [];
        if (cuposDisponibles && cuposDisponibles.length > 0) {
            cuposDisponibles.forEach(cupo => {
                if (cupo[1].HorasDisponibles && cupo[1].HorasDisponibles.length > 0) {
                    arr = fi.transform(cupo[1].HorasDisponibles, this.comboSeleccionado);
                }
            });
        }
        return arr;
    }
    citaSelected(item) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            if (item) {
                this.itemSelected = item;
            }
            const modal = yield this.modalCtrl.create({
                component: _modal_operacion_cita_modal_operacion_cita_page__WEBPACK_IMPORTED_MODULE_9__["ModalOperacionCitaPage"],
                componentProps: {
                    'cita': JSON.stringify(item),
                    'operacion': 'reservar'
                }
            });
            modal.onDidDismiss().then((data) => {
                if (data.data && data.data.accion) {
                    var accion = data.data.accion;
                    //obtenemos la pagina actual
                    var pag = 0;
                    if (sessionStorage.getItem('NUMERO_PAGINA')) {
                        pag = parseInt(sessionStorage.getItem('NUMERO_PAGINA'));
                    }
                    this.construyeSemanaBuscar(pag, null);
                    //revisar esto NO FUNCIONA
                    //this.seleccionarCuposAgrupados(this.itemSelected);
                }
            });
            return yield modal.present();
        });
    }
    transformDateIso(dateString) {
        var retorno = "";
        var parteT = dateString.split("T");
        if (parteT && parteT.length == 2) {
            var partes = parteT[1].split(":");
            if (partes && partes.length > 1) {
                retorno = partes[0] + ":" + partes[1];
            }
        }
        return retorno;
    }
};
CuposDisponiblesPage.ctorParameters = () => [
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
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('myList', { read: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonItem"] })
], CuposDisponiblesPage.prototype, "list", void 0);
CuposDisponiblesPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-cupos-disponibles',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./cupos-disponibles.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/cupos-disponibles/cupos-disponibles.page.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./cupos-disponibles.page.scss */ "./src/app/cupos-disponibles/cupos-disponibles.page.scss")).default]
    })
], CuposDisponiblesPage);



/***/ })

}]);
//# sourceMappingURL=cupos-disponibles-cupos-disponibles-module-es2015.js.map