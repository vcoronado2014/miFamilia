function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["ordenes-ordenes-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/ordenes/ordenes.page.html":
  /*!*********************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/ordenes/ordenes.page.html ***!
    \*********************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppOrdenesOrdenesPageHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ion-header>\r\n  <ion-toolbar [style.--background]=\"miColor\" mode=\"md\">\r\n    <ion-buttons slot=\"start\">\r\n      <ion-back-button defaultHref=\"/home\" class=\"fcw\"></ion-back-button>\r\n    </ion-buttons>\r\n    <ion-title class=\"fcw\">Ordenes</ion-title>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content class=\"back-app\">\r\n<!--SI HAY ORDENES -->\r\n<ion-card *ngFor=\"let item of listadoOrdenes\" (click)=\"ordenSelected(item)\">\r\n  <ion-card-content>\r\n    <ion-item lines=\"none\" #myList>\r\n      <ion-avatar slot=\"start\">\r\n        <text-avatar [text]=\"item.NombreUsuario\" [color]=\"item.Color\" [textColor]=\"textColor\"></text-avatar>\r\n      </ion-avatar>\r\n      <ion-label class=\"ion-text-wrap\">{{ item.NombreUsuario }}</ion-label>\r\n    </ion-item>\r\n    <ion-item lines=\"none\">\r\n      <ion-grid>\r\n        <ion-row>\r\n          <ion-col>\r\n            <ion-label class=\"ion-text-wrap\">N° de órden: <strong>{{ item.Id }}</strong></ion-label>\r\n          </ion-col>\r\n          <ion-col>\r\n            <ion-label class=\"ion-text-wrap\">Estado: <strong>{{ item.Estado }}</strong></ion-label>\r\n          </ion-col>\r\n        </ion-row>\r\n      </ion-grid>\r\n    </ion-item>\r\n    <ion-item lines=\"none\">\r\n      <ion-badge color=\"primary\" slot=\"end\">{{ item.Fecha }}</ion-badge>\r\n      <!-- <ion-icon name=\"time\" slot=\"end\"></ion-icon> -->\r\n    </ion-item>\r\n  </ion-card-content>\r\n</ion-card>  \r\n<!-- NO HAY ORDENES -->\r\n<div *ngIf=\"tiene == false\" style=\"position: relative; height: 100vh;\">\r\n  <div style=\"position: absolute; display: table; height: 100%; font-size: 20px; color:#BDBDBD; text-align: center;width: 100%;\">\r\n    <p style=\"display: table-cell; vertical-align: middle\">No hay órdenes para mostrar  <br>\r\n    <ion-icon name=\"information-circle\" style=\"font-size: 50px;\"></ion-icon></p>\r\n  </div>\r\n</div>\r\n</ion-content>\r\n";
    /***/
  },

  /***/
  "./src/app/ordenes/ordenes.module.ts":
  /*!*******************************************!*\
    !*** ./src/app/ordenes/ordenes.module.ts ***!
    \*******************************************/

  /*! exports provided: OrdenesPageModule */

  /***/
  function srcAppOrdenesOrdenesModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "OrdenesPageModule", function () {
      return OrdenesPageModule;
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


    var _ordenes_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./ordenes.page */
    "./src/app/ordenes/ordenes.page.ts");
    /* harmony import */


    var _directives_text_avatar_index__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ../../directives/text-avatar/index */
    "./src/directives/text-avatar/index.ts");

    var OrdenesPageModule = function OrdenesPageModule() {
      _classCallCheck(this, OrdenesPageModule);
    };

    OrdenesPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _directives_text_avatar_index__WEBPACK_IMPORTED_MODULE_7__["TextAvatarModule"], _angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterModule"].forChild([{
        path: '',
        component: _ordenes_page__WEBPACK_IMPORTED_MODULE_6__["OrdenesPage"]
      }])],
      declarations: [_ordenes_page__WEBPACK_IMPORTED_MODULE_6__["OrdenesPage"]]
    })], OrdenesPageModule);
    /***/
  },

  /***/
  "./src/app/ordenes/ordenes.page.scss":
  /*!*******************************************!*\
    !*** ./src/app/ordenes/ordenes.page.scss ***!
    \*******************************************/

  /*! exports provided: default */

  /***/
  function srcAppOrdenesOrdenesPageScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL29yZGVuZXMvb3JkZW5lcy5wYWdlLnNjc3MifQ== */";
    /***/
  },

  /***/
  "./src/app/ordenes/ordenes.page.ts":
  /*!*****************************************!*\
    !*** ./src/app/ordenes/ordenes.page.ts ***!
    \*****************************************/

  /*! exports provided: OrdenesPage */

  /***/
  function srcAppOrdenesOrdenesPageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "OrdenesPage", function () {
      return OrdenesPage;
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


    var _app_services_ServicioLaboratorio__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ../../app/services/ServicioLaboratorio */
    "./src/app/services/ServicioLaboratorio.ts");
    /* harmony import */


    var _app_services_ServicioAcceso__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ../../app/services/ServicioAcceso */
    "./src/app/services/ServicioAcceso.ts");
    /* harmony import */


    var _modal_examenes_modal_examenes_page__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ../modal-examenes/modal-examenes.page */
    "./src/app/modal-examenes/modal-examenes.page.ts");
    /* harmony import */


    var moment__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! moment */
    "./node_modules/moment/moment.js");
    /* harmony import */


    var moment__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_8__); //parametros
    //SERVICIOS
    //modal
    //moment


    var OrdenesPage = /*#__PURE__*/function () {
      function OrdenesPage(navCtrl, toast, modalCtrl, platform, menu, activatedRoute, router, utiles, loading, lab, acceso) {
        _classCallCheck(this, OrdenesPage);

        this.navCtrl = navCtrl;
        this.toast = toast;
        this.modalCtrl = modalCtrl;
        this.platform = platform;
        this.menu = menu;
        this.activatedRoute = activatedRoute;
        this.router = router;
        this.utiles = utiles;
        this.loading = loading;
        this.lab = lab;
        this.acceso = acceso;
        this.miColor = '#FF4081';
        this.textColor = '#FFFFFF'; //tiene registros

        this.tiene = true;
      }

      _createClass(OrdenesPage, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          moment__WEBPACK_IMPORTED_MODULE_8__["locale"]('es');
          this.loadInicio();
        }
      }, {
        key: "loadInicio",
        value: function loadInicio() {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
            var _this = this;

            var loader;
            return regeneratorRuntime.wrap(function _callee2$(_context2) {
              while (1) {
                switch (_context2.prev = _context2.next) {
                  case 0:
                    //mi color
                    //this.miColor = this.utiles.entregaMiColor();
                    //ordenes
                    this.listadoOrdenes = []; //contenido de las llamadas.

                    if (sessionStorage.UsuarioAps) {
                      //debemos enviar el uspId del titular para que traiga todos los datos
                      this.usuarioAps = JSON.parse(sessionStorage.UsuarioAps);
                    }

                    if (!this.usuarioAps) {
                      _context2.next = 9;
                      break;
                    }

                    this.miColor = this.utiles.entregaColor(this.usuarioAps);
                    _context2.next = 6;
                    return this.loading.create({
                      message: 'Obteniendo...<br>Órdenes del usuario',
                      duration: 20000
                    });

                  case 6:
                    loader = _context2.sent;
                    _context2.next = 9;
                    return loader.present().then(function () {
                      return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(_this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
                        var _this2 = this;

                        return regeneratorRuntime.wrap(function _callee$(_context) {
                          while (1) {
                            switch (_context.prev = _context.next) {
                              case 0:
                                if (!this.utiles.isAppOnDevice()) {
                                  //llamada web
                                  this.lab.getOrdenes(this.usuarioAps.Id).subscribe(function (response) {
                                    _this2.porocesarLista(response, loader);
                                  });
                                } else {
                                  //llamada nativa
                                  this.lab.getOrdenesNative(this.usuarioAps.Id).then(function (response) {
                                    _this2.porocesarLista(JSON.parse(response.data), loader);
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

                  case 9:
                  case "end":
                    return _context2.stop();
                }
              }
            }, _callee2, this);
          }));
        }
      }, {
        key: "porocesarLista",
        value: function porocesarLista(data, loader) {
          var listado = data;

          if (listado) {
            for (var s in listado) {
              var fecha = moment__WEBPACK_IMPORTED_MODULE_8__(listado[s].FechaRegistro).format('DD-MM-YYYY');
              listado[s].Fecha = fecha;
            } //ahora asignamos la variable


            this.listadoOrdenes = listado;

            if (this.listadoOrdenes.length == 0) {
              this.tiene = false;
            }

            console.log(this.listadoOrdenes);
          }

          loader.dismiss();
        }
      }, {
        key: "ordenSelected",
        value: function ordenSelected(item) {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee3() {
            var modal;
            return regeneratorRuntime.wrap(function _callee3$(_context3) {
              while (1) {
                switch (_context3.prev = _context3.next) {
                  case 0:
                    _context3.next = 2;
                    return this.modalCtrl.create({
                      component: _modal_examenes_modal_examenes_page__WEBPACK_IMPORTED_MODULE_7__["ModalExamenesPage"],
                      componentProps: {
                        'orden': JSON.stringify(item)
                      }
                    });

                  case 2:
                    modal = _context3.sent;
                    _context3.next = 5;
                    return modal.present();

                  case 5:
                    return _context3.abrupt("return", _context3.sent);

                  case 6:
                  case "end":
                    return _context3.stop();
                }
              }
            }, _callee3, this);
          }));
        }
      }, {
        key: "logout",
        value: function logout() {
          this.acceso.logout();
          this.navCtrl.navigateRoot('login');
        }
      }]);

      return OrdenesPage;
    }();

    OrdenesPage.ctorParameters = function () {
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
        type: _app_services_ServicioLaboratorio__WEBPACK_IMPORTED_MODULE_5__["ServicioLaboratorio"]
      }, {
        type: _app_services_ServicioAcceso__WEBPACK_IMPORTED_MODULE_6__["ServicioAcceso"]
      }];
    };

    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('myList', {
      read: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonItem"]
    })], OrdenesPage.prototype, "list", void 0);
    OrdenesPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-ordenes',
      template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! raw-loader!./ordenes.page.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/ordenes/ordenes.page.html"))["default"],
      styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! ./ordenes.page.scss */
      "./src/app/ordenes/ordenes.page.scss"))["default"]]
    })], OrdenesPage);
    /***/
  }
}]);
//# sourceMappingURL=ordenes-ordenes-module-es5.js.map