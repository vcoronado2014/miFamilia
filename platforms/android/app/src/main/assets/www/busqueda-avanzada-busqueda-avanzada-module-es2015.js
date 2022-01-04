(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["busqueda-avanzada-busqueda-avanzada-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/busqueda-avanzada/busqueda-avanzada.page.html":
/*!*****************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/busqueda-avanzada/busqueda-avanzada.page.html ***!
  \*****************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\r\n    <ion-toolbar color=\"primary\" mode=\"md\">\r\n      <ion-buttons slot=\"start\">\r\n       <!--  <ion-back-button defaultHref=\"/pre-tiposatencion\" class=\"fcw\"></ion-back-button> -->\r\n        <ion-back-button (click)=\"volver()\" defaultHref=\"/\" class=\"fcw\"></ion-back-button>\r\n      </ion-buttons>\r\n      <ion-title class=\"fcw\">Búsqueda avanzada</ion-title>\r\n    </ion-toolbar>\r\n  </ion-header>\r\n  \r\n  <ion-content class=\"back-app\">\r\n    <mat-form-field appearance=\"outline\" class=\"field-tipo-atencion\">\r\n      <mat-label>Tipo atención</mat-label>\r\n      <mat-select [disabled]=\"disabledCombo\" [(ngModel)]=\"comboSeleccionado\" (selectionChange)=\"buscarCitas($event)\">\r\n        <mat-option *ngFor=\"let tipo of tiposAtencion\" [value]=\"tipo.Texto\">{{tipo.Texto}}</mat-option>\r\n      </mat-select>\r\n    </mat-form-field>\r\n\r\n    <!-- fecha inicio -->\r\n    <ion-item class=\"ion-padding-start ion-padding-end\">\r\n      <ion-label>Fecha de inicio</ion-label>\r\n      <ion-datetime \r\n        (ionChange)=\"changeFechaInicio($event)\"\r\n        monthNames=\"enero, febrero, marzo, abril, mayo, junio, julio, agosto, septiembre, octubre, noviembre, diciembre\"\r\n        monthShortNames=\"ene, feb, mar, abr, may, jun, jul, ago, sep, oct, nov, dic\"\r\n        dayNames=\"lunes, martes, miércoles, jueves, viernes, sábado, domingo\"\r\n        dayShortNames=\"lun, mar, mié, jue, vie, sáb, dom\"\r\n        displayFormat=\"MMMM, DD YYYY\" \r\n        doneText=\"Aceptar\"\r\n        cancelText=\"Cancelar\"\r\n        [min]=\"fechaInicio\" \r\n        [max]=\"fechaTermino\" \r\n        [value]=\"fechaInicio\">\r\n      </ion-datetime>\r\n    </ion-item>\r\n    <!-- horario -->\r\n    <ion-item class=\"ion-padding-start ion-padding-end\">\r\n      <ion-label>Horario</ion-label>\r\n      <ion-select value=\"0\" (ionChange)=\"changeHorario($event)\" okText=\"Aceptar\" cancelText=\"Cancelar\">\r\n        <ion-select-option value=\"0\">Todo el día</ion-select-option>\r\n        <ion-select-option value=\"1\">Mañana</ion-select-option>\r\n        <ion-select-option value=\"2\">Tarde</ion-select-option>\r\n      </ion-select>\r\n    </ion-item>\r\n    <!-- dias -->\r\n    <ion-item class=\"ion-padding-start ion-padding-end\">\r\n      <ion-label>Días de la semana</ion-label>\r\n      <ion-select (ionChange)=\"changeDia($event)\" multiple=\"true\" [value]=\"['1','2','3','4','5','6','7']\" okText=\"Aceptar\" cancelText=\"Cancelar\">\r\n        <ion-select-option value=\"1\">Lu</ion-select-option>\r\n        <ion-select-option value=\"2\">Ma</ion-select-option>\r\n        <ion-select-option value=\"3\">Mi</ion-select-option>\r\n        <ion-select-option value=\"4\">Ju</ion-select-option>\r\n        <ion-select-option value=\"5\">Vi</ion-select-option>\r\n        <ion-select-option value=\"6\">Sá</ion-select-option>\r\n        <ion-select-option value=\"7\">Do</ion-select-option>\r\n      </ion-select>\r\n    </ion-item>\r\n    <!-- boton buscar -->\r\n    <ion-button class=\"mt-32 ion-padding-start\" color=\"primary\" (click)=\"buscarCitas($event)\">BUSCAR</ion-button>\r\n\r\n    <app-progress [mostrar]=\"mostrarProgress\" titulo=\"Buscando citas\"></app-progress>\r\n    <!-- resultados -->\r\n    <div *ngIf=\"encontroCitas\">\r\n      <div class=\"ion-padding\">\r\n        <ion-grid class=\"ion-no-padding\" *ngFor=\"let cita of citasFiltradasTop\">\r\n          <ion-row class=\"ion-padding-bottom ion-padding-top linea-item\" (click)=\"citaSelected(cita)\">\r\n            <ion-col size=\"9\" class=\"texto-item ion-text-capitalize\">\r\n              {{cita.Servicio.Nombre}}\r\n            </ion-col>\r\n            <ion-col size=\"3\" class=\"titulo-hora ion-text-end\">\r\n              {{transformDateIso(cita.FechaHoraInicio)}}\r\n            </ion-col>\r\n            <ion-col size=\"12\" class=\"titulo-fecha\" class=\"ion-text-capitalize\">\r\n              {{transformDate(cita.FechaHoraInicio, 'dddd DD MMMM YYYY')}}\r\n            </ion-col>\r\n            <ion-col class=\"texto-item ion-text-capitalize\">\r\n              {{cita.NombresMedico.toLowerCase()}} {{cita.ApellidosMedico.toLowerCase()}}\r\n            </ion-col>\r\n          </ion-row>\r\n        </ion-grid>\r\n        <!-- pruebas con infinite scroll -->\r\n        <ion-infinite-scroll threshold=\"100px\" (ionInfinite)=\"loadData($event)\">\r\n          <ion-infinite-scroll-content loadingSpinner=\"bubbles\" loadingText=\"Cargando más cupos...\">\r\n          </ion-infinite-scroll-content>\r\n        </ion-infinite-scroll>\r\n      </div>\r\n\r\n    </div>\r\n    <!-- NO ENCONTRADO -->\r\n    <div *ngIf=\"!encontroCitas && mostrarProgress == false\" class=\"ion-padding-start ion-padding-end centrado\">\r\n      <ion-label class=\"ion-text-center no-encontrado\">No existen cupos con los criterios ingresados</ion-label>\r\n    </div>\r\n\r\n\r\n  </ion-content>");

/***/ }),

/***/ "./src/app/busqueda-avanzada/busqueda-avanzada.module.ts":
/*!***************************************************************!*\
  !*** ./src/app/busqueda-avanzada/busqueda-avanzada.module.ts ***!
  \***************************************************************/
/*! exports provided: BusquedaAvanzadaPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BusquedaAvanzadaPageModule", function() { return BusquedaAvanzadaPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _busqueda_avanzada_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./busqueda-avanzada.page */ "./src/app/busqueda-avanzada/busqueda-avanzada.page.ts");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/form-field */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/form-field.js");
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/select */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/select.js");
/* harmony import */ var _components_components_module__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../components/components.module */ "./src/app/components/components.module.ts");










let BusquedaAvanzadaPageModule = class BusquedaAvanzadaPageModule {
};
BusquedaAvanzadaPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
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
                    component: _busqueda_avanzada_page__WEBPACK_IMPORTED_MODULE_6__["BusquedaAvanzadaPage"]
                }
            ])
        ],
        declarations: [_busqueda_avanzada_page__WEBPACK_IMPORTED_MODULE_6__["BusquedaAvanzadaPage"]]
    })
], BusquedaAvanzadaPageModule);



/***/ }),

/***/ "./src/app/busqueda-avanzada/busqueda-avanzada.page.scss":
/*!***************************************************************!*\
  !*** ./src/app/busqueda-avanzada/busqueda-avanzada.page.scss ***!
  \***************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".combo {\n  width: 100%;\n  max-width: 100%;\n}\n\n.centrado {\n  text-align: center;\n  width: 100%;\n  height: 10%;\n  position: absolute;\n  top: 65%;\n  padding-left: 60px;\n  padding-right: 60px;\n}\n\n.titulo-item {\n  font-size: 14px;\n  color: #000000DE;\n}\n\n.titulo-fecha {\n  font-size: 16px;\n  color: #000000DE;\n}\n\n.titulo-hora {\n  font-size: 12px;\n  color: #000000DE;\n}\n\n.no-encontrado {\n  font-size: 16px;\n  color: #0000008A;\n}\n\n.pt-8 {\n  padding-top: 8px;\n}\n\n.pb-8 {\n  padding-bottom: 8px;\n}\n\n.pl-24 {\n  padding-left: 24px;\n}\n\n.pr-24 {\n  padding-right: 24px;\n}\n\n.linea-item {\n  border-bottom-style: solid;\n  border-bottom-width: 1px;\n  border-bottom-color: #0000001F;\n}\n\n.borde {\n  border-radius: 5px;\n  border: 1px solid #0000001F;\n  padding: 5px;\n  padding-top: 0;\n}\n\n.label-tda {\n  position: relative;\n  top: -10px;\n  margin-left: 16px;\n  padding-left: 2px;\n  padding-right: 5px;\n  background: white;\n}\n\n.mt-32 {\n  margin-top: 32px;\n}\n\n.titulo-item-2 {\n  font-size: 16px;\n  color: #000000DE;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYnVzcXVlZGEtYXZhbnphZGEvQzpcXERpc2NvIEZcXGFwcF9taWZhbWlsaWFfZ2l0XFxtaUZhbWlsaWFfcHJlL3NyY1xcYXBwXFxidXNxdWVkYS1hdmFuemFkYVxcYnVzcXVlZGEtYXZhbnphZGEucGFnZS5zY3NzIiwic3JjL2FwcC9idXNxdWVkYS1hdmFuemFkYS9idXNxdWVkYS1hdmFuemFkYS5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxXQUFBO0VBQ0EsZUFBQTtBQ0NKOztBRENBO0VBQ0ksa0JBQUE7RUFDQSxXQUFBO0VBQ0EsV0FBQTtFQUNBLGtCQUFBO0VBQ0EsUUFBQTtFQUNBLGtCQUFBO0VBQ0EsbUJBQUE7QUNFSjs7QURBQTtFQUNJLGVBQUE7RUFDQSxnQkFBQTtBQ0dKOztBRERBO0VBQ0ksZUFBQTtFQUNBLGdCQUFBO0FDSUo7O0FERkE7RUFDSSxlQUFBO0VBQ0EsZ0JBQUE7QUNLSjs7QURIQTtFQUNJLGVBQUE7RUFDQSxnQkFBQTtBQ01KOztBREpBO0VBQ0ksZ0JBQUE7QUNPSjs7QURMQTtFQUNJLG1CQUFBO0FDUUo7O0FETkE7RUFDSSxrQkFBQTtBQ1NKOztBRFBBO0VBQ0ksbUJBQUE7QUNVSjs7QURSQTtFQUNJLDBCQUFBO0VBQ0Esd0JBQUE7RUFDQSw4QkFBQTtBQ1dKOztBRFRBO0VBQ0ksa0JBQUE7RUFDQSwyQkFBQTtFQUNBLFlBQUE7RUFDQSxjQUFBO0FDWUo7O0FEVkE7RUFDSSxrQkFBQTtFQUNBLFVBQUE7RUFDQSxpQkFBQTtFQUNBLGlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxpQkFBQTtBQ2FKOztBRFhBO0VBQ0ksZ0JBQUE7QUNjSjs7QURaQTtFQUNJLGVBQUE7RUFDQSxnQkFBQTtBQ2VKIiwiZmlsZSI6InNyYy9hcHAvYnVzcXVlZGEtYXZhbnphZGEvYnVzcXVlZGEtYXZhbnphZGEucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmNvbWJve1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBtYXgtd2lkdGg6IDEwMCU7XHJcbn1cclxuLmNlbnRyYWRve1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgd2lkdGg6IDEwMCU7ICAgICAgIFxyXG4gICAgaGVpZ2h0OiAxMCU7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICB0b3A6NjUlO1xyXG4gICAgcGFkZGluZy1sZWZ0OiA2MHB4O1xyXG4gICAgcGFkZGluZy1yaWdodDogNjBweDsgICAgICAgICAgXHJcbn1cclxuLnRpdHVsby1pdGVte1xyXG4gICAgZm9udC1zaXplOiAxNHB4O1xyXG4gICAgY29sb3I6ICMwMDAwMDBERTtcclxufVxyXG4udGl0dWxvLWZlY2hhe1xyXG4gICAgZm9udC1zaXplOiAxNnB4O1xyXG4gICAgY29sb3I6ICMwMDAwMDBERTtcclxufVxyXG4udGl0dWxvLWhvcmF7XHJcbiAgICBmb250LXNpemU6IDEycHg7XHJcbiAgICBjb2xvcjogIzAwMDAwMERFO1xyXG59XHJcbi5uby1lbmNvbnRyYWRve1xyXG4gICAgZm9udC1zaXplOiAxNnB4O1xyXG4gICAgY29sb3I6ICMwMDAwMDA4QTtcclxufVxyXG4ucHQtOHtcclxuICAgIHBhZGRpbmctdG9wOiA4cHg7XHJcbn1cclxuLnBiLTh7XHJcbiAgICBwYWRkaW5nLWJvdHRvbTogOHB4O1xyXG59XHJcbi5wbC0yNHtcclxuICAgIHBhZGRpbmctbGVmdDogMjRweDtcclxufVxyXG4ucHItMjR7XHJcbiAgICBwYWRkaW5nLXJpZ2h0OiAyNHB4O1xyXG59XHJcbi5saW5lYS1pdGVte1xyXG4gICAgYm9yZGVyLWJvdHRvbS1zdHlsZTogc29saWQ7XHJcbiAgICBib3JkZXItYm90dG9tLXdpZHRoOiAxcHg7XHJcbiAgICBib3JkZXItYm90dG9tLWNvbG9yOiAjMDAwMDAwMUY7XHJcbn1cclxuLmJvcmRle1xyXG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xyXG4gICAgYm9yZGVyOiAxcHggc29saWQgIzAwMDAwMDFGO1xyXG4gICAgcGFkZGluZzogNXB4O1xyXG4gICAgcGFkZGluZy10b3A6IDA7XHJcbn1cclxuLmxhYmVsLXRkYXtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIHRvcDotMTBweDtcclxuICAgIG1hcmdpbi1sZWZ0OiAxNnB4O1xyXG4gICAgcGFkZGluZy1sZWZ0OiAycHg7XHJcbiAgICBwYWRkaW5nLXJpZ2h0OiA1cHg7XHJcbiAgICBiYWNrZ3JvdW5kOiB3aGl0ZTtcclxufVxyXG4ubXQtMzJ7XHJcbiAgICBtYXJnaW4tdG9wOiAzMnB4O1xyXG59XHJcbi50aXR1bG8taXRlbS0ye1xyXG4gICAgZm9udC1zaXplOiAxNnB4O1xyXG4gICAgY29sb3I6ICMwMDAwMDBERTtcclxufSIsIi5jb21ibyB7XG4gIHdpZHRoOiAxMDAlO1xuICBtYXgtd2lkdGg6IDEwMCU7XG59XG5cbi5jZW50cmFkbyB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMTAlO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogNjUlO1xuICBwYWRkaW5nLWxlZnQ6IDYwcHg7XG4gIHBhZGRpbmctcmlnaHQ6IDYwcHg7XG59XG5cbi50aXR1bG8taXRlbSB7XG4gIGZvbnQtc2l6ZTogMTRweDtcbiAgY29sb3I6ICMwMDAwMDBERTtcbn1cblxuLnRpdHVsby1mZWNoYSB7XG4gIGZvbnQtc2l6ZTogMTZweDtcbiAgY29sb3I6ICMwMDAwMDBERTtcbn1cblxuLnRpdHVsby1ob3JhIHtcbiAgZm9udC1zaXplOiAxMnB4O1xuICBjb2xvcjogIzAwMDAwMERFO1xufVxuXG4ubm8tZW5jb250cmFkbyB7XG4gIGZvbnQtc2l6ZTogMTZweDtcbiAgY29sb3I6ICMwMDAwMDA4QTtcbn1cblxuLnB0LTgge1xuICBwYWRkaW5nLXRvcDogOHB4O1xufVxuXG4ucGItOCB7XG4gIHBhZGRpbmctYm90dG9tOiA4cHg7XG59XG5cbi5wbC0yNCB7XG4gIHBhZGRpbmctbGVmdDogMjRweDtcbn1cblxuLnByLTI0IHtcbiAgcGFkZGluZy1yaWdodDogMjRweDtcbn1cblxuLmxpbmVhLWl0ZW0ge1xuICBib3JkZXItYm90dG9tLXN0eWxlOiBzb2xpZDtcbiAgYm9yZGVyLWJvdHRvbS13aWR0aDogMXB4O1xuICBib3JkZXItYm90dG9tLWNvbG9yOiAjMDAwMDAwMUY7XG59XG5cbi5ib3JkZSB7XG4gIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgYm9yZGVyOiAxcHggc29saWQgIzAwMDAwMDFGO1xuICBwYWRkaW5nOiA1cHg7XG4gIHBhZGRpbmctdG9wOiAwO1xufVxuXG4ubGFiZWwtdGRhIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICB0b3A6IC0xMHB4O1xuICBtYXJnaW4tbGVmdDogMTZweDtcbiAgcGFkZGluZy1sZWZ0OiAycHg7XG4gIHBhZGRpbmctcmlnaHQ6IDVweDtcbiAgYmFja2dyb3VuZDogd2hpdGU7XG59XG5cbi5tdC0zMiB7XG4gIG1hcmdpbi10b3A6IDMycHg7XG59XG5cbi50aXR1bG8taXRlbS0yIHtcbiAgZm9udC1zaXplOiAxNnB4O1xuICBjb2xvcjogIzAwMDAwMERFO1xufSJdfQ== */");

/***/ }),

/***/ "./src/app/busqueda-avanzada/busqueda-avanzada.page.ts":
/*!*************************************************************!*\
  !*** ./src/app/busqueda-avanzada/busqueda-avanzada.page.ts ***!
  \*************************************************************/
/*! exports provided: BusquedaAvanzadaPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BusquedaAvanzadaPage", function() { return BusquedaAvanzadaPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _app_services_ServicioUtiles__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../app/services/ServicioUtiles */ "./src/app/services/ServicioUtiles.ts");
/* harmony import */ var _app_services_ServicioAcceso__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../app/services/ServicioAcceso */ "./src/app/services/ServicioAcceso.ts");
/* harmony import */ var _app_services_ServicioCitas__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../app/services/ServicioCitas */ "./src/app/services/ServicioCitas.ts");
/* harmony import */ var _app_services_ServicioPaginacion__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../app/services/ServicioPaginacion */ "./src/app/services/ServicioPaginacion.ts");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! moment */ "./node_modules/moment/moment.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _app_pipes_fecha_pipe__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../app/pipes/fecha.pipe */ "./src/app/pipes/fecha.pipe.ts");
/* harmony import */ var _modal_operacion_cita_modal_operacion_cita_page__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../modal-operacion-cita/modal-operacion-cita.page */ "./src/app/modal-operacion-cita/modal-operacion-cita.page.ts");










//modal

let BusquedaAvanzadaPage = class BusquedaAvanzadaPage {
    constructor(navCtrl, toast, modalCtrl, platform, loading, menu, utiles, acceso, cita, paginacion, activatedRoute, router) {
        this.navCtrl = navCtrl;
        this.toast = toast;
        this.modalCtrl = modalCtrl;
        this.platform = platform;
        this.loading = loading;
        this.menu = menu;
        this.utiles = utiles;
        this.acceso = acceso;
        this.cita = cita;
        this.paginacion = paginacion;
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
        //para volver a la pagina anterior
        this.idUsuario = 0;
        //esto es para infiniti scroll
        this.topLimit = 5;
        this.citasFiltradasTop = [];
    }
    volver() {
        if (this.idUsuario == 0) {
            this.navCtrl.navigateRoot('pre-tiposatencion');
        }
        else {
            const navigationExtras = {
                queryParams: {
                    Id: this.idUsuario
                }
            };
            this.navCtrl.navigateRoot(['pre-tiposatencion'], navigationExtras);
        }
    }
    ngOnInit() {
        moment__WEBPACK_IMPORTED_MODULE_8__["locale"]('es');
        if (sessionStorage.UsuarioAps) {
            this.usuarioAps = JSON.parse(sessionStorage.UsuarioAps);
            if (this.usuarioAps) {
                //this.usuarioAps.UrlImagen = this.utiles.entregaMiImagen();
                this.usuarioAps.UrlImagen = this.utiles.entregaImagen(this.usuarioAps);
                this.miColor = this.utiles.entregaColor(this.usuarioAps);
                this.runPaciente = this.utiles.insertarGuion(this.usuarioAps.Rut);
                this.codigoDeis = this.usuarioAps.ConfiguracionNodo.CodigoDeis2014;
                this.nodId = this.usuarioAps.ConfiguracionNodo.NodId;
            }
        }
        this.activatedRoute.queryParams.subscribe((params) => Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            if (params && params.Id) {
                this.idUsuario = params.Id;
            }
        }));
        //creamos tipo atencion inicial
        this.crearTiposAtencion();
        this.setFechasInicioFin();
        this.citas = JSON.parse(sessionStorage.getItem('CITAS_DISPONIBLES'));
    }
    setFechasInicioFin() {
        this.fechaInicio = sessionStorage.getItem('FECHA_INICIO_CONSULTA');
        this.fechaTermino = sessionStorage.getItem('FECHA_TERMINO_CONSULTA');
        //dejamos el horario busqueda por defecto en mañana
        this.horarioBusqueda = 0;
        this.diasBusqueda = ['1', '2', '3', '4', '5', '6', '7'];
        this.fechaInicioBusqueda = this.fechaInicio;
    }
    indexarCitas() {
        //el tipo de atencion seleccionado
        //HAY QUE AGREGAR LOS DEMAS FILTROS
        this.citasFiltradas = [];
        var indice = 1;
        if (this.citas && this.citas.length > 0) {
            this.citas.forEach(cita => {
                if (cita.TipoAtencion == this.comboSeleccionado) {
                    //aca debemos aplicar los demas filtros, el primero es fecha inicio
                    var fechaCita = moment__WEBPACK_IMPORTED_MODULE_8__(cita.FechaHoraInicio);
                    var isAfter = moment__WEBPACK_IMPORTED_MODULE_8__(fechaCita.format()).isAfter(this.fechaInicioBusqueda);
                    //aca ya tenemos el segundo filtro importante
                    if (isAfter) {
                        //ahora debemos trabajar con los filtros de horario
                        //partimos con dia de la semana
                        if (this.diasBusqueda && this.diasBusqueda.length > 0) {
                            var diaSemana = fechaCita.day();
                            //console.log('dia semana ' + diaSemana + ' ' + fechaCita.format('DD-MM-YYYY'));
                            var existe = this.diasBusqueda.includes(diaSemana.toString());
                            //si el día de la semana existe se agrega
                            if (existe) {
                                //ahora aplicamos filtros de mañana y tarde
                                if (this.horarioBusqueda == 0) {
                                    cita.indice = indice;
                                    this.citasFiltradas.push(cita);
                                    indice++;
                                }
                                else {
                                    //busca mañana o tarde
                                    var hora = fechaCita.hour();
                                    var minute = fechaCita.minute();
                                    var horaEntera = this.utiles.convertirHoraInt(hora, minute);
                                    //deberia entregar 600 para las 6 am y 1800 para las 6 pm
                                    //por lo tanto todo aquello menor o igual 1200 es mañana
                                    if (this.horarioBusqueda == 1 && horaEntera <= 1200) {
                                        //mañana
                                        //console.log('mañana');
                                        cita.indice = indice;
                                        this.citasFiltradas.push(cita);
                                        indice++;
                                    }
                                    if (this.horarioBusqueda == 2 && horaEntera > 1200) {
                                        //tarde
                                        //console.log('tarde');
                                        cita.indice = indice;
                                        this.citasFiltradas.push(cita);
                                        indice++;
                                    }
                                }
                            }
                        }
                    }
                }
            });
        }
        if (indice > 2) {
            this.encontroCitas = true;
        }
        //aca le ponemos limite a ala lista de citas filtradas
        if (this.citasFiltradas && this.citasFiltradas.length > 0) {
            this.citasFiltradasTop = this.citasFiltradas.slice(0, this.topLimit);
        }
    }
    loadData(event) {
        setTimeout(() => {
            //console.log('Done');
            this.topLimit += 5;
            this.citasFiltradasTop = this.citasFiltradas.slice(0, this.topLimit);
            event.target.complete();
            //aplicamos disabled si la cantidad de registros es la misma que el total
            if (this.citasFiltradasTop.length == this.citasFiltradas.length) {
                event.target.disabled = true;
            }
        }, 500);
    }
    //creamos los tipos de atención disponibles
    crearTiposAtencion() {
        this.tiposAtencion = [];
        if (sessionStorage.getItem('TIPOS_ATENCION')) {
            this.tiposAtencion = JSON.parse(sessionStorage.getItem('TIPOS_ATENCION'));
            if (this.tiposAtencion) {
                this.tiposAtencion.forEach(tipo => {
                    if (tipo.Selected) {
                        this.comboSeleccionado = tipo.Texto;
                        this.disabledCombo = true;
                    }
                });
            }
        }
    }
    buscarCitas(event) {
        //console.log(this.comboSeleccionado);
        //console.log(this.horarioBusqueda);
        //console.log(this.diasBusqueda);
        //console.log(this.fechaInicioBusqueda);
        this.mostrarProgress = true;
        this.encontroCitas = false;
        this.disabledCombo = false;
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
    changeFechaInicio(event) {
        console.log(event);
        if (event.detail.value) {
            this.fechaInicioBusqueda = event.detail.value;
            //console.log(this.fechaInicioBusqueda);
        }
    }
    changeHorario(event) {
        if (event.detail.value) {
            this.horarioBusqueda = event.detail.value;
            //console.log(this.horarioBusqueda);
        }
    }
    changeDia(event) {
        if (event.detail.value) {
            this.diasBusqueda = event.detail.value;
            //console.log(this.diasBusqueda);
        }
    }
};
BusquedaAvanzadaPage.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ToastController"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ModalController"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["Platform"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["LoadingController"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["MenuController"] },
    { type: _app_services_ServicioUtiles__WEBPACK_IMPORTED_MODULE_4__["ServicioUtiles"] },
    { type: _app_services_ServicioAcceso__WEBPACK_IMPORTED_MODULE_5__["ServicioAcceso"] },
    { type: _app_services_ServicioCitas__WEBPACK_IMPORTED_MODULE_6__["ServicioCitas"] },
    { type: _app_services_ServicioPaginacion__WEBPACK_IMPORTED_MODULE_7__["ServicioPaginacion"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] }
];
BusquedaAvanzadaPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-busqueda-avanzada',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./busqueda-avanzada.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/busqueda-avanzada/busqueda-avanzada.page.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./busqueda-avanzada.page.scss */ "./src/app/busqueda-avanzada/busqueda-avanzada.page.scss")).default]
    })
], BusquedaAvanzadaPage);



/***/ })

}]);
//# sourceMappingURL=busqueda-avanzada-busqueda-avanzada-module-es2015.js.map