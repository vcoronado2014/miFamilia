function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["contactabilidad-contactabilidad-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/contactabilidad/contactabilidad.page.html":
  /*!*************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/contactabilidad/contactabilidad.page.html ***!
    \*************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppContactabilidadContactabilidadPageHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ion-header class=\"back-app\">\n  <ion-toolbar color=\"primary\" mode=\"md\">\n    <ion-buttons slot=\"start\">\n      <ion-back-button defaultHref=\"/familia\" class=\"fcw\"></ion-back-button>\n    </ion-buttons>\n    <ion-title class=\"fcw\">Contactabilidad</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <app-progress [mostrar]=\"estaCargando\" [titulo]=\"tituloProgress\"></app-progress>\n  <div [hidden]=\"estaCargando\" class=\"ion-padding\" style=\"margin-top: 20px;\">\n    <form [formGroup]=\"forma\" novalidate>\n      <ion-row>\n        <mat-form-field appearance=\"outline\" style=\"width: 100%;\">\n          <mat-label>Nombre social</mat-label>\n          <input matInput placeholder=\"Nombre social\" formControlName=\"nombreSocial\" name=\"nombreSocial\" required>\n          <mat-error [hidden]=\"!(f.nombreSocial.errors && f.nombreSocial.errors.required)\">Nombre social requerido</mat-error>\n          <mat-hint align=\"start\"><strong>Nombre por el cual te sientes identificado</strong> </mat-hint>\n        </mat-form-field>\n      </ion-row>\n      <h3 class=\"mt-40\">Datos de contacto</h3>\n      <ion-row>\n        <mat-form-field appearance=\"outline\" style=\"width: 100%;\">\n          <mat-label>Correo electrónico</mat-label>\n          <input matInput placeholder=\"ejemplo@gmail.com\" formControlName=\"email\" name=\"email\" required>\n          <mat-error [hidden]=\"!(f.email.errors && f.email.errors.required)\">Correo requerido</mat-error>\n          <mat-error [hidden]=\"!(f.email.errors && f.email.errors.pattern)\">Correo inválido</mat-error>\n        </mat-form-field>\n      </ion-row>\n\n      <ion-row>\n        <mat-form-field appearance=\"outline\" style=\"width: 100%;\">\n          <mat-label>Teléfono</mat-label>\n          <input matInput placeholder=\"+569XXXXXXXX\" formControlName=\"telefono\" name=\"telefono\">\n          <mat-error [hidden]=\"!(f.telefono.errors && f.telefono.errors.pattern)\">Teléfono inválido</mat-error>\n        </mat-form-field>\n      </ion-row>\n      <!-- boton de registrarse -->\n      <ion-row>\n        <button  [disabled]=\"forma.invalid\" class=\"button-registrarse\" (click)=\"onSumbit()\" mat-raised-button\n          color=\"accent\">TERMINAR</button>\n      </ion-row>\n    </form>\n  \n  </div>\n</ion-content>\n";
    /***/
  },

  /***/
  "./src/app/contactabilidad/contactabilidad.module.ts":
  /*!***********************************************************!*\
    !*** ./src/app/contactabilidad/contactabilidad.module.ts ***!
    \***********************************************************/

  /*! exports provided: ContactabilidadPageModule */

  /***/
  function srcAppContactabilidadContactabilidadModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ContactabilidadPageModule", function () {
      return ContactabilidadPageModule;
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


    var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
    /* harmony import */


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/material/form-field */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/form-field.js");
    /* harmony import */


    var _angular_material_select__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @angular/material/select */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/select.js");
    /* harmony import */


    var _angular_material_input__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! @angular/material/input */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/input.js");
    /* harmony import */


    var _angular_material_button__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! @angular/material/button */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/button.js");
    /* harmony import */


    var _angular_material_icon__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! @angular/material/icon */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/icon.js");
    /* harmony import */


    var _contactabilidad_page__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! ./contactabilidad.page */
    "./src/app/contactabilidad/contactabilidad.page.ts");
    /* harmony import */


    var _components_components_module__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! ../components/components.module */
    "./src/app/components/components.module.ts");

    var ContactabilidadPageModule = function ContactabilidadPageModule() {
      _classCallCheck(this, ContactabilidadPageModule);
    };

    ContactabilidadPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonicModule"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_5__["MatFormFieldModule"], _angular_material_select__WEBPACK_IMPORTED_MODULE_6__["MatSelectModule"], _angular_material_input__WEBPACK_IMPORTED_MODULE_7__["MatInputModule"], _angular_material_button__WEBPACK_IMPORTED_MODULE_8__["MatButtonModule"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_9__["MatIconModule"], _components_components_module__WEBPACK_IMPORTED_MODULE_11__["ComponentsModule"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild([{
        path: '',
        component: _contactabilidad_page__WEBPACK_IMPORTED_MODULE_10__["ContactabilidadPage"]
      }])],
      declarations: [_contactabilidad_page__WEBPACK_IMPORTED_MODULE_10__["ContactabilidadPage"]]
    })], ContactabilidadPageModule);
    /***/
  },

  /***/
  "./src/app/contactabilidad/contactabilidad.page.scss":
  /*!***********************************************************!*\
    !*** ./src/app/contactabilidad/contactabilidad.page.scss ***!
    \***********************************************************/

  /*! exports provided: default */

  /***/
  function srcAppContactabilidadContactabilidadPageScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".mt-32 {\n  margin-top: 32px;\n}\n\n.mt-24 {\n  margin-top: 24px;\n}\n\n.mt-80 {\n  margin-top: 5em;\n}\n\n.mt-40 {\n  margin-top: 2.5em;\n}\n\n.mt-36 {\n  margin-top: 2.25em;\n}\n\n.mt-52 {\n  margin-top: 3.25em;\n}\n\n.texto-1 {\n  font-size: 1em;\n  color: #000000DE;\n}\n\n.button-registrarse {\n  width: 80%;\n  margin-left: 10%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29udGFjdGFiaWxpZGFkL0Y6XFxhcHBfbWlmYW1pbGlhX2dpdFxcbWlGYW1pbGlhX3ByZS9zcmNcXGFwcFxcY29udGFjdGFiaWxpZGFkXFxjb250YWN0YWJpbGlkYWQucGFnZS5zY3NzIiwic3JjL2FwcC9jb250YWN0YWJpbGlkYWQvY29udGFjdGFiaWxpZGFkLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGdCQUFBO0FDQ0o7O0FEQ0E7RUFDSSxnQkFBQTtBQ0VKOztBREFBO0VBQ0ksZUFBQTtBQ0dKOztBRERBO0VBQ0ksaUJBQUE7QUNJSjs7QURGQTtFQUNJLGtCQUFBO0FDS0o7O0FESEE7RUFDSSxrQkFBQTtBQ01KOztBREpBO0VBQ0ksY0FBQTtFQUNBLGdCQUFBO0FDT0o7O0FESkE7RUFDSSxVQUFBO0VBQ0EsZ0JBQUE7QUNPSiIsImZpbGUiOiJzcmMvYXBwL2NvbnRhY3RhYmlsaWRhZC9jb250YWN0YWJpbGlkYWQucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLm10LTMye1xyXG4gICAgbWFyZ2luLXRvcDogMzJweDtcclxufVxyXG4ubXQtMjR7XHJcbiAgICBtYXJnaW4tdG9wOiAyNHB4O1xyXG59XHJcbi5tdC04MHtcclxuICAgIG1hcmdpbi10b3A6IDVlbTtcclxufVxyXG4ubXQtNDB7XHJcbiAgICBtYXJnaW4tdG9wOiAyLjVlbTtcclxufVxyXG4ubXQtMzZ7XHJcbiAgICBtYXJnaW4tdG9wOiAyLjI1ZW07XHJcbn1cclxuLm10LTUye1xyXG4gICAgbWFyZ2luLXRvcDogMy4yNWVtO1xyXG59XHJcbi50ZXh0by0xe1xyXG4gICAgZm9udC1zaXplOiAxZW07XHJcbiAgICBjb2xvcjogIzAwMDAwMERFO1xyXG4gICAgXHJcbn1cclxuLmJ1dHRvbi1yZWdpc3RyYXJzZXtcclxuICAgIHdpZHRoOiA4MCU7XHJcbiAgICBtYXJnaW4tbGVmdDogMTAlO1xyXG59IiwiLm10LTMyIHtcbiAgbWFyZ2luLXRvcDogMzJweDtcbn1cblxuLm10LTI0IHtcbiAgbWFyZ2luLXRvcDogMjRweDtcbn1cblxuLm10LTgwIHtcbiAgbWFyZ2luLXRvcDogNWVtO1xufVxuXG4ubXQtNDAge1xuICBtYXJnaW4tdG9wOiAyLjVlbTtcbn1cblxuLm10LTM2IHtcbiAgbWFyZ2luLXRvcDogMi4yNWVtO1xufVxuXG4ubXQtNTIge1xuICBtYXJnaW4tdG9wOiAzLjI1ZW07XG59XG5cbi50ZXh0by0xIHtcbiAgZm9udC1zaXplOiAxZW07XG4gIGNvbG9yOiAjMDAwMDAwREU7XG59XG5cbi5idXR0b24tcmVnaXN0cmFyc2Uge1xuICB3aWR0aDogODAlO1xuICBtYXJnaW4tbGVmdDogMTAlO1xufSJdfQ== */";
    /***/
  },

  /***/
  "./src/app/contactabilidad/contactabilidad.page.ts":
  /*!*********************************************************!*\
    !*** ./src/app/contactabilidad/contactabilidad.page.ts ***!
    \*********************************************************/

  /*! exports provided: ContactabilidadPage */

  /***/
  function srcAppContactabilidadContactabilidadPageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ContactabilidadPage", function () {
      return ContactabilidadPage;
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


    var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _app_services_ServicioUtiles__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ../../app/services/ServicioUtiles */
    "./src/app/services/ServicioUtiles.ts");
    /* harmony import */


    var _app_services_ServicioGeo__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ../../app/services/ServicioGeo */
    "./src/app/services/ServicioGeo.ts");
    /* harmony import */


    var _app_services_ServicioAcceso__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ../../app/services/ServicioAcceso */
    "./src/app/services/ServicioAcceso.ts");
    /* harmony import */


    var _app_services_ServicioParametrosApp__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ../../app/services/ServicioParametrosApp */
    "./src/app/services/ServicioParametrosApp.ts");
    /* harmony import */


    var moment__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! moment */
    "./node_modules/moment/moment.js");
    /* harmony import */


    var moment__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_9__); //servicios


    var ContactabilidadPage = /*#__PURE__*/function () {
      function ContactabilidadPage(navCtrl, utiles, servicioGeo, loading, formBuilder, activatedRoute, router, acceso, parametrosApp, alertController) {
        _classCallCheck(this, ContactabilidadPage);

        this.navCtrl = navCtrl;
        this.utiles = utiles;
        this.servicioGeo = servicioGeo;
        this.loading = loading;
        this.formBuilder = formBuilder;
        this.activatedRoute = activatedRoute;
        this.router = router;
        this.acceso = acceso;
        this.parametrosApp = parametrosApp;
        this.alertController = alertController; //para validar

        this.patternOnlyLetter = "[a-zA-Z\xC0-\xFF\xF1\xD1]+(s*[a-zA-Z\xC0-\xFF\xF1\xD1]*)*[a-zA-Z\xC0-\xFF\xF1\xD1 ]+$";
        this.expCelular = /^(\+?56)?(\s?)(0?9)(\s?)[9876543]\d{7}$/gm;
        this.expPassword = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{4,8}$/gm;
        this.expEmail = /^[^@\s]+@[^@\s]+\.[^@\s]+$/gm; //variable para obtener el registro del usuario

        this.registro = null;
        this.estaCargando = false;
        this.tituloProgress = '';
      }

      _createClass(ContactabilidadPage, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          moment__WEBPACK_IMPORTED_MODULE_9__["locale"]('es'); //obtenemos el registro

          if (localStorage.getItem('REGISTRO')) {
            this.registro = JSON.parse(localStorage.getItem('REGISTRO'));
          } //cargamos la forma


          this.cargarForma();
        }
      }, {
        key: "cargarForma",
        value: function cargarForma() {
          this.forma = new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormGroup"]({
            'nombreSocial': new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required]),
            'email': new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].pattern(this.expEmail)]),
            'telefono': new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].pattern(this.expCelular)])
          }); //precargar los datos del usuario.

          if (this.registro && this.registro != null) {
            this.forma.setValue({
              nombreSocial: this.registro.Apodo,
              email: this.registro.CorreoElectronico,
              telefono: this.registro.TelefonoContacto ? this.registro.TelefonoContacto : ''
            });
          }
        }
      }, {
        key: "onSumbit",
        value: function onSumbit() {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
            var _this = this;

            var loader, email, nombreSocial, telefono, run;
            return regeneratorRuntime.wrap(function _callee2$(_context2) {
              while (1) {
                switch (_context2.prev = _context2.next) {
                  case 0:
                    _context2.next = 2;
                    return this.loading.create({
                      cssClass: 'loading-vacio',
                      showBackdrop: false,
                      spinner: null,
                      //message: 'Cargando...<br>tipos de atención',
                      duration: 2000
                    });

                  case 2:
                    loader = _context2.sent;
                    this.estaCargando = true;
                    this.tituloProgress = 'Actualizando datos de contacto'; //variables a enviar

                    email = this.forma.controls.email ? this.forma.controls.email.value : '';
                    nombreSocial = this.forma.controls.nombreSocial ? this.forma.controls.nombreSocial.value : '';
                    telefono = this.forma.controls.telefono ? this.forma.controls.telefono.value : '';
                    run = this.registro.Run.replace('-', '');
                    _context2.next = 11;
                    return loader.present().then(function () {
                      return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(_this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
                        var _this2 = this;

                        return regeneratorRuntime.wrap(function _callee$(_context) {
                          while (1) {
                            switch (_context.prev = _context.next) {
                              case 0:
                                if (!this.utiles.isAppOnDevice()) {
                                  //llamada web
                                  this.servicioGeo.postInformarPersona(run, nombreSocial, email, telefono, 'MOVIL_FICHA_FAMILIAR').subscribe(function (response) {
                                    //procesar respuesta
                                    var datos = response;

                                    _this2.procesarRespuesta(datos, loader, nombreSocial, telefono);
                                  });
                                } else {
                                  //llamada nativa
                                  this.servicioGeo.postInformarPersonaNative(run, nombreSocial, email, telefono, 'MOVIL_FICHA_FAMILIAR').then(function (response) {
                                    //procesar respuesta
                                    var datos = JSON.parse(response.data);

                                    _this2.procesarRespuesta(datos, loader, nombreSocial, telefono);
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

                  case 11:
                  case "end":
                    return _context2.stop();
                }
              }
            }, _callee2, this);
          }));
        }
      }, {
        key: "procesarRespuesta",
        value: function procesarRespuesta(data, loading, nombreSocial, telefono) {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee4() {
            var _this3 = this;

            var correctoRayen, correctoRyf, fechaNac, loader;
            return regeneratorRuntime.wrap(function _callee4$(_context4) {
              while (1) {
                switch (_context4.prev = _context4.next) {
                  case 0:
                    if (!data) {
                      _context4.next = 48;
                      break;
                    }

                    if (!data.InformarPersonaResponse) {
                      _context4.next = 42;
                      break;
                    }

                    if (!data.InformarPersonaResponse.RespuestaBase) {
                      _context4.next = 36;
                      break;
                    }

                    //acá trae info de rayen y de ryf
                    //ojo que debemos actualizar igual el registro, al menos con el telefono y el apodo
                    //ya que el email es de autentificacion y no se puede cambiar
                    correctoRayen = false;
                    correctoRyf = false;

                    if (data.InformarPersonaResponse.RespuestaBase.Rayen) {
                      if (data.InformarPersonaResponse.RespuestaBase.Rayen.Descripcion.toUpperCase() == 'TRANSACCIÓN EXITOSA') {
                        correctoRayen = true;
                        console.log('actualizado rayen');
                      }
                    }

                    if (data.InformarPersonaResponse.RespuestaBase.Ryf) {
                      if (data.InformarPersonaResponse.RespuestaBase.Ryf.Descripcion.toUpperCase() == 'TRANSACCIÓN EXITOSA') {
                        correctoRyf = true;
                        console.log('actualizado ryf');
                      }
                    }

                    if (!(correctoRyf || correctoRayen)) {
                      _context4.next = 32;
                      break;
                    }

                    this.estaCargando = false;
                    this.tituloProgress = '';
                    loading.dismiss(); //this.utiles.presentToast('Datos actualizados correctamente', 'bottom', 2000);

                    fechaNac = moment__WEBPACK_IMPORTED_MODULE_9__();

                    if (this.registro.FechaNacimiento) {
                      fechaNac = moment__WEBPACK_IMPORTED_MODULE_9__(this.registro.FechaNacimiento);
                    } //ahora actualizar el registro


                    this.registro.Apodo = nombreSocial;
                    this.registro.TelefonoContacto = telefono; //valores por defecto

                    this.registro.Id = this.registro.Id.toString();
                    this.registro.Activo = this.registro.Activo.toString();
                    this.registro.DiaNacimiento = fechaNac.date().toString();
                    this.registro.MesNacimiento = (fechaNac.month() + 1).toString();
                    this.registro.AnioNacimiento = fechaNac.year().toString();
                    this.registro.Eliminado = this.registro.Eliminado.toString();
                    this.registro.ModoRegistro = this.registro.ModoRegistro.toString();
                    this.registro.FechaBaja = null;
                    _context4.next = 25;
                    return this.loading.create({
                      cssClass: 'loading-vacio',
                      showBackdrop: false,
                      spinner: null,
                      duration: 2000
                    });

                  case 25:
                    loader = _context4.sent;
                    this.estaCargando = true;
                    this.tituloProgress = 'Actualizando datos de registro';
                    _context4.next = 30;
                    return loader.present().then(function () {
                      return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(_this3, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee3() {
                        var _this4 = this;

                        return regeneratorRuntime.wrap(function _callee3$(_context3) {
                          while (1) {
                            switch (_context3.prev = _context3.next) {
                              case 0:
                                if (!this.utiles.isAppOnDevice()) {
                                  //llamada web
                                  this.servicioGeo.postRegistroFamilia(this.registro).subscribe(function (data) {
                                    var respuesta = data;
                                    localStorage.setItem('REGISTRO', JSON.stringify(respuesta));
                                    loader.dismiss();
                                    _this4.estaCargando = false;

                                    _this4.utiles.presentToast('Datos actualizados correctamente', 'bottom', 2000);
                                  }, function (error) {
                                    loader.dismiss();
                                    _this4.estaCargando = false;

                                    _this4.utiles.presentToast(error, 'bottom', 2000);
                                  });
                                } else {
                                  //llamada nativa
                                  this.servicioGeo.postRegistroFamiliaNative(this.registro).then(function (data) {
                                    var respuesta = JSON.parse(data.data);
                                    localStorage.setItem('REGISTRO', JSON.stringify(respuesta));
                                    loader.dismiss();
                                    _this4.estaCargando = false;

                                    _this4.utiles.presentToast('Datos actualizados correctamente', 'bottom', 2000);
                                  })["catch"](function (error) {
                                    loader.dismiss();
                                    _this4.estaCargando = false;

                                    _this4.utiles.presentToast(error, 'bottom', 2000);
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

                  case 30:
                    _context4.next = 34;
                    break;

                  case 32:
                    this.estaCargando = false;
                    loading.dismiss();

                  case 34:
                    _context4.next = 40;
                    break;

                  case 36:
                    this.estaCargando = false;
                    loading.dismiss();
                    this.tituloProgress = '';
                    this.utiles.presentToast('Error al actualizar los datos', 'bottom', 3000);

                  case 40:
                    _context4.next = 46;
                    break;

                  case 42:
                    this.estaCargando = false;
                    loading.dismiss();
                    this.tituloProgress = '';
                    this.utiles.presentToast('Error al actualizar los datos', 'bottom', 3000);

                  case 46:
                    _context4.next = 52;
                    break;

                  case 48:
                    this.estaCargando = false;
                    loading.dismiss();
                    this.utiles.presentToast('Error al actualizar los datos', 'bottom', 3000);
                    this.tituloProgress = '';

                  case 52:
                  case "end":
                    return _context4.stop();
                }
              }
            }, _callee4, this);
          }));
        }
      }, {
        key: "f",
        get: function get() {
          return this.forma.controls;
        }
      }]);

      return ContactabilidadPage;
    }();

    ContactabilidadPage.ctorParameters = function () {
      return [{
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"]
      }, {
        type: _app_services_ServicioUtiles__WEBPACK_IMPORTED_MODULE_5__["ServicioUtiles"]
      }, {
        type: _app_services_ServicioGeo__WEBPACK_IMPORTED_MODULE_6__["ServicioGeo"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["LoadingController"]
      }, {
        type: _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]
      }, {
        type: _app_services_ServicioAcceso__WEBPACK_IMPORTED_MODULE_7__["ServicioAcceso"]
      }, {
        type: _app_services_ServicioParametrosApp__WEBPACK_IMPORTED_MODULE_8__["ServicioParametrosApp"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["AlertController"]
      }];
    };

    ContactabilidadPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-contactabilidad',
      template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! raw-loader!./contactabilidad.page.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/contactabilidad/contactabilidad.page.html"))["default"],
      styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! ./contactabilidad.page.scss */
      "./src/app/contactabilidad/contactabilidad.page.scss"))["default"]]
    })], ContactabilidadPage);
    /***/
  }
}]);
//# sourceMappingURL=contactabilidad-contactabilidad-module-es5.js.map