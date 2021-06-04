(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["resultados-resultados-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/resultados/resultados.page.html":
/*!***************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/resultados/resultados.page.html ***!
  \***************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n  <ion-toolbar color=\"primary\" mode=\"md\">\n    <ion-buttons slot=\"start\">\n      <ion-back-button (click)=\"volver()\" defaultHref=\"/\" class=\"fcw\"></ion-back-button>\n    </ion-buttons>\n    <ion-title class=\"fcw\">{{nombreExamen}}</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content class=\"back-app\">\n\n  <div>\n    <h5 class=\"text-h5\">Exámenes de {{nombreExamen}}</h5>\n  </div>\n  \n  <ion-item lines=\"full\"  *ngFor=\"let exa of resultados\">\n    <ion-grid>\n      <ion-row style=\" width: 100%;\">\n        <ion-col size=\"8\">\n          <div class=\"text-avatar-1\">{{exa.DescripcionResultado}}</div>\n        </ion-col>\n        <ion-col size=\"4\">\n          <div class=\"text-solicitud\" style=\"float: right;\">{{exa.Resultado}} {{exa.Um}}</div>\n        </ion-col>\n      </ion-row>\n      <ion-row>\n        <ion-col>\n          <div class=\"subtext-avatar-1\">[{{exa.ValoresReferencia}}]</div>\n        </ion-col>\n      </ion-row>\n    </ion-grid>\n</ion-item>\n\n\n<!-- NO HAY examenes -->\n<div [hidden]=\"estaCargando\" *ngIf=\"tiene == false\" style=\"position: relative; height: 30vh;\">\n  <div style=\"position: absolute; display: table; height: 100%; font-size: 16pt; color:#0000008A; text-align: center;width: 100%;letter-spacing: 0.5pt;\">\n    <p style=\"display: table-cell; vertical-align: middle\">No tiene resultados  <br>registrados\n    </p>\n  </div>\n</div>\n</ion-content>\n");

/***/ }),

/***/ "./src/app/resultados/resultados.module.ts":
/*!*************************************************!*\
  !*** ./src/app/resultados/resultados.module.ts ***!
  \*************************************************/
/*! exports provided: ResultadosPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ResultadosPageModule", function() { return ResultadosPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _resultados_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./resultados.page */ "./src/app/resultados/resultados.page.ts");
/* harmony import */ var _directives_text_avatar_index__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../directives/text-avatar/index */ "./src/directives/text-avatar/index.ts");
/* harmony import */ var _components_components_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../components/components.module */ "./src/app/components/components.module.ts");









let ResultadosPageModule = class ResultadosPageModule {
};
ResultadosPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
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
                    component: _resultados_page__WEBPACK_IMPORTED_MODULE_6__["ResultadosPage"]
                }
            ])
        ],
        declarations: [_resultados_page__WEBPACK_IMPORTED_MODULE_6__["ResultadosPage"]]
    })
], ResultadosPageModule);



/***/ }),

/***/ "./src/app/resultados/resultados.page.scss":
/*!*************************************************!*\
  !*** ./src/app/resultados/resultados.page.scss ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".text-avatar-1 {\n  color: #000000DE;\n  font-size: 16pt;\n  letter-spacing: 0.5pt;\n  margin-top: 12px;\n}\n\n.subtext-avatar-1 {\n  color: #00000099;\n  font-size: 14pt;\n  letter-spacing: 0.25pt;\n  margin-bottom: 12px;\n}\n\n.text-solicitud {\n  color: #000000DE;\n  font-size: 12pt;\n  letter-spacing: 0.4pt;\n  margin-top: 12px;\n}\n\n.text-h5 {\n  font-size: 14pt;\n  color: #000000DE;\n  letter-spacing: 0.1pt;\n  font-weight: 500;\n  margin-top: 24px;\n  margin-left: 16px;\n  margin-bottom: 16px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy92aWN0b3Jjb3JvbmFkby9EZXNrdG9wL21pRmFtaWxpYV9wcmUvc3JjL2FwcC9yZXN1bHRhZG9zL3Jlc3VsdGFkb3MucGFnZS5zY3NzIiwic3JjL2FwcC9yZXN1bHRhZG9zL3Jlc3VsdGFkb3MucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksZ0JBQUE7RUFDQSxlQUFBO0VBQ0EscUJBQUE7RUFDQSxnQkFBQTtBQ0NKOztBRENBO0VBQ0ksZ0JBQUE7RUFDQSxlQUFBO0VBQ0Esc0JBQUE7RUFDQSxtQkFBQTtBQ0VKOztBREFBO0VBQ0ksZ0JBQUE7RUFDQSxlQUFBO0VBQ0EscUJBQUE7RUFDQSxnQkFBQTtBQ0dKOztBRERBO0VBQ0ksZUFBQTtFQUNBLGdCQUFBO0VBQ0EscUJBQUE7RUFDQSxnQkFBQTtFQUNBLGdCQUFBO0VBQ0EsaUJBQUE7RUFDQSxtQkFBQTtBQ0lKIiwiZmlsZSI6InNyYy9hcHAvcmVzdWx0YWRvcy9yZXN1bHRhZG9zLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi50ZXh0LWF2YXRhci0xe1xyXG4gICAgY29sb3I6IzAwMDAwMERFO1xyXG4gICAgZm9udC1zaXplOiAxNnB0O1xyXG4gICAgbGV0dGVyLXNwYWNpbmc6IDAuNXB0O1xyXG4gICAgbWFyZ2luLXRvcDogMTJweDtcclxufVxyXG4uc3VidGV4dC1hdmF0YXItMXtcclxuICAgIGNvbG9yOiMwMDAwMDA5OTtcclxuICAgIGZvbnQtc2l6ZTogMTRwdDtcclxuICAgIGxldHRlci1zcGFjaW5nOiAwLjI1cHQ7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAxMnB4O1xyXG59XHJcbi50ZXh0LXNvbGljaXR1ZHtcclxuICAgIGNvbG9yOiMwMDAwMDBERTtcclxuICAgIGZvbnQtc2l6ZTogMTJwdDtcclxuICAgIGxldHRlci1zcGFjaW5nOiAwLjRwdDtcclxuICAgIG1hcmdpbi10b3A6IDEycHg7XHJcbn1cclxuLnRleHQtaDV7XHJcbiAgICBmb250LXNpemU6IDE0cHQ7XHJcbiAgICBjb2xvcjojMDAwMDAwREU7XHJcbiAgICBsZXR0ZXItc3BhY2luZzogMC4xcHQ7XHJcbiAgICBmb250LXdlaWdodDogNTAwO1xyXG4gICAgbWFyZ2luLXRvcDogMjRweDtcclxuICAgIG1hcmdpbi1sZWZ0OiAxNnB4O1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMTZweDtcclxufSIsIi50ZXh0LWF2YXRhci0xIHtcbiAgY29sb3I6ICMwMDAwMDBERTtcbiAgZm9udC1zaXplOiAxNnB0O1xuICBsZXR0ZXItc3BhY2luZzogMC41cHQ7XG4gIG1hcmdpbi10b3A6IDEycHg7XG59XG5cbi5zdWJ0ZXh0LWF2YXRhci0xIHtcbiAgY29sb3I6ICMwMDAwMDA5OTtcbiAgZm9udC1zaXplOiAxNHB0O1xuICBsZXR0ZXItc3BhY2luZzogMC4yNXB0O1xuICBtYXJnaW4tYm90dG9tOiAxMnB4O1xufVxuXG4udGV4dC1zb2xpY2l0dWQge1xuICBjb2xvcjogIzAwMDAwMERFO1xuICBmb250LXNpemU6IDEycHQ7XG4gIGxldHRlci1zcGFjaW5nOiAwLjRwdDtcbiAgbWFyZ2luLXRvcDogMTJweDtcbn1cblxuLnRleHQtaDUge1xuICBmb250LXNpemU6IDE0cHQ7XG4gIGNvbG9yOiAjMDAwMDAwREU7XG4gIGxldHRlci1zcGFjaW5nOiAwLjFwdDtcbiAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgbWFyZ2luLXRvcDogMjRweDtcbiAgbWFyZ2luLWxlZnQ6IDE2cHg7XG4gIG1hcmdpbi1ib3R0b206IDE2cHg7XG59Il19 */");

/***/ }),

/***/ "./src/app/resultados/resultados.page.ts":
/*!***********************************************!*\
  !*** ./src/app/resultados/resultados.page.ts ***!
  \***********************************************/
/*! exports provided: ResultadosPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ResultadosPage", function() { return ResultadosPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _app_services_ServicioUtiles__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../app/services/ServicioUtiles */ "./src/app/services/ServicioUtiles.ts");
/* harmony import */ var _app_services_ServicioGeo__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../app/services/ServicioGeo */ "./src/app/services/ServicioGeo.ts");
/* harmony import */ var _app_services_ServicioParametrosApp__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../app/services/ServicioParametrosApp */ "./src/app/services/ServicioParametrosApp.ts");
/* harmony import */ var _app_services_ServicioLaboratorio__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../app/services/ServicioLaboratorio */ "./src/app/services/ServicioLaboratorio.ts");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! moment */ "./node_modules/moment/moment.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_9__);





//servicios





let ResultadosPage = class ResultadosPage {
    constructor(navCtrl, utiles, servicioGeo, parametros, loading, formBuilder, activatedRoute, router, lab) {
        this.navCtrl = navCtrl;
        this.utiles = utiles;
        this.servicioGeo = servicioGeo;
        this.parametros = parametros;
        this.loading = loading;
        this.formBuilder = formBuilder;
        this.activatedRoute = activatedRoute;
        this.router = router;
        this.lab = lab;
        this.tiene = false;
    }
    ngOnInit() {
        moment__WEBPACK_IMPORTED_MODULE_9__["locale"]('es');
        this.activatedRoute.queryParams.subscribe(params => {
            if (params && params.resultados) {
                this.resultados = JSON.parse(params.resultados);
                if (this.resultados && this.resultados.length > 0) {
                    this.tiene = true;
                }
                console.log(this.resultados);
            }
            if (params && params.nombreExamen) {
                this.nombreExamen = params.nombreExamen;
                console.log(this.nombreExamen);
            }
            if (params && params.usuario) {
                this.usuarioAps = JSON.parse(params.usuario);
                console.log(this.usuarioAps);
            }
        });
    }
    volver() {
        //this.navCtrl.navigateRoot('nuevo-login');
        const navigationExtras = {
            queryParams: {
                usuario: JSON.stringify(this.usuarioAps)
            }
        };
        this.navCtrl.navigateRoot(['ordenes'], navigationExtras);
    }
};
ResultadosPage.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"] },
    { type: _app_services_ServicioUtiles__WEBPACK_IMPORTED_MODULE_5__["ServicioUtiles"] },
    { type: _app_services_ServicioGeo__WEBPACK_IMPORTED_MODULE_6__["ServicioGeo"] },
    { type: _app_services_ServicioParametrosApp__WEBPACK_IMPORTED_MODULE_7__["ServicioParametrosApp"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["LoadingController"] },
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] },
    { type: _app_services_ServicioLaboratorio__WEBPACK_IMPORTED_MODULE_8__["ServicioLaboratorio"] }
];
ResultadosPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-resultados',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./resultados.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/resultados/resultados.page.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./resultados.page.scss */ "./src/app/resultados/resultados.page.scss")).default]
    })
], ResultadosPage);



/***/ })

}]);
//# sourceMappingURL=resultados-resultados-module-es2015.js.map