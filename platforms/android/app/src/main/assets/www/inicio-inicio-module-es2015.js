(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["inicio-inicio-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/inicio/inicio.page.html":
/*!*******************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/inicio/inicio.page.html ***!
  \*******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-content fullscreen scroll-y=\"false\">\n  <ion-slides pager=\"true\" [options]=\"slideOpts\" #mySlider>\n    <ion-slide>\n      <div class=\"slide\">\n        <div class=\"row\">\n          <img src=\"../../assets/img/examenes-de-salud.png\" alt=\"asistente\" />\n        </div>\n        <div class=\"ion-padding\">\n          <h1 class=\"mt-16 ion-text-center font-title\">INFORMACIÓN SINCRONIZADA CON SU ESTABLECIMIENTO DE SALUD</h1>\n          <p class=\"mt-32 ion-text-center\">REVISE SUS <strong>ANTECEDENTES DE SALUD</strong> Y <strong>RESULTADOS DE EXÁMENES </strong> REGISTRADOS EN EL ESTABLECIMIENTO EN EL QUE SE ATIENDE REGULARMENTE</p>\n          <div class=\"row mt-32\">\n            <button mat-raised-button color=\"primary\" class=\"boton\" (click)=\"slides.slideNext()\">SIGUIENTE</button>\n          </div>          \n        </div>\n      </div>\n    </ion-slide>\n    <ion-slide>\n      <div class=\"slide\">\n        <div class=\"row\">\n          <img src=\"../../assets/img/calendario-01.png\" alt=\"asistente\" />\n        </div>\n        <div class=\"ion-padding\">\n          <h1 class=\"mt-16 ion-text-center font-title\">CALENDARIO CON LOS EVENTOS DE SALUD</h1>\n          <p class=\"mt-32 ion-text-center\">\n            ACCEDA A UN CALENDARIO CON LOS EVENTOS RELEVANTES DE SU RELACIÓN CON SU ESTABLECIMIENTO DE SALUD: \n             <strong> ATENCIONES, RETIRO DE MEDICAMENTOS, RETIRO DE ALIMENTOS Y VACUNAS</strong>\n          </p>\n          <div class=\"row mt-32\">\n            <button mat-raised-button color=\"primary\" class=\"boton\" (click)=\"slides.slideNext()\">SIGUIENTE</button>\n          </div>\n        </div>\n      </div>\n    </ion-slide>\n    <ion-slide>\n      <div class=\"slide\">\n        <div class=\"row\">\n          <img src=\"../../assets/img/interconsulta.png\" alt=\"asistente\" />\n        </div>\n        <div class=\"ion-padding\">\n          <h1 class=\"mt-16 ion-text-center font-title\">SEGUIMIENTO DE INTERCONSULTAS</h1>\n          <p class=\"mt-32 ion-text-center\">\n            VISUALICE EL SEGUIMIENTO DE LAS <strong>SOLICITUDES DE INTERCONSULTA </strong> \n            ENTRE SU ESTABLECIMIENTO DE ATENCIÓN PRIMARIA Y EL NIVEL SECUNDARIO (HOSPITALES)\n          </p>\n          <div class=\"row mt-32\">\n            <button mat-raised-button color=\"primary\" class=\"boton\" (click)=\"slides.slideNext()\">SIGUIENTE</button>\n          </div>\n        </div>\n      </div>\n    </ion-slide>\n    <ion-slide>\n      <div class=\"slide\">\n        <div class=\"row\">\n          <img src=\"../../assets/img/agendar_citas.png\" alt=\"asistente\" />\n        </div>\n        <div class=\"ion-padding\">\n          <h1 class=\"mt-16 ion-text-center font-title\">RESERVA DE HORAS</h1>\n          <p class=\"mt-32 ion-text-center\">\n            <strong>RESERVE O CANCELE EN LÍNEA </strong> \n             SUS PROXIMAS CITAS EN EL ESTABLECIMIENTO DE SALUD\n          </p>\n          <div class=\"row mt-32\">\n            <button mat-stroked-button color=\"primary\" class=\"boton\" (click)=\"abrirLogin()\">TENGO CUENTA</button>\n          </div>\n          <div class=\"row mt-32\">\n            <hr>\n          </div>\n          <div class=\"row mt-32\">\n            <button mat-raised-button color=\"primary\" class=\"boton\" (click)=\"abrirPrimerosPasos()\">REGISTRARME</button>\n          </div>\n        </div>\n      </div>\n    </ion-slide>\n\n  </ion-slides>\n</ion-content>\n\n");

/***/ }),

/***/ "./src/app/inicio/inicio.module.ts":
/*!*****************************************!*\
  !*** ./src/app/inicio/inicio.module.ts ***!
  \*****************************************/
/*! exports provided: InicioPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InicioPageModule", function() { return InicioPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _inicio_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./inicio.page */ "./src/app/inicio/inicio.page.ts");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/button */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/button.js");








let InicioPageModule = class InicioPageModule {
};
InicioPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _angular_material_button__WEBPACK_IMPORTED_MODULE_7__["MatButtonModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterModule"].forChild([
                {
                    path: '',
                    component: _inicio_page__WEBPACK_IMPORTED_MODULE_6__["InicioPage"]
                }
            ])
        ],
        declarations: [_inicio_page__WEBPACK_IMPORTED_MODULE_6__["InicioPage"]]
    })
], InicioPageModule);



/***/ }),

/***/ "./src/app/inicio/inicio.page.scss":
/*!*****************************************!*\
  !*** ./src/app/inicio/inicio.page.scss ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".mt-24 {\n  margin-top: 24px;\n}\n\n.mt-16 {\n  margin-top: 16px;\n}\n\n.mt-40 {\n  margin-top: 40px;\n  font: normal normal normal 24px \"Roboto\";\n  letter-spacing: 0px;\n  color: #000000DE;\n}\n\n.mt-32 {\n  margin-top: 32px;\n}\n\n.mt-62 {\n  margin-top: 62px;\n}\n\np {\n  font: normal normal normal 16px \"Roboto\";\n  letter-spacing: 0px;\n  color: #0000008A;\n}\n\n/* slides */\n\nion-slides {\n  height: 100%;\n}\n\n.ml-48 {\n  margin-left: 48px;\n}\n\n.mr-48 {\n  margin-right: 48px;\n}\n\n.img-slide-1 {\n  width: 60%;\n}\n\n.boton {\n  width: 55%;\n}\n\n.font-title {\n  font-size: 1em;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaW5pY2lvL0Y6XFxhcHBfbWlmYW1pbGlhX2dpdFxcbWlGYW1pbGlhX3ByZS9zcmNcXGFwcFxcaW5pY2lvXFxpbmljaW8ucGFnZS5zY3NzIiwic3JjL2FwcC9pbmljaW8vaW5pY2lvLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGdCQUFBO0FDQ0o7O0FEQ0E7RUFDSSxnQkFBQTtBQ0VKOztBREFBO0VBQ0ksZ0JBQUE7RUFDQSx3Q0FBQTtFQUNBLG1CQUFBO0VBQ0EsZ0JBQUE7QUNHSjs7QUREQTtFQUNJLGdCQUFBO0FDSUo7O0FERkE7RUFDSSxnQkFBQTtBQ0tKOztBREhBO0VBQ0ksd0NBQUE7RUFDQSxtQkFBQTtFQUNBLGdCQUFBO0FDTUo7O0FESkEsV0FBQTs7QUFDQTtFQUNJLFlBQUE7QUNPSjs7QURMQTtFQUNJLGlCQUFBO0FDUUo7O0FETkE7RUFDSSxrQkFBQTtBQ1NKOztBRFBBO0VBQ0ksVUFBQTtBQ1VKOztBRFJBO0VBQ0ksVUFBQTtBQ1dKOztBRFRBO0VBQ0ksY0FBQTtBQ1lKIiwiZmlsZSI6InNyYy9hcHAvaW5pY2lvL2luaWNpby5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIubXQtMjR7XHJcbiAgICBtYXJnaW4tdG9wOiAyNHB4O1xyXG59XHJcbi5tdC0xNntcclxuICAgIG1hcmdpbi10b3A6IDE2cHg7XHJcbn1cclxuLm10LTQwe1xyXG4gICAgbWFyZ2luLXRvcDogNDBweDtcclxuICAgIGZvbnQ6IG5vcm1hbCBub3JtYWwgbm9ybWFsIDI0cHggJ1JvYm90byc7XHJcbiAgICBsZXR0ZXItc3BhY2luZzogMHB4O1xyXG4gICAgY29sb3I6ICMwMDAwMDBERTtcclxufVxyXG4ubXQtMzJ7XHJcbiAgICBtYXJnaW4tdG9wOiAzMnB4O1xyXG59XHJcbi5tdC02MntcclxuICAgIG1hcmdpbi10b3A6IDYycHg7XHJcbn1cclxucHtcclxuICAgIGZvbnQ6IG5vcm1hbCBub3JtYWwgbm9ybWFsIDE2cHggJ1JvYm90byc7XHJcbiAgICBsZXR0ZXItc3BhY2luZzogMHB4O1xyXG4gICAgY29sb3I6ICMwMDAwMDA4QTtcclxufVxyXG4vKiBzbGlkZXMgKi9cclxuaW9uLXNsaWRlcyB7XHJcbiAgICBoZWlnaHQ6IDEwMCU7XHJcbn1cclxuLm1sLTQ4e1xyXG4gICAgbWFyZ2luLWxlZnQ6IDQ4cHg7XHJcbn1cclxuLm1yLTQ4e1xyXG4gICAgbWFyZ2luLXJpZ2h0OiA0OHB4O1xyXG59XHJcbi5pbWctc2xpZGUtMXtcclxuICAgIHdpZHRoOiA2MCU7XHJcbn1cclxuLmJvdG9ue1xyXG4gICAgd2lkdGg6IDU1JTtcclxufVxyXG4uZm9udC10aXRsZXtcclxuICAgIGZvbnQtc2l6ZTogMWVtO1xyXG59IiwiLm10LTI0IHtcbiAgbWFyZ2luLXRvcDogMjRweDtcbn1cblxuLm10LTE2IHtcbiAgbWFyZ2luLXRvcDogMTZweDtcbn1cblxuLm10LTQwIHtcbiAgbWFyZ2luLXRvcDogNDBweDtcbiAgZm9udDogbm9ybWFsIG5vcm1hbCBub3JtYWwgMjRweCBcIlJvYm90b1wiO1xuICBsZXR0ZXItc3BhY2luZzogMHB4O1xuICBjb2xvcjogIzAwMDAwMERFO1xufVxuXG4ubXQtMzIge1xuICBtYXJnaW4tdG9wOiAzMnB4O1xufVxuXG4ubXQtNjIge1xuICBtYXJnaW4tdG9wOiA2MnB4O1xufVxuXG5wIHtcbiAgZm9udDogbm9ybWFsIG5vcm1hbCBub3JtYWwgMTZweCBcIlJvYm90b1wiO1xuICBsZXR0ZXItc3BhY2luZzogMHB4O1xuICBjb2xvcjogIzAwMDAwMDhBO1xufVxuXG4vKiBzbGlkZXMgKi9cbmlvbi1zbGlkZXMge1xuICBoZWlnaHQ6IDEwMCU7XG59XG5cbi5tbC00OCB7XG4gIG1hcmdpbi1sZWZ0OiA0OHB4O1xufVxuXG4ubXItNDgge1xuICBtYXJnaW4tcmlnaHQ6IDQ4cHg7XG59XG5cbi5pbWctc2xpZGUtMSB7XG4gIHdpZHRoOiA2MCU7XG59XG5cbi5ib3RvbiB7XG4gIHdpZHRoOiA1NSU7XG59XG5cbi5mb250LXRpdGxlIHtcbiAgZm9udC1zaXplOiAxZW07XG59Il19 */");

/***/ }),

/***/ "./src/app/inicio/inicio.page.ts":
/*!***************************************!*\
  !*** ./src/app/inicio/inicio.page.ts ***!
  \***************************************/
/*! exports provided: InicioPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InicioPage", function() { return InicioPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _ionic_native_geolocation_ngx__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic-native/geolocation/ngx */ "./node_modules/@ionic-native/geolocation/__ivy_ngcc__/ngx/index.js");
/* harmony import */ var _ionic_native_device_ngx__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic-native/device/ngx */ "./node_modules/@ionic-native/device/__ivy_ngcc__/ngx/index.js");
/* harmony import */ var _ionic_native_app_version_ngx__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic-native/app-version/ngx */ "./node_modules/@ionic-native/app-version/__ivy_ngcc__/ngx/index.js");
/* harmony import */ var _app_services_ServicioUtiles__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../app/services/ServicioUtiles */ "./src/app/services/ServicioUtiles.ts");
/* harmony import */ var _app_services_ServicioGeo__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../app/services/ServicioGeo */ "./src/app/services/ServicioGeo.ts");
/* harmony import */ var _app_services_ServicioAcceso__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../app/services/ServicioAcceso */ "./src/app/services/ServicioAcceso.ts");
/* harmony import */ var _app_services_ServicioParametrosApp__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../app/services/ServicioParametrosApp */ "./src/app/services/ServicioParametrosApp.ts");







//servicios




let InicioPage = class InicioPage {
    constructor(navCtrl, toast, modalCtrl, platform, route, router, geolocation, device, appVersion, loading, utiles, servicioGeo, acceso, parametrosApp) {
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
        this.cargando = false;
        //nuevo slide
        this.slideOpts = {
            initialSlide: 0,
            speed: 500
        };
        platform.ready().then(() => {
            //geolocation
            this.geolocation.getCurrentPosition().then((resp) => {
                sessionStorage.setItem("latitud", JSON.stringify(resp.coords.latitude));
                sessionStorage.setItem("longitud", JSON.stringify(resp.coords.longitude));
                var lat = sessionStorage.getItem('latitud');
                var lon = sessionStorage.getItem('longitud');
                //obtener la info de registro y setear los campos que corresponden
                if (!this.utiles.isAppOnDevice()) {
                    //this.doGeocode(lat, lon);
                    console.log('web');
                    this.doGeocode(lat, lon);
                }
                else {
                    //this.doGeocodeNative(lat, lon);
                    console.log('native');
                    this.doGeocodeNative(lat, lon);
                }
            }).catch((error) => {
                console.log('Error getting location', error);
            });
        });
    }
    ngOnInit() {
        let tieneValidacionCU = false;
        //primero validamos si usa clave unica
        //por ahora esta deshabilitado hasta que alguien quiera
        //implementar, pero será por su cuenta
        if (this.parametrosApp.USA_CLAVE_UNICA()) {
            if (localStorage.getItem('STATE_CLAVE_UNICA')) {
                let stateClaveUnica = localStorage.getItem('STATE_CLAVE_UNICA');
                let objeto = { Run: '', Fecha: '', Tipo: '' };
                if (stateClaveUnica != '') {
                    //descompnemos el state
                    let stateCompleto = this.utiles.desencriptar(stateClaveUnica);
                    let arr = stateCompleto.split('|');
                    if (arr && arr.length == 3) {
                        objeto.Run = arr[0],
                            objeto.Fecha = arr[1];
                        objeto.Tipo = arr[2];
                    }
                }
                tieneValidacionCU = true;
                this.verificaRegistroClaveUnica(stateClaveUnica, objeto);
            }
        }
        this.VerificarRegistro(tieneValidacionCU);
    }
    abrirLogin() {
        this.navCtrl.navigateRoot('nuevo-login');
    }
    abrirPrimerosPasos() {
        const navigationExtras = {
            queryParams: {
                modulo: 'inicio'
            }
        };
        this.navCtrl.navigateRoot(['pre-registro-uno'], navigationExtras);
    }
    irARegistro(registroIncompleto) {
        //enviar registroIncompleto
        if (registroIncompleto) {
            const navigationExtras = {
                queryParams: {
                    usuario: JSON.stringify(registroIncompleto)
                }
            };
            this.navCtrl.navigateRoot(['registro-usuario'], navigationExtras);
        }
    }
    procesarRespuestaCU(registros, loader, run, state) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            let estaCorrecto = false;
            if (registros && registros.length > 0) {
                let regCorrecto = registros.filter(p => p.Mensaje == 'correcto');
                let regInCorrecto = registros.filter(p => p.Mensaje != 'correcto');
                if (regCorrecto && regCorrecto.length > 0) {
                    //si esta correcto lo derivamos a la pantalla de registro
                    loader.dismiss();
                    //pero guardamos un state que indique que esta correcto, así 
                    //podemos capturarlo en la pagina de registro y cuando el registro se complete 
                    //lo eliminamos
                    sessionStorage.setItem('VALIDADO_CLAVE_UNICA', '1');
                    //debemos setear un objeto de registro con los datos del usuario recuperado
                    var regIncompleto = {
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
                }
                else {
                    if (regInCorrecto && regInCorrecto.length > 0) {
                        //si esta incorrecto le informamos al usuario y borramos el registro
                        //de clave unica
                        let regErroneo = regInCorrecto[0];
                        localStorage.removeItem('STATE_CLAVE_UNICA');
                        this.utiles.presentToast(regErroneo.Mensaje, 'middle', 3000);
                        loader.dismiss();
                        //aperación async para eliminar el registro en este caso
                        let loader2 = yield this.loading.create({
                            message: 'Descartando...<br>Registro Clave única',
                            duration: 3000
                        });
                        yield loader2.present().then(() => Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
                            if (!this.utiles.isAppOnDevice()) {
                                //web
                                this.servicioGeo.postValidacionClaveUnica(run, state).subscribe((response) => {
                                    //aca quedamos, no habría que hacer nada
                                    console.log(response);
                                    loader2.dismiss();
                                });
                            }
                            else {
                                //nativa
                                this.servicioGeo.postValidacionClaveUnicaNative(run, state).then((response) => {
                                    var responseData = JSON.parse(response.data);
                                    console.log(responseData);
                                    loader2.dismiss();
                                });
                            }
                        }));
                    }
                }
            }
            else {
                this.utiles.presentToast("No se encontró registro CU", "middle", 2000);
                loader.dismiss();
            }
        });
    }
    //este método se debe validar antes ya que puede tener una validación por clave unica
    verificaRegistroClaveUnica(stateClaveUnica, stateObjeto) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            console.log(stateClaveUnica);
            console.log(stateObjeto);
            //hay que traer el registro de clave unica
            //1. si el registro de clave unica esta correcto, hay que enviarlo al formulario de
            //   registro para que rellene los datos
            //1.1. hay que eliminar la variable de localstorage
            //1.2. hay que eliminar el registro de clave unica
            //2. si la validación de clave unica salió incorrecto
            //2.1. hay que informar al usuario.
            this.cargando = true;
            let loader = yield this.loading.create({
                message: 'Verificando...<br>Registro Clave única',
                duration: 3000
            });
            yield loader.present().then(() => Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
                if (!this.utiles.isAppOnDevice()) {
                    //llamada web
                    this.servicioGeo.getValidacionCU(stateObjeto.Run, stateClaveUnica).subscribe((response) => {
                        //procesar
                        //this.procesarInfoRun(response, loader);
                        this.procesarRespuestaCU(response, loader, stateObjeto.Run, stateClaveUnica);
                    });
                }
                else {
                    //llamada nativa
                    this.servicioGeo.getValidacionCUNative(stateObjeto.Run, stateClaveUnica).then((response) => {
                        //procesar JSON.parse(response.data)
                        var responseData = JSON.parse(response.data);
                        this.procesarRespuestaCU(responseData, loader, stateObjeto.Run, stateClaveUnica);
                    }, (error) => {
                        this.utiles.presentToast('Ocurrió un al procesar clave única', 'bottom', 4000);
                    });
                }
            }));
        });
    }
    //mecanismo para determinar si el usuario tiene registro
    VerificarRegistroRun(run) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            //let f = { UserName: this.usuario, Password: this.password };
            //this.utiles
            var idDispositivo = this.utiles.entregaIdDispositivo();
            this.cargando = true;
            let loader = yield this.loading.create({
                message: 'Verificando...<br>Registro Run',
                duration: 3000
            });
            yield loader.present().then(() => Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
                if (!this.utiles.isAppOnDevice()) {
                    //llamada web
                    this.servicioGeo.getRegistroAppRun(run, idDispositivo).subscribe((response) => {
                        //procesar
                        this.procesarInfoRun(response, loader);
                    });
                }
                else {
                    //llamada nativa
                    this.servicioGeo.getRegistroAppNativeRun(run, idDispositivo).then((response) => {
                        //procesar JSON.parse(response.data)
                        this.procesarInfoRun(JSON.parse(response.data), loader);
                    }, (error) => {
                        this.utiles.presentToast('Ocurrió un error de obtención identificador', 'bottom', 4000);
                    });
                }
            }));
        });
    }
    VerificarRegistro(tieneRegistroCU) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            if (tieneRegistroCU == false) {
                var idDispositivo = this.utiles.entregaIdDispositivo();
                this.cargando = true;
                let loader = yield this.loading.create({
                    message: 'Verificando...<br>Registro',
                    duration: 3000
                });
                yield loader.present().then(() => Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
                    if (!this.utiles.isAppOnDevice()) {
                        //llamada web
                        this.servicioGeo.getRegistroApp(idDispositivo).subscribe((response) => {
                            //procesar
                            this.procesarInfo(response, loader);
                        });
                    }
                    else {
                        //llamada nativa
                        this.servicioGeo.getRegistroAppNative(idDispositivo).then((response) => {
                            //procesar JSON.parse(response.data)
                            this.procesarInfo(JSON.parse(response.data), loader);
                        }, (error) => {
                            this.utiles.presentToast('Ocurrió un error de obtención identificador', 'bottom', 4000);
                        });
                    }
                }));
            }
        });
    }
    procesarInfoRun(registro, loader) {
        console.log(registro);
        if (registro == null) {
            //no tiene registro, hay que dejarlo acá
            console.log('no tiene registro');
            //limpiamos local storage
            this.limpiarRegistro();
            loader.dismiss();
        }
        else {
            //pasa a la pantalla login solo si tiene sus datos completos
            var tieneCorreo = !(registro.CorreoElectronico == null || registro.CorreoElectronico == "" || registro.CorreoElectronico == undefined);
            var tienePassword = !(registro.Password == null || registro.Password == "" || registro.Password == undefined);
            var tieneRun = !(registro.Run == null || registro.Run == "" || registro.Run == undefined);
            var tieneUsuario = !(registro.NombreUsuario == null || registro.NombreUsuario == "" || registro.NombreUsuario == undefined);
            if (tieneCorreo && tienePassword && tieneRun && tieneUsuario) {
                //correcto se va al login
                loader.dismiss();
                this.abrirLogin();
            }
            else {
                loader.dismiss();
                this.limpiarRegistro();
            }
        }
    }
    procesarInfo(registro, loader) {
        console.log(registro);
        if (registro == null) {
            //no tiene registro, hay que dejarlo acá
            console.log('no tiene registro');
            //limpiamos local storage
            this.limpiarRegistro();
            loader.dismiss();
        }
        else {
            //pasa a la pantalla login solo si tiene sus datos completos
            var tieneCorreo = !(registro.CorreoElectronico == null || registro.CorreoElectronico == "" || registro.CorreoElectronico == undefined);
            var tienePassword = !(registro.Password == null || registro.Password == "" || registro.Password == undefined);
            var tieneRun = !(registro.Run == null || registro.Run == "" || registro.Run == undefined);
            var tieneUsuario = !(registro.NombreUsuario == null || registro.NombreUsuario == "" || registro.NombreUsuario == undefined);
            if (tieneCorreo && tienePassword && tieneRun && tieneUsuario) {
                //correcto se va al login
                loader.dismiss();
                this.abrirLogin();
            }
            else {
                loader.dismiss();
                //lo volvemos a buscar, pero esta vez con el run
                let run = registro.Run;
                this.VerificarRegistroRun(run);
                //this.limpiarRegistro();
            }
        }
    }
    limpiarRegistro() {
        localStorage.removeItem("REGISTRO");
        localStorage.removeItem("MI_NOMBRE");
        localStorage.removeItem("MI_RUT");
        localStorage.removeItem("UsuarioAps");
        localStorage.setItem("TIENE_REGISTRO", "false");
    }
    doGeocodeNative(lat, lon) {
        //antes para omitir tantas llamadas vamos a buscar la info
        //a local storage comuna region provincia pais
        this.comuna = localStorage.getItem('comuna');
        this.region = localStorage.getItem('region');
        this.provincia = localStorage.getItem('provincia');
        this.pais = localStorage.getItem('pais');
        if (this.comuna && this.pais && this.region && this.provincia) {
            console.log('Datos politicos existentes');
        }
        else {
            this.servicioGeo.getMapaNative(lat, lon).then(response => {
                //console.log(data);
                this.utiles.procesarRespuestaMapa(JSON.parse(response.data));
            });
        }
    }
    doGeocode(lat, lon) {
        //antes para omitir tantas llamadas vamos a buscar la info
        //a local storage comuna region provincia pais
        this.comuna = localStorage.getItem('comuna');
        this.region = localStorage.getItem('region');
        this.provincia = localStorage.getItem('provincia');
        this.pais = localStorage.getItem('pais');
        if (this.comuna && this.pais && this.region && this.provincia) {
            console.log('Datos politicos existentes');
        }
        else {
            this.servicioGeo.getMapaWeb(lat, lon).subscribe(data => {
                //console.log(data);
                this.utiles.procesarRespuestaMapa(data);
            });
        }
    }
    procesarRespuestaMapa(objeto) {
        //lo cambiamos a local storage para hacerlo más global
        //y no consultar tantas veces para ocupar la api
        var retorno = false;
        try {
            if (objeto.results && objeto.results[0]) {
                if (objeto.results[0].address_components && objeto.results[0].address_components.length > 0) {
                    //ahora recorremos los elementos
                    objeto.results[0].address_components.forEach(element => {
                        let busquedaCom = element.types.find(ele => ele == 'administrative_area_level_3');
                        if (busquedaCom) {
                            this.comuna = element.long_name;
                            localStorage.setItem('comuna', this.comuna);
                        }
                        let busquedaReg = element.types.find(ele => ele == 'administrative_area_level_1');
                        if (busquedaReg) {
                            this.region = element.long_name;
                            localStorage.setItem('region', this.region);
                        }
                        let busquedaProv = element.types.find(ele => ele == 'administrative_area_level_2');
                        if (busquedaProv) {
                            this.provincia = element.long_name;
                            localStorage.setItem('provincia', this.provincia);
                        }
                        let busquedaPais = element.types.find(ele => ele == 'country');
                        if (busquedaPais) {
                            this.pais = element.long_name;
                            localStorage.setItem('pais', this.pais);
                        }
                    });
                }
            }
            retorno = true;
        }
        catch (error) {
            console.log(error);
        }
        return retorno;
        //console.log(this.pais + ' ' + this.region);
    }
};
InicioPage.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ToastController"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ModalController"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["Platform"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] },
    { type: _ionic_native_geolocation_ngx__WEBPACK_IMPORTED_MODULE_4__["Geolocation"] },
    { type: _ionic_native_device_ngx__WEBPACK_IMPORTED_MODULE_5__["Device"] },
    { type: _ionic_native_app_version_ngx__WEBPACK_IMPORTED_MODULE_6__["AppVersion"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["LoadingController"] },
    { type: _app_services_ServicioUtiles__WEBPACK_IMPORTED_MODULE_7__["ServicioUtiles"] },
    { type: _app_services_ServicioGeo__WEBPACK_IMPORTED_MODULE_8__["ServicioGeo"] },
    { type: _app_services_ServicioAcceso__WEBPACK_IMPORTED_MODULE_9__["ServicioAcceso"] },
    { type: _app_services_ServicioParametrosApp__WEBPACK_IMPORTED_MODULE_10__["ServicioParametrosApp"] }
];
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('mySlider', { static: true })
], InicioPage.prototype, "slides", void 0);
InicioPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-inicio',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./inicio.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/inicio/inicio.page.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./inicio.page.scss */ "./src/app/inicio/inicio.page.scss")).default]
    })
], InicioPage);



/***/ })

}]);
//# sourceMappingURL=inicio-inicio-module-es2015.js.map