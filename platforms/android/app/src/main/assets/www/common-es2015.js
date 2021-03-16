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

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/modal-examenes/modal-examenes.page.html":
/*!***********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modal-examenes/modal-examenes.page.html ***!
  \***********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\r\n  <ion-toolbar color=\"primary\">\r\n    <ion-title class=\"home\">Exámenes</ion-title>\r\n    <ion-buttons slot=\"end\" class=\"pdr10\" (click)=\"dismiss()\">\r\n      <ion-icon class=\"home\" slot=\"icon-only\" name=\"close\"></ion-icon>\r\n    </ion-buttons>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content class=\"back-app\">\r\n  <!-- HAY EXAMENES -->\r\n  <ion-list *ngIf=\"tiene\">\r\n    <ion-item #myList lines=\"none\">\r\n      <ion-avatar slot=\"start\">\r\n        <text-avatar [text]=\"orden.NombreUsuario\" [color]=\"orden.Color\" [textColor]=\"textColor\"></text-avatar>\r\n      </ion-avatar>\r\n      <ion-label>{{orden.NombreUsuario}}</ion-label>\r\n    </ion-item>\r\n    <ion-list-header lines=\"inset\" mode=\"md\">\r\n      <ion-label><strong>Nº Órden: {{oalaId}}</strong></ion-label>\r\n      <ion-badge color=\"secondary\" class=\"ion-margin-end\">{{ fechaOrden }}</ion-badge>\r\n      <!-- <ion-button>Clear</ion-button> -->\r\n    </ion-list-header>\r\n    <ion-item lines=\"none\" *ngFor=\"let item of listadoExamenes\">\r\n      <ion-grid>\r\n        <ion-row>\r\n          <ion-col size=\"8\">\r\n            <h5>{{item.NombreExamen}}</h5>\r\n            <p *ngIf=\"item.VisibleIcono\">\r\n              <ion-icon name=\"checkmark-circle\" *ngIf=\"item.Check\"></ion-icon>\r\n              <ion-icon name=\"remove-circle\" *ngIf=\"item.UnCheck\"></ion-icon>&nbsp;{{item.TextoResultados}}\r\n            </p>\r\n          </ion-col>\r\n          <ion-col size=\"4\">\r\n            <!-- <ion-icon name=\"checkmark-circle\"></ion-icon>&nbsp;<span>{{item.Estado}}</span> -->\r\n            <ion-badge color=\"primary\">{{ item.Estado }}</ion-badge>\r\n            <h6 *ngIf=\"!item.VisibleTabla\" style=\"color: #666; font-size:0.7em;\"><ion-icon name=\"analitycs\"></ion-icon>&nbsp;Sin Resultados</h6> \r\n            <h6 *ngIf=\"item.VisibleTabla\" style=\"color: #666; font-size:0.7em;\"><ion-icon name=\"time\"></ion-icon>&nbsp;{{item.FechaMuestraStr}}</h6> \r\n          </ion-col>\r\n          <!-- RESULTADOS -->\r\n          <!-- aca debemos agregar otra lista quitar visible -->\r\n          <ion-list *ngIf=\"item.VisibleTabla\" style=\"width: 100%;\">\r\n            <ion-grid>\r\n              <ion-row class=\"titulo-tabla-examen\" [ngStyle]=\"{'background-color': userColor}\">\r\n                <ion-col size=\"6\" class=\"ion-text-wrap ion-text-center\">\r\n                  Nombre\r\n                </ion-col>\r\n                <ion-col size=\"2\" class=\"ion-text-center\">\r\n                  Valor\r\n                </ion-col>\r\n                <ion-col size=\"2\" class=\"ion-text-center\">\r\n                  U/M\r\n                </ion-col>\r\n                <ion-col size=\"2\" class=\"ion-text-center\">\r\n                  Ref.\r\n                </ion-col>\r\n              </ion-row>\r\n            </ion-grid>\r\n\r\n            <ion-row  *ngFor=\"let exa of item.Resultados\">\r\n              <ion-grid>\r\n                <ion-row style=\"font-size: 0.8em;font-style: italic;\">\r\n                  <ion-col size=\"6\" class=\"ion-text-wrap\">\r\n                    {{exa.DescripcionResultado}}\r\n                  </ion-col>\r\n                  <ion-col size=\"2\" class=\"ion-text-center\">\r\n                    {{exa.Resultado}}\r\n                  </ion-col>\r\n                  <ion-col size=\"2\" class=\"ion-text-center\">\r\n                    {{exa.Um}}\r\n                  </ion-col>\r\n                  <ion-col size=\"2\" class=\"ion-text-center\">\r\n                    {{exa.ValoresReferencia}}\r\n                  </ion-col>\r\n                </ion-row>\r\n              </ion-grid>\r\n            </ion-row>\r\n          </ion-list>\r\n        </ion-row>\r\n      </ion-grid>\r\n    </ion-item>\r\n  </ion-list>\r\n  <!-- NO HAY EXAMENES -->\r\n  <div *ngIf=\"tiene == false\" style=\"position: relative; height: 100vh;\">\r\n    <div style=\"position: absolute; display: table; height: 100%; font-size: 30px; color:#BDBDBD; text-align: center;\">\r\n      <p style=\"display: table-cell; vertical-align: middle\">No hay exámenes para mostrar  <br>\r\n      <ion-icon name=\"information-circle\" style=\"font-size: 50px;\"></ion-icon></p>\r\n    </div>\r\n  </div>\r\n\r\n</ion-content>\r\n");

/***/ }),

/***/ "./src/app/modal-examenes/modal-examenes.page.scss":
/*!*********************************************************!*\
  !*** ./src/app/modal-examenes/modal-examenes.page.scss ***!
  \*********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".titulo-tabla-examen {\n  border-bottom-color: #dedede;\n  border-bottom-style: solid;\n  border-bottom-width: 1px;\n  color: #fff;\n  font-size: 0.8em;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbW9kYWwtZXhhbWVuZXMvRjpcXGFwcF9taWZhbWlsaWFfZ2l0XFxtaUZhbWlsaWFfcHJlL3NyY1xcYXBwXFxtb2RhbC1leGFtZW5lc1xcbW9kYWwtZXhhbWVuZXMucGFnZS5zY3NzIiwic3JjL2FwcC9tb2RhbC1leGFtZW5lcy9tb2RhbC1leGFtZW5lcy5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSw0QkFBQTtFQUNBLDBCQUFBO0VBQ0Esd0JBQUE7RUFFQSxXQUFBO0VBQ0EsZ0JBQUE7QUNBSiIsImZpbGUiOiJzcmMvYXBwL21vZGFsLWV4YW1lbmVzL21vZGFsLWV4YW1lbmVzLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi50aXR1bG8tdGFibGEtZXhhbWVue1xyXG4gICAgYm9yZGVyLWJvdHRvbS1jb2xvcjogI2RlZGVkZTtcclxuICAgIGJvcmRlci1ib3R0b20tc3R5bGU6IHNvbGlkO1xyXG4gICAgYm9yZGVyLWJvdHRvbS13aWR0aDogMXB4O1xyXG4gICAgLy9iYWNrZ3JvdW5kLWNvbG9yOiAjMDA5N0E3O1xyXG4gICAgY29sb3I6ICNmZmY7XHJcbiAgICBmb250LXNpemU6IDAuOGVtO1xyXG5cclxufSIsIi50aXR1bG8tdGFibGEtZXhhbWVuIHtcbiAgYm9yZGVyLWJvdHRvbS1jb2xvcjogI2RlZGVkZTtcbiAgYm9yZGVyLWJvdHRvbS1zdHlsZTogc29saWQ7XG4gIGJvcmRlci1ib3R0b20td2lkdGg6IDFweDtcbiAgY29sb3I6ICNmZmY7XG4gIGZvbnQtc2l6ZTogMC44ZW07XG59Il19 */");

/***/ }),

/***/ "./src/app/modal-examenes/modal-examenes.page.ts":
/*!*******************************************************!*\
  !*** ./src/app/modal-examenes/modal-examenes.page.ts ***!
  \*******************************************************/
/*! exports provided: ModalExamenesPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ModalExamenesPage", function() { return ModalExamenesPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _app_services_ServicioUtiles__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../app/services/ServicioUtiles */ "./src/app/services/ServicioUtiles.ts");
/* harmony import */ var _app_services_ServicioLaboratorio__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../app/services/ServicioLaboratorio */ "./src/app/services/ServicioLaboratorio.ts");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! moment */ "./node_modules/moment/moment.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_5__);



//SERVICIOS


//moment

let ModalExamenesPage = class ModalExamenesPage {
    constructor(modalCtrl, navParams, utiles, navCtrl, toast, platform, menu, loading, lab) {
        this.modalCtrl = modalCtrl;
        this.navParams = navParams;
        this.utiles = utiles;
        this.navCtrl = navCtrl;
        this.toast = toast;
        this.platform = platform;
        this.menu = menu;
        this.loading = loading;
        this.lab = lab;
        //color
        this.miColor = '#FF4081';
        //textColor Directive
        this.textColor = '#FFFFFF';
        //tiene registros
        this.tiene = true;
    }
    ngOnInit() {
        moment__WEBPACK_IMPORTED_MODULE_5__["locale"]('es');
        //this.miColor = this.utiles.entregaMiColor();
        this.orden = JSON.parse(this.navParams.get('orden'));
        //this.nombreUsuario = navParams.get('NombreUsuario');
        this.user = JSON.parse(sessionStorage.UsuarioAps);
        this.userColor = this.user.Color;
        this.miColor = this.utiles.entregaColor(this.user);
        if (this.orden) {
            //existe la orden hacer las llamadas
            this.oalaId = this.orden.Id;
            this.fechaOrden = this.orden.Fecha;
            this.loadInicio();
        }
    }
    dismiss() {
        this.modalCtrl.dismiss();
    }
    loadInicio() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            //ordenes
            this.listadoExamenes = [];
            //contenido de las llamadas.
            if (sessionStorage.UsuarioAps) {
                //debemos enviar el uspId del titular para que traiga todos los datos
                this.usuarioAps = JSON.parse(sessionStorage.UsuarioAps);
            }
            if (this.usuarioAps) {
                let loader = yield this.loading.create({
                    message: 'Obteniendo...<br>Exámenes del usuario',
                    duration: 20000
                });
                yield loader.present().then(() => Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
                    if (!this.utiles.isAppOnDevice()) {
                        //llamada web
                        this.lab.getExamenes(this.oalaId).subscribe((response) => {
                            this.porocesarLista(response, loader);
                        });
                    }
                    else {
                        //llamada nativa
                        this.lab.getExamenesNative(this.oalaId).then((response) => {
                            this.porocesarLista(JSON.parse(response.data), loader);
                        });
                    }
                }));
            }
        });
    }
    porocesarLista(data, loader) {
        var listado = data;
        if (listado) {
            for (var s in listado) {
                let fecha = moment__WEBPACK_IMPORTED_MODULE_5__(listado[s].FechaRegistro).format('DD-MM-YYYY');
                listado[s].Fecha = fecha;
            }
            //ahora asignamos la variable
            this.listadoExamenes = listado;
            if (this.listadoExamenes.length == 0) {
                this.tiene = false;
            }
            console.log(this.listadoExamenes);
        }
        loader.dismiss();
    }
};
ModalExamenesPage.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ModalController"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavParams"] },
    { type: _app_services_ServicioUtiles__WEBPACK_IMPORTED_MODULE_3__["ServicioUtiles"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ToastController"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["Platform"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["MenuController"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["LoadingController"] },
    { type: _app_services_ServicioLaboratorio__WEBPACK_IMPORTED_MODULE_4__["ServicioLaboratorio"] }
];
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('myList', { read: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonList"] })
], ModalExamenesPage.prototype, "list", void 0);
ModalExamenesPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-modal-examenes',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./modal-examenes.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/modal-examenes/modal-examenes.page.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./modal-examenes.page.scss */ "./src/app/modal-examenes/modal-examenes.page.scss")).default]
    })
], ModalExamenesPage);



/***/ })

}]);
//# sourceMappingURL=common-es2015.js.map