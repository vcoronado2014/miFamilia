function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pre-ordenes-pre-ordenes-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/pre-ordenes/pre-ordenes.page.html":
  /*!*****************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pre-ordenes/pre-ordenes.page.html ***!
    \*****************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppPreOrdenesPreOrdenesPageHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ion-header>\n  <!-- <ion-toolbar [style.--background]=\"miColor\" mode=\"md\"> -->\n  <ion-toolbar color=\"primary\" mode=\"md\">\n    <ion-buttons slot=\"start\">\n      <ion-back-button defaultHref=\"/home\" class=\"fcw\"></ion-back-button>\n    </ion-buttons>\n    <ion-title class=\"fcw\">Exámenes</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content class=\"back-app\">\n  <app-progress [mostrar]=\"estaCargando\" titulo=\"Buscando antecedentes\"></app-progress>\n\n  <div [hidden]=\"estaCargando\" *ngIf=\"listadoUsuario.length <= 0\" style=\"padding-top: 162px; font-size: 30px; color:#BDBDBD; text-align: center;\"><p>No hay antecedentes para mostrar  <br>\n    <ion-icon name=\"information-circle\" style=\"font-size: 60px;\"></ion-icon></p>\n  </div>\n\n  <div style=\"padding-top: 12px;\" [hidden]=\"estaCargando\">\n    <h5 class=\"texto m-16\">Selecciona un integrante de tu familia</h5>\n    <div *ngFor=\"let item of listadoUsuario\" (click)=\"goToDetails(item)\">\n      <!-- poner avatar -->\n      <app-avatar [lines]=\"linesAvatar\" [urlImagen] = \"item.UrlImagen\" [nombreCompleto]=\"item.Nombres + ' ' + item.ApellidoPaterno + ' ' + item.ApellidoMaterno\" [parentezco]=\"item.Parentezco.Nombre\"></app-avatar>\n    </div>\n  </div>\n</ion-content>\n";
    /***/
  },

  /***/
  "./src/app/pre-ordenes/pre-ordenes.module.ts":
  /*!***************************************************!*\
    !*** ./src/app/pre-ordenes/pre-ordenes.module.ts ***!
    \***************************************************/

  /*! exports provided: PreOrdenesPageModule */

  /***/
  function srcAppPreOrdenesPreOrdenesModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "PreOrdenesPageModule", function () {
      return PreOrdenesPageModule;
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


    var _pre_ordenes_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./pre-ordenes.page */
    "./src/app/pre-ordenes/pre-ordenes.page.ts");
    /* harmony import */


    var _components_components_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ../components/components.module */
    "./src/app/components/components.module.ts");

    var PreOrdenesPageModule = function PreOrdenesPageModule() {
      _classCallCheck(this, PreOrdenesPageModule);
    };

    PreOrdenesPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _components_components_module__WEBPACK_IMPORTED_MODULE_7__["ComponentsModule"], _angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterModule"].forChild([{
        path: '',
        component: _pre_ordenes_page__WEBPACK_IMPORTED_MODULE_6__["PreOrdenesPage"]
      }])],
      declarations: [_pre_ordenes_page__WEBPACK_IMPORTED_MODULE_6__["PreOrdenesPage"]]
    })], PreOrdenesPageModule);
    /***/
  },

  /***/
  "./src/app/pre-ordenes/pre-ordenes.page.scss":
  /*!***************************************************!*\
    !*** ./src/app/pre-ordenes/pre-ordenes.page.scss ***!
    \***************************************************/

  /*! exports provided: default */

  /***/
  function srcAppPreOrdenesPreOrdenesPageScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".texto {\n  color: #000000DE;\n  letter-spacing: 0.1pt;\n  font-size: 14pt;\n  font-weight: 500;\n}\n\n.mt-28 {\n  margin-top: 28px;\n}\n\n.m-16 {\n  margin: 16px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcHJlLW9yZGVuZXMvQzpcXERpc2NvIEZcXGFwcF9taWZhbWlsaWFfZ2l0XFxtaUZhbWlsaWFfcHJlL3NyY1xcYXBwXFxwcmUtb3JkZW5lc1xccHJlLW9yZGVuZXMucGFnZS5zY3NzIiwic3JjL2FwcC9wcmUtb3JkZW5lcy9wcmUtb3JkZW5lcy5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxnQkFBQTtFQUNBLHFCQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0FDQ0o7O0FEQ0E7RUFDSSxnQkFBQTtBQ0VKOztBREFBO0VBQ0ksWUFBQTtBQ0dKIiwiZmlsZSI6InNyYy9hcHAvcHJlLW9yZGVuZXMvcHJlLW9yZGVuZXMucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnRleHRve1xyXG4gICAgY29sb3I6ICMwMDAwMDBERTtcclxuICAgIGxldHRlci1zcGFjaW5nOiAwLjFwdDtcclxuICAgIGZvbnQtc2l6ZTogMTRwdDtcclxuICAgIGZvbnQtd2VpZ2h0OiA1MDA7XHJcbn1cclxuLm10LTI4e1xyXG4gICAgbWFyZ2luLXRvcDogMjhweDtcclxufVxyXG4ubS0xNntcclxuICAgIG1hcmdpbjogMTZweDtcclxufSIsIi50ZXh0byB7XG4gIGNvbG9yOiAjMDAwMDAwREU7XG4gIGxldHRlci1zcGFjaW5nOiAwLjFwdDtcbiAgZm9udC1zaXplOiAxNHB0O1xuICBmb250LXdlaWdodDogNTAwO1xufVxuXG4ubXQtMjgge1xuICBtYXJnaW4tdG9wOiAyOHB4O1xufVxuXG4ubS0xNiB7XG4gIG1hcmdpbjogMTZweDtcbn0iXX0= */";
    /***/
  },

  /***/
  "./src/app/pre-ordenes/pre-ordenes.page.ts":
  /*!*************************************************!*\
    !*** ./src/app/pre-ordenes/pre-ordenes.page.ts ***!
    \*************************************************/

  /*! exports provided: PreOrdenesPage */

  /***/
  function srcAppPreOrdenesPreOrdenesPageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "PreOrdenesPage", function () {
      return PreOrdenesPage;
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


    var _app_services_ServicioUtiles__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../../app/services/ServicioUtiles */
    "./src/app/services/ServicioUtiles.ts");
    /* harmony import */


    var _app_services_ServicioAcceso__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../../app/services/ServicioAcceso */
    "./src/app/services/ServicioAcceso.ts");
    /* harmony import */


    var _app_services_ServicioParametrosApp__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ../../app/services/ServicioParametrosApp */
    "./src/app/services/ServicioParametrosApp.ts");

    var PreOrdenesPage = /*#__PURE__*/function () {
      function PreOrdenesPage(navCtrl, toast, modalCtrl, platform, loading, menu, utiles, acceso, parametrosApp) {
        _classCallCheck(this, PreOrdenesPage);

        this.navCtrl = navCtrl;
        this.toast = toast;
        this.modalCtrl = modalCtrl;
        this.platform = platform;
        this.loading = loading;
        this.menu = menu;
        this.utiles = utiles;
        this.acceso = acceso;
        this.parametrosApp = parametrosApp;
        this.miColor = '#FF4081';
        this.usuarioApsFamilia = [];
        this.listadoUsuario = [];
        this.linesAvatar = 'inset';
        this.estaCargando = false;
      }

      _createClass(PreOrdenesPage, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.cargarDatosInciales();
        }
      }, {
        key: "cargarDatosInciales",
        value: function cargarDatosInciales() {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
            var _this = this;

            var loader;
            return regeneratorRuntime.wrap(function _callee2$(_context2) {
              while (1) {
                switch (_context2.prev = _context2.next) {
                  case 0:
                    this.estaCargando = true;
                    _context2.next = 3;
                    return this.loading.create({
                      cssClass: 'loading-vacio',
                      showBackdrop: false,
                      spinner: null
                    });

                  case 3:
                    loader = _context2.sent;
                    _context2.next = 6;
                    return loader.present().then(function () {
                      return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(_this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
                        var s;
                        return regeneratorRuntime.wrap(function _callee$(_context) {
                          while (1) {
                            switch (_context.prev = _context.next) {
                              case 0:
                                if (sessionStorage.UsuarioAps) {
                                  this.usuarioAps = JSON.parse(sessionStorage.UsuarioAps);

                                  if (this.usuarioAps) {
                                    //this.usuarioAps.UrlImagen = this.utiles.entregaMiImagen();
                                    this.usuarioAps.UrlImagen = this.utiles.entregaImagen(this.usuarioAps);
                                    this.usuarioAps.Color = this.utiles.entregaColor(this.usuarioAps);
                                    this.miColor = this.utiles.entregaColor(this.usuarioAps);
                                  }
                                } else {
                                  this.usuarioAps = {
                                    Nombres: '',
                                    PrimerApellido: '',
                                    SegundoApellido: '',
                                    UrlImagen: ''
                                  };
                                } //manejo de los usuarios de la familia


                                if (localStorage.UsuariosFamilia) {
                                  this.usuarioApsFamilia = JSON.parse(localStorage.UsuariosFamilia);

                                  if (this.usuarioApsFamilia.length > 0) {
                                    for (s in this.usuarioApsFamilia) {
                                      this.usuarioApsFamilia[s].UrlImagen = this.utiles.entregaImagen(this.usuarioApsFamilia[s]);
                                      this.usuarioApsFamilia[s].Color = this.utiles.entregaColor(this.usuarioApsFamilia[s]);
                                    }
                                  }
                                } //ahora vamos a generar un solo listado de usuarios con los datos que necesitamos


                                if (this.usuarioAps) {
                                  if (this.usuarioAps.Parentezco && this.usuarioAps.Parentezco.Id > 0) {
                                    if (this.usuarioAps.Parentezco.Nombre.toUpperCase() == 'LA MISMA PERSONA') {
                                      this.usuarioAps.Parentezco.Nombre = 'Yo';
                                    }
                                  } else {
                                    this.usuarioAps.Parentezco.Nombre = 'Yo';
                                  } //this.usuarioAps.Parentezco = "Yo";


                                  this.listadoUsuario.push(this.usuarioAps);
                                }

                                if (this.usuarioApsFamilia) {
                                  if (this.usuarioApsFamilia.length > 0) {
                                    for (s in this.usuarioApsFamilia) {
                                      //por mientras el parentezco lo dejamos como no informado.
                                      if (!(this.usuarioApsFamilia[s].Parentezco && this.usuarioApsFamilia[s].Parentezco.Id > 0)) {
                                        this.usuarioApsFamilia[s].Parentezco.Nombre = 'No informado';
                                      } //this.usuarioApsFamilia[s].Parentezco = "No informado";


                                      this.listadoUsuario.push(this.usuarioApsFamilia[s]);
                                    }
                                  }
                                }

                                loader.dismiss();
                                this.estaCargando = false;

                              case 6:
                              case "end":
                                return _context.stop();
                            }
                          }
                        }, _callee, this);
                      }));
                    });

                  case 6:
                  case "end":
                    return _context2.stop();
                }
              }
            }, _callee2, this);
          }));
        }
      }, {
        key: "goToDetails",
        value: function goToDetails(usuario) {
          var navigationExtras = {
            queryParams: {
              usuario: JSON.stringify(usuario)
            }
          };
          this.navCtrl.navigateRoot(['ordenes'], navigationExtras);
        }
      }]);

      return PreOrdenesPage;
    }();

    PreOrdenesPage.ctorParameters = function () {
      return [{
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ToastController"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ModalController"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["Platform"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["LoadingController"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["MenuController"]
      }, {
        type: _app_services_ServicioUtiles__WEBPACK_IMPORTED_MODULE_3__["ServicioUtiles"]
      }, {
        type: _app_services_ServicioAcceso__WEBPACK_IMPORTED_MODULE_4__["ServicioAcceso"]
      }, {
        type: _app_services_ServicioParametrosApp__WEBPACK_IMPORTED_MODULE_5__["ServicioParametrosApp"]
      }];
    };

    PreOrdenesPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-pre-ordenes',
      template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! raw-loader!./pre-ordenes.page.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/pre-ordenes/pre-ordenes.page.html"))["default"],
      styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! ./pre-ordenes.page.scss */
      "./src/app/pre-ordenes/pre-ordenes.page.scss"))["default"]]
    })], PreOrdenesPage);
    /***/
  }
}]);
//# sourceMappingURL=pre-ordenes-pre-ordenes-module-es5.js.map