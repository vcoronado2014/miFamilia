function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["inicio-inicio-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/inicio/inicio.page.html":
  /*!*******************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/inicio/inicio.page.html ***!
    \*******************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppInicioInicioPageHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ion-content fullscreen scroll-y=\"false\">\n  <ion-slides pager=\"true\" [options]=\"slideOpts\" #mySlider>\n    <ion-slide>\n      <div class=\"slide\">\n        <div class=\"row\">\n          <img src=\"../../assets/imgs_svg/examenes-de-salud.svg\" alt=\"asistente\" />\n        </div>\n        <div class=\"ion-padding\">\n          <h1 class=\"mt-16 ion-text-center font-title\">INFORMACIÓN SINCRONIZADA CON SU ESTABLECIMIENTO DE SALUD</h1>\n          <p class=\"mt-32 ion-text-center\">REVISE SUS <strong>ANTECEDENTES DE SALUD</strong> Y <strong>RESULTADOS DE EXÁMENES </strong> REGISTRADOS EN EL ESTABLECIMIENTO EN EL QUE SE ATIENDE REGULARMENTE</p>\n          <div class=\"row mt-32\">\n            <button mat-raised-button color=\"primary\" class=\"boton\" (click)=\"slides.slideNext()\">SIGUIENTE</button>\n          </div>          \n        </div>\n      </div>\n    </ion-slide>\n    <ion-slide>\n      <div class=\"slide\">\n        <div class=\"row\">\n          <img src=\"../../assets/imgs_svg/calendario-01.svg\" alt=\"asistente\" />\n        </div>\n        <div class=\"ion-padding\">\n          <h1 class=\"mt-16 ion-text-center font-title\">CALENDARIO CON LOS EVENTOS DE SALUD</h1>\n          <p class=\"mt-32 ion-text-center\">\n            ACCEDA A UN CALENDARIO CON LOS EVENTOS RELEVANTES DE SU RELACIÓN CON SU ESTABLECIMIENTO DE SALUD: \n             <strong> ATENCIONES, RETIRO DE MEDICAMENTOS, RETIRO DE ALIMENTOS Y VACUNAS</strong>\n          </p>\n          <div class=\"row mt-32\">\n            <button mat-raised-button color=\"primary\" class=\"boton\" (click)=\"slides.slideNext()\">SIGUIENTE</button>\n          </div>\n        </div>\n      </div>\n    </ion-slide>\n    <ion-slide>\n      <div class=\"slide\">\n        <div class=\"row\">\n          <img src=\"../../assets/imgs_svg/interconsulta_desactivado.svg\" alt=\"asistente\" />\n        </div>\n        <div class=\"ion-padding\">\n          <h1 class=\"mt-16 ion-text-center font-title\">SEGUIMIENTO DE INTERCONSULTAS</h1>\n          <p class=\"mt-32 ion-text-center\">\n            VISUALICE EL SEGUIMIENTO DE LAS <strong>SOLICITUDES DE INTERCONSULTA </strong> \n            ENTRE SU ESTABLECIMIENTO DE ATENCIÓN PRIMARIA Y EL NIVEL SECUNDARIO (HOSPITALES)\n          </p>\n          <div class=\"row mt-32\">\n            <button mat-raised-button color=\"primary\" class=\"boton\" (click)=\"slides.slideNext()\">SIGUIENTE</button>\n          </div>\n        </div>\n      </div>\n    </ion-slide>\n    <ion-slide>\n      <div class=\"slide\">\n        <div class=\"row\">\n          <img src=\"../../assets/imgs_svg/agendar_citas.svg\" alt=\"asistente\" />\n        </div>\n        <div class=\"ion-padding\">\n          <h1 class=\"mt-16 ion-text-center font-title\">RESERVA DE HORAS</h1>\n          <p class=\"mt-32 ion-text-center\">\n            <strong>RESERVE O CANCELE EN LÍNEA </strong> \n             SUS PROXIMAS CITAS EN EL ESTABLECIMIENTO DE SALUD\n          </p>\n          <div class=\"row mt-32\">\n            <button mat-stroked-button color=\"primary\" class=\"boton\" (click)=\"abrirLogin()\">TENGO CUENTA</button>\n          </div>\n          <div class=\"row mt-32\">\n            <hr>\n          </div>\n          <div class=\"row mt-32\">\n            <button mat-raised-button color=\"primary\" class=\"boton\" (click)=\"abrirPrimerosPasos()\">REGISTRARME</button>\n          </div>\n        </div>\n      </div>\n    </ion-slide>\n\n  </ion-slides>\n</ion-content>\n\n";
    /***/
  },

  /***/
  "./src/app/inicio/inicio.module.ts":
  /*!*****************************************!*\
    !*** ./src/app/inicio/inicio.module.ts ***!
    \*****************************************/

  /*! exports provided: InicioPageModule */

  /***/
  function srcAppInicioInicioModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "InicioPageModule", function () {
      return InicioPageModule;
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


    var _inicio_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./inicio.page */
    "./src/app/inicio/inicio.page.ts");
    /* harmony import */


    var _angular_material_button__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! @angular/material/button */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/button.js");

    var InicioPageModule = function InicioPageModule() {
      _classCallCheck(this, InicioPageModule);
    };

    InicioPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _angular_material_button__WEBPACK_IMPORTED_MODULE_7__["MatButtonModule"], _angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterModule"].forChild([{
        path: '',
        component: _inicio_page__WEBPACK_IMPORTED_MODULE_6__["InicioPage"]
      }])],
      declarations: [_inicio_page__WEBPACK_IMPORTED_MODULE_6__["InicioPage"]]
    })], InicioPageModule);
    /***/
  },

  /***/
  "./src/app/inicio/inicio.page.scss":
  /*!*****************************************!*\
    !*** ./src/app/inicio/inicio.page.scss ***!
    \*****************************************/

  /*! exports provided: default */

  /***/
  function srcAppInicioInicioPageScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".mt-24 {\n  margin-top: 24px;\n}\n\n.mt-16 {\n  margin-top: 16px;\n}\n\n.mt-40 {\n  margin-top: 40px;\n  font: normal normal normal 24px \"Roboto\";\n  letter-spacing: 0px;\n  color: #000000DE;\n}\n\n.mt-32 {\n  margin-top: 32px;\n}\n\n.mt-62 {\n  margin-top: 62px;\n}\n\np {\n  font: normal normal normal 16px \"Roboto\";\n  letter-spacing: 0px;\n  color: #0000008A;\n}\n\n/* slides */\n\nion-slides {\n  height: 100%;\n}\n\n.ml-48 {\n  margin-left: 48px;\n}\n\n.mr-48 {\n  margin-right: 48px;\n}\n\n.img-slide-1 {\n  width: 60%;\n}\n\n.boton {\n  width: 55%;\n}\n\n.font-title {\n  font-size: 1em;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaW5pY2lvL0Y6XFxhcHBfbWlmYW1pbGlhX2dpdFxcbWlGYW1pbGlhX3ByZS9zcmNcXGFwcFxcaW5pY2lvXFxpbmljaW8ucGFnZS5zY3NzIiwic3JjL2FwcC9pbmljaW8vaW5pY2lvLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGdCQUFBO0FDQ0o7O0FEQ0E7RUFDSSxnQkFBQTtBQ0VKOztBREFBO0VBQ0ksZ0JBQUE7RUFDQSx3Q0FBQTtFQUNBLG1CQUFBO0VBQ0EsZ0JBQUE7QUNHSjs7QUREQTtFQUNJLGdCQUFBO0FDSUo7O0FERkE7RUFDSSxnQkFBQTtBQ0tKOztBREhBO0VBQ0ksd0NBQUE7RUFDQSxtQkFBQTtFQUNBLGdCQUFBO0FDTUo7O0FESkEsV0FBQTs7QUFDQTtFQUNJLFlBQUE7QUNPSjs7QURMQTtFQUNJLGlCQUFBO0FDUUo7O0FETkE7RUFDSSxrQkFBQTtBQ1NKOztBRFBBO0VBQ0ksVUFBQTtBQ1VKOztBRFJBO0VBQ0ksVUFBQTtBQ1dKOztBRFRBO0VBQ0ksY0FBQTtBQ1lKIiwiZmlsZSI6InNyYy9hcHAvaW5pY2lvL2luaWNpby5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIubXQtMjR7XHJcbiAgICBtYXJnaW4tdG9wOiAyNHB4O1xyXG59XHJcbi5tdC0xNntcclxuICAgIG1hcmdpbi10b3A6IDE2cHg7XHJcbn1cclxuLm10LTQwe1xyXG4gICAgbWFyZ2luLXRvcDogNDBweDtcclxuICAgIGZvbnQ6IG5vcm1hbCBub3JtYWwgbm9ybWFsIDI0cHggJ1JvYm90byc7XHJcbiAgICBsZXR0ZXItc3BhY2luZzogMHB4O1xyXG4gICAgY29sb3I6ICMwMDAwMDBERTtcclxufVxyXG4ubXQtMzJ7XHJcbiAgICBtYXJnaW4tdG9wOiAzMnB4O1xyXG59XHJcbi5tdC02MntcclxuICAgIG1hcmdpbi10b3A6IDYycHg7XHJcbn1cclxucHtcclxuICAgIGZvbnQ6IG5vcm1hbCBub3JtYWwgbm9ybWFsIDE2cHggJ1JvYm90byc7XHJcbiAgICBsZXR0ZXItc3BhY2luZzogMHB4O1xyXG4gICAgY29sb3I6ICMwMDAwMDA4QTtcclxufVxyXG4vKiBzbGlkZXMgKi9cclxuaW9uLXNsaWRlcyB7XHJcbiAgICBoZWlnaHQ6IDEwMCU7XHJcbn1cclxuLm1sLTQ4e1xyXG4gICAgbWFyZ2luLWxlZnQ6IDQ4cHg7XHJcbn1cclxuLm1yLTQ4e1xyXG4gICAgbWFyZ2luLXJpZ2h0OiA0OHB4O1xyXG59XHJcbi5pbWctc2xpZGUtMXtcclxuICAgIHdpZHRoOiA2MCU7XHJcbn1cclxuLmJvdG9ue1xyXG4gICAgd2lkdGg6IDU1JTtcclxufVxyXG4uZm9udC10aXRsZXtcclxuICAgIGZvbnQtc2l6ZTogMWVtO1xyXG59IiwiLm10LTI0IHtcbiAgbWFyZ2luLXRvcDogMjRweDtcbn1cblxuLm10LTE2IHtcbiAgbWFyZ2luLXRvcDogMTZweDtcbn1cblxuLm10LTQwIHtcbiAgbWFyZ2luLXRvcDogNDBweDtcbiAgZm9udDogbm9ybWFsIG5vcm1hbCBub3JtYWwgMjRweCBcIlJvYm90b1wiO1xuICBsZXR0ZXItc3BhY2luZzogMHB4O1xuICBjb2xvcjogIzAwMDAwMERFO1xufVxuXG4ubXQtMzIge1xuICBtYXJnaW4tdG9wOiAzMnB4O1xufVxuXG4ubXQtNjIge1xuICBtYXJnaW4tdG9wOiA2MnB4O1xufVxuXG5wIHtcbiAgZm9udDogbm9ybWFsIG5vcm1hbCBub3JtYWwgMTZweCBcIlJvYm90b1wiO1xuICBsZXR0ZXItc3BhY2luZzogMHB4O1xuICBjb2xvcjogIzAwMDAwMDhBO1xufVxuXG4vKiBzbGlkZXMgKi9cbmlvbi1zbGlkZXMge1xuICBoZWlnaHQ6IDEwMCU7XG59XG5cbi5tbC00OCB7XG4gIG1hcmdpbi1sZWZ0OiA0OHB4O1xufVxuXG4ubXItNDgge1xuICBtYXJnaW4tcmlnaHQ6IDQ4cHg7XG59XG5cbi5pbWctc2xpZGUtMSB7XG4gIHdpZHRoOiA2MCU7XG59XG5cbi5ib3RvbiB7XG4gIHdpZHRoOiA1NSU7XG59XG5cbi5mb250LXRpdGxlIHtcbiAgZm9udC1zaXplOiAxZW07XG59Il19 */";
    /***/
  },

  /***/
  "./src/app/inicio/inicio.page.ts":
  /*!***************************************!*\
    !*** ./src/app/inicio/inicio.page.ts ***!
    \***************************************/

  /*! exports provided: InicioPage */

  /***/
  function srcAppInicioInicioPageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "InicioPage", function () {
      return InicioPage;
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


    var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _ionic_native_geolocation_ngx__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @ionic-native/geolocation/ngx */
    "./node_modules/@ionic-native/geolocation/__ivy_ngcc__/ngx/index.js");
    /* harmony import */


    var _ionic_native_device_ngx__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @ionic-native/device/ngx */
    "./node_modules/@ionic-native/device/__ivy_ngcc__/ngx/index.js");
    /* harmony import */


    var _ionic_native_app_version_ngx__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @ionic-native/app-version/ngx */
    "./node_modules/@ionic-native/app-version/__ivy_ngcc__/ngx/index.js");
    /* harmony import */


    var _app_services_ServicioUtiles__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ../../app/services/ServicioUtiles */
    "./src/app/services/ServicioUtiles.ts");
    /* harmony import */


    var _app_services_ServicioGeo__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ../../app/services/ServicioGeo */
    "./src/app/services/ServicioGeo.ts");
    /* harmony import */


    var _app_services_ServicioAcceso__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! ../../app/services/ServicioAcceso */
    "./src/app/services/ServicioAcceso.ts");
    /* harmony import */


    var _app_services_ServicioParametrosApp__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! ../../app/services/ServicioParametrosApp */
    "./src/app/services/ServicioParametrosApp.ts"); //servicios
    //ojo que cuando llegamos a la pantalla de registro se esta marcando 
    //en la tabla prg_pre_registro_app el elemento con estado 1 cuando debería seguir en estado 0
    //revisar
    //OJO AL COMPLETAR EL REGISTRO NO SE GUARDA LA FECHA DE NACIMIENTO EN LA TABLA RAP_REGISTR_APP
    //HAY QUE GUARDARLO


    var InicioPage = /*#__PURE__*/function () {
      function InicioPage(navCtrl, toast, modalCtrl, platform, route, router, geolocation, device, appVersion, loading, utiles, servicioGeo, acceso, parametrosApp) {
        var _this = this;

        _classCallCheck(this, InicioPage);

        this.navCtrl = navCtrl;
        this.toast = toast;
        this.modalCtrl = modalCtrl;
        this.platform = platform;
        this.route = route;
        this.router = router;
        this.geolocation = geolocation;
        this.device = device;
        this.appVersion = appVersion;
        this.loading = loading;
        this.utiles = utiles;
        this.servicioGeo = servicioGeo;
        this.acceso = acceso;
        this.parametrosApp = parametrosApp;
        this.cargando = false; //nuevo slide

        this.slideOpts = {
          initialSlide: 0,
          speed: 500
        };
        platform.ready().then(function () {
          //geolocation
          _this.geolocation.getCurrentPosition().then(function (resp) {
            sessionStorage.setItem("latitud", JSON.stringify(resp.coords.latitude));
            sessionStorage.setItem("longitud", JSON.stringify(resp.coords.longitude));
            var lat = sessionStorage.getItem('latitud');
            var lon = sessionStorage.getItem('longitud'); //obtener la info de registro y setear los campos que corresponden

            if (!_this.utiles.isAppOnDevice()) {
              //this.doGeocode(lat, lon);
              console.log('web');

              _this.doGeocode(lat, lon);
            } else {
              //this.doGeocodeNative(lat, lon);
              console.log('native');

              _this.doGeocodeNative(lat, lon);
            }
          })["catch"](function (error) {
            console.log('Error getting location', error);
          });
        });
      }

      _createClass(InicioPage, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var tieneValidacionCU = false; //primero validamos si usa clave unica
          //por ahora esta deshabilitado hasta que alguien quiera
          //implementar, pero será por su cuenta

          if (this.parametrosApp.USA_CLAVE_UNICA()) {
            if (localStorage.getItem('STATE_CLAVE_UNICA')) {
              var stateClaveUnica = localStorage.getItem('STATE_CLAVE_UNICA');
              var objeto = {
                Run: '',
                Fecha: '',
                Tipo: ''
              };

              if (stateClaveUnica != '') {
                //descompnemos el state
                var stateCompleto = this.utiles.desencriptar(stateClaveUnica);
                var arr = stateCompleto.split('|');

                if (arr && arr.length == 3) {
                  objeto.Run = arr[0], objeto.Fecha = arr[1];
                  objeto.Tipo = arr[2];
                }
              }

              tieneValidacionCU = true;
              this.verificaRegistroClaveUnica(stateClaveUnica, objeto);
            }
          }

          this.VerificarRegistro(tieneValidacionCU);
        }
      }, {
        key: "abrirLogin",
        value: function abrirLogin() {
          this.navCtrl.navigateRoot('nuevo-login');
        }
      }, {
        key: "abrirPrimerosPasos",
        value: function abrirPrimerosPasos() {
          var navigationExtras = {
            queryParams: {
              modulo: 'inicio'
            }
          };
          this.navCtrl.navigateRoot(['pre-registro-uno'], navigationExtras);
        }
      }, {
        key: "irARegistro",
        value: function irARegistro(registroIncompleto) {
          //enviar registroIncompleto
          if (registroIncompleto) {
            var navigationExtras = {
              queryParams: {
                usuario: JSON.stringify(registroIncompleto)
              }
            };
            this.navCtrl.navigateRoot(['registro-usuario'], navigationExtras);
          }
        }
      }, {
        key: "abrirValidacionFactor",
        value: function abrirValidacionFactor() {
          this.navCtrl.navigateRoot('validacion-factor');
        }
      }, {
        key: "procesarRespuestaCU",
        value: function procesarRespuestaCU(registros, loader, run, state) {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
            var _this2 = this;

            var estaCorrecto, regCorrecto, regInCorrecto, regIncompleto, regErroneo, loader2;
            return regeneratorRuntime.wrap(function _callee2$(_context2) {
              while (1) {
                switch (_context2.prev = _context2.next) {
                  case 0:
                    estaCorrecto = false;

                    if (!(registros && registros.length > 0)) {
                      _context2.next = 23;
                      break;
                    }

                    regCorrecto = registros.filter(function (p) {
                      return p.Mensaje == 'correcto';
                    });
                    regInCorrecto = registros.filter(function (p) {
                      return p.Mensaje != 'correcto';
                    });

                    if (!(regCorrecto && regCorrecto.length > 0)) {
                      _context2.next = 11;
                      break;
                    }

                    //si esta correcto lo derivamos a la pantalla de registro
                    loader.dismiss(); //pero guardamos un state que indique que esta correcto, así 
                    //podemos capturarlo en la pagina de registro y cuando el registro se complete 
                    //lo eliminamos

                    sessionStorage.setItem('VALIDADO_CLAVE_UNICA', '1'); //debemos setear un objeto de registro con los datos del usuario recuperado

                    regIncompleto = {
                      Activo: 1,
                      Apellidos: regCorrecto[0].Apellidos == null ? '' : regCorrecto[0].Apellidos,
                      Apodo: "",
                      Avatar: "",
                      Comuna: localStorage.getItem("comuna"),
                      CorreoElectronico: "",
                      Eliminado: 0,
                      FechaBaja: "0001-01-01T00:00:00",
                      FechaNacimiento: "0001-01-01T00:00:00",
                      FechaRegistro: "0001-01-01T00:00:00",
                      Id: 0,
                      IdDispositivo: localStorage.getItem("token_dispositivo"),
                      Latitud: sessionStorage.getItem("latitud"),
                      Longitud: sessionStorage.getItem("longitud"),
                      //registro mediante clave unica
                      ModoRegistro: 3,
                      NombreUsuario: "",
                      Nombres: regCorrecto[0].Nombres,
                      Pais: localStorage.getItem("pais"),
                      Password: "",
                      Plataforma: localStorage.getItem("plataforma"),
                      Provincia: localStorage.getItem("provincia"),
                      Run: regCorrecto[0].Run,
                      TelefonoContacto: ''
                    };
                    this.irARegistro(regIncompleto);
                    _context2.next = 21;
                    break;

                  case 11:
                    if (!(regInCorrecto && regInCorrecto.length > 0)) {
                      _context2.next = 21;
                      break;
                    }

                    //si esta incorrecto le informamos al usuario y borramos el registro
                    //de clave unica
                    regErroneo = regInCorrecto[0];
                    localStorage.removeItem('STATE_CLAVE_UNICA');
                    this.utiles.presentToast(regErroneo.Mensaje, 'middle', 3000);
                    loader.dismiss(); //aperación async para eliminar el registro en este caso

                    _context2.next = 18;
                    return this.loading.create({
                      message: 'Descartando...<br>Registro Clave única',
                      duration: 3000
                    });

                  case 18:
                    loader2 = _context2.sent;
                    _context2.next = 21;
                    return loader2.present().then(function () {
                      return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(_this2, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
                        return regeneratorRuntime.wrap(function _callee$(_context) {
                          while (1) {
                            switch (_context.prev = _context.next) {
                              case 0:
                                if (!this.utiles.isAppOnDevice()) {
                                  //web
                                  this.servicioGeo.postValidacionClaveUnica(run, state).subscribe(function (response) {
                                    //aca quedamos, no habría que hacer nada
                                    console.log(response);
                                    loader2.dismiss();
                                  });
                                } else {
                                  //nativa
                                  this.servicioGeo.postValidacionClaveUnicaNative(run, state).then(function (response) {
                                    var responseData = JSON.parse(response.data);
                                    console.log(responseData);
                                    loader2.dismiss();
                                  });
                                }

                              case 1:
                              case "end":
                                return _context.stop();
                            }
                          }
                        }, _callee, this);
                      }));
                    });

                  case 21:
                    _context2.next = 25;
                    break;

                  case 23:
                    this.utiles.presentToast("No se encontró registro CU", "middle", 2000);
                    loader.dismiss();

                  case 25:
                  case "end":
                    return _context2.stop();
                }
              }
            }, _callee2, this);
          }));
        } //este método se debe validar antes ya que puede tener una validación por clave unica

      }, {
        key: "verificaRegistroClaveUnica",
        value: function verificaRegistroClaveUnica(stateClaveUnica, stateObjeto) {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee4() {
            var _this3 = this;

            var loader;
            return regeneratorRuntime.wrap(function _callee4$(_context4) {
              while (1) {
                switch (_context4.prev = _context4.next) {
                  case 0:
                    console.log(stateClaveUnica);
                    console.log(stateObjeto); //hay que traer el registro de clave unica
                    //1. si el registro de clave unica esta correcto, hay que enviarlo al formulario de
                    //   registro para que rellene los datos
                    //1.1. hay que eliminar la variable de localstorage
                    //1.2. hay que eliminar el registro de clave unica
                    //2. si la validación de clave unica salió incorrecto
                    //2.1. hay que informar al usuario.

                    this.cargando = true;
                    _context4.next = 5;
                    return this.loading.create({
                      message: 'Verificando...<br>Registro Clave única',
                      duration: 3000
                    });

                  case 5:
                    loader = _context4.sent;
                    _context4.next = 8;
                    return loader.present().then(function () {
                      return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(_this3, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee3() {
                        var _this4 = this;

                        return regeneratorRuntime.wrap(function _callee3$(_context3) {
                          while (1) {
                            switch (_context3.prev = _context3.next) {
                              case 0:
                                if (!this.utiles.isAppOnDevice()) {
                                  //llamada web
                                  this.servicioGeo.getValidacionCU(stateObjeto.Run, stateClaveUnica).subscribe(function (response) {
                                    //procesar
                                    //this.procesarInfoRun(response, loader);
                                    _this4.procesarRespuestaCU(response, loader, stateObjeto.Run, stateClaveUnica);
                                  });
                                } else {
                                  //llamada nativa
                                  this.servicioGeo.getValidacionCUNative(stateObjeto.Run, stateClaveUnica).then(function (response) {
                                    //procesar JSON.parse(response.data)
                                    var responseData = JSON.parse(response.data);

                                    _this4.procesarRespuestaCU(responseData, loader, stateObjeto.Run, stateClaveUnica);
                                  }, function (error) {
                                    _this4.utiles.presentToast('Ocurrió un al procesar clave única', 'bottom', 4000);
                                  });
                                }

                              case 1:
                              case "end":
                                return _context3.stop();
                            }
                          }
                        }, _callee3, this);
                      }));
                    });

                  case 8:
                  case "end":
                    return _context4.stop();
                }
              }
            }, _callee4, this);
          }));
        } //mecanismo para determinar si el usuario tiene registro

      }, {
        key: "VerificarRegistroRun",
        value: function VerificarRegistroRun(run) {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee6() {
            var _this5 = this;

            var idDispositivo, loader;
            return regeneratorRuntime.wrap(function _callee6$(_context6) {
              while (1) {
                switch (_context6.prev = _context6.next) {
                  case 0:
                    //let f = { UserName: this.usuario, Password: this.password };
                    //this.utiles
                    idDispositivo = this.utiles.entregaIdDispositivo();
                    this.cargando = true;
                    _context6.next = 4;
                    return this.loading.create({
                      message: 'Verificando...<br>Registro Run',
                      duration: 3000
                    });

                  case 4:
                    loader = _context6.sent;
                    _context6.next = 7;
                    return loader.present().then(function () {
                      return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(_this5, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee5() {
                        var _this6 = this;

                        return regeneratorRuntime.wrap(function _callee5$(_context5) {
                          while (1) {
                            switch (_context5.prev = _context5.next) {
                              case 0:
                                if (!this.utiles.isAppOnDevice()) {
                                  //llamada web
                                  this.servicioGeo.getRegistroAppRun(run, idDispositivo).subscribe(function (response) {
                                    //procesar
                                    _this6.procesarInfoRun(response, loader);
                                  });
                                } else {
                                  //llamada nativa
                                  this.servicioGeo.getRegistroAppNativeRun(run, idDispositivo).then(function (response) {
                                    //procesar JSON.parse(response.data)
                                    _this6.procesarInfoRun(JSON.parse(response.data), loader);
                                  }, function (error) {
                                    _this6.utiles.presentToast('Ocurrió un error de obtención identificador', 'bottom', 4000);
                                  });
                                }

                              case 1:
                              case "end":
                                return _context5.stop();
                            }
                          }
                        }, _callee5, this);
                      }));
                    });

                  case 7:
                  case "end":
                    return _context6.stop();
                }
              }
            }, _callee6, this);
          }));
        }
      }, {
        key: "VerificarRegistro",
        value: function VerificarRegistro(tieneRegistroCU) {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee8() {
            var _this7 = this;

            var idDispositivo, loader;
            return regeneratorRuntime.wrap(function _callee8$(_context8) {
              while (1) {
                switch (_context8.prev = _context8.next) {
                  case 0:
                    if (!(tieneRegistroCU == false)) {
                      _context8.next = 8;
                      break;
                    }

                    idDispositivo = this.utiles.entregaIdDispositivo();
                    this.cargando = true;
                    _context8.next = 5;
                    return this.loading.create({
                      message: 'Verificando...<br>Registro',
                      duration: 3000
                    });

                  case 5:
                    loader = _context8.sent;
                    _context8.next = 8;
                    return loader.present().then(function () {
                      return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(_this7, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee7() {
                        var _this8 = this;

                        return regeneratorRuntime.wrap(function _callee7$(_context7) {
                          while (1) {
                            switch (_context7.prev = _context7.next) {
                              case 0:
                                if (!this.utiles.isAppOnDevice()) {
                                  //llamada web
                                  this.servicioGeo.getRegistroApp(idDispositivo).subscribe(function (response) {
                                    //procesar
                                    _this8.procesarInfo(response, loader);
                                  });
                                } else {
                                  //llamada nativa
                                  this.servicioGeo.getRegistroAppNative(idDispositivo).then(function (response) {
                                    //procesar JSON.parse(response.data)
                                    _this8.procesarInfo(JSON.parse(response.data), loader);
                                  }, function (error) {
                                    _this8.utiles.presentToast('Ocurrió un error de obtención identificador', 'bottom', 4000);
                                  });
                                }

                              case 1:
                              case "end":
                                return _context7.stop();
                            }
                          }
                        }, _callee7, this);
                      }));
                    });

                  case 8:
                  case "end":
                    return _context8.stop();
                }
              }
            }, _callee8, this);
          }));
        }
      }, {
        key: "procesarInfoRun",
        value: function procesarInfoRun(registro, loader) {
          console.log(registro);

          if (registro == null) {
            //no tiene registro, hay que dejarlo acá
            console.log('no tiene registro'); //limpiamos local storage

            this.limpiarRegistro();
            loader.dismiss();
          } else {
            //pasa a la pantalla login solo si tiene sus datos completos
            var tieneCorreo = !(registro.CorreoElectronico == null || registro.CorreoElectronico == "" || registro.CorreoElectronico == undefined);
            var tienePassword = !(registro.Password == null || registro.Password == "" || registro.Password == undefined);
            var tieneRun = !(registro.Run == null || registro.Run == "" || registro.Run == undefined);
            var tieneUsuario = !(registro.NombreUsuario == null || registro.NombreUsuario == "" || registro.NombreUsuario == undefined);

            if (tieneCorreo && tienePassword && tieneRun && tieneUsuario) {
              //correcto se va al login
              loader.dismiss();
              this.abrirLogin();
            } else {
              loader.dismiss();
              this.limpiarRegistro();
            }
          }
        }
      }, {
        key: "procesarInfo",
        value: function procesarInfo(registro, loader) {
          console.log(registro);

          if (registro == null) {
            //no tiene registro, hay que dejarlo acá
            console.log('no tiene registro'); //limpiamos local storage

            this.limpiarRegistro();
            loader.dismiss();
            var tieneRegistroPendiente = this.validaPreRegistro();

            if (tieneRegistroPendiente) {
              //si tiene registro pendiente se envía a la página de autentificación
              this.abrirValidacionFactor();
            }
          } else {
            //pasa a la pantalla login solo si tiene sus datos completos
            var tieneCorreo = !(registro.CorreoElectronico == null || registro.CorreoElectronico == "" || registro.CorreoElectronico == undefined);
            var tienePassword = !(registro.Password == null || registro.Password == "" || registro.Password == undefined);
            var tieneRun = !(registro.Run == null || registro.Run == "" || registro.Run == undefined);
            var tieneUsuario = !(registro.NombreUsuario == null || registro.NombreUsuario == "" || registro.NombreUsuario == undefined);

            if (tieneCorreo && tienePassword && tieneRun && tieneUsuario) {
              //correcto se va al login
              loader.dismiss();
              this.abrirLogin();
            } else {
              loader.dismiss(); //lo volvemos a buscar, pero esta vez con el run

              var run = registro.Run;
              this.VerificarRegistroRun(run); //this.limpiarRegistro();
            }
          }
        }
      }, {
        key: "limpiarRegistro",
        value: function limpiarRegistro() {
          localStorage.removeItem("REGISTRO");
          localStorage.removeItem("MI_NOMBRE");
          localStorage.removeItem("MI_RUT");
          localStorage.removeItem("UsuarioAps");
          localStorage.setItem("TIENE_REGISTRO", "false");
        }
      }, {
        key: "doGeocodeNative",
        value: function doGeocodeNative(lat, lon) {
          var _this9 = this;

          //antes para omitir tantas llamadas vamos a buscar la info
          //a local storage comuna region provincia pais
          this.comuna = localStorage.getItem('comuna');
          this.region = localStorage.getItem('region');
          this.provincia = localStorage.getItem('provincia');
          this.pais = localStorage.getItem('pais');

          if (this.comuna && this.pais && this.region && this.provincia) {
            console.log('Datos politicos existentes');
          } else {
            this.servicioGeo.getMapaNative(lat, lon).then(function (response) {
              //console.log(data);
              _this9.utiles.procesarRespuestaMapa(JSON.parse(response.data));
            });
          }
        }
      }, {
        key: "doGeocode",
        value: function doGeocode(lat, lon) {
          var _this10 = this;

          //antes para omitir tantas llamadas vamos a buscar la info
          //a local storage comuna region provincia pais
          this.comuna = localStorage.getItem('comuna');
          this.region = localStorage.getItem('region');
          this.provincia = localStorage.getItem('provincia');
          this.pais = localStorage.getItem('pais');

          if (this.comuna && this.pais && this.region && this.provincia) {
            console.log('Datos politicos existentes');
          } else {
            this.servicioGeo.getMapaWeb(lat, lon).subscribe(function (data) {
              //console.log(data);
              _this10.utiles.procesarRespuestaMapa(data);
            });
          }
        }
      }, {
        key: "procesarRespuestaMapa",
        value: function procesarRespuestaMapa(objeto) {
          var _this11 = this;

          //lo cambiamos a local storage para hacerlo más global
          //y no consultar tantas veces para ocupar la api
          var retorno = false;

          try {
            if (objeto.results && objeto.results[0]) {
              if (objeto.results[0].address_components && objeto.results[0].address_components.length > 0) {
                //ahora recorremos los elementos
                objeto.results[0].address_components.forEach(function (element) {
                  var busquedaCom = element.types.find(function (ele) {
                    return ele == 'administrative_area_level_3';
                  });

                  if (busquedaCom) {
                    _this11.comuna = element.long_name;
                    localStorage.setItem('comuna', _this11.comuna);
                  }

                  var busquedaReg = element.types.find(function (ele) {
                    return ele == 'administrative_area_level_1';
                  });

                  if (busquedaReg) {
                    _this11.region = element.long_name;
                    localStorage.setItem('region', _this11.region);
                  }

                  var busquedaProv = element.types.find(function (ele) {
                    return ele == 'administrative_area_level_2';
                  });

                  if (busquedaProv) {
                    _this11.provincia = element.long_name;
                    localStorage.setItem('provincia', _this11.provincia);
                  }

                  var busquedaPais = element.types.find(function (ele) {
                    return ele == 'country';
                  });

                  if (busquedaPais) {
                    _this11.pais = element.long_name;
                    localStorage.setItem('pais', _this11.pais);
                  }
                });
              }
            }

            retorno = true;
          } catch (error) {
            console.log(error);
          }

          return retorno; //console.log(this.pais + ' ' + this.region);
        } //verificacion de pre-registro

      }, {
        key: "validaPreRegistro",
        value: function validaPreRegistro() {
          var retorno = false;

          if (localStorage.getItem('PRE-REGISTRO')) {
            this.preRegistro = JSON.parse(localStorage.getItem('PRE-REGISTRO'));

            if (this.preRegistro.Id > 0) {
              retorno = true;
            }
          }

          return retorno;
        }
      }]);

      return InicioPage;
    }();

    InicioPage.ctorParameters = function () {
      return [{
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ToastController"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ModalController"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["Platform"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]
      }, {
        type: _ionic_native_geolocation_ngx__WEBPACK_IMPORTED_MODULE_4__["Geolocation"]
      }, {
        type: _ionic_native_device_ngx__WEBPACK_IMPORTED_MODULE_5__["Device"]
      }, {
        type: _ionic_native_app_version_ngx__WEBPACK_IMPORTED_MODULE_6__["AppVersion"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["LoadingController"]
      }, {
        type: _app_services_ServicioUtiles__WEBPACK_IMPORTED_MODULE_7__["ServicioUtiles"]
      }, {
        type: _app_services_ServicioGeo__WEBPACK_IMPORTED_MODULE_8__["ServicioGeo"]
      }, {
        type: _app_services_ServicioAcceso__WEBPACK_IMPORTED_MODULE_9__["ServicioAcceso"]
      }, {
        type: _app_services_ServicioParametrosApp__WEBPACK_IMPORTED_MODULE_10__["ServicioParametrosApp"]
      }];
    };

    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('mySlider', {
      "static": true
    })], InicioPage.prototype, "slides", void 0);
    InicioPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-inicio',
      template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! raw-loader!./inicio.page.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/inicio/inicio.page.html"))["default"],
      styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! ./inicio.page.scss */
      "./src/app/inicio/inicio.page.scss"))["default"]]
    })], InicioPage);
    /***/
  }
}]);
//# sourceMappingURL=inicio-inicio-module-es5.js.map