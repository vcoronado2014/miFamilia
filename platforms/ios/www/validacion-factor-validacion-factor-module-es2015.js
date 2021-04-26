(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["validacion-factor-validacion-factor-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/validacion-factor/validacion-factor.page.html":
/*!*****************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/validacion-factor/validacion-factor.page.html ***!
  \*****************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header class=\"back-app\">\n  <ion-toolbar color=\"primary\" mode=\"md\">\n    <ion-buttons slot=\"start\">\n      <ion-back-button defaultHref=\"/inicio\" class=\"fcw\"></ion-back-button>\n    </ion-buttons>\n    <ion-title class=\"fcw\">Validación de registro</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <div [hidden]=\"estaCargando || muestraMensaje\">\n    <p class=\"mt-16 ion-padding\">Ingresa tu código de seguridad enviado a tu correo electrónico para continuar con tu\n      registro.</p>\n  \n    <form [formGroup]=\"forma\" novalidate>\n      <ion-grid>\n        <ion-row>\n          <ion-col size=\"2\">\n            <mat-form-field appearance=\"outline\" style=\"width: 100%; font-size: 2em;\">\n              <!-- <mat-label>0</mat-label> -->\n              <input #codigo1=\"matInput\" matInput placeholder=\"0\" formControlName=\"codigoUno\" name=\"codigoUno\"\n                (keypress)=\"onKeypressEvent($event)\" required>\n              <mat-error *ngIf=\"f.codigoUno.errors && f.codigoUno.errors.required\">*</mat-error>\n            </mat-form-field>\n          </ion-col>\n          <ion-col size=\"2\">\n            <mat-form-field appearance=\"outline\" style=\"width: 100%; font-size: 2em;\">\n              <!-- <mat-label>0</mat-label> -->\n              <input #codigo2=\"matInput\" matInput placeholder=\"0\" formControlName=\"codigoDos\" name=\"codigoDos\"\n                (keypress)=\"onKeypressEvent($event)\" required>\n              <mat-error *ngIf=\"f.codigoDos.errors && f.codigoDos.errors.required\">*</mat-error>\n            </mat-form-field>\n          </ion-col>\n          <ion-col size=\"2\">\n            <mat-form-field appearance=\"outline\" style=\"width: 100%; font-size: 2em;\">\n              <!-- <mat-label>0</mat-label> -->\n              <input #codigo3=\"matInput\" matInput placeholder=\"0\" formControlName=\"codigoTres\" name=\"codigoTres\"\n                (keypress)=\"onKeypressEvent($event)\" required>\n              <mat-error *ngIf=\"f.codigoTres.errors && f.codigoTres.errors.required\">*</mat-error>\n            </mat-form-field>\n          </ion-col>\n          <ion-col size=\"2\">\n            <mat-form-field appearance=\"outline\" style=\"width: 100%; font-size: 2em;\">\n              <!-- <mat-label>0</mat-label> -->\n              <input #codigo4=\"matInput\" matInput placeholder=\"0\" formControlName=\"codigoCuatro\" name=\"codigoCuatro\"\n                (keypress)=\"onKeypressEvent($event)\" required>\n              <mat-error *ngIf=\"f.codigoCuatro.errors && f.codigoCuatro.errors.required\">*</mat-error>\n            </mat-form-field>\n          </ion-col>\n          <ion-col size=\"2\">\n            <mat-form-field appearance=\"outline\" style=\"width: 100%; font-size: 2em;\">\n              <!-- <mat-label>0</mat-label> -->\n              <input #codigo5=\"matInput\" matInput placeholder=\"0\" formControlName=\"codigoCinco\" name=\"codigoCinco\"\n                (keypress)=\"onKeypressEvent($event)\" required>\n              <mat-error *ngIf=\"f.codigoCinco.errors && f.codigoCinco.errors.required\">*</mat-error>\n            </mat-form-field>\n          </ion-col>\n          <ion-col size=\"2\">\n            <mat-form-field appearance=\"outline\" style=\"width: 100%; font-size: 2em;\">\n              <!-- <mat-label>0</mat-label> -->\n              <input #codigo6=\"matInput\" matInput placeholder=\"0\" formControlName=\"codigoSeis\" name=\"codigoSeis\" required>\n              <mat-error *ngIf=\"f.codigoSeis.errors && f.codigoSeis.errors.required\">*</mat-error>\n            </mat-form-field>\n          </ion-col>\n        </ion-row>\n        <ion-row class=\"mt-32\">\n          <ion-col size=\"6\">\n            <button mat-stroked-button color=\"primary\" style=\"width: 100%;\" (click)=\"cancelarRegistro()\">CANCELAR MI REGISTRO</button>\n          </ion-col>\n          <ion-col size=\"6\">\n            <button [disabled]=\"forma.invalid\" mat-flat-button color=\"primary\" style=\"width: 98%; margin-left: 2%;\"\n            (click)=\"onSubmit()\">CONTINUAR</button>\n          </ion-col>\n        </ion-row>\n      </ion-grid>\n    </form>\n  </div>\n  <app-progress [mostrar]=\"estaCargando\" [titulo]=\"tituloLoading\"></app-progress>\n  <div [hidden]=\"!muestraMensaje\">\n    <app-pagina-mensajes [titulo]=\"tituloMensaje\" [contenido]=\"contenidoMensaje\" [irA]=\"irA\"></app-pagina-mensajes>\n  </div>\n</ion-content>\n");

/***/ }),

/***/ "./src/app/validacion-factor/validacion-factor.module.ts":
/*!***************************************************************!*\
  !*** ./src/app/validacion-factor/validacion-factor.module.ts ***!
  \***************************************************************/
/*! exports provided: ValidacionFactorPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ValidacionFactorPageModule", function() { return ValidacionFactorPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/form-field */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/form-field.js");
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/select */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/select.js");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/input */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/input.js");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/button */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/button.js");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/icon */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/icon.js");
/* harmony import */ var _validacion_factor_page__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./validacion-factor.page */ "./src/app/validacion-factor/validacion-factor.page.ts");
/* harmony import */ var _directives_text_avatar_index__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../directives/text-avatar/index */ "./src/directives/text-avatar/index.ts");
/* harmony import */ var _components_components_module__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../components/components.module */ "./src/app/components/components.module.ts");














let ValidacionFactorPageModule = class ValidacionFactorPageModule {
};
ValidacionFactorPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
            _angular_material_form_field__WEBPACK_IMPORTED_MODULE_6__["MatFormFieldModule"],
            _angular_material_select__WEBPACK_IMPORTED_MODULE_7__["MatSelectModule"],
            _angular_material_input__WEBPACK_IMPORTED_MODULE_8__["MatInputModule"],
            _angular_material_button__WEBPACK_IMPORTED_MODULE_9__["MatButtonModule"],
            _angular_material_icon__WEBPACK_IMPORTED_MODULE_10__["MatIconModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _directives_text_avatar_index__WEBPACK_IMPORTED_MODULE_12__["TextAvatarModule"],
            _components_components_module__WEBPACK_IMPORTED_MODULE_13__["ComponentsModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterModule"].forChild([
                {
                    path: '',
                    component: _validacion_factor_page__WEBPACK_IMPORTED_MODULE_11__["ValidacionFactorPage"]
                }
            ])
        ],
        declarations: [_validacion_factor_page__WEBPACK_IMPORTED_MODULE_11__["ValidacionFactorPage"]]
    })
], ValidacionFactorPageModule);



/***/ }),

/***/ "./src/app/validacion-factor/validacion-factor.page.scss":
/*!***************************************************************!*\
  !*** ./src/app/validacion-factor/validacion-factor.page.scss ***!
  \***************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".mt-24 {\n  margin-top: 24px;\n}\n\n.mt-16 {\n  margin-top: 16px;\n}\n\n.mt-40 {\n  margin-top: 40px;\n  font: normal normal normal 24px \"Roboto\";\n  letter-spacing: 0px;\n  color: #000000DE;\n}\n\n.mt-32 {\n  margin-top: 32px;\n}\n\n.mt-62 {\n  margin-top: 62px;\n}\n\np {\n  font: normal normal normal 16px \"Roboto\";\n  letter-spacing: 0px;\n  color: #0000008A;\n}\n\n/* slides */\n\nion-slides {\n  height: 100%;\n}\n\n.ml-48 {\n  margin-left: 48px;\n}\n\n.mr-48 {\n  margin-right: 48px;\n}\n\n.img-slide-1 {\n  width: 60%;\n}\n\n.boton {\n  width: 55%;\n}\n\n.font-title {\n  font-size: 1em;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdmFsaWRhY2lvbi1mYWN0b3IvRjpcXGFwcF9taWZhbWlsaWFfZ2l0XFxtaUZhbWlsaWFfcHJlL3NyY1xcYXBwXFx2YWxpZGFjaW9uLWZhY3RvclxcdmFsaWRhY2lvbi1mYWN0b3IucGFnZS5zY3NzIiwic3JjL2FwcC92YWxpZGFjaW9uLWZhY3Rvci92YWxpZGFjaW9uLWZhY3Rvci5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxnQkFBQTtBQ0NKOztBRENBO0VBQ0ksZ0JBQUE7QUNFSjs7QURBQTtFQUNJLGdCQUFBO0VBQ0Esd0NBQUE7RUFDQSxtQkFBQTtFQUNBLGdCQUFBO0FDR0o7O0FEREE7RUFDSSxnQkFBQTtBQ0lKOztBREZBO0VBQ0ksZ0JBQUE7QUNLSjs7QURIQTtFQUNJLHdDQUFBO0VBQ0EsbUJBQUE7RUFDQSxnQkFBQTtBQ01KOztBREpBLFdBQUE7O0FBQ0E7RUFDSSxZQUFBO0FDT0o7O0FETEE7RUFDSSxpQkFBQTtBQ1FKOztBRE5BO0VBQ0ksa0JBQUE7QUNTSjs7QURQQTtFQUNJLFVBQUE7QUNVSjs7QURSQTtFQUNJLFVBQUE7QUNXSjs7QURUQTtFQUNJLGNBQUE7QUNZSiIsImZpbGUiOiJzcmMvYXBwL3ZhbGlkYWNpb24tZmFjdG9yL3ZhbGlkYWNpb24tZmFjdG9yLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5tdC0yNHtcclxuICAgIG1hcmdpbi10b3A6IDI0cHg7XHJcbn1cclxuLm10LTE2e1xyXG4gICAgbWFyZ2luLXRvcDogMTZweDtcclxufVxyXG4ubXQtNDB7XHJcbiAgICBtYXJnaW4tdG9wOiA0MHB4O1xyXG4gICAgZm9udDogbm9ybWFsIG5vcm1hbCBub3JtYWwgMjRweCAnUm9ib3RvJztcclxuICAgIGxldHRlci1zcGFjaW5nOiAwcHg7XHJcbiAgICBjb2xvcjogIzAwMDAwMERFO1xyXG59XHJcbi5tdC0zMntcclxuICAgIG1hcmdpbi10b3A6IDMycHg7XHJcbn1cclxuLm10LTYye1xyXG4gICAgbWFyZ2luLXRvcDogNjJweDtcclxufVxyXG5we1xyXG4gICAgZm9udDogbm9ybWFsIG5vcm1hbCBub3JtYWwgMTZweCAnUm9ib3RvJztcclxuICAgIGxldHRlci1zcGFjaW5nOiAwcHg7XHJcbiAgICBjb2xvcjogIzAwMDAwMDhBO1xyXG59XHJcbi8qIHNsaWRlcyAqL1xyXG5pb24tc2xpZGVzIHtcclxuICAgIGhlaWdodDogMTAwJTtcclxufVxyXG4ubWwtNDh7XHJcbiAgICBtYXJnaW4tbGVmdDogNDhweDtcclxufVxyXG4ubXItNDh7XHJcbiAgICBtYXJnaW4tcmlnaHQ6IDQ4cHg7XHJcbn1cclxuLmltZy1zbGlkZS0xe1xyXG4gICAgd2lkdGg6IDYwJTtcclxufVxyXG4uYm90b257XHJcbiAgICB3aWR0aDogNTUlO1xyXG59XHJcbi5mb250LXRpdGxle1xyXG4gICAgZm9udC1zaXplOiAxZW07XHJcbn0iLCIubXQtMjQge1xuICBtYXJnaW4tdG9wOiAyNHB4O1xufVxuXG4ubXQtMTYge1xuICBtYXJnaW4tdG9wOiAxNnB4O1xufVxuXG4ubXQtNDAge1xuICBtYXJnaW4tdG9wOiA0MHB4O1xuICBmb250OiBub3JtYWwgbm9ybWFsIG5vcm1hbCAyNHB4IFwiUm9ib3RvXCI7XG4gIGxldHRlci1zcGFjaW5nOiAwcHg7XG4gIGNvbG9yOiAjMDAwMDAwREU7XG59XG5cbi5tdC0zMiB7XG4gIG1hcmdpbi10b3A6IDMycHg7XG59XG5cbi5tdC02MiB7XG4gIG1hcmdpbi10b3A6IDYycHg7XG59XG5cbnAge1xuICBmb250OiBub3JtYWwgbm9ybWFsIG5vcm1hbCAxNnB4IFwiUm9ib3RvXCI7XG4gIGxldHRlci1zcGFjaW5nOiAwcHg7XG4gIGNvbG9yOiAjMDAwMDAwOEE7XG59XG5cbi8qIHNsaWRlcyAqL1xuaW9uLXNsaWRlcyB7XG4gIGhlaWdodDogMTAwJTtcbn1cblxuLm1sLTQ4IHtcbiAgbWFyZ2luLWxlZnQ6IDQ4cHg7XG59XG5cbi5tci00OCB7XG4gIG1hcmdpbi1yaWdodDogNDhweDtcbn1cblxuLmltZy1zbGlkZS0xIHtcbiAgd2lkdGg6IDYwJTtcbn1cblxuLmJvdG9uIHtcbiAgd2lkdGg6IDU1JTtcbn1cblxuLmZvbnQtdGl0bGUge1xuICBmb250LXNpemU6IDFlbTtcbn0iXX0= */");

/***/ }),

/***/ "./src/app/validacion-factor/validacion-factor.page.ts":
/*!*************************************************************!*\
  !*** ./src/app/validacion-factor/validacion-factor.page.ts ***!
  \*************************************************************/
/*! exports provided: ValidacionFactorPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ValidacionFactorPage", function() { return ValidacionFactorPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _app_services_ServicioUtiles__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../app/services/ServicioUtiles */ "./src/app/services/ServicioUtiles.ts");
/* harmony import */ var _app_services_ServicioGeo__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../app/services/ServicioGeo */ "./src/app/services/ServicioGeo.ts");




//parametros

//SERVICIOS


let ValidacionFactorPage = class ValidacionFactorPage {
    //@ViewChild('codigo1', {static: true}) codigoUnoInput: ElementRef;
    constructor(navCtrl, toast, modalCtrl, platform, menu, activatedRoute, router, utiles, loading, servicioGeo) {
        this.navCtrl = navCtrl;
        this.toast = toast;
        this.modalCtrl = modalCtrl;
        this.platform = platform;
        this.menu = menu;
        this.activatedRoute = activatedRoute;
        this.router = router;
        this.utiles = utiles;
        this.loading = loading;
        this.servicioGeo = servicioGeo;
        this.estaCargando = false;
        this.tituloLoading = '';
        this.muestraMensaje = false;
        this.tituloMensaje = '';
        this.contenidoMensaje = '';
        this.irA = 'inicio';
    }
    ngOnInit() {
        //lo volvemos a la pagina de inicio
        if (this.validaPreRegistro() == false) {
            this.utiles.presentToast('No cuentas con registro pendiente', 'bottom', 3000);
            this.navCtrl.navigateRoot('inicio');
        }
        this.cargarForma();
    }
    ngAfterViewInit() {
        setTimeout(() => {
            this.codigoUnoInput.focus();
        }, 1000);
    }
    onKeypressEvent(event) {
        //console.log(event.target.value);
        if (event.currentTarget) {
            if (event.currentTarget.name == "codigoUno") {
                setTimeout(() => {
                    this.codigoDosInput.focus();
                }, 100);
            }
            if (event.currentTarget.name == "codigoDos") {
                setTimeout(() => {
                    this.codigoTresInput.focus();
                }, 100);
            }
            if (event.currentTarget.name == "codigoTres") {
                setTimeout(() => {
                    this.codigoCuatroInput.focus();
                }, 100);
            }
            if (event.currentTarget.name == "codigoCuatro") {
                setTimeout(() => {
                    this.codigoCincoInput.focus();
                }, 100);
            }
            if (event.currentTarget.name == "codigoCinco") {
                setTimeout(() => {
                    this.codigoSeisInput.focus();
                }, 100);
            }
        }
    }
    /*   enviarFoco(){
        setTimeout(() => this.codigoUnoInput.focus(), 1000);
      } */
    cargarForma() {
        this.forma = new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormGroup"]({
            'codigoUno': new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required]),
            'codigoDos': new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required]),
            'codigoTres': new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required]),
            'codigoCuatro': new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required]),
            'codigoCinco': new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required]),
            'codigoSeis': new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required]),
        });
    }
    //verificacion de pre-registro
    validaPreRegistro() {
        var retorno = false;
        if (localStorage.getItem('PRE-REGISTRO')) {
            this.preRegistro = JSON.parse(localStorage.getItem('PRE-REGISTRO'));
            if (this.preRegistro.Id > 0) {
                retorno = true;
            }
        }
        return retorno;
    }
    onSubmit() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            if (this.forma.invalid) {
                return;
            }
            //obtenemos los valores a enviar
            let codUno = this.forma.controls.codigoUno.value;
            let codDos = this.forma.controls.codigoDos.value;
            let codTres = this.forma.controls.codigoTres.value;
            let codCuatro = this.forma.controls.codigoCuatro.value;
            let codCinco = this.forma.controls.codigoCinco.value;
            let codSeis = this.forma.controls.codigoSeis.value;
            let codigoCompleto = codUno + codDos + codTres + codCuatro + codCinco + codSeis;
            let idPreRegistro = "";
            if (this.preRegistro && this.preRegistro.Id > 0) {
                idPreRegistro = this.preRegistro.Id;
            }
            this.estaCargando = true;
            this.tituloLoading = 'Verificando solicitud de registro';
            let accion = 'confirmar';
            let loader = yield this.loading.create({
                cssClass: 'loading-vacio',
                showBackdrop: false,
                spinner: null,
            });
            yield loader.present().then(() => Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
                if (!this.utiles.isAppOnDevice()) {
                    //llamada web
                    this.servicioGeo.validaCodigo(idPreRegistro, codigoCompleto, accion).subscribe((response) => {
                        //procesar
                        var data = response;
                        //la respuesta trae
                        //CodigoMensaje, TextoMensaje, PreRegistroApp { Codigo, Correo, Eliminado, Estado, FechaHora, Id, Run (con guion) }
                        if (data) {
                            if (data.CodigoMensaje == 0) {
                                //correcto
                                loader.dismiss();
                                this.estaCargando = false;
                                this.tituloLoading = '';
                                //limpiamos la localstorage
                                //no deberíamos limpiar pre-registro, deberíamos limpiarlo en el registro cuando termine
                                //localStorage.removeItem('PRE-REGISTRO');
                                //ir a la pagina de registro
                                this.irARegistro();
                            }
                            else {
                                loader.dismiss();
                                this.estaCargando = false;
                                this.tituloLoading = '';
                                //mensaje
                                this.muestraMensaje = true;
                                this.tituloMensaje = 'Mensaje';
                                this.contenidoMensaje = data.TextoMensaje;
                            }
                        }
                        else {
                            loader.dismiss();
                            this.estaCargando = false;
                            this.tituloLoading = '';
                            //mensaje
                            this.muestraMensaje = true;
                            this.tituloMensaje = 'Error de comunicación';
                            this.contenidoMensaje = 'Hubo un error de comunicación, contacte al administrador.';
                        }
                    }, error => {
                        console.log(error);
                        loader.dismiss();
                        this.estaCargando = false;
                        this.tituloLoading = '';
                    });
                }
                else {
                    //llamada nativa
                    this.servicioGeo.validaCodigoNative(idPreRegistro, codigoCompleto, accion).then((response) => {
                        var data = JSON.parse(response.data);
                        //la respuesta trae
                        //CodigoMensaje, TextoMensaje, PreRegistroApp { Codigo, Correo, Eliminado, Estado, FechaHora, Id, Run (con guion) }
                        if (data) {
                            if (data.CodigoMensaje == 0) {
                                //correcto
                                loader.dismiss();
                                this.estaCargando = false;
                                this.tituloLoading = '';
                                //limpiamos la localstorage
                                //no deberíamos limpiar pre-registro, deberíamos limpiarlo en el registro cuando termine
                                //localStorage.removeItem('PRE-REGISTRO');
                                //ir a la pagina de registro
                                this.irARegistro();
                            }
                            else {
                                loader.dismiss();
                                this.estaCargando = false;
                                this.tituloLoading = '';
                                //mensaje
                                this.muestraMensaje = true;
                                this.tituloMensaje = 'Mensaje';
                                this.contenidoMensaje = data.TextoMensaje;
                            }
                        }
                        else {
                            loader.dismiss();
                            this.estaCargando = false;
                            this.tituloLoading = '';
                            //mensaje
                            this.muestraMensaje = true;
                            this.tituloMensaje = 'Error de comunicación';
                            this.contenidoMensaje = 'Hubo un error de comunicación, contacte al administrador.';
                        }
                    }).catch(error => {
                        console.log(error);
                        loader.dismiss();
                        this.estaCargando = false;
                        this.tituloLoading = '';
                    });
                }
            }));
        });
    }
    cancelarRegistro() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            //aca da lo mismo el codigo ya que esta cancelando
            let codigoCompleto = "123456";
            let idPreRegistro = "";
            if (this.preRegistro && this.preRegistro.Id > 0) {
                idPreRegistro = this.preRegistro.Id;
            }
            this.estaCargando = true;
            this.tituloLoading = 'Verificando solicitud de registro';
            let accion = 'cancelar';
            let loader = yield this.loading.create({
                cssClass: 'loading-vacio',
                showBackdrop: false,
                spinner: null,
            });
            yield loader.present().then(() => Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
                if (!this.utiles.isAppOnDevice()) {
                    //llamada web
                    this.servicioGeo.validaCodigo(idPreRegistro, codigoCompleto, accion).subscribe((response) => {
                        //procesar
                        var data = response;
                        //la respuesta trae
                        //CodigoMensaje, TextoMensaje, PreRegistroApp { Codigo, Correo, Eliminado, Estado, FechaHora, Id, Run (con guion) }
                        if (data) {
                            if (data.CodigoMensaje == 0) {
                                //correcto
                                loader.dismiss();
                                this.estaCargando = false;
                                this.tituloLoading = '';
                                //limpiamos la localstorage
                                localStorage.removeItem('PRE-REGISTRO');
                                this.utiles.presentToast('Tu solicitud registro ha sido cancelado con éxito', 'bottom', 3000);
                                //lo manadmos a la pagina de inicio nuevamente
                                this.navCtrl.navigateRoot('inicio');
                            }
                            else {
                                loader.dismiss();
                                this.estaCargando = false;
                                this.tituloLoading = '';
                                //mensaje
                                this.muestraMensaje = true;
                                this.tituloMensaje = 'Mensaje';
                                this.contenidoMensaje = data.TextoMensaje;
                            }
                        }
                        else {
                            loader.dismiss();
                            this.estaCargando = false;
                            this.tituloLoading = '';
                            //mensaje
                            this.muestraMensaje = true;
                            this.tituloMensaje = 'Error de comunicación';
                            this.contenidoMensaje = 'Hubo un error de comunicación, contacte al administrador.';
                        }
                    }, error => {
                        console.log(error);
                        loader.dismiss();
                        this.estaCargando = false;
                        this.tituloLoading = '';
                    });
                }
                else {
                    //llamada nativa
                    this.servicioGeo.validaCodigoNative(idPreRegistro, codigoCompleto, accion).then((response) => {
                        var data = JSON.parse(response.data);
                        //la respuesta trae
                        //CodigoMensaje, TextoMensaje, PreRegistroApp { Codigo, Correo, Eliminado, Estado, FechaHora, Id, Run (con guion) }
                        if (data) {
                            if (data.CodigoMensaje == 0) {
                                //correcto
                                loader.dismiss();
                                this.estaCargando = false;
                                this.tituloLoading = '';
                                //limpiamos la localstorage
                                localStorage.removeItem('PRE-REGISTRO');
                                this.utiles.presentToast('Tu solicitud registro ha sido cancelado con éxito', 'bottom', 3000);
                                //lo manadmos a la pagina de inicio nuevamente
                                this.navCtrl.navigateRoot('inicio');
                            }
                            else {
                                loader.dismiss();
                                this.estaCargando = false;
                                this.tituloLoading = '';
                                //mensaje
                                this.muestraMensaje = true;
                                this.tituloMensaje = 'Mensaje';
                                this.contenidoMensaje = data.TextoMensaje;
                            }
                        }
                        else {
                            loader.dismiss();
                            this.estaCargando = false;
                            this.tituloLoading = '';
                            //mensaje
                            this.muestraMensaje = true;
                            this.tituloMensaje = 'Error de comunicación';
                            this.contenidoMensaje = 'Hubo un error de comunicación, contacte al administrador.';
                        }
                    }).catch(error => {
                        console.log(error);
                        loader.dismiss();
                        this.estaCargando = false;
                        this.tituloLoading = '';
                    });
                }
            }));
        });
    }
    irARegistro() {
        //enviar registroIncompleto
        let registroIncompleto = {
            Activo: 1,
            Apellidos: '',
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
            //registro mediante el enrolamiento
            ModoRegistro: 2,
            NombreUsuario: "",
            Nombres: '',
            Pais: localStorage.getItem("pais"),
            Password: "",
            Plataforma: localStorage.getItem("plataforma"),
            Provincia: localStorage.getItem("provincia"),
            Run: '',
            TelefonoContacto: ''
        };
        if (this.preRegistro && this.preRegistro.Id > 0) {
            registroIncompleto.CorreoElectronico = this.preRegistro.Correo;
            registroIncompleto.Run = this.preRegistro.Run;
        }
        let query = {
            usuario: JSON.stringify(registroIncompleto),
            estaAgregandoFamilia: null
        };
        const navigationExtras = {
            queryParams: query
        };
        this.navCtrl.navigateRoot(['registro-usuario'], navigationExtras);
    }
    get f() { return this.forma.controls; }
};
ValidacionFactorPage.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ToastController"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ModalController"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["Platform"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["MenuController"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] },
    { type: _app_services_ServicioUtiles__WEBPACK_IMPORTED_MODULE_5__["ServicioUtiles"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["LoadingController"] },
    { type: _app_services_ServicioGeo__WEBPACK_IMPORTED_MODULE_6__["ServicioGeo"] }
];
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('codigo1', { static: true })
], ValidacionFactorPage.prototype, "codigoUnoInput", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('codigo2', { static: true })
], ValidacionFactorPage.prototype, "codigoDosInput", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('codigo3', { static: true })
], ValidacionFactorPage.prototype, "codigoTresInput", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('codigo4', { static: true })
], ValidacionFactorPage.prototype, "codigoCuatroInput", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('codigo5', { static: true })
], ValidacionFactorPage.prototype, "codigoCincoInput", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('codigo6', { static: true })
], ValidacionFactorPage.prototype, "codigoSeisInput", void 0);
ValidacionFactorPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-validacion-factor',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./validacion-factor.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/validacion-factor/validacion-factor.page.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./validacion-factor.page.scss */ "./src/app/validacion-factor/validacion-factor.page.scss")).default]
    })
], ValidacionFactorPage);



/***/ })

}]);
//# sourceMappingURL=validacion-factor-validacion-factor-module-es2015.js.map