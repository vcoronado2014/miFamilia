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


    __webpack_exports__["default"] = "<ion-header>\r\n  <!-- <ion-toolbar [style.--background]=\"miColor\" mode=\"md\"> -->\r\n  <ion-toolbar color=\"primary\" mode=\"md\">\r\n    <ion-buttons slot=\"start\">\r\n      <ion-back-button defaultHref=\"/antecedentes\" class=\"fcw\"></ion-back-button>\r\n    </ion-buttons>\r\n    <ion-title class=\"fcw\">Detalle</ion-title>\r\n  </ion-toolbar>\r\n</ion-header>\r\n<ion-content class=\"back-app\">\r\n<!--   <ion-refresher slot=\"fixed\" (ionRefresh)=\"doRefresh($event)\">\r\n    <ion-refresher-content></ion-refresher-content>\r\n  </ion-refresher> -->\r\n  <ion-card>\r\n    <img *ngIf=\"usuario.UrlImagen != ''\" src={{usuario.UrlImagen}} style=\"width: 100%;\" />\r\n    <ion-card-header>\r\n      <ion-card-title class=\"ion-text-wrap\" [style.--color]=\"miColor\">{{usuario.Nombres + ' ' + usuario.ApellidoPaterno + ' ' + usuario.ApellidoMaterno}}</ion-card-title>\r\n    </ion-card-header>\r\n    <ion-card-content>\r\n      Edad: {{usuario.Edad}} años.\r\n    </ion-card-content>\r\n  </ion-card> \r\n  <!-- aca viene la lista de datos personales presion, altura, etc-->\r\n  <ion-list>\r\n    <ion-item>\r\n      <ion-icon name=\"pulse\" slot=\"start\"></ion-icon>\r\n      <ion-label>Presión</ion-label>\r\n      <ion-label slot=\"end\" class=\"ion-text-right\">{{valorPresion}}</ion-label>\r\n    </ion-item>\r\n    <ion-item>\r\n      <ion-icon name=\"body\" slot=\"start\"></ion-icon>\r\n      <ion-label>Altura</ion-label>\r\n      <ion-label slot=\"end\" class=\"ion-text-right\">{{valorAltura}}<span *ngIf=\"valorAltura != 'No informada'\">&nbsp;cm</span></ion-label>\r\n    </ion-item>\r\n    <ion-item>\r\n      <ion-icon name=\"logo-buffer\" slot=\"start\"></ion-icon>\r\n      <ion-label>Peso</ion-label>\r\n      <ion-label slot=\"end\" class=\"ion-text-right\">{{valorPeso}}<span *ngIf=\"valorPeso != 'No informado'\">&nbsp;Kg</span></ion-label>\r\n    </ion-item>\r\n    <ion-item>\r\n      <ion-icon name=\"heart\" slot=\"start\"></ion-icon>\r\n      <ion-label>IMC</ion-label>\r\n      <ion-label slot=\"end\" class=\"ion-text-right\">{{valorImc}}</ion-label>\r\n    </ion-item>\r\n\r\n  </ion-list>\r\n  <!-- aca poner el listado de alergias --> \r\n  <ion-list>\r\n    <ion-list-header>\r\n      <h5>{{title}}</h5>\r\n    </ion-list-header>\r\n    <ion-item *ngFor=\"let item of alergias\" class =\"lista-alergias\">\r\n      <ion-icon name=\"medkit\" slot=\"start\"></ion-icon>\r\n      <ion-label>{{item.Descripcion}}</ion-label>\r\n    </ion-item>\r\n  </ion-list> \r\n</ion-content>\r\n";
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

    var DetailUsuarioPageModule = function DetailUsuarioPageModule() {
      _classCallCheck(this, DetailUsuarioPageModule);
    };

    DetailUsuarioPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterModule"].forChild([{
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
    "./src/app/services/ServicioAcceso.ts"); //parametros
    //SERVICIOS


    var DetailUsuarioPage = /*#__PURE__*/function () {
      function DetailUsuarioPage(navCtrl, toast, modalCtrl, platform, menu, activatedRoute, router, utiles, loading, info, acceso) {
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
        this.miColor = '#FF4081';
        this.indicadorValor = [];
        this.presiones = [];
        this.alergias = [];
        this.cargando = false;
      } //ARREGLAR TEMAS DE COLORES Y URL CUANDO SON VARIOS MIEMBROS DE LA FAMILIA


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
              _this.userImagen = _this.usuario.UrlImagen;
              _this.miColor = _this.utiles.entregaColor(_this.usuario);
              console.log(_this.usuario);

              _this.obtenerInfoUsuario(_this.usuario.Id);
            }
          });
        }
      }, {
        key: "loadData",
        value: function loadData(uspId) {
          var _this2 = this;

          this.info.getIndicadorValor(uspId).subscribe(function (response) {
            _this2.procesarIndicadorValorSinLoader(response);
          });
          this.info.getPresion(uspId).subscribe(function (response) {
            _this2.procesarPresionSinLoader(response);
          });
          this.info.getAlergias(uspId).subscribe(function (response) {
            _this2.procesarAlergiasSinLoader(response);
          });
        }
      }, {
        key: "obtenerInfoUsuario",
        value: function obtenerInfoUsuario(uspId) {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee6() {
            var _this3 = this;

            var loader;
            return regeneratorRuntime.wrap(function _callee6$(_context6) {
              while (1) {
                switch (_context6.prev = _context6.next) {
                  case 0:
                    _context6.next = 2;
                    return this.loading.create({
                      message: 'Obteniendo...<br>Información del usuario',
                      duration: 20000
                    });

                  case 2:
                    loader = _context6.sent;
                    _context6.next = 5;
                    return loader.present().then(function () {
                      return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(_this3, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee5() {
                        var _this4 = this;

                        var loader1, loader2, _loader, _loader2;

                        return regeneratorRuntime.wrap(function _callee5$(_context5) {
                          while (1) {
                            switch (_context5.prev = _context5.next) {
                              case 0:
                                if (this.utiles.isAppOnDevice()) {
                                  _context5.next = 14;
                                  break;
                                }

                                //llamada web
                                this.info.getIndicadorValor(uspId).subscribe(function (response) {
                                  _this4.procesarIndicadorValor(response, loader);
                                }); //presion

                                _context5.next = 4;
                                return this.loading.create({
                                  message: 'Obteniendo...<br>Presión'
                                });

                              case 4:
                                loader1 = _context5.sent;
                                _context5.next = 7;
                                return loader1.present().then(function () {
                                  return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(_this4, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
                                    var _this5 = this;

                                    return regeneratorRuntime.wrap(function _callee$(_context) {
                                      while (1) {
                                        switch (_context.prev = _context.next) {
                                          case 0:
                                            this.info.getPresion(uspId).subscribe(function (response) {
                                              _this5.procesarPresion(response, loader1);
                                            });

                                          case 1:
                                          case "end":
                                            return _context.stop();
                                        }
                                      }
                                    }, _callee, this);
                                  }));
                                });

                              case 7:
                                _context5.next = 9;
                                return this.loading.create({
                                  message: 'Obteniendo...<br>Alergias'
                                });

                              case 9:
                                loader2 = _context5.sent;
                                _context5.next = 12;
                                return loader2.present().then(function () {
                                  return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(_this4, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
                                    var _this6 = this;

                                    return regeneratorRuntime.wrap(function _callee2$(_context2) {
                                      while (1) {
                                        switch (_context2.prev = _context2.next) {
                                          case 0:
                                            this.info.getAlergias(uspId).subscribe(function (response) {
                                              _this6.procesarAlergias(response, loader2);
                                            });

                                          case 1:
                                          case "end":
                                            return _context2.stop();
                                        }
                                      }
                                    }, _callee2, this);
                                  }));
                                });

                              case 12:
                                _context5.next = 25;
                                break;

                              case 14:
                                //llamada nativa
                                this.info.getIndicadorValorNative(uspId).then(function (response) {
                                  _this4.procesarIndicadorValor(JSON.parse(response.data), loader);
                                }); //presion

                                _context5.next = 17;
                                return this.loading.create({
                                  message: 'Obteniendo...<br>Presión'
                                });

                              case 17:
                                _loader = _context5.sent;
                                _context5.next = 20;
                                return _loader.present().then(function () {
                                  return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(_this4, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee3() {
                                    var _this7 = this;

                                    return regeneratorRuntime.wrap(function _callee3$(_context3) {
                                      while (1) {
                                        switch (_context3.prev = _context3.next) {
                                          case 0:
                                            this.info.getPresionNative(uspId).then(function (response) {
                                              _this7.procesarPresion(JSON.parse(response.data), _loader);
                                            });

                                          case 1:
                                          case "end":
                                            return _context3.stop();
                                        }
                                      }
                                    }, _callee3, this);
                                  }));
                                });

                              case 20:
                                _context5.next = 22;
                                return this.loading.create({
                                  message: 'Obteniendo...<br>Alergias'
                                });

                              case 22:
                                _loader2 = _context5.sent;
                                _context5.next = 25;
                                return _loader2.present().then(function () {
                                  return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(_this4, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee4() {
                                    var _this8 = this;

                                    return regeneratorRuntime.wrap(function _callee4$(_context4) {
                                      while (1) {
                                        switch (_context4.prev = _context4.next) {
                                          case 0:
                                            this.info.getAlergiasNative(uspId).then(function (response) {
                                              _this8.procesarAlergias(JSON.parse(response.data), _loader2);
                                            });

                                          case 1:
                                          case "end":
                                            return _context4.stop();
                                        }
                                      }
                                    }, _callee4, this);
                                  }));
                                });

                              case 25:
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
                if (this.indicadorValor[s].Descripcion == 'Altura') {
                  this.valorAltura = this.indicadorValor[s].Valor.toString();

                  if (this.indicadorValor[s].fecha == null) {
                    this.fechaAltura = 'n/a';
                  } else {
                    this.fechaAltura = '3 días';
                  }
                } //peso


                if (this.indicadorValor[s].Descripcion == 'Peso') {
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

          loader.dismiss();
        }
      }, {
        key: "procesarIndicadorValorSinLoader",
        value: function procesarIndicadorValorSinLoader(data) {
          this.indicadorValor = data.IndicadorValorUsp;

          if (this.indicadorValor) {
            if (this.indicadorValor.length > 0) {
              //todo ok
              for (var s in this.indicadorValor) {
                //altura
                if (this.indicadorValor[s].Descripcion == 'Altura') {
                  this.valorAltura = this.indicadorValor[s].Valor.toString();

                  if (this.indicadorValor[s].fecha == null) {
                    this.fechaAltura = 'n/a';
                  } else {
                    this.fechaAltura = '3 días';
                  }
                } //peso


                if (this.indicadorValor[s].Descripcion == 'Peso') {
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
              this.valorPeso = 'No informada';
              this.fechaPeso = 'No informada';
              this.valorImc = 'No informada';
              this.fechaImc = 'No informada';
            }
          }
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