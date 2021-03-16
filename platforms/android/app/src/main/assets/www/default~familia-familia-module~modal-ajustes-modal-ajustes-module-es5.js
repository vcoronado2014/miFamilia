function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["default~familia-familia-module~modal-ajustes-modal-ajustes-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/modal-ajustes/modal-ajustes.page.html":
  /*!*********************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modal-ajustes/modal-ajustes.page.html ***!
    \*********************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppModalAjustesModalAjustesPageHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ion-header>\r\n  <ion-toolbar color=\"primary\">\r\n    <ion-title class=\"home\">Ajustes {{nombrePaciente}}</ion-title>\r\n    <ion-buttons slot=\"end\" class=\"pdr10\" (click)=\"dismiss()\">\r\n      <ion-icon class=\"home\" slot=\"icon-only\" name=\"close\"></ion-icon>\r\n    </ion-buttons>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content class=\"back-app\">\r\n  <!-- la imagen -->\r\n  <ion-card>\r\n    <ion-card-header>\r\n     <!--  <ion-card-subtitle>Card Subtitle</ion-card-subtitle> -->\r\n      <ion-card-title>Mi imagen</ion-card-title>\r\n    </ion-card-header>\r\n    <ion-card-content>\r\n      <div>\r\n        <img [src]=\"image\" *ngIf=\"image\" />\r\n      </div>\r\n    </ion-card-content>\r\n  </ion-card>\r\n  <!-- control abrir archivos si es que tiene registro -->\r\n  <ion-list lines=\"none\" *ngIf=\"tieneRegistro\">\r\n    <ion-item>\r\n      <ion-note id=\"profile_image\" color=\"primary\">Seleccione el archivo</ion-note>\r\n    </ion-item>\r\n    <ion-item>\r\n      <ion-input  type=\"file\" accept=\"image/*\" (change)=\"changeListener($event)\"></ion-input>\r\n    </ion-item>\r\n  </ion-list>\r\n  <!-- si no tiene registro -->\r\n  <ion-item *ngIf=\"!tieneRegistro\">\r\n    No puede editar ya que no se encuentra registrado\r\n  </ion-item>\r\n  <ion-row class=\"ion-padding\">\r\n          <button mat-raised-button color=\"primary\" (click)=\"abrirEditar()\" style=\"width: 90%; margin-left: 5%; height:36px;background: #3880ff;color:white;\" >Cambiar datos de contacto</button>\r\n  </ion-row>\r\n</ion-content>\r\n";
    /***/
  },

  /***/
  "./src/app/modal-ajustes/modal-ajustes.page.scss":
  /*!*******************************************************!*\
    !*** ./src/app/modal-ajustes/modal-ajustes.page.scss ***!
    \*******************************************************/

  /*! exports provided: default */

  /***/
  function srcAppModalAjustesModalAjustesPageScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".label-seleccione {\n  font-size: 0.8em;\n}\n\n.button-registrarse {\n  width: 80%;\n  margin-left: 10%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbW9kYWwtYWp1c3Rlcy9GOlxcYXBwX21pZmFtaWxpYV9naXRcXG1pRmFtaWxpYV9wcmUvc3JjXFxhcHBcXG1vZGFsLWFqdXN0ZXNcXG1vZGFsLWFqdXN0ZXMucGFnZS5zY3NzIiwic3JjL2FwcC9tb2RhbC1hanVzdGVzL21vZGFsLWFqdXN0ZXMucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksZ0JBQUE7QUNDSjs7QURDQTtFQUNJLFVBQUE7RUFDQSxnQkFBQTtBQ0VKIiwiZmlsZSI6InNyYy9hcHAvbW9kYWwtYWp1c3Rlcy9tb2RhbC1hanVzdGVzLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5sYWJlbC1zZWxlY2Npb25le1xyXG4gICAgZm9udC1zaXplOiAwLjhlbTtcclxufVxyXG4uYnV0dG9uLXJlZ2lzdHJhcnNle1xyXG4gICAgd2lkdGg6IDgwJTtcclxuICAgIG1hcmdpbi1sZWZ0OiAxMCU7XHJcbn0iLCIubGFiZWwtc2VsZWNjaW9uZSB7XG4gIGZvbnQtc2l6ZTogMC44ZW07XG59XG5cbi5idXR0b24tcmVnaXN0cmFyc2Uge1xuICB3aWR0aDogODAlO1xuICBtYXJnaW4tbGVmdDogMTAlO1xufSJdfQ== */";
    /***/
  },

  /***/
  "./src/app/modal-ajustes/modal-ajustes.page.ts":
  /*!*****************************************************!*\
    !*** ./src/app/modal-ajustes/modal-ajustes.page.ts ***!
    \*****************************************************/

  /*! exports provided: ModalAjustesPage */

  /***/
  function srcAppModalAjustesModalAjustesPageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ModalAjustesPage", function () {
      return ModalAjustesPage;
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


    var src_environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! src/environments/environment */
    "./src/environments/environment.ts");
    /* harmony import */


    var _services_ServicioImagen__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ../services/ServicioImagen */
    "./src/app/services/ServicioImagen.ts"); //SERVICIOS


    var ModalAjustesPage = /*#__PURE__*/function () {
      function ModalAjustesPage(modalCtrl, navParams, utiles, navCtrl, toast, platform, menu, loading, img) {
        _classCallCheck(this, ModalAjustesPage);

        this.modalCtrl = modalCtrl;
        this.navParams = navParams;
        this.utiles = utiles;
        this.navCtrl = navCtrl;
        this.toast = toast;
        this.platform = platform;
        this.menu = menu;
        this.loading = loading;
        this.img = img;
        this.image = null;
        this.lastImage = null;
        this.nombrePaciente = '';
        this.color = "#127bdc"; //ACA QUEDE, ESTOY ARMANDO LA PANTALLA DE AJUSTES
        //color

        this.miColor = '#FF4081';
        this.tieneRegistro = false;
      }

      _createClass(ModalAjustesPage, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          //this.miColor = this.utiles.entregaMiColor();
          if (localStorage.getItem('TIENE_REGISTRO')) {
            if (localStorage.getItem('TIENE_REGISTRO').toLowerCase() == 'true') {
              this.tieneRegistro = true;
            }
          }

          this.usuarioAps = JSON.parse(this.navParams.get('usuario'));
          this.image = this.usuarioAps.UrlImagen;
          this.miColor = this.utiles.entregaColor(this.usuarioAps);
          this.color = this.miColor; //this.usuarioAps.Color;

          this.nombrePaciente = this.usuarioAps.Nombres + ' ' + this.usuarioAps.ApellidoPaterno + ' ' + this.usuarioAps.ApellidoMaterno;
          console.log(this.usuarioAps);
        }
      }, {
        key: "dismiss",
        value: function dismiss() {
          this.modalCtrl.dismiss();
        }
      }, {
        key: "setColor",
        value: function setColor(color) {
          this.color = color;
        }
      }, {
        key: "changeListener",
        value: function changeListener($event) {
          //lo comentamos por mientras

          /*     if (!this.utiles.isAppOnDevice()){
                this.utiles.presentToast('Esta operación no esta permitida', 'center', 3000);
                return;
              }
              else { */
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
          /*  } */

        }
      }, {
        key: "putImagen",
        value: function putImagen(files) {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
            var _this = this;

            var uspId, loader;
            return regeneratorRuntime.wrap(function _callee2$(_context2) {
              while (1) {
                switch (_context2.prev = _context2.next) {
                  case 0:
                    uspId = this.usuarioAps.Id.toString();
                    console.log(files.size);
                    _context2.next = 4;
                    return this.loading.create({
                      message: 'Guardando...<br>Imagen del usuario.',
                      duration: 20000
                    });

                  case 4:
                    loader = _context2.sent;
                    _context2.next = 7;
                    return loader.present().then(function () {
                      return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(_this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
                        var _this2 = this;

                        return regeneratorRuntime.wrap(function _callee$(_context) {
                          while (1) {
                            switch (_context.prev = _context.next) {
                              case 0:
                                if (!this.utiles.isAppOnDevice()) {
                                  //llamada web
                                  this.img.putImagen(uspId, files).subscribe(function (data) {
                                    if (data) {
                                      _this2.image = src_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].URL_FOTOS + data; //cambiar la imagen del usuario aps
                                      //o de la familia

                                      if (_this2.usuarioAps) {
                                        if (_this2.usuarioAps.UrlImagen) {
                                          //dejamos al usuario con la nueva imagen
                                          _this2.usuarioAps.UrlImagen = src_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].URL_FOTOS + data;
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
                                          var usuariosFamilia = JSON.parse(sessionStorage.getItem('UsuariosFamilia'));

                                          if (usuariosFamilia && usuariosFamilia.length > 0) {
                                            usuariosFamilia.forEach(function (usuario) {
                                              if (usuario.Id == uspId) {
                                                //usuario.UrlImagen = environment.URL_FOTOS + data;
                                                usuario.UrlImagen = data;
                                              }
                                            }); //ahora serializamos y cambiamos

                                            sessionStorage.setItem('UsuariosFamilia', JSON.stringify(usuariosFamilia));
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
                                      _this2.image = src_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].URL_FOTOS + JSON.parse(data.data); //cambiar la imagen del usuario aps
                                      //o de la familia

                                      if (_this2.usuarioAps) {
                                        if (_this2.usuarioAps.UrlImagen) {
                                          //dejamos al usuario con la nueva imagen
                                          _this2.usuarioAps.UrlImagen = src_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].URL_FOTOS + JSON.parse(data.data);
                                        }
                                      }

                                      if (sessionStorage.UsuarioAps) {
                                        var nuevoUsuarioAps = JSON.parse(sessionStorage.UsuarioAps); //cambiamos este elemento solo si el usuario existe

                                        if (nuevoUsuarioAps.Id == uspId) {
                                          nuevoUsuarioAps.UrlImagen = JSON.parse(data.data); //debemos guardar el objeto serializado

                                          sessionStorage.setItem('UsuarioAps', JSON.stringify(nuevoUsuarioAps));
                                        } else {
                                          //si no es el mismo hay que buscarlo en la lista de familia y cambiarlo
                                          var usuariosFamilia = JSON.parse(sessionStorage.getItem('UsuariosFamilia'));

                                          if (usuariosFamilia && usuariosFamilia.length > 0) {
                                            usuariosFamilia.forEach(function (usuario) {
                                              if (usuario.Id == uspId) {
                                                usuario.UrlImagen = JSON.parse(data.data);
                                              }
                                            }); //ahora serializamos y cambiamos

                                            sessionStorage.setItem('UsuariosFamilia', JSON.stringify(usuariosFamilia));
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

                  case 7:
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
            var _this3 = this;

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
                      return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(_this3, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee3() {
                        var _this4 = this;

                        return regeneratorRuntime.wrap(function _callee3$(_context3) {
                          while (1) {
                            switch (_context3.prev = _context3.next) {
                              case 0:
                                if (!this.utiles.isAppOnDevice()) {
                                  //llamada web
                                  this.img.putColor(uspId, colorGuardar).subscribe(function (data) {
                                    if (data) {
                                      //hay que setear el color del localstorage
                                      //this.utiles.cambiaColorLocalStorage(data);
                                      _this4.color = data;

                                      if (_this4.usuarioAps) {
                                        if (_this4.usuarioAps.Color) {
                                          //dejamos al usuario con la nueva imagen
                                          _this4.usuarioAps.Color = data; //sessionStorage.setItem('UsuarioAps', JSON.stringify(nuevoUsuarioAps));
                                        }
                                      }

                                      if (sessionStorage.UsuarioAps) {
                                        var nuevoUsuarioAps = JSON.parse(sessionStorage.UsuarioAps); //cambiamos este elemento solo si el usuario existe

                                        if (nuevoUsuarioAps.Id == uspId) {
                                          nuevoUsuarioAps.Color = data;
                                          sessionStorage.setItem('UsuarioAps', JSON.stringify(nuevoUsuarioAps));
                                        } else {
                                          //si no es el mismo hay que buscarlo en la lista de familia y cambiarlo
                                          var usuariosFamilia = JSON.parse(sessionStorage.getItem('UsuariosFamilia'));

                                          if (usuariosFamilia && usuariosFamilia.length > 0) {
                                            usuariosFamilia.forEach(function (usuario) {
                                              if (usuario.Id == uspId) {
                                                usuario.Color = data;
                                              }
                                            }); //ahora serializamos y cambiamos

                                            sessionStorage.setItem('UsuariosFamilia', JSON.stringify(usuariosFamilia));
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
                                      _this4.utiles.cambiaColorLocalStorage(JSON.parse(data.data));

                                      _this4.color = JSON.parse(data.data);

                                      if (_this4.usuarioAps) {
                                        if (_this4.usuarioAps.Color) {
                                          //dejamos al usuario con la nueva imagen
                                          _this4.usuarioAps.Color = JSON.parse(data.data);
                                        }
                                      }

                                      if (sessionStorage.UsuarioAps) {
                                        var nuevoUsuarioAps = JSON.parse(sessionStorage.UsuarioAps); //cambiamos este elemento solo si el usuario existe

                                        if (nuevoUsuarioAps.Id == uspId) {
                                          nuevoUsuarioAps.Color = JSON.parse(data.data);
                                          sessionStorage.setItem('UsuarioAps', JSON.stringify(nuevoUsuarioAps));
                                        } else {
                                          //si no es el mismo hay que buscarlo en la lista de familia y cambiarlo
                                          var usuariosFamilia = JSON.parse(sessionStorage.getItem('UsuariosFamilia'));

                                          if (usuariosFamilia && usuariosFamilia.length > 0) {
                                            usuariosFamilia.forEach(function (usuario) {
                                              if (usuario.Id == uspId) {
                                                usuario.Color = JSON.parse(data.data);
                                              }
                                            }); //ahora serializamos y cambiamos

                                            sessionStorage.setItem('UsuariosFamilia', JSON.stringify(usuariosFamilia));
                                          }
                                        }
                                      }
                                    } //terminamos loader


                                    loader.dismiss();
                                  }, function (error) {
                                    loader.dismiss();

                                    _this4.utiles.presentToast(error, 'bottom', 4000);
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
          this.dismiss();
          this.navCtrl.navigateRoot('contactabilidad'); //this.utiles.presentToast("Enviar a la pagina para editar datos de contactabilidad", "bottom", 3000);

          /*     let registro = null;
              if (localStorage.getItem('REGISTRO')){
                registro = JSON.parse(localStorage.getItem('REGISTRO'));
                const navigationExtras: NavigationExtras = {
                  queryParams: {
                    usuario: JSON.stringify(registro),
                    EstaEditando: true
                  }
                };
                this.dismiss();
                this.navCtrl.navigateRoot(['registro-usuario'], navigationExtras);
              }
              else{
                this.utiles.presentToast("No puedes editar ya que no te encuentras registrado", "bottom", 3000);
          
              } */
        }
      }]);

      return ModalAjustesPage;
    }();

    ModalAjustesPage.ctorParameters = function () {
      return [{
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ModalController"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavParams"]
      }, {
        type: _app_services_ServicioUtiles__WEBPACK_IMPORTED_MODULE_3__["ServicioUtiles"]
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
        type: _services_ServicioImagen__WEBPACK_IMPORTED_MODULE_5__["ServicioImagen"]
      }];
    };

    ModalAjustesPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-modal-ajustes',
      template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! raw-loader!./modal-ajustes.page.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/modal-ajustes/modal-ajustes.page.html"))["default"],
      styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! ./modal-ajustes.page.scss */
      "./src/app/modal-ajustes/modal-ajustes.page.scss"))["default"]]
    })], ModalAjustesPage);
    /***/
  }
}]);
//# sourceMappingURL=default~familia-familia-module~modal-ajustes-modal-ajustes-module-es5.js.map