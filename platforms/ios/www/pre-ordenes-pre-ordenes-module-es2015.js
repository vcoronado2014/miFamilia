(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pre-ordenes-pre-ordenes-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pre-ordenes/pre-ordenes.page.html":
/*!*****************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pre-ordenes/pre-ordenes.page.html ***!
  \*****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n  <!-- <ion-toolbar [style.--background]=\"miColor\" mode=\"md\"> -->\n  <ion-toolbar color=\"primary\" mode=\"md\">\n    <ion-buttons slot=\"start\">\n      <ion-back-button defaultHref=\"/home\" class=\"fcw\"></ion-back-button>\n    </ion-buttons>\n    <ion-title class=\"fcw\">Exámenes</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content class=\"back-app\">\n  <app-progress [mostrar]=\"estaCargando\" titulo=\"Buscando antecedentes\"></app-progress>\n\n  <div [hidden]=\"estaCargando\" *ngIf=\"listadoUsuario <= 0\" style=\"padding-top: 162px; font-size: 30px; color:#BDBDBD; text-align: center;\"><p>No hay antecedentes para mostrar  <br>\n    <ion-icon name=\"information-circle\" style=\"font-size: 60px;\"></ion-icon></p>\n  </div>\n\n  <div style=\"padding-top: 12px;\" [hidden]=\"estaCargando\">\n    <h5 class=\"texto m-16\">Selecciona un integrante de tu familia</h5>\n    <div *ngFor=\"let item of listadoUsuario\" (click)=\"goToDetails(item)\">\n      <!-- poner avatar -->\n      <app-avatar [lines]=\"inset\" [urlImagen] = \"item.UrlImagen\" [nombreCompleto]=\"item.Nombres + ' ' + item.ApellidoPaterno + ' ' + item.ApellidoMaterno\" [parentezco]=\"item.Parentezco.Nombre\"></app-avatar>\n    </div>\n  </div>\n</ion-content>\n");

/***/ }),

/***/ "./src/app/pre-ordenes/pre-ordenes.module.ts":
/*!***************************************************!*\
  !*** ./src/app/pre-ordenes/pre-ordenes.module.ts ***!
  \***************************************************/
/*! exports provided: PreOrdenesPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PreOrdenesPageModule", function() { return PreOrdenesPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _pre_ordenes_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./pre-ordenes.page */ "./src/app/pre-ordenes/pre-ordenes.page.ts");
/* harmony import */ var _components_components_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../components/components.module */ "./src/app/components/components.module.ts");








let PreOrdenesPageModule = class PreOrdenesPageModule {
};
PreOrdenesPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _components_components_module__WEBPACK_IMPORTED_MODULE_7__["ComponentsModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterModule"].forChild([
                {
                    path: '',
                    component: _pre_ordenes_page__WEBPACK_IMPORTED_MODULE_6__["PreOrdenesPage"]
                }
            ])
        ],
        declarations: [_pre_ordenes_page__WEBPACK_IMPORTED_MODULE_6__["PreOrdenesPage"]]
    })
], PreOrdenesPageModule);



/***/ }),

/***/ "./src/app/pre-ordenes/pre-ordenes.page.scss":
/*!***************************************************!*\
  !*** ./src/app/pre-ordenes/pre-ordenes.page.scss ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".texto {\n  color: #000000DE;\n  letter-spacing: 0.1pt;\n  font-size: 14pt;\n  font-weight: 500;\n}\n\n.mt-28 {\n  margin-top: 28px;\n}\n\n.m-16 {\n  margin: 16px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy92aWN0b3Jjb3JvbmFkby9EZXNrdG9wL21pRmFtaWxpYV9wcmUvc3JjL2FwcC9wcmUtb3JkZW5lcy9wcmUtb3JkZW5lcy5wYWdlLnNjc3MiLCJzcmMvYXBwL3ByZS1vcmRlbmVzL3ByZS1vcmRlbmVzLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGdCQUFBO0VBQ0EscUJBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7QUNDSjs7QURDQTtFQUNJLGdCQUFBO0FDRUo7O0FEQUE7RUFDSSxZQUFBO0FDR0oiLCJmaWxlIjoic3JjL2FwcC9wcmUtb3JkZW5lcy9wcmUtb3JkZW5lcy5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIudGV4dG97XHJcbiAgICBjb2xvcjogIzAwMDAwMERFO1xyXG4gICAgbGV0dGVyLXNwYWNpbmc6IDAuMXB0O1xyXG4gICAgZm9udC1zaXplOiAxNHB0O1xyXG4gICAgZm9udC13ZWlnaHQ6IDUwMDtcclxufVxyXG4ubXQtMjh7XHJcbiAgICBtYXJnaW4tdG9wOiAyOHB4O1xyXG59XHJcbi5tLTE2e1xyXG4gICAgbWFyZ2luOiAxNnB4O1xyXG59IiwiLnRleHRvIHtcbiAgY29sb3I6ICMwMDAwMDBERTtcbiAgbGV0dGVyLXNwYWNpbmc6IDAuMXB0O1xuICBmb250LXNpemU6IDE0cHQ7XG4gIGZvbnQtd2VpZ2h0OiA1MDA7XG59XG5cbi5tdC0yOCB7XG4gIG1hcmdpbi10b3A6IDI4cHg7XG59XG5cbi5tLTE2IHtcbiAgbWFyZ2luOiAxNnB4O1xufSJdfQ== */");

/***/ }),

/***/ "./src/app/pre-ordenes/pre-ordenes.page.ts":
/*!*************************************************!*\
  !*** ./src/app/pre-ordenes/pre-ordenes.page.ts ***!
  \*************************************************/
/*! exports provided: PreOrdenesPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PreOrdenesPage", function() { return PreOrdenesPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _app_services_ServicioUtiles__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../app/services/ServicioUtiles */ "./src/app/services/ServicioUtiles.ts");
/* harmony import */ var _app_services_ServicioAcceso__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../app/services/ServicioAcceso */ "./src/app/services/ServicioAcceso.ts");
/* harmony import */ var _app_services_ServicioParametrosApp__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../app/services/ServicioParametrosApp */ "./src/app/services/ServicioParametrosApp.ts");






let PreOrdenesPage = class PreOrdenesPage {
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
        this.navCtrl.navigateRoot(['ordenes'], navigationExtras);
    }
};
PreOrdenesPage.ctorParameters = () => [
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
PreOrdenesPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-pre-ordenes',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./pre-ordenes.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pre-ordenes/pre-ordenes.page.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./pre-ordenes.page.scss */ "./src/app/pre-ordenes/pre-ordenes.page.scss")).default]
    })
], PreOrdenesPage);



/***/ })

}]);
//# sourceMappingURL=pre-ordenes-pre-ordenes-module-es2015.js.map