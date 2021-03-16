(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["familia-familia-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/familia/familia.page.html":
/*!*********************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/familia/familia.page.html ***!
  \*********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header class=\"back-app\">\r\n  <ion-toolbar color=\"primary\" mode=\"md\">\r\n    <ion-buttons slot=\"start\">\r\n      <ion-back-button defaultHref=\"/home\" class=\"fcw\"></ion-back-button>\r\n    </ion-buttons>\r\n    <ion-title class=\"fcw\">Ajustes</ion-title>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content class=\"back-app\">\r\n  <ion-fab vertical=\"bottom\" horizontal=\"end\" slot=\"fixed\" color=\"danger\">\r\n    <ion-fab-button (click)=\"irValidacion()\">\r\n      <ion-icon name=\"add\"></ion-icon>\r\n    </ion-fab-button>\r\n  </ion-fab>\r\n  <!-- si no hay registros -->\r\n  <div *ngIf=\"hayInfo == false\" style=\"padding-top: 162px; padding-left: 16px; padding-right: 16px; font-size: 30px; color:#BDBDBD; text-align: center;\"><p>No hay familiares para mostrar  <br>\r\n    <ion-icon name=\"information-circle\" style=\"font-size: 60px;\"></ion-icon></p>\r\n  </div>\r\n  <!-- si hay registros -->\r\n  <div *ngIf=\"listadoUsuario.length > 0\" style=\"padding-top: 32px;\">\r\n      <div *ngFor=\"let item of listadoUsuario\" (click)=\"openModalAjustes(item)\">\r\n        <!-- poner avatar -->\r\n        <app-avatar [lines]=\"inset\" [urlImagen] = \"item.UrlImagen\" [nombreCompleto]=\"item.Nombres + ' ' + item.ApellidoPaterno + ' ' + item.ApellidoMaterno\" [parentezco]=\"item.Parentezco.Nombre\"></app-avatar>\r\n      </div>\r\n  </div>\r\n  <!-- ESQUELETON -->\r\n  <div *ngIf=\"listadoUsuario.length == 0\">\r\n    <ion-list>\r\n      <ion-item>\r\n        <ion-avatar slot=\"start\">\r\n          <ion-skeleton-text animated></ion-skeleton-text>\r\n        </ion-avatar>\r\n        <ion-skeleton-text animated></ion-skeleton-text>\r\n      </ion-item>\r\n      <ion-item>\r\n        <ion-avatar slot=\"start\">\r\n          <ion-skeleton-text animated></ion-skeleton-text>\r\n        </ion-avatar>\r\n        <ion-skeleton-text animated></ion-skeleton-text>\r\n      </ion-item>\r\n    </ion-list> \r\n  </div>\r\n\r\n\r\n</ion-content>\r\n");

/***/ }),

/***/ "./src/app/familia/familia.module.ts":
/*!*******************************************!*\
  !*** ./src/app/familia/familia.module.ts ***!
  \*******************************************/
/*! exports provided: FamiliaPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FamiliaPageModule", function() { return FamiliaPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _familia_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./familia.page */ "./src/app/familia/familia.page.ts");
/* harmony import */ var _directives_text_avatar_index__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../directives/text-avatar/index */ "./src/directives/text-avatar/index.ts");
/* harmony import */ var _components_components_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../components/components.module */ "./src/app/components/components.module.ts");









let FamiliaPageModule = class FamiliaPageModule {
};
FamiliaPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _directives_text_avatar_index__WEBPACK_IMPORTED_MODULE_7__["TextAvatarModule"],
            _components_components_module__WEBPACK_IMPORTED_MODULE_8__["ComponentsModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterModule"].forChild([
                {
                    path: '',
                    component: _familia_page__WEBPACK_IMPORTED_MODULE_6__["FamiliaPage"]
                }
            ])
        ],
        declarations: [_familia_page__WEBPACK_IMPORTED_MODULE_6__["FamiliaPage"]]
    })
], FamiliaPageModule);



/***/ }),

/***/ "./src/app/familia/familia.page.scss":
/*!*******************************************!*\
  !*** ./src/app/familia/familia.page.scss ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".text-avatar {\n  font-family: \"Roboto\";\n  letter-spacing: 0.15px;\n  color: #000000DE;\n  font-size: 1em;\n  margin-bottom: 0;\n}\n\n.subtext-avatar {\n  font-family: \"Roboto\";\n  letter-spacing: 0.25px;\n  color: #00000099;\n  font-size: 0.875em;\n  margin-bottom: 0;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZmFtaWxpYS9GOlxcYXBwX21pZmFtaWxpYV9naXRcXG1pRmFtaWxpYV9wcmUvc3JjXFxhcHBcXGZhbWlsaWFcXGZhbWlsaWEucGFnZS5zY3NzIiwic3JjL2FwcC9mYW1pbGlhL2ZhbWlsaWEucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0kscUJBQUE7RUFDQSxzQkFBQTtFQUNBLGdCQUFBO0VBQ0EsY0FBQTtFQUNBLGdCQUFBO0FDQ0o7O0FEQ0U7RUFDRSxxQkFBQTtFQUNBLHNCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxrQkFBQTtFQUNBLGdCQUFBO0FDRUoiLCJmaWxlIjoic3JjL2FwcC9mYW1pbGlhL2ZhbWlsaWEucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnRleHQtYXZhdGFye1xyXG4gICAgZm9udC1mYW1pbHk6ICdSb2JvdG8nO1xyXG4gICAgbGV0dGVyLXNwYWNpbmc6IDAuMTVweDtcclxuICAgIGNvbG9yOiAjMDAwMDAwREU7XHJcbiAgICBmb250LXNpemU6IDFlbTtcclxuICAgIG1hcmdpbi1ib3R0b206IDA7XHJcbiAgfVxyXG4gIC5zdWJ0ZXh0LWF2YXRhcntcclxuICAgIGZvbnQtZmFtaWx5OiAnUm9ib3RvJztcclxuICAgIGxldHRlci1zcGFjaW5nOiAwLjI1cHg7XHJcbiAgICBjb2xvcjogIzAwMDAwMDk5O1xyXG4gICAgZm9udC1zaXplOiAwLjg3NWVtO1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMDtcclxuICB9IiwiLnRleHQtYXZhdGFyIHtcbiAgZm9udC1mYW1pbHk6IFwiUm9ib3RvXCI7XG4gIGxldHRlci1zcGFjaW5nOiAwLjE1cHg7XG4gIGNvbG9yOiAjMDAwMDAwREU7XG4gIGZvbnQtc2l6ZTogMWVtO1xuICBtYXJnaW4tYm90dG9tOiAwO1xufVxuXG4uc3VidGV4dC1hdmF0YXIge1xuICBmb250LWZhbWlseTogXCJSb2JvdG9cIjtcbiAgbGV0dGVyLXNwYWNpbmc6IDAuMjVweDtcbiAgY29sb3I6ICMwMDAwMDA5OTtcbiAgZm9udC1zaXplOiAwLjg3NWVtO1xuICBtYXJnaW4tYm90dG9tOiAwO1xufSJdfQ== */");

/***/ }),

/***/ "./src/app/familia/familia.page.ts":
/*!*****************************************!*\
  !*** ./src/app/familia/familia.page.ts ***!
  \*****************************************/
/*! exports provided: FamiliaPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FamiliaPage", function() { return FamiliaPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _app_services_ServicioUtiles__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../app/services/ServicioUtiles */ "./src/app/services/ServicioUtiles.ts");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _modal_ajustes_modal_ajustes_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../modal-ajustes/modal-ajustes.page */ "./src/app/modal-ajustes/modal-ajustes.page.ts");



//parametros

//SERVICIOS


//modal

let FamiliaPage = class FamiliaPage {
    constructor(navCtrl, toast, modalCtrl, platform, menu, activatedRoute, router, utiles, loading) {
        this.navCtrl = navCtrl;
        this.toast = toast;
        this.modalCtrl = modalCtrl;
        this.platform = platform;
        this.menu = menu;
        this.activatedRoute = activatedRoute;
        this.router = router;
        this.utiles = utiles;
        this.loading = loading;
        //textColor Directive
        this.textColor = '#FFFFFF';
        //color
        this.miColor = '#FF4081';
        //otras variables
        this.hayInfo = true;
        this.usuarioApsFamilia = [];
        this.listadoUsuario = [];
    }
    ngOnInit() {
        this.cargarDatosIniciales();
    }
    ionViewWillLeave() {
        console.log('ionViewWillLeave'); // <- Not in console when leaving
    }
    ngDoCheck() {
        //console.log('check');
        //this.miColor = this.utiles.entregaMiColor();
        //this.cargarDatosIniciales();
        //ESTOY VIENDO ESTO, YA QUE ES MUCHA CARGA HACER SIEMPRE LA
        //VALIDACIÓN EN EL DOCHECK, BUSCAR OTRA FORMA, BUSCAR TAMBIEN SACAR SIEMPRE EL COLOR DESDE
        //LA LOCALSTORAGE MI_COLOR Y MI_IMAGEN
        //verificamos el color
        if (localStorage.getItem('MI_COLOR')) {
            var colorLocal = localStorage.getItem('MI_COLOR');
            var sessionColor = JSON.parse(sessionStorage.UsuarioAps);
            if (colorLocal != sessionColor.Color) {
                //hay que cambiarlo
                console.log('Cambia color de ' + sessionColor.Color + ' a ' + colorLocal);
                localStorage.setItem('MI_COLOR', colorLocal);
                //this.miColor = this.utiles.entregaMiColor();
                this.miColor = this.utiles.entregaColor(this.usuarioAps);
            }
        }
    }
    cargarDatosIniciales() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            this.listadoUsuario = [];
            let loader = yield this.loading.create({
                message: 'Obteniendo...<br>Información del usuario',
                duration: 20000
            });
            yield loader.present().then(() => Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
                //cargamos mi color
                this.miColor = this.utiles.entregaMiColor();
                //demas cargas
                if (sessionStorage.UsuarioAps) {
                    this.usuarioAps = JSON.parse(sessionStorage.UsuarioAps);
                    if (this.usuarioAps) {
                        this.usuarioAps.UrlImagen = src_environments_environment__WEBPACK_IMPORTED_MODULE_5__["environment"].URL_FOTOS + this.usuarioAps.UrlImagen;
                        //this.usuarioAps.Parentezco = 'Yo';
                        if (this.usuarioAps.Parentezco && this.usuarioAps.Parentezco.Id > 0) {
                            if (this.usuarioAps.Parentezco.Nombre.toUpperCase() == 'LA MISMA PERSONA') {
                                this.usuarioAps.Parentezco.Nombre = 'Yo';
                            }
                        }
                        //this.usuarioAps.Parentezco = 'Yo';
                    }
                }
                else
                    this.usuarioAps = { Nombres: '', PrimerApellido: '', SegundoApellido: '', UrlImagen: '' };
                //manejo de los usuarios de la familia
                if (sessionStorage.UsuariosFamilia) {
                    this.usuarioApsFamilia = JSON.parse(sessionStorage.UsuariosFamilia);
                    if (this.usuarioApsFamilia.length > 0) {
                        for (var s in this.usuarioApsFamilia) {
                            this.usuarioApsFamilia[s].UrlImagen = src_environments_environment__WEBPACK_IMPORTED_MODULE_5__["environment"].URL_FOTOS + this.usuarioApsFamilia[s].UrlImagen;
                            if (!(this.usuarioApsFamilia[s].Parentezco && this.usuarioApsFamilia[s].Parentezco.Id > 0)) {
                                this.usuarioApsFamilia[s].Parentezco.Nombre = 'No informado';
                            }
                            //this.usuarioApsFamilia[s].Parentezco = "No informado";
                        }
                    }
                }
                //ahora vamos a generar un solo listado de usuarios con los datos que necesitamos
                if (this.usuarioAps) {
                    this.listadoUsuario.push(this.usuarioAps);
                }
                if (this.usuarioApsFamilia) {
                    if (this.usuarioApsFamilia.length > 0) {
                        for (var s in this.usuarioApsFamilia) {
                            this.listadoUsuario.push(this.usuarioApsFamilia[s]);
                        }
                    }
                }
                if (this.listadoUsuario.length == 0) {
                    this.hayInfo = false;
                }
                loader.dismiss();
            }));
        });
    }
    openModalAjustes(item) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const modal = yield this.modalCtrl.create({
                component: _modal_ajustes_modal_ajustes_page__WEBPACK_IMPORTED_MODULE_6__["ModalAjustesPage"],
                componentProps: {
                    'usuario': JSON.stringify(item)
                }
            });
            modal.onDidDismiss().then((data) => {
                this.cargarDatosIniciales();
            });
            return yield modal.present();
        });
    }
    irValidacion() {
        const navigationExtras = {
            queryParams: {
                estaAgregandoFamilia: true
            }
        };
        this.navCtrl.navigateRoot(['registro-uno'], navigationExtras);
    }
};
FamiliaPage.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ToastController"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ModalController"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["Platform"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["MenuController"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] },
    { type: _app_services_ServicioUtiles__WEBPACK_IMPORTED_MODULE_4__["ServicioUtiles"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["LoadingController"] }
];
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('myList', { read: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonList"] })
], FamiliaPage.prototype, "list", void 0);
FamiliaPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-familia',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./familia.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/familia/familia.page.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./familia.page.scss */ "./src/app/familia/familia.page.scss")).default]
    })
], FamiliaPage);



/***/ })

}]);
//# sourceMappingURL=familia-familia-module-es2015.js.map