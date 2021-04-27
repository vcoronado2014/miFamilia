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


    __webpack_exports__["default"] = "@charset \"UTF-8\";\n/*\n\tBTN Clave Única.\n\tEstilos gráficos para el botón de clave única.\n\tV 1.1.0\n\tpor @pyanez\n\t24/11/2020\n*/\n/* Boton estilo de base */\n.btn-cu {\n  /*display: inline-block;*/\n  display: flex;\n  justify-content: center;\n  font-family: Roboto, sans-serif;\n  font-weight: 400;\n  text-align: center;\n  vertical-align: middle;\n  -webkit-user-select: none;\n  -moz-user-select: none;\n  -ms-user-select: none;\n  user-select: none;\n  border-radius: 0;\n}\n/*Icono ClaveÚnica*/\n.btn-cu .cl-claveunica {\n  display: inline;\n  float: left;\n  text-indent: -9999px;\n}\n/*Texto ClaveÚnica*/\n.btn-cu .texto {\n  padding-left: 3px;\n  text-decoration: underline;\n}\n/* Tamaño S */\n.btn-cu.btn-s {\n  width: 130px;\n  min-width: 130px;\n  height: 36px;\n  padding: 8px 10px !important;\n  font-size: 14px;\n}\n.btn-cu.btn-s .cl-claveunica {\n  width: 20px;\n  height: 20px;\n  background-size: 20px 20px;\n}\n/* Tamaño M */\n.btn-cu.btn-m {\n  width: 160px;\n  min-width: 160px;\n  height: 42px;\n  padding: 8px 18px 8px 15px !important;\n  font-size: 16px;\n  line-height: 1.6em;\n}\n.btn-cu.btn-m .cl-claveunica {\n  display: inline-block;\n  width: 24px;\n  height: 24px;\n  background-size: 24px 24px;\n}\n/* Tamaño L */\n.btn-cu.btn-l {\n  width: 180px;\n  min-width: 180px;\n  height: 48px;\n  padding: 11px 18px !important;\n  font-size: 18px;\n}\n.btn-cu.btn-l .cl-claveunica {\n  width: 26px;\n  height: 26px;\n  background-size: 26px 26px;\n}\n/* Tamaño fluid-width */\n.btn-cu.btn-fw {\n  max-width: 550px;\n  width: 100%;\n  display: flex;\n  justify-content: center;\n}\n/* Color Estandar */\n.btn-cu.btn-color-estandar {\n  background-color: #0F69C4;\n  color: #FFF;\n}\n.btn-cu.btn-color-estandar .cl-claveunica {\n  background: url('cu-blanco.svg');\n  /* Esta URL debe ser modificada segun donde \n      quede alojado el documento */\n}\n.btn-cu.btn-color-estandar:hover {\n  background-color: #0C549C;\n  color: #FFF;\n}\n.btn-cu.btn-color-estandar:active {\n  background-color: #093F75;\n  color: #FFF;\n}\n.btn-cu.btn-color-estandar:focus {\n  background-color: #0C549C;\n  color: #FFF;\n  outline: 1px dashed #000;\n}\n.mt-32 {\n  margin-top: 32px;\n}\n.mt-24 {\n  margin-top: 24px;\n}\n.mt-80 {\n  margin-top: 5em;\n}\n.mt-40 {\n  margin-top: 2.5em;\n}\n.mt-36 {\n  margin-top: 2.25em;\n}\n.mt-52 {\n  margin-top: 3.25em;\n}\n.mt-62 {\n  margin-top: 4em;\n}\n.texto-1 {\n  font-size: 1.3em;\n  color: #000000DE;\n}\n.texto-2 {\n  font-size: 1.1em;\n  color: #575657;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbG9naW4tY2xhdmUtdW5pY2EvbG9naW4tY2xhdmUtdW5pY2EucGFnZS5zY3NzIiwiL1VzZXJzL3ZpY3RvcmNvcm9uYWRvL0Rlc2t0b3AvbWlGYW1pbGlhX3ByZS9zcmMvYXBwL2xvZ2luLWNsYXZlLXVuaWNhL2xvZ2luLWNsYXZlLXVuaWNhLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxnQkFBZ0I7QUNBaEI7Ozs7OztDQUFBO0FBU0EseUJBQUE7QUFDQTtFQUNDLHlCQUFBO0VBQ0EsYUFBQTtFQUNBLHVCQUFBO0VBQ0EsK0JBQUE7RUFDQSxnQkFBQTtFQUNBLGtCQUFBO0VBQ0Esc0JBQUE7RUFDQSx5QkFBQTtFQUNBLHNCQUFBO0VBQ0EscUJBQUE7RUFDQSxpQkFBQTtFQUNBLGdCQUFBO0FEQUQ7QUNHQSxtQkFBQTtBQUNBO0VBQ0MsZUFBQTtFQUNBLFdBQUE7RUFDQSxvQkFBQTtBREFEO0FDRUEsbUJBQUE7QUFDQTtFQUNDLGlCQUFBO0VBQ0EsMEJBQUE7QURDRDtBQ0VBLGFBQUE7QUFDQTtFQUNDLFlBQUE7RUFDQSxnQkFBQTtFQUNBLFlBQUE7RUFDQSw0QkFBQTtFQUNBLGVBQUE7QURDRDtBQ0VBO0VBQ0MsV0FBQTtFQUNBLFlBQUE7RUFDQSwwQkFBQTtBRENEO0FDRUEsYUFBQTtBQUNBO0VBQ0MsWUFBQTtFQUNBLGdCQUFBO0VBQ0EsWUFBQTtFQUNBLHFDQUFBO0VBQ0EsZUFBQTtFQUNBLGtCQUFBO0FEQ0Q7QUNFQTtFQUNDLHFCQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSwwQkFBQTtBRENEO0FDRUEsYUFBQTtBQUNBO0VBQ0MsWUFBQTtFQUNBLGdCQUFBO0VBQ0EsWUFBQTtFQUNBLDZCQUFBO0VBQ0EsZUFBQTtBRENEO0FDRUE7RUFDQyxXQUFBO0VBQ0EsWUFBQTtFQUNBLDBCQUFBO0FEQ0Q7QUNFQSx1QkFBQTtBQUNBO0VBQ0MsZ0JBQUE7RUFDQSxXQUFBO0VBQ0EsYUFBQTtFQUNBLHVCQUFBO0FEQ0Q7QUNDQSxtQkFBQTtBQUNBO0VBQ0MseUJBQUE7RUFDQSxXQUFBO0FERUQ7QUNBQTtFQUNDLGdDQUFBO0VBQ0E7a0NBQUE7QURJRDtBQ0RBO0VBQ0MseUJBQUE7RUFDQSxXQUFBO0FESUQ7QUNEQTtFQUNDLHlCQUFBO0VBQ0EsV0FBQTtBRElEO0FDREE7RUFDQyx5QkFBQTtFQUNBLFdBQUE7RUFDQSx3QkFBQTtBRElEO0FDRkE7RUFDSSxnQkFBQTtBREtKO0FDSEE7RUFDSSxnQkFBQTtBRE1KO0FDSkE7RUFDSSxlQUFBO0FET0o7QUNMQTtFQUNJLGlCQUFBO0FEUUo7QUNOQTtFQUNJLGtCQUFBO0FEU0o7QUNQQTtFQUNJLGtCQUFBO0FEVUo7QUNSQTtFQUNJLGVBQUE7QURXSjtBQ1RBO0VBQ0ksZ0JBQUE7RUFDQSxnQkFBQTtBRFlKO0FDVEE7RUFDSSxnQkFBQTtFQUNBLGNBQUE7QURZSiIsImZpbGUiOiJzcmMvYXBwL2xvZ2luLWNsYXZlLXVuaWNhL2xvZ2luLWNsYXZlLXVuaWNhLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIkBjaGFyc2V0IFwiVVRGLThcIjtcbi8qXG5cdEJUTiBDbGF2ZSDDmm5pY2EuXG5cdEVzdGlsb3MgZ3LDoWZpY29zIHBhcmEgZWwgYm90w7NuIGRlIGNsYXZlIMO6bmljYS5cblx0ViAxLjEuMFxuXHRwb3IgQHB5YW5lelxuXHQyNC8xMS8yMDIwXG4qL1xuLyogQm90b24gZXN0aWxvIGRlIGJhc2UgKi9cbi5idG4tY3Uge1xuICAvKmRpc3BsYXk6IGlubGluZS1ibG9jazsqL1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgZm9udC1mYW1pbHk6IFJvYm90bywgc2Fucy1zZXJpZjtcbiAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xuICAtd2Via2l0LXVzZXItc2VsZWN0OiBub25lO1xuICAtbW96LXVzZXItc2VsZWN0OiBub25lO1xuICAtbXMtdXNlci1zZWxlY3Q6IG5vbmU7XG4gIHVzZXItc2VsZWN0OiBub25lO1xuICBib3JkZXItcmFkaXVzOiAwO1xufVxuXG4vKkljb25vIENsYXZlw5puaWNhKi9cbi5idG4tY3UgLmNsLWNsYXZldW5pY2Ege1xuICBkaXNwbGF5OiBpbmxpbmU7XG4gIGZsb2F0OiBsZWZ0O1xuICB0ZXh0LWluZGVudDogLTk5OTlweDtcbn1cblxuLypUZXh0byBDbGF2ZcOabmljYSovXG4uYnRuLWN1IC50ZXh0byB7XG4gIHBhZGRpbmctbGVmdDogM3B4O1xuICB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZTtcbn1cblxuLyogVGFtYcOxbyBTICovXG4uYnRuLWN1LmJ0bi1zIHtcbiAgd2lkdGg6IDEzMHB4O1xuICBtaW4td2lkdGg6IDEzMHB4O1xuICBoZWlnaHQ6IDM2cHg7XG4gIHBhZGRpbmc6IDhweCAxMHB4ICFpbXBvcnRhbnQ7XG4gIGZvbnQtc2l6ZTogMTRweDtcbn1cblxuLmJ0bi1jdS5idG4tcyAuY2wtY2xhdmV1bmljYSB7XG4gIHdpZHRoOiAyMHB4O1xuICBoZWlnaHQ6IDIwcHg7XG4gIGJhY2tncm91bmQtc2l6ZTogMjBweCAyMHB4O1xufVxuXG4vKiBUYW1hw7FvIE0gKi9cbi5idG4tY3UuYnRuLW0ge1xuICB3aWR0aDogMTYwcHg7XG4gIG1pbi13aWR0aDogMTYwcHg7XG4gIGhlaWdodDogNDJweDtcbiAgcGFkZGluZzogOHB4IDE4cHggOHB4IDE1cHggIWltcG9ydGFudDtcbiAgZm9udC1zaXplOiAxNnB4O1xuICBsaW5lLWhlaWdodDogMS42ZW07XG59XG5cbi5idG4tY3UuYnRuLW0gLmNsLWNsYXZldW5pY2Ege1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIHdpZHRoOiAyNHB4O1xuICBoZWlnaHQ6IDI0cHg7XG4gIGJhY2tncm91bmQtc2l6ZTogMjRweCAyNHB4O1xufVxuXG4vKiBUYW1hw7FvIEwgKi9cbi5idG4tY3UuYnRuLWwge1xuICB3aWR0aDogMTgwcHg7XG4gIG1pbi13aWR0aDogMTgwcHg7XG4gIGhlaWdodDogNDhweDtcbiAgcGFkZGluZzogMTFweCAxOHB4ICFpbXBvcnRhbnQ7XG4gIGZvbnQtc2l6ZTogMThweDtcbn1cblxuLmJ0bi1jdS5idG4tbCAuY2wtY2xhdmV1bmljYSB7XG4gIHdpZHRoOiAyNnB4O1xuICBoZWlnaHQ6IDI2cHg7XG4gIGJhY2tncm91bmQtc2l6ZTogMjZweCAyNnB4O1xufVxuXG4vKiBUYW1hw7FvIGZsdWlkLXdpZHRoICovXG4uYnRuLWN1LmJ0bi1mdyB7XG4gIG1heC13aWR0aDogNTUwcHg7XG4gIHdpZHRoOiAxMDAlO1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbn1cblxuLyogQ29sb3IgRXN0YW5kYXIgKi9cbi5idG4tY3UuYnRuLWNvbG9yLWVzdGFuZGFyIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzBGNjlDNDtcbiAgY29sb3I6ICNGRkY7XG59XG5cbi5idG4tY3UuYnRuLWNvbG9yLWVzdGFuZGFyIC5jbC1jbGF2ZXVuaWNhIHtcbiAgYmFja2dyb3VuZDogdXJsKFwiLi4vLi4vYXNzZXRzL2ljb24vY3UtYmxhbmNvLnN2Z1wiKTtcbiAgLyogRXN0YSBVUkwgZGViZSBzZXIgbW9kaWZpY2FkYSBzZWd1biBkb25kZSBcbiAgICAgIHF1ZWRlIGFsb2phZG8gZWwgZG9jdW1lbnRvICovXG59XG5cbi5idG4tY3UuYnRuLWNvbG9yLWVzdGFuZGFyOmhvdmVyIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzBDNTQ5QztcbiAgY29sb3I6ICNGRkY7XG59XG5cbi5idG4tY3UuYnRuLWNvbG9yLWVzdGFuZGFyOmFjdGl2ZSB7XG4gIGJhY2tncm91bmQtY29sb3I6ICMwOTNGNzU7XG4gIGNvbG9yOiAjRkZGO1xufVxuXG4uYnRuLWN1LmJ0bi1jb2xvci1lc3RhbmRhcjpmb2N1cyB7XG4gIGJhY2tncm91bmQtY29sb3I6ICMwQzU0OUM7XG4gIGNvbG9yOiAjRkZGO1xuICBvdXRsaW5lOiAxcHggZGFzaGVkICMwMDA7XG59XG5cbi5tdC0zMiB7XG4gIG1hcmdpbi10b3A6IDMycHg7XG59XG5cbi5tdC0yNCB7XG4gIG1hcmdpbi10b3A6IDI0cHg7XG59XG5cbi5tdC04MCB7XG4gIG1hcmdpbi10b3A6IDVlbTtcbn1cblxuLm10LTQwIHtcbiAgbWFyZ2luLXRvcDogMi41ZW07XG59XG5cbi5tdC0zNiB7XG4gIG1hcmdpbi10b3A6IDIuMjVlbTtcbn1cblxuLm10LTUyIHtcbiAgbWFyZ2luLXRvcDogMy4yNWVtO1xufVxuXG4ubXQtNjIge1xuICBtYXJnaW4tdG9wOiA0ZW07XG59XG5cbi50ZXh0by0xIHtcbiAgZm9udC1zaXplOiAxLjNlbTtcbiAgY29sb3I6ICMwMDAwMDBERTtcbn1cblxuLnRleHRvLTIge1xuICBmb250LXNpemU6IDEuMWVtO1xuICBjb2xvcjogIzU3NTY1Nztcbn0iLCIvKlxyXG5cdEJUTiBDbGF2ZSDDmm5pY2EuXHJcblx0RXN0aWxvcyBncsOhZmljb3MgcGFyYSBlbCBib3TDs24gZGUgY2xhdmUgw7puaWNhLlxyXG5cdFYgMS4xLjBcclxuXHRwb3IgQHB5YW5lelxyXG5cdDI0LzExLzIwMjBcclxuKi9cclxuXHJcblxyXG4vKiBCb3RvbiBlc3RpbG8gZGUgYmFzZSAqL1xyXG4uYnRuLWN1IHtcclxuXHQvKmRpc3BsYXk6IGlubGluZS1ibG9jazsqL1xyXG5cdGRpc3BsYXk6IGZsZXg7XHJcblx0anVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcblx0Zm9udC1mYW1pbHk6IFJvYm90bywgc2Fucy1zZXJpZjtcclxuXHRmb250LXdlaWdodDogNDAwO1xyXG5cdHRleHQtYWxpZ246IGNlbnRlcjtcclxuXHR2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xyXG5cdC13ZWJraXQtdXNlci1zZWxlY3Q6IG5vbmU7XHJcblx0LW1vei11c2VyLXNlbGVjdDogbm9uZTtcclxuXHQtbXMtdXNlci1zZWxlY3Q6IG5vbmU7XHJcblx0dXNlci1zZWxlY3Q6IG5vbmU7XHJcblx0Ym9yZGVyLXJhZGl1czogMDtcclxufVxyXG5cclxuLypJY29ubyBDbGF2ZcOabmljYSovXHJcbi5idG4tY3UgLmNsLWNsYXZldW5pY2Ege1xyXG5cdGRpc3BsYXk6IGlubGluZTtcclxuXHRmbG9hdDogbGVmdDtcclxuXHR0ZXh0LWluZGVudDogLTk5OTlweDtcclxufVxyXG4vKlRleHRvIENsYXZlw5puaWNhKi9cclxuLmJ0bi1jdSAudGV4dG8ge1xyXG5cdHBhZGRpbmctbGVmdDogM3B4O1xyXG5cdHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lO1xyXG59XHJcblxyXG4vKiBUYW1hw7FvIFMgKi9cclxuLmJ0bi1jdS5idG4tcyB7XHJcblx0d2lkdGg6IDEzMHB4O1xyXG5cdG1pbi13aWR0aDogMTMwcHg7XHJcblx0aGVpZ2h0OiAzNnB4O1xyXG5cdHBhZGRpbmc6IDhweCAxMHB4ICFpbXBvcnRhbnQ7XHJcblx0Zm9udC1zaXplOiAxNHB4O1xyXG59XHJcblxyXG4uYnRuLWN1LmJ0bi1zIC5jbC1jbGF2ZXVuaWNhIHtcclxuXHR3aWR0aDogMjBweDtcclxuXHRoZWlnaHQ6IDIwcHg7XHJcblx0YmFja2dyb3VuZC1zaXplOiAyMHB4IDIwcHg7XHJcbn1cclxuXHJcbi8qIFRhbWHDsW8gTSAqL1xyXG4uYnRuLWN1LmJ0bi1tIHtcclxuXHR3aWR0aDogMTYwcHg7XHJcblx0bWluLXdpZHRoOiAxNjBweDtcclxuXHRoZWlnaHQ6IDQycHg7XHJcblx0cGFkZGluZzogOHB4IDE4cHggOHB4IDE1cHggIWltcG9ydGFudDtcclxuXHRmb250LXNpemU6IDE2cHg7XHJcblx0bGluZS1oZWlnaHQ6IDEuNmVtO1xyXG59XHJcblxyXG4uYnRuLWN1LmJ0bi1tIC5jbC1jbGF2ZXVuaWNhIHtcclxuXHRkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcblx0d2lkdGg6IDI0cHg7XHJcblx0aGVpZ2h0OiAyNHB4O1xyXG5cdGJhY2tncm91bmQtc2l6ZTogMjRweCAyNHB4O1xyXG59XHJcblxyXG4vKiBUYW1hw7FvIEwgKi9cclxuLmJ0bi1jdS5idG4tbCB7XHJcblx0d2lkdGg6IDE4MHB4O1xyXG5cdG1pbi13aWR0aDogMTgwcHg7XHJcblx0aGVpZ2h0OiA0OHB4O1xyXG5cdHBhZGRpbmc6IDExcHggMThweCAhaW1wb3J0YW50O1xyXG5cdGZvbnQtc2l6ZTogMThweDtcclxufVxyXG5cclxuLmJ0bi1jdS5idG4tbCAuY2wtY2xhdmV1bmljYSB7XHJcblx0d2lkdGg6IDI2cHg7XHJcblx0aGVpZ2h0OiAyNnB4O1xyXG5cdGJhY2tncm91bmQtc2l6ZTogMjZweCAyNnB4O1xyXG59XHJcblxyXG4vKiBUYW1hw7FvIGZsdWlkLXdpZHRoICovXHJcbi5idG4tY3UuYnRuLWZ3IHtcclxuXHRtYXgtd2lkdGg6IDU1MHB4O1xyXG5cdHdpZHRoOiAxMDAlO1xyXG5cdGRpc3BsYXk6IGZsZXg7XHJcblx0anVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbn1cclxuLyogQ29sb3IgRXN0YW5kYXIgKi9cclxuLmJ0bi1jdS5idG4tY29sb3ItZXN0YW5kYXIge1xyXG5cdGJhY2tncm91bmQtY29sb3I6ICMwRjY5QzQ7XHJcblx0Y29sb3I6ICNGRkY7XHJcbn1cclxuLmJ0bi1jdS5idG4tY29sb3ItZXN0YW5kYXIgLmNsLWNsYXZldW5pY2Ege1xyXG5cdGJhY2tncm91bmQ6IHVybChcIi4uLy4uL2Fzc2V0cy9pY29uL2N1LWJsYW5jby5zdmdcIik7XHJcblx0LyogRXN0YSBVUkwgZGViZSBzZXIgbW9kaWZpY2FkYSBzZWd1biBkb25kZSBcclxuXHQgICAgcXVlZGUgYWxvamFkbyBlbCBkb2N1bWVudG8gKi9cclxufVxyXG4uYnRuLWN1LmJ0bi1jb2xvci1lc3RhbmRhcjpob3ZlciB7XHJcblx0YmFja2dyb3VuZC1jb2xvcjogIzBDNTQ5QztcclxuXHRjb2xvcjogI0ZGRjtcclxufVxyXG5cclxuLmJ0bi1jdS5idG4tY29sb3ItZXN0YW5kYXI6YWN0aXZlIHtcclxuXHRiYWNrZ3JvdW5kLWNvbG9yOiAjMDkzRjc1O1xyXG5cdGNvbG9yOiAjRkZGO1xyXG59XHJcblxyXG4uYnRuLWN1LmJ0bi1jb2xvci1lc3RhbmRhcjpmb2N1cyB7XHJcblx0YmFja2dyb3VuZC1jb2xvcjogIzBDNTQ5QztcclxuXHRjb2xvcjogI0ZGRjtcclxuXHRvdXRsaW5lOiAxcHggZGFzaGVkICMwMDA7XHJcbn1cclxuLm10LTMye1xyXG4gICAgbWFyZ2luLXRvcDogMzJweDtcclxufVxyXG4ubXQtMjR7XHJcbiAgICBtYXJnaW4tdG9wOiAyNHB4O1xyXG59XHJcbi5tdC04MHtcclxuICAgIG1hcmdpbi10b3A6IDVlbTtcclxufVxyXG4ubXQtNDB7XHJcbiAgICBtYXJnaW4tdG9wOiAyLjVlbTtcclxufVxyXG4ubXQtMzZ7XHJcbiAgICBtYXJnaW4tdG9wOiAyLjI1ZW07XHJcbn1cclxuLm10LTUye1xyXG4gICAgbWFyZ2luLXRvcDogMy4yNWVtO1xyXG59XHJcbi5tdC02MntcclxuICAgIG1hcmdpbi10b3A6IDRlbTtcclxufVxyXG4udGV4dG8tMXtcclxuICAgIGZvbnQtc2l6ZTogMS4zZW07XHJcbiAgICBjb2xvcjogIzAwMDAwMERFO1xyXG4gICAgXHJcbn1cclxuLnRleHRvLTJ7XHJcbiAgICBmb250LXNpemU6IDEuMWVtO1xyXG4gICAgY29sb3I6ICM1NzU2NTc7XHJcbiAgICBcclxufSJdfQ== */";
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