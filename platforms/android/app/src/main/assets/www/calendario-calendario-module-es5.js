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


    __webpack_exports__["default"] = "<ion-header>\r\n  <!-- esto lo comentamos ya que se decidió no usar color de header personalizado -->\r\n  <!-- <ion-toolbar [style.--background]=\"miColor\" mode=\"md\"> -->\r\n  <ion-toolbar color=\"primary\" mode=\"md\">\r\n    <ion-buttons slot=\"start\">\r\n      <ion-back-button defaultHref=\"/home\" class=\"fcw\"></ion-back-button>\r\n    </ion-buttons>\r\n    <ion-title class=\"fcw\">Eventos</ion-title>\r\n    <ion-buttons slot=\"end\" (click)=\"ordenar()\" style=\"padding-right: 16px;\">\r\n      <ion-icon class=\"fcw\" slot=\"icon-only\" name=\"swap-vertical\"></ion-icon>&nbsp;Ordenar\r\n    </ion-buttons>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content class=\"back-app\" style=\"--padding-bottom: 50px !important;\">\r\n  <!-- selección de fecha -->\r\n<!--     <ion-item class=\"ion-text-center\" lines=\"none\">\r\n      <ion-icon name=\"calendar\" slot=\"start\"></ion-icon>\r\n      <ion-select okText=\"Aceptar\" cancelText=\"Cancelar\" (ionChange)=\"mesSelected($event)\" multiple=\"false\" value=\"{{mesActualSeleccionado}}\">\r\n          <ion-select-option *ngFor=\"let mes of mesesVertical\" [value]=\"mes.mesNumero\">\r\n            {{mes.mesTexto}}\r\n          </ion-select-option>\r\n      </ion-select>\r\n    </ion-item> -->\r\n\r\n\r\n <div *ngIf=\"!tiene\">\r\n  <div style=\"position: absolute; display: table; height: 90%; font-size: 30px; color:#BDBDBD; text-align: center;\" class=\"ion-padding\">\r\n    <p style=\"display: table-cell; vertical-align: middle\">No hay eventos para mostrar  <br>\r\n    <ion-icon name=\"information-circle\" style=\"font-size: 50px;\"></ion-icon></p>\r\n  </div>\r\n </div>\r\n <div *ngIf=\"tiene\">\r\n  <div *ngFor=\"let item of citasVerticalTodasTop\">\r\n    <ion-grid *ngIf=\"item.Mostrar\">\r\n      <!-- prueba de material -->\r\n      <!-- fila fecha superior-->\r\n      <ion-row>\r\n        <label class=\"fecha-card\">{{item.NumeroDia}} de {{transformDate(item.FechaCompleta, 'MMMM')}}</label>\r\n      </ion-row>\r\n      <!-- fila items -->\r\n      <ion-row class=\"ion-no-padding ion-no-margin row-card\">\r\n        <mat-card *ngFor=\"let evento of item.Eventos\" color=\"light\" style=\"margin-bottom: 8px;\">\r\n          <mat-card-header (click)=\"goToDetalleCita(evento)\">\r\n            \r\n              <mat-card-subtitle class=\"hora\">{{evento.HoraInicioFin}}</mat-card-subtitle>\r\n              <mat-card-title>{{evento.DetalleEventoMes.Titulo}}</mat-card-title>\r\n              <mat-card-subtitle>{{evento.DetalleEventoMes.NombrePaciente}}</mat-card-subtitle>\r\n            \r\n            <div class=\"img-card\">\r\n              <img class=\"example-header-image\" src=\"./assets/img/{{evento.Imagen}}\">\r\n            </div>\r\n          </mat-card-header>\r\n          <mat-card-actions *ngIf=\"revisaEstado(evento)\">\r\n            <button color=\"primary\" mat-button *ngIf=\"revisarCita(evento, 'Anular')[1]\" (click)=\"presentAlertConfirm(botonCancelar, evento)\">ANULAR</button>\r\n            <button color=\"primary\" mat-button *ngIf=\"revisarCita(evento, 'Confirmar')[0]\" (click)=\"presentAlertConfirm(botonConfirmar, evento)\">RESERVAR</button>\r\n          </mat-card-actions>\r\n        </mat-card>\r\n      </ion-row>\r\n    </ion-grid>\r\n  </div>\r\n  <!-- pruebas con infinite scroll -->\r\n  <ion-infinite-scroll threshold=\"100px\" (ionInfinite)=\"loadData($event)\">\r\n    <ion-infinite-scroll-content loadingSpinner=\"bubbles\" loadingText=\"Cargando más eventos...\">\r\n    </ion-infinite-scroll-content>\r\n  </ion-infinite-scroll>\r\n </div>\r\n</ion-content>\r\n<!-- este es el fab para abrir reservar horas -->\r\n<ion-fab vertical=\"bottom\" horizontal=\"end\" slot=\"fixed\">\r\n  <ion-button color=\"secondary\" (click)=\"openReservarHoraPage()\" shape=\"round\" style=\"--color:black;\">\r\n    <ion-icon slot=\"start\" name=\"add-outline\" class=\"botonReservar\" style=\"font-size: 16px;\"></ion-icon>\r\n    <span class=\"botonReservar\">RESERVAR HORA</span>\r\n  </ion-button>\r\n</ion-fab>\r\n";
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

    var CalendarioPageModule = function CalendarioPageModule() {
      _classCallCheck(this, CalendarioPageModule);
    };

    CalendarioPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _directives_text_avatar_index__WEBPACK_IMPORTED_MODULE_7__["TextAvatarModule"], _angular_material_card__WEBPACK_IMPORTED_MODULE_8__["MatCardModule"], _angular_material_button__WEBPACK_IMPORTED_MODULE_9__["MatButtonModule"], _angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterModule"].forChild([{
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


    __webpack_exports__["default"] = "/* Set the width to the full container and center the content */\nion-select {\n  width: 100%;\n  justify-content: center;\n}\n/* Set the flex in order to size the text width to its content */\nion-select::part(placeholder),\nion-select::part(text) {\n  flex: 0 0 auto;\n}\n/* Set the placeholder color and opacity */\nion-select::part(placeholder) {\n  color: #20a08a;\n  opacity: 1;\n}\n/*\n * Set the font of the first letter of the placeholder\n * Shadow parts work with pseudo-elements, too!\n * https://developer.mozilla.org/en-US/docs/Web/CSS/Pseudo-elements\n */\nion-select::part(placeholder)::first-letter {\n  font-size: 24px;\n  font-weight: 500;\n}\n/* Set the text color */\nion-select::part(text) {\n  color: #545ca7;\n}\n/* Set the icon color and opacity */\nion-select::part(icon) {\n  color: #971e49;\n  opacity: 1;\n}\n.content-card-fav {\n  height: 58px;\n  min-height: 56px;\n}\n.ion-fav-calendar {\n  height: 48px;\n  width: 48px;\n}\n.botonReservar {\n  /*color:#000000DE;\n  font-weight: 20px;*/\n  font: normal normal medium 14px/16px Roboto;\n  letter-spacing: 1.25px;\n  color: #000000DE;\n  text-transform: uppercase;\n  opacity: 1;\n}\n/* estilos para material */\n.example-header-image {\n  background-size: cover;\n  width: 80px;\n  height: 80px;\n  -o-object-fit: cover;\n     object-fit: cover;\n}\nmat-card {\n  width: 100%;\n  max-width: 100%;\n  min-width: 100%;\n}\n::ng-dep .mat-card-header-text {\n  width: 100%;\n  margin: 0;\n}\n.hora {\n  font-size: 0.8em;\n}\n.row-card {\n  margin-left: 16px;\n  margin-right: 16px;\n}\n.img-card {\n  width: 80px;\n  float: right;\n  margin: 0;\n  padding: 0;\n  min-width: 80px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY2FsZW5kYXJpby9GOlxcYXBwX21pZmFtaWxpYV9naXRcXG1pRmFtaWxpYV9wcmUvc3JjXFxhcHBcXGNhbGVuZGFyaW9cXGNhbGVuZGFyaW8ucGFnZS5zY3NzIiwic3JjL2FwcC9jYWxlbmRhcmlvL2NhbGVuZGFyaW8ucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLCtEQUFBO0FBQ0E7RUFDSSxXQUFBO0VBRUEsdUJBQUE7QUNBSjtBREdFLGdFQUFBO0FBQ0E7O0VBRUUsY0FBQTtBQ0FKO0FER0UsMENBQUE7QUFDQTtFQUNFLGNBQUE7RUFDQSxVQUFBO0FDQUo7QURHRTs7OztFQUFBO0FBS0E7RUFDRSxlQUFBO0VBQ0EsZ0JBQUE7QUNBSjtBREdFLHVCQUFBO0FBQ0E7RUFDRSxjQUFBO0FDQUo7QURHRSxtQ0FBQTtBQUNBO0VBQ0UsY0FBQTtFQUNBLFVBQUE7QUNBSjtBREVFO0VBQ0UsWUFBQTtFQUNBLGdCQUFBO0FDQ0o7QURDRTtFQUNFLFlBQUE7RUFDQSxXQUFBO0FDRUo7QURBRTtFQUNFO3FCQUFBO0VBRUEsMkNBQUE7RUFDQSxzQkFBQTtFQUNBLGdCQUFBO0VBQ0EseUJBQUE7RUFDQSxVQUFBO0FDR0o7QURERSwwQkFBQTtBQUNBO0VBQ0Usc0JBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLG9CQUFBO0tBQUEsaUJBQUE7QUNJSjtBREZFO0VBQ0UsV0FBQTtFQUNBLGVBQUE7RUFDQSxlQUFBO0FDS0o7QURIRTtFQUNFLFdBQUE7RUFDQSxTQUFBO0FDTUo7QURKRTtFQUNFLGdCQUFBO0FDT0o7QURMRTtFQUNFLGlCQUFBO0VBQ0Esa0JBQUE7QUNRSjtBRE5FO0VBQ0UsV0FBQTtFQUNBLFlBQUE7RUFDQSxTQUFBO0VBQ0EsVUFBQTtFQUNBLGVBQUE7QUNTSiIsImZpbGUiOiJzcmMvYXBwL2NhbGVuZGFyaW8vY2FsZW5kYXJpby5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIvKiBTZXQgdGhlIHdpZHRoIHRvIHRoZSBmdWxsIGNvbnRhaW5lciBhbmQgY2VudGVyIHRoZSBjb250ZW50ICovXHJcbmlvbi1zZWxlY3Qge1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgXHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICB9XHJcbiAgXHJcbiAgLyogU2V0IHRoZSBmbGV4IGluIG9yZGVyIHRvIHNpemUgdGhlIHRleHQgd2lkdGggdG8gaXRzIGNvbnRlbnQgKi9cclxuICBpb24tc2VsZWN0OjpwYXJ0KHBsYWNlaG9sZGVyKSxcclxuICBpb24tc2VsZWN0OjpwYXJ0KHRleHQpIHtcclxuICAgIGZsZXg6IDAgMCBhdXRvO1xyXG4gIH1cclxuICBcclxuICAvKiBTZXQgdGhlIHBsYWNlaG9sZGVyIGNvbG9yIGFuZCBvcGFjaXR5ICovXHJcbiAgaW9uLXNlbGVjdDo6cGFydChwbGFjZWhvbGRlcikge1xyXG4gICAgY29sb3I6ICMyMGEwOGE7XHJcbiAgICBvcGFjaXR5OiAxO1xyXG4gIH1cclxuICBcclxuICAvKlxyXG4gICAqIFNldCB0aGUgZm9udCBvZiB0aGUgZmlyc3QgbGV0dGVyIG9mIHRoZSBwbGFjZWhvbGRlclxyXG4gICAqIFNoYWRvdyBwYXJ0cyB3b3JrIHdpdGggcHNldWRvLWVsZW1lbnRzLCB0b28hXHJcbiAgICogaHR0cHM6Ly9kZXZlbG9wZXIubW96aWxsYS5vcmcvZW4tVVMvZG9jcy9XZWIvQ1NTL1BzZXVkby1lbGVtZW50c1xyXG4gICAqL1xyXG4gIGlvbi1zZWxlY3Q6OnBhcnQocGxhY2Vob2xkZXIpOjpmaXJzdC1sZXR0ZXIge1xyXG4gICAgZm9udC1zaXplOiAyNHB4O1xyXG4gICAgZm9udC13ZWlnaHQ6IDUwMDtcclxuICB9XHJcbiAgXHJcbiAgLyogU2V0IHRoZSB0ZXh0IGNvbG9yICovXHJcbiAgaW9uLXNlbGVjdDo6cGFydCh0ZXh0KSB7XHJcbiAgICBjb2xvcjogIzU0NWNhNztcclxuICB9XHJcbiAgXHJcbiAgLyogU2V0IHRoZSBpY29uIGNvbG9yIGFuZCBvcGFjaXR5ICovXHJcbiAgaW9uLXNlbGVjdDo6cGFydChpY29uKSB7XHJcbiAgICBjb2xvcjogIzk3MWU0OTtcclxuICAgIG9wYWNpdHk6IDE7XHJcbiAgfVxyXG4gIC5jb250ZW50LWNhcmQtZmF2e1xyXG4gICAgaGVpZ2h0OiA1OHB4O1xyXG4gICAgbWluLWhlaWdodDogNTZweDtcclxuICB9XHJcbiAgLmlvbi1mYXYtY2FsZW5kYXJ7XHJcbiAgICBoZWlnaHQ6IDQ4cHg7XHJcbiAgICB3aWR0aDogNDhweDtcclxuICB9XHJcbiAgLmJvdG9uUmVzZXJ2YXJ7XHJcbiAgICAvKmNvbG9yOiMwMDAwMDBERTtcclxuICAgIGZvbnQtd2VpZ2h0OiAyMHB4OyovXHJcbiAgICBmb250OiBub3JtYWwgbm9ybWFsIG1lZGl1bSAxNHB4LzE2cHggUm9ib3RvO1xyXG4gICAgbGV0dGVyLXNwYWNpbmc6IDEuMjVweDtcclxuICAgIGNvbG9yOiAjMDAwMDAwREU7XHJcbiAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xyXG4gICAgb3BhY2l0eTogMTtcclxuICB9XHJcbiAgLyogZXN0aWxvcyBwYXJhIG1hdGVyaWFsICovXHJcbiAgLmV4YW1wbGUtaGVhZGVyLWltYWdlIHtcclxuICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XHJcbiAgICB3aWR0aDogODBweDtcclxuICAgIGhlaWdodDogODBweDtcclxuICAgIG9iamVjdC1maXQ6IGNvdmVyO1xyXG4gIH1cclxuICBtYXQtY2FyZHtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgbWF4LXdpZHRoOiAxMDAlO1xyXG4gICAgbWluLXdpZHRoOiAxMDAlO1xyXG4gIH1cclxuICA6Om5nLWRlcCAubWF0LWNhcmQtaGVhZGVyLXRleHR7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIG1hcmdpbjogMDtcclxuICB9XHJcbiAgLmhvcmF7XHJcbiAgICBmb250LXNpemU6IDAuOGVtO1xyXG4gIH1cclxuICAucm93LWNhcmR7XHJcbiAgICBtYXJnaW4tbGVmdDogMTZweDtcclxuICAgIG1hcmdpbi1yaWdodDogMTZweDtcclxuICB9XHJcbiAgLmltZy1jYXJke1xyXG4gICAgd2lkdGg6IDgwcHg7XHJcbiAgICBmbG9hdDogcmlnaHQ7XHJcbiAgICBtYXJnaW46IDA7XHJcbiAgICBwYWRkaW5nOiAwO1xyXG4gICAgbWluLXdpZHRoOiA4MHB4O1xyXG4gIH1cclxuICBcclxuIiwiLyogU2V0IHRoZSB3aWR0aCB0byB0aGUgZnVsbCBjb250YWluZXIgYW5kIGNlbnRlciB0aGUgY29udGVudCAqL1xuaW9uLXNlbGVjdCB7XG4gIHdpZHRoOiAxMDAlO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbn1cblxuLyogU2V0IHRoZSBmbGV4IGluIG9yZGVyIHRvIHNpemUgdGhlIHRleHQgd2lkdGggdG8gaXRzIGNvbnRlbnQgKi9cbmlvbi1zZWxlY3Q6OnBhcnQocGxhY2Vob2xkZXIpLFxuaW9uLXNlbGVjdDo6cGFydCh0ZXh0KSB7XG4gIGZsZXg6IDAgMCBhdXRvO1xufVxuXG4vKiBTZXQgdGhlIHBsYWNlaG9sZGVyIGNvbG9yIGFuZCBvcGFjaXR5ICovXG5pb24tc2VsZWN0OjpwYXJ0KHBsYWNlaG9sZGVyKSB7XG4gIGNvbG9yOiAjMjBhMDhhO1xuICBvcGFjaXR5OiAxO1xufVxuXG4vKlxuICogU2V0IHRoZSBmb250IG9mIHRoZSBmaXJzdCBsZXR0ZXIgb2YgdGhlIHBsYWNlaG9sZGVyXG4gKiBTaGFkb3cgcGFydHMgd29yayB3aXRoIHBzZXVkby1lbGVtZW50cywgdG9vIVxuICogaHR0cHM6Ly9kZXZlbG9wZXIubW96aWxsYS5vcmcvZW4tVVMvZG9jcy9XZWIvQ1NTL1BzZXVkby1lbGVtZW50c1xuICovXG5pb24tc2VsZWN0OjpwYXJ0KHBsYWNlaG9sZGVyKTo6Zmlyc3QtbGV0dGVyIHtcbiAgZm9udC1zaXplOiAyNHB4O1xuICBmb250LXdlaWdodDogNTAwO1xufVxuXG4vKiBTZXQgdGhlIHRleHQgY29sb3IgKi9cbmlvbi1zZWxlY3Q6OnBhcnQodGV4dCkge1xuICBjb2xvcjogIzU0NWNhNztcbn1cblxuLyogU2V0IHRoZSBpY29uIGNvbG9yIGFuZCBvcGFjaXR5ICovXG5pb24tc2VsZWN0OjpwYXJ0KGljb24pIHtcbiAgY29sb3I6ICM5NzFlNDk7XG4gIG9wYWNpdHk6IDE7XG59XG5cbi5jb250ZW50LWNhcmQtZmF2IHtcbiAgaGVpZ2h0OiA1OHB4O1xuICBtaW4taGVpZ2h0OiA1NnB4O1xufVxuXG4uaW9uLWZhdi1jYWxlbmRhciB7XG4gIGhlaWdodDogNDhweDtcbiAgd2lkdGg6IDQ4cHg7XG59XG5cbi5ib3RvblJlc2VydmFyIHtcbiAgLypjb2xvcjojMDAwMDAwREU7XG4gIGZvbnQtd2VpZ2h0OiAyMHB4OyovXG4gIGZvbnQ6IG5vcm1hbCBub3JtYWwgbWVkaXVtIDE0cHgvMTZweCBSb2JvdG87XG4gIGxldHRlci1zcGFjaW5nOiAxLjI1cHg7XG4gIGNvbG9yOiAjMDAwMDAwREU7XG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gIG9wYWNpdHk6IDE7XG59XG5cbi8qIGVzdGlsb3MgcGFyYSBtYXRlcmlhbCAqL1xuLmV4YW1wbGUtaGVhZGVyLWltYWdlIHtcbiAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcbiAgd2lkdGg6IDgwcHg7XG4gIGhlaWdodDogODBweDtcbiAgb2JqZWN0LWZpdDogY292ZXI7XG59XG5cbm1hdC1jYXJkIHtcbiAgd2lkdGg6IDEwMCU7XG4gIG1heC13aWR0aDogMTAwJTtcbiAgbWluLXdpZHRoOiAxMDAlO1xufVxuXG46Om5nLWRlcCAubWF0LWNhcmQtaGVhZGVyLXRleHQge1xuICB3aWR0aDogMTAwJTtcbiAgbWFyZ2luOiAwO1xufVxuXG4uaG9yYSB7XG4gIGZvbnQtc2l6ZTogMC44ZW07XG59XG5cbi5yb3ctY2FyZCB7XG4gIG1hcmdpbi1sZWZ0OiAxNnB4O1xuICBtYXJnaW4tcmlnaHQ6IDE2cHg7XG59XG5cbi5pbWctY2FyZCB7XG4gIHdpZHRoOiA4MHB4O1xuICBmbG9hdDogcmlnaHQ7XG4gIG1hcmdpbjogMDtcbiAgcGFkZGluZzogMDtcbiAgbWluLXdpZHRoOiA4MHB4O1xufSJdfQ== */";
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


    var src_environments_environment__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! src/environments/environment */
    "./src/environments/environment.ts");
    /* harmony import */


    var moment__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! moment */
    "./node_modules/moment/moment.js");
    /* harmony import */


    var moment__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_9__);
    /* harmony import */


    var _modal_detalle_cita_modal_detalle_cita_page__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! ../modal-detalle-cita/modal-detalle-cita.page */
    "./src/app/modal-detalle-cita/modal-detalle-cita.page.ts");
    /* harmony import */


    var _app_pipes_fecha_pipe__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! ../../app/pipes/fecha.pipe */
    "./src/app/pipes/fecha.pipe.ts"); //parametros
    //SERVICIOS
    //moment
    //modal


    var CalendarioPage = /*#__PURE__*/function () {
      function CalendarioPage(navCtrl, toast, modalCtrl, platform, menu, activatedRoute, router, utiles, loading, info, acceso, cita, alertController) {
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

        this.estaCargando = false; //para infinity scroll

        this.topLimit = 5;
        this.citasVerticalTodasTop = [];
      } //DEBO EMPEZAR A TRABAJAR EN LA PAGINA DE DETALLE DE LOS EVENTOS,
      //OJO HAY VACUNAS CON FECHA PROXIMA 29-11-2020 Y NO VEO QUE APAREZCAN
      //CUANDO SELECCIONAS EL COMBO DE FECHA Y LUEGO VUELVES A SELECCIONAR 
      //UNA FECHA ANTERIOR POR EJEMPLO NO MUESTRA NADA


      _createClass(CalendarioPage, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          moment__WEBPACK_IMPORTED_MODULE_9__().locale('es'); //this.miColor = this.utiles.entregaMiColor();

          if (sessionStorage.UsuarioAps) {
            this.usuarioAps = JSON.parse(sessionStorage.UsuarioAps);

            if (this.usuarioAps) {
              this.miColor = this.utiles.entregaColor(this.usuarioAps);
              this.usuarioAps.UrlImagen = src_environments_environment__WEBPACK_IMPORTED_MODULE_8__["environment"].URL_FOTOS + this.usuarioAps.UrlImagen;
              this.runPaciente = this.utiles.insertarGuion(this.usuarioAps.Rut);
              this.codigoDeis = this.usuarioAps.ConfiguracionNodo.CodigoDeis2014;
              this.nodId = this.usuarioAps.ConfiguracionNodo.NodId;
            }
          } //mes seleccionado


          this.mesActualSeleccionado = moment__WEBPACK_IMPORTED_MODULE_9__().month() + 1 + ',' + moment__WEBPACK_IMPORTED_MODULE_9__().year(); //this.mesActualSeleccionado = moment().month() + 1;

          console.log('formato de mes seleccionado ===> ' + this.mesActualSeleccionado); //revisar estos parametros ya que estan en el otro codigo en el oninit

          var diasSemana = new Array("domingo", "lunes", "martes", "miércoles", "jueves", "viernes", "sábado");
          var meses = new Array("enero", "febrero", "marzo", "abril", "mayo", "junio", "julio", "agosto", "septiembre", "octubre", "noviembre", "diciembre");
          this.diaSem = diasSemana[new Date().getDay()];
          this.hoy = new Date().getDate();
          this.meses = meses[new Date().getMonth()];
          this.anio = new Date().getFullYear(); //estos parametros estan en el ready
          //lamada para citas vertical

          var annoActual = moment__WEBPACK_IMPORTED_MODULE_9__().year();
          var mesActual = moment__WEBPACK_IMPORTED_MODULE_9__().month() + 1; //var mesActual = this.mesActualSeleccionado;

          console.log(mesActual); //***************************** */

          this.tratamientoMeses(); //omplementación antigua
          //this.cargarEventosMes(mesActual, annoActual);
          //this.buscarDisponibilidad(new Date());
          //implementacion nueva

          this.cargarTodosLosEventos();
        }
      }, {
        key: "getTime",
        value: function getTime(date) {
          return date != null ? new Date(date).getTime() : 0;
        }
        /*   ordenarDesc = function(a, b){
            var fechaA = moment(a.FechaCompleta).format();
            var fechaB = moment(b.FechaCompleta).format();
            //console.log(convertirFe)
            //return b-a;
            return fechaA - fechaB;
          }; */

      }, {
        key: "cargarTodosLosEventos",
        value: function cargarTodosLosEventos() {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee8() {
            var _this = this;

            var fechaActual, fechaAnterior, fechaPosterior, mesAnterior, mesActual, mesPosterior, loader;
            return regeneratorRuntime.wrap(function _callee8$(_context8) {
              while (1) {
                switch (_context8.prev = _context8.next) {
                  case 0:
                    //usar citasVerticalTodas
                    this.citasVerticalTodas = [];
                    this.citasVerticalMostrar = [];
                    fechaActual = moment__WEBPACK_IMPORTED_MODULE_9__();
                    fechaAnterior = moment__WEBPACK_IMPORTED_MODULE_9__().subtract(1, 'month');
                    fechaPosterior = moment__WEBPACK_IMPORTED_MODULE_9__().add(1, 'month');
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
                    _context8.next = 10;
                    return this.loading.create({
                      message: 'Obteniendo...<br>Información del usuario',
                      duration: 20000
                    });

                  case 10:
                    loader = _context8.sent;
                    _context8.next = 13;
                    return loader.present().then(function () {
                      return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(_this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee7() {
                        var _this2 = this;

                        return regeneratorRuntime.wrap(function _callee7$(_context7) {
                          while (1) {
                            switch (_context7.prev = _context7.next) {
                              case 0:
                                if (!this.utiles.isAppOnDevice()) {
                                  //llamada web
                                  this.cita.entregaPorMesNuevo(this.usuarioAps.Id, this.usuarioAps.IdRyf, this.usuarioAps.NodId, mesAnterior.mes, mesAnterior.anno).subscribe(function (response) {
                                    return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(_this2, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee3() {
                                      var _this3 = this;

                                      return regeneratorRuntime.wrap(function _callee3$(_context3) {
                                        while (1) {
                                          switch (_context3.prev = _context3.next) {
                                            case 0:
                                              this.citasVerticalTodas = response; //segunda llamada

                                              this.cita.entregaPorMesNuevo(this.usuarioAps.Id, this.usuarioAps.IdRyf, this.usuarioAps.NodId, mesActual.mes, mesActual.anno).subscribe(function (responseDos) {
                                                return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(_this3, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
                                                  var _this4 = this;

                                                  return regeneratorRuntime.wrap(function _callee2$(_context2) {
                                                    while (1) {
                                                      switch (_context2.prev = _context2.next) {
                                                        case 0:
                                                          this.citasVerticalTodas = this.citasVerticalTodas.concat(responseDos); //tercera llamada

                                                          this.cita.entregaPorMesNuevo(this.usuarioAps.Id, this.usuarioAps.IdRyf, this.usuarioAps.NodId, mesPosterior.mes, mesPosterior.anno).subscribe(function (responseTres) {
                                                            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(_this4, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
                                                              var _this5 = this;

                                                              return regeneratorRuntime.wrap(function _callee$(_context) {
                                                                while (1) {
                                                                  switch (_context.prev = _context.next) {
                                                                    case 0:
                                                                      this.citasVerticalTodas = this.citasVerticalTodas.concat(responseTres); //pruebas
                                                                      //this.pruebaProcesar(this.citasVerticalTodas);
                                                                      //aca procedemos a procesarlos

                                                                      this.procesarArregloCitasTodas();
                                                                      this.citasVerticalMostrar = this.citasVerticalTodas.filter(function (e) {
                                                                        return e.Mostrar == true;
                                                                      }); //console.log(this.citasVerticalMostrar);
                                                                      //ahora que tenemos las citas que queremos mostrar
                                                                      //ordenamos

                                                                      this.citasVerticalMostrar.sort(function (a, b) {
                                                                        return _this5.getTime(b.FechaCompleta) - _this5.getTime(a.FechaCompleta);
                                                                      }); //guardamos la variable de ordenamiento

                                                                      sessionStorage.setItem('ORDEN_EVENTOS', 'descendente'); //creamos top limit al nuevo arreglo de citas

                                                                      this.citasVerticalTodasTop = this.citasVerticalMostrar.slice(0, this.topLimit);
                                                                      console.log(this.citasVerticalTodasTop);
                                                                      loader.dismiss();

                                                                    case 8:
                                                                    case "end":
                                                                      return _context.stop();
                                                                  }
                                                                }
                                                              }, _callee, this);
                                                            }));
                                                          });

                                                        case 2:
                                                        case "end":
                                                          return _context2.stop();
                                                      }
                                                    }
                                                  }, _callee2, this);
                                                }));
                                              });

                                            case 2:
                                            case "end":
                                              return _context3.stop();
                                          }
                                        }
                                      }, _callee3, this);
                                    }));
                                  });
                                } else {
                                  //llamada nativa
                                  this.cita.entregaPorMesNuevoNative(this.usuarioAps.Id, this.usuarioAps.IdRyf, this.usuarioAps.NodId, mesAnterior.mes, mesAnterior.anno).then(function (response) {
                                    return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(_this2, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee6() {
                                      var _this6 = this;

                                      return regeneratorRuntime.wrap(function _callee6$(_context6) {
                                        while (1) {
                                          switch (_context6.prev = _context6.next) {
                                            case 0:
                                              this.citasVerticalTodas = JSON.parse(response.data); //segunda llamada

                                              this.cita.entregaPorMesNuevoNative(this.usuarioAps.Id, this.usuarioAps.IdRyf, this.usuarioAps.NodId, mesActual.mes, mesActual.anno).then(function (responseDos) {
                                                return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(_this6, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee5() {
                                                  var _this7 = this;

                                                  var dataDos;
                                                  return regeneratorRuntime.wrap(function _callee5$(_context5) {
                                                    while (1) {
                                                      switch (_context5.prev = _context5.next) {
                                                        case 0:
                                                          dataDos = JSON.parse(responseDos.data);
                                                          this.citasVerticalTodas = this.citasVerticalTodas.concat(dataDos); //tercera llamada

                                                          this.cita.entregaPorMesNuevoNative(this.usuarioAps.Id, this.usuarioAps.IdRyf, this.usuarioAps.NodId, mesPosterior.mes, mesPosterior.anno).then(function (responseTres) {
                                                            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(_this7, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee4() {
                                                              var _this8 = this;

                                                              var dataTres;
                                                              return regeneratorRuntime.wrap(function _callee4$(_context4) {
                                                                while (1) {
                                                                  switch (_context4.prev = _context4.next) {
                                                                    case 0:
                                                                      dataTres = JSON.parse(responseTres.data);
                                                                      this.citasVerticalTodas = this.citasVerticalTodas.concat(dataTres); //aca procesamos

                                                                      this.procesarArregloCitasTodas();
                                                                      this.citasVerticalMostrar = this.citasVerticalTodas.filter(function (e) {
                                                                        return e.Mostrar == true;
                                                                      }); //ahora que tenemos las citas que queremos mostrar
                                                                      //ordenamos

                                                                      this.citasVerticalMostrar.sort(function (a, b) {
                                                                        return _this8.getTime(b.FechaCompleta) - _this8.getTime(a.FechaCompleta);
                                                                      }); //guardamos la variable de ordenamiento

                                                                      sessionStorage.setItem('ORDEN_EVENTOS', 'descendente'); //creamos top limit al nuevo arreglo de citas

                                                                      this.citasVerticalTodasTop = this.citasVerticalMostrar.slice(0, this.topLimit);
                                                                      console.log(this.citasVerticalTodasTop);
                                                                      loader.dismiss();

                                                                    case 9:
                                                                    case "end":
                                                                      return _context4.stop();
                                                                  }
                                                                }
                                                              }, _callee4, this);
                                                            }));
                                                          });

                                                        case 3:
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
                                }

                              case 1:
                              case "end":
                                return _context7.stop();
                            }
                          }
                        }, _callee7, this);
                      }));
                    });

                  case 13:
                  case "end":
                    return _context8.stop();
                }
              }
            }, _callee8, this);
          }));
        }
      }, {
        key: "logout",
        value: function logout() {
          this.acceso.logout();
          this.navCtrl.navigateRoot('nuevo-login');
        }
      }, {
        key: "mesSelected",
        value: function mesSelected(item) {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee10() {
            var _this9 = this;

            var arr, mes, anno, loader;
            return regeneratorRuntime.wrap(function _callee10$(_context10) {
              while (1) {
                switch (_context10.prev = _context10.next) {
                  case 0:
                    //realizar la llamada para cargar los eventos del mes
                    console.log(item.detail.value);
                    arr = item.detail.value.split(',');

                    if (!arr) {
                      _context10.next = 12;
                      break;
                    }

                    if (!(arr.length == 2)) {
                      _context10.next = 12;
                      break;
                    }

                    mes = arr[0];
                    anno = arr[1]; // setear this.mesActualSeleccionado al mes seleccionado de lo contrario simpre sera el mes actual
                    //this.mesActualSeleccionado = mes;

                    this.mesActualSeleccionado = item.detail.value;
                    _context10.next = 9;
                    return this.loading.create({
                      message: 'Obteniendo...<br>Información del usuario',
                      duration: 20000
                    });

                  case 9:
                    loader = _context10.sent;
                    _context10.next = 12;
                    return loader.present().then(function () {
                      return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(_this9, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee9() {
                        return regeneratorRuntime.wrap(function _callee9$(_context9) {
                          while (1) {
                            switch (_context9.prev = _context9.next) {
                              case 0:
                                if (!this.utiles.isAppOnDevice()) {
                                  //llamada web
                                  //this.cargarDatosWeb(mes, anno, loader);
                                  this.cargarDatosWebN(mes, anno, loader);
                                } else {
                                  //llamada nativa
                                  this.cargarDatosNativeN(mes, anno, loader);
                                }

                              case 1:
                              case "end":
                                return _context9.stop();
                            }
                          }
                        }, _callee9, this);
                      }));
                    });

                  case 12:
                  case "end":
                    return _context10.stop();
                }
              }
            }, _callee10, this);
          }));
        }
      }, {
        key: "procesarArregloCitas",
        value: function procesarArregloCitas() {
          var contador = 0;

          for (var s in this.citasVertical) {
            for (var t in this.citasVertical[s].Eventos) {
              var fechaHora = this.citasVertical[s].Eventos[t].DetalleEventoMes.FechaHora;
              var fechaEvento = moment__WEBPACK_IMPORTED_MODULE_9__(fechaHora, 'YYYY-MM-DD').toDate();
              var fechaHoy = moment__WEBPACK_IMPORTED_MODULE_9__().toDate();
              console.log('Evento: ' + fechaEvento);
              console.log('Hoy:' + fechaHoy);
              contador++;

              if (this.citasVertical[s].Eventos[t]) {
                if (this.citasVertical[s].Eventos[t].DetalleEventoMes.Subtitulo == 'Próxima Cita') {
                  this.citasVertical[s].Eventos[t].Imagen = 'agendar_citas_p.png';
                  this.citasVertical[s].Eventos[t].DetalleEventoMes.Titulo = 'Cita programada';
                }

                if (this.citasVertical[s].Eventos[t].DetalleEventoMes.Subtitulo == 'Próxima Cita Web') {
                  this.citasVertical[s].Eventos[t].Imagen = 'agendar_citas_p.png';
                  this.citasVertical[s].Eventos[t].DetalleEventoMes.Titulo = 'Cita programada web';
                }

                if (this.citasVertical[s].Eventos[t].DetalleEventoMes.Subtitulo == 'Atención Realizada') {
                  this.citasVertical[s].Eventos[t].Imagen = 'atenciones_p.png';
                  this.citasVertical[s].Eventos[t].DetalleEventoMes.Titulo = 'Atención Realizada';
                }

                if (this.citasVertical[s].Eventos[t].DetalleEventoMes.Subtitulo == 'Fármaco en uso') {
                  this.citasVertical[s].Eventos[t].Imagen = 'retiro-de-medicamentos_p.png';
                  this.citasVertical[s].Eventos[t].DetalleEventoMes.Titulo = 'Fármaco en uso';
                }

                if (this.citasVertical[s].Eventos[t].DetalleEventoMes.Subtitulo == 'Fármaco Pendiente') {
                  this.citasVertical[s].Eventos[t].Imagen = 'retiro-de-medicamentos_p.png';
                  this.citasVertical[s].Eventos[t].DetalleEventoMes.Titulo = 'Fármaco en uso';
                }

                if (this.citasVertical[s].Eventos[t].DetalleEventoMes.Subtitulo == 'Alimento Entregado') {
                  this.citasVertical[s].Eventos[t].Imagen = 'retiro-de-alimentos_p.png';
                  this.citasVertical[s].Eventos[t].DetalleEventoMes.Titulo = 'Entrega de alimento';
                }

                if (this.citasVertical[s].Eventos[t].DetalleEventoMes.Subtitulo == 'Vacuna Administrada') {
                  this.citasVertical[s].Eventos[t].Imagen = 'vacunas_p.png';
                  this.citasVertical[s].Eventos[t].DetalleEventoMes.Titulo = 'Inmunización';
                }

                if (this.citasVertical[s].Eventos[t].DetalleEventoMes.Subtitulo == 'Vacuna por administrar') {
                  this.citasVertical[s].Eventos[t].Imagen = 'vacunas_p.png';
                  this.citasVertical[s].Eventos[t].DetalleEventoMes.Titulo = 'Vacuna';
                }
              }

              if (fechaEvento < fechaHoy && this.citasVertical[s].Eventos[t].DetalleEventoMes.Titulo == 'Entrega de alimento') {
                this.citasVertical[s].Eventos[t].DetalleEventoMes.Titulo = 'Alimento entregado';
                console.log(this.citasVertical[s].Eventos[t].DetalleEventoMes);
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
            for (var t in this.citasVerticalTodas[s].Eventos) {
              var fechaHora = this.citasVerticalTodas[s].Eventos[t].DetalleEventoMes.FechaHora;
              var fechaEvento = moment__WEBPACK_IMPORTED_MODULE_9__(fechaHora, 'YYYY-MM-DD').toDate();
              var fechaHoy = moment__WEBPACK_IMPORTED_MODULE_9__().toDate();
              console.log('Evento: ' + fechaEvento);
              console.log('Hoy:' + fechaHoy);
              contador++;

              if (this.citasVerticalTodas[s].Eventos[t]) {
                if (this.citasVerticalTodas[s].Eventos[t].DetalleEventoMes.Subtitulo == 'Próxima Cita') {
                  this.citasVerticalTodas[s].Eventos[t].Imagen = 'agendar_citas_p.png';
                  this.citasVerticalTodas[s].Eventos[t].DetalleEventoMes.Titulo = 'Cita programada';
                }

                if (this.citasVerticalTodas[s].Eventos[t].DetalleEventoMes.Subtitulo == 'Próxima Cita Web') {
                  this.citasVerticalTodas[s].Eventos[t].Imagen = 'agendar_citas_p.png';
                  this.citasVerticalTodas[s].Eventos[t].DetalleEventoMes.Titulo = 'Cita programada web';
                }

                if (this.citasVerticalTodas[s].Eventos[t].DetalleEventoMes.Subtitulo == 'Atención Realizada') {
                  this.citasVerticalTodas[s].Eventos[t].Imagen = 'atenciones_p.png';
                  this.citasVerticalTodas[s].Eventos[t].DetalleEventoMes.Titulo = 'Atención Realizada';
                }

                if (this.citasVerticalTodas[s].Eventos[t].DetalleEventoMes.Subtitulo == 'Fármaco en uso') {
                  this.citasVerticalTodas[s].Eventos[t].Imagen = 'retiro-de-medicamentos_p.png';
                  this.citasVerticalTodas[s].Eventos[t].DetalleEventoMes.Titulo = 'Fármaco en uso';
                }

                if (this.citasVerticalTodas[s].Eventos[t].DetalleEventoMes.Subtitulo == 'Fármaco Pendiente') {
                  this.citasVerticalTodas[s].Eventos[t].Imagen = 'retiro-de-medicamentos_p.png';
                  this.citasVerticalTodas[s].Eventos[t].DetalleEventoMes.Titulo = 'Fármaco en uso';
                }

                if (this.citasVerticalTodas[s].Eventos[t].DetalleEventoMes.Subtitulo == 'Alimento Entregado') {
                  this.citasVerticalTodas[s].Eventos[t].Imagen = 'retiro-de-alimentos_p.png';
                  this.citasVerticalTodas[s].Eventos[t].DetalleEventoMes.Titulo = 'Entrega de alimento';
                }

                if (this.citasVerticalTodas[s].Eventos[t].DetalleEventoMes.Subtitulo == 'Vacuna Administrada') {
                  this.citasVerticalTodas[s].Eventos[t].Imagen = 'vacunas_p.png';
                  this.citasVerticalTodas[s].Eventos[t].DetalleEventoMes.Titulo = 'Inmunización';
                }

                if (this.citasVerticalTodas[s].Eventos[t].DetalleEventoMes.Subtitulo == 'Vacuna por administrar') {
                  this.citasVerticalTodas[s].Eventos[t].Imagen = 'vacunas_p.png';
                  this.citasVerticalTodas[s].Eventos[t].DetalleEventoMes.Titulo = 'Vacuna';
                }
              }

              if (fechaEvento < fechaHoy && this.citasVerticalTodas[s].Eventos[t].DetalleEventoMes.Titulo == 'Entrega de alimento') {
                this.citasVerticalTodas[s].Eventos[t].DetalleEventoMes.Titulo = 'Alimento entregado';
                console.log(this.citasVerticalTodas[s].Eventos[t].DetalleEventoMes);
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
          }
        } //ordena los elementos de forma descende o ascendente

      }, {
        key: "ordenar",
        value: function ordenar() {
          var _this10 = this;

          if (sessionStorage.getItem('ORDEN_EVENTOS')) {
            var orden = sessionStorage.getItem('ORDEN_EVENTOS');

            if (orden == 'descendente') {
              this.citasVerticalTodasTop.sort(function (a, b) {
                return _this10.getTime(a.FechaCompleta) - _this10.getTime(b.FechaCompleta);
              });
              sessionStorage.setItem('ORDEN_EVENTOS', 'ascendente');
            } else {
              this.citasVerticalTodasTop.sort(function (a, b) {
                return _this10.getTime(b.FechaCompleta) - _this10.getTime(a.FechaCompleta);
              });
              sessionStorage.setItem('ORDEN_EVENTOS', 'descendente');
            }
          } else {
            this.citasVerticalTodasTop.sort(function (a, b) {
              return _this10.getTime(b.FechaCompleta) - _this10.getTime(a.FechaCompleta);
            });
            sessionStorage.setItem('ORDEN_EVENTOS', 'descendente');
          }
        }
      }, {
        key: "loadData",
        value: function loadData(event) {
          var _this11 = this;

          setTimeout(function () {
            //console.log('Done');
            _this11.topLimit += 5;
            _this11.citasVerticalTodasTop = _this11.citasVerticalMostrar.slice(0, _this11.topLimit);
            event.target.complete(); //aplicamos disabled si la cantidad de registros es la misma que el total

            if (_this11.citasVerticalTodasTop.length == _this11.citasVerticalMostrar.length) {
              event.target.disabled = true;
            }
          }, 500);
        }
      }, {
        key: "cargarDatosNative",
        value: function cargarDatosNative(mesConsultar, annoConsultar, loader) {
          var _this12 = this;

          //lo cambiamos para probar el nuevo metodo
          //this.cita.entregaPorMesNative(this.usuarioAps.Id, this.usuarioAps.IdRyf, this.usuarioAps.NodId, mesConsultar, annoConsultar).then(async (response: any)=>{
          this.cita.entregaPorMesNuevoNative(this.usuarioAps.Id, this.usuarioAps.IdRyf, this.usuarioAps.NodId, mesConsultar, annoConsultar).then(function (response) {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(_this12, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee12() {
              var _this13 = this;

              var loader1, fechaD, fechaInicio, diasDelMes, fechaT, fechaTermino, loaderDisp;
              return regeneratorRuntime.wrap(function _callee12$(_context12) {
                while (1) {
                  switch (_context12.prev = _context12.next) {
                    case 0:
                      //this.procesarIndicadorValor(response, loader);
                      this.citasVertical = JSON.parse(response.data);
                      this.citasVerticalMostrar = this.citasVertical.filter(function (e) {
                        return e.Mostrar == true;
                      }); //aqui procesa citasVertical

                      this.procesarArregloCitas();
                      this.estaCargando = false; //terminamos el loader

                      loader.dismiss(); //ESTA INFORMACION ES PARA LLENAR EVENTOS DEL TIPO CALENDARIO

                      if (!src_environments_environment__WEBPACK_IMPORTED_MODULE_8__["environment"].USA_CALENDARIO) {
                        _context12.next = 11;
                        break;
                      }

                      _context12.next = 8;
                      return this.loading.create({
                        message: 'Obteniendo...<br>Información del usuario',
                        duration: 20000
                      });

                    case 8:
                      loader1 = _context12.sent;
                      _context12.next = 11;
                      return loader1.present().then(function () {
                        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(_this13, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee11() {
                          return regeneratorRuntime.wrap(function _callee11$(_context11) {
                            while (1) {
                              switch (_context11.prev = _context11.next) {
                                case 0:
                                  this.cita.getDiagnosticosByUspIdNative(this.usuarioAps.Id);
                                  this.citas = this.cita.arregloGeneral;
                                  this.eventSource = this.createEventsCalendario();
                                  loader1.dismiss();
                                  this.estaCargando = false;
                                  console.log('esta cargando ' + this.estaCargando);

                                case 6:
                                case "end":
                                  return _context11.stop();
                              }
                            }
                          }, _callee11, this);
                        }));
                      });

                    case 11:
                      if (!this.utiles.entregaParametroUsaAgenda()) {
                        _context12.next = 21;
                        break;
                      }

                      //en moment hay que quitar un digito al mes
                      //var fechaInicio = moment([parseInt(annoConsultar), parseInt(mesConsultar)-1, 1]);
                      fechaD = new Date(parseInt(annoConsultar), parseInt(mesConsultar) - 1, 1, 0, 1, 0, 0);
                      fechaInicio = moment__WEBPACK_IMPORTED_MODULE_9__(fechaD);
                      diasDelMes = fechaInicio.daysInMonth();
                      fechaT = new Date(parseInt(annoConsultar), parseInt(mesConsultar) - 1, diasDelMes, 23, 59, 0, 0);
                      fechaTermino = moment__WEBPACK_IMPORTED_MODULE_9__(fechaT);
                      _context12.next = 19;
                      return this.loading.create({
                        message: 'Cargando...<br>disponibilidad',
                        duration: 20000
                      });

                    case 19:
                      loaderDisp = _context12.sent;
                      this.cita.getDisponibilidadNative(fechaInicio.format(), fechaTermino.format(), this.codigoDeis, this.runPaciente, this.serviceType, '', '', 'cita', this.nodId).then(function (response) {
                        _this13.citasIntegracion = [];
                        var respuesta = JSON.parse(response.data);

                        if (respuesta && respuesta.Mensaje) {
                          //correcto
                          if (respuesta.Mensaje.Detalle.Codigo == 'MSG_CORRECTO') {
                            //ya tiene citas tomadas, hay que enviarlo a otra pagina
                            //la de buscarcitas
                            _this13.citasIntegracion = respuesta.CitasDisponibles; //hay que reprocesar los elementos

                            if (_this13.citasIntegracion.length > 0) {
                              var nombrePaciente = _this13.usuarioAps.Nombres + ' ' + _this13.usuarioAps.ApellidoPaterno + ' ' + _this13.usuarioAps.ApellidoMaterno;

                              _this13.utiles.insertaCitasAEventos(_this13.citasIntegracion, _this13.citasVertical, nombrePaciente); //volvemos a reprocesar


                              _this13.procesarArregloCitas();
                            }
                          }
                        }

                        _this13.estaCargando = false;
                        console.log('esta cargando ' + _this13.estaCargando);
                        loaderDisp.dismiss();
                      });

                    case 21:
                    case "end":
                      return _context12.stop();
                  }
                }
              }, _callee12, this);
            }));
          });
        }
      }, {
        key: "cargarDatosNativeN",
        value: function cargarDatosNativeN(mesConsultar, annoConsultar, loader) {
          var _this14 = this;

          //lo cambiamos para probar el nuevo metodo
          //this.cita.entregaPorMesNative(this.usuarioAps.Id, this.usuarioAps.IdRyf, this.usuarioAps.NodId, mesConsultar, annoConsultar).then(async (response: any)=>{
          this.cita.entregaPorMesNuevoNative(this.usuarioAps.Id, this.usuarioAps.IdRyf, this.usuarioAps.NodId, mesConsultar, annoConsultar).then(function (response) {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(_this14, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee14() {
              var _this15 = this;

              var consultaMes;
              return regeneratorRuntime.wrap(function _callee14$(_context14) {
                while (1) {
                  switch (_context14.prev = _context14.next) {
                    case 0:
                      consultaMes = this.cita.entregaPorMesNuevoNative(this.usuarioAps.Id, this.usuarioAps.IdRyf, this.usuarioAps.NodId, mesConsultar, annoConsultar).then(function (response) {
                        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(_this15, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee13() {
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
            var _this16 = this;

            var consultaMes;
            return regeneratorRuntime.wrap(function _callee16$(_context16) {
              while (1) {
                switch (_context16.prev = _context16.next) {
                  case 0:
                    //ACA NO SE REALIZA LA CONSULTA A INETGRACIÓN PARA MOSTRAR O MEZCLAR LAS CITAS, YA QUE EL SP TRAE LA INFO DE LAS CITAS WEB
                    consultaMes = this.cita.entregaPorMesNuevo(this.usuarioAps.Id, this.usuarioAps.IdRyf, this.usuarioAps.NodId, mesConsultar, annoConsultar).subscribe(function (response) {
                      return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(_this16, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee15() {
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
        /*   pruebaProcesar(arr){
            var fechaActual = moment().format("DD-MM-YYYY");
            var fechaManana = moment().add(1, 'day').format("DD-MM-YYYY");
        
            var nuevas = arr.filter(e=> e.Mostrar == true);
            var total = nuevas.filter(e=> moment(e.FechaCompleta).format("DD-MM-YYYY") == fechaActual || moment(e.FechaCompleta).format("DD-MM-YYYY") == fechaManana);
            if (total && total.length > 0){
        
            }
        
          } */

      }, {
        key: "cargarDatosWeb",
        value: function cargarDatosWeb(mesConsultar, annoConsultar, loader) {
          var _this17 = this;

          //lo comentamos por nueva implementacion
          //this.cita.entregaPorMes(this.usuarioAps.Id, this.usuarioAps.IdRyf, this.usuarioAps.NodId, mesConsultar, annoConsultar).subscribe(async (response: any)=>{
          this.cita.entregaPorMesNuevo(this.usuarioAps.Id, this.usuarioAps.IdRyf, this.usuarioAps.NodId, mesConsultar, annoConsultar).subscribe(function (response) {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(_this17, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee18() {
              var _this18 = this;

              var loader1, fechaD, fechaInicio, diasDelMes, fechaT, fechaTermino, loaderDisp;
              return regeneratorRuntime.wrap(function _callee18$(_context18) {
                while (1) {
                  switch (_context18.prev = _context18.next) {
                    case 0:
                      //this.procesarIndicadorValor(response, loader);
                      this.citasVertical = response;
                      this.citasVerticalMostrar = this.citasVertical.filter(function (e) {
                        return e.Mostrar == true;
                      }); //aqui procesa citasVertical

                      this.procesarArregloCitas();
                      this.estaCargando = false; //terminamos el loader

                      loader.dismiss(); //ESTA INFORMACION ES PARA LLENAR EVENTOS DEL TIPO CALENDARIO

                      if (!src_environments_environment__WEBPACK_IMPORTED_MODULE_8__["environment"].USA_CALENDARIO) {
                        _context18.next = 12;
                        break;
                      }

                      this.estaCargando = true; //ahora traeremos la información adicional

                      _context18.next = 9;
                      return this.loading.create({
                        message: 'Obteniendo...<br>Información del usuario',
                        duration: 20000
                      });

                    case 9:
                      loader1 = _context18.sent;
                      _context18.next = 12;
                      return loader1.present().then(function () {
                        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(_this18, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee17() {
                          return regeneratorRuntime.wrap(function _callee17$(_context17) {
                            while (1) {
                              switch (_context17.prev = _context17.next) {
                                case 0:
                                  this.cita.getDiagnosticosByUspId(this.usuarioAps.Id);
                                  this.citas = this.cita.arregloGeneral;
                                  this.eventSource = this.createEventsCalendario();
                                  loader1.dismiss();
                                  this.estaCargando = false;
                                  console.log('esta cargando ' + this.estaCargando);

                                case 6:
                                case "end":
                                  return _context17.stop();
                              }
                            }
                          }, _callee17, this);
                        }));
                      });

                    case 12:
                      if (!this.utiles.entregaParametroUsaAgenda()) {
                        _context18.next = 23;
                        break;
                      }

                      this.estaCargando = true; //en moment hay que quitar un digito al mes
                      //var fechaInicio = moment([parseInt(annoConsultar), parseInt(mesConsultar)-1, 1]);

                      fechaD = new Date(parseInt(annoConsultar), parseInt(mesConsultar) - 1, 1, 0, 1, 0, 0);
                      fechaInicio = moment__WEBPACK_IMPORTED_MODULE_9__(fechaD);
                      diasDelMes = fechaInicio.daysInMonth();
                      fechaT = new Date(parseInt(annoConsultar), parseInt(mesConsultar) - 1, diasDelMes, 23, 59, 0, 0);
                      fechaTermino = moment__WEBPACK_IMPORTED_MODULE_9__(fechaT);
                      _context18.next = 21;
                      return this.loading.create({
                        message: 'Cargando...<br>disponibilidad',
                        duration: 20000
                      });

                    case 21:
                      loaderDisp = _context18.sent;
                      this.cita.getDisponibilidad(fechaInicio.format(), fechaTermino.format(), this.codigoDeis, this.runPaciente, this.serviceType, '', '', 'cita', this.nodId).subscribe(function (response) {
                        _this18.citasIntegracion = [];

                        if (response && response.Mensaje) {
                          //correcto
                          if (response.Mensaje.Detalle.Codigo == 'MSG_CORRECTO') {
                            //ya tiene citas tomadas, hay que enviarlo a otra pagina
                            //la de buscarcitas
                            _this18.citasIntegracion = response.CitasDisponibles; //hay que reprocesar los elementos

                            if (_this18.citasIntegracion.length > 0) {
                              var nombrePaciente = _this18.usuarioAps.Nombres + ' ' + _this18.usuarioAps.ApellidoPaterno + ' ' + _this18.usuarioAps.ApellidoMaterno;

                              _this18.utiles.insertaCitasAEventos(_this18.citasIntegracion, _this18.citasVertical, nombrePaciente); //volvemos a reprocesar


                              _this18.procesarArregloCitas();
                            }
                          }
                        }

                        _this18.estaCargando = false;
                        console.log('esta cargando ' + _this18.estaCargando);
                        loaderDisp.dismiss();
                      });

                    case 23:
                    case "end":
                      return _context18.stop();
                  }
                }
              }, _callee18, this);
            }));
          });
        }
      }, {
        key: "cargarEventosMes",
        value: function cargarEventosMes(mesConsultar, annoConsultar) {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee20() {
            var _this19 = this;

            var loader;
            return regeneratorRuntime.wrap(function _callee20$(_context20) {
              while (1) {
                switch (_context20.prev = _context20.next) {
                  case 0:
                    this.estaCargando = true;
                    _context20.next = 3;
                    return this.loading.create({
                      message: 'Obteniendo...<br>Información del usuario',
                      duration: 20000
                    });

                  case 3:
                    loader = _context20.sent;
                    _context20.next = 6;
                    return loader.present().then(function () {
                      return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(_this19, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee19() {
                        return regeneratorRuntime.wrap(function _callee19$(_context19) {
                          while (1) {
                            switch (_context19.prev = _context19.next) {
                              case 0:
                                if (!this.utiles.isAppOnDevice()) {
                                  //llamada web
                                  //this.cargarDatosWeb(mesConsultar, annoConsultar, loader);
                                  this.cargarDatosWebN(mesConsultar, annoConsultar, loader);
                                } else {
                                  //llamada nativa
                                  this.cargarDatosNativeN(mesConsultar, annoConsultar, loader);
                                }

                              case 1:
                              case "end":
                                return _context19.stop();
                            }
                          }
                        }, _callee19, this);
                      }));
                    });

                  case 6:
                  case "end":
                    return _context20.stop();
                }
              }
            }, _callee20, this);
          }));
        }
      }, {
        key: "tratamientoMeses",
        value: function tratamientoMeses() {
          this.mesesVertical = [];
          moment__WEBPACK_IMPORTED_MODULE_9__["locale"]('es-es');
          var fechaActual = moment__WEBPACK_IMPORTED_MODULE_9__();
          var fechaMenosUnMes = moment__WEBPACK_IMPORTED_MODULE_9__().subtract(1, 'month');
          var fechaMasUnMes = moment__WEBPACK_IMPORTED_MODULE_9__().add(1, 'month');
          var mesActualNumero = moment__WEBPACK_IMPORTED_MODULE_9__(fechaActual).month() + 1;
          var mesMenosUnMesNumero = moment__WEBPACK_IMPORTED_MODULE_9__(fechaMenosUnMes).month() + 1;
          var mesMasUnMesNumero = moment__WEBPACK_IMPORTED_MODULE_9__(fechaMasUnMes).month() + 1;
          var mesActualStr = moment__WEBPACK_IMPORTED_MODULE_9__(fechaActual).format("MMMM").toUpperCase();
          var mesMenosUnMesStr = moment__WEBPACK_IMPORTED_MODULE_9__(fechaMenosUnMes).format("MMMM").toUpperCase();
          var mesMasUnMesStr = moment__WEBPACK_IMPORTED_MODULE_9__(fechaMasUnMes).format("MMMM").toUpperCase();
          var annoActual = moment__WEBPACK_IMPORTED_MODULE_9__(fechaActual).format("YYYY");
          var annoMenosUnMes = moment__WEBPACK_IMPORTED_MODULE_9__(fechaMenosUnMes).format("YYYY");
          var annoMasUnMes = moment__WEBPACK_IMPORTED_MODULE_9__(fechaMasUnMes).format("YYYY"); //ahora tenemos los años, meses podemos construir el arreglo.

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
          this.mesesVertical.push(entidadMas);
          console.log(this.mesesVertical);
        }
      }, {
        key: "createEventsCalendario",
        value: function createEventsCalendario() {
          this.calendarioData = this.citas;
          console.log(this.calendarioData);
          return this.calendarioData;
        }
      }, {
        key: "goToDetalleCita",
        value: function goToDetalleCita(evento) {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee21() {
            var _this20 = this;

            var modal;
            return regeneratorRuntime.wrap(function _callee21$(_context21) {
              while (1) {
                switch (_context21.prev = _context21.next) {
                  case 0:
                    _context21.next = 2;
                    return this.modalCtrl.create({
                      component: _modal_detalle_cita_modal_detalle_cita_page__WEBPACK_IMPORTED_MODULE_10__["ModalDetalleCitaPage"],
                      componentProps: {
                        'evento': JSON.stringify(evento),
                        'usuario': JSON.stringify(this.usuarioAps)
                      }
                    });

                  case 2:
                    modal = _context21.sent;
                    modal.onDidDismiss().then(function (data) {
                      if (data.data && data.data.accion) {
                        var accion = data.data.accion; //console.log(accion);
                        //obtenemos la pagina actual
                        //actualizar

                        var annoActual = moment__WEBPACK_IMPORTED_MODULE_9__().year();
                        var mesActual = moment__WEBPACK_IMPORTED_MODULE_9__().month() + 1; //var mesActual = this.mesActualSeleccionado;
                        //console.log(mesActual);
                        //***************************** */

                        _this20.tratamientoMeses();

                        if (accion === 'booked') {
                          _this20.utiles.presentToast('Cita reservada con éxito!!', 'bottom', 3000);
                        } else if (accion === 'confirmed') {
                          _this20.utiles.presentToast('Cita confirmada con éxito!!', 'bottom', 3000);
                        } else if (accion === 'cancelled') {
                          _this20.utiles.presentToast('Cita anulada con éxito!!', 'bottom', 3000);
                        }

                        _this20.cargarTodosLosEventos(); //this.cargarEventosMes(mesActual, annoActual);

                      }
                    });
                    _context21.next = 6;
                    return modal.present();

                  case 6:
                    return _context21.abrupt("return", _context21.sent);

                  case 7:
                  case "end":
                    return _context21.stop();
                }
              }
            }, _callee21, this);
          }));
        } //para procesar citas
        //se debe buscar disponibilidad de acuerdo a la fecha que se consulta

      }, {
        key: "buscarDisponibilidad",
        value: function buscarDisponibilidad(fecha) {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee23() {
            var _this21 = this;

            var inicio, ini, termino, ter, loader;
            return regeneratorRuntime.wrap(function _callee23$(_context23) {
              while (1) {
                switch (_context23.prev = _context23.next) {
                  case 0:
                    //ACA ME FALTA CONTROLAR LOS MENSAJES
                    inicio = new Date(fecha.getFullYear(), fecha.getMonth(), fecha.getDate(), 6, 0, 0, 0);
                    ini = moment__WEBPACK_IMPORTED_MODULE_9__(inicio).format();
                    termino = new Date(fecha.getFullYear(), fecha.getMonth(), fecha.getDate(), 23, 59, 0, 0);
                    ter = moment__WEBPACK_IMPORTED_MODULE_9__(termino).format();
                    _context23.next = 6;
                    return this.loading.create({
                      message: 'Cargando...<br>disponibilidad',
                      duration: 20000
                    });

                  case 6:
                    loader = _context23.sent;
                    _context23.next = 9;
                    return loader.present().then(function () {
                      return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(_this21, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee22() {
                        var _this22 = this;

                        return regeneratorRuntime.wrap(function _callee22$(_context22) {
                          while (1) {
                            switch (_context22.prev = _context22.next) {
                              case 0:
                                if (!this.utiles.isAppOnDevice()) {
                                  //llamada web
                                  this.cita.getDisponibilidad(ini, ter, this.codigoDeis, this.runPaciente, this.serviceType, '', '', 'cita', this.nodId).subscribe(function (response) {
                                    _this22.procesarRespuesta(response, loader);
                                  });
                                } else {
                                  //llamada nativa
                                  this.cita.getDisponibilidadNative(ini, ter, this.codigoDeis, this.runPaciente, this.serviceType, '', '', 'cita', this.nodId).then(function (response) {
                                    var respuesta = JSON.parse(response.data);

                                    _this22.procesarRespuesta(respuesta, loader);
                                  });
                                }

                              case 1:
                              case "end":
                                return _context22.stop();
                            }
                          }
                        }, _callee22, this);
                      }));
                    });

                  case 9:
                  case "end":
                    return _context23.stop();
                }
              }
            }, _callee23, this);
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
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee24() {
            var _this23 = this;

            var titulo, alert;
            return regeneratorRuntime.wrap(function _callee24$(_context24) {
              while (1) {
                switch (_context24.prev = _context24.next) {
                  case 0:
                    titulo = '';
                    _context24.next = 3;
                    return this.alertController.create({
                      header: boton.Titulo,
                      message: boton.Alert,
                      buttons: [{
                        text: 'No',
                        role: 'cancel',
                        cssClass: 'danger',
                        handler: function handler(blah) {
                          console.log('Confirm Cancel: blah');
                        }
                      }, {
                        text: 'Si',
                        cssClass: 'success',
                        handler: function handler() {
                          //aca debemos realizar la operación
                          _this23.accionCita(boton, evento);
                        }
                      }]
                    });

                  case 3:
                    alert = _context24.sent;
                    _context24.next = 6;
                    return alert.present();

                  case 6:
                  case "end":
                    return _context24.stop();
                }
              }
            }, _callee24, this);
          }));
        }
      }, {
        key: "accionCita",
        value: function accionCita(boton, evento) {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee26() {
            var _this24 = this;

            var idPaciente, idCita, accion, loader;
            return regeneratorRuntime.wrap(function _callee26$(_context26) {
              while (1) {
                switch (_context26.prev = _context26.next) {
                  case 0:
                    if (!(evento.DetalleEventoMes.Estado && evento.DetalleEventoMes.Estado != '')) {
                      _context26.next = 9;
                      break;
                    }

                    idPaciente = this.usuarioAps.Rut;
                    idCita = evento.DetalleEventoMes.IdElemento;
                    accion = boton.Operacion;
                    _context26.next = 6;
                    return this.loading.create({
                      message: 'Procesado...<br>Información',
                      duration: 20000
                    });

                  case 6:
                    loader = _context26.sent;
                    _context26.next = 9;
                    return loader.present().then(function () {
                      return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(_this24, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee25() {
                        var _this25 = this;

                        var retorno;
                        return regeneratorRuntime.wrap(function _callee25$(_context25) {
                          while (1) {
                            switch (_context25.prev = _context25.next) {
                              case 0:
                                retorno = null;

                                if (!this.utiles.isAppOnDevice()) {
                                  //llamada web
                                  this.cita.getOperacionCita(idCita, idPaciente, accion).subscribe(function (response) {
                                    _this25.procesarRespuestaAgendar(response, loader, accion);
                                  });
                                } else {
                                  //llamada nativa
                                  //this.cargarDatosNative(mesConsultar, annoConsultar, loader);
                                  this.cita.getOperacionCitaNative(idCita, idPaciente, accion).then(function (responseData) {
                                    var response = JSON.parse(responseData.data);

                                    _this25.procesarRespuestaAgendar(response, loader, accion);
                                  });
                                }

                              case 2:
                              case "end":
                                return _context25.stop();
                            }
                          }
                        }, _callee25, this);
                      }));
                    });

                  case 9:
                  case "end":
                    return _context26.stop();
                }
              }
            }, _callee26, this);
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

              var annoActual = moment__WEBPACK_IMPORTED_MODULE_9__().year();
              var mesActual = moment__WEBPACK_IMPORTED_MODULE_9__().month() + 1; //var mesActual = this.mesActualSeleccionado;

              console.log(mesActual); //***************************** */

              this.tratamientoMeses();

              if (accion === 'booked') {
                this.utiles.presentToast('Cita reservada con éxito!!', 'bottom', 3000);
              } else if (accion === 'confirmed') {
                this.utiles.presentToast('Cita confirmada con éxito!!', 'bottom', 3000);
              } else if (accion === 'cancelled') {
                this.utiles.presentToast('Cita anulada con éxito!!', 'bottom', 3000);
              }

              this.cargarTodosLosEventos(); //this.cargarEventosMes(mesActual, annoActual);
            } else {
              this.utiles.presentToast(data.Mensaje.Detalle.Texto, 'middle', 2000);
            }
          } else {
            //error en la operacion
            this.utiles.presentToast('Error en la operación', 'middle', 2000);
          }

          loader.dismiss();
        } //abrir pagina de reservar hora

      }, {
        key: "openReservarHoraPage",
        value: function openReservarHoraPage() {
          this.navCtrl.navigateRoot('pre-tiposatencion');
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
          var pi = new _app_pipes_fecha_pipe__WEBPACK_IMPORTED_MODULE_11__["MomentPipe"]();
          return pi.transform(value, format);
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
      }];
    };

    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('myList', {
      read: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonItem"]
    })], CalendarioPage.prototype, "list", void 0);
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
//# sourceMappingURL=calendario-calendario-module-es5.js.map