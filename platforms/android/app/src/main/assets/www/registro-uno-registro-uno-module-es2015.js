(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["registro-uno-registro-uno-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/registro-uno/registro-uno.page.html":
/*!*******************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/registro-uno/registro-uno.page.html ***!
  \*******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-content class=\"ion-padding\">\n  <ion-row class=\"mt-24\">\n    <button mat-icon-button aria-label=\"Example icon-button with a heart icon\" (click)=\"volver()\">\n      <mat-icon>arrow_back_ios</mat-icon>\n    </button>\n  </ion-row>\n  <ion-row class=\"mt-52\">\n    <h1>Hola, {{nombre}}, un gusto en conocerte</h1> \n  </ion-row>\n  <ion-row>\n    <p class=\"texto-1\">A continuación procederemos a verificar si ya tienes cuenta activa, para esto necesitamos que ingreses tu RUN.</p>\n    \n  </ion-row>\n  <form [formGroup]=\"forma\" novalidate>\n      <ion-row class=\"mt-32\">\n        <mat-form-field appearance=\"outline\" style=\"width: 100%;\">\n          <mat-label>Run (Sin puntos y con guión)</mat-label>\n          <input matInput placeholder=\"12535301-1\" formControlName=\"run\" name=\"run\" required>\n          <mat-error *ngIf=\"f.run.errors && f.run.errors.required\">Run requerido</mat-error>\n          <mat-error *ngIf=\"f.run.errors && f.run.errors.runInvalido == false\">Rut inválido</mat-error>\n        </mat-form-field>\n      </ion-row>\n      <ion-row class=\"mt-32\">\n        <button [disabled]=\"forma.invalid\" mat-flat-button color=\"primary\" style=\"width: 90%; margin-left: 5%;\"\n          (click)=\"verificaRegistro()\">CONTINUAR</button>\n      </ion-row>\n  </form>\n\n</ion-content>");

/***/ }),

/***/ "./src/app/registro-uno/registro-uno.module.ts":
/*!*****************************************************!*\
  !*** ./src/app/registro-uno/registro-uno.module.ts ***!
  \*****************************************************/
/*! exports provided: RegistroUnoPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegistroUnoPageModule", function() { return RegistroUnoPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/form-field */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/form-field.js");
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/select */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/select.js");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/input */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/input.js");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/button */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/button.js");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/icon */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/icon.js");
/* harmony import */ var _registro_uno_page__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./registro-uno.page */ "./src/app/registro-uno/registro-uno.page.ts");












let RegistroUnoPageModule = class RegistroUnoPageModule {
};
RegistroUnoPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _angular_material_form_field__WEBPACK_IMPORTED_MODULE_6__["MatFormFieldModule"],
            _angular_material_select__WEBPACK_IMPORTED_MODULE_7__["MatSelectModule"],
            _angular_material_input__WEBPACK_IMPORTED_MODULE_8__["MatInputModule"],
            _angular_material_button__WEBPACK_IMPORTED_MODULE_9__["MatButtonModule"],
            _angular_material_icon__WEBPACK_IMPORTED_MODULE_10__["MatIconModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterModule"].forChild([
                {
                    path: '',
                    component: _registro_uno_page__WEBPACK_IMPORTED_MODULE_11__["RegistroUnoPage"]
                }
            ])
        ],
        declarations: [_registro_uno_page__WEBPACK_IMPORTED_MODULE_11__["RegistroUnoPage"]]
    })
], RegistroUnoPageModule);



/***/ }),

/***/ "./src/app/registro-uno/registro-uno.page.scss":
/*!*****************************************************!*\
  !*** ./src/app/registro-uno/registro-uno.page.scss ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".mt-32 {\n  margin-top: 32px;\n}\n\n.mt-24 {\n  margin-top: 24px;\n}\n\n.mt-80 {\n  margin-top: 5em;\n}\n\n.mt-40 {\n  margin-top: 2.5em;\n}\n\n.mt-36 {\n  margin-top: 2.25em;\n}\n\n.mt-52 {\n  margin-top: 3.25em;\n}\n\n.texto-1 {\n  font-size: 1.3em;\n  color: #575657;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcmVnaXN0cm8tdW5vL0Y6XFxhcHBfbWlmYW1pbGlhX2dpdFxcbWlGYW1pbGlhX3ByZS9zcmNcXGFwcFxccmVnaXN0cm8tdW5vXFxyZWdpc3Ryby11bm8ucGFnZS5zY3NzIiwic3JjL2FwcC9yZWdpc3Ryby11bm8vcmVnaXN0cm8tdW5vLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGdCQUFBO0FDQ0o7O0FEQ0E7RUFDSSxnQkFBQTtBQ0VKOztBREFBO0VBQ0ksZUFBQTtBQ0dKOztBRERBO0VBQ0ksaUJBQUE7QUNJSjs7QURGQTtFQUNJLGtCQUFBO0FDS0o7O0FESEE7RUFDSSxrQkFBQTtBQ01KOztBREpBO0VBQ0ksZ0JBQUE7RUFDQSxjQUFBO0FDT0oiLCJmaWxlIjoic3JjL2FwcC9yZWdpc3Ryby11bm8vcmVnaXN0cm8tdW5vLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5tdC0zMntcclxuICAgIG1hcmdpbi10b3A6IDMycHg7XHJcbn1cclxuLm10LTI0e1xyXG4gICAgbWFyZ2luLXRvcDogMjRweDtcclxufVxyXG4ubXQtODB7XHJcbiAgICBtYXJnaW4tdG9wOiA1ZW07XHJcbn1cclxuLm10LTQwe1xyXG4gICAgbWFyZ2luLXRvcDogMi41ZW07XHJcbn1cclxuLm10LTM2e1xyXG4gICAgbWFyZ2luLXRvcDogMi4yNWVtO1xyXG59XHJcbi5tdC01MntcclxuICAgIG1hcmdpbi10b3A6IDMuMjVlbTtcclxufVxyXG4udGV4dG8tMXtcclxuICAgIGZvbnQtc2l6ZTogMS4zZW07XHJcbiAgICBjb2xvcjogIzU3NTY1NztcclxuICAgIFxyXG59IiwiLm10LTMyIHtcbiAgbWFyZ2luLXRvcDogMzJweDtcbn1cblxuLm10LTI0IHtcbiAgbWFyZ2luLXRvcDogMjRweDtcbn1cblxuLm10LTgwIHtcbiAgbWFyZ2luLXRvcDogNWVtO1xufVxuXG4ubXQtNDAge1xuICBtYXJnaW4tdG9wOiAyLjVlbTtcbn1cblxuLm10LTM2IHtcbiAgbWFyZ2luLXRvcDogMi4yNWVtO1xufVxuXG4ubXQtNTIge1xuICBtYXJnaW4tdG9wOiAzLjI1ZW07XG59XG5cbi50ZXh0by0xIHtcbiAgZm9udC1zaXplOiAxLjNlbTtcbiAgY29sb3I6ICM1NzU2NTc7XG59Il19 */");

/***/ }),

/***/ "./src/app/registro-uno/registro-uno.page.ts":
/*!***************************************************!*\
  !*** ./src/app/registro-uno/registro-uno.page.ts ***!
  \***************************************************/
/*! exports provided: RegistroUnoPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegistroUnoPage", function() { return RegistroUnoPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _app_services_ServicioUtiles__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../app/services/ServicioUtiles */ "./src/app/services/ServicioUtiles.ts");
/* harmony import */ var _app_services_ServicioGeo__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../app/services/ServicioGeo */ "./src/app/services/ServicioGeo.ts");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! moment */ "./node_modules/moment/moment.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_7__);





//servicios



let RegistroUnoPage = class RegistroUnoPage {
    constructor(navCtrl, utiles, servicioGeo, loading, formBuilder, activatedRoute, router) {
        this.navCtrl = navCtrl;
        this.utiles = utiles;
        this.servicioGeo = servicioGeo;
        this.loading = loading;
        this.formBuilder = formBuilder;
        this.activatedRoute = activatedRoute;
        this.router = router;
        this.cargando = false;
        //rut = new FormControl('', [Validators.required, this.runValidator]);
        //por defecto dejamos el tipo movimiento en 1 solicitud de login
        //despues lo podemos recibir como parametro para cambiarlo
        this.tipoMovimiento = '1';
        this.estaAgregandoFamilia = false;
        this.RunValidator = (fg) => {
            const run = fg.get('run').value;
            if (run !== null && run !== "") {
                if (this.utiles.Rut(run) == false) {
                    this.forma.controls.run.setErrors({ runInvalido: false });
                }
            }
            return run !== null ? null : null;
        };
    }
    ngOnInit() {
        moment__WEBPACK_IMPORTED_MODULE_7__["locale"]('es');
        this.activatedRoute.queryParams.subscribe(params => {
            if (params && params.estaAgregandoFamilia) {
                this.estaAgregandoFamilia = true;
            }
            if (params && params.nombre) {
                this.nombre = params.nombre;
            }
        });
        this.cargarForma();
    }
    cargarForma() {
        this.forma = new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormGroup"]({
            'run': new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required])
        }, { validators: this.RunValidator });
    }
    volver() {
        //this.navCtrl.navigateRoot('nuevo-login');
        this.navCtrl.navigateRoot('pre-registro-uno');
    }
    //para validar
    get f() { return this.forma.controls; }
    verificaRegistro() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            let run = this.forma.controls.run;
            let idDispositivo = this.utiles.entregaIdDispositivo();
            this.cargando = true;
            let loader = yield this.loading.create({
                message: 'Verificando...<br>Registro',
                duration: 3000
            });
            //primero validamos nuevamente si cuenta con registro dentro de la app por run
            yield loader.present().then(() => Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
                if (!this.utiles.isAppOnDevice()) {
                    //llamada web
                    this.servicioGeo.getRegistroAppRun(run.value, idDispositivo).subscribe((response) => {
                        //procesar
                        //this.procesarInfo(response, loader);
                        this.procesarRespuestaRegistro(response, loader);
                    });
                }
                else {
                    //llamada nativa
                    this.servicioGeo.getRegistroAppNativeRun(run.value, idDispositivo).then((response) => {
                        var data = JSON.parse(response.data);
                        this.procesarRespuestaRegistro(data, loader);
                    }, (error) => {
                        this.utiles.presentToast('Ocurrió un error de obtención identificador', 'bottom', 4000);
                        loader.dismiss();
                    });
                }
            }));
        });
    }
    abrirLogin() {
        this.navCtrl.navigateRoot('nuevo-login');
    }
    procesarRespuestaRegistro(registro, loader) {
        if (registro && registro != null) {
            //verificamos si tiene su registro completo
            var tieneCorreo = !(registro.CorreoElectronico == null || registro.CorreoElectronico == "" || registro.CorreoElectronico == undefined);
            var tienePassword = !(registro.Password == null || registro.Password == "" || registro.Password == undefined);
            var tieneRun = !(registro.Run == null || registro.Run == "" || registro.Run == undefined);
            var tieneUsuario = !(registro.NombreUsuario == null || registro.NombreUsuario == "" || registro.NombreUsuario == undefined);
            if (tieneCorreo && tienePassword && tieneRun && tieneUsuario) {
                //tiene registro completo, enviarlo a la pagina de login
                this.utiles.presentToast('Usted ya tiene registro', 'middle', 5000);
                loader.dismiss();
                if (this.estaAgregandoFamilia == false) {
                    this.abrirLogin();
                }
                else {
                    //si esta agregando familia hay que crear lo que corresponde y avisar al
                    //usuario que fue creado o no exito
                    console.log('ESTA AGREGANDO FAMILIA');
                }
            }
            else {
                //su registro esta incompleto, derivarlo a la pagina de registro de la app
                this.registroIncompleto = registro;
                //pasar como parametro el registro incompleto a la otra pantalla para que pueda completarlo
                //******* LLAMAR A LA PAGINA DE REGISTRO  *************/
                this.utiles.presentToast('Su registro está incompleto', 'middle', 5000);
                loader.dismiss();
                this.irARegistro(this.estaAgregandoFamilia);
            }
        }
        else {
            //no tiene registro, llamar a la api para buscarlo en rayen
            loader.dismiss();
            //llamamos a enrolamiento
            this.verficarEnrolamientoRayen();
            //console.log('Buscarlo en rayen');
        }
    }
    irARegistro(agregaFamilia) {
        //enviar registroIncompleto
        if (this.registroIncompleto) {
            let query = {
                usuario: null,
                estaAgregandoFamilia: null
            };
            query = { usuario: JSON.stringify(this.registroIncompleto), estaAgregandoFamilia: agregaFamilia };
            const navigationExtras = {
                queryParams: query
            };
            this.navCtrl.navigateRoot(['registro-usuario'], navigationExtras);
        }
    }
    irAClaveUnica() {
        //debemos generar un hash de al menos 30 caracteres para enviar a clave unica (state)
        let runUsuario = this.forma.controls.run.value;
        let fecha = moment__WEBPACK_IMPORTED_MODULE_7__().format('DD-MM-YYYY HH:mm');
        let enviar = runUsuario + '|' + fecha + '|' + this.tipoMovimiento;
        let state = this.utiles.encriptar(enviar);
        //guardamos en el local storage el state
        localStorage.setItem("STATE_CLAVE_UNICA", state);
        const navigationExtras = {
            queryParams: {
                state: state
            }
        };
        //this.navCtrl.navigateRoot('login-clave-unica');
        this.navCtrl.navigateRoot(['login-clave-unica'], navigationExtras);
    }
    verficarEnrolamientoRayen() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            let run = this.forma.controls.run;
            this.cargando = true;
            let loader = yield this.loading.create({
                message: 'Verificando...<br>Registro',
                duration: 3000
            });
            yield loader.present().then(() => Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
                if (!this.utiles.isAppOnDevice()) {
                    //llamada web
                    this.servicioGeo.verificaEnrolamiento(run.value).subscribe((response) => {
                        //procesar
                        console.log(response);
                        this.procesaRespuestaEnrolamiento(response, loader);
                    });
                }
                else {
                    //llamada nativa
                    this.servicioGeo.verificaEnrolamientoNative(run.value).then((response) => {
                        var data = JSON.parse(response.data);
                        console.log(data);
                        this.procesaRespuestaEnrolamiento(data, loader);
                    }, (error) => {
                        this.utiles.presentToast('Ocurrió un error de obtención identificador', 'bottom', 4000);
                        loader.dismiss();
                    });
                }
            }));
        });
    }
    procesaRespuestaEnrolamiento(usuarioAps, loader) {
        if (usuarioAps.RespuestaBase.CodigoMensaje == 0) {
            let usuario = usuarioAps.UsuarioAps;
            this.registroIncompleto = {
                Activo: 1,
                Apellidos: usuario.ApellidoPaterno == null ? '' : usuario.ApellidoPaterno + ' ' + usuario.ApellidoMaterno == null ? '' : usuario.ApellidoMaterno,
                Apodo: "",
                Avatar: "",
                Comuna: localStorage.getItem("comuna"),
                CorreoElectronico: "",
                Eliminado: 0,
                FechaBaja: "0001-01-01T00:00:00",
                FechaNacimiento: "0001-01-01T00:00:00",
                FechaRegistro: "0001-01-01T00:00:00",
                Id: 0,
                IdDispositivo: localStorage.getItem("token_dispositivo"),
                Latitud: sessionStorage.getItem("latitud"),
                Longitud: sessionStorage.getItem("longitud"),
                //registro mediante el enrolamiento
                ModoRegistro: 2,
                NombreUsuario: "",
                Nombres: usuario.Nombres,
                Pais: localStorage.getItem("pais"),
                Password: "",
                Plataforma: localStorage.getItem("plataforma"),
                Provincia: localStorage.getItem("provincia"),
                Run: this.utiles.insertarGuion(usuario.Rut),
                TelefonoContacto: ''
            };
            loader.dismiss();
            //acá estamos ok deberíamos mandarlo a que complete su fomrulario
            this.irARegistro(this.estaAgregandoFamilia);
        }
        else {
            //aca definitivamente debemos enviarlo a clave única
            loader.dismiss();
            console.log('clave unica');
            this.irAClaveUnica();
        }
    }
};
RegistroUnoPage.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"] },
    { type: _app_services_ServicioUtiles__WEBPACK_IMPORTED_MODULE_5__["ServicioUtiles"] },
    { type: _app_services_ServicioGeo__WEBPACK_IMPORTED_MODULE_6__["ServicioGeo"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["LoadingController"] },
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] }
];
RegistroUnoPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-registro-uno',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./registro-uno.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/registro-uno/registro-uno.page.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./registro-uno.page.scss */ "./src/app/registro-uno/registro-uno.page.scss")).default]
    })
], RegistroUnoPage);



/***/ })

}]);
//# sourceMappingURL=registro-uno-registro-uno-module-es2015.js.map