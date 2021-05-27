(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["common"],{

/***/ "./node_modules/@ionic/core/dist/esm/button-active-4b76b5c3.js":
/*!*********************************************************************!*\
  !*** ./node_modules/@ionic/core/dist/esm/button-active-4b76b5c3.js ***!
  \*********************************************************************/
/*! exports provided: c */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return createButtonActiveGesture; });
/* harmony import */ var _index_29df6f59_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index-29df6f59.js */ "./node_modules/@ionic/core/dist/esm/index-29df6f59.js");
/* harmony import */ var _index_eea61379_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./index-eea61379.js */ "./node_modules/@ionic/core/dist/esm/index-eea61379.js");
/* harmony import */ var _haptic_7b8ba70a_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./haptic-7b8ba70a.js */ "./node_modules/@ionic/core/dist/esm/haptic-7b8ba70a.js");




const createButtonActiveGesture = (el, isButton) => {
    let currentTouchedButton;
    let initialTouchedButton;
    const activateButtonAtPoint = (x, y, hapticFeedbackFn) => {
        if (typeof document === 'undefined') {
            return;
        }
        const target = document.elementFromPoint(x, y);
        if (!target || !isButton(target)) {
            clearActiveButton();
            return;
        }
        if (target !== currentTouchedButton) {
            clearActiveButton();
            setActiveButton(target, hapticFeedbackFn);
        }
    };
    const setActiveButton = (button, hapticFeedbackFn) => {
        currentTouchedButton = button;
        if (!initialTouchedButton) {
            initialTouchedButton = currentTouchedButton;
        }
        const buttonToModify = currentTouchedButton;
        Object(_index_29df6f59_js__WEBPACK_IMPORTED_MODULE_0__["w"])(() => buttonToModify.classList.add('ion-activated'));
        hapticFeedbackFn();
    };
    const clearActiveButton = (dispatchClick = false) => {
        if (!currentTouchedButton) {
            return;
        }
        const buttonToModify = currentTouchedButton;
        Object(_index_29df6f59_js__WEBPACK_IMPORTED_MODULE_0__["w"])(() => buttonToModify.classList.remove('ion-activated'));
        /**
         * Clicking on one button, but releasing on another button
         * does not dispatch a click event in browsers, so we
         * need to do it manually here. Some browsers will
         * dispatch a click if clicking on one button, dragging over
         * another button, and releasing on the original button. In that
         * case, we need to make sure we do not cause a double click there.
         */
        if (dispatchClick && initialTouchedButton !== currentTouchedButton) {
            currentTouchedButton.click();
        }
        currentTouchedButton = undefined;
    };
    return Object(_index_eea61379_js__WEBPACK_IMPORTED_MODULE_1__["createGesture"])({
        el,
        gestureName: 'buttonActiveDrag',
        threshold: 0,
        onStart: ev => activateButtonAtPoint(ev.currentX, ev.currentY, _haptic_7b8ba70a_js__WEBPACK_IMPORTED_MODULE_2__["a"]),
        onMove: ev => activateButtonAtPoint(ev.currentX, ev.currentY, _haptic_7b8ba70a_js__WEBPACK_IMPORTED_MODULE_2__["b"]),
        onEnd: () => {
            clearActiveButton(true);
            Object(_haptic_7b8ba70a_js__WEBPACK_IMPORTED_MODULE_2__["h"])();
            initialTouchedButton = undefined;
        }
    });
};




/***/ }),

/***/ "./node_modules/@ionic/core/dist/esm/framework-delegate-d1eb6504.js":
/*!**************************************************************************!*\
  !*** ./node_modules/@ionic/core/dist/esm/framework-delegate-d1eb6504.js ***!
  \**************************************************************************/
/*! exports provided: a, d */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return attachComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return detachComponent; });
const attachComponent = async (delegate, container, component, cssClasses, componentProps) => {
    if (delegate) {
        return delegate.attachViewToDom(container, component, componentProps, cssClasses);
    }
    if (typeof component !== 'string' && !(component instanceof HTMLElement)) {
        throw new Error('framework delegate is missing');
    }
    const el = (typeof component === 'string')
        ? container.ownerDocument && container.ownerDocument.createElement(component)
        : component;
    if (cssClasses) {
        cssClasses.forEach(c => el.classList.add(c));
    }
    if (componentProps) {
        Object.assign(el, componentProps);
    }
    container.appendChild(el);
    if (el.componentOnReady) {
        await el.componentOnReady();
    }
    return el;
};
const detachComponent = (delegate, element) => {
    if (element) {
        if (delegate) {
            const container = element.parentElement;
            return delegate.removeViewFromDom(container, element);
        }
        element.remove();
    }
    return Promise.resolve();
};




/***/ }),

/***/ "./node_modules/@ionic/core/dist/esm/haptic-7b8ba70a.js":
/*!**************************************************************!*\
  !*** ./node_modules/@ionic/core/dist/esm/haptic-7b8ba70a.js ***!
  \**************************************************************/
/*! exports provided: a, b, c, d, h */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return hapticSelectionStart; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return hapticSelectionChanged; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return hapticSelection; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return hapticImpact; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "h", function() { return hapticSelectionEnd; });
const HapticEngine = {
    getEngine() {
        const win = window;
        return (win.TapticEngine) || (win.Capacitor && win.Capacitor.isPluginAvailable('Haptics') && win.Capacitor.Plugins.Haptics);
    },
    available() {
        return !!this.getEngine();
    },
    isCordova() {
        return !!window.TapticEngine;
    },
    isCapacitor() {
        const win = window;
        return !!win.Capacitor;
    },
    impact(options) {
        const engine = this.getEngine();
        if (!engine) {
            return;
        }
        const style = this.isCapacitor() ? options.style.toUpperCase() : options.style;
        engine.impact({ style });
    },
    notification(options) {
        const engine = this.getEngine();
        if (!engine) {
            return;
        }
        const style = this.isCapacitor() ? options.style.toUpperCase() : options.style;
        engine.notification({ style });
    },
    selection() {
        this.impact({ style: 'light' });
    },
    selectionStart() {
        const engine = this.getEngine();
        if (!engine) {
            return;
        }
        if (this.isCapacitor()) {
            engine.selectionStart();
        }
        else {
            engine.gestureSelectionStart();
        }
    },
    selectionChanged() {
        const engine = this.getEngine();
        if (!engine) {
            return;
        }
        if (this.isCapacitor()) {
            engine.selectionChanged();
        }
        else {
            engine.gestureSelectionChanged();
        }
    },
    selectionEnd() {
        const engine = this.getEngine();
        if (!engine) {
            return;
        }
        if (this.isCapacitor()) {
            engine.selectionEnd();
        }
        else {
            engine.gestureSelectionEnd();
        }
    }
};
/**
 * Trigger a selection changed haptic event. Good for one-time events
 * (not for gestures)
 */
const hapticSelection = () => {
    HapticEngine.selection();
};
/**
 * Tell the haptic engine that a gesture for a selection change is starting.
 */
const hapticSelectionStart = () => {
    HapticEngine.selectionStart();
};
/**
 * Tell the haptic engine that a selection changed during a gesture.
 */
const hapticSelectionChanged = () => {
    HapticEngine.selectionChanged();
};
/**
 * Tell the haptic engine we are done with a gesture. This needs to be
 * called lest resources are not properly recycled.
 */
const hapticSelectionEnd = () => {
    HapticEngine.selectionEnd();
};
/**
 * Use this to indicate success/failure/warning to the user.
 * options should be of the type `{ style: 'light' }` (or `medium`/`heavy`)
 */
const hapticImpact = (options) => {
    HapticEngine.impact(options);
};




/***/ }),

/***/ "./node_modules/@ionic/core/dist/esm/spinner-configs-c78e170e.js":
/*!***********************************************************************!*\
  !*** ./node_modules/@ionic/core/dist/esm/spinner-configs-c78e170e.js ***!
  \***********************************************************************/
/*! exports provided: S */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "S", function() { return SPINNERS; });
const spinners = {
    'bubbles': {
        dur: 1000,
        circles: 9,
        fn: (dur, index, total) => {
            const animationDelay = `${(dur * index / total) - dur}ms`;
            const angle = 2 * Math.PI * index / total;
            return {
                r: 5,
                style: {
                    'top': `${9 * Math.sin(angle)}px`,
                    'left': `${9 * Math.cos(angle)}px`,
                    'animation-delay': animationDelay,
                }
            };
        }
    },
    'circles': {
        dur: 1000,
        circles: 8,
        fn: (dur, index, total) => {
            const step = index / total;
            const animationDelay = `${(dur * step) - dur}ms`;
            const angle = 2 * Math.PI * step;
            return {
                r: 5,
                style: {
                    'top': `${9 * Math.sin(angle)}px`,
                    'left': `${9 * Math.cos(angle)}px`,
                    'animation-delay': animationDelay,
                }
            };
        }
    },
    'circular': {
        dur: 1400,
        elmDuration: true,
        circles: 1,
        fn: () => {
            return {
                r: 20,
                cx: 48,
                cy: 48,
                fill: 'none',
                viewBox: '24 24 48 48',
                transform: 'translate(0,0)',
                style: {}
            };
        }
    },
    'crescent': {
        dur: 750,
        circles: 1,
        fn: () => {
            return {
                r: 26,
                style: {}
            };
        }
    },
    'dots': {
        dur: 750,
        circles: 3,
        fn: (_, index) => {
            const animationDelay = -(110 * index) + 'ms';
            return {
                r: 6,
                style: {
                    'left': `${9 - (9 * index)}px`,
                    'animation-delay': animationDelay,
                }
            };
        }
    },
    'lines': {
        dur: 1000,
        lines: 12,
        fn: (dur, index, total) => {
            const transform = `rotate(${30 * index + (index < 6 ? 180 : -180)}deg)`;
            const animationDelay = `${(dur * index / total) - dur}ms`;
            return {
                y1: 17,
                y2: 29,
                style: {
                    'transform': transform,
                    'animation-delay': animationDelay,
                }
            };
        }
    },
    'lines-small': {
        dur: 1000,
        lines: 12,
        fn: (dur, index, total) => {
            const transform = `rotate(${30 * index + (index < 6 ? 180 : -180)}deg)`;
            const animationDelay = `${(dur * index / total) - dur}ms`;
            return {
                y1: 12,
                y2: 20,
                style: {
                    'transform': transform,
                    'animation-delay': animationDelay,
                }
            };
        }
    }
};
const SPINNERS = spinners;




/***/ }),

/***/ "./node_modules/@ionic/core/dist/esm/theme-3f0b0c04.js":
/*!*************************************************************!*\
  !*** ./node_modules/@ionic/core/dist/esm/theme-3f0b0c04.js ***!
  \*************************************************************/
/*! exports provided: c, g, h, o */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return createColorClasses; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "g", function() { return getClassMap; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "h", function() { return hostContext; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "o", function() { return openURL; });
const hostContext = (selector, el) => {
    return el.closest(selector) !== null;
};
/**
 * Create the mode and color classes for the component based on the classes passed in
 */
const createColorClasses = (color) => {
    return (typeof color === 'string' && color.length > 0) ? {
        'ion-color': true,
        [`ion-color-${color}`]: true
    } : undefined;
};
const getClassList = (classes) => {
    if (classes !== undefined) {
        const array = Array.isArray(classes) ? classes : classes.split(' ');
        return array
            .filter(c => c != null)
            .map(c => c.trim())
            .filter(c => c !== '');
    }
    return [];
};
const getClassMap = (classes) => {
    const map = {};
    getClassList(classes).forEach(c => map[c] = true);
    return map;
};
const SCHEME = /^[a-z][a-z0-9+\-.]*:/;
const openURL = async (url, ev, direction, animation) => {
    if (url != null && url[0] !== '#' && !SCHEME.test(url)) {
        const router = document.querySelector('ion-router');
        if (router) {
            if (ev != null) {
                ev.preventDefault();
            }
            return router.push(url, direction, animation);
        }
    }
    return false;
};




/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/modal-alertas/modal-alertas.page.html":
/*!*********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modal-alertas/modal-alertas.page.html ***!
  \*********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\r\n    <!-- <ion-toolbar [style.--background]=\"miColor\"> -->\r\n    <ion-toolbar color=\"primary\">\r\n      <ion-title class=\"home\">Alertas</ion-title>\r\n      <ion-buttons slot=\"end\" class=\"pdr10\" (click)=\"dismiss()\">\r\n        <ion-icon class=\"home\" slot=\"icon-only\" name=\"close\"></ion-icon>\r\n      </ion-buttons>\r\n    </ion-toolbar>\r\n  </ion-header>\r\n  \r\n  <ion-content class=\"back-app\">\r\n    <app-progress [mostrar]=\"estaCargando\" [titulo]=\"tituloLoading\"></app-progress>\r\n    <div [hidden]=\"estaCargando\">\r\n\r\n      <!-- aca debe ir el avatar -->\r\n      <ion-list *ngFor=\"let item of notificaciones\">\r\n        <ion-item lines=\"none\">\r\n            <!-- poner avatar -->\r\n            <ion-avatar slot=\"start\">\r\n              <img *ngIf=\"item.UsuarioAps.UrlImagen != ''\" src={{item.UsuarioAps.UrlImagen}}>\r\n              <img *ngIf=\"item.UsuarioAps.UrlImagen == ''\" src=\"../assets/img/no-imagen.jpg\">\r\n            </ion-avatar>\r\n            <ion-row style=\"display: block;\">\r\n              <div class=\"text-avatar\">{{item.Subtitulo}}</div>\r\n              <div class=\"subtext-avatar\">{{item.UsuarioAps.Parentezco.Nombre}}</div>\r\n            </ion-row>\r\n          </ion-item>\r\n        <!-- aca el contenido de las alertas [hidden]=\"info.IrA == null\" -->\r\n        <ion-item lines=\"full\" button detail [hidden]=\"item.IrA == null\" (click)=\"openNotificacion(item.IrA)\">\r\n            <ion-row style=\"display: block; width: 100%;\">\r\n                <div class=\"text-avatar\">{{item.Titulo}}</div>\r\n                <div class=\"subtext-avatar\">{{item.Contenido}}</div>\r\n            </ion-row>\r\n        </ion-item>\r\n        <ion-item lines=\"full\" [hidden]=\"item.IrA != null\">\r\n            <ion-row style=\"display: block; width: 100%;\">\r\n                <div class=\"text-avatar\">{{item.Titulo}}</div>\r\n                <div class=\"subtext-avatar\">{{item.Contenido}}</div>\r\n            </ion-row>\r\n        </ion-item>\r\n    </ion-list>\r\n    </div>\r\n  \r\n  </ion-content>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/modal-busqueda/modal-busqueda.page.html":
/*!***********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modal-busqueda/modal-busqueda.page.html ***!
  \***********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\r\n    <!-- <ion-toolbar [style.--background]=\"miColor\"> -->\r\n    <ion-toolbar color=\"primary\">\r\n      <ion-title class=\"home\">Búsqueda</ion-title>\r\n      <ion-buttons slot=\"end\" class=\"pdr10\" (click)=\"dismiss()\">\r\n        <ion-icon class=\"home\" slot=\"icon-only\" name=\"close\"></ion-icon>\r\n      </ion-buttons>\r\n    </ion-toolbar>\r\n  </ion-header>\r\n  \r\n  <ion-content class=\"back-app\">\r\n    <ion-list>\r\n      <ion-radio-group value=\"fechas\" (ionChange)=\"onChange($event)\">\r\n        <ion-list-header lines=\"none\">\r\n          <ion-label>Ordenado por</ion-label>\r\n        </ion-list-header>\r\n        <div class=\"ion-margin\" lines=\"full\" *ngFor=\"let item of listaBusqueda\">\r\n          <ion-item *ngIf=\"item.TieneFecha\">\r\n            <ion-label>\r\n              {{item.Nombre}}\r\n            </ion-label>\r\n            <ion-radio slot=\"end\" [value]=\"item.Nombre\"></ion-radio>\r\n          </ion-item>\r\n        </div>\r\n      </ion-radio-group>\r\n    \r\n      \r\n    </ion-list>\r\n    <ion-item lines=\"none\">\r\n      <ion-grid>\r\n        <ion-row>\r\n          <ion-col></ion-col>\r\n          <ion-col class=\"ion-text-right\">\r\n            <button mat-button color=\"primary\" class=\"boton\" (click)=\"dismiss()\">CANCELAR</button>\r\n          </ion-col>\r\n          <ion-col class=\"ion-text-right\">\r\n            <button mat-button color=\"primary\" class=\"boton\" (click)=\"dismissDatos()\">ACEPTAR</button>\r\n          </ion-col>\r\n        </ion-row>\r\n      </ion-grid>\r\n    </ion-item>\r\n\r\n  </ion-content>");

/***/ }),

/***/ "./src/app/modal-alertas/modal-alertas.page.scss":
/*!*******************************************************!*\
  !*** ./src/app/modal-alertas/modal-alertas.page.scss ***!
  \*******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".titulo-evento {\n  font-family: \"Roboto\";\n  font-size: 1.25em;\n  color: #000000DE;\n  letter-spacing: 0.15px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbW9kYWwtYWxlcnRhcy9GOlxcYXBwX21pZmFtaWxpYV9naXRcXG1pRmFtaWxpYV9wcmUvc3JjXFxhcHBcXG1vZGFsLWFsZXJ0YXNcXG1vZGFsLWFsZXJ0YXMucGFnZS5zY3NzIiwic3JjL2FwcC9tb2RhbC1hbGVydGFzL21vZGFsLWFsZXJ0YXMucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0kscUJBQUE7RUFDQSxpQkFBQTtFQUNBLGdCQUFBO0VBQ0Ysc0JBQUE7QUNDRiIsImZpbGUiOiJzcmMvYXBwL21vZGFsLWFsZXJ0YXMvbW9kYWwtYWxlcnRhcy5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIudGl0dWxvLWV2ZW50b3tcclxuICAgIGZvbnQtZmFtaWx5OiAnUm9ib3RvJztcclxuICAgIGZvbnQtc2l6ZTogMS4yNWVtO1xyXG4gICAgY29sb3I6ICMwMDAwMDBERTtcclxuICBsZXR0ZXItc3BhY2luZzogMC4xNXB4O1xyXG59IiwiLnRpdHVsby1ldmVudG8ge1xuICBmb250LWZhbWlseTogXCJSb2JvdG9cIjtcbiAgZm9udC1zaXplOiAxLjI1ZW07XG4gIGNvbG9yOiAjMDAwMDAwREU7XG4gIGxldHRlci1zcGFjaW5nOiAwLjE1cHg7XG59Il19 */");

/***/ }),

/***/ "./src/app/modal-alertas/modal-alertas.page.ts":
/*!*****************************************************!*\
  !*** ./src/app/modal-alertas/modal-alertas.page.ts ***!
  \*****************************************************/
/*! exports provided: ModalAlertasPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ModalAlertasPage", function() { return ModalAlertasPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _app_services_ServicioUtiles__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../app/services/ServicioUtiles */ "./src/app/services/ServicioUtiles.ts");
/* harmony import */ var _app_services_ServicioLaboratorio__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../app/services/ServicioLaboratorio */ "./src/app/services/ServicioLaboratorio.ts");
/* harmony import */ var _app_services_ServicioCitas__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../app/services/ServicioCitas */ "./src/app/services/ServicioCitas.ts");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! moment */ "./node_modules/moment/moment.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_7__);



//SERVICIOS




//moment

let ModalAlertasPage = class ModalAlertasPage {
    constructor(modalCtrl, navParams, utiles, navCtrl, toast, platform, menu, loading, lab, alertController, agendar) {
        this.modalCtrl = modalCtrl;
        this.navParams = navParams;
        this.utiles = utiles;
        this.navCtrl = navCtrl;
        this.toast = toast;
        this.platform = platform;
        this.menu = menu;
        this.loading = loading;
        this.lab = lab;
        this.alertController = alertController;
        this.agendar = agendar;
        this.estaCargando = false;
        this.tituloLoading = '';
        this.styleAvatar = false;
        this.notificaciones = [];
    }
    ngOnInit() {
        moment__WEBPACK_IMPORTED_MODULE_7__["locale"]('es');
        //traer las notificaciones que vienen desde la pagina home
        if (this.navParams.get('notificaciones')) {
            this.notificaciones = JSON.parse(this.navParams.get('notificaciones'));
            this.procesarAlertas();
            console.log(this.notificaciones);
        }
    }
    procesarAlertas() {
        if (this.notificaciones && this.notificaciones.length > 0) {
            this.notificaciones.forEach(alerta => {
                let usu = this.utiles.entregaUsuarioNombre(alerta.Subtitulo);
                alerta.UsuarioAps = usu == null ? null : usu;
                if (alerta.UsuarioAps != null) {
                    alerta.UsuarioAps.UrlImagen = src_environments_environment__WEBPACK_IMPORTED_MODULE_6__["environment"].URL_FOTOS + alerta.UsuarioAps.UrlImagen;
                    if (alerta.UsuarioAps.Parentezco) {
                        if (alerta.UsuarioAps.Parentezco.Nombre == 'La misma persona') {
                            alerta.UsuarioAps.Parentezco.Nombre = 'Yo';
                        }
                    }
                }
                else {
                    //si no está la notificacion viene por ejemplo de asociar un nuevo miembro de la familia
                    alerta.UsuarioAps = {
                        UrlImagen: '',
                        Parentezco: {
                            Nombre: ''
                        }
                    };
                }
            });
        }
    }
    openNotificacion(modulo) {
        if (modulo && modulo != '') {
            this.dismiss();
            this.navCtrl.navigateRoot(modulo);
        }
    }
    dismiss() {
        this.modalCtrl.dismiss();
    }
};
ModalAlertasPage.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ModalController"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavParams"] },
    { type: _app_services_ServicioUtiles__WEBPACK_IMPORTED_MODULE_3__["ServicioUtiles"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ToastController"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["Platform"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["MenuController"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["LoadingController"] },
    { type: _app_services_ServicioLaboratorio__WEBPACK_IMPORTED_MODULE_4__["ServicioLaboratorio"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["AlertController"] },
    { type: _app_services_ServicioCitas__WEBPACK_IMPORTED_MODULE_5__["ServicioCitas"] }
];
ModalAlertasPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-modal-alertas',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./modal-alertas.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/modal-alertas/modal-alertas.page.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./modal-alertas.page.scss */ "./src/app/modal-alertas/modal-alertas.page.scss")).default]
    })
], ModalAlertasPage);



/***/ }),

/***/ "./src/app/modal-busqueda/modal-busqueda.page.scss":
/*!*********************************************************!*\
  !*** ./src/app/modal-busqueda/modal-busqueda.page.scss ***!
  \*********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZGFsLWJ1c3F1ZWRhL21vZGFsLWJ1c3F1ZWRhLnBhZ2Uuc2NzcyJ9 */");

/***/ }),

/***/ "./src/app/modal-busqueda/modal-busqueda.page.ts":
/*!*******************************************************!*\
  !*** ./src/app/modal-busqueda/modal-busqueda.page.ts ***!
  \*******************************************************/
/*! exports provided: ModalBusquedaPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ModalBusquedaPage", function() { return ModalBusquedaPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _app_services_ServicioUtiles__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../app/services/ServicioUtiles */ "./src/app/services/ServicioUtiles.ts");
/* harmony import */ var _app_services_ServicioLaboratorio__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../app/services/ServicioLaboratorio */ "./src/app/services/ServicioLaboratorio.ts");
/* harmony import */ var _app_services_ServicioCitas__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../app/services/ServicioCitas */ "./src/app/services/ServicioCitas.ts");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! moment */ "./node_modules/moment/moment.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_6__);



//SERVICIOS



//moment

let ModalBusquedaPage = class ModalBusquedaPage {
    constructor(modalCtrl, navParams, utiles, navCtrl, toast, platform, menu, loading, lab, alertController, agendar) {
        this.modalCtrl = modalCtrl;
        this.navParams = navParams;
        this.utiles = utiles;
        this.navCtrl = navCtrl;
        this.toast = toast;
        this.platform = platform;
        this.menu = menu;
        this.loading = loading;
        this.lab = lab;
        this.alertController = alertController;
        this.agendar = agendar;
        this.estaCargando = false;
        this.tituloLoading = '';
        this.styleAvatar = false;
        this.examenes = [];
        this.listaBusqueda = [
            {
                Inidice: 1,
                Nombre: 'Fecha de solicitud',
                TieneFecha: false,
                Valor: false
            },
            {
                Inidice: 2,
                Nombre: 'Fecha de toma de muestra',
                TieneFecha: false,
                Valor: false
            },
            {
                Inidice: 3,
                Nombre: 'Fecha de resultados',
                TieneFecha: false,
                Valor: false
            },
        ];
    }
    ngOnInit() {
        moment__WEBPACK_IMPORTED_MODULE_6__["locale"]('es');
        if (this.navParams.get('opciones')) {
            this.examenes = JSON.parse(this.navParams.get('opciones'));
            this.procesarItems();
            console.log(this.examenes);
            console.log(this.listaBusqueda);
        }
    }
    procesarItems() {
        let arrConFechaSolicitud = this.examenes.filter(p => p.FechaSolicitud != '01-01-0001');
        let arrConFechaMuestra = this.examenes.filter(p => p.FechaMuestra != '01-01-0001');
        let arrConFechaResultados = this.examenes.filter(p => p.FechaResultado != '01-01-0001');
        if (arrConFechaSolicitud && arrConFechaSolicitud.length > 0) {
            this.listaBusqueda[0].TieneFecha = true;
        }
        if (arrConFechaMuestra && arrConFechaMuestra.length > 0) {
            this.listaBusqueda[1].TieneFecha = true;
        }
        if (arrConFechaResultados && arrConFechaResultados.length > 0) {
            this.listaBusqueda[2].TieneFecha = true;
        }
    }
    dismiss() {
        this.modalCtrl.dismiss();
        /*         if (this.haySeleccionado()) {
                    this.modalCtrl.dismiss({
                        data: this.listaBusqueda
                    });
                }
                else{
                    this.utiles.presentToast('Debe seleccionar un orden para continuar', 'bottom', 3000);
                } */
    }
    dismissDatos() {
        //this.modalCtrl.dismiss();
        if (this.haySeleccionado()) {
            this.modalCtrl.dismiss({
                data: this.listaBusqueda
            });
        }
        else {
            this.utiles.presentToast('Debe seleccionar un orden para continuar', 'bottom', 3000);
        }
    }
    onChange(event) {
        if (event.detail) {
            if (this.listaBusqueda && this.listaBusqueda.length > 0) {
                for (var s in this.listaBusqueda) {
                    if (this.listaBusqueda[s].Nombre == event.detail.value) {
                        this.listaBusqueda[s].Valor = true;
                    }
                    else {
                        this.listaBusqueda[s].Valor = false;
                    }
                }
            }
            console.log(this.listaBusqueda);
        }
    }
    haySeleccionado() {
        var retorno = false;
        var arrSeleccionados = this.listaBusqueda.filter(p => p.Valor == true);
        if (arrSeleccionados && arrSeleccionados.length > 0) {
            retorno = true;
        }
        return retorno;
    }
};
ModalBusquedaPage.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ModalController"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavParams"] },
    { type: _app_services_ServicioUtiles__WEBPACK_IMPORTED_MODULE_3__["ServicioUtiles"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ToastController"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["Platform"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["MenuController"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["LoadingController"] },
    { type: _app_services_ServicioLaboratorio__WEBPACK_IMPORTED_MODULE_4__["ServicioLaboratorio"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["AlertController"] },
    { type: _app_services_ServicioCitas__WEBPACK_IMPORTED_MODULE_5__["ServicioCitas"] }
];
ModalBusquedaPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-modal-busqueda',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./modal-busqueda.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/modal-busqueda/modal-busqueda.page.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./modal-busqueda.page.scss */ "./src/app/modal-busqueda/modal-busqueda.page.scss")).default]
    })
], ModalBusquedaPage);



/***/ })

}]);
//# sourceMappingURL=common-es2015.js.map