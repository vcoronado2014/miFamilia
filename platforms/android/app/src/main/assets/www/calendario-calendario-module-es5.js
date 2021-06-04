function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["calendario-calendario-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/calendario/calendario.page.html":
  /*!***************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/calendario/calendario.page.html ***!
    \***************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppCalendarioCalendarioPageHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ion-header>\r\n  <!-- esto lo comentamos ya que se decidió no usar color de header personalizado -->\r\n  <!-- <ion-toolbar [style.--background]=\"miColor\" mode=\"md\"> -->\r\n  <ion-toolbar color=\"primary\" mode=\"md\">\r\n    <ion-buttons slot=\"start\">\r\n      <ion-back-button defaultHref=\"/home\" class=\"fcw\"></ion-back-button>\r\n    </ion-buttons>\r\n    <ion-title class=\"fcw\">Calendario</ion-title>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content class=\"back-app\" style=\"--padding-bottom: 50px !important;\" #content>\r\n<app-progress [mostrar]=\"estaCargando\" [titulo]=\"tituloLoading\"></app-progress>\r\n <div *ngIf=\"!tiene\">\r\n  <div [hidden]=\"estaCargando\" *ngFor=\"let item of citasVerticalTodasTop\">\r\n    <ion-grid *ngIf=\"item.Mostrar\">\r\n      <app-card-calendario [fechaActual]=\"fechaActual\" [item]=\"item\" [anioActual]=\"anioActual\"></app-card-calendario>\r\n      <ion-row class=\"ion-no-padding ion-no-margin row-card\"\r\n        *ngIf=\"item.Eventos[0].NombrePrincipal != 'Nada planificado para hoy'\">\r\n        <mat-card *ngFor=\"let evento of item.Eventos\" color=\"light\" style=\"margin-bottom: 8px;\" id=\"myListCard\">\r\n          <mat-card-header (click)=\"goToDetalleCita(evento)\">\r\n    \r\n            <mat-card-subtitle class=\"hora\">{{evento.HoraInicioFin}}</mat-card-subtitle>\r\n            <mat-card-title>{{evento.DetalleEventoMes.Titulo}}</mat-card-title>\r\n            <mat-card-subtitle class=\"ion-text-capitalize\">{{evento.DetalleEventoMes.NombrePaciente.toLowerCase()}}\r\n            </mat-card-subtitle>\r\n    \r\n            <div class=\"img-card\">\r\n              <img class=\"example-header-image\" src=\"./assets/imgs_svg/{{evento.Imagen}}\">\r\n            </div>\r\n          </mat-card-header>\r\n          <mat-card-actions *ngIf=\"revisaEstado(evento)\">\r\n            <button color=\"primary\" mat-button *ngIf=\"revisarCita(evento, 'Anular')[1]\"\r\n              (click)=\"presentAlertConfirm(botonCancelar, evento)\">ANULAR</button>\r\n            <button color=\"primary\" mat-button *ngIf=\"revisarCita(evento, 'Confirmar')[0]\"\r\n              (click)=\"presentAlertConfirm(botonConfirmar, evento)\">CONFIRMAR</button>\r\n          </mat-card-actions>\r\n        </mat-card>\r\n      </ion-row>\r\n      <hr\r\n        *ngIf=\"transformDate(item.FechaCompleta, 'YYYY-MM-DD') == fechaActual && item.Eventos[0].NombrePrincipal != 'Nada planificado para hoy'\">\r\n    </ion-grid>\r\n    </div>\r\n  <div style=\"position: absolute; display: table; height: 90%;font-size: 16px; color:rgba(0, 0, 0, 0.54); text-align: center; width: -webkit-fill-available;\" class=\"ion-padding\">\r\n<!--     <p style=\"display: table-cell; vertical-align: middle\">No hay eventos para mostrar  <br>\r\n    <ion-icon name=\"information-circle\" style=\"font-size: 50px;\"></ion-icon></p> -->\r\n    <p style=\"display: table-cell; vertical-align: middle\">No tiene actividades  <br>\r\n      programadas para el futuro</p>\r\n  </div>\r\n </div>\r\n <div *ngIf=\"tiene\">\r\n  <div [hidden]=\"estaCargando\" *ngFor=\"let item of citasVerticalTodasTop\">\r\n    <ion-grid *ngIf=\"item.Mostrar\">\r\n      <app-card-calendario [fechaActual]=\"fechaActual\" [item]=\"item\" [anioActual]=\"anioActual\"></app-card-calendario>\r\n      <ion-row class=\"ion-no-padding ion-no-margin row-card\" *ngIf=\"item.Eventos[0].NombrePrincipal != 'Nada planificado para hoy'\">\r\n        <mat-card *ngFor=\"let evento of item.Eventos\" color=\"light\" style=\"margin-bottom: 8px;\" id=\"myListCard\">\r\n          <mat-card-header (click)=\"goToDetalleCita(evento)\">\r\n            \r\n              <mat-card-subtitle *ngIf=\"evento.DetalleEventoMes.Titulo != 'Vacuna administrada'\" class=\"hora\">{{evento.HoraInicioFin}}</mat-card-subtitle>\r\n              <mat-card-title>{{evento.DetalleEventoMes.Titulo}}</mat-card-title>\r\n              <mat-card-subtitle class=\"ion-text-capitalize\">{{evento.DetalleEventoMes.NombrePaciente.toLowerCase()}}</mat-card-subtitle>\r\n            \r\n            <div class=\"img-card\">\r\n              <img class=\"example-header-image\" src=\"./assets/imgs_svg/{{evento.Imagen}}\">\r\n            </div>\r\n          </mat-card-header>\r\n          <mat-card-actions *ngIf=\"revisaEstado(evento)\">\r\n            <button color=\"primary\" mat-button *ngIf=\"revisarCita(evento, 'Anular')[1]\" (click)=\"presentAlertConfirm(botonCancelar, evento)\">ANULAR</button>\r\n            <button color=\"primary\" mat-button *ngIf=\"revisarCita(evento, 'Confirmar')[0]\" (click)=\"presentAlertConfirm(botonConfirmar, evento)\">CONFIRMAR</button>\r\n          </mat-card-actions>\r\n        </mat-card>\r\n      </ion-row>\r\n      <hr *ngIf=\"transformDate(item.FechaCompleta, 'YYYY-MM-DD') == fechaActual && item.Eventos[0].NombrePrincipal != 'Nada planificado para hoy'\">\r\n    </ion-grid>\r\n  </div>\r\n  <!-- mostrar cuando no tenga eventos futuros y si tenga eventos pasados -->\r\n  <div *ngIf=\"!tieneEventosFuturos\" [hidden]=\"estaCargando\">\r\n    <div style=\"display: table; height: 10%;font-size: 16px; color:rgba(0, 0, 0, 0.54); text-align: center; width: -webkit-fill-available;\" class=\"ion-padding\">\r\n          <p style=\"display: table-cell; vertical-align: middle\">No tiene actividades  <br>\r\n            programadas para el futuro</p>\r\n        </div>\r\n  </div>\r\n  <!-- pruebas con infinite scroll -->\r\n  <ion-infinite-scroll threshold=\"100px\" (ionInfinite)=\"loadData($event)\">\r\n    <ion-infinite-scroll-content loadingSpinner=\"bubbles\" loadingText=\"Cargando más eventos...\">\r\n    </ion-infinite-scroll-content>\r\n  </ion-infinite-scroll>\r\n </div>\r\n</ion-content>\r\n<!-- este es el fab para abrir reservar horas -->\r\n<ion-fab vertical=\"bottom\" horizontal=\"end\" slot=\"fixed\" [hidden]=\"estaCargando\" style=\"min-height: 48px;\">\r\n  <ion-button color=\"secondary\" (click)=\"openReservarHoraPage()\" shape=\"round\" style=\"min-height: 48px;\">\r\n    <ion-icon slot=\"start\" name=\"add-outline\" style=\"font-size: 24px;margin-right: 12px;\"></ion-icon>\r\n    <span class=\"botonReservar\" style=\"font-size: 1em;\">RESERVAR HORA</span>\r\n  </ion-button>\r\n</ion-fab>\r\n";
    /***/
  },

  /***/
  "./src/app/calendario/calendario.module.ts":
  /*!*************************************************!*\
    !*** ./src/app/calendario/calendario.module.ts ***!
    \*************************************************/

  /*! exports provided: CalendarioPageModule */

  /***/
  function srcAppCalendarioCalendarioModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CalendarioPageModule", function () {
      return CalendarioPageModule;
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


    var _calendario_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./calendario.page */
    "./src/app/calendario/calendario.page.ts");
    /* harmony import */


    var _directives_text_avatar_index__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ../../directives/text-avatar/index */
    "./src/directives/text-avatar/index.ts");
    /* harmony import */


    var _angular_material_card__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! @angular/material/card */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/card.js");
    /* harmony import */


    var _angular_material_button__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! @angular/material/button */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/button.js");
    /* harmony import */


    var _components_components_module__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! ../components/components.module */
    "./src/app/components/components.module.ts");

    var CalendarioPageModule = function CalendarioPageModule() {
      _classCallCheck(this, CalendarioPageModule);
    };

    CalendarioPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _directives_text_avatar_index__WEBPACK_IMPORTED_MODULE_7__["TextAvatarModule"], _angular_material_card__WEBPACK_IMPORTED_MODULE_8__["MatCardModule"], _angular_material_button__WEBPACK_IMPORTED_MODULE_9__["MatButtonModule"], _components_components_module__WEBPACK_IMPORTED_MODULE_10__["ComponentsModule"], _angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterModule"].forChild([{
        path: '',
        component: _calendario_page__WEBPACK_IMPORTED_MODULE_6__["CalendarioPage"]
      }])],
      declarations: [_calendario_page__WEBPACK_IMPORTED_MODULE_6__["CalendarioPage"]]
    })], CalendarioPageModule);
    /***/
  },

  /***/
  "./src/app/calendario/calendario.page.scss":
  /*!*************************************************!*\
    !*** ./src/app/calendario/calendario.page.scss ***!
    \*************************************************/

  /*! exports provided: default */

  /***/
  function srcAppCalendarioCalendarioPageScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "/* Set the width to the full container and center the content */\nion-select {\n  width: 100%;\n  justify-content: center;\n}\n/* Set the flex in order to size the text width to its content */\nion-select::part(placeholder),\nion-select::part(text) {\n  flex: 0 0 auto;\n}\n/* Set the placeholder color and opacity */\nion-select::part(placeholder) {\n  color: #20a08a;\n  opacity: 1;\n}\n/*\n * Set the font of the first letter of the placeholder\n * Shadow parts work with pseudo-elements, too!\n * https://developer.mozilla.org/en-US/docs/Web/CSS/Pseudo-elements\n */\nion-select::part(placeholder)::first-letter {\n  font-size: 24px;\n  font-weight: 500;\n}\n/* Set the text color */\nion-select::part(text) {\n  color: #545ca7;\n}\n/* Set the icon color and opacity */\nion-select::part(icon) {\n  color: #971e49;\n  opacity: 1;\n}\n.content-card-fav {\n  height: 58px;\n  min-height: 56px;\n}\n.ion-fav-calendar {\n  height: 48px;\n  width: 48px;\n}\n.botonReservar {\n  /*color:#000000DE;\n  font-weight: 20px;\n  font: normal normal medium 14px Roboto; */\n  color: white;\n  font-family: \"Roboto\";\n  font-size: 0.875em;\n  font-weight: 500;\n  letter-spacing: 1.25px;\n  text-transform: uppercase;\n  opacity: 1;\n}\n/* estilos para material */\n.example-header-image {\n  background-size: cover;\n  width: 80px;\n  height: 80px;\n  -o-object-fit: cover;\n     object-fit: cover;\n}\nmat-card {\n  width: 100%;\n  max-width: 100%;\n  min-width: 100%;\n}\n::ng-dep .mat-card-header-text {\n  width: 100%;\n  margin: 0;\n}\n.hora {\n  font-size: 0.8em;\n}\n.row-card {\n  margin-left: 16px;\n  margin-right: 16px;\n}\n.img-card {\n  width: 80px;\n  float: right;\n  margin: 0;\n  padding: 0;\n  min-width: 80px;\n}\nhr {\n  margin-top: 0;\n  margin-bottom: 0;\n  border: 0;\n  height: 1px;\n  background-color: rgba(0, 0, 0, 0.12);\n}\n.button-native {\n  -webkit-padding-start: 16px;\n          padding-inline-start: 16px;\n  -webkit-padding-end: 16px;\n          padding-inline-end: 16px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY2FsZW5kYXJpby9GOlxcYXBwX21pZmFtaWxpYV9naXRcXG1pRmFtaWxpYV9wcmUvc3JjXFxhcHBcXGNhbGVuZGFyaW9cXGNhbGVuZGFyaW8ucGFnZS5zY3NzIiwic3JjL2FwcC9jYWxlbmRhcmlvL2NhbGVuZGFyaW8ucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLCtEQUFBO0FBQ0E7RUFDRSxXQUFBO0VBRUEsdUJBQUE7QUNBRjtBREdBLGdFQUFBO0FBQ0E7O0VBRUUsY0FBQTtBQ0FGO0FER0EsMENBQUE7QUFDQTtFQUNFLGNBQUE7RUFDQSxVQUFBO0FDQUY7QURHQTs7OztFQUFBO0FBS0E7RUFDRSxlQUFBO0VBQ0EsZ0JBQUE7QUNBRjtBREdBLHVCQUFBO0FBQ0E7RUFDRSxjQUFBO0FDQUY7QURHQSxtQ0FBQTtBQUNBO0VBQ0UsY0FBQTtFQUNBLFVBQUE7QUNBRjtBREVBO0VBQ0UsWUFBQTtFQUNBLGdCQUFBO0FDQ0Y7QURDQTtFQUNFLFlBQUE7RUFDQSxXQUFBO0FDRUY7QURBQTtFQUNFOzsyQ0FBQTtFQUdBLFlBQUE7RUFDQSxxQkFBQTtFQUNBLGtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxzQkFBQTtFQUNBLHlCQUFBO0VBQ0EsVUFBQTtBQ0dGO0FEREEsMEJBQUE7QUFDQTtFQUNFLHNCQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxvQkFBQTtLQUFBLGlCQUFBO0FDSUY7QURGQTtFQUNFLFdBQUE7RUFDQSxlQUFBO0VBQ0EsZUFBQTtBQ0tGO0FESEE7RUFDRSxXQUFBO0VBQ0EsU0FBQTtBQ01GO0FESkE7RUFDRSxnQkFBQTtBQ09GO0FETEE7RUFDRSxpQkFBQTtFQUNBLGtCQUFBO0FDUUY7QUROQTtFQUNFLFdBQUE7RUFDQSxZQUFBO0VBQ0EsU0FBQTtFQUNBLFVBQUE7RUFDQSxlQUFBO0FDU0Y7QURQQTtFQUNFLGFBQUE7RUFDQSxnQkFBQTtFQUNBLFNBQUE7RUFDQSxXQUFBO0VBQ0EscUNBQUE7QUNVRjtBRFBBO0VBQ0UsMkJBQUE7VUFBQSwwQkFBQTtFQUNBLHlCQUFBO1VBQUEsd0JBQUE7QUNVRiIsImZpbGUiOiJzcmMvYXBwL2NhbGVuZGFyaW8vY2FsZW5kYXJpby5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIvKiBTZXQgdGhlIHdpZHRoIHRvIHRoZSBmdWxsIGNvbnRhaW5lciBhbmQgY2VudGVyIHRoZSBjb250ZW50ICovXHJcbmlvbi1zZWxlY3Qge1xyXG4gIHdpZHRoOiAxMDAlO1xyXG5cclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxufVxyXG5cclxuLyogU2V0IHRoZSBmbGV4IGluIG9yZGVyIHRvIHNpemUgdGhlIHRleHQgd2lkdGggdG8gaXRzIGNvbnRlbnQgKi9cclxuaW9uLXNlbGVjdDo6cGFydChwbGFjZWhvbGRlciksXHJcbmlvbi1zZWxlY3Q6OnBhcnQodGV4dCkge1xyXG4gIGZsZXg6IDAgMCBhdXRvO1xyXG59XHJcblxyXG4vKiBTZXQgdGhlIHBsYWNlaG9sZGVyIGNvbG9yIGFuZCBvcGFjaXR5ICovXHJcbmlvbi1zZWxlY3Q6OnBhcnQocGxhY2Vob2xkZXIpIHtcclxuICBjb2xvcjogIzIwYTA4YTtcclxuICBvcGFjaXR5OiAxO1xyXG59XHJcblxyXG4vKlxyXG4gKiBTZXQgdGhlIGZvbnQgb2YgdGhlIGZpcnN0IGxldHRlciBvZiB0aGUgcGxhY2Vob2xkZXJcclxuICogU2hhZG93IHBhcnRzIHdvcmsgd2l0aCBwc2V1ZG8tZWxlbWVudHMsIHRvbyFcclxuICogaHR0cHM6Ly9kZXZlbG9wZXIubW96aWxsYS5vcmcvZW4tVVMvZG9jcy9XZWIvQ1NTL1BzZXVkby1lbGVtZW50c1xyXG4gKi9cclxuaW9uLXNlbGVjdDo6cGFydChwbGFjZWhvbGRlcik6OmZpcnN0LWxldHRlciB7XHJcbiAgZm9udC1zaXplOiAyNHB4O1xyXG4gIGZvbnQtd2VpZ2h0OiA1MDA7XHJcbn1cclxuXHJcbi8qIFNldCB0aGUgdGV4dCBjb2xvciAqL1xyXG5pb24tc2VsZWN0OjpwYXJ0KHRleHQpIHtcclxuICBjb2xvcjogIzU0NWNhNztcclxufVxyXG5cclxuLyogU2V0IHRoZSBpY29uIGNvbG9yIGFuZCBvcGFjaXR5ICovXHJcbmlvbi1zZWxlY3Q6OnBhcnQoaWNvbikge1xyXG4gIGNvbG9yOiAjOTcxZTQ5O1xyXG4gIG9wYWNpdHk6IDE7XHJcbn1cclxuLmNvbnRlbnQtY2FyZC1mYXZ7XHJcbiAgaGVpZ2h0OiA1OHB4O1xyXG4gIG1pbi1oZWlnaHQ6IDU2cHg7XHJcbn1cclxuLmlvbi1mYXYtY2FsZW5kYXJ7XHJcbiAgaGVpZ2h0OiA0OHB4O1xyXG4gIHdpZHRoOiA0OHB4O1xyXG59XHJcbi5ib3RvblJlc2VydmFye1xyXG4gIC8qY29sb3I6IzAwMDAwMERFO1xyXG4gIGZvbnQtd2VpZ2h0OiAyMHB4O1xyXG4gIGZvbnQ6IG5vcm1hbCBub3JtYWwgbWVkaXVtIDE0cHggUm9ib3RvOyAqL1xyXG4gIGNvbG9yOiB3aGl0ZTtcclxuICBmb250LWZhbWlseTogJ1JvYm90byc7XHJcbiAgZm9udC1zaXplOiAuODc1ZW07XHJcbiAgZm9udC13ZWlnaHQ6IDUwMDtcclxuICBsZXR0ZXItc3BhY2luZzogMS4yNXB4O1xyXG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XHJcbiAgb3BhY2l0eTogMTtcclxufVxyXG4vKiBlc3RpbG9zIHBhcmEgbWF0ZXJpYWwgKi9cclxuLmV4YW1wbGUtaGVhZGVyLWltYWdlIHtcclxuICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xyXG4gIHdpZHRoOiA4MHB4O1xyXG4gIGhlaWdodDogODBweDtcclxuICBvYmplY3QtZml0OiBjb3ZlcjtcclxufVxyXG5tYXQtY2FyZHtcclxuICB3aWR0aDogMTAwJTtcclxuICBtYXgtd2lkdGg6IDEwMCU7XHJcbiAgbWluLXdpZHRoOiAxMDAlO1xyXG59XHJcbjo6bmctZGVwIC5tYXQtY2FyZC1oZWFkZXItdGV4dHtcclxuICB3aWR0aDogMTAwJTtcclxuICBtYXJnaW46IDA7XHJcbn1cclxuLmhvcmF7XHJcbiAgZm9udC1zaXplOiAwLjhlbTtcclxufVxyXG4ucm93LWNhcmR7XHJcbiAgbWFyZ2luLWxlZnQ6IDE2cHg7XHJcbiAgbWFyZ2luLXJpZ2h0OiAxNnB4O1xyXG59XHJcbi5pbWctY2FyZHtcclxuICB3aWR0aDogODBweDtcclxuICBmbG9hdDogcmlnaHQ7XHJcbiAgbWFyZ2luOiAwO1xyXG4gIHBhZGRpbmc6IDA7XHJcbiAgbWluLXdpZHRoOiA4MHB4O1xyXG59XHJcbmhyIHtcclxuICBtYXJnaW4tdG9wOiAwO1xyXG4gIG1hcmdpbi1ib3R0b206IDA7XHJcbiAgYm9yZGVyOiAwO1xyXG4gIGhlaWdodDogMXB4O1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwwLDAsLjEyKTtcclxufVxyXG5cclxuLmJ1dHRvbi1uYXRpdmUge1xyXG4gIHBhZGRpbmctaW5saW5lLXN0YXJ0OiAxNnB4O1xyXG4gIHBhZGRpbmctaW5saW5lLWVuZDogMTZweDtcclxuXHJcbn0iLCIvKiBTZXQgdGhlIHdpZHRoIHRvIHRoZSBmdWxsIGNvbnRhaW5lciBhbmQgY2VudGVyIHRoZSBjb250ZW50ICovXG5pb24tc2VsZWN0IHtcbiAgd2lkdGg6IDEwMCU7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xufVxuXG4vKiBTZXQgdGhlIGZsZXggaW4gb3JkZXIgdG8gc2l6ZSB0aGUgdGV4dCB3aWR0aCB0byBpdHMgY29udGVudCAqL1xuaW9uLXNlbGVjdDo6cGFydChwbGFjZWhvbGRlciksXG5pb24tc2VsZWN0OjpwYXJ0KHRleHQpIHtcbiAgZmxleDogMCAwIGF1dG87XG59XG5cbi8qIFNldCB0aGUgcGxhY2Vob2xkZXIgY29sb3IgYW5kIG9wYWNpdHkgKi9cbmlvbi1zZWxlY3Q6OnBhcnQocGxhY2Vob2xkZXIpIHtcbiAgY29sb3I6ICMyMGEwOGE7XG4gIG9wYWNpdHk6IDE7XG59XG5cbi8qXG4gKiBTZXQgdGhlIGZvbnQgb2YgdGhlIGZpcnN0IGxldHRlciBvZiB0aGUgcGxhY2Vob2xkZXJcbiAqIFNoYWRvdyBwYXJ0cyB3b3JrIHdpdGggcHNldWRvLWVsZW1lbnRzLCB0b28hXG4gKiBodHRwczovL2RldmVsb3Blci5tb3ppbGxhLm9yZy9lbi1VUy9kb2NzL1dlYi9DU1MvUHNldWRvLWVsZW1lbnRzXG4gKi9cbmlvbi1zZWxlY3Q6OnBhcnQocGxhY2Vob2xkZXIpOjpmaXJzdC1sZXR0ZXIge1xuICBmb250LXNpemU6IDI0cHg7XG4gIGZvbnQtd2VpZ2h0OiA1MDA7XG59XG5cbi8qIFNldCB0aGUgdGV4dCBjb2xvciAqL1xuaW9uLXNlbGVjdDo6cGFydCh0ZXh0KSB7XG4gIGNvbG9yOiAjNTQ1Y2E3O1xufVxuXG4vKiBTZXQgdGhlIGljb24gY29sb3IgYW5kIG9wYWNpdHkgKi9cbmlvbi1zZWxlY3Q6OnBhcnQoaWNvbikge1xuICBjb2xvcjogIzk3MWU0OTtcbiAgb3BhY2l0eTogMTtcbn1cblxuLmNvbnRlbnQtY2FyZC1mYXYge1xuICBoZWlnaHQ6IDU4cHg7XG4gIG1pbi1oZWlnaHQ6IDU2cHg7XG59XG5cbi5pb24tZmF2LWNhbGVuZGFyIHtcbiAgaGVpZ2h0OiA0OHB4O1xuICB3aWR0aDogNDhweDtcbn1cblxuLmJvdG9uUmVzZXJ2YXIge1xuICAvKmNvbG9yOiMwMDAwMDBERTtcbiAgZm9udC13ZWlnaHQ6IDIwcHg7XG4gIGZvbnQ6IG5vcm1hbCBub3JtYWwgbWVkaXVtIDE0cHggUm9ib3RvOyAqL1xuICBjb2xvcjogd2hpdGU7XG4gIGZvbnQtZmFtaWx5OiBcIlJvYm90b1wiO1xuICBmb250LXNpemU6IDAuODc1ZW07XG4gIGZvbnQtd2VpZ2h0OiA1MDA7XG4gIGxldHRlci1zcGFjaW5nOiAxLjI1cHg7XG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gIG9wYWNpdHk6IDE7XG59XG5cbi8qIGVzdGlsb3MgcGFyYSBtYXRlcmlhbCAqL1xuLmV4YW1wbGUtaGVhZGVyLWltYWdlIHtcbiAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcbiAgd2lkdGg6IDgwcHg7XG4gIGhlaWdodDogODBweDtcbiAgb2JqZWN0LWZpdDogY292ZXI7XG59XG5cbm1hdC1jYXJkIHtcbiAgd2lkdGg6IDEwMCU7XG4gIG1heC13aWR0aDogMTAwJTtcbiAgbWluLXdpZHRoOiAxMDAlO1xufVxuXG46Om5nLWRlcCAubWF0LWNhcmQtaGVhZGVyLXRleHQge1xuICB3aWR0aDogMTAwJTtcbiAgbWFyZ2luOiAwO1xufVxuXG4uaG9yYSB7XG4gIGZvbnQtc2l6ZTogMC44ZW07XG59XG5cbi5yb3ctY2FyZCB7XG4gIG1hcmdpbi1sZWZ0OiAxNnB4O1xuICBtYXJnaW4tcmlnaHQ6IDE2cHg7XG59XG5cbi5pbWctY2FyZCB7XG4gIHdpZHRoOiA4MHB4O1xuICBmbG9hdDogcmlnaHQ7XG4gIG1hcmdpbjogMDtcbiAgcGFkZGluZzogMDtcbiAgbWluLXdpZHRoOiA4MHB4O1xufVxuXG5ociB7XG4gIG1hcmdpbi10b3A6IDA7XG4gIG1hcmdpbi1ib3R0b206IDA7XG4gIGJvcmRlcjogMDtcbiAgaGVpZ2h0OiAxcHg7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgMC4xMik7XG59XG5cbi5idXR0b24tbmF0aXZlIHtcbiAgcGFkZGluZy1pbmxpbmUtc3RhcnQ6IDE2cHg7XG4gIHBhZGRpbmctaW5saW5lLWVuZDogMTZweDtcbn0iXX0= */";
    /***/
  },

  /***/
  "./src/app/calendario/calendario.page.ts":
  /*!***********************************************!*\
    !*** ./src/app/calendario/calendario.page.ts ***!
    \***********************************************/

  /*! exports provided: CalendarioPage */

  /***/
  function srcAppCalendarioCalendarioPageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CalendarioPage", function () {
      return CalendarioPage;
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


    var _app_services_ServicioInfoUsuario__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ../../app/services/ServicioInfoUsuario */
    "./src/app/services/ServicioInfoUsuario.ts");
    /* harmony import */


    var _app_services_ServicioAcceso__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ../../app/services/ServicioAcceso */
    "./src/app/services/ServicioAcceso.ts");
    /* harmony import */


    var _app_services_ServicioCitas__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ../../app/services/ServicioCitas */
    "./src/app/services/ServicioCitas.ts");
    /* harmony import */


    var _app_services_ServicioParametrosApp__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ../../app/services/ServicioParametrosApp */
    "./src/app/services/ServicioParametrosApp.ts");
    /* harmony import */


    var src_environments_environment__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! src/environments/environment */
    "./src/environments/environment.ts");
    /* harmony import */


    var moment__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! moment */
    "./node_modules/moment/moment.js");
    /* harmony import */


    var moment__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_10__);
    /* harmony import */


    var _modal_detalle_cita_modal_detalle_cita_page__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! ../modal-detalle-cita/modal-detalle-cita.page */
    "./src/app/modal-detalle-cita/modal-detalle-cita.page.ts");
    /* harmony import */


    var _app_pipes_fecha_pipe__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
    /*! ../../app/pipes/fecha.pipe */
    "./src/app/pipes/fecha.pipe.ts");
    /* harmony import */


    var _angular_material_card__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
    /*! @angular/material/card */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/card.js"); //parametros
    //SERVICIOS
    //moment
    //modal


    var CalendarioPage = /*#__PURE__*/function () {
      function CalendarioPage(navCtrl, toast, modalCtrl, platform, menu, activatedRoute, router, utiles, loading, info, acceso, cita, alertController, parametrosApp) {
        _classCallCheck(this, CalendarioPage);

        this.navCtrl = navCtrl;
        this.toast = toast;
        this.modalCtrl = modalCtrl;
        this.platform = platform;
        this.menu = menu;
        this.activatedRoute = activatedRoute;
        this.router = router;
        this.utiles = utiles;
        this.loading = loading;
        this.info = info;
        this.acceso = acceso;
        this.cita = cita;
        this.alertController = alertController;
        this.parametrosApp = parametrosApp;
        this.miColor = '#FF4081';
        this.tiene = true;
        this.textColor = '#FFFFFF';
        this.calendarioData = [];
        this.calendarioTodo = [];
        this.citasIntegracion = [];
        this.citasVerticalTodas = []; //datos para consultar citas

        this.runPaciente = '';
        this.codigoDeis = '';
        this.serviceType = '349'; //para el manejo de los botones en las citas

        this.botonReservar = {
          Titulo: 'RESERVAR',
          Visible: false,
          Operacion: 'booked',
          Color: 'primary',
          Alert: '¿Reservar cita?'
        };
        this.botonConfirmar = {
          Titulo: 'CONFIRMAR',
          Visible: false,
          Operacion: 'confirmed',
          Color: 'primary',
          Alert: '¿Confirmar la reserva de cita?'
        };
        this.botonCancelar = {
          Titulo: 'ANULAR',
          Visible: false,
          Operacion: 'cancelled',
          Color: 'danger',
          Alert: '¿Anular la reserva de cita?'
        }; //para controlar el cargando

        this.estaCargando = false;
        this.tituloLoading = ''; //para infinity scroll

        this.topLimit = 50;
        this.citasVerticalTodasTop = []; //para poner la linea en la fecha actual

        this.fechaActual = '';
        this.anioActual = '';
        this.scrollTo = null; //tiene eventos hoy

        this.tieneEventosHoy = false;
        this.tieneEventosFuturos = false;

        this.hasMin = function (attrib) {
          return this.length && this.reduce(function (prev, curr) {
            return prev[attrib] < curr[attrib] ? prev : curr;
          }) || null;
        };
      }

      _createClass(CalendarioPage, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          moment__WEBPACK_IMPORTED_MODULE_10__().locale('es');
          this.fechaActual = this.transformDate(moment__WEBPACK_IMPORTED_MODULE_10__(), 'YYYY-MM-DD');
          this.anioActual = this.transformDate(moment__WEBPACK_IMPORTED_MODULE_10__(), 'YYYY'); //console.log(this.fechaActual);
          //this.miColor = this.utiles.entregaMiColor();

          if (sessionStorage.UsuarioAps) {
            this.usuarioAps = JSON.parse(sessionStorage.UsuarioAps);

            if (this.usuarioAps) {
              this.miColor = this.utiles.entregaColor(this.usuarioAps);
              this.usuarioAps.UrlImagen = src_environments_environment__WEBPACK_IMPORTED_MODULE_9__["environment"].URL_FOTOS + this.usuarioAps.UrlImagen;
              this.runPaciente = this.utiles.insertarGuion(this.usuarioAps.Rut);
              this.codigoDeis = this.usuarioAps.ConfiguracionNodo.CodigoDeis2014;
              this.nodId = this.usuarioAps.ConfiguracionNodo.NodId;
            }
          } //mes seleccionado


          this.mesActualSeleccionado = moment__WEBPACK_IMPORTED_MODULE_10__().month() + 1 + ',' + moment__WEBPACK_IMPORTED_MODULE_10__().year();
          var diasSemana = new Array("domingo", "lunes", "martes", "miércoles", "jueves", "viernes", "sábado");
          var meses = new Array("enero", "febrero", "marzo", "abril", "mayo", "junio", "julio", "agosto", "septiembre", "octubre", "noviembre", "diciembre");
          this.diaSem = diasSemana[new Date().getDay()];
          this.hoy = new Date().getDate();
          this.meses = meses[new Date().getMonth()];
          this.anio = new Date().getFullYear(); //estos parametros estan en el ready
          //lamada para citas vertical

          var annoActual = moment__WEBPACK_IMPORTED_MODULE_10__().year();
          var mesActual = moment__WEBPACK_IMPORTED_MODULE_10__().month() + 1; //var mesActual = this.mesActualSeleccionado;
          //console.log(mesActual);
          //***************************** */

          this.tratamientoMeses(); //prueba de implementacion api management
          //this.cargarTodosLosEventosApi();
          //implementacion nueva

          if (this.parametrosApp.USA_API_MANAGEMENT()) {
            this.cargarTodosLosEventosApi();
          } else {
            this.cargarTodosLosEventos();
          }
        }
      }, {
        key: "getTime",
        value: function getTime(date) {
          return date != null ? new Date(date).getTime() : 0;
        }
      }, {
        key: "cargarTodosLosEventosApi",
        value: function cargarTodosLosEventosApi() {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee4() {
            var _this = this;

            var fechaActual, mesActual, loader;
            return regeneratorRuntime.wrap(function _callee4$(_context4) {
              while (1) {
                switch (_context4.prev = _context4.next) {
                  case 0:
                    //usar citasVerticalTodas
                    this.citasVerticalTodas = [];
                    this.citasVerticalMostrar = [];
                    fechaActual = moment__WEBPACK_IMPORTED_MODULE_10__();
                    mesActual = {
                      mes: fechaActual.month() + 1,
                      anno: fechaActual.year()
                    };
                    _context4.next = 6;
                    return this.loading.create({
                      cssClass: 'loading-vacio',
                      showBackdrop: false,
                      spinner: null,
                      //message: 'Cargando...<br>tipos de atención',
                      duration: 2000
                    });

                  case 6:
                    loader = _context4.sent;
                    this.estaCargando = true;
                    this.tituloLoading = 'Obteniendo calendario';
                    _context4.next = 11;
                    return loader.present().then(function () {
                      return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(_this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee3() {
                        var _this2 = this;

                        return regeneratorRuntime.wrap(function _callee3$(_context3) {
                          while (1) {
                            switch (_context3.prev = _context3.next) {
                              case 0:
                                if (!this.utiles.isAppOnDevice()) {
                                  //llamada web
                                  this.cita.entregaPorMesNuevoApi(this.usuarioAps.Id, this.usuarioAps.IdRyf, this.usuarioAps.NodId, mesActual.mes, mesActual.anno).subscribe(function (response) {
                                    return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(_this2, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
                                      var _this3 = this;

                                      return regeneratorRuntime.wrap(function _callee$(_context) {
                                        while (1) {
                                          switch (_context.prev = _context.next) {
                                            case 0:
                                              this.citasVerticalTodas = response;
                                              this.procesarArregloCitasTodas();
                                              this.citasVerticalMostrar = this.citasVerticalTodas.filter(function (e) {
                                                return e.Mostrar == true;
                                              });
                                              this.citasVerticalMostrar.sort(function (a, b) {
                                                return _this3.getTime(a.FechaCompleta) - _this3.getTime(b.FechaCompleta);
                                              }); //guardamos la variable de ordenamiento

                                              sessionStorage.setItem('ORDEN_EVENTOS', 'descendente'); //creamos top limit al nuevo arreglo de citas

                                              this.citasVerticalTodasTop = this.citasVerticalMostrar.slice(0, this.topLimit); //console.log(this.citasVerticalTodasTop);

                                              console.log(this.tieneEventosFuturos);
                                              loader.dismiss();
                                              this.estaCargando = false;
                                              this.tituloLoading = '';
                                              this.scrollListVisible();

                                            case 11:
                                            case "end":
                                              return _context.stop();
                                          }
                                        }
                                      }, _callee, this);
                                    }));
                                  }, function (error) {
                                    //console.log(error.message);
                                    _this2.estaCargando = false;
                                    _this2.tituloLoading = '';
                                    loader.dismiss();
                                    _this2.tiene = false;

                                    _this2.utiles.presentToast('Se produjo un error al obtener la información, vuelva a intentarlo más tarde', 'bottom', 3000);

                                    _this2.agregarUnElemento(moment__WEBPACK_IMPORTED_MODULE_10__().toDate());

                                    console.log(_this2.tieneEventosFuturos);
                                  });
                                } else {
                                  //llamada nativa
                                  this.cita.entregaPorMesNuevoApiNative(this.usuarioAps.Id, this.usuarioAps.IdRyf, this.usuarioAps.NodId, mesActual.mes, mesActual.anno).then(function (response) {
                                    return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(_this2, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
                                      var _this4 = this;

                                      return regeneratorRuntime.wrap(function _callee2$(_context2) {
                                        while (1) {
                                          switch (_context2.prev = _context2.next) {
                                            case 0:
                                              this.citasVerticalTodas = JSON.parse(response.data); //aca procesamos

                                              this.procesarArregloCitasTodas();
                                              this.citasVerticalMostrar = this.citasVerticalTodas.filter(function (e) {
                                                return e.Mostrar == true;
                                              }); //ahora que tenemos las citas que queremos mostrar
                                              //ordenamos

                                              this.citasVerticalMostrar.sort(function (a, b) {
                                                return _this4.getTime(a.FechaCompleta) - _this4.getTime(b.FechaCompleta);
                                              }); //guardamos la variable de ordenamiento

                                              sessionStorage.setItem('ORDEN_EVENTOS', 'descendente'); //creamos top limit al nuevo arreglo de citas

                                              this.citasVerticalTodasTop = this.citasVerticalMostrar.slice(0, this.topLimit); //console.log(this.citasVerticalTodasTop);

                                              loader.dismiss();
                                              this.estaCargando = false;
                                              this.tituloLoading = '';

                                            case 9:
                                            case "end":
                                              return _context2.stop();
                                          }
                                        }
                                      }, _callee2, this);
                                    }));
                                  })["catch"](function (error) {
                                    //console.log(error.message);
                                    _this2.estaCargando = false;
                                    _this2.tituloLoading = '';
                                    loader.dismiss();
                                    _this2.tiene = false;

                                    _this2.utiles.presentToast('Se produjo un error al obtener la información, vuelva a intentarlo más tarde', 'bottom', 3000);

                                    _this2.agregarUnElemento(moment__WEBPACK_IMPORTED_MODULE_10__().toDate());
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

                  case 11:
                  case "end":
                    return _context4.stop();
                }
              }
            }, _callee4, this);
          }));
        }
      }, {
        key: "cargarTodosLosEventos",
        value: function cargarTodosLosEventos() {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee12() {
            var _this5 = this;

            var fechaActual, fechaAnterior, fechaPosterior, mesAnterior, mesActual, mesPosterior, loader;
            return regeneratorRuntime.wrap(function _callee12$(_context12) {
              while (1) {
                switch (_context12.prev = _context12.next) {
                  case 0:
                    //usar citasVerticalTodas
                    this.citasVerticalTodas = [];
                    this.citasVerticalMostrar = [];
                    fechaActual = moment__WEBPACK_IMPORTED_MODULE_10__();
                    fechaAnterior = moment__WEBPACK_IMPORTED_MODULE_10__().subtract(1, 'month');
                    fechaPosterior = moment__WEBPACK_IMPORTED_MODULE_10__().add(1, 'month');
                    mesAnterior = {
                      mes: fechaAnterior.month() + 1,
                      anno: fechaAnterior.year()
                    };
                    mesActual = {
                      mes: fechaActual.month() + 1,
                      anno: fechaActual.year()
                    };
                    mesPosterior = {
                      mes: fechaPosterior.month() + 1,
                      anno: fechaPosterior.year()
                    };
                    _context12.next = 10;
                    return this.loading.create({
                      cssClass: 'loading-vacio',
                      showBackdrop: false,
                      spinner: null,
                      //message: 'Cargando...<br>tipos de atención',
                      duration: 2000
                    });

                  case 10:
                    loader = _context12.sent;
                    this.estaCargando = true;
                    this.tituloLoading = 'Cargando calendario';
                    _context12.next = 15;
                    return loader.present().then(function () {
                      return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(_this5, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee11() {
                        var _this6 = this;

                        return regeneratorRuntime.wrap(function _callee11$(_context11) {
                          while (1) {
                            switch (_context11.prev = _context11.next) {
                              case 0:
                                if (!this.utiles.isAppOnDevice()) {
                                  //llamada web
                                  this.cita.entregaPorMesNuevo(this.usuarioAps.Id, this.usuarioAps.IdRyf, this.usuarioAps.NodId, mesAnterior.mes, mesAnterior.anno).subscribe(function (response) {
                                    return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(_this6, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee7() {
                                      var _this7 = this;

                                      return regeneratorRuntime.wrap(function _callee7$(_context7) {
                                        while (1) {
                                          switch (_context7.prev = _context7.next) {
                                            case 0:
                                              this.citasVerticalTodas = response; //segunda llamada

                                              this.cita.entregaPorMesNuevo(this.usuarioAps.Id, this.usuarioAps.IdRyf, this.usuarioAps.NodId, mesActual.mes, mesActual.anno).subscribe(function (responseDos) {
                                                return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(_this7, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee6() {
                                                  var _this8 = this;

                                                  return regeneratorRuntime.wrap(function _callee6$(_context6) {
                                                    while (1) {
                                                      switch (_context6.prev = _context6.next) {
                                                        case 0:
                                                          this.citasVerticalTodas = this.citasVerticalTodas.concat(responseDos); //tercera llamada

                                                          this.cita.entregaPorMesNuevo(this.usuarioAps.Id, this.usuarioAps.IdRyf, this.usuarioAps.NodId, mesPosterior.mes, mesPosterior.anno).subscribe(function (responseTres) {
                                                            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(_this8, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee5() {
                                                              var _this9 = this;

                                                              return regeneratorRuntime.wrap(function _callee5$(_context5) {
                                                                while (1) {
                                                                  switch (_context5.prev = _context5.next) {
                                                                    case 0:
                                                                      this.citasVerticalTodas = this.citasVerticalTodas.concat(responseTres); //aca procedemos a procesarlos

                                                                      this.procesarArregloCitasTodas();
                                                                      this.citasVerticalMostrar = this.citasVerticalTodas.filter(function (e) {
                                                                        return e.Mostrar == true;
                                                                      }); ////console.log(this.citasVerticalMostrar);
                                                                      //ahora que tenemos las citas que queremos mostrar
                                                                      //ordenamos

                                                                      this.citasVerticalMostrar.sort(function (a, b) {
                                                                        return _this9.getTime(a.FechaCompleta) - _this9.getTime(b.FechaCompleta);
                                                                      }); //guardamos la variable de ordenamiento

                                                                      sessionStorage.setItem('ORDEN_EVENTOS', 'descendente'); //creamos top limit al nuevo arreglo de citas

                                                                      this.citasVerticalTodasTop = this.citasVerticalMostrar.slice(0, this.topLimit); //console.log(this.citasVerticalTodasTop);

                                                                      loader.dismiss();
                                                                      this.estaCargando = false;
                                                                      this.tituloLoading = '';

                                                                    case 9:
                                                                    case "end":
                                                                      return _context5.stop();
                                                                  }
                                                                }
                                                              }, _callee5, this);
                                                            }));
                                                          });

                                                        case 2:
                                                        case "end":
                                                          return _context6.stop();
                                                      }
                                                    }
                                                  }, _callee6, this);
                                                }));
                                              });

                                            case 2:
                                            case "end":
                                              return _context7.stop();
                                          }
                                        }
                                      }, _callee7, this);
                                    }));
                                  });
                                } else {
                                  //llamada nativa
                                  this.cita.entregaPorMesNuevoNative(this.usuarioAps.Id, this.usuarioAps.IdRyf, this.usuarioAps.NodId, mesAnterior.mes, mesAnterior.anno).then(function (response) {
                                    return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(_this6, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee10() {
                                      var _this10 = this;

                                      return regeneratorRuntime.wrap(function _callee10$(_context10) {
                                        while (1) {
                                          switch (_context10.prev = _context10.next) {
                                            case 0:
                                              this.citasVerticalTodas = JSON.parse(response.data); //segunda llamada

                                              this.cita.entregaPorMesNuevoNative(this.usuarioAps.Id, this.usuarioAps.IdRyf, this.usuarioAps.NodId, mesActual.mes, mesActual.anno).then(function (responseDos) {
                                                return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(_this10, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee9() {
                                                  var _this11 = this;

                                                  var dataDos;
                                                  return regeneratorRuntime.wrap(function _callee9$(_context9) {
                                                    while (1) {
                                                      switch (_context9.prev = _context9.next) {
                                                        case 0:
                                                          dataDos = JSON.parse(responseDos.data);
                                                          this.citasVerticalTodas = this.citasVerticalTodas.concat(dataDos); //tercera llamada

                                                          this.cita.entregaPorMesNuevoNative(this.usuarioAps.Id, this.usuarioAps.IdRyf, this.usuarioAps.NodId, mesPosterior.mes, mesPosterior.anno).then(function (responseTres) {
                                                            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(_this11, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee8() {
                                                              var _this12 = this;

                                                              var dataTres;
                                                              return regeneratorRuntime.wrap(function _callee8$(_context8) {
                                                                while (1) {
                                                                  switch (_context8.prev = _context8.next) {
                                                                    case 0:
                                                                      dataTres = JSON.parse(responseTres.data);
                                                                      this.citasVerticalTodas = this.citasVerticalTodas.concat(dataTres); //aca procesamos

                                                                      this.procesarArregloCitasTodas();
                                                                      this.citasVerticalMostrar = this.citasVerticalTodas.filter(function (e) {
                                                                        return e.Mostrar == true;
                                                                      }); //ahora que tenemos las citas que queremos mostrar
                                                                      //ordenamos

                                                                      this.citasVerticalMostrar.sort(function (a, b) {
                                                                        return _this12.getTime(b.FechaCompleta) - _this12.getTime(a.FechaCompleta);
                                                                      }); //guardamos la variable de ordenamiento

                                                                      sessionStorage.setItem('ORDEN_EVENTOS', 'descendente'); //creamos top limit al nuevo arreglo de citas

                                                                      this.citasVerticalTodasTop = this.citasVerticalMostrar.slice(0, this.topLimit); //console.log(this.citasVerticalTodasTop);

                                                                      loader.dismiss();
                                                                      this.estaCargando = false;
                                                                      this.tituloLoading = '';

                                                                    case 10:
                                                                    case "end":
                                                                      return _context8.stop();
                                                                  }
                                                                }
                                                              }, _callee8, this);
                                                            }));
                                                          });

                                                        case 3:
                                                        case "end":
                                                          return _context9.stop();
                                                      }
                                                    }
                                                  }, _callee9, this);
                                                }));
                                              });

                                            case 2:
                                            case "end":
                                              return _context10.stop();
                                          }
                                        }
                                      }, _callee10, this);
                                    }));
                                  });
                                }

                              case 1:
                              case "end":
                                return _context11.stop();
                            }
                          }
                        }, _callee11, this);
                      }));
                    });

                  case 15:
                  case "end":
                    return _context12.stop();
                }
              }
            }, _callee12, this);
          }));
        }
      }, {
        key: "logout",
        value: function logout() {
          this.acceso.logout();
          this.navCtrl.navigateRoot('nuevo-login');
        }
      }, {
        key: "procesarArregloCitas",
        value: function procesarArregloCitas() {
          var contador = 0;

          for (var s in this.citasVertical) {
            for (var t in this.citasVertical[s].Eventos) {
              var fechaHora = this.citasVertical[s].Eventos[t].DetalleEventoMes.FechaHora;
              var fechaEvento = moment__WEBPACK_IMPORTED_MODULE_10__(fechaHora, 'YYYY-MM-DD').toDate();
              var fechaHoy = moment__WEBPACK_IMPORTED_MODULE_10__().toDate(); //console.log('Evento: ' + fechaEvento);
              //console.log('Hoy:' + fechaHoy);

              contador++;

              if (this.citasVertical[s].Eventos[t]) {
                if (this.citasVertical[s].Eventos[t].DetalleEventoMes.Subtitulo == 'Próxima Cita') {
                  this.citasVertical[s].Eventos[t].Imagen = 'agendar_citas.svg';
                  this.citasVertical[s].Eventos[t].DetalleEventoMes.Titulo = 'Cita programada';
                }

                if (this.citasVertical[s].Eventos[t].DetalleEventoMes.Subtitulo == 'Próxima Cita Web') {
                  this.citasVertical[s].Eventos[t].Imagen = 'agendar_citas.svg';
                  this.citasVertical[s].Eventos[t].DetalleEventoMes.Titulo = 'Cita programada web';
                }

                if (this.citasVertical[s].Eventos[t].DetalleEventoMes.Subtitulo == 'Atención Realizada') {
                  this.citasVertical[s].Eventos[t].Imagen = 'atenciones.svg';
                  this.citasVertical[s].Eventos[t].DetalleEventoMes.Titulo = 'Atención Realizada';
                }

                if (this.citasVertical[s].Eventos[t].DetalleEventoMes.Subtitulo == 'Fármaco en uso') {
                  this.citasVertical[s].Eventos[t].Imagen = 'retiro-de-medicamentos.svg';
                  this.citasVertical[s].Eventos[t].DetalleEventoMes.Titulo = 'Fármaco en uso';
                }

                if (this.citasVertical[s].Eventos[t].DetalleEventoMes.Subtitulo == 'Fármaco Pendiente') {
                  this.citasVertical[s].Eventos[t].Imagen = 'retiro-de-medicamentos.svg';
                  this.citasVertical[s].Eventos[t].DetalleEventoMes.Titulo = 'Fármaco en uso';
                }

                if (this.citasVertical[s].Eventos[t].DetalleEventoMes.Subtitulo == 'Alimento Entregado') {
                  this.citasVertical[s].Eventos[t].Imagen = 'retiro-de-alimentos.svg';
                  this.citasVertical[s].Eventos[t].DetalleEventoMes.Titulo = 'Entrega de alimento';
                }

                if (this.citasVertical[s].Eventos[t].DetalleEventoMes.Subtitulo == 'Vacuna Administrada') {
                  this.citasVertical[s].Eventos[t].Imagen = 'vacunas.svg';
                  this.citasVertical[s].Eventos[t].DetalleEventoMes.Titulo = 'Inmunización';
                }

                if (this.citasVertical[s].Eventos[t].DetalleEventoMes.Subtitulo == 'Vacuna por administrar') {
                  this.citasVertical[s].Eventos[t].Imagen = 'vacunas.svg';
                  this.citasVertical[s].Eventos[t].DetalleEventoMes.Titulo = 'Vacuna';
                }
              }

              if (fechaEvento < fechaHoy && this.citasVertical[s].Eventos[t].DetalleEventoMes.Titulo == 'Entrega de alimento') {
                this.citasVertical[s].Eventos[t].DetalleEventoMes.Titulo = 'Alimento entregado'; //console.log(this.citasVertical[s].Eventos[t].DetalleEventoMes);
              }

              if (fechaEvento < fechaHoy && this.citasVertical[s].Eventos[t].DetalleEventoMes.Titulo == 'Entrega de fármaco') {
                this.citasVertical[s].Eventos[t].DetalleEventoMes.Titulo = 'Fármaco entregado';
              }

              if (fechaEvento < fechaHoy && this.citasVertical[s].Eventos[t].DetalleEventoMes.Titulo == 'Inmunización') {
                this.citasVertical[s].Eventos[t].DetalleEventoMes.Titulo = 'Vacuna administrada';
              }

              if (fechaEvento < fechaHoy && this.citasVertical[s].Eventos[t].DetalleEventoMes.Titulo == 'Vacuna') {
                this.citasVertical[s].Eventos[t].DetalleEventoMes.Titulo = 'Vacuna por administrar';
              }
            }
          } //para determinar si tiene o no eventos


          if (contador == 0) {
            this.tiene = false;
          } else {
            this.tiene = true;
          }
        }
      }, {
        key: "procesarArregloCitasTodas",
        value: function procesarArregloCitasTodas() {
          var contador = 0;

          for (var s in this.citasVerticalTodas) {
            var fechaActual = moment__WEBPACK_IMPORTED_MODULE_10__();
            var fechaEvento1 = moment__WEBPACK_IMPORTED_MODULE_10__(this.citasVerticalTodas[s].FechaCompleta);
            var dif = fechaActual.diff(fechaEvento1);

            if (dif < 0) {
              dif = dif * -1;
            }

            this.citasVerticalTodas[s].DiferenciaFechas = dif;

            for (var t in this.citasVerticalTodas[s].Eventos) {
              var fechaHora = this.citasVerticalTodas[s].Eventos[t].DetalleEventoMes.FechaHora;
              var fechaEvento = moment__WEBPACK_IMPORTED_MODULE_10__(fechaHora, 'YYYY-MM-DD').toDate();
              var fechaHoy = moment__WEBPACK_IMPORTED_MODULE_10__().toDate();
              console.log('Evento: ' + fechaEvento);
              console.log('Hoy:' + fechaHoy);

              if (moment__WEBPACK_IMPORTED_MODULE_10__(fechaHoy).format('DD-MM-YYYY') == moment__WEBPACK_IMPORTED_MODULE_10__(fechaEvento).format('DD-MM-YYYY')) {
                this.tieneEventosHoy = true;
              }

              if (moment__WEBPACK_IMPORTED_MODULE_10__(fechaEvento).isAfter(moment__WEBPACK_IMPORTED_MODULE_10__(fechaHoy))) {
                this.tieneEventosFuturos = true;
              }

              this.fechaParaHoy = moment__WEBPACK_IMPORTED_MODULE_10__(fechaHoy).format('DD') + ' de ' + moment__WEBPACK_IMPORTED_MODULE_10__(fechaHoy).format('MMMM');
              console.log(this.fechaParaHoy);
              contador++;

              if (this.citasVerticalTodas[s].Eventos[t]) {
                if (this.citasVerticalTodas[s].Eventos[t].DetalleEventoMes.Subtitulo == 'Próxima Cita') {
                  this.citasVerticalTodas[s].Eventos[t].Imagen = 'agendar_citas.svg';
                  this.citasVerticalTodas[s].Eventos[t].DetalleEventoMes.Titulo = 'Cita programada';
                }

                if (this.citasVerticalTodas[s].Eventos[t].DetalleEventoMes.Subtitulo == 'Próxima Cita Web') {
                  this.citasVerticalTodas[s].Eventos[t].Imagen = 'agendar_citas.svg';
                  this.citasVerticalTodas[s].Eventos[t].DetalleEventoMes.Titulo = 'Cita programada web';
                }

                if (this.citasVerticalTodas[s].Eventos[t].DetalleEventoMes.Subtitulo == 'Atención Realizada') {
                  this.citasVerticalTodas[s].Eventos[t].Imagen = 'atenciones.svg';
                  this.citasVerticalTodas[s].Eventos[t].DetalleEventoMes.Titulo = 'Atención Realizada';
                }

                if (this.citasVerticalTodas[s].Eventos[t].DetalleEventoMes.Subtitulo == 'Fármaco en uso') {
                  this.citasVerticalTodas[s].Eventos[t].Imagen = 'retiro-de-medicamentos.svg';
                  this.citasVerticalTodas[s].Eventos[t].DetalleEventoMes.Titulo = 'Fármaco en uso';
                }

                if (this.citasVerticalTodas[s].Eventos[t].DetalleEventoMes.Subtitulo == 'Fármaco Pendiente') {
                  this.citasVerticalTodas[s].Eventos[t].Imagen = 'retiro-de-medicamentos.svg';
                  this.citasVerticalTodas[s].Eventos[t].DetalleEventoMes.Titulo = 'Fármaco en uso';
                }

                if (this.citasVerticalTodas[s].Eventos[t].DetalleEventoMes.Subtitulo == 'Alimento Entregado') {
                  this.citasVerticalTodas[s].Eventos[t].Imagen = 'retiro-de-alimentos.svg';
                  this.citasVerticalTodas[s].Eventos[t].DetalleEventoMes.Titulo = 'Entrega de alimento';
                }

                if (this.citasVerticalTodas[s].Eventos[t].DetalleEventoMes.Subtitulo == 'Vacuna Administrada') {
                  this.citasVerticalTodas[s].Eventos[t].Imagen = 'vacunas.svg';
                  this.citasVerticalTodas[s].Eventos[t].DetalleEventoMes.Titulo = 'Inmunización';
                }

                if (this.citasVerticalTodas[s].Eventos[t].DetalleEventoMes.Subtitulo == 'Vacuna por administrar') {
                  this.citasVerticalTodas[s].Eventos[t].Imagen = 'vacunas.svg';
                  this.citasVerticalTodas[s].Eventos[t].DetalleEventoMes.Titulo = 'Vacuna';
                }
              }

              if (fechaEvento < fechaHoy && this.citasVerticalTodas[s].Eventos[t].DetalleEventoMes.Titulo == 'Entrega de alimento') {
                this.citasVerticalTodas[s].Eventos[t].DetalleEventoMes.Titulo = 'Alimento entregado'; //console.log(this.citasVerticalTodas[s].Eventos[t].DetalleEventoMes);
              }

              if (fechaEvento < fechaHoy && this.citasVerticalTodas[s].Eventos[t].DetalleEventoMes.Titulo == 'Entrega de fármaco') {
                this.citasVerticalTodas[s].Eventos[t].DetalleEventoMes.Titulo = 'Fármaco entregado';
              }

              if (fechaEvento < fechaHoy && this.citasVerticalTodas[s].Eventos[t].DetalleEventoMes.Titulo == 'Inmunización') {
                this.citasVerticalTodas[s].Eventos[t].DetalleEventoMes.Titulo = 'Vacuna administrada';
              }

              if (fechaEvento < fechaHoy && this.citasVerticalTodas[s].Eventos[t].DetalleEventoMes.Titulo == 'Vacuna') {
                this.citasVerticalTodas[s].Eventos[t].DetalleEventoMes.Titulo = 'Vacuna por administrar';
              }
            }
          } //para determinar si tiene o no eventos


          if (contador == 0) {
            this.tiene = false;
          } else {
            this.tiene = true;
          } //aca hay que determinar si agregar o no el evento de hoy


          if (this.tieneEventosHoy == false) {
            var ultimo = this.citasVerticalTodas.length + 1;
            var entidadHoy = {
              FechaCompleta: fechaHoy,
              Id: parseInt(moment__WEBPACK_IMPORTED_MODULE_10__(fechaHoy).format('DD')),
              Mostrar: true,
              NombreDia: moment__WEBPACK_IMPORTED_MODULE_10__(fechaHoy).format('dddd'),
              NombreDiaReducido: moment__WEBPACK_IMPORTED_MODULE_10__(fechaHoy).format('ddd'),
              NumeroDia: parseInt(moment__WEBPACK_IMPORTED_MODULE_10__(fechaHoy).format('DD')),
              Indice: ultimo,
              DiferenciaFechas: 10,
              NoHayEvento: true,
              Eventos: [{
                Color: null,
                HoraInicioFin: '00:00',
                Imagen: 'agendar_citas.svg',
                ListaFarmacos: null,
                NombrePrincipal: 'Nada planificado para hoy',
                NombreSecundario: 'Nada planificado para hoy',
                DetalleEventoMes: {
                  DescripcionPrincipal: 'Nada planificado para hoy',
                  DescripcionSecundaria: 'Nada planificado para hoy',
                  Estado: '',
                  FechaHora: fechaHoy,
                  IdElemento: 0,
                  Lugar: '',
                  NombrePaciente: '',
                  Subtitulo: 'Nada planificado para hoy',
                  Titulo: 'Nada planificado para hoy'
                }
              }]
            }; //si no tiene eventos hoy lo agregamos

            this.citasVerticalTodas.push(entidadHoy);
          }
        }
      }, {
        key: "agregarUnElemento",
        value: function agregarUnElemento(fechaHoy) {
          if (this.tieneEventosHoy == false) {
            //contador = 1;
            var ultimo = this.citasVerticalTodas.length + 1;
            var entidadHoy = {
              FechaCompleta: fechaHoy,
              Id: parseInt(moment__WEBPACK_IMPORTED_MODULE_10__(fechaHoy).format('DD')),
              Mostrar: true,
              NombreDia: moment__WEBPACK_IMPORTED_MODULE_10__(fechaHoy).format('dddd'),
              NombreDiaReducido: moment__WEBPACK_IMPORTED_MODULE_10__(fechaHoy).format('ddd'),
              NumeroDia: parseInt(moment__WEBPACK_IMPORTED_MODULE_10__(fechaHoy).format('DD')),
              Indice: ultimo,
              DiferenciaFechas: 10,
              NoHayEvento: true,
              Eventos: [{
                Color: null,
                HoraInicioFin: '00:00',
                Imagen: 'agendar_citas.svg',
                ListaFarmacos: null,
                NombrePrincipal: 'Nada planificado para hoy',
                NombreSecundario: 'Nada planificado para hoy',
                DetalleEventoMes: {
                  DescripcionPrincipal: 'Nada planificado para hoy',
                  DescripcionSecundaria: 'Nada planificado para hoy',
                  Estado: '',
                  FechaHora: fechaHoy,
                  IdElemento: 0,
                  Lugar: '',
                  NombrePaciente: '',
                  Subtitulo: 'Nada planificado para hoy',
                  Titulo: 'Nada planificado para hoy'
                }
              }]
            }; //si no tiene eventos hoy lo agregamos

            this.citasVerticalTodas.push(entidadHoy);
            this.citasVerticalTodasTop = this.citasVerticalTodas;
            this.tiene = false;
          }
        } //ordena los elementos de forma descende o ascendente

      }, {
        key: "ordenar",
        value: function ordenar() {
          var _this13 = this;

          if (sessionStorage.getItem('ORDEN_EVENTOS')) {
            var orden = sessionStorage.getItem('ORDEN_EVENTOS');

            if (orden == 'descendente') {
              this.citasVerticalTodasTop.sort(function (a, b) {
                return _this13.getTime(a.FechaCompleta) - _this13.getTime(b.FechaCompleta);
              });
              sessionStorage.setItem('ORDEN_EVENTOS', 'ascendente');
            } else {
              this.citasVerticalTodasTop.sort(function (a, b) {
                return _this13.getTime(b.FechaCompleta) - _this13.getTime(a.FechaCompleta);
              });
              sessionStorage.setItem('ORDEN_EVENTOS', 'descendente');
            }
          } else {
            this.citasVerticalTodasTop.sort(function (a, b) {
              return _this13.getTime(b.FechaCompleta) - _this13.getTime(a.FechaCompleta);
            });
            sessionStorage.setItem('ORDEN_EVENTOS', 'descendente');
          }

          this.scrollListVisible();
        }
      }, {
        key: "loadData",
        value: function loadData(event) {
          var _this14 = this;

          setTimeout(function () {
            ////console.log('Done');
            _this14.topLimit += 5;
            _this14.citasVerticalTodasTop = _this14.citasVerticalMostrar.slice(0, _this14.topLimit);
            event.target.complete(); //aplicamos disabled si la cantidad de registros es la misma que el total

            if (_this14.citasVerticalTodasTop.length == _this14.citasVerticalMostrar.length) {
              event.target.disabled = true;
            }
          }, 500);
        }
      }, {
        key: "cargarDatosNativeN",
        value: function cargarDatosNativeN(mesConsultar, annoConsultar, loader) {
          var _this15 = this;

          //lo cambiamos para probar el nuevo metodo
          //this.cita.entregaPorMesNative(this.usuarioAps.Id, this.usuarioAps.IdRyf, this.usuarioAps.NodId, mesConsultar, annoConsultar).then(async (response: any)=>{
          this.cita.entregaPorMesNuevoNative(this.usuarioAps.Id, this.usuarioAps.IdRyf, this.usuarioAps.NodId, mesConsultar, annoConsultar).then(function (response) {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(_this15, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee14() {
              var _this16 = this;

              var consultaMes;
              return regeneratorRuntime.wrap(function _callee14$(_context14) {
                while (1) {
                  switch (_context14.prev = _context14.next) {
                    case 0:
                      consultaMes = this.cita.entregaPorMesNuevoNative(this.usuarioAps.Id, this.usuarioAps.IdRyf, this.usuarioAps.NodId, mesConsultar, annoConsultar).then(function (response) {
                        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(_this16, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee13() {
                          return regeneratorRuntime.wrap(function _callee13$(_context13) {
                            while (1) {
                              switch (_context13.prev = _context13.next) {
                                case 0:
                                  this.citasVertical = JSON.parse(response.data);
                                  this.citasVerticalMostrar = this.citasVertical.filter(function (e) {
                                    return e.Mostrar == true;
                                  }); //aqui procesa citasVertical

                                  this.procesarArregloCitas();
                                  loader.dismiss();

                                case 4:
                                case "end":
                                  return _context13.stop();
                              }
                            }
                          }, _callee13, this);
                        }));
                      });

                    case 1:
                    case "end":
                      return _context14.stop();
                  }
                }
              }, _callee14, this);
            }));
          });
        }
      }, {
        key: "cargarDatosWebN",
        value: function cargarDatosWebN(mesConsultar, annoConsultar, loader) {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee16() {
            var _this17 = this;

            var consultaMes;
            return regeneratorRuntime.wrap(function _callee16$(_context16) {
              while (1) {
                switch (_context16.prev = _context16.next) {
                  case 0:
                    //ACA NO SE REALIZA LA CONSULTA A INETGRACIÓN PARA MOSTRAR O MEZCLAR LAS CITAS, YA QUE EL SP TRAE LA INFO DE LAS CITAS WEB
                    consultaMes = this.cita.entregaPorMesNuevo(this.usuarioAps.Id, this.usuarioAps.IdRyf, this.usuarioAps.NodId, mesConsultar, annoConsultar).subscribe(function (response) {
                      return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(_this17, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee15() {
                        return regeneratorRuntime.wrap(function _callee15$(_context15) {
                          while (1) {
                            switch (_context15.prev = _context15.next) {
                              case 0:
                                this.citasVertical = response;
                                this.citasVerticalMostrar = this.citasVertical.filter(function (e) {
                                  return e.Mostrar == true;
                                }); //aqui procesa citasVertical

                                this.procesarArregloCitas();
                                loader.dismiss();

                              case 4:
                              case "end":
                                return _context15.stop();
                            }
                          }
                        }, _callee15, this);
                      }));
                    });

                  case 1:
                  case "end":
                    return _context16.stop();
                }
              }
            }, _callee16, this);
          }));
        }
      }, {
        key: "tratamientoMeses",
        value: function tratamientoMeses() {
          this.mesesVertical = [];
          moment__WEBPACK_IMPORTED_MODULE_10__["locale"]('es-es');
          var fechaActual = moment__WEBPACK_IMPORTED_MODULE_10__();
          var fechaMenosUnMes = moment__WEBPACK_IMPORTED_MODULE_10__().subtract(1, 'month');
          var fechaMasUnMes = moment__WEBPACK_IMPORTED_MODULE_10__().add(1, 'month');
          var mesActualNumero = moment__WEBPACK_IMPORTED_MODULE_10__(fechaActual).month() + 1;
          var mesMenosUnMesNumero = moment__WEBPACK_IMPORTED_MODULE_10__(fechaMenosUnMes).month() + 1;
          var mesMasUnMesNumero = moment__WEBPACK_IMPORTED_MODULE_10__(fechaMasUnMes).month() + 1;
          var mesActualStr = moment__WEBPACK_IMPORTED_MODULE_10__(fechaActual).format("MMMM").toUpperCase();
          var mesMenosUnMesStr = moment__WEBPACK_IMPORTED_MODULE_10__(fechaMenosUnMes).format("MMMM").toUpperCase();
          var mesMasUnMesStr = moment__WEBPACK_IMPORTED_MODULE_10__(fechaMasUnMes).format("MMMM").toUpperCase();
          var annoActual = moment__WEBPACK_IMPORTED_MODULE_10__(fechaActual).format("YYYY");
          var annoMenosUnMes = moment__WEBPACK_IMPORTED_MODULE_10__(fechaMenosUnMes).format("YYYY");
          var annoMasUnMes = moment__WEBPACK_IMPORTED_MODULE_10__(fechaMasUnMes).format("YYYY"); //ahora tenemos los años, meses podemos construir el arreglo.

          var entidadActual = {
            mesNumero: mesActualNumero + ',' + annoActual,
            mesTexto: mesActualStr,
            anno: annoActual
          };
          var entidadMenos = {
            mesNumero: mesMenosUnMesNumero + ',' + annoMenosUnMes,
            mesTexto: mesMenosUnMesStr,
            anno: annoMenosUnMes
          };
          var entidadMas = {
            mesNumero: mesMasUnMesNumero + ',' + annoMasUnMes,
            mesTexto: mesMasUnMesStr,
            anno: annoMasUnMes
          }; //agregamos los elementos al arreglo

          this.mesesVertical.push(entidadMenos);
          this.mesesVertical.push(entidadActual);
          this.mesesVertical.push(entidadMas); //console.log(this.mesesVertical);
        }
      }, {
        key: "createEventsCalendario",
        value: function createEventsCalendario() {
          this.calendarioData = this.citas; //console.log(this.calendarioData);

          return this.calendarioData;
        }
      }, {
        key: "goToDetalleCita",
        value: function goToDetalleCita(evento) {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee17() {
            var _this18 = this;

            var modal;
            return regeneratorRuntime.wrap(function _callee17$(_context17) {
              while (1) {
                switch (_context17.prev = _context17.next) {
                  case 0:
                    _context17.next = 2;
                    return this.modalCtrl.create({
                      component: _modal_detalle_cita_modal_detalle_cita_page__WEBPACK_IMPORTED_MODULE_11__["ModalDetalleCitaPage"],
                      componentProps: {
                        'evento': JSON.stringify(evento),
                        'usuario': JSON.stringify(this.usuarioAps)
                      }
                    });

                  case 2:
                    modal = _context17.sent;
                    modal.onDidDismiss().then(function (data) {
                      if (data.data && data.data.accion) {
                        var accion = data.data.accion; ////console.log(accion);
                        //obtenemos la pagina actual
                        //actualizar

                        var annoActual = moment__WEBPACK_IMPORTED_MODULE_10__().year();
                        var mesActual = moment__WEBPACK_IMPORTED_MODULE_10__().month() + 1; //var mesActual = this.mesActualSeleccionado;
                        ////console.log(mesActual);
                        //***************************** */

                        _this18.tratamientoMeses();

                        if (accion === 'booked') {
                          _this18.utiles.presentToast('Cita reservada con éxito!!', 'bottom', 3000);
                        } else if (accion === 'confirmed') {
                          _this18.utiles.presentToast('Cita confirmada con éxito!!', 'bottom', 3000);
                        } else if (accion === 'cancelled') {
                          _this18.utiles.presentToast('Cita anulada con éxito!!', 'bottom', 3000);
                        }

                        if (_this18.parametrosApp.USA_API_MANAGEMENT()) {
                          _this18.cargarTodosLosEventosApi();
                        } else {
                          _this18.cargarTodosLosEventos();
                        }
                      }
                    });
                    _context17.next = 6;
                    return modal.present();

                  case 6:
                    return _context17.abrupt("return", _context17.sent);

                  case 7:
                  case "end":
                    return _context17.stop();
                }
              }
            }, _callee17, this);
          }));
        }
      }, {
        key: "procesarRespuesta",
        value: function procesarRespuesta(data, loader) {
          this.citasIntegracion = [];

          if (data && data.Mensaje) {
            //correcto
            if (data.Mensaje.Detalle.Codigo == 'MSG_CORRECTO') {
              //ya tiene citas tomadas, hay que enviarlo a otra pagina
              //la de buscarcitas
              this.citasIntegracion = data.CitasDisponibles;
            }

            loader.dismiss();
          }
        }
      }, {
        key: "revisarCita",
        value: function revisarCita(evento, tituloBoton) {
          //aca hay solo booked y confirmed
          //si está booked puede confirmar y anular
          //si está confirmed solo puede anular
          //boton confirmar, anular
          var visible = [false, false];

          if (evento.DetalleEventoMes.Estado == 'booked' && tituloBoton == 'Confirmar') {
            //si esta booked se puede confirmar
            visible = [true, true];
          } else if (evento.DetalleEventoMes.Estado == 'confirmed' && tituloBoton == 'Anular') {
            //si esta booked se puede confirmar
            visible = [false, true];
          } else if (evento.DetalleEventoMes.Estado == 'booked' && tituloBoton == 'Anular') {
            //si esta booked se puede confirmar
            visible = [true, true];
          } else {
            visible = [false, false];
          }

          return visible;
        } //manejo de citas

      }, {
        key: "presentAlertConfirm",
        value: function presentAlertConfirm(boton, evento) {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee18() {
            var _this19 = this;

            var titulo, alert;
            return regeneratorRuntime.wrap(function _callee18$(_context18) {
              while (1) {
                switch (_context18.prev = _context18.next) {
                  case 0:
                    titulo = '';
                    _context18.next = 3;
                    return this.alertController.create({
                      header: boton.Titulo,
                      message: boton.Alert,
                      buttons: [{
                        text: 'No',
                        role: 'cancel',
                        cssClass: 'danger',
                        handler: function handler(blah) {//console.log('Confirm Cancel: blah');
                        }
                      }, {
                        text: 'Si',
                        cssClass: 'success',
                        handler: function handler() {
                          //aca debemos realizar la operación
                          _this19.accionCita(boton, evento);
                        }
                      }]
                    });

                  case 3:
                    alert = _context18.sent;
                    _context18.next = 6;
                    return alert.present();

                  case 6:
                  case "end":
                    return _context18.stop();
                }
              }
            }, _callee18, this);
          }));
        }
      }, {
        key: "accionCita",
        value: function accionCita(boton, evento) {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee20() {
            var _this20 = this;

            var usuarioCita, idPaciente, idCita, accion, loader;
            return regeneratorRuntime.wrap(function _callee20$(_context20) {
              while (1) {
                switch (_context20.prev = _context20.next) {
                  case 0:
                    if (!(evento.DetalleEventoMes.Estado && evento.DetalleEventoMes.Estado != '')) {
                      _context20.next = 12;
                      break;
                    }

                    //aca buscamos al paciente por el nombre
                    usuarioCita = this.utiles.entregaUsuarioNombre(evento.DetalleEventoMes.NombrePaciente); //var idPaciente = this.usuarioAps.Rut;

                    idPaciente = usuarioCita.Rut;
                    idCita = evento.DetalleEventoMes.IdElemento;
                    accion = boton.Operacion; //original

                    /*       let loader = await this.loading.create({
                            message: 'Procesado...<br>Información',
                            duration: 20000
                          }); */

                    _context20.next = 7;
                    return this.loading.create({
                      cssClass: 'loading-vacio',
                      showBackdrop: false,
                      spinner: null,
                      duration: 2000
                    });

                  case 7:
                    loader = _context20.sent;
                    this.estaCargando = true;
                    this.tituloLoading = 'Obteniendo respuesta';
                    _context20.next = 12;
                    return loader.present().then(function () {
                      return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(_this20, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee19() {
                        var _this21 = this;

                        var retorno;
                        return regeneratorRuntime.wrap(function _callee19$(_context19) {
                          while (1) {
                            switch (_context19.prev = _context19.next) {
                              case 0:
                                retorno = null;

                                if (!this.utiles.isAppOnDevice()) {
                                  //llamada web
                                  this.cita.getOperacionCita(idCita, idPaciente, accion).subscribe(function (response) {
                                    _this21.procesarRespuestaAgendar(response, loader, accion);
                                  });
                                } else {
                                  //llamada nativa
                                  this.cita.getOperacionCitaNative(idCita, idPaciente, accion).then(function (responseData) {
                                    var response = JSON.parse(responseData.data);

                                    _this21.procesarRespuestaAgendar(response, loader, accion);
                                  });
                                }

                              case 2:
                              case "end":
                                return _context19.stop();
                            }
                          }
                        }, _callee19, this);
                      }));
                    });

                  case 12:
                  case "end":
                    return _context20.stop();
                }
              }
            }, _callee20, this);
          }));
        }
      }, {
        key: "procesarRespuestaAgendar",
        value: function procesarRespuestaAgendar(data, loader, accion) {
          var retorno = null;

          if (data && data.Mensaje) {
            if (data.Mensaje.Codigo == 'correcto') {
              //todo bien
              //this.utiles.presentToast('Operación realizada con éxito', 'middle', 2000);
              retorno = data; //actualizar la pagina

              var annoActual = moment__WEBPACK_IMPORTED_MODULE_10__().year();
              var mesActual = moment__WEBPACK_IMPORTED_MODULE_10__().month() + 1; //var mesActual = this.mesActualSeleccionado;
              //console.log(mesActual);
              //***************************** */

              this.tratamientoMeses();
              this.estaCargando = false;
              this.tituloLoading = '';

              if (accion === 'booked') {
                this.utiles.presentToast('Cita reservada con éxito!!', 'bottom', 3000);
              } else if (accion === 'confirmed') {
                this.utiles.presentToast('Cita confirmada con éxito!!', 'bottom', 3000);
              } else if (accion === 'cancelled') {
                //si la cita es cnacelada hay que quitarla de notificaciones locales
                //obtenemos el id dde la cita
                if (data.CitasDisponibles && data.CitasDisponibles.length == 1) {
                  var idCita = data.CitasDisponibles[0].IdCita;
                  this.utiles.removeCitaNotificacionesLocales(idCita);
                }

                this.utiles.presentToast('Cita anulada con éxito!!', 'bottom', 3000);
              }

              if (this.parametrosApp.USA_API_MANAGEMENT()) {
                this.cargarTodosLosEventosApi();
              } else {
                this.cargarTodosLosEventos();
              }
            } else {
              this.estaCargando = false;
              this.tituloLoading = '';
              this.utiles.presentToast(data.Mensaje.Detalle.Texto, 'middle', 2000);
            }
          } else {
            //error en la operacion
            this.estaCargando = false;
            this.tituloLoading = '';
            this.utiles.presentToast('Error en la operación', 'middle', 2000);
          }

          loader.dismiss();
        } //abrir pagina de reservar hora

      }, {
        key: "openReservarHoraPage",
        value: function openReservarHoraPage() {
          var tieneFamilia = this.utiles.tieneFamilia(); //si tiene familia hay que enviarlo a la pagina de los miembros de la familia

          if (tieneFamilia) {
            this.navCtrl.navigateRoot('seleccion-usuario');
          } else {
            //si no tiene hay que enviarlo a buscar disponibilidad directo
            //pasando id
            var navigationExtras = {
              queryParams: {
                Id: this.usuarioAps.Id
              }
            };
            this.navCtrl.navigateRoot(['pre-tiposatencion'], navigationExtras);
          }
        }
      }, {
        key: "revisaEstado",
        value: function revisaEstado(item) {
          var retorno = false;

          if (item.DetalleEventoMes) {
            if (item.DetalleEventoMes.Estado) {
              if (item.DetalleEventoMes.Estado != undefined && item.DetalleEventoMes.Estado != '') {
                retorno = true;
              }
            }
          }

          return retorno;
        }
      }, {
        key: "transformDate",
        value: function transformDate(value, format) {
          var pi = new _app_pipes_fecha_pipe__WEBPACK_IMPORTED_MODULE_12__["MomentPipe"]();
          return pi.transform(value, format);
        }
      }, {
        key: "determinaFechaMasCercana",
        value: function determinaFechaMasCercana() {
          var fechaActual = moment__WEBPACK_IMPORTED_MODULE_10__();

          if (this.citasVerticalTodasTop && this.citasVerticalTodasTop.length > 0) {
            for (var i = 0; i < this.citasVerticalTodasTop.length; i++) {
              var fechaEvento = moment__WEBPACK_IMPORTED_MODULE_10__(this.citasVerticalTodasTop[i].FechaCompleta);
              var dif = fechaActual.diff(fechaEvento);

              if (dif < 0) {
                dif = dif * -1;
              }

              this.citasVerticalTodasTop[i].DiferenciaFechas = dif;
              /*         //console.log(dif);
                      //console.log(this.citasVerticalTodasTop[i]); */
            }
          }
        }
      }, {
        key: "finder",
        value: function finder(cmp, arr, attr) {
          var val = arr[0][attr];

          for (var i = 1; i < arr.length; i++) {
            val = cmp(val, arr[i][attr]);
          }

          return val;
        }
      }, {
        key: "scrollListVisible",
        value: function scrollListVisible() {
          var _this22 = this;

          //this.determinaFechaMasCercana();
          setTimeout(function () {
            var min = _this22.finder(Math.min, _this22.citasVerticalTodasTop, 'DiferenciaFechas');

            if (min) {
              var entidad = _this22.citasVerticalTodasTop.filter(function (p) {
                return p.DiferenciaFechas == min;
              })[0];

              if (entidad) {
                //var elemento = this.min();
                //console.log(min);
                //console.log(entidad);
                var yOffset = document.getElementById(entidad.DiferenciaFechas.toString()).offsetTop;

                if (yOffset != null) {
                  _this22.content.scrollToPoint(0, yOffset, 600);
                }
              }
            }
          }, 1000);
        }
      }]);

      return CalendarioPage;
    }();

    CalendarioPage.ctorParameters = function () {
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
        type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]
      }, {
        type: _app_services_ServicioUtiles__WEBPACK_IMPORTED_MODULE_4__["ServicioUtiles"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["LoadingController"]
      }, {
        type: _app_services_ServicioInfoUsuario__WEBPACK_IMPORTED_MODULE_5__["ServicioInfoUsuario"]
      }, {
        type: _app_services_ServicioAcceso__WEBPACK_IMPORTED_MODULE_6__["ServicioAcceso"]
      }, {
        type: _app_services_ServicioCitas__WEBPACK_IMPORTED_MODULE_7__["ServicioCitas"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["AlertController"]
      }, {
        type: _app_services_ServicioParametrosApp__WEBPACK_IMPORTED_MODULE_8__["ServicioParametrosApp"]
      }];
    };

    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('myList', {
      read: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonItem"]
    })], CalendarioPage.prototype, "list", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('myListCard', {
      read: _angular_material_card__WEBPACK_IMPORTED_MODULE_13__["MatCard"]
    })], CalendarioPage.prototype, "listCarda", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('content', {
      "static": true
    })], CalendarioPage.prototype, "content", void 0);
    CalendarioPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-calendario',
      template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! raw-loader!./calendario.page.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/calendario/calendario.page.html"))["default"],
      styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! ./calendario.page.scss */
      "./src/app/calendario/calendario.page.scss"))["default"]]
    })], CalendarioPage);
    /***/
  }
}]);
//# sourceMappingURL=calendario-calendario-module-es5.js.map