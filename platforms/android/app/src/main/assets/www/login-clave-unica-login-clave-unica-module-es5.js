function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["login-clave-unica-login-clave-unica-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/login-clave-unica/login-clave-unica.page.html":
  /*!*****************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/login-clave-unica/login-clave-unica.page.html ***!
    \*****************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppLoginClaveUnicaLoginClaveUnicaPageHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ion-content class=\"ion-padding\">\n    <ion-row class=\"mt-24\">\n      <button mat-icon-button aria-label=\"Example icon-button with a heart icon\" (click)=\"volver()\">\n        <mat-icon>arrow_back_ios</mat-icon>\n      </button>\n    </ion-row>\n    <ion-row class=\"mt-24\">\n      <h2>Autenticación con clave única</h2>\n    </ion-row>\n    <ion-row class=\"texto-1 mt-24\">\n      <p>\n        Para acceder a tu información de salud, debemos confirmar tu identidad, esto lo puedes hacer muy fácil ingresando tu clave única.\n      </p>\n    </ion-row>\n    <div class=\"mt-52\">\n      <div class=\"my-5\">\n        <!-- Código para visualizar botón oficial iniciar sesión con ClaveÚnica-->\n        <a class=\"btn-cu btn-l btn-fw btn-color-estandar\" [attr.href]=\"urlClaveUnica\" title=\"Este es el botón Iniciar sesión de ClaveÚnica\">\n          <span class=\"cl-claveunica\"></span>\n          <span class=\"texto\">Iniciar sesión</span>\n        </a>\n        <!--./ fin botón-->\n      </div>\n    </div>\n    <ion-row class=\"mt-62 texto-2\">\n      <p>Al registrarte con clave única, aceptas nuestras Condiciones, la Política de datos y la Política de cookies.</p>\n    </ion-row>\n  </ion-content>";
    /***/
  },

  /***/
  "./src/app/login-clave-unica/login-clave-unica.module.ts":
  /*!***************************************************************!*\
    !*** ./src/app/login-clave-unica/login-clave-unica.module.ts ***!
    \***************************************************************/

  /*! exports provided: LoginClaveUnicaPageModule */

  /***/
  function srcAppLoginClaveUnicaLoginClaveUnicaModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "LoginClaveUnicaPageModule", function () {
      return LoginClaveUnicaPageModule;
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


    var _login_clave_unica_page__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! ./login-clave-unica.page */
    "./src/app/login-clave-unica/login-clave-unica.page.ts");

    var LoginClaveUnicaPageModule = function LoginClaveUnicaPageModule() {
      _classCallCheck(this, LoginClaveUnicaPageModule);
    };

    LoginClaveUnicaPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_6__["MatFormFieldModule"], _angular_material_select__WEBPACK_IMPORTED_MODULE_7__["MatSelectModule"], _angular_material_input__WEBPACK_IMPORTED_MODULE_8__["MatInputModule"], _angular_material_button__WEBPACK_IMPORTED_MODULE_9__["MatButtonModule"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_10__["MatIconModule"], _angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterModule"].forChild([{
        path: '',
        component: _login_clave_unica_page__WEBPACK_IMPORTED_MODULE_11__["LoginClaveUnicaPage"]
      }])],
      declarations: [_login_clave_unica_page__WEBPACK_IMPORTED_MODULE_11__["LoginClaveUnicaPage"]]
    })], LoginClaveUnicaPageModule);
    /***/
  },

  /***/
  "./src/app/login-clave-unica/login-clave-unica.page.scss":
  /*!***************************************************************!*\
    !*** ./src/app/login-clave-unica/login-clave-unica.page.scss ***!
    \***************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppLoginClaveUnicaLoginClaveUnicaPageScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "@charset \"UTF-8\";\n/*\n\tBTN Clave Única.\n\tEstilos gráficos para el botón de clave única.\n\tV 1.1.0\n\tpor @pyanez\n\t24/11/2020\n*/\n/* Boton estilo de base */\n.btn-cu {\n  /*display: inline-block;*/\n  display: flex;\n  justify-content: center;\n  font-family: Roboto, sans-serif;\n  font-weight: 400;\n  text-align: center;\n  vertical-align: middle;\n  -webkit-user-select: none;\n  -moz-user-select: none;\n  -ms-user-select: none;\n  user-select: none;\n  border-radius: 0;\n}\n/*Icono ClaveÚnica*/\n.btn-cu .cl-claveunica {\n  display: inline;\n  float: left;\n  text-indent: -9999px;\n}\n/*Texto ClaveÚnica*/\n.btn-cu .texto {\n  padding-left: 3px;\n  text-decoration: underline;\n}\n/* Tamaño S */\n.btn-cu.btn-s {\n  width: 130px;\n  min-width: 130px;\n  height: 36px;\n  padding: 8px 10px !important;\n  font-size: 14px;\n}\n.btn-cu.btn-s .cl-claveunica {\n  width: 20px;\n  height: 20px;\n  background-size: 20px 20px;\n}\n/* Tamaño M */\n.btn-cu.btn-m {\n  width: 160px;\n  min-width: 160px;\n  height: 42px;\n  padding: 8px 18px 8px 15px !important;\n  font-size: 16px;\n  line-height: 1.6em;\n}\n.btn-cu.btn-m .cl-claveunica {\n  display: inline-block;\n  width: 24px;\n  height: 24px;\n  background-size: 24px 24px;\n}\n/* Tamaño L */\n.btn-cu.btn-l {\n  width: 180px;\n  min-width: 180px;\n  height: 48px;\n  padding: 11px 18px !important;\n  font-size: 18px;\n}\n.btn-cu.btn-l .cl-claveunica {\n  width: 26px;\n  height: 26px;\n  background-size: 26px 26px;\n}\n/* Tamaño fluid-width */\n.btn-cu.btn-fw {\n  max-width: 550px;\n  width: 100%;\n  display: flex;\n  justify-content: center;\n}\n/* Color Estandar */\n.btn-cu.btn-color-estandar {\n  background-color: #0F69C4;\n  color: #FFF;\n}\n.btn-cu.btn-color-estandar .cl-claveunica {\n  background: url('cu-blanco.svg');\n  /* Esta URL debe ser modificada segun donde \n      quede alojado el documento */\n}\n.btn-cu.btn-color-estandar:hover {\n  background-color: #0C549C;\n  color: #FFF;\n}\n.btn-cu.btn-color-estandar:active {\n  background-color: #093F75;\n  color: #FFF;\n}\n.btn-cu.btn-color-estandar:focus {\n  background-color: #0C549C;\n  color: #FFF;\n  outline: 1px dashed #000;\n}\n.mt-32 {\n  margin-top: 32px;\n}\n.mt-24 {\n  margin-top: 24px;\n}\n.mt-80 {\n  margin-top: 5em;\n}\n.mt-40 {\n  margin-top: 2.5em;\n}\n.mt-36 {\n  margin-top: 2.25em;\n}\n.mt-52 {\n  margin-top: 3.25em;\n}\n.mt-62 {\n  margin-top: 4em;\n}\n.texto-1 {\n  font-size: 1.3em;\n  color: #000000DE;\n}\n.texto-2 {\n  font-size: 1.1em;\n  color: #575657;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbG9naW4tY2xhdmUtdW5pY2EvbG9naW4tY2xhdmUtdW5pY2EucGFnZS5zY3NzIiwic3JjL2FwcC9sb2dpbi1jbGF2ZS11bmljYS9GOlxcYXBwX21pZmFtaWxpYV9naXRcXG1pRmFtaWxpYV9wcmUvc3JjXFxhcHBcXGxvZ2luLWNsYXZlLXVuaWNhXFxsb2dpbi1jbGF2ZS11bmljYS5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsZ0JBQWdCO0FDQWhCOzs7Ozs7Q0FBQTtBQVNBLHlCQUFBO0FBQ0E7RUFDQyx5QkFBQTtFQUNBLGFBQUE7RUFDQSx1QkFBQTtFQUNBLCtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxrQkFBQTtFQUNBLHNCQUFBO0VBQ0EseUJBQUE7RUFDQSxzQkFBQTtFQUNBLHFCQUFBO0VBQ0EsaUJBQUE7RUFDQSxnQkFBQTtBREFEO0FDR0EsbUJBQUE7QUFDQTtFQUNDLGVBQUE7RUFDQSxXQUFBO0VBQ0Esb0JBQUE7QURBRDtBQ0VBLG1CQUFBO0FBQ0E7RUFDQyxpQkFBQTtFQUNBLDBCQUFBO0FEQ0Q7QUNFQSxhQUFBO0FBQ0E7RUFDQyxZQUFBO0VBQ0EsZ0JBQUE7RUFDQSxZQUFBO0VBQ0EsNEJBQUE7RUFDQSxlQUFBO0FEQ0Q7QUNFQTtFQUNDLFdBQUE7RUFDQSxZQUFBO0VBQ0EsMEJBQUE7QURDRDtBQ0VBLGFBQUE7QUFDQTtFQUNDLFlBQUE7RUFDQSxnQkFBQTtFQUNBLFlBQUE7RUFDQSxxQ0FBQTtFQUNBLGVBQUE7RUFDQSxrQkFBQTtBRENEO0FDRUE7RUFDQyxxQkFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0EsMEJBQUE7QURDRDtBQ0VBLGFBQUE7QUFDQTtFQUNDLFlBQUE7RUFDQSxnQkFBQTtFQUNBLFlBQUE7RUFDQSw2QkFBQTtFQUNBLGVBQUE7QURDRDtBQ0VBO0VBQ0MsV0FBQTtFQUNBLFlBQUE7RUFDQSwwQkFBQTtBRENEO0FDRUEsdUJBQUE7QUFDQTtFQUNDLGdCQUFBO0VBQ0EsV0FBQTtFQUNBLGFBQUE7RUFDQSx1QkFBQTtBRENEO0FDQ0EsbUJBQUE7QUFDQTtFQUNDLHlCQUFBO0VBQ0EsV0FBQTtBREVEO0FDQUE7RUFDQyxnQ0FBQTtFQUNBO2tDQUFBO0FESUQ7QUNEQTtFQUNDLHlCQUFBO0VBQ0EsV0FBQTtBRElEO0FDREE7RUFDQyx5QkFBQTtFQUNBLFdBQUE7QURJRDtBQ0RBO0VBQ0MseUJBQUE7RUFDQSxXQUFBO0VBQ0Esd0JBQUE7QURJRDtBQ0ZBO0VBQ0ksZ0JBQUE7QURLSjtBQ0hBO0VBQ0ksZ0JBQUE7QURNSjtBQ0pBO0VBQ0ksZUFBQTtBRE9KO0FDTEE7RUFDSSxpQkFBQTtBRFFKO0FDTkE7RUFDSSxrQkFBQTtBRFNKO0FDUEE7RUFDSSxrQkFBQTtBRFVKO0FDUkE7RUFDSSxlQUFBO0FEV0o7QUNUQTtFQUNJLGdCQUFBO0VBQ0EsZ0JBQUE7QURZSjtBQ1RBO0VBQ0ksZ0JBQUE7RUFDQSxjQUFBO0FEWUoiLCJmaWxlIjoic3JjL2FwcC9sb2dpbi1jbGF2ZS11bmljYS9sb2dpbi1jbGF2ZS11bmljYS5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAY2hhcnNldCBcIlVURi04XCI7XG4vKlxuXHRCVE4gQ2xhdmUgw5puaWNhLlxuXHRFc3RpbG9zIGdyw6FmaWNvcyBwYXJhIGVsIGJvdMOzbiBkZSBjbGF2ZSDDum5pY2EuXG5cdFYgMS4xLjBcblx0cG9yIEBweWFuZXpcblx0MjQvMTEvMjAyMFxuKi9cbi8qIEJvdG9uIGVzdGlsbyBkZSBiYXNlICovXG4uYnRuLWN1IHtcbiAgLypkaXNwbGF5OiBpbmxpbmUtYmxvY2s7Ki9cbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGZvbnQtZmFtaWx5OiBSb2JvdG8sIHNhbnMtc2VyaWY7XG4gIGZvbnQtd2VpZ2h0OiA0MDA7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcbiAgLXdlYmtpdC11c2VyLXNlbGVjdDogbm9uZTtcbiAgLW1vei11c2VyLXNlbGVjdDogbm9uZTtcbiAgLW1zLXVzZXItc2VsZWN0OiBub25lO1xuICB1c2VyLXNlbGVjdDogbm9uZTtcbiAgYm9yZGVyLXJhZGl1czogMDtcbn1cblxuLypJY29ubyBDbGF2ZcOabmljYSovXG4uYnRuLWN1IC5jbC1jbGF2ZXVuaWNhIHtcbiAgZGlzcGxheTogaW5saW5lO1xuICBmbG9hdDogbGVmdDtcbiAgdGV4dC1pbmRlbnQ6IC05OTk5cHg7XG59XG5cbi8qVGV4dG8gQ2xhdmXDmm5pY2EqL1xuLmJ0bi1jdSAudGV4dG8ge1xuICBwYWRkaW5nLWxlZnQ6IDNweDtcbiAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7XG59XG5cbi8qIFRhbWHDsW8gUyAqL1xuLmJ0bi1jdS5idG4tcyB7XG4gIHdpZHRoOiAxMzBweDtcbiAgbWluLXdpZHRoOiAxMzBweDtcbiAgaGVpZ2h0OiAzNnB4O1xuICBwYWRkaW5nOiA4cHggMTBweCAhaW1wb3J0YW50O1xuICBmb250LXNpemU6IDE0cHg7XG59XG5cbi5idG4tY3UuYnRuLXMgLmNsLWNsYXZldW5pY2Ege1xuICB3aWR0aDogMjBweDtcbiAgaGVpZ2h0OiAyMHB4O1xuICBiYWNrZ3JvdW5kLXNpemU6IDIwcHggMjBweDtcbn1cblxuLyogVGFtYcOxbyBNICovXG4uYnRuLWN1LmJ0bi1tIHtcbiAgd2lkdGg6IDE2MHB4O1xuICBtaW4td2lkdGg6IDE2MHB4O1xuICBoZWlnaHQ6IDQycHg7XG4gIHBhZGRpbmc6IDhweCAxOHB4IDhweCAxNXB4ICFpbXBvcnRhbnQ7XG4gIGZvbnQtc2l6ZTogMTZweDtcbiAgbGluZS1oZWlnaHQ6IDEuNmVtO1xufVxuXG4uYnRuLWN1LmJ0bi1tIC5jbC1jbGF2ZXVuaWNhIHtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICB3aWR0aDogMjRweDtcbiAgaGVpZ2h0OiAyNHB4O1xuICBiYWNrZ3JvdW5kLXNpemU6IDI0cHggMjRweDtcbn1cblxuLyogVGFtYcOxbyBMICovXG4uYnRuLWN1LmJ0bi1sIHtcbiAgd2lkdGg6IDE4MHB4O1xuICBtaW4td2lkdGg6IDE4MHB4O1xuICBoZWlnaHQ6IDQ4cHg7XG4gIHBhZGRpbmc6IDExcHggMThweCAhaW1wb3J0YW50O1xuICBmb250LXNpemU6IDE4cHg7XG59XG5cbi5idG4tY3UuYnRuLWwgLmNsLWNsYXZldW5pY2Ege1xuICB3aWR0aDogMjZweDtcbiAgaGVpZ2h0OiAyNnB4O1xuICBiYWNrZ3JvdW5kLXNpemU6IDI2cHggMjZweDtcbn1cblxuLyogVGFtYcOxbyBmbHVpZC13aWR0aCAqL1xuLmJ0bi1jdS5idG4tZncge1xuICBtYXgtd2lkdGg6IDU1MHB4O1xuICB3aWR0aDogMTAwJTtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG59XG5cbi8qIENvbG9yIEVzdGFuZGFyICovXG4uYnRuLWN1LmJ0bi1jb2xvci1lc3RhbmRhciB7XG4gIGJhY2tncm91bmQtY29sb3I6ICMwRjY5QzQ7XG4gIGNvbG9yOiAjRkZGO1xufVxuXG4uYnRuLWN1LmJ0bi1jb2xvci1lc3RhbmRhciAuY2wtY2xhdmV1bmljYSB7XG4gIGJhY2tncm91bmQ6IHVybChcIi4uLy4uL2Fzc2V0cy9pY29uL2N1LWJsYW5jby5zdmdcIik7XG4gIC8qIEVzdGEgVVJMIGRlYmUgc2VyIG1vZGlmaWNhZGEgc2VndW4gZG9uZGUgXG4gICAgICBxdWVkZSBhbG9qYWRvIGVsIGRvY3VtZW50byAqL1xufVxuXG4uYnRuLWN1LmJ0bi1jb2xvci1lc3RhbmRhcjpob3ZlciB7XG4gIGJhY2tncm91bmQtY29sb3I6ICMwQzU0OUM7XG4gIGNvbG9yOiAjRkZGO1xufVxuXG4uYnRuLWN1LmJ0bi1jb2xvci1lc3RhbmRhcjphY3RpdmUge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDkzRjc1O1xuICBjb2xvcjogI0ZGRjtcbn1cblxuLmJ0bi1jdS5idG4tY29sb3ItZXN0YW5kYXI6Zm9jdXMge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMEM1NDlDO1xuICBjb2xvcjogI0ZGRjtcbiAgb3V0bGluZTogMXB4IGRhc2hlZCAjMDAwO1xufVxuXG4ubXQtMzIge1xuICBtYXJnaW4tdG9wOiAzMnB4O1xufVxuXG4ubXQtMjQge1xuICBtYXJnaW4tdG9wOiAyNHB4O1xufVxuXG4ubXQtODAge1xuICBtYXJnaW4tdG9wOiA1ZW07XG59XG5cbi5tdC00MCB7XG4gIG1hcmdpbi10b3A6IDIuNWVtO1xufVxuXG4ubXQtMzYge1xuICBtYXJnaW4tdG9wOiAyLjI1ZW07XG59XG5cbi5tdC01MiB7XG4gIG1hcmdpbi10b3A6IDMuMjVlbTtcbn1cblxuLm10LTYyIHtcbiAgbWFyZ2luLXRvcDogNGVtO1xufVxuXG4udGV4dG8tMSB7XG4gIGZvbnQtc2l6ZTogMS4zZW07XG4gIGNvbG9yOiAjMDAwMDAwREU7XG59XG5cbi50ZXh0by0yIHtcbiAgZm9udC1zaXplOiAxLjFlbTtcbiAgY29sb3I6ICM1NzU2NTc7XG59IiwiLypcclxuXHRCVE4gQ2xhdmUgw5puaWNhLlxyXG5cdEVzdGlsb3MgZ3LDoWZpY29zIHBhcmEgZWwgYm90w7NuIGRlIGNsYXZlIMO6bmljYS5cclxuXHRWIDEuMS4wXHJcblx0cG9yIEBweWFuZXpcclxuXHQyNC8xMS8yMDIwXHJcbiovXHJcblxyXG5cclxuLyogQm90b24gZXN0aWxvIGRlIGJhc2UgKi9cclxuLmJ0bi1jdSB7XHJcblx0LypkaXNwbGF5OiBpbmxpbmUtYmxvY2s7Ki9cclxuXHRkaXNwbGF5OiBmbGV4O1xyXG5cdGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG5cdGZvbnQtZmFtaWx5OiBSb2JvdG8sIHNhbnMtc2VyaWY7XHJcblx0Zm9udC13ZWlnaHQ6IDQwMDtcclxuXHR0ZXh0LWFsaWduOiBjZW50ZXI7XHJcblx0dmVydGljYWwtYWxpZ246IG1pZGRsZTtcclxuXHQtd2Via2l0LXVzZXItc2VsZWN0OiBub25lO1xyXG5cdC1tb3otdXNlci1zZWxlY3Q6IG5vbmU7XHJcblx0LW1zLXVzZXItc2VsZWN0OiBub25lO1xyXG5cdHVzZXItc2VsZWN0OiBub25lO1xyXG5cdGJvcmRlci1yYWRpdXM6IDA7XHJcbn1cclxuXHJcbi8qSWNvbm8gQ2xhdmXDmm5pY2EqL1xyXG4uYnRuLWN1IC5jbC1jbGF2ZXVuaWNhIHtcclxuXHRkaXNwbGF5OiBpbmxpbmU7XHJcblx0ZmxvYXQ6IGxlZnQ7XHJcblx0dGV4dC1pbmRlbnQ6IC05OTk5cHg7XHJcbn1cclxuLypUZXh0byBDbGF2ZcOabmljYSovXHJcbi5idG4tY3UgLnRleHRvIHtcclxuXHRwYWRkaW5nLWxlZnQ6IDNweDtcclxuXHR0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZTtcclxufVxyXG5cclxuLyogVGFtYcOxbyBTICovXHJcbi5idG4tY3UuYnRuLXMge1xyXG5cdHdpZHRoOiAxMzBweDtcclxuXHRtaW4td2lkdGg6IDEzMHB4O1xyXG5cdGhlaWdodDogMzZweDtcclxuXHRwYWRkaW5nOiA4cHggMTBweCAhaW1wb3J0YW50O1xyXG5cdGZvbnQtc2l6ZTogMTRweDtcclxufVxyXG5cclxuLmJ0bi1jdS5idG4tcyAuY2wtY2xhdmV1bmljYSB7XHJcblx0d2lkdGg6IDIwcHg7XHJcblx0aGVpZ2h0OiAyMHB4O1xyXG5cdGJhY2tncm91bmQtc2l6ZTogMjBweCAyMHB4O1xyXG59XHJcblxyXG4vKiBUYW1hw7FvIE0gKi9cclxuLmJ0bi1jdS5idG4tbSB7XHJcblx0d2lkdGg6IDE2MHB4O1xyXG5cdG1pbi13aWR0aDogMTYwcHg7XHJcblx0aGVpZ2h0OiA0MnB4O1xyXG5cdHBhZGRpbmc6IDhweCAxOHB4IDhweCAxNXB4ICFpbXBvcnRhbnQ7XHJcblx0Zm9udC1zaXplOiAxNnB4O1xyXG5cdGxpbmUtaGVpZ2h0OiAxLjZlbTtcclxufVxyXG5cclxuLmJ0bi1jdS5idG4tbSAuY2wtY2xhdmV1bmljYSB7XHJcblx0ZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG5cdHdpZHRoOiAyNHB4O1xyXG5cdGhlaWdodDogMjRweDtcclxuXHRiYWNrZ3JvdW5kLXNpemU6IDI0cHggMjRweDtcclxufVxyXG5cclxuLyogVGFtYcOxbyBMICovXHJcbi5idG4tY3UuYnRuLWwge1xyXG5cdHdpZHRoOiAxODBweDtcclxuXHRtaW4td2lkdGg6IDE4MHB4O1xyXG5cdGhlaWdodDogNDhweDtcclxuXHRwYWRkaW5nOiAxMXB4IDE4cHggIWltcG9ydGFudDtcclxuXHRmb250LXNpemU6IDE4cHg7XHJcbn1cclxuXHJcbi5idG4tY3UuYnRuLWwgLmNsLWNsYXZldW5pY2Ege1xyXG5cdHdpZHRoOiAyNnB4O1xyXG5cdGhlaWdodDogMjZweDtcclxuXHRiYWNrZ3JvdW5kLXNpemU6IDI2cHggMjZweDtcclxufVxyXG5cclxuLyogVGFtYcOxbyBmbHVpZC13aWR0aCAqL1xyXG4uYnRuLWN1LmJ0bi1mdyB7XHJcblx0bWF4LXdpZHRoOiA1NTBweDtcclxuXHR3aWR0aDogMTAwJTtcclxuXHRkaXNwbGF5OiBmbGV4O1xyXG5cdGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG59XHJcbi8qIENvbG9yIEVzdGFuZGFyICovXHJcbi5idG4tY3UuYnRuLWNvbG9yLWVzdGFuZGFyIHtcclxuXHRiYWNrZ3JvdW5kLWNvbG9yOiAjMEY2OUM0O1xyXG5cdGNvbG9yOiAjRkZGO1xyXG59XHJcbi5idG4tY3UuYnRuLWNvbG9yLWVzdGFuZGFyIC5jbC1jbGF2ZXVuaWNhIHtcclxuXHRiYWNrZ3JvdW5kOiB1cmwoXCIuLi8uLi9hc3NldHMvaWNvbi9jdS1ibGFuY28uc3ZnXCIpO1xyXG5cdC8qIEVzdGEgVVJMIGRlYmUgc2VyIG1vZGlmaWNhZGEgc2VndW4gZG9uZGUgXHJcblx0ICAgIHF1ZWRlIGFsb2phZG8gZWwgZG9jdW1lbnRvICovXHJcbn1cclxuLmJ0bi1jdS5idG4tY29sb3ItZXN0YW5kYXI6aG92ZXIge1xyXG5cdGJhY2tncm91bmQtY29sb3I6ICMwQzU0OUM7XHJcblx0Y29sb3I6ICNGRkY7XHJcbn1cclxuXHJcbi5idG4tY3UuYnRuLWNvbG9yLWVzdGFuZGFyOmFjdGl2ZSB7XHJcblx0YmFja2dyb3VuZC1jb2xvcjogIzA5M0Y3NTtcclxuXHRjb2xvcjogI0ZGRjtcclxufVxyXG5cclxuLmJ0bi1jdS5idG4tY29sb3ItZXN0YW5kYXI6Zm9jdXMge1xyXG5cdGJhY2tncm91bmQtY29sb3I6ICMwQzU0OUM7XHJcblx0Y29sb3I6ICNGRkY7XHJcblx0b3V0bGluZTogMXB4IGRhc2hlZCAjMDAwO1xyXG59XHJcbi5tdC0zMntcclxuICAgIG1hcmdpbi10b3A6IDMycHg7XHJcbn1cclxuLm10LTI0e1xyXG4gICAgbWFyZ2luLXRvcDogMjRweDtcclxufVxyXG4ubXQtODB7XHJcbiAgICBtYXJnaW4tdG9wOiA1ZW07XHJcbn1cclxuLm10LTQwe1xyXG4gICAgbWFyZ2luLXRvcDogMi41ZW07XHJcbn1cclxuLm10LTM2e1xyXG4gICAgbWFyZ2luLXRvcDogMi4yNWVtO1xyXG59XHJcbi5tdC01MntcclxuICAgIG1hcmdpbi10b3A6IDMuMjVlbTtcclxufVxyXG4ubXQtNjJ7XHJcbiAgICBtYXJnaW4tdG9wOiA0ZW07XHJcbn1cclxuLnRleHRvLTF7XHJcbiAgICBmb250LXNpemU6IDEuM2VtO1xyXG4gICAgY29sb3I6ICMwMDAwMDBERTtcclxuICAgIFxyXG59XHJcbi50ZXh0by0ye1xyXG4gICAgZm9udC1zaXplOiAxLjFlbTtcclxuICAgIGNvbG9yOiAjNTc1NjU3O1xyXG4gICAgXHJcbn0iXX0= */";
    /***/
  },

  /***/
  "./src/app/login-clave-unica/login-clave-unica.page.ts":
  /*!*************************************************************!*\
    !*** ./src/app/login-clave-unica/login-clave-unica.page.ts ***!
    \*************************************************************/

  /*! exports provided: LoginClaveUnicaPage */

  /***/
  function srcAppLoginClaveUnicaLoginClaveUnicaPageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "LoginClaveUnicaPage", function () {
      return LoginClaveUnicaPage;
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


    var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/platform-browser */
    "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _app_services_ServicioUtiles__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ../../app/services/ServicioUtiles */
    "./src/app/services/ServicioUtiles.ts");
    /* harmony import */


    var _app_services_ServicioClaveUnica__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ../../app/services/ServicioClaveUnica */
    "./src/app/services/ServicioClaveUnica.ts");
    /* harmony import */


    var _environments_environment__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ../../environments/environment */
    "./src/environments/environment.ts"); //parametros
    //environment


    var LoginClaveUnicaPage = /*#__PURE__*/function () {
      function LoginClaveUnicaPage(navCtrl, toast, modalCtrl, platform, menu, activatedRoute, router, utiles, loading, claveUnica, alertController, sanitizer) {
        _classCallCheck(this, LoginClaveUnicaPage);

        this.navCtrl = navCtrl;
        this.toast = toast;
        this.modalCtrl = modalCtrl;
        this.platform = platform;
        this.menu = menu;
        this.activatedRoute = activatedRoute;
        this.router = router;
        this.utiles = utiles;
        this.loading = loading;
        this.claveUnica = claveUnica;
        this.alertController = alertController;
        this.sanitizer = sanitizer;
        this.urlClaveUnica = '';
      }

      _createClass(LoginClaveUnicaPage, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this = this;

          this.activatedRoute.queryParams.subscribe(function (params) {
            if (params && params.state) {
              //store the temp in data        
              _this.stateClaveUnica = params.state; //ahora hacemos la llamada para obtener la configuración de clave unica

              _this.obtenerDatosConfiguracion();
            }
          });
        }
      }, {
        key: "obtenerDatosConfiguracion",
        value: function obtenerDatosConfiguracion() {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
            var _this2 = this;

            var produccion, loader;
            return regeneratorRuntime.wrap(function _callee2$(_context2) {
              while (1) {
                switch (_context2.prev = _context2.next) {
                  case 0:
                    produccion = '0';

                    if (_environments_environment__WEBPACK_IMPORTED_MODULE_7__["environment"].production) {
                      produccion = '1';
                    }

                    _context2.next = 4;
                    return this.loading.create({
                      message: 'Buscando...<br>configuración',
                      duration: 3000
                    });

                  case 4:
                    loader = _context2.sent;
                    _context2.next = 7;
                    return loader.present().then(function () {
                      return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(_this2, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
                        var _this3 = this;

                        return regeneratorRuntime.wrap(function _callee$(_context) {
                          while (1) {
                            switch (_context.prev = _context.next) {
                              case 0:
                                if (!this.utiles.isAppOnDevice()) {
                                  //llamada web
                                  this.claveUnica.postConfiguracionClaveUnica(produccion).subscribe(function (data) {
                                    _this3.configClaveUnica = data;
                                    console.log(_this3.configClaveUnica);

                                    _this3.construyeUrl();

                                    loader.dismiss();
                                  });
                                } else {
                                  //llamada nativa
                                  this.claveUnica.postConfiguracionClaveUnicaNative(produccion).then(function (response) {
                                    _this3.configClaveUnica = JSON.parse(response.data);
                                    console.log(_this3.configClaveUnica);

                                    _this3.construyeUrl();

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
        key: "construyeUrl",
        value: function construyeUrl() {
          if (this.configClaveUnica && this.configClaveUnica.Id > 0) {
            //"https://accounts.claveunica.gob.cl/openid/authorize/?client_id=08e31dfd6f4d475d9947b70f59755dc8&response_type=code&scope=openid run name&redirect_uri=https%3a%2f%2fapp.mifamilia.com%2fApi%2fClaveUnica&state=68dmfgOr0tSGASttTn1aMml8xLzeL983"
            var url = this.configClaveUnica.Url + 'authorize/?client_id=' + this.configClaveUnica.ClientId + '&response_type=code&scope=openid run name&redirect_uri=' + this.configClaveUnica.RedirectUri + '&state=' + this.stateClaveUnica;
            this.urlClaveUnica = encodeURI(url);
            /*       console.log(this.urlClaveUnica);
                  console.log(encodeURI(this.urlClaveUnica)); */
          }
        }
      }, {
        key: "volver",
        value: function volver() {
          localStorage.removeItem('STATE_CLAVE_UNICA');
          this.navCtrl.navigateRoot('pre-registro-uno');
        }
      }]);

      return LoginClaveUnicaPage;
    }();

    LoginClaveUnicaPage.ctorParameters = function () {
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
        type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]
      }, {
        type: _app_services_ServicioUtiles__WEBPACK_IMPORTED_MODULE_5__["ServicioUtiles"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["LoadingController"]
      }, {
        type: _app_services_ServicioClaveUnica__WEBPACK_IMPORTED_MODULE_6__["ServicioClaveUnica"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["AlertController"]
      }, {
        type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["DomSanitizer"]
      }];
    };

    LoginClaveUnicaPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-login-clave-unica',
      template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! raw-loader!./login-clave-unica.page.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/login-clave-unica/login-clave-unica.page.html"))["default"],
      styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! ./login-clave-unica.page.scss */
      "./src/app/login-clave-unica/login-clave-unica.page.scss"))["default"]]
    })], LoginClaveUnicaPage);
    /***/
  }
}]);
//# sourceMappingURL=login-clave-unica-login-clave-unica-module-es5.js.map