(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["default~familia-familia-module~modal-ajustes-modal-ajustes-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/modal-ajustes/modal-ajustes.page.html":
/*!*********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modal-ajustes/modal-ajustes.page.html ***!
  \*********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\r\n  <ion-toolbar color=\"primary\">\r\n    <ion-title class=\"home\">Ajustes {{nombrePaciente}}</ion-title>\r\n    <ion-buttons slot=\"end\" class=\"pdr10\" (click)=\"dismiss()\">\r\n      <ion-icon class=\"home\" slot=\"icon-only\" name=\"close\"></ion-icon>\r\n    </ion-buttons>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content class=\"back-app\">\r\n  <!-- la imagen -->\r\n  <ion-card>\r\n    <ion-card-header>\r\n      <ion-card-title>Mi imagen</ion-card-title>\r\n    </ion-card-header>\r\n    <ion-card-content>\r\n      <div>\r\n        <img [src]=\"image\" *ngIf=\"image\" />\r\n      </div>\r\n    </ion-card-content>\r\n  </ion-card>\r\n  <!-- control abrir archivos si es que tiene registro -->\r\n  <ion-list lines=\"none\" *ngIf=\"tieneRegistro\">\r\n    <ion-item>\r\n      <ion-note id=\"profile_image\" color=\"primary\">Seleccione el archivo</ion-note>\r\n    </ion-item>\r\n    <ion-item>\r\n      <ion-input  type=\"file\" accept=\"image/*\" (change)=\"changeListener($event)\"></ion-input>\r\n    </ion-item>\r\n  </ion-list>\r\n  <!-- si no tiene registro -->\r\n  <ion-item *ngIf=\"!tieneRegistro\">\r\n    No puede editar ya que no se encuentra registrado\r\n  </ion-item>\r\n  <ion-row class=\"ion-padding\">\r\n          <button mat-raised-button color=\"primary\" (click)=\"abrirEditar()\" style=\"width: 90%; margin-left: 5%; height:36px;background: #3880ff;color:white;\" >Cambiar datos de contacto</button>\r\n  </ion-row>\r\n</ion-content>\r\n");

/***/ }),

/***/ "./src/app/modal-ajustes/modal-ajustes.page.scss":
/*!*******************************************************!*\
  !*** ./src/app/modal-ajustes/modal-ajustes.page.scss ***!
  \*******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".label-seleccione {\n  font-size: 0.8em;\n}\n\n.button-registrarse {\n  width: 80%;\n  margin-left: 10%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbW9kYWwtYWp1c3Rlcy9GOlxcYXBwX21pZmFtaWxpYV9naXRcXG1pRmFtaWxpYV9wcmUvc3JjXFxhcHBcXG1vZGFsLWFqdXN0ZXNcXG1vZGFsLWFqdXN0ZXMucGFnZS5zY3NzIiwic3JjL2FwcC9tb2RhbC1hanVzdGVzL21vZGFsLWFqdXN0ZXMucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksZ0JBQUE7QUNDSjs7QURDQTtFQUNJLFVBQUE7RUFDQSxnQkFBQTtBQ0VKIiwiZmlsZSI6InNyYy9hcHAvbW9kYWwtYWp1c3Rlcy9tb2RhbC1hanVzdGVzLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5sYWJlbC1zZWxlY2Npb25le1xyXG4gICAgZm9udC1zaXplOiAwLjhlbTtcclxufVxyXG4uYnV0dG9uLXJlZ2lzdHJhcnNle1xyXG4gICAgd2lkdGg6IDgwJTtcclxuICAgIG1hcmdpbi1sZWZ0OiAxMCU7XHJcbn0iLCIubGFiZWwtc2VsZWNjaW9uZSB7XG4gIGZvbnQtc2l6ZTogMC44ZW07XG59XG5cbi5idXR0b24tcmVnaXN0cmFyc2Uge1xuICB3aWR0aDogODAlO1xuICBtYXJnaW4tbGVmdDogMTAlO1xufSJdfQ== */");

/***/ }),

/***/ "./src/app/modal-ajustes/modal-ajustes.page.ts":
/*!*****************************************************!*\
  !*** ./src/app/modal-ajustes/modal-ajustes.page.ts ***!
  \*****************************************************/
/*! exports provided: ModalAjustesPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ModalAjustesPage", function() { return ModalAjustesPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _app_services_ServicioUtiles__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../app/services/ServicioUtiles */ "./src/app/services/ServicioUtiles.ts");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _services_ServicioImagen__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../services/ServicioImagen */ "./src/app/services/ServicioImagen.ts");



//SERVICIOS



let ModalAjustesPage = class ModalAjustesPage {
    constructor(modalCtrl, navParams, utiles, navCtrl, toast, platform, menu, loading, img) {
        this.modalCtrl = modalCtrl;
        this.navParams = navParams;
        this.utiles = utiles;
        this.navCtrl = navCtrl;
        this.toast = toast;
        this.platform = platform;
        this.menu = menu;
        this.loading = loading;
        this.img = img;
        this.image = null;
        this.lastImage = null;
        this.nombrePaciente = '';
        this.color = "#127bdc";
        this.miColor = '#FF4081';
        this.tieneRegistro = false;
    }
    ngOnInit() {
        //this.miColor = this.utiles.entregaMiColor();
        if (localStorage.getItem('TIENE_REGISTRO')) {
            if (localStorage.getItem('TIENE_REGISTRO').toLowerCase() == 'true') {
                this.tieneRegistro = true;
            }
        }
        this.usuarioAps = JSON.parse(this.navParams.get('usuario'));
        this.image = this.usuarioAps.UrlImagen;
        this.miColor = this.utiles.entregaColor(this.usuarioAps);
        this.color = this.miColor; //this.usuarioAps.Color;
        this.nombrePaciente = this.usuarioAps.Nombres + ' ' + this.usuarioAps.ApellidoPaterno + ' ' + this.usuarioAps.ApellidoMaterno;
        //console.log(this.usuarioAps);
    }
    dismiss() {
        this.modalCtrl.dismiss();
    }
    setColor(color) {
        this.color = color;
    }
    changeListener($event) {
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
    }
    putImagen(files) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            var uspId = this.usuarioAps.Id.toString();
            //console.log(files.size);
            let loader = yield this.loading.create({
                message: 'Guardando...<br>Imagen del usuario.',
                duration: 20000
            });
            yield loader.present().then(() => Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
                if (!this.utiles.isAppOnDevice()) {
                    //llamada web
                    this.img.putImagen(uspId, files).subscribe((data) => {
                        if (data) {
                            this.image = src_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].URL_FOTOS + data;
                            //cambiar la imagen del usuario aps
                            //o de la familia
                            if (this.usuarioAps) {
                                if (this.usuarioAps.UrlImagen) {
                                    //dejamos al usuario con la nueva imagen
                                    this.usuarioAps.UrlImagen = src_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].URL_FOTOS + data;
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
                            this.image = src_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].URL_FOTOS + JSON.parse(data.data);
                            //cambiar la imagen del usuario aps
                            //o de la familia
                            if (this.usuarioAps) {
                                if (this.usuarioAps.UrlImagen) {
                                    //dejamos al usuario con la nueva imagen
                                    this.usuarioAps.UrlImagen = src_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].URL_FOTOS + JSON.parse(data.data);
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
        this.dismiss();
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
ModalAjustesPage.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ModalController"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavParams"] },
    { type: _app_services_ServicioUtiles__WEBPACK_IMPORTED_MODULE_3__["ServicioUtiles"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ToastController"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["Platform"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["MenuController"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["LoadingController"] },
    { type: _services_ServicioImagen__WEBPACK_IMPORTED_MODULE_5__["ServicioImagen"] }
];
ModalAjustesPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-modal-ajustes',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./modal-ajustes.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/modal-ajustes/modal-ajustes.page.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./modal-ajustes.page.scss */ "./src/app/modal-ajustes/modal-ajustes.page.scss")).default]
    })
], ModalAjustesPage);



/***/ })

}]);
//# sourceMappingURL=default~familia-familia-module~modal-ajustes-modal-ajustes-module-es2015.js.map