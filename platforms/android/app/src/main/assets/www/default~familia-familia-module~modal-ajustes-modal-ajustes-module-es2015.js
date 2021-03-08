(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["default~familia-familia-module~modal-ajustes-modal-ajustes-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/modal-ajustes/modal-ajustes.page.html":
/*!*********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modal-ajustes/modal-ajustes.page.html ***!
  \*********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\r\n  <ion-toolbar color=\"primary\">\r\n    <ion-title class=\"home\">Ajustes {{nombrePaciente}}</ion-title>\r\n    <ion-buttons slot=\"end\" class=\"pdr10\" (click)=\"dismiss()\">\r\n      <ion-icon class=\"home\" slot=\"icon-only\" name=\"close\"></ion-icon>\r\n    </ion-buttons>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content class=\"back-app\">\r\n  <!-- la imagen -->\r\n  <ion-card>\r\n    <ion-card-header>\r\n     <!--  <ion-card-subtitle>Card Subtitle</ion-card-subtitle> -->\r\n      <ion-card-title>Mi imagen</ion-card-title>\r\n    </ion-card-header>\r\n    <ion-card-content>\r\n      <div>\r\n        <img [src]=\"image\" *ngIf=\"image\" />\r\n      </div>\r\n    </ion-card-content>\r\n  </ion-card>\r\n  <!-- control abrir archivos -->\r\n  <ion-list lines=\"none\">\r\n    <ion-item>\r\n      <ion-note id=\"profile_image\" color=\"primary\">Seleccione el archivo</ion-note>\r\n    </ion-item>\r\n    <ion-item>\r\n      <ion-input  type=\"file\" accept=\"image/*\" (change)=\"changeListener($event)\"></ion-input>\r\n    </ion-item>\r\n  </ion-list>\r\n  <ion-row class=\"ion-padding\">\r\n    \r\n<!--     <button  class=\"button-registrarse\" mat-button\r\n          color=\"primary\">Cambiar mis datos y/o clave</button> -->\r\n          <button mat-raised-button color=\"primary\" (click)=\"abrirEditar()\" style=\"width: 90%; margin-left: 5%; height:36px;background: #3880ff;color:white;\" >Cambiar mis datos y/o clave</button>\r\n  </ion-row>\r\n  <!-- los colores -->\r\n  <!-- la paleta de colores la comentamos ya que desde aca debería modificar su perfil -->\r\n<!--   <ion-card>\r\n    <ion-grid>\r\n      <ion-card-content>\r\n        <ion-row>\r\n          <ion-col size=\"5\">\r\n              <ion-label stacked class=\"label-seleccione\">Color Seleccionado:</ion-label>\r\n          </ion-col>\r\n          <ion-col size=\"3\">\r\n            <div class=\"col-color\" [ngStyle]=\"{'background-color': color}\" style=\"height: 100%; width: 100%;\"></div>\r\n          </ion-col>\r\n          <ion-col size=\"4\" class=\"ion-text-right\">\r\n            <ion-button size=\"small\" (click)=\"putColor()\">Guardar</ion-button>\r\n          </ion-col>\r\n        </ion-row>\r\n      </ion-card-content>\r\n      <ion-row>\r\n        <ion-col style=\"background:#330000\" (click)=\"setColor('#330000')\">&nbsp;</ion-col>\r\n        <ion-col style=\"background:#331900\" (click)=\"setColor('#331900')\">&nbsp;</ion-col>\r\n        <ion-col style=\"background:#333300\" (click)=\"setColor('#333300')\">&nbsp;</ion-col>\r\n        <ion-col style=\"background:#193300\" (click)=\"setColor('#193300')\">&nbsp;</ion-col>\r\n        <ion-col style=\"background:#003300\" (click)=\"setColor('#003300')\">&nbsp;</ion-col>\r\n        <ion-col style=\"background:#003319\" (click)=\"setColor('#003319')\">&nbsp;</ion-col>\r\n        <ion-col style=\"background:#003333\" (click)=\"setColor('#003333')\">&nbsp;</ion-col>\r\n        <ion-col style=\"background:#001933\" (click)=\"setColor('#001933')\">&nbsp;</ion-col>\r\n        <ion-col style=\"background:#000033\" (click)=\"setColor('#000033')\">&nbsp;</ion-col>\r\n        <ion-col style=\"background:#190033\" (click)=\"setColor('#190033')\">&nbsp;</ion-col>\r\n        <ion-col style=\"background:#330033\" (click)=\"setColor('#330033')\">&nbsp;</ion-col>\r\n        <ion-col style=\"background:#330019\" (click)=\"setColor('#330019')\">&nbsp;</ion-col>\r\n        <ion-col style=\"background:#000000\" (click)=\"setColor('#000000')\">&nbsp;</ion-col>\r\n      </ion-row>\r\n      <ion-row>\r\n        <ion-col style=\"background:#660000\" (click)=\"setColor('#660000')\">&nbsp;</ion-col>\r\n        <ion-col style=\"background:#663300\" (click)=\"setColor('#663300')\">&nbsp;</ion-col>\r\n        <ion-col style=\"background:#666600\" (click)=\"setColor('#666600')\">&nbsp;</ion-col>\r\n        <ion-col style=\"background:#336600\" (click)=\"setColor('#336600')\">&nbsp;</ion-col>\r\n        <ion-col style=\"background:#006600\" (click)=\"setColor('#006600')\">&nbsp;</ion-col>\r\n        <ion-col style=\"background:#006633\" (click)=\"setColor('#006633')\">&nbsp;</ion-col>\r\n        <ion-col style=\"background:#006666\" (click)=\"setColor('#006666')\">&nbsp;</ion-col>\r\n        <ion-col style=\"background:#003366\" (click)=\"setColor('#003366')\">&nbsp;</ion-col>\r\n        <ion-col style=\"background:#000066\" (click)=\"setColor('#000066')\">&nbsp;</ion-col>\r\n        <ion-col style=\"background:#330066\" (click)=\"setColor('#330066')\">&nbsp;</ion-col>\r\n        <ion-col style=\"background:#660066\" (click)=\"setColor('#660066')\">&nbsp;</ion-col>\r\n        <ion-col style=\"background:#660033\" (click)=\"setColor('#660033')\">&nbsp;</ion-col>\r\n        <ion-col style=\"background:#202020\" (click)=\"setColor('#202020')\">&nbsp;</ion-col>\r\n      </ion-row>\r\n      <ion-row>\r\n        <ion-col style=\"background:#990000\" (click)=\"setColor('#990000')\">&nbsp;</ion-col>\r\n        <ion-col style=\"background:#994C00\" (click)=\"setColor('#994C00')\">&nbsp;</ion-col>\r\n        <ion-col style=\"background:#999900\" (click)=\"setColor('#999900')\">&nbsp;</ion-col>\r\n        <ion-col style=\"background:#4C9900\" (click)=\"setColor('#4C9900')\">&nbsp;</ion-col>\r\n        <ion-col style=\"background:#009900\" (click)=\"setColor('#009900')\">&nbsp;</ion-col>\r\n        <ion-col style=\"background:#00994C\" (click)=\"setColor('#00994C')\">&nbsp;</ion-col>\r\n        <ion-col style=\"background:#009999\" (click)=\"setColor('#009999')\">&nbsp;</ion-col>\r\n        <ion-col style=\"background:#004C99\" (click)=\"setColor('#004C99')\">&nbsp;</ion-col>\r\n        <ion-col style=\"background:#000099\" (click)=\"setColor('#000099')\">&nbsp;</ion-col>\r\n        <ion-col style=\"background:#4C0099\" (click)=\"setColor('#4C0099')\">&nbsp;</ion-col>\r\n        <ion-col style=\"background:#990099\" (click)=\"setColor('#990099')\">&nbsp;</ion-col>\r\n        <ion-col style=\"background:#99004C\" (click)=\"setColor('#99004C')\">&nbsp;</ion-col>\r\n        <ion-col style=\"background:#404040\" (click)=\"setColor('#404040')\">&nbsp;</ion-col>\r\n      </ion-row>\r\n      <ion-row>\r\n        <ion-col style=\"background:#CC0000\" (click)=\"setColor('#CC0000')\">&nbsp;</ion-col>\r\n        <ion-col style=\"background:#CC6600\" (click)=\"setColor('#CC6600')\">&nbsp;</ion-col>\r\n        <ion-col style=\"background:#CCCC00\" (click)=\"setColor('#CCCC00')\">&nbsp;</ion-col>\r\n        <ion-col style=\"background:#66CC00\" (click)=\"setColor('#66CC00')\">&nbsp;</ion-col>\r\n        <ion-col style=\"background:#00CC00\" (click)=\"setColor('#00CC00')\">&nbsp;</ion-col>\r\n        <ion-col style=\"background:#00CC66\" (click)=\"setColor('#00CC66')\">&nbsp;</ion-col>\r\n        <ion-col style=\"background:#00CCCC\" (click)=\"setColor('#00CCCC')\">&nbsp;</ion-col>\r\n        <ion-col style=\"background:#0066CC\" (click)=\"setColor('#0066CC')\">&nbsp;</ion-col>\r\n        <ion-col style=\"background:#0000CC\" (click)=\"setColor('#0000CC')\">&nbsp;</ion-col>\r\n        <ion-col style=\"background:#6600CC\" (click)=\"setColor('#6600CC')\">&nbsp;</ion-col>\r\n        <ion-col style=\"background:#CC00CC\" (click)=\"setColor('#CC00CC')\">&nbsp;</ion-col>\r\n        <ion-col style=\"background:#CC0066\" (click)=\"setColor('#CC0066')\">&nbsp;</ion-col>\r\n        <ion-col style=\"background:#606060\" (click)=\"setColor('#606060')\">&nbsp;</ion-col>\r\n      </ion-row>\r\n      <ion-row>\r\n        <ion-col style=\"background:#FF0000\" (click)=\"setColor('#FF0000')\">&nbsp;</ion-col>\r\n        <ion-col style=\"background:#FF8000\" (click)=\"setColor('#FF8000')\">&nbsp;</ion-col>\r\n        <ion-col style=\"background:#FFFF00\" (click)=\"setColor('#FFFF00')\">&nbsp;</ion-col>\r\n        <ion-col style=\"background:#80FF00\" (click)=\"setColor('#80FF00')\">&nbsp;</ion-col>\r\n        <ion-col style=\"background:#00FF00\" (click)=\"setColor('#00FF00')\">&nbsp;</ion-col>\r\n        <ion-col style=\"background:#00FF80\" (click)=\"setColor('#00FF80')\">&nbsp;</ion-col>\r\n        <ion-col style=\"background:#00FFFF\" (click)=\"setColor('#00FFFF')\">&nbsp;</ion-col>\r\n        <ion-col style=\"background:#0080FF\" (click)=\"setColor('#0080FF')\">&nbsp;</ion-col>\r\n        <ion-col style=\"background:#0000FF\" (click)=\"setColor('#0000FF')\">&nbsp;</ion-col>\r\n        <ion-col style=\"background:#7F00FF\" (click)=\"setColor('#7F00FF')\">&nbsp;</ion-col>\r\n        <ion-col style=\"background:#FF00FF\" (click)=\"setColor('#FF00FF')\">&nbsp;</ion-col>\r\n        <ion-col style=\"background:#FF007F\" (click)=\"setColor('#FF007F')\">&nbsp;</ion-col>\r\n        <ion-col style=\"background:#808080\" (click)=\"setColor('#808080')\">&nbsp;</ion-col>\r\n      </ion-row>\r\n      <ion-row>\r\n        <ion-col style=\"background:#FF3333\" (click)=\"setColor('#FF3333')\">&nbsp;</ion-col>\r\n        <ion-col style=\"background:#FF9933\" (click)=\"setColor('#FF9933')\">&nbsp;</ion-col>\r\n        <ion-col style=\"background:#FFFF33\" (click)=\"setColor('#FFFF33')\">&nbsp;</ion-col>\r\n        <ion-col style=\"background:#99FF33\" (click)=\"setColor('#99FF33')\">&nbsp;</ion-col>\r\n        <ion-col style=\"background:#33FF33\" (click)=\"setColor('#33FF33')\">&nbsp;</ion-col>\r\n        <ion-col style=\"background:#33FF99\" (click)=\"setColor('#33FF99')\">&nbsp;</ion-col>\r\n        <ion-col style=\"background:#33FFFF\" (click)=\"setColor('#33FFFF')\">&nbsp;</ion-col>\r\n        <ion-col style=\"background:#3399FF\" (click)=\"setColor('#3399FF')\">&nbsp;</ion-col>\r\n        <ion-col style=\"background:#3333FF\" (click)=\"setColor('#3333FF')\">&nbsp;</ion-col>\r\n        <ion-col style=\"background:#9933FF\" (click)=\"setColor('#9933FF')\">&nbsp;</ion-col>\r\n        <ion-col style=\"background:#FF33FF\" (click)=\"setColor('#FF33FF')\">&nbsp;</ion-col>\r\n        <ion-col style=\"background:#FF3399\" (click)=\"setColor('#FF3399')\">&nbsp;</ion-col>\r\n        <ion-col style=\"background:#A0A0A0\" (click)=\"setColor('#A0A0A0')\">&nbsp;</ion-col>\r\n      </ion-row>\r\n      <ion-row>\r\n        <ion-col style=\"background:#FF6666\" (click)=\"setColor('#FF6666')\">&nbsp;</ion-col>\r\n        <ion-col style=\"background:#FFB266\" (click)=\"setColor('#FFB266')\">&nbsp;</ion-col>\r\n        <ion-col style=\"background:#FFFF66\" (click)=\"setColor('#FFFF66')\">&nbsp;</ion-col>\r\n        <ion-col style=\"background:#B2FF66\" (click)=\"setColor('#B2FF66')\">&nbsp;</ion-col>\r\n        <ion-col style=\"background:#66FF66\" (click)=\"setColor('#66FF66')\">&nbsp;</ion-col>\r\n        <ion-col style=\"background:#66FFB2\" (click)=\"setColor('#66FFB2')\">&nbsp;</ion-col>\r\n        <ion-col style=\"background:#66FFFF\" (click)=\"setColor('#66FFFF')\">&nbsp;</ion-col>\r\n        <ion-col style=\"background:#66B2FF\" (click)=\"setColor('#66B2FF')\">&nbsp;</ion-col>\r\n        <ion-col style=\"background:#6666FF\" (click)=\"setColor('#6666FF')\">&nbsp;</ion-col>\r\n        <ion-col style=\"background:#B266FF\" (click)=\"setColor('#B266FF')\">&nbsp;</ion-col>\r\n        <ion-col style=\"background:#FF66FF\" (click)=\"setColor('#FF66FF')\">&nbsp;</ion-col>\r\n        <ion-col style=\"background:#FF66B2\" (click)=\"setColor('#FF66B2')\">&nbsp;</ion-col>\r\n        <ion-col style=\"background:#C0C0C0\" (click)=\"setColor('#C0C0C0')\">&nbsp;</ion-col>\r\n      </ion-row>\r\n      <ion-row>\r\n        <ion-col style=\"background:#FF9999\" (click)=\"setColor('#FF9999')\">&nbsp;</ion-col>\r\n        <ion-col style=\"background:#FFCC99\" (click)=\"setColor('#FFCC99')\">&nbsp;</ion-col>\r\n        <ion-col style=\"background:#FFFF99\" (click)=\"setColor('#FFFF99')\">&nbsp;</ion-col>\r\n        <ion-col style=\"background:#CCFF99\" (click)=\"setColor('#CCFF99')\">&nbsp;</ion-col>\r\n        <ion-col style=\"background:#99FF99\" (click)=\"setColor('#99FF99')\">&nbsp;</ion-col>\r\n        <ion-col style=\"background:#99FFCC\" (click)=\"setColor('#99FFCC')\">&nbsp;</ion-col>\r\n        <ion-col style=\"background:#99FFFF\" (click)=\"setColor('#99FFFF')\">&nbsp;</ion-col>\r\n        <ion-col style=\"background:#99CCFF\" (click)=\"setColor('#99CCFF')\">&nbsp;</ion-col>\r\n        <ion-col style=\"background:#9999FF\" (click)=\"setColor('#9999FF')\">&nbsp;</ion-col>\r\n        <ion-col style=\"background:#CC99FF\" (click)=\"setColor('#CC99FF')\">&nbsp;</ion-col>\r\n        <ion-col style=\"background:#FF99FF\" (click)=\"setColor('#FF99FF')\">&nbsp;</ion-col>\r\n        <ion-col style=\"background:#FF99CC\" (click)=\"setColor('#FF99CC')\">&nbsp;</ion-col>\r\n        <ion-col style=\"background:#E0E0E0\" (click)=\"setColor('#E0E0E0')\">&nbsp;</ion-col>\r\n      </ion-row>\r\n      <ion-row>\r\n        <ion-col style=\"background:#FFCCCC\" (click)=\"setColor('#FFCCCC')\">&nbsp;</ion-col>\r\n        <ion-col style=\"background:#FFE5CC\" (click)=\"setColor('#FFE5CC')\">&nbsp;</ion-col>\r\n        <ion-col style=\"background:#FFFFCC\" (click)=\"setColor('#FFFFCC')\">&nbsp;</ion-col>\r\n        <ion-col style=\"background:#E5FFCC\" (click)=\"setColor('#E5FFCC')\">&nbsp;</ion-col>\r\n        <ion-col style=\"background:#CCFFCC\" (click)=\"setColor('#CCFFCC')\">&nbsp;</ion-col>\r\n        <ion-col style=\"background:#CCFFE5\" (click)=\"setColor('#CCFFE5')\">&nbsp;</ion-col>\r\n        <ion-col style=\"background:#CCFFFF\" (click)=\"setColor('#CCFFFF')\">&nbsp;</ion-col>\r\n        <ion-col style=\"background:#CCE5FF\" (click)=\"setColor('#CCE5FF')\">&nbsp;</ion-col>\r\n        <ion-col style=\"background:#CCCCFF\" (click)=\"setColor('#CCCCFF')\">&nbsp;</ion-col>\r\n        <ion-col style=\"background:#E5CCFF\" (click)=\"setColor('#E5CCFF')\">&nbsp;</ion-col>\r\n        <ion-col style=\"background:#FFCCFF\" (click)=\"setColor('#FFCCFF')\">&nbsp;</ion-col>\r\n        <ion-col style=\"background:#FFCCE5\" (click)=\"setColor('#FFCCE5')\">&nbsp;</ion-col>\r\n        <ion-col style=\"background:#FFFFFF\" (click)=\"setColor('#FFFFFF')\">&nbsp;</ion-col>\r\n      </ion-row>\r\n    </ion-grid>\r\n  </ion-card> -->\r\n\r\n</ion-content>\r\n");

/***/ }),

/***/ "./src/app/modal-ajustes/modal-ajustes.page.scss":
/*!*******************************************************!*\
  !*** ./src/app/modal-ajustes/modal-ajustes.page.scss ***!
  \*******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".label-seleccione {\n  font-size: 0.8em;\n}\n\n.button-registrarse {\n  width: 80%;\n  margin-left: 10%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbW9kYWwtYWp1c3Rlcy9GOlxcYXBwX21pZmFtaWxpYV9naXRcXG1pRmFtaWxpYV9wcmUvc3JjXFxhcHBcXG1vZGFsLWFqdXN0ZXNcXG1vZGFsLWFqdXN0ZXMucGFnZS5zY3NzIiwic3JjL2FwcC9tb2RhbC1hanVzdGVzL21vZGFsLWFqdXN0ZXMucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksZ0JBQUE7QUNDSjs7QURDQTtFQUNJLFVBQUE7RUFDQSxnQkFBQTtBQ0VKIiwiZmlsZSI6InNyYy9hcHAvbW9kYWwtYWp1c3Rlcy9tb2RhbC1hanVzdGVzLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5sYWJlbC1zZWxlY2Npb25le1xyXG4gICAgZm9udC1zaXplOiAwLjhlbTtcclxufVxyXG4uYnV0dG9uLXJlZ2lzdHJhcnNle1xyXG4gICAgd2lkdGg6IDgwJTtcclxuICAgIG1hcmdpbi1sZWZ0OiAxMCU7XHJcbn0iLCIubGFiZWwtc2VsZWNjaW9uZSB7XG4gIGZvbnQtc2l6ZTogMC44ZW07XG59XG5cbi5idXR0b24tcmVnaXN0cmFyc2Uge1xuICB3aWR0aDogODAlO1xuICBtYXJnaW4tbGVmdDogMTAlO1xufSJdfQ== */");

/***/ }),

/***/ "./src/app/modal-ajustes/modal-ajustes.page.ts":
/*!*****************************************************!*\
  !*** ./src/app/modal-ajustes/modal-ajustes.page.ts ***!
  \*****************************************************/
/*! exports provided: ModalAjustesPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ModalAjustesPage", function() { return ModalAjustesPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _app_services_ServicioUtiles__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../app/services/ServicioUtiles */ "./src/app/services/ServicioUtiles.ts");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _services_ServicioImagen__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../services/ServicioImagen */ "./src/app/services/ServicioImagen.ts");



//SERVICIOS



let ModalAjustesPage = class ModalAjustesPage {
    constructor(modalCtrl, navParams, utiles, navCtrl, toast, platform, menu, loading, img) {
        this.modalCtrl = modalCtrl;
        this.navParams = navParams;
        this.utiles = utiles;
        this.navCtrl = navCtrl;
        this.toast = toast;
        this.platform = platform;
        this.menu = menu;
        this.loading = loading;
        this.img = img;
        this.image = null;
        this.lastImage = null;
        this.nombrePaciente = '';
        this.color = "#127bdc";
        //ACA QUEDE, ESTOY ARMANDO LA PANTALLA DE AJUSTES
        //color
        this.miColor = '#FF4081';
    }
    ngOnInit() {
        //this.miColor = this.utiles.entregaMiColor();
        this.usuarioAps = JSON.parse(this.navParams.get('usuario'));
        this.image = this.usuarioAps.UrlImagen;
        this.miColor = this.utiles.entregaColor(this.usuarioAps);
        this.color = this.miColor; //this.usuarioAps.Color;
        this.nombrePaciente = this.usuarioAps.Nombres + ' ' + this.usuarioAps.ApellidoPaterno + ' ' + this.usuarioAps.ApellidoMaterno;
        console.log(this.usuarioAps);
    }
    dismiss() {
        this.modalCtrl.dismiss();
    }
    setColor(color) {
        this.color = color;
    }
    changeListener($event) {
        //lo comentamos por mientras
        /*     if (!this.utiles.isAppOnDevice()){
              this.utiles.presentToast('Esta operación no esta permitida', 'center', 3000);
              return;
            }
            else { */
        this.fileP = $event.target.files[0];
        if (this.fileP) {
            if (this.fileP.size <= 2048000) {
                this.putImagen(this.fileP);
            }
            else {
                //this.presentToast('El tamaño de la imágen excede el máximo permitido.'); 
                this.utiles.presentToast('El tamaño de la imágen excede el máximo permitido.', 'center', 3000);
            }
        }
        else {
            //this.presentToast('No ha seleccionado ninguna imágen válida.'); 
            this.utiles.presentToast('No ha seleccionado ninguna imágen válida.', 'center', 3000);
        }
        /*  } */
    }
    putImagen(files) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            var uspId = this.usuarioAps.Id.toString();
            console.log(files.size);
            let loader = yield this.loading.create({
                message: 'Guardando...<br>Imagen del usuario.',
                duration: 20000
            });
            yield loader.present().then(() => Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
                if (!this.utiles.isAppOnDevice()) {
                    //llamada web
                    this.img.putImagen(uspId, files).subscribe((data) => {
                        if (data) {
                            this.image = src_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].URL_FOTOS + data;
                            //cambiar la imagen del usuario aps
                            //o de la familia
                            if (this.usuarioAps) {
                                if (this.usuarioAps.UrlImagen) {
                                    //dejamos al usuario con la nueva imagen
                                    this.usuarioAps.UrlImagen = src_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].URL_FOTOS + data;
                                }
                            }
                            if (sessionStorage.UsuarioAps) {
                                var nuevoUsuarioAps = JSON.parse(sessionStorage.UsuarioAps);
                                //cambiamos este elemento solo si el usuario existe
                                if (nuevoUsuarioAps.Id == uspId) {
                                    //nuevoUsuarioAps.UrlImagen = environment.URL_FOTOS + data;
                                    nuevoUsuarioAps.UrlImagen = data;
                                    //debemos guardar el objeto serializado
                                    sessionStorage.setItem('UsuarioAps', JSON.stringify(nuevoUsuarioAps));
                                }
                                else {
                                    //si no es el mismo hay que buscarlo en la lista de familia y cambiarlo
                                    var usuariosFamilia = JSON.parse(sessionStorage.getItem('UsuariosFamilia'));
                                    if (usuariosFamilia && usuariosFamilia.length > 0) {
                                        usuariosFamilia.forEach(usuario => {
                                            if (usuario.Id == uspId) {
                                                //usuario.UrlImagen = environment.URL_FOTOS + data;
                                                usuario.UrlImagen = data;
                                            }
                                        });
                                        //ahora serializamos y cambiamos
                                        sessionStorage.setItem('UsuariosFamilia', JSON.stringify(usuariosFamilia));
                                    }
                                }
                            }
                        }
                        //terminamos loader
                        loader.dismiss();
                    });
                }
                else {
                    //lamada nativa
                    this.img.putImagenNative(uspId, files).then((data) => {
                        if (data) {
                            this.image = src_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].URL_FOTOS + JSON.parse(data.data);
                            //cambiar la imagen del usuario aps
                            //o de la familia
                            if (this.usuarioAps) {
                                if (this.usuarioAps.UrlImagen) {
                                    //dejamos al usuario con la nueva imagen
                                    this.usuarioAps.UrlImagen = src_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].URL_FOTOS + JSON.parse(data.data);
                                }
                            }
                            if (sessionStorage.UsuarioAps) {
                                var nuevoUsuarioAps = JSON.parse(sessionStorage.UsuarioAps);
                                //cambiamos este elemento solo si el usuario existe
                                if (nuevoUsuarioAps.Id == uspId) {
                                    nuevoUsuarioAps.UrlImagen = JSON.parse(data.data);
                                    //debemos guardar el objeto serializado
                                    sessionStorage.setItem('UsuarioAps', JSON.stringify(nuevoUsuarioAps));
                                }
                                else {
                                    //si no es el mismo hay que buscarlo en la lista de familia y cambiarlo
                                    var usuariosFamilia = JSON.parse(sessionStorage.getItem('UsuariosFamilia'));
                                    if (usuariosFamilia && usuariosFamilia.length > 0) {
                                        usuariosFamilia.forEach(usuario => {
                                            if (usuario.Id == uspId) {
                                                usuario.UrlImagen = JSON.parse(data.data);
                                            }
                                        });
                                        //ahora serializamos y cambiamos
                                        sessionStorage.setItem('UsuariosFamilia', JSON.stringify(usuariosFamilia));
                                    }
                                }
                            }
                        }
                        //terminamos loader
                        loader.dismiss();
                    });
                }
            }));
        });
    }
    putColor() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            var uspId = this.usuarioAps.Id.toString();
            var colorGuardar = this.color;
            let loader = yield this.loading.create({
                message: 'Guardando...<br>Color del usuario.',
                duration: 20000
            });
            yield loader.present().then(() => Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
                if (!this.utiles.isAppOnDevice()) {
                    //llamada web
                    this.img.putColor(uspId, colorGuardar).subscribe((data) => {
                        if (data) {
                            //hay que setear el color del localstorage
                            //this.utiles.cambiaColorLocalStorage(data);
                            this.color = data;
                            if (this.usuarioAps) {
                                if (this.usuarioAps.Color) {
                                    //dejamos al usuario con la nueva imagen
                                    this.usuarioAps.Color = data;
                                    //sessionStorage.setItem('UsuarioAps', JSON.stringify(nuevoUsuarioAps));
                                }
                            }
                            if (sessionStorage.UsuarioAps) {
                                var nuevoUsuarioAps = JSON.parse(sessionStorage.UsuarioAps);
                                //cambiamos este elemento solo si el usuario existe
                                if (nuevoUsuarioAps.Id == uspId) {
                                    nuevoUsuarioAps.Color = data;
                                    sessionStorage.setItem('UsuarioAps', JSON.stringify(nuevoUsuarioAps));
                                }
                                else {
                                    //si no es el mismo hay que buscarlo en la lista de familia y cambiarlo
                                    var usuariosFamilia = JSON.parse(sessionStorage.getItem('UsuariosFamilia'));
                                    if (usuariosFamilia && usuariosFamilia.length > 0) {
                                        usuariosFamilia.forEach(usuario => {
                                            if (usuario.Id == uspId) {
                                                usuario.Color = data;
                                            }
                                        });
                                        //ahora serializamos y cambiamos
                                        sessionStorage.setItem('UsuariosFamilia', JSON.stringify(usuariosFamilia));
                                    }
                                }
                            }
                            localStorage.setItem('MI_COLOR', data);
                        }
                        //terminamos loader
                        loader.dismiss();
                    });
                }
                else {
                    //lamada nativa
                    this.img.putColorNative(uspId, colorGuardar).then((data) => {
                        if (data) {
                            this.utiles.cambiaColorLocalStorage(JSON.parse(data.data));
                            this.color = JSON.parse(data.data);
                            if (this.usuarioAps) {
                                if (this.usuarioAps.Color) {
                                    //dejamos al usuario con la nueva imagen
                                    this.usuarioAps.Color = JSON.parse(data.data);
                                }
                            }
                            if (sessionStorage.UsuarioAps) {
                                var nuevoUsuarioAps = JSON.parse(sessionStorage.UsuarioAps);
                                //cambiamos este elemento solo si el usuario existe
                                if (nuevoUsuarioAps.Id == uspId) {
                                    nuevoUsuarioAps.Color = JSON.parse(data.data);
                                    sessionStorage.setItem('UsuarioAps', JSON.stringify(nuevoUsuarioAps));
                                }
                                else {
                                    //si no es el mismo hay que buscarlo en la lista de familia y cambiarlo
                                    var usuariosFamilia = JSON.parse(sessionStorage.getItem('UsuariosFamilia'));
                                    if (usuariosFamilia && usuariosFamilia.length > 0) {
                                        usuariosFamilia.forEach(usuario => {
                                            if (usuario.Id == uspId) {
                                                usuario.Color = JSON.parse(data.data);
                                            }
                                        });
                                        //ahora serializamos y cambiamos
                                        sessionStorage.setItem('UsuariosFamilia', JSON.stringify(usuariosFamilia));
                                    }
                                }
                            }
                        }
                        //terminamos loader
                        loader.dismiss();
                    }, (error) => {
                        loader.dismiss();
                        this.utiles.presentToast(error, 'bottom', 4000);
                    });
                }
            }));
        });
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
            this.dismiss();
            this.navCtrl.navigateRoot(['registro-usuario'], navigationExtras);
        }
    }
};
ModalAjustesPage.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ModalController"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavParams"] },
    { type: _app_services_ServicioUtiles__WEBPACK_IMPORTED_MODULE_3__["ServicioUtiles"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ToastController"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["Platform"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["MenuController"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["LoadingController"] },
    { type: _services_ServicioImagen__WEBPACK_IMPORTED_MODULE_5__["ServicioImagen"] }
];
ModalAjustesPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-modal-ajustes',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./modal-ajustes.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/modal-ajustes/modal-ajustes.page.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./modal-ajustes.page.scss */ "./src/app/modal-ajustes/modal-ajustes.page.scss")).default]
    })
], ModalAjustesPage);



/***/ })

}]);
//# sourceMappingURL=default~familia-familia-module~modal-ajustes-modal-ajustes-module-es2015.js.map