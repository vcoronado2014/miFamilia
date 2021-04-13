function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["seleccion-usuario-seleccion-usuario-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/seleccion-usuario/seleccion-usuario.page.html":
  /*!*****************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/seleccion-usuario/seleccion-usuario.page.html ***!
    \*****************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppSeleccionUsuarioSeleccionUsuarioPageHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ion-header class=\"back-app\">\n  <ion-toolbar color=\"primary\" mode=\"md\">\n    <ion-buttons slot=\"start\">\n      <ion-back-button defaultHref=\"/calendario\" class=\"fcw\"></ion-back-button>\n    </ion-buttons>\n    <ion-title class=\"fcw\">Seleccione usuario</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content class=\"back-app\">\n  <app-progress [mostrar]=\"estaCargando\" titulo=\"Buscando familia\"></app-progress>\n  <!-- si no hay registros -->\n  <div [hidden]=\"estaCargando\" *ngIf=\"hayInfo == false\" style=\"padding-top: 162px; padding-left: 16px; padding-right: 16px; font-size: 30px; color:#BDBDBD; text-align: center;\"><p>No hay familiares para mostrar  <br>\n    <ion-icon name=\"information-circle\" style=\"font-size: 60px;\"></ion-icon></p>\n  </div>\n  <!-- si hay registros -->\n  <div [hidden]=\"estaCargando\" *ngIf=\"listadoUsuario.length > 0\" style=\"padding-top: 32px;\">\n      <div *ngFor=\"let item of listadoUsuario\" (click)=\"irHoras(item)\">\n        <app-avatar [lines]=\"inset\" [urlImagen] = \"item.UrlImagen\" [nombreCompleto]=\"item.Nombres + ' ' + item.ApellidoPaterno + ' ' + item.ApellidoMaterno\" [parentezco]=\"item.Parentezco.Nombre\"></app-avatar>\n      </div>\n  </div>\n</ion-content>\n";
    /***/
  },

  /***/
  "./src/app/seleccion-usuario/seleccion-usuario.module.ts":
  /*!***************************************************************!*\
    !*** ./src/app/seleccion-usuario/seleccion-usuario.module.ts ***!
    \***************************************************************/

  /*! exports provided: SeleccionUsuarioPageModule */

  /***/
  function srcAppSeleccionUsuarioSeleccionUsuarioModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SeleccionUsuarioPageModule", function () {
      return SeleccionUsuarioPageModule;
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


    var _seleccion_usuario_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./seleccion-usuario.page */
    "./src/app/seleccion-usuario/seleccion-usuario.page.ts");
    /* harmony import */


    var _directives_text_avatar_index__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ../../directives/text-avatar/index */
    "./src/directives/text-avatar/index.ts");
    /* harmony import */


    var _components_components_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ../components/components.module */
    "./src/app/components/components.module.ts");

    var SeleccionUsuarioPageModule = function SeleccionUsuarioPageModule() {
      _classCallCheck(this, SeleccionUsuarioPageModule);
    };

    SeleccionUsuarioPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _directives_text_avatar_index__WEBPACK_IMPORTED_MODULE_7__["TextAvatarModule"], _components_components_module__WEBPACK_IMPORTED_MODULE_8__["ComponentsModule"], _angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterModule"].forChild([{
        path: '',
        component: _seleccion_usuario_page__WEBPACK_IMPORTED_MODULE_6__["SeleccionUsuarioPage"]
      }])],
      declarations: [_seleccion_usuario_page__WEBPACK_IMPORTED_MODULE_6__["SeleccionUsuarioPage"]]
    })], SeleccionUsuarioPageModule);
    /***/
  },

  /***/
  "./src/app/seleccion-usuario/seleccion-usuario.page.scss":
  /*!***************************************************************!*\
    !*** ./src/app/seleccion-usuario/seleccion-usuario.page.scss ***!
    \***************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppSeleccionUsuarioSeleccionUsuarioPageScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".text-avatar {\n  font-family: \"Roboto\";\n  letter-spacing: 0.15px;\n  color: #000000DE;\n  font-size: 1em;\n  margin-bottom: 0;\n}\n\n.subtext-avatar {\n  font-family: \"Roboto\";\n  letter-spacing: 0.25px;\n  color: #00000099;\n  font-size: 0.875em;\n  margin-bottom: 0;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2VsZWNjaW9uLXVzdWFyaW8vRjpcXGFwcF9taWZhbWlsaWFfZ2l0XFxtaUZhbWlsaWFfcHJlL3NyY1xcYXBwXFxzZWxlY2Npb24tdXN1YXJpb1xcc2VsZWNjaW9uLXVzdWFyaW8ucGFnZS5zY3NzIiwic3JjL2FwcC9zZWxlY2Npb24tdXN1YXJpby9zZWxlY2Npb24tdXN1YXJpby5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxxQkFBQTtFQUNBLHNCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxjQUFBO0VBQ0EsZ0JBQUE7QUNDSjs7QURDRTtFQUNFLHFCQUFBO0VBQ0Esc0JBQUE7RUFDQSxnQkFBQTtFQUNBLGtCQUFBO0VBQ0EsZ0JBQUE7QUNFSiIsImZpbGUiOiJzcmMvYXBwL3NlbGVjY2lvbi11c3VhcmlvL3NlbGVjY2lvbi11c3VhcmlvLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi50ZXh0LWF2YXRhcntcclxuICAgIGZvbnQtZmFtaWx5OiAnUm9ib3RvJztcclxuICAgIGxldHRlci1zcGFjaW5nOiAwLjE1cHg7XHJcbiAgICBjb2xvcjogIzAwMDAwMERFO1xyXG4gICAgZm9udC1zaXplOiAxZW07XHJcbiAgICBtYXJnaW4tYm90dG9tOiAwO1xyXG4gIH1cclxuICAuc3VidGV4dC1hdmF0YXJ7XHJcbiAgICBmb250LWZhbWlseTogJ1JvYm90byc7XHJcbiAgICBsZXR0ZXItc3BhY2luZzogMC4yNXB4O1xyXG4gICAgY29sb3I6ICMwMDAwMDA5OTtcclxuICAgIGZvbnQtc2l6ZTogMC44NzVlbTtcclxuICAgIG1hcmdpbi1ib3R0b206IDA7XHJcbiAgfSIsIi50ZXh0LWF2YXRhciB7XG4gIGZvbnQtZmFtaWx5OiBcIlJvYm90b1wiO1xuICBsZXR0ZXItc3BhY2luZzogMC4xNXB4O1xuICBjb2xvcjogIzAwMDAwMERFO1xuICBmb250LXNpemU6IDFlbTtcbiAgbWFyZ2luLWJvdHRvbTogMDtcbn1cblxuLnN1YnRleHQtYXZhdGFyIHtcbiAgZm9udC1mYW1pbHk6IFwiUm9ib3RvXCI7XG4gIGxldHRlci1zcGFjaW5nOiAwLjI1cHg7XG4gIGNvbG9yOiAjMDAwMDAwOTk7XG4gIGZvbnQtc2l6ZTogMC44NzVlbTtcbiAgbWFyZ2luLWJvdHRvbTogMDtcbn0iXX0= */";
    /***/
  },

  /***/
  "./src/app/seleccion-usuario/seleccion-usuario.page.ts":
  /*!*************************************************************!*\
    !*** ./src/app/seleccion-usuario/seleccion-usuario.page.ts ***!
    \*************************************************************/

  /*! exports provided: SeleccionUsuarioPage */

  /***/
  function srcAppSeleccionUsuarioSeleccionUsuarioPageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SeleccionUsuarioPage", function () {
      return SeleccionUsuarioPage;
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


    var src_environments_environment__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! src/environments/environment */
    "./src/environments/environment.ts"); //parametros
    //SERVICIOS


    var SeleccionUsuarioPage = /*#__PURE__*/function () {
      function SeleccionUsuarioPage(navCtrl, toast, modalCtrl, platform, menu, activatedRoute, router, utiles, loading) {
        _classCallCheck(this, SeleccionUsuarioPage);

        this.navCtrl = navCtrl;
        this.toast = toast;
        this.modalCtrl = modalCtrl;
        this.platform = platform;
        this.menu = menu;
        this.activatedRoute = activatedRoute;
        this.router = router;
        this.utiles = utiles;
        this.loading = loading; //textColor Directive

        this.textColor = '#FFFFFF'; //color

        this.miColor = '#FF4081'; //otras variables

        this.hayInfo = true;
        this.usuarioApsFamilia = [];
        this.listadoUsuario = [];
        this.estaCargando = false;
      }

      _createClass(SeleccionUsuarioPage, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.cargarDatosIniciales();
        }
      }, {
        key: "cargarDatosIniciales",
        value: function cargarDatosIniciales() {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
            var _this = this;

            var loader;
            return regeneratorRuntime.wrap(function _callee2$(_context2) {
              while (1) {
                switch (_context2.prev = _context2.next) {
                  case 0:
                    this.listadoUsuario = [];
                    this.estaCargando = true;
                    _context2.next = 4;
                    return this.loading.create({
                      cssClass: 'loading-vacio',
                      showBackdrop: false,
                      spinner: null
                    });

                  case 4:
                    loader = _context2.sent;
                    _context2.next = 7;
                    return loader.present().then(function () {
                      return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(_this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
                        var s;
                        return regeneratorRuntime.wrap(function _callee$(_context) {
                          while (1) {
                            switch (_context.prev = _context.next) {
                              case 0:
                                //cargamos mi color
                                this.miColor = this.utiles.entregaMiColor(); //demas cargas

                                if (sessionStorage.UsuarioAps) {
                                  this.usuarioAps = JSON.parse(sessionStorage.UsuarioAps);

                                  if (this.usuarioAps) {
                                    this.usuarioAps.UrlImagen = src_environments_environment__WEBPACK_IMPORTED_MODULE_5__["environment"].URL_FOTOS + this.usuarioAps.UrlImagen; //this.usuarioAps.Parentezco = 'Yo';

                                    if (this.usuarioAps.Parentezco && this.usuarioAps.Parentezco.Id > 0) {
                                      if (this.usuarioAps.Parentezco.Nombre.toUpperCase() == 'LA MISMA PERSONA') {
                                        this.usuarioAps.Parentezco.Nombre = 'Yo';
                                      }
                                    } //this.usuarioAps.Parentezco = 'Yo';

                                  }
                                } else this.usuarioAps = {
                                  Nombres: '',
                                  PrimerApellido: '',
                                  SegundoApellido: '',
                                  UrlImagen: ''
                                }; //manejo de los usuarios de la familia


                                if (localStorage.UsuariosFamilia) {
                                  this.usuarioApsFamilia = JSON.parse(localStorage.UsuariosFamilia);

                                  if (this.usuarioApsFamilia.length > 0) {
                                    for (s in this.usuarioApsFamilia) {
                                      this.usuarioApsFamilia[s].UrlImagen = src_environments_environment__WEBPACK_IMPORTED_MODULE_5__["environment"].URL_FOTOS + this.usuarioApsFamilia[s].UrlImagen;

                                      if (!(this.usuarioApsFamilia[s].Parentezco && this.usuarioApsFamilia[s].Parentezco.Id > 0)) {
                                        this.usuarioApsFamilia[s].Parentezco.Nombre = 'No informado';
                                      } //this.usuarioApsFamilia[s].Parentezco = "No informado";

                                    }
                                  }
                                } //ahora vamos a generar un solo listado de usuarios con los datos que necesitamos


                                if (this.usuarioAps) {
                                  this.listadoUsuario.push(this.usuarioAps);
                                }

                                if (this.usuarioApsFamilia) {
                                  if (this.usuarioApsFamilia.length > 0) {
                                    for (s in this.usuarioApsFamilia) {
                                      this.listadoUsuario.push(this.usuarioApsFamilia[s]);
                                    }
                                  }
                                }

                                if (this.listadoUsuario.length == 0) {
                                  this.hayInfo = false;
                                }

                                loader.dismiss();
                                this.estaCargando = false;

                              case 8:
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
        key: "irHoras",
        value: function irHoras(item) {
          //console.log(item);
          //pasando id
          var navigationExtras = {
            queryParams: {
              Id: item.Id
            }
          };
          this.navCtrl.navigateRoot(['pre-tiposatencion'], navigationExtras);
        }
      }]);

      return SeleccionUsuarioPage;
    }();

    SeleccionUsuarioPage.ctorParameters = function () {
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
      }];
    };

    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('myList', {
      read: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonList"]
    })], SeleccionUsuarioPage.prototype, "list", void 0);
    SeleccionUsuarioPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-seleccion-usuario',
      template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! raw-loader!./seleccion-usuario.page.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/seleccion-usuario/seleccion-usuario.page.html"))["default"],
      styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! ./seleccion-usuario.page.scss */
      "./src/app/seleccion-usuario/seleccion-usuario.page.scss"))["default"]]
    })], SeleccionUsuarioPage);
    /***/
  }
}]);
//# sourceMappingURL=seleccion-usuario-seleccion-usuario-module-es5.js.map