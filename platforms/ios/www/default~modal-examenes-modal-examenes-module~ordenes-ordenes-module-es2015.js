(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["default~modal-examenes-modal-examenes-module~ordenes-ordenes-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/modal-examenes/modal-examenes.page.html":
/*!***********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modal-examenes/modal-examenes.page.html ***!
  \***********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\r\n  <ion-toolbar color=\"primary\">\r\n    <ion-title class=\"home\">Exámenes</ion-title>\r\n    <ion-buttons slot=\"end\" class=\"pdr10\" (click)=\"dismiss()\">\r\n      <ion-icon class=\"home\" slot=\"icon-only\" name=\"close\"></ion-icon>\r\n    </ion-buttons>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content class=\"back-app\">\r\n  <app-progress [mostrar]=\"estaCargando\" [titulo]=\"tituloProgress\"></app-progress>\r\n  <!-- HAY EXAMENES -->\r\n  <ion-list [hidden]=\"estaCargando\" *ngIf=\"tiene\">\r\n    \r\n      <app-avatar [lines]=\"none\" [urlImagen] = \"orden.UrlImagen\" \r\n      [nombreCompleto]=\"orden.NombreUsuario\" \r\n      [parentezco]=\"orden.Parentezco\"></app-avatar>\r\n    <ion-list-header lines=\"inset\" mode=\"md\">\r\n      <ion-label><strong>Nº Órden: {{oalaId}}</strong></ion-label>\r\n      <ion-badge color=\"secondary\" class=\"ion-margin-end\">{{ fechaOrden }}</ion-badge>\r\n      <!-- <ion-button>Clear</ion-button> -->\r\n    </ion-list-header>\r\n    <ion-item lines=\"none\" *ngFor=\"let item of listadoExamenes\">\r\n      <ion-grid>\r\n        <ion-row>\r\n          <ion-col size=\"8\">\r\n            <h5>{{item.NombreExamen}}</h5>\r\n            <p *ngIf=\"item.VisibleIcono\">\r\n              <ion-icon name=\"checkmark-circle\" *ngIf=\"item.Check\"></ion-icon>\r\n              <ion-icon name=\"remove-circle\" *ngIf=\"item.UnCheck\"></ion-icon>&nbsp;{{item.TextoResultados}}\r\n            </p>\r\n          </ion-col>\r\n          <ion-col size=\"4\">\r\n            <ion-badge color=\"primary\">{{ item.Estado }}</ion-badge>\r\n            <h6 *ngIf=\"!item.VisibleTabla\" style=\"color: #666; font-size:0.7em;\"><ion-icon name=\"analitycs\"></ion-icon>&nbsp;Sin Resultados</h6> \r\n            <h6 *ngIf=\"item.VisibleTabla\" style=\"color: #666; font-size:0.7em;\"><ion-icon name=\"time\"></ion-icon>&nbsp;{{item.FechaMuestraStr}}</h6> \r\n          </ion-col>\r\n          <!-- RESULTADOS -->\r\n          <!-- aca debemos agregar otra lista quitar visible -->\r\n          <ion-list *ngIf=\"item.VisibleTabla\" style=\"width: 100%;\">\r\n            <ion-grid>\r\n              <ion-row class=\"titulo-tabla-examen\" [ngStyle]=\"{'background-color': userColor}\">\r\n                <ion-col size=\"6\" class=\"ion-text-wrap ion-text-center\">\r\n                  Nombre\r\n                </ion-col>\r\n                <ion-col size=\"2\" class=\"ion-text-center\">\r\n                  Valor\r\n                </ion-col>\r\n                <ion-col size=\"2\" class=\"ion-text-center\">\r\n                  U/M\r\n                </ion-col>\r\n                <ion-col size=\"2\" class=\"ion-text-center\">\r\n                  Ref.\r\n                </ion-col>\r\n              </ion-row>\r\n            </ion-grid>\r\n\r\n            <ion-row  *ngFor=\"let exa of item.Resultados\">\r\n              <ion-grid>\r\n                <ion-row style=\"font-size: 0.8em;font-style: italic;\">\r\n                  <ion-col size=\"6\" class=\"ion-text-wrap\">\r\n                    {{exa.DescripcionResultado}}\r\n                  </ion-col>\r\n                  <ion-col size=\"2\" class=\"ion-text-center\">\r\n                    {{exa.Resultado}}\r\n                  </ion-col>\r\n                  <ion-col size=\"2\" class=\"ion-text-center\">\r\n                    {{exa.Um}}\r\n                  </ion-col>\r\n                  <ion-col size=\"2\" class=\"ion-text-center\">\r\n                    {{exa.ValoresReferencia}}\r\n                  </ion-col>\r\n                </ion-row>\r\n              </ion-grid>\r\n            </ion-row>\r\n          </ion-list>\r\n        </ion-row>\r\n      </ion-grid>\r\n    </ion-item>\r\n  </ion-list>\r\n  <!-- NO HAY EXAMENES -->\r\n  <div [hidden]=\"estaCargando\" *ngIf=\"tiene == false\" style=\"position: relative; height: 100vh;\">\r\n    <div style=\"position: absolute; display: table; height: 100%; font-size: 30px; color:#BDBDBD; text-align: center;\">\r\n      <p style=\"display: table-cell; vertical-align: middle\">No hay exámenes para mostrar  <br>\r\n      <ion-icon name=\"information-circle\" style=\"font-size: 50px;\"></ion-icon></p>\r\n    </div>\r\n  </div>\r\n\r\n</ion-content>\r\n");

/***/ }),

/***/ "./src/app/modal-examenes/modal-examenes.page.scss":
/*!*********************************************************!*\
  !*** ./src/app/modal-examenes/modal-examenes.page.scss ***!
  \*********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".titulo-tabla-examen {\n  border-bottom-color: #dedede;\n  border-bottom-style: solid;\n  border-bottom-width: 1px;\n  color: #fff;\n  font-size: 0.8em;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy92aWN0b3Jjb3JvbmFkby9EZXNrdG9wL21pRmFtaWxpYV9wcmUvc3JjL2FwcC9tb2RhbC1leGFtZW5lcy9tb2RhbC1leGFtZW5lcy5wYWdlLnNjc3MiLCJzcmMvYXBwL21vZGFsLWV4YW1lbmVzL21vZGFsLWV4YW1lbmVzLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLDRCQUFBO0VBQ0EsMEJBQUE7RUFDQSx3QkFBQTtFQUVBLFdBQUE7RUFDQSxnQkFBQTtBQ0FKIiwiZmlsZSI6InNyYy9hcHAvbW9kYWwtZXhhbWVuZXMvbW9kYWwtZXhhbWVuZXMucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnRpdHVsby10YWJsYS1leGFtZW57XHJcbiAgICBib3JkZXItYm90dG9tLWNvbG9yOiAjZGVkZWRlO1xyXG4gICAgYm9yZGVyLWJvdHRvbS1zdHlsZTogc29saWQ7XHJcbiAgICBib3JkZXItYm90dG9tLXdpZHRoOiAxcHg7XHJcbiAgICAvL2JhY2tncm91bmQtY29sb3I6ICMwMDk3QTc7XHJcbiAgICBjb2xvcjogI2ZmZjtcclxuICAgIGZvbnQtc2l6ZTogMC44ZW07XHJcblxyXG59IiwiLnRpdHVsby10YWJsYS1leGFtZW4ge1xuICBib3JkZXItYm90dG9tLWNvbG9yOiAjZGVkZWRlO1xuICBib3JkZXItYm90dG9tLXN0eWxlOiBzb2xpZDtcbiAgYm9yZGVyLWJvdHRvbS13aWR0aDogMXB4O1xuICBjb2xvcjogI2ZmZjtcbiAgZm9udC1zaXplOiAwLjhlbTtcbn0iXX0= */");

/***/ }),

/***/ "./src/app/modal-examenes/modal-examenes.page.ts":
/*!*******************************************************!*\
  !*** ./src/app/modal-examenes/modal-examenes.page.ts ***!
  \*******************************************************/
/*! exports provided: ModalExamenesPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ModalExamenesPage", function() { return ModalExamenesPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _app_services_ServicioUtiles__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../app/services/ServicioUtiles */ "./src/app/services/ServicioUtiles.ts");
/* harmony import */ var _app_services_ServicioLaboratorio__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../app/services/ServicioLaboratorio */ "./src/app/services/ServicioLaboratorio.ts");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! moment */ "./node_modules/moment/moment.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_5__);



//SERVICIOS


//moment

let ModalExamenesPage = class ModalExamenesPage {
    constructor(modalCtrl, navParams, utiles, navCtrl, toast, platform, menu, loading, lab) {
        this.modalCtrl = modalCtrl;
        this.navParams = navParams;
        this.utiles = utiles;
        this.navCtrl = navCtrl;
        this.toast = toast;
        this.platform = platform;
        this.menu = menu;
        this.loading = loading;
        this.lab = lab;
        //color
        this.miColor = '#FF4081';
        //textColor Directive
        this.textColor = '#FFFFFF';
        //tiene registros
        this.tiene = true;
        //loading
        this.estaCargando = false;
        this.tituloProgress = '';
    }
    ngOnInit() {
        moment__WEBPACK_IMPORTED_MODULE_5__["locale"]('es');
        //this.miColor = this.utiles.entregaMiColor();
        this.orden = JSON.parse(this.navParams.get('orden'));
        //console.log(this.orden);
        //this.nombreUsuario = navParams.get('NombreUsuario');
        this.user = JSON.parse(sessionStorage.UsuarioAps);
        this.userColor = this.user.Color;
        this.miColor = this.utiles.entregaColor(this.user);
        if (this.orden) {
            //existe la orden hacer las llamadas
            this.oalaId = this.orden.Id;
            this.fechaOrden = this.orden.Fecha;
            this.loadInicio();
        }
    }
    dismiss() {
        this.modalCtrl.dismiss();
    }
    loadInicio() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            //ordenes
            this.listadoExamenes = [];
            //contenido de las llamadas.
            if (sessionStorage.UsuarioAps) {
                //debemos enviar el uspId del titular para que traiga todos los datos
                this.usuarioAps = JSON.parse(sessionStorage.UsuarioAps);
            }
            if (this.usuarioAps) {
                this.estaCargando = true;
                this.tituloProgress = 'Buscando exámenes del usuario';
                /*       let loader = await this.loading.create({
                        message: 'Obteniendo...<br>Exámenes del usuario',
                        duration: 20000
                      }); */
                let loader = yield this.loading.create({
                    cssClass: 'loading-vacio',
                    showBackdrop: false,
                    spinner: null,
                });
                yield loader.present().then(() => Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
                    if (!this.utiles.isAppOnDevice()) {
                        //llamada web
                        this.lab.getExamenes(this.oalaId).subscribe((response) => {
                            this.porocesarLista(response, loader);
                        }, error => {
                            console.log(error.message);
                            this.estaCargando = false;
                            this.tituloProgress = '';
                            loader.dismiss();
                        });
                    }
                    else {
                        //llamada nativa
                        this.lab.getExamenesNative(this.oalaId).then((response) => {
                            this.porocesarLista(JSON.parse(response.data), loader);
                        }).catch(error => {
                            console.log(error.message);
                            this.estaCargando = false;
                            this.tituloProgress = '';
                            loader.dismiss();
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
                let fecha = moment__WEBPACK_IMPORTED_MODULE_5__(listado[s].FechaRegistro).format('DD-MM-YYYY');
                listado[s].Fecha = fecha;
            }
            //ahora asignamos la variable
            this.listadoExamenes = listado;
            if (this.listadoExamenes.length == 0) {
                this.tiene = false;
            }
            //console.log(this.listadoExamenes);
        }
        this.estaCargando = false;
        this.tituloProgress = '';
        loader.dismiss();
    }
};
ModalExamenesPage.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ModalController"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavParams"] },
    { type: _app_services_ServicioUtiles__WEBPACK_IMPORTED_MODULE_3__["ServicioUtiles"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ToastController"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["Platform"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["MenuController"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["LoadingController"] },
    { type: _app_services_ServicioLaboratorio__WEBPACK_IMPORTED_MODULE_4__["ServicioLaboratorio"] }
];
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('myList', { read: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonList"] })
], ModalExamenesPage.prototype, "list", void 0);
ModalExamenesPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-modal-examenes',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./modal-examenes.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/modal-examenes/modal-examenes.page.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./modal-examenes.page.scss */ "./src/app/modal-examenes/modal-examenes.page.scss")).default]
    })
], ModalExamenesPage);



/***/ })

}]);
//# sourceMappingURL=default~modal-examenes-modal-examenes-module~ordenes-ordenes-module-es2015.js.map