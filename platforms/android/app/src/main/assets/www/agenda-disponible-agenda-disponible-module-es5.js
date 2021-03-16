function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["agenda-disponible-agenda-disponible-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/agenda-disponible/agenda-disponible.page.html":
  /*!*****************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/agenda-disponible/agenda-disponible.page.html ***!
    \*****************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppAgendaDisponibleAgendaDisponiblePageHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ion-header>\r\n  <ion-toolbar [style.--background]=\"miColor\" mode=\"md\">\r\n    <ion-buttons slot=\"start\">\r\n      <ion-back-button defaultHref=\"/home\" class=\"fcw\"></ion-back-button>\r\n    </ion-buttons>\r\n    <ion-title class=\"fcw\">Mis citas</ion-title>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content class=\"back-app\">\r\n  <ion-item>\r\n    <ion-label>Tipos de atención</ion-label>\r\n    <ion-select interface=\"popover\" (ionChange)=\"tipoSeleccionado($event)\" multiple=\"false\" value=\"{{comboSeleccionado}}\">\r\n      <ion-select-option *ngFor=\"let tipo of tiposAtencion\" [value]=\"tipo.Texto\">{{tipo.Texto}}</ion-select-option>\r\n    </ion-select>\r\n  </ion-item>\r\n  <ion-grid>\r\n    <ion-row>\r\n      <ion-col size=\"1\" class=\"ion-no-margin ion-no-padding\" [style.background]=\"miColor\" [style.color]=\"textColor\">\r\n        <ion-icon name=\"chevron-back-outline\" style=\"font-size: 2em;padding-top: 10px;\" *ngIf=\"indiceActual > 0\" (click)=\"onClickCambiarSemana('ant')\"></ion-icon>\r\n      </ion-col>\r\n      <ion-col class=\"ion-no-margin ion-no-padding\">\r\n        <ion-item [style.--background]=\"miColor\" [style.--color]=\"textColor\">\r\n          <ion-label class=\"ion-text-wrap ion-text-center titulo-semanas\">\r\n            {{semana.texto}}\r\n          </ion-label>\r\n        </ion-item>\r\n        <ion-grid class=\"ion-no-margin ion-no-padding\">\r\n          <ion-row>\r\n            <ion-col *ngFor=\"let item of semana.semanas\" class=\"ion-text-center ion-padding-bottom label-fecha\" \r\n              [style.background]=\"item.selected ? '#3880ff' : '#3dc2ff'\" \r\n              (click)=\"seleccionarCuposAgrupados(item)\"\r\n              [style.color]=\"textColor\">\r\n              <ion-label class=\"ion-text-center ion-text-capitalize\">\r\n                <strong>{{item.diaStr}}</strong> \r\n                <!-- {{item.texto}} -->\r\n              </ion-label>\r\n              <p class=\"ion-text-center ion-text-capitalize\">\r\n                {{item.texto}}\r\n              </p>\r\n              <ion-badge *ngIf=\"item.total > 0\" class=\"badge-cita\" color=\"success\"><ion-icon name=\"checkmark\"></ion-icon></ion-badge>\r\n            </ion-col>\r\n          </ion-row>\r\n        </ion-grid>\r\n      </ion-col>\r\n      <ion-col size=\"1\" class=\"ion-no-margin ion-no-padding\" [style.background]=\"miColor\" [style.color]=\"textColor\">\r\n        <ion-icon name=\"chevron-forward-outline\" style=\"font-size: 2em;padding-top: 10px;\" *ngIf=\"indiceActual < cantidadSemanas\" (click)=\"onClickCambiarSemana('sig')\"></ion-icon>\r\n      </ion-col>\r\n    </ion-row>\r\n  </ion-grid>\r\n  <div>\r\n   \r\n    <ion-list *ngFor=\"let cita of cuposAgrupadosSelected\" class=\"ion-padding-left\">\r\n\r\n      <ion-list-header lines=\"inset\" [hidden]=\"contadorHorasDisponibles(cita[1].HorasDisponibles) == 0\">\r\n        <ion-label><h1>{{cita[1].MedicoPrestador.NombreCompletoMedico}}</h1></ion-label>\r\n        <ion-label>{{cita[0]}}</ion-label>\r\n      </ion-list-header>\r\n      <div *ngFor=\"let cupo of cita[1].HorasDisponibles\">\r\n        <ion-item lines=\"none\" [hidden]=\"!cupo.Visible\">\r\n          <ion-label class=\"ion-text-wrap\" [ngClass]=\"{'danger':cupo.Estado === 'cancelled'}\">\r\n            <h5><ion-icon name=\"navigate\" slot=\"start\"></ion-icon>&nbsp;{{cupo.Servicio.Nombre}}</h5>\r\n            <h6><ion-icon name=\"bandage\" slot=\"start\"></ion-icon>&nbsp;{{cupo.TipoAtencion}}</h6>\r\n            <h6 class=\"ion-text-capitalize\"><ion-icon name=\"alarm\" slot=\"start\"></ion-icon>&nbsp;{{transformDate(cupo.FechaHoraInicio, 'dddd DD MMMM YYYY')}}</h6>\r\n            <h6 class=\"ion-text-capitalize\">Estado: <strong>{{traduceString(cupo.Estado)}}</strong></h6>\r\n          </ion-label>\r\n          <ion-button \r\n            [ngClass]=\"{'danger-boton':cupo.Estado === 'cancelled', 'success-boton':cupo.Estado === 'booked' || cupo.Estado === 'confirmed'}\" \r\n            (click)=\"citaSelected(cupo)\">{{cupo.HoraInicio}} - {{cupo.HoraTermino}}\r\n            <ion-icon name=\"chevron-forward-outline\" slot=\"end\"></ion-icon>\r\n          </ion-button>\r\n        </ion-item>\r\n      </div>\r\n\r\n    </ion-list>\r\n   \r\n      <!-- no hay datos -->\r\n    <ion-row *ngIf=\"cuposAgrupadosSelected.length == 0\">\r\n      <div style=\"position: absolute; display: table; height: 80%; font-size: 30px; color:#BDBDBD; text-align: center;\" class=\"ion-padding\">\r\n        <p style=\"display: table-cell; vertical-align: middle\">No hay citas para el día seleccionado  <br>\r\n        <ion-icon name=\"information-circle\" style=\"font-size: 50px;\"></ion-icon></p>\r\n      </div>\r\n    </ion-row>\r\n\r\n  </div>\r\n\r\n\r\n</ion-content>\r\n<ion-fab vertical=\"bottom\" horizontal=\"end\" slot=\"fixed\">\r\n  <ion-fab-button (click)=\"logout()\" [style.--background]=\"miColor\">\r\n    <ion-icon name=\"close\"></ion-icon>\r\n  </ion-fab-button>\r\n</ion-fab>\r\n";
    /***/
  },

  /***/
  "./src/app/agenda-disponible/agenda-disponible.module.ts":
  /*!***************************************************************!*\
    !*** ./src/app/agenda-disponible/agenda-disponible.module.ts ***!
    \***************************************************************/

  /*! exports provided: AgendaDisponiblePageModule */

  /***/
  function srcAppAgendaDisponibleAgendaDisponibleModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AgendaDisponiblePageModule", function () {
      return AgendaDisponiblePageModule;
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


    var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
    /* harmony import */


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _agenda_disponible_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./agenda-disponible.page */
    "./src/app/agenda-disponible/agenda-disponible.page.ts");
    /* harmony import */


    var _directives_text_avatar_index__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ../../directives/text-avatar/index */
    "./src/directives/text-avatar/index.ts");

    var AgendaDisponiblePageModule = function AgendaDisponiblePageModule() {
      _classCallCheck(this, AgendaDisponiblePageModule);
    };

    AgendaDisponiblePageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _directives_text_avatar_index__WEBPACK_IMPORTED_MODULE_7__["TextAvatarModule"], _angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterModule"].forChild([{
        path: '',
        component: _agenda_disponible_page__WEBPACK_IMPORTED_MODULE_6__["AgendaDisponiblePage"]
      }])],
      declarations: [_agenda_disponible_page__WEBPACK_IMPORTED_MODULE_6__["AgendaDisponiblePage"]]
    })], AgendaDisponiblePageModule);
    /***/
  },

  /***/
  "./src/app/agenda-disponible/agenda-disponible.page.scss":
  /*!***************************************************************!*\
    !*** ./src/app/agenda-disponible/agenda-disponible.page.scss ***!
    \***************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppAgendaDisponibleAgendaDisponiblePageScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".titulo-semanas {\n  font-size: 0.8em;\n}\n\n.badge-cita {\n  position: absolute;\n  top: 2px;\n  right: 1px;\n  border-radius: 100%;\n}\n\n.danger {\n  color: var(--ion-color-danger);\n}\n\n.danger-boton {\n  --background: var(--ion-color-danger);\n}\n\n.success-boton {\n  --background: var(--ion-color-success);\n}\n\n.label-fecha {\n  padding-top: 28px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYWdlbmRhLWRpc3BvbmlibGUvRjpcXGFwcF9taWZhbWlsaWFfZ2l0XFxtaUZhbWlsaWFfcHJlL3NyY1xcYXBwXFxhZ2VuZGEtZGlzcG9uaWJsZVxcYWdlbmRhLWRpc3BvbmlibGUucGFnZS5zY3NzIiwic3JjL2FwcC9hZ2VuZGEtZGlzcG9uaWJsZS9hZ2VuZGEtZGlzcG9uaWJsZS5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxnQkFBQTtBQ0NKOztBRENBO0VBQ0ksa0JBQUE7RUFDQSxRQUFBO0VBQ0EsVUFBQTtFQUNBLG1CQUFBO0FDRUo7O0FEQUE7RUFDSSw4QkFBQTtBQ0dKOztBRERBO0VBQ0kscUNBQUE7QUNJSjs7QURGQTtFQUNJLHNDQUFBO0FDS0o7O0FESEE7RUFDSSxpQkFBQTtBQ01KIiwiZmlsZSI6InNyYy9hcHAvYWdlbmRhLWRpc3BvbmlibGUvYWdlbmRhLWRpc3BvbmlibGUucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnRpdHVsby1zZW1hbmFze1xyXG4gICAgZm9udC1zaXplOiAwLjhlbTtcclxufVxyXG4uYmFkZ2UtY2l0YXtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHRvcDoycHg7XHJcbiAgICByaWdodDogMXB4O1xyXG4gICAgYm9yZGVyLXJhZGl1czogMTAwJTtcclxufVxyXG4uZGFuZ2Vye1xyXG4gICAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1kYW5nZXIpO1xyXG59XHJcbi5kYW5nZXItYm90b257XHJcbiAgICAtLWJhY2tncm91bmQ6IHZhcigtLWlvbi1jb2xvci1kYW5nZXIpO1xyXG59XHJcbi5zdWNjZXNzLWJvdG9ue1xyXG4gICAgLS1iYWNrZ3JvdW5kOiB2YXIoLS1pb24tY29sb3Itc3VjY2Vzcyk7XHJcbn1cclxuLmxhYmVsLWZlY2hhe1xyXG4gICAgcGFkZGluZy10b3A6IDI4cHg7O1xyXG59IiwiLnRpdHVsby1zZW1hbmFzIHtcbiAgZm9udC1zaXplOiAwLjhlbTtcbn1cblxuLmJhZGdlLWNpdGEge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogMnB4O1xuICByaWdodDogMXB4O1xuICBib3JkZXItcmFkaXVzOiAxMDAlO1xufVxuXG4uZGFuZ2VyIHtcbiAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1kYW5nZXIpO1xufVxuXG4uZGFuZ2VyLWJvdG9uIHtcbiAgLS1iYWNrZ3JvdW5kOiB2YXIoLS1pb24tY29sb3ItZGFuZ2VyKTtcbn1cblxuLnN1Y2Nlc3MtYm90b24ge1xuICAtLWJhY2tncm91bmQ6IHZhcigtLWlvbi1jb2xvci1zdWNjZXNzKTtcbn1cblxuLmxhYmVsLWZlY2hhIHtcbiAgcGFkZGluZy10b3A6IDI4cHg7XG59Il19 */";
    /***/
  },

  /***/
  "./src/app/agenda-disponible/agenda-disponible.page.ts":
  /*!*************************************************************!*\
    !*** ./src/app/agenda-disponible/agenda-disponible.page.ts ***!
    \*************************************************************/

  /*! exports provided: AgendaDisponiblePage */

  /***/
  function srcAppAgendaDisponibleAgendaDisponiblePageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AgendaDisponiblePage", function () {
      return AgendaDisponiblePage;
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


    var _app_services_ServicioAcceso__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../../app/services/ServicioAcceso */
    "./src/app/services/ServicioAcceso.ts");
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


    var _app_pipes_fecha_pipe__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ../../app/pipes/fecha.pipe */
    "./src/app/pipes/fecha.pipe.ts");
    /* harmony import */


    var _modal_operacion_cita_modal_operacion_cita_page__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ../modal-operacion-cita/modal-operacion-cita.page */
    "./src/app/modal-operacion-cita/modal-operacion-cita.page.ts"); //modal


    var AgendaDisponiblePage = /*#__PURE__*/function () {
      function AgendaDisponiblePage(navCtrl, toast, modalCtrl, platform, loading, menu, utiles, acceso, cita) {
        _classCallCheck(this, AgendaDisponiblePage);

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
        this.cuposAgrupadosSelected = []; //datos para consultar citas

        this.runPaciente = '';
        this.codigoDeis = '';
        this.serviceType = '349'; //manejo de movimiento de semanas

        this.indiceAnterior = 0;
        this.indiceSiguiente = 1;
        this.indiceActual = 0;
        this.anteriorEnabled = false;
        this.siguienteEnabled = true;
        this.cantidadSemanas = 3; //tipo operacion

        this.tipoOperacion = 'cita'; //tipos de atencion

        this.tiposAtencion = [];
        this.comboSeleccionado = "";
      }

      _createClass(AgendaDisponiblePage, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          //el primer load lo hacemos con la fecha hora actual
          moment__WEBPACK_IMPORTED_MODULE_6__["locale"]('es');
          /*     if (sessionStorage.getItem('OPERACION')){
                this.tipoOperacion = sessionStorage.getItem('OPERACION');
              } */

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
          } //this.cargarDatos();


          this.construyeSemanaBuscar(0, 'sig');
        }
      }, {
        key: "construyeSemanaBuscar",
        value: function construyeSemanaBuscar(pagina, operacion) {
          //si la pagina es 0 se debe construir la semana a contar de la fecha actual
          var factorDias = 0;
          var fecha = new Date(); //en el caso que venga la misma pagina que se envio y la operacion nula, debemos tomar los datos de la semana
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
              } else {
                fechaIni = moment__WEBPACK_IMPORTED_MODULE_6__(this.semana.end);
                date = new Date(fechaIni.year(), fechaIni.month(), fechaIni.date(), 0, 0, 0, 0);
              }

              this.utiles.construyeSemana(this.runPaciente, this.codigoDeis, date);
              this.semana = this.utiles.semana;
              this.semanas = this.utiles.semanas; //lo comentamos para consultar una semana completa
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
            this.semanas = this.utiles.semanas; //esto lo cambiamos para que obtenga la semana completa
            //var ini = this.semana.semanas[0].start;

            var ini = this.semana.start; //var ter = this.semana.semanas[0].end;

            var ter = this.semana.end;
            console.log(this.semana); //carga inicial

            sessionStorage.setItem("PAGINA_ACTUAL", pagina);
            this.buscarDisponibilidad(ini, ter, this.codigoDeis, this.runPaciente, this.serviceType, this.tipoOperacion);
          } else {
            //aca debemos sacar fecha inicio y termino
            if (this.semana) {
              var fechaIni = moment__WEBPACK_IMPORTED_MODULE_6__();
              var date = new Date();

              if (operacion == 'ant') {
                //si es anterior hay que ver que pasa
                //deberiamos retroceder desde la fecha de inicio
                fechaIni = moment__WEBPACK_IMPORTED_MODULE_6__(this.semana.start).add(-8, 'day');
                date = new Date(fechaIni.year(), fechaIni.month(), fechaIni.date(), 0, 0, 0, 0);
              } else {
                fechaIni = moment__WEBPACK_IMPORTED_MODULE_6__(this.semana.end);
                date = new Date(fechaIni.year(), fechaIni.month(), fechaIni.date(), 0, 0, 0, 0);
              }

              this.utiles.construyeSemana(this.runPaciente, this.codigoDeis, date);
              this.semana = this.utiles.semana;
              this.semanas = this.utiles.semanas; //lo comentamos para consultar una semana completa
              //var ini = this.semana.semanas[0].start;
              //var ter = this.semana.semanas[0].end;

              var ini = this.semana.start;
              var ter = this.semana.end;
              sessionStorage.setItem("PAGINA_ACTUAL", pagina);
              this.buscarDisponibilidad(ini, ter, this.codigoDeis, this.runPaciente, this.serviceType, this.tipoOperacion);
            }
          }
        }
      }, {
        key: "logout",
        value: function logout() {
          this.acceso.logout();
          this.navCtrl.navigateRoot('login');
        }
      }, {
        key: "onClickSemana",
        value: function onClickSemana(item) {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
            var run, codDeis;
            return regeneratorRuntime.wrap(function _callee$(_context) {
              while (1) {
                switch (_context.prev = _context.next) {
                  case 0:
                    console.log(item);

                    if (item != null) {
                      if (this.semana.semanas && this.semana.semanas.length > 0) {
                        this.semana.semanas.forEach(function (sem) {
                          if (sem.end == item.end) {
                            sem.selected = true;
                          } else {
                            sem.selected = false;
                          }

                          sem.total = 0;
                        });
                      } //ahora enviamos los datos


                      run = this.utiles.insertarGuion(this.usuarioAps.Rut);
                      codDeis = this.usuarioAps.ConfiguracionNodo.CodigoDeis2014;
                      this.buscarDisponibilidad(item.start, item.end, codDeis, run, item.serviceType, this.tipoOperacion);
                    }

                  case 2:
                  case "end":
                    return _context.stop();
                }
              }
            }, _callee, this);
          }));
        }
      }, {
        key: "procesarRespuestaTotal",
        value: function procesarRespuestaTotal(data, loader) {
          var _this = this;

          //vienen las citas sin fecha
          this.cuposAgrupadosSelected = [];
          this.tiposAtencion = [];
          console.log(this.semana);

          if (data && data.Mensaje) {
            //correcto
            if (data.Mensaje.Codigo == 'correcto') {
              //todo bien procesar las citas
              var contador = 0;

              if (data.CitasDisponibles && data.CitasDisponibles.length > 0) {
                data.CitasDisponibles.forEach(function (cit) {
                  cit.horaInicio = moment__WEBPACK_IMPORTED_MODULE_6__(cit.FechaHoraInicio).format('HH:mm');
                  cit.horaTermino = moment__WEBPACK_IMPORTED_MODULE_6__(cit.FechaHoraTermino).format('HH:mm'); //pruebas

                  contador++;
                });
              }

              if (data.TiposAtencion) {
                this.tiposAtencion = this.crearTiposAtencion(data.TiposAtencion);

                if (this.tiposAtencion && this.tiposAtencion.length > 0) {
                  this.comboSeleccionado = this.tiposAtencion[0].Texto;
                }
              } //aca asignamos las citas


              this.citas = data.CitasDisponibles; //hacemos foreach a las semanas

              if (this.semana.semanas && this.semana.semanas.length > 0) {
                this.semana.semanas.forEach(function (sem) {
                  var cupos = 0;
                  console.log(sem);

                  if (_this.citas && _this.citas.length > 0) {
                    sem.Cupos = [];

                    _this.citas.forEach(function (cupo) {
                      //cupos = 0;
                      var fechaComparar = moment__WEBPACK_IMPORTED_MODULE_6__(cupo.FechaHoraInicio).format('YYYY-MM-DD');

                      if (moment__WEBPACK_IMPORTED_MODULE_6__(sem.start).format('YYYY-MM-DD') == fechaComparar) {
                        sem.Cupos.push(cupo);
                        cupos++;
                      }
                    });
                  }

                  console.log(cupos);
                  sem.total = cupos;
                  sem.CuposAgrupados = _this.agruparCitasTodas(sem.Cupos);
                });
              } //console.log(this.citas);


              console.log(this.semana); //aca guardamos la semana en una variable de session

              sessionStorage.setItem('CUPOS_SEMANA', JSON.stringify(this.semana)); //this.agruparCitas();
              //dejamos por defecto el primer item seleccionado

              this.cuposAgrupadosSelected = this.semana.semanas[0].CuposAgrupados; //filtramos

              this.filtrarTiposAtencion();
              loader.dismiss();
            } else {
              this.cuposAgrupadosSelected = [];
              loader.dismiss();
            } //error

          }
        } //este metodo lo vamos a acambiar, ya que ahora procesamos todo

      }, {
        key: "buscarDisponibilidad",
        value: function buscarDisponibilidad(start, end, organization, patient, serviceType, tipoOperacion) {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee3() {
            var _this2 = this;

            var loader;
            return regeneratorRuntime.wrap(function _callee3$(_context3) {
              while (1) {
                switch (_context3.prev = _context3.next) {
                  case 0:
                    _context3.next = 2;
                    return this.loading.create({
                      message: 'Cargando...<br>disponibilidad',
                      duration: 20000
                    });

                  case 2:
                    loader = _context3.sent;
                    _context3.next = 5;
                    return loader.present().then(function () {
                      return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(_this2, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
                        var _this3 = this;

                        return regeneratorRuntime.wrap(function _callee2$(_context2) {
                          while (1) {
                            switch (_context2.prev = _context2.next) {
                              case 0:
                                this.citas = [];
                                this.citasAgrupadas = [];

                                if (!this.utiles.isAppOnDevice()) {
                                  //llamada web
                                  this.cita.getDisponibilidad(start, end, organization, patient, serviceType, '', '', tipoOperacion, this.nodId).subscribe(function (response) {
                                    _this3.procesarRespuestaTotal(response, loader);
                                  });
                                } else {
                                  //llamada nativa
                                  this.cita.getDisponibilidadNative(start, end, organization, patient, serviceType, '', '', tipoOperacion, this.nodId).then(function (response) {
                                    var respuesta = JSON.parse(response.data);

                                    _this3.procesarRespuestaTotal(respuesta, loader);
                                  });
                                }

                              case 3:
                              case "end":
                                return _context2.stop();
                            }
                          }
                        }, _callee2, this);
                      }));
                    });

                  case 5:
                  case "end":
                    return _context3.stop();
                }
              }
            }, _callee3, this);
          }));
        }
      }, {
        key: "agruparCitasTodas",
        value: function agruparCitasTodas(arrCupos) {
          var _this4 = this;

          //aca vienen los cupos
          var cuposAgrupados = []; //this.citasAgrupadas = [];

          var nuevoObjeto = {}; //primero sacamos los medicos distintos

          var medicos = [];

          if (arrCupos && arrCupos.length > 0) {
            arrCupos.forEach(function (x) {
              if (!nuevoObjeto.hasOwnProperty(x.RunMedico)) {
                nuevoObjeto[x.RunMedico] = {
                  MedicoPrestador: {
                    NombreCompletoMedico: x.NombresMedico + ' ' + x.ApellidosMedico,
                    RunMedico: x.RunMedico
                  },
                  HorasDisponibles: []
                };
              } //Agregamos los datos de profesionales. 


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
                HoraInicio: _this4.transformDateIso(new Date(x.FechaHoraInicio).toISOString()),
                HoraTermino: _this4.transformDateIso(new Date(x.FechaHoraTermino).toISOString())
              });
            });
          }

          cuposAgrupados = Object.entries(nuevoObjeto);
          return cuposAgrupados;
        } //vamos a tener que agrupar, ya que muchas veces el médico es el mismo y solo cambia el horario

      }, {
        key: "agruparCitas",
        value: function agruparCitas() {
          this.citasAgrupadas = [];
          var nuevoObjeto = {}; //primero sacamos los medicos distintos

          var medicos = [];

          if (this.citas && this.citas.length > 0) {
            this.citas.forEach(function (x) {
              if (!nuevoObjeto.hasOwnProperty(x.RunMedico)) {
                nuevoObjeto[x.RunMedico] = {
                  MedicoPrestador: {
                    NombreCompletoMedico: x.NombresMedico + ' ' + x.ApellidosMedico,
                    RunMedico: x.RunMedico
                  },
                  HorasDisponibles: []
                };
              } //Agregamos los datos de profesionales. 


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
                TipoServicio: {
                  Codigo: x.TipoServicio.Codigo,
                  Nombre: x.TipoServicio.Nombre
                },
                HoraInicio: moment__WEBPACK_IMPORTED_MODULE_6__(x.FechaHoraInicio).format('HH:mm'),
                HoraTermino: moment__WEBPACK_IMPORTED_MODULE_6__(x.FechaHoraTermino).format('HH:mm')
              });
            });
          }

          this.objetoCita = nuevoObjeto;
          this.citasAgrupadas = Object.entries(this.objetoCita);
          console.log(this.objetoCita);
          console.log(this.citasAgrupadas);
        }
      }, {
        key: "transformDate",
        value: function transformDate(value, format) {
          var pi = new _app_pipes_fecha_pipe__WEBPACK_IMPORTED_MODULE_7__["MomentPipe"]();
          return pi.transform(value, format);
        }
      }, {
        key: "seleccionarCuposAgrupados",
        value: function seleccionarCuposAgrupados(item) {
          var _this5 = this;

          console.log(item);
          this.cuposAgrupadosSelected = [];

          if (item != null) {
            if (this.semana.semanas && this.semana.semanas.length > 0) {
              this.semana.semanas.forEach(function (sem) {
                if (sem.end == item.end) {
                  sem.selected = true;
                  _this5.cuposAgrupadosSelected = sem.CuposAgrupados;
                  console.log(_this5.cuposAgrupadosSelected); //filtramos

                  _this5.filtrarTiposAtencion();
                } else {
                  sem.selected = false;
                }
              });
            }
          }
        }
      }, {
        key: "onClickCupo",
        value: function onClickCupo(cupo) {
          console.log(cupo);
        }
      }, {
        key: "onClickCambiarSemana",
        value: function onClickCambiarSemana(operacion) {
          if (operacion == 'ant') {
            //console.log('anterior');
            if (this.indiceActual == 0) {
              //console.log('no puedes volver');
              //console.log('inidice actual ' + this.indiceActual);
              return;
            }

            this.indiceActual--;
          } else {
            //console.log('siguiente');
            if (this.indiceActual < this.cantidadSemanas) {
              //correcto
              this.indiceActual++;
            } else {
              //console.log('no puedes seguir');
              //console.log('inidice actual ' + this.indiceActual);
              return;
            }
          } //console.log('inidice actual ' + this.indiceActual);


          console.log('consultar pagina ' + this.indiceActual);
          this.construyeSemanaBuscar(this.indiceActual, operacion);
        }
      }, {
        key: "citaSelected",
        value: function citaSelected(item) {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee4() {
            var _this6 = this;

            var modal;
            return regeneratorRuntime.wrap(function _callee4$(_context4) {
              while (1) {
                switch (_context4.prev = _context4.next) {
                  case 0:
                    if (item) {
                      this.itemSelected = item;
                    }

                    _context4.next = 3;
                    return this.modalCtrl.create({
                      component: _modal_operacion_cita_modal_operacion_cita_page__WEBPACK_IMPORTED_MODULE_8__["ModalOperacionCitaPage"],
                      componentProps: {
                        'cita': JSON.stringify(item),
                        'operacion': 'reservar'
                      }
                    });

                  case 3:
                    modal = _context4.sent;
                    modal.onDidDismiss().then(function (data) {
                      if (data.data && data.data.accion) {
                        var accion = data.data.accion; //obtenemos la pagina actual

                        var pag = 0;

                        if (sessionStorage.getItem('NUMERO_PAGINA')) {
                          pag = parseInt(sessionStorage.getItem('NUMERO_PAGINA'));
                        }

                        _this6.construyeSemanaBuscar(pag, null); //revisar esto NO FUNCIONA
                        //this.seleccionarCuposAgrupados(this.itemSelected);

                      }
                    });
                    _context4.next = 7;
                    return modal.present();

                  case 7:
                    return _context4.abrupt("return", _context4.sent);

                  case 8:
                  case "end":
                    return _context4.stop();
                }
              }
            }, _callee4, this);
          }));
        }
      }, {
        key: "traduceString",
        value: function traduceString(texto) {
          return this.utiles.traduceString(texto);
        }
      }, {
        key: "styleCita",
        value: function styleCita(estado) {
          var retorno = '';

          switch (estado) {
            case 'cancelled':
              retorno = '--ion-color-danger';
              break;

            default:
              retorno = '';
              break;
          }

          return retorno;
        }
      }, {
        key: "crearTiposAtencion",
        value: function crearTiposAtencion(tiposAtencion) {
          var arr = [];
          /*     var entidadInicial = {
                Texto: 'Todos',
                Valor: 0,
                Selected: true
              }
              arr.push(entidadInicial); */

          if (tiposAtencion && tiposAtencion.length > 0) {
            tiposAtencion.forEach(function (tipo) {
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
      }, {
        key: "tipoSeleccionado",
        value: function tipoSeleccionado(event) {
          if (event.detail.value) {
            this.comboSeleccionado = event.detail.value;
            console.log(this.comboSeleccionado); //this.seleccionarCuposAgrupados(this.itemSelected);

            this.filtrarTiposAtencion();
          }
        }
      }, {
        key: "contadorHorasDisponibles",
        value: function contadorHorasDisponibles(cupos) {
          var _this7 = this;

          var total = 0;

          if (cupos && cupos.length > 0) {
            cupos.forEach(function (element) {
              if (element.TipoAtencion == _this7.comboSeleccionado) {
                total++;
              }
            });
          }

          return total;
        }
      }, {
        key: "filtrarTiposAtencion",
        value: function filtrarTiposAtencion() {
          var _this8 = this;

          //arr cuposAgrupadosSelected
          var total = 0;

          if (this.cuposAgrupadosSelected && this.cuposAgrupadosSelected.length > 0) {
            this.cuposAgrupadosSelected.forEach(function (cupo) {
              if (cupo[1].HorasDisponibles && cupo[1].HorasDisponibles.length > 0) {
                cupo[1].HorasDisponibles.forEach(function (element) {
                  if (element.TipoAtencion != _this8.comboSeleccionado) {
                    element.Visible = false;
                  } else {
                    element.Visible = true;
                    total++;
                  }
                });
              }
            });
          } //volvemos a recontar los totales de la semana


          if (this.semana) {
            if (this.semana && this.semana.semanas) {
              this.semana.semanas.forEach(function (sem) {
                var tot = 0;

                if (sem.Cupos && sem.Cupos.length > 0) {
                  sem.Cupos.forEach(function (cupo) {
                    if (cupo.TipoAtencion == _this8.comboSeleccionado) {
                      tot++;
                    }
                  });
                }

                sem.total = tot;
              });
            }

            sessionStorage.setItem('CUPOS_SEMANA', JSON.stringify(this.semana));
          }

          console.log(this.cuposAgrupadosSelected);
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

      return AgendaDisponiblePage;
    }();

    AgendaDisponiblePage.ctorParameters = function () {
      return [{
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ToastController"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ModalController"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["Platform"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["LoadingController"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["MenuController"]
      }, {
        type: _app_services_ServicioUtiles__WEBPACK_IMPORTED_MODULE_3__["ServicioUtiles"]
      }, {
        type: _app_services_ServicioAcceso__WEBPACK_IMPORTED_MODULE_4__["ServicioAcceso"]
      }, {
        type: _app_services_ServicioCitas__WEBPACK_IMPORTED_MODULE_5__["ServicioCitas"]
      }];
    };

    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('myList', {
      read: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonItem"]
    })], AgendaDisponiblePage.prototype, "list", void 0);
    AgendaDisponiblePage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-agenda-disponible',
      template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! raw-loader!./agenda-disponible.page.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/agenda-disponible/agenda-disponible.page.html"))["default"],
      styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! ./agenda-disponible.page.scss */
      "./src/app/agenda-disponible/agenda-disponible.page.scss"))["default"]]
    })], AgendaDisponiblePage);
    /***/
  }
}]);
//# sourceMappingURL=agenda-disponible-agenda-disponible-module-es5.js.map