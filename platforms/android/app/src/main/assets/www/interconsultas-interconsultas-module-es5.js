function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["interconsultas-interconsultas-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/interconsultas/interconsultas.page.html":
  /*!***********************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/interconsultas/interconsultas.page.html ***!
    \***********************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppInterconsultasInterconsultasPageHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ion-header>\n  <ion-toolbar color=\"primary\" mode=\"md\">\n    <ion-buttons slot=\"start\">\n      <ion-back-button defaultHref=\"/home\" class=\"fcw\"></ion-back-button>\n    </ion-buttons>\n    <ion-title class=\"fcw\">Interconsultas</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <div style=\"padding-top: 162px; font-size: 30px; color:#BDBDBD; text-align: center;\"><p>Pronto estarémos habilitados  <br>\n    <ion-icon name=\"information-circle\" style=\"font-size: 60px;\"></ion-icon></p>\n  </div>\n</ion-content>\n";
    /***/
  },

  /***/
  "./src/app/interconsultas/interconsultas.module.ts":
  /*!*********************************************************!*\
    !*** ./src/app/interconsultas/interconsultas.module.ts ***!
    \*********************************************************/

  /*! exports provided: InterconsultasPageModule */

  /***/
  function srcAppInterconsultasInterconsultasModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "InterconsultasPageModule", function () {
      return InterconsultasPageModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
    /* harmony import */


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _components_components_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ../components/components.module */
    "./src/app/components/components.module.ts");
    /* harmony import */


    var _interconsultas_page__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ./interconsultas.page */
    "./src/app/interconsultas/interconsultas.page.ts");

    var InterconsultasPageModule = function InterconsultasPageModule() {
      _classCallCheck(this, InterconsultasPageModule);
    };

    InterconsultasPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _components_components_module__WEBPACK_IMPORTED_MODULE_6__["ComponentsModule"], _angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterModule"].forChild([{
        path: '',
        component: _interconsultas_page__WEBPACK_IMPORTED_MODULE_7__["InterconsultasPage"]
      }])],
      declarations: [_interconsultas_page__WEBPACK_IMPORTED_MODULE_7__["InterconsultasPage"]]
    })], InterconsultasPageModule);
    /***/
  },

  /***/
  "./src/app/interconsultas/interconsultas.page.scss":
  /*!*********************************************************!*\
    !*** ./src/app/interconsultas/interconsultas.page.scss ***!
    \*********************************************************/

  /*! exports provided: default */

  /***/
  function srcAppInterconsultasInterconsultasPageScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2ludGVyY29uc3VsdGFzL2ludGVyY29uc3VsdGFzLnBhZ2Uuc2NzcyJ9 */";
    /***/
  },

  /***/
  "./src/app/interconsultas/interconsultas.page.ts":
  /*!*******************************************************!*\
    !*** ./src/app/interconsultas/interconsultas.page.ts ***!
    \*******************************************************/

  /*! exports provided: InterconsultasPage */

  /***/
  function srcAppInterconsultasInterconsultasPageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "InterconsultasPage", function () {
      return InterconsultasPage;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

    var InterconsultasPage = /*#__PURE__*/function () {
      function InterconsultasPage() {
        _classCallCheck(this, InterconsultasPage);
      }

      _createClass(InterconsultasPage, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return InterconsultasPage;
    }();

    InterconsultasPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-interconsultas',
      template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! raw-loader!./interconsultas.page.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/interconsultas/interconsultas.page.html"))["default"],
      styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! ./interconsultas.page.scss */
      "./src/app/interconsultas/interconsultas.page.scss"))["default"]]
    })], InterconsultasPage);
    /***/
  }
}]);
//# sourceMappingURL=interconsultas-interconsultas-module-es5.js.map