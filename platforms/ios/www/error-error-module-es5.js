function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["error-error-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/error/error.page.html":
  /*!*****************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/error/error.page.html ***!
    \*****************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppErrorErrorPageHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ion-header>\n  <ion-toolbar color=\"primary\" mode=\"md\">\n    <ion-title>Sin Conexión</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content class=\"back-app\">\n  <div class=\"div_error\">\n    \n    <p>No cuentas con conexión a internet, activa tus datos/wifi o revisa el modo avión de tu dispositivo.</p>\n    <ion-button color=\"primary\" (click)=\"acpetar()\">Aceptar</ion-button> \n\n  </div>\n</ion-content>\n";
    /***/
  },

  /***/
  "./src/app/error/error.module.ts":
  /*!***************************************!*\
    !*** ./src/app/error/error.module.ts ***!
    \***************************************/

  /*! exports provided: ErrorPageModule */

  /***/
  function srcAppErrorErrorModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ErrorPageModule", function () {
      return ErrorPageModule;
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


    var _error_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./error.page */
    "./src/app/error/error.page.ts");

    var ErrorPageModule = function ErrorPageModule() {
      _classCallCheck(this, ErrorPageModule);
    };

    ErrorPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterModule"].forChild([{
        path: '',
        component: _error_page__WEBPACK_IMPORTED_MODULE_6__["ErrorPage"]
      }])],
      declarations: [_error_page__WEBPACK_IMPORTED_MODULE_6__["ErrorPage"]]
    })], ErrorPageModule);
    /***/
  },

  /***/
  "./src/app/error/error.page.scss":
  /*!***************************************!*\
    !*** ./src/app/error/error.page.scss ***!
    \***************************************/

  /*! exports provided: default */

  /***/
  function srcAppErrorErrorPageScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".div_error {\n  background-color: #39B5E9;\n  height: 100%;\n  padding-top: 50%;\n  text-align: center;\n}\n.div_error img {\n  height: 15%;\n  margin-bottom: 5%;\n}\n.div_error p {\n  padding: 0 10%;\n  font-size: 1.8rem;\n  margin-bottom: 5%;\n}\n.div_error ion-button {\n  margin-top: 5%;\n  font-size: 1em;\n}\n.embarazada {\n  color: #c1005b;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy92aWN0b3Jjb3JvbmFkby9EZXNrdG9wL21pRmFtaWxpYV9wcmUvc3JjL2FwcC9lcnJvci9lcnJvci5wYWdlLnNjc3MiLCJzcmMvYXBwL2Vycm9yL2Vycm9yLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLHlCQUFBO0VBQ0EsWUFBQTtFQUNBLGdCQUFBO0VBQ0Esa0JBQUE7QUNDSjtBRENJO0VBQ0ksV0FBQTtFQUNBLGlCQUFBO0FDQ1I7QURDSTtFQUNJLGNBQUE7RUFDQSxpQkFBQTtFQUNBLGlCQUFBO0FDQ1I7QURDSTtFQUNJLGNBQUE7RUFDQSxjQUFBO0FDQ1I7QURFQTtFQUNJLGNBQUE7QUNDSiIsImZpbGUiOiJzcmMvYXBwL2Vycm9yL2Vycm9yLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5kaXZfZXJyb3J7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzM5QjVFOTtcbiAgICBoZWlnaHQ6IDEwMCU7XG4gICAgcGFkZGluZy10b3A6IDUwJTtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgXG4gICAgaW1ne1xuICAgICAgICBoZWlnaHQ6IDE1JTtcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogNSU7XG4gICAgfVxuICAgIHB7XG4gICAgICAgIHBhZGRpbmc6IDAgMTAlO1xuICAgICAgICBmb250LXNpemU6IDEuOHJlbTtcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogNSU7XG4gICAgfVxuICAgIGlvbi1idXR0b257XG4gICAgICAgIG1hcmdpbi10b3A6IDUlO1xuICAgICAgICBmb250LXNpemU6IDFlbTtcbiAgICB9XG59XG4uZW1iYXJhemFkYXtcbiAgICBjb2xvcjogI2MxMDA1Yjtcbn0iLCIuZGl2X2Vycm9yIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzM5QjVFOTtcbiAgaGVpZ2h0OiAxMDAlO1xuICBwYWRkaW5nLXRvcDogNTAlO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG4uZGl2X2Vycm9yIGltZyB7XG4gIGhlaWdodDogMTUlO1xuICBtYXJnaW4tYm90dG9tOiA1JTtcbn1cbi5kaXZfZXJyb3IgcCB7XG4gIHBhZGRpbmc6IDAgMTAlO1xuICBmb250LXNpemU6IDEuOHJlbTtcbiAgbWFyZ2luLWJvdHRvbTogNSU7XG59XG4uZGl2X2Vycm9yIGlvbi1idXR0b24ge1xuICBtYXJnaW4tdG9wOiA1JTtcbiAgZm9udC1zaXplOiAxZW07XG59XG5cbi5lbWJhcmF6YWRhIHtcbiAgY29sb3I6ICNjMTAwNWI7XG59Il19 */";
    /***/
  },

  /***/
  "./src/app/error/error.page.ts":
  /*!*************************************!*\
    !*** ./src/app/error/error.page.ts ***!
    \*************************************/

  /*! exports provided: ErrorPage */

  /***/
  function srcAppErrorErrorPageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ErrorPage", function () {
      return ErrorPage;
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


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");

    var ErrorPage = /*#__PURE__*/function () {
      function ErrorPage(navCtrl) {
        _classCallCheck(this, ErrorPage);

        this.navCtrl = navCtrl;
      }

      _createClass(ErrorPage, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "acpetar",
        value: function acpetar() {
          this.navCtrl.navigateRoot('nuevo-login');
        }
      }]);

      return ErrorPage;
    }();

    ErrorPage.ctorParameters = function () {
      return [{
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"]
      }];
    };

    ErrorPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-error',
      template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! raw-loader!./error.page.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/error/error.page.html"))["default"],
      styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! ./error.page.scss */
      "./src/app/error/error.page.scss"))["default"]]
    })], ErrorPage);
    /***/
  }
}]);
//# sourceMappingURL=error-error-module-es5.js.map