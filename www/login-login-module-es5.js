function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["login-login-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/login/login.page.html":
  /*!*****************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/login/login.page.html ***!
    \*****************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppLoginLoginPageHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<!-- <ion-header>\r\n  <ion-toolbar>\r\n    <ion-title>login</ion-title>\r\n  </ion-toolbar>\r\n</ion-header> -->\r\n\r\n<ion-content id=\"login\" [fullscreen]=\"true\">\r\n  <ion-grid class=\"h-100\">\r\n    <ion-row  class=\"h-100 justify-content-center align-items-center\">\r\n      <ion-col size-sm=\"6\" size-md=\"4\">\r\n        <div class=\"caja_maestra\">\r\n          <img class=\"profile-img\" src=\"./assets/img/logo_oficial.png\" alt=\"icon\">\r\n          <div class=\"loginBox\">\r\n            <!-- <ion-item lines=\"none\" *ngIf=\"recordarme\"> -->\r\n              <p style=\"text-align: center;\" *ngIf=\"recordarme\" class=\"text-wrap\">{{textoBienvenida}}</p>\r\n            <!-- </ion-item> -->\r\n            <ion-input class=\"inputBox\" type=\"text\" [(ngModel)]=\"usuario\" required placeholder=\"RUN 123456789\" *ngIf=\"recordarme == false\"></ion-input>\r\n            <ion-input class=\"inputBox\" type=\"password\" [(ngModel)]=\"password\" required placeholder=\"Contraseña\" ></ion-input>\r\n            <ion-item lines=\"none\">\r\n              <ion-label>Recordar mi Rut</ion-label>\r\n              <ion-toggle [disabled]=\"!usuario\" color=\"primary\" slot=\"end\" [(ngModel)]=\"recordarme\" (ionChange)=\"onChangeRecordarme($event)\" mode=\"ios\"></ion-toggle>\r\n            </ion-item>\r\n          </div>\r\n            <!-- <button ion-button round (click)=\"Signup()\">Ingresar</button> -->\r\n\r\n            <ion-button [disabled]=\"!usuario || !password\" color=\"primary\" type=\"ios\" shape=\"round\" expand=\"full\" (click)=\"Signup()\">Ingresar</ion-button>              \r\n        </div>\r\n      </ion-col>\r\n    </ion-row>\r\n  </ion-grid>  \r\n</ion-content>\r\n";
    /***/
  },

  /***/
  "./src/app/login/login.module.ts":
  /*!***************************************!*\
    !*** ./src/app/login/login.module.ts ***!
    \***************************************/

  /*! exports provided: LoginPageModule */

  /***/
  function srcAppLoginLoginModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "LoginPageModule", function () {
      return LoginPageModule;
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


    var _login_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./login.page */
    "./src/app/login/login.page.ts");

    var LoginPageModule = function LoginPageModule() {
      _classCallCheck(this, LoginPageModule);
    };

    LoginPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterModule"].forChild([{
        path: '',
        component: _login_page__WEBPACK_IMPORTED_MODULE_6__["LoginPage"]
      }])],
      declarations: [_login_page__WEBPACK_IMPORTED_MODULE_6__["LoginPage"]]
    })], LoginPageModule);
    /***/
  },

  /***/
  "./src/app/login/login.page.scss":
  /*!***************************************!*\
    !*** ./src/app/login/login.page.scss ***!
    \***************************************/

  /*! exports provided: default */

  /***/
  function srcAppLoginLoginPageScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "/*Login*/\n#login {\n  background: #00A99D;\n  height: 100vh !important;\n  width: 100% !important;\n}\n#login div.input-cover {\n  position: relative !important;\n}\n#login ion-grid {\n  background: #00A99D;\n}\n#login .container {\n  width: 100%;\n  padding-right: 15px;\n  padding-left: 15px;\n  margin-right: auto;\n  margin-left: auto;\n}\n#login .h-100 {\n  height: 100vh !important;\n}\n#login .caja_maestra {\n  padding-top: 20%;\n}\n#login .caja_maestra .profile-img {\n  width: 100px;\n  height: 100px;\n  margin: 0 auto 10px;\n  display: block;\n  border-radius: 52%;\n  border: 4px solid #fff;\n}\n#login .loginBox {\n  background: rgba(0, 188, 212, 0.4);\n  color: #fff;\n  font-size: 1.6rem;\n  margin: 60px 20px 60px 20px;\n  padding: 30px;\n  border-radius: 10px;\n  border-radius: 10px;\n}\n#login .inputBox {\n  display: block;\n  width: auto;\n  margin-bottom: 15px;\n  padding: 0;\n  outline: none;\n  border-radius: 4px;\n  border: none;\n  background: rgba(225, 225, 225, 0.1);\n  color: #fff;\n  transition: all 0.3s ease-in-out;\n  -moz-transition: all 0.3s ease-in-out;\n  -webkit-transition: all 0.3s ease-in-out;\n}\n#login ::-moz-placeholder {\n  font-size: 15px;\n  color: #fff;\n}\n#login ::-ms-input-placeholder {\n  font-size: 15px;\n  color: #fff;\n}\n#login ::placeholder {\n  font-size: 15px;\n  color: #fff;\n}\nion-item {\n  --background: transparent !important;\n  --color: withe;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbG9naW4vRjpcXGFwcF9taWZhbWlsaWFfZ2l0XFxtaUZhbWlsaWFfcHJlL3NyY1xcYXBwXFxsb2dpblxcbG9naW4ucGFnZS5zY3NzIiwic3JjL2FwcC9sb2dpbi9sb2dpbi5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUMsUUFBQTtBQUNBO0VBQ0csbUJBQUE7RUFDQSx3QkFBQTtFQUNBLHNCQUFBO0FDQ0o7QURBSTtFQUNFLDZCQUFBO0FDRU47QURBSTtFQUNJLG1CQUFBO0FDRVI7QURBSTtFQUNFLFdBQUE7RUFDQSxtQkFBQTtFQUNBLGtCQUFBO0VBQ0Esa0JBQUE7RUFDQSxpQkFBQTtBQ0VOO0FEQUk7RUFDRSx3QkFBQTtBQ0VOO0FEQUk7RUFDSSxnQkFBQTtBQ0VSO0FERE07RUFDRSxZQUFBO0VBQ0EsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsY0FBQTtFQUdBLGtCQUFBO0VBQ0Esc0JBQUE7QUNHUjtBRENJO0VBQ0Usa0NBQUE7RUFDQSxXQUFBO0VBQ0EsaUJBQUE7RUFDQSwyQkFBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtFQUNBLG1CQUFBO0FDQ047QURDSTtFQUNFLGNBQUE7RUFDQSxXQUFBO0VBQ0EsbUJBQUE7RUFDQSxVQUFBO0VBQ0EsYUFBQTtFQUNBLGtCQUFBO0VBQ0EsWUFBQTtFQUNBLG9DQUFBO0VBQ0EsV0FBQTtFQUNBLGdDQUFBO0VBQ0EscUNBQUE7RUFDQSx3Q0FBQTtBQ0NOO0FEQ0k7RUFDRSxlQUFBO0VBQ0EsV0FBQTtBQ0NOO0FESEk7RUFDRSxlQUFBO0VBQ0EsV0FBQTtBQ0NOO0FESEk7RUFDRSxlQUFBO0VBQ0EsV0FBQTtBQ0NOO0FER0U7RUFDRSxvQ0FBQTtFQUNBLGNBQUE7QUNBSiIsImZpbGUiOiJzcmMvYXBwL2xvZ2luL2xvZ2luLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIiAvKkxvZ2luKi9cclxuICNsb2dpbntcclxuICAgIGJhY2tncm91bmQ6ICMwMEE5OUQ7XHJcbiAgICBoZWlnaHQ6IDEwMHZoICFpbXBvcnRhbnQ7XHJcbiAgICB3aWR0aDogMTAwJSAhaW1wb3J0YW50O1xyXG4gICAgZGl2LmlucHV0LWNvdmVye1xyXG4gICAgICBwb3NpdGlvbjogcmVsYXRpdmUgIWltcG9ydGFudDtcclxuICAgIH1cclxuICAgIGlvbi1ncmlke1xyXG4gICAgICAgIGJhY2tncm91bmQ6ICMwMEE5OUQ7XHJcbiAgICB9XHJcbiAgICAuY29udGFpbmVyIHtcclxuICAgICAgd2lkdGg6IDEwMCU7IFxyXG4gICAgICBwYWRkaW5nLXJpZ2h0OiAxNXB4O1xyXG4gICAgICBwYWRkaW5nLWxlZnQ6IDE1cHg7XHJcbiAgICAgIG1hcmdpbi1yaWdodDogYXV0bztcclxuICAgICAgbWFyZ2luLWxlZnQ6IGF1dG87XHJcbiAgICB9XHJcbiAgICAuaC0xMDAge1xyXG4gICAgICBoZWlnaHQ6IDEwMHZoICFpbXBvcnRhbnQ7XHJcbiAgICB9XHJcbiAgICAuY2FqYV9tYWVzdHJheyAgIFxyXG4gICAgICAgIHBhZGRpbmctdG9wOiAyMCU7XHJcbiAgICAgIC5wcm9maWxlLWltZ3tcclxuICAgICAgICB3aWR0aDogMTAwcHg7XHJcbiAgICAgICAgaGVpZ2h0OiAxMDBweDtcclxuICAgICAgICBtYXJnaW46IDAgYXV0byAxMHB4O1xyXG4gICAgICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgICAgIC1tb3otYm9yZGVyLXJhZGl1czogNTIlO1xyXG4gICAgICAgIC13ZWJraXQtYm9yZGVyLXJhZGl1czogNTIlO1xyXG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDUyJTtcclxuICAgICAgICBib3JkZXI6IDRweCBzb2xpZCAjZmZmO1xyXG4gICAgICB9XHJcblxyXG4gICAgfVxyXG4gICAgLmxvZ2luQm94e1xyXG4gICAgICBiYWNrZ3JvdW5kOiByZ2JhKDAsIDE4OCwgMjEyLCAwLjQpO1xyXG4gICAgICBjb2xvcjogI2ZmZjtcclxuICAgICAgZm9udC1zaXplOiAxLjZyZW07XHJcbiAgICAgIG1hcmdpbjogNjBweCAyMHB4IDYwcHggMjBweDtcclxuICAgICAgcGFkZGluZzogMzBweDtcclxuICAgICAgYm9yZGVyLXJhZGl1czogMTBweDtcclxuICAgICAgYm9yZGVyLXJhZGl1czogMTBweDtcclxuICAgIH1cclxuICAgIC5pbnB1dEJveHtcclxuICAgICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICAgIHdpZHRoOiBhdXRvO1xyXG4gICAgICBtYXJnaW4tYm90dG9tOiAxNXB4O1xyXG4gICAgICBwYWRkaW5nOiAwO1xyXG4gICAgICBvdXRsaW5lOiBub25lO1xyXG4gICAgICBib3JkZXItcmFkaXVzOiA0cHg7XHJcbiAgICAgIGJvcmRlcjogbm9uZTtcclxuICAgICAgYmFja2dyb3VuZDogcmdiYSgyMjUsIDIyNSwgMjI1LCAwLjEpO1xyXG4gICAgICBjb2xvcjogI2ZmZjtcclxuICAgICAgdHJhbnNpdGlvbjogYWxsIC4zcyBlYXNlLWluLW91dDtcclxuICAgICAgLW1vei10cmFuc2l0aW9uOiBhbGwgLjNzIGVhc2UtaW4tb3V0O1xyXG4gICAgICAtd2Via2l0LXRyYW5zaXRpb246IGFsbCAuM3MgZWFzZS1pbi1vdXQ7XHJcbiAgICB9XHJcbiAgICA6OnBsYWNlaG9sZGVye1xyXG4gICAgICBmb250LXNpemU6MTVweDtcclxuICAgICAgY29sb3I6I2ZmZjtcclxuICAgIH1cclxuICBcclxuICB9XHJcbiAgaW9uLWl0ZW0ge1xyXG4gICAgLS1iYWNrZ3JvdW5kOiB0cmFuc3BhcmVudCAhaW1wb3J0YW50O1xyXG4gICAgLS1jb2xvcjogd2l0aGU7XHJcbiAgfSIsIi8qTG9naW4qL1xuI2xvZ2luIHtcbiAgYmFja2dyb3VuZDogIzAwQTk5RDtcbiAgaGVpZ2h0OiAxMDB2aCAhaW1wb3J0YW50O1xuICB3aWR0aDogMTAwJSAhaW1wb3J0YW50O1xufVxuI2xvZ2luIGRpdi5pbnB1dC1jb3ZlciB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZSAhaW1wb3J0YW50O1xufVxuI2xvZ2luIGlvbi1ncmlkIHtcbiAgYmFja2dyb3VuZDogIzAwQTk5RDtcbn1cbiNsb2dpbiAuY29udGFpbmVyIHtcbiAgd2lkdGg6IDEwMCU7XG4gIHBhZGRpbmctcmlnaHQ6IDE1cHg7XG4gIHBhZGRpbmctbGVmdDogMTVweDtcbiAgbWFyZ2luLXJpZ2h0OiBhdXRvO1xuICBtYXJnaW4tbGVmdDogYXV0bztcbn1cbiNsb2dpbiAuaC0xMDAge1xuICBoZWlnaHQ6IDEwMHZoICFpbXBvcnRhbnQ7XG59XG4jbG9naW4gLmNhamFfbWFlc3RyYSB7XG4gIHBhZGRpbmctdG9wOiAyMCU7XG59XG4jbG9naW4gLmNhamFfbWFlc3RyYSAucHJvZmlsZS1pbWcge1xuICB3aWR0aDogMTAwcHg7XG4gIGhlaWdodDogMTAwcHg7XG4gIG1hcmdpbjogMCBhdXRvIDEwcHg7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICAtbW96LWJvcmRlci1yYWRpdXM6IDUyJTtcbiAgLXdlYmtpdC1ib3JkZXItcmFkaXVzOiA1MiU7XG4gIGJvcmRlci1yYWRpdXM6IDUyJTtcbiAgYm9yZGVyOiA0cHggc29saWQgI2ZmZjtcbn1cbiNsb2dpbiAubG9naW5Cb3gge1xuICBiYWNrZ3JvdW5kOiByZ2JhKDAsIDE4OCwgMjEyLCAwLjQpO1xuICBjb2xvcjogI2ZmZjtcbiAgZm9udC1zaXplOiAxLjZyZW07XG4gIG1hcmdpbjogNjBweCAyMHB4IDYwcHggMjBweDtcbiAgcGFkZGluZzogMzBweDtcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcbn1cbiNsb2dpbiAuaW5wdXRCb3gge1xuICBkaXNwbGF5OiBibG9jaztcbiAgd2lkdGg6IGF1dG87XG4gIG1hcmdpbi1ib3R0b206IDE1cHg7XG4gIHBhZGRpbmc6IDA7XG4gIG91dGxpbmU6IG5vbmU7XG4gIGJvcmRlci1yYWRpdXM6IDRweDtcbiAgYm9yZGVyOiBub25lO1xuICBiYWNrZ3JvdW5kOiByZ2JhKDIyNSwgMjI1LCAyMjUsIDAuMSk7XG4gIGNvbG9yOiAjZmZmO1xuICB0cmFuc2l0aW9uOiBhbGwgMC4zcyBlYXNlLWluLW91dDtcbiAgLW1vei10cmFuc2l0aW9uOiBhbGwgMC4zcyBlYXNlLWluLW91dDtcbiAgLXdlYmtpdC10cmFuc2l0aW9uOiBhbGwgMC4zcyBlYXNlLWluLW91dDtcbn1cbiNsb2dpbiA6OnBsYWNlaG9sZGVyIHtcbiAgZm9udC1zaXplOiAxNXB4O1xuICBjb2xvcjogI2ZmZjtcbn1cblxuaW9uLWl0ZW0ge1xuICAtLWJhY2tncm91bmQ6IHRyYW5zcGFyZW50ICFpbXBvcnRhbnQ7XG4gIC0tY29sb3I6IHdpdGhlO1xufSJdfQ== */";
    /***/
  },

  /***/
  "./src/app/login/login.page.ts":
  /*!*************************************!*\
    !*** ./src/app/login/login.page.ts ***!
    \*************************************/

  /*! exports provided: LoginPage */

  /***/
  function srcAppLoginLoginPageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "LoginPage", function () {
      return LoginPage;
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
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _ionic_native_geolocation_ngx__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @ionic-native/geolocation/ngx */
    "./node_modules/@ionic-native/geolocation/__ivy_ngcc__/ngx/index.js");
    /* harmony import */


    var _ionic_native_device_ngx__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @ionic-native/device/ngx */
    "./node_modules/@ionic-native/device/__ivy_ngcc__/ngx/index.js");
    /* harmony import */


    var _ionic_native_app_version_ngx__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @ionic-native/app-version/ngx */
    "./node_modules/@ionic-native/app-version/__ivy_ngcc__/ngx/index.js");
    /* harmony import */


    var _app_services_ServicioUtiles__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ../../app/services/ServicioUtiles */
    "./src/app/services/ServicioUtiles.ts");
    /* harmony import */


    var _app_services_ServicioGeo__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ../../app/services/ServicioGeo */
    "./src/app/services/ServicioGeo.ts");
    /* harmony import */


    var _app_services_ServicioAcceso__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! ../../app/services/ServicioAcceso */
    "./src/app/services/ServicioAcceso.ts");
    /* harmony import */


    var moment__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! moment */
    "./node_modules/moment/moment.js");
    /* harmony import */


    var moment__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_10__); //servicios


    var LoginPage = /*#__PURE__*/function () {
      function LoginPage(navCtrl, toast, modalCtrl, platform, route, router, geolocation, device, appVersion, loading, utiles, servicioGeo, acceso) {
        var _this = this;

        _classCallCheck(this, LoginPage);

        this.navCtrl = navCtrl;
        this.toast = toast;
        this.modalCtrl = modalCtrl;
        this.platform = platform;
        this.route = route;
        this.router = router;
        this.geolocation = geolocation;
        this.device = device;
        this.appVersion = appVersion;
        this.loading = loading;
        this.utiles = utiles;
        this.servicioGeo = servicioGeo;
        this.acceso = acceso;
        this.recordarme = false;
        this.esIOS = false;
        this.cargando = false;
        this.objetoEntrada = {
          VersionAppName: '',
          Plataforma: '',
          Token: '',
          VersionAppNumber: '',
          Fecha: new Date()
        }; //ready

        platform.ready().then(function () {
          //geolocation
          _this.geolocation.getCurrentPosition().then(function (resp) {
            sessionStorage.setItem("latitud", JSON.stringify(resp.coords.latitude));
            sessionStorage.setItem("longitud", JSON.stringify(resp.coords.longitude));
            var lat = sessionStorage.getItem('latitud');
            var lon = sessionStorage.getItem('longitud'); //obtener la info de registro y setear los campos que corresponden

            if (!_this.utiles.isAppOnDevice()) {
              //this.doGeocode(lat, lon);
              console.log('web');

              _this.doGeocode(lat, lon);
            } else {
              //this.doGeocodeNative(lat, lon);
              console.log('native');

              _this.doGeocodeNative(lat, lon);
            }
          })["catch"](function (error) {
            console.log('Error getting location', error);
          }); //para pruebas
          //notificacion.lanzarNotificacionPrueba();

          /*       this.locations = [];
                this.StartBackgroundTracking(); */

        });
      }
      /*   StartBackgroundTracking(){
          window.app.backgroudGeolocation.start();
        }
        StopBackgroundGeolocation(){
          window.app.backgroudGeolocation.stop();
        }
        GetLocations(){
          this.locations = (JSON.parse(localStorage.getItem("location")) == null) ?[] : JSON.parse(localStorage.getItem("location"));
        }
        ClearLocation(){
          localStorage.removeItem("location");
        } */


      _createClass(LoginPage, [{
        key: "onChangeRecordarme",
        value: function onChangeRecordarme(event) {
          console.log(this.usuario);

          if (event.detail) {
            this.recordarme = event.detail.checked;
            localStorage.setItem('RECORDARME', JSON.stringify(this.recordarme));

            if (this.recordarme == false) {
              this.usuario = '';
              this.password = ''; //localStorage.removeItem('MI_RUT');
            }
          } //console.log(this.esPublico);

        }
      }, {
        key: "ionViewWillEnter",
        value: function ionViewWillEnter() {
          console.log('wil enter');

          if (localStorage.getItem('RECORDARME')) {
            this.recordarme = JSON.parse(localStorage.getItem('RECORDARME'));

            if (this.recordarme && localStorage.getItem('MI_RUT') != undefined && localStorage.getItem('MI_NOMBRE')) {
              //texto bienvenida
              this.textoBienvenida = this.utiles.textoBienvenida(localStorage.getItem('MI_NOMBRE'));
              this.usuario = localStorage.getItem('MI_RUT');
            }
          }
        }
      }, {
        key: "ngOnInit",
        value: function ngOnInit() {//this.startTrackingLoop();
        }
      }, {
        key: "doGeocodeNative",
        value: function doGeocodeNative(lat, lon) {
          var _this2 = this;

          //antes para omitir tantas llamadas vamos a buscar la info
          //a local storage comuna region provincia pais
          this.comuna = localStorage.getItem('comuna');
          this.region = localStorage.getItem('region');
          this.provincia = localStorage.getItem('provincia');
          this.pais = localStorage.getItem('pais');

          if (this.comuna && this.pais && this.region && this.provincia) {
            console.log('Datos politicos existentes');
          } else {
            this.servicioGeo.getMapaNative(lat, lon).then(function (response) {
              //console.log(data);
              _this2.utiles.procesarRespuestaMapa(JSON.parse(response.data));
            });
          }
        }
      }, {
        key: "doGeocode",
        value: function doGeocode(lat, lon) {
          var _this3 = this;

          //antes para omitir tantas llamadas vamos a buscar la info
          //a local storage comuna region provincia pais
          this.comuna = localStorage.getItem('comuna');
          this.region = localStorage.getItem('region');
          this.provincia = localStorage.getItem('provincia');
          this.pais = localStorage.getItem('pais');

          if (this.comuna && this.pais && this.region && this.provincia) {
            console.log('Datos politicos existentes');
          } else {
            this.servicioGeo.getMapaWeb(lat, lon).subscribe(function (data) {
              //console.log(data);
              _this3.utiles.procesarRespuestaMapa(data);
            });
          }
        }
      }, {
        key: "Signup",
        value: function Signup() {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
            var _this4 = this;

            var f, loader;
            return regeneratorRuntime.wrap(function _callee2$(_context2) {
              while (1) {
                switch (_context2.prev = _context2.next) {
                  case 0:
                    f = {
                      UserName: this.usuario,
                      Password: this.password
                    };
                    this.cargando = true;
                    _context2.next = 4;
                    return this.loading.create({
                      message: 'Obteniendo...<br>Login',
                      duration: 10000
                    });

                  case 4:
                    loader = _context2.sent;
                    _context2.next = 7;
                    return loader.present().then(function () {
                      return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(_this4, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
                        var _this5 = this;

                        return regeneratorRuntime.wrap(function _callee$(_context) {
                          while (1) {
                            switch (_context.prev = _context.next) {
                              case 0:
                                if (!this.utiles.isAppOnDevice()) {
                                  //llamada web
                                  this.acceso.loginWebDirecto(f).subscribe(function (response) {
                                    _this5.procesarLogin(response, loader);
                                  });
                                } else {
                                  //llamada nativa
                                  this.acceso.loginWebNative(f).then(function (response) {
                                    _this5.procesarLogin(JSON.parse(response.data), loader);
                                  }, function (error) {
                                    _this5.utiles.presentToast('Ocurrió un error de autentificación', 'bottom', 4000);
                                  });
                                }

                              case 1:
                              case "end":
                                return _context.stop();
                            }
                          }
                        }, _callee, this);
                      }));
                    });

                  case 7:
                  case "end":
                    return _context2.stop();
                }
              }
            }, _callee2, this);
          }));
        }
      }, {
        key: "irAHome",
        value: function irAHome() {
          this.navCtrl.navigateRoot('home');
        }
      }, {
        key: "procesarLogin",
        value: function procesarLogin(response, loader) {
          var retorno = response;

          if (retorno.RespuestaBase) {
            if (retorno.RespuestaBase.CodigoMensaje == 0) {
              //esta todo ok
              var user;
              var userFamilia;

              if (retorno.UsuarioAps) {
                user = JSON.stringify(retorno.UsuarioAps); //variable de sessión muy importante para el resto de la app.

                sessionStorage.setItem("UsuarioAps", user);
                localStorage.setItem('MI_RUT', retorno.UsuarioAps.Rut);
                localStorage.setItem('MI_NOMBRE', retorno.UsuarioAps.Nombres + ' ' + retorno.UsuarioAps.ApellidoPaterno);
                localStorage.setItem('MI_COLOR', retorno.UsuarioAps.Color);
                localStorage.setItem('MI_IMAGEN', retorno.UsuarioAps.UrlImagen); //lo vamos a guardar en el local storage para realizar la llamada
                //en el background

                localStorage.setItem('UsuarioAps', user);
              }

              if (retorno.UsuariosFamilia) {
                //debemos quitar los repetidos según última revisión
                var hash = {};
                var familia = retorno.UsuariosFamilia.filter(function (o) {
                  return hash[o.Id] ? false : hash[o.Id] = true;
                });
                retorno.UsuariosFamilia = familia;
                userFamilia = JSON.stringify(retorno.UsuariosFamilia); //variable de sessión muy importante para el resto de la app.

                sessionStorage.setItem("UsuariosFamilia", userFamilia);
              }

              this.CodigoMensaje = retorno.RespuestaBase.CodigoMensaje;
              this.Mensaje = retorno.RespuestaBase.Mensaje;
              this.loggedIn = true;
              loader.dismiss();
              this.cargando = false;
              this.crearToken();
            } else {
              this.loggedIn = false;
              this.CodigoMensaje = retorno.RespuestaBase.CodigoMensaje;
              this.Mensaje = retorno.RespuestaBase.Mensaje;
              this.loggedIn = true;
              loader.dismiss();
              this.utiles.presentToast(this.Mensaje, 'middle', 4000);
            }
          } else {
            //error también
            this.loggedIn = false;
            this.CodigoMensaje = 1000;
            this.Mensaje = 'Error de llamada Http;';
            this.loggedIn = true;
            loader.dismiss();
            this.utiles.presentToast(this.Mensaje, 'middle', 4000);
          }
        }
      }, {
        key: "crearToken",
        value: function crearToken() {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee6() {
            var _this6 = this;

            var versionAppName, versionNumber, plataforma, loader;
            return regeneratorRuntime.wrap(function _callee6$(_context6) {
              while (1) {
                switch (_context6.prev = _context6.next) {
                  case 0:
                    _context6.next = 2;
                    return this.loading.create({
                      message: 'Creando...<br>Token inicial',
                      duration: 20000
                    });

                  case 2:
                    loader = _context6.sent;
                    _context6.next = 5;
                    return loader.present().then(function () {
                      return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(_this6, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee5() {
                        var _this7 = this;

                        return regeneratorRuntime.wrap(function _callee5$(_context5) {
                          while (1) {
                            switch (_context5.prev = _context5.next) {
                              case 0:
                                if (this.utiles.isAppOnDevice()) {
                                  _context5.next = 11;
                                  break;
                                }

                                //web
                                //guardar local storage
                                if (!localStorage.getItem('token_dispositivo')) {
                                  //crear token para web
                                  this.tokenDispositivo = (Math.random() * (1000000 - 1) + 1).toString() + ' web';
                                  localStorage.setItem('token_dispositivo', this.tokenDispositivo);
                                } else {
                                  this.tokenDispositivo = localStorage.getItem('token_dispositivo');
                                }

                                versionAppName = "Mi salud familiar";
                                versionNumber = "0.0";
                                plataforma = "Web"; //loader.dismiss();
                                //otras variables

                                localStorage.setItem('version_app_name', versionAppName);
                                localStorage.setItem('version_number', versionNumber);
                                localStorage.setItem('plataforma', plataforma);
                                this.servicioGeo.getRegistroApp(this.tokenDispositivo).subscribe(function (data) {
                                  return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(_this7, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee3() {
                                    return regeneratorRuntime.wrap(function _callee3$(_context3) {
                                      while (1) {
                                        switch (_context3.prev = _context3.next) {
                                          case 0:
                                            //console.log(data);
                                            this.procesarRegistroL(data, loader);

                                          case 1:
                                          case "end":
                                            return _context3.stop();
                                        }
                                      }
                                    }, _callee3, this);
                                  }));
                                }, function (error) {
                                  _this7.utiles.presentToast('No hay comunicación con el servidor', 'bottom', 5000);

                                  console.log(error);

                                  _this7.procesarRegistroL(null, loader);
                                });
                                _context5.next = 38;
                                break;

                              case 11:
                                if (!this.platform.is('ios')) {
                                  _context5.next = 21;
                                  break;
                                }

                                _context5.next = 14;
                                return this.appVersion.getAppName();

                              case 14:
                                versionAppName = _context5.sent;
                                _context5.next = 17;
                                return this.appVersion.getVersionNumber();

                              case 17:
                                versionNumber = _context5.sent;
                                plataforma = "iOS";
                                _context5.next = 32;
                                break;

                              case 21:
                                if (!this.platform.is('android')) {
                                  _context5.next = 31;
                                  break;
                                }

                                _context5.next = 24;
                                return this.appVersion.getAppName();

                              case 24:
                                versionAppName = _context5.sent;
                                _context5.next = 27;
                                return this.appVersion.getVersionNumber();

                              case 27:
                                versionNumber = _context5.sent;
                                plataforma = "Android";
                                _context5.next = 32;
                                break;

                              case 31:
                                if (this.platform.is('mobileweb')) {
                                  versionAppName = "Mi salud familiar";
                                  versionNumber = "0.0";
                                  plataforma = "Web";
                                } else {
                                  versionAppName = "Mi salud familiar";
                                  versionNumber = "0.0";
                                  plataforma = "No informado";
                                }

                              case 32:
                                //crear token para web
                                this.tokenDispositivo = this.device.uuid;
                                localStorage.setItem('token_dispositivo', this.tokenDispositivo); //otras variables

                                localStorage.setItem('version_app_name', versionAppName);
                                localStorage.setItem('version_number', versionNumber);
                                localStorage.setItem('plataforma', plataforma);
                                this.servicioGeo.getRegistroAppNative(this.tokenDispositivo).then(function (response) {
                                  return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(_this7, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee4() {
                                    return regeneratorRuntime.wrap(function _callee4$(_context4) {
                                      while (1) {
                                        switch (_context4.prev = _context4.next) {
                                          case 0:
                                            this.procesarRegistroL(JSON.parse(response.data), loader);

                                          case 1:
                                          case "end":
                                            return _context4.stop();
                                        }
                                      }
                                    }, _callee4, this);
                                  }));
                                }, function (error) {
                                  _this7.utiles.presentToast('No hay comunicación con el servidor', 'bottom', 5000);

                                  console.log(error);

                                  _this7.procesarRegistroL(null, loader);
                                });

                              case 38:
                              case "end":
                                return _context5.stop();
                            }
                          }
                        }, _callee5, this);
                      }));
                    });

                  case 5:
                  case "end":
                    return _context6.stop();
                }
              }
            }, _callee6, this);
          }));
        }
      }, {
        key: "procesarRegistroL",
        value: function procesarRegistroL(data, loading) {
          if (data && data.Id > 0) {
            if (data.Activo == 1 && data.Eliminado == 0) {
              //tiene registro
              var registro = JSON.stringify(data);
              localStorage.setItem('REGISTRO', registro);
              localStorage.setItem('TIENE_REGISTRO', 'true');
              loading.dismiss();
              this.cargando = false; //ya está registrado, lo enviamos a home

              this.irAHome(); //this.irAHome();
            } else {
              localStorage.setItem('TIENE_REGISTRO', 'false');
              loading.dismiss();
              this.cargando = false;
              this.utiles.presentToast('Su registro se encuentra inactivo, vuelva a registrarse', 'middle', 10000);
            }
          } else {
            //no tiene registro
            loading.dismiss();
            this.cargando = false; //procedemos a registrarlo
            //ojo el rut viene sin guion
            //hay que dejarlo con guión

            var usuarioAps = JSON.parse(sessionStorage.getItem('UsuarioAps'));

            if (usuarioAps && usuarioAps.Rut && usuarioAps.Nombres && usuarioAps.ApellidoPaterno) {
              var nuevoRut = this.utiles.insertarGuion(usuarioAps.Rut);
              usuarioAps.rut = nuevoRut;
              var fechaNac = moment__WEBPACK_IMPORTED_MODULE_10__();

              if (usuarioAps.FechaDeNacimiento) {
                fechaNac = moment__WEBPACK_IMPORTED_MODULE_10__(usuarioAps.FechaDeNacimiento);
              }

              var correo = '';

              if (usuarioAps.Email && usuarioAps.Email != '' && usuarioAps.Email != undefined) {
                correo = usuarioAps.Email;
              } else {
                correo = usuarioAps.Rut + '@apps.cl';
              } //creamos el objeto registro para guardar automaticamente


              var entidadRegistro = {
                Nombres: usuarioAps.Nombres,
                Apellidos: usuarioAps.ApellidoPaterno + ' ' + usuarioAps.ApellidoMaterno,
                CorreoElectronico: usuarioAps.Email,
                NombreUsuario: correo,
                Sexo: 0,
                DiaNacimiento: fechaNac.date(),
                MesNacimiento: fechaNac.month() + 1,
                AnioNacimiento: fechaNac.year(),
                Pais: sessionStorage.getItem('pais'),
                Provincia: sessionStorage.getItem('provincia'),
                Region: sessionStorage.getItem('region'),
                Comuna: sessionStorage.getItem('comuna'),
                Password: '',
                ModoRegistro: 0,
                Apodo: '',
                Avatar: '',
                VersionAppName: localStorage.getItem('version_app_name'),
                IdDispositivo: localStorage.getItem('token_dispositivo'),
                Plataforma: localStorage.getItem('plataforma'),
                VersionAppNumber: localStorage.getItem('version_number'),
                TelefonoContacto: '',
                Latitud: sessionStorage.getItem('latitud'),
                Longitud: sessionStorage.getItem('longitud'),
                Eliminado: '0',
                Activo: '1',
                //nuevo 03-06-2020
                Run: nuevoRut
              };
              this.registroAutomatico(entidadRegistro);
            }
          }
        }
      }, {
        key: "registroAutomatico",
        value: function registroAutomatico(entidadRegistro) {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee8() {
            var _this8 = this;

            var loader;
            return regeneratorRuntime.wrap(function _callee8$(_context8) {
              while (1) {
                switch (_context8.prev = _context8.next) {
                  case 0:
                    _context8.next = 2;
                    return this.loading.create({
                      message: 'Espere...<br><br>Realizando registro automático',
                      duration: 20000
                    });

                  case 2:
                    loader = _context8.sent;
                    _context8.next = 5;
                    return loader.present().then(function () {
                      return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(_this8, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee7() {
                        var _this9 = this;

                        return regeneratorRuntime.wrap(function _callee7$(_context7) {
                          while (1) {
                            switch (_context7.prev = _context7.next) {
                              case 0:
                                if (!this.utiles.isAppOnDevice()) {
                                  //llamada web
                                  this.servicioGeo.postRegistro(entidadRegistro).subscribe(function (data) {
                                    localStorage.setItem('REGISTRO', JSON.stringify(data));
                                    localStorage.setItem('TIENE_REGISTRO', 'true');
                                    loader.dismiss();

                                    _this9.irAHome();
                                  });
                                } else {
                                  //llamada nativa
                                  this.servicioGeo.postRegistroNative(entidadRegistro).then(function (response) {
                                    var data = JSON.parse(response.data);
                                    localStorage.setItem('REGISTRO', JSON.stringify(data));
                                    localStorage.setItem('TIENE_REGISTRO', 'true');
                                    loader.dismiss();

                                    _this9.irAHome();
                                  });
                                }

                              case 1:
                              case "end":
                                return _context7.stop();
                            }
                          }
                        }, _callee7, this);
                      }));
                    });

                  case 5:
                  case "end":
                    return _context8.stop();
                }
              }
            }, _callee8, this);
          }));
        }
      }]);

      return LoginPage;
    }();

    LoginPage.ctorParameters = function () {
      return [{
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ToastController"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ModalController"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["Platform"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]
      }, {
        type: _ionic_native_geolocation_ngx__WEBPACK_IMPORTED_MODULE_4__["Geolocation"]
      }, {
        type: _ionic_native_device_ngx__WEBPACK_IMPORTED_MODULE_5__["Device"]
      }, {
        type: _ionic_native_app_version_ngx__WEBPACK_IMPORTED_MODULE_6__["AppVersion"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["LoadingController"]
      }, {
        type: _app_services_ServicioUtiles__WEBPACK_IMPORTED_MODULE_7__["ServicioUtiles"]
      }, {
        type: _app_services_ServicioGeo__WEBPACK_IMPORTED_MODULE_8__["ServicioGeo"]
      }, {
        type: _app_services_ServicioAcceso__WEBPACK_IMPORTED_MODULE_9__["ServicioAcceso"]
      }];
    };

    LoginPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-login',
      template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! raw-loader!./login.page.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/login/login.page.html"))["default"],
      styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! ./login.page.scss */
      "./src/app/login/login.page.scss"))["default"]]
    })], LoginPage);
    /***/
  }
}]);
//# sourceMappingURL=login-login-module-es5.js.map