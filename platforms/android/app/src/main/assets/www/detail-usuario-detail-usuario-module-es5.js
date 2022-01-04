function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["detail-usuario-detail-usuario-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/detail-usuario/detail-usuario.page.html":
  /*!***********************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/detail-usuario/detail-usuario.page.html ***!
    \***********************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppDetailUsuarioDetailUsuarioPageHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ion-header>\r\n  <!-- <ion-toolbar [style.--background]=\"miColor\" mode=\"md\"> -->\r\n  <ion-toolbar color=\"primary\" mode=\"md\">\r\n    <ion-buttons slot=\"start\">\r\n      <ion-back-button defaultHref=\"/antecedentes\" class=\"fcw\"></ion-back-button>\r\n    </ion-buttons>\r\n    <ion-title class=\"fcw\">Antecedentes</ion-title>\r\n  </ion-toolbar>\r\n</ion-header>\r\n<ion-content class=\"back-app\">\r\n  \r\n  <app-progress [mostrar]=\"estaCargando\" [titulo]=\"tituloProgress\"></app-progress>\r\n  \r\n<!--   <ion-item lines=\"none\" [hidden]=\"estaCargando\" style=\"padding-top: 15px;\">\r\n    <app-avatar [style]=\"false\" [urlImagen] = \"usuario.UrlImagen\" [nombreCompleto]=\"usuario.Nombres + ' ' + usuario.ApellidoPaterno + ' ' + usuario.ApellidoMaterno\" [parentezco]=\"usuario.Parentezco.Nombre\"></app-avatar>\r\n  </ion-item> -->\r\n\r\n<!--   <ion-grid [hidden]=\"estaCargando\">\r\n    \r\n      <ion-slides pager=\"true\" [options]=\"slideOpts\" #mySlider class=\"slides-back\" style=\"padding-bottom: 30px;\">\r\n        <ion-slide class=\"row ion-no-padding\" *ngIf=\"arrMedicionesParteUno.length > 0\" style=\"justify-content: left;\">\r\n            <ion-col size=\"4\" class=\"ion-no-padding\" *ngFor=\"let sl of arrMedicionesParteUno\">\r\n              <ion-card style=\"margin: 5px;\">\r\n                <ion-card-header style=\"background: #D1C4E9;\">\r\n                  <ion-card-subtitle style=\"color: #000000DE;font-size: 16pt;\">{{sl.Nombre}}</ion-card-subtitle>\r\n                </ion-card-header>\r\n                <ion-card-content style=\"display: block;padding-left: 5px;padding-right: 5px;\" class=\"ion-text-center\">\r\n                  <div style=\"margin-top: 11px;color: #000000DE;font-size: 20pt;\">{{sl.Valor.toString()}}&nbsp;\r\n                    <span *ngIf=\"sl.Medida == 'mg/dl'\" style=\"font-size: 12pt;\">{{sl.Medida}}</span>\r\n                    <span *ngIf=\"sl.Medida != 'mg/dl'\" style=\"font-size: 20pt;\">{{sl.Medida}}</span>\r\n                  </div>\r\n                  <div style=\"margin-top: 8px;font-size: 12pt;color: #0000008A;\">{{sl.Fecha}}</div>\r\n                </ion-card-content>\r\n              </ion-card>\r\n            </ion-col>\r\n\r\n        </ion-slide>\r\n        <ion-slide class=\"row ion-no-padding\" style=\"justify-content: left;\" *ngIf=\"arrMedicionesParteDos.length > 0\">\r\n          <ion-col size=\"4\" class=\"ion-no-padding\" *ngFor=\"let dl of arrMedicionesParteDos\">\r\n            <ion-card style=\"margin: 5px;\">\r\n              <ion-card-header style=\"background: #D1C4E9;\">\r\n                <ion-card-subtitle style=\"color: #000000DE;font-size: 16pt;\">{{dl.Nombre}}</ion-card-subtitle>\r\n              </ion-card-header>\r\n              <ion-card-content style=\"display: block;padding-left: 5px;padding-right: 5px;\" class=\"ion-text-center\">\r\n                <div style=\"margin-top: 11px;color: #000000DE;font-size: 20pt;\">{{dl.Valor.toString()}}&nbsp;\r\n                  <span *ngIf=\"dl.Medida == 'mg/dl'\" style=\"font-size: 12pt;\">{{dl.Medida}}</span>\r\n                  <span *ngIf=\"dl.Medida != 'mg/dl'\" style=\"font-size: 20pt;\">{{dl.Medida}}</span>\r\n                </div>\r\n                <div style=\"margin-top: 8px;font-size: 12pt;color: #0000008A;\">{{dl.Fecha}}</div>\r\n              </ion-card-content>\r\n            </ion-card>\r\n          </ion-col>\r\n\r\n      </ion-slide>\r\n      </ion-slides>\r\n    \r\n  </ion-grid> -->\r\n\r\n  \r\n<!--   <ion-list [hidden]=\"estaCargando\" style=\"padding-top: 0;\">\r\n    <ion-list-header *ngIf=\"alergias && alergias.length > 0\" style=\"background-color: #FAF9FA;\">\r\n      <div style=\"font-weight: 500; color: #000000DE; font-size: 14pt; margin-top: 0;margin-bottom: 24px;\">{{title}}</div>\r\n    </ion-list-header>\r\n    <ion-item *ngFor=\"let item of alergias\" class =\"lista-alergias\">\r\n      <ion-label class=\"ion-text-wrap\" style=\"color:#000000DE;font-size: 16pt;text-transform: capitalize;\">{{item.Descripcion.toLowerCase()}}</ion-label>\r\n    </ion-item>\r\n    <ion-list-header *ngIf=\"personales && personales.length > 0\" style=\"background-color: #FAF9FA;\">\r\n      <div style=\"font-weight: 500; color: #000000DE; font-size: 14pt; margin-top: 24px;margin-bottom: 24px;\">Diagnósticos relevantes</div>\r\n    </ion-list-header>\r\n    <ion-item *ngFor=\"let ante of personales\" class =\"lista-alergias\">\r\n      <ion-label class=\"ion-text-wrap\" style=\"color:#000000DE;font-size: 16pt;\">{{ante.Nombre}}</ion-label>\r\n    </ion-item>\r\n    <ion-list-header *ngIf=\"familiares && familiares.length > 0\" style=\"background-color: #FAF9FA;\">\r\n      <div style=\"font-weight: 500; color: #000000DE; font-size: 14pt; margin-top: 24px;margin-bottom: 24px;\">Diagnósticos familiares relevantes</div>\r\n    </ion-list-header>\r\n    <ion-item *ngFor=\"let fam of familiares\" class =\"lista-alergias\">\r\n      <ion-label class=\"ion-text-wrap\" style=\"color:#000000DE;font-size: 16pt;\">{{fam.Nombre}}</ion-label>\r\n    </ion-item>\r\n  </ion-list> -->\r\n  \r\n  <!-- implementacion con spinner independiente -->\r\n\r\n  <ion-item lines=\"none\" style=\"padding-top: 15px;\">\r\n    <app-avatar [style]=\"false\" [urlImagen] = \"usuario.UrlImagen\" [nombreCompleto]=\"usuario.Nombres + ' ' + usuario.ApellidoPaterno + ' ' + usuario.ApellidoMaterno\" [parentezco]=\"usuario.Parentezco.Nombre\"></app-avatar>\r\n  </ion-item>\r\n  <app-progress-minimo [mostrar]=\"estaCargandoDatosUsuario\" [titulo]=\"tituloProgressDatosUsuario\"></app-progress-minimo>\r\n  <ion-grid [hidden]=\"estaCargandoDatosUsuario\">\r\n  \r\n    <ion-slides pager=\"true\" [options]=\"slideOpts\" #mySlider class=\"slides-back\" style=\"padding-bottom: 30px;\">\r\n      <ion-slide class=\"row ion-no-padding\" *ngIf=\"arrMedicionesParteUno.length > 0\" style=\"justify-content: left;\">\r\n        <ion-col size=\"4\" class=\"ion-no-padding\" *ngFor=\"let sl of arrMedicionesParteUno\">\r\n          <ion-card style=\"margin: 5px;\">\r\n            <ion-card-header style=\"background: #D1C4E9;\">\r\n              <ion-card-subtitle style=\"color: #000000DE;font-size: 16pt;\">{{sl.Nombre}}</ion-card-subtitle>\r\n            </ion-card-header>\r\n            <ion-card-content style=\"display: block;padding-left: 5px;padding-right: 5px;\" class=\"ion-text-center\">\r\n              <div style=\"margin-top: 11px;color: #000000DE;font-size: 20pt;\">{{sl.Valor.toString()}}&nbsp;\r\n                <span *ngIf=\"sl.Medida == 'mg/dl'\" style=\"font-size: 12pt;\">{{sl.Medida}}</span>\r\n                <span *ngIf=\"sl.Medida != 'mg/dl'\" style=\"font-size: 20pt;\">{{sl.Medida}}</span>\r\n              </div>\r\n              <div style=\"margin-top: 8px;font-size: 12pt;color: #0000008A;\">{{sl.Fecha}}</div>\r\n            </ion-card-content>\r\n          </ion-card>\r\n        </ion-col>\r\n  \r\n      </ion-slide>\r\n      <ion-slide class=\"row ion-no-padding\" style=\"justify-content: left;\" *ngIf=\"arrMedicionesParteDos.length > 0\">\r\n        <ion-col size=\"4\" class=\"ion-no-padding\" *ngFor=\"let dl of arrMedicionesParteDos\">\r\n          <ion-card style=\"margin: 5px;\">\r\n            <ion-card-header style=\"background: #D1C4E9;\">\r\n              <ion-card-subtitle style=\"color: #000000DE;font-size: 16pt;\">{{dl.Nombre}}</ion-card-subtitle>\r\n            </ion-card-header>\r\n            <ion-card-content style=\"display: block;padding-left: 5px;padding-right: 5px;\" class=\"ion-text-center\">\r\n              <div style=\"margin-top: 11px;color: #000000DE;font-size: 20pt;\">{{dl.Valor.toString()}}&nbsp;\r\n                <span *ngIf=\"dl.Medida == 'mg/dl'\" style=\"font-size: 12pt;\">{{dl.Medida}}</span>\r\n                <span *ngIf=\"dl.Medida != 'mg/dl'\" style=\"font-size: 20pt;\">{{dl.Medida}}</span>\r\n              </div>\r\n              <div style=\"margin-top: 8px;font-size: 12pt;color: #0000008A;\">{{dl.Fecha}}</div>\r\n            </ion-card-content>\r\n          </ion-card>\r\n        </ion-col>\r\n  \r\n      </ion-slide>\r\n    </ion-slides>\r\n  \r\n  </ion-grid>\r\n  <div [hidden]=\"estaCargandoDatosUsuario\">\r\n    <div class=\"no-tiene-antecedentes\" *ngIf=\"tieneDatosUsuario == false\">No tiene mediciones registradas</div>\r\n  </div>\r\n\r\n  <app-progress-minimo [mostrar]=\"estaCargandoAlergias\" [titulo]=\"tituloProgressAlergias\"></app-progress-minimo>\r\n  <ion-list [hidden]=\"estaCargandoAlergias\" style=\"padding-top: 0;\">\r\n    <ion-list-header *ngIf=\"alergias && alergias.length > 0\" style=\"background-color: #FAF9FA;\">\r\n      <div style=\"font-weight: 500; color: #000000DE; font-size: 14pt; margin-top: 0;margin-bottom: 24px;\">{{title}}</div>\r\n    </ion-list-header>\r\n    <ion-item *ngFor=\"let item of alergias\" class =\"lista-alergias\">\r\n      <ion-label class=\"ion-text-wrap\" style=\"color:#000000DE;font-size: 16pt;text-transform: capitalize;\">{{item.Descripcion.toLowerCase()}}</ion-label>\r\n    </ion-item>\r\n    <div>\r\n      <div class=\"no-tiene-antecedentes\" *ngIf=\"tieneAlergias == false\">No tiene alergias registradas</div>\r\n    </div>\r\n  </ion-list>\r\n\r\n\r\n  <app-progress-minimo [mostrar]=\"estaCargandoMorbidos\" [titulo]=\"tituloProgressMorbidos\"></app-progress-minimo>\r\n  <ion-list [hidden]=\"estaCargandoMorbidos\" style=\"padding-top: 0;padding-bottom: 0;\">\r\n    <ion-list-header *ngIf=\"personales && personales.length >= 0\" style=\"background-color: #FAF9FA;\">\r\n      <div style=\"font-weight: 500; color: #000000DE; font-size: 14pt; margin-top: 24px;margin-bottom: 24px;\">Diagnósticos relevantes</div>\r\n    </ion-list-header>\r\n    <ion-item *ngFor=\"let ante of personales\" class =\"lista-alergias\">\r\n      <ion-label class=\"ion-text-wrap\" style=\"color:#000000DE;font-size: 16pt;\">{{ante.Nombre}}</ion-label>\r\n    </ion-item>\r\n    <div>\r\n      <div *ngIf=\"tieneMorbidosPersonales == false\" class=\"no-tiene-antecedentes\">No tiene diagnósticos relevantes <br> registrados</div>\r\n    </div>\r\n    <ion-list-header *ngIf=\"familiares && familiares.length >= 0\" style=\"background-color: #FAF9FA;\">\r\n      <div style=\"font-weight: 500; color: #000000DE; font-size: 14pt; margin-top: 24px;margin-bottom: 24px;\">Diagnósticos familiares relevantes</div>\r\n    </ion-list-header>\r\n    <ion-item *ngFor=\"let fam of familiares\" class =\"lista-alergias\">\r\n      <ion-label class=\"ion-text-wrap\" style=\"color:#000000DE;font-size: 16pt;\">{{fam.Nombre}}</ion-label>\r\n    </ion-item>\r\n    <div>\r\n      <div *ngIf=\"tieneMorbidosFamiliares == false\" class=\"no-tiene-antecedentes\">No tiene diagnósticos familiares <br> relevantes registrados</div>\r\n    </div>\r\n  </ion-list>\r\n  \r\n\r\n\r\n</ion-content>\r\n";
    /***/
  },

  /***/
  "./src/app/detail-usuario/detail-usuario.module.ts":
  /*!*********************************************************!*\
    !*** ./src/app/detail-usuario/detail-usuario.module.ts ***!
    \*********************************************************/

  /*! exports provided: DetailUsuarioPageModule */

  /***/
  function srcAppDetailUsuarioDetailUsuarioModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "DetailUsuarioPageModule", function () {
      return DetailUsuarioPageModule;
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


    var _detail_usuario_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./detail-usuario.page */
    "./src/app/detail-usuario/detail-usuario.page.ts");
    /* harmony import */


    var _components_components_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ../components/components.module */
    "./src/app/components/components.module.ts");

    var DetailUsuarioPageModule = function DetailUsuarioPageModule() {
      _classCallCheck(this, DetailUsuarioPageModule);
    };

    DetailUsuarioPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _components_components_module__WEBPACK_IMPORTED_MODULE_7__["ComponentsModule"], _angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterModule"].forChild([{
        path: '',
        component: _detail_usuario_page__WEBPACK_IMPORTED_MODULE_6__["DetailUsuarioPage"]
      }])],
      declarations: [_detail_usuario_page__WEBPACK_IMPORTED_MODULE_6__["DetailUsuarioPage"]]
    })], DetailUsuarioPageModule);
    /***/
  },

  /***/
  "./src/app/detail-usuario/detail-usuario.page.scss":
  /*!*********************************************************!*\
    !*** ./src/app/detail-usuario/detail-usuario.page.scss ***!
    \*********************************************************/

  /*! exports provided: default */

  /***/
  function srcAppDetailUsuarioDetailUsuarioPageScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".no-tiene-antecedentes {\n  height: 70px;\n  width: 100%;\n  padding-top: 15px;\n  font-size: 16pt;\n  letter-spacing: 0.5pt;\n  color: #0000008A;\n  text-align: center;\n  background-color: #FAF9FA;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZGV0YWlsLXVzdWFyaW8vQzpcXERpc2NvIEZcXGFwcF9taWZhbWlsaWFfZ2l0XFxtaUZhbWlsaWFfcHJlL3NyY1xcYXBwXFxkZXRhaWwtdXN1YXJpb1xcZGV0YWlsLXVzdWFyaW8ucGFnZS5zY3NzIiwic3JjL2FwcC9kZXRhaWwtdXN1YXJpby9kZXRhaWwtdXN1YXJpby5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxZQUFBO0VBQ0EsV0FBQTtFQUNBLGlCQUFBO0VBQ0EsZUFBQTtFQUNBLHFCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxrQkFBQTtFQUNBLHlCQUFBO0FDQ0oiLCJmaWxlIjoic3JjL2FwcC9kZXRhaWwtdXN1YXJpby9kZXRhaWwtdXN1YXJpby5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIubm8tdGllbmUtYW50ZWNlZGVudGVze1xyXG4gICAgaGVpZ2h0OiA3MHB4O1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBwYWRkaW5nLXRvcDogMTVweDtcclxuICAgIGZvbnQtc2l6ZTogMTZwdDtcclxuICAgIGxldHRlci1zcGFjaW5nOiAwLjVwdDtcclxuICAgIGNvbG9yOiAjMDAwMDAwOEE7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjRkFGOUZBO1xyXG59IiwiLm5vLXRpZW5lLWFudGVjZWRlbnRlcyB7XG4gIGhlaWdodDogNzBweDtcbiAgd2lkdGg6IDEwMCU7XG4gIHBhZGRpbmctdG9wOiAxNXB4O1xuICBmb250LXNpemU6IDE2cHQ7XG4gIGxldHRlci1zcGFjaW5nOiAwLjVwdDtcbiAgY29sb3I6ICMwMDAwMDA4QTtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjRkFGOUZBO1xufSJdfQ== */";
    /***/
  },

  /***/
  "./src/app/detail-usuario/detail-usuario.page.ts":
  /*!*******************************************************!*\
    !*** ./src/app/detail-usuario/detail-usuario.page.ts ***!
    \*******************************************************/

  /*! exports provided: DetailUsuarioPage */

  /***/
  function srcAppDetailUsuarioDetailUsuarioPageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "DetailUsuarioPage", function () {
      return DetailUsuarioPage;
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


    var _app_services_ServicioUtiles__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../../app/services/ServicioUtiles */
    "./src/app/services/ServicioUtiles.ts");
    /* harmony import */


    var _app_services_ServicioInfoUsuario__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ../../app/services/ServicioInfoUsuario */
    "./src/app/services/ServicioInfoUsuario.ts");
    /* harmony import */


    var _app_services_ServicioAcceso__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ../../app/services/ServicioAcceso */
    "./src/app/services/ServicioAcceso.ts");
    /* harmony import */


    var _app_services_ServicioParametrosApp__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ../../app/services/ServicioParametrosApp */
    "./src/app/services/ServicioParametrosApp.ts");
    /* harmony import */


    var moment__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! moment */
    "./node_modules/moment/moment.js");
    /* harmony import */


    var moment__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_8__); //parametros
    //SERVICIOS


    var DetailUsuarioPage = /*#__PURE__*/function () {
      function DetailUsuarioPage(navCtrl, toast, modalCtrl, platform, menu, activatedRoute, router, utiles, loading, info, acceso, parametrosApp) {
        _classCallCheck(this, DetailUsuarioPage);

        this.navCtrl = navCtrl;
        this.toast = toast;
        this.modalCtrl = modalCtrl;
        this.platform = platform;
        this.menu = menu;
        this.activatedRoute = activatedRoute;
        this.router = router;
        this.utiles = utiles;
        this.loading = loading;
        this.info = info;
        this.acceso = acceso;
        this.parametrosApp = parametrosApp; //nuevo slide

        this.slideOpts = {
          initialSlide: 0,
          speed: 500,
          pager: true
        };
        this.miColor = '#FF4081';
        this.indicadorValor = [];
        this.presiones = [];
        this.alergias = [];
        this.cargando = false; //para controlar componente progess

        this.estaCargando = false;
        this.familiares = [];
        this.personales = []; //card mediciones

        this.arrMediciones = [];
        this.tituloProgress = ''; //2 partes para los datos del usuario

        this.arrMedicionesParteUno = [];
        this.arrMedicionesParteDos = []; //pruebas de loading independientes

        this.estaCargandoDatosUsuario = false;
        this.tituloProgressDatosUsuario = '';
        this.estaCargandoAlergias = false;
        this.tituloProgressAlergias = '';
        this.estaCargandoMorbidos = false;
        this.tituloProgressMorbidos = ''; //para mostrar que no tiene

        this.tieneDatosUsuario = false;
        this.tieneAlergias = false;
        this.tieneMorbidosPersonales = false;
        this.tieneMorbidosFamiliares = false; //variables para insertar en local storage

        this.arrMedicionesL = [];
        this.arrAlergias = [];
        this.arrMorbidos = [];
      }

      _createClass(DetailUsuarioPage, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this = this;

          //this.miColor = this.utiles.entregaMiColor();
          //capturamos los parametros
          this.slideOpts = {
            initialSlide: 0,
            speed: 500,
            pager: true
          };
          this.activatedRoute.queryParams.subscribe(function (params) {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(_this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
              return regeneratorRuntime.wrap(function _callee$(_context) {
                while (1) {
                  switch (_context.prev = _context.next) {
                    case 0:
                      if (!(params && params.usuario)) {
                        _context.next = 11;
                        break;
                      }

                      //store the temp in data
                      this.usuario = JSON.parse(params.usuario);

                      if (this.usuario.Parentezco && this.usuario.Parentezco.Id > 0) {
                        if (this.usuario.Parentezco.Nombre.toUpperCase() == 'LA MISMA PERSONA') {
                          this.usuario.Parentezco.Nombre = 'Yo';
                        }
                      } else {
                        this.usuario.Parentezco.Nombre = 'No informado';
                      }

                      this.userImagen = this.usuario.UrlImagen;
                      this.miColor = this.utiles.entregaColor(this.usuario); //obtiene los datos del usuario incluyendo la presión
                      //este desencadena las 3 llamadas
                      //await this.construirArregloValores(this.usuario.Id);

                      _context.next = 7;
                      return this.construirArregloValoresIndividual(this.usuario.Id);

                    case 7:
                      _context.next = 9;
                      return this.construirArregloAlergiasIndividual(this.usuario.Id);

                    case 9:
                      _context.next = 11;
                      return this.construirArregloMorbidosIndividual(this.usuario.Id);

                    case 11:
                    case "end":
                      return _context.stop();
                  }
                }
              }, _callee, this);
            }));
          });
        }
      }, {
        key: "procesarAntecedentes",
        value: function procesarAntecedentes(data, loader) {
          var _this2 = this;

          this.antecedentes = data;
          console.log(this.antecedentes);
          this.familiares = [];
          this.personales = [];

          if (this.antecedentes.Antecedentes) {
            if (this.antecedentes.Antecedentes.Familiares) {
              if (this.antecedentes.Antecedentes.Familiares.Antecedente && this.antecedentes.Antecedentes.Familiares.Antecedente.length > 0) {
                var arr = this.antecedentes.Antecedentes.Familiares.Antecedente;
                arr.forEach(function (ante) {
                  var entidad = {
                    Nombre: ante
                  };

                  _this2.familiares.push(entidad);
                });
              }
            }

            if (this.antecedentes.Antecedentes.Personales) {
              if (this.antecedentes.Antecedentes.Personales.Antecedente && this.antecedentes.Antecedentes.Personales.Antecedente.length > 0) {
                var _arr = this.antecedentes.Antecedentes.Personales.Antecedente;

                _arr.forEach(function (perso) {
                  var entidad = {
                    Nombre: perso
                  };

                  _this2.personales.push(entidad);
                });
              }
            }
          }

          this.estaCargando = false;
          this.tituloProgress = '';
          loader.dismiss();
        }
      }, {
        key: "procesarAlergias",
        value: function procesarAlergias(data, loader) {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
            return regeneratorRuntime.wrap(function _callee2$(_context2) {
              while (1) {
                switch (_context2.prev = _context2.next) {
                  case 0:
                    this.alergias = data.AlergiasUsp;

                    if (this.alergias) {
                      if (this.alergias.length == 1) {
                        this.title = "Alergia";
                      } else {
                        this.title = "Alergias";
                      }
                    }

                    this.estaCargando = false;
                    this.tituloProgress = '';
                    loader.dismiss(); //esta bien, seguimos con los morbidos

                    _context2.next = 7;
                    return this.construirArregloMorbidos(this.usuario.Id);

                  case 7:
                  case "end":
                    return _context2.stop();
                }
              }
            }, _callee2, this);
          }));
        }
      }, {
        key: "procesarAlergiasSinLoader",
        value: function procesarAlergiasSinLoader(data) {
          this.alergias = data.AlergiasUsp;

          if (this.alergias.length == 1) {
            this.title = "Alergia";
          } else {
            this.title = "Alergias";
          }
        }
      }, {
        key: "procesarPresionApi",
        value: function procesarPresionApi(data, loader) {
          var _this3 = this;

          this.presiones = data.PresionesUsp;

          if (this.presiones && this.presiones.length > 0) {
            var arrPresiones = this.presiones.sort(function (a, b) {
              return _this3.getTime(moment__WEBPACK_IMPORTED_MODULE_8__(b.FechaPresion).toDate()) - _this3.getTime(moment__WEBPACK_IMPORTED_MODULE_8__(a.FechaPresion).toDate());
            });

            if (arrPresiones && arrPresiones.length > 0) {
              console.log('tiene presion');
              console.log(arrPresiones); //el primer elemento es el más nuevo

              this.valorPresion = arrPresiones[0].ValorPresion;
              this.fechaPresion = moment__WEBPACK_IMPORTED_MODULE_8__(arrPresiones[0].FechaPresion).format('DD-MM-YYYY HH:mm');
            } else {
              console.log('no tiene presion');
              this.valorPresion = 'N/A';
              this.fechaPresion = 'N/A';
            }
          } else {
            //llenar con valores predeterminados
            this.valorPresion = 'N/A';
            this.fechaPresion = 'N/A';
          }

          loader.dismiss();
          this.estaCargando = false;
        }
      }, {
        key: "procesarPresion",
        value: function procesarPresion(data, loader) {
          this.presiones = data.PresionesUsp;

          if (this.presiones && this.presiones.length > 0) {
            //todo ok
            for (var s in this.presiones) {
              //altura
              this.valorPresion = this.presiones[s].ValorPresion;

              if (this.presiones[s].FechaPresion == null) {
                this.fechaPresion = 'n/a';
              } else {
                this.fechaPresion = this.presiones[s].FechaPresion;
              }
            }
          } else {
            //llenar con valores predeterminados
            this.valorPresion = 'N/A';
            this.fechaPresion = 'N/A';
          }

          loader.dismiss();
          this.estaCargando = false;
        }
      }, {
        key: "procesarPresionSinLoader",
        value: function procesarPresionSinLoader(data) {
          this.presiones = data.PresionesUsp;

          if (this.presiones && this.presiones.length > 0) {
            //todo ok
            for (var s in this.presiones) {
              //altura
              this.valorPresion = this.presiones[s].ValorPresion;

              if (this.presiones[s].FechaPresion == null) {
                this.fechaPresion = 'n/a';
              } else {
                this.fechaPresion = this.presiones[s].FechaPresion;
              }
            }
          } else {
            //llenar con valores predeterminados
            this.valorPresion = 'N/A';
            this.fechaPresion = 'N/A';
          }
        }
      }, {
        key: "getTime",
        value: function getTime(date) {
          return date != null ? new Date(date).getTime() : 0;
        }
      }, {
        key: "procesarNuevoArregloValores",
        value: function procesarNuevoArregloValores(response, loader) {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee3() {
            var _this4 = this;

            var arreglo, arrAltura, entidad, arrPeso, _entidad, arrImc, _entidad2, arrGlicemia, _entidad3, arrSangre, valor, _entidad4, valorDiast, tienePresion, fechaPresion, arrDiast, valorSist, tienePresionSis, arrSist, _entidad5;

            return regeneratorRuntime.wrap(function _callee3$(_context3) {
              while (1) {
                switch (_context3.prev = _context3.next) {
                  case 0:
                    this.arrMediciones = [];
                    this.arrMedicionesParteUno = [];
                    this.arrMedicionesParteDos = [];
                    arreglo = [];

                    if (response) {
                      arreglo = response.IndicadorValorUsp;
                    } ///altura


                    arrAltura = arreglo.filter(function (p) {
                      return p.Descripcion.includes('Altura') || p.Descripcion.includes('Talla');
                    });

                    if (arrAltura && arrAltura.length > 0) {
                      console.log('tiene altura'); //fecha mas actualizada

                      arrAltura.sort(function (a, b) {
                        return _this4.getTime(moment__WEBPACK_IMPORTED_MODULE_8__(b.Fecha).toDate()) - _this4.getTime(moment__WEBPACK_IMPORTED_MODULE_8__(a.Fecha).toDate());
                      });
                      console.log(arrAltura);
                      entidad = {
                        Nombre: 'Altura',
                        Valor: arrAltura[0].Valor.toFixed(0),
                        Fecha: moment__WEBPACK_IMPORTED_MODULE_8__(arrAltura[0].Fecha).format('DD MMM YYYY'),
                        Medida: 'cm'
                      };
                      this.arrMediciones.push(entidad);
                    } //peso


                    arrPeso = arreglo.filter(function (p) {
                      return p.Descripcion.includes('Peso');
                    });

                    if (arrPeso && arrPeso.length > 0) {
                      console.log('tiene peso'); //fecha mas actualizada

                      arrPeso.sort(function (a, b) {
                        return _this4.getTime(moment__WEBPACK_IMPORTED_MODULE_8__(b.Fecha).toDate()) - _this4.getTime(moment__WEBPACK_IMPORTED_MODULE_8__(a.Fecha).toDate());
                      });
                      console.log(arrPeso);
                      _entidad = {
                        Nombre: 'Peso',
                        Valor: arrPeso[0].Valor.toFixed(0),
                        Fecha: moment__WEBPACK_IMPORTED_MODULE_8__(arrPeso[0].Fecha).format('DD MMM YYYY'),
                        Medida: 'kg'
                      };
                      this.arrMediciones.push(_entidad);
                    } //imc


                    arrImc = arreglo.filter(function (p) {
                      return p.Descripcion.includes('I.M.C.');
                    });

                    if (arrImc && arrImc.length > 0) {
                      console.log('tiene imc'); //fecha mas actualizada

                      arrImc.sort(function (a, b) {
                        return _this4.getTime(moment__WEBPACK_IMPORTED_MODULE_8__(b.Fecha).toDate()) - _this4.getTime(moment__WEBPACK_IMPORTED_MODULE_8__(a.Fecha).toDate());
                      });
                      console.log(arrImc);
                      _entidad2 = {
                        Nombre: 'IMC',
                        Valor: arrImc[0].Valor.toFixed(0),
                        Fecha: moment__WEBPACK_IMPORTED_MODULE_8__(arrImc[0].Fecha).format('DD MMM YYYY'),
                        Medida: ''
                      };
                      this.arrMediciones.push(_entidad2);
                    } //glicemia


                    arrGlicemia = arreglo.filter(function (p) {
                      return p.Descripcion.includes('Glicemia');
                    });

                    if (arrGlicemia && arrGlicemia.length > 0) {
                      console.log('tiene glicemia'); //fecha mas actualizada

                      arrGlicemia.sort(function (a, b) {
                        return _this4.getTime(moment__WEBPACK_IMPORTED_MODULE_8__(b.Fecha).toDate()) - _this4.getTime(moment__WEBPACK_IMPORTED_MODULE_8__(a.Fecha).toDate());
                      });
                      console.log(arrGlicemia); //el primer elemento es el más nuevo

                      _entidad3 = {
                        Nombre: 'Glicemia',
                        Valor: arrGlicemia[0].Valor.toFixed(0),
                        Fecha: moment__WEBPACK_IMPORTED_MODULE_8__(arrGlicemia[0].Fecha).format('DD MMM YYYY'),
                        Medida: 'mg/dl'
                      };
                      this.arrMediciones.push(_entidad3);
                    } //sangre


                    arrSangre = arreglo.filter(function (p) {
                      return p.Descripcion.includes('Sanguineo');
                    });

                    if (arrSangre && arrSangre.length > 0) {
                      valor = '';
                      console.log('tiene sangre'); //fecha mas actualizada

                      arrSangre.sort(function (a, b) {
                        return _this4.getTime(moment__WEBPACK_IMPORTED_MODULE_8__(b.Fecha).toDate()) - _this4.getTime(moment__WEBPACK_IMPORTED_MODULE_8__(a.Fecha).toDate());
                      });
                      console.log(arrSangre); //el primer elemento es el más nuevo

                      if (arrSangre[0].Valor == 279) {
                        valor = "A";
                      } else if (arrSangre[0].Valor == 280) {
                        valor = "B";
                      } else if (arrSangre[0].Valor == 281) {
                        valor = "AB";
                      } else if (arrSangre[0].Valor == 252) {
                        valor = "O";
                      } else {
                        valor = "";
                      }

                      _entidad4 = {
                        Nombre: 'Grupo Sangre',
                        Valor: valor,
                        Fecha: moment__WEBPACK_IMPORTED_MODULE_8__(arrSangre[0].Fecha).format('DD MMM YYYY'),
                        Medida: ''
                      };
                      this.arrMediciones.push(_entidad4);
                    } //presion diastolica


                    valorDiast = '';
                    tienePresion = false;
                    fechaPresion = '';
                    arrDiast = arreglo.filter(function (p) {
                      return p.Descripcion.includes('Diastólica');
                    });

                    if (arrDiast && arrDiast.length > 0) {
                      console.log('tiene diastolica'); //fecha mas actualizada

                      arrDiast.sort(function (a, b) {
                        return _this4.getTime(moment__WEBPACK_IMPORTED_MODULE_8__(b.Fecha).toDate()) - _this4.getTime(moment__WEBPACK_IMPORTED_MODULE_8__(a.Fecha).toDate());
                      });
                      console.log(arrDiast);
                      valorDiast = arrDiast[0].Valor;
                      tienePresion = true;
                    }

                    valorSist = '';
                    tienePresionSis = false;
                    arrSist = arreglo.filter(function (p) {
                      return p.Descripcion.includes('Sistólica');
                    });

                    if (arrSist && arrSist.length > 0) {
                      console.log('tiene sistolica'); //fecha mas actualizada

                      arrSist.sort(function (a, b) {
                        return _this4.getTime(moment__WEBPACK_IMPORTED_MODULE_8__(b.Fecha).toDate()) - _this4.getTime(moment__WEBPACK_IMPORTED_MODULE_8__(a.Fecha).toDate());
                      });
                      console.log(arrSist);
                      valorSist = arrSist[0].Valor;
                      fechaPresion = moment__WEBPACK_IMPORTED_MODULE_8__(arrSist[0].Fecha).format('DD MMM YYYY');
                      tienePresionSis = true;
                    }

                    if (tienePresion && tienePresionSis) {
                      _entidad5 = {
                        Nombre: 'Presión',
                        Valor: valorSist.toString() + '/' + valorDiast.toString(),
                        Fecha: fechaPresion,
                        Medida: ''
                      };
                      this.arrMediciones.push(_entidad5);
                    }

                    console.log(this.arrMediciones); //aca partimos el arreglo

                    this.arrMedicionesParteUno = this.arrMediciones.slice(0, 3);
                    this.arrMedicionesParteDos = this.arrMediciones.slice(3, 6); //console.log(this.arrMedicionesParteUno);
                    //console.log(this.arrMedicionesParteDos);

                    this.estaCargando = false;
                    this.tituloProgress = '';
                    loader.dismiss(); //todo ok seguimos con las alergias

                    _context3.next = 33;
                    return this.construirArregloAlergias(this.usuario.Id);

                  case 33:
                  case "end":
                    return _context3.stop();
                }
              }
            }, _callee3, this);
          }));
        }
      }, {
        key: "construirArregloValores",
        value: function construirArregloValores(uspId) {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee7() {
            var _this5 = this;

            var loader;
            return regeneratorRuntime.wrap(function _callee7$(_context7) {
              while (1) {
                switch (_context7.prev = _context7.next) {
                  case 0:
                    this.arrMediciones = [];
                    _context7.next = 3;
                    return this.loading.create({
                      cssClass: 'loading-vacio',
                      showBackdrop: false,
                      spinner: null
                    });

                  case 3:
                    loader = _context7.sent;
                    this.estaCargando = true;
                    this.tituloProgress = 'Buscando datos del paciente';
                    _context7.next = 8;
                    return loader.present().then(function () {
                      return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(_this5, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee6() {
                        var _this6 = this;

                        return regeneratorRuntime.wrap(function _callee6$(_context6) {
                          while (1) {
                            switch (_context6.prev = _context6.next) {
                              case 0:
                                if (!this.utiles.isAppOnDevice()) {
                                  //llamada web
                                  this.info.getIndicadorValorApi(uspId).subscribe(function (response) {
                                    console.log(response); //correcto

                                    _this6.procesarNuevoArregloValores(response, loader);
                                  }, function (error) {
                                    return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(_this6, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee4() {
                                      return regeneratorRuntime.wrap(function _callee4$(_context4) {
                                        while (1) {
                                          switch (_context4.prev = _context4.next) {
                                            case 0:
                                              console.log(error.message);
                                              this.estaCargando = false;
                                              this.tituloProgress = '';
                                              loader.dismiss(); //si hubo error cargamos el siguiente

                                              _context4.next = 6;
                                              return this.construirArregloAlergias(this.usuario.Id);

                                            case 6:
                                            case "end":
                                              return _context4.stop();
                                          }
                                        }
                                      }, _callee4, this);
                                    }));
                                  });
                                } else {
                                  //llamada nativa
                                  this.info.getIndicadorValorNativeApi(uspId).then(function (response) {
                                    //this.procesarIndicadorValor(JSON.parse(response.data), loader);
                                    console.log(JSON.parse(response.data));

                                    _this6.procesarNuevoArregloValores(JSON.parse(response.data), loader);
                                  })["catch"](function (error) {
                                    return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(_this6, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee5() {
                                      return regeneratorRuntime.wrap(function _callee5$(_context5) {
                                        while (1) {
                                          switch (_context5.prev = _context5.next) {
                                            case 0:
                                              console.log(error.message);
                                              this.estaCargando = false;
                                              this.tituloProgress = '';
                                              loader.dismiss(); //si hubo error cargamos el siguiente

                                              _context5.next = 6;
                                              return this.construirArregloAlergias(this.usuario.Id);

                                            case 6:
                                            case "end":
                                              return _context5.stop();
                                          }
                                        }
                                      }, _callee5, this);
                                    }));
                                  });
                                }

                              case 1:
                              case "end":
                                return _context6.stop();
                            }
                          }
                        }, _callee6, this);
                      }));
                    });

                  case 8:
                  case "end":
                    return _context7.stop();
                }
              }
            }, _callee7, this);
          }));
        }
      }, {
        key: "construirArregloAlergias",
        value: function construirArregloAlergias(uspId) {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee11() {
            var _this7 = this;

            var loader;
            return regeneratorRuntime.wrap(function _callee11$(_context11) {
              while (1) {
                switch (_context11.prev = _context11.next) {
                  case 0:
                    _context11.next = 2;
                    return this.loading.create({
                      cssClass: 'loading-vacio',
                      showBackdrop: false,
                      spinner: null
                    });

                  case 2:
                    loader = _context11.sent;
                    this.estaCargando = true;
                    this.tituloProgress = 'Buscando alergias del paciente';
                    _context11.next = 7;
                    return loader.present().then(function () {
                      return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(_this7, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee10() {
                        var _this8 = this;

                        return regeneratorRuntime.wrap(function _callee10$(_context10) {
                          while (1) {
                            switch (_context10.prev = _context10.next) {
                              case 0:
                                if (!this.utiles.isAppOnDevice()) {
                                  //llamada web
                                  this.info.getAlergiasApi(uspId).subscribe(function (response) {
                                    console.log(response); //correcto

                                    _this8.procesarAlergias(response, loader);
                                  }, function (error) {
                                    return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(_this8, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee8() {
                                      return regeneratorRuntime.wrap(function _callee8$(_context8) {
                                        while (1) {
                                          switch (_context8.prev = _context8.next) {
                                            case 0:
                                              console.log(error.message);
                                              this.tituloProgress = '';
                                              this.estaCargando = false;
                                              loader.dismiss(); //si hubo error continuamos con morbidos

                                              _context8.next = 6;
                                              return this.construirArregloMorbidos(this.usuario.Id);

                                            case 6:
                                            case "end":
                                              return _context8.stop();
                                          }
                                        }
                                      }, _callee8, this);
                                    }));
                                  });
                                } else {
                                  //llamada nativa
                                  this.info.getAlergiasNativeApi(uspId).then(function (response) {
                                    //this.procesarIndicadorValor(JSON.parse(response.data), loader);
                                    console.log(JSON.parse(response.data));

                                    _this8.procesarAlergias(JSON.parse(response.data), loader);
                                  })["catch"](function (error) {
                                    return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(_this8, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee9() {
                                      return regeneratorRuntime.wrap(function _callee9$(_context9) {
                                        while (1) {
                                          switch (_context9.prev = _context9.next) {
                                            case 0:
                                              console.log(error.message);
                                              this.tituloProgress = '';
                                              this.estaCargando = false;
                                              loader.dismiss(); //si hubo error continuamos con morbidos

                                              _context9.next = 6;
                                              return this.construirArregloMorbidos(this.usuario.Id);

                                            case 6:
                                            case "end":
                                              return _context9.stop();
                                          }
                                        }
                                      }, _callee9, this);
                                    }));
                                  });
                                }

                              case 1:
                              case "end":
                                return _context10.stop();
                            }
                          }
                        }, _callee10, this);
                      }));
                    });

                  case 7:
                  case "end":
                    return _context11.stop();
                }
              }
            }, _callee11, this);
          }));
        }
      }, {
        key: "construirArregloMorbidos",
        value: function construirArregloMorbidos(uspId) {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee13() {
            var _this9 = this;

            var loader;
            return regeneratorRuntime.wrap(function _callee13$(_context13) {
              while (1) {
                switch (_context13.prev = _context13.next) {
                  case 0:
                    _context13.next = 2;
                    return this.loading.create({
                      cssClass: 'loading-vacio',
                      showBackdrop: false,
                      spinner: null
                    });

                  case 2:
                    loader = _context13.sent;
                    this.estaCargando = true;
                    this.tituloProgress = 'Buscando otros datos del paciente';
                    _context13.next = 7;
                    return loader.present().then(function () {
                      return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(_this9, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee12() {
                        var _this10 = this;

                        return regeneratorRuntime.wrap(function _callee12$(_context12) {
                          while (1) {
                            switch (_context12.prev = _context12.next) {
                              case 0:
                                if (!this.utiles.isAppOnDevice()) {
                                  //llamada web
                                  this.info.postAntecedentesApi(uspId).subscribe(function (response) {
                                    console.log(response); //correcto

                                    _this10.procesarAntecedentes(response, loader);
                                  }, function (error) {
                                    console.log(error.message);
                                    _this10.estaCargando = false;
                                    _this10.tituloProgress = '';
                                    loader.dismiss();
                                  });
                                } else {
                                  //llamada nativa
                                  this.info.postAntecedentesNativeApi(uspId).then(function (response) {
                                    //this.procesarIndicadorValor(JSON.parse(response.data), loader);
                                    console.log(JSON.parse(response.data));

                                    _this10.procesarAntecedentes(JSON.parse(response.data), loader);
                                  })["catch"](function (error) {
                                    console.log(error.message);
                                    _this10.estaCargando = false;
                                    _this10.tituloProgress = '';
                                    loader.dismiss();
                                  });
                                }

                              case 1:
                              case "end":
                                return _context12.stop();
                            }
                          }
                        }, _callee12, this);
                      }));
                    });

                  case 7:
                  case "end":
                    return _context13.stop();
                }
              }
            }, _callee13, this);
          }));
        }
      }, {
        key: "porcesarIndicadorValorApi",
        value: function porcesarIndicadorValorApi(data, loader) {
          var _this11 = this;

          //Glicemia mg/dl
          //Grupo Sanguineo  279: A
          //280: B
          //281: AB
          //252: 0
          this.indicadorValor = [];

          if (data) {
            this.indicadorValor = data.IndicadorValorUsp;
          }

          if (this.indicadorValor && this.indicadorValor.length > 0) {
            //ahora procesamos los valores
            //altura
            var arrAltura = this.indicadorValor.filter(function (p) {
              return p.Descripcion.includes('Altura') || p.Descripcion.includes('Talla');
            });

            if (arrAltura && arrAltura.length > 0) {
              console.log('tiene altura'); //fecha mas actualizada

              arrAltura.sort(function (a, b) {
                return _this11.getTime(moment__WEBPACK_IMPORTED_MODULE_8__(b.Fecha).toDate()) - _this11.getTime(moment__WEBPACK_IMPORTED_MODULE_8__(a.Fecha).toDate());
              });
              console.log(arrAltura); //el primer elemento es el más nuevo

              this.valorAltura = arrAltura[0].Valor;
              this.fechaAltura = moment__WEBPACK_IMPORTED_MODULE_8__(arrAltura[0].Fecha).format('DD-MM-YYYY HH:mm');
            } else {
              console.log('no tiene altura');
              this.valorAltura = 'No informada';
              this.fechaAltura = 'No informada';
            } //fin altura
            //peso


            var arrPeso = this.indicadorValor.filter(function (p) {
              return p.Descripcion.includes('Peso');
            });

            if (arrPeso && arrPeso.length > 0) {
              console.log('tiene peso'); //fecha mas actualizada

              arrPeso.sort(function (a, b) {
                return _this11.getTime(moment__WEBPACK_IMPORTED_MODULE_8__(b.Fecha).toDate()) - _this11.getTime(moment__WEBPACK_IMPORTED_MODULE_8__(a.Fecha).toDate());
              });
              console.log(arrPeso); //el primer elemento es el más nuevo

              this.valorPeso = arrPeso[0].Valor.toFixed(2);
              this.fechaPeso = moment__WEBPACK_IMPORTED_MODULE_8__(arrPeso[0].Fecha).format('DD-MM-YYYY HH:mm');
            } else {
              console.log('no tiene peso');
              this.valorPeso = 'No informado';
              this.fechaPeso = 'No informada';
            } //fin peso


            var arrImc = this.indicadorValor.filter(function (p) {
              return p.Descripcion.includes('I.M.C.');
            });

            if (arrImc && arrImc.length > 0) {
              console.log('tiene imc'); //fecha mas actualizada

              arrImc.sort(function (a, b) {
                return _this11.getTime(moment__WEBPACK_IMPORTED_MODULE_8__(b.Fecha).toDate()) - _this11.getTime(moment__WEBPACK_IMPORTED_MODULE_8__(a.Fecha).toDate());
              });
              console.log(arrImc); //el primer elemento es el más nuevo

              this.valorImc = arrImc[0].Valor.toFixed(2);
              this.fechaImc = moment__WEBPACK_IMPORTED_MODULE_8__(arrImc[0].Fecha).format('DD-MM-YYYY HH:mm');
            } else {
              console.log('no tiene imc');
              this.valorImc = 'No informado';
              this.fechaImc = 'No informada';
            } //fin imc


            var arrGlicemia = this.indicadorValor.filter(function (p) {
              return p.Descripcion.includes('Glicemia');
            });

            if (arrGlicemia && arrGlicemia.length > 0) {
              console.log('tiene glicemia'); //fecha mas actualizada

              arrGlicemia.sort(function (a, b) {
                return _this11.getTime(moment__WEBPACK_IMPORTED_MODULE_8__(b.Fecha).toDate()) - _this11.getTime(moment__WEBPACK_IMPORTED_MODULE_8__(a.Fecha).toDate());
              });
              console.log(arrGlicemia); //el primer elemento es el más nuevo

              this.valorGlicemia = arrGlicemia[0].Valor;
              this.fechaGlicemia = moment__WEBPACK_IMPORTED_MODULE_8__(arrGlicemia[0].Fecha).format('DD-MM-YYYY HH:mm');
            } else {
              console.log('no tiene glicemia');
              this.valorGlicemia = 'No informada';
              this.fechaGlicemia = 'No informada';
            } //fin glicemia


            var arrSangre = this.indicadorValor.filter(function (p) {
              return p.Descripcion.includes('Sanguineo');
            });

            if (arrSangre && arrSangre.length > 0) {
              console.log('tiene sangre'); //fecha mas actualizada

              arrSangre.sort(function (a, b) {
                return _this11.getTime(moment__WEBPACK_IMPORTED_MODULE_8__(b.Fecha).toDate()) - _this11.getTime(moment__WEBPACK_IMPORTED_MODULE_8__(a.Fecha).toDate());
              });
              console.log(arrSangre); //el primer elemento es el más nuevo

              if (arrSangre[0].Valor == 279) {
                this.valorGrupoSangre = "A";
              } else if (arrSangre[0].Valor == 280) {
                this.valorGrupoSangre = "B";
              } else if (arrSangre[0].Valor == 281) {
                this.valorGrupoSangre = "AB";
              } else if (arrSangre[0].Valor == 252) {
                this.valorGrupoSangre = "O";
              } else {
                this.valorGrupoSangre = "";
              }

              this.fechaGrupoSangre = moment__WEBPACK_IMPORTED_MODULE_8__(arrSangre[0].Fecha).format('DD-MM-YYYY HH:mm');
            } else {
              console.log('no tiene sangre');
              this.valorGrupoSangre = 'No informada';
              this.fechaGrupoSangre = 'No informada';
            }

            loader.dismiss(); //para progress

            this.estaCargando = false;
          } else {
            //viene valor nulo
            //llenar con valores predeterminados
            this.valorAltura = 'No informada';
            this.fechaAltura = 'No informada';
            this.valorPeso = 'No informado';
            this.fechaPeso = 'No informada';
            this.valorImc = 'No informado';
            this.fechaImc = 'No informada';
            this.valorGlicemia = 'No informada';
            this.fechaGlicemia = 'No informada';
            this.valorGrupoSangre = 'No informada';
            this.fechaGrupoSangre = 'No informada';
          }

          loader.dismiss(); //para progress

          this.estaCargando = false;
        }
      }, {
        key: "procesarIndicadorValor",
        value: function procesarIndicadorValor(data, loader) {
          this.indicadorValor = data.IndicadorValorUsp;

          if (this.indicadorValor) {
            if (this.indicadorValor.length > 0) {
              //todo ok
              for (var s in this.indicadorValor) {
                //altura
                if (this.indicadorValor[s].Descripcion.includes('Altura') || this.indicadorValor[s].Descripcion.includes('Talla')) {
                  this.valorAltura = this.indicadorValor[s].Valor.toString();

                  if (this.indicadorValor[s].Fecha == null) {
                    this.fechaAltura = 'n/a';
                  } else {
                    this.fechaAltura = '3 días';
                  }
                } //peso


                if (this.indicadorValor[s].Descripcion.includes('Peso')) {
                  this.valorPeso = this.indicadorValor[s].Valor.toString();

                  if (this.indicadorValor[s].Fecha == null) {
                    this.fechaPeso = 'n/a';
                  } else {
                    this.fechaPeso = '3 días';
                  }
                } //IMC


                if (this.indicadorValor[s].Descripcion == 'I.M.C.') {
                  this.valorImc = this.indicadorValor[s].Valor.toString();

                  if (this.indicadorValor[s].Fecha == null) {
                    this.fechaImc = 'n/a';
                  } else {
                    this.fechaImc = '3 días';
                  }
                }
              }
            } else {
              //llenar con valores predeterminados
              this.valorAltura = 'No informada';
              this.fechaAltura = 'No informada';
              this.valorPeso = 'No informado';
              this.fechaPeso = 'No informada';
              this.valorImc = 'No informado';
              this.fechaImc = 'No informada';
            }
          } else {
            //viene valor nulo
            //llenar con valores predeterminados
            this.valorAltura = 'No informada';
            this.fechaAltura = 'No informada';
            this.valorPeso = 'No informado';
            this.fechaPeso = 'No informada';
            this.valorImc = 'No informado';
            this.fechaImc = 'No informada';
          }

          loader.dismiss(); //para progress

          this.estaCargando = false;
        }
        /*   doRefresh(event) {
            console.log('Begin async operation');
        
            setTimeout(() => {
              console.log('Async operation has ended');
              this.loadData(this.usuario.Id);
              event.target.complete();
            }, 2000);
          } */

      }, {
        key: "logout",
        value: function logout() {
          this.acceso.logout();
          this.navCtrl.navigateRoot('login');
        } //pruebas de carga individual

      }, {
        key: "construirArregloValoresIndividual",
        value: function construirArregloValoresIndividual(uspId) {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee17() {
            var _this12 = this;

            var loader;
            return regeneratorRuntime.wrap(function _callee17$(_context17) {
              while (1) {
                switch (_context17.prev = _context17.next) {
                  case 0:
                    this.arrMediciones = [];
                    _context17.next = 3;
                    return this.loading.create({
                      cssClass: 'loading-vacio',
                      showBackdrop: false,
                      spinner: null
                    });

                  case 3:
                    loader = _context17.sent;
                    this.estaCargandoDatosUsuario = true;
                    this.tituloProgressDatosUsuario = 'Buscando datos del paciente';
                    _context17.next = 8;
                    return loader.present().then(function () {
                      return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(_this12, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee16() {
                        var _this13 = this;

                        var datos;
                        return regeneratorRuntime.wrap(function _callee16$(_context16) {
                          while (1) {
                            switch (_context16.prev = _context16.next) {
                              case 0:
                                //validamos si necesita actualizar
                                if (this.utiles.necesitaActualizarDatosPaciente(uspId) == false) {
                                  datos = this.utiles.entregaArregloDatosPaciente(uspId);
                                  this.procesarNuevoArregloValoresIndependiente(datos, loader, this.usuario, false);
                                } else {
                                  if (!this.utiles.isAppOnDevice()) {
                                    //llamada web
                                    this.info.getIndicadorValorApi(uspId).subscribe(function (response) {
                                      console.log(response); //correcto

                                      _this13.procesarNuevoArregloValoresIndependiente(response, loader, _this13.usuario, true);
                                    }, function (error) {
                                      return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(_this13, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee14() {
                                        return regeneratorRuntime.wrap(function _callee14$(_context14) {
                                          while (1) {
                                            switch (_context14.prev = _context14.next) {
                                              case 0:
                                                console.log(error.message);
                                                this.estaCargandoDatosUsuario = false;
                                                this.tituloProgressDatosUsuario = '';
                                                loader.dismiss();

                                              case 4:
                                              case "end":
                                                return _context14.stop();
                                            }
                                          }
                                        }, _callee14, this);
                                      }));
                                    });
                                  } else {
                                    //llamada nativa
                                    this.info.getIndicadorValorNativeApi(uspId).then(function (response) {
                                      //this.procesarIndicadorValor(JSON.parse(response.data), loader);
                                      console.log(JSON.parse(response.data));

                                      _this13.procesarNuevoArregloValoresIndependiente(JSON.parse(response.data), loader, _this13.usuario, true);
                                    })["catch"](function (error) {
                                      return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(_this13, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee15() {
                                        return regeneratorRuntime.wrap(function _callee15$(_context15) {
                                          while (1) {
                                            switch (_context15.prev = _context15.next) {
                                              case 0:
                                                console.log(error.message);
                                                this.estaCargandoDatosUsuario = false;
                                                this.tituloProgressDatosUsuario = '';
                                                loader.dismiss();

                                              case 4:
                                              case "end":
                                                return _context15.stop();
                                            }
                                          }
                                        }, _callee15, this);
                                      }));
                                    });
                                  }
                                }

                              case 1:
                              case "end":
                                return _context16.stop();
                            }
                          }
                        }, _callee16, this);
                      }));
                    });

                  case 8:
                  case "end":
                    return _context17.stop();
                }
              }
            }, _callee17, this);
          }));
        }
      }, {
        key: "procesarNuevoArregloValoresIndependiente",
        value: function procesarNuevoArregloValoresIndependiente(response, loader, usuarioAps, guardaLocalStorage) {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee18() {
            var _this14 = this;

            var entidad, arreglo, arrAltura, _entidad6, arrPeso, _entidad7, arrImc, _entidad8, arrGlicemia, _entidad9, arrSangre, valor, _entidad10, valorDiast, tienePresion, fechaPresion, arrDiast, valorSist, tienePresionSis, arrSist, _entidad11;

            return regeneratorRuntime.wrap(function _callee18$(_context18) {
              while (1) {
                switch (_context18.prev = _context18.next) {
                  case 0:
                    //procesamos los datos en el local storage
                    if (guardaLocalStorage) {
                      entidad = {
                        UsuarioAps: usuarioAps,
                        Mediciones: null
                      };
                      entidad.Mediciones = response;
                      this.arrMedicionesL = [];

                      if (localStorage.getItem('ANTECEDENTES')) {
                        this.arrMedicionesL = JSON.parse(localStorage.getItem('ANTECEDENTES'));
                      }

                      this.arrMedicionesL.push(entidad);
                      localStorage.setItem('ANTECEDENTES', JSON.stringify(this.arrMedicionesL));
                      localStorage.setItem('FECHA_ACTUALIZACION_ANTECEDENTES', moment__WEBPACK_IMPORTED_MODULE_8__().format('YYYY-MM-DD HH:mm'));
                    } //fin proceso ********************************


                    this.arrMediciones = [];
                    this.arrMedicionesParteUno = [];
                    this.arrMedicionesParteDos = [];
                    arreglo = [];

                    if (response) {
                      arreglo = response.IndicadorValorUsp;
                    } ///altura


                    arrAltura = arreglo.filter(function (p) {
                      return p.Descripcion.includes('Altura') || p.Descripcion.includes('Talla');
                    });

                    if (arrAltura && arrAltura.length > 0) {
                      console.log('tiene altura'); //fecha mas actualizada

                      arrAltura.sort(function (a, b) {
                        return _this14.getTime(moment__WEBPACK_IMPORTED_MODULE_8__(b.Fecha).toDate()) - _this14.getTime(moment__WEBPACK_IMPORTED_MODULE_8__(a.Fecha).toDate());
                      });
                      console.log(arrAltura);
                      _entidad6 = {
                        Nombre: 'Altura',
                        Valor: arrAltura[0].Valor.toFixed(0),
                        Fecha: moment__WEBPACK_IMPORTED_MODULE_8__(arrAltura[0].Fecha).format('DD MMM YYYY'),
                        Medida: 'cm'
                      };
                      this.arrMediciones.push(_entidad6);
                    } //peso


                    arrPeso = arreglo.filter(function (p) {
                      return p.Descripcion.includes('Peso');
                    });

                    if (arrPeso && arrPeso.length > 0) {
                      console.log('tiene peso'); //fecha mas actualizada

                      arrPeso.sort(function (a, b) {
                        return _this14.getTime(moment__WEBPACK_IMPORTED_MODULE_8__(b.Fecha).toDate()) - _this14.getTime(moment__WEBPACK_IMPORTED_MODULE_8__(a.Fecha).toDate());
                      });
                      console.log(arrPeso);
                      _entidad7 = {
                        Nombre: 'Peso',
                        Valor: arrPeso[0].Valor.toFixed(0),
                        Fecha: moment__WEBPACK_IMPORTED_MODULE_8__(arrPeso[0].Fecha).format('DD MMM YYYY'),
                        Medida: 'kg'
                      };
                      this.arrMediciones.push(_entidad7);
                    } //imc


                    arrImc = arreglo.filter(function (p) {
                      return p.Descripcion.includes('I.M.C.');
                    });

                    if (arrImc && arrImc.length > 0) {
                      console.log('tiene imc'); //fecha mas actualizada

                      arrImc.sort(function (a, b) {
                        return _this14.getTime(moment__WEBPACK_IMPORTED_MODULE_8__(b.Fecha).toDate()) - _this14.getTime(moment__WEBPACK_IMPORTED_MODULE_8__(a.Fecha).toDate());
                      });
                      console.log(arrImc);
                      _entidad8 = {
                        Nombre: 'IMC',
                        Valor: arrImc[0].Valor.toFixed(0),
                        Fecha: moment__WEBPACK_IMPORTED_MODULE_8__(arrImc[0].Fecha).format('DD MMM YYYY'),
                        Medida: ''
                      };
                      this.arrMediciones.push(_entidad8);
                    } //glicemia


                    arrGlicemia = arreglo.filter(function (p) {
                      return p.Descripcion.includes('Glicemia');
                    });

                    if (arrGlicemia && arrGlicemia.length > 0) {
                      console.log('tiene glicemia'); //fecha mas actualizada

                      arrGlicemia.sort(function (a, b) {
                        return _this14.getTime(moment__WEBPACK_IMPORTED_MODULE_8__(b.Fecha).toDate()) - _this14.getTime(moment__WEBPACK_IMPORTED_MODULE_8__(a.Fecha).toDate());
                      });
                      console.log(arrGlicemia); //el primer elemento es el más nuevo

                      _entidad9 = {
                        Nombre: 'Glicemia',
                        Valor: arrGlicemia[0].Valor.toFixed(0),
                        Fecha: moment__WEBPACK_IMPORTED_MODULE_8__(arrGlicemia[0].Fecha).format('DD MMM YYYY'),
                        Medida: 'mg/dl'
                      };
                      this.arrMediciones.push(_entidad9);
                    } //sangre


                    arrSangre = arreglo.filter(function (p) {
                      return p.Descripcion.includes('Sanguineo');
                    });

                    if (arrSangre && arrSangre.length > 0) {
                      valor = '';
                      console.log('tiene sangre'); //fecha mas actualizada

                      arrSangre.sort(function (a, b) {
                        return _this14.getTime(moment__WEBPACK_IMPORTED_MODULE_8__(b.Fecha).toDate()) - _this14.getTime(moment__WEBPACK_IMPORTED_MODULE_8__(a.Fecha).toDate());
                      });
                      console.log(arrSangre); //el primer elemento es el más nuevo

                      if (arrSangre[0].Valor == 279) {
                        valor = "A";
                      } else if (arrSangre[0].Valor == 280) {
                        valor = "B";
                      } else if (arrSangre[0].Valor == 281) {
                        valor = "AB";
                      } else if (arrSangre[0].Valor == 252) {
                        valor = "O";
                      } else {
                        valor = "";
                      }

                      _entidad10 = {
                        Nombre: 'Grupo Sangre',
                        Valor: valor,
                        Fecha: moment__WEBPACK_IMPORTED_MODULE_8__(arrSangre[0].Fecha).format('DD MMM YYYY'),
                        Medida: ''
                      };
                      this.arrMediciones.push(_entidad10);
                    } //presion diastolica


                    valorDiast = '';
                    tienePresion = false;
                    fechaPresion = '';
                    arrDiast = arreglo.filter(function (p) {
                      return p.Descripcion.includes('Diastólica');
                    });

                    if (arrDiast && arrDiast.length > 0) {
                      console.log('tiene diastolica'); //fecha mas actualizada

                      arrDiast.sort(function (a, b) {
                        return _this14.getTime(moment__WEBPACK_IMPORTED_MODULE_8__(b.Fecha).toDate()) - _this14.getTime(moment__WEBPACK_IMPORTED_MODULE_8__(a.Fecha).toDate());
                      });
                      console.log(arrDiast);
                      valorDiast = arrDiast[0].Valor;
                      tienePresion = true;
                    }

                    valorSist = '';
                    tienePresionSis = false;
                    arrSist = arreglo.filter(function (p) {
                      return p.Descripcion.includes('Sistólica');
                    });

                    if (arrSist && arrSist.length > 0) {
                      console.log('tiene sistolica'); //fecha mas actualizada

                      arrSist.sort(function (a, b) {
                        return _this14.getTime(moment__WEBPACK_IMPORTED_MODULE_8__(b.Fecha).toDate()) - _this14.getTime(moment__WEBPACK_IMPORTED_MODULE_8__(a.Fecha).toDate());
                      });
                      console.log(arrSist);
                      valorSist = arrSist[0].Valor;
                      fechaPresion = moment__WEBPACK_IMPORTED_MODULE_8__(arrSist[0].Fecha).format('DD MMM YYYY');
                      tienePresionSis = true;
                    }

                    if (tienePresion && tienePresionSis) {
                      _entidad11 = {
                        Nombre: 'Presión',
                        Valor: valorSist.toString() + '/' + valorDiast.toString(),
                        Fecha: fechaPresion,
                        Medida: ''
                      };
                      this.arrMediciones.push(_entidad11);
                    }

                    console.log(this.arrMediciones); //aca partimos el arreglo

                    this.arrMedicionesParteUno = this.arrMediciones.slice(0, 3);
                    this.arrMedicionesParteDos = this.arrMediciones.slice(3, 6); //console.log(this.arrMedicionesParteUno);
                    //console.log(this.arrMedicionesParteDos);

                    this.estaCargandoDatosUsuario = false;
                    this.tituloProgressDatosUsuario = '';

                    if (this.arrMediciones && this.arrMediciones.length > 0) {
                      this.tieneDatosUsuario = true;
                    }

                    loader.dismiss();

                  case 33:
                  case "end":
                    return _context18.stop();
                }
              }
            }, _callee18, this);
          }));
        }
      }, {
        key: "construirArregloAlergiasIndividual",
        value: function construirArregloAlergiasIndividual(uspId) {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee22() {
            var _this15 = this;

            var loader;
            return regeneratorRuntime.wrap(function _callee22$(_context22) {
              while (1) {
                switch (_context22.prev = _context22.next) {
                  case 0:
                    _context22.next = 2;
                    return this.loading.create({
                      cssClass: 'loading-vacio',
                      showBackdrop: false,
                      spinner: null
                    });

                  case 2:
                    loader = _context22.sent;
                    this.estaCargandoAlergias = true;
                    this.tituloProgressAlergias = 'Buscando alergias del paciente';
                    _context22.next = 7;
                    return loader.present().then(function () {
                      return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(_this15, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee21() {
                        var _this16 = this;

                        var datos;
                        return regeneratorRuntime.wrap(function _callee21$(_context21) {
                          while (1) {
                            switch (_context21.prev = _context21.next) {
                              case 0:
                                if (this.utiles.necesitaActualizarAlergiasPacientes(uspId) == false) {
                                  datos = this.utiles.entregaArregloAlergiasPaciente(uspId);
                                  this.procesarAlergiasIndividual(datos, loader, this.usuario, false);
                                } else {
                                  if (!this.utiles.isAppOnDevice()) {
                                    //llamada web
                                    this.info.getAlergiasApi(uspId).subscribe(function (response) {
                                      console.log(response); //correcto

                                      _this16.procesarAlergiasIndividual(response, loader, _this16.usuario, true);
                                    }, function (error) {
                                      return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(_this16, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee19() {
                                        return regeneratorRuntime.wrap(function _callee19$(_context19) {
                                          while (1) {
                                            switch (_context19.prev = _context19.next) {
                                              case 0:
                                                console.log(error.message);
                                                this.tituloProgressAlergias = '';
                                                this.estaCargandoAlergias = false;
                                                loader.dismiss();

                                              case 4:
                                              case "end":
                                                return _context19.stop();
                                            }
                                          }
                                        }, _callee19, this);
                                      }));
                                    });
                                  } else {
                                    //llamada nativa
                                    this.info.getAlergiasNativeApi(uspId).then(function (response) {
                                      //this.procesarIndicadorValor(JSON.parse(response.data), loader);
                                      console.log(JSON.parse(response.data));

                                      _this16.procesarAlergiasIndividual(JSON.parse(response.data), loader, _this16.usuario, true);
                                    })["catch"](function (error) {
                                      return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(_this16, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee20() {
                                        return regeneratorRuntime.wrap(function _callee20$(_context20) {
                                          while (1) {
                                            switch (_context20.prev = _context20.next) {
                                              case 0:
                                                console.log(error.message);
                                                this.tituloProgressAlergias = '';
                                                this.estaCargandoAlergias = false;
                                                loader.dismiss();

                                              case 4:
                                              case "end":
                                                return _context20.stop();
                                            }
                                          }
                                        }, _callee20, this);
                                      }));
                                    });
                                  }
                                }

                              case 1:
                              case "end":
                                return _context21.stop();
                            }
                          }
                        }, _callee21, this);
                      }));
                    });

                  case 7:
                  case "end":
                    return _context22.stop();
                }
              }
            }, _callee22, this);
          }));
        }
      }, {
        key: "procesarAlergiasIndividual",
        value: function procesarAlergiasIndividual(data, loader, usuarioAps, guardaLocalStorage) {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee23() {
            var entidad;
            return regeneratorRuntime.wrap(function _callee23$(_context23) {
              while (1) {
                switch (_context23.prev = _context23.next) {
                  case 0:
                    //procesamos los datos en el local storage
                    if (guardaLocalStorage) {
                      entidad = {
                        UsuarioAps: usuarioAps,
                        Alergias: null
                      };
                      entidad.Alergias = data;
                      this.arrAlergias = [];

                      if (localStorage.getItem('ALERGIAS')) {
                        this.arrAlergias = JSON.parse(localStorage.getItem('ALERGIAS'));
                      }

                      this.arrAlergias.push(entidad);
                      localStorage.setItem('ALERGIAS', JSON.stringify(this.arrAlergias));
                      localStorage.setItem('FECHA_ACTUALIZACION_ALERGIAS', moment__WEBPACK_IMPORTED_MODULE_8__().format('YYYY-MM-DD HH:mm'));
                    } //fin proceso ********************************


                    this.alergias = data.AlergiasUsp;

                    if (this.alergias) {
                      if (this.alergias.length == 1) {
                        this.title = "Alergia";
                      } else {
                        this.title = "Alergias";
                      }
                    }

                    this.estaCargandoAlergias = false;
                    this.tituloProgressAlergias = '';

                    if (this.alergias && this.alergias.length > 0) {
                      this.tieneAlergias = true;
                    }

                    loader.dismiss();

                  case 7:
                  case "end":
                    return _context23.stop();
                }
              }
            }, _callee23, this);
          }));
        }
      }, {
        key: "construirArregloMorbidosIndividual",
        value: function construirArregloMorbidosIndividual(uspId) {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee25() {
            var _this17 = this;

            var loader;
            return regeneratorRuntime.wrap(function _callee25$(_context25) {
              while (1) {
                switch (_context25.prev = _context25.next) {
                  case 0:
                    _context25.next = 2;
                    return this.loading.create({
                      cssClass: 'loading-vacio',
                      showBackdrop: false,
                      spinner: null
                    });

                  case 2:
                    loader = _context25.sent;
                    this.estaCargandoMorbidos = true;
                    this.tituloProgressMorbidos = 'Buscando otros datos del paciente';
                    _context25.next = 7;
                    return loader.present().then(function () {
                      return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(_this17, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee24() {
                        var _this18 = this;

                        var datos;
                        return regeneratorRuntime.wrap(function _callee24$(_context24) {
                          while (1) {
                            switch (_context24.prev = _context24.next) {
                              case 0:
                                if (this.utiles.necesitaActualizarMorbidosPacientes(uspId) == false) {
                                  datos = this.utiles.entregaArregloMorbidosPaciente(uspId);
                                  this.procesarAntecedentesIndividual(datos, loader, null, false);
                                } else {
                                  if (!this.utiles.isAppOnDevice()) {
                                    //llamada web
                                    this.info.postAntecedentesApi(uspId).subscribe(function (response) {
                                      console.log(response); //correcto

                                      _this18.procesarAntecedentesIndividual(response, loader, _this18.usuario, true);
                                    }, function (error) {
                                      console.log(error.message);
                                      _this18.estaCargandoMorbidos = false;
                                      _this18.tituloProgressMorbidos = '';
                                      loader.dismiss();
                                    });
                                  } else {
                                    //llamada nativa
                                    this.info.postAntecedentesNativeApi(uspId).then(function (response) {
                                      //this.procesarIndicadorValor(JSON.parse(response.data), loader);
                                      console.log(JSON.parse(response.data));

                                      _this18.procesarAntecedentesIndividual(JSON.parse(response.data), loader, _this18.usuario, true);
                                    })["catch"](function (error) {
                                      console.log(error.message);
                                      _this18.estaCargandoMorbidos = false;
                                      _this18.tituloProgressMorbidos = '';
                                      loader.dismiss();
                                    });
                                  }
                                }

                              case 1:
                              case "end":
                                return _context24.stop();
                            }
                          }
                        }, _callee24, this);
                      }));
                    });

                  case 7:
                  case "end":
                    return _context25.stop();
                }
              }
            }, _callee25, this);
          }));
        }
      }, {
        key: "procesarAntecedentesIndividual",
        value: function procesarAntecedentesIndividual(data, loader, usuarioAps, guardaLocalStorage) {
          var _this19 = this;

          //procesamos los datos en el local storage
          if (guardaLocalStorage) {
            var entidad = {
              UsuarioAps: usuarioAps,
              Morbidos: null
            };
            entidad.Morbidos = data;
            this.arrMorbidos = [];

            if (localStorage.getItem('MORBIDOS')) {
              this.arrMorbidos = JSON.parse(localStorage.getItem('MORBIDOS'));
            }

            this.arrMorbidos.push(entidad);
            localStorage.setItem('MORBIDOS', JSON.stringify(this.arrMorbidos));
            localStorage.setItem('FECHA_ACTUALIZACION_MORBIDOS', moment__WEBPACK_IMPORTED_MODULE_8__().format('YYYY-MM-DD HH:mm'));
          } //fin proceso ********************************


          this.antecedentes = data;
          console.log(this.antecedentes);
          this.familiares = [];
          this.personales = [];

          if (this.antecedentes.Antecedentes) {
            if (this.antecedentes.Antecedentes.Familiares) {
              if (this.antecedentes.Antecedentes.Familiares.Antecedente && this.antecedentes.Antecedentes.Familiares.Antecedente.length > 0) {
                var arr = this.antecedentes.Antecedentes.Familiares.Antecedente;
                arr.forEach(function (ante) {
                  var entidad = {
                    Nombre: ante
                  };

                  _this19.familiares.push(entidad);
                });
              }
            }

            if (this.antecedentes.Antecedentes.Personales) {
              if (this.antecedentes.Antecedentes.Personales.Antecedente && this.antecedentes.Antecedentes.Personales.Antecedente.length > 0) {
                var _arr2 = this.antecedentes.Antecedentes.Personales.Antecedente;

                _arr2.forEach(function (perso) {
                  var entidad = {
                    Nombre: perso
                  };

                  _this19.personales.push(entidad);
                });
              }
            }
          } //if (this.personales.length > 0 || this.familiares.len)


          if (this.personales && this.personales.length > 0) {
            this.tieneMorbidosPersonales = true;
          }

          if (this.familiares && this.familiares.length > 0) {
            this.tieneMorbidosFamiliares = true;
          }

          this.estaCargandoMorbidos = false;
          this.tituloProgressMorbidos = '';
          loader.dismiss();
        }
      }]);

      return DetailUsuarioPage;
    }();

    DetailUsuarioPage.ctorParameters = function () {
      return [{
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ToastController"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ModalController"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["Platform"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["MenuController"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]
      }, {
        type: _app_services_ServicioUtiles__WEBPACK_IMPORTED_MODULE_4__["ServicioUtiles"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["LoadingController"]
      }, {
        type: _app_services_ServicioInfoUsuario__WEBPACK_IMPORTED_MODULE_5__["ServicioInfoUsuario"]
      }, {
        type: _app_services_ServicioAcceso__WEBPACK_IMPORTED_MODULE_6__["ServicioAcceso"]
      }, {
        type: _app_services_ServicioParametrosApp__WEBPACK_IMPORTED_MODULE_7__["ServicioParametrosApp"]
      }];
    };

    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('mySlider', {
      "static": true
    })], DetailUsuarioPage.prototype, "slides", void 0);
    DetailUsuarioPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-detail-usuario',
      template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! raw-loader!./detail-usuario.page.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/detail-usuario/detail-usuario.page.html"))["default"],
      styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! ./detail-usuario.page.scss */
      "./src/app/detail-usuario/detail-usuario.page.scss"))["default"]]
    })], DetailUsuarioPage);
    /***/
  }
}]);
//# sourceMappingURL=detail-usuario-detail-usuario-module-es5.js.map