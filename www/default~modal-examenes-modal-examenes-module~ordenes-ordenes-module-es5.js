function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["default~modal-examenes-modal-examenes-module~ordenes-ordenes-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/modal-examenes/modal-examenes.page.html":
  /*!***********************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modal-examenes/modal-examenes.page.html ***!
    \***********************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppModalExamenesModalExamenesPageHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ion-header>\r\n  <ion-toolbar [style.--background]=\"miColor\">\r\n    <ion-title class=\"home\">Exámenes</ion-title>\r\n    <ion-buttons slot=\"end\" class=\"pdr10\" (click)=\"dismiss()\">\r\n      <ion-icon class=\"home\" slot=\"icon-only\" name=\"close\"></ion-icon>\r\n    </ion-buttons>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content class=\"back-app\">\r\n  <!-- HAY EXAMENES -->\r\n  <ion-list *ngIf=\"tiene\">\r\n    <ion-item #myList lines=\"none\">\r\n      <ion-avatar slot=\"start\">\r\n        <text-avatar [text]=\"orden.NombreUsuario\" [color]=\"orden.Color\" [textColor]=\"textColor\"></text-avatar>\r\n      </ion-avatar>\r\n      <ion-label>{{orden.NombreUsuario}}</ion-label>\r\n    </ion-item>\r\n    <ion-list-header lines=\"inset\" mode=\"md\">\r\n      <ion-label><strong>Nº Órden: {{oalaId}}</strong></ion-label>\r\n      <ion-badge color=\"secondary\" class=\"ion-margin-end\">{{ fechaOrden }}</ion-badge>\r\n      <!-- <ion-button>Clear</ion-button> -->\r\n    </ion-list-header>\r\n    <ion-item lines=\"none\" *ngFor=\"let item of listadoExamenes\">\r\n      <ion-grid>\r\n        <ion-row>\r\n          <ion-col size=\"8\">\r\n            <h5>{{item.NombreExamen}}</h5>\r\n            <p *ngIf=\"item.VisibleIcono\">\r\n              <ion-icon name=\"checkmark-circle\" *ngIf=\"item.Check\"></ion-icon>\r\n              <ion-icon name=\"remove-circle\" *ngIf=\"item.UnCheck\"></ion-icon>&nbsp;{{item.TextoResultados}}\r\n            </p>\r\n          </ion-col>\r\n          <ion-col size=\"4\">\r\n            <!-- <ion-icon name=\"checkmark-circle\"></ion-icon>&nbsp;<span>{{item.Estado}}</span> -->\r\n            <ion-badge color=\"primary\">{{ item.Estado }}</ion-badge>\r\n            <h6 *ngIf=\"!item.VisibleTabla\" style=\"color: #666; font-size:0.7em;\"><ion-icon name=\"analitycs\"></ion-icon>&nbsp;Sin Resultados</h6> \r\n            <h6 *ngIf=\"item.VisibleTabla\" style=\"color: #666; font-size:0.7em;\"><ion-icon name=\"time\"></ion-icon>&nbsp;{{item.FechaMuestraStr}}</h6> \r\n          </ion-col>\r\n          <!-- RESULTADOS -->\r\n          <!-- aca debemos agregar otra lista quitar visible -->\r\n          <ion-list *ngIf=\"item.VisibleTabla\" style=\"width: 100%;\">\r\n            <ion-grid>\r\n              <ion-row class=\"titulo-tabla-examen\" [ngStyle]=\"{'background-color': userColor}\">\r\n                <ion-col size=\"6\" class=\"ion-text-wrap ion-text-center\">\r\n                  Nombre\r\n                </ion-col>\r\n                <ion-col size=\"2\" class=\"ion-text-center\">\r\n                  Valor\r\n                </ion-col>\r\n                <ion-col size=\"2\" class=\"ion-text-center\">\r\n                  U/M\r\n                </ion-col>\r\n                <ion-col size=\"2\" class=\"ion-text-center\">\r\n                  Ref.\r\n                </ion-col>\r\n              </ion-row>\r\n            </ion-grid>\r\n\r\n            <ion-row  *ngFor=\"let exa of item.Resultados\">\r\n              <ion-grid>\r\n                <ion-row style=\"font-size: 0.8em;font-style: italic;\">\r\n                  <ion-col size=\"6\" class=\"ion-text-wrap\">\r\n                    {{exa.DescripcionResultado}}\r\n                  </ion-col>\r\n                  <ion-col size=\"2\" class=\"ion-text-center\">\r\n                    {{exa.Resultado}}\r\n                  </ion-col>\r\n                  <ion-col size=\"2\" class=\"ion-text-center\">\r\n                    {{exa.Um}}\r\n                  </ion-col>\r\n                  <ion-col size=\"2\" class=\"ion-text-center\">\r\n                    {{exa.ValoresReferencia}}\r\n                  </ion-col>\r\n                </ion-row>\r\n              </ion-grid>\r\n            </ion-row>\r\n          </ion-list>\r\n        </ion-row>\r\n      </ion-grid>\r\n    </ion-item>\r\n  </ion-list>\r\n  <!-- NO HAY EXAMENES -->\r\n  <div *ngIf=\"tiene == false\" style=\"position: relative; height: 100vh;\">\r\n    <div style=\"position: absolute; display: table; height: 100%; font-size: 30px; color:#BDBDBD; text-align: center;\">\r\n      <p style=\"display: table-cell; vertical-align: middle\">No hay exámenes para mostrar  <br>\r\n      <ion-icon name=\"information-circle\" style=\"font-size: 50px;\"></ion-icon></p>\r\n    </div>\r\n  </div>\r\n\r\n</ion-content>\r\n";
    /***/
  },

  /***/
  "./src/app/modal-examenes/modal-examenes.page.scss":
  /*!*********************************************************!*\
    !*** ./src/app/modal-examenes/modal-examenes.page.scss ***!
    \*********************************************************/

  /*! exports provided: default */

  /***/
  function srcAppModalExamenesModalExamenesPageScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".titulo-tabla-examen {\n  border-bottom-color: #dedede;\n  border-bottom-style: solid;\n  border-bottom-width: 1px;\n  color: #fff;\n  font-size: 0.8em;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbW9kYWwtZXhhbWVuZXMvRjpcXGFwcF9taWZhbWlsaWFfZ2l0XFxtaUZhbWlsaWFfcHJlL3NyY1xcYXBwXFxtb2RhbC1leGFtZW5lc1xcbW9kYWwtZXhhbWVuZXMucGFnZS5zY3NzIiwic3JjL2FwcC9tb2RhbC1leGFtZW5lcy9tb2RhbC1leGFtZW5lcy5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSw0QkFBQTtFQUNBLDBCQUFBO0VBQ0Esd0JBQUE7RUFFQSxXQUFBO0VBQ0EsZ0JBQUE7QUNBSiIsImZpbGUiOiJzcmMvYXBwL21vZGFsLWV4YW1lbmVzL21vZGFsLWV4YW1lbmVzLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi50aXR1bG8tdGFibGEtZXhhbWVue1xyXG4gICAgYm9yZGVyLWJvdHRvbS1jb2xvcjogI2RlZGVkZTtcclxuICAgIGJvcmRlci1ib3R0b20tc3R5bGU6IHNvbGlkO1xyXG4gICAgYm9yZGVyLWJvdHRvbS13aWR0aDogMXB4O1xyXG4gICAgLy9iYWNrZ3JvdW5kLWNvbG9yOiAjMDA5N0E3O1xyXG4gICAgY29sb3I6ICNmZmY7XHJcbiAgICBmb250LXNpemU6IDAuOGVtO1xyXG5cclxufSIsIi50aXR1bG8tdGFibGEtZXhhbWVuIHtcbiAgYm9yZGVyLWJvdHRvbS1jb2xvcjogI2RlZGVkZTtcbiAgYm9yZGVyLWJvdHRvbS1zdHlsZTogc29saWQ7XG4gIGJvcmRlci1ib3R0b20td2lkdGg6IDFweDtcbiAgY29sb3I6ICNmZmY7XG4gIGZvbnQtc2l6ZTogMC44ZW07XG59Il19 */";
    /***/
  },

  /***/
  "./src/app/modal-examenes/modal-examenes.page.ts":
  /*!*******************************************************!*\
    !*** ./src/app/modal-examenes/modal-examenes.page.ts ***!
    \*******************************************************/

  /*! exports provided: ModalExamenesPage */

  /***/
  function srcAppModalExamenesModalExamenesPageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ModalExamenesPage", function () {
      return ModalExamenesPage;
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


    var _app_services_ServicioLaboratorio__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../../app/services/ServicioLaboratorio */
    "./src/app/services/ServicioLaboratorio.ts");
    /* harmony import */


    var moment__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! moment */
    "./node_modules/moment/moment.js");
    /* harmony import */


    var moment__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_5__); //SERVICIOS
    //moment


    var ModalExamenesPage = /*#__PURE__*/function () {
      function ModalExamenesPage(modalCtrl, navParams, utiles, navCtrl, toast, platform, menu, loading, lab) {
        _classCallCheck(this, ModalExamenesPage);

        this.modalCtrl = modalCtrl;
        this.navParams = navParams;
        this.utiles = utiles;
        this.navCtrl = navCtrl;
        this.toast = toast;
        this.platform = platform;
        this.menu = menu;
        this.loading = loading;
        this.lab = lab; //color

        this.miColor = '#FF4081'; //textColor Directive

        this.textColor = '#FFFFFF'; //tiene registros

        this.tiene = true;
      }

      _createClass(ModalExamenesPage, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          moment__WEBPACK_IMPORTED_MODULE_5__["locale"]('es'); //this.miColor = this.utiles.entregaMiColor();

          this.orden = JSON.parse(this.navParams.get('orden')); //this.nombreUsuario = navParams.get('NombreUsuario');

          this.user = JSON.parse(sessionStorage.UsuarioAps);
          this.userColor = this.user.Color;
          this.miColor = this.utiles.entregaColor(this.user);

          if (this.orden) {
            //existe la orden hacer las llamadas
            this.oalaId = this.orden.Id;
            this.fechaOrden = this.orden.Fecha;
            this.loadInicio();
          }
        }
      }, {
        key: "dismiss",
        value: function dismiss() {
          this.modalCtrl.dismiss();
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
                    //ordenes
                    this.listadoExamenes = []; //contenido de las llamadas.

                    if (sessionStorage.UsuarioAps) {
                      //debemos enviar el uspId del titular para que traiga todos los datos
                      this.usuarioAps = JSON.parse(sessionStorage.UsuarioAps);
                    }

                    if (!this.usuarioAps) {
                      _context2.next = 8;
                      break;
                    }

                    _context2.next = 5;
                    return this.loading.create({
                      message: 'Obteniendo...<br>Exámenes del usuario',
                      duration: 20000
                    });

                  case 5:
                    loader = _context2.sent;
                    _context2.next = 8;
                    return loader.present().then(function () {
                      return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(_this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
                        var _this2 = this;

                        return regeneratorRuntime.wrap(function _callee$(_context) {
                          while (1) {
                            switch (_context.prev = _context.next) {
                              case 0:
                                if (!this.utiles.isAppOnDevice()) {
                                  //llamada web
                                  this.lab.getExamenes(this.oalaId).subscribe(function (response) {
                                    _this2.porocesarLista(response, loader);
                                  });
                                } else {
                                  //llamada nativa
                                  this.lab.getExamenesNative(this.oalaId).then(function (response) {
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

                  case 8:
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
              var fecha = moment__WEBPACK_IMPORTED_MODULE_5__(listado[s].FechaRegistro).format('DD-MM-YYYY');
              listado[s].Fecha = fecha;
            } //ahora asignamos la variable


            this.listadoExamenes = listado;

            if (this.listadoExamenes.length == 0) {
              this.tiene = false;
            }

            console.log(this.listadoExamenes);
          }

          loader.dismiss();
        }
      }]);

      return ModalExamenesPage;
    }();

    ModalExamenesPage.ctorParameters = function () {
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
        type: _app_services_ServicioLaboratorio__WEBPACK_IMPORTED_MODULE_4__["ServicioLaboratorio"]
      }];
    };

    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('myList', {
      read: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonList"]
    })], ModalExamenesPage.prototype, "list", void 0);
    ModalExamenesPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-modal-examenes',
      template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! raw-loader!./modal-examenes.page.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/modal-examenes/modal-examenes.page.html"))["default"],
      styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! ./modal-examenes.page.scss */
      "./src/app/modal-examenes/modal-examenes.page.scss"))["default"]]
    })], ModalExamenesPage);
    /***/
  },

  /***/
  "./src/directives/text-avatar/color-generator.ts":
  /*!*******************************************************!*\
    !*** ./src/directives/text-avatar/color-generator.ts ***!
    \*******************************************************/

  /*! exports provided: ColorGenerator */

  /***/
  function srcDirectivesTextAvatarColorGeneratorTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ColorGenerator", function () {
      return ColorGenerator;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

    var ColorGenerator = /*#__PURE__*/function () {
      function ColorGenerator() {
        _classCallCheck(this, ColorGenerator);

        this.COLORS = ['#e57373', '#f06292', '#ba68c8', '#9575cd', '#7986cb', '#64b5f6', '#4fc3f7', '#4dd0e1', '#4db6ac', '#81c784', '#aed581', '#ff8a65', '#d4e157', '#673ab7', '#ffb74d', '#a1887f', '#90a4ae'];
        console.log('created');
      }

      _createClass(ColorGenerator, [{
        key: "getColor",
        value: function getColor(str) {
          return this.COLORS[Math.abs(this.toNumber(str)) % this.COLORS.length];
        }
      }, {
        key: "toNumber",
        value: function toNumber(str) {
          var h = 0;

          for (var i = 0; i < str.length; i++) {
            h = 31 * h + str.charCodeAt(i);
            h |= 0; // Convert to 32bit integer
          }

          return h;
        }
      }]);

      return ColorGenerator;
    }();

    ColorGenerator = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])()], ColorGenerator);
    /***/
  },

  /***/
  "./src/directives/text-avatar/index.ts":
  /*!*********************************************!*\
    !*** ./src/directives/text-avatar/index.ts ***!
    \*********************************************/

  /*! exports provided: TextAvatarModule */

  /***/
  function srcDirectivesTextAvatarIndexTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony import */


    var _text_avatar_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! ./text-avatar.module */
    "./src/directives/text-avatar/text-avatar.module.ts");
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "TextAvatarModule", function () {
      return _text_avatar_module__WEBPACK_IMPORTED_MODULE_0__["TextAvatarModule"];
    });
    /***/

  },

  /***/
  "./src/directives/text-avatar/text-avatar.module.ts":
  /*!**********************************************************!*\
    !*** ./src/directives/text-avatar/text-avatar.module.ts ***!
    \**********************************************************/

  /*! exports provided: TextAvatarModule */

  /***/
  function srcDirectivesTextAvatarTextAvatarModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "TextAvatarModule", function () {
      return TextAvatarModule;
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


    var _text_avatar__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./text-avatar */
    "./src/directives/text-avatar/text-avatar.ts");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _color_generator__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./color-generator */
    "./src/directives/text-avatar/color-generator.ts");

    var TextAvatarModule = function TextAvatarModule() {
      _classCallCheck(this, TextAvatarModule);
    };

    TextAvatarModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["CommonModule"]],
      declarations: [_text_avatar__WEBPACK_IMPORTED_MODULE_2__["TextAvatarDirective"]],
      exports: [_text_avatar__WEBPACK_IMPORTED_MODULE_2__["TextAvatarDirective"]],
      providers: [_color_generator__WEBPACK_IMPORTED_MODULE_4__["ColorGenerator"]]
    })], TextAvatarModule);
    /***/
  },

  /***/
  "./src/directives/text-avatar/text-avatar.scss":
  /*!*****************************************************!*\
    !*** ./src/directives/text-avatar/text-avatar.scss ***!
    \*****************************************************/

  /*! exports provided: default */

  /***/
  function srcDirectivesTextAvatarTextAvatarScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".u-text-avatar {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  width: 100%;\n  height: 100%;\n  max-width: 46px;\n  max-height: 46px;\n  border-radius: 500px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9kaXJlY3RpdmVzL3RleHQtYXZhdGFyL0Y6XFxhcHBfbWlmYW1pbGlhX2dpdFxcbWlGYW1pbGlhX3ByZS9zcmNcXGRpcmVjdGl2ZXNcXHRleHQtYXZhdGFyXFx0ZXh0LWF2YXRhci5zY3NzIiwic3JjL2RpcmVjdGl2ZXMvdGV4dC1hdmF0YXIvdGV4dC1hdmF0YXIuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGFBQUE7RUFDQSx1QkFBQTtFQUNBLG1CQUFBO0VBRUEsV0FBQTtFQUNBLFlBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxvQkFBQTtBQ0FGIiwiZmlsZSI6InNyYy9kaXJlY3RpdmVzL3RleHQtYXZhdGFyL3RleHQtYXZhdGFyLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIudS10ZXh0LWF2YXRhciB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIC8vIGJhY2tncm91bmQtY29sb3I6IGFudGlxdWV3aGl0ZTtcclxuICB3aWR0aDogMTAwJTtcclxuICBoZWlnaHQ6IDEwMCU7XHJcbiAgbWF4LXdpZHRoOiA0NnB4O1xyXG4gIG1heC1oZWlnaHQ6IDQ2cHg7XHJcbiAgYm9yZGVyLXJhZGl1czogNTAwcHg7XHJcbn0iLCIudS10ZXh0LWF2YXRhciB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAxMDAlO1xuICBtYXgtd2lkdGg6IDQ2cHg7XG4gIG1heC1oZWlnaHQ6IDQ2cHg7XG4gIGJvcmRlci1yYWRpdXM6IDUwMHB4O1xufSJdfQ== */";
    /***/
  },

  /***/
  "./src/directives/text-avatar/text-avatar.ts":
  /*!***************************************************!*\
    !*** ./src/directives/text-avatar/text-avatar.ts ***!
    \***************************************************/

  /*! exports provided: TextAvatarDirective */

  /***/
  function srcDirectivesTextAvatarTextAvatarTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "TextAvatarDirective", function () {
      return TextAvatarDirective;
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


    var _color_generator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./color-generator */
    "./src/directives/text-avatar/color-generator.ts");

    var TextAvatarDirective = /*#__PURE__*/function () {
      function TextAvatarDirective(colorGenerator) {
        _classCallCheck(this, TextAvatarDirective);

        this.colorGenerator = colorGenerator;
        this.firstLetter = "";
        this.styles = {
          'background-color': "#fff",
          'color': "#000"
        };
      }

      _createClass(TextAvatarDirective, [{
        key: "ngOnChanges",
        value: function ngOnChanges(changes) {
          var text = changes['text'] ? changes['text'].currentValue : null;
          var color = changes['color'] ? changes['color'].currentValue : null;
          var textColor = changes['textColor'] ? changes['textColor'].currentValue : this.styles.color;
          this.firstLetter = this.extractFirstCharacter(text);
          this.styles = Object.assign(Object.assign({}, this.styles), {
            'background-color': this.backgroundColorHexString(color, text),
            'color': textColor
          });
        }
      }, {
        key: "extractFirstCharacter",
        value: function extractFirstCharacter(text) {
          return text.charAt(0) || '';
        }
      }, {
        key: "backgroundColorHexString",
        value: function backgroundColorHexString(color, text) {
          return color || this.colorGenerator.getColor(text);
        }
      }]);

      return TextAvatarDirective;
    }();

    TextAvatarDirective.ctorParameters = function () {
      return [{
        type: _color_generator__WEBPACK_IMPORTED_MODULE_2__["ColorGenerator"]
      }];
    };

    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], TextAvatarDirective.prototype, "text", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], TextAvatarDirective.prototype, "color", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], TextAvatarDirective.prototype, "textColor", void 0);
    TextAvatarDirective = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'text-avatar',
      template: "\n    <div class=\"u-text-avatar\" [ngStyle]=\"styles\">{{ firstLetter }}</div>\n  ",
      styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! ./text-avatar.scss */
      "./src/directives/text-avatar/text-avatar.scss"))["default"]]
    })], TextAvatarDirective);
    /***/
  }
}]);
//# sourceMappingURL=default~modal-examenes-modal-examenes-module~ordenes-ordenes-module-es5.js.map