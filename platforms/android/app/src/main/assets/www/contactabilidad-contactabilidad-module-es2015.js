(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["contactabilidad-contactabilidad-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/contactabilidad/contactabilidad.page.html":
/*!*************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/contactabilidad/contactabilidad.page.html ***!
  \*************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header class=\"back-app\">\n  <ion-toolbar color=\"primary\" mode=\"md\">\n    <ion-buttons slot=\"start\">\n      <ion-back-button defaultHref=\"/familia\" class=\"fcw\"></ion-back-button>\n    </ion-buttons>\n    <ion-title class=\"fcw\">Contactabilidad</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <app-progress [mostrar]=\"estaCargando\" [titulo]=\"tituloProgress\"></app-progress>\n  <div [hidden]=\"estaCargando\" class=\"ion-padding\" style=\"margin-top: 15px;\">\n    <!-- <h5>Estas cambiando los datos de contactabilidad de {{nombrePersona}}</h5> -->\n    <form [formGroup]=\"forma\" novalidate>\n<!--       <ion-row>\n        <ion-avatar slot=\"start\">\n          <img *ngIf=\"usuarioAps.UrlImagen != ''\" src={{usuarioAps.UrlImagen}}>\n          <img *ngIf=\"usuarioAps.UrlImagen == ''\" src=\"../assets/img/no-imagen.jpg\">\n        </ion-avatar>\n        <mat-form-field appearance=\"outline\" style=\"width: 100%;\">\n          <mat-label>Nombre social</mat-label>\n          <input matInput placeholder=\"Nombre social\" formControlName=\"nombreSocial\" name=\"nombreSocial\" required>\n          <mat-error [hidden]=\"!(f.nombreSocial.errors && f.nombreSocial.errors.required)\">Nombre social requerido</mat-error>\n          <mat-hint align=\"start\"><strong>Nombre por el cual te sientes identificado</strong> </mat-hint>\n        </mat-form-field>\n      </ion-row> -->\n      <ion-item lines=\"none\" style=\"--ion-item-background: transparent; --padding-start:0px;\">\n        <ion-avatar slot=\"start\" style=\"margin-top: -10px;\">\n          <img *ngIf=\"usuarioAps.UrlImagen != ''\" src={{usuarioAps.UrlImagen}}>\n          <img *ngIf=\"usuarioAps.UrlImagen == ''\" src=\"../assets/img/no-imagen.jpg\">\n        </ion-avatar>\n        <mat-form-field appearance=\"outline\" style=\"width: 100%;\">\n          <mat-label>Nombre social</mat-label>\n          <input matInput placeholder=\"Nombre social\" formControlName=\"nombreSocial\" name=\"nombreSocial\">\n          <!-- <mat-error [hidden]=\"!(f.nombreSocial.errors && f.nombreSocial.errors.required)\">Nombre social</mat-error> -->\n          <mat-hint align=\"start\"><strong>Nombre por el cual te sientes identificado</strong> </mat-hint>\n        </mat-form-field>\n      </ion-item>\n      <h3 class=\"mt-40\">Datos de contacto</h3>\n      <ion-row>\n        <mat-form-field appearance=\"outline\" style=\"width: 100%;\">\n          <mat-label>Correo electrónico</mat-label>\n          <input matInput placeholder=\"ejemplo@gmail.com\" formControlName=\"email\" name=\"email\">\n          <!-- <mat-error [hidden]=\"!(f.email.errors && f.email.errors.required)\">Correo requerido</mat-error> -->\n          <mat-error [hidden]=\"!(f.email.errors && f.email.errors.pattern)\">Correo inválido</mat-error>\n        </mat-form-field>\n      </ion-row>\n\n      <ion-row>\n        <mat-form-field appearance=\"outline\" style=\"width: 100%;\">\n          <mat-label>Teléfono</mat-label>\n          <input matInput placeholder=\"9XXXXXXXX\" formControlName=\"telefono\" name=\"telefono\">\n          <mat-error [hidden]=\"!(f.telefono.errors && f.telefono.errors.pattern)\">Teléfono inválido</mat-error>\n        </mat-form-field>\n      </ion-row>\n      <!-- boton de registrarse -->\n      <ion-row>\n        <button  [disabled]=\"forma.invalid\" class=\"button-registrarse\" (click)=\"onSumbit()\" mat-raised-button\n          color=\"accent\">GUARDAR</button>\n      </ion-row>\n    </form>\n  \n  </div>\n</ion-content>\n");

/***/ }),

/***/ "./src/app/contactabilidad/contactabilidad.module.ts":
/*!***********************************************************!*\
  !*** ./src/app/contactabilidad/contactabilidad.module.ts ***!
  \***********************************************************/
/*! exports provided: ContactabilidadPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContactabilidadPageModule", function() { return ContactabilidadPageModule; });
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
/* harmony import */ var _contactabilidad_page__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./contactabilidad.page */ "./src/app/contactabilidad/contactabilidad.page.ts");
/* harmony import */ var _components_components_module__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../components/components.module */ "./src/app/components/components.module.ts");













let ContactabilidadPageModule = class ContactabilidadPageModule {
};
ContactabilidadPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _angular_material_form_field__WEBPACK_IMPORTED_MODULE_6__["MatFormFieldModule"],
            _angular_material_select__WEBPACK_IMPORTED_MODULE_7__["MatSelectModule"],
            _angular_material_input__WEBPACK_IMPORTED_MODULE_8__["MatInputModule"],
            _angular_material_button__WEBPACK_IMPORTED_MODULE_9__["MatButtonModule"],
            _angular_material_icon__WEBPACK_IMPORTED_MODULE_10__["MatIconModule"],
            _components_components_module__WEBPACK_IMPORTED_MODULE_12__["ComponentsModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterModule"].forChild([
                {
                    path: '',
                    component: _contactabilidad_page__WEBPACK_IMPORTED_MODULE_11__["ContactabilidadPage"]
                }
            ])
        ],
        declarations: [_contactabilidad_page__WEBPACK_IMPORTED_MODULE_11__["ContactabilidadPage"]]
    })
], ContactabilidadPageModule);



/***/ }),

/***/ "./src/app/contactabilidad/contactabilidad.page.scss":
/*!***********************************************************!*\
  !*** ./src/app/contactabilidad/contactabilidad.page.scss ***!
  \***********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".mt-32 {\n  margin-top: 32px;\n}\n\n.mt-24 {\n  margin-top: 24px;\n}\n\n.mt-80 {\n  margin-top: 5em;\n}\n\n.mt-40 {\n  margin-top: 2.5em;\n}\n\n.mt-36 {\n  margin-top: 2.25em;\n}\n\n.mt-52 {\n  margin-top: 3.25em;\n}\n\n.texto-1 {\n  font-size: 1em;\n  color: #000000DE;\n}\n\n.button-registrarse {\n  width: 80%;\n  margin-left: 10%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29udGFjdGFiaWxpZGFkL0Y6XFxhcHBfbWlmYW1pbGlhX2dpdFxcbWlGYW1pbGlhX3ByZS9zcmNcXGFwcFxcY29udGFjdGFiaWxpZGFkXFxjb250YWN0YWJpbGlkYWQucGFnZS5zY3NzIiwic3JjL2FwcC9jb250YWN0YWJpbGlkYWQvY29udGFjdGFiaWxpZGFkLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGdCQUFBO0FDQ0o7O0FEQ0E7RUFDSSxnQkFBQTtBQ0VKOztBREFBO0VBQ0ksZUFBQTtBQ0dKOztBRERBO0VBQ0ksaUJBQUE7QUNJSjs7QURGQTtFQUNJLGtCQUFBO0FDS0o7O0FESEE7RUFDSSxrQkFBQTtBQ01KOztBREpBO0VBQ0ksY0FBQTtFQUNBLGdCQUFBO0FDT0o7O0FESkE7RUFDSSxVQUFBO0VBQ0EsZ0JBQUE7QUNPSiIsImZpbGUiOiJzcmMvYXBwL2NvbnRhY3RhYmlsaWRhZC9jb250YWN0YWJpbGlkYWQucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLm10LTMye1xyXG4gICAgbWFyZ2luLXRvcDogMzJweDtcclxufVxyXG4ubXQtMjR7XHJcbiAgICBtYXJnaW4tdG9wOiAyNHB4O1xyXG59XHJcbi5tdC04MHtcclxuICAgIG1hcmdpbi10b3A6IDVlbTtcclxufVxyXG4ubXQtNDB7XHJcbiAgICBtYXJnaW4tdG9wOiAyLjVlbTtcclxufVxyXG4ubXQtMzZ7XHJcbiAgICBtYXJnaW4tdG9wOiAyLjI1ZW07XHJcbn1cclxuLm10LTUye1xyXG4gICAgbWFyZ2luLXRvcDogMy4yNWVtO1xyXG59XHJcbi50ZXh0by0xe1xyXG4gICAgZm9udC1zaXplOiAxZW07XHJcbiAgICBjb2xvcjogIzAwMDAwMERFO1xyXG4gICAgXHJcbn1cclxuLmJ1dHRvbi1yZWdpc3RyYXJzZXtcclxuICAgIHdpZHRoOiA4MCU7XHJcbiAgICBtYXJnaW4tbGVmdDogMTAlO1xyXG59XHJcbiIsIi5tdC0zMiB7XG4gIG1hcmdpbi10b3A6IDMycHg7XG59XG5cbi5tdC0yNCB7XG4gIG1hcmdpbi10b3A6IDI0cHg7XG59XG5cbi5tdC04MCB7XG4gIG1hcmdpbi10b3A6IDVlbTtcbn1cblxuLm10LTQwIHtcbiAgbWFyZ2luLXRvcDogMi41ZW07XG59XG5cbi5tdC0zNiB7XG4gIG1hcmdpbi10b3A6IDIuMjVlbTtcbn1cblxuLm10LTUyIHtcbiAgbWFyZ2luLXRvcDogMy4yNWVtO1xufVxuXG4udGV4dG8tMSB7XG4gIGZvbnQtc2l6ZTogMWVtO1xuICBjb2xvcjogIzAwMDAwMERFO1xufVxuXG4uYnV0dG9uLXJlZ2lzdHJhcnNlIHtcbiAgd2lkdGg6IDgwJTtcbiAgbWFyZ2luLWxlZnQ6IDEwJTtcbn0iXX0= */");

/***/ }),

/***/ "./src/app/contactabilidad/contactabilidad.page.ts":
/*!*********************************************************!*\
  !*** ./src/app/contactabilidad/contactabilidad.page.ts ***!
  \*********************************************************/
/*! exports provided: ContactabilidadPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContactabilidadPage", function() { return ContactabilidadPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _app_services_ServicioUtiles__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../app/services/ServicioUtiles */ "./src/app/services/ServicioUtiles.ts");
/* harmony import */ var _app_services_ServicioGeo__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../app/services/ServicioGeo */ "./src/app/services/ServicioGeo.ts");
/* harmony import */ var _app_services_ServicioAcceso__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../app/services/ServicioAcceso */ "./src/app/services/ServicioAcceso.ts");
/* harmony import */ var _app_services_ServicioParametrosApp__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../app/services/ServicioParametrosApp */ "./src/app/services/ServicioParametrosApp.ts");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! moment */ "./node_modules/moment/moment.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_9__);





//servicios





let ContactabilidadPage = class ContactabilidadPage {
    constructor(navCtrl, utiles, servicioGeo, loading, formBuilder, activatedRoute, router, acceso, parametrosApp, alertController) {
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
        //para validar
        this.patternOnlyLetter = '[a-zA-ZÀ-ÿ\u00f1\u00d1]+(\s*[a-zA-ZÀ-ÿ\u00f1\u00d1]*)*[a-zA-ZÀ-ÿ\u00f1\u00d1 ]+$';
        this.expCelular = /^(\+?56)?(\s?)(0?9)(\s?)[9876543]\d{7}$/gm;
        this.expPassword = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{4,8}$/gm;
        this.expEmail = /^[^@\s]+@[^@\s]+\.[^@\s]+$/gm;
        //variable para obtener el registro del usuario
        this.registro = null;
        this.estaCargando = false;
        this.tituloProgress = '';
        this.usuarioAps = null;
        this.usuarioApsRegistro = null;
        this.modificaRegistro = false;
        this.nombrePersona = '';
    }
    //ACA HAY QUE SACAR LOS CAMPOS REQUERIDOS Y LOS ASTERISCOS DE LOS LABELS
    //LO DDEMAS ESTTA FUNCIONANDO BIEN
    ngOnInit() {
        moment__WEBPACK_IMPORTED_MODULE_9__["locale"]('es');
        //obtenemos el registro
        this.activatedRoute.queryParams.subscribe(params => {
            if (params && params.usuario) {
                if (localStorage.getItem('REGISTRO')) {
                    this.registro = JSON.parse(localStorage.getItem('REGISTRO'));
                }
                this.usuarioAps = JSON.parse(params.usuario);
                this.nombrePersona = this.usuarioAps.Nombres + ' ' + this.usuarioAps.ApellidoPaterno;
                if (localStorage.getItem('UsuarioAps')) {
                    this.usuarioApsRegistro = JSON.parse(localStorage.getItem('UsuarioAps'));
                }
                //verificamos si es el mismo usuario o no
                if (this.usuarioAps && this.usuarioApsRegistro && this.registro) {
                    if (this.usuarioAps.Id == this.usuarioApsRegistro.Id) {
                        this.modificaRegistro = true;
                    }
                }
                console.log(this.usuarioAps);
            }
        });
        //cargamos la forma
        this.cargarForma();
    }
    cargarForma() {
        this.forma = new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormGroup"]({
            'nombreSocial': new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](''),
            'email': new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].pattern(this.expEmail)]),
            'telefono': new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].pattern(this.expCelular)]),
        });
        //precargar los datos del usuario. solo si modifica registro
        if (this.modificaRegistro) {
            if (this.registro && this.registro != null) {
                this.forma.setValue({
                    nombreSocial: this.registro.Apodo,
                    email: this.registro.CorreoElectronico,
                    telefono: this.registro.TelefonoContacto ? this.registro.TelefonoContacto : '',
                });
            }
        }
        else {
            //no tiene registro, pero puede tener datos de contactabilidad en el local storage
            if (this.usuarioAps.Contactabilidad != null) {
                this.forma.setValue({
                    nombreSocial: this.usuarioAps.Contactabilidad.NombreSocial,
                    email: this.usuarioAps.Contactabilidad.Email,
                    telefono: this.usuarioAps.Contactabilidad.Telefono ? this.usuarioAps.Contactabilidad.Telefono : '',
                });
            }
        }
    }
    onSumbit() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            if (this.parametrosApp.USA_API_MANAGEMENT()) {
                let loader = yield this.loading.create({
                    cssClass: 'loading-vacio',
                    showBackdrop: false,
                    spinner: null,
                    //message: 'Cargando...<br>tipos de atención',
                    duration: 2000
                });
                this.estaCargando = true;
                this.tituloProgress = 'Actualizando datos de contacto';
                //variables a enviar
                let email = this.forma.controls.email ? this.forma.controls.email.value : '';
                let nombreSocial = this.forma.controls.nombreSocial ? this.forma.controls.nombreSocial.value : '';
                let telefono = this.forma.controls.telefono ? this.forma.controls.telefono.value : '';
                //el run debe ser del usuario que se está modificando
                //let run = this.registro.Run.replace('-', '');
                let run = this.usuarioAps.Rut;
                yield loader.present().then(() => Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
                    if (!this.utiles.isAppOnDevice()) {
                        //llamada web
                        this.servicioGeo.postInformarPersona(run, nombreSocial, email, telefono, 'MOVIL_FICHA_FAMILIAR').subscribe((response) => {
                            //procesar respuesta
                            var datos = response;
                            this.procesarRespuesta(datos, loader, nombreSocial, telefono, email, run);
                        }, error => {
                            console.log(error.message);
                            this.estaCargando = false;
                            loader.dismiss();
                            this.tituloProgress = '';
                            this.utiles.presentToast('Se presentó un error al guardar los datos, contacte al administrador', 'bottom', 2000);
                        });
                    }
                    else {
                        //llamada nativa
                        this.servicioGeo.postInformarPersonaNative(run, nombreSocial, email, telefono, 'MOVIL_FICHA_FAMILIAR').then((response) => {
                            //procesar respuesta
                            var datos = JSON.parse(response.data);
                            this.procesarRespuesta(datos, loader, nombreSocial, telefono, email, run);
                        }).catch(error => {
                            console.log(error.message);
                            this.estaCargando = false;
                            loader.dismiss();
                            this.tituloProgress = '';
                            this.utiles.presentToast('Se presentó un error al guardar los datos, contacte al administrador', 'bottom', 2000);
                        });
                    }
                }));
            }
            else {
                //si no tiene api management
                this.utiles.presentToast('Esta funcionalidad no está disponible', 'bottom', 3000);
            }
        });
    }
    procesarRespuesta(data, loading, nombreSocial, telefono, email, run) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            //primero evaluamos la respuesta
            if (data) {
                if (data.InformarPersonaResponse) {
                    if (data.InformarPersonaResponse.RespuestaBase) {
                        //acá trae info de rayen y de ryf
                        //ojo que debemos actualizar igual el registro, al menos con el telefono y el apodo
                        //ya que el email es de autentificacion y no se puede cambiar
                        let correctoRayen = false;
                        let correctoRyf = false;
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
                        if (correctoRyf || correctoRayen) {
                            this.estaCargando = false;
                            this.tituloProgress = '';
                            loading.dismiss();
                            this.utiles.presentToast('Datos actualizados correctamente', 'bottom', 2000);
                            //se debe actualizar registro solo si esta registrado
                            if (this.modificaRegistro) {
                                this.actualizarRegistro(nombreSocial, telefono);
                            }
                            //aca debemos hacer la llamada para obtener la contactabilidad y guardarla en el localstorage
                            //this.utiles.actualizarContactabilidad(this.usuarioAps, nombreSocial, telefono, email);
                            this.obtenerContactabilidad(run);
                        }
                        else {
                            this.estaCargando = false;
                            loading.dismiss();
                            this.tituloProgress = '';
                            this.utiles.presentToast('Error al actualizar los datos', 'bottom', 2000);
                        }
                    }
                    else {
                        this.estaCargando = false;
                        loading.dismiss();
                        this.tituloProgress = '';
                        this.utiles.presentToast('Error al actualizar los datos', 'bottom', 3000);
                    }
                }
                else {
                    this.estaCargando = false;
                    loading.dismiss();
                    this.tituloProgress = '';
                    this.utiles.presentToast('Error al actualizar los datos', 'bottom', 3000);
                }
            }
            else {
                this.estaCargando = false;
                loading.dismiss();
                this.utiles.presentToast('Error al actualizar los datos', 'bottom', 3000);
                this.tituloProgress = '';
            }
        });
    }
    actualizarRegistro(nombreSocial, telefono) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            var fechaNac = moment__WEBPACK_IMPORTED_MODULE_9__();
            if (this.registro.FechaNacimiento) {
                fechaNac = moment__WEBPACK_IMPORTED_MODULE_9__(this.registro.FechaNacimiento);
            }
            //ahora actualizar el registro
            this.registro.Apodo = nombreSocial;
            this.registro.TelefonoContacto = telefono;
            //valores por defecto
            this.registro.Id = this.registro.Id.toString();
            this.registro.Activo = this.registro.Activo.toString();
            this.registro.DiaNacimiento = fechaNac.date().toString();
            this.registro.MesNacimiento = (fechaNac.month() + 1).toString();
            this.registro.AnioNacimiento = fechaNac.year().toString();
            this.registro.Eliminado = this.registro.Eliminado.toString();
            this.registro.ModoRegistro = this.registro.ModoRegistro.toString();
            this.registro.FechaBaja = null;
            let loader = yield this.loading.create({
                cssClass: 'loading-vacio',
                showBackdrop: false,
                spinner: null
            });
            this.estaCargando = true;
            this.tituloProgress = 'Actualizando datos de registro';
            yield loader.present().then(() => Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
                if (!this.utiles.isAppOnDevice()) {
                    //llamada web
                    this.servicioGeo.postRegistroFamilia(this.registro).subscribe((data) => {
                        let respuesta = data;
                        localStorage.setItem('REGISTRO', JSON.stringify(respuesta));
                        loader.dismiss();
                        this.estaCargando = false;
                        this.utiles.presentToast('Datos actualizados correctamente', 'bottom', 2000);
                    }, error => {
                        loader.dismiss();
                        this.estaCargando = false;
                        this.utiles.presentToast(error, 'bottom', 2000);
                    });
                }
                else {
                    //llamada nativa
                    this.servicioGeo.postRegistroFamiliaNative(this.registro).then((data) => {
                        let respuesta = JSON.parse(data.data);
                        localStorage.setItem('REGISTRO', JSON.stringify(respuesta));
                        loader.dismiss();
                        this.estaCargando = false;
                        this.utiles.presentToast('Datos actualizados correctamente', 'bottom', 2000);
                    }).catch(error => {
                        loader.dismiss();
                        this.estaCargando = false;
                        this.utiles.presentToast(error, 'bottom', 2000);
                    });
                }
            }));
        });
    }
    actualizarContactabilidad(usuario, nombreSocial, telefono, email) {
        //buscamos al usuario en local sttorage
        var contactabilidad = {
            Rut: usuario.Rut,
            Id: usuario.Id,
            NombreSocial: nombreSocial,
            Telefono: telefono,
            Email: email,
            EtiquetaTelefono: 'MOVIL_FICHA_FAMILIAR'
        };
        if (localStorage.getItem('UsuarioAps')) {
            var usu = JSON.parse(localStorage.getItem('UsuarioAps'));
            if (usu) {
                if (usu.Id == usuario.Id) {
                    usu.Contactabilidad = contactabilidad;
                    localStorage.setItem('UsuarioAps', JSON.stringify(usu));
                }
            }
        }
        if (localStorage.getItem('UsuariosFamilia')) {
            var existe = false;
            var usuarios = JSON.parse(localStorage.getItem('UsuariosFamilia'));
            if (usuarios && usuarios.length > 0) {
                for (var i = 0; i < usuarios.length; i++) {
                    if (usuarios[i].Id == usuario.Id) {
                        usuarios[i].Contactabilidad = contactabilidad;
                        existe = true;
                    }
                }
            }
            if (existe) {
                localStorage.setItem('UsuariosFamilia', JSON.stringify(usuarios));
            }
        }
    }
    obtenerContactabilidad(run) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            let loader = yield this.loading.create({
                cssClass: 'loading-vacio',
                showBackdrop: false,
                spinner: null
            });
            this.estaCargando = true;
            this.tituloProgress = 'Buscando contactabilidad';
            yield loader.present().then(() => Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
                if (!this.utiles.isAppOnDevice()) {
                    //llamada web
                    this.servicioGeo.getContactabilidad(run).subscribe((data) => {
                        let respuesta = data;
                        loader.dismiss();
                        this.estaCargando = false;
                        this.utiles.actualizarContactabilidad(respuesta);
                    }, error => {
                        loader.dismiss();
                        this.estaCargando = false;
                        this.utiles.presentToast(error, 'bottom', 2000);
                    });
                }
                else {
                    //llamada nativa
                    this.servicioGeo.getContactabilidadNative(run).then((data) => {
                        let respuesta = JSON.parse(data.data);
                        loader.dismiss();
                        this.estaCargando = false;
                        this.utiles.actualizarContactabilidad(respuesta);
                    }).catch(error => {
                        loader.dismiss();
                        this.estaCargando = false;
                        this.utiles.presentToast(error, 'bottom', 2000);
                    });
                }
            }));
        });
    }
    get f() { return this.forma.controls; }
};
ContactabilidadPage.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"] },
    { type: _app_services_ServicioUtiles__WEBPACK_IMPORTED_MODULE_5__["ServicioUtiles"] },
    { type: _app_services_ServicioGeo__WEBPACK_IMPORTED_MODULE_6__["ServicioGeo"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["LoadingController"] },
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] },
    { type: _app_services_ServicioAcceso__WEBPACK_IMPORTED_MODULE_7__["ServicioAcceso"] },
    { type: _app_services_ServicioParametrosApp__WEBPACK_IMPORTED_MODULE_8__["ServicioParametrosApp"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["AlertController"] }
];
ContactabilidadPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-contactabilidad',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./contactabilidad.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/contactabilidad/contactabilidad.page.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./contactabilidad.page.scss */ "./src/app/contactabilidad/contactabilidad.page.scss")).default]
    })
], ContactabilidadPage);



/***/ })

}]);
//# sourceMappingURL=contactabilidad-contactabilidad-module-es2015.js.map