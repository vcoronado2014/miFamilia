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


    __webpack_exports__["default"] = "<ion-content>\n    <div class=\"div_error\" text-center>\n      <h1>Sin Conexión</h1>\n      <p>Te has quedado sin conexión a internet, revisa que tu dispositivo tenga la conexión de datos/wifi activa o el modo avión este ddesactivado.</p>\n      <ion-button style=\"padding-top: 10%;\" color=\"primary\" (click)=\"reconectar()\">Aceptar</ion-button>\n    </div>\n  </ion-content>";
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


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
    /* harmony import */


    var _error_page__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./error.page */
    "./src/app/error/error.page.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _angular_material_card__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! @angular/material/card */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/card.js");
    /* harmony import */


    var _angular_material_button__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! @angular/material/button */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/button.js");
    /* harmony import */


    var _components_components_module__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! ../components/components.module */
    "./src/app/components/components.module.ts");

    var ErrorPageModule = function ErrorPageModule() {
      _classCallCheck(this, ErrorPageModule);
    };

    ErrorPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonicModule"], _angular_material_card__WEBPACK_IMPORTED_MODULE_7__["MatCardModule"], _angular_material_button__WEBPACK_IMPORTED_MODULE_8__["MatButtonModule"], _components_components_module__WEBPACK_IMPORTED_MODULE_9__["ComponentsModule"], _angular_router__WEBPACK_IMPORTED_MODULE_6__["RouterModule"].forChild([{
        path: '',
        component: _error_page__WEBPACK_IMPORTED_MODULE_5__["ErrorPage"]
      }])],
      declarations: [_error_page__WEBPACK_IMPORTED_MODULE_5__["ErrorPage"]]
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


    __webpack_exports__["default"] = ".div_error {\n  background-color: #39B5E9;\n  height: 100%;\n  padding-top: 50%;\n  text-align: center;\n}\n.div_error img {\n  height: 15%;\n  margin-bottom: 5%;\n}\n.div_error p {\n  padding: 0 10%;\n  font-size: 1.8rem;\n  margin-bottom: 5%;\n}\n.div_error button {\n  margin-top: 5%;\n  font-size: 1em;\n}\n.embarazada {\n  color: #c1005b;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy92aWN0b3Jjb3JvbmFkby9EZXNrdG9wL21pRmFtaWxpYV9wcmUvc3JjL2FwcC9lcnJvci9lcnJvci5wYWdlLnNjc3MiLCJzcmMvYXBwL2Vycm9yL2Vycm9yLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLHlCQUFBO0VBQ0EsWUFBQTtFQUNBLGdCQUFBO0VBQ0Esa0JBQUE7QUNDSjtBRENJO0VBQ0ksV0FBQTtFQUNBLGlCQUFBO0FDQ1I7QURDSTtFQUNJLGNBQUE7RUFDQSxpQkFBQTtFQUNBLGlCQUFBO0FDQ1I7QURDSTtFQUNJLGNBQUE7RUFDQSxjQUFBO0FDQ1I7QURFQTtFQUNJLGNBQUE7QUNDSiIsImZpbGUiOiJzcmMvYXBwL2Vycm9yL2Vycm9yLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5kaXZfZXJyb3J7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzM5QjVFOTtcbiAgICBoZWlnaHQ6IDEwMCU7XG4gICAgcGFkZGluZy10b3A6IDUwJTtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgXG4gICAgaW1ne1xuICAgICAgICBoZWlnaHQ6IDE1JTtcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogNSU7XG4gICAgfVxuICAgIHB7XG4gICAgICAgIHBhZGRpbmc6IDAgMTAlO1xuICAgICAgICBmb250LXNpemU6IDEuOHJlbTtcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogNSU7XG4gICAgfVxuICAgIGJ1dHRvbntcbiAgICAgICAgbWFyZ2luLXRvcDogNSU7XG4gICAgICAgIGZvbnQtc2l6ZTogMWVtO1xuICAgIH1cbn1cbi5lbWJhcmF6YWRhe1xuICAgIGNvbG9yOiAjYzEwMDViO1xufSIsIi5kaXZfZXJyb3Ige1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMzlCNUU5O1xuICBoZWlnaHQ6IDEwMCU7XG4gIHBhZGRpbmctdG9wOiA1MCU7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cbi5kaXZfZXJyb3IgaW1nIHtcbiAgaGVpZ2h0OiAxNSU7XG4gIG1hcmdpbi1ib3R0b206IDUlO1xufVxuLmRpdl9lcnJvciBwIHtcbiAgcGFkZGluZzogMCAxMCU7XG4gIGZvbnQtc2l6ZTogMS44cmVtO1xuICBtYXJnaW4tYm90dG9tOiA1JTtcbn1cbi5kaXZfZXJyb3IgYnV0dG9uIHtcbiAgbWFyZ2luLXRvcDogNSU7XG4gIGZvbnQtc2l6ZTogMWVtO1xufVxuXG4uZW1iYXJhemFkYSB7XG4gIGNvbG9yOiAjYzEwMDViO1xufSJdfQ== */";
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
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js"); //router


    var ErrorPage = /*#__PURE__*/function () {
      function ErrorPage(ref, toast, geolocation, navCtrl, route, router) {
        _classCallCheck(this, ErrorPage);

        this.ref = ref;
        this.toast = toast;
        this.geolocation = geolocation;
        this.navCtrl = navCtrl;
        this.route = route;
        this.router = router;
        this.paginaOrigen = ''; //Funcion que detecta los cambios de las variables

        /*     setInterval(() => {
              this.ref.detectChanges();
            }, 100); */
      }

      _createClass(ErrorPage, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "reconectar",
        value: function reconectar() {
          this.navCtrl.navigateRoot('nuevo-login');
        }
      }]);

      return ErrorPage;
    }();

    ErrorPage.ctorParameters = function () {
      return [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ToastController"]
      }, {
        type: undefined
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]
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