(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["ajustes-familia-ajustes-familia-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/ajustes-familia/ajustes-familia.page.html":
/*!*************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/ajustes-familia/ajustes-familia.page.html ***!
  \*************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header class=\"back-app\">\n  <ion-toolbar color=\"primary\" mode=\"md\">\n    <ion-buttons slot=\"start\">\n      <ion-back-button defaultHref=\"/familia\" class=\"fcw\"></ion-back-button>\n    </ion-buttons>\n    <ion-title class=\"fcw\">Ajustes {{nombrePaciente}}</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content class=\"back-app\">\n  <!-- la imagen -->\n  <ion-card>\n    <ion-card-header>\n     <!--  <ion-card-subtitle>Card Subtitle</ion-card-subtitle> -->\n      <ion-card-title>Mi imagen</ion-card-title>\n    </ion-card-header>\n    <ion-card-content>\n      <div>\n        <img [src]=\"image\" *ngIf=\"image\" />\n      </div>\n    </ion-card-content>\n  </ion-card>\n  <!-- control abrir archivos si es que tiene registro -->\n  <ion-list lines=\"none\" *ngIf=\"tieneRegistro\">\n    <ion-item>\n      <ion-note id=\"profile_image\" color=\"primary\">Seleccione el archivo</ion-note>\n    </ion-item>\n    <ion-item>\n      <ion-input  type=\"file\" accept=\"image/*\" (change)=\"changeListener($event)\"></ion-input>\n    </ion-item>\n  </ion-list>\n  <!-- si no tiene registro -->\n  <ion-item *ngIf=\"!tieneRegistro\">\n    No puede editar ya que no se encuentra registrado\n  </ion-item>\n<!--   <ion-row class=\"ion-padding\">\n          <button mat-raised-button color=\"primary\" (click)=\"abrirEditar()\" style=\"width: 90%; margin-left: 5%; height:36px;background: #3880ff;color:white;\" >Cambiar datos de contacto</button>\n  </ion-row> -->\n</ion-content>\n");

/***/ }),

/***/ "./src/app/ajustes-familia/ajustes-familia.module.ts":
/*!***********************************************************!*\
  !*** ./src/app/ajustes-familia/ajustes-familia.module.ts ***!
  \***********************************************************/
/*! exports provided: AjustesFamiliaPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AjustesFamiliaPageModule", function() { return AjustesFamiliaPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _ajustes_familia_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./ajustes-familia.page */ "./src/app/ajustes-familia/ajustes-familia.page.ts");
/* harmony import */ var _components_components_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../components/components.module */ "./src/app/components/components.module.ts");








let AjustesFamiliaPageModule = class AjustesFamiliaPageModule {
};
AjustesFamiliaPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _components_components_module__WEBPACK_IMPORTED_MODULE_7__["ComponentsModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterModule"].forChild([
                {
                    path: '',
                    component: _ajustes_familia_page__WEBPACK_IMPORTED_MODULE_6__["AjustesFamiliaPage"]
                }
            ])
        ],
        declarations: [_ajustes_familia_page__WEBPACK_IMPORTED_MODULE_6__["AjustesFamiliaPage"]]
    })
], AjustesFamiliaPageModule);



/***/ }),

/***/ "./src/app/ajustes-familia/ajustes-familia.page.scss":
/*!***********************************************************!*\
  !*** ./src/app/ajustes-familia/ajustes-familia.page.scss ***!
  \***********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FqdXN0ZXMtZmFtaWxpYS9hanVzdGVzLWZhbWlsaWEucGFnZS5zY3NzIn0= */");

/***/ }),

/***/ "./src/app/ajustes-familia/ajustes-familia.page.ts":
/*!*********************************************************!*\
  !*** ./src/app/ajustes-familia/ajustes-familia.page.ts ***!
  \*********************************************************/
/*! exports provided: AjustesFamiliaPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AjustesFamiliaPage", function() { return AjustesFamiliaPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _app_services_ServicioUtiles__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../app/services/ServicioUtiles */ "./src/app/services/ServicioUtiles.ts");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _services_ServicioImagen__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../services/ServicioImagen */ "./src/app/services/ServicioImagen.ts");




//SERVICIOS



let AjustesFamiliaPage = class AjustesFamiliaPage {
    constructor(modalCtrl, utiles, navCtrl, toast, platform, menu, loading, img, activatedRoute, router) {
        this.modalCtrl = modalCtrl;
        this.utiles = utiles;
        this.navCtrl = navCtrl;
        this.toast = toast;
        this.platform = platform;
        this.menu = menu;
        this.loading = loading;
        this.img = img;
        this.activatedRoute = activatedRoute;
        this.router = router;
        this.image = null;
        this.lastImage = null;
        this.nombrePaciente = '';
        this.color = "#127bdc";
        //ACA QUEDE, ESTOY ARMANDO LA PANTALLA DE AJUSTES
        //color
        this.miColor = '#FF4081';
        this.tieneRegistro = false;
    }
    ngOnInit() {
        if (localStorage.getItem('TIENE_REGISTRO')) {
            if (localStorage.getItem('TIENE_REGISTRO').toLowerCase() == 'true') {
                this.tieneRegistro = true;
            }
        }
        //obtener de query params
        this.activatedRoute.queryParams.subscribe(params => {
            if (params && params.usuario) {
                this.usuarioAps = JSON.parse(params.usuario);
                this.image = this.usuarioAps.UrlImagen;
                this.miColor = this.utiles.entregaColor(this.usuarioAps);
                this.color = this.miColor; //this.usuarioAps.Color;
                this.nombrePaciente = this.usuarioAps.Nombres + ' ' + this.usuarioAps.ApellidoPaterno + ' ' + this.usuarioAps.ApellidoMaterno;
                console.log(this.usuarioAps);
            }
        });
    }
    setColor(color) {
        this.color = color;
    }
    changeListener($event) {
        //lo comentamos por mientras
        /*     if (!this.utiles.isAppOnDevice()){
              this.utiles.presentToast('Esta operación no esta permitida', 'center', 3000);
              return;
            }
            else { */
        this.fileP = $event.target.files[0];
        if (this.fileP) {
            if (this.fileP.size <= 2048000) {
                this.putImagen(this.fileP);
            }
            else {
                //this.presentToast('El tamaño de la imágen excede el máximo permitido.'); 
                this.utiles.presentToast('El tamaño de la imágen excede el máximo permitido.', 'center', 3000);
            }
        }
        else {
            //this.presentToast('No ha seleccionado ninguna imágen válida.'); 
            this.utiles.presentToast('No ha seleccionado ninguna imágen válida.', 'center', 3000);
        }
        /*  } */
    }
    putImagen(files) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            var uspId = this.usuarioAps.Id.toString();
            console.log(files.size);
            let loader = yield this.loading.create({
                message: 'Guardando...<br>Imagen del usuario.',
                duration: 20000
            });
            yield loader.present().then(() => Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
                if (!this.utiles.isAppOnDevice()) {
                    //llamada web
                    this.img.putImagen(uspId, files).subscribe((data) => {
                        if (data) {
                            this.image = src_environments_environment__WEBPACK_IMPORTED_MODULE_5__["environment"].URL_FOTOS + data;
                            //cambiar la imagen del usuario aps
                            //o de la familia
                            if (this.usuarioAps) {
                                if (this.usuarioAps.UrlImagen) {
                                    //dejamos al usuario con la nueva imagen
                                    this.usuarioAps.UrlImagen = src_environments_environment__WEBPACK_IMPORTED_MODULE_5__["environment"].URL_FOTOS + data;
                                }
                            }
                            if (sessionStorage.UsuarioAps) {
                                var nuevoUsuarioAps = JSON.parse(sessionStorage.UsuarioAps);
                                //cambiamos este elemento solo si el usuario existe
                                if (nuevoUsuarioAps.Id == uspId) {
                                    //nuevoUsuarioAps.UrlImagen = environment.URL_FOTOS + data;
                                    nuevoUsuarioAps.UrlImagen = data;
                                    //debemos guardar el objeto serializado
                                    sessionStorage.setItem('UsuarioAps', JSON.stringify(nuevoUsuarioAps));
                                }
                                else {
                                    //si no es el mismo hay que buscarlo en la lista de familia y cambiarlo
                                    var usuariosFamilia = JSON.parse(localStorage.getItem('UsuariosFamilia'));
                                    if (usuariosFamilia && usuariosFamilia.length > 0) {
                                        usuariosFamilia.forEach(usuario => {
                                            if (usuario.Id == uspId) {
                                                //usuario.UrlImagen = environment.URL_FOTOS + data;
                                                usuario.UrlImagen = data;
                                            }
                                        });
                                        //ahora serializamos y cambiamos
                                        localStorage.setItem('UsuariosFamilia', JSON.stringify(usuariosFamilia));
                                    }
                                }
                            }
                        }
                        //terminamos loader
                        loader.dismiss();
                    });
                }
                else {
                    //lamada nativa
                    this.img.putImagenNative(uspId, files).then((data) => {
                        if (data) {
                            this.image = src_environments_environment__WEBPACK_IMPORTED_MODULE_5__["environment"].URL_FOTOS + JSON.parse(data.data);
                            //cambiar la imagen del usuario aps
                            //o de la familia
                            if (this.usuarioAps) {
                                if (this.usuarioAps.UrlImagen) {
                                    //dejamos al usuario con la nueva imagen
                                    this.usuarioAps.UrlImagen = src_environments_environment__WEBPACK_IMPORTED_MODULE_5__["environment"].URL_FOTOS + JSON.parse(data.data);
                                }
                            }
                            if (sessionStorage.UsuarioAps) {
                                var nuevoUsuarioAps = JSON.parse(sessionStorage.UsuarioAps);
                                //cambiamos este elemento solo si el usuario existe
                                if (nuevoUsuarioAps.Id == uspId) {
                                    nuevoUsuarioAps.UrlImagen = JSON.parse(data.data);
                                    //debemos guardar el objeto serializado
                                    sessionStorage.setItem('UsuarioAps', JSON.stringify(nuevoUsuarioAps));
                                }
                                else {
                                    //si no es el mismo hay que buscarlo en la lista de familia y cambiarlo
                                    var usuariosFamilia = JSON.parse(localStorage.getItem('UsuariosFamilia'));
                                    if (usuariosFamilia && usuariosFamilia.length > 0) {
                                        usuariosFamilia.forEach(usuario => {
                                            if (usuario.Id == uspId) {
                                                usuario.UrlImagen = JSON.parse(data.data);
                                            }
                                        });
                                        //ahora serializamos y cambiamos
                                        localStorage.setItem('UsuariosFamilia', JSON.stringify(usuariosFamilia));
                                    }
                                }
                            }
                        }
                        //terminamos loader
                        loader.dismiss();
                    });
                }
            }));
        });
    }
    putColor() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            var uspId = this.usuarioAps.Id.toString();
            var colorGuardar = this.color;
            let loader = yield this.loading.create({
                message: 'Guardando...<br>Color del usuario.',
                duration: 20000
            });
            yield loader.present().then(() => Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
                if (!this.utiles.isAppOnDevice()) {
                    //llamada web
                    this.img.putColor(uspId, colorGuardar).subscribe((data) => {
                        if (data) {
                            //hay que setear el color del localstorage
                            //this.utiles.cambiaColorLocalStorage(data);
                            this.color = data;
                            if (this.usuarioAps) {
                                if (this.usuarioAps.Color) {
                                    //dejamos al usuario con la nueva imagen
                                    this.usuarioAps.Color = data;
                                    //sessionStorage.setItem('UsuarioAps', JSON.stringify(nuevoUsuarioAps));
                                }
                            }
                            if (sessionStorage.UsuarioAps) {
                                var nuevoUsuarioAps = JSON.parse(sessionStorage.UsuarioAps);
                                //cambiamos este elemento solo si el usuario existe
                                if (nuevoUsuarioAps.Id == uspId) {
                                    nuevoUsuarioAps.Color = data;
                                    sessionStorage.setItem('UsuarioAps', JSON.stringify(nuevoUsuarioAps));
                                }
                                else {
                                    //si no es el mismo hay que buscarlo en la lista de familia y cambiarlo
                                    var usuariosFamilia = JSON.parse(localStorage.getItem('UsuariosFamilia'));
                                    if (usuariosFamilia && usuariosFamilia.length > 0) {
                                        usuariosFamilia.forEach(usuario => {
                                            if (usuario.Id == uspId) {
                                                usuario.Color = data;
                                            }
                                        });
                                        //ahora serializamos y cambiamos
                                        localStorage.setItem('UsuariosFamilia', JSON.stringify(usuariosFamilia));
                                    }
                                }
                            }
                            localStorage.setItem('MI_COLOR', data);
                        }
                        //terminamos loader
                        loader.dismiss();
                    });
                }
                else {
                    //lamada nativa
                    this.img.putColorNative(uspId, colorGuardar).then((data) => {
                        if (data) {
                            this.utiles.cambiaColorLocalStorage(JSON.parse(data.data));
                            this.color = JSON.parse(data.data);
                            if (this.usuarioAps) {
                                if (this.usuarioAps.Color) {
                                    //dejamos al usuario con la nueva imagen
                                    this.usuarioAps.Color = JSON.parse(data.data);
                                }
                            }
                            if (sessionStorage.UsuarioAps) {
                                var nuevoUsuarioAps = JSON.parse(sessionStorage.UsuarioAps);
                                //cambiamos este elemento solo si el usuario existe
                                if (nuevoUsuarioAps.Id == uspId) {
                                    nuevoUsuarioAps.Color = JSON.parse(data.data);
                                    sessionStorage.setItem('UsuarioAps', JSON.stringify(nuevoUsuarioAps));
                                }
                                else {
                                    //si no es el mismo hay que buscarlo en la lista de familia y cambiarlo
                                    var usuariosFamilia = JSON.parse(localStorage.getItem('UsuariosFamilia'));
                                    if (usuariosFamilia && usuariosFamilia.length > 0) {
                                        usuariosFamilia.forEach(usuario => {
                                            if (usuario.Id == uspId) {
                                                usuario.Color = JSON.parse(data.data);
                                            }
                                        });
                                        //ahora serializamos y cambiamos
                                        localStorage.setItem('UsuariosFamilia', JSON.stringify(usuariosFamilia));
                                    }
                                }
                            }
                        }
                        //terminamos loader
                        loader.dismiss();
                    }, (error) => {
                        loader.dismiss();
                        this.utiles.presentToast(error, 'bottom', 4000);
                    });
                }
            }));
        });
    }
    abrirEditar() {
        //debemos pasar al usuario 
        let query = {
            usuario: null
        };
        query = { usuario: JSON.stringify(this.usuarioAps) };
        const navigationExtras = {
            queryParams: query
        };
        this.navCtrl.navigateRoot(['contactabilidad'], navigationExtras);
    }
};
AjustesFamiliaPage.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ModalController"] },
    { type: _app_services_ServicioUtiles__WEBPACK_IMPORTED_MODULE_4__["ServicioUtiles"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ToastController"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["Platform"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["MenuController"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["LoadingController"] },
    { type: _services_ServicioImagen__WEBPACK_IMPORTED_MODULE_6__["ServicioImagen"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] }
];
AjustesFamiliaPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-ajustes-familia',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./ajustes-familia.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/ajustes-familia/ajustes-familia.page.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./ajustes-familia.page.scss */ "./src/app/ajustes-familia/ajustes-familia.page.scss")).default]
    })
], AjustesFamiliaPage);



/***/ })

}]);
//# sourceMappingURL=ajustes-familia-ajustes-familia-module-es2015.js.map