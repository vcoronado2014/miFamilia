function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["default~busqueda-avanzada-busqueda-avanzada-module~cupos-disponibles-cupos-disponibles-module~modal-~8414b8c5"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/modal-operacion-cita/modal-operacion-cita.page.html":
  /*!***********************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modal-operacion-cita/modal-operacion-cita.page.html ***!
    \***********************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppModalOperacionCitaModalOperacionCitaPageHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ion-header>\r\n  <!-- <ion-toolbar [style.--background]=\"miColor\"> -->\r\n  <ion-toolbar color=\"primary\">\r\n    <ion-title class=\"home\">{{titulo}}</ion-title>\r\n    <ion-buttons slot=\"end\" class=\"pdr10\" (click)=\"dismiss()\">\r\n      <ion-icon class=\"home\" slot=\"icon-only\" name=\"close\"></ion-icon>\r\n    </ion-buttons>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content class=\"ion-padding back-app\">\r\n  <app-progress [mostrar]=\"estaCargando\" [titulo]=\"tituloLoading\"></app-progress>\r\n  <div [hidden]=\"estaCargando\">\r\n    <ion-list class=\"ion-padding-bottom\">\r\n      <ion-item>\r\n        <ion-label>\r\n          <h5 class=\"label-info\">FECHA</h5>\r\n          <p class=\"ion-text-wrap detalle-label-info\">\r\n            <span style=\"text-transform: capitalize;\">{{transformDate(cita.FechaHoraInicio, 'dddd')}}</span>,  {{transformDate(cita.FechaHoraInicio, 'D')}} de \r\n            {{transformDate(cita.FechaHoraInicio, 'MMMM')}} {{transformDate(cita.FechaHoraInicio, 'YYYY')}}\r\n          </p>\r\n        </ion-label>\r\n      </ion-item>\r\n      <ion-item>\r\n        <ion-label>\r\n          <h5 class=\"label-info\">HORA</h5>\r\n          <p class=\"ion-text-wrap detalle-label-info\">{{transformDateIso(cita.FechaHoraInicio)}}</p>\r\n        </ion-label>\r\n      </ion-item>\r\n      <ion-item>\r\n        <ion-label>\r\n          <h5 class=\"label-info\">PROFESIONAL</h5>\r\n          <p class=\"ion-text-wrap detalle-label-info\">{{cita.NombresMedico}}  {{cita.ApellidosMedico}}</p>\r\n        </ion-label>\r\n      </ion-item>\r\n    </ion-list>\r\n    <div class=\"ion-padding-top\">\r\n      <!--boton cancelar -->\r\n      <ion-button *ngIf=\"botonCancelar.Visible\" (click)=\"presentAlertConfirm(botonCancelar)\" [color]=\"botonCancelar.Color\">\r\n        {{botonCancelar.Titulo}}</ion-button>\r\n      <!--boton reservar -->\r\n      <ion-button *ngIf=\"botonReservar.Visible\" (click)=\"presentAlertConfirm(botonReservar)\" [color]=\"botonReservar.Color\">\r\n        {{botonReservar.Titulo}}</ion-button>\r\n      <!--boton confirmar -->\r\n      <ion-button *ngIf=\"botonConfirmar.Visible\" (click)=\"presentAlertConfirm(botonConfirmar)\"\r\n        [color]=\"botonConfirmar.Color\">\r\n        {{botonConfirmar.Titulo}}</ion-button>\r\n    </div>\r\n  </div>\r\n\r\n</ion-content>\r\n";
    /***/
  },

  /***/
  "./src/app/modal-operacion-cita/modal-operacion-cita.page.scss":
  /*!*********************************************************************!*\
    !*** ./src/app/modal-operacion-cita/modal-operacion-cita.page.scss ***!
    \*********************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppModalOperacionCitaModalOperacionCitaPageScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".label-info {\n  font-size: 10px;\n  color: #00000099;\n}\n\n.detalle-label-info {\n  font-size: 16px;\n  color: #000000DE;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbW9kYWwtb3BlcmFjaW9uLWNpdGEvQzpcXERpc2NvIEZcXGFwcF9taWZhbWlsaWFfZ2l0XFxtaUZhbWlsaWFfcHJlL3NyY1xcYXBwXFxtb2RhbC1vcGVyYWNpb24tY2l0YVxcbW9kYWwtb3BlcmFjaW9uLWNpdGEucGFnZS5zY3NzIiwic3JjL2FwcC9tb2RhbC1vcGVyYWNpb24tY2l0YS9tb2RhbC1vcGVyYWNpb24tY2l0YS5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxlQUFBO0VBQ0EsZ0JBQUE7QUNDSjs7QURDQTtFQUNJLGVBQUE7RUFDQSxnQkFBQTtBQ0VKIiwiZmlsZSI6InNyYy9hcHAvbW9kYWwtb3BlcmFjaW9uLWNpdGEvbW9kYWwtb3BlcmFjaW9uLWNpdGEucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmxhYmVsLWluZm97XHJcbiAgICBmb250LXNpemU6IDEwcHg7XHJcbiAgICBjb2xvcjojMDAwMDAwOTk7XHJcbn1cclxuLmRldGFsbGUtbGFiZWwtaW5mb3tcclxuICAgIGZvbnQtc2l6ZTogMTZweDtcclxuICAgIGNvbG9yOiMwMDAwMDBERTtcclxufSIsIi5sYWJlbC1pbmZvIHtcbiAgZm9udC1zaXplOiAxMHB4O1xuICBjb2xvcjogIzAwMDAwMDk5O1xufVxuXG4uZGV0YWxsZS1sYWJlbC1pbmZvIHtcbiAgZm9udC1zaXplOiAxNnB4O1xuICBjb2xvcjogIzAwMDAwMERFO1xufSJdfQ== */";
    /***/
  },

  /***/
  "./src/app/modal-operacion-cita/modal-operacion-cita.page.ts":
  /*!*******************************************************************!*\
    !*** ./src/app/modal-operacion-cita/modal-operacion-cita.page.ts ***!
    \*******************************************************************/

  /*! exports provided: ModalOperacionCitaPage */

  /***/
  function srcAppModalOperacionCitaModalOperacionCitaPageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ModalOperacionCitaPage", function () {
      return ModalOperacionCitaPage;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
    /* harmony import */


    var _app_services_ServicioUtiles__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../../app/services/ServicioUtiles */
    "./src/app/services/ServicioUtiles.ts");
    /* harmony import */


    var _app_services_ServicioLaboratorio__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../../app/services/ServicioLaboratorio */
    "./src/app/services/ServicioLaboratorio.ts");
    /* harmony import */


    var _app_services_ServicioCitas__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ../../app/services/ServicioCitas */
    "./src/app/services/ServicioCitas.ts");
    /* harmony import */


    var _app_pipes_fecha_pipe__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ../../app/pipes/fecha.pipe */
    "./src/app/pipes/fecha.pipe.ts");
    /* harmony import */


    var moment__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! moment */
    "./node_modules/moment/moment.js");
    /* harmony import */


    var moment__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_7__); //SERVICIOS
    //moment


    var ModalOperacionCitaPage = /*#__PURE__*/function () {
      function ModalOperacionCitaPage(modalCtrl, navParams, utiles, navCtrl, toast, platform, menu, loading, lab, agendar, alertController) {
        _classCallCheck(this, ModalOperacionCitaPage);

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
        this.miColor = '#FF4081'; //textColor Directive

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
        }; //para procesar

        this.estaCargando = false;
        this.tituloLoading = '';
      }

      _createClass(ModalOperacionCitaPage, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          moment__WEBPACK_IMPORTED_MODULE_7__["locale"]('es'); //this.miColor = this.utiles.entregaMiColor();

          this.cita = JSON.parse(this.navParams.get('cita')); //this.operacion = this.navParams.get('operacion');
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
            } else if (this.cita.Estado == 'booked') {
              //si esta booked se puede confirmar
              this.titulo = 'Confirmar/Anular hora';
              this.botonReservar.Visible = false;
              this.botonCancelar.Visible = true;
              this.botonConfirmar.Visible = true;
            } else if (this.cita.Estado == 'confirmed') {
              //si esta booked se puede confirmar
              this.titulo = 'Anular hora';
              this.botonReservar.Visible = false;
              this.botonCancelar.Visible = true;
              this.botonConfirmar.Visible = false;
            } else {
              this.titulo = 'No Cita';
              this.botonReservar.Visible = false;
              this.botonCancelar.Visible = false;
              this.botonConfirmar.Visible = false;
            } //console.log(this.cita);
            //console.log(this.operacion);

          }
        }
      }, {
        key: "dismiss",
        value: function dismiss() {
          this.modalCtrl.dismiss();
        }
      }, {
        key: "transformDate",
        value: function transformDate(value, format) {
          var pi = new _app_pipes_fecha_pipe__WEBPACK_IMPORTED_MODULE_6__["MomentPipe"]();
          return pi.transform(value, format);
        }
      }, {
        key: "accionCita",
        value: function accionCita(boton) {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
            var _this = this;

            var idPaciente, idCita, accion, loader;
            return regeneratorRuntime.wrap(function _callee2$(_context2) {
              while (1) {
                switch (_context2.prev = _context2.next) {
                  case 0:
                    idPaciente = this.cita.IdPaciente;
                    idCita = this.cita.IdCita;
                    accion = boton.Operacion;
                    _context2.next = 5;
                    return this.loading.create({
                      cssClass: 'loading-vacio',
                      showBackdrop: false,
                      spinner: null
                    });

                  case 5:
                    loader = _context2.sent;
                    this.estaCargando = true;
                    this.tituloLoading = 'Procesando cita';
                    _context2.next = 10;
                    return loader.present().then(function () {
                      return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(_this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
                        var _this2 = this;

                        var retorno;
                        return regeneratorRuntime.wrap(function _callee$(_context) {
                          while (1) {
                            switch (_context.prev = _context.next) {
                              case 0:
                                retorno = null;

                                if (!this.utiles.isAppOnDevice()) {
                                  //llamada web
                                  this.agendar.getOperacionCita(idCita, idPaciente, accion).subscribe(function (response) {
                                    _this2.procesarRespuesta(response, loader, accion);
                                  });
                                } else {
                                  //llamada nativa
                                  //this.cargarDatosNative(mesConsultar, annoConsultar, loader);
                                  this.agendar.getOperacionCitaNative(idCita, idPaciente, accion).then(function (responseData) {
                                    var response = JSON.parse(responseData.data);

                                    _this2.procesarRespuesta(response, loader, accion);
                                  });
                                }

                              case 2:
                              case "end":
                                return _context.stop();
                            }
                          }
                        }, _callee, this);
                      }));
                    });

                  case 10:
                  case "end":
                    return _context2.stop();
                }
              }
            }, _callee2, this);
          }));
        }
      }, {
        key: "procesarRespuesta",
        value: function procesarRespuesta(data, loader, accion) {
          var retorno = null;

          if (data && data.Mensaje) {
            if (data.Mensaje.Codigo == 'correcto') {
              //booked, confirmed, cancelled
              //todo bien
              this.estaCargando = false;
              this.tituloLoading = '';

              if (accion === 'booked') {
                this.utiles.presentToast('Cita reservada con éxito!!', 'bottom', 3000);
              } else if (accion === 'confirmed') {
                this.utiles.presentToast('Cita confirmada con éxito!!', 'bottom', 3000);
              } else if (accion === 'cancelled') {
                this.utiles.presentToast('Cita anulada con éxito!!', 'bottom', 3000);
              }

              retorno = data;
            } else {
              this.utiles.presentToast(data.Mensaje.Detalle.Texto, 'middle', 2000);
            }
          } else {
            //error en la operacion
            this.estaCargando = false;
            this.tituloLoading = '';
            this.utiles.presentToast('Error en la operación', 'middle', 2000);
          }

          loader.dismiss(); //ACA SE DEBE ACTUALIZAR LA PAGINA DE AGENDA DISPONIBLE.

          this.modalCtrl.dismiss({
            retorno: retorno,
            accion: accion
          });
        }
      }, {
        key: "traduceString",
        value: function traduceString(texto) {
          return this.utiles.traduceString(texto);
        }
      }, {
        key: "presentAlertConfirm",
        value: function presentAlertConfirm(boton) {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee3() {
            var _this3 = this;

            var titulo, alert;
            return regeneratorRuntime.wrap(function _callee3$(_context3) {
              while (1) {
                switch (_context3.prev = _context3.next) {
                  case 0:
                    titulo = '';
                    _context3.next = 3;
                    return this.alertController.create({
                      header: boton.Titulo,
                      message: boton.Alert,
                      buttons: [{
                        text: 'No',
                        role: 'cancel',
                        cssClass: 'danger',
                        handler: function handler(blah) {
                          console.log('Confirm Cancel: blah');
                        }
                      }, {
                        text: 'Si',
                        cssClass: 'success',
                        handler: function handler() {
                          //aca debemos realizar la operación
                          _this3.accionCita(boton); //console.log('Confirm Okay');

                        }
                      }]
                    });

                  case 3:
                    alert = _context3.sent;
                    _context3.next = 6;
                    return alert.present();

                  case 6:
                  case "end":
                    return _context3.stop();
                }
              }
            }, _callee3, this);
          }));
        }
      }, {
        key: "transformDateIso",
        value: function transformDateIso(dateString) {
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
      }]);

      return ModalOperacionCitaPage;
    }();

    ModalOperacionCitaPage.ctorParameters = function () {
      return [{
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ModalController"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavParams"]
      }, {
        type: _app_services_ServicioUtiles__WEBPACK_IMPORTED_MODULE_3__["ServicioUtiles"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ToastController"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["Platform"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["MenuController"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["LoadingController"]
      }, {
        type: _app_services_ServicioLaboratorio__WEBPACK_IMPORTED_MODULE_4__["ServicioLaboratorio"]
      }, {
        type: _app_services_ServicioCitas__WEBPACK_IMPORTED_MODULE_5__["ServicioCitas"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["AlertController"]
      }];
    };

    ModalOperacionCitaPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-modal-operacion-cita',
      template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! raw-loader!./modal-operacion-cita.page.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/modal-operacion-cita/modal-operacion-cita.page.html"))["default"],
      styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! ./modal-operacion-cita.page.scss */
      "./src/app/modal-operacion-cita/modal-operacion-cita.page.scss"))["default"]]
    })], ModalOperacionCitaPage);
    /***/
  }
}]);
//# sourceMappingURL=default~busqueda-avanzada-busqueda-avanzada-module~cupos-disponibles-cupos-disponibles-module~modal-~8414b8c5-es5.js.map