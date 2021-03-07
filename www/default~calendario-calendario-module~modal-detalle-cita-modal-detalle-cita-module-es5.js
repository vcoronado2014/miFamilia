function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["default~calendario-calendario-module~modal-detalle-cita-modal-detalle-cita-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/modal-detalle-cita/modal-detalle-cita.page.html":
  /*!*******************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modal-detalle-cita/modal-detalle-cita.page.html ***!
    \*******************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppModalDetalleCitaModalDetalleCitaPageHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ion-header>\r\n  <!-- <ion-toolbar [style.--background]=\"miColor\"> -->\r\n  <ion-toolbar color=\"primary\">\r\n    <ion-title class=\"home\">{{data.DetalleEventoMes.Titulo}}</ion-title>\r\n    <ion-buttons slot=\"end\" class=\"pdr10\" (click)=\"dismiss()\">\r\n      <ion-icon class=\"home\" slot=\"icon-only\" name=\"close\"></ion-icon>\r\n    </ion-buttons>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content class=\"back-app\">\r\n  <div>\r\n\t\t<img src=\"./assets/img/{{data.Imagen}}\" style=\"width:100%\">\r\n  </div>\r\n  <!-- aca debe ir el avatar -->\r\n  <ion-list>\r\n    <ion-item lines=\"none\">\r\n      <ion-label class=\"ion-text-wrap titulo-evento\">{{data.DetalleEventoMes.DescripcionPrincipal}}&nbsp;{{dosis}}</ion-label>\r\n    </ion-item>\r\n    <ion-item lines=\"none\">\r\n      <ion-avatar slot=\"start\">\r\n        <img *ngIf=\"miImagen != ''\" src={{miImagen}}>\r\n        <img *ngIf=\"miImagen == ''\" src=\"../assets/img/no-imagen.jpg\">\r\n      </ion-avatar>\r\n      <ion-row style=\"display: block;\">\r\n        <h3 class=\"text-avatar\">{{miNombre}}</h3>\r\n        <p class=\"subtext-avatar\">{{miParentezco}}</p>\r\n      </ion-row>\r\n    </ion-item>\r\n  </ion-list>\r\n  <ion-list>\r\n    <ion-item>\r\n      <ion-label>Fecha</ion-label>\r\n      <ion-label class=\"ion-text-wrap\">{{data.DetalleEventoMes.FechaHora}}</ion-label>\r\n    </ion-item>\r\n    <!-- proxima cita -->\r\n    <ion-item *ngIf=\"data.DetalleEventoMes.Subtitulo == 'Próxima Cita' || data.DetalleEventoMes.Subtitulo == 'Próxima Cita Web'\">\r\n      <ion-label>Profesional</ion-label>\r\n      <ion-label class=\"ion-text-capitalize ion-text-wrap\">{{profesional.toLowerCase()}}</ion-label>\r\n    </ion-item>\r\n    <ion-item>\r\n      <ion-label>Establecimiento</ion-label>\r\n      <ion-label class=\"ion-text-capitalize ion-text-wrap\">{{data.DetalleEventoMes.Lugar.toLowerCase()}}  </ion-label>\r\n    </ion-item>\r\n    <!-- tiene farmacos -->\r\n    <div *ngIf=\"farmacos\">\r\n\t\t\t<h3 id =\"tituloPrescripcion\" *ngIf=\"farmacos.length == 0\" margin text-center style=\"font-size: 1.9rem; padding:7px;\"></h3>\r\n\t\t\t<h3 id =\"tituloPrescripcion\" *ngIf=\"farmacos.length > 0\" margin text-center [ngStyle]=\"{'background-color': data.Color}\" style=\"color:#fff; font-size: 1.9rem; padding:7px;\">{{title}}</h3>\r\n    </div>\r\n\t\t\t<ion-item *ngFor='let item of farmacos' class=\"ion-no-padding ion-no-margin\">\t\t\t\t\r\n\t\t\t\t<ion-icon item-start><i class=\"care-pill pill\"></i></ion-icon>\r\n\t\t\t\t<p text-wrap class=\"medic\">{{ split(item.DescripcionPrincipal,\":\",0) }}</p>\r\n\t\t\t\t<p text-wrap class=\"medic down\">{{ split(item.DescripcionPrincipal,\":\",1) }}</p>\t\t\r\n\t\t\t</ion-item>\r\n\t\t<!-- </ion-list> -->\r\n  </ion-list>\r\n  <ion-row class=\"ion-padding-top ion-padding-start\" *ngIf=\"data.DetalleEventoMes.Subtitulo == 'Próxima Cita Web' && data.DetalleEventoMes.Estado != ''\">\r\n      <button *ngIf=\"botonConfirmar.Visible\" (click)=\"presentAlertConfirm(botonConfirmar)\" mat-raised-button color=\"primary\" style=\"margin-right: 16px;\">{{botonConfirmar.Titulo}}</button>\r\n      <button  *ngIf=\"botonReservar.Visible\" (click)=\"presentAlertConfirm(botonReservar)\" mat-raised-button color=\"primary\" style=\"margin-right: 16px;\">{{botonReservar.Titulo}}</button>\r\n      <button *ngIf=\"botonCancelar.Visible\" (click)=\"presentAlertConfirm(botonCancelar)\" mat-stroked-button color=\"primary\">{{botonCancelar.Titulo}}</button>\r\n  </ion-row>\r\n</ion-content>\r\n";
    /***/
  },

  /***/
  "./src/app/modal-detalle-cita/modal-detalle-cita.page.scss":
  /*!*****************************************************************!*\
    !*** ./src/app/modal-detalle-cita/modal-detalle-cita.page.scss ***!
    \*****************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppModalDetalleCitaModalDetalleCitaPageScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".text-avatar {\n  font-family: \"Roboto\";\n  letter-spacing: 0.15px;\n  color: #000000DE;\n  font-size: 1.25em;\n  margin-bottom: 0;\n}\n\n.subtext-avatar {\n  font-family: \"Roboto\";\n  letter-spacing: 0.25px;\n  color: #00000099;\n  font-size: 0.875em;\n  margin-bottom: 0;\n}\n\n.titulo-evento {\n  font-family: \"Roboto\";\n  font-size: 1.25em;\n  color: #000000DE;\n  letter-spacing: 0.15px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbW9kYWwtZGV0YWxsZS1jaXRhL0Y6XFxhcHBfbWlmYW1pbGlhX2dpdFxcbWlGYW1pbGlhX3ByZS9zcmNcXGFwcFxcbW9kYWwtZGV0YWxsZS1jaXRhXFxtb2RhbC1kZXRhbGxlLWNpdGEucGFnZS5zY3NzIiwic3JjL2FwcC9tb2RhbC1kZXRhbGxlLWNpdGEvbW9kYWwtZGV0YWxsZS1jaXRhLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLHFCQUFBO0VBQ0Esc0JBQUE7RUFDQSxnQkFBQTtFQUNBLGlCQUFBO0VBQ0EsZ0JBQUE7QUNDSjs7QURDRTtFQUNFLHFCQUFBO0VBQ0Esc0JBQUE7RUFDQSxnQkFBQTtFQUNBLGtCQUFBO0VBQ0EsZ0JBQUE7QUNFSjs7QURBRTtFQUNJLHFCQUFBO0VBQ0EsaUJBQUE7RUFDQSxnQkFBQTtFQUNGLHNCQUFBO0FDR0oiLCJmaWxlIjoic3JjL2FwcC9tb2RhbC1kZXRhbGxlLWNpdGEvbW9kYWwtZGV0YWxsZS1jaXRhLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi50ZXh0LWF2YXRhcntcclxuICAgIGZvbnQtZmFtaWx5OiAnUm9ib3RvJztcclxuICAgIGxldHRlci1zcGFjaW5nOiAwLjE1cHg7XHJcbiAgICBjb2xvcjogIzAwMDAwMERFO1xyXG4gICAgZm9udC1zaXplOiAxLjI1ZW07XHJcbiAgICBtYXJnaW4tYm90dG9tOiAwO1xyXG4gIH1cclxuICAuc3VidGV4dC1hdmF0YXJ7XHJcbiAgICBmb250LWZhbWlseTogJ1JvYm90byc7XHJcbiAgICBsZXR0ZXItc3BhY2luZzogMC4yNXB4O1xyXG4gICAgY29sb3I6ICMwMDAwMDA5OTtcclxuICAgIGZvbnQtc2l6ZTogMC44NzVlbTtcclxuICAgIG1hcmdpbi1ib3R0b206IDA7XHJcbiAgfVxyXG4gIC50aXR1bG8tZXZlbnRve1xyXG4gICAgICBmb250LWZhbWlseTogJ1JvYm90byc7XHJcbiAgICAgIGZvbnQtc2l6ZTogMS4yNWVtO1xyXG4gICAgICBjb2xvcjogIzAwMDAwMERFO1xyXG4gICAgbGV0dGVyLXNwYWNpbmc6IDAuMTVweDtcclxuICB9IiwiLnRleHQtYXZhdGFyIHtcbiAgZm9udC1mYW1pbHk6IFwiUm9ib3RvXCI7XG4gIGxldHRlci1zcGFjaW5nOiAwLjE1cHg7XG4gIGNvbG9yOiAjMDAwMDAwREU7XG4gIGZvbnQtc2l6ZTogMS4yNWVtO1xuICBtYXJnaW4tYm90dG9tOiAwO1xufVxuXG4uc3VidGV4dC1hdmF0YXIge1xuICBmb250LWZhbWlseTogXCJSb2JvdG9cIjtcbiAgbGV0dGVyLXNwYWNpbmc6IDAuMjVweDtcbiAgY29sb3I6ICMwMDAwMDA5OTtcbiAgZm9udC1zaXplOiAwLjg3NWVtO1xuICBtYXJnaW4tYm90dG9tOiAwO1xufVxuXG4udGl0dWxvLWV2ZW50byB7XG4gIGZvbnQtZmFtaWx5OiBcIlJvYm90b1wiO1xuICBmb250LXNpemU6IDEuMjVlbTtcbiAgY29sb3I6ICMwMDAwMDBERTtcbiAgbGV0dGVyLXNwYWNpbmc6IDAuMTVweDtcbn0iXX0= */";
    /***/
  },

  /***/
  "./src/app/modal-detalle-cita/modal-detalle-cita.page.ts":
  /*!***************************************************************!*\
    !*** ./src/app/modal-detalle-cita/modal-detalle-cita.page.ts ***!
    \***************************************************************/

  /*! exports provided: ModalDetalleCitaPage */

  /***/
  function srcAppModalDetalleCitaModalDetalleCitaPageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ModalDetalleCitaPage", function () {
      return ModalDetalleCitaPage;
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


    var moment__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! moment */
    "./node_modules/moment/moment.js");
    /* harmony import */


    var moment__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_6__);
    /* harmony import */


    var _app_pipes_split_pipe__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ../../app/pipes/split.pipe */
    "./src/app/pipes/split.pipe.ts"); //SERVICIOS
    //moment
    //pipe


    var ModalDetalleCitaPage = /*#__PURE__*/function () {
      function ModalDetalleCitaPage(modalCtrl, navParams, utiles, navCtrl, toast, platform, menu, loading, lab, alertController, agendar) {
        _classCallCheck(this, ModalDetalleCitaPage);

        this.modalCtrl = modalCtrl;
        this.navParams = navParams;
        this.utiles = utiles;
        this.navCtrl = navCtrl;
        this.toast = toast;
        this.platform = platform;
        this.menu = menu;
        this.loading = loading;
        this.lab = lab;
        this.alertController = alertController;
        this.agendar = agendar; //color

        this.miColor = '#FF4081';
        this.cita = {
          IdCita: 0,
          IdPaciente: '',
          Estado: ''
        };
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
      } //QUEDE ACA POR MIENTRARS, ESTOY TRABAJANDO EN LOS ESTILOS


      _createClass(ModalDetalleCitaPage, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          moment__WEBPACK_IMPORTED_MODULE_6__["locale"]('es');
          this.loadInicio();
        }
      }, {
        key: "loadInicio",
        value: function loadInicio() {
          var _this = this;

          //this.miColor = this.utiles.entregaMiColor();
          this.data = JSON.parse(this.navParams.get('evento'));
          console.log(this.data);
          this.farmacos = this.data.ListaFarmacos;
          console.log(this.farmacos);
          this.dosis = "";
          this.usuarioAps = JSON.parse(this.navParams.get('usuario'));
          this.miColor = this.utiles.entregaColor(this.usuarioAps); //parametros para avatar
          //primero determinamoos si es el mismo usuario o no
          //usuarioAps es el logueado

          var nombreCompletoUsuario = this.usuarioAps.Nombres + ' ' + this.usuarioAps.ApellidoPaterno + ' ' + this.usuarioAps.ApellidoMaterno;

          if (nombreCompletoUsuario == this.data.DetalleEventoMes.NombrePaciente) {
            //el el mismo
            this.miNombre = nombreCompletoUsuario;
            this.miImagen = this.usuarioAps.UrlImagen;
            this.miParentezco = "Yo";
          } else {
            this.miNombre = this.data.DetalleEventoMes.NombrePaciente; //this.miImagen = this.utiles.entregaImagen(this.usuarioAps);

            if (sessionStorage.getItem('UsuariosFamilia')) {
              var usuariosFamilia = JSON.parse(sessionStorage.getItem('UsuariosFamilia'));

              if (usuariosFamilia && usuariosFamilia.length > 0) {
                usuariosFamilia.forEach(function (usu) {
                  if (usu.Nombres + ' ' + usu.ApellidoPaterno + ' ' + usu.ApellidoMaterno == _this.data.DetalleEventoMes.NombrePaciente) {
                    _this.miImagen = _this.utiles.entregaImagen(usu);
                  }
                });
              }
            }

            this.miParentezco = "No informado";
          }

          var prev = this.data.DetalleEventoMes.DescripcionPrincipal.split('-');
          var posologia = prev[1];

          if (this.data) {
            if (this.data.DetalleEventoMes) {
              this.tituloSuperior = this.data.DetalleEventoMes.Titulo;
            }
          }

          if (this.data) {
            if (this.data.DetalleEventoMes.Subtitulo == 'Próxima Cita' || this.data.DetalleEventoMes.Subtitulo == 'Próxima Cita Web') {
              this.data.Imagen = "cita.png";
              this.profesional = this.data.DetalleEventoMes.DescripcionSecundaria;
            }

            if (this.data.DetalleEventoMes.Subtitulo == 'Atencion Realizada') {
              this.data.Imagen = "diagnostico.png";
            }

            if (this.data.DetalleEventoMes.Subtitulo == 'Fármaco en uso') {
              this.data.Imagen = "farmaco_uso.png";
            }

            if (this.data.DetalleEventoMes.Subtitulo == 'Fármaco Pendiente') {
              this.data.Imagen = "farmaco_pendiente.png";
            }

            if (this.data.DetalleEventoMes.Subtitulo == 'Alimento Entregado') {
              this.data.Imagen = "alimento.png";
            }

            if (this.data.DetalleEventoMes.Subtitulo == 'Vacuna Administrada') {
              this.data.Imagen = "inmunizacion.png";
            } //convertimos la fecha a formato correcto


            if (this.data.DetalleEventoMes.FechaHora) {
              var fecha = moment__WEBPACK_IMPORTED_MODULE_6__(this.data.DetalleEventoMes.FechaHora).format("dddd DD MMMM YYYY, HH:mm"); //console.log(fecha);

              this.data.DetalleEventoMes.FechaHora = fecha;
            }
          }

          if (this.data.DetalleEventoMes.Titulo == 'Entrega de fármaco') {
            this.data.DetalleEventoMes.DescripcionPrincipal = prev[1];
          }

          if (this.data.DetalleEventoMes.Titulo == 'Inmunización') {
            if (this.data.DetalleEventoMes.DescripcionSecundaria) {
              this.dosis = this.data.DetalleEventoMes.DescripcionSecundaria;
            }
          }

          if (this.data.DetalleEventoMes.Subtitulo == 'Fármaco en uso') {
            this.data.DetalleEventoMes.DescripcionPrincipal = this.data.DetalleEventoMes.DescripcionPrincipal;
          }

          if (this.data.DetalleEventoMes.Subtitulo == 'Fármaco Pendiente') {
            this.data.DetalleEventoMes.DescripcionPrincipal = this.data.NombreSecundario;
          }

          if (this.farmacos) {
            if (this.farmacos.length == 1) {
              this.title = "Prescripción";
            } else {
              this.title = "Prescripciones";
            }
          } //esto hacemos para obtener los datos de la cita y del paciente


          if (this.data.DetalleEventoMes.Subtitulo == 'Próxima Cita Web' && this.data.DetalleEventoMes.Estado != '') {
            this.cita.IdCita = this.data.DetalleEventoMes.IdElemento;
            this.cita.IdPaciente = this.usuarioAps.Rut;
            this.cita.Estado = this.data.DetalleEventoMes.Estado;

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
            }

            console.log(this.cita);
            console.log(this.cita);
          } //proceso de los iconos


          switch (this.data.DetalleEventoMes.Titulo) {
            case "Entrega de fármaco":
              return this.iconCita = "care-pill";

            case "Fármaco en uso":
              return this.iconCita = "care-pill";

            case "Fármaco entregado":
              return this.iconCita = "care-pill";

            case "Cita programada":
              return this.iconCita = "care-heartbeat";

            case "Cita programada web":
              return this.iconCita = "care-heartbeat";

            case "Atención Realizada":
              return this.iconCita = "care-heartbeat";

            case "Inmunización":
              return this.iconCita = "care-vaccine";

            case "Vacuna":
              return this.iconCita = "care-vaccine";

            case "Vacuna administrada":
              return this.iconCita = "care-vaccine";

            case "Alimento entregado":
              return this.iconCita = "care-coffee";

            case "Entrega de alimento":
              return this.iconCita = "care-coffee";

            default:
              this.iconCita;
              break;
          }
        }
      }, {
        key: "dismiss",
        value: function dismiss() {
          this.modalCtrl.dismiss();
        }
      }, {
        key: "split",
        value: function split(input, sep, inx) {
          var pi = new _app_pipes_split_pipe__WEBPACK_IMPORTED_MODULE_7__["SplitPipe"]();
          return pi.transform(input, sep, inx);
        }
      }, {
        key: "presentAlertConfirm",
        value: function presentAlertConfirm(boton) {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
            var _this2 = this;

            var titulo, alert;
            return regeneratorRuntime.wrap(function _callee$(_context) {
              while (1) {
                switch (_context.prev = _context.next) {
                  case 0:
                    titulo = '';
                    _context.next = 3;
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
                          _this2.accionCita(boton); //console.log('Confirm Okay');

                        }
                      }]
                    });

                  case 3:
                    alert = _context.sent;
                    _context.next = 6;
                    return alert.present();

                  case 6:
                  case "end":
                    return _context.stop();
                }
              }
            }, _callee, this);
          }));
        }
      }, {
        key: "accionCita",
        value: function accionCita(boton) {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee3() {
            var _this3 = this;

            var idPaciente, idCita, accion, loader;
            return regeneratorRuntime.wrap(function _callee3$(_context3) {
              while (1) {
                switch (_context3.prev = _context3.next) {
                  case 0:
                    idPaciente = this.cita.IdPaciente;
                    idCita = this.cita.IdCita;
                    accion = boton.Operacion;
                    _context3.next = 5;
                    return this.loading.create({
                      message: 'Procesado...<br>Información',
                      duration: 20000
                    });

                  case 5:
                    loader = _context3.sent;
                    _context3.next = 8;
                    return loader.present().then(function () {
                      return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(_this3, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
                        var _this4 = this;

                        var retorno;
                        return regeneratorRuntime.wrap(function _callee2$(_context2) {
                          while (1) {
                            switch (_context2.prev = _context2.next) {
                              case 0:
                                retorno = null;

                                if (!this.utiles.isAppOnDevice()) {
                                  //llamada web
                                  this.agendar.getOperacionCita(idCita, idPaciente, accion).subscribe(function (response) {
                                    _this4.procesarRespuesta(response, loader, accion);
                                  });
                                } else {
                                  //llamada nativa
                                  //this.cargarDatosNative(mesConsultar, annoConsultar, loader);
                                  this.agendar.getOperacionCitaNative(idCita, idPaciente, accion).then(function (responseData) {
                                    var response = JSON.parse(responseData.data);

                                    _this4.procesarRespuesta(response, loader, accion);
                                  });
                                }

                              case 2:
                              case "end":
                                return _context2.stop();
                            }
                          }
                        }, _callee2, this);
                      }));
                    });

                  case 8:
                  case "end":
                    return _context3.stop();
                }
              }
            }, _callee3, this);
          }));
        }
      }, {
        key: "procesarRespuesta",
        value: function procesarRespuesta(data, loader, accion) {
          var retorno = null;

          if (data && data.Mensaje) {
            if (data.Mensaje.Codigo == 'correcto') {
              //todo bien
              //this.utiles.presentToast('Operación realizada con éxito', 'middle', 2000);
              retorno = data;
            } else {
              this.utiles.presentToast(data.Mensaje.Detalle.Texto, 'middle', 2000);
            }
          } else {
            //error en la operacion
            this.utiles.presentToast('Error en la operación', 'middle', 2000);
          }

          loader.dismiss(); //ACA SE DEBE ACTUALIZAR LA PAGINA DE AGENDA DISPONIBLE.

          this.modalCtrl.dismiss({
            retorno: retorno,
            accion: accion
          });
        }
      }]);

      return ModalDetalleCitaPage;
    }();

    ModalDetalleCitaPage.ctorParameters = function () {
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
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["AlertController"]
      }, {
        type: _app_services_ServicioCitas__WEBPACK_IMPORTED_MODULE_5__["ServicioCitas"]
      }];
    };

    ModalDetalleCitaPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-modal-detalle-cita',
      template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! raw-loader!./modal-detalle-cita.page.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/modal-detalle-cita/modal-detalle-cita.page.html"))["default"],
      styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! ./modal-detalle-cita.page.scss */
      "./src/app/modal-detalle-cita/modal-detalle-cita.page.scss"))["default"]]
    })], ModalDetalleCitaPage);
    /***/
  }
}]);
//# sourceMappingURL=default~calendario-calendario-module~modal-detalle-cita-modal-detalle-cita-module-es5.js.map