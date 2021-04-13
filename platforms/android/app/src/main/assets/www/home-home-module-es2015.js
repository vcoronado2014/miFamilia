(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["home-home-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/home/home.page.html":
/*!***************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/home/home.page.html ***!
  \***************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-menu side=\"start\" menuId=\"first\" contentId=\"content\">\r\n  <ion-header>\r\n    <!-- <ion-toolbar [style.--background]=\"miColor\"> -->\r\n    <ion-toolbar color=\"primary\">\r\n      <!-- <ion-title class=\"fcw\">Menu</ion-title> -->\r\n    </ion-toolbar>\r\n  </ion-header>\r\n  <ion-content class=\"back-app\">\r\n    <!-- menu avatar -->\r\n    <ion-item lines=\"none\">\r\n      <ion-avatar slot=\"start\">\r\n        <img *ngIf = \"miImagen != ''\" src={{miImagen}}>\r\n        <img *ngIf = \"miImagen == ''\" src=\"../assets/img/no-imagen.jpg\">\r\n      </ion-avatar>\r\n      <ion-row>\r\n        <h3 class=\"text-avatar\">{{miNombre}}</h3>\r\n        <p class=\"subtext-avatar\">{{miInstitucion}}</p>\r\n        <!-- EDITAR MI PROPIO REGISTRO -->\r\n<!--         <ion-item button lines=\"none\" (click)=\"abrirEditar()\" style=\"--padding-start: 0;\">\r\n          <ion-label>\r\n            Editar mi registro\r\n          </ion-label>\r\n          <ion-icon name=\"create-outline\" slot=\"end\"></ion-icon>\r\n        </ion-item> -->\r\n      </ion-row>\r\n    </ion-item>\r\n    <ion-list>\r\n      <ion-item *ngFor=\"let p of pages\" (click)=\"openPage(p)\" button lines=\"none\">\r\n        <ion-icon name={{p.icon}} slot=\"start\"></ion-icon>\r\n        <ion-label>\r\n          {{p.title}}\r\n        </ion-label>\r\n      </ion-item>\r\n      <!-- ajustes de la cuenta -->\r\n      <ion-item button lines=\"none\" (click)=\"abrirEditar()\">\r\n        <ion-icon name=\"heart\" slot=\"start\"></ion-icon>\r\n        <ion-label>\r\n          Ajustes de la cuenta\r\n        </ion-label>\r\n      </ion-item>\r\n      <!-- cerrar sesión -->\r\n      <ion-item button lines=\"none\" (click)=\"logout()\">\r\n        <ion-icon name=\"close\" slot=\"start\"></ion-icon>\r\n        <ion-label>\r\n          Cerrar sesión\r\n        </ion-label>\r\n      </ion-item>\r\n\r\n    </ion-list>\r\n\r\n  </ion-content>\r\n</ion-menu>\r\n\r\n<ion-header>\r\n  <!-- <ion-toolbar [style.--background]=\"miColor\"> -->\r\n  <ion-toolbar color=\"primary\">\r\n    <ion-buttons slot=\"start\">\r\n      <ion-menu-button class=\"home\"></ion-menu-button>\r\n    </ion-buttons>\r\n    <ion-title class=\"home\">Mi salud familiar</ion-title>\r\n    <!-- icono de notificaciones -->\r\n    <ion-buttons slot=\"end\"  style=\"padding-right: 16px;\" [hidden]=\"estaCargandoNotificaciones == false\">\r\n      <ion-spinner color=\"light\"></ion-spinner>\r\n    </ion-buttons>\r\n    <ion-buttons slot=\"end\"  style=\"padding-right: 16px;\" [hidden]=\"estaCargandoNotificaciones && notificaciones.length == 0\" (click)=\"mostrarNotificaciones(true)\">\r\n      <ion-icon class=\"fcw\" slot=\"icon-only\" name=\"notifications\"></ion-icon>\r\n      <ion-badge slot=\"end\" color=\"danger\" class=\"badge-notificaciones\">{{notificaciones.length}}</ion-badge>\r\n    </ion-buttons>\r\n  </ion-toolbar>\r\n</ion-header>\r\n<ion-content class=\"card-background-page-home back-app\" id=\"content\">\r\n  <!-- notificaciones -->\r\n  <!-- <ion-row [hidden]=\"muestraNotificaciones == false\"> -->\r\n    <ion-slides [hidden]=\"muestraNotificaciones == false\" pager=\"true\" [options]=\"slideOpts\" #mySlider class=\"slides-back ion-padding\">\r\n      <ion-slide *ngFor=\"let info of notificaciones\" style=\"margin:5px;\">\r\n        <div class=\"slide\">\r\n          <h5 class=\"titulo-slide\">{{info.Titulo}}</h5>\r\n          <h6 class=\"titulo-slide\">{{info.Subtitulo}}</h6>\r\n          <p class=\"subtitulo-slide\">{{info.Contenido}}</p>\r\n          <button mat-raised-button color=\"accent\" class=\"boton\" (click)=\"moverSlide(info.Indice)\">SIGUIENTE</button>\r\n        </div>\r\n      </ion-slide>\r\n    </ion-slides>\r\n  <!-- </ion-row> -->\r\n  <!-- card antecedentes -->\r\n  <ion-grid>\r\n<!--     <ion-row>\r\n      <label class=\"text-seleccione\">Seleccione una de las siguientes opciones</label>\r\n    </ion-row> -->\r\n    <app-progress [mostrar]=\"estaCargando\" titulo=\"Buscando preferencias\"></app-progress>\r\n\r\n    <ion-row [hidden]=\"estaCargando\" class=\"ion-padding-top\">\r\n      <ion-col size=\"6\" *ngFor=\"let modulo of itemsMenu\">\r\n        <app-item-home [modulo]=\"modulo.NombreModulo\" [classImagen]=\"modulo.ClaseImagen\" [rutaImagen]=\"modulo.Imagen\"></app-item-home>\r\n      </ion-col>\r\n        <!--\r\n        <ion-col size=\"6\">\r\n          <mat-card style=\"padding: 0;\" (click)=\"openAntePage()\">\r\n          <img class=\"imgs-home\" src=\"./assets/imgs_nuevas/antecedentes.png\">\r\n          <mat-card-header style=\"padding-left: 16px;\">\r\n              <mat-card-title style=\"padding-top: 16px;\">Antecedentes</mat-card-title>\r\n          </mat-card-header>\r\n        </mat-card>\r\n      </ion-col> -->\r\n      <!-- card exámenes -->\r\n<!--       <ion-col size=\"6\">\r\n        <mat-card style=\"padding: 0;\" (click)=\"openOrdenesPage()\">\r\n          <img class=\"imgs-home\" src=\"./assets/imgs_nuevas/examenes-de-salud.png\">\r\n          <mat-card-header style=\"padding-left: 16px;\">\r\n              <mat-card-title style=\"padding-top: 16px;\">Exámenes</mat-card-title>\r\n          </mat-card-header>\r\n        </mat-card>\r\n      </ion-col> -->\r\n      <!-- card calendario -->\r\n<!--       <ion-col size=\"6\">\r\n        <mat-card style=\"padding: 0;\" (click)=\"openCalendarioPage()\">\r\n          <img class=\"imgs-home\" src=\"./assets/imgs_nuevas/calendario-01.png\">\r\n          <mat-card-header style=\"padding-left: 16px;\">\r\n              <mat-card-title style=\"padding-top: 16px;\">Calendario</mat-card-title>\r\n          </mat-card-header>\r\n        </mat-card>\r\n      </ion-col> -->\r\n    </ion-row>\r\n  </ion-grid>\r\n</ion-content>");

/***/ }),

/***/ "./src/app/home/home.module.ts":
/*!*************************************!*\
  !*** ./src/app/home/home.module.ts ***!
  \*************************************/
/*! exports provided: HomePageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomePageModule", function() { return HomePageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _home_page__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./home.page */ "./src/app/home/home.page.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/card */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/card.js");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/button */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/button.js");
/* harmony import */ var _components_components_module__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../components/components.module */ "./src/app/components/components.module.ts");










let HomePageModule = class HomePageModule {
};
HomePageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonicModule"],
            _angular_material_card__WEBPACK_IMPORTED_MODULE_7__["MatCardModule"],
            _angular_material_button__WEBPACK_IMPORTED_MODULE_8__["MatButtonModule"],
            _components_components_module__WEBPACK_IMPORTED_MODULE_9__["ComponentsModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_6__["RouterModule"].forChild([
                {
                    path: '',
                    component: _home_page__WEBPACK_IMPORTED_MODULE_5__["HomePage"]
                }
            ])
        ],
        declarations: [_home_page__WEBPACK_IMPORTED_MODULE_5__["HomePage"]]
    })
], HomePageModule);



/***/ }),

/***/ "./src/app/home/home.page.scss":
/*!*************************************!*\
  !*** ./src/app/home/home.page.scss ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("#container {\n  text-align: center;\n  position: absolute;\n  left: 0;\n  right: 0;\n  top: 50%;\n  transform: translateY(-50%);\n}\n\n#container strong {\n  font-size: 20px;\n  line-height: 26px;\n}\n\n#container p {\n  font-size: 16px;\n  line-height: 22px;\n  color: #8c8c8c;\n  margin: 0;\n}\n\n#container a {\n  text-decoration: none;\n}\n\n.reservar {\n  margin-top: -70px;\n  float: right;\n  margin-right: 20px;\n  --background: var(--ion-color-primary);\n  color: white;\n  padding: 20px;\n  font-size: 1.2em;\n}\n\n.footer {\n  width: 100%;\n  position: fixed;\n  left: 0;\n  bottom: 0;\n  text-align: end;\n}\n\n/* elementos del menu */\n\n.text-avatar {\n  font-family: \"Roboto\";\n  letter-spacing: 0.15px;\n  color: #000000DE;\n  font-size: 1.25em;\n  margin-bottom: 0;\n}\n\n.subtext-avatar {\n  font-family: \"Roboto\";\n  letter-spacing: 0.25px;\n  color: #00000099;\n  font-size: 0.875em;\n  margin-bottom: 0;\n}\n\n.badge-notificaciones {\n  --padding-top: 3px;\n  --padding-end: 4px;\n  --padding-bottom: 4px;\n  --padding-start: 4px;\n  border-radius: 16px;\n  position: absolute;\n  top: -10px;\n  left: 10px;\n}\n\n.slides-back {\n  background: #5133A5;\n  text-align: left;\n}\n\n.titulo-slide {\n  color: #F4F2FA;\n  font-size: 1em;\n  text-align: left;\n}\n\n.subtitulo-slide {\n  color: #AFA0D5;\n  text-align: left;\n}\n\n.boton {\n  float: right;\n}\n\n.swiper-pagination-bullet-active {\n  background: white;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaG9tZS9GOlxcYXBwX21pZmFtaWxpYV9naXRcXG1pRmFtaWxpYV9wcmUvc3JjXFxhcHBcXGhvbWVcXGhvbWUucGFnZS5zY3NzIiwic3JjL2FwcC9ob21lL2hvbWUucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0Usa0JBQUE7RUFFQSxrQkFBQTtFQUNBLE9BQUE7RUFDQSxRQUFBO0VBQ0EsUUFBQTtFQUNBLDJCQUFBO0FDQUY7O0FER0E7RUFDRSxlQUFBO0VBQ0EsaUJBQUE7QUNBRjs7QURHQTtFQUNFLGVBQUE7RUFDQSxpQkFBQTtFQUVBLGNBQUE7RUFFQSxTQUFBO0FDRkY7O0FES0E7RUFDRSxxQkFBQTtBQ0ZGOztBRElBO0VBQ0UsaUJBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7RUFDQSxzQ0FBQTtFQUNBLFlBQUE7RUFDQSxhQUFBO0VBQ0EsZ0JBQUE7QUNERjs7QURHQTtFQUNFLFdBQUE7RUFDQSxlQUFBO0VBQ0EsT0FBQTtFQUNBLFNBQUE7RUFDQSxlQUFBO0FDQUY7O0FERUEsdUJBQUE7O0FBQ0E7RUFDRSxxQkFBQTtFQUNBLHNCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxpQkFBQTtFQUNBLGdCQUFBO0FDQ0Y7O0FEQ0E7RUFDRSxxQkFBQTtFQUNBLHNCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxrQkFBQTtFQUNBLGdCQUFBO0FDRUY7O0FEQUE7RUFDRSxrQkFBQTtFQUNBLGtCQUFBO0VBQ0EscUJBQUE7RUFDQSxvQkFBQTtFQUNBLG1CQUFBO0VBQ0Esa0JBQUE7RUFDQSxVQUFBO0VBQ0EsVUFBQTtBQ0dGOztBRERBO0VBQ0UsbUJBQUE7RUFDQSxnQkFBQTtBQ0lGOztBREZBO0VBQ0UsY0FBQTtFQUNBLGNBQUE7RUFDQSxnQkFBQTtBQ0tGOztBREhBO0VBQ0UsY0FBQTtFQUNBLGdCQUFBO0FDTUY7O0FESkE7RUFDRSxZQUFBO0FDT0Y7O0FETEE7RUFDRSxpQkFBQTtBQ1FGIiwiZmlsZSI6InNyYy9hcHAvaG9tZS9ob21lLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIiNjb250YWluZXIge1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuXHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIGxlZnQ6IDA7XHJcbiAgcmlnaHQ6IDA7XHJcbiAgdG9wOiA1MCU7XHJcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC01MCUpO1xyXG59XHJcblxyXG4jY29udGFpbmVyIHN0cm9uZyB7XHJcbiAgZm9udC1zaXplOiAyMHB4O1xyXG4gIGxpbmUtaGVpZ2h0OiAyNnB4O1xyXG59XHJcblxyXG4jY29udGFpbmVyIHAge1xyXG4gIGZvbnQtc2l6ZTogMTZweDtcclxuICBsaW5lLWhlaWdodDogMjJweDtcclxuXHJcbiAgY29sb3I6ICM4YzhjOGM7XHJcblxyXG4gIG1hcmdpbjogMDtcclxufVxyXG5cclxuI2NvbnRhaW5lciBhIHtcclxuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbn1cclxuLnJlc2VydmFye1xyXG4gIG1hcmdpbi10b3A6IC03MHB4O1xyXG4gIGZsb2F0OiByaWdodDtcclxuICBtYXJnaW4tcmlnaHQ6IDIwcHg7XHJcbiAgLS1iYWNrZ3JvdW5kOiB2YXIoLS1pb24tY29sb3ItcHJpbWFyeSk7XHJcbiAgY29sb3I6IHdoaXRlO1xyXG4gIHBhZGRpbmc6IDIwcHg7XHJcbiAgZm9udC1zaXplOiAxLjJlbTtcclxufVxyXG4uZm9vdGVyIHtcclxuICB3aWR0aDogMTAwJTtcclxuICBwb3NpdGlvbjogZml4ZWQ7XHJcbiAgbGVmdDogMDtcclxuICBib3R0b206IDA7XHJcbiAgdGV4dC1hbGlnbjogZW5kOztcclxufVxyXG4vKiBlbGVtZW50b3MgZGVsIG1lbnUgKi9cclxuLnRleHQtYXZhdGFye1xyXG4gIGZvbnQtZmFtaWx5OiAnUm9ib3RvJztcclxuICBsZXR0ZXItc3BhY2luZzogMC4xNXB4O1xyXG4gIGNvbG9yOiAjMDAwMDAwREU7XHJcbiAgZm9udC1zaXplOiAxLjI1ZW07XHJcbiAgbWFyZ2luLWJvdHRvbTogMDtcclxufVxyXG4uc3VidGV4dC1hdmF0YXJ7XHJcbiAgZm9udC1mYW1pbHk6ICdSb2JvdG8nO1xyXG4gIGxldHRlci1zcGFjaW5nOiAwLjI1cHg7XHJcbiAgY29sb3I6ICMwMDAwMDA5OTtcclxuICBmb250LXNpemU6IDAuODc1ZW07XHJcbiAgbWFyZ2luLWJvdHRvbTogMDtcclxufVxyXG4uYmFkZ2Utbm90aWZpY2FjaW9uZXN7XHJcbiAgLS1wYWRkaW5nLXRvcDogM3B4O1xyXG4gIC0tcGFkZGluZy1lbmQ6IDRweDtcclxuICAtLXBhZGRpbmctYm90dG9tOiA0cHg7XHJcbiAgLS1wYWRkaW5nLXN0YXJ0OiA0cHg7XHJcbiAgYm9yZGVyLXJhZGl1czogMTZweDtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgdG9wOiAtMTBweDtcclxuICBsZWZ0OiAxMHB4O1xyXG59XHJcbi5zbGlkZXMtYmFja3tcclxuICBiYWNrZ3JvdW5kOiAjNTEzM0E1O1xyXG4gIHRleHQtYWxpZ246IGxlZnQ7XHJcbn1cclxuLnRpdHVsby1zbGlkZXtcclxuICBjb2xvcjogI0Y0RjJGQTtcclxuICBmb250LXNpemU6IDFlbTtcclxuICB0ZXh0LWFsaWduOiBsZWZ0O1xyXG59XHJcbi5zdWJ0aXR1bG8tc2xpZGV7XHJcbiAgY29sb3I6ICNBRkEwRDU7XHJcbiAgdGV4dC1hbGlnbjogbGVmdDtcclxufVxyXG4uYm90b257XHJcbiAgZmxvYXQ6IHJpZ2h0O1xyXG59XHJcbi5zd2lwZXItcGFnaW5hdGlvbi1idWxsZXQtYWN0aXZlIHtcclxuICBiYWNrZ3JvdW5kOiB3aGl0ZTtcclxufSIsIiNjb250YWluZXIge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgbGVmdDogMDtcbiAgcmlnaHQ6IDA7XG4gIHRvcDogNTAlO1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTUwJSk7XG59XG5cbiNjb250YWluZXIgc3Ryb25nIHtcbiAgZm9udC1zaXplOiAyMHB4O1xuICBsaW5lLWhlaWdodDogMjZweDtcbn1cblxuI2NvbnRhaW5lciBwIHtcbiAgZm9udC1zaXplOiAxNnB4O1xuICBsaW5lLWhlaWdodDogMjJweDtcbiAgY29sb3I6ICM4YzhjOGM7XG4gIG1hcmdpbjogMDtcbn1cblxuI2NvbnRhaW5lciBhIHtcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xufVxuXG4ucmVzZXJ2YXIge1xuICBtYXJnaW4tdG9wOiAtNzBweDtcbiAgZmxvYXQ6IHJpZ2h0O1xuICBtYXJnaW4tcmlnaHQ6IDIwcHg7XG4gIC0tYmFja2dyb3VuZDogdmFyKC0taW9uLWNvbG9yLXByaW1hcnkpO1xuICBjb2xvcjogd2hpdGU7XG4gIHBhZGRpbmc6IDIwcHg7XG4gIGZvbnQtc2l6ZTogMS4yZW07XG59XG5cbi5mb290ZXIge1xuICB3aWR0aDogMTAwJTtcbiAgcG9zaXRpb246IGZpeGVkO1xuICBsZWZ0OiAwO1xuICBib3R0b206IDA7XG4gIHRleHQtYWxpZ246IGVuZDtcbn1cblxuLyogZWxlbWVudG9zIGRlbCBtZW51ICovXG4udGV4dC1hdmF0YXIge1xuICBmb250LWZhbWlseTogXCJSb2JvdG9cIjtcbiAgbGV0dGVyLXNwYWNpbmc6IDAuMTVweDtcbiAgY29sb3I6ICMwMDAwMDBERTtcbiAgZm9udC1zaXplOiAxLjI1ZW07XG4gIG1hcmdpbi1ib3R0b206IDA7XG59XG5cbi5zdWJ0ZXh0LWF2YXRhciB7XG4gIGZvbnQtZmFtaWx5OiBcIlJvYm90b1wiO1xuICBsZXR0ZXItc3BhY2luZzogMC4yNXB4O1xuICBjb2xvcjogIzAwMDAwMDk5O1xuICBmb250LXNpemU6IDAuODc1ZW07XG4gIG1hcmdpbi1ib3R0b206IDA7XG59XG5cbi5iYWRnZS1ub3RpZmljYWNpb25lcyB7XG4gIC0tcGFkZGluZy10b3A6IDNweDtcbiAgLS1wYWRkaW5nLWVuZDogNHB4O1xuICAtLXBhZGRpbmctYm90dG9tOiA0cHg7XG4gIC0tcGFkZGluZy1zdGFydDogNHB4O1xuICBib3JkZXItcmFkaXVzOiAxNnB4O1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogLTEwcHg7XG4gIGxlZnQ6IDEwcHg7XG59XG5cbi5zbGlkZXMtYmFjayB7XG4gIGJhY2tncm91bmQ6ICM1MTMzQTU7XG4gIHRleHQtYWxpZ246IGxlZnQ7XG59XG5cbi50aXR1bG8tc2xpZGUge1xuICBjb2xvcjogI0Y0RjJGQTtcbiAgZm9udC1zaXplOiAxZW07XG4gIHRleHQtYWxpZ246IGxlZnQ7XG59XG5cbi5zdWJ0aXR1bG8tc2xpZGUge1xuICBjb2xvcjogI0FGQTBENTtcbiAgdGV4dC1hbGlnbjogbGVmdDtcbn1cblxuLmJvdG9uIHtcbiAgZmxvYXQ6IHJpZ2h0O1xufVxuXG4uc3dpcGVyLXBhZ2luYXRpb24tYnVsbGV0LWFjdGl2ZSB7XG4gIGJhY2tncm91bmQ6IHdoaXRlO1xufSJdfQ== */");

/***/ }),

/***/ "./src/app/home/home.page.ts":
/*!***********************************!*\
  !*** ./src/app/home/home.page.ts ***!
  \***********************************/
/*! exports provided: HomePage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomePage", function() { return HomePage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _app_services_ServicioUtiles__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../app/services/ServicioUtiles */ "./src/app/services/ServicioUtiles.ts");
/* harmony import */ var _app_services_ServicioAcceso__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../app/services/ServicioAcceso */ "./src/app/services/ServicioAcceso.ts");
/* harmony import */ var _app_services_ServicioCitas__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../app/services/ServicioCitas */ "./src/app/services/ServicioCitas.ts");
/* harmony import */ var _app_services_ServicioNotificacionesLocales__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../app/services/ServicioNotificacionesLocales */ "./src/app/services/ServicioNotificacionesLocales.ts");
/* harmony import */ var _app_services_ServicioNotificaciones__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../app/services/ServicioNotificaciones */ "./src/app/services/ServicioNotificaciones.ts");
/* harmony import */ var _app_services_ServicioGeo__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../app/services/ServicioGeo */ "./src/app/services/ServicioGeo.ts");
/* harmony import */ var _app_services_ServicioParametrosApp__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../app/services/ServicioParametrosApp */ "./src/app/services/ServicioParametrosApp.ts");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! moment */ "./node_modules/moment/moment.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_10__);










//moment

let HomePage = class HomePage {
    constructor(navCtrl, toast, modalCtrl, platform, loading, menu, utiles, acceso, cita, servicioGeo, parametrosApp, servicioNotLocales, servNotificaciones) {
        this.navCtrl = navCtrl;
        this.toast = toast;
        this.modalCtrl = modalCtrl;
        this.platform = platform;
        this.loading = loading;
        this.menu = menu;
        this.utiles = utiles;
        this.acceso = acceso;
        this.cita = cita;
        this.servicioGeo = servicioGeo;
        this.parametrosApp = parametrosApp;
        this.servicioNotLocales = servicioNotLocales;
        this.servNotificaciones = servNotificaciones;
        //nuevo slide
        this.slideOpts = {
            initialSlide: 0,
            speed: 500,
            pager: true
        };
        this.miColor = '#FF4081';
        this.pages = [];
        //datos para consultar citas
        this.runPaciente = '';
        this.codigoDeis = '';
        this.serviceType = '349';
        //semanas
        this.semanas = [];
        //tiene disponibilidad
        this.tieneCitaVigente = false;
        this.usaAgenda = false;
        //para registrar la salida
        this.objetoEntrada = {
            VersionAppName: '',
            Plataforma: '',
            Token: '',
            VersionAppNumber: '',
            Fecha: new Date(),
            TipoOperacion: '1',
            Id: '0'
        };
        this.pushes = [];
        //para progress bar
        this.estaCargando = false;
        this.estaCargandoNotificaciones = false;
        //procesar los items del menu
        this.itemsMenu = [];
        //notificaciones
        //ESTOY CONSTRUYENDO LAS NOTIFICACIONES LOCALES
        //ME FALTA MOSTRAR EL SLIDE EN LA PARTE INFERIOR DEL ICONO DE
        //NOTIFICACIONES
        this.notificaciones = [];
        this.muestraNotificaciones = false;
    }
    ngOnInit() {
        moment__WEBPACK_IMPORTED_MODULE_10__["locale"]('es');
        //this.miColor = this.utiles.entregaMiColor();
        this.usuarioAps = JSON.parse(sessionStorage.UsuarioAps);
        this.miColor = this.utiles.entregaColor(this.usuarioAps);
        //this.miImagen = this.utiles.entregaMiImagen();
        this.miImagen = this.utiles.entregaImagen(this.usuarioAps);
        this.miNombre = this.utiles.entregaMiNombre();
        if (this.usuarioAps.Establecimiento) {
            this.miInstitucion = this.usuarioAps.Establecimiento.RazonSocial;
        }
        console.log(this.miColor);
        console.log(this.miImagen);
        console.log(this.miNombre);
        this.pages = this.utiles.entregaMenuPages();
        console.log(this.pages);
        this.runPaciente = this.utiles.insertarGuion(this.usuarioAps.Rut);
        this.codigoDeis = this.usuarioAps.ConfiguracionNodo.CodigoDeis2014;
        this.usaAgenda = this.utiles.entregaParametroUsaAgenda();
        this.buscarLogMovimientos();
        //notificaciones locales
        //this.obtenerNotificaciones();
        //ACA ESTOY TRABAJANDO HAY UN ERROR EN API MANAGEMENT
        this.obtenerNotificacionesApi();
        /*     if (this.utiles.entregaParametroUsaAgenda()){
              this.buscarDisponibilidad();
            } */
    }
    ionViewWillEnter() {
        //si existen cambios se setean nuevamente
        //this.miColor = this.utiles.entregaMiColor();
        this.miColor = this.utiles.entregaColor(this.usuarioAps);
        //this.miImagen = this.utiles.entregaMiImagen();
        this.miImagen = this.utiles.entregaImagen(this.usuarioAps);
        this.miNombre = this.utiles.entregaMiNombre();
        console.log(this.miColor);
        console.log(this.miImagen);
        console.log(this.miNombre);
    }
    openPage(pages) {
        // Reset the content nav to have just this page
        // we wouldn't want the back button to show in this scenario
        //this.navCtrl.push(pages.component,{ usuario: this.usuarioAps });
        console.log(pages);
        //ojo con esto
        /*     if (pages.title == 'Cita'){
              //aca hay que comprobar si tiene o no citas agendadas
              this.navCtrl.navigateRoot('agenda-disponible');
            }
            else{ */
        this.navCtrl.navigateRoot(pages.src);
        /* } */
    }
    openFamiliaPage() {
        this.navCtrl.navigateRoot('familia');
    }
    openAntePage() {
        if (sessionStorage.getItem("RSS_ID")) {
            if (this.parametrosApp.USA_LOG_MODULOS()) {
                this.utiles.registrarMovimiento(sessionStorage.getItem("RSS_ID"), 'ANTECEDENTES');
            }
        }
        this.navCtrl.navigateRoot('antecedentes');
    }
    openOrdenesPage() {
        if (sessionStorage.getItem("RSS_ID")) {
            if (this.parametrosApp.USA_LOG_MODULOS()) {
                this.utiles.registrarMovimiento(sessionStorage.getItem("RSS_ID"), 'EXAMENES');
            }
        }
        this.navCtrl.navigateRoot('ordenes');
    }
    openCalendarioPage() {
        //registramos movimiento
        if (sessionStorage.getItem("RSS_ID")) {
            if (this.parametrosApp.USA_LOG_MODULOS()) {
                this.utiles.registrarMovimiento(sessionStorage.getItem("RSS_ID"), 'CALENDARIO');
            }
        }
        this.navCtrl.navigateRoot('calendario');
    }
    logout() {
        //aca debemos registrar el fin de la session
        this.registrarSalida();
        this.acceso.logout();
        this.navCtrl.navigateRoot('nuevo-login');
    }
    openReservarHoraPage() {
        this.navCtrl.navigateRoot('pre-tiposatencion');
    }
    abrirEditar() {
        let registro = null;
        if (localStorage.getItem('REGISTRO')) {
            registro = JSON.parse(localStorage.getItem('REGISTRO'));
            const navigationExtras = {
                queryParams: {
                    usuario: JSON.stringify(registro),
                    EstaEditando: true
                }
            };
            //this.dismiss();
            this.navCtrl.navigateRoot(['registro-usuario'], navigationExtras);
        }
        else {
            this.utiles.presentToast("No puedes editar ya que no te encuentras registrado", "bottom", 3000);
        }
    }
    dismiss() {
        this.modalCtrl.dismiss();
    }
    registrarSalida() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            //variable de session que identifica el ingreso
            if (sessionStorage.getItem('RSS_ID')) {
                this.objetoEntrada.VersionAppName = localStorage.getItem('version_app_name');
                this.objetoEntrada.Plataforma = localStorage.getItem('plataforma');
                this.objetoEntrada.VersionAppNumber = localStorage.getItem('version_number');
                this.objetoEntrada.Token = localStorage.getItem('token_dispositivo');
                this.objetoEntrada.Fecha = new Date();
                this.objetoEntrada.Id = sessionStorage.getItem("RSS_ID");
                this.objetoEntrada.TipoOperacion = '1';
                let loader = yield this.loading.create({
                    message: 'Creando...<br>registro de sessión',
                    duration: 2000
                });
                yield loader.present().then(() => Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
                    if (!this.utiles.isAppOnDevice()) {
                        //web
                        this.servicioGeo.postIngreso(this.objetoEntrada).subscribe((data) => {
                            console.log(data);
                            loader.dismiss();
                        });
                    }
                    else {
                        //dispositivo
                        this.servicioGeo.postIngresoNative(this.objetoEntrada).then(response => {
                            let respuesta = JSON.parse(response.data);
                            console.log(respuesta);
                            loader.dismiss();
                        });
                    }
                }));
            }
        });
    }
    //para obtener los movimientos en la app
    buscarLogMovimientos() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            var idDispositivo = localStorage.getItem('token_dispositivo');
            var cantidadDias = this.parametrosApp.DIAS_LOG_MODULOS();
            this.estaCargando = true;
            let loader = yield this.loading.create({
                cssClass: 'loading-vacio',
                showBackdrop: false,
                spinner: null,
            });
            yield loader.present().then(() => Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
                //si ya se encuentra no es necesario volverlo a cargar
                if (sessionStorage.getItem('LOG_MOVIMIENTOS')) {
                    this.itemsMenu = JSON.parse(sessionStorage.getItem('LOG_MOVIMIENTOS'));
                    console.log(this.itemsMenu);
                    loader.dismiss();
                    this.estaCargando = false;
                }
                else {
                    if (!this.utiles.isAppOnDevice()) {
                        //llamada web
                        this.servicioGeo.getMovimientos(cantidadDias, idDispositivo).subscribe((response) => {
                            //procesar
                            this.itemsMenu = this.utiles.entregaArregloHome(response);
                            //lo guardaremos en una variable de sesión para que no 
                            //se carge constantemente, según ultima observación de 
                            //juan moran
                            sessionStorage.setItem('LOG_MOVIMIENTOS', JSON.stringify(this.itemsMenu));
                            console.log(this.itemsMenu);
                            loader.dismiss();
                            this.estaCargando = false;
                        });
                    }
                    else {
                        //llamada nativa
                        this.servicioGeo.getMovimientosNative(cantidadDias, idDispositivo).then((response) => {
                            //procesar
                            var data = JSON.parse(response.data);
                            this.itemsMenu = this.utiles.entregaArregloHome(data);
                            console.log(this.itemsMenu);
                            loader.dismiss();
                            this.estaCargando = false;
                        });
                    }
                }
            }));
        });
    }
    openGenerico(modulo) {
        var pageName = modulo.toLowerCase();
        if (modulo == 'EXAMENES') {
            pageName = 'ordenes';
        }
        //registramos movimiento
        if (sessionStorage.getItem("RSS_ID")) {
            if (this.parametrosApp.USA_LOG_MODULOS()) {
                this.utiles.registrarMovimiento(sessionStorage.getItem("RSS_ID"), modulo.toUpperCase());
            }
        }
        this.navCtrl.navigateRoot(pageName);
    }
    //notificaciones
    obtenerNotificaciones() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            this.estaCargando = true;
            this.estaCargandoNotificaciones = true;
            let loader = yield this.loading.create({
                cssClass: 'loading-vacio',
                showBackdrop: false,
                spinner: null,
            });
            yield loader.present().then(() => Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
                this.notificaciones = yield this.servicioNotLocales.getAll();
                //console.log(this.notificaciones);
                this.estaCargando = false;
                this.estaCargandoNotificaciones = false;
            }));
        });
    }
    obtenerNotificacionesApi() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            this.estaCargando = true;
            this.estaCargandoNotificaciones = true;
            let loader = yield this.loading.create({
                cssClass: 'loading-vacio',
                showBackdrop: false,
                spinner: null,
            });
            var usuario = null;
            if (localStorage.getItem('UsuarioAps')) {
                usuario = JSON.parse(localStorage.getItem('UsuarioAps'));
            }
            var annoConsultar = 0;
            var mesConsultar = 0;
            var fechaActual = moment__WEBPACK_IMPORTED_MODULE_10__();
            var fechaEvaluar = moment__WEBPACK_IMPORTED_MODULE_10__().add(5, 'days');
            var mesActual = {
                mes: fechaActual.month() + 1,
                anno: fechaActual.year()
            };
            var mesEvaluar = {
                mes: fechaEvaluar.month() + 1,
                anno: fechaEvaluar.year()
            };
            //debemos ver si en los 5 dias de diferencia hay dos meses o un mes
            if (mesActual.mes == mesEvaluar.mes && mesActual.anno == mesEvaluar.anno) {
                //es le mismo mes
                mesConsultar = mesActual.mes;
                annoConsultar = mesActual.anno;
            }
            else {
                //hay diferencia, por tanto se toma el ultimo mes
                mesConsultar = mesEvaluar.mes;
                annoConsultar = mesEvaluar.anno;
            }
            yield loader.present().then(() => Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
                if (!this.utiles.isAppOnDevice()) {
                    //llamada web
                    this.cita.entregaPorMesNuevoLivianoApi(usuario.Id, usuario.IdRyf, usuario.NodId, mesConsultar, annoConsultar).subscribe((response) => {
                        var data = response;
                        console.log(data);
                        this.notificaciones = this.servNotificaciones.construyeNotificaciones(data);
                        this.estaCargando = false;
                        this.loading.dismiss();
                        this.estaCargandoNotificaciones = false;
                    }, error => {
                        console.log(error.message);
                        this.estaCargando = false;
                        this.loading.dismiss();
                        this.estaCargandoNotificaciones = false;
                    });
                }
                else {
                    //llamada native
                    this.cita.entregaPorMesNuevoLivianoApiNative(usuario.Id, usuario.IdRyf, usuario.NodId, mesConsultar, annoConsultar).then((response) => {
                        var data = JSON.parse(response.data);
                        console.log(data);
                        this.notificaciones = this.servNotificaciones.construyeNotificaciones(data);
                        this.estaCargando = false;
                        this.loading.dismiss();
                        this.estaCargandoNotificaciones = false;
                    }).catch(error => {
                        console.log(error.message);
                        this.estaCargando = false;
                        this.loading.dismiss();
                        this.estaCargandoNotificaciones = false;
                    });
                }
            }));
        });
    }
    openItemPage(modulo) {
        this.openGenerico(modulo);
    }
    //para procesar citas
    /*
    async buscarDisponibilidad(){
      //ACA ME FALTA CONTROLAR LOS MENSAJES
      var fecha = new Date();
      this.utiles.construyeSemana(this.runPaciente, this.codigoDeis, fecha);
      this.semana = this.utiles.semana;
      this.semanas = this.utiles.semanas;
      var ini = this.semana.semanas[0].start;
      var ter = this.semana.semanas[0].end;
      let loader = await this.loading.create({
        message: 'Cargando...<br>disponibilidad',
        duration: 20000
      });
  
      await loader.present().then(async () => {
        if (!this.utiles.isAppOnDevice()) {
          //llamada web
          this.cita.getDisponibilidad(ini, ter, this.codigoDeis, this.runPaciente, this.serviceType, '', '', 'disponibilidad').subscribe((response: any)=>{
            this.procesarRespuesta(response, loader);
          });
        }
        else {
          //llamada nativa
          this.cita.getDisponibilidadNative(ini, ter, this.codigoDeis, this.runPaciente, this.serviceType, '', '', 'disponibilidad').then((response: any)=>{
            var respuesta = JSON.parse(response.data);
            this.procesarRespuesta(respuesta, loader);
          });
        }
      });
    }
    procesarRespuesta(data, loader){
      if (data && data.Mensaje){
        //correcto
        if (data.Mensaje.Detalle.Codigo == 'MSG_CITA_VIGENTE'){
          //ya tiene citas tomadas, hay que enviarlo a otra pagina
          //la de buscarcitas
          this.tieneCitaVigente = true;
          sessionStorage.setItem('OPERACION', 'cita');
          loader.dismiss();
        }
        else{
          //lanzamos mensaje
          this.tieneCitaVigente = false;
          sessionStorage.setItem('OPERACION', 'disponibilidad')
          loader.dismiss();
        }
        //error
      }
    }
    */
    mostrarNotificaciones(mostrar) {
        this.slides.slideTo(0);
        if (this.muestraNotificaciones == true && mostrar == true) {
            this.muestraNotificaciones = false;
            return;
        }
        if (this.muestraNotificaciones == false && mostrar == true) {
            this.muestraNotificaciones = true;
        }
    }
    moverSlide(indice) {
        if (indice <= this.notificaciones.length - 1) {
            this.slides.slideNext();
        }
        else {
            //this.slides.slidePrev();
            //lo volvemos al inicio
            this.slides.slideTo(0);
        }
    }
};
HomePage.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ToastController"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ModalController"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["Platform"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["LoadingController"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["MenuController"] },
    { type: _app_services_ServicioUtiles__WEBPACK_IMPORTED_MODULE_3__["ServicioUtiles"] },
    { type: _app_services_ServicioAcceso__WEBPACK_IMPORTED_MODULE_4__["ServicioAcceso"] },
    { type: _app_services_ServicioCitas__WEBPACK_IMPORTED_MODULE_5__["ServicioCitas"] },
    { type: _app_services_ServicioGeo__WEBPACK_IMPORTED_MODULE_8__["ServicioGeo"] },
    { type: _app_services_ServicioParametrosApp__WEBPACK_IMPORTED_MODULE_9__["ServicioParametrosApp"] },
    { type: _app_services_ServicioNotificacionesLocales__WEBPACK_IMPORTED_MODULE_6__["ServicioNotificacionesLocales"] },
    { type: _app_services_ServicioNotificaciones__WEBPACK_IMPORTED_MODULE_7__["ServicioNotificaciones"] }
];
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('mySlider', { static: true })
], HomePage.prototype, "slides", void 0);
HomePage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-home',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./home.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/home/home.page.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./home.page.scss */ "./src/app/home/home.page.scss")).default]
    })
], HomePage);



/***/ })

}]);
//# sourceMappingURL=home-home-module-es2015.js.map