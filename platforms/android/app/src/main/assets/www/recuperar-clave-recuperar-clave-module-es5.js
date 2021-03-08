function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["recuperar-clave-recuperar-clave-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/recuperar-clave/recuperar-clave.page.html":
  /*!*************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/recuperar-clave/recuperar-clave.page.html ***!
    \*************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppRecuperarClaveRecuperarClavePageHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ion-header>\n  <!-- esto lo comentamos ya que se decidió no usar color de header personalizado -->\n  <!-- <ion-toolbar [style.--background]=\"miColor\" mode=\"md\"> -->\n  <ion-toolbar color=\"primary\" mode=\"md\">\n    <ion-buttons slot=\"start\">\n      <ion-back-button defaultHref=\"/nuevo-login\" class=\"fcw\"></ion-back-button>\n    </ion-buttons>\n    <ion-title class=\"fcw\">Recuperar contraseña</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content class=\"ion-padding\">\n  <ion-row class=\"texto-1 mt-32\">\n    Ingresa tu correo electrónico, te enviaremos un correo con tu contraseña, recuerda revisar de igual manera los spam o correo no deseado.\n  </ion-row>\n  <form [formGroup]=\"forma\" novalidate>\n      <ion-row class=\"mt-32\">\n        <mat-form-field appearance=\"outline\" style=\"width: 100%;\">\n          <mat-label>Correo electrónico</mat-label>\n          <input matInput placeholder=\"Correo electrónico\" formControlName=\"correo\" name=\"correo\" required>\n          <mat-error *ngIf=\"f.correo.errors && f.correo.errors.required\">Correo requerido</mat-error>\n          <mat-error [hidden]=\"!(f.correo.errors && f.correo.errors.pattern)\">Correo inválido</mat-error>\n        </mat-form-field>\n      </ion-row>\n      <ion-row class=\"mt-32\">\n        <button [disabled]=\"forma.invalid\" mat-flat-button color=\"primary\" style=\"width: 90%; margin-left: 5%;\"\n          (click)=\"submit()\">CONTINUAR</button>\n      </ion-row>\n  </form>\n\n</ion-content>";
    /***/
  },

  /***/
  "./src/app/recuperar-clave/recuperar-clave.module.ts":
  /*!***********************************************************!*\
    !*** ./src/app/recuperar-clave/recuperar-clave.module.ts ***!
    \***********************************************************/

  /*! exports provided: RecuperarClavePageModule */

  /***/
  function srcAppRecuperarClaveRecuperarClaveModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "RecuperarClavePageModule", function () {
      return RecuperarClavePageModule;
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


    var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @angular/material/form-field */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/form-field.js");
    /* harmony import */


    var _angular_material_select__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! @angular/material/select */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/select.js");
    /* harmony import */


    var _angular_material_input__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! @angular/material/input */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/input.js");
    /* harmony import */


    var _angular_material_button__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! @angular/material/button */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/button.js");
    /* harmony import */


    var _angular_material_icon__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! @angular/material/icon */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/icon.js");
    /* harmony import */


    var _recuperar_clave_page__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! ./recuperar-clave.page */
    "./src/app/recuperar-clave/recuperar-clave.page.ts");

    var RecuperarClavePageModule = function RecuperarClavePageModule() {
      _classCallCheck(this, RecuperarClavePageModule);
    };

    RecuperarClavePageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_6__["MatFormFieldModule"], _angular_material_select__WEBPACK_IMPORTED_MODULE_7__["MatSelectModule"], _angular_material_input__WEBPACK_IMPORTED_MODULE_8__["MatInputModule"], _angular_material_button__WEBPACK_IMPORTED_MODULE_9__["MatButtonModule"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_10__["MatIconModule"], _angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterModule"].forChild([{
        path: '',
        component: _recuperar_clave_page__WEBPACK_IMPORTED_MODULE_11__["RecuperarClavePage"]
      }])],
      declarations: [_recuperar_clave_page__WEBPACK_IMPORTED_MODULE_11__["RecuperarClavePage"]]
    })], RecuperarClavePageModule);
    /***/
  },

  /***/
  "./src/app/recuperar-clave/recuperar-clave.page.scss":
  /*!***********************************************************!*\
    !*** ./src/app/recuperar-clave/recuperar-clave.page.scss ***!
    \***********************************************************/

  /*! exports provided: default */

  /***/
  function srcAppRecuperarClaveRecuperarClavePageScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".mt-32 {\n  margin-top: 32px;\n}\n\n.mt-24 {\n  margin-top: 24px;\n}\n\n.mt-80 {\n  margin-top: 5em;\n}\n\n.mt-40 {\n  margin-top: 2.5em;\n}\n\n.mt-36 {\n  margin-top: 2.25em;\n}\n\n.mt-52 {\n  margin-top: 3.25em;\n}\n\n.texto-1 {\n  font-size: 1em;\n  color: #000000DE;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcmVjdXBlcmFyLWNsYXZlL0Y6XFxhcHBfbWlmYW1pbGlhX2dpdFxcbWlGYW1pbGlhX3ByZS9zcmNcXGFwcFxccmVjdXBlcmFyLWNsYXZlXFxyZWN1cGVyYXItY2xhdmUucGFnZS5zY3NzIiwic3JjL2FwcC9yZWN1cGVyYXItY2xhdmUvcmVjdXBlcmFyLWNsYXZlLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGdCQUFBO0FDQ0o7O0FEQ0E7RUFDSSxnQkFBQTtBQ0VKOztBREFBO0VBQ0ksZUFBQTtBQ0dKOztBRERBO0VBQ0ksaUJBQUE7QUNJSjs7QURGQTtFQUNJLGtCQUFBO0FDS0o7O0FESEE7RUFDSSxrQkFBQTtBQ01KOztBREpBO0VBQ0ksY0FBQTtFQUNBLGdCQUFBO0FDT0oiLCJmaWxlIjoic3JjL2FwcC9yZWN1cGVyYXItY2xhdmUvcmVjdXBlcmFyLWNsYXZlLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5tdC0zMntcclxuICAgIG1hcmdpbi10b3A6IDMycHg7XHJcbn1cclxuLm10LTI0e1xyXG4gICAgbWFyZ2luLXRvcDogMjRweDtcclxufVxyXG4ubXQtODB7XHJcbiAgICBtYXJnaW4tdG9wOiA1ZW07XHJcbn1cclxuLm10LTQwe1xyXG4gICAgbWFyZ2luLXRvcDogMi41ZW07XHJcbn1cclxuLm10LTM2e1xyXG4gICAgbWFyZ2luLXRvcDogMi4yNWVtO1xyXG59XHJcbi5tdC01MntcclxuICAgIG1hcmdpbi10b3A6IDMuMjVlbTtcclxufVxyXG4udGV4dG8tMXtcclxuICAgIGZvbnQtc2l6ZTogMWVtO1xyXG4gICAgY29sb3I6ICMwMDAwMDBERTtcclxuICAgIFxyXG59IiwiLm10LTMyIHtcbiAgbWFyZ2luLXRvcDogMzJweDtcbn1cblxuLm10LTI0IHtcbiAgbWFyZ2luLXRvcDogMjRweDtcbn1cblxuLm10LTgwIHtcbiAgbWFyZ2luLXRvcDogNWVtO1xufVxuXG4ubXQtNDAge1xuICBtYXJnaW4tdG9wOiAyLjVlbTtcbn1cblxuLm10LTM2IHtcbiAgbWFyZ2luLXRvcDogMi4yNWVtO1xufVxuXG4ubXQtNTIge1xuICBtYXJnaW4tdG9wOiAzLjI1ZW07XG59XG5cbi50ZXh0by0xIHtcbiAgZm9udC1zaXplOiAxZW07XG4gIGNvbG9yOiAjMDAwMDAwREU7XG59Il19 */";
    /***/
  },

  /***/
  "./src/app/recuperar-clave/recuperar-clave.page.ts":
  /*!*********************************************************!*\
    !*** ./src/app/recuperar-clave/recuperar-clave.page.ts ***!
    \*********************************************************/

  /*! exports provided: RecuperarClavePage */

  /***/
  function srcAppRecuperarClaveRecuperarClavePageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "RecuperarClavePage", function () {
      return RecuperarClavePage;
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


    var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
    /* harmony import */


    var _app_services_ServicioUtiles__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../../app/services/ServicioUtiles */
    "./src/app/services/ServicioUtiles.ts");
    /* harmony import */


    var _app_services_ServicioGeo__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ../../app/services/ServicioGeo */
    "./src/app/services/ServicioGeo.ts"); //servicios


    var RecuperarClavePage = /*#__PURE__*/function () {
      function RecuperarClavePage(navCtrl, utiles, servicioGeo, loading, formBuilder) {
        _classCallCheck(this, RecuperarClavePage);

        this.navCtrl = navCtrl;
        this.utiles = utiles;
        this.servicioGeo = servicioGeo;
        this.loading = loading;
        this.formBuilder = formBuilder;
        this.expEmail = /^[^@\s]+@[^@\s]+\.[^@\s]+$/gm;
      }

      _createClass(RecuperarClavePage, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.cargarForma();
        }
      }, {
        key: "cargarForma",
        value: function cargarForma() {
          this.forma = new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormGroup"]({
            'correo': new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].pattern(this.expEmail)])
          });
        }
      }, {
        key: "abrirLogin",
        value: function abrirLogin() {
          this.navCtrl.navigateRoot('nuevo-login');
        }
      }, {
        key: "submit",
        value: function submit() {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
            var _this = this;

            var correo, loader;
            return regeneratorRuntime.wrap(function _callee2$(_context2) {
              while (1) {
                switch (_context2.prev = _context2.next) {
                  case 0:
                    correo = this.forma.controls.correo ? this.forma.controls.correo.value : '';

                    if (!(correo == '')) {
                      _context2.next = 4;
                      break;
                    }

                    this.utiles.presentToast('Debe ingresar un correo', 'middle', 2000);
                    return _context2.abrupt("return");

                  case 4:
                    _context2.next = 6;
                    return this.loading.create({
                      message: 'Verificando...<br>correo',
                      duration: 10000
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
                                  this.servicioGeo.postRecuperarClave(correo).subscribe(function (response) {
                                    if (response.CodigoMensaje == 0) {
                                      //aca todo ok
                                      _this2.utiles.presentToast(response.Mensaje, 'middle', 3000);

                                      loader.dismiss(); //llevar a login

                                      _this2.abrirLogin();
                                    } else {
                                      _this2.utiles.presentToast(response.Mensaje, 'middle', 3000);

                                      loader.dismiss();
                                    }
                                  });
                                } else {
                                  //llamada nativa
                                  this.servicioGeo.postRecuperarClaveNative(correo).then(function (response) {
                                    var respuesta = JSON.parse(response.data);

                                    if (respuesta.CodigoMensaje == 0) {
                                      //aca todo ok
                                      _this2.utiles.presentToast(respuesta.Mensaje, 'middle', 3000);

                                      loader.dismiss(); //llevar a login

                                      _this2.abrirLogin();
                                    } else {
                                      _this2.utiles.presentToast(respuesta.Mensaje, 'middle', 3000);

                                      loader.dismiss();
                                    }
                                  }, function (error) {
                                    loader.dismiss();

                                    _this2.utiles.presentToast('Ocurrió un error de verificación', 'bottom', 4000);
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
        } //para validar

      }, {
        key: "f",
        get: function get() {
          return this.forma.controls;
        }
      }]);

      return RecuperarClavePage;
    }();

    RecuperarClavePage.ctorParameters = function () {
      return [{
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"]
      }, {
        type: _app_services_ServicioUtiles__WEBPACK_IMPORTED_MODULE_4__["ServicioUtiles"]
      }, {
        type: _app_services_ServicioGeo__WEBPACK_IMPORTED_MODULE_5__["ServicioGeo"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["LoadingController"]
      }, {
        type: _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"]
      }];
    };

    RecuperarClavePage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-recuperar-clave',
      template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! raw-loader!./recuperar-clave.page.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/recuperar-clave/recuperar-clave.page.html"))["default"],
      styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! ./recuperar-clave.page.scss */
      "./src/app/recuperar-clave/recuperar-clave.page.scss"))["default"]]
    })], RecuperarClavePage);
    /***/
  }
}]);
//# sourceMappingURL=recuperar-clave-recuperar-clave-module-es5.js.map