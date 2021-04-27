(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["default~busqueda-avanzada-busqueda-avanzada-module~cupos-disponibles-cupos-disponibles-module~modal-~8414b8c5"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/modal-operacion-cita/modal-operacion-cita.page.html":
/*!***********************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modal-operacion-cita/modal-operacion-cita.page.html ***!
  \***********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\r\n  <!-- <ion-toolbar [style.--background]=\"miColor\"> -->\r\n  <ion-toolbar color=\"primary\">\r\n    <ion-title class=\"home\">{{titulo}}</ion-title>\r\n    <ion-buttons slot=\"end\" class=\"pdr10\" (click)=\"dismiss()\">\r\n      <ion-icon class=\"home\" slot=\"icon-only\" name=\"close\"></ion-icon>\r\n    </ion-buttons>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content class=\"ion-padding back-app\">\r\n  <app-progress [mostrar]=\"estaCargando\" [titulo]=\"tituloLoading\"></app-progress>\r\n  <div [hidden]=\"estaCargando\">\r\n    <ion-list class=\"ion-padding-bottom\">\r\n      <ion-item>\r\n        <ion-label>\r\n          <h5 class=\"label-info\">FECHA</h5>\r\n          <p class=\"ion-text-wrap detalle-label-info\">\r\n            <span style=\"text-transform: capitalize;\">{{transformDate(cita.FechaHoraInicio, 'dddd')}}</span>,  {{transformDate(cita.FechaHoraInicio, 'D')}} de \r\n            {{transformDate(cita.FechaHoraInicio, 'MMMM')}} {{transformDate(cita.FechaHoraInicio, 'YYYY')}}\r\n          </p>\r\n        </ion-label>\r\n      </ion-item>\r\n      <ion-item>\r\n        <ion-label>\r\n          <h5 class=\"label-info\">HORA</h5>\r\n          <p class=\"ion-text-wrap detalle-label-info\">{{transformDateIso(cita.FechaHoraInicio)}}</p>\r\n        </ion-label>\r\n      </ion-item>\r\n      <ion-item>\r\n        <ion-label>\r\n          <h5 class=\"label-info\">PROFESIONAL</h5>\r\n          <p class=\"ion-text-wrap detalle-label-info\">{{cita.NombresMedico}}  {{cita.ApellidosMedico}}</p>\r\n        </ion-label>\r\n      </ion-item>\r\n    </ion-list>\r\n    <div class=\"ion-padding-top\">\r\n      <!--boton cancelar -->\r\n      <ion-button *ngIf=\"botonCancelar.Visible\" (click)=\"presentAlertConfirm(botonCancelar)\" [color]=\"botonCancelar.Color\">\r\n        {{botonCancelar.Titulo}}</ion-button>\r\n      <!--boton reservar -->\r\n      <ion-button *ngIf=\"botonReservar.Visible\" (click)=\"presentAlertConfirm(botonReservar)\" [color]=\"botonReservar.Color\">\r\n        {{botonReservar.Titulo}}</ion-button>\r\n      <!--boton confirmar -->\r\n      <ion-button *ngIf=\"botonConfirmar.Visible\" (click)=\"presentAlertConfirm(botonConfirmar)\"\r\n        [color]=\"botonConfirmar.Color\">\r\n        {{botonConfirmar.Titulo}}</ion-button>\r\n    </div>\r\n  </div>\r\n\r\n</ion-content>\r\n");

/***/ }),

/***/ "./src/app/modal-operacion-cita/modal-operacion-cita.page.scss":
/*!*********************************************************************!*\
  !*** ./src/app/modal-operacion-cita/modal-operacion-cita.page.scss ***!
  \*********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".label-info {\n  font-size: 10px;\n  color: #00000099;\n}\n\n.detalle-label-info {\n  font-size: 16px;\n  color: #000000DE;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy92aWN0b3Jjb3JvbmFkby9EZXNrdG9wL21pRmFtaWxpYV9wcmUvc3JjL2FwcC9tb2RhbC1vcGVyYWNpb24tY2l0YS9tb2RhbC1vcGVyYWNpb24tY2l0YS5wYWdlLnNjc3MiLCJzcmMvYXBwL21vZGFsLW9wZXJhY2lvbi1jaXRhL21vZGFsLW9wZXJhY2lvbi1jaXRhLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGVBQUE7RUFDQSxnQkFBQTtBQ0NKOztBRENBO0VBQ0ksZUFBQTtFQUNBLGdCQUFBO0FDRUoiLCJmaWxlIjoic3JjL2FwcC9tb2RhbC1vcGVyYWNpb24tY2l0YS9tb2RhbC1vcGVyYWNpb24tY2l0YS5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIubGFiZWwtaW5mb3tcclxuICAgIGZvbnQtc2l6ZTogMTBweDtcclxuICAgIGNvbG9yOiMwMDAwMDA5OTtcclxufVxyXG4uZGV0YWxsZS1sYWJlbC1pbmZve1xyXG4gICAgZm9udC1zaXplOiAxNnB4O1xyXG4gICAgY29sb3I6IzAwMDAwMERFO1xyXG59IiwiLmxhYmVsLWluZm8ge1xuICBmb250LXNpemU6IDEwcHg7XG4gIGNvbG9yOiAjMDAwMDAwOTk7XG59XG5cbi5kZXRhbGxlLWxhYmVsLWluZm8ge1xuICBmb250LXNpemU6IDE2cHg7XG4gIGNvbG9yOiAjMDAwMDAwREU7XG59Il19 */");

/***/ }),

/***/ "./src/app/modal-operacion-cita/modal-operacion-cita.page.ts":
/*!*******************************************************************!*\
  !*** ./src/app/modal-operacion-cita/modal-operacion-cita.page.ts ***!
  \*******************************************************************/
/*! exports provided: ModalOperacionCitaPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ModalOperacionCitaPage", function() { return ModalOperacionCitaPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _app_services_ServicioUtiles__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../app/services/ServicioUtiles */ "./src/app/services/ServicioUtiles.ts");
/* harmony import */ var _app_services_ServicioLaboratorio__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../app/services/ServicioLaboratorio */ "./src/app/services/ServicioLaboratorio.ts");
/* harmony import */ var _app_services_ServicioCitas__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../app/services/ServicioCitas */ "./src/app/services/ServicioCitas.ts");
/* harmony import */ var _app_pipes_fecha_pipe__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../app/pipes/fecha.pipe */ "./src/app/pipes/fecha.pipe.ts");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! moment */ "./node_modules/moment/moment.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_7__);



//SERVICIOS




//moment

let ModalOperacionCitaPage = class ModalOperacionCitaPage {
    constructor(modalCtrl, navParams, utiles, navCtrl, toast, platform, menu, loading, lab, agendar, alertController) {
        this.modalCtrl = modalCtrl;
        this.navParams = navParams;
        this.utiles = utiles;
        this.navCtrl = navCtrl;
        this.toast = toast;
        this.platform = platform;
        this.menu = menu;
        this.loading = loading;
        this.lab = lab;
        this.agendar = agendar;
        this.alertController = alertController;
        this.miColor = '#FF4081';
        //textColor Directive
        this.textColor = '#FFFFFF';
        this.botonReservar = {
            Titulo: 'RESERVAR',
            Visible: false,
            Operacion: 'booked',
            Color: 'primary',
            Alert: '¿Está seguro de reservar la cita?'
        };
        this.botonConfirmar = {
            Titulo: 'CONFIRMAR',
            Visible: false,
            Operacion: 'confirmed',
            Color: 'primary',
            Alert: '¿Está seguro de confirmar la cita?'
        };
        this.botonCancelar = {
            Titulo: 'ANULAR',
            Visible: false,
            Operacion: 'cancelled',
            Color: 'danger',
            Alert: '¿Está seguro de anular la cita?'
        };
        //para procesar
        this.estaCargando = false;
        this.tituloLoading = '';
    }
    ngOnInit() {
        moment__WEBPACK_IMPORTED_MODULE_7__["locale"]('es');
        //this.miColor = this.utiles.entregaMiColor();
        this.cita = JSON.parse(this.navParams.get('cita'));
        //this.operacion = this.navParams.get('operacion');
        //this.nombreUsuario = navParams.get('NombreUsuario');
        this.user = JSON.parse(sessionStorage.UsuarioAps);
        this.userColor = this.user.Color;
        this.miColor = this.utiles.entregaColor(this.user);
        if (this.cita) {
            /*
            proposed | pending | booked | confirmed | fulfilled | cancelled | noshow
            */
            if (this.cita.Estado == 'proposed') {
                this.titulo = 'Reserva de horas';
                this.botonReservar.Visible = true;
                this.botonCancelar.Visible = false;
                this.botonConfirmar.Visible = false;
            }
            else if (this.cita.Estado == 'booked') {
                //si esta booked se puede confirmar
                this.titulo = 'Confirmar/Anular hora';
                this.botonReservar.Visible = false;
                this.botonCancelar.Visible = true;
                this.botonConfirmar.Visible = true;
            }
            else if (this.cita.Estado == 'confirmed') {
                //si esta booked se puede confirmar
                this.titulo = 'Anular hora';
                this.botonReservar.Visible = false;
                this.botonCancelar.Visible = true;
                this.botonConfirmar.Visible = false;
            }
            else {
                this.titulo = 'No Cita';
                this.botonReservar.Visible = false;
                this.botonCancelar.Visible = false;
                this.botonConfirmar.Visible = false;
            }
            //console.log(this.cita);
            //console.log(this.operacion);
        }
    }
    dismiss() {
        this.modalCtrl.dismiss();
    }
    transformDate(value, format) {
        var pi = new _app_pipes_fecha_pipe__WEBPACK_IMPORTED_MODULE_6__["MomentPipe"]();
        return pi.transform(value, format);
    }
    accionCita(boton) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            var idPaciente = this.cita.IdPaciente;
            var idCita = this.cita.IdCita;
            var accion = boton.Operacion;
            let loader = yield this.loading.create({
                cssClass: 'loading-vacio',
                showBackdrop: false,
                spinner: null,
            });
            this.estaCargando = true;
            this.tituloLoading = 'Procesando cita';
            yield loader.present().then(() => Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
                var retorno = null;
                if (!this.utiles.isAppOnDevice()) {
                    //llamada web
                    this.agendar.getOperacionCita(idCita, idPaciente, accion).subscribe((response) => {
                        this.procesarRespuesta(response, loader, accion);
                    });
                }
                else {
                    //llamada nativa
                    //this.cargarDatosNative(mesConsultar, annoConsultar, loader);
                    this.agendar.getOperacionCitaNative(idCita, idPaciente, accion).then((responseData) => {
                        var response = JSON.parse(responseData.data);
                        this.procesarRespuesta(response, loader, accion);
                    });
                }
            }));
        });
    }
    procesarRespuesta(data, loader, accion) {
        var retorno = null;
        if (data && data.Mensaje) {
            if (data.Mensaje.Codigo == 'correcto') {
                //booked, confirmed, cancelled
                //todo bien
                this.estaCargando = false;
                this.tituloLoading = '';
                if (accion === 'booked') {
                    this.utiles.presentToast('Cita reservada con éxito!!', 'bottom', 3000);
                }
                else if (accion === 'confirmed') {
                    this.utiles.presentToast('Cita confirmada con éxito!!', 'bottom', 3000);
                }
                else if (accion === 'cancelled') {
                    this.utiles.presentToast('Cita anulada con éxito!!', 'bottom', 3000);
                }
                retorno = data;
            }
            else {
                this.utiles.presentToast(data.Mensaje.Detalle.Texto, 'middle', 2000);
            }
        }
        else {
            //error en la operacion
            this.estaCargando = false;
            this.tituloLoading = '';
            this.utiles.presentToast('Error en la operación', 'middle', 2000);
        }
        loader.dismiss();
        //ACA SE DEBE ACTUALIZAR LA PAGINA DE AGENDA DISPONIBLE.
        this.modalCtrl.dismiss({
            retorno: retorno,
            accion: accion
        });
    }
    traduceString(texto) {
        return this.utiles.traduceString(texto);
    }
    presentAlertConfirm(boton) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            var titulo = '';
            const alert = yield this.alertController.create({
                header: boton.Titulo,
                message: boton.Alert,
                buttons: [
                    {
                        text: 'No',
                        role: 'cancel',
                        cssClass: 'danger',
                        handler: (blah) => {
                            console.log('Confirm Cancel: blah');
                        }
                    }, {
                        text: 'Si',
                        cssClass: 'success',
                        handler: () => {
                            //aca debemos realizar la operación
                            this.accionCita(boton);
                            //console.log('Confirm Okay');
                        }
                    }
                ]
            });
            yield alert.present();
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
ModalOperacionCitaPage.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ModalController"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavParams"] },
    { type: _app_services_ServicioUtiles__WEBPACK_IMPORTED_MODULE_3__["ServicioUtiles"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ToastController"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["Platform"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["MenuController"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["LoadingController"] },
    { type: _app_services_ServicioLaboratorio__WEBPACK_IMPORTED_MODULE_4__["ServicioLaboratorio"] },
    { type: _app_services_ServicioCitas__WEBPACK_IMPORTED_MODULE_5__["ServicioCitas"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["AlertController"] }
];
ModalOperacionCitaPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-modal-operacion-cita',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./modal-operacion-cita.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/modal-operacion-cita/modal-operacion-cita.page.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./modal-operacion-cita.page.scss */ "./src/app/modal-operacion-cita/modal-operacion-cita.page.scss")).default]
    })
], ModalOperacionCitaPage);



/***/ })

}]);
//# sourceMappingURL=default~busqueda-avanzada-busqueda-avanzada-module~cupos-disponibles-cupos-disponibles-module~modal-~8414b8c5-es2015.js.map