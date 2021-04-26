function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["ajustes-familia-ajustes-familia-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/ajustes-familia/ajustes-familia.page.html":
  /*!*************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/ajustes-familia/ajustes-familia.page.html ***!
    \*************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppAjustesFamiliaAjustesFamiliaPageHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ion-header class=\"back-app\">\n  <ion-toolbar color=\"primary\" mode=\"md\">\n    <ion-buttons slot=\"start\">\n      <ion-back-button defaultHref=\"/familia\" class=\"fcw\"></ion-back-button>\n    </ion-buttons>\n    <ion-title class=\"fcw\">Ajustes {{nombrePaciente}}</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content class=\"back-app\">\n  <!-- la imagen -->\n  <ion-card>\n    <ion-card-header>\n      <ion-card-title>Mi imagen</ion-card-title>\n    </ion-card-header>\n    <ion-card-content>\n      <div>\n        <img [src]=\"image\" *ngIf=\"image\" />\n      </div>\n    </ion-card-content>\n  </ion-card>\n  <!-- control abrir archivos si es que tiene registro -->\n  <ion-list lines=\"none\" *ngIf=\"tieneRegistro\">\n    <ion-item>\n      <ion-note id=\"profile_image\" color=\"primary\">Seleccione el archivo</ion-note>\n    </ion-item>\n    <ion-item>\n      <ion-input  type=\"file\" accept=\"image/*\" (change)=\"changeListener($event)\"></ion-input>\n    </ion-item>\n  </ion-list>\n  <!-- si no tiene registro -->\n  <ion-item *ngIf=\"!tieneRegistro\">\n    No puede editar ya que no se encuentra registrado\n  </ion-item>\n</ion-content>\n";
    /***/
  },

  /***/
  "./src/app/ajustes-familia/ajustes-familia.module.ts":
  /*!***********************************************************!*\
    !*** ./src/app/ajustes-familia/ajustes-familia.module.ts ***!
    \***********************************************************/

  /*! exports provided: AjustesFamiliaPageModule */

  /***/
  function srcAppAjustesFamiliaAjustesFamiliaModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AjustesFamiliaPageModule", function () {
      return AjustesFamiliaPageModule;
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


    var _ajustes_familia_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./ajustes-familia.page */
    "./src/app/ajustes-familia/ajustes-familia.page.ts");
    /* harmony import */


    var _components_components_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ../components/components.module */
    "./src/app/components/components.module.ts");

    var AjustesFamiliaPageModule = function AjustesFamiliaPageModule() {
      _classCallCheck(this, AjustesFamiliaPageModule);
    };

    AjustesFamiliaPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _components_components_module__WEBPACK_IMPORTED_MODULE_7__["ComponentsModule"], _angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterModule"].forChild([{
        path: '',
        component: _ajustes_familia_page__WEBPACK_IMPORTED_MODULE_6__["AjustesFamiliaPage"]
      }])],
      declarations: [_ajustes_familia_page__WEBPACK_IMPORTED_MODULE_6__["AjustesFamiliaPage"]]
    })], AjustesFamiliaPageModule);
    /***/
  },

  /***/
  "./src/app/ajustes-familia/ajustes-familia.page.scss":
  /*!***********************************************************!*\
    !*** ./src/app/ajustes-familia/ajustes-familia.page.scss ***!
    \***********************************************************/

  /*! exports provided: default */

  /***/
  function srcAppAjustesFamiliaAjustesFamiliaPageScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FqdXN0ZXMtZmFtaWxpYS9hanVzdGVzLWZhbWlsaWEucGFnZS5zY3NzIn0= */";
    /***/
  },

  /***/
  "./src/app/ajustes-familia/ajustes-familia.page.ts":
  /*!*********************************************************!*\
    !*** ./src/app/ajustes-familia/ajustes-familia.page.ts ***!
    \*********************************************************/

  /*! exports provided: AjustesFamiliaPage */

  /***/
  function srcAppAjustesFamiliaAjustesFamiliaPageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AjustesFamiliaPage", function () {
      return AjustesFamiliaPage;
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
    "./src/environments/environment.ts");
    /* harmony import */


    var _services_ServicioImagen__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ../services/ServicioImagen */
    "./src/app/services/ServicioImagen.ts"); //SERVICIOS


    var AjustesFamiliaPage = /*#__PURE__*/function () {
      function AjustesFamiliaPage(modalCtrl, utiles, navCtrl, toast, platform, menu, loading, img, activatedRoute, router) {
        _classCallCheck(this, AjustesFamiliaPage);

        this.modalCtrl = modalCtrl;
        this.utiles = utiles;
        this.navCtrl = navCtrl;
        this.toast = toast;
        this.platform = platform;
        this.menu = menu;
        this.loading = loading;
        this.img = img;
        this.activatedRoute = activatedRoute;
        this.router = router;
        this.image = null;
        this.lastImage = null;
        this.nombrePaciente = '';
        this.color = "#127bdc"; //ACA QUEDE, ESTOY ARMANDO LA PANTALLA DE AJUSTES
        //color

        this.miColor = '#FF4081';
        this.tieneRegistro = false;
      }

      _createClass(AjustesFamiliaPage, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this = this;

          if (localStorage.getItem('TIENE_REGISTRO')) {
            if (localStorage.getItem('TIENE_REGISTRO').toLowerCase() == 'true') {
              this.tieneRegistro = true;
            }
          } //obtener de query params


          this.activatedRoute.queryParams.subscribe(function (params) {
            if (params && params.usuario) {
              _this.usuarioAps = JSON.parse(params.usuario);
              _this.image = _this.usuarioAps.UrlImagen;
              _this.miColor = _this.utiles.entregaColor(_this.usuarioAps);
              _this.color = _this.miColor; //this.usuarioAps.Color;

              _this.nombrePaciente = _this.usuarioAps.Nombres + ' ' + _this.usuarioAps.ApellidoPaterno + ' ' + _this.usuarioAps.ApellidoMaterno; //console.log(this.usuarioAps);
            }
          });
        }
      }, {
        key: "setColor",
        value: function setColor(color) {
          this.color = color;
        }
      }, {
        key: "changeListener",
        value: function changeListener($event) {
          this.fileP = $event.target.files[0];

          if (this.fileP) {
            if (this.fileP.size <= 2048000) {
              this.putImagen(this.fileP);
            } else {
              //this.presentToast('El tamaño de la imágen excede el máximo permitido.'); 
              this.utiles.presentToast('El tamaño de la imágen excede el máximo permitido.', 'center', 3000);
            }
          } else {
            //this.presentToast('No ha seleccionado ninguna imágen válida.'); 
            this.utiles.presentToast('No ha seleccionado ninguna imágen válida.', 'center', 3000);
          }
        }
      }, {
        key: "putImagen",
        value: function putImagen(files) {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
            var _this2 = this;

            var uspId, loader;
            return regeneratorRuntime.wrap(function _callee2$(_context2) {
              while (1) {
                switch (_context2.prev = _context2.next) {
                  case 0:
                    uspId = this.usuarioAps.Id.toString(); //console.log(files.size);

                    _context2.next = 3;
                    return this.loading.create({
                      message: 'Guardando...<br>Imagen del usuario.',
                      duration: 20000
                    });

                  case 3:
                    loader = _context2.sent;
                    _context2.next = 6;
                    return loader.present().then(function () {
                      return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(_this2, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
                        var _this3 = this;

                        return regeneratorRuntime.wrap(function _callee$(_context) {
                          while (1) {
                            switch (_context.prev = _context.next) {
                              case 0:
                                if (!this.utiles.isAppOnDevice()) {
                                  //llamada web
                                  this.img.putImagen(uspId, files).subscribe(function (data) {
                                    if (data) {
                                      _this3.image = src_environments_environment__WEBPACK_IMPORTED_MODULE_5__["environment"].URL_FOTOS + data; //cambiar la imagen del usuario aps
                                      //o de la familia

                                      if (_this3.usuarioAps) {
                                        if (_this3.usuarioAps.UrlImagen) {
                                          //dejamos al usuario con la nueva imagen
                                          _this3.usuarioAps.UrlImagen = src_environments_environment__WEBPACK_IMPORTED_MODULE_5__["environment"].URL_FOTOS + data;
                                        }
                                      }

                                      if (sessionStorage.UsuarioAps) {
                                        var nuevoUsuarioAps = JSON.parse(sessionStorage.UsuarioAps); //cambiamos este elemento solo si el usuario existe

                                        if (nuevoUsuarioAps.Id == uspId) {
                                          //nuevoUsuarioAps.UrlImagen = environment.URL_FOTOS + data;
                                          nuevoUsuarioAps.UrlImagen = data; //debemos guardar el objeto serializado

                                          sessionStorage.setItem('UsuarioAps', JSON.stringify(nuevoUsuarioAps));
                                        } else {
                                          //si no es el mismo hay que buscarlo en la lista de familia y cambiarlo
                                          var usuariosFamilia = JSON.parse(localStorage.getItem('UsuariosFamilia'));

                                          if (usuariosFamilia && usuariosFamilia.length > 0) {
                                            usuariosFamilia.forEach(function (usuario) {
                                              if (usuario.Id == uspId) {
                                                //usuario.UrlImagen = environment.URL_FOTOS + data;
                                                usuario.UrlImagen = data;
                                              }
                                            }); //ahora serializamos y cambiamos

                                            localStorage.setItem('UsuariosFamilia', JSON.stringify(usuariosFamilia));
                                          }
                                        }
                                      }
                                    } //terminamos loader


                                    loader.dismiss();
                                  });
                                } else {
                                  //lamada nativa
                                  this.img.putImagenNative(uspId, files).then(function (data) {
                                    if (data) {
                                      _this3.image = src_environments_environment__WEBPACK_IMPORTED_MODULE_5__["environment"].URL_FOTOS + JSON.parse(data.data); //cambiar la imagen del usuario aps
                                      //o de la familia

                                      if (_this3.usuarioAps) {
                                        if (_this3.usuarioAps.UrlImagen) {
                                          //dejamos al usuario con la nueva imagen
                                          _this3.usuarioAps.UrlImagen = src_environments_environment__WEBPACK_IMPORTED_MODULE_5__["environment"].URL_FOTOS + JSON.parse(data.data);
                                        }
                                      }

                                      if (sessionStorage.UsuarioAps) {
                                        var nuevoUsuarioAps = JSON.parse(sessionStorage.UsuarioAps); //cambiamos este elemento solo si el usuario existe

                                        if (nuevoUsuarioAps.Id == uspId) {
                                          nuevoUsuarioAps.UrlImagen = JSON.parse(data.data); //debemos guardar el objeto serializado

                                          sessionStorage.setItem('UsuarioAps', JSON.stringify(nuevoUsuarioAps));
                                        } else {
                                          //si no es el mismo hay que buscarlo en la lista de familia y cambiarlo
                                          var usuariosFamilia = JSON.parse(localStorage.getItem('UsuariosFamilia'));

                                          if (usuariosFamilia && usuariosFamilia.length > 0) {
                                            usuariosFamilia.forEach(function (usuario) {
                                              if (usuario.Id == uspId) {
                                                usuario.UrlImagen = JSON.parse(data.data);
                                              }
                                            }); //ahora serializamos y cambiamos

                                            localStorage.setItem('UsuariosFamilia', JSON.stringify(usuariosFamilia));
                                          }
                                        }
                                      }
                                    } //terminamos loader


                                    loader.dismiss();
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

                  case 6:
                  case "end":
                    return _context2.stop();
                }
              }
            }, _callee2, this);
          }));
        }
      }, {
        key: "putColor",
        value: function putColor() {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee4() {
            var _this4 = this;

            var uspId, colorGuardar, loader;
            return regeneratorRuntime.wrap(function _callee4$(_context4) {
              while (1) {
                switch (_context4.prev = _context4.next) {
                  case 0:
                    uspId = this.usuarioAps.Id.toString();
                    colorGuardar = this.color;
                    _context4.next = 4;
                    return this.loading.create({
                      message: 'Guardando...<br>Color del usuario.',
                      duration: 20000
                    });

                  case 4:
                    loader = _context4.sent;
                    _context4.next = 7;
                    return loader.present().then(function () {
                      return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(_this4, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee3() {
                        var _this5 = this;

                        return regeneratorRuntime.wrap(function _callee3$(_context3) {
                          while (1) {
                            switch (_context3.prev = _context3.next) {
                              case 0:
                                if (!this.utiles.isAppOnDevice()) {
                                  //llamada web
                                  this.img.putColor(uspId, colorGuardar).subscribe(function (data) {
                                    if (data) {
                                      _this5.color = data;

                                      if (_this5.usuarioAps) {
                                        if (_this5.usuarioAps.Color) {
                                          //dejamos al usuario con la nueva imagen
                                          _this5.usuarioAps.Color = data;
                                        }
                                      }

                                      if (sessionStorage.UsuarioAps) {
                                        var nuevoUsuarioAps = JSON.parse(sessionStorage.UsuarioAps); //cambiamos este elemento solo si el usuario existe

                                        if (nuevoUsuarioAps.Id == uspId) {
                                          nuevoUsuarioAps.Color = data;
                                          sessionStorage.setItem('UsuarioAps', JSON.stringify(nuevoUsuarioAps));
                                        } else {
                                          //si no es el mismo hay que buscarlo en la lista de familia y cambiarlo
                                          var usuariosFamilia = JSON.parse(localStorage.getItem('UsuariosFamilia'));

                                          if (usuariosFamilia && usuariosFamilia.length > 0) {
                                            usuariosFamilia.forEach(function (usuario) {
                                              if (usuario.Id == uspId) {
                                                usuario.Color = data;
                                              }
                                            }); //ahora serializamos y cambiamos

                                            localStorage.setItem('UsuariosFamilia', JSON.stringify(usuariosFamilia));
                                          }
                                        }
                                      }

                                      localStorage.setItem('MI_COLOR', data);
                                    } //terminamos loader


                                    loader.dismiss();
                                  });
                                } else {
                                  //lamada nativa
                                  this.img.putColorNative(uspId, colorGuardar).then(function (data) {
                                    if (data) {
                                      _this5.utiles.cambiaColorLocalStorage(JSON.parse(data.data));

                                      _this5.color = JSON.parse(data.data);

                                      if (_this5.usuarioAps) {
                                        if (_this5.usuarioAps.Color) {
                                          //dejamos al usuario con la nueva imagen
                                          _this5.usuarioAps.Color = JSON.parse(data.data);
                                        }
                                      }

                                      if (sessionStorage.UsuarioAps) {
                                        var nuevoUsuarioAps = JSON.parse(sessionStorage.UsuarioAps); //cambiamos este elemento solo si el usuario existe

                                        if (nuevoUsuarioAps.Id == uspId) {
                                          nuevoUsuarioAps.Color = JSON.parse(data.data);
                                          sessionStorage.setItem('UsuarioAps', JSON.stringify(nuevoUsuarioAps));
                                        } else {
                                          //si no es el mismo hay que buscarlo en la lista de familia y cambiarlo
                                          var usuariosFamilia = JSON.parse(localStorage.getItem('UsuariosFamilia'));

                                          if (usuariosFamilia && usuariosFamilia.length > 0) {
                                            usuariosFamilia.forEach(function (usuario) {
                                              if (usuario.Id == uspId) {
                                                usuario.Color = JSON.parse(data.data);
                                              }
                                            }); //ahora serializamos y cambiamos

                                            localStorage.setItem('UsuariosFamilia', JSON.stringify(usuariosFamilia));
                                          }
                                        }
                                      }
                                    } //terminamos loader


                                    loader.dismiss();
                                  }, function (error) {
                                    loader.dismiss();

                                    _this5.utiles.presentToast(error, 'bottom', 4000);
                                  });
                                }

                              case 1:
                              case "end":
                                return _context3.stop();
                            }
                          }
                        }, _callee3, this);
                      }));
                    });

                  case 7:
                  case "end":
                    return _context4.stop();
                }
              }
            }, _callee4, this);
          }));
        }
      }, {
        key: "abrirEditar",
        value: function abrirEditar() {
          //debemos pasar al usuario 
          var query = {
            usuario: null
          };
          query = {
            usuario: JSON.stringify(this.usuarioAps)
          };
          var navigationExtras = {
            queryParams: query
          };
          this.navCtrl.navigateRoot(['contactabilidad'], navigationExtras);
        }
      }]);

      return AjustesFamiliaPage;
    }();

    AjustesFamiliaPage.ctorParameters = function () {
      return [{
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ModalController"]
      }, {
        type: _app_services_ServicioUtiles__WEBPACK_IMPORTED_MODULE_4__["ServicioUtiles"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ToastController"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["Platform"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["MenuController"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["LoadingController"]
      }, {
        type: _services_ServicioImagen__WEBPACK_IMPORTED_MODULE_6__["ServicioImagen"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]
      }];
    };

    AjustesFamiliaPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-ajustes-familia',
      template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! raw-loader!./ajustes-familia.page.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/ajustes-familia/ajustes-familia.page.html"))["default"],
      styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! ./ajustes-familia.page.scss */
      "./src/app/ajustes-familia/ajustes-familia.page.scss"))["default"]]
    })], AjustesFamiliaPage);
    /***/
  }
}]);
//# sourceMappingURL=ajustes-familia-ajustes-familia-module-es5.js.map