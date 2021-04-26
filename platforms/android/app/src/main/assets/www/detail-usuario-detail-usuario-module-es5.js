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


    __webpack_exports__["default"] = "<ion-header>\r\n  <!-- <ion-toolbar [style.--background]=\"miColor\" mode=\"md\"> -->\r\n  <ion-toolbar color=\"primary\" mode=\"md\">\r\n    <ion-buttons slot=\"start\">\r\n      <ion-back-button defaultHref=\"/antecedentes\" class=\"fcw\"></ion-back-button>\r\n    </ion-buttons>\r\n    <ion-title class=\"fcw\">Detalle</ion-title>\r\n  </ion-toolbar>\r\n</ion-header>\r\n<ion-content class=\"back-app\">\r\n  <!-- progress -->\r\n  <app-progress [mostrar]=\"estaCargando\" titulo=\"Buscando información del usuario\"></app-progress>\r\n  <!-- lo cambiamos por la card -->\r\n  <ion-item lines=\"none\" [hidden]=\"estaCargando\" style=\"padding-top: 15px;\">\r\n    <!-- poner avatar -->\r\n    <app-avatar [urlImagen] = \"usuario.UrlImagen\" [nombreCompleto]=\"usuario.Nombres + ' ' + usuario.ApellidoPaterno + ' ' + usuario.ApellidoMaterno\" [parentezco]=\"usuario.Parentezco.Nombre\"></app-avatar>\r\n  </ion-item>\r\n  <!-- aca viene la lista de datos personales presion, altura, etc-->\r\n  <ion-list [hidden]=\"estaCargando\">\r\n    <ion-item>\r\n      <ion-icon name=\"pulse\" slot=\"start\"></ion-icon>\r\n      <ion-label>Presión</ion-label>\r\n      <ion-label slot=\"end\" class=\"ion-text-right\">{{valorPresion}}</ion-label>\r\n    </ion-item>\r\n    <ion-item>\r\n      <ion-icon name=\"body\" slot=\"start\"></ion-icon>\r\n      <ion-label>Altura</ion-label>\r\n      <ion-label slot=\"end\" class=\"ion-text-right\">{{valorAltura}}<span *ngIf=\"valorAltura != 'No informada'\">&nbsp;cm</span></ion-label>\r\n    </ion-item>\r\n    <ion-item>\r\n      <ion-icon name=\"logo-buffer\" slot=\"start\"></ion-icon>\r\n      <ion-label>Peso</ion-label>\r\n      <ion-label slot=\"end\" class=\"ion-text-right\">{{valorPeso}}<span *ngIf=\"valorPeso != 'No informado'\">&nbsp;Kg</span></ion-label>\r\n    </ion-item>\r\n    <ion-item>\r\n      <ion-icon name=\"heart\" slot=\"start\"></ion-icon>\r\n      <ion-label>IMC</ion-label>\r\n      <ion-label slot=\"end\" class=\"ion-text-right\">{{valorImc}}</ion-label>\r\n    </ion-item>\r\n\r\n  </ion-list>\r\n  <!-- aca poner el listado de alergias --> \r\n  <ion-list [hidden]=\"estaCargando\">\r\n    <ion-list-header *ngIf=\"alergias && alergias.length > 0\">\r\n      <h5>{{title}}</h5>\r\n    </ion-list-header>\r\n    <ion-item *ngFor=\"let item of alergias\" class =\"lista-alergias\">\r\n      <ion-icon name=\"medkit\" slot=\"start\"></ion-icon>\r\n      <ion-label>{{item.Descripcion}}</ion-label>\r\n    </ion-item>\r\n  </ion-list> \r\n</ion-content>\r\n";
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


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2RldGFpbC11c3VhcmlvL2RldGFpbC11c3VhcmlvLnBhZ2Uuc2NzcyJ9 */";
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
    "./src/app/services/ServicioParametrosApp.ts"); //parametros
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
        this.parametrosApp = parametrosApp;
        this.miColor = '#FF4081';
        this.indicadorValor = [];
        this.presiones = [];
        this.alergias = [];
        this.cargando = false; //para controlar componente progess

        this.estaCargando = false;
      }

      _createClass(DetailUsuarioPage, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this = this;

          //this.miColor = this.utiles.entregaMiColor();
          //capturamos los parametros
          this.activatedRoute.queryParams.subscribe(function (params) {
            if (params && params.usuario) {
              //store the temp in data
              _this.usuario = JSON.parse(params.usuario);

              if (_this.usuario.Parentezco && _this.usuario.Parentezco.Id > 0) {
                if (_this.usuario.Parentezco.Nombre.toUpperCase() == 'LA MISMA PERSONA') {
                  _this.usuario.Parentezco.Nombre = 'Yo';
                }
              } else {
                _this.usuario.Parentezco.Nombre = 'No informado';
              }

              _this.userImagen = _this.usuario.UrlImagen;
              _this.miColor = _this.utiles.entregaColor(_this.usuario); //console.log(this.usuario);

              _this.obtenerInfoUsuario(_this.usuario.Id);
            }
          });
        }
      }, {
        key: "obtenerInfoUsuario",
        value: function obtenerInfoUsuario(uspId) {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee10() {
            var _this2 = this;

            var loader;
            return regeneratorRuntime.wrap(function _callee10$(_context10) {
              while (1) {
                switch (_context10.prev = _context10.next) {
                  case 0:
                    _context10.next = 2;
                    return this.loading.create({
                      cssClass: 'loading-vacio',
                      showBackdrop: false,
                      spinner: null,
                      //message: 'Cargando...<br>tipos de atención',
                      duration: 2000
                    });

                  case 2:
                    loader = _context10.sent;
                    this.estaCargando = true;
                    _context10.next = 6;
                    return loader.present().then(function () {
                      return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(_this2, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee9() {
                        var _this3 = this;

                        var loader1, loader2, _loader, _loader2, _loader3, _loader4, _loader5, _loader6;

                        return regeneratorRuntime.wrap(function _callee9$(_context9) {
                          while (1) {
                            switch (_context9.prev = _context9.next) {
                              case 0:
                                if (this.utiles.isAppOnDevice()) {
                                  _context9.next = 32;
                                  break;
                                }

                                if (!this.parametrosApp.USA_API_MANAGEMENT()) {
                                  _context9.next = 17;
                                  break;
                                }

                                //llamada api management
                                this.info.getIndicadorValorApi(uspId).subscribe(function (response) {
                                  _this3.procesarIndicadorValor(response, loader);
                                }); //presion

                                _context9.next = 5;
                                return this.loading.create({
                                  cssClass: 'loading-vacio',
                                  showBackdrop: false,
                                  spinner: null
                                });

                              case 5:
                                loader1 = _context9.sent;
                                this.estaCargando = true;
                                _context9.next = 9;
                                return loader1.present().then(function () {
                                  return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(_this3, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
                                    var _this4 = this;

                                    return regeneratorRuntime.wrap(function _callee$(_context) {
                                      while (1) {
                                        switch (_context.prev = _context.next) {
                                          case 0:
                                            this.info.getPresionApi(uspId).subscribe(function (response) {
                                              _this4.procesarPresion(response, loader1);
                                            });

                                          case 1:
                                          case "end":
                                            return _context.stop();
                                        }
                                      }
                                    }, _callee, this);
                                  }));
                                });

                              case 9:
                                //alergias
                                this.estaCargando = true;
                                _context9.next = 12;
                                return this.loading.create({
                                  cssClass: 'loading-vacio',
                                  showBackdrop: false,
                                  spinner: null
                                });

                              case 12:
                                loader2 = _context9.sent;
                                _context9.next = 15;
                                return loader2.present().then(function () {
                                  return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(_this3, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
                                    var _this5 = this;

                                    return regeneratorRuntime.wrap(function _callee2$(_context2) {
                                      while (1) {
                                        switch (_context2.prev = _context2.next) {
                                          case 0:
                                            this.info.getAlergiasApi(uspId).subscribe(function (response) {
                                              _this5.procesarAlergias(response, loader2);
                                            });

                                          case 1:
                                          case "end":
                                            return _context2.stop();
                                        }
                                      }
                                    }, _callee2, this);
                                  }));
                                });

                              case 15:
                                _context9.next = 30;
                                break;

                              case 17:
                                this.info.getIndicadorValor(uspId).subscribe(function (response) {
                                  _this3.procesarIndicadorValor(response, loader);
                                }); //presion

                                _context9.next = 20;
                                return this.loading.create({
                                  cssClass: 'loading-vacio',
                                  showBackdrop: false,
                                  spinner: null
                                });

                              case 20:
                                _loader = _context9.sent;
                                this.estaCargando = true;
                                _context9.next = 24;
                                return _loader.present().then(function () {
                                  return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(_this3, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee3() {
                                    var _this6 = this;

                                    return regeneratorRuntime.wrap(function _callee3$(_context3) {
                                      while (1) {
                                        switch (_context3.prev = _context3.next) {
                                          case 0:
                                            this.info.getPresion(uspId).subscribe(function (response) {
                                              _this6.procesarPresion(response, _loader);
                                            });

                                          case 1:
                                          case "end":
                                            return _context3.stop();
                                        }
                                      }
                                    }, _callee3, this);
                                  }));
                                });

                              case 24:
                                _context9.next = 26;
                                return this.loading.create({
                                  cssClass: 'loading-vacio',
                                  showBackdrop: false,
                                  spinner: null
                                });

                              case 26:
                                _loader2 = _context9.sent;
                                this.estaCargando = true;
                                _context9.next = 30;
                                return _loader2.present().then(function () {
                                  return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(_this3, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee4() {
                                    var _this7 = this;

                                    return regeneratorRuntime.wrap(function _callee4$(_context4) {
                                      while (1) {
                                        switch (_context4.prev = _context4.next) {
                                          case 0:
                                            this.info.getAlergias(uspId).subscribe(function (response) {
                                              _this7.procesarAlergias(response, _loader2);
                                            });

                                          case 1:
                                          case "end":
                                            return _context4.stop();
                                        }
                                      }
                                    }, _callee4, this);
                                  }));
                                });

                              case 30:
                                _context9.next = 61;
                                break;

                              case 32:
                                if (!this.parametrosApp.USA_API_MANAGEMENT()) {
                                  _context9.next = 48;
                                  break;
                                }

                                //llamada nativa
                                this.info.getIndicadorValorNativeApi(uspId).then(function (response) {
                                  _this3.procesarIndicadorValor(JSON.parse(response.data), loader);
                                }); //presion

                                _context9.next = 36;
                                return this.loading.create({
                                  cssClass: 'loading-vacio',
                                  showBackdrop: false,
                                  spinner: null
                                });

                              case 36:
                                _loader3 = _context9.sent;
                                this.estaCargando = true;
                                _context9.next = 40;
                                return _loader3.present().then(function () {
                                  return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(_this3, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee5() {
                                    var _this8 = this;

                                    return regeneratorRuntime.wrap(function _callee5$(_context5) {
                                      while (1) {
                                        switch (_context5.prev = _context5.next) {
                                          case 0:
                                            this.info.getPresionNativeApi(uspId).then(function (response) {
                                              _this8.procesarPresion(JSON.parse(response.data), _loader3);
                                            });

                                          case 1:
                                          case "end":
                                            return _context5.stop();
                                        }
                                      }
                                    }, _callee5, this);
                                  }));
                                });

                              case 40:
                                _context9.next = 42;
                                return this.loading.create({
                                  cssClass: 'loading-vacio',
                                  showBackdrop: false,
                                  spinner: null
                                });

                              case 42:
                                _loader4 = _context9.sent;
                                this.estaCargando = true;
                                _context9.next = 46;
                                return _loader4.present().then(function () {
                                  return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(_this3, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee6() {
                                    var _this9 = this;

                                    return regeneratorRuntime.wrap(function _callee6$(_context6) {
                                      while (1) {
                                        switch (_context6.prev = _context6.next) {
                                          case 0:
                                            this.info.getAlergiasNativeApi(uspId).then(function (response) {
                                              _this9.procesarAlergias(JSON.parse(response.data), _loader4);
                                            });

                                          case 1:
                                          case "end":
                                            return _context6.stop();
                                        }
                                      }
                                    }, _callee6, this);
                                  }));
                                });

                              case 46:
                                _context9.next = 61;
                                break;

                              case 48:
                                //llamada nativa
                                this.info.getIndicadorValorNative(uspId).then(function (response) {
                                  _this3.procesarIndicadorValor(JSON.parse(response.data), loader);
                                }); //presion

                                _context9.next = 51;
                                return this.loading.create({
                                  cssClass: 'loading-vacio',
                                  showBackdrop: false,
                                  spinner: null
                                });

                              case 51:
                                _loader5 = _context9.sent;
                                this.estaCargando = true;
                                _context9.next = 55;
                                return _loader5.present().then(function () {
                                  return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(_this3, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee7() {
                                    var _this10 = this;

                                    return regeneratorRuntime.wrap(function _callee7$(_context7) {
                                      while (1) {
                                        switch (_context7.prev = _context7.next) {
                                          case 0:
                                            this.info.getPresionNative(uspId).then(function (response) {
                                              _this10.procesarPresion(JSON.parse(response.data), _loader5);
                                            });

                                          case 1:
                                          case "end":
                                            return _context7.stop();
                                        }
                                      }
                                    }, _callee7, this);
                                  }));
                                });

                              case 55:
                                _context9.next = 57;
                                return this.loading.create({
                                  cssClass: 'loading-vacio',
                                  showBackdrop: false,
                                  spinner: null
                                });

                              case 57:
                                _loader6 = _context9.sent;
                                this.estaCargando = true;
                                _context9.next = 61;
                                return _loader6.present().then(function () {
                                  return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(_this3, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee8() {
                                    var _this11 = this;

                                    return regeneratorRuntime.wrap(function _callee8$(_context8) {
                                      while (1) {
                                        switch (_context8.prev = _context8.next) {
                                          case 0:
                                            this.info.getAlergiasNative(uspId).then(function (response) {
                                              _this11.procesarAlergias(JSON.parse(response.data), _loader6);
                                            });

                                          case 1:
                                          case "end":
                                            return _context8.stop();
                                        }
                                      }
                                    }, _callee8, this);
                                  }));
                                });

                              case 61:
                              case "end":
                                return _context9.stop();
                            }
                          }
                        }, _callee9, this);
                      }));
                    });

                  case 6:
                  case "end":
                    return _context10.stop();
                }
              }
            }, _callee10, this);
          }));
        }
      }, {
        key: "procesarAlergias",
        value: function procesarAlergias(data, loader) {
          this.alergias = data.AlergiasUsp;

          if (this.alergias) {
            if (this.alergias.length == 1) {
              this.title = "Alergia";
            } else {
              this.title = "Alergias";
            }
          }

          loader.dismiss();
          this.estaCargando = false;
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

                  if (this.indicadorValor[s].fecha == null) {
                    this.fechaAltura = 'n/a';
                  } else {
                    this.fechaAltura = '3 días';
                  }
                } //peso


                if (this.indicadorValor[s].Descripcion.includes('Peso')) {
                  this.valorPeso = this.indicadorValor[s].Valor.toString();

                  if (this.indicadorValor[s].fecha == null) {
                    this.fechaPeso = 'n/a';
                  } else {
                    this.fechaPeso = '3 días';
                  }
                } //IMC


                if (this.indicadorValor[s].Descripcion == 'I.M.C.') {
                  this.valorImc = this.indicadorValor[s].Valor.toString();

                  if (this.indicadorValor[s].fecha == null) {
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