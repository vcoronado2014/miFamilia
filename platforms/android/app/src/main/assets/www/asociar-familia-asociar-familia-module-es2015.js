(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["asociar-familia-asociar-familia-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/asociar-familia/asociar-familia.page.html":
/*!*************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/asociar-familia/asociar-familia.page.html ***!
  \*************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header class=\"back-app\">\n  <ion-toolbar color=\"primary\" mode=\"md\">\n    <ion-buttons slot=\"start\">\n      <ion-back-button defaultHref=\"/home\" class=\"fcw\"></ion-back-button>\n    </ion-buttons>\n    <ion-title class=\"fcw\">Asociar familia</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content class=\"back-app\">\n  <app-progress [mostrar]=\"estaCargando\" [titulo]=\"tituloProgress\"></app-progress>\n\n  <div [hidden]=\"estaCargando\">\n    <div class=\"ion-padding\">\n      <p class=\"texto-item\">\n        Puede asociar a los miembros de la familia propuestos deslizando el check de cada unos de ellos.<br>\n      </p>\n    </div>\n  \n    <div *ngIf=\"familiaAsociar.length > 0\" style=\"padding-top: 16px;\">\n      <div *ngFor=\"let item of familiaAsociar\">\n        <ion-item lines=\"inset\">\n          <ion-grid>\n            <ion-row>\n              <ion-col size=\"10\">\n                <h3 class=\"text-avatar\">{{item.NombreCompleto}}</h3>\n                <small>Run: {{item.Run}}</small>\n              </ion-col>\n              <ion-col size=\"2\">\n                <!-- <ion-toggle color=\"primary\" slot=\"end\" [value]=\"item.EsAceptado\"  mode=\"ios\"></ion-toggle> -->\n                <ion-toggle mode=\"ios\" [checked]=\"item.EsAceptado\" [(ngModel)]=\"item.EsAceptado\"></ion-toggle>\n              </ion-col>\n            </ion-row>\n          </ion-grid>\n        </ion-item>\n      </div>\n      <!-- boton acpetar -->\n      <ion-row>\n        <button [disabled]=\"familiaAsociar.length == 0\" class=\"button-registrarse\" (click)=\"onSubmit()\" mat-raised-button\n          color=\"accent\">GUARDAR</button>\n      </ion-row>\n    </div>\n  </div>\n\n  \n</ion-content>\n");

/***/ }),

/***/ "./src/app/asociar-familia/asociar-familia.module.ts":
/*!***********************************************************!*\
  !*** ./src/app/asociar-familia/asociar-familia.module.ts ***!
  \***********************************************************/
/*! exports provided: AsociarFamiliaPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AsociarFamiliaPageModule", function() { return AsociarFamiliaPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _asociar_familia_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./asociar-familia.page */ "./src/app/asociar-familia/asociar-familia.page.ts");
/* harmony import */ var _components_components_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../components/components.module */ "./src/app/components/components.module.ts");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/form-field */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/form-field.js");
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/select */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/select.js");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/input */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/input.js");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/button */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/button.js");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/icon */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/icon.js");













let AsociarFamiliaPageModule = class AsociarFamiliaPageModule {
};
AsociarFamiliaPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _angular_material_form_field__WEBPACK_IMPORTED_MODULE_8__["MatFormFieldModule"],
            _angular_material_select__WEBPACK_IMPORTED_MODULE_9__["MatSelectModule"],
            _angular_material_input__WEBPACK_IMPORTED_MODULE_10__["MatInputModule"],
            _angular_material_button__WEBPACK_IMPORTED_MODULE_11__["MatButtonModule"],
            _angular_material_icon__WEBPACK_IMPORTED_MODULE_12__["MatIconModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _components_components_module__WEBPACK_IMPORTED_MODULE_7__["ComponentsModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterModule"].forChild([
                {
                    path: '',
                    component: _asociar_familia_page__WEBPACK_IMPORTED_MODULE_6__["AsociarFamiliaPage"]
                }
            ])
        ],
        declarations: [_asociar_familia_page__WEBPACK_IMPORTED_MODULE_6__["AsociarFamiliaPage"]]
    })
], AsociarFamiliaPageModule);



/***/ }),

/***/ "./src/app/asociar-familia/asociar-familia.page.scss":
/*!***********************************************************!*\
  !*** ./src/app/asociar-familia/asociar-familia.page.scss ***!
  \***********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".texto-item {\n  color: #00000099;\n  font-size: 14px;\n}\n\n.button-registrarse {\n  margin-top: 32px;\n  width: 90%;\n  margin-left: 5%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXNvY2lhci1mYW1pbGlhL0Y6XFxhcHBfbWlmYW1pbGlhX2dpdFxcbWlGYW1pbGlhX3ByZS9zcmNcXGFwcFxcYXNvY2lhci1mYW1pbGlhXFxhc29jaWFyLWZhbWlsaWEucGFnZS5zY3NzIiwic3JjL2FwcC9hc29jaWFyLWZhbWlsaWEvYXNvY2lhci1mYW1pbGlhLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGdCQUFBO0VBQ0EsZUFBQTtBQ0NKOztBRENBO0VBQ0ksZ0JBQUE7RUFDQSxVQUFBO0VBQ0EsZUFBQTtBQ0VKIiwiZmlsZSI6InNyYy9hcHAvYXNvY2lhci1mYW1pbGlhL2Fzb2NpYXItZmFtaWxpYS5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIudGV4dG8taXRlbXtcclxuICAgIGNvbG9yOiAjMDAwMDAwOTk7XHJcbiAgICBmb250LXNpemU6IDE0cHg7XHJcbn1cclxuLmJ1dHRvbi1yZWdpc3RyYXJzZXtcclxuICAgIG1hcmdpbi10b3A6IDMycHg7XHJcbiAgICB3aWR0aDogOTAlO1xyXG4gICAgbWFyZ2luLWxlZnQ6IDUlO1xyXG59IiwiLnRleHRvLWl0ZW0ge1xuICBjb2xvcjogIzAwMDAwMDk5O1xuICBmb250LXNpemU6IDE0cHg7XG59XG5cbi5idXR0b24tcmVnaXN0cmFyc2Uge1xuICBtYXJnaW4tdG9wOiAzMnB4O1xuICB3aWR0aDogOTAlO1xuICBtYXJnaW4tbGVmdDogNSU7XG59Il19 */");

/***/ }),

/***/ "./src/app/asociar-familia/asociar-familia.page.ts":
/*!*********************************************************!*\
  !*** ./src/app/asociar-familia/asociar-familia.page.ts ***!
  \*********************************************************/
/*! exports provided: AsociarFamiliaPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AsociarFamiliaPage", function() { return AsociarFamiliaPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _app_services_ServicioUtiles__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../app/services/ServicioUtiles */ "./src/app/services/ServicioUtiles.ts");
/* harmony import */ var _app_services_ServicioGeo__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../app/services/ServicioGeo */ "./src/app/services/ServicioGeo.ts");
/* harmony import */ var _app_services_ServicioAcceso__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../app/services/ServicioAcceso */ "./src/app/services/ServicioAcceso.ts");
/* harmony import */ var _app_services_ServicioParametrosApp__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../app/services/ServicioParametrosApp */ "./src/app/services/ServicioParametrosApp.ts");



//parametros

//SERVICIOS




let AsociarFamiliaPage = class AsociarFamiliaPage {
    constructor(navCtrl, toast, modalCtrl, platform, menu, activatedRoute, router, utiles, loading, servicioGeo, acceso, parametrosApp, alertController) {
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
        this.acceso = acceso;
        this.parametrosApp = parametrosApp;
        this.alertController = alertController;
        this.familiaAsociar = [];
        this.estaCargando = false;
        this.tituloProgress = '';
        //autentificacion
        this.nombreUsuario = '';
        this.password = '';
        //para validarse solo con enrolamiento
        this.usaEnrolamiento = false;
    }
    ngOnInit() {
        this.usaEnrolamiento = this.parametrosApp.USA_LOGIN_ENROLAMIENTO();
        if (localStorage.getItem('REGISTRO')) {
            let registro = JSON.parse(localStorage.getItem('REGISTRO'));
            if (this.usaEnrolamiento) {
                localStorage.setItem('TIENE_REGISTRO', 'false');
            }
            this.nombreUsuario = registro.Run;
            this.password = registro.Password;
        }
        this.buscar();
    }
    buscar() {
        if (localStorage.getItem('FAMILIA-POR-ACEPTAR')) {
            let arrFam = JSON.parse(localStorage.getItem('FAMILIA-POR-ACEPTAR'));
            if (arrFam.length > 0) {
                for (var i = 0; i < arrFam.length; i++) {
                    arrFam[i].Run = this.utiles.insertarGuion(arrFam[i].Run);
                    if (arrFam[i].Aceptado == 1) {
                        arrFam[i].EsAceptado = true;
                    }
                    else {
                        arrFam[i].EsAceptado = false;
                    }
                }
                this.familiaAsociar = arrFam;
                console.log(this.familiaAsociar);
            }
        }
    }
    procesarFamilia() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            //tomar los miembros aceptados y crear un arr de string
            if (this.familiaAsociar && this.familiaAsociar.length > 0) {
                let uspIdTitular = this.familiaAsociar[0].UspIdTitular.toString();
                let arrString = [];
                for (let i = 0; i < this.familiaAsociar.length; i++) {
                    const element = this.familiaAsociar[i];
                    if (element.EsAceptado) {
                        arrString.push(element.UspId.toString());
                    }
                }
                //si no hay elementos aceptados asignaremos un 0 para que no se caiga el server
                if (arrString && arrString.length == 0) {
                    arrString.push("0");
                }
                //tomamos los elementos a guardar
                console.log(uspIdTitular);
                console.log(arrString.toString());
                //ahora que tenemos los elementos procedemos a ejecutar el proceso
                this.estaCargando = true;
                this.tituloProgress = 'Guardando información de la familia';
                let loader = yield this.loading.create({
                    cssClass: 'loading-vacio',
                    showBackdrop: false,
                    spinner: null,
                });
                yield loader.present().then(() => Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
                    if (!this.utiles.isAppOnDevice()) {
                        //llamada web
                        this.servicioGeo.actualizaFamilia(arrString.toString(), uspIdTitular).subscribe((data) => {
                            let respuesta = data;
                            if (respuesta) {
                                loader.dismiss();
                                this.estaCargando = false;
                                this.tituloProgress = '';
                                //correcto, hay que volver a autentificarse
                                console.log('autentificarse');
                                this.autentificarse();
                            }
                            else {
                                loader.dismiss();
                                this.estaCargando = false;
                                this.tituloProgress = '';
                                this.utiles.presentToast('Ocurrió un error al asociar familia', 'bottom', 3000);
                            }
                        }, error => {
                            console.log(error.message);
                            loader.dismiss();
                            this.estaCargando = false;
                            this.tituloProgress = '';
                            this.utiles.presentToast('Ocurrió un error al asociar familia', 'bottom', 3000);
                        });
                    }
                    else {
                        //llamada nativa
                        this.servicioGeo.actualizaFamiliaNative(arrString.toString(), uspIdTitular).then((data) => {
                            let respuesta = JSON.parse(data.data);
                            if (respuesta) {
                                loader.dismiss();
                                this.estaCargando = false;
                                this.tituloProgress = '';
                                //correcto, hay que volver a autentificarse
                                console.log('autentificarse');
                                this.autentificarse();
                            }
                            else {
                                loader.dismiss();
                                this.estaCargando = false;
                                this.tituloProgress = '';
                                this.utiles.presentToast('Ocurrió un error al asociar familia', 'bottom', 3000);
                            }
                        }).catch(error => {
                            console.log(error.message);
                            loader.dismiss();
                            this.estaCargando = false;
                            this.tituloProgress = '';
                            this.utiles.presentToast('Ocurrió un error al asociar familia', 'bottom', 3000);
                        });
                    }
                }));
            }
        });
    }
    onSubmit() {
        //aca se deben guardar los miembros de la familia,
        //o se hace un relogin o se trata el archivo
        //FAMILIA-POR-ACEPTAR
        //se debiera enviar el uspId del titular y los uspsIds de los aceptados
        if (this.familiaAsociar && this.familiaAsociar.length > 0) {
            let cantidadMiembros = this.familiaAsociar.length;
            let miembrosAceptados = this.familiaAsociar.filter(p => p.EsAceptado == true);
            if (miembrosAceptados.length < cantidadMiembros) {
                console.log('infromar que no esta aceptando a todos los miembros, si esta seguro de continuar');
                let header = "Aviso";
                let message = "Hay al menos un miembro de la familia al cual no está aceptando. Posteriormente lo puede volver a aceptar en Activar/Desactivar integrantes. \n¿Está seguro de continuar?.";
                this.presentAlertConfirm(header, message);
                //this.procesarFamilia();
            }
            else {
                console.log('esta aceptando a todos los miembros');
                this.procesarFamilia();
            }
        }
        else {
            this.utiles.presentToast('No hay miembros de la familia a asociar', 'bottom', 3000);
        }
        console.log(this.familiaAsociar);
    }
    presentAlertConfirm(header, message) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const alert = yield this.alertController.create({
                header: header,
                message: message,
                buttons: [
                    {
                        text: 'No',
                        role: 'cancel',
                        cssClass: 'danger',
                        handler: (blah) => {
                            console.log('Confirm Cancel: blah');
                        }
                    }, {
                        text: 'Si',
                        cssClass: 'success',
                        handler: () => {
                            //aca debemos realizar la operación
                            this.procesarFamilia();
                        }
                    }
                ]
            });
            yield alert.present();
        });
    }
    //metodos de autentificacion
    autentificarse() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            //en este caso ya el user name es el email
            let f = { UserName: this.nombreUsuario, Password: this.password, UsaEnrolamiento: this.usaEnrolamiento, TokenFCM: this.utiles.entregaTokenFCM() };
            this.estaCargando = true;
            this.tituloProgress = 'Volviendo a autentificar, espere un momento';
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
                        console.log(error.message);
                        loader.dismiss();
                        this.estaCargando = false;
                        this.tituloProgress = '';
                        return;
                    });
                }
                else {
                    //llamada nativa
                    this.acceso.loginWebNative(f).then((response) => {
                        this.procesarLogin(JSON.parse(response.data), loader);
                    }, (error) => {
                        console.log(error.message);
                        this.utiles.presentToast('Ocurrió un error de autentificación', 'bottom', 4000);
                        this.estaCargando = false;
                        loader.dismiss();
                        this.tituloProgress = '';
                        return;
                    });
                }
            }));
        });
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
                            this.tituloProgress = '';
                        }
                        else {
                            //no tiene entidad contratante
                            this.utiles.presentToast("No tiene entidad contratante asociada", "middle", 3000);
                            loader.dismiss();
                            this.estaCargando = false;
                            this.tituloProgress = '';
                            return;
                        }
                    }
                    else {
                        //no usa entidad contratante
                        tieneUsuario = true;
                        this.setDatosUsuario(retorno, user, userFamilia);
                        loader.dismiss();
                        this.estaCargando = false;
                        this.tituloProgress = '';
                    }
                }
                //si tiene usuario está valido
                if (!tieneUsuario) {
                    this.utiles.presentToast("Tiene registro correcto, pero no cuenta con información en la red de salud.", "middle", 3000);
                }
                this.irAHome();
            }
            else {
                this.CodigoMensaje = retorno.RespuestaBase.CodigoMensaje;
                this.Mensaje = retorno.RespuestaBase.Mensaje;
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
    }
    irAHome() {
        this.navCtrl.navigateRoot('home');
    }
};
AsociarFamiliaPage.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ToastController"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ModalController"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["Platform"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["MenuController"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] },
    { type: _app_services_ServicioUtiles__WEBPACK_IMPORTED_MODULE_4__["ServicioUtiles"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["LoadingController"] },
    { type: _app_services_ServicioGeo__WEBPACK_IMPORTED_MODULE_5__["ServicioGeo"] },
    { type: _app_services_ServicioAcceso__WEBPACK_IMPORTED_MODULE_6__["ServicioAcceso"] },
    { type: _app_services_ServicioParametrosApp__WEBPACK_IMPORTED_MODULE_7__["ServicioParametrosApp"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["AlertController"] }
];
AsociarFamiliaPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-asociar-familia',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./asociar-familia.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/asociar-familia/asociar-familia.page.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./asociar-familia.page.scss */ "./src/app/asociar-familia/asociar-familia.page.scss")).default]
    })
], AsociarFamiliaPage);



/***/ })

}]);
//# sourceMappingURL=asociar-familia-asociar-familia-module-es2015.js.map