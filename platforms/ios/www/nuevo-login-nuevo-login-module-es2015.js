(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["nuevo-login-nuevo-login-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/nuevo-login/nuevo-login.page.html":
/*!*****************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/nuevo-login/nuevo-login.page.html ***!
  \*****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-content class=\"ion-padding\">\n  <app-progress [mostrar]=\"estaCargando\" titulo=\"Estamos ingresando a la app\"></app-progress>\n\n  <div [hidden]=\"estaCargando\" class=\"row mt-24\">\n    <img src=\"../../assets/imgs_svg/login.svg\" alt=\"asistente\"/>\n  </div>\n  <form [hidden]=\"estaCargando\" [formGroup]=\"forma\" novalidate>\n    <ion-row class=\"ion-no-margin ion-no-padding mt-80\">\n      <!-- solo para enrolamiento -->\n      <mat-form-field appearance=\"outline\" style=\"width: 100%;\" [hidden]=\"usaEnrolamiento == false\">\n        <mat-label>RUN</mat-label>\n        <input matInput placeholder=\"125458524\" formControlName=\"run\" name=\"run\">\n        <mat-error [hidden]=\"usaEnrolamiento == false\">Run requerido</mat-error>\n      </mat-form-field>\n\n      <mat-form-field appearance=\"outline\" style=\"width: 100%;\" [hidden]=\"usaEnrolamiento\">\n        <mat-label>Correo electrónico</mat-label>\n        <input matInput placeholder=\"ejemplo@gmail.com\" formControlName=\"email\" name=\"email\">\n        <!--<mat-error [hidden]=\"usaEnrolamiento\">Correo requerido</mat-error>-->\n        <mat-error [hidden]=\"usaEnrolamiento\">Correo inválido</mat-error>\n      </mat-form-field>\n  \n      <mat-form-field appearance=\"outline\" style=\"width: 100%;\">\n        <mat-label>Contraseña</mat-label>\n        <input matInput placeholder=\"Clave\" type=\"password\" name=\"clave\" formControlName=\"clave\" required>\n        <mat-error [hidden]=\"!(f.clave.errors && f.clave.errors.required)\">Clave requerida</mat-error>\n      </mat-form-field>\n    </ion-row>\n    <ion-row class=\"ion-no-padding ion-no-margin mt-40\">\n      <button class=\"boton-Principal\" mat-raised-button color=\"primary\" style=\"width: 90%; margin-left: 5%; height:36px;\" (click)=\"onSubmit()\">INICIAR SESION</button>\n    </ion-row>\n  </form>\n  <ion-row [hidden]=\"estaCargando\" class=\"mt-36\" [hidden]=\"usaEnrolamiento\">\n    <a mat-button routerLink=\".\" color=\"primary\" class=\"ion-text-center accent-color\" style=\"width: 100%;\" (click)=\"irRecuperarClave()\">¿Olvidaste tu contraseña?</a>\n  </ion-row>\n  <ion-grid [hidden]=\"estaCargando\" class=\"ion-no-padding mt-36\">\n    <ion-row>\n      <ion-col class=\"ion-text-center texto-1\" style=\"margin-top:8px;\">\n        ¿No tienes cuenta?\n      </ion-col>\n      <ion-col>\n        <button class=\"accent-color\" (click)=\"abrirAsistente()\" mat-button color=\"primary\">REGISTRATE</button>\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n\n</ion-content>\n");

/***/ }),

/***/ "./src/app/nuevo-login/nuevo-login.module.ts":
/*!***************************************************!*\
  !*** ./src/app/nuevo-login/nuevo-login.module.ts ***!
  \***************************************************/
/*! exports provided: NuevoLoginPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NuevoLoginPageModule", function() { return NuevoLoginPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _nuevo_login_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./nuevo-login.page */ "./src/app/nuevo-login/nuevo-login.page.ts");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/form-field */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/form-field.js");
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/select */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/select.js");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/input */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/input.js");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/button */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/button.js");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/icon */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/icon.js");
/* harmony import */ var _components_components_module__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../components/components.module */ "./src/app/components/components.module.ts");













let NuevoLoginPageModule = class NuevoLoginPageModule {
};
NuevoLoginPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _angular_material_form_field__WEBPACK_IMPORTED_MODULE_7__["MatFormFieldModule"],
            _angular_material_select__WEBPACK_IMPORTED_MODULE_8__["MatSelectModule"],
            _angular_material_input__WEBPACK_IMPORTED_MODULE_9__["MatInputModule"],
            _angular_material_button__WEBPACK_IMPORTED_MODULE_10__["MatButtonModule"],
            _angular_material_icon__WEBPACK_IMPORTED_MODULE_11__["MatIconModule"],
            _components_components_module__WEBPACK_IMPORTED_MODULE_12__["ComponentsModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterModule"].forChild([
                {
                    path: '',
                    component: _nuevo_login_page__WEBPACK_IMPORTED_MODULE_6__["NuevoLoginPage"]
                }
            ])
        ],
        declarations: [_nuevo_login_page__WEBPACK_IMPORTED_MODULE_6__["NuevoLoginPage"]]
    })
], NuevoLoginPageModule);



/***/ }),

/***/ "./src/app/nuevo-login/nuevo-login.page.scss":
/*!***************************************************!*\
  !*** ./src/app/nuevo-login/nuevo-login.page.scss ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".mt-32 {\n  margin-top: 32px;\n}\n\n.mt-24 {\n  margin-top: 24px;\n}\n\n.mt-80 {\n  margin-top: 5em;\n}\n\n.mt-40 {\n  margin-top: 2.5em;\n}\n\n.mt-36 {\n  margin-top: 2.25em;\n}\n\n.texto-1 {\n  font-size: 0.875em;\n  color: #0000008A;\n}\n\n.example-container .mat-form-field + .mat-form-field {\n  margin-left: 8px;\n}\n\n.example-right-align {\n  text-align: right;\n}\n\ninput.example-right-align::-webkit-outer-spin-button,\ninput.example-right-align::-webkit-inner-spin-button {\n  display: none;\n}\n\ninput.example-right-align {\n  -moz-appearance: textfield;\n}\n\n.accent-color {\n  color: #FF4081;\n}\n\n.boton-Principal {\n  background-color: #FF4081;\n  color: #ffffff;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy92aWN0b3Jjb3JvbmFkby9EZXNrdG9wL21pRmFtaWxpYV9wcmUvc3JjL2FwcC9udWV2by1sb2dpbi9udWV2by1sb2dpbi5wYWdlLnNjc3MiLCJzcmMvYXBwL251ZXZvLWxvZ2luL251ZXZvLWxvZ2luLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGdCQUFBO0FDQ0Y7O0FEQ0E7RUFDRSxnQkFBQTtBQ0VGOztBREFBO0VBQ0UsZUFBQTtBQ0dGOztBRERBO0VBQ0UsaUJBQUE7QUNJRjs7QURGQTtFQUNFLGtCQUFBO0FDS0Y7O0FESEE7RUFDRSxrQkFBQTtFQUNBLGdCQUFBO0FDTUY7O0FESEE7RUFDRSxnQkFBQTtBQ01GOztBREhBO0VBQ0UsaUJBQUE7QUNNRjs7QURIQTs7RUFFRSxhQUFBO0FDTUY7O0FESEE7RUFDRSwwQkFBQTtBQ01GOztBREZBO0VBQ0UsY0FBQTtBQ0tGOztBREZBO0VBQ0UseUJBQUE7RUFDQSxjQUFBO0FDS0YiLCJmaWxlIjoic3JjL2FwcC9udWV2by1sb2dpbi9udWV2by1sb2dpbi5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIubXQtMzJ7XHJcbiAgbWFyZ2luLXRvcDogMzJweDtcclxufVxyXG4ubXQtMjR7XHJcbiAgbWFyZ2luLXRvcDogMjRweDtcclxufVxyXG4ubXQtODB7XHJcbiAgbWFyZ2luLXRvcDogNWVtO1xyXG59XHJcbi5tdC00MHtcclxuICBtYXJnaW4tdG9wOiAyLjVlbTtcclxufVxyXG4ubXQtMzZ7XHJcbiAgbWFyZ2luLXRvcDogMi4yNWVtO1xyXG59XHJcbi50ZXh0by0xe1xyXG4gIGZvbnQtc2l6ZTogMC44NzVlbTtcclxuICBjb2xvcjogIzAwMDAwMDhBO1xyXG4gIFxyXG59XHJcbi5leGFtcGxlLWNvbnRhaW5lciAubWF0LWZvcm0tZmllbGQgKyAubWF0LWZvcm0tZmllbGQge1xyXG4gIG1hcmdpbi1sZWZ0OiA4cHg7XHJcbn1cclxuXHJcbi5leGFtcGxlLXJpZ2h0LWFsaWduIHtcclxuICB0ZXh0LWFsaWduOiByaWdodDtcclxufVxyXG5cclxuaW5wdXQuZXhhbXBsZS1yaWdodC1hbGlnbjo6LXdlYmtpdC1vdXRlci1zcGluLWJ1dHRvbixcclxuaW5wdXQuZXhhbXBsZS1yaWdodC1hbGlnbjo6LXdlYmtpdC1pbm5lci1zcGluLWJ1dHRvbiB7XHJcbiAgZGlzcGxheTogbm9uZTtcclxufVxyXG5cclxuaW5wdXQuZXhhbXBsZS1yaWdodC1hbGlnbiB7XHJcbiAgLW1vei1hcHBlYXJhbmNlOiB0ZXh0ZmllbGQ7XHJcbn1cclxuXHJcbi8vQWp1c3RlcyBkZSBlc3RpbG9zIFxyXG4uYWNjZW50LWNvbG9yIHtcclxuICBjb2xvcjogI0ZGNDA4MTtcclxufVxyXG5cclxuLmJvdG9uLVByaW5jaXBhbCB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogI0ZGNDA4MTtcclxuICBjb2xvcjogI2ZmZmZmZjtcclxufSIsIi5tdC0zMiB7XG4gIG1hcmdpbi10b3A6IDMycHg7XG59XG5cbi5tdC0yNCB7XG4gIG1hcmdpbi10b3A6IDI0cHg7XG59XG5cbi5tdC04MCB7XG4gIG1hcmdpbi10b3A6IDVlbTtcbn1cblxuLm10LTQwIHtcbiAgbWFyZ2luLXRvcDogMi41ZW07XG59XG5cbi5tdC0zNiB7XG4gIG1hcmdpbi10b3A6IDIuMjVlbTtcbn1cblxuLnRleHRvLTEge1xuICBmb250LXNpemU6IDAuODc1ZW07XG4gIGNvbG9yOiAjMDAwMDAwOEE7XG59XG5cbi5leGFtcGxlLWNvbnRhaW5lciAubWF0LWZvcm0tZmllbGQgKyAubWF0LWZvcm0tZmllbGQge1xuICBtYXJnaW4tbGVmdDogOHB4O1xufVxuXG4uZXhhbXBsZS1yaWdodC1hbGlnbiB7XG4gIHRleHQtYWxpZ246IHJpZ2h0O1xufVxuXG5pbnB1dC5leGFtcGxlLXJpZ2h0LWFsaWduOjotd2Via2l0LW91dGVyLXNwaW4tYnV0dG9uLFxuaW5wdXQuZXhhbXBsZS1yaWdodC1hbGlnbjo6LXdlYmtpdC1pbm5lci1zcGluLWJ1dHRvbiB7XG4gIGRpc3BsYXk6IG5vbmU7XG59XG5cbmlucHV0LmV4YW1wbGUtcmlnaHQtYWxpZ24ge1xuICAtbW96LWFwcGVhcmFuY2U6IHRleHRmaWVsZDtcbn1cblxuLmFjY2VudC1jb2xvciB7XG4gIGNvbG9yOiAjRkY0MDgxO1xufVxuXG4uYm90b24tUHJpbmNpcGFsIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI0ZGNDA4MTtcbiAgY29sb3I6ICNmZmZmZmY7XG59Il19 */");

/***/ }),

/***/ "./src/app/nuevo-login/nuevo-login.page.ts":
/*!*************************************************!*\
  !*** ./src/app/nuevo-login/nuevo-login.page.ts ***!
  \*************************************************/
/*! exports provided: NuevoLoginPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NuevoLoginPage", function() { return NuevoLoginPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _app_services_ServicioUtiles__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../app/services/ServicioUtiles */ "./src/app/services/ServicioUtiles.ts");
/* harmony import */ var _app_services_ServicioGeo__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../app/services/ServicioGeo */ "./src/app/services/ServicioGeo.ts");
/* harmony import */ var _app_services_ServicioAcceso__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../app/services/ServicioAcceso */ "./src/app/services/ServicioAcceso.ts");
/* harmony import */ var _app_services_ServicioParametrosApp__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../app/services/ServicioParametrosApp */ "./src/app/services/ServicioParametrosApp.ts");
/* harmony import */ var _app_services_ServicioFCM__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../app/services/ServicioFCM */ "./src/app/services/ServicioFCM.ts");
/* harmony import */ var _app_services_ServicioNotificaciones__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../app/services/ServicioNotificaciones */ "./src/app/services/ServicioNotificaciones.ts");
/* harmony import */ var _app_services_network_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../app/services/network.service */ "./src/app/services/network.service.ts");
/* harmony import */ var _ionic_native_app_version_ngx__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @ionic-native/app-version/ngx */ "./node_modules/@ionic-native/app-version/__ivy_ngcc__/ngx/index.js");
/* harmony import */ var _ionic_native_network_ngx__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @ionic-native/network/ngx */ "./node_modules/@ionic-native/network/__ivy_ngcc__/ngx/index.js");
/* harmony import */ var _ionic_native_device_ngx__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @ionic-native/device/ngx */ "./node_modules/@ionic-native/device/__ivy_ngcc__/ngx/index.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! moment */ "./node_modules/moment/moment.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_15__);





//servicios











//estoy implementando progress bar
//aca hay que controlar cuando no hay internet
let NuevoLoginPage = class NuevoLoginPage {
    constructor(navCtrl, utiles, servicioGeo, loading, formBuilder, activatedRoute, router, acceso, parametrosApp, fcmService, appVersion, platform, device, alertController, servNotificaciones, networkService, network) {
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
        this.alertController = alertController;
        this.servNotificaciones = servNotificaciones;
        this.networkService = networkService;
        this.network = network;
        this.hide = true;
        //para validar
        this.patternOnlyLetter = '[a-zA-ZÀ-ÿ\u00f1\u00d1]+(\s*[a-zA-ZÀ-ÿ\u00f1\u00d1]*)*[a-zA-ZÀ-ÿ\u00f1\u00d1 ]+$';
        this.expCelular = /^(\+?56)?(\s?)(0?9)(\s?)[9876543]\d{7}$/gm;
        this.expPassword = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{4,8}$/gm;
        this.expEmail = /^[^@\s]+@[^@\s]+\.[^@\s]+$/gm;
        //para validarse solo con enrolamiento
        this.usaEnrolamiento = false;
        //PARA REGISTRAR EL MOVIMIENTO DE INGRESO
        this.objetoEntrada = {
            VersionAppName: '',
            Plataforma: '',
            Token: '',
            VersionAppNumber: '',
            Fecha: new Date(),
            TipoOperacion: '0',
            Id: '0'
        };
        //para progress bar
        this.estaCargando = false;
        this.esDataLocal = false;
        this.dataLocalStorage = {
            PARAMETROS_APP: [
                {
                    "Id": 1,
                    "Nombre": "USA_CLAVE_UNICA",
                    "Valor": "0",
                    "Descripcion": "DEFINE SI LA APP USA CLAVE UNICA                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    ",
                    "Eliminado": 0
                },
                {
                    "Id": 2,
                    "Nombre": "HORAS_FECHA_INICIO",
                    "Valor": "3",
                    "Descripcion": "DETERMINA LA CANTIDAD DE HORAS DESDE LA HORA ACTUAL PARA EMPEZAR A CONSULTAR AGENDAMIENTO REMOTO                                                                                                                                                                                                                                                                                                                                                                                                                    ",
                    "Eliminado": 0
                },
                {
                    "Id": 3,
                    "Nombre": "USA_ENTIDAD_CONTRATANTE",
                    "Valor": "1",
                    "Descripcion": "DETERMINA SI USA ENTIDAD CONTRATANTE AL LOGUEARSE, ES PARTE DE LA VALIDACION                                                                                                                                                                                                                                                                                                                                                                                                                                        ",
                    "Eliminado": 0
                },
                {
                    "Id": 4,
                    "Nombre": "USA_LOGIN_ENROLAMIENTO",
                    "Valor": "0",
                    "Descripcion": "DETERMINA SI USA ENROLAMIENTO EN VEZ DE REGISTRO                                                                                                                                                                                                                                                                                                                                                                                                                                                                    ",
                    "Eliminado": 0
                },
                {
                    "Id": 5,
                    "Nombre": "USA_API_MANAGEMENT",
                    "Valor": "1",
                    "Descripcion": "DETERMINA SI USA API MANAGEMENT                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     ",
                    "Eliminado": 0
                },
                {
                    "Id": 6,
                    "Nombre": "USA_LOG_MODULOS",
                    "Valor": "1",
                    "Descripcion": "DETERMINA SI ESCRIBE LAS ACCIONES EN LA TABLA MAP_MOVIMIENTOS_APP                                                                                                                                                                                                                                                                                                                                                                                                                                                   ",
                    "Eliminado": 0
                },
                {
                    "Id": 7,
                    "Nombre": "DIAS_LOG_MODULOS",
                    "Valor": "5",
                    "Descripcion": "DETERMINA LA CANTIDAD DE DIAS PARA CONSULTAR LOS MOVIMIENTOS DEL USUARIO EN LOS MODULOS DE LA APLICACIÓN                                                                                                                                                                                                                                                                                                                                                                                                            ",
                    "Eliminado": 0
                },
                {
                    "Id": 8,
                    "Nombre": "RESTRINGE_REGISTRO_MENORES_EDAD",
                    "Valor": "1",
                    "Descripcion": "DETERMINA SI RESGTRINGE EL REGISTRO A LA APP A MENORES DE EDAD, POR DEFECTO DEBE RESTRINGIRLO, SIN EMBARGO SE PARAMETRIZA IGUAL.                                                                                                                                                                                                                                                                                                                                                                                    ",
                    "Eliminado": 0
                },
                {
                    "Id": 9,
                    "Nombre": "URL_ACEPTA_CONDICIONES",
                    "Valor": "#",
                    "Descripcion": "URL DEL ARCHIVO PDF QUE TIENE EL ACEPTA CONDICIONES DE LA APP MI FAMILIA.                                                                                                                                                                                                                                                                                                                                                                                                                                           ",
                    "Eliminado": 0
                }
            ],
            UsuarioAps: {
                "Id": 15029781,
                "NodId": 2411,
                "Nombres": "Victor Edgardo",
                "ApellidoPaterno": "Coronado",
                "ApellidoMaterno": "Troncoso",
                "Rut": "400000018",
                "Direccion": "Cordon Roma 0621 - Villa La Primavera, Puente Alto- Chile",
                "FechaDeNacimiento": "1973-01-24T12:57:00",
                "IdRyf": "15245358",
                "Edad": 48,
                "Establecimiento": {
                    "RazonSocial": "RAYENSALUD [CESFAM]",
                    "Dominio": "CESFAMRAYENSALUD",
                    "Descripcion": "RAYENSALUD [CESFAM]",
                    "Direccion1": "Paulino Alfonso 3900",
                    "CodigoDeis": "99-991"
                },
                "FamId": 58539323,
                "UrlImagen": "Recursos/logousuario.png",
                "Color": "#757575",
                "EsLogueado": false,
                "Email": "vcoronado.alarcon@gmail.com",
                "NombreResponde": "Corito Pro",
                "ClavePortal": "",
                "ConfiguracionNodo": {
                    "NodId": 2411,
                    "CodigoDeis2014": "199991"
                },
                "ParametrosRayen": [],
                "EntidadContratante": [
                    {
                        "Id": 1,
                        "Nombre": "S.S. Metropolitano Occidente",
                        "Activo": 1,
                        "Eliminado": 0
                    }
                ],
                "Parentezco": {
                    "Id": 26,
                    "Codigo": "SEL",
                    "Nombre": "La misma persona",
                    "Descripcion": "La misma persona",
                    "Consanguineo": false,
                    "Sexo": 5,
                    "Mostrar": true,
                    "Editar": true
                },
                "VacunasCovid": [],
                "Contactabilidad": {
                    "Id": 1,
                    "FechaHoraRegistro": "2021-06-18T12:53:30.81",
                    "Run": "400000018",
                    "Telefono": "940178392",
                    "Email": "vcoronado.alarcon@gmail.com",
                    "NombreSocial": "Corito pro",
                    "EtiquetaTelefono": "MOVIL_FICHA_FAMILIAR",
                    "Eliminado": 0
                }
            },
            ALERGIAS: [
                {
                    "UsuarioAps": {
                        "Id": 15029781,
                        "NodId": 2411,
                        "Nombres": "Victor Edgardo",
                        "ApellidoPaterno": "Coronado",
                        "ApellidoMaterno": "Troncoso",
                        "Rut": "400000018",
                        "Direccion": "Cordon Roma 0621 - Villa La Primavera, Puente Alto- Chile",
                        "FechaDeNacimiento": "1973-01-24T12:57:00",
                        "IdRyf": "15245358",
                        "Edad": 48,
                        "Establecimiento": {
                            "RazonSocial": "RAYENSALUD [CESFAM]",
                            "Dominio": "CESFAMRAYENSALUD",
                            "Descripcion": "RAYENSALUD [CESFAM]",
                            "Direccion1": "Paulino Alfonso 3900",
                            "CodigoDeis": "99-991"
                        },
                        "FamId": 58539323,
                        "UrlImagen": "Recursos/logousuario.png",
                        "Color": "#757575",
                        "EsLogueado": false,
                        "Email": "vcoronado.alarcon@gmail.com",
                        "NombreResponde": "Corito Pro",
                        "ClavePortal": "",
                        "ConfiguracionNodo": {
                            "NodId": 2411,
                            "CodigoDeis2014": "199991"
                        },
                        "ParametrosRayen": [],
                        "EntidadContratante": [
                            {
                                "Id": 1,
                                "Nombre": "S.S. Metropolitano Occidente",
                                "Activo": 1,
                                "Eliminado": 0
                            }
                        ],
                        "Parentezco": {
                            "Id": 26,
                            "Codigo": "SEL",
                            "Nombre": "La misma persona",
                            "Descripcion": "La misma persona",
                            "Consanguineo": false,
                            "Sexo": 5,
                            "Mostrar": true,
                            "Editar": true
                        },
                        "VacunasCovid": [],
                        "Contactabilidad": {
                            "Id": 1,
                            "FechaHoraRegistro": "2021-06-18T12:53:30.81",
                            "Run": "400000018",
                            "Telefono": "940178392",
                            "Email": "vcoronado.alarcon@gmail.com",
                            "NombreSocial": "Corito pro",
                            "EtiquetaTelefono": "MOVIL_FICHA_FAMILIAR",
                            "Eliminado": 0
                        }
                    },
                    "Alergias": {
                        "AlergiasUsp": [
                            {
                                "Descripcion": "Penicilina",
                                "Observacion": "No hay",
                                "Fecha": "2021-06-15T13:10:18"
                            },
                            {
                                "Descripcion": "Coliflor",
                                "Observacion": "No hay",
                                "Fecha": "2021-06-08T00:00:00"
                            }
                        ],
                        "RespuestaBase": {
                            "CodigoMensaje": 0,
                            "Mensaje": "Exito"
                        }
                    }
                }
            ],
            MORBIDOS: [
                {
                    "UsuarioAps": {
                        "Id": 15029781,
                        "NodId": 2411,
                        "Nombres": "Victor Edgardo",
                        "ApellidoPaterno": "Coronado",
                        "ApellidoMaterno": "Troncoso",
                        "Rut": "400000018",
                        "Direccion": "Cordon Roma 0621 - Villa La Primavera, Puente Alto- Chile",
                        "FechaDeNacimiento": "1973-01-24T12:57:00",
                        "IdRyf": "15245358",
                        "Edad": 48,
                        "Establecimiento": {
                            "RazonSocial": "RAYENSALUD [CESFAM]",
                            "Dominio": "CESFAMRAYENSALUD",
                            "Descripcion": "RAYENSALUD [CESFAM]",
                            "Direccion1": "Paulino Alfonso 3900",
                            "CodigoDeis": "99-991"
                        },
                        "FamId": 58539323,
                        "UrlImagen": "Recursos/logousuario.png",
                        "Color": "#757575",
                        "EsLogueado": false,
                        "Email": "vcoronado.alarcon@gmail.com",
                        "NombreResponde": "Corito Pro",
                        "ClavePortal": "",
                        "ConfiguracionNodo": {
                            "NodId": 2411,
                            "CodigoDeis2014": "199991"
                        },
                        "ParametrosRayen": [],
                        "EntidadContratante": [
                            {
                                "Id": 1,
                                "Nombre": "S.S. Metropolitano Occidente",
                                "Activo": 1,
                                "Eliminado": 0
                            }
                        ],
                        "Parentezco": {
                            "Id": 26,
                            "Codigo": "SEL",
                            "Nombre": "La misma persona",
                            "Descripcion": "La misma persona",
                            "Consanguineo": false,
                            "Sexo": 5,
                            "Mostrar": true,
                            "Editar": true
                        },
                        "VacunasCovid": [],
                        "Contactabilidad": {
                            "Id": 1,
                            "FechaHoraRegistro": "2021-06-18T12:53:30.81",
                            "Run": "400000018",
                            "Telefono": "940178392",
                            "Email": "vcoronado.alarcon@gmail.com",
                            "NombreSocial": "Corito pro",
                            "EtiquetaTelefono": "MOVIL_FICHA_FAMILIAR",
                            "Eliminado": 0
                        }
                    },
                    "Morbidos": {
                        "Antecedentes": {
                            "Familiares": {
                                "Antecedente": [
                                    "Hiperesplenismo",
                                    "Diabetes mellitus insulinodependiente"
                                ]
                            },
                            "Personales": {
                                "Antecedente": [
                                    "Otras hipoglicemias",
                                    "Hiperqueratosis de frambesia"
                                ]
                            }
                        }
                    }
                }
            ],
            UsuariosFamilia: [],
            REGISTRO: {
                "Id": 88,
                "CorreoElectronico": "vcoronado.alarcon@gmail.com",
                "Password": "MTIzNDU2",
                "FechaRegistro": "2021-06-18T12:53:56.16",
                "ModoRegistro": 1,
                "NombreUsuario": "vcoronado.alarcon@gmail.com",
                "FechaNacimiento": "0001-01-01T00:00:00",
                "Sexo": 0,
                "Eliminado": 0,
                "Activo": 1,
                "Nombres": "Victor hugo",
                "Apellidos": "Troncoso",
                "FechaBaja": "0001-01-01T00:00:00",
                "Apodo": "Corito producción",
                "Avatar": "",
                "VersionAppName": "Mi familia app",
                "Plataforma": "Android",
                "VersionAppNumber": "1.0.0",
                "IdDispositivo": "4e30592675cc75d1",
                "Pais": "Chile",
                "Provincia": "Cordillera Province",
                "Region": "Santiago Metropolitan Region",
                "Comuna": "Puente Alto",
                "Latitud": "",
                "Longitud": "",
                "TelefonoContacto": "940178392",
                "Run": "40000001-8"
            },
            MI_RUT: '400000018',
            MI_NOMBRE: 'Victor Edgardo Coronado',
            FAMILIA_POR_ACEPTAR: [],
            FAMILIA_ACEPTADA: [],
            FAMILIA_RECHAZAZDA: [],
            ANTECEDENTES: [
                {
                    "UsuarioAps": {
                        "Id": 15029781,
                        "NodId": 2411,
                        "Nombres": "Victor Edgardo",
                        "ApellidoPaterno": "Coronado",
                        "ApellidoMaterno": "Troncoso",
                        "Rut": "400000018",
                        "Direccion": "Cordon Roma 0621 - Villa La Primavera, Puente Alto- Chile",
                        "FechaDeNacimiento": "1973-01-24T12:57:00",
                        "IdRyf": "15245358",
                        "Edad": 48,
                        "Establecimiento": {
                            "RazonSocial": "RAYENSALUD [CESFAM]",
                            "Dominio": "CESFAMRAYENSALUD",
                            "Descripcion": "RAYENSALUD [CESFAM]",
                            "Direccion1": "Paulino Alfonso 3900",
                            "CodigoDeis": "99-991"
                        },
                        "FamId": 58539323,
                        "UrlImagen": "Recursos/logousuario.png",
                        "Color": "#757575",
                        "EsLogueado": false,
                        "Email": "vcoronado.alarcon@gmail.com",
                        "NombreResponde": "Corito Pro",
                        "ClavePortal": "",
                        "ConfiguracionNodo": {
                            "NodId": 2411,
                            "CodigoDeis2014": "199991"
                        },
                        "ParametrosRayen": [],
                        "EntidadContratante": [
                            {
                                "Id": 1,
                                "Nombre": "S.S. Metropolitano Occidente",
                                "Activo": 1,
                                "Eliminado": 0
                            }
                        ],
                        "Parentezco": {
                            "Id": 26,
                            "Codigo": "SEL",
                            "Nombre": "La misma persona",
                            "Descripcion": "La misma persona",
                            "Consanguineo": false,
                            "Sexo": 5,
                            "Mostrar": true,
                            "Editar": true
                        },
                        "VacunasCovid": [],
                        "Contactabilidad": {
                            "Id": 1,
                            "FechaHoraRegistro": "2021-06-18T12:53:30.81",
                            "Run": "400000018",
                            "Telefono": "940178392",
                            "Email": "vcoronado.alarcon@gmail.com",
                            "NombreSocial": "Corito pro",
                            "EtiquetaTelefono": "MOVIL_FICHA_FAMILIAR",
                            "Eliminado": 0
                        }
                    },
                    "Mediciones": {
                        "IndicadorValorUsp": [
                            {
                                "Descripcion": "Peso (Kg)",
                                "Valor": 94,
                                "fecha": "2021-06-15 13:30:17"
                            },
                            {
                                "Descripcion": "Talla (cm)",
                                "Valor": 175,
                                "fecha": "2021-06-15 13:30:17"
                            },
                            {
                                "Descripcion": "I.M.C.",
                                "Valor": 30.69999999,
                                "fecha": "2021-06-15 13:30:17"
                            },
                            {
                                "Descripcion": "Presión Arterial Diastólica",
                                "Valor": 80,
                                "fecha": "2021-06-15 13:30:17"
                            },
                            {
                                "Descripcion": "Presión Arterial Sistólica",
                                "Valor": 120,
                                "fecha": "2021-06-15 13:30:17"
                            }
                        ],
                        "RespuestaBase": {
                            "CodigoMensaje": 0,
                            "Mensaje": "Exito"
                        }
                    }
                }
            ]
        };
        this.dataSessionStorage = {
            ENTRADA: {
                "VersionAppName": "Mi salud familiar",
                "Plataforma": "Web",
                "Token": "55566.394325136316 web",
                "VersionAppNumber": "0.0",
                "Fecha": "2021-07-12T02:18:32.231Z",
                "TipoOperacion": "0",
                "Id": "0"
            },
            LOG_MOVIMIENTOS: [
                {
                    "Id": 1,
                    "NombreModulo": "CALENDARIO",
                    "Total": 0,
                    "Orden": 1,
                    "Mostrar": true,
                    "Favorito": true,
                    "Imagen": "./assets/imgs_svg/calendario-01.svg",
                    "ClaseImagen": "imgs-home"
                },
                {
                    "Id": 2,
                    "NombreModulo": "ANTECEDENTES",
                    "Total": 0,
                    "Orden": 2,
                    "Mostrar": true,
                    "Favorito": true,
                    "Imagen": "./assets/imgs_svg/antecedentes.svg",
                    "ClaseImagen": "imgs-home"
                },
                {
                    "Id": 3,
                    "NombreModulo": "EXAMENES",
                    "Total": 0,
                    "Orden": 3,
                    "Mostrar": true,
                    "Favorito": false,
                    "Imagen": "./assets/imgs_svg/examenes-de-salud.svg",
                    "ClaseImagen": "imgs-home"
                },
                {
                    "Id": 4,
                    "NombreModulo": "INTERCONSULTAS",
                    "Total": 0,
                    "Orden": 4,
                    "Mostrar": false,
                    "Favorito": false,
                    "Imagen": "./assets/imgs_svg/interconsulta_desactivado.svg",
                    "ClaseImagen": "imgs-home"
                }
            ],
            UsuarioAps: {
                "Id": 15029781,
                "NodId": 2411,
                "Nombres": "Victor Edgardo",
                "ApellidoPaterno": "Coronado",
                "ApellidoMaterno": "Troncoso",
                "Rut": "400000018",
                "Direccion": "Cordon Roma 0621 - Villa La Primavera, Puente Alto- Chile",
                "FechaDeNacimiento": "1973-01-24T12:57:00",
                "IdRyf": "15245358",
                "Edad": 48,
                "Establecimiento": {
                    "RazonSocial": "RAYENSALUD [CESFAM]",
                    "Dominio": "CESFAMRAYENSALUD",
                    "Descripcion": "RAYENSALUD [CESFAM]",
                    "Direccion1": "Paulino Alfonso 3900",
                    "CodigoDeis": "99-991"
                },
                "FamId": 58539323,
                "UrlImagen": "Recursos/logousuario.png",
                "Color": "#757575",
                "EsLogueado": false,
                "Email": "vcoronado.alarcon@gmail.com",
                "NombreResponde": "Corito Pro",
                "ClavePortal": "",
                "ConfiguracionNodo": {
                    "NodId": 2411,
                    "CodigoDeis2014": "199991"
                },
                "ParametrosRayen": [],
                "EntidadContratante": [
                    {
                        "Id": 1,
                        "Nombre": "S.S. Metropolitano Occidente",
                        "Activo": 1,
                        "Eliminado": 0
                    }
                ],
                "Parentezco": {
                    "Id": 26,
                    "Codigo": "SEL",
                    "Nombre": "La misma persona",
                    "Descripcion": "La misma persona",
                    "Consanguineo": false,
                    "Sexo": 5,
                    "Mostrar": true,
                    "Editar": true
                },
                "VacunasCovid": [],
                "Contactabilidad": {
                    "Id": 1,
                    "FechaHoraRegistro": "2021-06-18T12:53:30.81",
                    "Run": "400000018",
                    "Telefono": "940178392",
                    "Email": "vcoronado.alarcon@gmail.com",
                    "NombreSocial": "Corito pro",
                    "EtiquetaTelefono": "MOVIL_FICHA_FAMILIAR",
                    "Eliminado": 0
                }
            }
        };
        this.statusNetwork = 'online';
    }
    ngOnInit() {
        moment__WEBPACK_IMPORTED_MODULE_15__["locale"]('es');
        this.servNotificaciones.buscarCitasTodas();
        this.usaEnrolamiento = this.parametrosApp.USA_LOGIN_ENROLAMIENTO();
        this.cargarForma();
    }
    abrirAsistente() {
        const navigationExtras = {
            queryParams: {
                modulo: 'nuevo-login'
            }
        };
        this.navCtrl.navigateRoot(['pre-registro-uno'], navigationExtras);
    }
    cargarForma() {
        this.forma = new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormGroup"]({
            'run': new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required]),
            'email': new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].pattern(this.expEmail)]),
            'clave': new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].minLength(3), _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].maxLength(10)])
        });
        //si usa enrolamiento hay que quitar validación de email
        if (this.usaEnrolamiento) {
            this.forma.get('email').clearValidators();
        }
        else {
            this.forma.get('run').clearValidators();
        }
        //acá ver si dejamos preseteado el usuario y clave
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
    crearToken() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            var versionAppName;
            var versionNumber;
            var plataforma;
            //original
            /*     let loader = await this.loading.create({
                  message: 'Creando...<br>Token inicial',
                  duration: 2000
                }); */
            this.estaCargando = true;
            let loader = yield this.loading.create({
                cssClass: 'loading-vacio',
                showBackdrop: false,
                spinner: null,
            });
            yield loader.present().then(() => Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
                if (!this.utiles.isAppOnDevice()) {
                    //web
                    //guardar local storage
                    if (!localStorage.getItem('token_dispositivo')) {
                        //crear token para web
                        this.tokenDispositivo = (Math.random() * (1000000 - 1) + 1).toString() + ' web';
                        localStorage.setItem('token_dispositivo', this.tokenDispositivo);
                    }
                    else {
                        this.tokenDispositivo = localStorage.getItem('token_dispositivo');
                    }
                    versionAppName = "Mi salud familiar";
                    versionNumber = "0.0";
                    plataforma = "Web";
                    //loader.dismiss();
                    //otras variables
                    localStorage.setItem('version_app_name', versionAppName);
                    localStorage.setItem('version_number', versionNumber);
                    localStorage.setItem('plataforma', plataforma);
                    loader.dismiss();
                    this.estaCargando = false;
                }
                else {
                    if (this.platform.is('ios')) {
                        versionAppName = yield this.appVersion.getAppName();
                        versionNumber = yield this.appVersion.getVersionNumber();
                        plataforma = "iOS";
                    }
                    else if (this.platform.is('android')) {
                        versionAppName = yield this.appVersion.getAppName();
                        versionNumber = yield this.appVersion.getVersionNumber();
                        plataforma = "Android";
                    }
                    else if (this.platform.is('mobileweb')) {
                        versionAppName = "Mi salud familiar";
                        versionNumber = "0.0";
                        plataforma = "Web";
                    }
                    else {
                        versionAppName = "Mi salud familiar";
                        versionNumber = "0.0";
                        plataforma = "No informado";
                    }
                    //crear token para web
                    this.tokenDispositivo = this.device.uuid;
                    localStorage.setItem('token_dispositivo', this.tokenDispositivo);
                    //otras variables
                    localStorage.setItem('version_app_name', versionAppName);
                    localStorage.setItem('version_number', versionNumber);
                    localStorage.setItem('plataforma', plataforma);
                    loader.dismiss();
                    this.estaCargando = false;
                }
            }));
        });
    }
    registrarEntrada() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            //variable de session que identifica el ingreso
            if (!sessionStorage.getItem('RSS_ID')) {
                this.objetoEntrada.VersionAppName = localStorage.getItem('version_app_name');
                this.objetoEntrada.Plataforma = localStorage.getItem('plataforma');
                this.objetoEntrada.VersionAppNumber = localStorage.getItem('version_number');
                this.objetoEntrada.Token = localStorage.getItem('token_dispositivo');
                this.objetoEntrada.Fecha = new Date();
                //GUARDAMOS EN LA SESSION PARA OCUPARLO DESPUES
                sessionStorage.setItem('ENTRADA', JSON.stringify(this.objetoEntrada));
                //original
                /*       let loader = await this.loading.create({
                        message: 'Creando...<br>registro de sessión',
                        duration: 2000
                      }); */
                this.estaCargando = true;
                let loader = yield this.loading.create({
                    cssClass: 'loading-vacio',
                    showBackdrop: false,
                    spinner: null,
                });
                yield loader.present().then(() => Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
                    if (!this.utiles.isAppOnDevice()) {
                        //web
                        this.servicioGeo.postIngreso(this.objetoEntrada).subscribe((data) => {
                            if (data) {
                                if (data.Id > 0) {
                                    //guardamos el identificador del registro para procesarlo despues
                                    sessionStorage.setItem("RSS_ID", data.Id);
                                }
                            }
                            loader.dismiss();
                            this.estaCargando = false;
                        });
                    }
                    else {
                        //dispositivo
                        this.servicioGeo.postIngresoNative(this.objetoEntrada).then(response => {
                            let respuesta = JSON.parse(response.data);
                            sessionStorage.setItem("RSS_ID", respuesta.Id);
                            loader.dismiss();
                            this.estaCargando = false;
                        });
                    }
                }));
            }
        });
    }
    procesoLocal() {
        //aca enviar una alerta, diciendo que no se puede comunicar por la red
        //que se cargarán los datos de forma local para el usuario
        //mostrar dicho mensaje
        localStorage.setItem('REGISTRO', JSON.stringify(this.dataLocalStorage.REGISTRO));
        localStorage.setItem('TIENE_REGISTRO', 'true');
        //autentificarse
        sessionStorage.setItem("UsuarioAps", JSON.stringify(this.dataSessionStorage.UsuarioAps));
        localStorage.setItem('MI_RUT', this.dataLocalStorage.MI_RUT);
        var retorno = this.dataLocalStorage;
        localStorage.setItem('MI_NOMBRE', retorno.UsuarioAps.Nombres + ' ' + retorno.UsuarioAps.ApellidoPaterno);
        localStorage.setItem('MI_COLOR', retorno.UsuarioAps.Color);
        localStorage.setItem('MI_IMAGEN', retorno.UsuarioAps.UrlImagen);
        //lo vamos a guardar en el local storage para realizar la llamada
        //en el background
        localStorage.setItem('UsuarioAps', JSON.stringify(this.dataSessionStorage.UsuarioAps));
        if (retorno.UsuariosFamilia) {
            //debemos quitar los repetidos según última revisión
            let hash = {};
            var familia = retorno.UsuariosFamilia.filter(o => hash[o.Id] ? false : hash[o.Id] = true);
            retorno.UsuariosFamilia = familia;
            var userFamilia = JSON.stringify(retorno.UsuariosFamilia);
            //variable de sessión muy importante para el resto de la app.
            localStorage.setItem("UsuariosFamilia", userFamilia);
        }
        localStorage.setItem('FAMILIA-POR-ACEPTAR', JSON.stringify(this.dataLocalStorage.FAMILIA_POR_ACEPTAR));
        localStorage.setItem('FAMILIA-ACEPTADA', JSON.stringify(this.dataLocalStorage.FAMILIA_ACEPTADA));
        localStorage.setItem('FAMILIA-RECHAZADA', JSON.stringify(this.dataLocalStorage.FAMILIA_RECHAZAZDA));
        this.tokenDispositivo = (Math.random() * (1000000 - 1) + 1).toString() + ' local';
        localStorage.setItem('token_dispositivo', this.tokenDispositivo);
        sessionStorage.setItem('ENTRADA', JSON.stringify(this.dataSessionStorage.ENTRADA));
        sessionStorage.setItem('LOG_MOVIMIENTOS', JSON.stringify(this.dataSessionStorage.LOG_MOVIMIENTOS));
        localStorage.setItem('ANTECEDENTES', JSON.stringify(this.dataLocalStorage.ANTECEDENTES));
        localStorage.setItem('MORBIDOS', JSON.stringify(this.dataLocalStorage.MORBIDOS));
        localStorage.setItem('ALERGIAS', JSON.stringify(this.dataLocalStorage.ALERGIAS));
        localStorage.setItem('FECHA_ACTUALIZACION_ANTECEDENTES', moment__WEBPACK_IMPORTED_MODULE_15__().add(1, 'days').format('YYYY-MM-DD HH:mm'));
        localStorage.setItem('FECHA_ACTUALIZACION_ALERGIAS', moment__WEBPACK_IMPORTED_MODULE_15__().add(1, 'days').format('YYYY-MM-DD HH:mm'));
        localStorage.setItem('FECHA_ACTUALIZACION_MORBIDOS', moment__WEBPACK_IMPORTED_MODULE_15__().add(1, 'days').format('YYYY-MM-DD HH:mm'));
        localStorage.setItem('PARAMETROS_APP', JSON.stringify(this.dataLocalStorage.PARAMETROS_APP));
        this.CodigoMensaje = 0;
        this.Mensaje = 'Exito';
        this.loggedIn = true;
        this.irAHome();
    }
    loguearseRegistro() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            let correo = this.forma.controls.email.value;
            let password = this.forma.controls.clave ? this.utiles.encriptar(this.forma.controls.clave.value) : '';
            //ahora guardamos
            this.estaCargando = true;
            let loader = yield this.loading.create({
                cssClass: 'loading-vacio',
                showBackdrop: false,
                spinner: null,
            });
            yield loader.present().then(() => Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
                if (!this.utiles.isAppOnDevice()) {
                    //llamada web
                    setTimeout(() => {
                        this.servicioGeo.getRegistroAppCorreoPassword(correo, password).subscribe((data) => {
                            if (data) {
                                let respuesta = data;
                                localStorage.setItem('REGISTRO', JSON.stringify(respuesta));
                                localStorage.setItem('TIENE_REGISTRO', 'true');
                                loader.dismiss();
                                let registro = JSON.parse(localStorage.getItem('REGISTRO'));
                                this.autentificarse(registro.Run, password);
                            }
                            else {
                                this.utiles.presentToast("No se encontró registro de usuario.", "middle", 3000);
                                this.estaCargando = false;
                                loader.dismiss();
                                return;
                            }
                        }, error => {
                            //console.log(error.message);
                            //this.utiles.presentToast("Error de conexión.", "middle", 3000);
                            this.estaCargando = false;
                            loader.dismiss();
                            this.procesoLocal();
                        });
                    }, 5000);
                }
                else {
                    //llamada nativa
                    setTimeout(() => {
                        this.servicioGeo.getRegistroAppNativeCorreoPassword(correo, password).then((data) => {
                            let respuesta = JSON.parse(data.data);
                            if (respuesta) {
                                localStorage.setItem('REGISTRO', JSON.stringify(respuesta));
                                localStorage.setItem('TIENE_REGISTRO', 'true');
                                loader.dismiss();
                                let registro = JSON.parse(localStorage.getItem('REGISTRO'));
                                this.autentificarse(registro.Run, password);
                            }
                            else {
                                this.utiles.presentToast("No se encontró registro de usuario.", "middle", 3000);
                                this.estaCargando = false;
                                loader.dismiss();
                                return;
                            }
                        }).catch(error => {
                            //console.log(error.message);
                            //this.utiles.presentToast("Error de conexión.", "middle", 3000);
                            this.estaCargando = false;
                            loader.dismiss();
                            this.procesoLocal();
                        });
                    }, 5000);
                }
            }));
        });
    }
    loguearseEnrolamiento() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            this.estaCargando = true;
            let run = this.forma.controls.run.value;
            let password = this.forma.controls.clave ? this.utiles.encriptar(this.forma.controls.clave.value) : '';
            localStorage.setItem('TIENE_REGISTRO', 'false');
            this.autentificarse(run, password);
        });
    }
    onSubmit() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            //this.utiles.verificaInternet();
            var puede = true;
            if (this.utiles.isAppOnDevice()) {
                if (sessionStorage.getItem('CONEXION')) {
                    if (sessionStorage.getItem('CONEXION') == 'Offline') {
                        puede = false;
                    }
                }
            }
            if (puede == false) {
                this.utiles.presentToast('NO tienes conexión a internet', 'bottom', 3000);
                //levantar una ventana de información a internet
                this.navCtrl.navigateRoot('error');
            }
            else {
                if (this.forma.invalid) {
                    return;
                }
                if (this.usaEnrolamiento) {
                    //loguearse con enrolamiento
                    this.loguearseEnrolamiento();
                }
                else {
                    //loguearse con registro app
                    this.loguearseRegistro();
                }
            }
        });
    }
    autentificarse(userName, password) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            //en este caso ya el user name es el email
            let f = { UserName: userName, Password: password, UsaEnrolamiento: this.usaEnrolamiento, TokenFCM: this.utiles.entregaTokenFCM() };
            this.estaCargando = true;
            let loader = yield this.loading.create({
                cssClass: 'loading-vacio',
                showBackdrop: false,
                spinner: null,
            });
            yield loader.present().then(() => Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
                if (!this.utiles.isAppOnDevice()) {
                    //llamada web
                    this.acceso.loginWebDirecto(f).subscribe((response) => {
                        this.procesarLogin(response, loader);
                    }, (error) => {
                        loader.dismiss();
                        this.estaCargando = false;
                        return;
                    });
                }
                else {
                    //llamada nativa
                    this.acceso.loginWebNative(f).then((response) => {
                        this.procesarLogin(JSON.parse(response.data), loader);
                    }, (error) => {
                        this.utiles.presentToast('Ocurrió un error de autentificación', 'bottom', 4000);
                        this.estaCargando = false;
                        loader.dismiss();
                        return;
                    });
                }
            }));
        });
    }
    setDatosUsuario(retorno, user, userFamilia) {
        //variable de sessión muy importante para el resto de la app.
        sessionStorage.setItem("UsuarioAps", user);
        localStorage.setItem('MI_RUT', retorno.UsuarioAps.Rut);
        localStorage.setItem('MI_NOMBRE', retorno.UsuarioAps.Nombres + ' ' + retorno.UsuarioAps.ApellidoPaterno);
        localStorage.setItem('MI_COLOR', retorno.UsuarioAps.Color);
        localStorage.setItem('MI_IMAGEN', retorno.UsuarioAps.UrlImagen);
        //lo vamos a guardar en el local storage para realizar la llamada
        //en el background
        localStorage.setItem('UsuarioAps', user);
        if (retorno.UsuariosFamilia) {
            //debemos quitar los repetidos según última revisión
            let hash = {};
            var familia = retorno.UsuariosFamilia.filter(o => hash[o.Id] ? false : hash[o.Id] = true);
            retorno.UsuariosFamilia = familia;
            userFamilia = JSON.stringify(retorno.UsuariosFamilia);
            //variable de sessión muy importante para el resto de la app.
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
        /*     this.fcmService.initFCM();
            this.fcmService.receiveMessage(true); */
    }
    procesarLogin(response, loader) {
        var retorno = response;
        let tieneUsuario = false;
        if (retorno.RespuestaBase) {
            if (retorno.RespuestaBase.CodigoMensaje == 0) {
                //esta todo ok
                var user;
                var userFamilia;
                if (retorno.UsuarioAps) {
                    user = JSON.stringify(retorno.UsuarioAps);
                    //antes debemos validar si tiene entidad contratante
                    if (user.NodId && this.parametrosApp.USA_ENTIDAD_CONTRATANTE()) {
                        //usa entidad contratante y tiene nodo
                        if (retorno.UsuarioAps.EntidadContratante && retorno.UsuarioAps.EntidadContratante.length > 0) {
                            //tiene entidad contratante
                            tieneUsuario = true;
                            this.setDatosUsuario(retorno, user, userFamilia);
                            loader.dismiss();
                            this.estaCargando = false;
                        }
                        else {
                            //no tiene entidad contratante
                            this.utiles.presentToast("No tiene entidad contratante asociada", "middle", 3000);
                            loader.dismiss();
                            this.estaCargando = false;
                            return;
                        }
                    }
                    else {
                        //no usa entidad contratante
                        tieneUsuario = true;
                        this.setDatosUsuario(retorno, user, userFamilia);
                        loader.dismiss();
                        this.estaCargando = false;
                    }
                }
                //si tiene usuario está valido
                if (!tieneUsuario) {
                    this.utiles.presentToast("Tiene registro correcto, pero no cuenta con información en la red de salud.", "middle", 3000);
                }
                this.crearToken();
                //guardamos el registro de session
                this.registrarEntrada();
                this.irAHome();
            }
            else {
                this.loggedIn = false;
                this.CodigoMensaje = retorno.RespuestaBase.CodigoMensaje;
                this.Mensaje = retorno.RespuestaBase.Mensaje;
                this.loggedIn = true;
                loader.dismiss();
                this.estaCargando = false;
                this.utiles.presentToast(this.Mensaje, 'middle', 4000);
                return;
            }
        }
        else {
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
    irAHome() {
        this.navCtrl.navigateRoot('home');
    }
    irRecuperarClave() {
        this.navCtrl.navigateRoot('recuperar-clave');
    }
    get f() { return this.forma.controls; }
};
NuevoLoginPage.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"] },
    { type: _app_services_ServicioUtiles__WEBPACK_IMPORTED_MODULE_5__["ServicioUtiles"] },
    { type: _app_services_ServicioGeo__WEBPACK_IMPORTED_MODULE_6__["ServicioGeo"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["LoadingController"] },
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] },
    { type: _app_services_ServicioAcceso__WEBPACK_IMPORTED_MODULE_7__["ServicioAcceso"] },
    { type: _app_services_ServicioParametrosApp__WEBPACK_IMPORTED_MODULE_8__["ServicioParametrosApp"] },
    { type: _app_services_ServicioFCM__WEBPACK_IMPORTED_MODULE_9__["ServicioFCM"] },
    { type: _ionic_native_app_version_ngx__WEBPACK_IMPORTED_MODULE_12__["AppVersion"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["Platform"] },
    { type: _ionic_native_device_ngx__WEBPACK_IMPORTED_MODULE_14__["Device"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["AlertController"] },
    { type: _app_services_ServicioNotificaciones__WEBPACK_IMPORTED_MODULE_10__["ServicioNotificaciones"] },
    { type: _app_services_network_service__WEBPACK_IMPORTED_MODULE_11__["NetworkService"] },
    { type: _ionic_native_network_ngx__WEBPACK_IMPORTED_MODULE_13__["Network"] }
];
NuevoLoginPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-nuevo-login',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./nuevo-login.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/nuevo-login/nuevo-login.page.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./nuevo-login.page.scss */ "./src/app/nuevo-login/nuevo-login.page.scss")).default]
    })
], NuevoLoginPage);



/***/ })

}]);
//# sourceMappingURL=nuevo-login-nuevo-login-module-es2015.js.map