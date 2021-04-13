(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["calendario-calendario-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/calendario/calendario.page.html":
/*!***************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/calendario/calendario.page.html ***!
  \***************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\r\n  <!-- esto lo comentamos ya que se decidió no usar color de header personalizado -->\r\n  <!-- <ion-toolbar [style.--background]=\"miColor\" mode=\"md\"> -->\r\n  <ion-toolbar color=\"primary\" mode=\"md\">\r\n    <ion-buttons slot=\"start\">\r\n      <ion-back-button defaultHref=\"/home\" class=\"fcw\"></ion-back-button>\r\n    </ion-buttons>\r\n    <ion-title class=\"fcw\">Calendario</ion-title>\r\n    <ion-buttons slot=\"end\" (click)=\"ordenar()\" style=\"padding-right: 16px;\">\r\n      <ion-icon class=\"fcw\" slot=\"icon-only\" name=\"swap-vertical\"></ion-icon>&nbsp;Ordenar\r\n    </ion-buttons>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content class=\"back-app\" style=\"--padding-bottom: 50px !important;\" #content>\r\n<app-progress [mostrar]=\"estaCargando\" [titulo]=\"tituloLoading\"></app-progress>\r\n <div *ngIf=\"!tiene\">\r\n  <div style=\"position: absolute; display: table; height: 90%; font-size: 30px; color:#BDBDBD; text-align: center;\" class=\"ion-padding\">\r\n    <p style=\"display: table-cell; vertical-align: middle\">No hay eventos para mostrar  <br>\r\n    <ion-icon name=\"information-circle\" style=\"font-size: 50px;\"></ion-icon></p>\r\n  </div>\r\n </div>\r\n \r\n <div *ngIf=\"tiene\">\r\n  \r\n  <div [hidden]=\"estaCargando\" *ngFor=\"let item of citasVerticalTodasTop\">\r\n    \r\n    <ion-grid *ngIf=\"item.Mostrar\">\r\n      <app-card-calendario [fechaActual]=\"fechaActual\" [item]=\"item\" [anioActual]=\"anioActual\"></app-card-calendario>\r\n      <ion-row class=\"ion-no-padding ion-no-margin row-card\">\r\n        <mat-card *ngFor=\"let evento of item.Eventos\" color=\"light\" style=\"margin-bottom: 8px;\" id=\"myListCard\">\r\n          <mat-card-header (click)=\"goToDetalleCita(evento)\">\r\n            \r\n              <mat-card-subtitle class=\"hora\">{{evento.HoraInicioFin}}</mat-card-subtitle>\r\n              <mat-card-title>{{evento.DetalleEventoMes.Titulo}}</mat-card-title>\r\n              <mat-card-subtitle class=\"ion-text-capitalize\">{{evento.DetalleEventoMes.NombrePaciente.toLowerCase()}}</mat-card-subtitle>\r\n            \r\n            <div class=\"img-card\">\r\n              <img class=\"example-header-image\" src=\"./assets/img/{{evento.Imagen}}\">\r\n            </div>\r\n          </mat-card-header>\r\n          <mat-card-actions *ngIf=\"revisaEstado(evento)\">\r\n            <button color=\"primary\" mat-button *ngIf=\"revisarCita(evento, 'Anular')[1]\" (click)=\"presentAlertConfirm(botonCancelar, evento)\">ANULAR</button>\r\n            <button color=\"primary\" mat-button *ngIf=\"revisarCita(evento, 'Confirmar')[0]\" (click)=\"presentAlertConfirm(botonConfirmar, evento)\">CONFIRMAR</button>\r\n          </mat-card-actions>\r\n        </mat-card>\r\n      </ion-row>\r\n      <hr *ngIf=\"transformDate(item.FechaCompleta, 'YYYY-MM-DD') == fechaActual\">\r\n    </ion-grid>\r\n  </div>\r\n  <!-- pruebas con infinite scroll -->\r\n  <ion-infinite-scroll threshold=\"100px\" (ionInfinite)=\"loadData($event)\">\r\n    <ion-infinite-scroll-content loadingSpinner=\"bubbles\" loadingText=\"Cargando más eventos...\">\r\n    </ion-infinite-scroll-content>\r\n  </ion-infinite-scroll>\r\n </div>\r\n</ion-content>\r\n<!-- este es el fab para abrir reservar horas -->\r\n<ion-fab vertical=\"bottom\" horizontal=\"end\" slot=\"fixed\" [hidden]=\"estaCargando\">\r\n  <ion-button color=\"secondary\" (click)=\"openReservarHoraPage()\" shape=\"round\" style=\"--color:black;\">\r\n    <ion-icon slot=\"start\" name=\"add-outline\" class=\"botonReservar\" style=\"font-size: 16px;\"></ion-icon>\r\n    <span class=\"botonReservar\">RESERVAR HORA</span>\r\n  </ion-button>\r\n</ion-fab>\r\n");

/***/ }),

/***/ "./src/app/calendario/calendario.module.ts":
/*!*************************************************!*\
  !*** ./src/app/calendario/calendario.module.ts ***!
  \*************************************************/
/*! exports provided: CalendarioPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CalendarioPageModule", function() { return CalendarioPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _calendario_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./calendario.page */ "./src/app/calendario/calendario.page.ts");
/* harmony import */ var _directives_text_avatar_index__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../directives/text-avatar/index */ "./src/directives/text-avatar/index.ts");
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/card */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/card.js");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/button */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/button.js");
/* harmony import */ var _components_components_module__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../components/components.module */ "./src/app/components/components.module.ts");











let CalendarioPageModule = class CalendarioPageModule {
};
CalendarioPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _directives_text_avatar_index__WEBPACK_IMPORTED_MODULE_7__["TextAvatarModule"],
            _angular_material_card__WEBPACK_IMPORTED_MODULE_8__["MatCardModule"],
            _angular_material_button__WEBPACK_IMPORTED_MODULE_9__["MatButtonModule"],
            _components_components_module__WEBPACK_IMPORTED_MODULE_10__["ComponentsModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterModule"].forChild([
                {
                    path: '',
                    component: _calendario_page__WEBPACK_IMPORTED_MODULE_6__["CalendarioPage"]
                }
            ]),
        ],
        declarations: [_calendario_page__WEBPACK_IMPORTED_MODULE_6__["CalendarioPage"]]
    })
], CalendarioPageModule);



/***/ }),

/***/ "./src/app/calendario/calendario.page.scss":
/*!*************************************************!*\
  !*** ./src/app/calendario/calendario.page.scss ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("/* Set the width to the full container and center the content */\nion-select {\n  width: 100%;\n  justify-content: center;\n}\n/* Set the flex in order to size the text width to its content */\nion-select::part(placeholder),\nion-select::part(text) {\n  flex: 0 0 auto;\n}\n/* Set the placeholder color and opacity */\nion-select::part(placeholder) {\n  color: #20a08a;\n  opacity: 1;\n}\n/*\n * Set the font of the first letter of the placeholder\n * Shadow parts work with pseudo-elements, too!\n * https://developer.mozilla.org/en-US/docs/Web/CSS/Pseudo-elements\n */\nion-select::part(placeholder)::first-letter {\n  font-size: 24px;\n  font-weight: 500;\n}\n/* Set the text color */\nion-select::part(text) {\n  color: #545ca7;\n}\n/* Set the icon color and opacity */\nion-select::part(icon) {\n  color: #971e49;\n  opacity: 1;\n}\n.content-card-fav {\n  height: 58px;\n  min-height: 56px;\n}\n.ion-fav-calendar {\n  height: 48px;\n  width: 48px;\n}\n.botonReservar {\n  /*color:#000000DE;\n  font-weight: 20px;*/\n  font: normal normal medium 14px/16px Roboto;\n  letter-spacing: 1.25px;\n  color: #000000DE;\n  text-transform: uppercase;\n  opacity: 1;\n}\n/* estilos para material */\n.example-header-image {\n  background-size: cover;\n  width: 80px;\n  height: 80px;\n  -o-object-fit: cover;\n     object-fit: cover;\n}\nmat-card {\n  width: 100%;\n  max-width: 100%;\n  min-width: 100%;\n}\n::ng-dep .mat-card-header-text {\n  width: 100%;\n  margin: 0;\n}\n.hora {\n  font-size: 0.8em;\n}\n.row-card {\n  margin-left: 16px;\n  margin-right: 16px;\n}\n.img-card {\n  width: 80px;\n  float: right;\n  margin: 0;\n  padding: 0;\n  min-width: 80px;\n}\nhr {\n  margin-top: 0;\n  margin-bottom: 0;\n  border: 0;\n  height: 1px;\n  background-color: rgba(0, 0, 0, 0.12);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY2FsZW5kYXJpby9GOlxcYXBwX21pZmFtaWxpYV9naXRcXG1pRmFtaWxpYV9wcmUvc3JjXFxhcHBcXGNhbGVuZGFyaW9cXGNhbGVuZGFyaW8ucGFnZS5zY3NzIiwic3JjL2FwcC9jYWxlbmRhcmlvL2NhbGVuZGFyaW8ucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLCtEQUFBO0FBQ0E7RUFDSSxXQUFBO0VBRUEsdUJBQUE7QUNBSjtBREdFLGdFQUFBO0FBQ0E7O0VBRUUsY0FBQTtBQ0FKO0FER0UsMENBQUE7QUFDQTtFQUNFLGNBQUE7RUFDQSxVQUFBO0FDQUo7QURHRTs7OztFQUFBO0FBS0E7RUFDRSxlQUFBO0VBQ0EsZ0JBQUE7QUNBSjtBREdFLHVCQUFBO0FBQ0E7RUFDRSxjQUFBO0FDQUo7QURHRSxtQ0FBQTtBQUNBO0VBQ0UsY0FBQTtFQUNBLFVBQUE7QUNBSjtBREVFO0VBQ0UsWUFBQTtFQUNBLGdCQUFBO0FDQ0o7QURDRTtFQUNFLFlBQUE7RUFDQSxXQUFBO0FDRUo7QURBRTtFQUNFO3FCQUFBO0VBRUEsMkNBQUE7RUFDQSxzQkFBQTtFQUNBLGdCQUFBO0VBQ0EseUJBQUE7RUFDQSxVQUFBO0FDR0o7QURERSwwQkFBQTtBQUNBO0VBQ0Usc0JBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLG9CQUFBO0tBQUEsaUJBQUE7QUNJSjtBREZFO0VBQ0UsV0FBQTtFQUNBLGVBQUE7RUFDQSxlQUFBO0FDS0o7QURIRTtFQUNFLFdBQUE7RUFDQSxTQUFBO0FDTUo7QURKRTtFQUNFLGdCQUFBO0FDT0o7QURMRTtFQUNFLGlCQUFBO0VBQ0Esa0JBQUE7QUNRSjtBRE5FO0VBQ0UsV0FBQTtFQUNBLFlBQUE7RUFDQSxTQUFBO0VBQ0EsVUFBQTtFQUNBLGVBQUE7QUNTSjtBRFBFO0VBQ0UsYUFBQTtFQUNBLGdCQUFBO0VBQ0EsU0FBQTtFQUNBLFdBQUE7RUFDQSxxQ0FBQTtBQ1VKIiwiZmlsZSI6InNyYy9hcHAvY2FsZW5kYXJpby9jYWxlbmRhcmlvLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi8qIFNldCB0aGUgd2lkdGggdG8gdGhlIGZ1bGwgY29udGFpbmVyIGFuZCBjZW50ZXIgdGhlIGNvbnRlbnQgKi9cclxuaW9uLXNlbGVjdCB7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICBcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gIH1cclxuICBcclxuICAvKiBTZXQgdGhlIGZsZXggaW4gb3JkZXIgdG8gc2l6ZSB0aGUgdGV4dCB3aWR0aCB0byBpdHMgY29udGVudCAqL1xyXG4gIGlvbi1zZWxlY3Q6OnBhcnQocGxhY2Vob2xkZXIpLFxyXG4gIGlvbi1zZWxlY3Q6OnBhcnQodGV4dCkge1xyXG4gICAgZmxleDogMCAwIGF1dG87XHJcbiAgfVxyXG4gIFxyXG4gIC8qIFNldCB0aGUgcGxhY2Vob2xkZXIgY29sb3IgYW5kIG9wYWNpdHkgKi9cclxuICBpb24tc2VsZWN0OjpwYXJ0KHBsYWNlaG9sZGVyKSB7XHJcbiAgICBjb2xvcjogIzIwYTA4YTtcclxuICAgIG9wYWNpdHk6IDE7XHJcbiAgfVxyXG4gIFxyXG4gIC8qXHJcbiAgICogU2V0IHRoZSBmb250IG9mIHRoZSBmaXJzdCBsZXR0ZXIgb2YgdGhlIHBsYWNlaG9sZGVyXHJcbiAgICogU2hhZG93IHBhcnRzIHdvcmsgd2l0aCBwc2V1ZG8tZWxlbWVudHMsIHRvbyFcclxuICAgKiBodHRwczovL2RldmVsb3Blci5tb3ppbGxhLm9yZy9lbi1VUy9kb2NzL1dlYi9DU1MvUHNldWRvLWVsZW1lbnRzXHJcbiAgICovXHJcbiAgaW9uLXNlbGVjdDo6cGFydChwbGFjZWhvbGRlcik6OmZpcnN0LWxldHRlciB7XHJcbiAgICBmb250LXNpemU6IDI0cHg7XHJcbiAgICBmb250LXdlaWdodDogNTAwO1xyXG4gIH1cclxuICBcclxuICAvKiBTZXQgdGhlIHRleHQgY29sb3IgKi9cclxuICBpb24tc2VsZWN0OjpwYXJ0KHRleHQpIHtcclxuICAgIGNvbG9yOiAjNTQ1Y2E3O1xyXG4gIH1cclxuICBcclxuICAvKiBTZXQgdGhlIGljb24gY29sb3IgYW5kIG9wYWNpdHkgKi9cclxuICBpb24tc2VsZWN0OjpwYXJ0KGljb24pIHtcclxuICAgIGNvbG9yOiAjOTcxZTQ5O1xyXG4gICAgb3BhY2l0eTogMTtcclxuICB9XHJcbiAgLmNvbnRlbnQtY2FyZC1mYXZ7XHJcbiAgICBoZWlnaHQ6IDU4cHg7XHJcbiAgICBtaW4taGVpZ2h0OiA1NnB4O1xyXG4gIH1cclxuICAuaW9uLWZhdi1jYWxlbmRhcntcclxuICAgIGhlaWdodDogNDhweDtcclxuICAgIHdpZHRoOiA0OHB4O1xyXG4gIH1cclxuICAuYm90b25SZXNlcnZhcntcclxuICAgIC8qY29sb3I6IzAwMDAwMERFO1xyXG4gICAgZm9udC13ZWlnaHQ6IDIwcHg7Ki9cclxuICAgIGZvbnQ6IG5vcm1hbCBub3JtYWwgbWVkaXVtIDE0cHgvMTZweCBSb2JvdG87XHJcbiAgICBsZXR0ZXItc3BhY2luZzogMS4yNXB4O1xyXG4gICAgY29sb3I6ICMwMDAwMDBERTtcclxuICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XHJcbiAgICBvcGFjaXR5OiAxO1xyXG4gIH1cclxuICAvKiBlc3RpbG9zIHBhcmEgbWF0ZXJpYWwgKi9cclxuICAuZXhhbXBsZS1oZWFkZXItaW1hZ2Uge1xyXG4gICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcclxuICAgIHdpZHRoOiA4MHB4O1xyXG4gICAgaGVpZ2h0OiA4MHB4O1xyXG4gICAgb2JqZWN0LWZpdDogY292ZXI7XHJcbiAgfVxyXG4gIG1hdC1jYXJke1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBtYXgtd2lkdGg6IDEwMCU7XHJcbiAgICBtaW4td2lkdGg6IDEwMCU7XHJcbiAgfVxyXG4gIDo6bmctZGVwIC5tYXQtY2FyZC1oZWFkZXItdGV4dHtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgbWFyZ2luOiAwO1xyXG4gIH1cclxuICAuaG9yYXtcclxuICAgIGZvbnQtc2l6ZTogMC44ZW07XHJcbiAgfVxyXG4gIC5yb3ctY2FyZHtcclxuICAgIG1hcmdpbi1sZWZ0OiAxNnB4O1xyXG4gICAgbWFyZ2luLXJpZ2h0OiAxNnB4O1xyXG4gIH1cclxuICAuaW1nLWNhcmR7XHJcbiAgICB3aWR0aDogODBweDtcclxuICAgIGZsb2F0OiByaWdodDtcclxuICAgIG1hcmdpbjogMDtcclxuICAgIHBhZGRpbmc6IDA7XHJcbiAgICBtaW4td2lkdGg6IDgwcHg7XHJcbiAgfVxyXG4gIGhyIHtcclxuICAgIG1hcmdpbi10b3A6IDA7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAwO1xyXG4gICAgYm9yZGVyOiAwO1xyXG4gICAgaGVpZ2h0OiAxcHg7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsMCwwLC4xMik7XHJcbiAgfVxyXG4gIFxyXG4iLCIvKiBTZXQgdGhlIHdpZHRoIHRvIHRoZSBmdWxsIGNvbnRhaW5lciBhbmQgY2VudGVyIHRoZSBjb250ZW50ICovXG5pb24tc2VsZWN0IHtcbiAgd2lkdGg6IDEwMCU7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xufVxuXG4vKiBTZXQgdGhlIGZsZXggaW4gb3JkZXIgdG8gc2l6ZSB0aGUgdGV4dCB3aWR0aCB0byBpdHMgY29udGVudCAqL1xuaW9uLXNlbGVjdDo6cGFydChwbGFjZWhvbGRlciksXG5pb24tc2VsZWN0OjpwYXJ0KHRleHQpIHtcbiAgZmxleDogMCAwIGF1dG87XG59XG5cbi8qIFNldCB0aGUgcGxhY2Vob2xkZXIgY29sb3IgYW5kIG9wYWNpdHkgKi9cbmlvbi1zZWxlY3Q6OnBhcnQocGxhY2Vob2xkZXIpIHtcbiAgY29sb3I6ICMyMGEwOGE7XG4gIG9wYWNpdHk6IDE7XG59XG5cbi8qXG4gKiBTZXQgdGhlIGZvbnQgb2YgdGhlIGZpcnN0IGxldHRlciBvZiB0aGUgcGxhY2Vob2xkZXJcbiAqIFNoYWRvdyBwYXJ0cyB3b3JrIHdpdGggcHNldWRvLWVsZW1lbnRzLCB0b28hXG4gKiBodHRwczovL2RldmVsb3Blci5tb3ppbGxhLm9yZy9lbi1VUy9kb2NzL1dlYi9DU1MvUHNldWRvLWVsZW1lbnRzXG4gKi9cbmlvbi1zZWxlY3Q6OnBhcnQocGxhY2Vob2xkZXIpOjpmaXJzdC1sZXR0ZXIge1xuICBmb250LXNpemU6IDI0cHg7XG4gIGZvbnQtd2VpZ2h0OiA1MDA7XG59XG5cbi8qIFNldCB0aGUgdGV4dCBjb2xvciAqL1xuaW9uLXNlbGVjdDo6cGFydCh0ZXh0KSB7XG4gIGNvbG9yOiAjNTQ1Y2E3O1xufVxuXG4vKiBTZXQgdGhlIGljb24gY29sb3IgYW5kIG9wYWNpdHkgKi9cbmlvbi1zZWxlY3Q6OnBhcnQoaWNvbikge1xuICBjb2xvcjogIzk3MWU0OTtcbiAgb3BhY2l0eTogMTtcbn1cblxuLmNvbnRlbnQtY2FyZC1mYXYge1xuICBoZWlnaHQ6IDU4cHg7XG4gIG1pbi1oZWlnaHQ6IDU2cHg7XG59XG5cbi5pb24tZmF2LWNhbGVuZGFyIHtcbiAgaGVpZ2h0OiA0OHB4O1xuICB3aWR0aDogNDhweDtcbn1cblxuLmJvdG9uUmVzZXJ2YXIge1xuICAvKmNvbG9yOiMwMDAwMDBERTtcbiAgZm9udC13ZWlnaHQ6IDIwcHg7Ki9cbiAgZm9udDogbm9ybWFsIG5vcm1hbCBtZWRpdW0gMTRweC8xNnB4IFJvYm90bztcbiAgbGV0dGVyLXNwYWNpbmc6IDEuMjVweDtcbiAgY29sb3I6ICMwMDAwMDBERTtcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbiAgb3BhY2l0eTogMTtcbn1cblxuLyogZXN0aWxvcyBwYXJhIG1hdGVyaWFsICovXG4uZXhhbXBsZS1oZWFkZXItaW1hZ2Uge1xuICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xuICB3aWR0aDogODBweDtcbiAgaGVpZ2h0OiA4MHB4O1xuICBvYmplY3QtZml0OiBjb3Zlcjtcbn1cblxubWF0LWNhcmQge1xuICB3aWR0aDogMTAwJTtcbiAgbWF4LXdpZHRoOiAxMDAlO1xuICBtaW4td2lkdGg6IDEwMCU7XG59XG5cbjo6bmctZGVwIC5tYXQtY2FyZC1oZWFkZXItdGV4dCB7XG4gIHdpZHRoOiAxMDAlO1xuICBtYXJnaW46IDA7XG59XG5cbi5ob3JhIHtcbiAgZm9udC1zaXplOiAwLjhlbTtcbn1cblxuLnJvdy1jYXJkIHtcbiAgbWFyZ2luLWxlZnQ6IDE2cHg7XG4gIG1hcmdpbi1yaWdodDogMTZweDtcbn1cblxuLmltZy1jYXJkIHtcbiAgd2lkdGg6IDgwcHg7XG4gIGZsb2F0OiByaWdodDtcbiAgbWFyZ2luOiAwO1xuICBwYWRkaW5nOiAwO1xuICBtaW4td2lkdGg6IDgwcHg7XG59XG5cbmhyIHtcbiAgbWFyZ2luLXRvcDogMDtcbiAgbWFyZ2luLWJvdHRvbTogMDtcbiAgYm9yZGVyOiAwO1xuICBoZWlnaHQ6IDFweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAwLCAwLjEyKTtcbn0iXX0= */");

/***/ }),

/***/ "./src/app/calendario/calendario.page.ts":
/*!***********************************************!*\
  !*** ./src/app/calendario/calendario.page.ts ***!
  \***********************************************/
/*! exports provided: CalendarioPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CalendarioPage", function() { return CalendarioPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _app_services_ServicioUtiles__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../app/services/ServicioUtiles */ "./src/app/services/ServicioUtiles.ts");
/* harmony import */ var _app_services_ServicioInfoUsuario__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../app/services/ServicioInfoUsuario */ "./src/app/services/ServicioInfoUsuario.ts");
/* harmony import */ var _app_services_ServicioAcceso__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../app/services/ServicioAcceso */ "./src/app/services/ServicioAcceso.ts");
/* harmony import */ var _app_services_ServicioCitas__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../app/services/ServicioCitas */ "./src/app/services/ServicioCitas.ts");
/* harmony import */ var _app_services_ServicioParametrosApp__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../app/services/ServicioParametrosApp */ "./src/app/services/ServicioParametrosApp.ts");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! src/environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! moment */ "./node_modules/moment/moment.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _modal_detalle_cita_modal_detalle_cita_page__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../modal-detalle-cita/modal-detalle-cita.page */ "./src/app/modal-detalle-cita/modal-detalle-cita.page.ts");
/* harmony import */ var _app_pipes_fecha_pipe__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../app/pipes/fecha.pipe */ "./src/app/pipes/fecha.pipe.ts");
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/card */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/card.js");



//parametros

//SERVICIOS






//moment

//modal



let CalendarioPage = class CalendarioPage {
    constructor(navCtrl, toast, modalCtrl, platform, menu, activatedRoute, router, utiles, loading, info, acceso, cita, alertController, parametrosApp) {
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
        this.citasVerticalTodas = [];
        //datos para consultar citas
        this.runPaciente = '';
        this.codigoDeis = '';
        this.serviceType = '349';
        //para el manejo de los botones en las citas
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
        };
        //para controlar el cargando
        this.estaCargando = false;
        this.tituloLoading = '';
        //para infinity scroll
        this.topLimit = 5;
        this.citasVerticalTodasTop = [];
        //para poner la linea en la fecha actual
        this.fechaActual = '';
        this.anioActual = '';
        this.scrollTo = null;
        this.hasMin = function (attrib) {
            return (this.length && this.reduce(function (prev, curr) {
                return prev[attrib] < curr[attrib] ? prev : curr;
            })) || null;
        };
    }
    //DEBO EMPEZAR A TRABAJAR EN LA PAGINA DE DETALLE DE LOS EVENTOS,
    //OJO HAY VACUNAS CON FECHA PROXIMA 29-11-2020 Y NO VEO QUE APAREZCAN
    //CUANDO SELECCIONAS EL COMBO DE FECHA Y LUEGO VUELVES A SELECCIONAR 
    //UNA FECHA ANTERIOR POR EJEMPLO NO MUESTRA NADA
    ngOnInit() {
        moment__WEBPACK_IMPORTED_MODULE_10__().locale('es');
        this.fechaActual = this.transformDate(moment__WEBPACK_IMPORTED_MODULE_10__(), 'YYYY-MM-DD');
        this.anioActual = this.transformDate(moment__WEBPACK_IMPORTED_MODULE_10__(), 'YYYY');
        console.log(this.fechaActual);
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
        }
        //mes seleccionado
        this.mesActualSeleccionado = moment__WEBPACK_IMPORTED_MODULE_10__().month() + 1 + ',' + moment__WEBPACK_IMPORTED_MODULE_10__().year();
        //this.mesActualSeleccionado = moment().month() + 1;
        console.log('formato de mes seleccionado ===> ' + this.mesActualSeleccionado);
        //revisar estos parametros ya que estan en el otro codigo en el oninit
        let diasSemana = new Array("domingo", "lunes", "martes", "miércoles", "jueves", "viernes", "sábado");
        let meses = new Array("enero", "febrero", "marzo", "abril", "mayo", "junio", "julio", "agosto", "septiembre", "octubre", "noviembre", "diciembre");
        this.diaSem = diasSemana[new Date().getDay()];
        this.hoy = new Date().getDate();
        this.meses = meses[new Date().getMonth()];
        this.anio = new Date().getFullYear();
        //estos parametros estan en el ready
        //lamada para citas vertical
        var annoActual = moment__WEBPACK_IMPORTED_MODULE_10__().year();
        var mesActual = moment__WEBPACK_IMPORTED_MODULE_10__().month() + 1;
        //var mesActual = this.mesActualSeleccionado;
        console.log(mesActual);
        //***************************** */
        this.tratamientoMeses();
        //prueba de implementacion api management
        //this.cargarTodosLosEventosApi();
        //implementacion nueva
        if (this.parametrosApp.USA_API_MANAGEMENT()) {
            this.cargarTodosLosEventosApi();
        }
        else {
            this.cargarTodosLosEventos();
        }
    }
    getTime(date) {
        return date != null ? new Date(date).getTime() : 0;
    }
    cargarTodosLosEventosApi() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            //usar citasVerticalTodas
            this.citasVerticalTodas = [];
            this.citasVerticalMostrar = [];
            var fechaActual = moment__WEBPACK_IMPORTED_MODULE_10__();
            var mesActual = {
                mes: fechaActual.month() + 1,
                anno: fechaActual.year()
            };
            //original
            /*     let loader = await this.loading.create({
                  message: 'Obteniendo...<br>Información del usuario api',
                  duration: 20000
                }); */
            let loader = yield this.loading.create({
                cssClass: 'loading-vacio',
                showBackdrop: false,
                spinner: null,
                //message: 'Cargando...<br>tipos de atención',
                duration: 2000
            });
            this.estaCargando = true;
            this.tituloLoading = 'Obteniendo calendario';
            yield loader.present().then(() => Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
                if (!this.utiles.isAppOnDevice()) {
                    //llamada web
                    this.cita.entregaPorMesNuevoApi(this.usuarioAps.Id, this.usuarioAps.IdRyf, this.usuarioAps.NodId, mesActual.mes, mesActual.anno).subscribe((response) => Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
                        this.citasVerticalTodas = response;
                        this.procesarArregloCitasTodas();
                        this.citasVerticalMostrar = this.citasVerticalTodas.filter(e => e.Mostrar == true);
                        this.citasVerticalMostrar.sort((a, b) => { return this.getTime(b.FechaCompleta) - this.getTime(a.FechaCompleta); });
                        //guardamos la variable de ordenamiento
                        sessionStorage.setItem('ORDEN_EVENTOS', 'descendente');
                        //creamos top limit al nuevo arreglo de citas
                        this.citasVerticalTodasTop = this.citasVerticalMostrar.slice(0, this.topLimit);
                        console.log(this.citasVerticalTodasTop);
                        loader.dismiss();
                        this.estaCargando = false;
                        this.tituloLoading = '';
                        this.scrollListVisible();
                    }), error => {
                        console.log(error.message);
                        this.estaCargando = false;
                        this.tituloLoading = '';
                        loader.dismiss();
                        this.tiene = false;
                        this.utiles.presentToast('Se produjo un error al obtener la información, vuelva a intentarlo más tarde', 'bottom', 3000);
                    });
                }
                else {
                    //llamada nativa
                    this.cita.entregaPorMesNuevoApiNative(this.usuarioAps.Id, this.usuarioAps.IdRyf, this.usuarioAps.NodId, mesActual.mes, mesActual.anno).then((response) => Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
                        this.citasVerticalTodas = JSON.parse(response.data);
                        //aca procesamos
                        this.procesarArregloCitasTodas();
                        this.citasVerticalMostrar = this.citasVerticalTodas.filter(e => e.Mostrar == true);
                        //ahora que tenemos las citas que queremos mostrar
                        //ordenamos
                        this.citasVerticalMostrar.sort((a, b) => { return this.getTime(b.FechaCompleta) - this.getTime(a.FechaCompleta); });
                        //guardamos la variable de ordenamiento
                        sessionStorage.setItem('ORDEN_EVENTOS', 'descendente');
                        //creamos top limit al nuevo arreglo de citas
                        this.citasVerticalTodasTop = this.citasVerticalMostrar.slice(0, this.topLimit);
                        console.log(this.citasVerticalTodasTop);
                        loader.dismiss();
                        this.estaCargando = false;
                        this.tituloLoading = '';
                    })).catch(error => {
                        console.log(error.message);
                        this.estaCargando = false;
                        this.tituloLoading = '';
                        loader.dismiss();
                        this.tiene = false;
                        this.utiles.presentToast('Se produjo un error al obtener la información, vuelva a intentarlo más tarde', 'bottom', 3000);
                    });
                }
            }));
        });
    }
    cargarTodosLosEventos() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            //usar citasVerticalTodas
            this.citasVerticalTodas = [];
            this.citasVerticalMostrar = [];
            var fechaActual = moment__WEBPACK_IMPORTED_MODULE_10__();
            var fechaAnterior = moment__WEBPACK_IMPORTED_MODULE_10__().subtract(1, 'month');
            var fechaPosterior = moment__WEBPACK_IMPORTED_MODULE_10__().add(1, 'month');
            var mesAnterior = {
                mes: fechaAnterior.month() + 1,
                anno: fechaAnterior.year()
            };
            var mesActual = {
                mes: fechaActual.month() + 1,
                anno: fechaActual.year()
            };
            var mesPosterior = {
                mes: fechaPosterior.month() + 1,
                anno: fechaPosterior.year()
            };
            //original
            /*     let loader = await this.loading.create({
                  message: 'Obteniendo...<br>Información del usuario',
                  duration: 20000
                }); */
            let loader = yield this.loading.create({
                cssClass: 'loading-vacio',
                showBackdrop: false,
                spinner: null,
                //message: 'Cargando...<br>tipos de atención',
                duration: 2000
            });
            this.estaCargando = true;
            this.tituloLoading = 'Cargando calendario';
            yield loader.present().then(() => Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
                if (!this.utiles.isAppOnDevice()) {
                    //llamada web
                    this.cita.entregaPorMesNuevo(this.usuarioAps.Id, this.usuarioAps.IdRyf, this.usuarioAps.NodId, mesAnterior.mes, mesAnterior.anno).subscribe((response) => Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
                        this.citasVerticalTodas = response;
                        //segunda llamada
                        this.cita.entregaPorMesNuevo(this.usuarioAps.Id, this.usuarioAps.IdRyf, this.usuarioAps.NodId, mesActual.mes, mesActual.anno).subscribe((responseDos) => Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
                            this.citasVerticalTodas = this.citasVerticalTodas.concat(responseDos);
                            //tercera llamada
                            this.cita.entregaPorMesNuevo(this.usuarioAps.Id, this.usuarioAps.IdRyf, this.usuarioAps.NodId, mesPosterior.mes, mesPosterior.anno).subscribe((responseTres) => Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
                                this.citasVerticalTodas = this.citasVerticalTodas.concat(responseTres);
                                //aca procedemos a procesarlos
                                this.procesarArregloCitasTodas();
                                this.citasVerticalMostrar = this.citasVerticalTodas.filter(e => e.Mostrar == true);
                                //console.log(this.citasVerticalMostrar);
                                //ahora que tenemos las citas que queremos mostrar
                                //ordenamos
                                this.citasVerticalMostrar.sort((a, b) => { return this.getTime(b.FechaCompleta) - this.getTime(a.FechaCompleta); });
                                //guardamos la variable de ordenamiento
                                sessionStorage.setItem('ORDEN_EVENTOS', 'descendente');
                                //creamos top limit al nuevo arreglo de citas
                                this.citasVerticalTodasTop = this.citasVerticalMostrar.slice(0, this.topLimit);
                                console.log(this.citasVerticalTodasTop);
                                loader.dismiss();
                                this.estaCargando = false;
                                this.tituloLoading = '';
                            }));
                        }));
                    }));
                }
                else {
                    //llamada nativa
                    this.cita.entregaPorMesNuevoNative(this.usuarioAps.Id, this.usuarioAps.IdRyf, this.usuarioAps.NodId, mesAnterior.mes, mesAnterior.anno).then((response) => Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
                        this.citasVerticalTodas = JSON.parse(response.data);
                        //segunda llamada
                        this.cita.entregaPorMesNuevoNative(this.usuarioAps.Id, this.usuarioAps.IdRyf, this.usuarioAps.NodId, mesActual.mes, mesActual.anno).then((responseDos) => Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
                            var dataDos = JSON.parse(responseDos.data);
                            this.citasVerticalTodas = this.citasVerticalTodas.concat(dataDos);
                            //tercera llamada
                            this.cita.entregaPorMesNuevoNative(this.usuarioAps.Id, this.usuarioAps.IdRyf, this.usuarioAps.NodId, mesPosterior.mes, mesPosterior.anno).then((responseTres) => Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
                                var dataTres = JSON.parse(responseTres.data);
                                this.citasVerticalTodas = this.citasVerticalTodas.concat(dataTres);
                                //aca procesamos
                                this.procesarArregloCitasTodas();
                                this.citasVerticalMostrar = this.citasVerticalTodas.filter(e => e.Mostrar == true);
                                //ahora que tenemos las citas que queremos mostrar
                                //ordenamos
                                this.citasVerticalMostrar.sort((a, b) => { return this.getTime(b.FechaCompleta) - this.getTime(a.FechaCompleta); });
                                //guardamos la variable de ordenamiento
                                sessionStorage.setItem('ORDEN_EVENTOS', 'descendente');
                                //creamos top limit al nuevo arreglo de citas
                                this.citasVerticalTodasTop = this.citasVerticalMostrar.slice(0, this.topLimit);
                                console.log(this.citasVerticalTodasTop);
                                loader.dismiss();
                                this.estaCargando = false;
                                this.tituloLoading = '';
                            }));
                        }));
                    }));
                }
            }));
        });
    }
    logout() {
        this.acceso.logout();
        this.navCtrl.navigateRoot('nuevo-login');
    }
    procesarArregloCitas() {
        var contador = 0;
        for (var s in this.citasVertical) {
            for (var t in this.citasVertical[s].Eventos) {
                var fechaHora = (this.citasVertical[s].Eventos[t].DetalleEventoMes.FechaHora);
                var fechaEvento = moment__WEBPACK_IMPORTED_MODULE_10__(fechaHora, 'YYYY-MM-DD').toDate();
                var fechaHoy = moment__WEBPACK_IMPORTED_MODULE_10__().toDate();
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
        }
        //para determinar si tiene o no eventos
        if (contador == 0) {
            this.tiene = false;
        }
        else {
            this.tiene = true;
        }
    }
    procesarArregloCitasTodas() {
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
                var fechaHora = (this.citasVerticalTodas[s].Eventos[t].DetalleEventoMes.FechaHora);
                var fechaEvento = moment__WEBPACK_IMPORTED_MODULE_10__(fechaHora, 'YYYY-MM-DD').toDate();
                var fechaHoy = moment__WEBPACK_IMPORTED_MODULE_10__().toDate();
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
        }
        //para determinar si tiene o no eventos
        if (contador == 0) {
            this.tiene = false;
        }
        else {
            this.tiene = true;
        }
    }
    //ordena los elementos de forma descende o ascendente
    ordenar() {
        if (sessionStorage.getItem('ORDEN_EVENTOS')) {
            var orden = sessionStorage.getItem('ORDEN_EVENTOS');
            if (orden == 'descendente') {
                this.citasVerticalTodasTop.sort((a, b) => { return this.getTime(a.FechaCompleta) - this.getTime(b.FechaCompleta); });
                sessionStorage.setItem('ORDEN_EVENTOS', 'ascendente');
            }
            else {
                this.citasVerticalTodasTop.sort((a, b) => { return this.getTime(b.FechaCompleta) - this.getTime(a.FechaCompleta); });
                sessionStorage.setItem('ORDEN_EVENTOS', 'descendente');
            }
        }
        else {
            this.citasVerticalTodasTop.sort((a, b) => { return this.getTime(b.FechaCompleta) - this.getTime(a.FechaCompleta); });
            sessionStorage.setItem('ORDEN_EVENTOS', 'descendente');
        }
        this.scrollListVisible();
    }
    loadData(event) {
        setTimeout(() => {
            //console.log('Done');
            this.topLimit += 5;
            this.citasVerticalTodasTop = this.citasVerticalMostrar.slice(0, this.topLimit);
            event.target.complete();
            //aplicamos disabled si la cantidad de registros es la misma que el total
            if (this.citasVerticalTodasTop.length == this.citasVerticalMostrar.length) {
                event.target.disabled = true;
            }
        }, 500);
    }
    cargarDatosNativeN(mesConsultar, annoConsultar, loader) {
        //lo cambiamos para probar el nuevo metodo
        //this.cita.entregaPorMesNative(this.usuarioAps.Id, this.usuarioAps.IdRyf, this.usuarioAps.NodId, mesConsultar, annoConsultar).then(async (response: any)=>{
        this.cita.entregaPorMesNuevoNative(this.usuarioAps.Id, this.usuarioAps.IdRyf, this.usuarioAps.NodId, mesConsultar, annoConsultar).then((response) => Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            let consultaMes = this.cita.entregaPorMesNuevoNative(this.usuarioAps.Id, this.usuarioAps.IdRyf, this.usuarioAps.NodId, mesConsultar, annoConsultar).then((response) => Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
                this.citasVertical = JSON.parse(response.data);
                this.citasVerticalMostrar = this.citasVertical.filter(e => e.Mostrar == true);
                //aqui procesa citasVertical
                this.procesarArregloCitas();
                loader.dismiss();
            }));
        }));
    }
    cargarDatosWebN(mesConsultar, annoConsultar, loader) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            //ACA NO SE REALIZA LA CONSULTA A INETGRACIÓN PARA MOSTRAR O MEZCLAR LAS CITAS, YA QUE EL SP TRAE LA INFO DE LAS CITAS WEB
            let consultaMes = this.cita.entregaPorMesNuevo(this.usuarioAps.Id, this.usuarioAps.IdRyf, this.usuarioAps.NodId, mesConsultar, annoConsultar).subscribe((response) => Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
                this.citasVertical = response;
                this.citasVerticalMostrar = this.citasVertical.filter(e => e.Mostrar == true);
                //aqui procesa citasVertical
                this.procesarArregloCitas();
                loader.dismiss();
            }));
        });
    }
    tratamientoMeses() {
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
        var annoMasUnMes = moment__WEBPACK_IMPORTED_MODULE_10__(fechaMasUnMes).format("YYYY");
        //ahora tenemos los años, meses podemos construir el arreglo.
        var entidadActual = { mesNumero: mesActualNumero + ',' + annoActual, mesTexto: mesActualStr, anno: annoActual };
        var entidadMenos = { mesNumero: mesMenosUnMesNumero + ',' + annoMenosUnMes, mesTexto: mesMenosUnMesStr, anno: annoMenosUnMes };
        var entidadMas = { mesNumero: mesMasUnMesNumero + ',' + annoMasUnMes, mesTexto: mesMasUnMesStr, anno: annoMasUnMes };
        //agregamos los elementos al arreglo
        this.mesesVertical.push(entidadMenos);
        this.mesesVertical.push(entidadActual);
        this.mesesVertical.push(entidadMas);
        console.log(this.mesesVertical);
    }
    createEventsCalendario() {
        this.calendarioData = this.citas;
        console.log(this.calendarioData);
        return this.calendarioData;
    }
    goToDetalleCita(evento) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            //this.list.closeSlidingItems();
            //this.navCtrl.push(DetailCitasPage, {evento:evento, usuario: this.usuarioAps});
            const modal = yield this.modalCtrl.create({
                component: _modal_detalle_cita_modal_detalle_cita_page__WEBPACK_IMPORTED_MODULE_11__["ModalDetalleCitaPage"],
                componentProps: {
                    'evento': JSON.stringify(evento),
                    'usuario': JSON.stringify(this.usuarioAps)
                }
            });
            modal.onDidDismiss().then((data) => {
                if (data.data && data.data.accion) {
                    var accion = data.data.accion;
                    //console.log(accion);
                    //obtenemos la pagina actual
                    //actualizar
                    var annoActual = moment__WEBPACK_IMPORTED_MODULE_10__().year();
                    var mesActual = moment__WEBPACK_IMPORTED_MODULE_10__().month() + 1;
                    //var mesActual = this.mesActualSeleccionado;
                    //console.log(mesActual);
                    //***************************** */
                    this.tratamientoMeses();
                    if (accion === 'booked') {
                        this.utiles.presentToast('Cita reservada con éxito!!', 'bottom', 3000);
                    }
                    else if (accion === 'confirmed') {
                        this.utiles.presentToast('Cita confirmada con éxito!!', 'bottom', 3000);
                    }
                    else if (accion === 'cancelled') {
                        this.utiles.presentToast('Cita anulada con éxito!!', 'bottom', 3000);
                    }
                    if (this.parametrosApp.USA_API_MANAGEMENT()) {
                        this.cargarTodosLosEventosApi();
                    }
                    else {
                        this.cargarTodosLosEventos();
                    }
                }
            });
            return yield modal.present();
        });
    }
    procesarRespuesta(data, loader) {
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
    revisarCita(evento, tituloBoton) {
        //aca hay solo booked y confirmed
        //si está booked puede confirmar y anular
        //si está confirmed solo puede anular
        //boton confirmar, anular
        var visible = [false, false];
        if (evento.DetalleEventoMes.Estado == 'booked' && tituloBoton == 'Confirmar') {
            //si esta booked se puede confirmar
            visible = [true, true];
        }
        else if (evento.DetalleEventoMes.Estado == 'confirmed' && tituloBoton == 'Anular') {
            //si esta booked se puede confirmar
            visible = [false, true];
        }
        else if (evento.DetalleEventoMes.Estado == 'booked' && tituloBoton == 'Anular') {
            //si esta booked se puede confirmar
            visible = [true, true];
        }
        else {
            visible = [false, false];
        }
        return visible;
    }
    //manejo de citas
    presentAlertConfirm(boton, evento) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            var titulo = '';
            const alert = yield this.alertController.create({
                header: boton.Titulo,
                message: boton.Alert,
                buttons: [
                    {
                        text: 'No',
                        role: 'cancel',
                        cssClass: 'danger',
                        handler: (blah) => {
                            console.log('Confirm Cancel: blah');
                        }
                    }, {
                        text: 'Si',
                        cssClass: 'success',
                        handler: () => {
                            //aca debemos realizar la operación
                            this.accionCita(boton, evento);
                        }
                    }
                ]
            });
            yield alert.present();
        });
    }
    accionCita(boton, evento) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            if (evento.DetalleEventoMes.Estado && evento.DetalleEventoMes.Estado != '') {
                //aca buscamos al paciente por el nombre
                let usuarioCita = this.utiles.entregaUsuarioNombre(evento.DetalleEventoMes.NombrePaciente);
                //var idPaciente = this.usuarioAps.Rut;
                var idPaciente = usuarioCita.Rut;
                var idCita = evento.DetalleEventoMes.IdElemento;
                var accion = boton.Operacion;
                //original
                /*       let loader = await this.loading.create({
                        message: 'Procesado...<br>Información',
                        duration: 20000
                      }); */
                let loader = yield this.loading.create({
                    cssClass: 'loading-vacio',
                    showBackdrop: false,
                    spinner: null,
                    duration: 2000
                });
                this.estaCargando = true;
                this.tituloLoading = 'Obteniendo respuesta';
                yield loader.present().then(() => Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
                    var retorno = null;
                    if (!this.utiles.isAppOnDevice()) {
                        //llamada web
                        this.cita.getOperacionCita(idCita, idPaciente, accion).subscribe((response) => {
                            this.procesarRespuestaAgendar(response, loader, accion);
                        });
                    }
                    else {
                        //llamada nativa
                        this.cita.getOperacionCitaNative(idCita, idPaciente, accion).then((responseData) => {
                            var response = JSON.parse(responseData.data);
                            this.procesarRespuestaAgendar(response, loader, accion);
                        });
                    }
                }));
            }
        });
    }
    procesarRespuestaAgendar(data, loader, accion) {
        var retorno = null;
        if (data && data.Mensaje) {
            if (data.Mensaje.Codigo == 'correcto') {
                //todo bien
                //this.utiles.presentToast('Operación realizada con éxito', 'middle', 2000);
                retorno = data;
                //actualizar la pagina
                var annoActual = moment__WEBPACK_IMPORTED_MODULE_10__().year();
                var mesActual = moment__WEBPACK_IMPORTED_MODULE_10__().month() + 1;
                //var mesActual = this.mesActualSeleccionado;
                console.log(mesActual);
                //***************************** */
                this.tratamientoMeses();
                this.estaCargando = false;
                this.tituloLoading = '';
                if (accion === 'booked') {
                    this.utiles.presentToast('Cita reservada con éxito!!', 'bottom', 3000);
                }
                else if (accion === 'confirmed') {
                    this.utiles.presentToast('Cita confirmada con éxito!!', 'bottom', 3000);
                }
                else if (accion === 'cancelled') {
                    //si la cita es cnacelada hay que quitarla de notificaciones locales
                    //obtenemos el id dde la cita
                    if (data.CitasDisponibles && data.CitasDisponibles.length == 1) {
                        let idCita = data.CitasDisponibles[0].IdCita;
                        this.utiles.removeCitaNotificacionesLocales(idCita);
                    }
                    this.utiles.presentToast('Cita anulada con éxito!!', 'bottom', 3000);
                }
                if (this.parametrosApp.USA_API_MANAGEMENT()) {
                    this.cargarTodosLosEventosApi();
                }
                else {
                    this.cargarTodosLosEventos();
                }
            }
            else {
                this.estaCargando = false;
                this.tituloLoading = '';
                this.utiles.presentToast(data.Mensaje.Detalle.Texto, 'middle', 2000);
            }
        }
        else {
            //error en la operacion
            this.estaCargando = false;
            this.tituloLoading = '';
            this.utiles.presentToast('Error en la operación', 'middle', 2000);
        }
        loader.dismiss();
    }
    //abrir pagina de reservar hora
    openReservarHoraPage() {
        var tieneFamilia = this.utiles.tieneFamilia();
        //si tiene familia hay que enviarlo a la pagina de los miembros de la familia
        if (tieneFamilia) {
            this.navCtrl.navigateRoot('seleccion-usuario');
        }
        else {
            //si no tiene hay que enviarlo a buscar disponibilidad directo
            //pasando id
            const navigationExtras = {
                queryParams: {
                    Id: this.usuarioAps.Id
                }
            };
            this.navCtrl.navigateRoot(['pre-tiposatencion'], navigationExtras);
        }
    }
    revisaEstado(item) {
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
    transformDate(value, format) {
        var pi = new _app_pipes_fecha_pipe__WEBPACK_IMPORTED_MODULE_12__["MomentPipe"]();
        return pi.transform(value, format);
    }
    determinaFechaMasCercana() {
        var fechaActual = moment__WEBPACK_IMPORTED_MODULE_10__();
        if (this.citasVerticalTodasTop && this.citasVerticalTodasTop.length > 0) {
            for (var i = 0; i < this.citasVerticalTodasTop.length; i++) {
                var fechaEvento = moment__WEBPACK_IMPORTED_MODULE_10__(this.citasVerticalTodasTop[i].FechaCompleta);
                var dif = fechaActual.diff(fechaEvento);
                if (dif < 0) {
                    dif = dif * -1;
                }
                this.citasVerticalTodasTop[i].DiferenciaFechas = dif;
                /*         console.log(dif);
                        console.log(this.citasVerticalTodasTop[i]); */
            }
        }
    }
    finder(cmp, arr, attr) {
        var val = arr[0][attr];
        for (var i = 1; i < arr.length; i++) {
            val = cmp(val, arr[i][attr]);
        }
        return val;
    }
    scrollListVisible() {
        //this.determinaFechaMasCercana();
        setTimeout(() => {
            var min = this.finder(Math.min, this.citasVerticalTodasTop, 'DiferenciaFechas');
            if (min) {
                var entidad = this.citasVerticalTodasTop.filter(p => p.DiferenciaFechas == min)[0];
                if (entidad) {
                    //var elemento = this.min();
                    console.log(min);
                    console.log(entidad);
                    let yOffset = document.getElementById(entidad.DiferenciaFechas.toString()).offsetTop;
                    if (yOffset != null) {
                        this.content.scrollToPoint(0, yOffset, 600);
                    }
                }
            }
        }, 1000);
    }
};
CalendarioPage.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ToastController"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ModalController"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["Platform"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["MenuController"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] },
    { type: _app_services_ServicioUtiles__WEBPACK_IMPORTED_MODULE_4__["ServicioUtiles"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["LoadingController"] },
    { type: _app_services_ServicioInfoUsuario__WEBPACK_IMPORTED_MODULE_5__["ServicioInfoUsuario"] },
    { type: _app_services_ServicioAcceso__WEBPACK_IMPORTED_MODULE_6__["ServicioAcceso"] },
    { type: _app_services_ServicioCitas__WEBPACK_IMPORTED_MODULE_7__["ServicioCitas"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["AlertController"] },
    { type: _app_services_ServicioParametrosApp__WEBPACK_IMPORTED_MODULE_8__["ServicioParametrosApp"] }
];
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('myList', { read: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonItem"] })
], CalendarioPage.prototype, "list", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('myListCard', { read: _angular_material_card__WEBPACK_IMPORTED_MODULE_13__["MatCard"] })
], CalendarioPage.prototype, "listCarda", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('content', { static: true })
], CalendarioPage.prototype, "content", void 0);
CalendarioPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-calendario',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./calendario.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/calendario/calendario.page.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./calendario.page.scss */ "./src/app/calendario/calendario.page.scss")).default]
    })
], CalendarioPage);



/***/ })

}]);
//# sourceMappingURL=calendario-calendario-module-es2015.js.map