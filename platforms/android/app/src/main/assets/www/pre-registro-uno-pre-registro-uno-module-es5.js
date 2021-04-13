function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pre-registro-uno-pre-registro-uno-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/pre-registro-uno/pre-registro-uno.page.html":
  /*!***************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pre-registro-uno/pre-registro-uno.page.html ***!
    \***************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppPreRegistroUnoPreRegistroUnoPageHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ion-content class=\"ion-padding\">\n  <ion-row class=\"mt-24\">\n    <button mat-icon-button aria-label=\"Example icon-button with a heart icon\" (click)=\"volver()\">\n      <mat-icon>arrow_back_ios</mat-icon>\n    </button>\n  </ion-row>\n  <ion-row class=\"mt-52\">\n    <h1>¡Ayudados a conocerte!</h1>\n  </ion-row>\n  <ion-row class=\"mt-16\">\n    <p class=\"texto-1\">¿Cual es tu nombre?</p>\n    \n  </ion-row>\n  <form [formGroup]=\"forma\" novalidate>\n      <ion-row class=\"mt-24\">\n        <mat-form-field appearance=\"outline\" style=\"width: 100%;\">\n          <mat-label>Nombre</mat-label>\n          <input matInput placeholder=\"Nombre\" formControlName=\"nombre\" name=\"nombre\" required>\n          <mat-error *ngIf=\"f.nombre.errors && f.nombre.errors.required\">Requerido</mat-error>\n        </mat-form-field>\n      </ion-row>\n      <ion-row class=\"mt-32\">\n        <button [disabled]=\"forma.invalid\" mat-flat-button color=\"primary\" style=\"width: 90%; margin-left: 5%;\"\n          (click)=\"irRegistroUno()\">CONTINUAR</button>\n      </ion-row>\n  </form>\n\n</ion-content>\n";
    /***/
  },

  /***/
  "./src/app/pre-registro-uno/pre-registro-uno.module.ts":
  /*!*************************************************************!*\
    !*** ./src/app/pre-registro-uno/pre-registro-uno.module.ts ***!
    \*************************************************************/

  /*! exports provided: PreRegistroUnoPageModule */

  /***/
  function srcAppPreRegistroUnoPreRegistroUnoModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "PreRegistroUnoPageModule", function () {
      return PreRegistroUnoPageModule;
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


    var _pre_registro_uno_page__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! ./pre-registro-uno.page */
    "./src/app/pre-registro-uno/pre-registro-uno.page.ts");

    var PreRegistroUnoPageModule = function PreRegistroUnoPageModule() {
      _classCallCheck(this, PreRegistroUnoPageModule);
    };

    PreRegistroUnoPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_6__["MatFormFieldModule"], _angular_material_select__WEBPACK_IMPORTED_MODULE_7__["MatSelectModule"], _angular_material_input__WEBPACK_IMPORTED_MODULE_8__["MatInputModule"], _angular_material_button__WEBPACK_IMPORTED_MODULE_9__["MatButtonModule"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_10__["MatIconModule"], _angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterModule"].forChild([{
        path: '',
        component: _pre_registro_uno_page__WEBPACK_IMPORTED_MODULE_11__["PreRegistroUnoPage"]
      }])],
      declarations: [_pre_registro_uno_page__WEBPACK_IMPORTED_MODULE_11__["PreRegistroUnoPage"]]
    })], PreRegistroUnoPageModule);
    /***/
  },

  /***/
  "./src/app/pre-registro-uno/pre-registro-uno.page.scss":
  /*!*************************************************************!*\
    !*** ./src/app/pre-registro-uno/pre-registro-uno.page.scss ***!
    \*************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppPreRegistroUnoPreRegistroUnoPageScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".mt-16 {\n  margin-top: 16px;\n}\n\n.mt-32 {\n  margin-top: 32px;\n}\n\n.mt-24 {\n  margin-top: 24px;\n}\n\n.mt-80 {\n  margin-top: 5em;\n}\n\n.mt-40 {\n  margin-top: 2.5em;\n}\n\n.mt-36 {\n  margin-top: 2.25em;\n}\n\n.mt-52 {\n  margin-top: 3.25em;\n}\n\n.texto-1 {\n  font-size: 1.3em;\n  color: #575657;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcHJlLXJlZ2lzdHJvLXVuby9GOlxcYXBwX21pZmFtaWxpYV9naXRcXG1pRmFtaWxpYV9wcmUvc3JjXFxhcHBcXHByZS1yZWdpc3Ryby11bm9cXHByZS1yZWdpc3Ryby11bm8ucGFnZS5zY3NzIiwic3JjL2FwcC9wcmUtcmVnaXN0cm8tdW5vL3ByZS1yZWdpc3Ryby11bm8ucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksZ0JBQUE7QUNDSjs7QURDQTtFQUNJLGdCQUFBO0FDRUo7O0FEQUE7RUFDSSxnQkFBQTtBQ0dKOztBRERBO0VBQ0ksZUFBQTtBQ0lKOztBREZBO0VBQ0ksaUJBQUE7QUNLSjs7QURIQTtFQUNJLGtCQUFBO0FDTUo7O0FESkE7RUFDSSxrQkFBQTtBQ09KOztBRExBO0VBQ0ksZ0JBQUE7RUFDQSxjQUFBO0FDUUoiLCJmaWxlIjoic3JjL2FwcC9wcmUtcmVnaXN0cm8tdW5vL3ByZS1yZWdpc3Ryby11bm8ucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLm10LTE2e1xyXG4gICAgbWFyZ2luLXRvcDogMTZweDtcclxufVxyXG4ubXQtMzJ7XHJcbiAgICBtYXJnaW4tdG9wOiAzMnB4O1xyXG59XHJcbi5tdC0yNHtcclxuICAgIG1hcmdpbi10b3A6IDI0cHg7XHJcbn1cclxuLm10LTgwe1xyXG4gICAgbWFyZ2luLXRvcDogNWVtO1xyXG59XHJcbi5tdC00MHtcclxuICAgIG1hcmdpbi10b3A6IDIuNWVtO1xyXG59XHJcbi5tdC0zNntcclxuICAgIG1hcmdpbi10b3A6IDIuMjVlbTtcclxufVxyXG4ubXQtNTJ7XHJcbiAgICBtYXJnaW4tdG9wOiAzLjI1ZW07XHJcbn1cclxuLnRleHRvLTF7XHJcbiAgICBmb250LXNpemU6IDEuM2VtO1xyXG4gICAgY29sb3I6ICM1NzU2NTc7XHJcbiAgICBcclxufSIsIi5tdC0xNiB7XG4gIG1hcmdpbi10b3A6IDE2cHg7XG59XG5cbi5tdC0zMiB7XG4gIG1hcmdpbi10b3A6IDMycHg7XG59XG5cbi5tdC0yNCB7XG4gIG1hcmdpbi10b3A6IDI0cHg7XG59XG5cbi5tdC04MCB7XG4gIG1hcmdpbi10b3A6IDVlbTtcbn1cblxuLm10LTQwIHtcbiAgbWFyZ2luLXRvcDogMi41ZW07XG59XG5cbi5tdC0zNiB7XG4gIG1hcmdpbi10b3A6IDIuMjVlbTtcbn1cblxuLm10LTUyIHtcbiAgbWFyZ2luLXRvcDogMy4yNWVtO1xufVxuXG4udGV4dG8tMSB7XG4gIGZvbnQtc2l6ZTogMS4zZW07XG4gIGNvbG9yOiAjNTc1NjU3O1xufSJdfQ== */";
    /***/
  },

  /***/
  "./src/app/pre-registro-uno/pre-registro-uno.page.ts":
  /*!***********************************************************!*\
    !*** ./src/app/pre-registro-uno/pre-registro-uno.page.ts ***!
    \***********************************************************/

  /*! exports provided: PreRegistroUnoPage */

  /***/
  function srcAppPreRegistroUnoPreRegistroUnoPageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "PreRegistroUnoPage", function () {
      return PreRegistroUnoPage;
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


    var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _app_services_ServicioUtiles__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ../../app/services/ServicioUtiles */
    "./src/app/services/ServicioUtiles.ts");
    /* harmony import */


    var _app_services_ServicioGeo__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ../../app/services/ServicioGeo */
    "./src/app/services/ServicioGeo.ts");
    /* harmony import */


    var moment__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! moment */
    "./node_modules/moment/moment.js");
    /* harmony import */


    var moment__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_7__); //servicios


    var PreRegistroUnoPage = /*#__PURE__*/function () {
      function PreRegistroUnoPage(navCtrl, utiles, servicioGeo, loading, formBuilder, activatedRoute, router) {
        _classCallCheck(this, PreRegistroUnoPage);

        this.navCtrl = navCtrl;
        this.utiles = utiles;
        this.servicioGeo = servicioGeo;
        this.loading = loading;
        this.formBuilder = formBuilder;
        this.activatedRoute = activatedRoute;
        this.router = router;
        this.cargando = false;
        this.tipoMovimiento = '1';
        this.estaAgregandoFamilia = false;
        this.paginaAnterior = 'nuevo-login';
      }

      _createClass(PreRegistroUnoPage, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this = this;

          moment__WEBPACK_IMPORTED_MODULE_7__["locale"]('es');
          this.activatedRoute.queryParams.subscribe(function (params) {
            if (params && params.estaAgregandoFamilia) {
              _this.estaAgregandoFamilia = true;
            }

            if (params && params.modulo) {
              _this.paginaAnterior = params.modulo;
            }

            if (params && params.nombre) {
              _this.nombre = params.nombre;
            }
          });
          this.cargarForma();
        }
      }, {
        key: "cargarForma",
        value: function cargarForma() {
          this.forma = new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormGroup"]({
            'nombre': new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required])
          });

          if (this.nombre && this.nombre != '') {
            //agregamos el elemento a la forma
            this.forma.setValue({
              nombre: this.nombre
            });
          }
        }
      }, {
        key: "volver",
        value: function volver() {
          if (this.paginaAnterior) {
            this.navCtrl.navigateRoot(this.paginaAnterior);
          } else {
            this.navCtrl.navigateRoot('nuevo-login');
          }
        } //para validar

      }, {
        key: "irRegistroUno",
        value: function irRegistroUno() {
          var navigationExtras = {
            queryParams: {
              nombre: this.forma.controls.nombre.value,
              modulo: this.paginaAnterior
            }
          };
          this.navCtrl.navigateRoot(['registro-uno'], navigationExtras);
        }
      }, {
        key: "f",
        get: function get() {
          return this.forma.controls;
        }
      }]);

      return PreRegistroUnoPage;
    }();

    PreRegistroUnoPage.ctorParameters = function () {
      return [{
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"]
      }, {
        type: _app_services_ServicioUtiles__WEBPACK_IMPORTED_MODULE_5__["ServicioUtiles"]
      }, {
        type: _app_services_ServicioGeo__WEBPACK_IMPORTED_MODULE_6__["ServicioGeo"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["LoadingController"]
      }, {
        type: _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]
      }];
    };

    PreRegistroUnoPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-pre-registro-uno',
      template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! raw-loader!./pre-registro-uno.page.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/pre-registro-uno/pre-registro-uno.page.html"))["default"],
      styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! ./pre-registro-uno.page.scss */
      "./src/app/pre-registro-uno/pre-registro-uno.page.scss"))["default"]]
    })], PreRegistroUnoPage);
    /***/
  }
}]);
//# sourceMappingURL=pre-registro-uno-pre-registro-uno-module-es5.js.map