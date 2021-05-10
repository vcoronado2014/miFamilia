(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pre-tiposatencion-pre-tiposatencion-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pre-tiposatencion/pre-tiposatencion.page.html":
/*!*****************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pre-tiposatencion/pre-tiposatencion.page.html ***!
  \*****************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\r\n  <ion-toolbar color=\"primary\" mode=\"md\">\r\n    <ion-buttons slot=\"start\">\r\n      <ion-back-button defaultHref=\"/calendario\" class=\"fcw\"></ion-back-button>\r\n    </ion-buttons>\r\n    <ion-title class=\"fcw\">Reserva de horas</ion-title>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content class=\"back-app\">\r\n  <!-- combo de reserva de horas -->\r\n    <mat-form-field appearance=\"outline\" class=\"field-tipo-atencion\">\r\n      <mat-label>Tipo atención</mat-label>\r\n      <mat-select [disabled]=\"disabledCombo\" [(ngModel)]=\"comboSeleccionado\" (selectionChange)=\"buscarCitas($event)\">\r\n        <mat-option *ngFor=\"let tipo of tiposAtencion\" [value]=\"tipo.Texto\">{{tipo.Texto}}</mat-option>\r\n      </mat-select>\r\n    </mat-form-field>\r\n  \r\n  <!-- progress bar -->\r\n<!--   <div class=\"centrado\" [hidden]=\"!mostrarProgress\">\r\n    <ion-label class=\"titulo-item-2\">Buscando citas</ion-label>\r\n    <ion-progress-bar type=\"indeterminate\" class=\"ion-margin-top\"></ion-progress-bar>\r\n  </div> -->\r\n  <app-progress [mostrar]=\"mostrarProgress\" titulo=\"Buscando citas\"></app-progress>\r\n  <!-- progress bar buscando tipos de atencion  -->\r\n<!--   <div class=\"centradoDisp\" [hidden]=\"!mostrarProgressDisp\">\r\n    <ion-label class=\"titulo-item-2\">Buscando tipos atención</ion-label>\r\n    <ion-progress-bar type=\"indeterminate\" class=\"ion-margin-top\"></ion-progress-bar>\r\n  </div> -->\r\n  <app-progress [mostrar]=\"mostrarProgressDisp\" titulo=\"Buscando tipos atención\"></app-progress>\r\n  <!-- resultados -->\r\n  <div *ngIf=\"encontroCitas\">\r\n    <div class=\"ion-padding-start ion-padding-end\">\r\n      <h6 class=\"titulo-item\">\r\n        Citas más próximas\r\n      </h6>\r\n      <p class=\"ion-text-wrap texto-item\">\r\n        A continuación se listan los cupos disponibles más próximos.\r\n      </p>\r\n    </div>\r\n    <div class=\"ion-padding\">\r\n      <ion-grid class=\"ion-no-padding\" *ngFor=\"let cita of citasFiltradas\">\r\n        <ion-row class=\"ion-padding-bottom ion-padding-top linea-item\" *ngIf=\"cita.indice <= 3\" (click)=\"citaSelected(cita)\">\r\n          <ion-col size=\"9\" class=\"texto-item ion-text-capitalize\">\r\n            {{cita.Servicio.Nombre}}\r\n          </ion-col>\r\n          <ion-col size=\"3\" class=\"titulo-hora ion-text-end\">\r\n            {{transformDateIso(cita.FechaHoraInicio)}}\r\n          </ion-col>\r\n          <ion-col size=\"12\" class=\"titulo-fecha\" class=\"ion-text-capitalize\">\r\n            {{transformDate(cita.FechaHoraInicio, 'dddd DD MMMM YYYY')}}\r\n          </ion-col>\r\n          <ion-col class=\"texto-item ion-text-capitalize\">\r\n            {{cita.NombresMedico.toLowerCase()}} {{cita.ApellidosMedico.toLowerCase()}}\r\n          </ion-col>\r\n        </ion-row>\r\n      </ion-grid>\r\n    </div>\r\n    <!--pie de búsqueda -->\r\n    <div class=\"pl-24 pr-24\">\r\n      <p class=\"ion-text-wrap texto-item ion-text-left\">\r\n        Si no te sirven los cupos propuesto prueba con la búsqueda avanzada.\r\n      </p>\r\n    </div>\r\n    <!-- boton busqueda avanzada -->\r\n    <div class=\"ion-padding-top\">\r\n      <ion-button expand=\"full\" fill=\"clear\" (click)=\"openBusquedaAvanzada()\">BÚSQUEDA AVANZADA</ion-button>\r\n    </div>\r\n\r\n  </div>\r\n  <div *ngIf=\"!encontroCitas && mostrarProgress == false && citasFiltradas.length > 0\" class=\"ion-padding-start ion-padding-end centrado\">\r\n    <ion-label class=\"ion-text-center no-encontrado\">No existen cupos con los criterios ingresados</ion-label>\r\n  </div>\r\n\r\n\r\n  \r\n\r\n</ion-content>\r\n");

/***/ }),

/***/ "./src/app/pre-tiposatencion/pre-tiposatencion.module.ts":
/*!***************************************************************!*\
  !*** ./src/app/pre-tiposatencion/pre-tiposatencion.module.ts ***!
  \***************************************************************/
/*! exports provided: PreTiposatencionPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PreTiposatencionPageModule", function() { return PreTiposatencionPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _pre_tiposatencion_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./pre-tiposatencion.page */ "./src/app/pre-tiposatencion/pre-tiposatencion.page.ts");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/form-field */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/form-field.js");
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/select */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/select.js");
/* harmony import */ var _components_components_module__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../components/components.module */ "./src/app/components/components.module.ts");










let PreTiposatencionPageModule = class PreTiposatencionPageModule {
};
PreTiposatencionPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _angular_material_form_field__WEBPACK_IMPORTED_MODULE_7__["MatFormFieldModule"],
            _angular_material_select__WEBPACK_IMPORTED_MODULE_8__["MatSelectModule"],
            _components_components_module__WEBPACK_IMPORTED_MODULE_9__["ComponentsModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterModule"].forChild([
                {
                    path: '',
                    component: _pre_tiposatencion_page__WEBPACK_IMPORTED_MODULE_6__["PreTiposatencionPage"]
                }
            ])
        ],
        declarations: [_pre_tiposatencion_page__WEBPACK_IMPORTED_MODULE_6__["PreTiposatencionPage"]]
    })
], PreTiposatencionPageModule);



/***/ }),

/***/ "./src/app/pre-tiposatencion/pre-tiposatencion.page.scss":
/*!***************************************************************!*\
  !*** ./src/app/pre-tiposatencion/pre-tiposatencion.page.scss ***!
  \***************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".combo {\n  width: 100%;\n  max-width: 100%;\n}\n\n.centrado {\n  text-align: center;\n  width: 100%;\n  height: 10%;\n  position: absolute;\n  top: 45%;\n  padding-left: 60px;\n  padding-right: 60px;\n}\n\n.titulo-item {\n  font-size: 14px;\n  color: #000000DE;\n  font-weight: bold;\n}\n\n.titulo-fecha {\n  font-size: 16px;\n  color: #000000DE;\n}\n\n.titulo-hora {\n  font-size: 12px;\n  color: #000000DE;\n}\n\n.no-encontrado {\n  font-size: 16px;\n  color: #0000008A;\n}\n\n.pt-8 {\n  padding-top: 8px;\n}\n\n.pb-8 {\n  padding-bottom: 8px;\n}\n\n.pl-24 {\n  padding-left: 24px;\n}\n\n.pr-24 {\n  padding-right: 24px;\n}\n\n.linea-item {\n  border-bottom-style: solid;\n  border-bottom-width: 1px;\n  border-bottom-color: #0000001F;\n}\n\n.borde {\n  border-radius: 5px;\n  border: 1px solid #0000001F;\n  padding: 5px;\n  padding-top: 0;\n}\n\n.label-tda {\n  position: relative;\n  top: -10px;\n  margin-left: 16px;\n  padding-left: 2px;\n  padding-right: 5px;\n  background: white;\n}\n\n.pt-32 {\n  padding-top: 32px;\n}\n\n.titulo-item-2 {\n  font-size: 16px;\n  color: #000000DE;\n}\n\n/*centrado disponibilidad*/\n\n.centradoDisp {\n  text-align: center;\n  width: 100%;\n  height: 10%;\n  position: absolute;\n  top: 35%;\n  padding-left: 60px;\n  padding-right: 60px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcHJlLXRpcG9zYXRlbmNpb24vRjpcXGFwcF9taWZhbWlsaWFfZ2l0XFxtaUZhbWlsaWFfcHJlL3NyY1xcYXBwXFxwcmUtdGlwb3NhdGVuY2lvblxccHJlLXRpcG9zYXRlbmNpb24ucGFnZS5zY3NzIiwic3JjL2FwcC9wcmUtdGlwb3NhdGVuY2lvbi9wcmUtdGlwb3NhdGVuY2lvbi5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxXQUFBO0VBQ0EsZUFBQTtBQ0NKOztBRENBO0VBQ0ksa0JBQUE7RUFDQSxXQUFBO0VBQ0EsV0FBQTtFQUNBLGtCQUFBO0VBQ0EsUUFBQTtFQUNBLGtCQUFBO0VBQ0EsbUJBQUE7QUNFSjs7QURBQTtFQUNJLGVBQUE7RUFDQSxnQkFBQTtFQUNBLGlCQUFBO0FDR0o7O0FEREE7RUFDSSxlQUFBO0VBQ0EsZ0JBQUE7QUNJSjs7QURGQTtFQUNJLGVBQUE7RUFDQSxnQkFBQTtBQ0tKOztBREhBO0VBQ0ksZUFBQTtFQUNBLGdCQUFBO0FDTUo7O0FESkE7RUFDSSxnQkFBQTtBQ09KOztBRExBO0VBQ0ksbUJBQUE7QUNRSjs7QUROQTtFQUNJLGtCQUFBO0FDU0o7O0FEUEE7RUFDSSxtQkFBQTtBQ1VKOztBRFJBO0VBQ0ksMEJBQUE7RUFDQSx3QkFBQTtFQUNBLDhCQUFBO0FDV0o7O0FEVEE7RUFDSSxrQkFBQTtFQUNBLDJCQUFBO0VBQ0EsWUFBQTtFQUNBLGNBQUE7QUNZSjs7QURWQTtFQUNJLGtCQUFBO0VBQ0EsVUFBQTtFQUNBLGlCQUFBO0VBQ0EsaUJBQUE7RUFDQSxrQkFBQTtFQUNBLGlCQUFBO0FDYUo7O0FEWEE7RUFDSSxpQkFBQTtBQ2NKOztBRFpBO0VBQ0ksZUFBQTtFQUNBLGdCQUFBO0FDZUo7O0FEYkEsMEJBQUE7O0FBQ0E7RUFDSSxrQkFBQTtFQUNBLFdBQUE7RUFDQSxXQUFBO0VBQ0Esa0JBQUE7RUFDQSxRQUFBO0VBQ0Esa0JBQUE7RUFDQSxtQkFBQTtBQ2dCSiIsImZpbGUiOiJzcmMvYXBwL3ByZS10aXBvc2F0ZW5jaW9uL3ByZS10aXBvc2F0ZW5jaW9uLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jb21ib3tcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgbWF4LXdpZHRoOiAxMDAlO1xyXG59XHJcbi5jZW50cmFkb3tcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIHdpZHRoOiAxMDAlOyAgICAgICBcclxuICAgIGhlaWdodDogMTAlO1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgdG9wOjQ1JTsgIFxyXG4gICAgcGFkZGluZy1sZWZ0OiA2MHB4O1xyXG4gICAgcGFkZGluZy1yaWdodDogNjBweDsgICAgICAgICBcclxufVxyXG4udGl0dWxvLWl0ZW17XHJcbiAgICBmb250LXNpemU6IDE0cHg7XHJcbiAgICBjb2xvcjogIzAwMDAwMERFO1xyXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbn1cclxuLnRpdHVsby1mZWNoYXtcclxuICAgIGZvbnQtc2l6ZTogMTZweDtcclxuICAgIGNvbG9yOiAjMDAwMDAwREU7XHJcbn1cclxuLnRpdHVsby1ob3Jhe1xyXG4gICAgZm9udC1zaXplOiAxMnB4O1xyXG4gICAgY29sb3I6ICMwMDAwMDBERTtcclxufVxyXG4ubm8tZW5jb250cmFkb3tcclxuICAgIGZvbnQtc2l6ZTogMTZweDtcclxuICAgIGNvbG9yOiAjMDAwMDAwOEE7XHJcbn1cclxuLnB0LTh7XHJcbiAgICBwYWRkaW5nLXRvcDogOHB4O1xyXG59XHJcbi5wYi04e1xyXG4gICAgcGFkZGluZy1ib3R0b206IDhweDtcclxufVxyXG4ucGwtMjR7XHJcbiAgICBwYWRkaW5nLWxlZnQ6IDI0cHg7XHJcbn1cclxuLnByLTI0e1xyXG4gICAgcGFkZGluZy1yaWdodDogMjRweDtcclxufVxyXG4ubGluZWEtaXRlbXtcclxuICAgIGJvcmRlci1ib3R0b20tc3R5bGU6IHNvbGlkO1xyXG4gICAgYm9yZGVyLWJvdHRvbS13aWR0aDogMXB4O1xyXG4gICAgYm9yZGVyLWJvdHRvbS1jb2xvcjogIzAwMDAwMDFGO1xyXG59XHJcbi5ib3JkZXtcclxuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcclxuICAgIGJvcmRlcjogMXB4IHNvbGlkICMwMDAwMDAxRjtcclxuICAgIHBhZGRpbmc6IDVweDtcclxuICAgIHBhZGRpbmctdG9wOiAwO1xyXG59XHJcbi5sYWJlbC10ZGF7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICB0b3A6LTEwcHg7XHJcbiAgICBtYXJnaW4tbGVmdDogMTZweDtcclxuICAgIHBhZGRpbmctbGVmdDogMnB4O1xyXG4gICAgcGFkZGluZy1yaWdodDogNXB4O1xyXG4gICAgYmFja2dyb3VuZDogd2hpdGU7XHJcbn1cclxuLnB0LTMye1xyXG4gICAgcGFkZGluZy10b3A6IDMycHg7XHJcbn1cclxuLnRpdHVsby1pdGVtLTJ7XHJcbiAgICBmb250LXNpemU6IDE2cHg7XHJcbiAgICBjb2xvcjogIzAwMDAwMERFO1xyXG59XHJcbi8qY2VudHJhZG8gZGlzcG9uaWJpbGlkYWQqL1xyXG4uY2VudHJhZG9EaXNwe1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgd2lkdGg6IDEwMCU7ICAgICAgIFxyXG4gICAgaGVpZ2h0OiAxMCU7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICB0b3A6MzUlOyAgXHJcbiAgICBwYWRkaW5nLWxlZnQ6IDYwcHg7XHJcbiAgICBwYWRkaW5nLXJpZ2h0OiA2MHB4OyAgICAgICAgIFxyXG59XHJcblxyXG4iLCIuY29tYm8ge1xuICB3aWR0aDogMTAwJTtcbiAgbWF4LXdpZHRoOiAxMDAlO1xufVxuXG4uY2VudHJhZG8ge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDEwJTtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDQ1JTtcbiAgcGFkZGluZy1sZWZ0OiA2MHB4O1xuICBwYWRkaW5nLXJpZ2h0OiA2MHB4O1xufVxuXG4udGl0dWxvLWl0ZW0ge1xuICBmb250LXNpemU6IDE0cHg7XG4gIGNvbG9yOiAjMDAwMDAwREU7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xufVxuXG4udGl0dWxvLWZlY2hhIHtcbiAgZm9udC1zaXplOiAxNnB4O1xuICBjb2xvcjogIzAwMDAwMERFO1xufVxuXG4udGl0dWxvLWhvcmEge1xuICBmb250LXNpemU6IDEycHg7XG4gIGNvbG9yOiAjMDAwMDAwREU7XG59XG5cbi5uby1lbmNvbnRyYWRvIHtcbiAgZm9udC1zaXplOiAxNnB4O1xuICBjb2xvcjogIzAwMDAwMDhBO1xufVxuXG4ucHQtOCB7XG4gIHBhZGRpbmctdG9wOiA4cHg7XG59XG5cbi5wYi04IHtcbiAgcGFkZGluZy1ib3R0b206IDhweDtcbn1cblxuLnBsLTI0IHtcbiAgcGFkZGluZy1sZWZ0OiAyNHB4O1xufVxuXG4ucHItMjQge1xuICBwYWRkaW5nLXJpZ2h0OiAyNHB4O1xufVxuXG4ubGluZWEtaXRlbSB7XG4gIGJvcmRlci1ib3R0b20tc3R5bGU6IHNvbGlkO1xuICBib3JkZXItYm90dG9tLXdpZHRoOiAxcHg7XG4gIGJvcmRlci1ib3R0b20tY29sb3I6ICMwMDAwMDAxRjtcbn1cblxuLmJvcmRlIHtcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xuICBib3JkZXI6IDFweCBzb2xpZCAjMDAwMDAwMUY7XG4gIHBhZGRpbmc6IDVweDtcbiAgcGFkZGluZy10b3A6IDA7XG59XG5cbi5sYWJlbC10ZGEge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHRvcDogLTEwcHg7XG4gIG1hcmdpbi1sZWZ0OiAxNnB4O1xuICBwYWRkaW5nLWxlZnQ6IDJweDtcbiAgcGFkZGluZy1yaWdodDogNXB4O1xuICBiYWNrZ3JvdW5kOiB3aGl0ZTtcbn1cblxuLnB0LTMyIHtcbiAgcGFkZGluZy10b3A6IDMycHg7XG59XG5cbi50aXR1bG8taXRlbS0yIHtcbiAgZm9udC1zaXplOiAxNnB4O1xuICBjb2xvcjogIzAwMDAwMERFO1xufVxuXG4vKmNlbnRyYWRvIGRpc3BvbmliaWxpZGFkKi9cbi5jZW50cmFkb0Rpc3Age1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDEwJTtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDM1JTtcbiAgcGFkZGluZy1sZWZ0OiA2MHB4O1xuICBwYWRkaW5nLXJpZ2h0OiA2MHB4O1xufSJdfQ== */");

/***/ }),

/***/ "./src/app/pre-tiposatencion/pre-tiposatencion.page.ts":
/*!*************************************************************!*\
  !*** ./src/app/pre-tiposatencion/pre-tiposatencion.page.ts ***!
  \*************************************************************/
/*! exports provided: PreTiposatencionPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PreTiposatencionPage", function() { return PreTiposatencionPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _app_services_ServicioUtiles__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../app/services/ServicioUtiles */ "./src/app/services/ServicioUtiles.ts");
/* harmony import */ var _app_services_ServicioParametrosApp__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../app/services/ServicioParametrosApp */ "./src/app/services/ServicioParametrosApp.ts");
/* harmony import */ var _app_services_ServicioAcceso__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../app/services/ServicioAcceso */ "./src/app/services/ServicioAcceso.ts");
/* harmony import */ var _app_services_ServicioCitas__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../app/services/ServicioCitas */ "./src/app/services/ServicioCitas.ts");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! moment */ "./node_modules/moment/moment.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _app_pipes_fecha_pipe__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../app/pipes/fecha.pipe */ "./src/app/pipes/fecha.pipe.ts");
/* harmony import */ var _modal_operacion_cita_modal_operacion_cita_page__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../modal-operacion-cita/modal-operacion-cita.page */ "./src/app/modal-operacion-cita/modal-operacion-cita.page.ts");








/* import { ServicioGeo } from '../../app/services/ServicioGeo'; */


//modal

let PreTiposatencionPage = class PreTiposatencionPage {
    constructor(navCtrl, toast, modalCtrl, platform, loading, menu, utiles, acceso, cita, parametrosApp, activatedRoute, router) {
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
        this.textColor = '#FFFFFF';
        //datos para consultar citas
        this.runPaciente = '';
        this.codigoDeis = '';
        this.serviceType = '349';
        this.tipoOperacion = 'disponibilidad';
        //tipos de atencion disponibles y citas
        this.citas = [];
        this.citasFiltradas = [];
        this.tiposAtencion = [];
        this.comboSeleccionado = 'Selecciona...';
        this.idComboSeleccionado = 0;
        this.mostrarProgress = false;
        this.encontroCitas = false;
        this.disabledCombo = false;
        this.paginaActual = 0;
        //para el progress de buscar diponibilidad
        this.mostrarProgressDisp = false;
        this.encontroCitasDisp = false;
        //idconsultar
        this.idConsultar = 0;
    }
    ngOnInit() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            moment__WEBPACK_IMPORTED_MODULE_8__["locale"]('es');
            //debemos recibir por parametro al usuario que le conseguiremos la hora
            this.activatedRoute.queryParams.subscribe((params) => Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
                if (params && params.Id) {
                    //this.estaAgregandoFamilia = true;
                    this.idConsultar = params.Id;
                    this.usuarioAps = this.utiles.entregaUsuario(params.Id);
                    if (this.usuarioAps != null) {
                        this.usuarioAps.UrlImagen = this.utiles.entregaImagen(this.usuarioAps);
                        this.miColor = this.utiles.entregaColor(this.usuarioAps);
                        this.runPaciente = this.utiles.insertarGuion(this.usuarioAps.Rut);
                        this.codigoDeis = this.usuarioAps.ConfiguracionNodo.CodigoDeis2014;
                        this.nodId = this.usuarioAps.ConfiguracionNodo.NodId;
                        //creamos tipo atencion inicial
                        this.crearTiposAtencion();
                        this.setFechasInicioFin();
                        if (this.parametrosApp.USA_API_MANAGEMENT()) {
                            yield this.buscarDisponibilidadApi(this.fechaInicio, this.fechaTermino, this.codigoDeis, this.runPaciente, this.serviceType, this.tipoOperacion);
                        }
                        else {
                            yield this.buscarDisponibilidad(this.fechaInicio, this.fechaTermino, this.codigoDeis, this.runPaciente, this.serviceType, this.tipoOperacion);
                        }
                    }
                    else {
                        this.utiles.presentToast('No hay usuario, vuelva a seleccionar', 'bottom', 2000);
                    }
                }
                else {
                    this.utiles.presentToast('No hay usuario, vuelva a seleccionar', 'bottom', 2000);
                }
            }));
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
        });
    }
    setFechasInicioFin() {
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
        this.fechaTermino = fechaTer.format();
        //guardamos las fechas de consulta para después procesarlas
        sessionStorage.setItem('FECHA_INICIO_CONSULTA', this.fechaInicio);
        sessionStorage.setItem('FECHA_TERMINO_CONSULTA', this.fechaTermino);
    }
    //metodo para obtener disponibilidad y tipos de atención
    //lo comentamos debido a que se usará progress
    buscarDisponibilidad(start, end, organization, patient, serviceType, tipoOperacion) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            //ACA ME FALTA CONTROLAR LOS MENSAJES
            let loader = yield this.loading.create({
                cssClass: 'loading-vacio',
                showBackdrop: false,
                spinner: null,
            });
            yield loader.present().then(() => Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
                //esto lo agregamos para desabilitarlo
                this.disabledCombo = true;
                //lo agregamos para mostrar la info de buscando disponibilidad
                this.mostrarProgress = true;
                //********************* */
                this.citas = [];
                this.citasFiltradas = [];
                if (!this.utiles.isAppOnDevice()) {
                    //llamada web
                    this.cita.getDisponibilidad(start, end, organization, patient, serviceType, '', '', tipoOperacion, this.nodId).subscribe((response) => {
                        this.procesarRespuestaTotal(response, loader);
                    });
                    /*         this.cita.getDisponibilidadApi(start, end, organization, patient, serviceType, '', '', tipoOperacion, this.nodId).subscribe((response: any)=>{
                              this.procesarRespuestaTotal(response, loader);
                            }); */
                }
                else {
                    //llamada nativa
                    this.cita.getDisponibilidadNative(start, end, organization, patient, serviceType, '', '', tipoOperacion, this.nodId).then((response) => {
                        var respuesta = JSON.parse(response.data);
                        this.procesarRespuestaTotal(respuesta, loader);
                    });
                    /*         this.cita.getDisponibilidadApiNative(start, end, organization, patient, serviceType, '', '', tipoOperacion, this.nodId).then((response: any)=>{
                              var respuesta = JSON.parse(response.data);
                              this.procesarRespuestaTotal(respuesta, loader);
                            }); */
                }
            }));
        });
    }
    buscarDisponibilidadApi(start, end, organization, patient, serviceType, tipoOperacion) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            //ACA ME FALTA CONTROLAR LOS MENSAJES
            let loader = yield this.loading.create({
                cssClass: 'loading-vacio',
                showBackdrop: false,
                spinner: null,
            });
            yield loader.present().then(() => Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
                //esto lo agregamos para desabilitarlo
                this.disabledCombo = true;
                this.mostrarProgressDisp = true;
                //********************* */
                this.citas = [];
                this.citasFiltradas = [];
                if (!this.utiles.isAppOnDevice()) {
                    //llamada web
                    this.cita.getDisponibilidadApi(start, end, organization, patient, serviceType, '', '', tipoOperacion, this.nodId).subscribe((response) => {
                        this.procesarRespuestaTotal(response, loader);
                    }, error => {
                        console.log(error.message);
                        loader.dismiss();
                        this.disabledCombo = false;
                        this.mostrarProgressDisp = false;
                        this.utiles.presentToast('Se ha producido un error al obtener disponibilidad', 'bottom', 2000);
                    });
                }
                else {
                    //llamada nativa
                    this.cita.getDisponibilidadApiNative(start, end, organization, patient, serviceType, '', '', tipoOperacion, this.nodId).then((responseD) => {
                        var respuestaDisp = JSON.parse(responseD.data);
                        this.procesarRespuestaTotal(respuestaDisp, loader);
                    }).catch(error => {
                        console.log(error.message);
                        loader.dismiss();
                        this.disabledCombo = false;
                        this.mostrarProgressDisp = false;
                        this.utiles.presentToast('Se ha producido un error al obtener disponibilidad', 'bottom', 2000);
                    });
                }
            }));
        });
    }
    //metodo para procesar la respuesta
    procesarRespuestaTotalDisp(data) {
        //vienen las citas sin fecha
        this.citas = [];
        this.citasFiltradas = [];
        //this.tiposAtencion = [];
        if (data && data.Mensaje) {
            //correcto
            if (data.Mensaje.Codigo == 'correcto') {
                //todo bien procesar las citas
                var contador = 0;
                if (data.TiposAtencion) {
                    this.agregarTiposAtencion(data.TiposAtencion);
                    //console.log(this.tiposAtencion);
                }
                //aca asignamos las citas
                this.citas = data.CitasDisponibles;
                //console.log(this.citas);
                //guardamos las citas en session
                sessionStorage.setItem('CITAS_DISPONIBLES', JSON.stringify(this.citas));
                //als citas deberíamos guardarlas para procesarlas
                //hay que ver si es necesario o no
            }
            else {
                this.idComboSeleccionado = 0;
                this.tiposAtencion = [];
                this.citas = [];
                this.citasFiltradas = [];
            }
            this.mostrarProgressDisp = false;
            this.encontroCitasDisp = true;
            //error
        }
    }
    procesarRespuestaTotal(data, loader) {
        //vienen las citas sin fecha
        this.citas = [];
        this.citasFiltradas = [];
        //this.tiposAtencion = [];
        if (data && data.Mensaje) {
            //correcto
            if (data.Mensaje.Codigo == 'correcto') {
                //todo bien procesar las citas
                var contador = 0;
                if (data.TiposAtencion) {
                    this.agregarTiposAtencion(data.TiposAtencion);
                    //console.log(this.tiposAtencion);
                }
                //aca asignamos las citas
                this.citas = data.CitasDisponibles;
                //console.log(this.citas);
                //guardamos las citas en session
                sessionStorage.setItem('CITAS_DISPONIBLES', JSON.stringify(this.citas));
                //als citas deberíamos guardarlas para procesarlas
                //hay que ver si es necesario o no
                loader.dismiss();
                this.disabledCombo = false;
                this.mostrarProgressDisp = false;
                this.mostrarProgress = false;
            }
            else {
                this.idComboSeleccionado = 0;
                this.tiposAtencion = [];
                this.citas = [];
                this.citasFiltradas = [];
                loader.dismiss();
                this.disabledCombo = false;
                this.mostrarProgressDisp = false;
                this.mostrarProgress = false;
            }
            //error
        }
    }
    indexarCitas() {
        //el tipo de atencion seleccionado
        this.citasFiltradas = [];
        var indice = 1;
        if (this.citas && this.citas.length > 0) {
            this.citas.forEach(cita => {
                if (cita.TipoAtencion == this.comboSeleccionado) {
                    //esta filtrando
                    cita.indice = indice;
                    this.citasFiltradas.push(cita);
                    indice++;
                }
            });
        }
        if (indice > 2) {
            this.encontroCitas = true;
        }
        //console.log(this.citasFiltradas);
    }
    //creamos los tipos de atención disponibles
    crearTiposAtencion() {
        //var arr = [];
        this.tiposAtencion = [];
        var contador = 1;
        var entidadInicial = {
            Texto: 'Selecciona...',
            Valor: 0,
            Selected: true
        };
        this.tiposAtencion.push(entidadInicial);
        this.idComboSeleccionado = 0;
        //console.log('tipo seleccionado ' + this.idComboSeleccionado);
        //console.log(this.tiposAtencion);
    }
    agregarTiposAtencion(tipos) {
        var contador = 1;
        if (tipos && tipos.length > 0) {
            tipos.forEach(tipo => {
                var entidadTipo = {
                    Texto: tipo,
                    Valor: contador,
                    Selected: false
                };
                //tipos.push(entidadTipo);
                this.tiposAtencion.push(entidadTipo);
                contador++;
            });
        }
        //guardamos los tipos de atencion
        sessionStorage.setItem('TIPOS_ATENCION', JSON.stringify(this.tiposAtencion));
    }
    seleccionarItemCombo() {
        if (this.comboSeleccionado && this.tiposAtencion) {
            this.tiposAtencion.forEach(tipo => {
                if (tipo.Texto == this.comboSeleccionado) {
                    tipo.Selected = true;
                }
                else {
                    tipo.Selected = false;
                }
            });
            //guardamos los tipos de atención
            sessionStorage.setItem('TIPOS_ATENCION', JSON.stringify(this.tiposAtencion));
        }
    }
    buscarCitas(event) {
        //este lo cambiamos para el control mat-select
        //if (event.detail.value){
        if (event.value) {
            this.comboSeleccionado = event.value;
            //console.log(this.comboSeleccionado);
            this.mostrarProgress = true;
            this.encontroCitas = false;
            this.disabledCombo = false;
            this.seleccionarItemCombo();
            setTimeout(() => {
                //console.log('Async operation has ended');
                //event.target.complete();
                this.mostrarProgress = false;
                //this.encontroCitas = true;
                //si existen citas hay que deshabilitar el control
                this.disabledCombo = true;
                this.indexarCitas();
            }, 2000);
        }
    }
    transformDate(value, format) {
        var pi = new _app_pipes_fecha_pipe__WEBPACK_IMPORTED_MODULE_9__["MomentPipe"]();
        return pi.transform(value, format);
    }
    transformDateIso(dateString) {
        var retorno = "";
        var parteT = dateString.split("T");
        if (parteT && parteT.length == 2) {
            var partes = parteT[1].split(":");
            if (partes && partes.length > 1) {
                retorno = partes[0] + ":" + partes[1];
            }
        }
        return retorno;
    }
    //modal del detalle de la cita
    citaSelected(item) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            if (item) {
                this.itemSelected = item;
            }
            const modal = yield this.modalCtrl.create({
                component: _modal_operacion_cita_modal_operacion_cita_page__WEBPACK_IMPORTED_MODULE_10__["ModalOperacionCitaPage"],
                componentProps: {
                    'cita': JSON.stringify(item),
                    'operacion': 'reservar'
                }
            });
            modal.onDidDismiss().then((data) => {
                if (data.data && data.data.accion) {
                    var accion = data.data.accion;
                    //obtenemos la pagina actual
                    //aca debemos revisar a donde nos vamos
                    this.navCtrl.navigateRoot('calendario');
                    //console.log(accion);        
                }
            });
            return yield modal.present();
        });
    }
    openBusquedaAvanzada() {
        const navigationExtras = {
            queryParams: {
                Id: this.idConsultar
            }
        };
        this.navCtrl.navigateRoot(['busqueda-avanzada'], navigationExtras);
    }
};
PreTiposatencionPage.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ToastController"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ModalController"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["Platform"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["LoadingController"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["MenuController"] },
    { type: _app_services_ServicioUtiles__WEBPACK_IMPORTED_MODULE_4__["ServicioUtiles"] },
    { type: _app_services_ServicioAcceso__WEBPACK_IMPORTED_MODULE_6__["ServicioAcceso"] },
    { type: _app_services_ServicioCitas__WEBPACK_IMPORTED_MODULE_7__["ServicioCitas"] },
    { type: _app_services_ServicioParametrosApp__WEBPACK_IMPORTED_MODULE_5__["ServicioParametrosApp"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] }
];
PreTiposatencionPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-pre-tiposatencion',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./pre-tiposatencion.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pre-tiposatencion/pre-tiposatencion.page.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./pre-tiposatencion.page.scss */ "./src/app/pre-tiposatencion/pre-tiposatencion.page.scss")).default]
    })
], PreTiposatencionPage);



/***/ })

}]);
//# sourceMappingURL=pre-tiposatencion-pre-tiposatencion-module-es2015.js.map