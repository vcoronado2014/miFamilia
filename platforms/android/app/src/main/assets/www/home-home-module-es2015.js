(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["home-home-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/home/home.page.html":
/*!***************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/home/home.page.html ***!
  \***************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-menu side=\"start\" menuId=\"first\" contentId=\"content\">\r\n \r\n  <ion-header> \r\n     <!-- <ion-toolbar [style.--background]=\"miColor\"> -->\r\n    <!-- <ion-toolbar color=\"primary\"> -->\r\n       <!-- <ion-title class=\"fcw\">Menu</ion-title> -->\r\n    <!-- </ion-toolbar> -->\r\n    <!-- menu avatar -->\r\n    <ion-item lines=\"none\" >\r\n     <ion-avatar class=\"avatar\" slot=\"start\">\r\n       <img *ngIf = \"miImagen != ''\" src={{miImagen}}>\r\n       <img *ngIf = \"miImagen == ''\" src=\"../assets/img/no-imagen.jpg\">\r\n     </ion-avatar>\r\n     <ion-row class=\"texAvatarContainer\">\r\n       <div class=\"text-avatar\">{{miNombre}}</div>\r\n       <div class=\"subtext-avatar\">{{miInstitucion}}</div>\r\n     </ion-row>\r\n   </ion-item>\r\n   </ion-header>\r\n   <ion-content class=\"back-app\">\r\n \r\n     <ion-list>\r\n       <ion-item *ngFor=\"let p of pages\" (click)=\"openPage(p)\" class=\"listItem\" button lines=\"none\" [ngStyle]=\"{'margin-left': p.esSubMenu ? '16px' : '0px'}\">\r\n         <ion-icon name={{p.icon}} slot=\"start\"></ion-icon>\r\n         <ion-label>\r\n           {{p.title}}\r\n         </ion-label>\r\n       </ion-item>\r\n       <!-- ajustes de la cuenta -->\r\n       <ion-item button lines=\"none\" (click)=\"abrirEditar()\" class=\"listItem\">\r\n         <ion-icon name=\"heart\" slot=\"start\"></ion-icon>\r\n         <ion-label>\r\n           Ajustes de la cuenta\r\n         </ion-label>\r\n       </ion-item>\r\n       <!-- cerrar sesión -->\r\n       <ion-item button lines=\"none\" (click)=\"logout()\" class=\"listItem\">\r\n         <ion-icon name=\"close\" slot=\"start\"></ion-icon>\r\n         <ion-label>\r\n           Cerrar sesión\r\n         </ion-label>\r\n       </ion-item>\r\n \r\n     </ion-list>\r\n \r\n   </ion-content>\r\n </ion-menu>\r\n \r\n <ion-header class=\"home header\">\r\n   <ion-toolbar  class=\"toolbar\" color=\"primary\">\r\n     <ion-buttons slot=\"start\">\r\n       <ion-menu-button class=\"home\"></ion-menu-button>\r\n     </ion-buttons>\r\n     <ion-title class=\"title\">Mi salud familiar</ion-title>\r\n     <!-- icono de notificaciones -->\r\n     <ion-buttons slot=\"end\"  style=\"padding-right: 16px;\" [hidden]=\"estaCargandoNotificaciones == false\">\r\n       <ion-spinner color=\"light\"></ion-spinner>\r\n     </ion-buttons>\r\n     <ion-buttons slot=\"end\"  style=\"padding-right: 16px;\" [hidden]=\"estaCargandoNotificaciones && notificaciones.length == 0\" (click)=\"mostrarNotificacionesModal(true)\">\r\n       <ion-icon [hidden]=\"notificaciones.length == 0\" class=\"fcw\" slot=\"icon-only\" name=\"notifications\" style=\"color:white;\"></ion-icon>\r\n       <ion-badge [hidden]=\"notificaciones.length == 0\" slot=\"end\" color=\"danger\" class=\"badge-notificaciones\">{{notificaciones.length}}</ion-badge>\r\n     </ion-buttons>\r\n   </ion-toolbar>\r\n </ion-header>\r\n <ion-content class=\"card-background-page-home back-app\" id=\"content\">\r\n   <!-- notificaciones lo comentamos para usar un modal -->\r\n<!--    <ion-slides [hidden]=\"muestraNotificaciones == false\" pager=\"true\" [options]=\"slideOpts\" #mySlider class=\"slides-back\">\r\n     <ion-slide *ngFor=\"let info of notificaciones\">\r\n       <div class=\"slide-content-padding\">\r\n         <app-content-slide [titulo]=\"info.Titulo\" [subTitulo]=\"info.Subtitulo\" [contenido]=\"info.Contenido\" [modulo]=\"info.IrA\"></app-content-slide>\r\n       </div>\r\n       <div class=\"slide-buttons-padding\">\r\n         <ion-grid>\r\n           <ion-row>\r\n             <ion-col size=\"6\">\r\n               <button [hidden]=\"info.IrA == null\" mat-flat-button (click)=\"openNotificacion(info.IrA)\">Ir...</button>\r\n             </ion-col>\r\n             <ion-col size=\"6\">\r\n               <button mat-raised-button color=\"accent\" class=\"boton\" (click)=\"moverSlide(info.Indice)\">SIGUIENTE</button>\r\n             </ion-col>\r\n           </ion-row>\r\n         </ion-grid>\r\n       </div>\r\n     </ion-slide>\r\n   </ion-slides> -->\r\n   <ion-grid>\r\n     <app-progress [mostrar]=\"estaCargando\" titulo=\"Buscando preferencias\"></app-progress>\r\n     <ion-row [hidden]=\"estaCargando\" class=\"ion-padding-top\">\r\n       <ion-col size=\"6\" *ngFor=\"let modulo of itemsMenu\">\r\n         <app-item-home [modulo]=\"modulo.NombreModulo\" [classImagen]=\"modulo.ClaseImagen\" [rutaImagen]=\"modulo.Imagen\"></app-item-home>\r\n       </ion-col>\r\n     </ion-row>\r\n   </ion-grid>\r\n </ion-content>");

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
/* harmony default export */ __webpack_exports__["default"] = ("#container {\n  text-align: center;\n  position: absolute;\n  left: 0;\n  right: 0;\n  top: 50%;\n  transform: translateY(-50%);\n}\n\n#container strong {\n  font-size: 20px;\n  line-height: 26px;\n}\n\n#container p {\n  font-size: 16px;\n  line-height: 22px;\n  color: #8c8c8c;\n  margin: 0;\n}\n\n#container a {\n  text-decoration: none;\n}\n\n.reservar {\n  margin-top: -70px;\n  float: right;\n  margin-right: 20px;\n  --background: var(--ion-color-primary);\n  color: white;\n  padding: 20px;\n  font-size: 1.2em;\n}\n\n.footer {\n  width: 100%;\n  position: fixed;\n  left: 0;\n  bottom: 0;\n  text-align: end;\n}\n\n/* elementos del menu */\n\n.badge-notificaciones {\n  --padding-top: 3px;\n  --padding-end: 4px;\n  --padding-bottom: 4px;\n  --padding-start: 4px;\n  border-radius: 16px;\n  position: absolute;\n  top: -10px;\n  left: 10px;\n}\n\n.slides-back {\n  background: #5133A5;\n  text-align: left;\n}\n\n.titulo-slide {\n  color: #F4F2FA;\n  font-size: 1em;\n  text-align: left;\n}\n\n.subtitulo-slide {\n  color: #AFA0D5;\n  text-align: left;\n}\n\n.boton {\n  float: right;\n}\n\n.swiper-pagination-bullet-active {\n  background: white;\n  opacity: 1;\n}\n\nion-slide {\n  display: block;\n  background: #5133A5;\n  text-align: left;\n  min-height: 200px;\n}\n\nion-slides {\n  --bullet-background: yellow;\n  --bullet-background-active: #ff4081;\n  --opacity: 1;\n}\n\n.swiper-pagination-bullet {\n  width: 8px;\n  height: 8px;\n  display: inline-block;\n  border-radius: 100%;\n  opacity: 1;\n}\n\n.slide-content-padding {\n  padding: 16px 16px 0px 16px;\n  margin-bottom: 5px;\n}\n\n.slide-buttons-padding {\n  padding: 0px 16px 16px 16px;\n}\n\n.header {\n  height: 56px;\n  font-family: Roboto, \"Helvetica Neue\", sans-serif;\n}\n\n.toolbar {\n  height: 56px;\n}\n\n.title {\n  font-family: Roboto, \"Helvetica Neue\", sans-serif;\n  font-size: 20px;\n  font-weight: 500;\n}\n\n.menu-button {\n  padding-top: 16px;\n}\n\n.avatar {\n  height: 40px;\n  width: 40px;\n}\n\n.texAvatarContainer {\n  flex-direction: column;\n  height: 70px;\n  padding-top: 16px;\n}\n\nion-icon {\n  color: #00000099;\n}\n\nion-item.listItem {\n  height: 48px;\n}\n\n.text-avatar {\n  font-size: 1.25em;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n  width: 80%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaG9tZS9GOlxcYXBwX21pZmFtaWxpYV9naXRcXG1pRmFtaWxpYV9wcmUvc3JjXFxhcHBcXGhvbWVcXGhvbWUucGFnZS5zY3NzIiwic3JjL2FwcC9ob21lL2hvbWUucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0Usa0JBQUE7RUFFQSxrQkFBQTtFQUNBLE9BQUE7RUFDQSxRQUFBO0VBQ0EsUUFBQTtFQUNBLDJCQUFBO0FDQUY7O0FER0E7RUFDRSxlQUFBO0VBQ0EsaUJBQUE7QUNBRjs7QURHQTtFQUNFLGVBQUE7RUFDQSxpQkFBQTtFQUVBLGNBQUE7RUFFQSxTQUFBO0FDRkY7O0FES0E7RUFDRSxxQkFBQTtBQ0ZGOztBRElBO0VBQ0UsaUJBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7RUFDQSxzQ0FBQTtFQUNBLFlBQUE7RUFDQSxhQUFBO0VBQ0EsZ0JBQUE7QUNERjs7QURHQTtFQUNFLFdBQUE7RUFDQSxlQUFBO0VBQ0EsT0FBQTtFQUNBLFNBQUE7RUFDQSxlQUFBO0FDQUY7O0FERUEsdUJBQUE7O0FBQ0E7RUFDRSxrQkFBQTtFQUNBLGtCQUFBO0VBQ0EscUJBQUE7RUFDQSxvQkFBQTtFQUNBLG1CQUFBO0VBQ0Esa0JBQUE7RUFDQSxVQUFBO0VBQ0EsVUFBQTtBQ0NGOztBRENBO0VBQ0UsbUJBQUE7RUFDQSxnQkFBQTtBQ0VGOztBREFBO0VBQ0UsY0FBQTtFQUNBLGNBQUE7RUFDQSxnQkFBQTtBQ0dGOztBRERBO0VBQ0UsY0FBQTtFQUNBLGdCQUFBO0FDSUY7O0FERkE7RUFDRSxZQUFBO0FDS0Y7O0FESEE7RUFDRSxpQkFBQTtFQUNBLFVBQUE7QUNNRjs7QURKQTtFQUNFLGNBQUE7RUFDQSxtQkFBQTtFQUNBLGdCQUFBO0VBQ0EsaUJBQUE7QUNPRjs7QURMQTtFQUNFLDJCQUFBO0VBQ0EsbUNBQUE7RUFDQSxZQUFBO0FDUUY7O0FETkE7RUFDRSxVQUFBO0VBQ0EsV0FBQTtFQUNBLHFCQUFBO0VBQ0EsbUJBQUE7RUFDQSxVQUFBO0FDU0Y7O0FEUEE7RUFDRSwyQkFBQTtFQUNBLGtCQUFBO0FDVUY7O0FEUkE7RUFDRSwyQkFBQTtBQ1dGOztBRE5BO0VBQ0UsWUFBQTtFQUNBLGlEQUFBO0FDU0Y7O0FETkE7RUFDRSxZQUFBO0FDU0Y7O0FETkE7RUFDRSxpREFBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtBQ1NGOztBRE5BO0VBQ0UsaUJBQUE7QUNTRjs7QUROQTtFQUNFLFlBQUE7RUFDQSxXQUFBO0FDU0Y7O0FETkE7RUFDRSxzQkFBQTtFQUNBLFlBQUE7RUFDQSxpQkFBQTtBQ1NGOztBRE5BO0VBQ0UsZ0JBQUE7QUNTRjs7QUROQTtFQUNFLFlBQUE7QUNTRjs7QUROQTtFQUNFLGlCQUFBO0VBQ0EsZ0JBQUE7RUFDQSx1QkFBQTtFQUNBLG1CQUFBO0VBQ0EsVUFBQTtBQ1NGIiwiZmlsZSI6InNyYy9hcHAvaG9tZS9ob21lLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIiNjb250YWluZXIge1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuXHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIGxlZnQ6IDA7XHJcbiAgcmlnaHQ6IDA7XHJcbiAgdG9wOiA1MCU7XHJcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC01MCUpO1xyXG59XHJcblxyXG4jY29udGFpbmVyIHN0cm9uZyB7XHJcbiAgZm9udC1zaXplOiAyMHB4O1xyXG4gIGxpbmUtaGVpZ2h0OiAyNnB4O1xyXG59XHJcblxyXG4jY29udGFpbmVyIHAge1xyXG4gIGZvbnQtc2l6ZTogMTZweDtcclxuICBsaW5lLWhlaWdodDogMjJweDtcclxuXHJcbiAgY29sb3I6ICM4YzhjOGM7XHJcblxyXG4gIG1hcmdpbjogMDtcclxufVxyXG5cclxuI2NvbnRhaW5lciBhIHtcclxuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbn1cclxuLnJlc2VydmFye1xyXG4gIG1hcmdpbi10b3A6IC03MHB4O1xyXG4gIGZsb2F0OiByaWdodDtcclxuICBtYXJnaW4tcmlnaHQ6IDIwcHg7XHJcbiAgLS1iYWNrZ3JvdW5kOiB2YXIoLS1pb24tY29sb3ItcHJpbWFyeSk7XHJcbiAgY29sb3I6IHdoaXRlO1xyXG4gIHBhZGRpbmc6IDIwcHg7XHJcbiAgZm9udC1zaXplOiAxLjJlbTtcclxufVxyXG4uZm9vdGVyIHtcclxuICB3aWR0aDogMTAwJTtcclxuICBwb3NpdGlvbjogZml4ZWQ7XHJcbiAgbGVmdDogMDtcclxuICBib3R0b206IDA7XHJcbiAgdGV4dC1hbGlnbjogZW5kOztcclxufVxyXG4vKiBlbGVtZW50b3MgZGVsIG1lbnUgKi9cclxuLmJhZGdlLW5vdGlmaWNhY2lvbmVze1xyXG4gIC0tcGFkZGluZy10b3A6IDNweDtcclxuICAtLXBhZGRpbmctZW5kOiA0cHg7XHJcbiAgLS1wYWRkaW5nLWJvdHRvbTogNHB4O1xyXG4gIC0tcGFkZGluZy1zdGFydDogNHB4O1xyXG4gIGJvcmRlci1yYWRpdXM6IDE2cHg7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIHRvcDogLTEwcHg7XHJcbiAgbGVmdDogMTBweDtcclxufVxyXG4uc2xpZGVzLWJhY2t7XHJcbiAgYmFja2dyb3VuZDogIzUxMzNBNTtcclxuICB0ZXh0LWFsaWduOiBsZWZ0O1xyXG59XHJcbi50aXR1bG8tc2xpZGV7XHJcbiAgY29sb3I6ICNGNEYyRkE7XHJcbiAgZm9udC1zaXplOiAxZW07XHJcbiAgdGV4dC1hbGlnbjogbGVmdDtcclxufVxyXG4uc3VidGl0dWxvLXNsaWRle1xyXG4gIGNvbG9yOiAjQUZBMEQ1O1xyXG4gIHRleHQtYWxpZ246IGxlZnQ7XHJcbn1cclxuLmJvdG9ue1xyXG4gIGZsb2F0OiByaWdodDtcclxufVxyXG4uc3dpcGVyLXBhZ2luYXRpb24tYnVsbGV0LWFjdGl2ZSB7XHJcbiAgYmFja2dyb3VuZDogd2hpdGU7XHJcbiAgb3BhY2l0eTogMTtcclxufVxyXG5pb24tc2xpZGV7XHJcbiAgZGlzcGxheTogYmxvY2s7XHJcbiAgYmFja2dyb3VuZDogIzUxMzNBNTtcclxuICB0ZXh0LWFsaWduOiBsZWZ0O1xyXG4gIG1pbi1oZWlnaHQ6IDIwMHB4O1xyXG59XHJcbmlvbi1zbGlkZXN7XHJcbiAgLS1idWxsZXQtYmFja2dyb3VuZDogeWVsbG93O1xyXG4gIC0tYnVsbGV0LWJhY2tncm91bmQtYWN0aXZlOiAjZmY0MDgxO1xyXG4gIC0tb3BhY2l0eTogMTtcclxufVxyXG4uc3dpcGVyLXBhZ2luYXRpb24tYnVsbGV0IHtcclxuICB3aWR0aDogOHB4O1xyXG4gIGhlaWdodDogOHB4O1xyXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICBib3JkZXItcmFkaXVzOiAxMDAlO1xyXG4gIG9wYWNpdHk6IDE7XHJcbn1cclxuLnNsaWRlLWNvbnRlbnQtcGFkZGluZ3tcclxuICBwYWRkaW5nOiAxNnB4IDE2cHggMHB4IDE2cHg7XHJcbiAgbWFyZ2luLWJvdHRvbTogNXB4O1xyXG59XHJcbi5zbGlkZS1idXR0b25zLXBhZGRpbmd7XHJcbiAgcGFkZGluZzogMHB4IDE2cHggMTZweCAxNnB4O1xyXG59XHJcblxyXG4vL0FqdXN0ZXMgZGUgZXN0aWxvXHJcblxyXG4uaGVhZGVye1xyXG4gIGhlaWdodDogNTZweDtcclxuICBmb250LWZhbWlseTogUm9ib3RvLCBcIkhlbHZldGljYSBOZXVlXCIsIHNhbnMtc2VyaWY7XHJcbn1cclxuXHJcbi50b29sYmFye1xyXG4gIGhlaWdodDogNTZweDtcclxufVxyXG5cclxuLnRpdGxle1xyXG4gIGZvbnQtZmFtaWx5OiBSb2JvdG8sIFwiSGVsdmV0aWNhIE5ldWVcIiwgc2Fucy1zZXJpZjtcclxuICBmb250LXNpemU6IDIwcHg7XHJcbiAgZm9udC13ZWlnaHQ6IDUwMDtcclxufVxyXG5cclxuLm1lbnUtYnV0dG9ue1xyXG4gIHBhZGRpbmctdG9wOiAxNnB4O1xyXG59XHJcblxyXG4uYXZhdGFye1xyXG4gIGhlaWdodDogNDBweDtcclxuICB3aWR0aDogNDBweDtcclxufVxyXG5cclxuLnRleEF2YXRhckNvbnRhaW5lcntcclxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gIGhlaWdodDogNzBweDtcclxuICBwYWRkaW5nLXRvcDogMTZweDtcclxufVxyXG5cclxuaW9uLWljb24ge1xyXG4gIGNvbG9yOiAjMDAwMDAwOTk7XHJcbn1cclxuXHJcbmlvbi1pdGVtLmxpc3RJdGVtIHtcclxuICBoZWlnaHQ6IDQ4cHg7XHJcbn1cclxuXHJcbi50ZXh0LWF2YXRhcntcclxuICBmb250LXNpemU6IDEuMjVlbTtcclxuICBvdmVyZmxvdzpoaWRkZW47XHJcbiAgdGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7XHJcbiAgd2hpdGUtc3BhY2U6bm93cmFwO1xyXG4gIHdpZHRoOjgwJTtcclxufSIsIiNjb250YWluZXIge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgbGVmdDogMDtcbiAgcmlnaHQ6IDA7XG4gIHRvcDogNTAlO1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTUwJSk7XG59XG5cbiNjb250YWluZXIgc3Ryb25nIHtcbiAgZm9udC1zaXplOiAyMHB4O1xuICBsaW5lLWhlaWdodDogMjZweDtcbn1cblxuI2NvbnRhaW5lciBwIHtcbiAgZm9udC1zaXplOiAxNnB4O1xuICBsaW5lLWhlaWdodDogMjJweDtcbiAgY29sb3I6ICM4YzhjOGM7XG4gIG1hcmdpbjogMDtcbn1cblxuI2NvbnRhaW5lciBhIHtcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xufVxuXG4ucmVzZXJ2YXIge1xuICBtYXJnaW4tdG9wOiAtNzBweDtcbiAgZmxvYXQ6IHJpZ2h0O1xuICBtYXJnaW4tcmlnaHQ6IDIwcHg7XG4gIC0tYmFja2dyb3VuZDogdmFyKC0taW9uLWNvbG9yLXByaW1hcnkpO1xuICBjb2xvcjogd2hpdGU7XG4gIHBhZGRpbmc6IDIwcHg7XG4gIGZvbnQtc2l6ZTogMS4yZW07XG59XG5cbi5mb290ZXIge1xuICB3aWR0aDogMTAwJTtcbiAgcG9zaXRpb246IGZpeGVkO1xuICBsZWZ0OiAwO1xuICBib3R0b206IDA7XG4gIHRleHQtYWxpZ246IGVuZDtcbn1cblxuLyogZWxlbWVudG9zIGRlbCBtZW51ICovXG4uYmFkZ2Utbm90aWZpY2FjaW9uZXMge1xuICAtLXBhZGRpbmctdG9wOiAzcHg7XG4gIC0tcGFkZGluZy1lbmQ6IDRweDtcbiAgLS1wYWRkaW5nLWJvdHRvbTogNHB4O1xuICAtLXBhZGRpbmctc3RhcnQ6IDRweDtcbiAgYm9yZGVyLXJhZGl1czogMTZweDtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IC0xMHB4O1xuICBsZWZ0OiAxMHB4O1xufVxuXG4uc2xpZGVzLWJhY2sge1xuICBiYWNrZ3JvdW5kOiAjNTEzM0E1O1xuICB0ZXh0LWFsaWduOiBsZWZ0O1xufVxuXG4udGl0dWxvLXNsaWRlIHtcbiAgY29sb3I6ICNGNEYyRkE7XG4gIGZvbnQtc2l6ZTogMWVtO1xuICB0ZXh0LWFsaWduOiBsZWZ0O1xufVxuXG4uc3VidGl0dWxvLXNsaWRlIHtcbiAgY29sb3I6ICNBRkEwRDU7XG4gIHRleHQtYWxpZ246IGxlZnQ7XG59XG5cbi5ib3RvbiB7XG4gIGZsb2F0OiByaWdodDtcbn1cblxuLnN3aXBlci1wYWdpbmF0aW9uLWJ1bGxldC1hY3RpdmUge1xuICBiYWNrZ3JvdW5kOiB3aGl0ZTtcbiAgb3BhY2l0eTogMTtcbn1cblxuaW9uLXNsaWRlIHtcbiAgZGlzcGxheTogYmxvY2s7XG4gIGJhY2tncm91bmQ6ICM1MTMzQTU7XG4gIHRleHQtYWxpZ246IGxlZnQ7XG4gIG1pbi1oZWlnaHQ6IDIwMHB4O1xufVxuXG5pb24tc2xpZGVzIHtcbiAgLS1idWxsZXQtYmFja2dyb3VuZDogeWVsbG93O1xuICAtLWJ1bGxldC1iYWNrZ3JvdW5kLWFjdGl2ZTogI2ZmNDA4MTtcbiAgLS1vcGFjaXR5OiAxO1xufVxuXG4uc3dpcGVyLXBhZ2luYXRpb24tYnVsbGV0IHtcbiAgd2lkdGg6IDhweDtcbiAgaGVpZ2h0OiA4cHg7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgYm9yZGVyLXJhZGl1czogMTAwJTtcbiAgb3BhY2l0eTogMTtcbn1cblxuLnNsaWRlLWNvbnRlbnQtcGFkZGluZyB7XG4gIHBhZGRpbmc6IDE2cHggMTZweCAwcHggMTZweDtcbiAgbWFyZ2luLWJvdHRvbTogNXB4O1xufVxuXG4uc2xpZGUtYnV0dG9ucy1wYWRkaW5nIHtcbiAgcGFkZGluZzogMHB4IDE2cHggMTZweCAxNnB4O1xufVxuXG4uaGVhZGVyIHtcbiAgaGVpZ2h0OiA1NnB4O1xuICBmb250LWZhbWlseTogUm9ib3RvLCBcIkhlbHZldGljYSBOZXVlXCIsIHNhbnMtc2VyaWY7XG59XG5cbi50b29sYmFyIHtcbiAgaGVpZ2h0OiA1NnB4O1xufVxuXG4udGl0bGUge1xuICBmb250LWZhbWlseTogUm9ib3RvLCBcIkhlbHZldGljYSBOZXVlXCIsIHNhbnMtc2VyaWY7XG4gIGZvbnQtc2l6ZTogMjBweDtcbiAgZm9udC13ZWlnaHQ6IDUwMDtcbn1cblxuLm1lbnUtYnV0dG9uIHtcbiAgcGFkZGluZy10b3A6IDE2cHg7XG59XG5cbi5hdmF0YXIge1xuICBoZWlnaHQ6IDQwcHg7XG4gIHdpZHRoOiA0MHB4O1xufVxuXG4udGV4QXZhdGFyQ29udGFpbmVyIHtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgaGVpZ2h0OiA3MHB4O1xuICBwYWRkaW5nLXRvcDogMTZweDtcbn1cblxuaW9uLWljb24ge1xuICBjb2xvcjogIzAwMDAwMDk5O1xufVxuXG5pb24taXRlbS5saXN0SXRlbSB7XG4gIGhlaWdodDogNDhweDtcbn1cblxuLnRleHQtYXZhdGFyIHtcbiAgZm9udC1zaXplOiAxLjI1ZW07XG4gIG92ZXJmbG93OiBoaWRkZW47XG4gIHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzO1xuICB3aGl0ZS1zcGFjZTogbm93cmFwO1xuICB3aWR0aDogODAlO1xufSJdfQ== */");

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
/* harmony import */ var _modal_alertas_modal_alertas_page__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../modal-alertas/modal-alertas.page */ "./src/app/modal-alertas/modal-alertas.page.ts");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! moment */ "./node_modules/moment/moment.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_11__);










//modal

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
        this.notificaciones = [];
        this.muestraNotificaciones = false;
    }
    ngOnInit() {
        moment__WEBPACK_IMPORTED_MODULE_11__["locale"]('es');
        //this.miColor = this.utiles.entregaMiColor();
        this.usuarioAps = JSON.parse(sessionStorage.UsuarioAps);
        this.miColor = this.utiles.entregaColor(this.usuarioAps);
        //this.miImagen = this.utiles.entregaMiImagen();
        this.miImagen = this.utiles.entregaImagen(this.usuarioAps);
        this.miNombre = this.utiles.entregaMiNombre();
        if (this.usuarioAps.Establecimiento) {
            this.miInstitucion = this.usuarioAps.Establecimiento.RazonSocial;
        }
        //console.log(this.miColor);
        //console.log(this.miImagen);
        //console.log(this.miNombre);
        this.pages = this.utiles.entregaMenuPages();
        //console.log(this.pages);
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
        //nueva implementación
        this.miembrosPorAceptar();
    }
    miembrosPorAceptar() {
        if (localStorage.getItem('FAMILIA-POR-ACEPTAR')) {
            let arrFam = JSON.parse(localStorage.getItem('FAMILIA-POR-ACEPTAR'));
            if (arrFam.length > 0) {
                this.utiles.presentToast('Tienes familia asociada que podrías aceptar, pincha en la notificación para poder hacerlo', 'bottom', 5000);
            }
        }
    }
    ionViewWillEnter() {
        //si existen cambios se setean nuevamente
        //this.miColor = this.utiles.entregaMiColor();
        this.miColor = this.utiles.entregaColor(this.usuarioAps);
        //this.miImagen = this.utiles.entregaMiImagen();
        this.miImagen = this.utiles.entregaImagen(this.usuarioAps);
        this.miNombre = this.utiles.entregaMiNombre();
        //console.log(this.miColor);
        //console.log(this.miImagen);
        //console.log(this.miNombre);
    }
    openPage(pages) {
        if (pages.src != '#') {
            this.navCtrl.navigateRoot(pages.src);
        }
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
        this.navCtrl.navigateRoot('pre-ordenes');
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
                            //console.log(data);
                            loader.dismiss();
                        });
                    }
                    else {
                        //dispositivo
                        this.servicioGeo.postIngresoNative(this.objetoEntrada).then(response => {
                            let respuesta = JSON.parse(response.data);
                            //console.log(respuesta);
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
                    //console.log(this.itemsMenu);
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
                            //console.log(this.itemsMenu);
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
                            //console.log(this.itemsMenu);
                            loader.dismiss();
                            this.estaCargando = false;
                        });
                    }
                }
            }));
        });
    }
    openNotificacion(modulo) {
        if (modulo && modulo != '') {
            this.navCtrl.navigateRoot(modulo);
        }
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
            this.notificaciones = [];
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
            var fechaActual = moment__WEBPACK_IMPORTED_MODULE_11__();
            var fechaEvaluar = moment__WEBPACK_IMPORTED_MODULE_11__().add(5, 'days');
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
                        //console.log(data);
                        this.notificaciones = this.servNotificaciones.construyeNotificaciones(data);
                        this.estaCargando = false;
                        this.loading.dismiss();
                        this.estaCargandoNotificaciones = false;
                        //console.log(this.notificaciones);
                    }, error => {
                        console.log(error.message);
                        //revisamos igual las notificaciones ya que pueden haber
                        //aquellas que pasan por fuera de la api
                        this.notificaciones = this.servNotificaciones.construyeNotificaciones([]);
                        this.estaCargando = false;
                        this.loading.dismiss();
                        this.estaCargandoNotificaciones = false;
                    });
                }
                else {
                    //llamada native
                    this.cita.entregaPorMesNuevoLivianoApiNative(usuario.Id, usuario.IdRyf, usuario.NodId, mesConsultar, annoConsultar).then((response) => {
                        var data = JSON.parse(response.data);
                        //console.log(data);
                        this.notificaciones = this.servNotificaciones.construyeNotificaciones(data);
                        this.estaCargando = false;
                        this.loading.dismiss();
                        this.estaCargandoNotificaciones = false;
                    }).catch(error => {
                        console.log(error.message);
                        //revisamos igual las notificaciones ya que pueden haber
                        //aquellas que pasan por fuera de la api
                        this.notificaciones = this.servNotificaciones.construyeNotificaciones([]);
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
    mostrarNotificacionesModal(mostrar) {
        //this.slides.slideTo(0);
        /*     if (this.muestraNotificaciones == true && mostrar == true) {
              this.muestraNotificaciones = false;
              return;
            }
            if (this.muestraNotificaciones == false && mostrar == true) {
              this.muestraNotificaciones = true;
            } */
        this.goToNoficiaciones();
    }
    goToNoficiaciones() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const modal = yield this.modalCtrl.create({
                component: _modal_alertas_modal_alertas_page__WEBPACK_IMPORTED_MODULE_10__["ModalAlertasPage"],
                componentProps: {
                    'notificaciones': JSON.stringify(this.notificaciones)
                }
            });
            modal.onDidDismiss().then((data) => {
                if (data) {
                    console.log(data);
                }
            });
            return yield modal.present();
        });
    }
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