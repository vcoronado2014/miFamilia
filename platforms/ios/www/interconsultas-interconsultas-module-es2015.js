(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["interconsultas-interconsultas-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/interconsultas/interconsultas.page.html":
/*!***********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/interconsultas/interconsultas.page.html ***!
  \***********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n  <ion-toolbar color=\"primary\" mode=\"md\">\n    <ion-buttons slot=\"start\">\n      <ion-back-button defaultHref=\"/home\" class=\"fcw\"></ion-back-button>\n    </ion-buttons>\n    <ion-title class=\"fcw\">Interconsultas</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n<!--   <ion-slide>\n    <div class=\"slide\">\n      <div class=\"row\">\n        <img src=\"../../assets/imgs_svg/interconsulta_desactivado.svg\" alt=\"asistente\" />\n      </div>\n      <div class=\"ion-padding\">\n        <div class=\"mt-16 ion-text-center font-title\" style=\"padding: 16px; font-size: 20px;\">Seguimiento de interconsultas</div>\n        <p class=\"mt-32 ion-text-center\">\n          Visualice el seguimiento de las <strong>solicitudes de interconsultas </strong> \n          entre su establecimiento de atención primaria y el nivel secundario (hospitales)\n        </p>\n        <div class=\"row mt-32\">\n          <button mat-raised-button color=\"primary\" class=\"boton-sig\" (click)=\"slides.slideNext()\">SIGUIENTE</button>\n        </div>\n      </div>\n    </div>\n  </ion-slide> -->\n  <div>\n    <div class=\"row\">\n      <img src=\"../../assets/imgs_svg/interconsulta_desactivado.svg\" alt=\"interconsulta\" />\n    </div>\n    <div class=\"ion-padding\">\n      <div class=\"mt-16 ion-text-center font-title\" style=\"padding: 16px; font-size: 20px;\">Seguimiento de interconsultas</div>\n      <p class=\"mt-32 ion-text-center\">\n        Visualice el seguimiento de las <strong>solicitudes de interconsultas </strong> \n        entre su establecimiento de atención primaria y el nivel secundario (hospitales)\n      </p>\n    </div>\n  </div>\n<!--   <div style=\"padding-top: 162px; font-size: 30px; color:#BDBDBD; text-align: center;\"><p>Pronto estarémos habilitados  <br>\n    <ion-icon name=\"information-circle\" style=\"font-size: 60px;\"></ion-icon></p>\n  </div> -->\n</ion-content>\n");

/***/ }),

/***/ "./src/app/interconsultas/interconsultas.module.ts":
/*!*********************************************************!*\
  !*** ./src/app/interconsultas/interconsultas.module.ts ***!
  \*********************************************************/
/*! exports provided: InterconsultasPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InterconsultasPageModule", function() { return InterconsultasPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _components_components_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../components/components.module */ "./src/app/components/components.module.ts");
/* harmony import */ var _interconsultas_page__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./interconsultas.page */ "./src/app/interconsultas/interconsultas.page.ts");








let InterconsultasPageModule = class InterconsultasPageModule {
};
InterconsultasPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _components_components_module__WEBPACK_IMPORTED_MODULE_6__["ComponentsModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterModule"].forChild([
                {
                    path: '',
                    component: _interconsultas_page__WEBPACK_IMPORTED_MODULE_7__["InterconsultasPage"]
                }
            ])
        ],
        declarations: [_interconsultas_page__WEBPACK_IMPORTED_MODULE_7__["InterconsultasPage"]]
    })
], InterconsultasPageModule);



/***/ }),

/***/ "./src/app/interconsultas/interconsultas.page.scss":
/*!*********************************************************!*\
  !*** ./src/app/interconsultas/interconsultas.page.scss ***!
  \*********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".font-title {\n  font-size: 1em;\n}\n\n.mt-24 {\n  margin-top: 24px;\n}\n\n.mt-16 {\n  margin-top: 16px;\n}\n\n.mt-40 {\n  margin-top: 40px;\n  font: normal normal normal 24px \"Roboto\";\n  letter-spacing: 0px;\n  color: #000000DE;\n}\n\n.mt-32 {\n  margin-top: 32px;\n}\n\n.mt-62 {\n  margin-top: 62px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy92aWN0b3Jjb3JvbmFkby9EZXNrdG9wL21pRmFtaWxpYV9wcmUvc3JjL2FwcC9pbnRlcmNvbnN1bHRhcy9pbnRlcmNvbnN1bHRhcy5wYWdlLnNjc3MiLCJzcmMvYXBwL2ludGVyY29uc3VsdGFzL2ludGVyY29uc3VsdGFzLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGNBQUE7QUNDSjs7QURDQTtFQUNJLGdCQUFBO0FDRUo7O0FEQUE7RUFDSSxnQkFBQTtBQ0dKOztBRERBO0VBQ0ksZ0JBQUE7RUFDQSx3Q0FBQTtFQUNBLG1CQUFBO0VBQ0EsZ0JBQUE7QUNJSjs7QURGQTtFQUNJLGdCQUFBO0FDS0o7O0FESEE7RUFDSSxnQkFBQTtBQ01KIiwiZmlsZSI6InNyYy9hcHAvaW50ZXJjb25zdWx0YXMvaW50ZXJjb25zdWx0YXMucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmZvbnQtdGl0bGV7XHJcbiAgICBmb250LXNpemU6IDFlbTtcclxufVxyXG4ubXQtMjR7XHJcbiAgICBtYXJnaW4tdG9wOiAyNHB4O1xyXG59XHJcbi5tdC0xNntcclxuICAgIG1hcmdpbi10b3A6IDE2cHg7XHJcbn1cclxuLm10LTQwe1xyXG4gICAgbWFyZ2luLXRvcDogNDBweDtcclxuICAgIGZvbnQ6IG5vcm1hbCBub3JtYWwgbm9ybWFsIDI0cHggJ1JvYm90byc7XHJcbiAgICBsZXR0ZXItc3BhY2luZzogMHB4O1xyXG4gICAgY29sb3I6ICMwMDAwMDBERTtcclxufVxyXG4ubXQtMzJ7XHJcbiAgICBtYXJnaW4tdG9wOiAzMnB4O1xyXG59XHJcbi5tdC02MntcclxuICAgIG1hcmdpbi10b3A6IDYycHg7XHJcbn0iLCIuZm9udC10aXRsZSB7XG4gIGZvbnQtc2l6ZTogMWVtO1xufVxuXG4ubXQtMjQge1xuICBtYXJnaW4tdG9wOiAyNHB4O1xufVxuXG4ubXQtMTYge1xuICBtYXJnaW4tdG9wOiAxNnB4O1xufVxuXG4ubXQtNDAge1xuICBtYXJnaW4tdG9wOiA0MHB4O1xuICBmb250OiBub3JtYWwgbm9ybWFsIG5vcm1hbCAyNHB4IFwiUm9ib3RvXCI7XG4gIGxldHRlci1zcGFjaW5nOiAwcHg7XG4gIGNvbG9yOiAjMDAwMDAwREU7XG59XG5cbi5tdC0zMiB7XG4gIG1hcmdpbi10b3A6IDMycHg7XG59XG5cbi5tdC02MiB7XG4gIG1hcmdpbi10b3A6IDYycHg7XG59Il19 */");

/***/ }),

/***/ "./src/app/interconsultas/interconsultas.page.ts":
/*!*******************************************************!*\
  !*** ./src/app/interconsultas/interconsultas.page.ts ***!
  \*******************************************************/
/*! exports provided: InterconsultasPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InterconsultasPage", function() { return InterconsultasPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


let InterconsultasPage = class InterconsultasPage {
    constructor() { }
    ngOnInit() {
    }
};
InterconsultasPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-interconsultas',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./interconsultas.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/interconsultas/interconsultas.page.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./interconsultas.page.scss */ "./src/app/interconsultas/interconsultas.page.scss")).default]
    })
], InterconsultasPage);



/***/ })

}]);
//# sourceMappingURL=interconsultas-interconsultas-module-es2015.js.map