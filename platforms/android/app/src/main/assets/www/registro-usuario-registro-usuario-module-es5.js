function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["registro-usuario-registro-usuario-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/registro-usuario/registro-usuario.page.html":
  /*!***************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/registro-usuario/registro-usuario.page.html ***!
    \***************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppRegistroUsuarioRegistroUsuarioPageHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ion-header class=\"back-app\">\n  <!-- <ion-toolbar color=\"primary\" mode=\"md\" style=\"height: 160px;\"> -->\n  <ion-toolbar color=\"primary\" mode=\"md\">\n    <ion-buttons slot=\"start\">\n      <ion-back-button [hidden]=\"estaEditando || estaAgregandoFamilia\" (click)=\"salirRegistro()\" defaultHref=\"/\" class=\"fcw\"></ion-back-button>\n      <ion-back-button [hidden]=\"!estaEditando\" defaultHref=\"/home\" class=\"fcw\"></ion-back-button>\n    </ion-buttons>\n    <ion-title class=\"fcw\">Ajustes de la cuenta</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <div [hidden]=\"estaCargando\">\n    <!--   <ion-fab vertical=\"top\" horizontal=\"start\" slot=\"fixed\" style=\"top:-30px\" [hidden]=\"!estaEditando\">\n      <ion-fab-button color=\"danger\">\n        <ion-icon name=\"create\"></ion-icon>\n      </ion-fab-button>\n    </ion-fab> -->\n<!--     <ion-fab vertical=\"top\" horizontal=\"center\" slot=\"fixed\" style=\"top:-40px;margin-left: -110px; color: white;\">\n      <h5 style=\"font-size: 18px;\">{{nombreMostrar}}</h5>\n    </ion-fab> -->\n    <!-- <div class=\"ion-padding\" style=\"margin-top: 20px;\"> -->\n    <div class=\"ion-padding\">\n      <form [formGroup]=\"forma\" novalidate>\n        <ion-row>\n          <mat-form-field appearance=\"outline\" style=\"width: 100%;\">\n            <mat-label>Run</mat-label>\n            <input matInput placeholder=\"12535301-1\" formControlName=\"run\" name=\"run\" required>\n            <mat-error [hidden]=\"!(f.run.errors && f.run.errors.required)\">Run requerido</mat-error>\n          </mat-form-field>\n        </ion-row>\n        <ion-row>\n          <mat-form-field appearance=\"outline\" style=\"width: 100%;\">\n            <mat-label>Correo electrónico</mat-label>\n            <input matInput placeholder=\"ejemplo@gmail.com\" formControlName=\"email\" name=\"email\"\n              (blur)=\"validarCorreo($event)\" required>\n            <mat-error [hidden]=\"!(f.email.errors && f.email.errors.required)\">Correo requerido</mat-error>\n            <mat-error [hidden]=\"!(f.email.errors && f.email.errors.pattern)\">Correo inválido</mat-error>\n          </mat-form-field>\n        </ion-row>\n        <ion-row>\n          <mat-form-field appearance=\"outline\" style=\"width: 100%;\">\n            <mat-label>Nombre</mat-label>\n            <input #nombreId=\"matInput\" matInput placeholder=\"Nombre\" formControlName=\"nombre\" name=\"nombre\" required>\n            <mat-error [hidden]=\"!(f.nombre.errors && f.nombre.errors.required)\">Nombre requerido</mat-error>\n            <mat-error [hidden]=\"!(f.nombre.errors && f.nombre.errors.pattern)\">Sólo letras</mat-error>\n          </mat-form-field>\n        </ion-row>\n        <ion-row>\n          <mat-form-field appearance=\"outline\" style=\"width: 100%;\">\n            <mat-label>Apellido</mat-label>\n            <input matInput placeholder=\"Apellido\" formControlName=\"apellido\" name=\"apellido\" required>\n            <mat-error [hidden]=\"!(f.apellido.errors && f.apellido.errors.required)\">Apellido requerido</mat-error>\n            <mat-error [hidden]=\"!(f.apellido.errors && f.apellido.errors.pattern)\">Sólo letras</mat-error>\n          </mat-form-field>\n        </ion-row>\n        <ion-row>\n          <mat-form-field appearance=\"outline\" style=\"width: 100%;\">\n            <mat-label>Apodo</mat-label>\n            <input matInput placeholder=\"Apodo\" formControlName=\"nombreSocial\" name=\"nombreSocial\">\n          </mat-form-field>\n        </ion-row>\n        <ion-grid>\n          <ion-row class=\"ion-no-padding ion-no-margin\">\n            <ion-col size=\"6\" class=\"ion-no-padding ion-no-margin\">\n              <!-- telefono -->\n              <mat-form-field appearance=\"outline\" style=\"width: 100%;\">\n                <mat-label>Teléfono</mat-label>\n                <input matInput placeholder=\"9XXXXXXXX\" formControlName=\"telefono\" name=\"telefono\">\n                <mat-error [hidden]=\"!(f.telefono.errors && f.telefono.errors.pattern)\">Teléfono inválido</mat-error>\n              </mat-form-field>\n            </ion-col>\n            <ion-col size=\"6\" class=\"ion-no-padding ion-no-margin\">\n              <!-- genero -->\n              <mat-form-field appearance=\"outline\" style=\"width: 98%; padding-left: 2%;\">\n                <mat-label>Género</mat-label>\n                <mat-select formControlName=\"genero\" name=\"genero\" required>\n                  <mat-option value=\"-1\">Seleccione</mat-option>\n                  <mat-option value=\"0\">Hombre</mat-option>\n                  <mat-option value=\"1\">Mujer</mat-option>\n                  <mat-option value=\"2\">No definido</mat-option>\n                </mat-select>\n              </mat-form-field>\n            </ion-col>\n  \n          </ion-row>\n        </ion-grid>\n        <!-- info clave -->\n        <ion-row [hidden]=\"!estaEditando\">\n          <strong>Llene estos campos sólo si desea cambiar su clave, de lo contrario déjelos vacíos.</strong>\n        </ion-row>\n        <ion-row>\n          <mat-form-field appearance=\"outline\" style=\"width: 100%;\">\n            <mat-label>Clave</mat-label>\n            <input matInput placeholder=\"Clave\" type=\"password\" name=\"clave\" formControlName=\"clave\">\n            <mat-error [hidden]=\"!(f.clave.errors && f.clave.errors.required && estaEditando)\">Clave requerida</mat-error>\n          </mat-form-field>\n        </ion-row>\n        <ion-row>\n          <mat-form-field appearance=\"outline\" style=\"width: 100%;\">\n            <mat-label>Repetir clave</mat-label>\n            <input matInput placeholder=\"Repetir clave\" type=\"password\" name=\"repetirClave\"\n              formControlName=\"repetirClave\">\n            <mat-error [hidden]=\"!(f.repetirClave.errors && f.repetirClave.errors.required && estaEditando)\">Repita clave\n              requerido</mat-error>\n            <mat-error\n              [hidden]=\"!(f.repetirClave.errors && f.repetirClave.errors.clavesIguales == false && estaEditando)\">Las\n              claves deben\n              coincidir</mat-error>\n          </mat-form-field>\n        </ion-row>\n        <!-- check para EL ACEPTA CONDICIONES -->\n        <ion-grid [hidden]=\"estaEditando\">\n          <ion-row>\n            <ion-col size=\"10\">\n              <ion-item lines=\"none\" style=\"--ion-item-background: transparent;\">\n                <ion-label style=\"word-wrap: break-word;font-size: 0.9em;white-space: break-spaces;\">Acepto condiciones de servicio</ion-label>\n                <!-- <ion-toggle [(ngModel)]=\"aceptaCondiciones\" (ionChange)=\"onChangeAcepta($event)\" mode=\"ios\"></ion-toggle> -->\n                <ion-toggle name=\"aceptaCondiciones\" formControlName=\"aceptaCondiciones\" (ionChange)=\"onChangeAcepta($event)\" mode=\"ios\"></ion-toggle>\n              </ion-item> \n            </ion-col>\n            <ion-col size=\"2\">\n              <ion-icon color=\"primary\" name=\"document-text\" style=\"font-size: 2.5em; float: right;\" (click)=\"abrirPDF()\"></ion-icon>\n            </ion-col>\n          </ion-row>\n        </ion-grid>\n        <!-- boton de registrarse -->\n        <ion-row>\n          <button [hidden]=\"estaEditando\" [disabled]=\"forma.invalid\" class=\"button-registrarse\" (click)=\"onSubmit()\"\n            mat-raised-button color=\"accent\">REGISTRARSE</button>\n          <button [hidden]=\"!estaEditando\" [disabled]=\"forma.invalid\" class=\"button-registrarse\" (click)=\"onSubmit()\"\n            mat-raised-button color=\"accent\">GUARDAR CAMBIOS</button>\n        </ion-row>\n      </form>\n  \n    </div>\n  </div>\n  <!-- componente loading -->\n  <app-progress [mostrar]=\"estaCargando\" [titulo]=\"tituloLoading\"></app-progress>\n\n</ion-content>";
    /***/
  },

  /***/
  "./src/app/registro-usuario/registro-usuario.module.ts":
  /*!*************************************************************!*\
    !*** ./src/app/registro-usuario/registro-usuario.module.ts ***!
    \*************************************************************/

  /*! exports provided: RegistroUsuarioPageModule */

  /***/
  function srcAppRegistroUsuarioRegistroUsuarioModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "RegistroUsuarioPageModule", function () {
      return RegistroUsuarioPageModule;
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


    var _registro_usuario_page__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! ./registro-usuario.page */
    "./src/app/registro-usuario/registro-usuario.page.ts");
    /* harmony import */


    var _components_components_module__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! ../components/components.module */
    "./src/app/components/components.module.ts");

    var RegistroUsuarioPageModule = function RegistroUsuarioPageModule() {
      _classCallCheck(this, RegistroUsuarioPageModule);
    };

    RegistroUsuarioPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonicModule"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_5__["MatFormFieldModule"], _angular_material_select__WEBPACK_IMPORTED_MODULE_6__["MatSelectModule"], _angular_material_input__WEBPACK_IMPORTED_MODULE_7__["MatInputModule"], _angular_material_button__WEBPACK_IMPORTED_MODULE_8__["MatButtonModule"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_9__["MatIconModule"], _components_components_module__WEBPACK_IMPORTED_MODULE_11__["ComponentsModule"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild([{
        path: '',
        component: _registro_usuario_page__WEBPACK_IMPORTED_MODULE_10__["RegistroUsuarioPage"]
      }])],
      declarations: [_registro_usuario_page__WEBPACK_IMPORTED_MODULE_10__["RegistroUsuarioPage"]]
    })], RegistroUsuarioPageModule);
    /***/
  },

  /***/
  "./src/app/registro-usuario/registro-usuario.page.scss":
  /*!*************************************************************!*\
    !*** ./src/app/registro-usuario/registro-usuario.page.scss ***!
    \*************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppRegistroUsuarioRegistroUsuarioPageScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".mt-32 {\n  margin-top: 32px;\n}\n\n.mt-24 {\n  margin-top: 24px;\n}\n\n.mt-80 {\n  margin-top: 5em;\n}\n\n.mt-40 {\n  margin-top: 2.5em;\n}\n\n.mt-36 {\n  margin-top: 2.25em;\n}\n\n.mt-52 {\n  margin-top: 3.25em;\n}\n\n.texto-1 {\n  font-size: 1em;\n  color: #000000DE;\n}\n\n.button-registrarse {\n  width: 80%;\n  margin-left: 10%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcmVnaXN0cm8tdXN1YXJpby9DOlxcRGlzY28gRlxcYXBwX21pZmFtaWxpYV9naXRcXG1pRmFtaWxpYV9wcmUvc3JjXFxhcHBcXHJlZ2lzdHJvLXVzdWFyaW9cXHJlZ2lzdHJvLXVzdWFyaW8ucGFnZS5zY3NzIiwic3JjL2FwcC9yZWdpc3Ryby11c3VhcmlvL3JlZ2lzdHJvLXVzdWFyaW8ucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksZ0JBQUE7QUNDSjs7QURDQTtFQUNJLGdCQUFBO0FDRUo7O0FEQUE7RUFDSSxlQUFBO0FDR0o7O0FEREE7RUFDSSxpQkFBQTtBQ0lKOztBREZBO0VBQ0ksa0JBQUE7QUNLSjs7QURIQTtFQUNJLGtCQUFBO0FDTUo7O0FESkE7RUFDSSxjQUFBO0VBQ0EsZ0JBQUE7QUNPSjs7QURKQTtFQUNJLFVBQUE7RUFDQSxnQkFBQTtBQ09KIiwiZmlsZSI6InNyYy9hcHAvcmVnaXN0cm8tdXN1YXJpby9yZWdpc3Ryby11c3VhcmlvLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5tdC0zMntcclxuICAgIG1hcmdpbi10b3A6IDMycHg7XHJcbn1cclxuLm10LTI0e1xyXG4gICAgbWFyZ2luLXRvcDogMjRweDtcclxufVxyXG4ubXQtODB7XHJcbiAgICBtYXJnaW4tdG9wOiA1ZW07XHJcbn1cclxuLm10LTQwe1xyXG4gICAgbWFyZ2luLXRvcDogMi41ZW07XHJcbn1cclxuLm10LTM2e1xyXG4gICAgbWFyZ2luLXRvcDogMi4yNWVtO1xyXG59XHJcbi5tdC01MntcclxuICAgIG1hcmdpbi10b3A6IDMuMjVlbTtcclxufVxyXG4udGV4dG8tMXtcclxuICAgIGZvbnQtc2l6ZTogMWVtO1xyXG4gICAgY29sb3I6ICMwMDAwMDBERTtcclxuICAgIFxyXG59XHJcbi5idXR0b24tcmVnaXN0cmFyc2V7XHJcbiAgICB3aWR0aDogODAlO1xyXG4gICAgbWFyZ2luLWxlZnQ6IDEwJTtcclxufSIsIi5tdC0zMiB7XG4gIG1hcmdpbi10b3A6IDMycHg7XG59XG5cbi5tdC0yNCB7XG4gIG1hcmdpbi10b3A6IDI0cHg7XG59XG5cbi5tdC04MCB7XG4gIG1hcmdpbi10b3A6IDVlbTtcbn1cblxuLm10LTQwIHtcbiAgbWFyZ2luLXRvcDogMi41ZW07XG59XG5cbi5tdC0zNiB7XG4gIG1hcmdpbi10b3A6IDIuMjVlbTtcbn1cblxuLm10LTUyIHtcbiAgbWFyZ2luLXRvcDogMy4yNWVtO1xufVxuXG4udGV4dG8tMSB7XG4gIGZvbnQtc2l6ZTogMWVtO1xuICBjb2xvcjogIzAwMDAwMERFO1xufVxuXG4uYnV0dG9uLXJlZ2lzdHJhcnNlIHtcbiAgd2lkdGg6IDgwJTtcbiAgbWFyZ2luLWxlZnQ6IDEwJTtcbn0iXX0= */";
    /***/
  },

  /***/
  "./src/app/registro-usuario/registro-usuario.page.ts":
  /*!***********************************************************!*\
    !*** ./src/app/registro-usuario/registro-usuario.page.ts ***!
    \***********************************************************/

  /*! exports provided: RegistroUsuarioPage */

  /***/
  function srcAppRegistroUsuarioRegistroUsuarioPageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "RegistroUsuarioPage", function () {
      return RegistroUsuarioPage;
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


    var _ionic_native_in_app_browser_ngx__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @ionic-native/in-app-browser/ngx */
    "./node_modules/@ionic-native/in-app-browser/__ivy_ngcc__/ngx/index.js");
    /* harmony import */


    var _app_services_ServicioUtiles__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ../../app/services/ServicioUtiles */
    "./src/app/services/ServicioUtiles.ts");
    /* harmony import */


    var _app_services_ServicioGeo__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ../../app/services/ServicioGeo */
    "./src/app/services/ServicioGeo.ts");
    /* harmony import */


    var _app_services_ServicioAcceso__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ../../app/services/ServicioAcceso */
    "./src/app/services/ServicioAcceso.ts");
    /* harmony import */


    var _app_services_ServicioParametrosApp__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! ../../app/services/ServicioParametrosApp */
    "./src/app/services/ServicioParametrosApp.ts");
    /* harmony import */


    var moment__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! moment */
    "./node_modules/moment/moment.js");
    /* harmony import */


    var moment__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_10__); //servicios


    var RegistroUsuarioPage = /*#__PURE__*/function () {
      function RegistroUsuarioPage(navCtrl, utiles, servicioGeo, loading, formBuilder, activatedRoute, router, acceso, parametrosApp, alertController, inap) {
        var _this = this;

        _classCallCheck(this, RegistroUsuarioPage);

        this.navCtrl = navCtrl;
        this.utiles = utiles;
        this.servicioGeo = servicioGeo;
        this.loading = loading;
        this.formBuilder = formBuilder;
        this.activatedRoute = activatedRoute;
        this.router = router;
        this.acceso = acceso;
        this.parametrosApp = parametrosApp;
        this.alertController = alertController;
        this.inap = inap;
        this.options = {
          location: 'yes'
        }; //para validar

        this.patternOnlyLetter = "[a-zA-Z\xC0-\xFF\xF1\xD1]+(s*[a-zA-Z\xC0-\xFF\xF1\xD1]*)*[a-zA-Z\xC0-\xFF\xF1\xD1 ]+$";
        this.expCelular = /^(\+?56)?(\s?)(0?9)(\s?)[9876543]\d{7}$/gm;
        this.expPassword = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{4,8}$/gm;
        this.expEmail = /^[^@\s]+@[^@\s]+\.[^@\s]+$/gm;
        this.expAceptaCondiciones = true;
        this.estaEditando = false;
        this.estaAgregandoFamilia = false; //para validarse solo con enrolamiento

        this.usaEnrolamiento = false; //para el progressbar

        this.estaCargando = false;
        this.tituloLoading = '';

        this.EmailIgualesValidator = function (fg) {
          var clave = fg.get('clave').value;
          var claveR = fg.get('repetirClave').value;

          if (clave !== null && claveR !== null && clave != claveR) {
            _this.forma.controls.repetirClave.setErrors({
              clavesIguales: false
            });
          }

          return clave !== null && claveR !== null && clave != claveR ? null : null;
        };
      }

      _createClass(RegistroUsuarioPage, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this2 = this;

          moment__WEBPACK_IMPORTED_MODULE_10__["locale"]('es');
          this.usaEnrolamiento = this.parametrosApp.USA_LOGIN_ENROLAMIENTO();
          this.rutaAceptoCondiciones = this.parametrosApp.URL_ACEPTA_CONDICIONES();
          this.activatedRoute.queryParams.subscribe(function (params) {
            if (params && params.usuario) {
              //store the temp in data        
              _this2.registro = JSON.parse(params.usuario);
              _this2.nombreMostrar = _this2.registro.Nombres + " " + _this2.registro.Apellidos; //console.log(this.registro);

              if (params.EstaEditando && params.EstaEditando != null) {
                //esta editando al usuario
                _this2.estaEditando = true;
              }

              if (params.estaAgregandoFamilia && params.estaAgregandoFamilia != null) {
                _this2.estaAgregandoFamilia = true;
              }

              if (!_this2.estaEditando) {
                _this2.nombreMostrar = 'Nuevo registro';
              } //cargamos la forma


              _this2.cargarForma();
            }
          });
        }
      }, {
        key: "ngAfterViewInit",
        value: function ngAfterViewInit() {
          var _this3 = this;

          setTimeout(function () {
            _this3.nombreInput.focus();
          }, 1000);
        }
      }, {
        key: "cargarForma",
        value: function cargarForma() {
          this.forma = new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormGroup"]({
            'run': new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]({
              value: '',
              disabled: this.estaEditando
            }, [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required]),
            'email': new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]({
              value: '',
              disabled: this.estaEditando
            }, [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].pattern(this.expEmail)]),
            'nombre': new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].minLength(3), _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].maxLength(50), _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].pattern(this.patternOnlyLetter)]),
            'apellido': new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].pattern(this.patternOnlyLetter)]),
            'nombreSocial': new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].maxLength(100)]),
            'telefono': new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].pattern(this.expCelular)]),
            'genero': new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](),
            'aceptaCondiciones': new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](true, [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].requiredTrue]),
            'clave': new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].minLength(3), _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].maxLength(10)]),
            'repetirClave': new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].minLength(3), _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].maxLength(10)])
          }, {
            validators: this.EmailIgualesValidator
          });

          if (this.registro && this.registro.Id >= 0) {
            var sexo = this.registro.Sexo != null ? this.registro.Sexo.toString() : "-1";
            this.forma.setValue({
              run: this.registro.Run,
              email: this.registro.CorreoElectronico,
              nombre: this.registro.Nombres.trimStart(),
              apellido: this.registro.Apellidos.trimStart(),
              nombreSocial: this.registro.Apodo.trimStart(),
              telefono: this.registro.TelefonoContacto ? this.registro.TelefonoContacto : '',
              genero: sexo,
              aceptaCondiciones: true,
              clave: '',
              repetirClave: ''
            }); //si esta editando hay que cambiar algunas cosas

            if (this.estaEditando) {
              this.forma.get('clave').clearValidators();
              this.forma.get('repetirClave').clearValidators();
            } else {
              //esto no esta claro, yo creo que siempre debería estar deshabilitado
              //ya que viene del pre-registro y la edición no debería cambiar tampoco 
              //estos datos.
              this.forma.controls['run'].disable();
              this.forma.controls['email'].disable();
            }
            /*       if (this.estaEditando){
                    //desactivar algunas cosas
                    this.forma.controls['run'].disable();
                    this.forma.controls['email'].disable();
                  } */

          }
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
                user = JSON.stringify(retorno.UsuarioAps); //variable de sessión muy importante para el resto de la app.

                sessionStorage.setItem("UsuarioAps", user);
                localStorage.setItem('MI_RUT', retorno.UsuarioAps.Rut);
                localStorage.setItem('MI_NOMBRE', retorno.UsuarioAps.Nombres + ' ' + retorno.UsuarioAps.ApellidoPaterno);
                localStorage.setItem('MI_COLOR', retorno.UsuarioAps.Color);
                localStorage.setItem('MI_IMAGEN', retorno.UsuarioAps.UrlImagen); //lo vamos a guardar en el local storage para realizar la llamada
                //en el background

                localStorage.setItem('UsuarioAps', user);
                tieneUsuario = true;
              }

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

              if (retorno.FamiliaPorAceptar && retorno.FamiliaPorAceptar.length >= 0) {
                localStorage.setItem('FAMILIA-POR-ACEPTAR', JSON.stringify(retorno.FamiliaPorAceptar));
              }

              if (retorno.FamiliaAceptada && retorno.FamiliaAceptada.length >= 0) {
                localStorage.setItem('FAMILIA-ACEPTADA', JSON.stringify(retorno.FamiliaAceptada));
              }

              if (retorno.FamiliaRechazada && retorno.FamiliaRechazada.length >= 0) {
                localStorage.setItem('FAMILIA-RECHAZADA', JSON.stringify(retorno.FamiliaRechazada));
              }

              this.CodigoMensaje = retorno.RespuestaBase.CodigoMensaje;
              this.Mensaje = retorno.RespuestaBase.Mensaje;
              this.loggedIn = true;
              loader.dismiss();
              this.estaCargando = false;
              this.tituloLoading = ''; //si tiene usuario está valido

              if (!tieneUsuario) {
                this.utiles.presentToast("Tiene registro correcto, pero no cuenta con información en la red de salud.", "middle", 3000);
              } //this.crearToken();


              this.irAHome();
            } else {
              this.loggedIn = false;
              this.CodigoMensaje = retorno.RespuestaBase.CodigoMensaje;
              this.Mensaje = retorno.RespuestaBase.Mensaje;
              this.loggedIn = true;
              loader.dismiss();
              this.estaCargando = false;
              this.tituloLoading = '';
              this.utiles.presentToast(this.Mensaje, 'middle', 4000);
            }
          } else {
            //error también
            this.loggedIn = false;
            this.CodigoMensaje = 1000;
            this.Mensaje = 'Error de llamada Http;';
            this.loggedIn = true;
            loader.dismiss();
            this.estaCargando = false;
            this.tituloLoading = '';
            this.utiles.presentToast(this.Mensaje, 'middle', 4000);
          }
        }
      }, {
        key: "irAHome",
        value: function irAHome() {
          this.navCtrl.navigateRoot('home');
        }
      }, {
        key: "autentificarse",
        value: function autentificarse(userName, password) {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
            var _this4 = this;

            var f, loader;
            return regeneratorRuntime.wrap(function _callee2$(_context2) {
              while (1) {
                switch (_context2.prev = _context2.next) {
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
                    this.tituloLoading = 'Autentificándose';
                    _context2.next = 5;
                    return this.loading.create({
                      cssClass: 'loading-vacio',
                      showBackdrop: false,
                      spinner: null
                    });

                  case 5:
                    loader = _context2.sent;
                    _context2.next = 8;
                    return loader.present().then(function () {
                      return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(_this4, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
                        var _this5 = this;

                        return regeneratorRuntime.wrap(function _callee$(_context) {
                          while (1) {
                            switch (_context.prev = _context.next) {
                              case 0:
                                if (!this.utiles.isAppOnDevice()) {
                                  //llamada web
                                  this.acceso.loginWebDirecto(f).subscribe(function (response) {
                                    _this5.procesarLogin(response, loader);
                                  }, function (error) {
                                    console.log(error.message);
                                    loader.dismiss();
                                    _this5.estaCargando = false;
                                    _this5.tituloLoading = '';
                                  });
                                } else {
                                  //llamada nativa
                                  this.acceso.loginWebNative(f).then(function (response) {
                                    _this5.procesarLogin(JSON.parse(response.data), loader);
                                  }, function (error) {
                                    console.log(error.message);
                                    loader.dismiss();
                                    _this5.estaCargando = false;
                                    _this5.tituloLoading = '';

                                    _this5.utiles.presentToast('Ocurrió un error de autentificación', 'bottom', 4000);
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

                  case 8:
                  case "end":
                    return _context2.stop();
                }
              }
            }, _callee2, this);
          }));
        }
      }, {
        key: "salirRegistro",
        value: function salirRegistro() {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee3() {
            var titulo;
            return regeneratorRuntime.wrap(function _callee3$(_context3) {
              while (1) {
                switch (_context3.prev = _context3.next) {
                  case 0:
                    titulo = '';
                    this.navCtrl.navigateRoot('inicio');

                  case 2:
                  case "end":
                    return _context3.stop();
                }
              }
            }, _callee3, this);
          }));
        }
      }, {
        key: "onSubmit",
        value: function onSubmit() {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee5() {
            var _this6 = this;

            var fechaNac, pass, entidadRegistro, passEdt, repitaPassEdt, loader;
            return regeneratorRuntime.wrap(function _callee5$(_context5) {
              while (1) {
                switch (_context5.prev = _context5.next) {
                  case 0:
                    if (!this.forma.invalid) {
                      _context5.next = 2;
                      break;
                    }

                    return _context5.abrupt("return");

                  case 2:
                    //aca seguir con el formulario
                    //seteamos los valores para enviar el formulario
                    fechaNac = moment__WEBPACK_IMPORTED_MODULE_10__();

                    if (this.registro.FechaNacimiento) {
                      fechaNac = moment__WEBPACK_IMPORTED_MODULE_10__(this.registro.FechaNacimiento);
                    }

                    pass = "";
                    pass = this.forma.controls.clave ? this.utiles.encriptar(this.forma.controls.clave.value) : '';
                    entidadRegistro = {
                      Id: this.registro.Id.toString(),
                      Nombres: this.forma.controls.nombre ? this.forma.controls.nombre.value : '',
                      Apellidos: this.forma.controls.apellido ? this.forma.controls.apellido.value : '',
                      CorreoElectronico: this.forma.controls.email ? this.forma.controls.email.value : '',
                      NombreUsuario: this.forma.controls.email ? this.forma.controls.email.value : '',
                      //dejare por defecto genero no definido
                      Sexo: this.forma.controls.genero ? this.forma.controls.genero.value : 2,
                      DiaNacimiento: fechaNac.date(),
                      MesNacimiento: fechaNac.month() + 1,
                      AnioNacimiento: fechaNac.year(),
                      Pais: localStorage.getItem('pais'),
                      Provincia: localStorage.getItem('provincia'),
                      Region: localStorage.getItem('region'),
                      Comuna: localStorage.getItem('comuna'),
                      Password: pass,
                      ModoRegistro: 1,
                      Apodo: this.forma.controls.nombreSocial ? this.forma.controls.nombreSocial.value : '',
                      Avatar: '',
                      VersionAppName: localStorage.getItem('version_app_name'),
                      IdDispositivo: localStorage.getItem('token_dispositivo'),
                      Plataforma: localStorage.getItem('plataforma'),
                      VersionAppNumber: localStorage.getItem('version_number'),
                      TelefonoContacto: this.forma.controls.telefono ? this.forma.controls.telefono.value : '',
                      Latitud: sessionStorage.getItem('latitud'),
                      Longitud: sessionStorage.getItem('longitud'),
                      Eliminado: '0',
                      Activo: '1',
                      Run: this.forma.controls.run ? this.forma.controls.run.value : ''
                    }; //console.log(entidadRegistro);
                    //antes de guardar

                    if (!this.estaEditando) {
                      _context5.next = 16;
                      break;
                    }

                    //hay que validar las password en caso que las ingrese porque se quito que fueran
                    //requeridas cuando se edita
                    passEdt = "";
                    repitaPassEdt = "";
                    passEdt = this.forma.controls.clave ? this.utiles.encriptar(this.forma.controls.clave.value) : '';
                    repitaPassEdt = this.forma.controls.repetirClave ? this.utiles.encriptar(this.forma.controls.repetirClave.value) : '';

                    if (!(passEdt != '' || repitaPassEdt != '')) {
                      _context5.next = 16;
                      break;
                    }

                    if (!(passEdt != repitaPassEdt)) {
                      _context5.next = 16;
                      break;
                    }

                    this.utiles.presentToast("Está cambiando su password, estas deben coincidir", "bottom", 3000);
                    return _context5.abrupt("return");

                  case 16:
                    //ahora guardamos
                    //original

                    /*     let loader = await this.loading.create({
                          message: this.estaEditando ? 'Modificando...<br>Registro' : 'Creando...<br>Registro',
                          duration: 20000
                        }); */
                    this.estaCargando = true;
                    this.tituloLoading = 'Guardando el registro en la app';
                    _context5.next = 20;
                    return this.loading.create({
                      cssClass: 'loading-vacio',
                      showBackdrop: false,
                      spinner: null
                    });

                  case 20:
                    loader = _context5.sent;
                    _context5.next = 23;
                    return loader.present().then(function () {
                      return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(_this6, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee4() {
                        var _this7 = this;

                        return regeneratorRuntime.wrap(function _callee4$(_context4) {
                          while (1) {
                            switch (_context4.prev = _context4.next) {
                              case 0:
                                if (!this.utiles.isAppOnDevice()) {
                                  //llamada web
                                  this.servicioGeo.postRegistroFamilia(entidadRegistro).subscribe(function (data) {
                                    var respuesta = data;
                                    localStorage.setItem('REGISTRO', JSON.stringify(respuesta));
                                    localStorage.setItem('TIENE_REGISTRO', 'true');
                                    loader.dismiss(); //progress bar

                                    _this7.estaCargando = false;
                                    _this7.tituloLoading = '';

                                    if (localStorage.getItem('STATE_CLAVE_UNICA')) {
                                      var state = localStorage.getItem('STATE_CLAVE_UNICA'); //ACA HAY QUE HACER EL PROCESO DE ELIMINACION DEL REGISTRO Y LUEGO CONTINUAR

                                      _this7.descartarCU(entidadRegistro.Run, state, entidadRegistro.Run, entidadRegistro.Password);
                                    } else {
                                      //hay que mandarlo autentificado y con los datos del usuario aps
                                      //ver que hacemos aca
                                      if (_this7.estaEditando) {
                                        _this7.utiles.presentToast("Registro modificado con éxito", "bottom", 2000);
                                      }

                                      if (_this7.estaAgregandoFamilia) {
                                        //hacer la operacion para agregar al usuario a la familia
                                        console.log('ESTA AGREGANDO FAMILIA');
                                      } else {
                                        //si tiene pre-registro, hay que eliminarlo
                                        if (localStorage.getItem('PRE-REGISTRO')) {
                                          localStorage.removeItem('PRE-REGISTRO');
                                        }

                                        console.log('autentificarse'); //lo comentamos por mientras

                                        _this7.autentificarse(entidadRegistro.Run, entidadRegistro.Password);
                                      }
                                    }
                                  });
                                } else {
                                  //llamada nativa
                                  this.servicioGeo.postRegistroFamiliaNative(entidadRegistro).then(function (data) {
                                    var respuesta = JSON.parse(data.data);
                                    localStorage.setItem('REGISTRO', JSON.stringify(respuesta));
                                    localStorage.setItem('TIENE_REGISTRO', 'true');
                                    loader.dismiss(); //progress bar

                                    _this7.estaCargando = false;
                                    _this7.tituloLoading = '';

                                    if (localStorage.getItem('STATE_CLAVE_UNICA')) {
                                      var state = localStorage.getItem('STATE_CLAVE_UNICA'); //ACA HAY QUE HACER EL PROCESO DE ELIMINACION DEL REGISTRO Y LUEGO CONTINUAR

                                      _this7.descartarCU(entidadRegistro.Run, state, entidadRegistro.Run, entidadRegistro.Password);
                                    } else {
                                      //hay que mandarlo autentificado y con los datos del usuario aps
                                      //ver que hacemos aca
                                      if (_this7.estaEditando) {
                                        _this7.utiles.presentToast("Registro modificado con éxito", "bottom", 2000);
                                      }

                                      if (_this7.estaAgregandoFamilia) {
                                        //hacer la operacion para agregar al usuario a la familia
                                        console.log('ESTA AGREGANDO FAMILIA');
                                      } else {
                                        //si tiene pre-registro, hay que eliminarlo
                                        if (localStorage.getItem('PRE-REGISTRO')) {
                                          localStorage.removeItem('PRE-REGISTRO');
                                        }

                                        console.log('autentificarse'); //lo comentamos por mientras

                                        _this7.autentificarse(entidadRegistro.Run, entidadRegistro.Password);
                                      }
                                    }
                                  });
                                }

                              case 1:
                              case "end":
                                return _context4.stop();
                            }
                          }
                        }, _callee4, this);
                      }));
                    });

                  case 23:
                  case "end":
                    return _context5.stop();
                }
              }
            }, _callee5, this);
          }));
        }
      }, {
        key: "descartarCU",
        value: function descartarCU(run, state, usuario, passord) {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee7() {
            var _this8 = this;

            var loader2;
            return regeneratorRuntime.wrap(function _callee7$(_context7) {
              while (1) {
                switch (_context7.prev = _context7.next) {
                  case 0:
                    _context7.next = 2;
                    return this.loading.create({
                      message: 'Descartando...<br>Registro Clave única',
                      duration: 3000
                    });

                  case 2:
                    loader2 = _context7.sent;
                    _context7.next = 5;
                    return loader2.present().then(function () {
                      return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(_this8, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee6() {
                        var _this9 = this;

                        return regeneratorRuntime.wrap(function _callee6$(_context6) {
                          while (1) {
                            switch (_context6.prev = _context6.next) {
                              case 0:
                                if (!this.utiles.isAppOnDevice()) {
                                  //web
                                  this.servicioGeo.postValidacionClaveUnica(run, state).subscribe(function (response) {
                                    //aca quedamos, no habría que hacer nada
                                    //console.log(response);
                                    localStorage.removeItem('STATE_CLAVE_UNICA');
                                    loader2.dismiss(); //aca finalmente mandarlo a autentificar

                                    if (_this9.estaAgregandoFamilia) {
                                      //guardar los datos en la familia
                                      console.log('ESTA AGREGANDO FAMILIA');
                                    } else {
                                      _this9.autentificarse(usuario, passord);
                                    }
                                  });
                                } else {
                                  //nativa
                                  this.servicioGeo.postValidacionClaveUnicaNative(run, state).then(function (response) {
                                    var responseData = JSON.parse(response.data); //console.log(responseData);

                                    localStorage.removeItem('STATE_CLAVE_UNICA');
                                    loader2.dismiss(); //aca mandarlo a autentificar

                                    if (_this9.estaAgregandoFamilia) {
                                      //guardar los datos en la familia
                                      console.log('ESTA AGREGANDO FAMILIA');
                                    } else {
                                      _this9.autentificarse(usuario, passord);
                                    }
                                  });
                                }

                              case 1:
                              case "end":
                                return _context6.stop();
                            }
                          }
                        }, _callee6, this);
                      }));
                    });

                  case 5:
                  case "end":
                    return _context7.stop();
                }
              }
            }, _callee7, this);
          }));
        }
      }, {
        key: "validarCorreo",
        value: function validarCorreo(event) {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee9() {
            var _this10 = this;

            var correo, loader;
            return regeneratorRuntime.wrap(function _callee9$(_context9) {
              while (1) {
                switch (_context9.prev = _context9.next) {
                  case 0:
                    //let correo = event.target.value;
                    //console.log(event);
                    correo = this.forma.controls.email.value;
                    _context9.next = 3;
                    return this.loading.create({
                      message: 'Verificando...<br>Correo electrónico',
                      duration: 3000
                    });

                  case 3:
                    loader = _context9.sent;
                    _context9.next = 6;
                    return loader.present().then(function () {
                      return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(_this10, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee8() {
                        var _this11 = this;

                        return regeneratorRuntime.wrap(function _callee8$(_context8) {
                          while (1) {
                            switch (_context8.prev = _context8.next) {
                              case 0:
                                if (!this.utiles.isAppOnDevice()) {
                                  //llamada web
                                  this.servicioGeo.postValidarCorreo(correo).subscribe(function (response) {
                                    //procesar
                                    if (response && response.CodigoMensaje != 0) {
                                      _this11.utiles.presentToast(response.Mensaje, "middle", 3000);

                                      _this11.forma.controls.email.setValue('');
                                    }
                                  });
                                } else {
                                  //llamada nativa
                                  this.servicioGeo.postValidarCorreoNative(correo).then(function (response) {
                                    //procesar JSON.parse(response.data)
                                    var responseData = JSON.parse(response.data);

                                    if (response && response.CodigoMensaje != 0) {
                                      _this11.utiles.presentToast(response.Mensaje, "middle", 3000);

                                      _this11.forma.controls.email.setValue('');
                                    }
                                  }, function (error) {
                                    _this11.utiles.presentToast('Ocurrió un al procesar clave única', 'bottom', 4000);
                                  });
                                }

                              case 1:
                              case "end":
                                return _context8.stop();
                            }
                          }
                        }, _callee8, this);
                      }));
                    });

                  case 6:
                  case "end":
                    return _context9.stop();
                }
              }
            }, _callee9, this);
          }));
        }
      }, {
        key: "onChangeAcepta",
        value: function onChangeAcepta(event) {
          if (event.detail) {
            //this.aceptaCondiciones = event.detail.checked;
            if (event.detail.checked == false) {
              this.utiles.presentToast("Para continuar debe aceptar las condiciones del servicio, puede revisar las condiciones haciendo click en el ícono al costado derecho del check.", "middle", 3000);
            }
          }
        }
      }, {
        key: "abrirPDF",
        value: function abrirPDF() {
          if (this.rutaAceptoCondiciones != '#') {
            //abrir en una ventana nueva
            if (this.utiles.isAppOnDevice()) {
              var target = "_system";
              this.inap.create(encodeURI(this.rutaAceptoCondiciones), target, this.options);
            } else {
              //web
              window.open(encodeURI(this.rutaAceptoCondiciones), "_system", "location=yes");
            }
          }
        }
      }, {
        key: "f",
        get: function get() {
          return this.forma.controls;
        }
      }]);

      return RegistroUsuarioPage;
    }();

    RegistroUsuarioPage.ctorParameters = function () {
      return [{
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"]
      }, {
        type: _app_services_ServicioUtiles__WEBPACK_IMPORTED_MODULE_6__["ServicioUtiles"]
      }, {
        type: _app_services_ServicioGeo__WEBPACK_IMPORTED_MODULE_7__["ServicioGeo"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["LoadingController"]
      }, {
        type: _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]
      }, {
        type: _app_services_ServicioAcceso__WEBPACK_IMPORTED_MODULE_8__["ServicioAcceso"]
      }, {
        type: _app_services_ServicioParametrosApp__WEBPACK_IMPORTED_MODULE_9__["ServicioParametrosApp"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["AlertController"]
      }, {
        type: _ionic_native_in_app_browser_ngx__WEBPACK_IMPORTED_MODULE_5__["InAppBrowser"]
      }];
    };

    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('nombreId', {
      "static": true
    })], RegistroUsuarioPage.prototype, "nombreInput", void 0);
    RegistroUsuarioPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-registro-usuario',
      template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! raw-loader!./registro-usuario.page.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/registro-usuario/registro-usuario.page.html"))["default"],
      styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! ./registro-usuario.page.scss */
      "./src/app/registro-usuario/registro-usuario.page.scss"))["default"]]
    })], RegistroUsuarioPage);
    /***/
  }
}]);
//# sourceMappingURL=registro-usuario-registro-usuario-module-es5.js.map