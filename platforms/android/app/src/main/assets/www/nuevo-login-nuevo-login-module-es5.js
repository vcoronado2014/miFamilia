function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["nuevo-login-nuevo-login-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/nuevo-login/nuevo-login.page.html":
  /*!*****************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/nuevo-login/nuevo-login.page.html ***!
    \*****************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppNuevoLoginNuevoLoginPageHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ion-content class=\"ion-padding\">\n  <app-progress [mostrar]=\"estaCargando\" titulo=\"Estamos ingresando a la app\"></app-progress>\n\n  <div [hidden]=\"estaCargando\" class=\"row mt-24\">\n    <img src=\"../../assets/imgs_nuevas/login.png\" alt=\"asistente\"/>\n  </div>\n  <form [hidden]=\"estaCargando\" [formGroup]=\"forma\" novalidate>\n    <ion-row class=\"ion-no-margin ion-no-padding mt-80\">\n      <!-- solo para enrolamiento -->\n      <mat-form-field appearance=\"outline\" style=\"width: 100%;\" [hidden]=\"usaEnrolamiento == false\">\n        <mat-label>Run</mat-label>\n        <input matInput placeholder=\"125458524\" formControlName=\"run\" name=\"run\">\n        <mat-error [hidden]=\"usaEnrolamiento == false\">Run requerido</mat-error>\n      </mat-form-field>\n\n      <mat-form-field appearance=\"outline\" style=\"width: 100%;\" [hidden]=\"usaEnrolamiento\">\n        <mat-label>Correo electrónico</mat-label>\n        <input matInput placeholder=\"ejemplo@gmail.com\" formControlName=\"email\" name=\"email\">\n        <mat-error [hidden]=\"usaEnrolamiento\">Correo requerido</mat-error>\n        <mat-error [hidden]=\"usaEnrolamiento\">Correo inválido</mat-error>\n      </mat-form-field>\n  \n      <mat-form-field appearance=\"outline\" style=\"width: 100%;\">\n        <mat-label>Contraseña</mat-label>\n        <input matInput placeholder=\"Clave\" type=\"password\" name=\"clave\" formControlName=\"clave\" required>\n        <mat-error [hidden]=\"!(f.clave.errors && f.clave.errors.required)\">Clave requerida</mat-error>\n      </mat-form-field>\n    </ion-row>\n    <ion-row class=\"ion-no-padding ion-no-margin mt-40\">\n      <button mat-raised-button color=\"primary\" style=\"width: 90%; margin-left: 5%; height:36px;\" (click)=\"onSubmit()\">INICIAR SESION</button>\n    </ion-row>\n  </form>\n  <ion-row [hidden]=\"estaCargando\" class=\"mt-36\" [hidden]=\"usaEnrolamiento\">\n    <a mat-button routerLink=\".\" color=\"primary\" class=\"ion-text-center\" style=\"width: 100%;\" (click)=\"irRecuperarClave()\">¿Olvidaste tu contraseña?</a>\n  </ion-row>\n  <ion-grid [hidden]=\"estaCargando\" class=\"ion-no-padding mt-36\">\n    <ion-row>\n      <ion-col class=\"ion-text-center texto-1\" style=\"margin-top:8px;\">\n        ¿No tienes cuenta?\n      </ion-col>\n      <ion-col>\n        <button (click)=\"abrirAsistente()\" mat-button color=\"primary\">REGISTRATE</button>\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n\n</ion-content>\n";
    /***/
  },

  /***/
  "./src/app/nuevo-login/nuevo-login.module.ts":
  /*!***************************************************!*\
    !*** ./src/app/nuevo-login/nuevo-login.module.ts ***!
    \***************************************************/

  /*! exports provided: NuevoLoginPageModule */

  /***/
  function srcAppNuevoLoginNuevoLoginModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "NuevoLoginPageModule", function () {
      return NuevoLoginPageModule;
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


    var _nuevo_login_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./nuevo-login.page */
    "./src/app/nuevo-login/nuevo-login.page.ts");
    /* harmony import */


    var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! @angular/material/form-field */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/form-field.js");
    /* harmony import */


    var _angular_material_select__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! @angular/material/select */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/select.js");
    /* harmony import */


    var _angular_material_input__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! @angular/material/input */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/input.js");
    /* harmony import */


    var _angular_material_button__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! @angular/material/button */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/button.js");
    /* harmony import */


    var _angular_material_icon__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! @angular/material/icon */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/icon.js");
    /* harmony import */


    var _components_components_module__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
    /*! ../components/components.module */
    "./src/app/components/components.module.ts");

    var NuevoLoginPageModule = function NuevoLoginPageModule() {
      _classCallCheck(this, NuevoLoginPageModule);
    };

    NuevoLoginPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_7__["MatFormFieldModule"], _angular_material_select__WEBPACK_IMPORTED_MODULE_8__["MatSelectModule"], _angular_material_input__WEBPACK_IMPORTED_MODULE_9__["MatInputModule"], _angular_material_button__WEBPACK_IMPORTED_MODULE_10__["MatButtonModule"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_11__["MatIconModule"], _components_components_module__WEBPACK_IMPORTED_MODULE_12__["ComponentsModule"], _angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterModule"].forChild([{
        path: '',
        component: _nuevo_login_page__WEBPACK_IMPORTED_MODULE_6__["NuevoLoginPage"]
      }])],
      declarations: [_nuevo_login_page__WEBPACK_IMPORTED_MODULE_6__["NuevoLoginPage"]]
    })], NuevoLoginPageModule);
    /***/
  },

  /***/
  "./src/app/nuevo-login/nuevo-login.page.scss":
  /*!***************************************************!*\
    !*** ./src/app/nuevo-login/nuevo-login.page.scss ***!
    \***************************************************/

  /*! exports provided: default */

  /***/
  function srcAppNuevoLoginNuevoLoginPageScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".mt-32 {\n  margin-top: 32px;\n}\n\n.mt-24 {\n  margin-top: 24px;\n}\n\n.mt-80 {\n  margin-top: 5em;\n}\n\n.mt-40 {\n  margin-top: 2.5em;\n}\n\n.mt-36 {\n  margin-top: 2.25em;\n}\n\n.texto-1 {\n  font-size: 0.875em;\n  color: #0000008A;\n}\n\n.example-container .mat-form-field + .mat-form-field {\n  margin-left: 8px;\n}\n\n.example-right-align {\n  text-align: right;\n}\n\ninput.example-right-align::-webkit-outer-spin-button,\ninput.example-right-align::-webkit-inner-spin-button {\n  display: none;\n}\n\ninput.example-right-align {\n  -moz-appearance: textfield;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbnVldm8tbG9naW4vRjpcXGFwcF9taWZhbWlsaWFfZ2l0XFxtaUZhbWlsaWFfcHJlL3NyY1xcYXBwXFxudWV2by1sb2dpblxcbnVldm8tbG9naW4ucGFnZS5zY3NzIiwic3JjL2FwcC9udWV2by1sb2dpbi9udWV2by1sb2dpbi5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxnQkFBQTtBQ0NKOztBRENBO0VBQ0ksZ0JBQUE7QUNFSjs7QURBQTtFQUNJLGVBQUE7QUNHSjs7QUREQTtFQUNJLGlCQUFBO0FDSUo7O0FERkE7RUFDSSxrQkFBQTtBQ0tKOztBREhBO0VBQ0ksa0JBQUE7RUFDQSxnQkFBQTtBQ01KOztBREhBO0VBQ0ksZ0JBQUE7QUNNSjs7QURIRTtFQUNFLGlCQUFBO0FDTUo7O0FESEU7O0VBRUUsYUFBQTtBQ01KOztBREhFO0VBQ0UsMEJBQUE7QUNNSiIsImZpbGUiOiJzcmMvYXBwL251ZXZvLWxvZ2luL251ZXZvLWxvZ2luLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5tdC0zMntcclxuICAgIG1hcmdpbi10b3A6IDMycHg7XHJcbn1cclxuLm10LTI0e1xyXG4gICAgbWFyZ2luLXRvcDogMjRweDtcclxufVxyXG4ubXQtODB7XHJcbiAgICBtYXJnaW4tdG9wOiA1ZW07XHJcbn1cclxuLm10LTQwe1xyXG4gICAgbWFyZ2luLXRvcDogMi41ZW07XHJcbn1cclxuLm10LTM2e1xyXG4gICAgbWFyZ2luLXRvcDogMi4yNWVtO1xyXG59XHJcbi50ZXh0by0xe1xyXG4gICAgZm9udC1zaXplOiAwLjg3NWVtO1xyXG4gICAgY29sb3I6ICMwMDAwMDA4QTtcclxuICAgIFxyXG59XHJcbi5leGFtcGxlLWNvbnRhaW5lciAubWF0LWZvcm0tZmllbGQgKyAubWF0LWZvcm0tZmllbGQge1xyXG4gICAgbWFyZ2luLWxlZnQ6IDhweDtcclxuICB9XHJcbiAgXHJcbiAgLmV4YW1wbGUtcmlnaHQtYWxpZ24ge1xyXG4gICAgdGV4dC1hbGlnbjogcmlnaHQ7XHJcbiAgfVxyXG4gIFxyXG4gIGlucHV0LmV4YW1wbGUtcmlnaHQtYWxpZ246Oi13ZWJraXQtb3V0ZXItc3Bpbi1idXR0b24sXHJcbiAgaW5wdXQuZXhhbXBsZS1yaWdodC1hbGlnbjo6LXdlYmtpdC1pbm5lci1zcGluLWJ1dHRvbiB7XHJcbiAgICBkaXNwbGF5OiBub25lO1xyXG4gIH1cclxuICBcclxuICBpbnB1dC5leGFtcGxlLXJpZ2h0LWFsaWduIHtcclxuICAgIC1tb3otYXBwZWFyYW5jZTogdGV4dGZpZWxkO1xyXG4gIH0iLCIubXQtMzIge1xuICBtYXJnaW4tdG9wOiAzMnB4O1xufVxuXG4ubXQtMjQge1xuICBtYXJnaW4tdG9wOiAyNHB4O1xufVxuXG4ubXQtODAge1xuICBtYXJnaW4tdG9wOiA1ZW07XG59XG5cbi5tdC00MCB7XG4gIG1hcmdpbi10b3A6IDIuNWVtO1xufVxuXG4ubXQtMzYge1xuICBtYXJnaW4tdG9wOiAyLjI1ZW07XG59XG5cbi50ZXh0by0xIHtcbiAgZm9udC1zaXplOiAwLjg3NWVtO1xuICBjb2xvcjogIzAwMDAwMDhBO1xufVxuXG4uZXhhbXBsZS1jb250YWluZXIgLm1hdC1mb3JtLWZpZWxkICsgLm1hdC1mb3JtLWZpZWxkIHtcbiAgbWFyZ2luLWxlZnQ6IDhweDtcbn1cblxuLmV4YW1wbGUtcmlnaHQtYWxpZ24ge1xuICB0ZXh0LWFsaWduOiByaWdodDtcbn1cblxuaW5wdXQuZXhhbXBsZS1yaWdodC1hbGlnbjo6LXdlYmtpdC1vdXRlci1zcGluLWJ1dHRvbixcbmlucHV0LmV4YW1wbGUtcmlnaHQtYWxpZ246Oi13ZWJraXQtaW5uZXItc3Bpbi1idXR0b24ge1xuICBkaXNwbGF5OiBub25lO1xufVxuXG5pbnB1dC5leGFtcGxlLXJpZ2h0LWFsaWduIHtcbiAgLW1vei1hcHBlYXJhbmNlOiB0ZXh0ZmllbGQ7XG59Il19 */";
    /***/
  },

  /***/
  "./src/app/nuevo-login/nuevo-login.page.ts":
  /*!*************************************************!*\
    !*** ./src/app/nuevo-login/nuevo-login.page.ts ***!
    \*************************************************/

  /*! exports provided: NuevoLoginPage */

  /***/
  function srcAppNuevoLoginNuevoLoginPageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "NuevoLoginPage", function () {
      return NuevoLoginPage;
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


    var _app_services_ServicioFCM__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! ../../app/services/ServicioFCM */
    "./src/app/services/ServicioFCM.ts");
    /* harmony import */


    var _ionic_native_app_version_ngx__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! @ionic-native/app-version/ngx */
    "./node_modules/@ionic-native/app-version/__ivy_ngcc__/ngx/index.js");
    /* harmony import */


    var _ionic_native_device_ngx__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! @ionic-native/device/ngx */
    "./node_modules/@ionic-native/device/__ivy_ngcc__/ngx/index.js");
    /* harmony import */


    var moment__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
    /*! moment */
    "./node_modules/moment/moment.js");
    /* harmony import */


    var moment__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_12__); //servicios
    //estoy implementando progress bar
    //aca hay que controlar cuando no hay internet


    var NuevoLoginPage = /*#__PURE__*/function () {
      function NuevoLoginPage(navCtrl, utiles, servicioGeo, loading, formBuilder, activatedRoute, router, acceso, parametrosApp, fcmService, appVersion, platform, device) {
        _classCallCheck(this, NuevoLoginPage);

        this.navCtrl = navCtrl;
        this.utiles = utiles;
        this.servicioGeo = servicioGeo;
        this.loading = loading;
        this.formBuilder = formBuilder;
        this.activatedRoute = activatedRoute;
        this.router = router;
        this.acceso = acceso;
        this.parametrosApp = parametrosApp;
        this.fcmService = fcmService;
        this.appVersion = appVersion;
        this.platform = platform;
        this.device = device;
        this.hide = true; //para validar

        this.patternOnlyLetter = "[a-zA-Z\xC0-\xFF\xF1\xD1]+(s*[a-zA-Z\xC0-\xFF\xF1\xD1]*)*[a-zA-Z\xC0-\xFF\xF1\xD1 ]+$";
        this.expCelular = /^(\+?56)?(\s?)(0?9)(\s?)[9876543]\d{7}$/gm;
        this.expPassword = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{4,8}$/gm;
        this.expEmail = /^[^@\s]+@[^@\s]+\.[^@\s]+$/gm; //para validarse solo con enrolamiento

        this.usaEnrolamiento = false; //PARA REGISTRAR EL MOVIMIENTO DE INGRESO

        this.objetoEntrada = {
          VersionAppName: '',
          Plataforma: '',
          Token: '',
          VersionAppNumber: '',
          Fecha: new Date(),
          TipoOperacion: '0',
          Id: '0'
        }; //para progress bar

        this.estaCargando = false;
      }

      _createClass(NuevoLoginPage, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          moment__WEBPACK_IMPORTED_MODULE_12__["locale"]('es');
          this.usaEnrolamiento = this.parametrosApp.USA_LOGIN_ENROLAMIENTO();
          this.cargarForma();
        }
      }, {
        key: "abrirAsistente",
        value: function abrirAsistente() {
          var navigationExtras = {
            queryParams: {
              modulo: 'nuevo-login'
            }
          };
          this.navCtrl.navigateRoot(['pre-registro-uno'], navigationExtras);
        }
      }, {
        key: "cargarForma",
        value: function cargarForma() {
          this.forma = new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormGroup"]({
            'run': new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required]),
            'email': new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].pattern(this.expEmail)]),
            'clave': new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].minLength(3), _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].maxLength(10)])
          }); //si usa enrolamiento hay que quitar validación de email

          if (this.usaEnrolamiento) {
            this.forma.get('email').clearValidators();
          } else {
            this.forma.get('run').clearValidators();
          } //acá ver si dejamos preseteado el usuario y clave
          //por lo pronto lo comentamos

          /*     if (this.registro && this.registro.Id > 0){
                this.forma.setValue({
                  run: this.registro.Run,
                  email: this.registro.CorreoElectronico,
                  nombre: this.registro.Nombres,
                  apellido: this.registro.Apellidos,
                  telefono: this.registro.TelefonoContacto,
                  genero: this.registro.Sexo.toString(),
                  clave: '',
                  repetirClave: ''
                })
              } */

        }
      }, {
        key: "crearToken",
        value: function crearToken() {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
            var _this = this;

            var versionAppName, versionNumber, plataforma, loader;
            return regeneratorRuntime.wrap(function _callee2$(_context2) {
              while (1) {
                switch (_context2.prev = _context2.next) {
                  case 0:
                    //original

                    /*     let loader = await this.loading.create({
                          message: 'Creando...<br>Token inicial',
                          duration: 2000
                        }); */
                    this.estaCargando = true;
                    _context2.next = 3;
                    return this.loading.create({
                      cssClass: 'loading-vacio',
                      showBackdrop: false,
                      spinner: null
                    });

                  case 3:
                    loader = _context2.sent;
                    _context2.next = 6;
                    return loader.present().then(function () {
                      return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(_this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
                        return regeneratorRuntime.wrap(function _callee$(_context) {
                          while (1) {
                            switch (_context.prev = _context.next) {
                              case 0:
                                if (this.utiles.isAppOnDevice()) {
                                  _context.next = 12;
                                  break;
                                }

                                //web
                                //guardar local storage
                                if (!localStorage.getItem('token_dispositivo')) {
                                  //crear token para web
                                  this.tokenDispositivo = (Math.random() * (1000000 - 1) + 1).toString() + ' web';
                                  localStorage.setItem('token_dispositivo', this.tokenDispositivo);
                                } else {
                                  this.tokenDispositivo = localStorage.getItem('token_dispositivo');
                                }

                                versionAppName = "Mi salud familiar";
                                versionNumber = "0.0";
                                plataforma = "Web"; //loader.dismiss();
                                //otras variables

                                localStorage.setItem('version_app_name', versionAppName);
                                localStorage.setItem('version_number', versionNumber);
                                localStorage.setItem('plataforma', plataforma);
                                loader.dismiss();
                                this.estaCargando = false;
                                _context.next = 40;
                                break;

                              case 12:
                                if (!this.platform.is('ios')) {
                                  _context.next = 22;
                                  break;
                                }

                                _context.next = 15;
                                return this.appVersion.getAppName();

                              case 15:
                                versionAppName = _context.sent;
                                _context.next = 18;
                                return this.appVersion.getVersionNumber();

                              case 18:
                                versionNumber = _context.sent;
                                plataforma = "iOS";
                                _context.next = 33;
                                break;

                              case 22:
                                if (!this.platform.is('android')) {
                                  _context.next = 32;
                                  break;
                                }

                                _context.next = 25;
                                return this.appVersion.getAppName();

                              case 25:
                                versionAppName = _context.sent;
                                _context.next = 28;
                                return this.appVersion.getVersionNumber();

                              case 28:
                                versionNumber = _context.sent;
                                plataforma = "Android";
                                _context.next = 33;
                                break;

                              case 32:
                                if (this.platform.is('mobileweb')) {
                                  versionAppName = "Mi salud familiar";
                                  versionNumber = "0.0";
                                  plataforma = "Web";
                                } else {
                                  versionAppName = "Mi salud familiar";
                                  versionNumber = "0.0";
                                  plataforma = "No informado";
                                }

                              case 33:
                                //crear token para web
                                this.tokenDispositivo = this.device.uuid;
                                localStorage.setItem('token_dispositivo', this.tokenDispositivo); //otras variables

                                localStorage.setItem('version_app_name', versionAppName);
                                localStorage.setItem('version_number', versionNumber);
                                localStorage.setItem('plataforma', plataforma);
                                loader.dismiss();
                                this.estaCargando = false;

                              case 40:
                              case "end":
                                return _context.stop();
                            }
                          }
                        }, _callee, this);
                      }));
                    });

                  case 6:
                  case "end":
                    return _context2.stop();
                }
              }
            }, _callee2, this);
          }));
        }
      }, {
        key: "registrarEntrada",
        value: function registrarEntrada() {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee4() {
            var _this2 = this;

            var loader;
            return regeneratorRuntime.wrap(function _callee4$(_context4) {
              while (1) {
                switch (_context4.prev = _context4.next) {
                  case 0:
                    if (sessionStorage.getItem('RSS_ID')) {
                      _context4.next = 13;
                      break;
                    }

                    this.objetoEntrada.VersionAppName = localStorage.getItem('version_app_name');
                    this.objetoEntrada.Plataforma = localStorage.getItem('plataforma');
                    this.objetoEntrada.VersionAppNumber = localStorage.getItem('version_number');
                    this.objetoEntrada.Token = localStorage.getItem('token_dispositivo');
                    this.objetoEntrada.Fecha = new Date(); //GUARDAMOS EN LA SESSION PARA OCUPARLO DESPUES

                    sessionStorage.setItem('ENTRADA', JSON.stringify(this.objetoEntrada)); //original

                    /*       let loader = await this.loading.create({
                            message: 'Creando...<br>registro de sessión',
                            duration: 2000
                          }); */

                    this.estaCargando = true;
                    _context4.next = 10;
                    return this.loading.create({
                      cssClass: 'loading-vacio',
                      showBackdrop: false,
                      spinner: null
                    });

                  case 10:
                    loader = _context4.sent;
                    _context4.next = 13;
                    return loader.present().then(function () {
                      return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(_this2, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee3() {
                        var _this3 = this;

                        return regeneratorRuntime.wrap(function _callee3$(_context3) {
                          while (1) {
                            switch (_context3.prev = _context3.next) {
                              case 0:
                                if (!this.utiles.isAppOnDevice()) {
                                  //web
                                  this.servicioGeo.postIngreso(this.objetoEntrada).subscribe(function (data) {
                                    if (data) {
                                      if (data.Id > 0) {
                                        //guardamos el identificador del registro para procesarlo despues
                                        sessionStorage.setItem("RSS_ID", data.Id);
                                      }
                                    }

                                    loader.dismiss();
                                    _this3.estaCargando = false;
                                  });
                                } else {
                                  //dispositivo
                                  this.servicioGeo.postIngresoNative(this.objetoEntrada).then(function (response) {
                                    var respuesta = JSON.parse(response.data);
                                    sessionStorage.setItem("RSS_ID", respuesta.Id);
                                    loader.dismiss();
                                    _this3.estaCargando = false;
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

                  case 13:
                  case "end":
                    return _context4.stop();
                }
              }
            }, _callee4, this);
          }));
        }
      }, {
        key: "loguearseRegistro",
        value: function loguearseRegistro() {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee6() {
            var _this4 = this;

            var correo, password, loader;
            return regeneratorRuntime.wrap(function _callee6$(_context6) {
              while (1) {
                switch (_context6.prev = _context6.next) {
                  case 0:
                    correo = this.forma.controls.email.value;
                    password = this.forma.controls.clave ? this.utiles.encriptar(this.forma.controls.clave.value) : ''; //ahora guardamos
                    //original

                    /*     let loader = await this.loading.create({
                          message: 'Creando...<br>Registro',
                          duration: 20000
                        }); */

                    this.estaCargando = true;
                    _context6.next = 5;
                    return this.loading.create({
                      cssClass: 'loading-vacio',
                      showBackdrop: false,
                      spinner: null
                    });

                  case 5:
                    loader = _context6.sent;
                    _context6.next = 8;
                    return loader.present().then(function () {
                      return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(_this4, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee5() {
                        var _this5 = this;

                        return regeneratorRuntime.wrap(function _callee5$(_context5) {
                          while (1) {
                            switch (_context5.prev = _context5.next) {
                              case 0:
                                if (!this.utiles.isAppOnDevice()) {
                                  //llamada web
                                  this.servicioGeo.getRegistroAppCorreoPassword(correo, password).subscribe(function (data) {
                                    if (data) {
                                      var respuesta = data;
                                      localStorage.setItem('REGISTRO', JSON.stringify(respuesta));
                                      localStorage.setItem('TIENE_REGISTRO', 'true');
                                      loader.dismiss();
                                      var registro = JSON.parse(localStorage.getItem('REGISTRO'));

                                      _this5.autentificarse(registro.Run, password);
                                    } else {
                                      _this5.utiles.presentToast("No se encontró registro de usuario.", "middle", 3000);

                                      _this5.estaCargando = false;
                                      loader.dismiss();
                                      return;
                                    }
                                  });
                                } else {
                                  //llamada nativa
                                  this.servicioGeo.getRegistroAppNativeCorreoPassword(correo, password).then(function (data) {
                                    var respuesta = JSON.parse(data.data);

                                    if (respuesta) {
                                      localStorage.setItem('REGISTRO', JSON.stringify(respuesta));
                                      localStorage.setItem('TIENE_REGISTRO', 'true');
                                      loader.dismiss();
                                      var registro = JSON.parse(localStorage.getItem('REGISTRO'));

                                      _this5.autentificarse(registro.Run, password);
                                    } else {
                                      _this5.utiles.presentToast("No se encontró registro de usuario.", "middle", 3000);

                                      _this5.estaCargando = false;
                                      loader.dismiss();
                                      return;
                                    }
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

                  case 8:
                  case "end":
                    return _context6.stop();
                }
              }
            }, _callee6, this);
          }));
        }
      }, {
        key: "loguearseEnrolamiento",
        value: function loguearseEnrolamiento() {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee7() {
            var run, password;
            return regeneratorRuntime.wrap(function _callee7$(_context7) {
              while (1) {
                switch (_context7.prev = _context7.next) {
                  case 0:
                    this.estaCargando = true;
                    run = this.forma.controls.run.value;
                    password = this.forma.controls.clave ? this.utiles.encriptar(this.forma.controls.clave.value) : '';
                    localStorage.setItem('TIENE_REGISTRO', 'false');
                    this.autentificarse(run, password);

                  case 5:
                  case "end":
                    return _context7.stop();
                }
              }
            }, _callee7, this);
          }));
        }
      }, {
        key: "onSubmit",
        value: function onSubmit() {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee8() {
            return regeneratorRuntime.wrap(function _callee8$(_context8) {
              while (1) {
                switch (_context8.prev = _context8.next) {
                  case 0:
                    if (!this.forma.invalid) {
                      _context8.next = 2;
                      break;
                    }

                    return _context8.abrupt("return");

                  case 2:
                    if (this.usaEnrolamiento) {
                      //loguearse con enrolamiento
                      this.loguearseEnrolamiento();
                    } else {
                      //loguearse con registro app
                      this.loguearseRegistro();
                    }

                  case 3:
                  case "end":
                    return _context8.stop();
                }
              }
            }, _callee8, this);
          }));
        }
      }, {
        key: "autentificarse",
        value: function autentificarse(userName, password) {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee10() {
            var _this6 = this;

            var f, loader;
            return regeneratorRuntime.wrap(function _callee10$(_context10) {
              while (1) {
                switch (_context10.prev = _context10.next) {
                  case 0:
                    //en este caso ya el user name es el email
                    f = {
                      UserName: userName,
                      Password: password,
                      UsaEnrolamiento: this.usaEnrolamiento,
                      TokenFCM: this.utiles.entregaTokenFCM()
                    }; //original

                    /*     let loader = await this.loading.create({
                          message: 'Obteniendo...<br>Login',
                          duration: 10000
                        }); */

                    this.estaCargando = true;
                    _context10.next = 4;
                    return this.loading.create({
                      cssClass: 'loading-vacio',
                      showBackdrop: false,
                      spinner: null
                    });

                  case 4:
                    loader = _context10.sent;
                    _context10.next = 7;
                    return loader.present().then(function () {
                      return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(_this6, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee9() {
                        var _this7 = this;

                        return regeneratorRuntime.wrap(function _callee9$(_context9) {
                          while (1) {
                            switch (_context9.prev = _context9.next) {
                              case 0:
                                if (!this.utiles.isAppOnDevice()) {
                                  //llamada web
                                  this.acceso.loginWebDirecto(f).subscribe(function (response) {
                                    _this7.procesarLogin(response, loader);
                                  }, function (error) {
                                    loader.dismiss();
                                    _this7.estaCargando = false;
                                    return;
                                  });
                                } else {
                                  //llamada nativa
                                  this.acceso.loginWebNative(f).then(function (response) {
                                    _this7.procesarLogin(JSON.parse(response.data), loader);
                                  }, function (error) {
                                    _this7.utiles.presentToast('Ocurrió un error de autentificación', 'bottom', 4000);

                                    _this7.estaCargando = false;
                                    loader.dismiss();
                                    return;
                                  });
                                }

                              case 1:
                              case "end":
                                return _context9.stop();
                            }
                          }
                        }, _callee9, this);
                      }));
                    });

                  case 7:
                  case "end":
                    return _context10.stop();
                }
              }
            }, _callee10, this);
          }));
        }
      }, {
        key: "setDatosUsuario",
        value: function setDatosUsuario(retorno, user, userFamilia) {
          //variable de sessión muy importante para el resto de la app.
          sessionStorage.setItem("UsuarioAps", user);
          localStorage.setItem('MI_RUT', retorno.UsuarioAps.Rut);
          localStorage.setItem('MI_NOMBRE', retorno.UsuarioAps.Nombres + ' ' + retorno.UsuarioAps.ApellidoPaterno);
          localStorage.setItem('MI_COLOR', retorno.UsuarioAps.Color);
          localStorage.setItem('MI_IMAGEN', retorno.UsuarioAps.UrlImagen); //lo vamos a guardar en el local storage para realizar la llamada
          //en el background

          localStorage.setItem('UsuarioAps', user);

          if (retorno.UsuariosFamilia) {
            //debemos quitar los repetidos según última revisión
            var hash = {};
            var familia = retorno.UsuariosFamilia.filter(function (o) {
              return hash[o.Id] ? false : hash[o.Id] = true;
            });
            retorno.UsuariosFamilia = familia;
            userFamilia = JSON.stringify(retorno.UsuariosFamilia); //variable de sessión muy importante para el resto de la app.

            localStorage.setItem("UsuariosFamilia", userFamilia);
          }

          this.CodigoMensaje = retorno.RespuestaBase.CodigoMensaje;
          this.Mensaje = retorno.RespuestaBase.Mensaje;
          this.loggedIn = true;
          /*     this.fcmService.initFCM();
              this.fcmService.receiveMessage(true); */
        }
      }, {
        key: "procesarLogin",
        value: function procesarLogin(response, loader) {
          var retorno = response;
          var tieneUsuario = false;

          if (retorno.RespuestaBase) {
            if (retorno.RespuestaBase.CodigoMensaje == 0) {
              //esta todo ok
              var user;
              var userFamilia;

              if (retorno.UsuarioAps) {
                user = JSON.stringify(retorno.UsuarioAps); //antes debemos validar si tiene entidad contratante

                if (user.NodId && this.parametrosApp.USA_ENTIDAD_CONTRATANTE()) {
                  //usa entidad contratante y tiene nodo
                  if (retorno.UsuarioAps.EntidadContratante && retorno.UsuarioAps.EntidadContratante.length > 0) {
                    //tiene entidad contratante
                    tieneUsuario = true;
                    this.setDatosUsuario(retorno, user, userFamilia);
                    loader.dismiss();
                    this.estaCargando = false;
                  } else {
                    //no tiene entidad contratante
                    this.utiles.presentToast("No tiene entidad contratante asociada", "middle", 3000);
                    loader.dismiss();
                    this.estaCargando = false;
                    return;
                  }
                } else {
                  //no usa entidad contratante
                  tieneUsuario = true;
                  this.setDatosUsuario(retorno, user, userFamilia);
                  loader.dismiss();
                  this.estaCargando = false;
                }
              } //si tiene usuario está valido


              if (!tieneUsuario) {
                this.utiles.presentToast("Tiene registro correcto, pero no cuenta con información en la red de salud.", "middle", 3000);
              }

              this.crearToken(); //guardamos el registro de session

              this.registrarEntrada();
              this.irAHome();
            } else {
              this.loggedIn = false;
              this.CodigoMensaje = retorno.RespuestaBase.CodigoMensaje;
              this.Mensaje = retorno.RespuestaBase.Mensaje;
              this.loggedIn = true;
              loader.dismiss();
              this.estaCargando = false;
              this.utiles.presentToast(this.Mensaje, 'middle', 4000);
              return;
            }
          } else {
            //error también
            this.loggedIn = false;
            this.CodigoMensaje = 1000;
            this.Mensaje = 'Error de llamada Http;';
            this.loggedIn = true;
            this.estaCargando = false;
            loader.dismiss();
            this.utiles.presentToast(this.Mensaje, 'middle', 4000);
            return;
          }
        }
      }, {
        key: "irAHome",
        value: function irAHome() {
          this.navCtrl.navigateRoot('home');
        }
      }, {
        key: "irRecuperarClave",
        value: function irRecuperarClave() {
          this.navCtrl.navigateRoot('recuperar-clave');
        }
      }, {
        key: "f",
        get: function get() {
          return this.forma.controls;
        }
      }]);

      return NuevoLoginPage;
    }();

    NuevoLoginPage.ctorParameters = function () {
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
        type: _app_services_ServicioFCM__WEBPACK_IMPORTED_MODULE_9__["ServicioFCM"]
      }, {
        type: _ionic_native_app_version_ngx__WEBPACK_IMPORTED_MODULE_10__["AppVersion"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["Platform"]
      }, {
        type: _ionic_native_device_ngx__WEBPACK_IMPORTED_MODULE_11__["Device"]
      }];
    };

    NuevoLoginPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-nuevo-login',
      template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! raw-loader!./nuevo-login.page.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/nuevo-login/nuevo-login.page.html"))["default"],
      styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! ./nuevo-login.page.scss */
      "./src/app/nuevo-login/nuevo-login.page.scss"))["default"]]
    })], NuevoLoginPage);
    /***/
  }
}]);
//# sourceMappingURL=nuevo-login-nuevo-login-module-es5.js.map