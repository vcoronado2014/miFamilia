function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["home-home-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/home/home.page.html":
  /*!***************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/home/home.page.html ***!
    \***************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppHomeHomePageHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ion-menu side=\"start\" menuId=\"first\" contentId=\"content\">\r\n \r\n  <ion-header> \r\n     <!-- <ion-toolbar [style.--background]=\"miColor\"> -->\r\n    <!-- <ion-toolbar color=\"primary\"> -->\r\n       <!-- <ion-title class=\"fcw\">Menu</ion-title> -->\r\n    <!-- </ion-toolbar> -->\r\n    <!-- menu avatar -->\r\n    <ion-item lines=\"none\" >\r\n     <ion-avatar class=\"avatar\" slot=\"start\">\r\n       <img *ngIf = \"miImagen != ''\" src={{miImagen}}>\r\n       <img *ngIf = \"miImagen == ''\" src=\"../assets/img/no-imagen.jpg\">\r\n     </ion-avatar>\r\n     <ion-row class=\"texAvatarContainer\">\r\n       <div class=\"text-avatar\">{{miNombre}}</div>\r\n       <div class=\"subtext-avatar\">{{miInstitucion}}</div>\r\n     </ion-row>\r\n   </ion-item>\r\n   </ion-header>\r\n   <ion-content class=\"back-app\">\r\n \r\n     <ion-list>\r\n       <ion-item *ngFor=\"let p of pages\" (click)=\"openPage(p)\" class=\"listItem\" button lines=\"none\" [ngStyle]=\"{'margin-left': p.esSubMenu ? '16px' : '0px'}\">\r\n         <ion-icon name={{p.icon}} slot=\"start\"></ion-icon>\r\n         <ion-label>\r\n           {{p.title}}\r\n         </ion-label>\r\n       </ion-item>\r\n       <!-- ajustes de la cuenta -->\r\n       <ion-item button lines=\"none\" (click)=\"abrirEditar()\" class=\"listItem\">\r\n         <ion-icon name=\"heart\" slot=\"start\"></ion-icon>\r\n         <ion-label>\r\n           Ajustes de la cuenta\r\n         </ion-label>\r\n       </ion-item>\r\n       <!-- cerrar sesión -->\r\n       <ion-item button lines=\"none\" (click)=\"logout()\" class=\"listItem\">\r\n         <ion-icon name=\"close\" slot=\"start\"></ion-icon>\r\n         <ion-label>\r\n           Cerrar sesión\r\n         </ion-label>\r\n       </ion-item>\r\n \r\n     </ion-list>\r\n \r\n   </ion-content>\r\n </ion-menu>\r\n \r\n <ion-header class=\"home header\">\r\n   <ion-toolbar  class=\"toolbar\" color=\"primary\">\r\n     <ion-buttons slot=\"start\">\r\n       <ion-menu-button class=\"home\"></ion-menu-button>\r\n     </ion-buttons>\r\n     <ion-title class=\"title\">Mi salud familiar</ion-title>\r\n     <!-- icono de notificaciones -->\r\n     <ion-buttons slot=\"end\"  style=\"padding-right: 16px;\" [hidden]=\"estaCargandoNotificaciones == false\">\r\n       <ion-spinner color=\"light\"></ion-spinner>\r\n     </ion-buttons>\r\n     <ion-buttons slot=\"end\"  style=\"padding-right: 16px;\" [hidden]=\"estaCargandoNotificaciones && notificaciones.length == 0\" (click)=\"mostrarNotificacionesModal(true)\">\r\n       <ion-icon [hidden]=\"notificaciones.length == 0\" class=\"fcw\" slot=\"icon-only\" name=\"notifications\" style=\"color:white;\"></ion-icon>\r\n       <ion-badge [hidden]=\"notificaciones.length == 0\" slot=\"end\" color=\"danger\" class=\"badge-notificaciones\">{{notificaciones.length}}</ion-badge>\r\n     </ion-buttons>\r\n   </ion-toolbar>\r\n </ion-header>\r\n <ion-content class=\"card-background-page-home back-app\" id=\"content\">\r\n   <!-- notificaciones lo comentamos para usar un modal -->\r\n<!--    <ion-slides [hidden]=\"muestraNotificaciones == false\" pager=\"true\" [options]=\"slideOpts\" #mySlider class=\"slides-back\">\r\n     <ion-slide *ngFor=\"let info of notificaciones\">\r\n       <div class=\"slide-content-padding\">\r\n         <app-content-slide [titulo]=\"info.Titulo\" [subTitulo]=\"info.Subtitulo\" [contenido]=\"info.Contenido\" [modulo]=\"info.IrA\"></app-content-slide>\r\n       </div>\r\n       <div class=\"slide-buttons-padding\">\r\n         <ion-grid>\r\n           <ion-row>\r\n             <ion-col size=\"6\">\r\n               <button [hidden]=\"info.IrA == null\" mat-flat-button (click)=\"openNotificacion(info.IrA)\">Ir...</button>\r\n             </ion-col>\r\n             <ion-col size=\"6\">\r\n               <button mat-raised-button color=\"accent\" class=\"boton\" (click)=\"moverSlide(info.Indice)\">SIGUIENTE</button>\r\n             </ion-col>\r\n           </ion-row>\r\n         </ion-grid>\r\n       </div>\r\n     </ion-slide>\r\n   </ion-slides> -->\r\n   <ion-grid>\r\n     <app-progress [mostrar]=\"estaCargando\" titulo=\"Buscando preferencias\"></app-progress>\r\n     <ion-row [hidden]=\"estaCargando\" class=\"ion-padding-top\">\r\n       <ion-col size=\"6\" *ngFor=\"let modulo of itemsMenu\">\r\n         <app-item-home [modulo]=\"modulo.NombreModulo\" [classImagen]=\"modulo.ClaseImagen\" [rutaImagen]=\"modulo.Imagen\"></app-item-home>\r\n       </ion-col>\r\n     </ion-row>\r\n   </ion-grid>\r\n </ion-content>";
    /***/
  },

  /***/
  "./src/app/home/home.module.ts":
  /*!*************************************!*\
    !*** ./src/app/home/home.module.ts ***!
    \*************************************/

  /*! exports provided: HomePageModule */

  /***/
  function srcAppHomeHomeModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "HomePageModule", function () {
      return HomePageModule;
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


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
    /* harmony import */


    var _home_page__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./home.page */
    "./src/app/home/home.page.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _angular_material_card__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! @angular/material/card */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/card.js");
    /* harmony import */


    var _angular_material_button__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! @angular/material/button */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/button.js");
    /* harmony import */


    var _components_components_module__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! ../components/components.module */
    "./src/app/components/components.module.ts");

    var HomePageModule = function HomePageModule() {
      _classCallCheck(this, HomePageModule);
    };

    HomePageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonicModule"], _angular_material_card__WEBPACK_IMPORTED_MODULE_7__["MatCardModule"], _angular_material_button__WEBPACK_IMPORTED_MODULE_8__["MatButtonModule"], _components_components_module__WEBPACK_IMPORTED_MODULE_9__["ComponentsModule"], _angular_router__WEBPACK_IMPORTED_MODULE_6__["RouterModule"].forChild([{
        path: '',
        component: _home_page__WEBPACK_IMPORTED_MODULE_5__["HomePage"]
      }])],
      declarations: [_home_page__WEBPACK_IMPORTED_MODULE_5__["HomePage"]]
    })], HomePageModule);
    /***/
  },

  /***/
  "./src/app/home/home.page.scss":
  /*!*************************************!*\
    !*** ./src/app/home/home.page.scss ***!
    \*************************************/

  /*! exports provided: default */

  /***/
  function srcAppHomeHomePageScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "#container {\n  text-align: center;\n  position: absolute;\n  left: 0;\n  right: 0;\n  top: 50%;\n  transform: translateY(-50%);\n}\n\n#container strong {\n  font-size: 20px;\n  line-height: 26px;\n}\n\n#container p {\n  font-size: 16px;\n  line-height: 22px;\n  color: #8c8c8c;\n  margin: 0;\n}\n\n#container a {\n  text-decoration: none;\n}\n\n.reservar {\n  margin-top: -70px;\n  float: right;\n  margin-right: 20px;\n  --background: var(--ion-color-primary);\n  color: white;\n  padding: 20px;\n  font-size: 1.2em;\n}\n\n.footer {\n  width: 100%;\n  position: fixed;\n  left: 0;\n  bottom: 0;\n  text-align: end;\n}\n\n/* elementos del menu */\n\n.badge-notificaciones {\n  --padding-top: 3px;\n  --padding-end: 4px;\n  --padding-bottom: 4px;\n  --padding-start: 4px;\n  border-radius: 16px;\n  position: absolute;\n  top: -10px;\n  left: 10px;\n}\n\n.slides-back {\n  background: #5133A5;\n  text-align: left;\n}\n\n.titulo-slide {\n  color: #F4F2FA;\n  font-size: 1em;\n  text-align: left;\n}\n\n.subtitulo-slide {\n  color: #AFA0D5;\n  text-align: left;\n}\n\n.boton {\n  float: right;\n}\n\n.swiper-pagination-bullet-active {\n  background: white;\n  opacity: 1;\n}\n\nion-slide {\n  display: block;\n  background: #5133A5;\n  text-align: left;\n  min-height: 200px;\n}\n\nion-slides {\n  --bullet-background: yellow;\n  --bullet-background-active: #ff4081;\n  --opacity: 1;\n}\n\n.swiper-pagination-bullet {\n  width: 8px;\n  height: 8px;\n  display: inline-block;\n  border-radius: 100%;\n  opacity: 1;\n}\n\n.slide-content-padding {\n  padding: 16px 16px 0px 16px;\n  margin-bottom: 5px;\n}\n\n.slide-buttons-padding {\n  padding: 0px 16px 16px 16px;\n}\n\n.header {\n  height: 56px;\n  font-family: Roboto, \"Helvetica Neue\", sans-serif;\n}\n\n.toolbar {\n  height: 56px;\n}\n\n.title {\n  font-family: Roboto, \"Helvetica Neue\", sans-serif;\n  font-size: 20px;\n  font-weight: 500;\n}\n\n.menu-button {\n  padding-top: 16px;\n}\n\n.avatar {\n  height: 40px;\n  width: 40px;\n}\n\n.texAvatarContainer {\n  flex-direction: column;\n  height: 70px;\n  padding-top: 16px;\n}\n\nion-icon {\n  color: #00000099;\n}\n\nion-item.listItem {\n  height: 48px;\n}\n\n.text-avatar {\n  font-size: 1.25em;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n  width: 80%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaG9tZS9DOlxcRGlzY28gRlxcYXBwX21pZmFtaWxpYV9naXRcXG1pRmFtaWxpYV9wcmUvc3JjXFxhcHBcXGhvbWVcXGhvbWUucGFnZS5zY3NzIiwic3JjL2FwcC9ob21lL2hvbWUucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0Usa0JBQUE7RUFFQSxrQkFBQTtFQUNBLE9BQUE7RUFDQSxRQUFBO0VBQ0EsUUFBQTtFQUNBLDJCQUFBO0FDQUY7O0FER0E7RUFDRSxlQUFBO0VBQ0EsaUJBQUE7QUNBRjs7QURHQTtFQUNFLGVBQUE7RUFDQSxpQkFBQTtFQUVBLGNBQUE7RUFFQSxTQUFBO0FDRkY7O0FES0E7RUFDRSxxQkFBQTtBQ0ZGOztBRElBO0VBQ0UsaUJBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7RUFDQSxzQ0FBQTtFQUNBLFlBQUE7RUFDQSxhQUFBO0VBQ0EsZ0JBQUE7QUNERjs7QURHQTtFQUNFLFdBQUE7RUFDQSxlQUFBO0VBQ0EsT0FBQTtFQUNBLFNBQUE7RUFDQSxlQUFBO0FDQUY7O0FERUEsdUJBQUE7O0FBQ0E7RUFDRSxrQkFBQTtFQUNBLGtCQUFBO0VBQ0EscUJBQUE7RUFDQSxvQkFBQTtFQUNBLG1CQUFBO0VBQ0Esa0JBQUE7RUFDQSxVQUFBO0VBQ0EsVUFBQTtBQ0NGOztBRENBO0VBQ0UsbUJBQUE7RUFDQSxnQkFBQTtBQ0VGOztBREFBO0VBQ0UsY0FBQTtFQUNBLGNBQUE7RUFDQSxnQkFBQTtBQ0dGOztBRERBO0VBQ0UsY0FBQTtFQUNBLGdCQUFBO0FDSUY7O0FERkE7RUFDRSxZQUFBO0FDS0Y7O0FESEE7RUFDRSxpQkFBQTtFQUNBLFVBQUE7QUNNRjs7QURKQTtFQUNFLGNBQUE7RUFDQSxtQkFBQTtFQUNBLGdCQUFBO0VBQ0EsaUJBQUE7QUNPRjs7QURMQTtFQUNFLDJCQUFBO0VBQ0EsbUNBQUE7RUFDQSxZQUFBO0FDUUY7O0FETkE7RUFDRSxVQUFBO0VBQ0EsV0FBQTtFQUNBLHFCQUFBO0VBQ0EsbUJBQUE7RUFDQSxVQUFBO0FDU0Y7O0FEUEE7RUFDRSwyQkFBQTtFQUNBLGtCQUFBO0FDVUY7O0FEUkE7RUFDRSwyQkFBQTtBQ1dGOztBRE5BO0VBQ0UsWUFBQTtFQUNBLGlEQUFBO0FDU0Y7O0FETkE7RUFDRSxZQUFBO0FDU0Y7O0FETkE7RUFDRSxpREFBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtBQ1NGOztBRE5BO0VBQ0UsaUJBQUE7QUNTRjs7QUROQTtFQUNFLFlBQUE7RUFDQSxXQUFBO0FDU0Y7O0FETkE7RUFDRSxzQkFBQTtFQUNBLFlBQUE7RUFDQSxpQkFBQTtBQ1NGOztBRE5BO0VBQ0UsZ0JBQUE7QUNTRjs7QUROQTtFQUNFLFlBQUE7QUNTRjs7QUROQTtFQUNFLGlCQUFBO0VBQ0EsZ0JBQUE7RUFDQSx1QkFBQTtFQUNBLG1CQUFBO0VBQ0EsVUFBQTtBQ1NGIiwiZmlsZSI6InNyYy9hcHAvaG9tZS9ob21lLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIiNjb250YWluZXIge1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuXHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIGxlZnQ6IDA7XHJcbiAgcmlnaHQ6IDA7XHJcbiAgdG9wOiA1MCU7XHJcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC01MCUpO1xyXG59XHJcblxyXG4jY29udGFpbmVyIHN0cm9uZyB7XHJcbiAgZm9udC1zaXplOiAyMHB4O1xyXG4gIGxpbmUtaGVpZ2h0OiAyNnB4O1xyXG59XHJcblxyXG4jY29udGFpbmVyIHAge1xyXG4gIGZvbnQtc2l6ZTogMTZweDtcclxuICBsaW5lLWhlaWdodDogMjJweDtcclxuXHJcbiAgY29sb3I6ICM4YzhjOGM7XHJcblxyXG4gIG1hcmdpbjogMDtcclxufVxyXG5cclxuI2NvbnRhaW5lciBhIHtcclxuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbn1cclxuLnJlc2VydmFye1xyXG4gIG1hcmdpbi10b3A6IC03MHB4O1xyXG4gIGZsb2F0OiByaWdodDtcclxuICBtYXJnaW4tcmlnaHQ6IDIwcHg7XHJcbiAgLS1iYWNrZ3JvdW5kOiB2YXIoLS1pb24tY29sb3ItcHJpbWFyeSk7XHJcbiAgY29sb3I6IHdoaXRlO1xyXG4gIHBhZGRpbmc6IDIwcHg7XHJcbiAgZm9udC1zaXplOiAxLjJlbTtcclxufVxyXG4uZm9vdGVyIHtcclxuICB3aWR0aDogMTAwJTtcclxuICBwb3NpdGlvbjogZml4ZWQ7XHJcbiAgbGVmdDogMDtcclxuICBib3R0b206IDA7XHJcbiAgdGV4dC1hbGlnbjogZW5kOztcclxufVxyXG4vKiBlbGVtZW50b3MgZGVsIG1lbnUgKi9cclxuLmJhZGdlLW5vdGlmaWNhY2lvbmVze1xyXG4gIC0tcGFkZGluZy10b3A6IDNweDtcclxuICAtLXBhZGRpbmctZW5kOiA0cHg7XHJcbiAgLS1wYWRkaW5nLWJvdHRvbTogNHB4O1xyXG4gIC0tcGFkZGluZy1zdGFydDogNHB4O1xyXG4gIGJvcmRlci1yYWRpdXM6IDE2cHg7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIHRvcDogLTEwcHg7XHJcbiAgbGVmdDogMTBweDtcclxufVxyXG4uc2xpZGVzLWJhY2t7XHJcbiAgYmFja2dyb3VuZDogIzUxMzNBNTtcclxuICB0ZXh0LWFsaWduOiBsZWZ0O1xyXG59XHJcbi50aXR1bG8tc2xpZGV7XHJcbiAgY29sb3I6ICNGNEYyRkE7XHJcbiAgZm9udC1zaXplOiAxZW07XHJcbiAgdGV4dC1hbGlnbjogbGVmdDtcclxufVxyXG4uc3VidGl0dWxvLXNsaWRle1xyXG4gIGNvbG9yOiAjQUZBMEQ1O1xyXG4gIHRleHQtYWxpZ246IGxlZnQ7XHJcbn1cclxuLmJvdG9ue1xyXG4gIGZsb2F0OiByaWdodDtcclxufVxyXG4uc3dpcGVyLXBhZ2luYXRpb24tYnVsbGV0LWFjdGl2ZSB7XHJcbiAgYmFja2dyb3VuZDogd2hpdGU7XHJcbiAgb3BhY2l0eTogMTtcclxufVxyXG5pb24tc2xpZGV7XHJcbiAgZGlzcGxheTogYmxvY2s7XHJcbiAgYmFja2dyb3VuZDogIzUxMzNBNTtcclxuICB0ZXh0LWFsaWduOiBsZWZ0O1xyXG4gIG1pbi1oZWlnaHQ6IDIwMHB4O1xyXG59XHJcbmlvbi1zbGlkZXN7XHJcbiAgLS1idWxsZXQtYmFja2dyb3VuZDogeWVsbG93O1xyXG4gIC0tYnVsbGV0LWJhY2tncm91bmQtYWN0aXZlOiAjZmY0MDgxO1xyXG4gIC0tb3BhY2l0eTogMTtcclxufVxyXG4uc3dpcGVyLXBhZ2luYXRpb24tYnVsbGV0IHtcclxuICB3aWR0aDogOHB4O1xyXG4gIGhlaWdodDogOHB4O1xyXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICBib3JkZXItcmFkaXVzOiAxMDAlO1xyXG4gIG9wYWNpdHk6IDE7XHJcbn1cclxuLnNsaWRlLWNvbnRlbnQtcGFkZGluZ3tcclxuICBwYWRkaW5nOiAxNnB4IDE2cHggMHB4IDE2cHg7XHJcbiAgbWFyZ2luLWJvdHRvbTogNXB4O1xyXG59XHJcbi5zbGlkZS1idXR0b25zLXBhZGRpbmd7XHJcbiAgcGFkZGluZzogMHB4IDE2cHggMTZweCAxNnB4O1xyXG59XHJcblxyXG4vL0FqdXN0ZXMgZGUgZXN0aWxvXHJcblxyXG4uaGVhZGVye1xyXG4gIGhlaWdodDogNTZweDtcclxuICBmb250LWZhbWlseTogUm9ib3RvLCBcIkhlbHZldGljYSBOZXVlXCIsIHNhbnMtc2VyaWY7XHJcbn1cclxuXHJcbi50b29sYmFye1xyXG4gIGhlaWdodDogNTZweDtcclxufVxyXG5cclxuLnRpdGxle1xyXG4gIGZvbnQtZmFtaWx5OiBSb2JvdG8sIFwiSGVsdmV0aWNhIE5ldWVcIiwgc2Fucy1zZXJpZjtcclxuICBmb250LXNpemU6IDIwcHg7XHJcbiAgZm9udC13ZWlnaHQ6IDUwMDtcclxufVxyXG5cclxuLm1lbnUtYnV0dG9ue1xyXG4gIHBhZGRpbmctdG9wOiAxNnB4O1xyXG59XHJcblxyXG4uYXZhdGFye1xyXG4gIGhlaWdodDogNDBweDtcclxuICB3aWR0aDogNDBweDtcclxufVxyXG5cclxuLnRleEF2YXRhckNvbnRhaW5lcntcclxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gIGhlaWdodDogNzBweDtcclxuICBwYWRkaW5nLXRvcDogMTZweDtcclxufVxyXG5cclxuaW9uLWljb24ge1xyXG4gIGNvbG9yOiAjMDAwMDAwOTk7XHJcbn1cclxuXHJcbmlvbi1pdGVtLmxpc3RJdGVtIHtcclxuICBoZWlnaHQ6IDQ4cHg7XHJcbn1cclxuXHJcbi50ZXh0LWF2YXRhcntcclxuICBmb250LXNpemU6IDEuMjVlbTtcclxuICBvdmVyZmxvdzpoaWRkZW47XHJcbiAgdGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7XHJcbiAgd2hpdGUtc3BhY2U6bm93cmFwO1xyXG4gIHdpZHRoOjgwJTtcclxufSIsIiNjb250YWluZXIge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgbGVmdDogMDtcbiAgcmlnaHQ6IDA7XG4gIHRvcDogNTAlO1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTUwJSk7XG59XG5cbiNjb250YWluZXIgc3Ryb25nIHtcbiAgZm9udC1zaXplOiAyMHB4O1xuICBsaW5lLWhlaWdodDogMjZweDtcbn1cblxuI2NvbnRhaW5lciBwIHtcbiAgZm9udC1zaXplOiAxNnB4O1xuICBsaW5lLWhlaWdodDogMjJweDtcbiAgY29sb3I6ICM4YzhjOGM7XG4gIG1hcmdpbjogMDtcbn1cblxuI2NvbnRhaW5lciBhIHtcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xufVxuXG4ucmVzZXJ2YXIge1xuICBtYXJnaW4tdG9wOiAtNzBweDtcbiAgZmxvYXQ6IHJpZ2h0O1xuICBtYXJnaW4tcmlnaHQ6IDIwcHg7XG4gIC0tYmFja2dyb3VuZDogdmFyKC0taW9uLWNvbG9yLXByaW1hcnkpO1xuICBjb2xvcjogd2hpdGU7XG4gIHBhZGRpbmc6IDIwcHg7XG4gIGZvbnQtc2l6ZTogMS4yZW07XG59XG5cbi5mb290ZXIge1xuICB3aWR0aDogMTAwJTtcbiAgcG9zaXRpb246IGZpeGVkO1xuICBsZWZ0OiAwO1xuICBib3R0b206IDA7XG4gIHRleHQtYWxpZ246IGVuZDtcbn1cblxuLyogZWxlbWVudG9zIGRlbCBtZW51ICovXG4uYmFkZ2Utbm90aWZpY2FjaW9uZXMge1xuICAtLXBhZGRpbmctdG9wOiAzcHg7XG4gIC0tcGFkZGluZy1lbmQ6IDRweDtcbiAgLS1wYWRkaW5nLWJvdHRvbTogNHB4O1xuICAtLXBhZGRpbmctc3RhcnQ6IDRweDtcbiAgYm9yZGVyLXJhZGl1czogMTZweDtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IC0xMHB4O1xuICBsZWZ0OiAxMHB4O1xufVxuXG4uc2xpZGVzLWJhY2sge1xuICBiYWNrZ3JvdW5kOiAjNTEzM0E1O1xuICB0ZXh0LWFsaWduOiBsZWZ0O1xufVxuXG4udGl0dWxvLXNsaWRlIHtcbiAgY29sb3I6ICNGNEYyRkE7XG4gIGZvbnQtc2l6ZTogMWVtO1xuICB0ZXh0LWFsaWduOiBsZWZ0O1xufVxuXG4uc3VidGl0dWxvLXNsaWRlIHtcbiAgY29sb3I6ICNBRkEwRDU7XG4gIHRleHQtYWxpZ246IGxlZnQ7XG59XG5cbi5ib3RvbiB7XG4gIGZsb2F0OiByaWdodDtcbn1cblxuLnN3aXBlci1wYWdpbmF0aW9uLWJ1bGxldC1hY3RpdmUge1xuICBiYWNrZ3JvdW5kOiB3aGl0ZTtcbiAgb3BhY2l0eTogMTtcbn1cblxuaW9uLXNsaWRlIHtcbiAgZGlzcGxheTogYmxvY2s7XG4gIGJhY2tncm91bmQ6ICM1MTMzQTU7XG4gIHRleHQtYWxpZ246IGxlZnQ7XG4gIG1pbi1oZWlnaHQ6IDIwMHB4O1xufVxuXG5pb24tc2xpZGVzIHtcbiAgLS1idWxsZXQtYmFja2dyb3VuZDogeWVsbG93O1xuICAtLWJ1bGxldC1iYWNrZ3JvdW5kLWFjdGl2ZTogI2ZmNDA4MTtcbiAgLS1vcGFjaXR5OiAxO1xufVxuXG4uc3dpcGVyLXBhZ2luYXRpb24tYnVsbGV0IHtcbiAgd2lkdGg6IDhweDtcbiAgaGVpZ2h0OiA4cHg7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgYm9yZGVyLXJhZGl1czogMTAwJTtcbiAgb3BhY2l0eTogMTtcbn1cblxuLnNsaWRlLWNvbnRlbnQtcGFkZGluZyB7XG4gIHBhZGRpbmc6IDE2cHggMTZweCAwcHggMTZweDtcbiAgbWFyZ2luLWJvdHRvbTogNXB4O1xufVxuXG4uc2xpZGUtYnV0dG9ucy1wYWRkaW5nIHtcbiAgcGFkZGluZzogMHB4IDE2cHggMTZweCAxNnB4O1xufVxuXG4uaGVhZGVyIHtcbiAgaGVpZ2h0OiA1NnB4O1xuICBmb250LWZhbWlseTogUm9ib3RvLCBcIkhlbHZldGljYSBOZXVlXCIsIHNhbnMtc2VyaWY7XG59XG5cbi50b29sYmFyIHtcbiAgaGVpZ2h0OiA1NnB4O1xufVxuXG4udGl0bGUge1xuICBmb250LWZhbWlseTogUm9ib3RvLCBcIkhlbHZldGljYSBOZXVlXCIsIHNhbnMtc2VyaWY7XG4gIGZvbnQtc2l6ZTogMjBweDtcbiAgZm9udC13ZWlnaHQ6IDUwMDtcbn1cblxuLm1lbnUtYnV0dG9uIHtcbiAgcGFkZGluZy10b3A6IDE2cHg7XG59XG5cbi5hdmF0YXIge1xuICBoZWlnaHQ6IDQwcHg7XG4gIHdpZHRoOiA0MHB4O1xufVxuXG4udGV4QXZhdGFyQ29udGFpbmVyIHtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgaGVpZ2h0OiA3MHB4O1xuICBwYWRkaW5nLXRvcDogMTZweDtcbn1cblxuaW9uLWljb24ge1xuICBjb2xvcjogIzAwMDAwMDk5O1xufVxuXG5pb24taXRlbS5saXN0SXRlbSB7XG4gIGhlaWdodDogNDhweDtcbn1cblxuLnRleHQtYXZhdGFyIHtcbiAgZm9udC1zaXplOiAxLjI1ZW07XG4gIG92ZXJmbG93OiBoaWRkZW47XG4gIHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzO1xuICB3aGl0ZS1zcGFjZTogbm93cmFwO1xuICB3aWR0aDogODAlO1xufSJdfQ== */";
    /***/
  },

  /***/
  "./src/app/home/home.page.ts":
  /*!***********************************!*\
    !*** ./src/app/home/home.page.ts ***!
    \***********************************/

  /*! exports provided: HomePage */

  /***/
  function srcAppHomeHomePageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "HomePage", function () {
      return HomePage;
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


    var _app_services_ServicioUtiles__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../../app/services/ServicioUtiles */
    "./src/app/services/ServicioUtiles.ts");
    /* harmony import */


    var _app_services_ServicioAcceso__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../../app/services/ServicioAcceso */
    "./src/app/services/ServicioAcceso.ts");
    /* harmony import */


    var _app_services_ServicioCitas__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ../../app/services/ServicioCitas */
    "./src/app/services/ServicioCitas.ts");
    /* harmony import */


    var _app_services_ServicioNotificacionesLocales__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ../../app/services/ServicioNotificacionesLocales */
    "./src/app/services/ServicioNotificacionesLocales.ts");
    /* harmony import */


    var _app_services_ServicioNotificaciones__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ../../app/services/ServicioNotificaciones */
    "./src/app/services/ServicioNotificaciones.ts");
    /* harmony import */


    var _app_services_ServicioGeo__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ../../app/services/ServicioGeo */
    "./src/app/services/ServicioGeo.ts");
    /* harmony import */


    var _app_services_ServicioParametrosApp__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! ../../app/services/ServicioParametrosApp */
    "./src/app/services/ServicioParametrosApp.ts");
    /* harmony import */


    var _app_services_ServicioInfoUsuario__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! ../../app/services/ServicioInfoUsuario */
    "./src/app/services/ServicioInfoUsuario.ts");
    /* harmony import */


    var _modal_alertas_modal_alertas_page__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! ../modal-alertas/modal-alertas.page */
    "./src/app/modal-alertas/modal-alertas.page.ts");
    /* harmony import */


    var moment__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
    /*! moment */
    "./node_modules/moment/moment.js");
    /* harmony import */


    var moment__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_12__); //modal
    //moment


    var HomePage = /*#__PURE__*/function () {
      function HomePage(navCtrl, toast, modalCtrl, platform, loading, menu, utiles, acceso, cita, servicioGeo, parametrosApp, servicioNotLocales, servNotificaciones, info) {
        _classCallCheck(this, HomePage);

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
        this.info = info; //nuevo slide

        this.slideOpts = {
          initialSlide: 0,
          speed: 500,
          pager: true
        };
        this.miColor = '#FF4081';
        this.pages = []; //datos para consultar citas

        this.runPaciente = '';
        this.codigoDeis = '';
        this.serviceType = '349'; //semanas

        this.semanas = []; //tiene disponibilidad

        this.tieneCitaVigente = false;
        this.usaAgenda = false; //para registrar la salida

        this.objetoEntrada = {
          VersionAppName: '',
          Plataforma: '',
          Token: '',
          VersionAppNumber: '',
          Fecha: new Date(),
          TipoOperacion: '1',
          Id: '0'
        };
        this.pushes = []; //para progress bar

        this.estaCargando = false;
        this.estaCargandoNotificaciones = false; //procesar los items del menu

        this.itemsMenu = []; //notificaciones

        this.notificaciones = [];
        this.muestraNotificaciones = false; //para generar data

        this.arrMediciones = [];
        this.arrAlergias = [];
        this.arrMorbidos = [];
      }

      _createClass(HomePage, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          moment__WEBPACK_IMPORTED_MODULE_12__["locale"]('es'); //this.miColor = this.utiles.entregaMiColor();

          this.usuarioAps = JSON.parse(sessionStorage.UsuarioAps);
          this.miColor = this.utiles.entregaColor(this.usuarioAps); //this.miImagen = this.utiles.entregaMiImagen();

          this.miImagen = this.utiles.entregaImagen(this.usuarioAps);
          this.miNombre = this.utiles.entregaMiNombre();

          if (this.usuarioAps.Establecimiento) {
            this.miInstitucion = this.usuarioAps.Establecimiento.RazonSocial;
          } //console.log(this.miColor);
          //console.log(this.miImagen);
          //console.log(this.miNombre);


          this.pages = this.utiles.entregaMenuPages(); //console.log(this.pages);

          this.runPaciente = this.utiles.insertarGuion(this.usuarioAps.Rut);
          this.codigoDeis = this.usuarioAps.ConfiguracionNodo.CodigoDeis2014;
          this.usaAgenda = this.utiles.entregaParametroUsaAgenda();
          this.buscarLogMovimientos(); //notificaciones locales
          //this.obtenerNotificaciones();
          //ACA ESTOY TRABAJANDO HAY UN ERROR EN API MANAGEMENT

          this.obtenerNotificacionesApi();
          /*     if (this.utiles.entregaParametroUsaAgenda()){
                this.buscarDisponibilidad();
              } */
          //nueva implementación

          this.miembrosPorAceptar();
        }
      }, {
        key: "obtenerDatosUsuarios",
        value: function obtenerDatosUsuarios() {
          var _this = this;

          this.arrMediciones = [];
          var arregloUsuarios = this.utiles.entregaArregloUsuarios();

          if (arregloUsuarios && arregloUsuarios.length > 0) {
            arregloUsuarios.forEach(function (usu) {
              if (_this.utiles.necesitaActualizarDatosPaciente(usu.Id)) {
                var entidad = {
                  UsuarioAps: usu,
                  Mediciones: null
                };

                if (!_this.utiles.isAppOnDevice()) {
                  //llamada web
                  _this.info.getIndicadorValorApi(usu.Id).subscribe(function (response) {
                    console.log(response);
                    entidad.Mediciones = response;

                    _this.arrMediciones.push(entidad);

                    localStorage.setItem('ANTECEDENTES', JSON.stringify(_this.arrMediciones));
                    localStorage.setItem('FECHA_ACTUALIZACION_ANTECEDENTES', moment__WEBPACK_IMPORTED_MODULE_12__().format('YYYY-MM-DD HH:mm')); //correcto
                    //this.procesarNuevoArregloValoresIndependiente(response, loader);
                  }, function (error) {
                    return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(_this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
                      return regeneratorRuntime.wrap(function _callee$(_context) {
                        while (1) {
                          switch (_context.prev = _context.next) {
                            case 0:
                              console.log(error.message);

                            case 1:
                            case "end":
                              return _context.stop();
                          }
                        }
                      }, _callee);
                    }));
                  });
                } else {
                  //llamada nativa
                  _this.info.getIndicadorValorNativeApi(usu.Id).then(function (response) {
                    //this.procesarIndicadorValor(JSON.parse(response.data), loader);
                    console.log(JSON.parse(response.data));
                    entidad.Mediciones = JSON.parse(response.data);

                    _this.arrMediciones.push(entidad);

                    localStorage.setItem('ANTECEDENTES', JSON.stringify(_this.arrMediciones));
                    localStorage.setItem('FECHA_ACTUALIZACION_ANTECEDENTES', moment__WEBPACK_IMPORTED_MODULE_12__().format('YYYY-MM-DD HH:mm')); //this.procesarNuevoArregloValoresIndependiente(JSON.parse(response.data), loader);
                  })["catch"](function (error) {
                    return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(_this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
                      return regeneratorRuntime.wrap(function _callee2$(_context2) {
                        while (1) {
                          switch (_context2.prev = _context2.next) {
                            case 0:
                              console.log(error.message);

                            case 1:
                            case "end":
                              return _context2.stop();
                          }
                        }
                      }, _callee2);
                    }));
                  });
                }
              }
            });
          }
        }
      }, {
        key: "obtenerAlergiasPacientes",
        value: function obtenerAlergiasPacientes() {
          var _this2 = this;

          this.arrAlergias = [];
          var arregloUsuarios = this.utiles.entregaArregloUsuarios();

          if (arregloUsuarios && arregloUsuarios.length > 0) {
            arregloUsuarios.forEach(function (usu) {
              if (_this2.utiles.necesitaActualizarAlergiasPacientes(usu.Id)) {
                var entidad = {
                  UsuarioAps: usu,
                  Alergias: null
                };

                if (!_this2.utiles.isAppOnDevice()) {
                  //llamada web
                  _this2.info.getAlergiasApi(usu.Id).subscribe(function (response) {
                    console.log(response);
                    entidad.Alergias = response;

                    _this2.arrAlergias.push(entidad);

                    localStorage.setItem('ALERGIAS', JSON.stringify(_this2.arrAlergias));
                    localStorage.setItem('FECHA_ACTUALIZACION_ALERGIAS', moment__WEBPACK_IMPORTED_MODULE_12__().format('YYYY-MM-DD HH:mm')); //correcto
                    //this.procesarNuevoArregloValoresIndependiente(response, loader);
                  }, function (error) {
                    return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(_this2, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee3() {
                      return regeneratorRuntime.wrap(function _callee3$(_context3) {
                        while (1) {
                          switch (_context3.prev = _context3.next) {
                            case 0:
                              console.log(error.message);

                            case 1:
                            case "end":
                              return _context3.stop();
                          }
                        }
                      }, _callee3);
                    }));
                  });
                } else {
                  //llamada nativa
                  _this2.info.getAlergiasNativeApi(usu.Id).then(function (response) {
                    //this.procesarIndicadorValor(JSON.parse(response.data), loader);
                    console.log(JSON.parse(response.data));
                    entidad.Alergias = JSON.parse(response.data);

                    _this2.arrAlergias.push(entidad);

                    localStorage.setItem('ALERGIAS', JSON.stringify(_this2.arrAlergias));
                    localStorage.setItem('FECHA_ACTUALIZACION_ALERGIAS', moment__WEBPACK_IMPORTED_MODULE_12__().format('YYYY-MM-DD HH:mm')); //this.procesarNuevoArregloValoresIndependiente(JSON.parse(response.data), loader);
                  })["catch"](function (error) {
                    return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(_this2, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee4() {
                      return regeneratorRuntime.wrap(function _callee4$(_context4) {
                        while (1) {
                          switch (_context4.prev = _context4.next) {
                            case 0:
                              console.log(error.message);

                            case 1:
                            case "end":
                              return _context4.stop();
                          }
                        }
                      }, _callee4);
                    }));
                  });
                }
              }
            });
          }
        }
      }, {
        key: "obtenerMorbidosPacientes",
        value: function obtenerMorbidosPacientes() {
          var _this3 = this;

          this.arrMorbidos = [];
          var arregloUsuarios = this.utiles.entregaArregloUsuarios();

          if (arregloUsuarios && arregloUsuarios.length > 0) {
            arregloUsuarios.forEach(function (usu) {
              if (_this3.utiles.necesitaActualizarMorbidosPacientes(usu.Id)) {
                var entidad = {
                  UsuarioAps: usu,
                  Morbidos: null
                };

                if (!_this3.utiles.isAppOnDevice()) {
                  //llamada web
                  _this3.info.postAntecedentesApi(usu.Id).subscribe(function (response) {
                    console.log(response);
                    entidad.Morbidos = response;

                    _this3.arrMorbidos.push(entidad);

                    localStorage.setItem('MORBIDOS', JSON.stringify(_this3.arrMorbidos));
                    localStorage.setItem('FECHA_ACTUALIZACION_MORBIDOS', moment__WEBPACK_IMPORTED_MODULE_12__().format('YYYY-MM-DD HH:mm')); //correcto
                    //this.procesarNuevoArregloValoresIndependiente(response, loader);
                  }, function (error) {
                    return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(_this3, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee5() {
                      return regeneratorRuntime.wrap(function _callee5$(_context5) {
                        while (1) {
                          switch (_context5.prev = _context5.next) {
                            case 0:
                              console.log(error.message);

                            case 1:
                            case "end":
                              return _context5.stop();
                          }
                        }
                      }, _callee5);
                    }));
                  });
                } else {
                  //llamada nativa
                  _this3.info.postAntecedentesNativeApi(usu.Id).then(function (response) {
                    //this.procesarIndicadorValor(JSON.parse(response.data), loader);
                    console.log(JSON.parse(response.data));
                    entidad.Morbidos = JSON.parse(response.data);

                    _this3.arrMorbidos.push(entidad);

                    localStorage.setItem('MORBIDOS', JSON.stringify(_this3.arrMorbidos));
                    localStorage.setItem('FECHA_ACTUALIZACION_MORBIDOS', moment__WEBPACK_IMPORTED_MODULE_12__().format('YYYY-MM-DD HH:mm')); //this.procesarNuevoArregloValoresIndependiente(JSON.parse(response.data), loader);
                  })["catch"](function (error) {
                    return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(_this3, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee6() {
                      return regeneratorRuntime.wrap(function _callee6$(_context6) {
                        while (1) {
                          switch (_context6.prev = _context6.next) {
                            case 0:
                              console.log(error.message);

                            case 1:
                            case "end":
                              return _context6.stop();
                          }
                        }
                      }, _callee6);
                    }));
                  });
                }
              }
            });
          }
        }
      }, {
        key: "miembrosPorAceptar",
        value: function miembrosPorAceptar() {
          if (localStorage.getItem('FAMILIA-POR-ACEPTAR')) {
            var arrFam = JSON.parse(localStorage.getItem('FAMILIA-POR-ACEPTAR'));

            if (arrFam.length > 0) {
              this.utiles.presentToast('Tienes familia asociada que podrías aceptar, pincha en la notificación para poder hacerlo', 'bottom', 5000);
            }
          }
        }
      }, {
        key: "ionViewWillEnter",
        value: function ionViewWillEnter() {
          //si existen cambios se setean nuevamente
          //this.miColor = this.utiles.entregaMiColor();
          this.miColor = this.utiles.entregaColor(this.usuarioAps); //this.miImagen = this.utiles.entregaMiImagen();

          this.miImagen = this.utiles.entregaImagen(this.usuarioAps);
          this.miNombre = this.utiles.entregaMiNombre();
          console.log('will enter home');
          this.obtenerDatosUsuarios();
          this.obtenerAlergiasPacientes();
          this.obtenerMorbidosPacientes(); //console.log(this.miImagen);
          //console.log(this.miNombre);
        }
      }, {
        key: "openPage",
        value: function openPage(pages) {
          if (pages.src != '#') {
            this.navCtrl.navigateRoot(pages.src);
          }
        }
      }, {
        key: "openFamiliaPage",
        value: function openFamiliaPage() {
          this.navCtrl.navigateRoot('familia');
        }
      }, {
        key: "openAntePage",
        value: function openAntePage() {
          if (sessionStorage.getItem("RSS_ID")) {
            if (this.parametrosApp.USA_LOG_MODULOS()) {
              this.utiles.registrarMovimiento(sessionStorage.getItem("RSS_ID"), 'ANTECEDENTES');
            }
          }

          this.navCtrl.navigateRoot('antecedentes');
        }
      }, {
        key: "openOrdenesPage",
        value: function openOrdenesPage() {
          if (sessionStorage.getItem("RSS_ID")) {
            if (this.parametrosApp.USA_LOG_MODULOS()) {
              this.utiles.registrarMovimiento(sessionStorage.getItem("RSS_ID"), 'EXAMENES');
            }
          }

          this.navCtrl.navigateRoot('pre-ordenes');
        }
      }, {
        key: "openCalendarioPage",
        value: function openCalendarioPage() {
          //registramos movimiento
          if (sessionStorage.getItem("RSS_ID")) {
            if (this.parametrosApp.USA_LOG_MODULOS()) {
              this.utiles.registrarMovimiento(sessionStorage.getItem("RSS_ID"), 'CALENDARIO');
            }
          }

          this.navCtrl.navigateRoot('calendario');
        }
      }, {
        key: "logout",
        value: function logout() {
          //aca debemos registrar el fin de la session
          this.registrarSalida();
          this.acceso.logout();
          this.navCtrl.navigateRoot('nuevo-login');
        }
      }, {
        key: "openReservarHoraPage",
        value: function openReservarHoraPage() {
          this.navCtrl.navigateRoot('pre-tiposatencion');
        }
      }, {
        key: "abrirEditar",
        value: function abrirEditar() {
          var registro = null;

          if (localStorage.getItem('REGISTRO')) {
            registro = JSON.parse(localStorage.getItem('REGISTRO'));
            var navigationExtras = {
              queryParams: {
                usuario: JSON.stringify(registro),
                EstaEditando: true
              }
            }; //this.dismiss();

            this.navCtrl.navigateRoot(['registro-usuario'], navigationExtras);
          } else {
            this.utiles.presentToast("No puedes editar ya que no te encuentras registrado", "bottom", 3000);
          }
        }
      }, {
        key: "dismiss",
        value: function dismiss() {
          this.modalCtrl.dismiss();
        }
      }, {
        key: "registrarSalida",
        value: function registrarSalida() {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee8() {
            var _this4 = this;

            var loader;
            return regeneratorRuntime.wrap(function _callee8$(_context8) {
              while (1) {
                switch (_context8.prev = _context8.next) {
                  case 0:
                    if (!sessionStorage.getItem('RSS_ID')) {
                      _context8.next = 13;
                      break;
                    }

                    this.objetoEntrada.VersionAppName = localStorage.getItem('version_app_name');
                    this.objetoEntrada.Plataforma = localStorage.getItem('plataforma');
                    this.objetoEntrada.VersionAppNumber = localStorage.getItem('version_number');
                    this.objetoEntrada.Token = localStorage.getItem('token_dispositivo');
                    this.objetoEntrada.Fecha = new Date();
                    this.objetoEntrada.Id = sessionStorage.getItem("RSS_ID");
                    this.objetoEntrada.TipoOperacion = '1';
                    _context8.next = 10;
                    return this.loading.create({
                      message: 'Creando...<br>registro de sessión',
                      duration: 2000
                    });

                  case 10:
                    loader = _context8.sent;
                    _context8.next = 13;
                    return loader.present().then(function () {
                      return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(_this4, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee7() {
                        return regeneratorRuntime.wrap(function _callee7$(_context7) {
                          while (1) {
                            switch (_context7.prev = _context7.next) {
                              case 0:
                                if (!this.utiles.isAppOnDevice()) {
                                  //web
                                  this.servicioGeo.postIngreso(this.objetoEntrada).subscribe(function (data) {
                                    //console.log(data);
                                    loader.dismiss();
                                  });
                                } else {
                                  //dispositivo
                                  this.servicioGeo.postIngresoNative(this.objetoEntrada).then(function (response) {
                                    var respuesta = JSON.parse(response.data); //console.log(respuesta);

                                    loader.dismiss();
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
        } //para obtener los movimientos en la app

      }, {
        key: "buscarLogMovimientos",
        value: function buscarLogMovimientos() {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee10() {
            var _this5 = this;

            var idDispositivo, cantidadDias, loader;
            return regeneratorRuntime.wrap(function _callee10$(_context10) {
              while (1) {
                switch (_context10.prev = _context10.next) {
                  case 0:
                    idDispositivo = localStorage.getItem('token_dispositivo');
                    cantidadDias = this.parametrosApp.DIAS_LOG_MODULOS();
                    this.estaCargando = true;
                    _context10.next = 5;
                    return this.loading.create({
                      cssClass: 'loading-vacio',
                      showBackdrop: false,
                      spinner: null
                    });

                  case 5:
                    loader = _context10.sent;
                    _context10.next = 8;
                    return loader.present().then(function () {
                      return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(_this5, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee9() {
                        var _this6 = this;

                        return regeneratorRuntime.wrap(function _callee9$(_context9) {
                          while (1) {
                            switch (_context9.prev = _context9.next) {
                              case 0:
                                //si ya se encuentra no es necesario volverlo a cargar
                                if (sessionStorage.getItem('LOG_MOVIMIENTOS')) {
                                  this.itemsMenu = JSON.parse(sessionStorage.getItem('LOG_MOVIMIENTOS')); //console.log(this.itemsMenu);

                                  loader.dismiss();
                                  this.estaCargando = false;
                                } else {
                                  if (!this.utiles.isAppOnDevice()) {
                                    //llamada web
                                    this.servicioGeo.getMovimientos(cantidadDias, idDispositivo).subscribe(function (response) {
                                      //procesar
                                      _this6.itemsMenu = _this6.utiles.entregaArregloHome(response); //lo guardaremos en una variable de sesión para que no 
                                      //se carge constantemente, según ultima observación de 
                                      //juan moran

                                      sessionStorage.setItem('LOG_MOVIMIENTOS', JSON.stringify(_this6.itemsMenu)); //console.log(this.itemsMenu);

                                      loader.dismiss();
                                      _this6.estaCargando = false;
                                    });
                                  } else {
                                    //llamada nativa
                                    this.servicioGeo.getMovimientosNative(cantidadDias, idDispositivo).then(function (response) {
                                      //procesar
                                      var data = JSON.parse(response.data);
                                      _this6.itemsMenu = _this6.utiles.entregaArregloHome(data); //console.log(this.itemsMenu);

                                      loader.dismiss();
                                      _this6.estaCargando = false;
                                    });
                                  }
                                }

                              case 1:
                              case "end":
                                return _context9.stop();
                            }
                          }
                        }, _callee9, this);
                      }));
                    });

                  case 8:
                  case "end":
                    return _context10.stop();
                }
              }
            }, _callee10, this);
          }));
        }
      }, {
        key: "openNotificacion",
        value: function openNotificacion(modulo) {
          if (modulo && modulo != '') {
            this.navCtrl.navigateRoot(modulo);
          }
        }
      }, {
        key: "openGenerico",
        value: function openGenerico(modulo) {
          var pageName = modulo.toLowerCase();

          if (modulo == 'EXAMENES') {
            pageName = 'ordenes';
          } //registramos movimiento


          if (sessionStorage.getItem("RSS_ID")) {
            if (this.parametrosApp.USA_LOG_MODULOS()) {
              this.utiles.registrarMovimiento(sessionStorage.getItem("RSS_ID"), modulo.toUpperCase());
            }
          }

          this.navCtrl.navigateRoot(pageName);
        } //notificaciones

      }, {
        key: "obtenerNotificaciones",
        value: function obtenerNotificaciones() {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee12() {
            var _this7 = this;

            var loader;
            return regeneratorRuntime.wrap(function _callee12$(_context12) {
              while (1) {
                switch (_context12.prev = _context12.next) {
                  case 0:
                    this.estaCargando = true;
                    this.estaCargandoNotificaciones = true;
                    _context12.next = 4;
                    return this.loading.create({
                      cssClass: 'loading-vacio',
                      showBackdrop: false,
                      spinner: null
                    });

                  case 4:
                    loader = _context12.sent;
                    _context12.next = 7;
                    return loader.present().then(function () {
                      return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(_this7, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee11() {
                        return regeneratorRuntime.wrap(function _callee11$(_context11) {
                          while (1) {
                            switch (_context11.prev = _context11.next) {
                              case 0:
                                _context11.next = 2;
                                return this.servicioNotLocales.getAll();

                              case 2:
                                this.notificaciones = _context11.sent;
                                //console.log(this.notificaciones);
                                this.estaCargando = false;
                                this.estaCargandoNotificaciones = false;

                              case 5:
                              case "end":
                                return _context11.stop();
                            }
                          }
                        }, _callee11, this);
                      }));
                    });

                  case 7:
                  case "end":
                    return _context12.stop();
                }
              }
            }, _callee12, this);
          }));
        }
      }, {
        key: "obtenerNotificacionesApi",
        value: function obtenerNotificacionesApi() {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee14() {
            var _this8 = this;

            var loader, usuario, annoConsultar, mesConsultar, fechaActual, fechaEvaluar, mesActual, mesEvaluar;
            return regeneratorRuntime.wrap(function _callee14$(_context14) {
              while (1) {
                switch (_context14.prev = _context14.next) {
                  case 0:
                    this.notificaciones = [];
                    this.estaCargando = true;
                    this.estaCargandoNotificaciones = true;
                    _context14.next = 5;
                    return this.loading.create({
                      cssClass: 'loading-vacio',
                      showBackdrop: false,
                      spinner: null
                    });

                  case 5:
                    loader = _context14.sent;
                    usuario = null;

                    if (localStorage.getItem('UsuarioAps')) {
                      usuario = JSON.parse(localStorage.getItem('UsuarioAps'));
                    }

                    annoConsultar = 0;
                    mesConsultar = 0;
                    fechaActual = moment__WEBPACK_IMPORTED_MODULE_12__();
                    fechaEvaluar = moment__WEBPACK_IMPORTED_MODULE_12__().add(5, 'days');
                    mesActual = {
                      mes: fechaActual.month() + 1,
                      anno: fechaActual.year()
                    };
                    mesEvaluar = {
                      mes: fechaEvaluar.month() + 1,
                      anno: fechaEvaluar.year()
                    }; //debemos ver si en los 5 dias de diferencia hay dos meses o un mes

                    if (mesActual.mes == mesEvaluar.mes && mesActual.anno == mesEvaluar.anno) {
                      //es le mismo mes
                      mesConsultar = mesActual.mes;
                      annoConsultar = mesActual.anno;
                    } else {
                      //hay diferencia, por tanto se toma el ultimo mes
                      mesConsultar = mesEvaluar.mes;
                      annoConsultar = mesEvaluar.anno;
                    }

                    _context14.next = 17;
                    return loader.present().then(function () {
                      return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(_this8, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee13() {
                        var _this9 = this;

                        return regeneratorRuntime.wrap(function _callee13$(_context13) {
                          while (1) {
                            switch (_context13.prev = _context13.next) {
                              case 0:
                                if (!this.utiles.isAppOnDevice()) {
                                  //llamada web
                                  this.cita.entregaPorMesNuevoLivianoApi(usuario.Id, usuario.IdRyf, usuario.NodId, mesConsultar, annoConsultar).subscribe(function (response) {
                                    var data = response; //console.log(data);

                                    _this9.notificaciones = _this9.servNotificaciones.construyeNotificaciones(data);
                                    _this9.estaCargando = false;

                                    _this9.loading.dismiss();

                                    _this9.estaCargandoNotificaciones = false; //console.log(this.notificaciones);
                                  }, function (error) {
                                    console.log(error.message); //revisamos igual las notificaciones ya que pueden haber
                                    //aquellas que pasan por fuera de la api

                                    _this9.notificaciones = _this9.servNotificaciones.construyeNotificaciones([]);
                                    _this9.estaCargando = false;

                                    _this9.loading.dismiss();

                                    _this9.estaCargandoNotificaciones = false;
                                  });
                                } else {
                                  //llamada native
                                  this.cita.entregaPorMesNuevoLivianoApiNative(usuario.Id, usuario.IdRyf, usuario.NodId, mesConsultar, annoConsultar).then(function (response) {
                                    var data = JSON.parse(response.data); //console.log(data);

                                    _this9.notificaciones = _this9.servNotificaciones.construyeNotificaciones(data);
                                    _this9.estaCargando = false;

                                    _this9.loading.dismiss();

                                    _this9.estaCargandoNotificaciones = false;
                                  })["catch"](function (error) {
                                    console.log(error.message); //revisamos igual las notificaciones ya que pueden haber
                                    //aquellas que pasan por fuera de la api

                                    _this9.notificaciones = _this9.servNotificaciones.construyeNotificaciones([]);
                                    _this9.estaCargando = false;

                                    _this9.loading.dismiss();

                                    _this9.estaCargandoNotificaciones = false;
                                  });
                                }

                              case 1:
                              case "end":
                                return _context13.stop();
                            }
                          }
                        }, _callee13, this);
                      }));
                    });

                  case 17:
                  case "end":
                    return _context14.stop();
                }
              }
            }, _callee14, this);
          }));
        }
      }, {
        key: "openItemPage",
        value: function openItemPage(modulo) {
          this.openGenerico(modulo);
        } //para procesar citas

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

      }, {
        key: "mostrarNotificacionesModal",
        value: function mostrarNotificacionesModal(mostrar) {
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
      }, {
        key: "goToNoficiaciones",
        value: function goToNoficiaciones() {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee15() {
            var modal;
            return regeneratorRuntime.wrap(function _callee15$(_context15) {
              while (1) {
                switch (_context15.prev = _context15.next) {
                  case 0:
                    _context15.next = 2;
                    return this.modalCtrl.create({
                      component: _modal_alertas_modal_alertas_page__WEBPACK_IMPORTED_MODULE_11__["ModalAlertasPage"],
                      componentProps: {
                        'notificaciones': JSON.stringify(this.notificaciones)
                      }
                    });

                  case 2:
                    modal = _context15.sent;
                    modal.onDidDismiss().then(function (data) {
                      if (data) {
                        console.log(data);
                      }
                    });
                    _context15.next = 6;
                    return modal.present();

                  case 6:
                    return _context15.abrupt("return", _context15.sent);

                  case 7:
                  case "end":
                    return _context15.stop();
                }
              }
            }, _callee15, this);
          }));
        }
      }, {
        key: "mostrarNotificaciones",
        value: function mostrarNotificaciones(mostrar) {
          this.slides.slideTo(0);

          if (this.muestraNotificaciones == true && mostrar == true) {
            this.muestraNotificaciones = false;
            return;
          }

          if (this.muestraNotificaciones == false && mostrar == true) {
            this.muestraNotificaciones = true;
          }
        }
      }, {
        key: "moverSlide",
        value: function moverSlide(indice) {
          if (indice <= this.notificaciones.length - 1) {
            this.slides.slideNext();
          } else {
            //this.slides.slidePrev();
            //lo volvemos al inicio
            this.slides.slideTo(0);
          }
        }
      }]);

      return HomePage;
    }();

    HomePage.ctorParameters = function () {
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
        type: _app_services_ServicioUtiles__WEBPACK_IMPORTED_MODULE_3__["ServicioUtiles"]
      }, {
        type: _app_services_ServicioAcceso__WEBPACK_IMPORTED_MODULE_4__["ServicioAcceso"]
      }, {
        type: _app_services_ServicioCitas__WEBPACK_IMPORTED_MODULE_5__["ServicioCitas"]
      }, {
        type: _app_services_ServicioGeo__WEBPACK_IMPORTED_MODULE_8__["ServicioGeo"]
      }, {
        type: _app_services_ServicioParametrosApp__WEBPACK_IMPORTED_MODULE_9__["ServicioParametrosApp"]
      }, {
        type: _app_services_ServicioNotificacionesLocales__WEBPACK_IMPORTED_MODULE_6__["ServicioNotificacionesLocales"]
      }, {
        type: _app_services_ServicioNotificaciones__WEBPACK_IMPORTED_MODULE_7__["ServicioNotificaciones"]
      }, {
        type: _app_services_ServicioInfoUsuario__WEBPACK_IMPORTED_MODULE_10__["ServicioInfoUsuario"]
      }];
    };

    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('mySlider', {
      "static": true
    })], HomePage.prototype, "slides", void 0);
    HomePage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-home',
      template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! raw-loader!./home.page.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/home/home.page.html"))["default"],
      styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! ./home.page.scss */
      "./src/app/home/home.page.scss"))["default"]]
    })], HomePage);
    /***/
  }
}]);
//# sourceMappingURL=home-home-module-es5.js.map