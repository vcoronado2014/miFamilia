(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["antecedentes-antecedentes-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/antecedentes/antecedentes.page.html":
/*!*******************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/antecedentes/antecedentes.page.html ***!
  \*******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\r\n  <!-- <ion-toolbar [style.--background]=\"miColor\" mode=\"md\"> -->\r\n  <ion-toolbar color=\"primary\" mode=\"md\">\r\n    <ion-buttons slot=\"start\">\r\n      <ion-back-button defaultHref=\"/home\" class=\"fcw\"></ion-back-button>\r\n    </ion-buttons>\r\n    <ion-title class=\"fcw\">Antecedentes</ion-title>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content class=\"back-app\">\r\n  <app-progress [mostrar]=\"estaCargando\" titulo=\"Buscando antecedentes\"></app-progress>\r\n\r\n  <div [hidden]=\"estaCargando\" *ngIf=\"listadoUsuario <= 0\" style=\"padding-top: 162px; font-size: 30px; color:#BDBDBD; text-align: center;\"><p>No hay antecedentes para mostrar  <br>\r\n    <ion-icon name=\"information-circle\" style=\"font-size: 60px;\"></ion-icon></p>\r\n  </div>\r\n\r\n  <div style=\"padding-top: 32px;\" [hidden]=\"estaCargando\">\r\n    <div *ngFor=\"let item of listadoUsuario\" (click)=\"goToDetails(item)\">\r\n      <!-- poner avatar -->\r\n      <app-avatar [lines]=\"inset\" [urlImagen] = \"item.UrlImagen\" [nombreCompleto]=\"item.Nombres + ' ' + item.ApellidoPaterno + ' ' + item.ApellidoMaterno\" [parentezco]=\"item.Parentezco.Nombre\"></app-avatar>\r\n    </div>\r\n  </div>\r\n</ion-content>\r\n");

/***/ }),

/***/ "./src/app/antecedentes/antecedentes.module.ts":
/*!*****************************************************!*\
  !*** ./src/app/antecedentes/antecedentes.module.ts ***!
  \*****************************************************/
/*! exports provided: AntecedentesPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AntecedentesPageModule", function() { return AntecedentesPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _antecedentes_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./antecedentes.page */ "./src/app/antecedentes/antecedentes.page.ts");
/* harmony import */ var _components_components_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../components/components.module */ "./src/app/components/components.module.ts");








let AntecedentesPageModule = class AntecedentesPageModule {
};
AntecedentesPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _components_components_module__WEBPACK_IMPORTED_MODULE_7__["ComponentsModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterModule"].forChild([
                {
                    path: '',
                    component: _antecedentes_page__WEBPACK_IMPORTED_MODULE_6__["AntecedentesPage"]
                }
            ])
        ],
        declarations: [_antecedentes_page__WEBPACK_IMPORTED_MODULE_6__["AntecedentesPage"]]
    })
], AntecedentesPageModule);



/***/ }),

/***/ "./src/app/antecedentes/antecedentes.page.scss":
/*!*****************************************************!*\
  !*** ./src/app/antecedentes/antecedentes.page.scss ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FudGVjZWRlbnRlcy9hbnRlY2VkZW50ZXMucGFnZS5zY3NzIn0= */");

/***/ }),

/***/ "./src/app/antecedentes/antecedentes.page.ts":
/*!***************************************************!*\
  !*** ./src/app/antecedentes/antecedentes.page.ts ***!
  \***************************************************/
/*! exports provided: AntecedentesPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AntecedentesPage", function() { return AntecedentesPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _app_services_ServicioUtiles__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../app/services/ServicioUtiles */ "./src/app/services/ServicioUtiles.ts");
/* harmony import */ var _app_services_ServicioAcceso__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../app/services/ServicioAcceso */ "./src/app/services/ServicioAcceso.ts");
/* harmony import */ var _app_services_ServicioParametrosApp__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../app/services/ServicioParametrosApp */ "./src/app/services/ServicioParametrosApp.ts");






let AntecedentesPage = class AntecedentesPage {
    constructor(navCtrl, toast, modalCtrl, platform, loading, menu, utiles, acceso, parametrosApp) {
        this.navCtrl = navCtrl;
        this.toast = toast;
        this.modalCtrl = modalCtrl;
        this.platform = platform;
        this.loading = loading;
        this.menu = menu;
        this.utiles = utiles;
        this.acceso = acceso;
        this.parametrosApp = parametrosApp;
        this.miColor = '#FF4081';
        this.usuarioApsFamilia = [];
        this.listadoUsuario = [];
        this.estaCargando = false;
    }
    ngOnInit() {
        this.cargarDatosInciales();
    }
    cargarDatosInciales() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            this.estaCargando = true;
            let loader = yield this.loading.create({
                cssClass: 'loading-vacio',
                showBackdrop: false,
                spinner: null,
            });
            yield loader.present().then(() => Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
                if (sessionStorage.UsuarioAps) {
                    this.usuarioAps = JSON.parse(sessionStorage.UsuarioAps);
                    if (this.usuarioAps) {
                        //this.usuarioAps.UrlImagen = this.utiles.entregaMiImagen();
                        this.usuarioAps.UrlImagen = this.utiles.entregaImagen(this.usuarioAps);
                        this.usuarioAps.Color = this.utiles.entregaColor(this.usuarioAps);
                        this.miColor = this.utiles.entregaColor(this.usuarioAps);
                    }
                }
                else {
                    this.usuarioAps = { Nombres: '', PrimerApellido: '', SegundoApellido: '', UrlImagen: '' };
                }
                //manejo de los usuarios de la familia
                if (localStorage.UsuariosFamilia) {
                    this.usuarioApsFamilia = JSON.parse(localStorage.UsuariosFamilia);
                    if (this.usuarioApsFamilia.length > 0) {
                        for (var s in this.usuarioApsFamilia) {
                            this.usuarioApsFamilia[s].UrlImagen = this.utiles.entregaImagen(this.usuarioApsFamilia[s]);
                            this.usuarioApsFamilia[s].Color = this.utiles.entregaColor(this.usuarioApsFamilia[s]);
                        }
                    }
                }
                //ahora vamos a generar un solo listado de usuarios con los datos que necesitamos
                if (this.usuarioAps) {
                    if (this.usuarioAps.Parentezco && this.usuarioAps.Parentezco.Id > 0) {
                        if (this.usuarioAps.Parentezco.Nombre.toUpperCase() == 'LA MISMA PERSONA') {
                            this.usuarioAps.Parentezco.Nombre = 'Yo';
                        }
                    }
                    else {
                        this.usuarioAps.Parentezco.Nombre = 'Yo';
                    }
                    //this.usuarioAps.Parentezco = "Yo";
                    this.listadoUsuario.push(this.usuarioAps);
                }
                if (this.usuarioApsFamilia) {
                    if (this.usuarioApsFamilia.length > 0) {
                        for (var s in this.usuarioApsFamilia) {
                            //por mientras el parentezco lo dejamos como no informado.
                            if (!(this.usuarioApsFamilia[s].Parentezco && this.usuarioApsFamilia[s].Parentezco.Id > 0)) {
                                this.usuarioApsFamilia[s].Parentezco.Nombre = 'No informado';
                            }
                            //this.usuarioApsFamilia[s].Parentezco = "No informado";
                            this.listadoUsuario.push(this.usuarioApsFamilia[s]);
                        }
                    }
                }
                loader.dismiss();
                this.estaCargando = false;
            }));
        });
    }
    goToDetails(usuario) {
        const navigationExtras = {
            queryParams: {
                usuario: JSON.stringify(usuario)
            }
        };
        this.navCtrl.navigateRoot(['detail-usuario'], navigationExtras);
    }
    logout() {
        this.acceso.logout();
        this.navCtrl.navigateRoot('login');
    }
};
AntecedentesPage.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ToastController"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ModalController"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["Platform"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["LoadingController"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["MenuController"] },
    { type: _app_services_ServicioUtiles__WEBPACK_IMPORTED_MODULE_3__["ServicioUtiles"] },
    { type: _app_services_ServicioAcceso__WEBPACK_IMPORTED_MODULE_4__["ServicioAcceso"] },
    { type: _app_services_ServicioParametrosApp__WEBPACK_IMPORTED_MODULE_5__["ServicioParametrosApp"] }
];
AntecedentesPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-antecedentes',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./antecedentes.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/antecedentes/antecedentes.page.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./antecedentes.page.scss */ "./src/app/antecedentes/antecedentes.page.scss")).default]
    })
], AntecedentesPage);



/***/ })

}]);
//# sourceMappingURL=antecedentes-antecedentes-module-es2015.js.map