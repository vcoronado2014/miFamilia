function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pre-tiposatencion-pre-tiposatencion-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/pre-tiposatencion/pre-tiposatencion.page.html":
  /*!*****************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pre-tiposatencion/pre-tiposatencion.page.html ***!
    \*****************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppPreTiposatencionPreTiposatencionPageHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ion-header>\r\n  <ion-toolbar color=\"primary\" mode=\"md\">\r\n    <ion-buttons slot=\"start\">\r\n      <ion-back-button defaultHref=\"/calendario\" class=\"fcw\"></ion-back-button>\r\n    </ion-buttons>\r\n    <ion-title class=\"fcw\">Reserva de horas</ion-title>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content class=\"back-app\">\r\n  <!-- combo de reserva de horas -->\r\n    <mat-form-field appearance=\"outline\" class=\"field-tipo-atencion\">\r\n      <mat-label>Tipo atención</mat-label>\r\n      <mat-select [disabled]=\"disabledCombo\" [(ngModel)]=\"comboSeleccionado\" (selectionChange)=\"buscarCitas($event)\">\r\n        <mat-option *ngFor=\"let tipo of tiposAtencion\" [value]=\"tipo.Texto\">{{tipo.Texto}}</mat-option>\r\n      </mat-select>\r\n    </mat-form-field>\r\n  \r\n  <!-- progress bar -->\r\n<!--   <div class=\"centrado\" [hidden]=\"!mostrarProgress\">\r\n    <ion-label class=\"titulo-item-2\">Buscando citas</ion-label>\r\n    <ion-progress-bar type=\"indeterminate\" class=\"ion-margin-top\"></ion-progress-bar>\r\n  </div> -->\r\n  <app-progress [mostrar]=\"mostrarProgress\" titulo=\"Buscando citas\"></app-progress>\r\n  <!-- progress bar buscando tipos de atencion  -->\r\n<!--   <div class=\"centradoDisp\" [hidden]=\"!mostrarProgressDisp\">\r\n    <ion-label class=\"titulo-item-2\">Buscando tipos atención</ion-label>\r\n    <ion-progress-bar type=\"indeterminate\" class=\"ion-margin-top\"></ion-progress-bar>\r\n  </div> -->\r\n  <app-progress [mostrar]=\"mostrarProgressDisp\" titulo=\"Buscando tipos atención\"></app-progress>\r\n  <!-- resultados -->\r\n  <div *ngIf=\"encontroCitas\">\r\n    <div class=\"ion-padding-start ion-padding-end\">\r\n      <h6 class=\"titulo-item\">\r\n        Citas más próximas\r\n      </h6>\r\n      <p class=\"ion-text-wrap texto-item\">\r\n        A continuación se listan los cupos disponibles más próximos.\r\n      </p>\r\n    </div>\r\n    <div class=\"ion-padding\">\r\n      <ion-grid class=\"ion-no-padding\" *ngFor=\"let cita of citasFiltradas\">\r\n        <ion-row class=\"ion-padding-bottom ion-padding-top linea-item\" *ngIf=\"cita.indice <= 3\" (click)=\"citaSelected(cita)\">\r\n          <ion-col size=\"9\" class=\"texto-item ion-text-capitalize\">\r\n            {{cita.Servicio.Nombre}}\r\n          </ion-col>\r\n          <ion-col size=\"3\" class=\"titulo-hora ion-text-end\">\r\n            {{transformDateIso(cita.FechaHoraInicio)}}\r\n          </ion-col>\r\n          <ion-col size=\"12\" class=\"titulo-fecha\" class=\"ion-text-capitalize\">\r\n            {{transformDate(cita.FechaHoraInicio, 'dddd DD MMMM YYYY')}}\r\n          </ion-col>\r\n          <ion-col class=\"texto-item ion-text-capitalize\">\r\n            {{cita.NombresMedico.toLowerCase()}} {{cita.ApellidosMedico.toLowerCase()}}\r\n          </ion-col>\r\n        </ion-row>\r\n      </ion-grid>\r\n    </div>\r\n    <!--pie de búsqueda -->\r\n    <div class=\"pl-24 pr-24\">\r\n      <p class=\"ion-text-wrap texto-item ion-text-left\">\r\n        Si no te sirven los cupos propuesto prueba con la búsqueda avanzada.\r\n      </p>\r\n    </div>\r\n    <!-- boton busqueda avanzada -->\r\n    <div class=\"ion-padding-top\">\r\n      <ion-button expand=\"full\" fill=\"clear\" (click)=\"openBusquedaAvanzada()\">BÚSQUEDA AVANZADA</ion-button>\r\n    </div>\r\n\r\n  </div>\r\n  <div *ngIf=\"!encontroCitas && mostrarProgress == false && citasFiltradas.length > 0\" class=\"ion-padding-start ion-padding-end centrado\">\r\n    <ion-label class=\"ion-text-center no-encontrado\">No existen cupos con los criterios ingresados</ion-label>\r\n  </div>\r\n\r\n\r\n  \r\n\r\n</ion-content>\r\n";
    /***/
  },

  /***/
  "./src/app/pre-tiposatencion/pre-tiposatencion.module.ts":
  /*!***************************************************************!*\
    !*** ./src/app/pre-tiposatencion/pre-tiposatencion.module.ts ***!
    \***************************************************************/

  /*! exports provided: PreTiposatencionPageModule */

  /***/
  function srcAppPreTiposatencionPreTiposatencionModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "PreTiposatencionPageModule", function () {
      return PreTiposatencionPageModule;
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


    var _pre_tiposatencion_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./pre-tiposatencion.page */
    "./src/app/pre-tiposatencion/pre-tiposatencion.page.ts");
    /* harmony import */


    var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! @angular/material/form-field */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/form-field.js");
    /* harmony import */


    var _angular_material_select__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! @angular/material/select */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/select.js");
    /* harmony import */


    var _components_components_module__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! ../components/components.module */
    "./src/app/components/components.module.ts");

    var PreTiposatencionPageModule = function PreTiposatencionPageModule() {
      _classCallCheck(this, PreTiposatencionPageModule);
    };

    PreTiposatencionPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_7__["MatFormFieldModule"], _angular_material_select__WEBPACK_IMPORTED_MODULE_8__["MatSelectModule"], _components_components_module__WEBPACK_IMPORTED_MODULE_9__["ComponentsModule"], _angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterModule"].forChild([{
        path: '',
        component: _pre_tiposatencion_page__WEBPACK_IMPORTED_MODULE_6__["PreTiposatencionPage"]
      }])],
      declarations: [_pre_tiposatencion_page__WEBPACK_IMPORTED_MODULE_6__["PreTiposatencionPage"]]
    })], PreTiposatencionPageModule);
    /***/
  },

  /***/
  "./src/app/pre-tiposatencion/pre-tiposatencion.page.scss":
  /*!***************************************************************!*\
    !*** ./src/app/pre-tiposatencion/pre-tiposatencion.page.scss ***!
    \***************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppPreTiposatencionPreTiposatencionPageScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".combo {\n  width: 100%;\n  max-width: 100%;\n}\n\n.centrado {\n  text-align: center;\n  width: 100%;\n  height: 10%;\n  position: absolute;\n  top: 45%;\n  padding-left: 60px;\n  padding-right: 60px;\n}\n\n.titulo-item {\n  font-size: 14px;\n  color: #000000DE;\n  font-weight: bold;\n}\n\n.titulo-fecha {\n  font-size: 16px;\n  color: #000000DE;\n}\n\n.titulo-hora {\n  font-size: 12px;\n  color: #000000DE;\n}\n\n.no-encontrado {\n  font-size: 16px;\n  color: #0000008A;\n}\n\n.pt-8 {\n  padding-top: 8px;\n}\n\n.pb-8 {\n  padding-bottom: 8px;\n}\n\n.pl-24 {\n  padding-left: 24px;\n}\n\n.pr-24 {\n  padding-right: 24px;\n}\n\n.linea-item {\n  border-bottom-style: solid;\n  border-bottom-width: 1px;\n  border-bottom-color: #0000001F;\n}\n\n.borde {\n  border-radius: 5px;\n  border: 1px solid #0000001F;\n  padding: 5px;\n  padding-top: 0;\n}\n\n.label-tda {\n  position: relative;\n  top: -10px;\n  margin-left: 16px;\n  padding-left: 2px;\n  padding-right: 5px;\n  background: white;\n}\n\n.pt-32 {\n  padding-top: 32px;\n}\n\n.titulo-item-2 {\n  font-size: 16px;\n  color: #000000DE;\n}\n\n/*centrado disponibilidad*/\n\n.centradoDisp {\n  text-align: center;\n  width: 100%;\n  height: 10%;\n  position: absolute;\n  top: 35%;\n  padding-left: 60px;\n  padding-right: 60px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy92aWN0b3Jjb3JvbmFkby9EZXNrdG9wL21pRmFtaWxpYV9wcmUvc3JjL2FwcC9wcmUtdGlwb3NhdGVuY2lvbi9wcmUtdGlwb3NhdGVuY2lvbi5wYWdlLnNjc3MiLCJzcmMvYXBwL3ByZS10aXBvc2F0ZW5jaW9uL3ByZS10aXBvc2F0ZW5jaW9uLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLFdBQUE7RUFDQSxlQUFBO0FDQ0o7O0FEQ0E7RUFDSSxrQkFBQTtFQUNBLFdBQUE7RUFDQSxXQUFBO0VBQ0Esa0JBQUE7RUFDQSxRQUFBO0VBQ0Esa0JBQUE7RUFDQSxtQkFBQTtBQ0VKOztBREFBO0VBQ0ksZUFBQTtFQUNBLGdCQUFBO0VBQ0EsaUJBQUE7QUNHSjs7QUREQTtFQUNJLGVBQUE7RUFDQSxnQkFBQTtBQ0lKOztBREZBO0VBQ0ksZUFBQTtFQUNBLGdCQUFBO0FDS0o7O0FESEE7RUFDSSxlQUFBO0VBQ0EsZ0JBQUE7QUNNSjs7QURKQTtFQUNJLGdCQUFBO0FDT0o7O0FETEE7RUFDSSxtQkFBQTtBQ1FKOztBRE5BO0VBQ0ksa0JBQUE7QUNTSjs7QURQQTtFQUNJLG1CQUFBO0FDVUo7O0FEUkE7RUFDSSwwQkFBQTtFQUNBLHdCQUFBO0VBQ0EsOEJBQUE7QUNXSjs7QURUQTtFQUNJLGtCQUFBO0VBQ0EsMkJBQUE7RUFDQSxZQUFBO0VBQ0EsY0FBQTtBQ1lKOztBRFZBO0VBQ0ksa0JBQUE7RUFDQSxVQUFBO0VBQ0EsaUJBQUE7RUFDQSxpQkFBQTtFQUNBLGtCQUFBO0VBQ0EsaUJBQUE7QUNhSjs7QURYQTtFQUNJLGlCQUFBO0FDY0o7O0FEWkE7RUFDSSxlQUFBO0VBQ0EsZ0JBQUE7QUNlSjs7QURiQSwwQkFBQTs7QUFDQTtFQUNJLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLFdBQUE7RUFDQSxrQkFBQTtFQUNBLFFBQUE7RUFDQSxrQkFBQTtFQUNBLG1CQUFBO0FDZ0JKIiwiZmlsZSI6InNyYy9hcHAvcHJlLXRpcG9zYXRlbmNpb24vcHJlLXRpcG9zYXRlbmNpb24ucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmNvbWJve1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBtYXgtd2lkdGg6IDEwMCU7XHJcbn1cclxuLmNlbnRyYWRve1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgd2lkdGg6IDEwMCU7ICAgICAgIFxyXG4gICAgaGVpZ2h0OiAxMCU7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICB0b3A6NDUlOyAgXHJcbiAgICBwYWRkaW5nLWxlZnQ6IDYwcHg7XHJcbiAgICBwYWRkaW5nLXJpZ2h0OiA2MHB4OyAgICAgICAgIFxyXG59XHJcbi50aXR1bG8taXRlbXtcclxuICAgIGZvbnQtc2l6ZTogMTRweDtcclxuICAgIGNvbG9yOiAjMDAwMDAwREU7XHJcbiAgICBmb250LXdlaWdodDogYm9sZDtcclxufVxyXG4udGl0dWxvLWZlY2hhe1xyXG4gICAgZm9udC1zaXplOiAxNnB4O1xyXG4gICAgY29sb3I6ICMwMDAwMDBERTtcclxufVxyXG4udGl0dWxvLWhvcmF7XHJcbiAgICBmb250LXNpemU6IDEycHg7XHJcbiAgICBjb2xvcjogIzAwMDAwMERFO1xyXG59XHJcbi5uby1lbmNvbnRyYWRve1xyXG4gICAgZm9udC1zaXplOiAxNnB4O1xyXG4gICAgY29sb3I6ICMwMDAwMDA4QTtcclxufVxyXG4ucHQtOHtcclxuICAgIHBhZGRpbmctdG9wOiA4cHg7XHJcbn1cclxuLnBiLTh7XHJcbiAgICBwYWRkaW5nLWJvdHRvbTogOHB4O1xyXG59XHJcbi5wbC0yNHtcclxuICAgIHBhZGRpbmctbGVmdDogMjRweDtcclxufVxyXG4ucHItMjR7XHJcbiAgICBwYWRkaW5nLXJpZ2h0OiAyNHB4O1xyXG59XHJcbi5saW5lYS1pdGVte1xyXG4gICAgYm9yZGVyLWJvdHRvbS1zdHlsZTogc29saWQ7XHJcbiAgICBib3JkZXItYm90dG9tLXdpZHRoOiAxcHg7XHJcbiAgICBib3JkZXItYm90dG9tLWNvbG9yOiAjMDAwMDAwMUY7XHJcbn1cclxuLmJvcmRle1xyXG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xyXG4gICAgYm9yZGVyOiAxcHggc29saWQgIzAwMDAwMDFGO1xyXG4gICAgcGFkZGluZzogNXB4O1xyXG4gICAgcGFkZGluZy10b3A6IDA7XHJcbn1cclxuLmxhYmVsLXRkYXtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIHRvcDotMTBweDtcclxuICAgIG1hcmdpbi1sZWZ0OiAxNnB4O1xyXG4gICAgcGFkZGluZy1sZWZ0OiAycHg7XHJcbiAgICBwYWRkaW5nLXJpZ2h0OiA1cHg7XHJcbiAgICBiYWNrZ3JvdW5kOiB3aGl0ZTtcclxufVxyXG4ucHQtMzJ7XHJcbiAgICBwYWRkaW5nLXRvcDogMzJweDtcclxufVxyXG4udGl0dWxvLWl0ZW0tMntcclxuICAgIGZvbnQtc2l6ZTogMTZweDtcclxuICAgIGNvbG9yOiAjMDAwMDAwREU7XHJcbn1cclxuLypjZW50cmFkbyBkaXNwb25pYmlsaWRhZCovXHJcbi5jZW50cmFkb0Rpc3B7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICB3aWR0aDogMTAwJTsgICAgICAgXHJcbiAgICBoZWlnaHQ6IDEwJTtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHRvcDozNSU7ICBcclxuICAgIHBhZGRpbmctbGVmdDogNjBweDtcclxuICAgIHBhZGRpbmctcmlnaHQ6IDYwcHg7ICAgICAgICAgXHJcbn1cclxuXHJcbiIsIi5jb21ibyB7XG4gIHdpZHRoOiAxMDAlO1xuICBtYXgtd2lkdGg6IDEwMCU7XG59XG5cbi5jZW50cmFkbyB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMTAlO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogNDUlO1xuICBwYWRkaW5nLWxlZnQ6IDYwcHg7XG4gIHBhZGRpbmctcmlnaHQ6IDYwcHg7XG59XG5cbi50aXR1bG8taXRlbSB7XG4gIGZvbnQtc2l6ZTogMTRweDtcbiAgY29sb3I6ICMwMDAwMDBERTtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG59XG5cbi50aXR1bG8tZmVjaGEge1xuICBmb250LXNpemU6IDE2cHg7XG4gIGNvbG9yOiAjMDAwMDAwREU7XG59XG5cbi50aXR1bG8taG9yYSB7XG4gIGZvbnQtc2l6ZTogMTJweDtcbiAgY29sb3I6ICMwMDAwMDBERTtcbn1cblxuLm5vLWVuY29udHJhZG8ge1xuICBmb250LXNpemU6IDE2cHg7XG4gIGNvbG9yOiAjMDAwMDAwOEE7XG59XG5cbi5wdC04IHtcbiAgcGFkZGluZy10b3A6IDhweDtcbn1cblxuLnBiLTgge1xuICBwYWRkaW5nLWJvdHRvbTogOHB4O1xufVxuXG4ucGwtMjQge1xuICBwYWRkaW5nLWxlZnQ6IDI0cHg7XG59XG5cbi5wci0yNCB7XG4gIHBhZGRpbmctcmlnaHQ6IDI0cHg7XG59XG5cbi5saW5lYS1pdGVtIHtcbiAgYm9yZGVyLWJvdHRvbS1zdHlsZTogc29saWQ7XG4gIGJvcmRlci1ib3R0b20td2lkdGg6IDFweDtcbiAgYm9yZGVyLWJvdHRvbS1jb2xvcjogIzAwMDAwMDFGO1xufVxuXG4uYm9yZGUge1xuICBib3JkZXItcmFkaXVzOiA1cHg7XG4gIGJvcmRlcjogMXB4IHNvbGlkICMwMDAwMDAxRjtcbiAgcGFkZGluZzogNXB4O1xuICBwYWRkaW5nLXRvcDogMDtcbn1cblxuLmxhYmVsLXRkYSB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgdG9wOiAtMTBweDtcbiAgbWFyZ2luLWxlZnQ6IDE2cHg7XG4gIHBhZGRpbmctbGVmdDogMnB4O1xuICBwYWRkaW5nLXJpZ2h0OiA1cHg7XG4gIGJhY2tncm91bmQ6IHdoaXRlO1xufVxuXG4ucHQtMzIge1xuICBwYWRkaW5nLXRvcDogMzJweDtcbn1cblxuLnRpdHVsby1pdGVtLTIge1xuICBmb250LXNpemU6IDE2cHg7XG4gIGNvbG9yOiAjMDAwMDAwREU7XG59XG5cbi8qY2VudHJhZG8gZGlzcG9uaWJpbGlkYWQqL1xuLmNlbnRyYWRvRGlzcCB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMTAlO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogMzUlO1xuICBwYWRkaW5nLWxlZnQ6IDYwcHg7XG4gIHBhZGRpbmctcmlnaHQ6IDYwcHg7XG59Il19 */";
    /***/
  },

  /***/
  "./src/app/pre-tiposatencion/pre-tiposatencion.page.ts":
  /*!*************************************************************!*\
    !*** ./src/app/pre-tiposatencion/pre-tiposatencion.page.ts ***!
    \*************************************************************/

  /*! exports provided: PreTiposatencionPage */

  /***/
  function srcAppPreTiposatencionPreTiposatencionPageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "PreTiposatencionPage", function () {
      return PreTiposatencionPage;
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


    var _app_services_ServicioParametrosApp__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ../../app/services/ServicioParametrosApp */
    "./src/app/services/ServicioParametrosApp.ts");
    /* harmony import */


    var _app_services_ServicioAcceso__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ../../app/services/ServicioAcceso */
    "./src/app/services/ServicioAcceso.ts");
    /* harmony import */


    var _app_services_ServicioCitas__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ../../app/services/ServicioCitas */
    "./src/app/services/ServicioCitas.ts");
    /* harmony import */


    var moment__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! moment */
    "./node_modules/moment/moment.js");
    /* harmony import */


    var moment__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_8__);
    /* harmony import */


    var _app_pipes_fecha_pipe__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! ../../app/pipes/fecha.pipe */
    "./src/app/pipes/fecha.pipe.ts");
    /* harmony import */


    var _modal_operacion_cita_modal_operacion_cita_page__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! ../modal-operacion-cita/modal-operacion-cita.page */
    "./src/app/modal-operacion-cita/modal-operacion-cita.page.ts");
    /* import { ServicioGeo } from '../../app/services/ServicioGeo'; */
    //modal


    var PreTiposatencionPage = /*#__PURE__*/function () {
      function PreTiposatencionPage(navCtrl, toast, modalCtrl, platform, loading, menu, utiles, acceso, cita, parametrosApp, activatedRoute, router) {
        _classCallCheck(this, PreTiposatencionPage);

        this.navCtrl = navCtrl;
        this.toast = toast;
        this.modalCtrl = modalCtrl;
        this.platform = platform;
        this.loading = loading;
        this.menu = menu;
        this.utiles = utiles;
        this.acceso = acceso;
        this.cita = cita;
        this.parametrosApp = parametrosApp;
        this.activatedRoute = activatedRoute;
        this.router = router;
        this.miColor = '#FF4081';
        this.textColor = '#FFFFFF'; //datos para consultar citas

        this.runPaciente = '';
        this.codigoDeis = '';
        this.serviceType = '349';
        this.tipoOperacion = 'disponibilidad'; //tipos de atencion disponibles y citas

        this.citas = [];
        this.citasFiltradas = [];
        this.tiposAtencion = [];
        this.comboSeleccionado = 'Selecciona...';
        this.idComboSeleccionado = 0;
        this.mostrarProgress = false;
        this.encontroCitas = false;
        this.disabledCombo = false;
        this.paginaActual = 0; //para el progress de buscar diponibilidad

        this.mostrarProgressDisp = false;
        this.encontroCitasDisp = false; //idconsultar

        this.idConsultar = 0;
      }

      _createClass(PreTiposatencionPage, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
            var _this = this;

            return regeneratorRuntime.wrap(function _callee2$(_context2) {
              while (1) {
                switch (_context2.prev = _context2.next) {
                  case 0:
                    moment__WEBPACK_IMPORTED_MODULE_8__["locale"]('es'); //debemos recibir por parametro al usuario que le conseguiremos la hora

                    this.activatedRoute.queryParams.subscribe(function (params) {
                      return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(_this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
                        return regeneratorRuntime.wrap(function _callee$(_context) {
                          while (1) {
                            switch (_context.prev = _context.next) {
                              case 0:
                                if (!(params && params.Id)) {
                                  _context.next = 23;
                                  break;
                                }

                                //this.estaAgregandoFamilia = true;
                                this.idConsultar = params.Id;
                                this.usuarioAps = this.utiles.entregaUsuario(params.Id);

                                if (!(this.usuarioAps != null)) {
                                  _context.next = 20;
                                  break;
                                }

                                this.usuarioAps.UrlImagen = this.utiles.entregaImagen(this.usuarioAps);
                                this.miColor = this.utiles.entregaColor(this.usuarioAps);
                                this.runPaciente = this.utiles.insertarGuion(this.usuarioAps.Rut);
                                this.codigoDeis = this.usuarioAps.ConfiguracionNodo.CodigoDeis2014;
                                this.nodId = this.usuarioAps.ConfiguracionNodo.NodId; //creamos tipo atencion inicial

                                this.crearTiposAtencion();
                                this.setFechasInicioFin();

                                if (!this.parametrosApp.USA_API_MANAGEMENT()) {
                                  _context.next = 16;
                                  break;
                                }

                                _context.next = 14;
                                return this.buscarDisponibilidadApi(this.fechaInicio, this.fechaTermino, this.codigoDeis, this.runPaciente, this.serviceType, this.tipoOperacion);

                              case 14:
                                _context.next = 18;
                                break;

                              case 16:
                                _context.next = 18;
                                return this.buscarDisponibilidad(this.fechaInicio, this.fechaTermino, this.codigoDeis, this.runPaciente, this.serviceType, this.tipoOperacion);

                              case 18:
                                _context.next = 21;
                                break;

                              case 20:
                                this.utiles.presentToast('No hay usuario, vuelva a seleccionar', 'bottom', 2000);

                              case 21:
                                _context.next = 24;
                                break;

                              case 23:
                                this.utiles.presentToast('No hay usuario, vuelva a seleccionar', 'bottom', 2000);

                              case 24:
                              case "end":
                                return _context.stop();
                            }
                          }
                        }, _callee, this);
                      }));
                    });
                    /*     if (sessionStorage.UsuarioAps) {
                          this.usuarioAps = JSON.parse(sessionStorage.UsuarioAps);
                          if (this.usuarioAps) {
                            //this.usuarioAps.UrlImagen = this.utiles.entregaMiImagen();
                            this.usuarioAps.UrlImagen = this.utiles.entregaImagen(this.usuarioAps);
                            this.miColor = this.utiles.entregaColor(this.usuarioAps);
                            this.runPaciente = this.utiles.insertarGuion(this.usuarioAps.Rut);
                            this.codigoDeis = this.usuarioAps.ConfiguracionNodo.CodigoDeis2014;
                            this.nodId = this.usuarioAps.ConfiguracionNodo.NodId;
                          }
                        } */

                  case 2:
                  case "end":
                    return _context2.stop();
                }
              }
            }, _callee2, this);
          }));
        }
      }, {
        key: "setFechasInicioFin",
        value: function setFechasInicioFin() {
          //var fechaIni = moment().add(environment.HORAS_FECHA_INICIO, 'hour');
          var fechaIni = moment__WEBPACK_IMPORTED_MODULE_8__().add(this.parametrosApp.HORAS_FECHA_INICIO(), 'hour');
          var date = new Date();
          console.log(fechaIni);
          date = new Date(fechaIni.year(), fechaIni.month(), fechaIni.date(), 0, 0, 0, 0);
          console.log(date);
          var fechaTer = moment__WEBPACK_IMPORTED_MODULE_8__().add(1, 'month');
          var dateFin = new Date(fechaTer.year(), fechaTer.month(), fechaTer.date(), 23, 59, 0, 0);
          console.log(fechaTer);
          console.log(dateFin);
          this.fechaInicio = fechaIni.format();
          this.fechaTermino = fechaTer.format(); //guardamos las fechas de consulta para después procesarlas

          sessionStorage.setItem('FECHA_INICIO_CONSULTA', this.fechaInicio);
          sessionStorage.setItem('FECHA_TERMINO_CONSULTA', this.fechaTermino);
        } //metodo para obtener disponibilidad y tipos de atención
        //lo comentamos debido a que se usará progress

      }, {
        key: "buscarDisponibilidad",
        value: function buscarDisponibilidad(start, end, organization, patient, serviceType, tipoOperacion) {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee4() {
            var _this2 = this;

            var loader;
            return regeneratorRuntime.wrap(function _callee4$(_context4) {
              while (1) {
                switch (_context4.prev = _context4.next) {
                  case 0:
                    _context4.next = 2;
                    return this.loading.create({
                      cssClass: 'loading-vacio',
                      showBackdrop: false,
                      spinner: null
                    });

                  case 2:
                    loader = _context4.sent;
                    _context4.next = 5;
                    return loader.present().then(function () {
                      return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(_this2, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee3() {
                        var _this3 = this;

                        return regeneratorRuntime.wrap(function _callee3$(_context3) {
                          while (1) {
                            switch (_context3.prev = _context3.next) {
                              case 0:
                                //esto lo agregamos para desabilitarlo
                                this.disabledCombo = true; //lo agregamos para mostrar la info de buscando disponibilidad

                                this.mostrarProgress = true; //********************* */

                                this.citas = [];
                                this.citasFiltradas = [];

                                if (!this.utiles.isAppOnDevice()) {
                                  //llamada web
                                  this.cita.getDisponibilidad(start, end, organization, patient, serviceType, '', '', tipoOperacion, this.nodId).subscribe(function (response) {
                                    _this3.procesarRespuestaTotal(response, loader);
                                  });
                                  /*         this.cita.getDisponibilidadApi(start, end, organization, patient, serviceType, '', '', tipoOperacion, this.nodId).subscribe((response: any)=>{
                                            this.procesarRespuestaTotal(response, loader);
                                          }); */
                                } else {
                                  //llamada nativa
                                  this.cita.getDisponibilidadNative(start, end, organization, patient, serviceType, '', '', tipoOperacion, this.nodId).then(function (response) {
                                    var respuesta = JSON.parse(response.data);

                                    _this3.procesarRespuestaTotal(respuesta, loader);
                                  });
                                  /*         this.cita.getDisponibilidadApiNative(start, end, organization, patient, serviceType, '', '', tipoOperacion, this.nodId).then((response: any)=>{
                                            var respuesta = JSON.parse(response.data);
                                            this.procesarRespuestaTotal(respuesta, loader);
                                          }); */
                                }

                              case 5:
                              case "end":
                                return _context3.stop();
                            }
                          }
                        }, _callee3, this);
                      }));
                    });

                  case 5:
                  case "end":
                    return _context4.stop();
                }
              }
            }, _callee4, this);
          }));
        }
      }, {
        key: "buscarDisponibilidadApi",
        value: function buscarDisponibilidadApi(start, end, organization, patient, serviceType, tipoOperacion) {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee6() {
            var _this4 = this;

            var loader;
            return regeneratorRuntime.wrap(function _callee6$(_context6) {
              while (1) {
                switch (_context6.prev = _context6.next) {
                  case 0:
                    _context6.next = 2;
                    return this.loading.create({
                      cssClass: 'loading-vacio',
                      showBackdrop: false,
                      spinner: null
                    });

                  case 2:
                    loader = _context6.sent;
                    _context6.next = 5;
                    return loader.present().then(function () {
                      return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(_this4, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee5() {
                        var _this5 = this;

                        return regeneratorRuntime.wrap(function _callee5$(_context5) {
                          while (1) {
                            switch (_context5.prev = _context5.next) {
                              case 0:
                                //esto lo agregamos para desabilitarlo
                                this.disabledCombo = true;
                                this.mostrarProgressDisp = true; //********************* */

                                this.citas = [];
                                this.citasFiltradas = [];

                                if (!this.utiles.isAppOnDevice()) {
                                  //llamada web
                                  this.cita.getDisponibilidadApi(start, end, organization, patient, serviceType, '', '', tipoOperacion, this.nodId).subscribe(function (response) {
                                    _this5.procesarRespuestaTotal(response, loader);
                                  }, function (error) {
                                    console.log(error.message);
                                    loader.dismiss();
                                    _this5.disabledCombo = false;
                                    _this5.mostrarProgressDisp = false;

                                    _this5.utiles.presentToast('Se ha producido un error al obtener disponibilidad', 'bottom', 2000);
                                  });
                                } else {
                                  //llamada nativa
                                  this.cita.getDisponibilidadApiNative(start, end, organization, patient, serviceType, '', '', tipoOperacion, this.nodId).then(function (responseD) {
                                    var respuestaDisp = JSON.parse(responseD.data);

                                    _this5.procesarRespuestaTotal(respuestaDisp, loader);
                                  })["catch"](function (error) {
                                    console.log(error.message);
                                    loader.dismiss();
                                    _this5.disabledCombo = false;
                                    _this5.mostrarProgressDisp = false;

                                    _this5.utiles.presentToast('Se ha producido un error al obtener disponibilidad', 'bottom', 2000);
                                  });
                                }

                              case 5:
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
        } //metodo para procesar la respuesta

      }, {
        key: "procesarRespuestaTotalDisp",
        value: function procesarRespuestaTotalDisp(data) {
          //vienen las citas sin fecha
          this.citas = [];
          this.citasFiltradas = []; //this.tiposAtencion = [];

          if (data && data.Mensaje) {
            //correcto
            if (data.Mensaje.Codigo == 'correcto') {
              //todo bien procesar las citas
              var contador = 0;

              if (data.TiposAtencion) {
                this.agregarTiposAtencion(data.TiposAtencion); //console.log(this.tiposAtencion);
              } //aca asignamos las citas


              this.citas = data.CitasDisponibles; //console.log(this.citas);
              //guardamos las citas en session

              sessionStorage.setItem('CITAS_DISPONIBLES', JSON.stringify(this.citas)); //als citas deberíamos guardarlas para procesarlas
              //hay que ver si es necesario o no
            } else {
              this.idComboSeleccionado = 0;
              this.tiposAtencion = [];
              this.citas = [];
              this.citasFiltradas = [];
            }

            this.mostrarProgressDisp = false;
            this.encontroCitasDisp = true; //error
          }
        }
      }, {
        key: "procesarRespuestaTotal",
        value: function procesarRespuestaTotal(data, loader) {
          //vienen las citas sin fecha
          this.citas = [];
          this.citasFiltradas = []; //this.tiposAtencion = [];

          if (data && data.Mensaje) {
            //correcto
            if (data.Mensaje.Codigo == 'correcto') {
              //todo bien procesar las citas
              var contador = 0;

              if (data.TiposAtencion) {
                this.agregarTiposAtencion(data.TiposAtencion); //console.log(this.tiposAtencion);
              } //aca asignamos las citas


              this.citas = data.CitasDisponibles; //console.log(this.citas);
              //guardamos las citas en session

              sessionStorage.setItem('CITAS_DISPONIBLES', JSON.stringify(this.citas)); //als citas deberíamos guardarlas para procesarlas
              //hay que ver si es necesario o no

              loader.dismiss();
              this.disabledCombo = false;
              this.mostrarProgressDisp = false;
              this.mostrarProgress = false;
            } else {
              this.idComboSeleccionado = 0;
              this.tiposAtencion = [];
              this.citas = [];
              this.citasFiltradas = [];
              loader.dismiss();
              this.disabledCombo = false;
              this.mostrarProgressDisp = false;
              this.mostrarProgress = false;
            } //error

          }
        }
      }, {
        key: "indexarCitas",
        value: function indexarCitas() {
          var _this6 = this;

          //el tipo de atencion seleccionado
          this.citasFiltradas = [];
          var indice = 1;

          if (this.citas && this.citas.length > 0) {
            this.citas.forEach(function (cita) {
              if (cita.TipoAtencion == _this6.comboSeleccionado) {
                //esta filtrando
                cita.indice = indice;

                _this6.citasFiltradas.push(cita);

                indice++;
              }
            });
          }

          if (indice > 2) {
            this.encontroCitas = true;
          } //console.log(this.citasFiltradas);

        } //creamos los tipos de atención disponibles

      }, {
        key: "crearTiposAtencion",
        value: function crearTiposAtencion() {
          //var arr = [];
          this.tiposAtencion = [];
          var contador = 1;
          var entidadInicial = {
            Texto: 'Selecciona...',
            Valor: 0,
            Selected: true
          };
          this.tiposAtencion.push(entidadInicial);
          this.idComboSeleccionado = 0; //console.log('tipo seleccionado ' + this.idComboSeleccionado);
          //console.log(this.tiposAtencion);
        }
      }, {
        key: "agregarTiposAtencion",
        value: function agregarTiposAtencion(tipos) {
          var _this7 = this;

          var contador = 1;

          if (tipos && tipos.length > 0) {
            tipos.forEach(function (tipo) {
              var entidadTipo = {
                Texto: tipo,
                Valor: contador,
                Selected: false
              }; //tipos.push(entidadTipo);

              _this7.tiposAtencion.push(entidadTipo);

              contador++;
            });
          } //guardamos los tipos de atencion


          sessionStorage.setItem('TIPOS_ATENCION', JSON.stringify(this.tiposAtencion));
        }
      }, {
        key: "seleccionarItemCombo",
        value: function seleccionarItemCombo() {
          var _this8 = this;

          if (this.comboSeleccionado && this.tiposAtencion) {
            this.tiposAtencion.forEach(function (tipo) {
              if (tipo.Texto == _this8.comboSeleccionado) {
                tipo.Selected = true;
              } else {
                tipo.Selected = false;
              }
            }); //guardamos los tipos de atención

            sessionStorage.setItem('TIPOS_ATENCION', JSON.stringify(this.tiposAtencion));
          }
        }
      }, {
        key: "buscarCitas",
        value: function buscarCitas(event) {
          var _this9 = this;

          //este lo cambiamos para el control mat-select
          //if (event.detail.value){
          if (event.value) {
            this.comboSeleccionado = event.value; //console.log(this.comboSeleccionado);

            this.mostrarProgress = true;
            this.encontroCitas = false;
            this.disabledCombo = false;
            this.seleccionarItemCombo();
            setTimeout(function () {
              //console.log('Async operation has ended');
              //event.target.complete();
              _this9.mostrarProgress = false; //this.encontroCitas = true;
              //si existen citas hay que deshabilitar el control

              _this9.disabledCombo = true;

              _this9.indexarCitas();
            }, 2000);
          }
        }
      }, {
        key: "transformDate",
        value: function transformDate(value, format) {
          var pi = new _app_pipes_fecha_pipe__WEBPACK_IMPORTED_MODULE_9__["MomentPipe"]();
          return pi.transform(value, format);
        }
      }, {
        key: "transformDateIso",
        value: function transformDateIso(dateString) {
          var retorno = "";
          var parteT = dateString.split("T");

          if (parteT && parteT.length == 2) {
            var partes = parteT[1].split(":");

            if (partes && partes.length > 1) {
              retorno = partes[0] + ":" + partes[1];
            }
          }

          return retorno;
        } //modal del detalle de la cita

      }, {
        key: "citaSelected",
        value: function citaSelected(item) {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee7() {
            var _this10 = this;

            var modal;
            return regeneratorRuntime.wrap(function _callee7$(_context7) {
              while (1) {
                switch (_context7.prev = _context7.next) {
                  case 0:
                    if (item) {
                      this.itemSelected = item;
                    }

                    _context7.next = 3;
                    return this.modalCtrl.create({
                      component: _modal_operacion_cita_modal_operacion_cita_page__WEBPACK_IMPORTED_MODULE_10__["ModalOperacionCitaPage"],
                      componentProps: {
                        'cita': JSON.stringify(item),
                        'operacion': 'reservar'
                      }
                    });

                  case 3:
                    modal = _context7.sent;
                    modal.onDidDismiss().then(function (data) {
                      if (data.data && data.data.accion) {
                        var accion = data.data.accion; //obtenemos la pagina actual
                        //aca debemos revisar a donde nos vamos

                        _this10.navCtrl.navigateRoot('calendario'); //console.log(accion);        

                      }
                    });
                    _context7.next = 7;
                    return modal.present();

                  case 7:
                    return _context7.abrupt("return", _context7.sent);

                  case 8:
                  case "end":
                    return _context7.stop();
                }
              }
            }, _callee7, this);
          }));
        }
      }, {
        key: "openBusquedaAvanzada",
        value: function openBusquedaAvanzada() {
          var navigationExtras = {
            queryParams: {
              Id: this.idConsultar
            }
          };
          this.navCtrl.navigateRoot(['busqueda-avanzada'], navigationExtras);
        }
      }]);

      return PreTiposatencionPage;
    }();

    PreTiposatencionPage.ctorParameters = function () {
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
        type: _app_services_ServicioUtiles__WEBPACK_IMPORTED_MODULE_4__["ServicioUtiles"]
      }, {
        type: _app_services_ServicioAcceso__WEBPACK_IMPORTED_MODULE_6__["ServicioAcceso"]
      }, {
        type: _app_services_ServicioCitas__WEBPACK_IMPORTED_MODULE_7__["ServicioCitas"]
      }, {
        type: _app_services_ServicioParametrosApp__WEBPACK_IMPORTED_MODULE_5__["ServicioParametrosApp"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]
      }];
    };

    PreTiposatencionPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-pre-tiposatencion',
      template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! raw-loader!./pre-tiposatencion.page.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/pre-tiposatencion/pre-tiposatencion.page.html"))["default"],
      styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! ./pre-tiposatencion.page.scss */
      "./src/app/pre-tiposatencion/pre-tiposatencion.page.scss"))["default"]]
    })], PreTiposatencionPage);
    /***/
  }
}]);
//# sourceMappingURL=pre-tiposatencion-pre-tiposatencion-module-es5.js.map