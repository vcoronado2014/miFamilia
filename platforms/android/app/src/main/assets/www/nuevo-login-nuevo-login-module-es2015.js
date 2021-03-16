(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["nuevo-login-nuevo-login-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/nuevo-login/nuevo-login.page.html":
/*!*****************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/nuevo-login/nuevo-login.page.html ***!
  \*****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-content class=\"ion-padding\">\n  <div class=\"row mt-24\">\n    <img src=\"../../assets/imgs_nuevas/login.png\" alt=\"asistente\"/>\n  </div>\n  <form [formGroup]=\"forma\" novalidate>\n    <ion-row class=\"ion-no-margin ion-no-padding mt-80\">\n      <!-- solo para enrolamiento -->\n      <mat-form-field appearance=\"outline\" style=\"width: 100%;\" [hidden]=\"usaEnrolamiento == false\">\n        <mat-label>Run</mat-label>\n        <input matInput placeholder=\"125458524\" formControlName=\"run\" name=\"run\">\n        <mat-error [hidden]=\"usaEnrolamiento == false\">Run requerido</mat-error>\n      </mat-form-field>\n\n      <mat-form-field appearance=\"outline\" style=\"width: 100%;\" [hidden]=\"usaEnrolamiento\">\n        <mat-label>Correo electrónico</mat-label>\n        <input matInput placeholder=\"ejemplo@gmail.com\" formControlName=\"email\" name=\"email\">\n        <mat-error [hidden]=\"usaEnrolamiento\">Correo requerido</mat-error>\n        <mat-error [hidden]=\"usaEnrolamiento\">Correo inválido</mat-error>\n      </mat-form-field>\n  \n      <mat-form-field appearance=\"outline\" style=\"width: 100%;\">\n        <mat-label>Contraseña</mat-label>\n        <input matInput placeholder=\"Clave\" type=\"password\" name=\"clave\" formControlName=\"clave\" required>\n        <mat-error [hidden]=\"!(f.clave.errors && f.clave.errors.required)\">Clave requerida</mat-error>\n      </mat-form-field>\n    </ion-row>\n    <ion-row class=\"ion-no-padding ion-no-margin mt-40\">\n      <button mat-raised-button color=\"primary\" style=\"width: 90%; margin-left: 5%; height:36px;\" (click)=\"onSubmit()\">INICIAR SESION</button>\n    </ion-row>\n  </form>\n  <ion-row class=\"mt-36\" [hidden]=\"usaEnrolamiento\">\n    <a mat-button routerLink=\".\" color=\"primary\" class=\"ion-text-center\" style=\"width: 100%;\" (click)=\"irRecuperarClave()\">¿Olvidaste tu contraseña?</a>\n  </ion-row>\n  <ion-grid class=\"ion-no-padding mt-36\">\n    <ion-row>\n      <ion-col class=\"ion-text-center texto-1\" style=\"margin-top:8px;\">\n        ¿No tienes cuenta?\n      </ion-col>\n      <ion-col>\n        <button (click)=\"abrirAsistente()\" mat-button color=\"primary\">REGISTRATE</button>\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n\n</ion-content>\n");

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
/* harmony default export */ __webpack_exports__["default"] = (".mt-32 {\n  margin-top: 32px;\n}\n\n.mt-24 {\n  margin-top: 24px;\n}\n\n.mt-80 {\n  margin-top: 5em;\n}\n\n.mt-40 {\n  margin-top: 2.5em;\n}\n\n.mt-36 {\n  margin-top: 2.25em;\n}\n\n.texto-1 {\n  font-size: 0.875em;\n  color: #0000008A;\n}\n\n.example-container .mat-form-field + .mat-form-field {\n  margin-left: 8px;\n}\n\n.example-right-align {\n  text-align: right;\n}\n\ninput.example-right-align::-webkit-outer-spin-button,\ninput.example-right-align::-webkit-inner-spin-button {\n  display: none;\n}\n\ninput.example-right-align {\n  -moz-appearance: textfield;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbnVldm8tbG9naW4vRjpcXGFwcF9taWZhbWlsaWFfZ2l0XFxtaUZhbWlsaWFfcHJlL3NyY1xcYXBwXFxudWV2by1sb2dpblxcbnVldm8tbG9naW4ucGFnZS5zY3NzIiwic3JjL2FwcC9udWV2by1sb2dpbi9udWV2by1sb2dpbi5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxnQkFBQTtBQ0NKOztBRENBO0VBQ0ksZ0JBQUE7QUNFSjs7QURBQTtFQUNJLGVBQUE7QUNHSjs7QUREQTtFQUNJLGlCQUFBO0FDSUo7O0FERkE7RUFDSSxrQkFBQTtBQ0tKOztBREhBO0VBQ0ksa0JBQUE7RUFDQSxnQkFBQTtBQ01KOztBREhBO0VBQ0ksZ0JBQUE7QUNNSjs7QURIRTtFQUNFLGlCQUFBO0FDTUo7O0FESEU7O0VBRUUsYUFBQTtBQ01KOztBREhFO0VBQ0UsMEJBQUE7QUNNSiIsImZpbGUiOiJzcmMvYXBwL251ZXZvLWxvZ2luL251ZXZvLWxvZ2luLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5tdC0zMntcclxuICAgIG1hcmdpbi10b3A6IDMycHg7XHJcbn1cclxuLm10LTI0e1xyXG4gICAgbWFyZ2luLXRvcDogMjRweDtcclxufVxyXG4ubXQtODB7XHJcbiAgICBtYXJnaW4tdG9wOiA1ZW07XHJcbn1cclxuLm10LTQwe1xyXG4gICAgbWFyZ2luLXRvcDogMi41ZW07XHJcbn1cclxuLm10LTM2e1xyXG4gICAgbWFyZ2luLXRvcDogMi4yNWVtO1xyXG59XHJcbi50ZXh0by0xe1xyXG4gICAgZm9udC1zaXplOiAwLjg3NWVtO1xyXG4gICAgY29sb3I6ICMwMDAwMDA4QTtcclxuICAgIFxyXG59XHJcbi5leGFtcGxlLWNvbnRhaW5lciAubWF0LWZvcm0tZmllbGQgKyAubWF0LWZvcm0tZmllbGQge1xyXG4gICAgbWFyZ2luLWxlZnQ6IDhweDtcclxuICB9XHJcbiAgXHJcbiAgLmV4YW1wbGUtcmlnaHQtYWxpZ24ge1xyXG4gICAgdGV4dC1hbGlnbjogcmlnaHQ7XHJcbiAgfVxyXG4gIFxyXG4gIGlucHV0LmV4YW1wbGUtcmlnaHQtYWxpZ246Oi13ZWJraXQtb3V0ZXItc3Bpbi1idXR0b24sXHJcbiAgaW5wdXQuZXhhbXBsZS1yaWdodC1hbGlnbjo6LXdlYmtpdC1pbm5lci1zcGluLWJ1dHRvbiB7XHJcbiAgICBkaXNwbGF5OiBub25lO1xyXG4gIH1cclxuICBcclxuICBpbnB1dC5leGFtcGxlLXJpZ2h0LWFsaWduIHtcclxuICAgIC1tb3otYXBwZWFyYW5jZTogdGV4dGZpZWxkO1xyXG4gIH0iLCIubXQtMzIge1xuICBtYXJnaW4tdG9wOiAzMnB4O1xufVxuXG4ubXQtMjQge1xuICBtYXJnaW4tdG9wOiAyNHB4O1xufVxuXG4ubXQtODAge1xuICBtYXJnaW4tdG9wOiA1ZW07XG59XG5cbi5tdC00MCB7XG4gIG1hcmdpbi10b3A6IDIuNWVtO1xufVxuXG4ubXQtMzYge1xuICBtYXJnaW4tdG9wOiAyLjI1ZW07XG59XG5cbi50ZXh0by0xIHtcbiAgZm9udC1zaXplOiAwLjg3NWVtO1xuICBjb2xvcjogIzAwMDAwMDhBO1xufVxuXG4uZXhhbXBsZS1jb250YWluZXIgLm1hdC1mb3JtLWZpZWxkICsgLm1hdC1mb3JtLWZpZWxkIHtcbiAgbWFyZ2luLWxlZnQ6IDhweDtcbn1cblxuLmV4YW1wbGUtcmlnaHQtYWxpZ24ge1xuICB0ZXh0LWFsaWduOiByaWdodDtcbn1cblxuaW5wdXQuZXhhbXBsZS1yaWdodC1hbGlnbjo6LXdlYmtpdC1vdXRlci1zcGluLWJ1dHRvbixcbmlucHV0LmV4YW1wbGUtcmlnaHQtYWxpZ246Oi13ZWJraXQtaW5uZXItc3Bpbi1idXR0b24ge1xuICBkaXNwbGF5OiBub25lO1xufVxuXG5pbnB1dC5leGFtcGxlLXJpZ2h0LWFsaWduIHtcbiAgLW1vei1hcHBlYXJhbmNlOiB0ZXh0ZmllbGQ7XG59Il19 */");

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
/* harmony import */ var _ionic_native_app_version_ngx__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @ionic-native/app-version/ngx */ "./node_modules/@ionic-native/app-version/__ivy_ngcc__/ngx/index.js");
/* harmony import */ var _ionic_native_device_ngx__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @ionic-native/device/ngx */ "./node_modules/@ionic-native/device/__ivy_ngcc__/ngx/index.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! moment */ "./node_modules/moment/moment.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_12__);





//servicios








let NuevoLoginPage = class NuevoLoginPage {
    constructor(navCtrl, utiles, servicioGeo, loading, formBuilder, activatedRoute, router, acceso, parametrosApp, fcmService, appVersion, platform, device) {
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
        this.hide = true;
        //para validar
        this.patternOnlyLetter = '[a-zA-ZÀ-ÿ\u00f1\u00d1]+(\s*[a-zA-ZÀ-ÿ\u00f1\u00d1]*)*[a-zA-ZÀ-ÿ\u00f1\u00d1 ]+$';
        this.expCelular = /^(\+?56)?(\s?)(0?9)(\s?)[9876543]\d{7}$/gm;
        this.expPassword = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{4,8}$/gm;
        this.expEmail = /^[^@\s]+@[^@\s]+\.[^@\s]+$/gm;
        //para validarse solo con enrolamiento
        this.usaEnrolamiento = false;
    }
    ngOnInit() {
        moment__WEBPACK_IMPORTED_MODULE_12__["locale"]('es');
        this.usaEnrolamiento = this.parametrosApp.USA_LOGIN_ENROLAMIENTO();
        this.cargarForma();
    }
    abrirAsistente() {
        this.navCtrl.navigateRoot('pre-registro-uno');
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
            let loader = yield this.loading.create({
                message: 'Creando...<br>Token inicial',
                duration: 2000
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
                }
            }));
        });
    }
    loguearseRegistro() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            let correo = this.forma.controls.email.value;
            let password = this.forma.controls.clave ? this.utiles.encriptar(this.forma.controls.clave.value) : '';
            //ahora guardamos
            let loader = yield this.loading.create({
                message: 'Creando...<br>Registro',
                duration: 20000
            });
            yield loader.present().then(() => Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
                if (!this.utiles.isAppOnDevice()) {
                    //llamada web
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
                        }
                    });
                }
                else {
                    //llamada nativa
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
                        }
                    });
                }
            }));
        });
    }
    loguearseEnrolamiento() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            let run = this.forma.controls.run.value;
            let password = this.forma.controls.clave ? this.utiles.encriptar(this.forma.controls.clave.value) : '';
            localStorage.setItem('TIENE_REGISTRO', 'false');
            this.autentificarse(run, password);
        });
    }
    onSubmit() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
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
        });
    }
    autentificarse(userName, password) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            //en este caso ya el user name es el email
            let f = { UserName: userName, Password: password, UsaEnrolamiento: this.usaEnrolamiento, TokenFCM: this.utiles.entregaTokenFCM() };
            let loader = yield this.loading.create({
                message: 'Obteniendo...<br>Login',
                duration: 10000
            });
            yield loader.present().then(() => Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
                if (!this.utiles.isAppOnDevice()) {
                    //llamada web
                    this.acceso.loginWebDirecto(f).subscribe((response) => {
                        this.procesarLogin(response, loader);
                    });
                }
                else {
                    //llamada nativa
                    this.acceso.loginWebNative(f).then((response) => {
                        this.procesarLogin(JSON.parse(response.data), loader);
                    }, (error) => {
                        this.utiles.presentToast('Ocurrió un error de autentificación', 'bottom', 4000);
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
            sessionStorage.setItem("UsuariosFamilia", userFamilia);
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
                        }
                        else {
                            //no tiene entidad contratante
                            this.utiles.presentToast("No tiene entidad contratante asociada", "middle", 3000);
                            loader.dismiss();
                            return;
                        }
                    }
                    else {
                        //no usa entidad contratante
                        tieneUsuario = true;
                        this.setDatosUsuario(retorno, user, userFamilia);
                        loader.dismiss();
                    }
                }
                //si tiene usuario está valido
                if (!tieneUsuario) {
                    this.utiles.presentToast("Tiene registro correcto, pero no cuenta con información en la red de salud.", "middle", 3000);
                }
                this.crearToken();
                this.irAHome();
            }
            else {
                this.loggedIn = false;
                this.CodigoMensaje = retorno.RespuestaBase.CodigoMensaje;
                this.Mensaje = retorno.RespuestaBase.Mensaje;
                this.loggedIn = true;
                loader.dismiss();
                this.utiles.presentToast(this.Mensaje, 'middle', 4000);
            }
        }
        else {
            //error también
            this.loggedIn = false;
            this.CodigoMensaje = 1000;
            this.Mensaje = 'Error de llamada Http;';
            this.loggedIn = true;
            loader.dismiss();
            this.utiles.presentToast(this.Mensaje, 'middle', 4000);
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
    { type: _ionic_native_app_version_ngx__WEBPACK_IMPORTED_MODULE_10__["AppVersion"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["Platform"] },
    { type: _ionic_native_device_ngx__WEBPACK_IMPORTED_MODULE_11__["Device"] }
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