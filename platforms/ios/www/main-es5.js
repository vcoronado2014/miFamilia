function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"], {
  /***/
  "./$$_lazy_route_resource lazy recursive":
  /*!******************************************************!*\
    !*** ./$$_lazy_route_resource lazy namespace object ***!
    \******************************************************/

  /*! no static exports found */

  /***/
  function $$_lazy_route_resourceLazyRecursive(module, exports) {
    function webpackEmptyAsyncContext(req) {
      // Here Promise.resolve().then() is used instead of new Promise() to prevent
      // uncaught exception popping up in devtools
      return Promise.resolve().then(function () {
        var e = new Error("Cannot find module '" + req + "'");
        e.code = 'MODULE_NOT_FOUND';
        throw e;
      });
    }

    webpackEmptyAsyncContext.keys = function () {
      return [];
    };

    webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
    module.exports = webpackEmptyAsyncContext;
    webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";
    /***/
  },

  /***/
  "./node_modules/@ionic/core/dist/esm lazy recursive ^\\.\\/.*\\.entry\\.js$ include: \\.entry\\.js$ exclude: \\.system\\.entry\\.js$":
  /*!*****************************************************************************************************************************************!*\
    !*** ./node_modules/@ionic/core/dist/esm lazy ^\.\/.*\.entry\.js$ include: \.entry\.js$ exclude: \.system\.entry\.js$ namespace object ***!
    \*****************************************************************************************************************************************/

  /*! no static exports found */

  /***/
  function node_modulesIonicCoreDistEsmLazyRecursiveEntryJs$IncludeEntryJs$ExcludeSystemEntryJs$(module, exports, __webpack_require__) {
    var map = {
      "./ion-action-sheet-ios.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-action-sheet-ios.entry.js", "common", 0],
      "./ion-action-sheet-md.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-action-sheet-md.entry.js", "common", 1],
      "./ion-alert-ios.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-alert-ios.entry.js", "common", 2],
      "./ion-alert-md.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-alert-md.entry.js", "common", 3],
      "./ion-app_8-ios.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-app_8-ios.entry.js", "common", 4],
      "./ion-app_8-md.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-app_8-md.entry.js", "common", 5],
      "./ion-avatar_3-ios.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-avatar_3-ios.entry.js", "common", 6],
      "./ion-avatar_3-md.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-avatar_3-md.entry.js", "common", 7],
      "./ion-back-button-ios.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-back-button-ios.entry.js", "common", 8],
      "./ion-back-button-md.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-back-button-md.entry.js", "common", 9],
      "./ion-backdrop-ios.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-backdrop-ios.entry.js", 10],
      "./ion-backdrop-md.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-backdrop-md.entry.js", 11],
      "./ion-button_2-ios.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-button_2-ios.entry.js", "common", 12],
      "./ion-button_2-md.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-button_2-md.entry.js", "common", 13],
      "./ion-card_5-ios.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-card_5-ios.entry.js", "common", 14],
      "./ion-card_5-md.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-card_5-md.entry.js", "common", 15],
      "./ion-checkbox-ios.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-checkbox-ios.entry.js", "common", 16],
      "./ion-checkbox-md.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-checkbox-md.entry.js", "common", 17],
      "./ion-chip-ios.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-chip-ios.entry.js", "common", 18],
      "./ion-chip-md.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-chip-md.entry.js", "common", 19],
      "./ion-col_3.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-col_3.entry.js", 20],
      "./ion-datetime_3-ios.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-datetime_3-ios.entry.js", "common", 21],
      "./ion-datetime_3-md.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-datetime_3-md.entry.js", "common", 22],
      "./ion-fab_3-ios.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-fab_3-ios.entry.js", "common", 23],
      "./ion-fab_3-md.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-fab_3-md.entry.js", "common", 24],
      "./ion-img.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-img.entry.js", 25],
      "./ion-infinite-scroll_2-ios.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-infinite-scroll_2-ios.entry.js", 26],
      "./ion-infinite-scroll_2-md.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-infinite-scroll_2-md.entry.js", 27],
      "./ion-input-ios.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-input-ios.entry.js", "common", 28],
      "./ion-input-md.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-input-md.entry.js", "common", 29],
      "./ion-item-option_3-ios.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-item-option_3-ios.entry.js", "common", 30],
      "./ion-item-option_3-md.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-item-option_3-md.entry.js", "common", 31],
      "./ion-item_8-ios.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-item_8-ios.entry.js", "common", 32],
      "./ion-item_8-md.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-item_8-md.entry.js", "common", 33],
      "./ion-loading-ios.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-loading-ios.entry.js", "common", 34],
      "./ion-loading-md.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-loading-md.entry.js", "common", 35],
      "./ion-menu_3-ios.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-menu_3-ios.entry.js", "common", 36],
      "./ion-menu_3-md.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-menu_3-md.entry.js", "common", 37],
      "./ion-modal-ios.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-modal-ios.entry.js", "common", 38],
      "./ion-modal-md.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-modal-md.entry.js", "common", 39],
      "./ion-nav_2.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-nav_2.entry.js", "common", 40],
      "./ion-popover-ios.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-popover-ios.entry.js", "common", 41],
      "./ion-popover-md.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-popover-md.entry.js", "common", 42],
      "./ion-progress-bar-ios.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-progress-bar-ios.entry.js", "common", 43],
      "./ion-progress-bar-md.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-progress-bar-md.entry.js", "common", 44],
      "./ion-radio_2-ios.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-radio_2-ios.entry.js", "common", 45],
      "./ion-radio_2-md.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-radio_2-md.entry.js", "common", 46],
      "./ion-range-ios.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-range-ios.entry.js", "common", 47],
      "./ion-range-md.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-range-md.entry.js", "common", 48],
      "./ion-refresher_2-ios.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-refresher_2-ios.entry.js", "common", 49],
      "./ion-refresher_2-md.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-refresher_2-md.entry.js", "common", 50],
      "./ion-reorder_2-ios.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-reorder_2-ios.entry.js", "common", 51],
      "./ion-reorder_2-md.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-reorder_2-md.entry.js", "common", 52],
      "./ion-ripple-effect.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-ripple-effect.entry.js", 53],
      "./ion-route_4.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-route_4.entry.js", "common", 54],
      "./ion-searchbar-ios.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-searchbar-ios.entry.js", "common", 55],
      "./ion-searchbar-md.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-searchbar-md.entry.js", "common", 56],
      "./ion-segment_2-ios.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-segment_2-ios.entry.js", "common", 57],
      "./ion-segment_2-md.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-segment_2-md.entry.js", "common", 58],
      "./ion-select_3-ios.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-select_3-ios.entry.js", "common", 59],
      "./ion-select_3-md.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-select_3-md.entry.js", "common", 60],
      "./ion-slide_2-ios.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-slide_2-ios.entry.js", 61],
      "./ion-slide_2-md.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-slide_2-md.entry.js", 62],
      "./ion-spinner.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-spinner.entry.js", "common", 63],
      "./ion-split-pane-ios.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-split-pane-ios.entry.js", 64],
      "./ion-split-pane-md.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-split-pane-md.entry.js", 65],
      "./ion-tab-bar_2-ios.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-tab-bar_2-ios.entry.js", "common", 66],
      "./ion-tab-bar_2-md.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-tab-bar_2-md.entry.js", "common", 67],
      "./ion-tab_2.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-tab_2.entry.js", "common", 68],
      "./ion-text.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-text.entry.js", "common", 69],
      "./ion-textarea-ios.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-textarea-ios.entry.js", "common", 70],
      "./ion-textarea-md.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-textarea-md.entry.js", "common", 71],
      "./ion-toast-ios.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-toast-ios.entry.js", "common", 72],
      "./ion-toast-md.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-toast-md.entry.js", "common", 73],
      "./ion-toggle-ios.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-toggle-ios.entry.js", "common", 74],
      "./ion-toggle-md.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-toggle-md.entry.js", "common", 75],
      "./ion-virtual-scroll.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-virtual-scroll.entry.js", 76]
    };

    function webpackAsyncContext(req) {
      if (!__webpack_require__.o(map, req)) {
        return Promise.resolve().then(function () {
          var e = new Error("Cannot find module '" + req + "'");
          e.code = 'MODULE_NOT_FOUND';
          throw e;
        });
      }

      var ids = map[req],
          id = ids[0];
      return Promise.all(ids.slice(1).map(__webpack_require__.e)).then(function () {
        return __webpack_require__(id);
      });
    }

    webpackAsyncContext.keys = function webpackAsyncContextKeys() {
      return Object.keys(map);
    };

    webpackAsyncContext.id = "./node_modules/@ionic/core/dist/esm lazy recursive ^\\.\\/.*\\.entry\\.js$ include: \\.entry\\.js$ exclude: \\.system\\.entry\\.js$";
    module.exports = webpackAsyncContext;
    /***/
  },

  /***/
  "./node_modules/moment/locale sync recursive ^\\.\\/.*$":
  /*!**************************************************!*\
    !*** ./node_modules/moment/locale sync ^\.\/.*$ ***!
    \**************************************************/

  /*! no static exports found */

  /***/
  function node_modulesMomentLocaleSyncRecursive$(module, exports, __webpack_require__) {
    var map = {
      "./af": "./node_modules/moment/locale/af.js",
      "./af.js": "./node_modules/moment/locale/af.js",
      "./ar": "./node_modules/moment/locale/ar.js",
      "./ar-dz": "./node_modules/moment/locale/ar-dz.js",
      "./ar-dz.js": "./node_modules/moment/locale/ar-dz.js",
      "./ar-kw": "./node_modules/moment/locale/ar-kw.js",
      "./ar-kw.js": "./node_modules/moment/locale/ar-kw.js",
      "./ar-ly": "./node_modules/moment/locale/ar-ly.js",
      "./ar-ly.js": "./node_modules/moment/locale/ar-ly.js",
      "./ar-ma": "./node_modules/moment/locale/ar-ma.js",
      "./ar-ma.js": "./node_modules/moment/locale/ar-ma.js",
      "./ar-sa": "./node_modules/moment/locale/ar-sa.js",
      "./ar-sa.js": "./node_modules/moment/locale/ar-sa.js",
      "./ar-tn": "./node_modules/moment/locale/ar-tn.js",
      "./ar-tn.js": "./node_modules/moment/locale/ar-tn.js",
      "./ar.js": "./node_modules/moment/locale/ar.js",
      "./az": "./node_modules/moment/locale/az.js",
      "./az.js": "./node_modules/moment/locale/az.js",
      "./be": "./node_modules/moment/locale/be.js",
      "./be.js": "./node_modules/moment/locale/be.js",
      "./bg": "./node_modules/moment/locale/bg.js",
      "./bg.js": "./node_modules/moment/locale/bg.js",
      "./bm": "./node_modules/moment/locale/bm.js",
      "./bm.js": "./node_modules/moment/locale/bm.js",
      "./bn": "./node_modules/moment/locale/bn.js",
      "./bn.js": "./node_modules/moment/locale/bn.js",
      "./bo": "./node_modules/moment/locale/bo.js",
      "./bo.js": "./node_modules/moment/locale/bo.js",
      "./br": "./node_modules/moment/locale/br.js",
      "./br.js": "./node_modules/moment/locale/br.js",
      "./bs": "./node_modules/moment/locale/bs.js",
      "./bs.js": "./node_modules/moment/locale/bs.js",
      "./ca": "./node_modules/moment/locale/ca.js",
      "./ca.js": "./node_modules/moment/locale/ca.js",
      "./cs": "./node_modules/moment/locale/cs.js",
      "./cs.js": "./node_modules/moment/locale/cs.js",
      "./cv": "./node_modules/moment/locale/cv.js",
      "./cv.js": "./node_modules/moment/locale/cv.js",
      "./cy": "./node_modules/moment/locale/cy.js",
      "./cy.js": "./node_modules/moment/locale/cy.js",
      "./da": "./node_modules/moment/locale/da.js",
      "./da.js": "./node_modules/moment/locale/da.js",
      "./de": "./node_modules/moment/locale/de.js",
      "./de-at": "./node_modules/moment/locale/de-at.js",
      "./de-at.js": "./node_modules/moment/locale/de-at.js",
      "./de-ch": "./node_modules/moment/locale/de-ch.js",
      "./de-ch.js": "./node_modules/moment/locale/de-ch.js",
      "./de.js": "./node_modules/moment/locale/de.js",
      "./dv": "./node_modules/moment/locale/dv.js",
      "./dv.js": "./node_modules/moment/locale/dv.js",
      "./el": "./node_modules/moment/locale/el.js",
      "./el.js": "./node_modules/moment/locale/el.js",
      "./en-au": "./node_modules/moment/locale/en-au.js",
      "./en-au.js": "./node_modules/moment/locale/en-au.js",
      "./en-ca": "./node_modules/moment/locale/en-ca.js",
      "./en-ca.js": "./node_modules/moment/locale/en-ca.js",
      "./en-gb": "./node_modules/moment/locale/en-gb.js",
      "./en-gb.js": "./node_modules/moment/locale/en-gb.js",
      "./en-ie": "./node_modules/moment/locale/en-ie.js",
      "./en-ie.js": "./node_modules/moment/locale/en-ie.js",
      "./en-il": "./node_modules/moment/locale/en-il.js",
      "./en-il.js": "./node_modules/moment/locale/en-il.js",
      "./en-in": "./node_modules/moment/locale/en-in.js",
      "./en-in.js": "./node_modules/moment/locale/en-in.js",
      "./en-nz": "./node_modules/moment/locale/en-nz.js",
      "./en-nz.js": "./node_modules/moment/locale/en-nz.js",
      "./en-sg": "./node_modules/moment/locale/en-sg.js",
      "./en-sg.js": "./node_modules/moment/locale/en-sg.js",
      "./eo": "./node_modules/moment/locale/eo.js",
      "./eo.js": "./node_modules/moment/locale/eo.js",
      "./es": "./node_modules/moment/locale/es.js",
      "./es-do": "./node_modules/moment/locale/es-do.js",
      "./es-do.js": "./node_modules/moment/locale/es-do.js",
      "./es-us": "./node_modules/moment/locale/es-us.js",
      "./es-us.js": "./node_modules/moment/locale/es-us.js",
      "./es.js": "./node_modules/moment/locale/es.js",
      "./et": "./node_modules/moment/locale/et.js",
      "./et.js": "./node_modules/moment/locale/et.js",
      "./eu": "./node_modules/moment/locale/eu.js",
      "./eu.js": "./node_modules/moment/locale/eu.js",
      "./fa": "./node_modules/moment/locale/fa.js",
      "./fa.js": "./node_modules/moment/locale/fa.js",
      "./fi": "./node_modules/moment/locale/fi.js",
      "./fi.js": "./node_modules/moment/locale/fi.js",
      "./fil": "./node_modules/moment/locale/fil.js",
      "./fil.js": "./node_modules/moment/locale/fil.js",
      "./fo": "./node_modules/moment/locale/fo.js",
      "./fo.js": "./node_modules/moment/locale/fo.js",
      "./fr": "./node_modules/moment/locale/fr.js",
      "./fr-ca": "./node_modules/moment/locale/fr-ca.js",
      "./fr-ca.js": "./node_modules/moment/locale/fr-ca.js",
      "./fr-ch": "./node_modules/moment/locale/fr-ch.js",
      "./fr-ch.js": "./node_modules/moment/locale/fr-ch.js",
      "./fr.js": "./node_modules/moment/locale/fr.js",
      "./fy": "./node_modules/moment/locale/fy.js",
      "./fy.js": "./node_modules/moment/locale/fy.js",
      "./ga": "./node_modules/moment/locale/ga.js",
      "./ga.js": "./node_modules/moment/locale/ga.js",
      "./gd": "./node_modules/moment/locale/gd.js",
      "./gd.js": "./node_modules/moment/locale/gd.js",
      "./gl": "./node_modules/moment/locale/gl.js",
      "./gl.js": "./node_modules/moment/locale/gl.js",
      "./gom-deva": "./node_modules/moment/locale/gom-deva.js",
      "./gom-deva.js": "./node_modules/moment/locale/gom-deva.js",
      "./gom-latn": "./node_modules/moment/locale/gom-latn.js",
      "./gom-latn.js": "./node_modules/moment/locale/gom-latn.js",
      "./gu": "./node_modules/moment/locale/gu.js",
      "./gu.js": "./node_modules/moment/locale/gu.js",
      "./he": "./node_modules/moment/locale/he.js",
      "./he.js": "./node_modules/moment/locale/he.js",
      "./hi": "./node_modules/moment/locale/hi.js",
      "./hi.js": "./node_modules/moment/locale/hi.js",
      "./hr": "./node_modules/moment/locale/hr.js",
      "./hr.js": "./node_modules/moment/locale/hr.js",
      "./hu": "./node_modules/moment/locale/hu.js",
      "./hu.js": "./node_modules/moment/locale/hu.js",
      "./hy-am": "./node_modules/moment/locale/hy-am.js",
      "./hy-am.js": "./node_modules/moment/locale/hy-am.js",
      "./id": "./node_modules/moment/locale/id.js",
      "./id.js": "./node_modules/moment/locale/id.js",
      "./is": "./node_modules/moment/locale/is.js",
      "./is.js": "./node_modules/moment/locale/is.js",
      "./it": "./node_modules/moment/locale/it.js",
      "./it-ch": "./node_modules/moment/locale/it-ch.js",
      "./it-ch.js": "./node_modules/moment/locale/it-ch.js",
      "./it.js": "./node_modules/moment/locale/it.js",
      "./ja": "./node_modules/moment/locale/ja.js",
      "./ja.js": "./node_modules/moment/locale/ja.js",
      "./jv": "./node_modules/moment/locale/jv.js",
      "./jv.js": "./node_modules/moment/locale/jv.js",
      "./ka": "./node_modules/moment/locale/ka.js",
      "./ka.js": "./node_modules/moment/locale/ka.js",
      "./kk": "./node_modules/moment/locale/kk.js",
      "./kk.js": "./node_modules/moment/locale/kk.js",
      "./km": "./node_modules/moment/locale/km.js",
      "./km.js": "./node_modules/moment/locale/km.js",
      "./kn": "./node_modules/moment/locale/kn.js",
      "./kn.js": "./node_modules/moment/locale/kn.js",
      "./ko": "./node_modules/moment/locale/ko.js",
      "./ko.js": "./node_modules/moment/locale/ko.js",
      "./ku": "./node_modules/moment/locale/ku.js",
      "./ku.js": "./node_modules/moment/locale/ku.js",
      "./ky": "./node_modules/moment/locale/ky.js",
      "./ky.js": "./node_modules/moment/locale/ky.js",
      "./lb": "./node_modules/moment/locale/lb.js",
      "./lb.js": "./node_modules/moment/locale/lb.js",
      "./lo": "./node_modules/moment/locale/lo.js",
      "./lo.js": "./node_modules/moment/locale/lo.js",
      "./lt": "./node_modules/moment/locale/lt.js",
      "./lt.js": "./node_modules/moment/locale/lt.js",
      "./lv": "./node_modules/moment/locale/lv.js",
      "./lv.js": "./node_modules/moment/locale/lv.js",
      "./me": "./node_modules/moment/locale/me.js",
      "./me.js": "./node_modules/moment/locale/me.js",
      "./mi": "./node_modules/moment/locale/mi.js",
      "./mi.js": "./node_modules/moment/locale/mi.js",
      "./mk": "./node_modules/moment/locale/mk.js",
      "./mk.js": "./node_modules/moment/locale/mk.js",
      "./ml": "./node_modules/moment/locale/ml.js",
      "./ml.js": "./node_modules/moment/locale/ml.js",
      "./mn": "./node_modules/moment/locale/mn.js",
      "./mn.js": "./node_modules/moment/locale/mn.js",
      "./mr": "./node_modules/moment/locale/mr.js",
      "./mr.js": "./node_modules/moment/locale/mr.js",
      "./ms": "./node_modules/moment/locale/ms.js",
      "./ms-my": "./node_modules/moment/locale/ms-my.js",
      "./ms-my.js": "./node_modules/moment/locale/ms-my.js",
      "./ms.js": "./node_modules/moment/locale/ms.js",
      "./mt": "./node_modules/moment/locale/mt.js",
      "./mt.js": "./node_modules/moment/locale/mt.js",
      "./my": "./node_modules/moment/locale/my.js",
      "./my.js": "./node_modules/moment/locale/my.js",
      "./nb": "./node_modules/moment/locale/nb.js",
      "./nb.js": "./node_modules/moment/locale/nb.js",
      "./ne": "./node_modules/moment/locale/ne.js",
      "./ne.js": "./node_modules/moment/locale/ne.js",
      "./nl": "./node_modules/moment/locale/nl.js",
      "./nl-be": "./node_modules/moment/locale/nl-be.js",
      "./nl-be.js": "./node_modules/moment/locale/nl-be.js",
      "./nl.js": "./node_modules/moment/locale/nl.js",
      "./nn": "./node_modules/moment/locale/nn.js",
      "./nn.js": "./node_modules/moment/locale/nn.js",
      "./oc-lnc": "./node_modules/moment/locale/oc-lnc.js",
      "./oc-lnc.js": "./node_modules/moment/locale/oc-lnc.js",
      "./pa-in": "./node_modules/moment/locale/pa-in.js",
      "./pa-in.js": "./node_modules/moment/locale/pa-in.js",
      "./pl": "./node_modules/moment/locale/pl.js",
      "./pl.js": "./node_modules/moment/locale/pl.js",
      "./pt": "./node_modules/moment/locale/pt.js",
      "./pt-br": "./node_modules/moment/locale/pt-br.js",
      "./pt-br.js": "./node_modules/moment/locale/pt-br.js",
      "./pt.js": "./node_modules/moment/locale/pt.js",
      "./ro": "./node_modules/moment/locale/ro.js",
      "./ro.js": "./node_modules/moment/locale/ro.js",
      "./ru": "./node_modules/moment/locale/ru.js",
      "./ru.js": "./node_modules/moment/locale/ru.js",
      "./sd": "./node_modules/moment/locale/sd.js",
      "./sd.js": "./node_modules/moment/locale/sd.js",
      "./se": "./node_modules/moment/locale/se.js",
      "./se.js": "./node_modules/moment/locale/se.js",
      "./si": "./node_modules/moment/locale/si.js",
      "./si.js": "./node_modules/moment/locale/si.js",
      "./sk": "./node_modules/moment/locale/sk.js",
      "./sk.js": "./node_modules/moment/locale/sk.js",
      "./sl": "./node_modules/moment/locale/sl.js",
      "./sl.js": "./node_modules/moment/locale/sl.js",
      "./sq": "./node_modules/moment/locale/sq.js",
      "./sq.js": "./node_modules/moment/locale/sq.js",
      "./sr": "./node_modules/moment/locale/sr.js",
      "./sr-cyrl": "./node_modules/moment/locale/sr-cyrl.js",
      "./sr-cyrl.js": "./node_modules/moment/locale/sr-cyrl.js",
      "./sr.js": "./node_modules/moment/locale/sr.js",
      "./ss": "./node_modules/moment/locale/ss.js",
      "./ss.js": "./node_modules/moment/locale/ss.js",
      "./sv": "./node_modules/moment/locale/sv.js",
      "./sv.js": "./node_modules/moment/locale/sv.js",
      "./sw": "./node_modules/moment/locale/sw.js",
      "./sw.js": "./node_modules/moment/locale/sw.js",
      "./ta": "./node_modules/moment/locale/ta.js",
      "./ta.js": "./node_modules/moment/locale/ta.js",
      "./te": "./node_modules/moment/locale/te.js",
      "./te.js": "./node_modules/moment/locale/te.js",
      "./tet": "./node_modules/moment/locale/tet.js",
      "./tet.js": "./node_modules/moment/locale/tet.js",
      "./tg": "./node_modules/moment/locale/tg.js",
      "./tg.js": "./node_modules/moment/locale/tg.js",
      "./th": "./node_modules/moment/locale/th.js",
      "./th.js": "./node_modules/moment/locale/th.js",
      "./tk": "./node_modules/moment/locale/tk.js",
      "./tk.js": "./node_modules/moment/locale/tk.js",
      "./tl-ph": "./node_modules/moment/locale/tl-ph.js",
      "./tl-ph.js": "./node_modules/moment/locale/tl-ph.js",
      "./tlh": "./node_modules/moment/locale/tlh.js",
      "./tlh.js": "./node_modules/moment/locale/tlh.js",
      "./tr": "./node_modules/moment/locale/tr.js",
      "./tr.js": "./node_modules/moment/locale/tr.js",
      "./tzl": "./node_modules/moment/locale/tzl.js",
      "./tzl.js": "./node_modules/moment/locale/tzl.js",
      "./tzm": "./node_modules/moment/locale/tzm.js",
      "./tzm-latn": "./node_modules/moment/locale/tzm-latn.js",
      "./tzm-latn.js": "./node_modules/moment/locale/tzm-latn.js",
      "./tzm.js": "./node_modules/moment/locale/tzm.js",
      "./ug-cn": "./node_modules/moment/locale/ug-cn.js",
      "./ug-cn.js": "./node_modules/moment/locale/ug-cn.js",
      "./uk": "./node_modules/moment/locale/uk.js",
      "./uk.js": "./node_modules/moment/locale/uk.js",
      "./ur": "./node_modules/moment/locale/ur.js",
      "./ur.js": "./node_modules/moment/locale/ur.js",
      "./uz": "./node_modules/moment/locale/uz.js",
      "./uz-latn": "./node_modules/moment/locale/uz-latn.js",
      "./uz-latn.js": "./node_modules/moment/locale/uz-latn.js",
      "./uz.js": "./node_modules/moment/locale/uz.js",
      "./vi": "./node_modules/moment/locale/vi.js",
      "./vi.js": "./node_modules/moment/locale/vi.js",
      "./x-pseudo": "./node_modules/moment/locale/x-pseudo.js",
      "./x-pseudo.js": "./node_modules/moment/locale/x-pseudo.js",
      "./yo": "./node_modules/moment/locale/yo.js",
      "./yo.js": "./node_modules/moment/locale/yo.js",
      "./zh-cn": "./node_modules/moment/locale/zh-cn.js",
      "./zh-cn.js": "./node_modules/moment/locale/zh-cn.js",
      "./zh-hk": "./node_modules/moment/locale/zh-hk.js",
      "./zh-hk.js": "./node_modules/moment/locale/zh-hk.js",
      "./zh-mo": "./node_modules/moment/locale/zh-mo.js",
      "./zh-mo.js": "./node_modules/moment/locale/zh-mo.js",
      "./zh-tw": "./node_modules/moment/locale/zh-tw.js",
      "./zh-tw.js": "./node_modules/moment/locale/zh-tw.js"
    };

    function webpackContext(req) {
      var id = webpackContextResolve(req);
      return __webpack_require__(id);
    }

    function webpackContextResolve(req) {
      if (!__webpack_require__.o(map, req)) {
        var e = new Error("Cannot find module '" + req + "'");
        e.code = 'MODULE_NOT_FOUND';
        throw e;
      }

      return map[req];
    }

    webpackContext.keys = function webpackContextKeys() {
      return Object.keys(map);
    };

    webpackContext.resolve = webpackContextResolve;
    module.exports = webpackContext;
    webpackContext.id = "./node_modules/moment/locale sync recursive ^\\.\\/.*$";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html":
  /*!**************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html ***!
    \**************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppAppComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ion-app>\r\n  <ion-router-outlet></ion-router-outlet>\r\n</ion-app>\r\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/components/avatar-simple/avatar-simple.component.html":
  /*!*************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/avatar-simple/avatar-simple.component.html ***!
    \*************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppComponentsAvatarSimpleAvatarSimpleComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "  <ion-row style=\"display: block;\">\n    <div class=\"text-avatar\">{{nombreCompleto}}</div>\n    <div class=\"subtext-avatar\">{{parentezco}}</div>\n  </ion-row>\n\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/components/avatar/avatar.component.html":
  /*!***********************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/avatar/avatar.component.html ***!
    \***********************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppComponentsAvatarAvatarComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ion-item [lines]=\"lines\" [ngClass]=\"{'avatar-padding':style, 'avatar-no-padding': style == false }\" style=\"width: 100%;\">\n  <!-- poner avatar -->\n  <ion-avatar slot=\"start\">\n    <img *ngIf=\"urlImagen != ''\" src={{urlImagen}}>\n    <img *ngIf=\"urlImagen == ''\" src=\"../assets/img/no-imagen.jpg\">\n  </ion-avatar>\n  <ion-row style=\"display: block; width: 100%;\">\n    <div class=\"text-avatar\">{{nombreCompleto}}</div>\n    <div class=\"subtext-avatar\">{{parentezco}}</div>\n  </ion-row>\n</ion-item>\n\n\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/components/card-calendario/card-calendario.component.html":
  /*!*****************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/card-calendario/card-calendario.component.html ***!
    \*****************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppComponentsCardCalendarioCardCalendarioComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "      <!-- prueba de material -->\n      <!-- fila fecha superior si es actual la mostramos en negrita-->\n      <div id=\"{{item.DiferenciaFechas.toString()}}\">\n        <ion-row *ngIf=\"transformDate(item.FechaCompleta, 'YYYY-MM-DD') == fechaActual && item.Eventos[0].NombrePrincipal != 'Nada planificado para hoy'\">\n          <label class=\"fecha-card\" style=\"font-size: 1.3em;\"><strong>{{item.NumeroDia}} de\n              {{transformDate(item.FechaCompleta, 'MMMM')}}</strong></label>\n        </ion-row>\n        <ion-row\n          *ngIf=\"transformDate(item.FechaCompleta, 'YYYY-MM-DD') == fechaActual && item.Eventos[0].NombrePrincipal == 'Nada planificado para hoy'\">\n          <ion-grid style=\"background-color: #d1c4e9;\n                      font-size: 16px;\n                      width: initial;\n                      border-radius: 4px;\n                      height: 40px;\n                      margin: 8px;\n                      margin-top: 0;\n                      margin-bottom: 0;\" id=\"0\">\n            <ion-col>\n              <span><strong>{{item.NumeroDia}} de\n                  {{transformDate(item.FechaCompleta, 'MMMM')}}</strong></span>\n            </ion-col>\n            <ion-col>\n              <span style=\"padding-inline: 16px;color: rgb(0 0 0 / 54%);\">Nada planificado para hoy </span>\n            </ion-col>\n          </ion-grid>\n        \n        </ion-row>\n      </div>\n      <ion-row *ngIf=\"transformDate(item.FechaCompleta, 'YYYY-MM-DD') != fechaActual\">\n        <label *ngIf=\"transformDate(item.FechaCompleta, 'YYYY') != anioActual\" class=\"fecha-card\">{{item.NumeroDia}} de\n          {{transformDate(item.FechaCompleta, 'MMMM')}} del {{transformDate(item.FechaCompleta, 'YYYY')}}</label>\n        <label *ngIf=\"transformDate(item.FechaCompleta, 'YYYY') == anioActual\" class=\"fecha-card\">{{item.NumeroDia}} de\n          {{transformDate(item.FechaCompleta, 'MMMM')}} </label>\n      </ion-row>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/components/content-slide/content-slide.component.html":
  /*!*************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/content-slide/content-slide.component.html ***!
    \*************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppComponentsContentSlideContentSlideComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<h5 class=\"titulo-slide\">{{titulo}}</h5>\r\n<h6 class=\"titulo-slide\"  *ngIf=\"subTitulo != null\">{{subTitulo}}</h6>\r\n<p class=\"subtitulo-slide\">{{contenido}}</p>\r\n<!-- mostrar dependiendo si modulo es distinto de null -->\r\n<!-- <button [hidden]=\"modulo == null\" mat-stroked-button color=\"accent\" (click)=\"openGenerico(modulo)\">Ir...</button> -->";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/components/item-home/item-home.component.html":
  /*!*****************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/item-home/item-home.component.html ***!
    \*****************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppComponentsItemHomeItemHomeComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<mat-card style=\"padding: 0;\" (click)=\"openGenerico(modulo)\">\n  <img class={{classImagen}} src={{rutaImagen}}>\n  <mat-card-header style=\"padding-left: 16px;\">\n      <mat-card-title style=\"padding-top: 16px;\" class=\"ion-text-capitalize\">{{modulo.toLowerCase()}}</mat-card-title>\n  </mat-card-header>\n</mat-card>\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/components/pagina-mensajes/pagina-mensajes.component.html":
  /*!*****************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/pagina-mensajes/pagina-mensajes.component.html ***!
    \*****************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppComponentsPaginaMensajesPaginaMensajesComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"centrado ion-no-padding\">\r\n    <h1>{{titulo}}</h1>\r\n    <p class=\"texto-1 ion-text-left\">{{contenido}}</p>\r\n    <!-- boton volver -->\r\n    <div class=\"row mt-32\">\r\n        <button mat-raised-button color=\"primary\" style=\"width: 100%;\" class=\"boton\" (click)=\"volver()\">VOLVER</button>\r\n    </div>\r\n</div>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/components/progress-minimo/progress-minimo.component.html":
  /*!*****************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/progress-minimo/progress-minimo.component.html ***!
    \*****************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppComponentsProgressMinimoProgressMinimoComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "  <!-- progress bar -->\r\n<div class=\"centrado\" [hidden]=\"!mostrar\">\r\n    <ion-label class=\"titulo-item-2\">{{titulo}}</ion-label>\r\n    <ion-progress-bar type=\"indeterminate\" class=\"ion-margin-top\"></ion-progress-bar>\r\n</div>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/components/progress/progress.component.html":
  /*!***************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/progress/progress.component.html ***!
    \***************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppComponentsProgressProgressComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "  <!-- progress bar -->\n  <div class=\"centrado\" [hidden]=\"!mostrar\">\n      <ion-label class=\"titulo-item-2\">{{titulo}}</ion-label>\n      <ion-progress-bar type=\"indeterminate\" class=\"ion-margin-top\"></ion-progress-bar>\n  </div>";
    /***/
  },

  /***/
  "./src/app/app-routing.module.ts":
  /*!***************************************!*\
    !*** ./src/app/app-routing.module.ts ***!
    \***************************************/

  /*! exports provided: AppRoutingModule */

  /***/
  function srcAppAppRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function () {
      return AppRoutingModule;
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


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");

    var routes = [{
      path: '',
      redirectTo: 'inicio',
      pathMatch: 'full'
    }, {
      path: 'home',
      loadChildren: function loadChildren() {
        return Promise.all(
        /*! import() | home-home-module */
        [__webpack_require__.e("common"), __webpack_require__.e("home-home-module")]).then(__webpack_require__.bind(null,
        /*! ./home/home.module */
        "./src/app/home/home.module.ts")).then(function (m) {
          return m.HomePageModule;
        });
      }
    }, {
      path: '',
      redirectTo: 'home',
      pathMatch: 'full'
    }, {
      path: 'antecedentes',
      loadChildren: function loadChildren() {
        return __webpack_require__.e(
        /*! import() | antecedentes-antecedentes-module */
        "antecedentes-antecedentes-module").then(__webpack_require__.bind(null,
        /*! ./antecedentes/antecedentes.module */
        "./src/app/antecedentes/antecedentes.module.ts")).then(function (m) {
          return m.AntecedentesPageModule;
        });
      }
    }, {
      path: 'detail-usuario',
      loadChildren: function loadChildren() {
        return __webpack_require__.e(
        /*! import() | detail-usuario-detail-usuario-module */
        "detail-usuario-detail-usuario-module").then(__webpack_require__.bind(null,
        /*! ./detail-usuario/detail-usuario.module */
        "./src/app/detail-usuario/detail-usuario.module.ts")).then(function (m) {
          return m.DetailUsuarioPageModule;
        });
      }
    }, {
      path: 'familia',
      loadChildren: function loadChildren() {
        return Promise.all(
        /*! import() | familia-familia-module */
        [__webpack_require__.e("default~familia-familia-module~modal-ajustes-modal-ajustes-module"), __webpack_require__.e("familia-familia-module")]).then(__webpack_require__.bind(null,
        /*! ./familia/familia.module */
        "./src/app/familia/familia.module.ts")).then(function (m) {
          return m.FamiliaPageModule;
        });
      }
    }, {
      path: 'modal-ajustes',
      loadChildren: function loadChildren() {
        return Promise.all(
        /*! import() | modal-ajustes-modal-ajustes-module */
        [__webpack_require__.e("default~familia-familia-module~modal-ajustes-modal-ajustes-module"), __webpack_require__.e("modal-ajustes-modal-ajustes-module")]).then(__webpack_require__.bind(null,
        /*! ./modal-ajustes/modal-ajustes.module */
        "./src/app/modal-ajustes/modal-ajustes.module.ts")).then(function (m) {
          return m.ModalAjustesPageModule;
        });
      }
    }, {
      path: 'ordenes',
      loadChildren: function loadChildren() {
        return Promise.all(
        /*! import() | ordenes-ordenes-module */
        [__webpack_require__.e("default~modal-examenes-modal-examenes-module~ordenes-ordenes-module"), __webpack_require__.e("common"), __webpack_require__.e("ordenes-ordenes-module")]).then(__webpack_require__.bind(null,
        /*! ./ordenes/ordenes.module */
        "./src/app/ordenes/ordenes.module.ts")).then(function (m) {
          return m.OrdenesPageModule;
        });
      }
    }, {
      path: 'modal-examenes',
      loadChildren: function loadChildren() {
        return Promise.all(
        /*! import() | modal-examenes-modal-examenes-module */
        [__webpack_require__.e("default~modal-examenes-modal-examenes-module~ordenes-ordenes-module"), __webpack_require__.e("modal-examenes-modal-examenes-module")]).then(__webpack_require__.bind(null,
        /*! ./modal-examenes/modal-examenes.module */
        "./src/app/modal-examenes/modal-examenes.module.ts")).then(function (m) {
          return m.ModalExamenesPageModule;
        });
      }
    }, {
      path: 'calendario',
      loadChildren: function loadChildren() {
        return Promise.all(
        /*! import() | calendario-calendario-module */
        [__webpack_require__.e("default~calendario-calendario-module~modal-detalle-cita-modal-detalle-cita-module"), __webpack_require__.e("calendario-calendario-module")]).then(__webpack_require__.bind(null,
        /*! ./calendario/calendario.module */
        "./src/app/calendario/calendario.module.ts")).then(function (m) {
          return m.CalendarioPageModule;
        });
      }
    }, {
      path: 'modal-detalle-cita',
      loadChildren: function loadChildren() {
        return Promise.all(
        /*! import() | modal-detalle-cita-modal-detalle-cita-module */
        [__webpack_require__.e("default~calendario-calendario-module~modal-detalle-cita-modal-detalle-cita-module"), __webpack_require__.e("modal-detalle-cita-modal-detalle-cita-module")]).then(__webpack_require__.bind(null,
        /*! ./modal-detalle-cita/modal-detalle-cita.module */
        "./src/app/modal-detalle-cita/modal-detalle-cita.module.ts")).then(function (m) {
          return m.ModalDetalleCitaPageModule;
        });
      }
    }, {
      path: 'modal-operacion-cita',
      loadChildren: function loadChildren() {
        return Promise.all(
        /*! import() | modal-operacion-cita-modal-operacion-cita-module */
        [__webpack_require__.e("default~busqueda-avanzada-busqueda-avanzada-module~cupos-disponibles-cupos-disponibles-module~modal-~8414b8c5"), __webpack_require__.e("modal-operacion-cita-modal-operacion-cita-module")]).then(__webpack_require__.bind(null,
        /*! ./modal-operacion-cita/modal-operacion-cita.module */
        "./src/app/modal-operacion-cita/modal-operacion-cita.module.ts")).then(function (m) {
          return m.ModalOperacionCitaPageModule;
        });
      }
    }, {
      path: 'cupos-disponibles',
      loadChildren: function loadChildren() {
        return Promise.all(
        /*! import() | cupos-disponibles-cupos-disponibles-module */
        [__webpack_require__.e("default~busqueda-avanzada-busqueda-avanzada-module~cupos-disponibles-cupos-disponibles-module~modal-~8414b8c5"), __webpack_require__.e("cupos-disponibles-cupos-disponibles-module")]).then(__webpack_require__.bind(null,
        /*! ./cupos-disponibles/cupos-disponibles.module */
        "./src/app/cupos-disponibles/cupos-disponibles.module.ts")).then(function (m) {
          return m.CuposDisponiblesPageModule;
        });
      }
    }, {
      path: 'pre-tiposatencion',
      loadChildren: function loadChildren() {
        return Promise.all(
        /*! import() | pre-tiposatencion-pre-tiposatencion-module */
        [__webpack_require__.e("default~busqueda-avanzada-busqueda-avanzada-module~cupos-disponibles-cupos-disponibles-module~modal-~8414b8c5"), __webpack_require__.e("pre-tiposatencion-pre-tiposatencion-module")]).then(__webpack_require__.bind(null,
        /*! ./pre-tiposatencion/pre-tiposatencion.module */
        "./src/app/pre-tiposatencion/pre-tiposatencion.module.ts")).then(function (m) {
          return m.PreTiposatencionPageModule;
        });
      }
    }, {
      path: 'busqueda-avanzada',
      loadChildren: function loadChildren() {
        return Promise.all(
        /*! import() | busqueda-avanzada-busqueda-avanzada-module */
        [__webpack_require__.e("default~busqueda-avanzada-busqueda-avanzada-module~cupos-disponibles-cupos-disponibles-module~modal-~8414b8c5"), __webpack_require__.e("busqueda-avanzada-busqueda-avanzada-module")]).then(__webpack_require__.bind(null,
        /*! ./busqueda-avanzada/busqueda-avanzada.module */
        "./src/app/busqueda-avanzada/busqueda-avanzada.module.ts")).then(function (m) {
          return m.BusquedaAvanzadaPageModule;
        });
      }
    }, {
      path: 'nuevo-login',
      loadChildren: function loadChildren() {
        return __webpack_require__.e(
        /*! import() | nuevo-login-nuevo-login-module */
        "nuevo-login-nuevo-login-module").then(__webpack_require__.bind(null,
        /*! ./nuevo-login/nuevo-login.module */
        "./src/app/nuevo-login/nuevo-login.module.ts")).then(function (m) {
          return m.NuevoLoginPageModule;
        });
      }
    }, {
      path: 'inicio',
      loadChildren: function loadChildren() {
        return __webpack_require__.e(
        /*! import() | inicio-inicio-module */
        "inicio-inicio-module").then(__webpack_require__.bind(null,
        /*! ./inicio/inicio.module */
        "./src/app/inicio/inicio.module.ts")).then(function (m) {
          return m.InicioPageModule;
        });
      }
    }, {
      path: 'registro-uno',
      loadChildren: function loadChildren() {
        return __webpack_require__.e(
        /*! import() | registro-uno-registro-uno-module */
        "registro-uno-registro-uno-module").then(__webpack_require__.bind(null,
        /*! ./registro-uno/registro-uno.module */
        "./src/app/registro-uno/registro-uno.module.ts")).then(function (m) {
          return m.RegistroUnoPageModule;
        });
      }
    }, {
      path: 'recuperar-clave',
      loadChildren: function loadChildren() {
        return __webpack_require__.e(
        /*! import() | recuperar-clave-recuperar-clave-module */
        "recuperar-clave-recuperar-clave-module").then(__webpack_require__.bind(null,
        /*! ./recuperar-clave/recuperar-clave.module */
        "./src/app/recuperar-clave/recuperar-clave.module.ts")).then(function (m) {
          return m.RecuperarClavePageModule;
        });
      }
    }, {
      path: 'login-clave-unica',
      loadChildren: function loadChildren() {
        return __webpack_require__.e(
        /*! import() | login-clave-unica-login-clave-unica-module */
        "login-clave-unica-login-clave-unica-module").then(__webpack_require__.bind(null,
        /*! ./login-clave-unica/login-clave-unica.module */
        "./src/app/login-clave-unica/login-clave-unica.module.ts")).then(function (m) {
          return m.LoginClaveUnicaPageModule;
        });
      }
    }, {
      path: 'registro-usuario',
      loadChildren: function loadChildren() {
        return __webpack_require__.e(
        /*! import() | registro-usuario-registro-usuario-module */
        "registro-usuario-registro-usuario-module").then(__webpack_require__.bind(null,
        /*! ./registro-usuario/registro-usuario.module */
        "./src/app/registro-usuario/registro-usuario.module.ts")).then(function (m) {
          return m.RegistroUsuarioPageModule;
        });
      }
    }, {
      path: 'pre-registro-uno',
      loadChildren: function loadChildren() {
        return __webpack_require__.e(
        /*! import() | pre-registro-uno-pre-registro-uno-module */
        "pre-registro-uno-pre-registro-uno-module").then(__webpack_require__.bind(null,
        /*! ./pre-registro-uno/pre-registro-uno.module */
        "./src/app/pre-registro-uno/pre-registro-uno.module.ts")).then(function (m) {
          return m.PreRegistroUnoPageModule;
        });
      }
    }, {
      path: 'contactabilidad',
      loadChildren: function loadChildren() {
        return __webpack_require__.e(
        /*! import() | contactabilidad-contactabilidad-module */
        "contactabilidad-contactabilidad-module").then(__webpack_require__.bind(null,
        /*! ./contactabilidad/contactabilidad.module */
        "./src/app/contactabilidad/contactabilidad.module.ts")).then(function (m) {
          return m.ContactabilidadPageModule;
        });
      }
    }, {
      path: 'interconsultas',
      loadChildren: function loadChildren() {
        return __webpack_require__.e(
        /*! import() | interconsultas-interconsultas-module */
        "interconsultas-interconsultas-module").then(__webpack_require__.bind(null,
        /*! ./interconsultas/interconsultas.module */
        "./src/app/interconsultas/interconsultas.module.ts")).then(function (m) {
          return m.InterconsultasPageModule;
        });
      }
    }, {
      path: 'ajustes-familia',
      loadChildren: function loadChildren() {
        return __webpack_require__.e(
        /*! import() | ajustes-familia-ajustes-familia-module */
        "ajustes-familia-ajustes-familia-module").then(__webpack_require__.bind(null,
        /*! ./ajustes-familia/ajustes-familia.module */
        "./src/app/ajustes-familia/ajustes-familia.module.ts")).then(function (m) {
          return m.AjustesFamiliaPageModule;
        });
      }
    }, {
      path: 'seleccion-usuario',
      loadChildren: function loadChildren() {
        return __webpack_require__.e(
        /*! import() | seleccion-usuario-seleccion-usuario-module */
        "seleccion-usuario-seleccion-usuario-module").then(__webpack_require__.bind(null,
        /*! ./seleccion-usuario/seleccion-usuario.module */
        "./src/app/seleccion-usuario/seleccion-usuario.module.ts")).then(function (m) {
          return m.SeleccionUsuarioPageModule;
        });
      }
    }, {
      path: 'validacion-factor',
      loadChildren: function loadChildren() {
        return __webpack_require__.e(
        /*! import() | validacion-factor-validacion-factor-module */
        "validacion-factor-validacion-factor-module").then(__webpack_require__.bind(null,
        /*! ./validacion-factor/validacion-factor.module */
        "./src/app/validacion-factor/validacion-factor.module.ts")).then(function (m) {
          return m.ValidacionFactorPageModule;
        });
      }
    }, {
      path: 'asociar-familia',
      loadChildren: function loadChildren() {
        return __webpack_require__.e(
        /*! import() | asociar-familia-asociar-familia-module */
        "asociar-familia-asociar-familia-module").then(__webpack_require__.bind(null,
        /*! ./asociar-familia/asociar-familia.module */
        "./src/app/asociar-familia/asociar-familia.module.ts")).then(function (m) {
          return m.AsociarFamiliaPageModule;
        });
      }
    }, {
      path: 'quitar-familia',
      loadChildren: function loadChildren() {
        return __webpack_require__.e(
        /*! import() | quitar-familia-quitar-familia-module */
        "quitar-familia-quitar-familia-module").then(__webpack_require__.bind(null,
        /*! ./quitar-familia/quitar-familia.module */
        "./src/app/quitar-familia/quitar-familia.module.ts")).then(function (m) {
          return m.QuitarFamiliaPageModule;
        });
      }
    }, {
      path: 'pre-ordenes',
      loadChildren: function loadChildren() {
        return __webpack_require__.e(
        /*! import() | pre-ordenes-pre-ordenes-module */
        "pre-ordenes-pre-ordenes-module").then(__webpack_require__.bind(null,
        /*! ./pre-ordenes/pre-ordenes.module */
        "./src/app/pre-ordenes/pre-ordenes.module.ts")).then(function (m) {
          return m.PreOrdenesPageModule;
        });
      }
    }, {
      path: 'modal-alertas',
      loadChildren: function loadChildren() {
        return Promise.all(
        /*! import() | modal-alertas-modal-alertas-module */
        [__webpack_require__.e("common"), __webpack_require__.e("modal-alertas-modal-alertas-module")]).then(__webpack_require__.bind(null,
        /*! ./modal-alertas/modal-alertas.module */
        "./src/app/modal-alertas/modal-alertas.module.ts")).then(function (m) {
          return m.ModalAlertasPageModule;
        });
      }
    }, {
      path: 'resultados',
      loadChildren: function loadChildren() {
        return __webpack_require__.e(
        /*! import() | resultados-resultados-module */
        "resultados-resultados-module").then(__webpack_require__.bind(null,
        /*! ./resultados/resultados.module */
        "./src/app/resultados/resultados.module.ts")).then(function (m) {
          return m.ResultadosPageModule;
        });
      }
    }, {
      path: 'modal-busqueda',
      loadChildren: function loadChildren() {
        return Promise.all(
        /*! import() | modal-busqueda-modal-busqueda-module */
        [__webpack_require__.e("common"), __webpack_require__.e("modal-busqueda-modal-busqueda-module")]).then(__webpack_require__.bind(null,
        /*! ./modal-busqueda/modal-busqueda.module */
        "./src/app/modal-busqueda/modal-busqueda.module.ts")).then(function (m) {
          return m.ModalBusquedaPageModule;
        });
      }
    }];

    var AppRoutingModule = function AppRoutingModule() {
      _classCallCheck(this, AppRoutingModule);
    };

    AppRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes, {
        preloadingStrategy: _angular_router__WEBPACK_IMPORTED_MODULE_2__["PreloadAllModules"]
      })],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], AppRoutingModule);
    /***/
  },

  /***/
  "./src/app/app.component.scss":
  /*!************************************!*\
    !*** ./src/app/app.component.scss ***!
    \************************************/

  /*! exports provided: default */

  /***/
  function srcAppAppComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuc2NzcyJ9 */";
    /***/
  },

  /***/
  "./src/app/app.component.ts":
  /*!**********************************!*\
    !*** ./src/app/app.component.ts ***!
    \**********************************/

  /*! exports provided: AppComponent */

  /***/
  function srcAppAppComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppComponent", function () {
      return AppComponent;
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


    var _ionic_native_splash_screen_ngx__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @ionic-native/splash-screen/ngx */
    "./node_modules/@ionic-native/splash-screen/__ivy_ngcc__/ngx/index.js");
    /* harmony import */


    var _ionic_native_status_bar_ngx__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @ionic-native/status-bar/ngx */
    "./node_modules/@ionic-native/status-bar/__ivy_ngcc__/ngx/index.js");
    /* harmony import */


    var src_environments_environment__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! src/environments/environment */
    "./src/environments/environment.ts");
    /* harmony import */


    var _app_services_ServicioNotificaciones__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ../app/services/ServicioNotificaciones */
    "./src/app/services/ServicioNotificaciones.ts");
    /* harmony import */


    var _app_services_ServicioUtiles__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ../app/services/ServicioUtiles */
    "./src/app/services/ServicioUtiles.ts");
    /* harmony import */


    var _app_services_ServicioFCM__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ../app/services/ServicioFCM */
    "./src/app/services/ServicioFCM.ts"); //servicio de notificaciones para prueba


    var AppComponent = /*#__PURE__*/function () {
      function AppComponent(platform, splashScreen, statusBar, notificacion, utiles, fcmService) {
        _classCallCheck(this, AppComponent);

        this.platform = platform;
        this.splashScreen = splashScreen;
        this.statusBar = statusBar;
        this.notificacion = notificacion;
        this.utiles = utiles;
        this.fcmService = fcmService;
        this.initializeApp();
      } //mirar background geolocation
      //https://github.com/mauron85/cordova-plugin-background-geolocation


      _createClass(AppComponent, [{
        key: "initializeApp",
        value: function initializeApp() {
          var _this = this;

          this.platform.ready().then(function () {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(_this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
              return regeneratorRuntime.wrap(function _callee$(_context) {
                while (1) {
                  switch (_context.prev = _context.next) {
                    case 0:
                      this.statusBar.styleDefault();
                      this.splashScreen.hide(); //this.notificacion.buscarCitas();

                      this.notificacion.buscarCitasTodas();
                      _context.next = 5;
                      return this.utiles.obtenerParametrosApp(src_environments_environment__WEBPACK_IMPORTED_MODULE_5__["environment"].production);

                    case 5:
                      _context.next = 7;
                      return this.utiles.crearTokenPlano();

                    case 7:
                      this.fcmService.initFCM();
                      this.fcmService.receiveMessage(true);

                    case 9:
                    case "end":
                      return _context.stop();
                  }
                }
              }, _callee, this);
            }));
          });
        }
      }]);

      return AppComponent;
    }();

    AppComponent.ctorParameters = function () {
      return [{
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["Platform"]
      }, {
        type: _ionic_native_splash_screen_ngx__WEBPACK_IMPORTED_MODULE_3__["SplashScreen"]
      }, {
        type: _ionic_native_status_bar_ngx__WEBPACK_IMPORTED_MODULE_4__["StatusBar"]
      }, {
        type: _app_services_ServicioNotificaciones__WEBPACK_IMPORTED_MODULE_6__["ServicioNotificaciones"]
      }, {
        type: _app_services_ServicioUtiles__WEBPACK_IMPORTED_MODULE_7__["ServicioUtiles"]
      }, {
        type: _app_services_ServicioFCM__WEBPACK_IMPORTED_MODULE_8__["ServicioFCM"]
      }];
    };

    AppComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-root',
      template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! raw-loader!./app.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html"))["default"],
      styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! ./app.component.scss */
      "./src/app/app.component.scss"))["default"]]
    })], AppComponent);
    /***/
  },

  /***/
  "./src/app/app.module.ts":
  /*!*******************************!*\
    !*** ./src/app/app.module.ts ***!
    \*******************************/

  /*! exports provided: AppModule */

  /***/
  function srcAppAppModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppModule", function () {
      return AppModule;
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


    var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/platform-browser */
    "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
    /* harmony import */


    var _ionic_native_splash_screen_ngx__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @ionic-native/splash-screen/ngx */
    "./node_modules/@ionic-native/splash-screen/__ivy_ngcc__/ngx/index.js");
    /* harmony import */


    var _ionic_native_status_bar_ngx__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @ionic-native/status-bar/ngx */
    "./node_modules/@ionic-native/status-bar/__ivy_ngcc__/ngx/index.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
    /* harmony import */


    var _ionic_native_app_version_ngx__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! @ionic-native/app-version/ngx */
    "./node_modules/@ionic-native/app-version/__ivy_ngcc__/ngx/index.js");
    /* harmony import */


    var _ionic_native_network_ngx__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! @ionic-native/network/ngx */
    "./node_modules/@ionic-native/network/__ivy_ngcc__/ngx/index.js");
    /* harmony import */


    var _ionic_native_location_accuracy_ngx__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! @ionic-native/location-accuracy/ngx */
    "./node_modules/@ionic-native/location-accuracy/__ivy_ngcc__/ngx/index.js");
    /* harmony import */


    var _ionic_native_geolocation_ngx__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! @ionic-native/geolocation/ngx */
    "./node_modules/@ionic-native/geolocation/__ivy_ngcc__/ngx/index.js");
    /* harmony import */


    var _ionic_native_http_ngx__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
    /*! @ionic-native/http/ngx */
    "./node_modules/@ionic-native/http/__ivy_ngcc__/ngx/index.js");
    /* harmony import */


    var _ionic_native_launch_navigator_ngx__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
    /*! @ionic-native/launch-navigator/ngx */
    "./node_modules/@ionic-native/launch-navigator/__ivy_ngcc__/ngx/index.js");
    /* harmony import */


    var _ionic_native_device_ngx__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
    /*! @ionic-native/device/ngx */
    "./node_modules/@ionic-native/device/__ivy_ngcc__/ngx/index.js");
    /* harmony import */


    var _ionic_native_in_app_browser_ngx__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
    /*! @ionic-native/in-app-browser/ngx */
    "./node_modules/@ionic-native/in-app-browser/__ivy_ngcc__/ngx/index.js");
    /* harmony import */


    var _app_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
    /*! ./app.component */
    "./src/app/app.component.ts");
    /* harmony import */


    var _app_routing_module__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(
    /*! ./app-routing.module */
    "./src/app/app-routing.module.ts");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
    /* harmony import */


    var _app_pipes_toCelsius_pipe__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(
    /*! ../app/pipes/toCelsius.pipe */
    "./src/app/pipes/toCelsius.pipe.ts");
    /* harmony import */


    var _app_pipes_split_pipe__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(
    /*! ../app/pipes/split.pipe */
    "./src/app/pipes/split.pipe.ts");
    /* harmony import */


    var _app_pipes_fecha_pipe__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(
    /*! ../app/pipes/fecha.pipe */
    "./src/app/pipes/fecha.pipe.ts");
    /* harmony import */


    var _app_pipes_filter_pipe__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(
    /*! ../app/pipes/filter.pipe */
    "./src/app/pipes/filter.pipe.ts");
    /* harmony import */


    var _services_ServicioUtiles__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(
    /*! ./services/ServicioUtiles */
    "./src/app/services/ServicioUtiles.ts");
    /* harmony import */


    var _services_ServicioGeo__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(
    /*! ./services/ServicioGeo */
    "./src/app/services/ServicioGeo.ts");
    /* harmony import */


    var _services_ServicioAcceso__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(
    /*! ./services/ServicioAcceso */
    "./src/app/services/ServicioAcceso.ts");
    /* harmony import */


    var _services_ServicioInfoUsuario__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(
    /*! ./services/ServicioInfoUsuario */
    "./src/app/services/ServicioInfoUsuario.ts");
    /* harmony import */


    var _services_ServicioImagen__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(
    /*! ./services/ServicioImagen */
    "./src/app/services/ServicioImagen.ts");
    /* harmony import */


    var _services_ServicioLaboratorio__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(
    /*! ./services/ServicioLaboratorio */
    "./src/app/services/ServicioLaboratorio.ts");
    /* harmony import */


    var _services_ServicioCitas__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(
    /*! ./services/ServicioCitas */
    "./src/app/services/ServicioCitas.ts");
    /* harmony import */


    var _services_ServicioPaginacion__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(
    /*! ./services/ServicioPaginacion */
    "./src/app/services/ServicioPaginacion.ts");
    /* harmony import */


    var _services_ServicioNotificaciones__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(
    /*! ./services/ServicioNotificaciones */
    "./src/app/services/ServicioNotificaciones.ts");
    /* harmony import */


    var _services_ServicioClaveUnica__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(
    /*! ./services/ServicioClaveUnica */
    "./src/app/services/ServicioClaveUnica.ts");
    /* harmony import */


    var _services_ServicioParametrosApp__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(
    /*! ./services/ServicioParametrosApp */
    "./src/app/services/ServicioParametrosApp.ts");
    /* harmony import */


    var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(
    /*! @angular/platform-browser/animations */
    "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/animations.js");
    /* harmony import */


    var _services_ServicioFCM__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(
    /*! ./services/ServicioFCM */
    "./src/app/services/ServicioFCM.ts");
    /* harmony import */


    var _services_ServicioNotificacionesLocales__WEBPACK_IMPORTED_MODULE_36__ = __webpack_require__(
    /*! ./services/ServicioNotificacionesLocales */
    "./src/app/services/ServicioNotificacionesLocales.ts");
    /* harmony import */


    var _angular_material_card__WEBPACK_IMPORTED_MODULE_37__ = __webpack_require__(
    /*! @angular/material/card */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/card.js");
    /* harmony import */


    var _angular_material_button__WEBPACK_IMPORTED_MODULE_38__ = __webpack_require__(
    /*! @angular/material/button */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/button.js");
    /* harmony import */


    var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_39__ = __webpack_require__(
    /*! @angular/material/form-field */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/form-field.js");
    /* harmony import */


    var _angular_material_input__WEBPACK_IMPORTED_MODULE_40__ = __webpack_require__(
    /*! @angular/material/input */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/input.js");
    /* harmony import */


    var _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_41__ = __webpack_require__(
    /*! @angular/material/datepicker */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/datepicker.js");
    /* harmony import */


    var _angular_material_select__WEBPACK_IMPORTED_MODULE_42__ = __webpack_require__(
    /*! @angular/material/select */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/select.js");
    /* harmony import */


    var _angular_material_icon__WEBPACK_IMPORTED_MODULE_43__ = __webpack_require__(
    /*! @angular/material/icon */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/icon.js");
    /* harmony import */


    var _ionic_native_local_notifications_ngx__WEBPACK_IMPORTED_MODULE_44__ = __webpack_require__(
    /*! @ionic-native/local-notifications/ngx */
    "./node_modules/@ionic-native/local-notifications/__ivy_ngcc__/ngx/index.js");
    /* harmony import */


    var _environments_firebaseconfig__WEBPACK_IMPORTED_MODULE_45__ = __webpack_require__(
    /*! ../environments/firebaseconfig */
    "./src/environments/firebaseconfig.ts");
    /* harmony import */


    var _angular_fire__WEBPACK_IMPORTED_MODULE_46__ = __webpack_require__(
    /*! @angular/fire */
    "./node_modules/@angular/fire/__ivy_ngcc__/fesm2015/angular-fire.js");
    /* harmony import */


    var _angular_fire_database__WEBPACK_IMPORTED_MODULE_47__ = __webpack_require__(
    /*! @angular/fire/database */
    "./node_modules/@angular/fire/__ivy_ngcc__/fesm2015/angular-fire-database.js");
    /* harmony import */


    var _angular_fire_storage__WEBPACK_IMPORTED_MODULE_48__ = __webpack_require__(
    /*! @angular/fire/storage */
    "./node_modules/@angular/fire/__ivy_ngcc__/fesm2015/angular-fire-storage.js");
    /* harmony import */


    var _angular_fire_messaging__WEBPACK_IMPORTED_MODULE_49__ = __webpack_require__(
    /*! @angular/fire/messaging */
    "./node_modules/@angular/fire/__ivy_ngcc__/fesm2015/angular-fire-messaging.js");
    /* harmony import */


    var _ionic_native_firebase_messaging_ngx__WEBPACK_IMPORTED_MODULE_50__ = __webpack_require__(
    /*! @ionic-native/firebase-messaging/ngx */
    "./node_modules/@ionic-native/firebase-messaging/__ivy_ngcc__/ngx/index.js");
    /* harmony import */


    var _components_components_module__WEBPACK_IMPORTED_MODULE_51__ = __webpack_require__(
    /*! ./components/components.module */
    "./src/app/components/components.module.ts");
    /* harmony import */


    var _angular_material_moment_adapter__WEBPACK_IMPORTED_MODULE_52__ = __webpack_require__(
    /*! @angular/material-moment-adapter */
    "./node_modules/@angular/material-moment-adapter/__ivy_ngcc__/fesm2015/material-moment-adapter.js");
    /* harmony import */


    var _angular_material_core__WEBPACK_IMPORTED_MODULE_53__ = __webpack_require__(
    /*! @angular/material/core */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/core.js"); //nativos
    //Pipes
    //servicios

    /** componentes material  */

    /* import { MatSelectModule  } from '@angular/material/select';
    import { MatFormField  } from '@angular/material/form-field/form-field';
    import { MatFormField  } from '@angular/material/form-field/label'; */
    //material datepicker


    var AppModule = function AppModule() {
      _classCallCheck(this, AppModule);
    };

    AppModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      declarations: [_app_component__WEBPACK_IMPORTED_MODULE_16__["AppComponent"], _app_pipes_toCelsius_pipe__WEBPACK_IMPORTED_MODULE_19__["CelsiusPipe"], _app_pipes_split_pipe__WEBPACK_IMPORTED_MODULE_20__["SplitPipe"], _app_pipes_fecha_pipe__WEBPACK_IMPORTED_MODULE_21__["MomentPipe"], _app_pipes_filter_pipe__WEBPACK_IMPORTED_MODULE_22__["FilterPipe"]],
      entryComponents: [],
      imports: [_angular_common_http__WEBPACK_IMPORTED_MODULE_7__["HttpClientModule"], _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["BrowserModule"], _angular_material_card__WEBPACK_IMPORTED_MODULE_37__["MatCardModule"], _angular_material_button__WEBPACK_IMPORTED_MODULE_38__["MatButtonModule"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_39__["MatFormFieldModule"], _angular_material_select__WEBPACK_IMPORTED_MODULE_42__["MatSelectModule"], _angular_material_input__WEBPACK_IMPORTED_MODULE_40__["MatInputModule"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_43__["MatIconModule"], _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_41__["MatDatepickerModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_18__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_18__["ReactiveFormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"].forRoot(), _app_routing_module__WEBPACK_IMPORTED_MODULE_17__["AppRoutingModule"], _components_components_module__WEBPACK_IMPORTED_MODULE_51__["ComponentsModule"], _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_34__["BrowserAnimationsModule"], _angular_fire_database__WEBPACK_IMPORTED_MODULE_47__["AngularFireDatabaseModule"], _angular_fire_storage__WEBPACK_IMPORTED_MODULE_48__["AngularFireStorageModule"], _angular_fire_messaging__WEBPACK_IMPORTED_MODULE_49__["AngularFireMessagingModule"], _angular_fire__WEBPACK_IMPORTED_MODULE_46__["AngularFireModule"].initializeApp(_environments_firebaseconfig__WEBPACK_IMPORTED_MODULE_45__["firebaseConfig"])],
      providers: [_ionic_native_status_bar_ngx__WEBPACK_IMPORTED_MODULE_6__["StatusBar"], _ionic_native_in_app_browser_ngx__WEBPACK_IMPORTED_MODULE_15__["InAppBrowser"], _ionic_native_splash_screen_ngx__WEBPACK_IMPORTED_MODULE_5__["SplashScreen"], _ionic_native_app_version_ngx__WEBPACK_IMPORTED_MODULE_8__["AppVersion"], _ionic_native_network_ngx__WEBPACK_IMPORTED_MODULE_9__["Network"], _ionic_native_http_ngx__WEBPACK_IMPORTED_MODULE_12__["HTTP"], _ionic_native_device_ngx__WEBPACK_IMPORTED_MODULE_14__["Device"], _ionic_native_location_accuracy_ngx__WEBPACK_IMPORTED_MODULE_10__["LocationAccuracy"], _ionic_native_geolocation_ngx__WEBPACK_IMPORTED_MODULE_11__["Geolocation"], _services_ServicioUtiles__WEBPACK_IMPORTED_MODULE_23__["ServicioUtiles"], _services_ServicioGeo__WEBPACK_IMPORTED_MODULE_24__["ServicioGeo"], _services_ServicioAcceso__WEBPACK_IMPORTED_MODULE_25__["ServicioAcceso"], _services_ServicioInfoUsuario__WEBPACK_IMPORTED_MODULE_26__["ServicioInfoUsuario"], _services_ServicioImagen__WEBPACK_IMPORTED_MODULE_27__["ServicioImagen"], _services_ServicioLaboratorio__WEBPACK_IMPORTED_MODULE_28__["ServicioLaboratorio"], _services_ServicioCitas__WEBPACK_IMPORTED_MODULE_29__["ServicioCitas"], _services_ServicioPaginacion__WEBPACK_IMPORTED_MODULE_30__["ServicioPaginacion"], _services_ServicioNotificaciones__WEBPACK_IMPORTED_MODULE_31__["ServicioNotificaciones"], _services_ServicioNotificacionesLocales__WEBPACK_IMPORTED_MODULE_36__["ServicioNotificacionesLocales"], _services_ServicioClaveUnica__WEBPACK_IMPORTED_MODULE_32__["ServicioClaveUnica"], _services_ServicioParametrosApp__WEBPACK_IMPORTED_MODULE_33__["ServicioParametrosApp"], _services_ServicioFCM__WEBPACK_IMPORTED_MODULE_35__["ServicioFCM"], _ionic_native_launch_navigator_ngx__WEBPACK_IMPORTED_MODULE_13__["LaunchNavigator"], _ionic_native_local_notifications_ngx__WEBPACK_IMPORTED_MODULE_44__["LocalNotifications"], _ionic_native_firebase_messaging_ngx__WEBPACK_IMPORTED_MODULE_50__["FirebaseMessaging"], {
        provide: _angular_material_core__WEBPACK_IMPORTED_MODULE_53__["MAT_DATE_LOCALE"],
        useValue: 'es-CL'
      }, {
        provide: _angular_material_core__WEBPACK_IMPORTED_MODULE_53__["DateAdapter"],
        useClass: _angular_material_moment_adapter__WEBPACK_IMPORTED_MODULE_52__["MomentDateAdapter"],
        deps: [_angular_material_core__WEBPACK_IMPORTED_MODULE_53__["MAT_DATE_LOCALE"], _angular_material_moment_adapter__WEBPACK_IMPORTED_MODULE_52__["MAT_MOMENT_DATE_ADAPTER_OPTIONS"]]
      }, {
        provide: _angular_material_core__WEBPACK_IMPORTED_MODULE_53__["MAT_DATE_FORMATS"],
        useValue: _angular_material_moment_adapter__WEBPACK_IMPORTED_MODULE_52__["MAT_MOMENT_DATE_FORMATS"]
      }, {
        provide: _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouteReuseStrategy"],
        useClass: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicRouteStrategy"]
      }],
      bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_16__["AppComponent"]]
    })], AppModule);
    /***/
  },

  /***/
  "./src/app/components/avatar-simple/avatar-simple.component.scss":
  /*!***********************************************************************!*\
    !*** ./src/app/components/avatar-simple/avatar-simple.component.scss ***!
    \***********************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppComponentsAvatarSimpleAvatarSimpleComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvYXZhdGFyLXNpbXBsZS9hdmF0YXItc2ltcGxlLmNvbXBvbmVudC5zY3NzIn0= */";
    /***/
  },

  /***/
  "./src/app/components/avatar-simple/avatar-simple.component.ts":
  /*!*********************************************************************!*\
    !*** ./src/app/components/avatar-simple/avatar-simple.component.ts ***!
    \*********************************************************************/

  /*! exports provided: AvatarSimpleComponent */

  /***/
  function srcAppComponentsAvatarSimpleAvatarSimpleComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AvatarSimpleComponent", function () {
      return AvatarSimpleComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

    var AvatarSimpleComponent = /*#__PURE__*/function () {
      function AvatarSimpleComponent() {
        _classCallCheck(this, AvatarSimpleComponent);
      }

      _createClass(AvatarSimpleComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return AvatarSimpleComponent;
    }();

    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], AvatarSimpleComponent.prototype, "nombreCompleto", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], AvatarSimpleComponent.prototype, "parentezco", void 0);
    AvatarSimpleComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-avatar-simple',
      template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! raw-loader!./avatar-simple.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/components/avatar-simple/avatar-simple.component.html"))["default"],
      styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! ./avatar-simple.component.scss */
      "./src/app/components/avatar-simple/avatar-simple.component.scss"))["default"]]
    })], AvatarSimpleComponent);
    /***/
  },

  /***/
  "./src/app/components/avatar/avatar.component.scss":
  /*!*********************************************************!*\
    !*** ./src/app/components/avatar/avatar.component.scss ***!
    \*********************************************************/

  /*! exports provided: default */

  /***/
  function srcAppComponentsAvatarAvatarComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".text-avatar {\n  overflow: hidden;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n  width: 100%;\n}\n\n.avatar-no-padding {\n  --padding-start: 0;\n  width: 100%;\n}\n\n.avatar-padding {\n  --padding-start: 8px;\n  width: 100%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy92aWN0b3Jjb3JvbmFkby9EZXNrdG9wL21pRmFtaWxpYV9wcmUvc3JjL2FwcC9jb21wb25lbnRzL2F2YXRhci9hdmF0YXIuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL2NvbXBvbmVudHMvYXZhdGFyL2F2YXRhci5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGdCQUFBO0VBQ0EsdUJBQUE7RUFDQSxtQkFBQTtFQUNBLFdBQUE7QUNDSjs7QURDQTtFQUNJLGtCQUFBO0VBQ0EsV0FBQTtBQ0VKOztBREFBO0VBQ0ksb0JBQUE7RUFDQSxXQUFBO0FDR0oiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL2F2YXRhci9hdmF0YXIuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIudGV4dC1hdmF0YXJ7XHJcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gICAgdGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7XHJcbiAgICB3aGl0ZS1zcGFjZTogbm93cmFwO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbn1cclxuLmF2YXRhci1uby1wYWRkaW5ne1xyXG4gICAgLS1wYWRkaW5nLXN0YXJ0OiAwO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbn1cclxuLmF2YXRhci1wYWRkaW5ne1xyXG4gICAgLS1wYWRkaW5nLXN0YXJ0OiA4cHg7XHJcbiAgICB3aWR0aDogMTAwJTtcclxufVxyXG4iLCIudGV4dC1hdmF0YXIge1xuICBvdmVyZmxvdzogaGlkZGVuO1xuICB0ZXh0LW92ZXJmbG93OiBlbGxpcHNpcztcbiAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcbiAgd2lkdGg6IDEwMCU7XG59XG5cbi5hdmF0YXItbm8tcGFkZGluZyB7XG4gIC0tcGFkZGluZy1zdGFydDogMDtcbiAgd2lkdGg6IDEwMCU7XG59XG5cbi5hdmF0YXItcGFkZGluZyB7XG4gIC0tcGFkZGluZy1zdGFydDogOHB4O1xuICB3aWR0aDogMTAwJTtcbn0iXX0= */";
    /***/
  },

  /***/
  "./src/app/components/avatar/avatar.component.ts":
  /*!*******************************************************!*\
    !*** ./src/app/components/avatar/avatar.component.ts ***!
    \*******************************************************/

  /*! exports provided: AvatarComponent */

  /***/
  function srcAppComponentsAvatarAvatarComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AvatarComponent", function () {
      return AvatarComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

    var AvatarComponent = /*#__PURE__*/function () {
      function AvatarComponent() {
        _classCallCheck(this, AvatarComponent);

        //inset: solo la parte del texto y no avatar full: todo none: ninguna
        this.lines = 'none';
        this.style = true;
      }

      _createClass(AvatarComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          console.log(this.style);
        }
      }]);

      return AvatarComponent;
    }();

    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], AvatarComponent.prototype, "urlImagen", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], AvatarComponent.prototype, "nombreCompleto", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], AvatarComponent.prototype, "parentezco", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], AvatarComponent.prototype, "lines", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], AvatarComponent.prototype, "style", void 0);
    AvatarComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-avatar',
      template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! raw-loader!./avatar.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/components/avatar/avatar.component.html"))["default"],
      styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! ./avatar.component.scss */
      "./src/app/components/avatar/avatar.component.scss"))["default"]]
    })], AvatarComponent);
    /***/
  },

  /***/
  "./src/app/components/card-calendario/card-calendario.component.scss":
  /*!***************************************************************************!*\
    !*** ./src/app/components/card-calendario/card-calendario.component.scss ***!
    \***************************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppComponentsCardCalendarioCardCalendarioComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "/* Set the width to the full container and center the content */\nion-select {\n  width: 100%;\n  justify-content: center;\n}\n/* Set the flex in order to size the text width to its content */\nion-select::part(placeholder),\nion-select::part(text) {\n  flex: 0 0 auto;\n}\n/* Set the placeholder color and opacity */\nion-select::part(placeholder) {\n  color: #20a08a;\n  opacity: 1;\n}\n/*\n * Set the font of the first letter of the placeholder\n * Shadow parts work with pseudo-elements, too!\n * https://developer.mozilla.org/en-US/docs/Web/CSS/Pseudo-elements\n */\nion-select::part(placeholder)::first-letter {\n  font-size: 24px;\n  font-weight: 500;\n}\n/* Set the text color */\nion-select::part(text) {\n  color: #545ca7;\n}\n/* Set the icon color and opacity */\nion-select::part(icon) {\n  color: #971e49;\n  opacity: 1;\n}\n.content-card-fav {\n  height: 58px;\n  min-height: 56px;\n}\n.ion-fav-calendar {\n  height: 48px;\n  width: 48px;\n}\n.botonReservar {\n  /*color:#000000DE;\n  font-weight: 20px;*/\n  font: normal normal medium 14px/16px Roboto;\n  letter-spacing: 1.25px;\n  color: #000000DE;\n  text-transform: uppercase;\n  opacity: 1;\n}\n/* estilos para material */\n.example-header-image {\n  background-size: cover;\n  width: 80px;\n  height: 80px;\n  -o-object-fit: cover;\n     object-fit: cover;\n}\nmat-card {\n  width: 100%;\n  max-width: 100%;\n  min-width: 100%;\n}\n::ng-dep .mat-card-header-text {\n  width: 100%;\n  margin: 0;\n}\n.hora {\n  font-size: 0.8em;\n}\n.row-card {\n  margin-left: 16px;\n  margin-right: 16px;\n}\n.img-card {\n  width: 80px;\n  float: right;\n  margin: 0;\n  padding: 0;\n  min-width: 80px;\n}\nhr {\n  margin-top: 0;\n  margin-bottom: 0;\n  border: 0;\n  height: 1px;\n  background-color: rgba(0, 0, 0, 0.12);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy92aWN0b3Jjb3JvbmFkby9EZXNrdG9wL21pRmFtaWxpYV9wcmUvc3JjL2FwcC9jb21wb25lbnRzL2NhcmQtY2FsZW5kYXJpby9jYXJkLWNhbGVuZGFyaW8uY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL2NvbXBvbmVudHMvY2FyZC1jYWxlbmRhcmlvL2NhcmQtY2FsZW5kYXJpby5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSwrREFBQTtBQUNBO0VBQ0ksV0FBQTtFQUVBLHVCQUFBO0FDQUo7QURHRSxnRUFBQTtBQUNBOztFQUVFLGNBQUE7QUNBSjtBREdFLDBDQUFBO0FBQ0E7RUFDRSxjQUFBO0VBQ0EsVUFBQTtBQ0FKO0FER0U7Ozs7RUFBQTtBQUtBO0VBQ0UsZUFBQTtFQUNBLGdCQUFBO0FDQUo7QURHRSx1QkFBQTtBQUNBO0VBQ0UsY0FBQTtBQ0FKO0FER0UsbUNBQUE7QUFDQTtFQUNFLGNBQUE7RUFDQSxVQUFBO0FDQUo7QURFRTtFQUNFLFlBQUE7RUFDQSxnQkFBQTtBQ0NKO0FEQ0U7RUFDRSxZQUFBO0VBQ0EsV0FBQTtBQ0VKO0FEQUU7RUFDRTtxQkFBQTtFQUVBLDJDQUFBO0VBQ0Esc0JBQUE7RUFDQSxnQkFBQTtFQUNBLHlCQUFBO0VBQ0EsVUFBQTtBQ0dKO0FEREUsMEJBQUE7QUFDQTtFQUNFLHNCQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxvQkFBQTtLQUFBLGlCQUFBO0FDSUo7QURGRTtFQUNFLFdBQUE7RUFDQSxlQUFBO0VBQ0EsZUFBQTtBQ0tKO0FESEU7RUFDRSxXQUFBO0VBQ0EsU0FBQTtBQ01KO0FESkU7RUFDRSxnQkFBQTtBQ09KO0FETEU7RUFDRSxpQkFBQTtFQUNBLGtCQUFBO0FDUUo7QURORTtFQUNFLFdBQUE7RUFDQSxZQUFBO0VBQ0EsU0FBQTtFQUNBLFVBQUE7RUFDQSxlQUFBO0FDU0o7QURQRTtFQUNFLGFBQUE7RUFDQSxnQkFBQTtFQUNBLFNBQUE7RUFDQSxXQUFBO0VBQ0EscUNBQUE7QUNVSiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvY2FyZC1jYWxlbmRhcmlvL2NhcmQtY2FsZW5kYXJpby5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi8qIFNldCB0aGUgd2lkdGggdG8gdGhlIGZ1bGwgY29udGFpbmVyIGFuZCBjZW50ZXIgdGhlIGNvbnRlbnQgKi9cclxuaW9uLXNlbGVjdCB7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICBcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gIH1cclxuICBcclxuICAvKiBTZXQgdGhlIGZsZXggaW4gb3JkZXIgdG8gc2l6ZSB0aGUgdGV4dCB3aWR0aCB0byBpdHMgY29udGVudCAqL1xyXG4gIGlvbi1zZWxlY3Q6OnBhcnQocGxhY2Vob2xkZXIpLFxyXG4gIGlvbi1zZWxlY3Q6OnBhcnQodGV4dCkge1xyXG4gICAgZmxleDogMCAwIGF1dG87XHJcbiAgfVxyXG4gIFxyXG4gIC8qIFNldCB0aGUgcGxhY2Vob2xkZXIgY29sb3IgYW5kIG9wYWNpdHkgKi9cclxuICBpb24tc2VsZWN0OjpwYXJ0KHBsYWNlaG9sZGVyKSB7XHJcbiAgICBjb2xvcjogIzIwYTA4YTtcclxuICAgIG9wYWNpdHk6IDE7XHJcbiAgfVxyXG4gIFxyXG4gIC8qXHJcbiAgICogU2V0IHRoZSBmb250IG9mIHRoZSBmaXJzdCBsZXR0ZXIgb2YgdGhlIHBsYWNlaG9sZGVyXHJcbiAgICogU2hhZG93IHBhcnRzIHdvcmsgd2l0aCBwc2V1ZG8tZWxlbWVudHMsIHRvbyFcclxuICAgKiBodHRwczovL2RldmVsb3Blci5tb3ppbGxhLm9yZy9lbi1VUy9kb2NzL1dlYi9DU1MvUHNldWRvLWVsZW1lbnRzXHJcbiAgICovXHJcbiAgaW9uLXNlbGVjdDo6cGFydChwbGFjZWhvbGRlcik6OmZpcnN0LWxldHRlciB7XHJcbiAgICBmb250LXNpemU6IDI0cHg7XHJcbiAgICBmb250LXdlaWdodDogNTAwO1xyXG4gIH1cclxuICBcclxuICAvKiBTZXQgdGhlIHRleHQgY29sb3IgKi9cclxuICBpb24tc2VsZWN0OjpwYXJ0KHRleHQpIHtcclxuICAgIGNvbG9yOiAjNTQ1Y2E3O1xyXG4gIH1cclxuICBcclxuICAvKiBTZXQgdGhlIGljb24gY29sb3IgYW5kIG9wYWNpdHkgKi9cclxuICBpb24tc2VsZWN0OjpwYXJ0KGljb24pIHtcclxuICAgIGNvbG9yOiAjOTcxZTQ5O1xyXG4gICAgb3BhY2l0eTogMTtcclxuICB9XHJcbiAgLmNvbnRlbnQtY2FyZC1mYXZ7XHJcbiAgICBoZWlnaHQ6IDU4cHg7XHJcbiAgICBtaW4taGVpZ2h0OiA1NnB4O1xyXG4gIH1cclxuICAuaW9uLWZhdi1jYWxlbmRhcntcclxuICAgIGhlaWdodDogNDhweDtcclxuICAgIHdpZHRoOiA0OHB4O1xyXG4gIH1cclxuICAuYm90b25SZXNlcnZhcntcclxuICAgIC8qY29sb3I6IzAwMDAwMERFO1xyXG4gICAgZm9udC13ZWlnaHQ6IDIwcHg7Ki9cclxuICAgIGZvbnQ6IG5vcm1hbCBub3JtYWwgbWVkaXVtIDE0cHgvMTZweCBSb2JvdG87XHJcbiAgICBsZXR0ZXItc3BhY2luZzogMS4yNXB4O1xyXG4gICAgY29sb3I6ICMwMDAwMDBERTtcclxuICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XHJcbiAgICBvcGFjaXR5OiAxO1xyXG4gIH1cclxuICAvKiBlc3RpbG9zIHBhcmEgbWF0ZXJpYWwgKi9cclxuICAuZXhhbXBsZS1oZWFkZXItaW1hZ2Uge1xyXG4gICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcclxuICAgIHdpZHRoOiA4MHB4O1xyXG4gICAgaGVpZ2h0OiA4MHB4O1xyXG4gICAgb2JqZWN0LWZpdDogY292ZXI7XHJcbiAgfVxyXG4gIG1hdC1jYXJke1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBtYXgtd2lkdGg6IDEwMCU7XHJcbiAgICBtaW4td2lkdGg6IDEwMCU7XHJcbiAgfVxyXG4gIDo6bmctZGVwIC5tYXQtY2FyZC1oZWFkZXItdGV4dHtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgbWFyZ2luOiAwO1xyXG4gIH1cclxuICAuaG9yYXtcclxuICAgIGZvbnQtc2l6ZTogMC44ZW07XHJcbiAgfVxyXG4gIC5yb3ctY2FyZHtcclxuICAgIG1hcmdpbi1sZWZ0OiAxNnB4O1xyXG4gICAgbWFyZ2luLXJpZ2h0OiAxNnB4O1xyXG4gIH1cclxuICAuaW1nLWNhcmR7XHJcbiAgICB3aWR0aDogODBweDtcclxuICAgIGZsb2F0OiByaWdodDtcclxuICAgIG1hcmdpbjogMDtcclxuICAgIHBhZGRpbmc6IDA7XHJcbiAgICBtaW4td2lkdGg6IDgwcHg7XHJcbiAgfVxyXG4gIGhyIHtcclxuICAgIG1hcmdpbi10b3A6IDA7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAwO1xyXG4gICAgYm9yZGVyOiAwO1xyXG4gICAgaGVpZ2h0OiAxcHg7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsMCwwLC4xMik7XHJcbiAgfSIsIi8qIFNldCB0aGUgd2lkdGggdG8gdGhlIGZ1bGwgY29udGFpbmVyIGFuZCBjZW50ZXIgdGhlIGNvbnRlbnQgKi9cbmlvbi1zZWxlY3Qge1xuICB3aWR0aDogMTAwJTtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG59XG5cbi8qIFNldCB0aGUgZmxleCBpbiBvcmRlciB0byBzaXplIHRoZSB0ZXh0IHdpZHRoIHRvIGl0cyBjb250ZW50ICovXG5pb24tc2VsZWN0OjpwYXJ0KHBsYWNlaG9sZGVyKSxcbmlvbi1zZWxlY3Q6OnBhcnQodGV4dCkge1xuICBmbGV4OiAwIDAgYXV0bztcbn1cblxuLyogU2V0IHRoZSBwbGFjZWhvbGRlciBjb2xvciBhbmQgb3BhY2l0eSAqL1xuaW9uLXNlbGVjdDo6cGFydChwbGFjZWhvbGRlcikge1xuICBjb2xvcjogIzIwYTA4YTtcbiAgb3BhY2l0eTogMTtcbn1cblxuLypcbiAqIFNldCB0aGUgZm9udCBvZiB0aGUgZmlyc3QgbGV0dGVyIG9mIHRoZSBwbGFjZWhvbGRlclxuICogU2hhZG93IHBhcnRzIHdvcmsgd2l0aCBwc2V1ZG8tZWxlbWVudHMsIHRvbyFcbiAqIGh0dHBzOi8vZGV2ZWxvcGVyLm1vemlsbGEub3JnL2VuLVVTL2RvY3MvV2ViL0NTUy9Qc2V1ZG8tZWxlbWVudHNcbiAqL1xuaW9uLXNlbGVjdDo6cGFydChwbGFjZWhvbGRlcik6OmZpcnN0LWxldHRlciB7XG4gIGZvbnQtc2l6ZTogMjRweDtcbiAgZm9udC13ZWlnaHQ6IDUwMDtcbn1cblxuLyogU2V0IHRoZSB0ZXh0IGNvbG9yICovXG5pb24tc2VsZWN0OjpwYXJ0KHRleHQpIHtcbiAgY29sb3I6ICM1NDVjYTc7XG59XG5cbi8qIFNldCB0aGUgaWNvbiBjb2xvciBhbmQgb3BhY2l0eSAqL1xuaW9uLXNlbGVjdDo6cGFydChpY29uKSB7XG4gIGNvbG9yOiAjOTcxZTQ5O1xuICBvcGFjaXR5OiAxO1xufVxuXG4uY29udGVudC1jYXJkLWZhdiB7XG4gIGhlaWdodDogNThweDtcbiAgbWluLWhlaWdodDogNTZweDtcbn1cblxuLmlvbi1mYXYtY2FsZW5kYXIge1xuICBoZWlnaHQ6IDQ4cHg7XG4gIHdpZHRoOiA0OHB4O1xufVxuXG4uYm90b25SZXNlcnZhciB7XG4gIC8qY29sb3I6IzAwMDAwMERFO1xuICBmb250LXdlaWdodDogMjBweDsqL1xuICBmb250OiBub3JtYWwgbm9ybWFsIG1lZGl1bSAxNHB4LzE2cHggUm9ib3RvO1xuICBsZXR0ZXItc3BhY2luZzogMS4yNXB4O1xuICBjb2xvcjogIzAwMDAwMERFO1xuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICBvcGFjaXR5OiAxO1xufVxuXG4vKiBlc3RpbG9zIHBhcmEgbWF0ZXJpYWwgKi9cbi5leGFtcGxlLWhlYWRlci1pbWFnZSB7XG4gIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XG4gIHdpZHRoOiA4MHB4O1xuICBoZWlnaHQ6IDgwcHg7XG4gIG9iamVjdC1maXQ6IGNvdmVyO1xufVxuXG5tYXQtY2FyZCB7XG4gIHdpZHRoOiAxMDAlO1xuICBtYXgtd2lkdGg6IDEwMCU7XG4gIG1pbi13aWR0aDogMTAwJTtcbn1cblxuOjpuZy1kZXAgLm1hdC1jYXJkLWhlYWRlci10ZXh0IHtcbiAgd2lkdGg6IDEwMCU7XG4gIG1hcmdpbjogMDtcbn1cblxuLmhvcmEge1xuICBmb250LXNpemU6IDAuOGVtO1xufVxuXG4ucm93LWNhcmQge1xuICBtYXJnaW4tbGVmdDogMTZweDtcbiAgbWFyZ2luLXJpZ2h0OiAxNnB4O1xufVxuXG4uaW1nLWNhcmQge1xuICB3aWR0aDogODBweDtcbiAgZmxvYXQ6IHJpZ2h0O1xuICBtYXJnaW46IDA7XG4gIHBhZGRpbmc6IDA7XG4gIG1pbi13aWR0aDogODBweDtcbn1cblxuaHIge1xuICBtYXJnaW4tdG9wOiAwO1xuICBtYXJnaW4tYm90dG9tOiAwO1xuICBib3JkZXI6IDA7XG4gIGhlaWdodDogMXB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuMTIpO1xufSJdfQ== */";
    /***/
  },

  /***/
  "./src/app/components/card-calendario/card-calendario.component.ts":
  /*!*************************************************************************!*\
    !*** ./src/app/components/card-calendario/card-calendario.component.ts ***!
    \*************************************************************************/

  /*! exports provided: CardCalendarioComponent */

  /***/
  function srcAppComponentsCardCalendarioCardCalendarioComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CardCalendarioComponent", function () {
      return CardCalendarioComponent;
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


    var _app_pipes_fecha_pipe__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../../../app/pipes/fecha.pipe */
    "./src/app/pipes/fecha.pipe.ts");
    /* harmony import */


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
    /* harmony import */


    var moment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! moment */
    "./node_modules/moment/moment.js");
    /* harmony import */


    var moment__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_4__);
    /* harmony import */


    var _app_services_ServicioUtiles__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ../../../app/services/ServicioUtiles */
    "./src/app/services/ServicioUtiles.ts"); //moment


    var CardCalendarioComponent = /*#__PURE__*/function () {
      function CardCalendarioComponent(navCtrl, toast, modalCtrl, platform, menu, alertController, utiles) {
        _classCallCheck(this, CardCalendarioComponent);

        this.navCtrl = navCtrl;
        this.toast = toast;
        this.modalCtrl = modalCtrl;
        this.platform = platform;
        this.menu = menu;
        this.alertController = alertController;
        this.utiles = utiles;
        this.item = {
          Mostrar: false,
          FechaCompleta: '',
          NumeroDia: ''
        };
      }

      _createClass(CardCalendarioComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          moment__WEBPACK_IMPORTED_MODULE_4__().locale('es');
        }
      }, {
        key: "transformDate",
        value: function transformDate(value, format) {
          var pi = new _app_pipes_fecha_pipe__WEBPACK_IMPORTED_MODULE_2__["MomentPipe"]();
          return pi.transform(value, format);
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
      }]);

      return CardCalendarioComponent;
    }();

    CardCalendarioComponent.ctorParameters = function () {
      return [{
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["NavController"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["ToastController"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["ModalController"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["Platform"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["MenuController"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["AlertController"]
      }, {
        type: _app_services_ServicioUtiles__WEBPACK_IMPORTED_MODULE_5__["ServicioUtiles"]
      }];
    };

    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], CardCalendarioComponent.prototype, "item", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], CardCalendarioComponent.prototype, "fechaActual", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], CardCalendarioComponent.prototype, "anioActual", void 0);
    CardCalendarioComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-card-calendario',
      template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! raw-loader!./card-calendario.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/components/card-calendario/card-calendario.component.html"))["default"],
      styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! ./card-calendario.component.scss */
      "./src/app/components/card-calendario/card-calendario.component.scss"))["default"]]
    })], CardCalendarioComponent);
    /***/
  },

  /***/
  "./src/app/components/components.module.ts":
  /*!*************************************************!*\
    !*** ./src/app/components/components.module.ts ***!
    \*************************************************/

  /*! exports provided: ComponentsModule */

  /***/
  function srcAppComponentsComponentsModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ComponentsModule", function () {
      return ComponentsModule;
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


    var _directives_text_avatar_index__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ../../directives/text-avatar/index */
    "./src/directives/text-avatar/index.ts");
    /* harmony import */


    var _angular_material_card__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @angular/material/card */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/card.js");
    /* harmony import */


    var _angular_material_button__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! @angular/material/button */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/button.js");
    /* harmony import */


    var _card_calendario_card_calendario_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ./card-calendario/card-calendario.component */
    "./src/app/components/card-calendario/card-calendario.component.ts");
    /* harmony import */


    var _avatar_avatar_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! ./avatar/avatar.component */
    "./src/app/components/avatar/avatar.component.ts");
    /* harmony import */


    var _progress_progress_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! ./progress/progress.component */
    "./src/app/components/progress/progress.component.ts");
    /* harmony import */


    var _item_home_item_home_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! ./item-home/item-home.component */
    "./src/app/components/item-home/item-home.component.ts");
    /* harmony import */


    var _avatar_simple_avatar_simple_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
    /*! ./avatar-simple/avatar-simple.component */
    "./src/app/components/avatar-simple/avatar-simple.component.ts");
    /* harmony import */


    var _pagina_mensajes_pagina_mensajes_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
    /*! ./pagina-mensajes/pagina-mensajes.component */
    "./src/app/components/pagina-mensajes/pagina-mensajes.component.ts");
    /* harmony import */


    var _content_slide_content_slide_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
    /*! ./content-slide/content-slide.component */
    "./src/app/components/content-slide/content-slide.component.ts");
    /* harmony import */


    var _progress_minimo_progress_minimo_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
    /*! ./progress-minimo/progress-minimo.component */
    "./src/app/components/progress-minimo/progress-minimo.component.ts");

    var ComponentsModule = function ComponentsModule() {
      _classCallCheck(this, ComponentsModule);
    };

    ComponentsModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      declarations: [_card_calendario_card_calendario_component__WEBPACK_IMPORTED_MODULE_8__["CardCalendarioComponent"], _avatar_avatar_component__WEBPACK_IMPORTED_MODULE_9__["AvatarComponent"], _avatar_simple_avatar_simple_component__WEBPACK_IMPORTED_MODULE_12__["AvatarSimpleComponent"], _progress_progress_component__WEBPACK_IMPORTED_MODULE_10__["ProgressComponent"], _item_home_item_home_component__WEBPACK_IMPORTED_MODULE_11__["ItemHomeComponent"], _pagina_mensajes_pagina_mensajes_component__WEBPACK_IMPORTED_MODULE_13__["PaginaMensajesComponent"], _content_slide_content_slide_component__WEBPACK_IMPORTED_MODULE_14__["ContentSlideComponent"], _progress_minimo_progress_minimo_component__WEBPACK_IMPORTED_MODULE_15__["ProgressMinimoComponent"]],
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _directives_text_avatar_index__WEBPACK_IMPORTED_MODULE_5__["TextAvatarModule"], _angular_material_card__WEBPACK_IMPORTED_MODULE_6__["MatCardModule"], _angular_material_button__WEBPACK_IMPORTED_MODULE_7__["MatButtonModule"]],
      exports: [_card_calendario_card_calendario_component__WEBPACK_IMPORTED_MODULE_8__["CardCalendarioComponent"], _avatar_avatar_component__WEBPACK_IMPORTED_MODULE_9__["AvatarComponent"], _avatar_simple_avatar_simple_component__WEBPACK_IMPORTED_MODULE_12__["AvatarSimpleComponent"], _progress_progress_component__WEBPACK_IMPORTED_MODULE_10__["ProgressComponent"], _item_home_item_home_component__WEBPACK_IMPORTED_MODULE_11__["ItemHomeComponent"], _pagina_mensajes_pagina_mensajes_component__WEBPACK_IMPORTED_MODULE_13__["PaginaMensajesComponent"], _content_slide_content_slide_component__WEBPACK_IMPORTED_MODULE_14__["ContentSlideComponent"], _progress_minimo_progress_minimo_component__WEBPACK_IMPORTED_MODULE_15__["ProgressMinimoComponent"]]
    })], ComponentsModule);
    /***/
  },

  /***/
  "./src/app/components/content-slide/content-slide.component.scss":
  /*!***********************************************************************!*\
    !*** ./src/app/components/content-slide/content-slide.component.scss ***!
    \***********************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppComponentsContentSlideContentSlideComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".titulo-slide {\n  color: #F4F2FA;\n  font-size: 1em;\n  text-align: left;\n}\n\n.subtitulo-slide {\n  color: #AFA0D5;\n  text-align: left;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy92aWN0b3Jjb3JvbmFkby9EZXNrdG9wL21pRmFtaWxpYV9wcmUvc3JjL2FwcC9jb21wb25lbnRzL2NvbnRlbnQtc2xpZGUvY29udGVudC1zbGlkZS5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvY29tcG9uZW50cy9jb250ZW50LXNsaWRlL2NvbnRlbnQtc2xpZGUuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxjQUFBO0VBQ0EsY0FBQTtFQUNBLGdCQUFBO0FDQ0o7O0FEQ0U7RUFDRSxjQUFBO0VBQ0EsZ0JBQUE7QUNFSiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvY29udGVudC1zbGlkZS9jb250ZW50LXNsaWRlLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnRpdHVsby1zbGlkZXtcclxuICAgIGNvbG9yOiAjRjRGMkZBO1xyXG4gICAgZm9udC1zaXplOiAxZW07XHJcbiAgICB0ZXh0LWFsaWduOiBsZWZ0O1xyXG4gIH1cclxuICAuc3VidGl0dWxvLXNsaWRle1xyXG4gICAgY29sb3I6ICNBRkEwRDU7XHJcbiAgICB0ZXh0LWFsaWduOiBsZWZ0O1xyXG4gIH0iLCIudGl0dWxvLXNsaWRlIHtcbiAgY29sb3I6ICNGNEYyRkE7XG4gIGZvbnQtc2l6ZTogMWVtO1xuICB0ZXh0LWFsaWduOiBsZWZ0O1xufVxuXG4uc3VidGl0dWxvLXNsaWRlIHtcbiAgY29sb3I6ICNBRkEwRDU7XG4gIHRleHQtYWxpZ246IGxlZnQ7XG59Il19 */";
    /***/
  },

  /***/
  "./src/app/components/content-slide/content-slide.component.ts":
  /*!*********************************************************************!*\
    !*** ./src/app/components/content-slide/content-slide.component.ts ***!
    \*********************************************************************/

  /*! exports provided: ContentSlideComponent */

  /***/
  function srcAppComponentsContentSlideContentSlideComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ContentSlideComponent", function () {
      return ContentSlideComponent;
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
    /*! ../../../app/services/ServicioUtiles */
    "./src/app/services/ServicioUtiles.ts");
    /* harmony import */


    var _app_services_ServicioParametrosApp__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../../../app/services/ServicioParametrosApp */
    "./src/app/services/ServicioParametrosApp.ts");

    var ContentSlideComponent = /*#__PURE__*/function () {
      function ContentSlideComponent(navCtrl, toast, modalCtrl, platform, loading, menu, utiles, parametrosApp) {
        _classCallCheck(this, ContentSlideComponent);

        this.navCtrl = navCtrl;
        this.toast = toast;
        this.modalCtrl = modalCtrl;
        this.platform = platform;
        this.loading = loading;
        this.menu = menu;
        this.utiles = utiles;
        this.parametrosApp = parametrosApp;
      }

      _createClass(ContentSlideComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return ContentSlideComponent;
    }();

    ContentSlideComponent.ctorParameters = function () {
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
        type: _app_services_ServicioParametrosApp__WEBPACK_IMPORTED_MODULE_4__["ServicioParametrosApp"]
      }];
    };

    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], ContentSlideComponent.prototype, "modulo", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], ContentSlideComponent.prototype, "titulo", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], ContentSlideComponent.prototype, "subTitulo", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], ContentSlideComponent.prototype, "contenido", void 0);
    ContentSlideComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-content-slide',
      template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! raw-loader!./content-slide.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/components/content-slide/content-slide.component.html"))["default"],
      styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! ./content-slide.component.scss */
      "./src/app/components/content-slide/content-slide.component.scss"))["default"]]
    })], ContentSlideComponent);
    /***/
  },

  /***/
  "./src/app/components/item-home/item-home.component.scss":
  /*!***************************************************************!*\
    !*** ./src/app/components/item-home/item-home.component.scss ***!
    \***************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppComponentsItemHomeItemHomeComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvaXRlbS1ob21lL2l0ZW0taG9tZS5jb21wb25lbnQuc2NzcyJ9 */";
    /***/
  },

  /***/
  "./src/app/components/item-home/item-home.component.ts":
  /*!*************************************************************!*\
    !*** ./src/app/components/item-home/item-home.component.ts ***!
    \*************************************************************/

  /*! exports provided: ItemHomeComponent */

  /***/
  function srcAppComponentsItemHomeItemHomeComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ItemHomeComponent", function () {
      return ItemHomeComponent;
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
    /*! ../../../app/services/ServicioUtiles */
    "./src/app/services/ServicioUtiles.ts");
    /* harmony import */


    var _app_services_ServicioParametrosApp__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../../../app/services/ServicioParametrosApp */
    "./src/app/services/ServicioParametrosApp.ts");

    var ItemHomeComponent = /*#__PURE__*/function () {
      function ItemHomeComponent(navCtrl, toast, modalCtrl, platform, loading, menu, utiles, parametrosApp) {
        _classCallCheck(this, ItemHomeComponent);

        this.navCtrl = navCtrl;
        this.toast = toast;
        this.modalCtrl = modalCtrl;
        this.platform = platform;
        this.loading = loading;
        this.menu = menu;
        this.utiles = utiles;
        this.parametrosApp = parametrosApp;
      }

      _createClass(ItemHomeComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "openGenerico",
        value: function openGenerico(modulo) {
          var pageName = modulo.toLowerCase();

          if (modulo == 'EXAMENES') {
            pageName = 'pre-ordenes';
          } //registramos movimiento


          if (sessionStorage.getItem("RSS_ID")) {
            if (this.parametrosApp.USA_LOG_MODULOS()) {
              this.utiles.registrarMovimiento(sessionStorage.getItem("RSS_ID"), modulo.toUpperCase());
            }
          }

          this.navCtrl.navigateRoot(pageName);
        }
      }, {
        key: "openItemPage",
        value: function openItemPage(modulo) {
          this.openGenerico(modulo);
        }
      }]);

      return ItemHomeComponent;
    }();

    ItemHomeComponent.ctorParameters = function () {
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
        type: _app_services_ServicioParametrosApp__WEBPACK_IMPORTED_MODULE_4__["ServicioParametrosApp"]
      }];
    };

    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], ItemHomeComponent.prototype, "modulo", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], ItemHomeComponent.prototype, "classImagen", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], ItemHomeComponent.prototype, "rutaImagen", void 0);
    ItemHomeComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-item-home',
      template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! raw-loader!./item-home.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/components/item-home/item-home.component.html"))["default"],
      styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! ./item-home.component.scss */
      "./src/app/components/item-home/item-home.component.scss"))["default"]]
    })], ItemHomeComponent);
    /***/
  },

  /***/
  "./src/app/components/pagina-mensajes/pagina-mensajes.component.scss":
  /*!***************************************************************************!*\
    !*** ./src/app/components/pagina-mensajes/pagina-mensajes.component.scss ***!
    \***************************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppComponentsPaginaMensajesPaginaMensajesComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".centrado {\n  text-align: center;\n  width: 100%;\n  height: 50%;\n  position: absolute;\n  top: 25%;\n  padding-left: 60px;\n  padding-right: 60px;\n}\n\n.titulo-item-2 {\n  font-size: 16px;\n  color: #000000DE;\n}\n\n.mt-32 {\n  margin-top: 32px;\n}\n\n.texto-1 {\n  font-size: 1.3em;\n  color: #575657;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy92aWN0b3Jjb3JvbmFkby9EZXNrdG9wL21pRmFtaWxpYV9wcmUvc3JjL2FwcC9jb21wb25lbnRzL3BhZ2luYS1tZW5zYWplcy9wYWdpbmEtbWVuc2FqZXMuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL2NvbXBvbmVudHMvcGFnaW5hLW1lbnNhamVzL3BhZ2luYS1tZW5zYWplcy5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLFdBQUE7RUFDQSxrQkFBQTtFQUNBLFFBQUE7RUFDQSxrQkFBQTtFQUNBLG1CQUFBO0FDQ0o7O0FEQ0E7RUFDSSxlQUFBO0VBQ0EsZ0JBQUE7QUNFSjs7QURBQTtFQUNJLGdCQUFBO0FDR0o7O0FEREE7RUFDSSxnQkFBQTtFQUNBLGNBQUE7QUNJSiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvcGFnaW5hLW1lbnNhamVzL3BhZ2luYS1tZW5zYWplcy5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jZW50cmFkb3tcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIHdpZHRoOiAxMDAlOyAgICAgICBcclxuICAgIGhlaWdodDogNTAlO1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgdG9wOjI1JTsgIFxyXG4gICAgcGFkZGluZy1sZWZ0OiA2MHB4O1xyXG4gICAgcGFkZGluZy1yaWdodDogNjBweDsgICAgICAgICBcclxufVxyXG4udGl0dWxvLWl0ZW0tMntcclxuICAgIGZvbnQtc2l6ZTogMTZweDtcclxuICAgIGNvbG9yOiAjMDAwMDAwREU7XHJcbn1cclxuLm10LTMye1xyXG4gICAgbWFyZ2luLXRvcDogMzJweDtcclxufVxyXG4udGV4dG8tMXtcclxuICAgIGZvbnQtc2l6ZTogMS4zZW07XHJcbiAgICBjb2xvcjogIzU3NTY1NztcclxuICAgIFxyXG59IiwiLmNlbnRyYWRvIHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiA1MCU7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiAyNSU7XG4gIHBhZGRpbmctbGVmdDogNjBweDtcbiAgcGFkZGluZy1yaWdodDogNjBweDtcbn1cblxuLnRpdHVsby1pdGVtLTIge1xuICBmb250LXNpemU6IDE2cHg7XG4gIGNvbG9yOiAjMDAwMDAwREU7XG59XG5cbi5tdC0zMiB7XG4gIG1hcmdpbi10b3A6IDMycHg7XG59XG5cbi50ZXh0by0xIHtcbiAgZm9udC1zaXplOiAxLjNlbTtcbiAgY29sb3I6ICM1NzU2NTc7XG59Il19 */";
    /***/
  },

  /***/
  "./src/app/components/pagina-mensajes/pagina-mensajes.component.ts":
  /*!*************************************************************************!*\
    !*** ./src/app/components/pagina-mensajes/pagina-mensajes.component.ts ***!
    \*************************************************************************/

  /*! exports provided: PaginaMensajesComponent */

  /***/
  function srcAppComponentsPaginaMensajesPaginaMensajesComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "PaginaMensajesComponent", function () {
      return PaginaMensajesComponent;
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
    /*! ../../../app/services/ServicioUtiles */
    "./src/app/services/ServicioUtiles.ts");

    var PaginaMensajesComponent = /*#__PURE__*/function () {
      function PaginaMensajesComponent(navCtrl, toast, modalCtrl, platform, loading, menu, utiles) {
        _classCallCheck(this, PaginaMensajesComponent);

        this.navCtrl = navCtrl;
        this.toast = toast;
        this.modalCtrl = modalCtrl;
        this.platform = platform;
        this.loading = loading;
        this.menu = menu;
        this.utiles = utiles;
        this.irA = 'inicio';
      }

      _createClass(PaginaMensajesComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "volver",
        value: function volver() {
          console.log('volver');
          this.navCtrl.navigateRoot(this.irA);
        }
      }]);

      return PaginaMensajesComponent;
    }();

    PaginaMensajesComponent.ctorParameters = function () {
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
      }];
    };

    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], PaginaMensajesComponent.prototype, "titulo", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], PaginaMensajesComponent.prototype, "contenido", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], PaginaMensajesComponent.prototype, "irA", void 0);
    PaginaMensajesComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-pagina-mensajes',
      template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! raw-loader!./pagina-mensajes.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/components/pagina-mensajes/pagina-mensajes.component.html"))["default"],
      styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! ./pagina-mensajes.component.scss */
      "./src/app/components/pagina-mensajes/pagina-mensajes.component.scss"))["default"]]
    })], PaginaMensajesComponent);
    /***/
  },

  /***/
  "./src/app/components/progress-minimo/progress-minimo.component.scss":
  /*!***************************************************************************!*\
    !*** ./src/app/components/progress-minimo/progress-minimo.component.scss ***!
    \***************************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppComponentsProgressMinimoProgressMinimoComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".centrado {\n  text-align: center;\n  width: 100%;\n  height: 20%;\n  /*position: absolute;*/\n  top: 5%;\n  padding-top: 5%;\n  padding-left: 60px;\n  padding-right: 60px;\n}\n\n.titulo-item-2 {\n  font-size: 16px;\n  color: #000000DE;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy92aWN0b3Jjb3JvbmFkby9EZXNrdG9wL21pRmFtaWxpYV9wcmUvc3JjL2FwcC9jb21wb25lbnRzL3Byb2dyZXNzLW1pbmltby9wcm9ncmVzcy1taW5pbW8uY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL2NvbXBvbmVudHMvcHJvZ3Jlc3MtbWluaW1vL3Byb2dyZXNzLW1pbmltby5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLFdBQUE7RUFDQSxzQkFBQTtFQUNBLE9BQUE7RUFDQSxlQUFBO0VBQ0Esa0JBQUE7RUFDQSxtQkFBQTtBQ0NKOztBRENBO0VBQ0ksZUFBQTtFQUNBLGdCQUFBO0FDRUoiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL3Byb2dyZXNzLW1pbmltby9wcm9ncmVzcy1taW5pbW8uY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY2VudHJhZG97XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICB3aWR0aDogMTAwJTsgICAgICAgXHJcbiAgICBoZWlnaHQ6IDIwJTtcclxuICAgIC8qcG9zaXRpb246IGFic29sdXRlOyovXHJcbiAgICB0b3A6NSU7XHJcbiAgICBwYWRkaW5nLXRvcDogNSU7ICBcclxuICAgIHBhZGRpbmctbGVmdDogNjBweDtcclxuICAgIHBhZGRpbmctcmlnaHQ6IDYwcHg7ICAgICAgICAgXHJcbn1cclxuLnRpdHVsby1pdGVtLTJ7XHJcbiAgICBmb250LXNpemU6IDE2cHg7XHJcbiAgICBjb2xvcjogIzAwMDAwMERFO1xyXG59IiwiLmNlbnRyYWRvIHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAyMCU7XG4gIC8qcG9zaXRpb246IGFic29sdXRlOyovXG4gIHRvcDogNSU7XG4gIHBhZGRpbmctdG9wOiA1JTtcbiAgcGFkZGluZy1sZWZ0OiA2MHB4O1xuICBwYWRkaW5nLXJpZ2h0OiA2MHB4O1xufVxuXG4udGl0dWxvLWl0ZW0tMiB7XG4gIGZvbnQtc2l6ZTogMTZweDtcbiAgY29sb3I6ICMwMDAwMDBERTtcbn0iXX0= */";
    /***/
  },

  /***/
  "./src/app/components/progress-minimo/progress-minimo.component.ts":
  /*!*************************************************************************!*\
    !*** ./src/app/components/progress-minimo/progress-minimo.component.ts ***!
    \*************************************************************************/

  /*! exports provided: ProgressMinimoComponent */

  /***/
  function srcAppComponentsProgressMinimoProgressMinimoComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ProgressMinimoComponent", function () {
      return ProgressMinimoComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

    var ProgressMinimoComponent = /*#__PURE__*/function () {
      function ProgressMinimoComponent() {
        _classCallCheck(this, ProgressMinimoComponent);

        this.mostrar = false;
      }

      _createClass(ProgressMinimoComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return ProgressMinimoComponent;
    }();

    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], ProgressMinimoComponent.prototype, "mostrar", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], ProgressMinimoComponent.prototype, "titulo", void 0);
    ProgressMinimoComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-progress-minimo',
      template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! raw-loader!./progress-minimo.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/components/progress-minimo/progress-minimo.component.html"))["default"],
      styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! ./progress-minimo.component.scss */
      "./src/app/components/progress-minimo/progress-minimo.component.scss"))["default"]]
    })], ProgressMinimoComponent);
    /***/
  },

  /***/
  "./src/app/components/progress/progress.component.scss":
  /*!*************************************************************!*\
    !*** ./src/app/components/progress/progress.component.scss ***!
    \*************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppComponentsProgressProgressComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".centrado {\n  text-align: center;\n  width: 100%;\n  height: 10%;\n  position: absolute;\n  top: 45%;\n  padding-left: 60px;\n  padding-right: 60px;\n}\n\n.titulo-item-2 {\n  font-size: 16px;\n  color: #000000DE;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy92aWN0b3Jjb3JvbmFkby9EZXNrdG9wL21pRmFtaWxpYV9wcmUvc3JjL2FwcC9jb21wb25lbnRzL3Byb2dyZXNzL3Byb2dyZXNzLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9jb21wb25lbnRzL3Byb2dyZXNzL3Byb2dyZXNzLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksa0JBQUE7RUFDQSxXQUFBO0VBQ0EsV0FBQTtFQUNBLGtCQUFBO0VBQ0EsUUFBQTtFQUNBLGtCQUFBO0VBQ0EsbUJBQUE7QUNDSjs7QURDQTtFQUNJLGVBQUE7RUFDQSxnQkFBQTtBQ0VKIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9wcm9ncmVzcy9wcm9ncmVzcy5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jZW50cmFkb3tcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIHdpZHRoOiAxMDAlOyAgICAgICBcclxuICAgIGhlaWdodDogMTAlO1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgdG9wOjQ1JTsgIFxyXG4gICAgcGFkZGluZy1sZWZ0OiA2MHB4O1xyXG4gICAgcGFkZGluZy1yaWdodDogNjBweDsgICAgICAgICBcclxufVxyXG4udGl0dWxvLWl0ZW0tMntcclxuICAgIGZvbnQtc2l6ZTogMTZweDtcclxuICAgIGNvbG9yOiAjMDAwMDAwREU7XHJcbn0iLCIuY2VudHJhZG8ge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDEwJTtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDQ1JTtcbiAgcGFkZGluZy1sZWZ0OiA2MHB4O1xuICBwYWRkaW5nLXJpZ2h0OiA2MHB4O1xufVxuXG4udGl0dWxvLWl0ZW0tMiB7XG4gIGZvbnQtc2l6ZTogMTZweDtcbiAgY29sb3I6ICMwMDAwMDBERTtcbn0iXX0= */";
    /***/
  },

  /***/
  "./src/app/components/progress/progress.component.ts":
  /*!***********************************************************!*\
    !*** ./src/app/components/progress/progress.component.ts ***!
    \***********************************************************/

  /*! exports provided: ProgressComponent */

  /***/
  function srcAppComponentsProgressProgressComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ProgressComponent", function () {
      return ProgressComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

    var ProgressComponent = /*#__PURE__*/function () {
      function ProgressComponent() {
        _classCallCheck(this, ProgressComponent);

        this.mostrar = false;
      }

      _createClass(ProgressComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return ProgressComponent;
    }();

    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], ProgressComponent.prototype, "mostrar", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], ProgressComponent.prototype, "titulo", void 0);
    ProgressComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-progress',
      template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! raw-loader!./progress.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/components/progress/progress.component.html"))["default"],
      styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! ./progress.component.scss */
      "./src/app/components/progress/progress.component.scss"))["default"]]
    })], ProgressComponent);
    /***/
  },

  /***/
  "./src/app/pipes/fecha.pipe.ts":
  /*!*************************************!*\
    !*** ./src/app/pipes/fecha.pipe.ts ***!
    \*************************************/

  /*! exports provided: MomentPipe */

  /***/
  function srcAppPipesFechaPipeTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MomentPipe", function () {
      return MomentPipe;
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


    var moment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! moment */
    "./node_modules/moment/moment.js");
    /* harmony import */


    var moment__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_2__);

    var MomentPipe = /*#__PURE__*/function () {
      function MomentPipe() {
        _classCallCheck(this, MomentPipe);
      }

      _createClass(MomentPipe, [{
        key: "transform",
        value: function transform(value, dateFormat) {
          return moment__WEBPACK_IMPORTED_MODULE_2__(value).format(dateFormat);
        }
      }]);

      return MomentPipe;
    }();

    MomentPipe = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Pipe"])({
      name: 'dateFormat'
    })], MomentPipe);
    /***/
  },

  /***/
  "./src/app/pipes/filter.pipe.ts":
  /*!**************************************!*\
    !*** ./src/app/pipes/filter.pipe.ts ***!
    \**************************************/

  /*! exports provided: FilterPipe */

  /***/
  function srcAppPipesFilterPipeTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "FilterPipe", function () {
      return FilterPipe;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

    var FilterPipe = /*#__PURE__*/function () {
      function FilterPipe() {
        _classCallCheck(this, FilterPipe);
      }

      _createClass(FilterPipe, [{
        key: "transform",
        value: function transform(items, searchText) {
          if (!items) return [];
          if (!searchText) return items;
          return items.filter(function (item) {
            return Object.keys(item).some(function (key) {
              return String(item[key]).toLowerCase().includes(searchText.toLowerCase());
            });
          });
        }
      }]);

      return FilterPipe;
    }();

    FilterPipe = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Pipe"])({
      name: 'filter'
    })], FilterPipe);
    /***/
  },

  /***/
  "./src/app/pipes/split.pipe.ts":
  /*!*************************************!*\
    !*** ./src/app/pipes/split.pipe.ts ***!
    \*************************************/

  /*! exports provided: SplitPipe */

  /***/
  function srcAppPipesSplitPipeTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SplitPipe", function () {
      return SplitPipe;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

    var SplitPipe = /*#__PURE__*/function () {
      function SplitPipe() {
        _classCallCheck(this, SplitPipe);
      }

      _createClass(SplitPipe, [{
        key: "transform",
        value: function transform(input, sep, inx) {
          return input.split(sep)[inx];
        }
      }]);

      return SplitPipe;
    }();

    SplitPipe = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Pipe"])({
      name: 'split'
    })], SplitPipe);
    /***/
  },

  /***/
  "./src/app/pipes/toCelsius.pipe.ts":
  /*!*****************************************!*\
    !*** ./src/app/pipes/toCelsius.pipe.ts ***!
    \*****************************************/

  /*! exports provided: CelsiusPipe */

  /***/
  function srcAppPipesToCelsiusPipeTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CelsiusPipe", function () {
      return CelsiusPipe;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

    var CelsiusPipe = /*#__PURE__*/function () {
      function CelsiusPipe() {
        _classCallCheck(this, CelsiusPipe);
      }

      _createClass(CelsiusPipe, [{
        key: "transform",
        value: function transform(value) {
          value = ((value - 32) * 5 / 9).toFixed(0);
          return value + " °c";
        }
      }]);

      return CelsiusPipe;
    }();

    CelsiusPipe = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Pipe"])({
      name: 'celsius'
    })], CelsiusPipe);
    /***/
  },

  /***/
  "./src/app/services/ServicioAcceso.ts":
  /*!********************************************!*\
    !*** ./src/app/services/ServicioAcceso.ts ***!
    \********************************************/

  /*! exports provided: ServicioAcceso */

  /***/
  function srcAppServicesServicioAccesoTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ServicioAcceso", function () {
      return ServicioAcceso;
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


    var _ionic_native_http_ngx__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @ionic-native/http/ngx */
    "./node_modules/@ionic-native/http/__ivy_ngcc__/ngx/index.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
    /* harmony import */


    var _environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../../environments/environment */
    "./src/environments/environment.ts"); //import { Http, Headers } from '@angular/';


    var ServicioAcceso = /*#__PURE__*/function () {
      function ServicioAcceso(http, httpClient) {
        _classCallCheck(this, ServicioAcceso);

        this.http = http;
        this.httpClient = httpClient; //inicializamos los valores

        this.username = '';
        this.loggedIn = false;
        this.CodigoMensaje = 0;
        this.Mensaje = '';
      }

      _createClass(ServicioAcceso, [{
        key: "loginWeb",
        value: function loginWeb(userInfo) {
          var _this2 = this;

          var url = _environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].API_ENDPOINT + 'Autentificacion?UserName=' + userInfo.UserName + '&Password=' + userInfo.Password; //return this.http.get(url, {}, {}).map(res => res.text()).map(res => { });

          return this.httpClient.get(url, {}).subscribe(function (response) {
            var retorno = response; //el response trae RespuestaBase

            if (retorno.RespuestaBase) {
              if (retorno.RespuestaBase.CodigoMensaje == 0) {
                //todo ok por aca
                var user;
                var userFamilia;

                if (retorno.UsuarioAps) {
                  user = JSON.stringify(retorno.UsuarioAps); //variable de sessión muy importante para el resto de la app.

                  sessionStorage.setItem("UsuarioAps", user);
                }

                if (retorno.UsuariosFamilia) {
                  userFamilia = JSON.stringify(retorno.UsuariosFamilia); //variable de sessión muy importante para el resto de la app.

                  localStorage.setItem("UsuariosFamilia", userFamilia);
                }

                _this2.CodigoMensaje = retorno.RespuestaBase.CodigoMensaje;
                _this2.Mensaje = retorno.RespuestaBase.Mensaje;
                _this2.username = userInfo.usuario;
                _this2.loggedIn = true;
              } else {
                _this2.loggedIn = false;
                _this2.CodigoMensaje = retorno.RespuestaBase.CodigoMensaje;
                _this2.Mensaje = retorno.RespuestaBase.Mensaje;
              }
            } else {
              //error también
              _this2.loggedIn = false;
              _this2.CodigoMensaje = 1000;
              _this2.Mensaje = 'Error de llamada Http;';
            }
          });
        } //cambiado por la otra api

        /*     loginWebDirecto(userInfo){
                var url = environment.API_ENDPOINT + 'Autentificacion?UserName=' + userInfo.UserName + '&Password=' + userInfo.Password +
                '&UsaEnrolamiento=' + userInfo.UsaEnrolamiento + '&TokenFCM=' + userInfo.TokenFCM;
                let data = this.httpClient.get(url,{});
                return data;
            }
            loginWebNative(userInfo){
                var url = environment.API_ENDPOINT + 'Autentificacion?UserName=' + userInfo.UserName + '&Password=' + userInfo.Password +
                '&UsaEnrolamiento=' + userInfo.UsaEnrolamiento + '&TokenFCM=' + userInfo.TokenFCM;;
                let data = this.http.get(url, {}, {});
                return data;
            } */

      }, {
        key: "loginWebDirecto",
        value: function loginWebDirecto(userInfo) {
          var url = _environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].API_ENDPOINT + 'AutentificacionApp?UserName=' + userInfo.UserName + '&Password=' + userInfo.Password + '&UsaEnrolamiento=' + userInfo.UsaEnrolamiento + '&TokenFCM=' + userInfo.TokenFCM;
          var data = this.httpClient.get(url, {});
          return data;
        }
      }, {
        key: "loginWebNative",
        value: function loginWebNative(userInfo) {
          var url = _environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].API_ENDPOINT + 'AutentificacionApp?UserName=' + userInfo.UserName + '&Password=' + userInfo.Password + '&UsaEnrolamiento=' + userInfo.UsaEnrolamiento + '&TokenFCM=' + userInfo.TokenFCM;
          ;
          var data = this.http.get(url, {}, {});
          return data;
        }
      }, {
        key: "logout",
        value: function logout() {
          sessionStorage.clear(); //limpiamos eventos locales

          localStorage.removeItem('NOTIFICACIONES_LOCALES_EVENTOS');
          this.username = '';
          this.loggedIn = false;
        }
      }, {
        key: "isLoggedId",
        value: function isLoggedId() {
          return this.loggedIn;
        }
      }]);

      return ServicioAcceso;
    }();

    ServicioAcceso.ctorParameters = function () {
      return [{
        type: _ionic_native_http_ngx__WEBPACK_IMPORTED_MODULE_2__["HTTP"]
      }, {
        type: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"]
      }];
    };

    ServicioAcceso = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])()], ServicioAcceso);
    /***/
  },

  /***/
  "./src/app/services/ServicioCitas.ts":
  /*!*******************************************!*\
    !*** ./src/app/services/ServicioCitas.ts ***!
    \*******************************************/

  /*! exports provided: ServicioCitas */

  /***/
  function srcAppServicesServicioCitasTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ServicioCitas", function () {
      return ServicioCitas;
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


    var _ionic_native_http_ngx__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @ionic-native/http/ngx */
    "./node_modules/@ionic-native/http/__ivy_ngcc__/ngx/index.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
    /* harmony import */


    var _environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../../environments/environment */
    "./src/environments/environment.ts");
    /* harmony import */


    var _ServicioUtiles__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./ServicioUtiles */
    "./src/app/services/ServicioUtiles.ts");
    /* harmony import */


    var moment__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! moment */
    "./node_modules/moment/moment.js");
    /* harmony import */


    var moment__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_6__); //import { Http, Headers } from '@angular/';


    var ServicioCitas = /*#__PURE__*/function () {
      function ServicioCitas(http, httpClient, utiles) {
        _classCallCheck(this, ServicioCitas);

        this.http = http;
        this.httpClient = httpClient;
        this.utiles = utiles;
        this.arregloGeneral = [];
        this.arregloDiagnosticos = [];
        this.arregloFarmacosPendientes = [];
        this.arregloErrores = [];
        this.arregloVacunas = [];
        this.arregloFarmacosUso = [];
        this.arregloAlimentoEntregado = [];
        this.arregloAlimentofuturo = [];
        this.arregloAgrupado = [];
        this.arregloGenerico = []; //nueva implementación vacuna futura

        this.arregloVacunasFuturas = [];
      }

      _createClass(ServicioCitas, [{
        key: "entregaPorMes",
        value: function entregaPorMes(uspId, idRyf, nodId, numeroMes, annoConsulta) {
          var body = JSON.stringify({
            UspId: uspId.toString(),
            IdRyf: idRyf.toString(),
            NodId: nodId.toString(),
            NumeroMes: numeroMes.toString(),
            AnnoConsulta: annoConsulta.toString()
          });
          var url = _environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].API_ENDPOINT + 'Mes';
          var httpHeaders = new _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpHeaders"]({
            'Content-Type': 'application/json',
            'Cache-Control': 'no-cache'
          });
          httpHeaders.set('Access-Control-Allow-Origin', '*');
          httpHeaders.set("Access-Control-Allow-Methods", "GET, POST, OPTIONS, PUT, DELETE");
          httpHeaders.set("Access-Control-Allow-Headers", "*");
          var options = {
            headers: httpHeaders
          };
          var data = this.httpClient.post(url, body, options);
          return data;
        }
      }, {
        key: "entregaPorMesNative",
        value: function entregaPorMesNative(uspId, idRyf, nodId, numeroMes, annoConsulta) {
          //realizar la llamada post nativa
          var headers = new Headers();
          var body = {
            "UspId": uspId.toString(),
            "IdRyf": idRyf.toString(),
            "NodId": nodId.toString(),
            "NumeroMes": numeroMes.toString(),
            "AnnoConsulta": annoConsulta.toString()
          };
          var url = _environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].API_ENDPOINT + 'Mes';
          this.http.setDataSerializer('json');
          return this.http.post(url, body, {});
        }
      }, {
        key: "entregaPorMesNuevo",
        value: function entregaPorMesNuevo(uspId, idRyf, nodId, numeroMes, annoConsulta) {
          var body = JSON.stringify({
            UspId: uspId.toString(),
            IdRyf: idRyf.toString(),
            NodId: nodId.toString(),
            NumeroMes: numeroMes.toString(),
            AnnoConsulta: annoConsulta.toString()
          });
          var url = _environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].API_ENDPOINT + 'MesNuevo';
          var httpHeaders = new _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpHeaders"]({
            'Content-Type': 'application/json',
            'Cache-Control': 'no-cache'
          });
          httpHeaders.set('Access-Control-Allow-Origin', '*');
          httpHeaders.set("Access-Control-Allow-Methods", "GET, POST, OPTIONS, PUT, DELETE");
          httpHeaders.set("Access-Control-Allow-Headers", "*");
          var options = {
            headers: httpHeaders
          };
          var data = this.httpClient.post(url, body, options);
          return data;
        }
      }, {
        key: "entregaPorMesNuevoNative",
        value: function entregaPorMesNuevoNative(uspId, idRyf, nodId, numeroMes, annoConsulta) {
          //realizar la llamada post nativa
          var headers = new Headers();
          var body = {
            "UspId": uspId.toString(),
            "IdRyf": idRyf.toString(),
            "NodId": nodId.toString(),
            "NumeroMes": numeroMes.toString(),
            "AnnoConsulta": annoConsulta.toString()
          };
          var url = _environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].API_ENDPOINT + 'MesNuevo';
          this.http.setDataSerializer('json');
          return this.http.post(url, body, {});
        }
      }, {
        key: "getDiagnosticosByUspId",
        value: function getDiagnosticosByUspId(uspId) {
          var _this3 = this;

          var url = _environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].API_ENDPOINT + 'Diagnostico';
          var urlFarmacoPendiente = _environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].API_ENDPOINT + 'FarmacoPendiente';
          var urlVacunas = _environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].API_ENDPOINT + 'Vacuna';
          var urlFarmacoUso = _environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].API_ENDPOINT + 'FarmacoEnUso';
          var urlAlimentoEntregado = _environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].API_ENDPOINT + 'AlimentoEntregado';
          var urlAlimentoFuturo = _environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].API_ENDPOINT + 'AlimentoFuturo';
          var httpHeaders = new _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpHeaders"]({
            'Content-Type': 'application/json',
            'Cache-Control': 'no-cache'
          });
          httpHeaders.set('Access-Control-Allow-Origin', '*');
          httpHeaders.set("Access-Control-Allow-Methods", "GET, POST, OPTIONS, PUT, DELETE");
          httpHeaders.set("Access-Control-Allow-Headers", "*");
          var options = {
            headers: httpHeaders
          };
          var iJson = JSON.stringify({
            UspId: uspId.toString()
          });
          var repos = this.httpClient.post(url, iJson, options);
          repos.subscribe(function (response) {
            _this3.arregloDiagnosticos = response.DiagnosticosUsp;

            if (response.RespuestaBase) {
              if (response.RespuestaBase.CodigoMensaje != 0) {
                _this3.arregloErrores.push(response.RespuestaBase);
              }
            } //procesar la data


            if (_this3.arregloDiagnosticos) {
              for (var s in _this3.arregloDiagnosticos) {
                //vamos creando una entidad genérica con los resultados
                var fechaIni = moment__WEBPACK_IMPORTED_MODULE_6__(_this3.arregloDiagnosticos[s].FechaHoraInicio); //definimos la fecha de termino en una hora más de la de inicio

                var fechaTer = moment__WEBPACK_IMPORTED_MODULE_6__(fechaIni).add(1, 'hours');
                var ini = new Date(Date.UTC(moment__WEBPACK_IMPORTED_MODULE_6__(fechaIni).year(), moment__WEBPACK_IMPORTED_MODULE_6__(fechaIni).month(), moment__WEBPACK_IMPORTED_MODULE_6__(fechaIni).date(), moment__WEBPACK_IMPORTED_MODULE_6__(fechaIni).hour(), moment__WEBPACK_IMPORTED_MODULE_6__(fechaIni).minute(), moment__WEBPACK_IMPORTED_MODULE_6__(fechaIni).second(), 0));
                var ter = new Date(Date.UTC(moment__WEBPACK_IMPORTED_MODULE_6__(fechaTer).year(), moment__WEBPACK_IMPORTED_MODULE_6__(fechaTer).month(), moment__WEBPACK_IMPORTED_MODULE_6__(fechaTer).date(), moment__WEBPACK_IMPORTED_MODULE_6__(fechaTer).hour(), moment__WEBPACK_IMPORTED_MODULE_6__(fechaTer).minute(), moment__WEBPACK_IMPORTED_MODULE_6__(fechaTer).second(), 0));
                var todoElDia = false; //definimos el titulo con el nombre TDA

                var titulo = _this3.arregloDiagnosticos[s].NombreUsuario + '|' + _this3.arregloDiagnosticos[s].NombreTDA; //ahora creamos la entidad con estos valores

                var entidadDiagnosticosUsp = {
                  title: titulo,
                  startTime: ini,
                  endTime: ter,
                  allDay: todoElDia
                }; //ahora lo insertamos en nuestro arreglo

                _this3.arregloGeneral.push(entidadDiagnosticosUsp);
              }
            }
          }); //farmacos pendientes

          var reposFar = this.httpClient.post(urlFarmacoPendiente, iJson, options);
          reposFar.subscribe(function (data) {
            _this3.arregloFarmacosPendientes = data.FarmacosPendientesUsp;

            if (data.RespuestaBase) {
              if (data.RespuestaBase.CodigoMensaje != 0) {
                _this3.arregloErrores.push(data.RespuestaBase);
              }
            } //procesar la data


            if (_this3.arregloFarmacosPendientes) {
              for (var s in _this3.arregloFarmacosPendientes) {
                //vamos creando una entidad genérica con los resultados
                var fechaIni = moment__WEBPACK_IMPORTED_MODULE_6__(_this3.arregloFarmacosPendientes[s].FechaEntrega); //definimos la fecha de termino en una hora más de la de inicio

                var fechaTer = moment__WEBPACK_IMPORTED_MODULE_6__(fechaIni).add(1, 'hours');
                var ini = new Date(Date.UTC(moment__WEBPACK_IMPORTED_MODULE_6__(fechaIni).year(), moment__WEBPACK_IMPORTED_MODULE_6__(fechaIni).month(), moment__WEBPACK_IMPORTED_MODULE_6__(fechaIni).date(), moment__WEBPACK_IMPORTED_MODULE_6__(fechaIni).hour(), moment__WEBPACK_IMPORTED_MODULE_6__(fechaIni).minute(), moment__WEBPACK_IMPORTED_MODULE_6__(fechaIni).second(), 0));
                var ter = new Date(Date.UTC(moment__WEBPACK_IMPORTED_MODULE_6__(fechaTer).year(), moment__WEBPACK_IMPORTED_MODULE_6__(fechaTer).month(), moment__WEBPACK_IMPORTED_MODULE_6__(fechaTer).date(), moment__WEBPACK_IMPORTED_MODULE_6__(fechaTer).hour(), moment__WEBPACK_IMPORTED_MODULE_6__(fechaTer).minute(), moment__WEBPACK_IMPORTED_MODULE_6__(fechaTer).second(), 0));
                var todoElDia = false; //definimos el titulo con el nombre diagnostico + articulo

                var titulo = _this3.arregloFarmacosPendientes[s].NombreUsuario + '|' + _this3.arregloFarmacosPendientes[s].Diagnostico + ' ' + _this3.arregloFarmacosPendientes[s].Articulo; //ahora creamos la entidad con estos valores

                var entidadFarmacosPendientes = {
                  title: titulo,
                  startTime: ini,
                  endTime: ter,
                  allDay: todoElDia
                }; //ahora lo insertamos en nuestro arreglo

                _this3.arregloGeneral.push(entidadFarmacosPendientes);
              }
            }
          }, function (err) {
            return console.error(err);
          }, function () {
            return console.log('get completed');
          }); //vacunas

          var reposVac = this.httpClient.post(urlVacunas, iJson, options);
          reposVac.subscribe(function (data) {
            _this3.arregloVacunas = data.VacunasUsp;

            if (data.RespuestaBase) {
              if (data.RespuestaBase.CodigoMensaje != 0) {
                _this3.arregloErrores.push(data.RespuestaBase);
              }
            } //procesar la data


            if (_this3.arregloVacunas) {
              for (var s in _this3.arregloVacunas) {
                //vamos creando una entidad genérica con los resultados
                var fechaIni = moment__WEBPACK_IMPORTED_MODULE_6__(_this3.arregloVacunas[s].FechaProximaDosis); //definimos la fecha de termino en una hora más de la de inicio

                var fechaTer = moment__WEBPACK_IMPORTED_MODULE_6__(fechaIni).add(1, 'hours');
                var ini = new Date(Date.UTC(moment__WEBPACK_IMPORTED_MODULE_6__(fechaIni).year(), moment__WEBPACK_IMPORTED_MODULE_6__(fechaIni).month(), moment__WEBPACK_IMPORTED_MODULE_6__(fechaIni).date(), moment__WEBPACK_IMPORTED_MODULE_6__(fechaIni).hour(), moment__WEBPACK_IMPORTED_MODULE_6__(fechaIni).minute(), moment__WEBPACK_IMPORTED_MODULE_6__(fechaIni).second(), 0));
                var ter = new Date(Date.UTC(moment__WEBPACK_IMPORTED_MODULE_6__(fechaTer).year(), moment__WEBPACK_IMPORTED_MODULE_6__(fechaTer).month(), moment__WEBPACK_IMPORTED_MODULE_6__(fechaTer).date(), moment__WEBPACK_IMPORTED_MODULE_6__(fechaTer).hour(), moment__WEBPACK_IMPORTED_MODULE_6__(fechaTer).minute(), moment__WEBPACK_IMPORTED_MODULE_6__(fechaTer).second(), 0));
                var todoElDia = false; //definimos el titulo con el nombre diagnostico + articulo

                var titulo = _this3.arregloVacunas[s].NombreUsuario + '|' + _this3.arregloVacunas[s].Descripcion + ', ' + _this3.arregloVacunas[s].DescripcionDosis; //ahora creamos la entidad con estos valores

                var entidadVacuna = {
                  title: titulo,
                  startTime: ini,
                  endTime: ter,
                  allDay: todoElDia
                }; //ahora lo insertamos en nuestro arreglo

                _this3.arregloGeneral.push(entidadVacuna);
              }
            }
          }, function (err) {
            return console.error(err);
          }, function () {
            return console.log('get completed');
          }); //farmacos en uso

          var repoFarUso = this.httpClient.post(urlFarmacoUso, iJson, options);
          repoFarUso.subscribe(function (data) {
            _this3.arregloFarmacosUso = data.FarmacosEnUsoUsp;

            if (data.RespuestaBase) {
              if (data.RespuestaBase.CodigoMensaje != 0) {
                _this3.arregloErrores.push(data.RespuestaBase);
              }
            } //procesar la data


            if (_this3.arregloFarmacosUso) {
              for (var s in _this3.arregloFarmacosUso) {
                //vamos creando una entidad genérica con los resultados
                var fechaIni = moment__WEBPACK_IMPORTED_MODULE_6__(_this3.arregloFarmacosUso[s].FechaEntrega); //definimos la fecha de termino en una hora más de la de inicio

                var fechaTer = moment__WEBPACK_IMPORTED_MODULE_6__(fechaIni).add(1, 'hours');
                var ini = new Date(Date.UTC(moment__WEBPACK_IMPORTED_MODULE_6__(fechaIni).year(), moment__WEBPACK_IMPORTED_MODULE_6__(fechaIni).month(), moment__WEBPACK_IMPORTED_MODULE_6__(fechaIni).date(), moment__WEBPACK_IMPORTED_MODULE_6__(fechaIni).hour(), moment__WEBPACK_IMPORTED_MODULE_6__(fechaIni).minute(), moment__WEBPACK_IMPORTED_MODULE_6__(fechaIni).second(), 0));
                var ter = new Date(Date.UTC(moment__WEBPACK_IMPORTED_MODULE_6__(fechaTer).year(), moment__WEBPACK_IMPORTED_MODULE_6__(fechaTer).month(), moment__WEBPACK_IMPORTED_MODULE_6__(fechaTer).date(), moment__WEBPACK_IMPORTED_MODULE_6__(fechaTer).hour(), moment__WEBPACK_IMPORTED_MODULE_6__(fechaTer).minute(), moment__WEBPACK_IMPORTED_MODULE_6__(fechaTer).second(), 0));
                var todoElDia = false; //definimos el titulo con el nombre diagnostico + articulo

                var titulo = _this3.arregloFarmacosUso[s].NombreUsuario + '|' + _this3.arregloFarmacosUso[s].Descripcion; //ahora creamos la entidad con estos valores

                var entidadFarUso = {
                  title: titulo,
                  startTime: ini,
                  endTime: ter,
                  allDay: todoElDia
                }; //ahora lo insertamos en nuestro arreglo

                _this3.arregloGeneral.push(entidadFarUso);
              }
            }
          }, function (err) {
            return console.error(err);
          }, function () {
            return console.log('get completed');
          }); //alimento entregado

          var repoAlimentoEntregado = this.httpClient.post(urlAlimentoEntregado, iJson, options);
          repoAlimentoEntregado.subscribe(function (data) {
            _this3.arregloAlimentoEntregado = data.AlimentosEntregadosUsp;

            if (data.RespuestaBase) {
              if (data.RespuestaBase.CodigoMensaje != 0) {
                _this3.arregloErrores.push(data.RespuestaBase);
              }
            } //procesar la data


            if (_this3.arregloAlimentoEntregado) {
              for (var s in _this3.arregloAlimentoEntregado) {
                //vamos creando una entidad genérica con los resultados
                var fechaIni = moment__WEBPACK_IMPORTED_MODULE_6__(_this3.arregloAlimentoEntregado[s].FechaEntrega); //definimos la fecha de termino en una hora más de la de inicio

                var fechaTer = moment__WEBPACK_IMPORTED_MODULE_6__(fechaIni).add(1, 'hours');
                var ini = new Date(Date.UTC(moment__WEBPACK_IMPORTED_MODULE_6__(fechaIni).year(), moment__WEBPACK_IMPORTED_MODULE_6__(fechaIni).month(), moment__WEBPACK_IMPORTED_MODULE_6__(fechaIni).date(), moment__WEBPACK_IMPORTED_MODULE_6__(fechaIni).hour(), moment__WEBPACK_IMPORTED_MODULE_6__(fechaIni).minute(), moment__WEBPACK_IMPORTED_MODULE_6__(fechaIni).second(), 0));
                var ter = new Date(Date.UTC(moment__WEBPACK_IMPORTED_MODULE_6__(fechaTer).year(), moment__WEBPACK_IMPORTED_MODULE_6__(fechaTer).month(), moment__WEBPACK_IMPORTED_MODULE_6__(fechaTer).date(), moment__WEBPACK_IMPORTED_MODULE_6__(fechaTer).hour(), moment__WEBPACK_IMPORTED_MODULE_6__(fechaTer).minute(), moment__WEBPACK_IMPORTED_MODULE_6__(fechaTer).second(), 0));
                var todoElDia = false; //definimos el titulo con el nombre diagnostico + articulo

                var titulo = _this3.arregloAlimentoEntregado[s].NombreUsuario + '|' + _this3.arregloAlimentoEntregado[s].NombreAlimento; //ahora creamos la entidad con estos valores

                var entidadAlimento = {
                  title: titulo,
                  startTime: ini,
                  endTime: ter,
                  allDay: todoElDia
                }; //ahora lo insertamos en nuestro arreglo

                _this3.arregloGeneral.push(entidadAlimento);
              }
            }
          }, function (err) {
            return console.error(err);
          }, function () {
            return console.log('get completed');
          }); //alimento futuro

          var repoAlimentoFuturo = this.httpClient.post(urlAlimentoFuturo, iJson, options);
          repoAlimentoFuturo.subscribe(function (data) {
            _this3.arregloAlimentofuturo = data.AlimentosFuturosUsp;

            if (data.RespuestaBase) {
              if (data.RespuestaBase.CodigoMensaje != 0) {
                _this3.arregloErrores.push(data.RespuestaBase);
              }
            } //procesar la data


            if (_this3.arregloAlimentofuturo) {
              for (var s in _this3.arregloAlimentofuturo) {
                //vamos creando una entidad genérica con los resultados
                var fechaIni = moment__WEBPACK_IMPORTED_MODULE_6__(_this3.arregloAlimentofuturo[s].FechaEntrega); //definimos la fecha de termino en una hora más de la de inicio

                var fechaTer = moment__WEBPACK_IMPORTED_MODULE_6__(fechaIni).add(1, 'hours');
                var ini = new Date(Date.UTC(moment__WEBPACK_IMPORTED_MODULE_6__(fechaIni).year(), moment__WEBPACK_IMPORTED_MODULE_6__(fechaIni).month(), moment__WEBPACK_IMPORTED_MODULE_6__(fechaIni).date(), moment__WEBPACK_IMPORTED_MODULE_6__(fechaIni).hour(), moment__WEBPACK_IMPORTED_MODULE_6__(fechaIni).minute(), moment__WEBPACK_IMPORTED_MODULE_6__(fechaIni).second(), 0));
                var ter = new Date(Date.UTC(moment__WEBPACK_IMPORTED_MODULE_6__(fechaTer).year(), moment__WEBPACK_IMPORTED_MODULE_6__(fechaTer).month(), moment__WEBPACK_IMPORTED_MODULE_6__(fechaTer).date(), moment__WEBPACK_IMPORTED_MODULE_6__(fechaTer).hour(), moment__WEBPACK_IMPORTED_MODULE_6__(fechaTer).minute(), moment__WEBPACK_IMPORTED_MODULE_6__(fechaTer).second(), 0));
                var todoElDia = false; //definimos el titulo con el nombre diagnostico + articulo

                var titulo = _this3.arregloAlimentofuturo[s].NombreUsuario + '|' + _this3.arregloAlimentofuturo[s].NombreAlimento; //ahora creamos la entidad con estos valores

                var entidadAlimento = {
                  title: titulo,
                  startTime: ini,
                  endTime: ter,
                  allDay: todoElDia
                }; //ahora lo insertamos en nuestro arreglo

                _this3.arregloGeneral.push(entidadAlimento);
              }
            }
          }, function (err) {
            return console.error(err);
          }, function () {
            return console.log('get completed');
          });
          return this.arregloGeneral;
        }
      }, {
        key: "getDiagnosticosByUspIdNative",
        value: function getDiagnosticosByUspIdNative(uspId) {
          var _this4 = this;

          var url = _environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].API_ENDPOINT + 'Diagnostico';
          var urlFarmacoPendiente = _environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].API_ENDPOINT + 'FarmacoPendiente';
          var urlVacunas = _environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].API_ENDPOINT + 'Vacuna';
          var urlFarmacoUso = _environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].API_ENDPOINT + 'FarmacoEnUso';
          var urlAlimentoEntregado = _environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].API_ENDPOINT + 'AlimentoEntregado';
          var urlAlimentoFuturo = _environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].API_ENDPOINT + 'AlimentoFuturo';
          var iJson = {
            UspId: uspId.toString()
          };
          var repos = this.http.post(url, iJson, {});
          repos.then(function (response) {
            var data = JSON.parse(response.data);
            _this4.arregloDiagnosticos = data.DiagnosticosUsp;

            if (data.RespuestaBase) {
              if (data.RespuestaBase.CodigoMensaje != 0) {
                _this4.arregloErrores.push(data.RespuestaBase);
              }
            } //procesar la data


            if (_this4.arregloDiagnosticos) {
              for (var s in _this4.arregloDiagnosticos) {
                //vamos creando una entidad genérica con los resultados
                var fechaIni = moment__WEBPACK_IMPORTED_MODULE_6__(_this4.arregloDiagnosticos[s].FechaHoraInicio); //definimos la fecha de termino en una hora más de la de inicio

                var fechaTer = moment__WEBPACK_IMPORTED_MODULE_6__(fechaIni).add(1, 'hours');
                var ini = new Date(Date.UTC(moment__WEBPACK_IMPORTED_MODULE_6__(fechaIni).year(), moment__WEBPACK_IMPORTED_MODULE_6__(fechaIni).month(), moment__WEBPACK_IMPORTED_MODULE_6__(fechaIni).date(), moment__WEBPACK_IMPORTED_MODULE_6__(fechaIni).hour(), moment__WEBPACK_IMPORTED_MODULE_6__(fechaIni).minute(), moment__WEBPACK_IMPORTED_MODULE_6__(fechaIni).second(), 0));
                var ter = new Date(Date.UTC(moment__WEBPACK_IMPORTED_MODULE_6__(fechaTer).year(), moment__WEBPACK_IMPORTED_MODULE_6__(fechaTer).month(), moment__WEBPACK_IMPORTED_MODULE_6__(fechaTer).date(), moment__WEBPACK_IMPORTED_MODULE_6__(fechaTer).hour(), moment__WEBPACK_IMPORTED_MODULE_6__(fechaTer).minute(), moment__WEBPACK_IMPORTED_MODULE_6__(fechaTer).second(), 0));
                var todoElDia = false; //definimos el titulo con el nombre TDA

                var titulo = _this4.arregloDiagnosticos[s].NombreUsuario + '|' + _this4.arregloDiagnosticos[s].NombreTDA; //ahora creamos la entidad con estos valores

                var entidadDiagnosticosUsp = {
                  title: titulo,
                  startTime: ini,
                  endTime: ter,
                  allDay: todoElDia
                }; //ahora lo insertamos en nuestro arreglo

                _this4.arregloGeneral.push(entidadDiagnosticosUsp);
              }
            }
          }); //farmacos pendientes

          var reposFar = this.http.post(urlFarmacoPendiente, iJson, {});
          reposFar.then(function (data) {
            var response = JSON.parse(data.data);
            _this4.arregloFarmacosPendientes = response.FarmacosPendientesUsp;

            if (response.RespuestaBase) {
              if (response.RespuestaBase.CodigoMensaje != 0) {
                _this4.arregloErrores.push(response.RespuestaBase);
              }
            } //procesar la data


            if (_this4.arregloFarmacosPendientes) {
              for (var s in _this4.arregloFarmacosPendientes) {
                //vamos creando una entidad genérica con los resultados
                var fechaIni = moment__WEBPACK_IMPORTED_MODULE_6__(_this4.arregloFarmacosPendientes[s].FechaEntrega); //definimos la fecha de termino en una hora más de la de inicio

                var fechaTer = moment__WEBPACK_IMPORTED_MODULE_6__(fechaIni).add(1, 'hours');
                var ini = new Date(Date.UTC(moment__WEBPACK_IMPORTED_MODULE_6__(fechaIni).year(), moment__WEBPACK_IMPORTED_MODULE_6__(fechaIni).month(), moment__WEBPACK_IMPORTED_MODULE_6__(fechaIni).date(), moment__WEBPACK_IMPORTED_MODULE_6__(fechaIni).hour(), moment__WEBPACK_IMPORTED_MODULE_6__(fechaIni).minute(), moment__WEBPACK_IMPORTED_MODULE_6__(fechaIni).second(), 0));
                var ter = new Date(Date.UTC(moment__WEBPACK_IMPORTED_MODULE_6__(fechaTer).year(), moment__WEBPACK_IMPORTED_MODULE_6__(fechaTer).month(), moment__WEBPACK_IMPORTED_MODULE_6__(fechaTer).date(), moment__WEBPACK_IMPORTED_MODULE_6__(fechaTer).hour(), moment__WEBPACK_IMPORTED_MODULE_6__(fechaTer).minute(), moment__WEBPACK_IMPORTED_MODULE_6__(fechaTer).second(), 0));
                var todoElDia = false; //definimos el titulo con el nombre diagnostico + articulo

                var titulo = _this4.arregloFarmacosPendientes[s].NombreUsuario + '|' + _this4.arregloFarmacosPendientes[s].Diagnostico + ' ' + _this4.arregloFarmacosPendientes[s].Articulo; //ahora creamos la entidad con estos valores

                var entidadFarmacosPendientes = {
                  title: titulo,
                  startTime: ini,
                  endTime: ter,
                  allDay: todoElDia
                }; //ahora lo insertamos en nuestro arreglo

                _this4.arregloGeneral.push(entidadFarmacosPendientes);
              }
            }
          }); //vacunas

          var reposVac = this.http.post(urlVacunas, iJson, {});
          reposVac.then(function (data) {
            var response = JSON.parse(data.data);
            _this4.arregloVacunas = response.VacunasUsp;

            if (response.RespuestaBase) {
              if (response.RespuestaBase.CodigoMensaje != 0) {
                _this4.arregloErrores.push(response.RespuestaBase);
              }
            } //procesar la data


            if (_this4.arregloVacunas) {
              for (var s in _this4.arregloVacunas) {
                //vamos creando una entidad genérica con los resultados
                var fechaIni = moment__WEBPACK_IMPORTED_MODULE_6__(_this4.arregloVacunas[s].FechaProximaDosis); //definimos la fecha de termino en una hora más de la de inicio

                var fechaTer = moment__WEBPACK_IMPORTED_MODULE_6__(fechaIni).add(1, 'hours');
                var ini = new Date(Date.UTC(moment__WEBPACK_IMPORTED_MODULE_6__(fechaIni).year(), moment__WEBPACK_IMPORTED_MODULE_6__(fechaIni).month(), moment__WEBPACK_IMPORTED_MODULE_6__(fechaIni).date(), moment__WEBPACK_IMPORTED_MODULE_6__(fechaIni).hour(), moment__WEBPACK_IMPORTED_MODULE_6__(fechaIni).minute(), moment__WEBPACK_IMPORTED_MODULE_6__(fechaIni).second(), 0));
                var ter = new Date(Date.UTC(moment__WEBPACK_IMPORTED_MODULE_6__(fechaTer).year(), moment__WEBPACK_IMPORTED_MODULE_6__(fechaTer).month(), moment__WEBPACK_IMPORTED_MODULE_6__(fechaTer).date(), moment__WEBPACK_IMPORTED_MODULE_6__(fechaTer).hour(), moment__WEBPACK_IMPORTED_MODULE_6__(fechaTer).minute(), moment__WEBPACK_IMPORTED_MODULE_6__(fechaTer).second(), 0));
                var todoElDia = false; //definimos el titulo con el nombre diagnostico + articulo

                var titulo = _this4.arregloVacunas[s].NombreUsuario + '|' + _this4.arregloVacunas[s].Descripcion + ', ' + _this4.arregloVacunas[s].DescripcionDosis; //ahora creamos la entidad con estos valores

                var entidadVacuna = {
                  title: titulo,
                  startTime: ini,
                  endTime: ter,
                  allDay: todoElDia
                }; //ahora lo insertamos en nuestro arreglo

                _this4.arregloGeneral.push(entidadVacuna);
              }
            }
          }); //farmacos en uso

          var repoFarUso = this.http.post(urlFarmacoUso, iJson, {});
          repoFarUso.then(function (data) {
            var response = JSON.parse(data.data);
            _this4.arregloFarmacosUso = response.FarmacosEnUsoUsp;

            if (response.RespuestaBase) {
              if (response.RespuestaBase.CodigoMensaje != 0) {
                _this4.arregloErrores.push(response.RespuestaBase);
              }
            } //procesar la data


            if (_this4.arregloFarmacosUso) {
              for (var s in _this4.arregloFarmacosUso) {
                //vamos creando una entidad genérica con los resultados
                var fechaIni = moment__WEBPACK_IMPORTED_MODULE_6__(_this4.arregloFarmacosUso[s].FechaEntrega); //definimos la fecha de termino en una hora más de la de inicio

                var fechaTer = moment__WEBPACK_IMPORTED_MODULE_6__(fechaIni).add(1, 'hours');
                var ini = new Date(Date.UTC(moment__WEBPACK_IMPORTED_MODULE_6__(fechaIni).year(), moment__WEBPACK_IMPORTED_MODULE_6__(fechaIni).month(), moment__WEBPACK_IMPORTED_MODULE_6__(fechaIni).date(), moment__WEBPACK_IMPORTED_MODULE_6__(fechaIni).hour(), moment__WEBPACK_IMPORTED_MODULE_6__(fechaIni).minute(), moment__WEBPACK_IMPORTED_MODULE_6__(fechaIni).second(), 0));
                var ter = new Date(Date.UTC(moment__WEBPACK_IMPORTED_MODULE_6__(fechaTer).year(), moment__WEBPACK_IMPORTED_MODULE_6__(fechaTer).month(), moment__WEBPACK_IMPORTED_MODULE_6__(fechaTer).date(), moment__WEBPACK_IMPORTED_MODULE_6__(fechaTer).hour(), moment__WEBPACK_IMPORTED_MODULE_6__(fechaTer).minute(), moment__WEBPACK_IMPORTED_MODULE_6__(fechaTer).second(), 0));
                var todoElDia = false; //definimos el titulo con el nombre diagnostico + articulo

                var titulo = _this4.arregloFarmacosUso[s].NombreUsuario + '|' + _this4.arregloFarmacosUso[s].Descripcion; //ahora creamos la entidad con estos valores

                var entidadFarUso = {
                  title: titulo,
                  startTime: ini,
                  endTime: ter,
                  allDay: todoElDia
                }; //ahora lo insertamos en nuestro arreglo

                _this4.arregloGeneral.push(entidadFarUso);
              }
            }
          }); //alimento entregado

          var repoAlimentoEntregado = this.http.post(urlAlimentoEntregado, iJson, {});
          repoAlimentoEntregado.then(function (data) {
            var response = JSON.parse(data.data);
            _this4.arregloAlimentoEntregado = response.AlimentosEntregadosUsp;

            if (response.RespuestaBase) {
              if (response.RespuestaBase.CodigoMensaje != 0) {
                _this4.arregloErrores.push(response.RespuestaBase);
              }
            } //procesar la data


            if (_this4.arregloAlimentoEntregado) {
              for (var s in _this4.arregloAlimentoEntregado) {
                //vamos creando una entidad genérica con los resultados
                var fechaIni = moment__WEBPACK_IMPORTED_MODULE_6__(_this4.arregloAlimentoEntregado[s].FechaEntrega); //definimos la fecha de termino en una hora más de la de inicio

                var fechaTer = moment__WEBPACK_IMPORTED_MODULE_6__(fechaIni).add(1, 'hours');
                var ini = new Date(Date.UTC(moment__WEBPACK_IMPORTED_MODULE_6__(fechaIni).year(), moment__WEBPACK_IMPORTED_MODULE_6__(fechaIni).month(), moment__WEBPACK_IMPORTED_MODULE_6__(fechaIni).date(), moment__WEBPACK_IMPORTED_MODULE_6__(fechaIni).hour(), moment__WEBPACK_IMPORTED_MODULE_6__(fechaIni).minute(), moment__WEBPACK_IMPORTED_MODULE_6__(fechaIni).second(), 0));
                var ter = new Date(Date.UTC(moment__WEBPACK_IMPORTED_MODULE_6__(fechaTer).year(), moment__WEBPACK_IMPORTED_MODULE_6__(fechaTer).month(), moment__WEBPACK_IMPORTED_MODULE_6__(fechaTer).date(), moment__WEBPACK_IMPORTED_MODULE_6__(fechaTer).hour(), moment__WEBPACK_IMPORTED_MODULE_6__(fechaTer).minute(), moment__WEBPACK_IMPORTED_MODULE_6__(fechaTer).second(), 0));
                var todoElDia = false; //definimos el titulo con el nombre diagnostico + articulo

                var titulo = _this4.arregloAlimentoEntregado[s].NombreUsuario + '|' + _this4.arregloAlimentoEntregado[s].NombreAlimento; //ahora creamos la entidad con estos valores

                var entidadAlimento = {
                  title: titulo,
                  startTime: ini,
                  endTime: ter,
                  allDay: todoElDia
                }; //ahora lo insertamos en nuestro arreglo

                _this4.arregloGeneral.push(entidadAlimento);
              }
            }
          }); //alimento futuro

          var repoAlimentoFuturo = this.http.post(urlAlimentoFuturo, iJson, {});
          repoAlimentoFuturo.then(function (data) {
            var response = JSON.parse(data.data);
            _this4.arregloAlimentofuturo = response.AlimentosFuturosUsp;

            if (response.RespuestaBase) {
              if (response.RespuestaBase.CodigoMensaje != 0) {
                _this4.arregloErrores.push(response.RespuestaBase);
              }
            } //procesar la data


            if (_this4.arregloAlimentofuturo) {
              for (var s in _this4.arregloAlimentofuturo) {
                //vamos creando una entidad genérica con los resultados
                var fechaIni = moment__WEBPACK_IMPORTED_MODULE_6__(_this4.arregloAlimentofuturo[s].FechaEntrega); //definimos la fecha de termino en una hora más de la de inicio

                var fechaTer = moment__WEBPACK_IMPORTED_MODULE_6__(fechaIni).add(1, 'hours');
                var ini = new Date(Date.UTC(moment__WEBPACK_IMPORTED_MODULE_6__(fechaIni).year(), moment__WEBPACK_IMPORTED_MODULE_6__(fechaIni).month(), moment__WEBPACK_IMPORTED_MODULE_6__(fechaIni).date(), moment__WEBPACK_IMPORTED_MODULE_6__(fechaIni).hour(), moment__WEBPACK_IMPORTED_MODULE_6__(fechaIni).minute(), moment__WEBPACK_IMPORTED_MODULE_6__(fechaIni).second(), 0));
                var ter = new Date(Date.UTC(moment__WEBPACK_IMPORTED_MODULE_6__(fechaTer).year(), moment__WEBPACK_IMPORTED_MODULE_6__(fechaTer).month(), moment__WEBPACK_IMPORTED_MODULE_6__(fechaTer).date(), moment__WEBPACK_IMPORTED_MODULE_6__(fechaTer).hour(), moment__WEBPACK_IMPORTED_MODULE_6__(fechaTer).minute(), moment__WEBPACK_IMPORTED_MODULE_6__(fechaTer).second(), 0));
                var todoElDia = false; //definimos el titulo con el nombre diagnostico + articulo

                var titulo = _this4.arregloAlimentofuturo[s].NombreUsuario + '|' + _this4.arregloAlimentofuturo[s].NombreAlimento; //ahora creamos la entidad con estos valores

                var entidadAlimento = {
                  title: titulo,
                  startTime: ini,
                  endTime: ter,
                  allDay: todoElDia
                }; //ahora lo insertamos en nuestro arreglo

                _this4.arregloGeneral.push(entidadAlimento);
              }
            }
          });
          return this.arregloGeneral;
        } //get cupos
        //http://localhost:27563/api/ObtenerDisponibilidad?start=2020-11-10T00:00:00-04:00&end=2020-11-10T23:59:59-04:00&organization=199991&patient=17000904-5&serviceType=346

      }, {
        key: "getDisponibilidad",
        value: function getDisponibilidad(start, end, organization, patient, serviceType, status, count, operacion, nodId) {
          var urlCorta = _environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].API_ENDPOINT + 'ObtenerDisponibilidad' + '?start=' + start + '&end=' + end + '&organization=' + organization + '&patient=' + patient + '&serviceType=' + serviceType + '&status=' + status + '&count=' + count + '&operacion=' + operacion + '&nodId=' + nodId;
          var data = this.httpClient.get(urlCorta, {});
          return data;
        }
      }, {
        key: "getDisponibilidadNative",
        value: function getDisponibilidadNative(start, end, organization, patient, serviceType, status, count, operacion, nodId) {
          var urlCorta = _environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].API_ENDPOINT + 'ObtenerDisponibilidad' + '?start=' + start + '&end=' + end + '&organization=' + organization + '&patient=' + patient + '&serviceType=' + serviceType + '&status=' + status + '&count=' + count + '&operacion=' + operacion + '&nodId=' + nodId;
          var data = this.http.get(urlCorta, {}, {});
          return data;
        }
        /*     getDisponibilidadApi(start, end, organization, patient, serviceType, status, count, operacion, nodId, token){
                let urlCorta = environment.API_ENDPOINT + 'ObtenerDisponibilidadApi' +'?start=' + start + '&end=' + end + '&organization='+ organization + '&patient=' + patient + '&serviceType='+ serviceType + '&status=' + status + '&count=' + count + '&operacion=' + operacion + '&nodId=' + nodId + '&token=' + token;
                let data = this.httpClient.get(urlCorta,{});
                return data;
            }
            getDisponibilidadApiNative(start, end, organization, patient, serviceType, status, count, operacion, nodId, token){
                let urlCorta = environment.API_ENDPOINT+ 'ObtenerDisponibilidadApi' +'?start=' + start + '&end=' + end + '&organization='+ organization + '&patient=' + patient + '&serviceType='+ serviceType + '&status=' + status + '&count=' + count + '&operacion=' + operacion + '&nodId=' + nodId + '&token=' + token;
                let data = this.http.get(urlCorta, {}, {});
                return data;
            } */

      }, {
        key: "getDisponibilidadApi",
        value: function getDisponibilidadApi(start, end, organization, patient, serviceType, status, count, operacion, nodId) {
          var urlCorta = _environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].API_ENDPOINT + 'ObtenerDisponibilidadApi' + '?start=' + start + '&end=' + end + '&organization=' + organization + '&patient=' + patient + '&serviceType=' + serviceType + '&status=' + status + '&count=' + count + '&operacion=' + operacion + '&nodId=' + nodId;
          var data = this.httpClient.get(urlCorta, {});
          return data;
        }
      }, {
        key: "getDisponibilidadApiNative",
        value: function getDisponibilidadApiNative(start, end, organization, patient, serviceType, status, count, operacion, nodId) {
          var urlCorta = _environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].API_ENDPOINT + 'ObtenerDisponibilidadApi' + '?start=' + start + '&end=' + end + '&organization=' + organization + '&patient=' + patient + '&serviceType=' + serviceType + '&status=' + status + '&count=' + count + '&operacion=' + operacion + '&nodId=' + nodId;
          var data = this.http.get(urlCorta, {}, {});
          return data;
        } //las operaciones pueden ser
        //booked reservar cita
        //confirmed confirmar cita
        //cancelled cancelar cita
        //noshow informar que el paciente no asistió a la cita
        //fulfilled informar que la cita se llevo a cabo

      }, {
        key: "getOperacionCita",
        value: function getOperacionCita(idCita, idPaciente, operacion) {
          var urlCorta = _environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].API_ENDPOINT + 'ReservarCita' + '?idAppoinment=' + idCita + '&patient=' + idPaciente + '&operacion=' + operacion;
          var data = this.httpClient.get(urlCorta, {});
          return data;
        }
      }, {
        key: "getOperacionCitaNative",
        value: function getOperacionCitaNative(idCita, idPaciente, operacion) {
          var urlCorta = _environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].API_ENDPOINT + 'ReservarCita' + '?idAppoinment=' + idCita + '&patient=' + idPaciente + '&operacion=' + operacion;
          var data = this.http.get(urlCorta, {}, {});
          return data;
        }
      }, {
        key: "getCitasWeb",
        value: function getCitasWeb(start, end, estado, idPaciente) {
          var urlCorta = _environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].API_ENDPOINT + 'CitaWeb' + '?start=' + start + '&end=' + end + '&estado=' + estado + '&idPaciente=' + idPaciente;
          var data = this.httpClient.get(urlCorta, {});
          return data;
        }
      }, {
        key: "getCitasWebNative",
        value: function getCitasWebNative(start, end, estado, idPaciente) {
          var urlCorta = _environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].API_ENDPOINT + 'CitaWeb' + '?start=' + start + '&end=' + end + '&estado=' + estado + '&idPaciente=' + idPaciente;
          var data = this.http.get(urlCorta, {}, {});
          return data;
        }
      }, {
        key: "postObtenerTokenManagement",
        value: function postObtenerTokenManagement() {
          var url = _environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].API_ENDPOINT + 'ObtenerDisponibilidadApi';
          var httpHeaders = new _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpHeaders"]({
            'Content-Type': 'application/json',
            'Cache-Control': 'no-cache'
          });
          httpHeaders.set('Access-Control-Allow-Origin', '*');
          httpHeaders.set("Access-Control-Allow-Methods", "GET, POST, OPTIONS, PUT, DELETE");
          httpHeaders.set("Access-Control-Allow-Headers", "*");
          var options = {
            headers: httpHeaders
          };
          var data = this.httpClient.post(url, {}, options);
          return data;
        }
      }, {
        key: "postObtenerTokenManagementNative",
        value: function postObtenerTokenManagementNative() {
          //realizar la llamada post nativa
          var headers = new Headers();
          var url = _environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].API_ENDPOINT + 'ObtenerDisponibilidadApi';
          this.http.setDataSerializer('json');
          return this.http.post(url, {}, {});
        }
      }, {
        key: "entregaPorMesNuevoApi",
        value: function entregaPorMesNuevoApi(uspId, idRyf, nodId, numeroMes, annoConsulta) {
          var body = JSON.stringify({
            UspId: uspId.toString(),
            IdRyf: idRyf.toString(),
            NodId: nodId.toString(),
            NumeroMes: numeroMes.toString(),
            AnnoConsulta: annoConsulta.toString()
          });
          var url = _environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].API_ENDPOINT + 'MesNuevoApi';
          var httpHeaders = new _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpHeaders"]({
            'Content-Type': 'application/json',
            'Cache-Control': 'no-cache'
          });
          httpHeaders.set('Access-Control-Allow-Origin', '*');
          httpHeaders.set("Access-Control-Allow-Methods", "GET, POST, OPTIONS, PUT, DELETE");
          httpHeaders.set("Access-Control-Allow-Headers", "*");
          var options = {
            headers: httpHeaders
          };
          var data = this.httpClient.post(url, body, options);
          return data;
        }
      }, {
        key: "entregaPorMesNuevoApiNative",
        value: function entregaPorMesNuevoApiNative(uspId, idRyf, nodId, numeroMes, annoConsulta) {
          //realizar la llamada post nativa
          var headers = new Headers();
          var body = {
            "UspId": uspId.toString(),
            "IdRyf": idRyf.toString(),
            "NodId": nodId.toString(),
            "NumeroMes": numeroMes.toString(),
            "AnnoConsulta": annoConsulta.toString()
          };
          var url = _environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].API_ENDPOINT + 'MesNuevoApi';
          this.http.setDataSerializer('json');
          return this.http.post(url, body, {});
        } //estos metodos entregan los eventos para las notificaciones

      }, {
        key: "entregaPorMesNuevoLivianoApi",
        value: function entregaPorMesNuevoLivianoApi(uspId, idRyf, nodId, numeroMes, annoConsulta) {
          var body = JSON.stringify({
            UspId: uspId.toString(),
            IdRyf: idRyf.toString(),
            NodId: nodId.toString(),
            NumeroMes: numeroMes.toString(),
            AnnoConsulta: annoConsulta.toString()
          });
          var url = _environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].API_ENDPOINT + 'MesNuevoLivianoApi';
          var httpHeaders = new _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpHeaders"]({
            'Content-Type': 'application/json',
            'Cache-Control': 'no-cache'
          });
          httpHeaders.set('Access-Control-Allow-Origin', '*');
          httpHeaders.set("Access-Control-Allow-Methods", "GET, POST, OPTIONS, PUT, DELETE");
          httpHeaders.set("Access-Control-Allow-Headers", "*");
          var options = {
            headers: httpHeaders
          };
          var data = this.httpClient.post(url, body, options);
          return data;
        }
      }, {
        key: "entregaPorMesNuevoLivianoApiNative",
        value: function entregaPorMesNuevoLivianoApiNative(uspId, idRyf, nodId, numeroMes, annoConsulta) {
          //realizar la llamada post nativa
          var headers = new Headers();
          var body = {
            "UspId": uspId.toString(),
            "IdRyf": idRyf.toString(),
            "NodId": nodId.toString(),
            "NumeroMes": numeroMes.toString(),
            "AnnoConsulta": annoConsulta.toString()
          };
          var url = _environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].API_ENDPOINT + 'MesNuevoLivianoApi';
          this.http.setDataSerializer('json');
          return this.http.post(url, body, {});
        }
      }]);

      return ServicioCitas;
    }();

    ServicioCitas.ctorParameters = function () {
      return [{
        type: _ionic_native_http_ngx__WEBPACK_IMPORTED_MODULE_2__["HTTP"]
      }, {
        type: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"]
      }, {
        type: _ServicioUtiles__WEBPACK_IMPORTED_MODULE_5__["ServicioUtiles"]
      }];
    };

    ServicioCitas = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])()], ServicioCitas);
    /***/
  },

  /***/
  "./src/app/services/ServicioClaveUnica.ts":
  /*!************************************************!*\
    !*** ./src/app/services/ServicioClaveUnica.ts ***!
    \************************************************/

  /*! exports provided: ServicioClaveUnica */

  /***/
  function srcAppServicesServicioClaveUnicaTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ServicioClaveUnica", function () {
      return ServicioClaveUnica;
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


    var _ionic_native_http_ngx__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @ionic-native/http/ngx */
    "./node_modules/@ionic-native/http/__ivy_ngcc__/ngx/index.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
    /* harmony import */


    var _environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../../environments/environment */
    "./src/environments/environment.ts");
    /* harmony import */


    var _ServicioUtiles__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./ServicioUtiles */
    "./src/app/services/ServicioUtiles.ts");

    var ServicioClaveUnica = /*#__PURE__*/function () {
      function ServicioClaveUnica(http, httpClient, utiles) {
        _classCallCheck(this, ServicioClaveUnica);

        this.http = http;
        this.httpClient = httpClient;
        this.utiles = utiles;
      } //Obtiene el formulario de login


      _createClass(ServicioClaveUnica, [{
        key: "getLogin",
        value: function getLogin() {
          var urlCorta = _environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].API_ENDPOINT + 'ClaveUnicaBefore';
          var data = this.httpClient.get(urlCorta, {
            responseType: 'text'
          });
          return data;
        } //obtiene el formulario de login nativo

      }, {
        key: "getLoginNative",
        value: function getLoginNative() {
          var urlCorta = _environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].API_ENDPOINT + 'ClaveUnicaBefore';
          var data = this.http.get(urlCorta, {}, {});
          return data;
        }
      }, {
        key: "postConfiguracionClaveUnica",
        value: function postConfiguracionClaveUnica(esProduccion) {
          var body = JSON.stringify({
            EsProduccion: esProduccion
          });
          var url = _environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].API_ENDPOINT + 'ConfiguracionClaveUnica';
          var httpHeaders = new _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpHeaders"]({
            'Content-Type': 'application/json',
            'Cache-Control': 'no-cache'
          });
          httpHeaders.set('Access-Control-Allow-Origin', '*');
          httpHeaders.set("Access-Control-Allow-Methods", "GET, POST, OPTIONS, PUT, DELETE");
          httpHeaders.set("Access-Control-Allow-Headers", "*");
          var options = {
            headers: httpHeaders
          };
          var data = this.httpClient.post(url, body, options);
          return data;
        }
      }, {
        key: "postConfiguracionClaveUnicaNative",
        value: function postConfiguracionClaveUnicaNative(esProduccion) {
          //realizar la llamada post nativa
          var headers = new Headers();
          var body = {
            "EsProduccion": esProduccion
          };
          var url = _environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].API_ENDPOINT + 'ConfiguracionClaveUnica';
          this.http.setDataSerializer('json');
          return this.http.post(url, body, {});
        }
      }]);

      return ServicioClaveUnica;
    }();

    ServicioClaveUnica.ctorParameters = function () {
      return [{
        type: _ionic_native_http_ngx__WEBPACK_IMPORTED_MODULE_2__["HTTP"]
      }, {
        type: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"]
      }, {
        type: _ServicioUtiles__WEBPACK_IMPORTED_MODULE_5__["ServicioUtiles"]
      }];
    };

    ServicioClaveUnica = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])()], ServicioClaveUnica);
    /***/
  },

  /***/
  "./src/app/services/ServicioFCM.ts":
  /*!*****************************************!*\
    !*** ./src/app/services/ServicioFCM.ts ***!
    \*****************************************/

  /*! exports provided: ServicioFCM */

  /***/
  function srcAppServicesServicioFCMTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ServicioFCM", function () {
      return ServicioFCM;
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


    var moment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! moment */
    "./node_modules/moment/moment.js");
    /* harmony import */


    var moment__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_2__);
    /* harmony import */


    var _ServicioUtiles__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./ServicioUtiles */
    "./src/app/services/ServicioUtiles.ts");
    /* harmony import */


    var _ServicioNotificaciones__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./ServicioNotificaciones */
    "./src/app/services/ServicioNotificaciones.ts");
    /* harmony import */


    var _angular_fire_messaging__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/fire/messaging */
    "./node_modules/@angular/fire/__ivy_ngcc__/fesm2015/angular-fire-messaging.js");
    /* harmony import */


    var _ionic_native_firebase_messaging_ngx__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @ionic-native/firebase-messaging/ngx */
    "./node_modules/@ionic-native/firebase-messaging/__ivy_ngcc__/ngx/index.js");
    /* import { FCM } from 'cordova-plugin-fcm-with-dependecy-updated/ionic/ngx'; */
    //fcm native


    var ServicioFCM = /*#__PURE__*/function () {
      function ServicioFCM(
      /* public fcm: FCM,  */
      utiles, fm, firebaseMessaging, notificaciones) {
        _classCallCheck(this, ServicioFCM);

        this.utiles = utiles;
        this.fm = fm;
        this.firebaseMessaging = firebaseMessaging;
        this.notificaciones = notificaciones;
      } //vamos a hacer que el token dure 3 días


      _createClass(ServicioFCM, [{
        key: "verificaTokenSession",
        value: function verificaTokenSession() {
          var retorno = false;
          var fechaActual = moment__WEBPACK_IMPORTED_MODULE_2__();

          if (localStorage.getItem('TOKEN_FIREBASE_MESSAGE') && localStorage.getItem('DATE_TOKEN_FIREBASE_MESSAGE')) {
            //tiene token
            var fechaToken = moment__WEBPACK_IMPORTED_MODULE_2__(localStorage.getItem('DATE_TOKEN_FIREBASE_MESSAGE'));

            if (fechaToken.isValid()) {
              var difDays = fechaActual.diff(fechaToken, 'days');

              if (difDays <= 3) {
                retorno = true;
              }
            }
          }

          return retorno;
        }
      }, {
        key: "initFCM",
        value: function initFCM() {
          if (this.utiles.isAppOnDevice()) {
            //native
            this.firebaseMessaging.requestPermission({
              forceShow: true
            }).then(function () {
              console.log('push permitido');
            }); //pasaremos apn-string

            if (this.verificaTokenSession() == false) {
              this.firebaseMessaging.getToken().then(function (token) {
                console.log('token native ' + token);
                var fecha = moment__WEBPACK_IMPORTED_MODULE_2__().format('YYYY-MM-DD HH:mm');
                localStorage.setItem('TOKEN_FIREBASE_MESSAGE', token);
                localStorage.setItem('DATE_TOKEN_FIREBASE_MESSAGE', fecha);
              });
            } else {
              console.log('token native ' + localStorage.getItem('TOKEN_FIREBASE_MESSAGE'));
            }
          } else {
            //web
            if (this.verificaTokenSession() == false) {
              this.fm.getToken.subscribe(function (token) {
                console.log('token WEB ' + token);
                var fecha = moment__WEBPACK_IMPORTED_MODULE_2__().format('YYYY-MM-DD HH:mm');
                localStorage.setItem('TOKEN_FIREBASE_MESSAGE', token);
                localStorage.setItem('DATE_TOKEN_FIREBASE_MESSAGE', fecha);
              });
            } else {
              console.log('token WEB ' + localStorage.getItem('TOKEN_FIREBASE_MESSAGE'));
            }
          }
        }
      }, {
        key: "receiveMessage",
        value: function receiveMessage(esNotificacion) {
          var _this5 = this;

          if (this.verificaTokenSession()) {
            if (this.utiles.isAppOnDevice()) {
              //nativo
              if (esNotificacion) {
                //primer plano
                this.firebaseMessaging.onMessage().subscribe(function (payload) {
                  console.log(payload);
                });
                this.firebaseMessaging.onBackgroundMessage().subscribe(function (payload) {
                  console.log(payload);
                });
              }
            } else {
              if (esNotificacion) {
                //aca me recibe cuando esta solo en segundo plano
                this.fm.messages.subscribe(function (payload) {
                  console.log(payload);
                  console.log(payload.notification); //aca crear mensaje web con toast

                  _this5.notificaciones.crearNotificacion(payload.notification.tag, payload.notification.title, payload.notification.body);
                });
                /*                     this.fm.onBackgroundMessage(function(payload:any){
                                        this.notificaciones.crearNotificacion(payload.notification.tag, payload.notification.title, payload.notification.body);
                                    }) */
              }
            }
          }
        }
      }]);

      return ServicioFCM;
    }();

    ServicioFCM.ctorParameters = function () {
      return [{
        type: _ServicioUtiles__WEBPACK_IMPORTED_MODULE_3__["ServicioUtiles"]
      }, {
        type: _angular_fire_messaging__WEBPACK_IMPORTED_MODULE_5__["AngularFireMessaging"]
      }, {
        type: _ionic_native_firebase_messaging_ngx__WEBPACK_IMPORTED_MODULE_6__["FirebaseMessaging"]
      }, {
        type: _ServicioNotificaciones__WEBPACK_IMPORTED_MODULE_4__["ServicioNotificaciones"]
      }];
    };

    ServicioFCM = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])()], ServicioFCM);
    /***/
  },

  /***/
  "./src/app/services/ServicioGeo.ts":
  /*!*****************************************!*\
    !*** ./src/app/services/ServicioGeo.ts ***!
    \*****************************************/

  /*! exports provided: ServicioGeo */

  /***/
  function srcAppServicesServicioGeoTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ServicioGeo", function () {
      return ServicioGeo;
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


    var _ionic_native_http_ngx__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @ionic-native/http/ngx */
    "./node_modules/@ionic-native/http/__ivy_ngcc__/ngx/index.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
    /* harmony import */


    var _environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../../environments/environment */
    "./src/environments/environment.ts"); //import { Http, Headers } from '@angular/';


    var ServicioGeo = /*#__PURE__*/function () {
      function ServicioGeo(http, httpClient) {
        _classCallCheck(this, ServicioGeo);

        this.http = http;
        this.httpClient = httpClient;
      }

      _createClass(ServicioGeo, [{
        key: "getMapaNative",
        value: function getMapaNative(lat, lon) {
          //ojo, esta llamada que indica 'ROOFTOP' y result_type=street_address retorna un punto exacto
          //para hacer que retorne un punto aproximado debe idicar solo location_type=APROXIMATE
          //Ver la siguiente url de la documentación https://developers.google.com/maps/documentation/geocoding/intro
          //let urlCorta = 'https://maps.googleapis.com/maps/api/geocode/json?latlng=' + lat + ',' + lon +'&location_type=ROOFTOP&result_type=street_address&key=' + environment.API_KEY_MAPA;
          var urlCorta = 'https://maps.googleapis.com/maps/api/geocode/json?latlng=' + lat + ',' + lon + '&location_type=APPROXIMATE&key=' + _environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].API_KEY_MAPA;
          var data = this.http.get(urlCorta, {}, {});
          return data;
        }
      }, {
        key: "getMapaWeb",
        value: function getMapaWeb(lat, lon) {
          //https://maps.googleapis.com/maps/api/geocode/json?latlng=40.714224,-73.961452&key=YOUR_API_KEY
          //&location_type=ROOFTOP&result_type=street_address
          //let url corta
          //let urlCorta = 'https://maps.googleapis.com/maps/api/geocode/json?latlng=' + lat + ',' + lon +'&location_type=ROOFTOP&result_type=street_address&key=' + environment.API_KEY_MAPA;
          //let url = 'https://maps.googleapis.com/maps/api/geocode/json?latlng=' + lat + ',' + lon +'&key=' + environment.API_KEY_MAPA;
          var urlCorta = 'https://maps.googleapis.com/maps/api/geocode/json?latlng=' + lat + ',' + lon + '&location_type=APPROXIMATE&key=' + _environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].API_KEY_MAPA;
          var data = this.httpClient.get(urlCorta, {});
          return data;
        }
      }, {
        key: "getRegistroApp",
        value: function getRegistroApp(idDispositivo) {
          var url = _environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].API_ENDPOINT + 'ObtenerRegistroApp?IdDispositivo=' + idDispositivo;
          var data = this.httpClient.get(url, {});
          return data;
        }
      }, {
        key: "getRegistroAppNative",
        value: function getRegistroAppNative(idDispositivo) {
          var url = _environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].API_ENDPOINT + 'ObtenerRegistroApp?IdDispositivo=' + idDispositivo;
          var data = this.http.get(url, {}, {});
          return data;
        } //ya viene en formato objeto

      }, {
        key: "postRegistro",
        value: function postRegistro(objetoRegistro) {
          //realizar la llamada post a la api
          var body = JSON.stringify(objetoRegistro);
          var url = _environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].API_ENDPOINT + 'RegistroApp';
          var httpHeaders = new _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpHeaders"]({
            'Content-Type': 'application/json',
            'Cache-Control': 'no-cache'
          });
          httpHeaders.set('Access-Control-Allow-Origin', '*');
          httpHeaders.set("Access-Control-Allow-Methods", "GET, POST, OPTIONS, PUT, DELETE");
          httpHeaders.set("Access-Control-Allow-Headers", "*");
          var options = {
            headers: httpHeaders
          };
          var data = this.httpClient.post(url, body, options);
          return data;
        }
      }, {
        key: "postRegistroNative",
        value: function postRegistroNative(objetoRegistro) {
          //realizar la llamada post a la api
          var headers = new Headers();
          var body = objetoRegistro;
          var url = _environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].API_ENDPOINT + 'RegistroApp';
          this.http.setDataSerializer('json');
          return this.http.post(url, body, {});
        } //registro familia

      }, {
        key: "postRegistroFamilia",
        value: function postRegistroFamilia(objetoRegistro) {
          //realizar la llamada post a la api
          var body = JSON.stringify(objetoRegistro);
          var url = _environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].API_ENDPOINT + 'RegistroAppFamilia';
          var httpHeaders = new _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpHeaders"]({
            'Content-Type': 'application/json',
            'Cache-Control': 'no-cache'
          });
          httpHeaders.set('Access-Control-Allow-Origin', '*');
          httpHeaders.set("Access-Control-Allow-Methods", "GET, POST, OPTIONS, PUT, DELETE");
          httpHeaders.set("Access-Control-Allow-Headers", "*");
          var options = {
            headers: httpHeaders
          };
          var data = this.httpClient.post(url, body, options);
          return data;
        }
      }, {
        key: "postRegistroFamiliaNative",
        value: function postRegistroFamiliaNative(objetoRegistro) {
          //realizar la llamada post a la api
          var headers = new Headers();
          var body = objetoRegistro;
          var url = _environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].API_ENDPOINT + 'RegistroAppFamilia';
          this.http.setDataSerializer('json');
          return this.http.post(url, body, {});
        }
      }, {
        key: "getRegistroAppRun",
        value: function getRegistroAppRun(run, idDispositivo) {
          var url = _environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].API_ENDPOINT + 'RegistroApp?Run=' + run + '&IdDispositivo=' + idDispositivo;
          var data = this.httpClient.get(url, {});
          return data;
        }
      }, {
        key: "getRegistroAppNativeRun",
        value: function getRegistroAppNativeRun(run, idDispositivo) {
          var url = _environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].API_ENDPOINT + 'RegistroApp?Run=' + run + '&IdDispositivo=' + idDispositivo;
          var data = this.http.get(url, {}, {});
          return data;
        }
      }, {
        key: "getRegistroAppCorreoPassword",
        value: function getRegistroAppCorreoPassword(correo, password) {
          var url = _environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].API_ENDPOINT + 'RegistroAppFamilia?Correo=' + correo + '&Password=' + password;
          var data = this.httpClient.get(url, {});
          return data;
        }
      }, {
        key: "getRegistroAppNativeCorreoPassword",
        value: function getRegistroAppNativeCorreoPassword(correo, password) {
          var url = _environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].API_ENDPOINT + 'RegistroAppFamilia?Correo=' + correo + '&Password=' + password;
          var data = this.http.get(url, {}, {});
          return data;
        }
      }, {
        key: "verificaEnrolamiento",
        value: function verificaEnrolamiento(run) {
          var url = _environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].API_ENDPOINT + 'RegistroAppFamilia?Run=' + run;
          var data = this.httpClient.get(url, {});
          return data;
        }
      }, {
        key: "verificaEnrolamientoNative",
        value: function verificaEnrolamientoNative(run) {
          var url = _environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].API_ENDPOINT + 'RegistroAppFamilia?Run=' + run;
          var data = this.http.get(url, {}, {});
          return data;
        }
      }, {
        key: "postRecuperarClave",
        value: function postRecuperarClave(correo) {
          var body = JSON.stringify({
            Correo: correo
          });
          var url = _environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].API_ENDPOINT + 'RecuperarClave';
          var httpHeaders = new _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpHeaders"]({
            'Content-Type': 'application/json',
            'Cache-Control': 'no-cache'
          });
          httpHeaders.set('Access-Control-Allow-Origin', '*');
          httpHeaders.set("Access-Control-Allow-Methods", "GET, POST, OPTIONS, PUT, DELETE");
          httpHeaders.set("Access-Control-Allow-Headers", "*");
          var options = {
            headers: httpHeaders
          };
          var data = this.httpClient.post(url, body, options);
          return data;
        }
      }, {
        key: "postRecuperarClaveNative",
        value: function postRecuperarClaveNative(correo) {
          //realizar la llamada post nativa
          var headers = new Headers();
          var body = {
            "Correo": correo
          };
          var url = _environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].API_ENDPOINT + 'RecuperarClave';
          this.http.setDataSerializer('json');
          return this.http.post(url, body, {});
        } //validacion clave unica

      }, {
        key: "getValidacionCU",
        value: function getValidacionCU(run, state) {
          var url = _environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].API_ENDPOINT + 'RegistroClaveUnica?Run=' + run + '&State=' + state;
          var data = this.httpClient.get(url, {});
          return data;
        }
      }, {
        key: "getValidacionCUNative",
        value: function getValidacionCUNative(run, state) {
          var url = _environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].API_ENDPOINT + 'RegistroClaveUnica?Run=' + run + '&State=' + state;
          var data = this.http.get(url, {}, {});
          return data;
        }
      }, {
        key: "postValidacionClaveUnica",
        value: function postValidacionClaveUnica(run, state) {
          var body = JSON.stringify({
            Run: run,
            State: state
          });
          var url = _environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].API_ENDPOINT + 'RegistroClaveUnica';
          var httpHeaders = new _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpHeaders"]({
            'Content-Type': 'application/json',
            'Cache-Control': 'no-cache'
          });
          httpHeaders.set('Access-Control-Allow-Origin', '*');
          httpHeaders.set("Access-Control-Allow-Methods", "GET, POST, OPTIONS, PUT, DELETE");
          httpHeaders.set("Access-Control-Allow-Headers", "*");
          var options = {
            headers: httpHeaders
          };
          var data = this.httpClient.post(url, body, options);
          return data;
        }
      }, {
        key: "postValidacionClaveUnicaNative",
        value: function postValidacionClaveUnicaNative(run, state) {
          //realizar la llamada post nativa
          var headers = new Headers();
          var body = {
            "Run": run,
            "State": state
          };
          var url = _environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].API_ENDPOINT + 'RegistroClaveUnica';
          this.http.setDataSerializer('json');
          return this.http.post(url, body, {});
        }
      }, {
        key: "postValidarCorreo",
        value: function postValidarCorreo(correo) {
          var body = JSON.stringify({
            Correo: correo
          });
          var url = _environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].API_ENDPOINT + 'ValidaCorreo';
          var httpHeaders = new _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpHeaders"]({
            'Content-Type': 'application/json',
            'Cache-Control': 'no-cache'
          });
          httpHeaders.set('Access-Control-Allow-Origin', '*');
          httpHeaders.set("Access-Control-Allow-Methods", "GET, POST, OPTIONS, PUT, DELETE");
          httpHeaders.set("Access-Control-Allow-Headers", "*");
          var options = {
            headers: httpHeaders
          };
          var data = this.httpClient.post(url, body, options);
          return data;
        }
      }, {
        key: "postValidarCorreoNative",
        value: function postValidarCorreoNative(correo) {
          //realizar la llamada post nativa
          var headers = new Headers();
          var body = {
            "Correo": correo
          };
          var url = _environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].API_ENDPOINT + 'ValidaCorreo';
          this.http.setDataSerializer('json');
          return this.http.post(url, body, {});
        }
      }, {
        key: "getParametros",
        value: function getParametros(esProduccion) {
          var url = _environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].API_ENDPOINT + 'ParametrosApp?EsProduccion=' + esProduccion;
          var data = this.httpClient.get(url, {});
          return data;
        }
      }, {
        key: "getParametrosNative",
        value: function getParametrosNative(esProduccion) {
          var url = _environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].API_ENDPOINT + 'ParametrosApp?EsProduccion=' + esProduccion;
          var data = this.http.get(url, {}, {});
          return data;
        } //LLAMADAS PARA CONTROLAR EL INICIO Y TERMINO DE LA SESSION EN LA APP

      }, {
        key: "postIngreso",
        value: function postIngreso(objetoEntrada) {
          //realizar la llamada post a la api
          var body = JSON.stringify({
            "IdDispositivo": objetoEntrada.Token,
            "VersionAppName": objetoEntrada.VersionAppName,
            "Plataforma": objetoEntrada.Plataforma,
            "VersionAppNumber": objetoEntrada.VersionAppNumber,
            "TipoOperacion": objetoEntrada.TipoOperacion,
            "Id": objetoEntrada.Id != null ? objetoEntrada.Id.toString() : '0'
          });
          var url = _environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].API_ENDPOINT + 'RegistroSession';
          var httpHeaders = new _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpHeaders"]({
            'Content-Type': 'application/json',
            'Cache-Control': 'no-cache'
          });
          httpHeaders.set('Access-Control-Allow-Origin', '*');
          httpHeaders.set("Access-Control-Allow-Methods", "GET, POST, OPTIONS, PUT, DELETE");
          httpHeaders.set("Access-Control-Allow-Headers", "*");
          var options = {
            headers: httpHeaders
          };
          var data = this.httpClient.post(url, body, options);
          return data;
        }
      }, {
        key: "postIngresoNative",
        value: function postIngresoNative(objetoEntrada) {
          //realizar la llamada post nativa
          var headers = new Headers();
          var body = {
            "IdDispositivo": objetoEntrada.Token,
            "VersionAppName": objetoEntrada.VersionAppName,
            "Plataforma": objetoEntrada.Plataforma,
            "VersionAppNumber": objetoEntrada.VersionAppNumber,
            "TipoOperacion": objetoEntrada.TipoOperacion,
            "Id": objetoEntrada.Id != null ? objetoEntrada.Id.toString() : '0'
          };
          var url = _environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].API_ENDPOINT + 'RegistroSession';
          this.http.setDataSerializer('json');
          return this.http.post(url, body, {});
        }
      }, {
        key: "postMovimientoApp",
        value: function postMovimientoApp(rssId, modulo) {
          //realizar la llamada post a la api
          var body = JSON.stringify({
            "RssId": rssId,
            "NombreModulo": modulo
          });
          var url = _environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].API_ENDPOINT + 'MovimientosApp';
          var httpHeaders = new _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpHeaders"]({
            'Content-Type': 'application/json',
            'Cache-Control': 'no-cache'
          });
          httpHeaders.set('Access-Control-Allow-Origin', '*');
          httpHeaders.set("Access-Control-Allow-Methods", "GET, POST, OPTIONS, PUT, DELETE");
          httpHeaders.set("Access-Control-Allow-Headers", "*");
          var options = {
            headers: httpHeaders
          };
          var data = this.httpClient.post(url, body, options);
          return data;
        }
      }, {
        key: "postMovimientoAppNative",
        value: function postMovimientoAppNative(rssId, modulo) {
          //realizar la llamada post nativa
          var headers = new Headers();
          var body = {
            "RssId": rssId,
            "NombreModulo": modulo
          };
          var url = _environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].API_ENDPOINT + 'MovimientosApp';
          this.http.setDataSerializer('json');
          return this.http.post(url, body, {});
        }
      }, {
        key: "getMovimientos",
        value: function getMovimientos(cantidadDias, idDispositivo) {
          var url = _environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].API_ENDPOINT + 'MovimientosApp?CantidadDias=' + cantidadDias + '&IdDispositivo=' + idDispositivo;
          var data = this.httpClient.get(url, {});
          return data;
        }
      }, {
        key: "getMovimientosNative",
        value: function getMovimientosNative(cantidadDias, idDispositivo) {
          var url = _environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].API_ENDPOINT + 'MovimientosApp?CantidadDias=' + cantidadDias + '&IdDispositivo=' + idDispositivo;
          var data = this.http.get(url, {}, {});
          return data;
        } //para informar persona

      }, {
        key: "postInformarPersona",
        value: function postInformarPersona(run, nombreSocial, email, numeroTelefono, etiquetaTelefono) {
          //realizar la llamada post a la api
          var body = JSON.stringify({
            "Run": run,
            "NombreSocial": nombreSocial,
            "Email": email,
            "NumeroTelefono": numeroTelefono,
            "EtiquetaTelefono": etiquetaTelefono
          });
          var url = _environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].API_ENDPOINT + 'InformarPersona';
          var httpHeaders = new _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpHeaders"]({
            'Content-Type': 'application/json',
            'Cache-Control': 'no-cache'
          });
          httpHeaders.set('Access-Control-Allow-Origin', '*');
          httpHeaders.set("Access-Control-Allow-Methods", "GET, POST, OPTIONS, PUT, DELETE");
          httpHeaders.set("Access-Control-Allow-Headers", "*");
          var options = {
            headers: httpHeaders
          };
          var data = this.httpClient.post(url, body, options);
          return data;
        }
      }, {
        key: "postInformarPersonaNative",
        value: function postInformarPersonaNative(run, nombreSocial, email, numeroTelefono, etiquetaTelefono) {
          //realizar la llamada post nativa
          var headers = new Headers();
          var body = {
            "Run": run,
            "NombreSocial": nombreSocial,
            "Email": email,
            "NumeroTelefono": numeroTelefono,
            "EtiquetaTelefono": etiquetaTelefono
          };
          var url = _environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].API_ENDPOINT + 'InformarPersona';
          this.http.setDataSerializer('json');
          return this.http.post(url, body, {});
        } //contactabilidad

      }, {
        key: "getContactabilidad",
        value: function getContactabilidad(run) {
          var url = _environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].API_ENDPOINT + 'Contactabilidad?run=' + run;
          var data = this.httpClient.get(url, {});
          return data;
        }
      }, {
        key: "getContactabilidadNative",
        value: function getContactabilidadNative(run) {
          var url = _environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].API_ENDPOINT + 'Contactabilidad?run=' + run;
          var data = this.http.get(url, {}, {});
          return data;
        } //validaciones para el registro de usuario

      }, {
        key: "verificaEnrolamientoCompleto",
        value: function verificaEnrolamientoCompleto(run, fechaNacimiento, email) {
          var url = _environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].API_ENDPOINT + 'RegistroAppFamilia?Run=' + run + '&FechaNacimiento=' + fechaNacimiento + '&Email=' + email;
          var data = this.httpClient.get(url, {});
          return data;
        }
      }, {
        key: "verificaEnrolamientoCompletoNative",
        value: function verificaEnrolamientoCompletoNative(run, fechaNacimiento, email) {
          var url = _environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].API_ENDPOINT + 'RegistroAppFamilia?Run=' + run + '&FechaNacimiento=' + fechaNacimiento + '&Email=' + email;
          var data = this.http.get(url, {}, {});
          return data;
        }
      }, {
        key: "validaCodigo",
        value: function validaCodigo(id, codigo, operacion) {
          var url = _environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].API_ENDPOINT + 'ValidarCodigo?Id=' + id.toString() + '&Codigo=' + codigo + '&Operacion=' + operacion;
          var data = this.httpClient.get(url, {});
          return data;
        }
      }, {
        key: "validaCodigoNative",
        value: function validaCodigoNative(id, codigo, operacion) {
          var url = _environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].API_ENDPOINT + 'ValidarCodigo?Id=' + id.toString() + '&Codigo=' + codigo + '&Operacion=' + operacion;
          var data = this.http.get(url, {}, {});
          return data;
        } //actualiza los datos de la familia

      }, {
        key: "actualizaFamilia",
        value: function actualizaFamilia(uspsIds, uspIdTitular) {
          var url = _environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].API_ENDPOINT + 'Familia?UspsIds=' + uspsIds + '&UspIdTitular=' + uspIdTitular;
          var data = this.httpClient.get(url, {});
          return data;
        }
      }, {
        key: "actualizaFamiliaNative",
        value: function actualizaFamiliaNative(uspsIds, uspIdTitular) {
          var url = _environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].API_ENDPOINT + 'Familia?UspsIds=' + uspsIds + '&UspIdTitular=' + uspIdTitular;
          var data = this.http.get(url, {}, {});
          return data;
        }
      }, {
        key: "quitarFamilia",
        value: function quitarFamilia(uspsIds, uspIdTitular) {
          var url = _environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].API_ENDPOINT + 'Familia?UspsIds=' + uspsIds + '&UspIdTitular=' + uspIdTitular + '&Operacion=quitar';
          var data = this.httpClient.get(url, {});
          return data;
        }
      }, {
        key: "quitarFamiliaNative",
        value: function quitarFamiliaNative(uspsIds, uspIdTitular) {
          var url = _environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].API_ENDPOINT + 'Familia?UspsIds=' + uspsIds + '&UspIdTitular=' + uspIdTitular + '&Operacion=quitar';
          var data = this.http.get(url, {}, {});
          return data;
        }
      }]);

      return ServicioGeo;
    }();

    ServicioGeo.ctorParameters = function () {
      return [{
        type: _ionic_native_http_ngx__WEBPACK_IMPORTED_MODULE_2__["HTTP"]
      }, {
        type: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"]
      }];
    };

    ServicioGeo = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])()], ServicioGeo);
    /***/
  },

  /***/
  "./src/app/services/ServicioImagen.ts":
  /*!********************************************!*\
    !*** ./src/app/services/ServicioImagen.ts ***!
    \********************************************/

  /*! exports provided: ServicioImagen */

  /***/
  function srcAppServicesServicioImagenTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ServicioImagen", function () {
      return ServicioImagen;
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


    var _ionic_native_http_ngx__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @ionic-native/http/ngx */
    "./node_modules/@ionic-native/http/__ivy_ngcc__/ngx/index.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
    /* harmony import */


    var _environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../../environments/environment */
    "./src/environments/environment.ts"); //import { Http, Headers } from '@angular/';


    var ServicioImagen = /*#__PURE__*/function () {
      function ServicioImagen(http, httpClient) {
        _classCallCheck(this, ServicioImagen);

        this.http = http;
        this.httpClient = httpClient;
      }

      _createClass(ServicioImagen, [{
        key: "putImagen",
        value: function putImagen(uspId, files) {
          var url = _environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].API_ENDPOINT + 'File';
          var model = new FormData();
          model.append("uspId", uspId);
          model.append("fileName", files);
          var httpHeaders = new _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpHeaders"]({
            'Content-Type': 'application/json',
            'Cache-Control': 'no-cache'
          });
          httpHeaders.set('Access-Control-Allow-Origin', '*');
          httpHeaders.set("Access-Control-Allow-Methods", "GET, POST, OPTIONS, PUT, DELETE");
          httpHeaders.set("Access-Control-Allow-Headers", "*");
          var options = {
            fileKey: "fileName",
            fileName: files,
            chunkedMode: false,
            mimeType: "multipart/form-data",
            params: {
              'fileName': files,
              'uspId': uspId
            }
          };
          var data = this.httpClient.post(url, model, options);
          return data;
        }
      }, {
        key: "putImagenNative",
        value: function putImagenNative(uspId, files) {
          var model = new FormData();
          model.append("uspId", uspId);
          model.append("fileName", files);
          var url = _environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].API_ENDPOINT + 'File';
          var options = {
            fileKey: "fileName",
            fileName: files,
            chunkedMode: false,
            mimeType: "multipart/form-data",
            params: {
              'fileName': files,
              'uspId': uspId
            }
          };
          this.http.setDataSerializer('json');
          return this.http.post(url, model, options);
        }
      }, {
        key: "putColor",
        value: function putColor(uspId, color) {
          var body = JSON.stringify({
            UspId: uspId.toString(),
            Color: color
          });
          var url = _environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].API_ENDPOINT + 'Color';
          var httpHeaders = new _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpHeaders"]({
            'Content-Type': 'application/json',
            'Cache-Control': 'no-cache'
          });
          httpHeaders.set('Access-Control-Allow-Origin', '*');
          httpHeaders.set("Access-Control-Allow-Methods", "GET, POST, OPTIONS, PUT, DELETE");
          httpHeaders.set("Access-Control-Allow-Headers", "*");
          var options = {
            headers: httpHeaders
          };
          var data = this.httpClient.put(url, body, options);
          return data;
        }
      }, {
        key: "putColorNative",
        value: function putColorNative(uspId, color) {
          //realizar la llamada post nativa
          var headers = new Headers();
          var body = {
            "UspId": uspId.toString(),
            "Color": color
          };
          var url = _environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].API_ENDPOINT + 'Color';
          this.http.setDataSerializer('json');
          return this.http.put(url, body, {});
        }
      }]);

      return ServicioImagen;
    }();

    ServicioImagen.ctorParameters = function () {
      return [{
        type: _ionic_native_http_ngx__WEBPACK_IMPORTED_MODULE_2__["HTTP"]
      }, {
        type: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"]
      }];
    };

    ServicioImagen = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])()], ServicioImagen);
    /***/
  },

  /***/
  "./src/app/services/ServicioInfoUsuario.ts":
  /*!*************************************************!*\
    !*** ./src/app/services/ServicioInfoUsuario.ts ***!
    \*************************************************/

  /*! exports provided: ServicioInfoUsuario */

  /***/
  function srcAppServicesServicioInfoUsuarioTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ServicioInfoUsuario", function () {
      return ServicioInfoUsuario;
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


    var _ionic_native_http_ngx__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @ionic-native/http/ngx */
    "./node_modules/@ionic-native/http/__ivy_ngcc__/ngx/index.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
    /* harmony import */


    var _environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../../environments/environment */
    "./src/environments/environment.ts"); //import { Http, Headers } from '@angular/';


    var ServicioInfoUsuario = /*#__PURE__*/function () {
      function ServicioInfoUsuario(http, httpClient) {
        _classCallCheck(this, ServicioInfoUsuario);

        this.http = http;
        this.httpClient = httpClient;
      }

      _createClass(ServicioInfoUsuario, [{
        key: "getIndicadorValor",
        value: function getIndicadorValor(uspId) {
          var body = JSON.stringify({
            UspId: uspId.toString()
          });
          var url = _environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].API_ENDPOINT + 'IndicadorValor';
          var httpHeaders = new _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpHeaders"]({
            'Content-Type': 'application/json',
            'Cache-Control': 'no-cache'
          });
          httpHeaders.set('Access-Control-Allow-Origin', '*');
          httpHeaders.set("Access-Control-Allow-Methods", "GET, POST, OPTIONS, PUT, DELETE");
          httpHeaders.set("Access-Control-Allow-Headers", "*");
          var options = {
            headers: httpHeaders
          };
          var data = this.httpClient.post(url, body, options);
          return data;
        }
      }, {
        key: "getIndicadorValorNative",
        value: function getIndicadorValorNative(uspId) {
          //realizar la llamada post nativa
          var headers = new Headers();
          var body = {
            "UspId": uspId.toString()
          };
          var url = _environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].API_ENDPOINT + 'IndicadorValor';
          this.http.setDataSerializer('json');
          return this.http.post(url, body, {});
        }
      }, {
        key: "getPresion",
        value: function getPresion(uspId) {
          var body = JSON.stringify({
            UspId: uspId.toString()
          });
          var url = _environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].API_ENDPOINT + 'Presion';
          var httpHeaders = new _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpHeaders"]({
            'Content-Type': 'application/json',
            'Cache-Control': 'no-cache'
          });
          httpHeaders.set('Access-Control-Allow-Origin', '*');
          httpHeaders.set("Access-Control-Allow-Methods", "GET, POST, OPTIONS, PUT, DELETE");
          httpHeaders.set("Access-Control-Allow-Headers", "*");
          var options = {
            headers: httpHeaders
          };
          var data = this.httpClient.post(url, body, options);
          return data;
        }
      }, {
        key: "getPresionNative",
        value: function getPresionNative(uspId) {
          //realizar la llamada post nativa
          var headers = new Headers();
          var body = {
            "UspId": uspId.toString()
          };
          var url = _environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].API_ENDPOINT + 'Presion';
          this.http.setDataSerializer('json');
          return this.http.post(url, body, {});
        }
      }, {
        key: "getAlergias",
        value: function getAlergias(uspId) {
          var body = JSON.stringify({
            UspId: uspId.toString()
          });
          var url = _environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].API_ENDPOINT + 'Alergia';
          var httpHeaders = new _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpHeaders"]({
            'Content-Type': 'application/json',
            'Cache-Control': 'no-cache'
          });
          httpHeaders.set('Access-Control-Allow-Origin', '*');
          httpHeaders.set("Access-Control-Allow-Methods", "GET, POST, OPTIONS, PUT, DELETE");
          httpHeaders.set("Access-Control-Allow-Headers", "*");
          var options = {
            headers: httpHeaders
          };
          var data = this.httpClient.post(url, body, options);
          return data;
        }
      }, {
        key: "getAlergiasNative",
        value: function getAlergiasNative(uspId) {
          //realizar la llamada post nativa
          var headers = new Headers();
          var body = {
            "UspId": uspId.toString()
          };
          var url = _environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].API_ENDPOINT + 'Alergia';
          this.http.setDataSerializer('json');
          return this.http.post(url, body, {});
        } //metodos api management

      }, {
        key: "getIndicadorValorApi",
        value: function getIndicadorValorApi(uspId) {
          var body = JSON.stringify({
            UspId: uspId.toString()
          });
          var url = _environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].API_ENDPOINT + 'IndicadorValorApi';
          var httpHeaders = new _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpHeaders"]({
            'Content-Type': 'application/json',
            'Cache-Control': 'no-cache'
          });
          httpHeaders.set('Access-Control-Allow-Origin', '*');
          httpHeaders.set("Access-Control-Allow-Methods", "GET, POST, OPTIONS, PUT, DELETE");
          httpHeaders.set("Access-Control-Allow-Headers", "*");
          var options = {
            headers: httpHeaders
          };
          var data = this.httpClient.post(url, body, options);
          return data;
        }
      }, {
        key: "getIndicadorValorNativeApi",
        value: function getIndicadorValorNativeApi(uspId) {
          //realizar la llamada post nativa
          var headers = new Headers();
          var body = {
            "UspId": uspId.toString()
          };
          var url = _environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].API_ENDPOINT + 'IndicadorValorApi';
          this.http.setDataSerializer('json');
          return this.http.post(url, body, {});
        }
      }, {
        key: "getPresionApi",
        value: function getPresionApi(uspId) {
          var body = JSON.stringify({
            UspId: uspId.toString()
          });
          var url = _environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].API_ENDPOINT + 'PresionApi';
          var httpHeaders = new _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpHeaders"]({
            'Content-Type': 'application/json',
            'Cache-Control': 'no-cache'
          });
          httpHeaders.set('Access-Control-Allow-Origin', '*');
          httpHeaders.set("Access-Control-Allow-Methods", "GET, POST, OPTIONS, PUT, DELETE");
          httpHeaders.set("Access-Control-Allow-Headers", "*");
          var options = {
            headers: httpHeaders
          };
          var data = this.httpClient.post(url, body, options);
          return data;
        }
      }, {
        key: "getPresionNativeApi",
        value: function getPresionNativeApi(uspId) {
          //realizar la llamada post nativa
          var headers = new Headers();
          var body = {
            "UspId": uspId.toString()
          };
          var url = _environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].API_ENDPOINT + 'PresionApi';
          this.http.setDataSerializer('json');
          return this.http.post(url, body, {});
        }
      }, {
        key: "getAlergiasApi",
        value: function getAlergiasApi(uspId) {
          var body = JSON.stringify({
            UspId: uspId.toString()
          });
          var url = _environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].API_ENDPOINT + 'AlergiaApi';
          var httpHeaders = new _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpHeaders"]({
            'Content-Type': 'application/json',
            'Cache-Control': 'no-cache'
          });
          httpHeaders.set('Access-Control-Allow-Origin', '*');
          httpHeaders.set("Access-Control-Allow-Methods", "GET, POST, OPTIONS, PUT, DELETE");
          httpHeaders.set("Access-Control-Allow-Headers", "*");
          var options = {
            headers: httpHeaders
          };
          var data = this.httpClient.post(url, body, options);
          return data;
        }
      }, {
        key: "getAlergiasNativeApi",
        value: function getAlergiasNativeApi(uspId) {
          //realizar la llamada post nativa
          var headers = new Headers();
          var body = {
            "UspId": uspId.toString()
          };
          var url = _environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].API_ENDPOINT + 'AlergiaApi';
          this.http.setDataSerializer('json');
          return this.http.post(url, body, {});
        } //antecedentes morbidos y familiares

      }, {
        key: "postAntecedentesApi",
        value: function postAntecedentesApi(uspId) {
          var body = JSON.stringify({
            UspId: uspId.toString()
          });
          var url = _environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].API_ENDPOINT + 'AntecedentesApi';
          var httpHeaders = new _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpHeaders"]({
            'Content-Type': 'application/json',
            'Cache-Control': 'no-cache'
          });
          httpHeaders.set('Access-Control-Allow-Origin', '*');
          httpHeaders.set("Access-Control-Allow-Methods", "GET, POST, OPTIONS, PUT, DELETE");
          httpHeaders.set("Access-Control-Allow-Headers", "*");
          var options = {
            headers: httpHeaders
          };
          var data = this.httpClient.post(url, body, options);
          return data;
        }
      }, {
        key: "postAntecedentesNativeApi",
        value: function postAntecedentesNativeApi(uspId) {
          //realizar la llamada post nativa
          var headers = new Headers();
          var body = {
            "UspId": uspId.toString()
          };
          var url = _environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].API_ENDPOINT + 'AntecedentesApi';
          this.http.setDataSerializer('json');
          return this.http.post(url, body, {});
        }
      }]);

      return ServicioInfoUsuario;
    }();

    ServicioInfoUsuario.ctorParameters = function () {
      return [{
        type: _ionic_native_http_ngx__WEBPACK_IMPORTED_MODULE_2__["HTTP"]
      }, {
        type: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"]
      }];
    };

    ServicioInfoUsuario = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])()], ServicioInfoUsuario);
    /***/
  },

  /***/
  "./src/app/services/ServicioLaboratorio.ts":
  /*!*************************************************!*\
    !*** ./src/app/services/ServicioLaboratorio.ts ***!
    \*************************************************/

  /*! exports provided: ServicioLaboratorio */

  /***/
  function srcAppServicesServicioLaboratorioTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ServicioLaboratorio", function () {
      return ServicioLaboratorio;
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


    var _ionic_native_http_ngx__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @ionic-native/http/ngx */
    "./node_modules/@ionic-native/http/__ivy_ngcc__/ngx/index.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
    /* harmony import */


    var _environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../../environments/environment */
    "./src/environments/environment.ts"); //import { Http, Headers } from '@angular/';


    var ServicioLaboratorio = /*#__PURE__*/function () {
      function ServicioLaboratorio(http, httpClient) {
        _classCallCheck(this, ServicioLaboratorio);

        this.http = http;
        this.httpClient = httpClient;
      }

      _createClass(ServicioLaboratorio, [{
        key: "getOrdenes",
        value: function getOrdenes(uspId) {
          var body = JSON.stringify({
            UspId: uspId.toString()
          });
          var url = _environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].API_ENDPOINT + 'Ordenes';
          var httpHeaders = new _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpHeaders"]({
            'Content-Type': 'application/json',
            'Cache-Control': 'no-cache'
          });
          httpHeaders.set('Access-Control-Allow-Origin', '*');
          httpHeaders.set("Access-Control-Allow-Methods", "GET, POST, OPTIONS, PUT, DELETE");
          httpHeaders.set("Access-Control-Allow-Headers", "*");
          var options = {
            headers: httpHeaders
          };
          var data = this.httpClient.post(url, body, options);
          return data;
        }
      }, {
        key: "getOrdenesNative",
        value: function getOrdenesNative(uspId) {
          //realizar la llamada post nativa
          var headers = new Headers();
          var body = {
            "UspId": uspId.toString()
          };
          var url = _environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].API_ENDPOINT + 'Ordenes';
          this.http.setDataSerializer('json');
          return this.http.post(url, body, {});
        }
      }, {
        key: "getExamenes",
        value: function getExamenes(oalaId) {
          var body = JSON.stringify({
            OalaId: oalaId.toString()
          });
          var url = _environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].API_ENDPOINT + 'Examenes';
          var httpHeaders = new _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpHeaders"]({
            'Content-Type': 'application/json',
            'Cache-Control': 'no-cache'
          });
          httpHeaders.set('Access-Control-Allow-Origin', '*');
          httpHeaders.set("Access-Control-Allow-Methods", "GET, POST, OPTIONS, PUT, DELETE");
          httpHeaders.set("Access-Control-Allow-Headers", "*");
          var options = {
            headers: httpHeaders
          };
          var data = this.httpClient.post(url, body, options);
          return data;
        }
      }, {
        key: "getExamenesNative",
        value: function getExamenesNative(oalaId) {
          //realizar la llamada post nativa
          var headers = new Headers();
          var body = {
            "OalaId": oalaId.toString()
          };
          var url = _environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].API_ENDPOINT + 'Examenes';
          this.http.setDataSerializer('json');
          return this.http.post(url, body, {});
        }
      }]);

      return ServicioLaboratorio;
    }();

    ServicioLaboratorio.ctorParameters = function () {
      return [{
        type: _ionic_native_http_ngx__WEBPACK_IMPORTED_MODULE_2__["HTTP"]
      }, {
        type: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"]
      }];
    };

    ServicioLaboratorio = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])()], ServicioLaboratorio);
    /***/
  },

  /***/
  "./src/app/services/ServicioNotificaciones.ts":
  /*!****************************************************!*\
    !*** ./src/app/services/ServicioNotificaciones.ts ***!
    \****************************************************/

  /*! exports provided: ServicioNotificaciones */

  /***/
  function srcAppServicesServicioNotificacionesTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ServicioNotificaciones", function () {
      return ServicioNotificaciones;
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


    var _ionic_native_app_version_ngx__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @ionic-native/app-version/ngx */
    "./node_modules/@ionic-native/app-version/__ivy_ngcc__/ngx/index.js");
    /* harmony import */


    var moment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! moment */
    "./node_modules/moment/moment.js");
    /* harmony import */


    var moment__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_4__);
    /* harmony import */


    var _ionic_native_local_notifications_ngx__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @ionic-native/local-notifications/ngx */
    "./node_modules/@ionic-native/local-notifications/__ivy_ngcc__/ngx/index.js");
    /* harmony import */


    var _app_services_ServicioUtiles__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ../../app/services/ServicioUtiles */
    "./src/app/services/ServicioUtiles.ts");
    /* harmony import */


    var _app_services_ServicioCitas__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ../../app/services/ServicioCitas */
    "./src/app/services/ServicioCitas.ts");
    /* harmony import */


    var _app_services_ServicioParametrosApp__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ../../app/services/ServicioParametrosApp */
    "./src/app/services/ServicioParametrosApp.ts"); //notificaciones locales
    //utiles
    //citas


    var ServicioNotificaciones = /*#__PURE__*/function () {
      function ServicioNotificaciones(platform, appVersion, toast, localNotifications, utiles, citas, parametrosApp) {
        _classCallCheck(this, ServicioNotificaciones);

        this.platform = platform;
        this.appVersion = appVersion;
        this.toast = toast;
        this.localNotifications = localNotifications;
        this.utiles = utiles;
        this.citas = citas;
        this.parametrosApp = parametrosApp;
        this.citasArr = [];
        this.vacunasCovid = []; //inicializamos los valores

        moment__WEBPACK_IMPORTED_MODULE_4__["locale"]('es');
        localStorage.removeItem('NOTIFICACIONES_LOCALES_EVENTOS');
      }

      _createClass(ServicioNotificaciones, [{
        key: "lanzarNotificacionPrueba",
        value: function lanzarNotificacionPrueba() {
          if (this.utiles.isAppOnDevice()) {
            this.localNotifications.schedule({
              id: 1,
              title: 'Titulo prueba',
              text: 'Notificación simple'
            });
          }
        }
      }, {
        key: "crearNotificacion",
        value: function crearNotificacion(id, titulo, texto) {
          if (this.utiles.isAppOnDevice()) {
            this.localNotifications.schedule({
              id: id,
              title: titulo,
              text: texto,
              trigger: {
                "in": 1,
                unit: _ionic_native_local_notifications_ngx__WEBPACK_IMPORTED_MODULE_5__["ELocalNotificationTriggerUnit"].MINUTE
              },
              foreground: true
            });
          } else {
            //web
            this.utiles.presentToast(titulo + '\r\n' + texto, 'bottom', 10000);
          }
        }
      }, {
        key: "notificacionCita",
        value: function notificacionCita(accion, data) {
          if (this.utiles.isAppOnDevice()) {
            if (accion === 'booked') {
              //this.utiles.presentToast('Cita reservada con éxito!!', 'bottom', 3000);
              console.log(data);
            } else if (accion === 'confirmed') {
              //this.utiles.presentToast('Cita confirmada con éxito!!', 'bottom', 3000);
              console.log(data);
            } else if (accion === 'cancelled') {
              //this.utiles.presentToast('Cita anulada con éxito!!', 'bottom', 3000);
              console.log(data);
            }
          }
        }
      }, {
        key: "buscarCitas",
        value: function buscarCitas() {
          var _this6 = this;

          var usuario = null;

          if (localStorage.getItem('UsuarioAps')) {
            usuario = JSON.parse(localStorage.getItem('UsuarioAps'));
          }

          var annoConsultar = 0;
          var mesConsultar = 0;
          this.citasArr = [];
          var fechaActual = moment__WEBPACK_IMPORTED_MODULE_4__();
          var fechaEvaluar = moment__WEBPACK_IMPORTED_MODULE_4__().add(5, 'days');
          var mesActual = {
            mes: fechaActual.month() + 1,
            anno: fechaActual.year()
          };
          var mesEvaluar = {
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

          if (usuario != null) {
            if (this.utiles.isAppOnDevice()) {
              if (this.parametrosApp.USA_API_MANAGEMENT()) {
                this.citas.entregaPorMesNuevoApiNative(usuario.Id, usuario.IdRyf, usuario.NodId, mesConsultar, annoConsultar).then(function (response) {
                  //aca debemos procesar las citas
                  var todas = JSON.parse(response.data);

                  if (todas && todas.length > 0) {
                    //aplicamos el primer filtro
                    var nuevas = todas.filter(function (e) {
                      return e.Mostrar == true;
                    });
                    var total = nuevas.filter(function (e) {
                      return moment__WEBPACK_IMPORTED_MODULE_4__(e.FechaCompleta) >= moment__WEBPACK_IMPORTED_MODULE_4__() && moment__WEBPACK_IMPORTED_MODULE_4__(e.FechaCompleta) <= moment__WEBPACK_IMPORTED_MODULE_4__().add(5, 'days');
                    });

                    if (total && total.length > 0) {
                      //por cada uno de estos debemos hacer un mensaje
                      for (var i = 0; i < total.length; i++) {
                        var fecha = moment__WEBPACK_IMPORTED_MODULE_4__(total[i].Eventos[0].DetalleEventoMes.FechaHora).format("DD-MM-YYYY");
                        var hora = total[i].Eventos[0].HoraInicioFin;
                        var lugar = total[i].Eventos[0].DetalleEventoMes.Lugar;
                        var id = total[i].Eventos[0].DetalleEventoMes.IdElemento;
                        var titulo = total[i].Eventos[0].DetalleEventoMes.Titulo;
                        var texto = fecha + ' ' + hora + '\n' + total[i].Eventos[0].DetalleEventoMes.DescripcionPrincipal + '\n' + total[i].Eventos[0].DetalleEventoMes.DescripcionSecundaria + '\n' + lugar; //var texto = total[i].Eventos[0].DetalleEventoMes.DescripcionPrincipal + ", " + total[i].Eventos[0].DetalleEventoMes.DescripcionSecundaria;

                        _this6.crearNotificacion(id, titulo, texto);
                      }
                    }

                    console.log(nuevas);
                  }
                })["catch"](function (error) {
                  console.log(error.message);

                  _this6.utiles.presentToast('Hay errores al comunicarse con el servidor, contacte al administrador', 'bottom', 2000);
                });
              } else {
                this.citas.entregaPorMesNuevoNative(usuario.Id, usuario.IdRyf, usuario.NodId, mesConsultar, annoConsultar).then(function (response) {
                  //aca debemos procesar las citas
                  var todas = JSON.parse(response.data);

                  if (todas && todas.length > 0) {
                    //aplicamos el primer filtro
                    var nuevas = todas.filter(function (e) {
                      return e.Mostrar == true;
                    });
                    var total = nuevas.filter(function (e) {
                      return moment__WEBPACK_IMPORTED_MODULE_4__(e.FechaCompleta) >= moment__WEBPACK_IMPORTED_MODULE_4__() && moment__WEBPACK_IMPORTED_MODULE_4__(e.FechaCompleta) <= moment__WEBPACK_IMPORTED_MODULE_4__().add(5, 'days');
                    });

                    if (total && total.length > 0) {
                      //por cada uno de estos debemos hacer un mensaje
                      for (var i = 0; i < total.length; i++) {
                        var fecha = moment__WEBPACK_IMPORTED_MODULE_4__(total[i].Eventos[0].DetalleEventoMes.FechaHora).format("DD-MM-YYYY");
                        var hora = total[i].Eventos[0].HoraInicioFin;
                        var lugar = total[i].Eventos[0].DetalleEventoMes.Lugar;
                        var id = total[i].Eventos[0].DetalleEventoMes.IdElemento;
                        var titulo = total[i].Eventos[0].DetalleEventoMes.Titulo;
                        var texto = fecha + ' ' + hora + '\n' + total[i].Eventos[0].DetalleEventoMes.DescripcionPrincipal + '\n' + total[i].Eventos[0].DetalleEventoMes.DescripcionSecundaria + '\n' + lugar; //var texto = total[i].Eventos[0].DetalleEventoMes.DescripcionPrincipal + ", " + total[i].Eventos[0].DetalleEventoMes.DescripcionSecundaria;

                        _this6.crearNotificacion(id, titulo, texto);
                      }
                    }

                    console.log(nuevas);
                  }
                })["catch"](function (error) {
                  console.log(error.message);

                  _this6.utiles.presentToast('Hay errores al comunicarse con el servidor, contacte al administrador', 'bottom', 2000);
                });
              }
            } else {
              if (this.parametrosApp.USA_API_MANAGEMENT()) {
                this.citas.entregaPorMesNuevoApi(usuario.Id, usuario.IdRyf, usuario.NodId, mesConsultar, annoConsultar).subscribe(function (response) {
                  //aca debemos procesar las citas
                  var todas = response;

                  if (todas && todas.length > 0) {
                    //aplicamos el primer filtro
                    var nuevas = todas.filter(function (e) {
                      return e.Mostrar == true;
                    });
                    var total = nuevas.filter(function (e) {
                      return moment__WEBPACK_IMPORTED_MODULE_4__(e.FechaCompleta) >= moment__WEBPACK_IMPORTED_MODULE_4__() && moment__WEBPACK_IMPORTED_MODULE_4__(e.FechaCompleta) <= moment__WEBPACK_IMPORTED_MODULE_4__().add(5, 'days');
                    });

                    if (total && total.length > 0) {
                      //por cada uno de estos debemos hacer un mensaje
                      for (var i = 0; i < total.length; i++) {
                        var fecha = moment__WEBPACK_IMPORTED_MODULE_4__(total[i].Eventos[0].DetalleEventoMes.FechaHora).format("DD-MM-YYYY");
                        var hora = total[i].Eventos[0].HoraInicioFin;
                        var lugar = total[i].Eventos[0].DetalleEventoMes.Lugar;
                        var id = total[i].Eventos[0].DetalleEventoMes.IdElemento;
                        var titulo = total[i].Eventos[0].DetalleEventoMes.Titulo;
                        var texto = fecha + ' ' + hora + '\n' + total[i].Eventos[0].DetalleEventoMes.DescripcionPrincipal + '\n' + total[i].Eventos[0].DetalleEventoMes.DescripcionSecundaria + '\n' + lugar; //var texto = total[i].Eventos[0].DetalleEventoMes.DescripcionPrincipal + ", " + total[i].Eventos[0].DetalleEventoMes.DescripcionSecundaria;

                        _this6.crearNotificacion(id, titulo, texto);
                      }
                    }

                    console.log(nuevas);
                  }
                }, function (error) {
                  console.log(error.message);

                  _this6.utiles.presentToast('Hay errores al comunicarse con el servidor, contacte al administrador', 'bottom', 2000);
                });
              } else {
                this.citas.entregaPorMesNuevo(usuario.Id, usuario.IdRyf, usuario.NodId, mesConsultar, annoConsultar).subscribe(function (response) {
                  //aca debemos procesar las citas
                  var todas = response;

                  if (todas && todas.length > 0) {
                    //aplicamos el primer filtro
                    var nuevas = todas.filter(function (e) {
                      return e.Mostrar == true;
                    });
                    var total = nuevas.filter(function (e) {
                      return moment__WEBPACK_IMPORTED_MODULE_4__(e.FechaCompleta) >= moment__WEBPACK_IMPORTED_MODULE_4__() && moment__WEBPACK_IMPORTED_MODULE_4__(e.FechaCompleta) <= moment__WEBPACK_IMPORTED_MODULE_4__().add(5, 'days');
                    });

                    if (total && total.length > 0) {
                      //por cada uno de estos debemos hacer un mensaje
                      for (var i = 0; i < total.length; i++) {
                        var fecha = moment__WEBPACK_IMPORTED_MODULE_4__(total[i].Eventos[0].DetalleEventoMes.FechaHora).format("DD-MM-YYYY");
                        var hora = total[i].Eventos[0].HoraInicioFin;
                        var lugar = total[i].Eventos[0].DetalleEventoMes.Lugar;
                        var id = total[i].Eventos[0].DetalleEventoMes.IdElemento;
                        var titulo = total[i].Eventos[0].DetalleEventoMes.Titulo;
                        var texto = fecha + ' ' + hora + '\n' + total[i].Eventos[0].DetalleEventoMes.DescripcionPrincipal + '\n' + total[i].Eventos[0].DetalleEventoMes.DescripcionSecundaria + '\n' + lugar; //var texto = total[i].Eventos[0].DetalleEventoMes.DescripcionPrincipal + ", " + total[i].Eventos[0].DetalleEventoMes.DescripcionSecundaria;

                        _this6.crearNotificacion(id, titulo, texto);
                      }
                    }

                    console.log(nuevas);
                  }
                }, function (error) {
                  console.log(error.message);

                  _this6.utiles.presentToast('Hay errores al comunicarse con el servidor, contacte al administrador', 'bottom', 2000);
                });
              }
            }
          }
        }
      }, {
        key: "agregarEntidadLocal",
        value: function agregarEntidadLocal(titulo, nombreCompleto, indice, id, contenido) {
          var entidad = {
            Titulo: titulo,
            Subtitulo: nombreCompleto,
            Contenido: contenido,
            Id: id,
            Indice: indice
          };

          if (localStorage.getItem('NOTIFICACIONES_LOCALES_EVENTOS')) {
            //SI YA EXISTE HACEMOS PUSH
            var eventoEsta = false;
            var lista = JSON.parse(localStorage.getItem('NOTIFICACIONES_LOCALES_EVENTOS')); //primero revisamos que el evento no este ya agregado

            var evento = lista.filter(function (p) {
              return p.Contenido == contenido;
            });

            if (evento && evento.length > 0) {
              eventoEsta = true;
            }

            if (eventoEsta == false) {
              lista.push(entidad);
              localStorage.setItem('NOTIFICACIONES_LOCALES_EVENTOS', JSON.stringify(lista));
            }
          } else {
            var _lista = [];

            _lista.push(entidad);

            localStorage.setItem('NOTIFICACIONES_LOCALES_EVENTOS', JSON.stringify(_lista));
          }
        }
      }, {
        key: "buscarCitasTodas",
        value: function buscarCitasTodas() {
          var _this7 = this;

          var indice = 1000;
          var usuario = null;

          if (localStorage.getItem('UsuarioAps')) {
            usuario = JSON.parse(localStorage.getItem('UsuarioAps'));
          }

          var annoConsultar = 0;
          var mesConsultar = 0;
          this.citasArr = [];
          var fechaActual = moment__WEBPACK_IMPORTED_MODULE_4__();
          var fechaEvaluar = moment__WEBPACK_IMPORTED_MODULE_4__().add(5, 'days');
          var mesActual = {
            mes: fechaActual.month() + 1,
            anno: fechaActual.year()
          };
          var mesEvaluar = {
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

          if (usuario != null) {
            if (this.utiles.isAppOnDevice()) {
              //llamada nativa
              if (this.parametrosApp.USA_API_MANAGEMENT()) {
                this.citas.entregaPorMesNuevoLivianoApiNative(usuario.Id, usuario.IdRyf, usuario.NodId, mesConsultar, annoConsultar).then(function (response) {
                  //aca debemos procesar las citas
                  var todas = JSON.parse(response.data);

                  if (todas && todas.length > 0) {
                    for (var i = 0; i < todas.length; i++) {
                      if (todas[i].Eventos && todas[i].Eventos.length > 0) {
                        //foreach a LOS EVENTOS
                        for (var s = 0; s < todas[i].Eventos.length; s++) {
                          var fecha = moment__WEBPACK_IMPORTED_MODULE_4__(todas[i].Eventos[s].DetalleEventoMes.FechaHora).format("DD-MM-YYYY");
                          var hora = todas[i].Eventos[s].HoraInicioFin;
                          var lugar = todas[i].Eventos[s].DetalleEventoMes.Lugar;
                          var id = todas[i].Eventos[s].DetalleEventoMes.IdElemento;
                          var titulo = todas[i].Eventos[s].DetalleEventoMes.Titulo;
                          var texto = fecha + ' ' + hora + '\n' + todas[i].Eventos[s].DetalleEventoMes.DescripcionPrincipal + '\n' + todas[i].Eventos[s].DetalleEventoMes.DescripcionSecundaria + '\n' + lugar; //var texto = total[i].Eventos[0].DetalleEventoMes.DescripcionPrincipal + ", " + total[i].Eventos[0].DetalleEventoMes.DescripcionSecundaria;

                          _this7.agregarEntidadLocal(todas[i].Eventos[s].DetalleEventoMes.Titulo, todas[i].Eventos[s].DetalleEventoMes.NombrePaciente, indice, id, texto);

                          indice++;

                          _this7.crearNotificacion(id, titulo, texto);
                        }
                      }
                    }
                  }
                })["catch"](function (error) {
                  console.log(error.message);

                  _this7.utiles.presentToast('Hay errores al comunicarse con el servidor, contacte al administrador', 'bottom', 2000);
                });
              } else {
                this.citas.entregaPorMesNuevoNative(usuario.Id, usuario.IdRyf, usuario.NodId, mesConsultar, annoConsultar).then(function (response) {
                  //aca debemos procesar las citas
                  var todas = JSON.parse(response.data);

                  if (todas && todas.length > 0) {
                    //aplicamos el primer filtro
                    var nuevas = todas.filter(function (e) {
                      return e.Mostrar == true;
                    });
                    var total = nuevas.filter(function (e) {
                      return moment__WEBPACK_IMPORTED_MODULE_4__(e.FechaCompleta) >= moment__WEBPACK_IMPORTED_MODULE_4__() && moment__WEBPACK_IMPORTED_MODULE_4__(e.FechaCompleta) <= moment__WEBPACK_IMPORTED_MODULE_4__().add(5, 'days');
                    });

                    if (total && total.length > 0) {
                      //por cada uno de estos debemos hacer un mensaje
                      for (var i = 0; i < total.length; i++) {
                        var fecha = moment__WEBPACK_IMPORTED_MODULE_4__(total[i].Eventos[0].DetalleEventoMes.FechaHora).format("DD-MM-YYYY");
                        var hora = total[i].Eventos[0].HoraInicioFin;
                        var lugar = total[i].Eventos[0].DetalleEventoMes.Lugar;
                        var id = total[i].Eventos[0].DetalleEventoMes.IdElemento;
                        var titulo = total[i].Eventos[0].DetalleEventoMes.Titulo;
                        var texto = fecha + ' ' + hora + '\n' + total[i].Eventos[0].DetalleEventoMes.DescripcionPrincipal + '\n' + total[i].Eventos[0].DetalleEventoMes.DescripcionSecundaria + '\n' + lugar; //var texto = total[i].Eventos[0].DetalleEventoMes.DescripcionPrincipal + ", " + total[i].Eventos[0].DetalleEventoMes.DescripcionSecundaria;

                        _this7.agregarEntidadLocal(total[i].Eventos[0].DetalleEventoMes.Titulo, total[i].Eventos[0].DetalleEventoMes.NombrePaciente, indice, id, texto);

                        indice++;

                        _this7.crearNotificacion(id, titulo, texto);
                      }
                    }

                    console.log(nuevas);
                  }
                })["catch"](function (error) {
                  console.log(error.message);

                  _this7.utiles.presentToast('Hay errores al comunicarse con el servidor, contacte al administrador', 'bottom', 2000);
                });
              }
            } else {
              //llamada web
              if (this.parametrosApp.USA_API_MANAGEMENT()) {
                this.citas.entregaPorMesNuevoLivianoApi(usuario.Id, usuario.IdRyf, usuario.NodId, mesConsultar, annoConsultar).subscribe(function (response) {
                  var todas = response;

                  if (todas && todas.length > 0) {
                    for (var i = 0; i < todas.length; i++) {
                      if (todas[i].Eventos && todas[i].Eventos.length > 0) {
                        //foreach a LOS EVENTOS
                        for (var s = 0; s < todas[i].Eventos.length; s++) {
                          var fecha = moment__WEBPACK_IMPORTED_MODULE_4__(todas[i].Eventos[s].DetalleEventoMes.FechaHora).format("DD-MM-YYYY");
                          var hora = todas[i].Eventos[s].HoraInicioFin;
                          var lugar = todas[i].Eventos[s].DetalleEventoMes.Lugar;
                          var id = todas[i].Eventos[s].DetalleEventoMes.IdElemento;
                          var titulo = todas[i].Eventos[s].DetalleEventoMes.Titulo;
                          var texto = fecha + ' ' + hora + '\n' + todas[i].Eventos[s].DetalleEventoMes.DescripcionPrincipal + '\n' + todas[i].Eventos[s].DetalleEventoMes.DescripcionSecundaria + '\n' + lugar; //var texto = total[i].Eventos[0].DetalleEventoMes.DescripcionPrincipal + ", " + total[i].Eventos[0].DetalleEventoMes.DescripcionSecundaria;

                          _this7.agregarEntidadLocal(todas[i].Eventos[s].DetalleEventoMes.Titulo, todas[i].Eventos[s].DetalleEventoMes.NombrePaciente, indice, id, texto);

                          indice++;

                          _this7.crearNotificacion(id, titulo, texto);
                        }
                      }
                    }
                  }
                });
              } else {
                this.citas.entregaPorMesNuevo(usuario.Id, usuario.IdRyf, usuario.NodId, mesConsultar, annoConsultar).subscribe(function (response) {
                  //aca debemos procesar las citas
                  var todas = response;

                  if (todas && todas.length > 0) {
                    //aplicamos el primer filtro
                    var nuevas = todas.filter(function (e) {
                      return e.Mostrar == true;
                    });
                    var total = nuevas.filter(function (e) {
                      return moment__WEBPACK_IMPORTED_MODULE_4__(e.FechaCompleta) >= moment__WEBPACK_IMPORTED_MODULE_4__() && moment__WEBPACK_IMPORTED_MODULE_4__(e.FechaCompleta) <= moment__WEBPACK_IMPORTED_MODULE_4__().add(5, 'days');
                    });

                    if (total && total.length > 0) {
                      //por cada uno de estos debemos hacer un mensaje
                      for (var i = 0; i < total.length; i++) {
                        var fecha = moment__WEBPACK_IMPORTED_MODULE_4__(total[i].Eventos[0].DetalleEventoMes.FechaHora).format("DD-MM-YYYY");
                        var hora = total[i].Eventos[0].HoraInicioFin;
                        var lugar = total[i].Eventos[0].DetalleEventoMes.Lugar;
                        var id = total[i].Eventos[0].DetalleEventoMes.IdElemento;
                        var titulo = total[i].Eventos[0].DetalleEventoMes.Titulo;
                        var texto = fecha + ' ' + hora + '\n' + total[i].Eventos[0].DetalleEventoMes.DescripcionPrincipal + '\n' + total[i].Eventos[0].DetalleEventoMes.DescripcionSecundaria + '\n' + lugar; //var texto = total[i].Eventos[0].DetalleEventoMes.DescripcionPrincipal + ", " + total[i].Eventos[0].DetalleEventoMes.DescripcionSecundaria;

                        _this7.agregarEntidadLocal(total[i].Eventos[0].DetalleEventoMes.Titulo, total[i].Eventos[0].DetalleEventoMes.NombrePaciente, indice, id, texto);

                        indice++;

                        _this7.crearNotificacion(id, titulo, texto);
                      }
                    }

                    console.log(nuevas);
                  }
                }, function (error) {
                  console.log(error.message);

                  _this7.utiles.presentToast('Hay errores al comunicarse con el servidor, contacte al administrador', 'bottom', 2000);
                });
              }
            }
          }
        }
      }, {
        key: "construyeNotificaciones",
        value: function construyeNotificaciones(todas) {
          var arr = [];
          var indice = 1;

          if (localStorage.getItem('UsuarioAps')) {
            var usuario = JSON.parse(localStorage.getItem('UsuarioAps'));

            if (usuario && usuario.VacunasCovid) {
              if (usuario.VacunasCovid.length > 0) {
                usuario.VacunasCovid.forEach(function (element) {
                  var entidad = {
                    Titulo: element.DescripcionDosis + ' ' + element.DescripcionVacuna,
                    Subtitulo: usuario.Nombres + ' ' + usuario.ApellidoPaterno + ' ' + usuario.ApellidoMaterno,
                    Contenido: 'Tienes aplicada esta dosis el día ' + moment__WEBPACK_IMPORTED_MODULE_4__(element.FechaInmunizacion).format('DD-MM-YYYY') + ' en el centro de salud ' + element.DescripcionEstablecimiento,
                    Id: element.Id,
                    Indice: indice,
                    IrA: null
                  };
                  arr.push(entidad);
                  indice++;
                });
              }
            }
          } //local storage


          if (localStorage.getItem('UsuariosFamilia')) {
            var usuarios = JSON.parse(localStorage.getItem('UsuariosFamilia'));

            if (usuarios && usuarios.length > 0) {
              usuarios.forEach(function (usuario) {
                if (usuario && usuario.VacunasCovid.length > 0) {
                  usuario.VacunasCovid.forEach(function (element) {
                    var entidad = {
                      Titulo: element.DescripcionDosis + ' ' + element.DescripcionVacuna,
                      Subtitulo: usuario.Nombres + ' ' + usuario.ApellidoPaterno + ' ' + usuario.ApellidoMaterno,
                      Contenido: 'Tienes aplicada esta dosis el día ' + moment__WEBPACK_IMPORTED_MODULE_4__(element.FechaInmunizacion).format('DD-MM-YYYY') + ' en el centro de salud ' + element.DescripcionEstablecimiento,
                      Id: element.Id,
                      Indice: indice,
                      IrA: null
                    };
                    arr.push(entidad);
                    indice++;
                  });
                }
              });
            }
          }

          if (todas && todas.length > 0) {
            for (var i = 0; i < todas.length; i++) {
              if (todas[i].Eventos && todas[i].Eventos.length > 0) {
                //foreach a LOS EVENTOS
                for (var s = 0; s < todas[i].Eventos.length; s++) {
                  var fecha = moment__WEBPACK_IMPORTED_MODULE_4__(todas[i].Eventos[s].DetalleEventoMes.FechaHora).format("DD-MM-YYYY");
                  var hora = todas[i].Eventos[s].HoraInicioFin;
                  var lugar = todas[i].Eventos[s].DetalleEventoMes.Lugar;
                  var id = todas[i].Eventos[s].DetalleEventoMes.IdElemento;
                  var titulo = todas[i].Eventos[s].DetalleEventoMes.Titulo;
                  var texto = fecha + ' ' + hora + '\n' + todas[i].Eventos[s].DetalleEventoMes.DescripcionPrincipal + '\n' + todas[i].Eventos[s].DetalleEventoMes.DescripcionSecundaria + '\n' + lugar; //var texto = total[i].Eventos[0].DetalleEventoMes.DescripcionPrincipal + ", " + total[i].Eventos[0].DetalleEventoMes.DescripcionSecundaria;

                  var entidad = {
                    Titulo: titulo,
                    Subtitulo: todas[i].Eventos[s].DetalleEventoMes.NombrePaciente,
                    Contenido: texto,
                    Id: id,
                    Indice: indice,
                    IrA: null
                  };
                  arr.push(entidad);
                  indice++;
                }
              }
            }
          } //familia por aceptar


          if (localStorage.getItem('FAMILIA-POR-ACEPTAR')) {
            var arrFam = JSON.parse(localStorage.getItem('FAMILIA-POR-ACEPTAR'));
            arrFam.forEach(function (familia) {
              var entidad = {
                Titulo: 'Miembro de la familia',
                Subtitulo: familia.NombreCompleto,
                Contenido: 'Tienes a ' + familia.NombreCompleto + ' que podrías aceptar y ver su información de salud',
                Id: familia.Id,
                Indice: indice,
                IrA: 'asociar-familia'
              };
              arr.push(entidad);
              indice++;
            });
          }

          return arr;
        }
      }]);

      return ServicioNotificaciones;
    }();

    ServicioNotificaciones.ctorParameters = function () {
      return [{
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["Platform"]
      }, {
        type: _ionic_native_app_version_ngx__WEBPACK_IMPORTED_MODULE_3__["AppVersion"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ToastController"]
      }, {
        type: _ionic_native_local_notifications_ngx__WEBPACK_IMPORTED_MODULE_5__["LocalNotifications"]
      }, {
        type: _app_services_ServicioUtiles__WEBPACK_IMPORTED_MODULE_6__["ServicioUtiles"]
      }, {
        type: _app_services_ServicioCitas__WEBPACK_IMPORTED_MODULE_7__["ServicioCitas"]
      }, {
        type: _app_services_ServicioParametrosApp__WEBPACK_IMPORTED_MODULE_8__["ServicioParametrosApp"]
      }];
    };

    ServicioNotificaciones = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])()], ServicioNotificaciones);
    /***/
  },

  /***/
  "./src/app/services/ServicioNotificacionesLocales.ts":
  /*!***********************************************************!*\
    !*** ./src/app/services/ServicioNotificacionesLocales.ts ***!
    \***********************************************************/

  /*! exports provided: ServicioNotificacionesLocales */

  /***/
  function srcAppServicesServicioNotificacionesLocalesTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ServicioNotificacionesLocales", function () {
      return ServicioNotificacionesLocales;
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


    var _ionic_native_app_version_ngx__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @ionic-native/app-version/ngx */
    "./node_modules/@ionic-native/app-version/__ivy_ngcc__/ngx/index.js");
    /* harmony import */


    var moment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! moment */
    "./node_modules/moment/moment.js");
    /* harmony import */


    var moment__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_4__);
    /* harmony import */


    var _ionic_native_local_notifications_ngx__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @ionic-native/local-notifications/ngx */
    "./node_modules/@ionic-native/local-notifications/__ivy_ngcc__/ngx/index.js");
    /* harmony import */


    var _app_services_ServicioUtiles__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ../../app/services/ServicioUtiles */
    "./src/app/services/ServicioUtiles.ts");
    /* harmony import */


    var _app_services_ServicioCitas__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ../../app/services/ServicioCitas */
    "./src/app/services/ServicioCitas.ts");
    /* harmony import */


    var _app_services_ServicioParametrosApp__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ../../app/services/ServicioParametrosApp */
    "./src/app/services/ServicioParametrosApp.ts"); //notificaciones locales
    //utiles
    //citas


    var ServicioNotificacionesLocales = /*#__PURE__*/function () {
      function ServicioNotificacionesLocales(platform, appVersion, toast, localNotifications, utiles, citas, parametrosApp) {
        _classCallCheck(this, ServicioNotificacionesLocales);

        this.platform = platform;
        this.appVersion = appVersion;
        this.toast = toast;
        this.localNotifications = localNotifications;
        this.utiles = utiles;
        this.citas = citas;
        this.parametrosApp = parametrosApp; //inicializamos los valores

        moment__WEBPACK_IMPORTED_MODULE_4__["locale"]('es');
      } //busqueda de notificaciones locales
      //definiremos las vacunas covid como notificaciones locales


      _createClass(ServicioNotificacionesLocales, [{
        key: "getAll",
        value: function getAll() {
          var lista = [];
          var indice = 0; //local storage

          if (localStorage.getItem('UsuarioAps')) {
            var usuario = JSON.parse(localStorage.getItem('UsuarioAps'));

            if (usuario && usuario.VacunasCovid) {
              if (usuario.VacunasCovid.length > 0) {
                usuario.VacunasCovid.forEach(function (element) {
                  var entidad = {
                    Titulo: element.DescripcionDosis + ' ' + element.DescripcionVacuna,
                    Subtitulo: usuario.Nombres + ' ' + usuario.ApellidoPaterno + ' ' + usuario.ApellidoMaterno,
                    Contenido: 'Tienes aplicada esta dosis el día ' + moment__WEBPACK_IMPORTED_MODULE_4__(element.FechaInmunizacion).format('DD-MM-YYYY') + ' en el centro de salud ' + element.DescripcionEstablecimiento,
                    Id: element.Id,
                    Indice: indice
                  };
                  lista.push(entidad);
                  indice++;
                });
              }
            }
          } //local storage


          if (localStorage.getItem('UsuariosFamilia')) {
            var usuarios = JSON.parse(localStorage.getItem('UsuariosFamilia'));

            if (usuarios && usuarios.length > 0) {
              usuarios.forEach(function (usuario) {
                if (usuario && usuario.VacunasCovid.length > 0) {
                  usuario.VacunasCovid.forEach(function (element) {
                    var entidad = {
                      Titulo: element.DescripcionDosis + ' ' + element.DescripcionVacuna,
                      Subtitulo: usuario.Nombres + ' ' + usuario.ApellidoPaterno + ' ' + usuario.ApellidoMaterno,
                      Contenido: 'Tienes aplicada esta dosis el día ' + moment__WEBPACK_IMPORTED_MODULE_4__(element.FechaInmunizacion).format('DD-MM-YYYY') + ' en el centro de salud ' + element.DescripcionEstablecimiento,
                      Id: element.Id,
                      Indice: indice
                    };
                    lista.push(entidad);
                    indice++;
                  });
                }
              });
            }
          } //estas son nottificaciones que se obtuvieron de los eventos


          if (localStorage.getItem('NOTIFICACIONES_LOCALES_EVENTOS')) {
            var listaEventos = JSON.parse(localStorage.getItem('NOTIFICACIONES_LOCALES_EVENTOS'));

            if (listaEventos != null && listaEventos.length > 0) {
              listaEventos.forEach(function (evento) {
                evento.Indice = indice;
                lista.push(evento);
                indice++;
              });
            }
          }

          return lista;
        }
      }, {
        key: "removeCita",
        value: function removeCita(idCita) {
          if (localStorage.getItem('NOTIFICACIONES_LOCALES_EVENTOS')) {
            var listaEventos = JSON.parse(localStorage.getItem('NOTIFICACIONES_LOCALES_EVENTOS'));

            if (listaEventos != null && listaEventos.length > 0) {
              var listaSinElemento = listaEventos.filter(function (p) {
                return p.Id != idCita;
              }); //esta es la nueva lista

              if (listaSinElemento && listaSinElemento.length > 0) {
                localStorage.setItem('NOTIFICACIONES_LOCALES_EVENTOS', JSON.stringify(listaSinElemento));
              }
            }
          }
        }
      }]);

      return ServicioNotificacionesLocales;
    }();

    ServicioNotificacionesLocales.ctorParameters = function () {
      return [{
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["Platform"]
      }, {
        type: _ionic_native_app_version_ngx__WEBPACK_IMPORTED_MODULE_3__["AppVersion"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ToastController"]
      }, {
        type: _ionic_native_local_notifications_ngx__WEBPACK_IMPORTED_MODULE_5__["LocalNotifications"]
      }, {
        type: _app_services_ServicioUtiles__WEBPACK_IMPORTED_MODULE_6__["ServicioUtiles"]
      }, {
        type: _app_services_ServicioCitas__WEBPACK_IMPORTED_MODULE_7__["ServicioCitas"]
      }, {
        type: _app_services_ServicioParametrosApp__WEBPACK_IMPORTED_MODULE_8__["ServicioParametrosApp"]
      }];
    };

    ServicioNotificacionesLocales = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])()], ServicioNotificacionesLocales);
    /***/
  },

  /***/
  "./src/app/services/ServicioPaginacion.ts":
  /*!************************************************!*\
    !*** ./src/app/services/ServicioPaginacion.ts ***!
    \************************************************/

  /*! exports provided: ServicioPaginacion */

  /***/
  function srcAppServicesServicioPaginacionTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ServicioPaginacion", function () {
      return ServicioPaginacion;
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


    var _ionic_native_app_version_ngx__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @ionic-native/app-version/ngx */
    "./node_modules/@ionic-native/app-version/__ivy_ngcc__/ngx/index.js");
    /* harmony import */


    var moment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! moment */
    "./node_modules/moment/moment.js");
    /* harmony import */


    var moment__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_4__);

    var ServicioPaginacion = /*#__PURE__*/function () {
      function ServicioPaginacion(platform, appVersion, toast) {
        _classCallCheck(this, ServicioPaginacion);

        this.platform = platform;
        this.appVersion = appVersion;
        this.toast = toast;
        this.pager = {
          TotalPaginas: 0,
          TotalRegistros: 0,
          PaginaSeleccionada: 0,
          Items: [],
          ItemsTotal: [],
          Limite: 10
        }; //inicializamos los valores

        moment__WEBPACK_IMPORTED_MODULE_4__["locale"]('es');
      }

      _createClass(ServicioPaginacion, [{
        key: "setPage",
        value: function setPage(page) {
          if (this.pager.ItemsTotal && this.pager.ItemsTotal.length > 0) {
            var startIndex = 0;
            var endIndex = this.pager.Limite;

            if (page > 0) {
              this.pager.PaginaSeleccionada = page;
              startIndex = page * this.pager.Limite - 1;
              endIndex = startIndex + this.pager.Limite;
            }

            console.log('start ' + startIndex);
            console.log('end ' + endIndex);
            this.pager.Items = [];
            var elementos = this.pager.ItemsTotal.slice(startIndex, endIndex);
            this.pager.Items = elementos;
          }

          console.log(this.pager);
        }
      }, {
        key: "setDataPages",
        value: function setDataPages(items) {
          if (items != null && items.length > 0) {
            var cantidadPaginas = Math.round(items.length / this.pager.Limite);
            console.log(cantidadPaginas);
            this.pager.TotalPaginas = cantidadPaginas;
            this.pager.TotalRegistros = items.length;
            this.pager.ItemsTotal = items;
            console.log(this.pager);
          } else {
            //no hay registros
            this.pager.Items = [];
            this.pager.ItemsTotal = [];
            this.pager.PaginaSeleccionada = 0;
            this.pager.TotalPaginas = 0;
            this.pager.TotalRegistros = 0;
          }
        }
      }]);

      return ServicioPaginacion;
    }();

    ServicioPaginacion.ctorParameters = function () {
      return [{
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["Platform"]
      }, {
        type: _ionic_native_app_version_ngx__WEBPACK_IMPORTED_MODULE_3__["AppVersion"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ToastController"]
      }];
    };

    ServicioPaginacion = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])()], ServicioPaginacion);
    /***/
  },

  /***/
  "./src/app/services/ServicioParametrosApp.ts":
  /*!***************************************************!*\
    !*** ./src/app/services/ServicioParametrosApp.ts ***!
    \***************************************************/

  /*! exports provided: ServicioParametrosApp */

  /***/
  function srcAppServicesServicioParametrosAppTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ServicioParametrosApp", function () {
      return ServicioParametrosApp;
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


    var _ionic_native_app_version_ngx__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @ionic-native/app-version/ngx */
    "./node_modules/@ionic-native/app-version/__ivy_ngcc__/ngx/index.js");
    /* harmony import */


    var _ionic_native_device_ngx__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @ionic-native/device/ngx */
    "./node_modules/@ionic-native/device/__ivy_ngcc__/ngx/index.js");
    /* harmony import */


    var moment__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! moment */
    "./node_modules/moment/moment.js");
    /* harmony import */


    var moment__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_5__);

    var ServicioParametrosApp = function ServicioParametrosApp(platform, appVersion, toast, device) {
      _classCallCheck(this, ServicioParametrosApp);

      this.platform = platform;
      this.appVersion = appVersion;
      this.toast = toast;
      this.device = device;

      this.HORAS_FECHA_INICIO = function () {
        var retorno = 3;

        if (localStorage.getItem('PARAMETROS_APP')) {
          var elementos = JSON.parse(localStorage.getItem('PARAMETROS_APP'));

          if (elementos && elementos.length > 0) {
            var arrRetorno = elementos.find(function (p) {
              return p.Nombre == 'HORAS_FECHA_INICIO';
            });

            if (arrRetorno && arrRetorno.Id > 0) {
              retorno = parseInt(arrRetorno.Valor);
            }
          }
        }

        return retorno;
      };

      this.USA_CLAVE_UNICA = function () {
        var retorno = false;

        if (localStorage.getItem('PARAMETROS_APP')) {
          var elementos = JSON.parse(localStorage.getItem('PARAMETROS_APP'));

          if (elementos && elementos.length > 0) {
            var arrRetorno = elementos.find(function (p) {
              return p.Nombre == 'USA_CLAVE_UNICA';
            });

            if (arrRetorno && arrRetorno.Id > 0) {
              if (parseInt(arrRetorno.Valor) == 1) retorno = true;
            }
          }
        }

        return retorno;
      };

      this.USA_ENTIDAD_CONTRATANTE = function () {
        var retorno = false;

        if (localStorage.getItem('PARAMETROS_APP')) {
          var elementos = JSON.parse(localStorage.getItem('PARAMETROS_APP'));

          if (elementos && elementos.length > 0) {
            var arrRetorno = elementos.find(function (p) {
              return p.Nombre == 'USA_ENTIDAD_CONTRATANTE';
            });

            if (arrRetorno && arrRetorno.Id > 0) {
              if (parseInt(arrRetorno.Valor) == 1) retorno = true;
            }
          }
        }

        return retorno;
      };

      this.USA_LOGIN_ENROLAMIENTO = function () {
        var retorno = false;

        if (localStorage.getItem('PARAMETROS_APP')) {
          var elementos = JSON.parse(localStorage.getItem('PARAMETROS_APP'));

          if (elementos && elementos.length > 0) {
            var arrRetorno = elementos.find(function (p) {
              return p.Nombre == 'USA_LOGIN_ENROLAMIENTO';
            });

            if (arrRetorno && arrRetorno.Id > 0) {
              if (parseInt(arrRetorno.Valor) == 1) retorno = true;
            }
          }
        }

        return retorno;
      };

      this.USA_API_MANAGEMENT = function () {
        var retorno = false;

        if (localStorage.getItem('PARAMETROS_APP')) {
          var elementos = JSON.parse(localStorage.getItem('PARAMETROS_APP'));

          if (elementos && elementos.length > 0) {
            var arrRetorno = elementos.find(function (p) {
              return p.Nombre == 'USA_API_MANAGEMENT';
            });

            if (arrRetorno && arrRetorno.Id > 0) {
              if (parseInt(arrRetorno.Valor) == 1) retorno = true;
            }
          }
        }

        return retorno;
      };

      this.USA_LOG_MODULOS = function () {
        var retorno = false;

        if (localStorage.getItem('PARAMETROS_APP')) {
          var elementos = JSON.parse(localStorage.getItem('PARAMETROS_APP'));

          if (elementos && elementos.length > 0) {
            var arrRetorno = elementos.find(function (p) {
              return p.Nombre == 'USA_LOG_MODULOS';
            });

            if (arrRetorno && arrRetorno.Id > 0) {
              if (parseInt(arrRetorno.Valor) == 1) retorno = true;
            }
          }
        }

        return retorno;
      };

      this.DIAS_LOG_MODULOS = function () {
        var retorno = 3;

        if (localStorage.getItem('PARAMETROS_APP')) {
          var elementos = JSON.parse(localStorage.getItem('PARAMETROS_APP'));

          if (elementos && elementos.length > 0) {
            var arrRetorno = elementos.find(function (p) {
              return p.Nombre == 'DIAS_LOG_MODULOS';
            });

            if (arrRetorno && arrRetorno.Id > 0) {
              retorno = parseInt(arrRetorno.Valor);
            }
          }
        }

        return retorno;
      };

      this.URL_ACEPTA_CONDICIONES = function () {
        var retorno = '#';

        if (localStorage.getItem('PARAMETROS_APP')) {
          var elementos = JSON.parse(localStorage.getItem('PARAMETROS_APP'));

          if (elementos && elementos.length > 0) {
            var arrRetorno = elementos.find(function (p) {
              return p.Nombre == 'URL_ACEPTA_CONDICIONES';
            });

            if (arrRetorno && arrRetorno.Id > 0) {
              retorno = arrRetorno.Valor;
            }
          }
        }

        return retorno;
      }; //inicializamos los valores


      moment__WEBPACK_IMPORTED_MODULE_5__["locale"]('es');
    };

    ServicioParametrosApp.ctorParameters = function () {
      return [{
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["Platform"]
      }, {
        type: _ionic_native_app_version_ngx__WEBPACK_IMPORTED_MODULE_3__["AppVersion"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ToastController"]
      }, {
        type: _ionic_native_device_ngx__WEBPACK_IMPORTED_MODULE_4__["Device"]
      }];
    };

    ServicioParametrosApp = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])()], ServicioParametrosApp);
    /***/
  },

  /***/
  "./src/app/services/ServicioUtiles.ts":
  /*!********************************************!*\
    !*** ./src/app/services/ServicioUtiles.ts ***!
    \********************************************/

  /*! exports provided: ServicioUtiles */

  /***/
  function srcAppServicesServicioUtilesTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ServicioUtiles", function () {
      return ServicioUtiles;
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


    var _ionic_native_app_version_ngx__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @ionic-native/app-version/ngx */
    "./node_modules/@ionic-native/app-version/__ivy_ngcc__/ngx/index.js");
    /* harmony import */


    var _ionic_native_device_ngx__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @ionic-native/device/ngx */
    "./node_modules/@ionic-native/device/__ivy_ngcc__/ngx/index.js");
    /* harmony import */


    var moment__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! moment */
    "./node_modules/moment/moment.js");
    /* harmony import */


    var moment__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_5__);
    /* harmony import */


    var _environments_environment__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ../../environments/environment */
    "./src/environments/environment.ts");
    /* harmony import */


    var _services_ServicioGeo__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ../services/ServicioGeo */
    "./src/app/services/ServicioGeo.ts"); //servicio


    var ServicioUtiles = /*#__PURE__*/function () {
      function ServicioUtiles(platform, appVersion, toast, device, servicioGeo) {
        _classCallCheck(this, ServicioUtiles);

        this.platform = platform;
        this.appVersion = appVersion;
        this.toast = toast;
        this.device = device;
        this.servicioGeo = servicioGeo;
        this.infoAplicacion = {
          VersionAppName: '',
          VersionNumnber: '',
          Plataforma: ''
        };
        this.semana = {
          start: '',
          end: '',
          texto: '',
          semanas: []
        };
        this.semanas = []; //inicializamos los valores

        moment__WEBPACK_IMPORTED_MODULE_5__["locale"]('es');
      }

      _createClass(ServicioUtiles, [{
        key: "isAppOnDevice",
        value: function isAppOnDevice() {
          if (window.location.port === '8100') {
            return false;
          } else {
            return true;
          }
        }
      }, {
        key: "procesarRespuestaMapa",
        value: function procesarRespuestaMapa(objeto) {
          var _this8 = this;

          //lo cambiamos a local storage para hacerlo más global
          //y no consultar tantas veces para ocupar la api
          var retorno = false;

          try {
            if (objeto.results && objeto.results[0]) {
              if (objeto.results[0].address_components && objeto.results[0].address_components.length > 0) {
                //ahora recorremos los elementos
                objeto.results[0].address_components.forEach(function (element) {
                  var busquedaCom = element.types.find(function (ele) {
                    return ele == 'administrative_area_level_3';
                  });

                  if (busquedaCom) {
                    _this8.comuna = element.long_name;
                    localStorage.setItem('comuna', _this8.comuna);
                  }

                  var busquedaReg = element.types.find(function (ele) {
                    return ele == 'administrative_area_level_1';
                  });

                  if (busquedaReg) {
                    _this8.region = element.long_name;
                    localStorage.setItem('region', _this8.region);
                  }

                  var busquedaProv = element.types.find(function (ele) {
                    return ele == 'administrative_area_level_2';
                  });

                  if (busquedaProv) {
                    _this8.provincia = element.long_name;
                    localStorage.setItem('provincia', _this8.provincia);
                  }

                  var busquedaPais = element.types.find(function (ele) {
                    return ele == 'country';
                  });

                  if (busquedaPais) {
                    _this8.pais = element.long_name;
                    localStorage.setItem('pais', _this8.pais);
                  }
                });
              }
            }

            retorno = true;
          } catch (error) {
            console.log(error);
          }

          return retorno; //console.log(this.pais + ' ' + this.region);
        }
      }, {
        key: "presentToast",
        value: function presentToast(mensaje, posicion, duracion) {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
            var toas;
            return regeneratorRuntime.wrap(function _callee2$(_context2) {
              while (1) {
                switch (_context2.prev = _context2.next) {
                  case 0:
                    _context2.next = 2;
                    return this.toast.create({
                      message: mensaje,
                      position: posicion,
                      duration: duracion
                    });

                  case 2:
                    toas = _context2.sent;
                    toas.present();

                  case 4:
                  case "end":
                    return _context2.stop();
                }
              }
            }, _callee2, this);
          }));
        }
      }, {
        key: "insertarGuion",
        value: function insertarGuion(rut) {
          var retorno = '';

          if (rut && rut.length >= 2) {
            var index = rut.length - 1;
            var parte1 = rut.slice(0, index);
            var parte2 = rut.slice(index, index + 1);
            retorno = parte1 + '-' + parte2;
          }

          return retorno;
        }
      }, {
        key: "textoBienvenida",
        value: function textoBienvenida(nombre) {
          var fecha = moment__WEBPACK_IMPORTED_MODULE_5__();
          var hrs = fecha.hour();
          var sms = '';

          if (hrs < 12) {
            sms = 'Buenos días ' + nombre;
          } else if (hrs >= 12 && hrs <= 17) {
            sms = 'Buenas tardes ' + nombre;
          } else if (hrs >= 17 && hrs <= 24) {
            sms = 'Buenas noches ' + nombre;
          }

          return sms;
        }
        /*     entregaMiColor(){
                var retorno = '#757575';
                if (sessionStorage.getItem('UsuarioAps')) {
                    var usuarioAps = JSON.parse(sessionStorage.getItem('UsuarioAps'));
                    if (usuarioAps.Color && usuarioAps.Color != '') {
                        if (localStorage.getItem('MI_COLOR')) {
                            var colorSession = localStorage.getItem('MI_COLOR');
                            if (colorSession != usuarioAps.Color) {
                                retorno = colorSession;
                            }
                            else{
                                //esto hay que revisarlo
                                //retorno = usuarioAps.Color;
                                retorno = colorSession;
                            }
                        }
                        else {
                            retorno = usuarioAps.Color;
                        }
                    }
                }
                return retorno;
            } */

      }, {
        key: "entregaMiColor",
        value: function entregaMiColor() {
          var retorno = '#757575';

          if (localStorage.getItem('MI_COLOR')) {
            var miColor = localStorage.getItem('MI_COLOR');

            if (miColor != '') {
              retorno = miColor;
            }
          }

          return retorno;
        }
      }, {
        key: "cambiaColorLocalStorage",
        value: function cambiaColorLocalStorage(color) {
          if (sessionStorage.getItem('UsuarioAps')) {
            //si está lo obtenemos
            var usuarioAps = JSON.parse(sessionStorage.getItem('UsuarioAps'));

            if (usuarioAps) {
              usuarioAps.Color = color;
            } //volvemos a guardar la variable


            sessionStorage.setItem('UsuarioAps', JSON.stringify(usuarioAps));
          }
        }
      }, {
        key: "entregaParametroUsaAgenda",
        value: function entregaParametroUsaAgenda() {
          var usaAgenda = false;
          var usuarioAps = JSON.parse(sessionStorage.getItem('UsuarioAps'));

          if (usuarioAps.ParametrosRayen && usuarioAps.ParametrosRayen.length > 0) {
            usuarioAps.ParametrosRayen.forEach(function (param) {
              if (param.Descripcion == 'DISPONIBILIZA_AGENDA_WEB') {
                if (param.Valor == '1') {
                  usaAgenda = true;
                }
              }
            });
          }

          return usaAgenda;
        }
      }, {
        key: "tieneFamiliaAceptada",
        value: function tieneFamiliaAceptada() {
          var retorno = false;

          if (localStorage.getItem('FAMILIA-ACEPTADA')) {
            var fam = JSON.parse(localStorage.getItem('FAMILIA-ACEPTADA'));

            if (fam && fam.length > 0) {
              retorno = true;
            }
          }

          return retorno;
        }
      }, {
        key: "tieneFamiliaRechazada",
        value: function tieneFamiliaRechazada() {
          var retorno = false;

          if (localStorage.getItem('FAMILIA-RECHAZADA')) {
            var fam = JSON.parse(localStorage.getItem('FAMILIA-RECHAZADA'));

            if (fam && fam.length > 0) {
              retorno = true;
            }
          }

          return retorno;
        }
      }, {
        key: "entregaMenuPages",
        value: function entregaMenuPages() {
          var usaAgenda = this.entregaParametroUsaAgenda();
          var arrPages = [];
          var pagUno = {
            title: 'Configurar familia',
            visible: true,
            icon: 'settings',
            src: 'familia',
            esSubMenu: false
          };
          arrPages.push(pagUno); //ahora los submenus de configurar familia
          //simepre y cuando tenga familia aceptada

          /*         if (this.tieneFamiliaAceptada() || this.tieneFamiliaRechazada()) {
                      var pagQuitarIntegrantes = {
                          title: 'Desactivar/Activar',
                          visible: false,
                          icon: 'person',
                          src: 'quitar-familia',
                          esSubMenu: true
                      }
                      arrPages.push(pagQuitarIntegrantes);
                  }
                  var pagConfigContacto = {
                      title: 'Datos de contacto/avatar',
                      visible: false,
                      icon: 'share',
                      src: 'familia',
                      esSubMenu: true
                  }
                  arrPages.push(pagConfigContacto); */

          var pagDos = {
            title: 'Términos y condiciones',
            visible: true,
            src: 'home',
            icon: 'link',
            esSubMenu: false
          };
          arrPages.push(pagDos);
          return arrPages;
        }
      }, {
        key: "entregaMiImagen",
        value: function entregaMiImagen() {
          var retorno = _environments_environment__WEBPACK_IMPORTED_MODULE_6__["environment"].URL_FOTOS + '/Recursos/logousuario.png';

          if (sessionStorage.getItem('UsuarioAps')) {
            var usuarioAps = JSON.parse(sessionStorage.getItem('UsuarioAps'));

            if (usuarioAps.UrlImagen && usuarioAps.UrlImagen != '') {
              if (localStorage.getItem('MI_IMAGEN')) {
                var imagen = localStorage.getItem('MI_IMAGEN');

                if (imagen != usuarioAps.Color) {
                  retorno = _environments_environment__WEBPACK_IMPORTED_MODULE_6__["environment"].URL_FOTOS + imagen;
                }
              } else {
                retorno = _environments_environment__WEBPACK_IMPORTED_MODULE_6__["environment"].URL_FOTOS + usuarioAps.UrlImagen;
              }
            }
          } //mostramos solo si tiene imagen valida


          if (retorno.includes('Recursos/logousuario.png')) {
            retorno = '';
          }

          return retorno;
        }
      }, {
        key: "entregaColor",
        value: function entregaColor(usuarioAps) {
          var retorno = '#757575';

          if (usuarioAps) {
            if (usuarioAps.Color && usuarioAps.Color != '') {
              retorno = usuarioAps.Color;
            }
          }

          return retorno;
        }
      }, {
        key: "entregaImagen",
        value: function entregaImagen(usuarioAps) {
          var retorno = _environments_environment__WEBPACK_IMPORTED_MODULE_6__["environment"].URL_FOTOS + '/Recursos/logousuario.png';

          if (usuarioAps) {
            if (usuarioAps.UrlImagen && usuarioAps.UrlImagen != '') {
              retorno = _environments_environment__WEBPACK_IMPORTED_MODULE_6__["environment"].URL_FOTOS + usuarioAps.UrlImagen;
            }
          } //mostramos solo si tiene imagen valida


          if (retorno.includes('Recursos/logousuario.png')) {
            retorno = '';
          }

          if (retorno == _environments_environment__WEBPACK_IMPORTED_MODULE_6__["environment"].URL_FOTOS + 'Recursos/') {
            retorno = '';
          }

          return retorno;
        }
      }, {
        key: "entregaMiNombre",
        value: function entregaMiNombre() {
          var retorno = '';

          if (sessionStorage.getItem('UsuarioAps')) {
            var usuarioAps = JSON.parse(sessionStorage.getItem('UsuarioAps'));
            var nombreInicial = usuarioAps.Nombres + ' ' + usuarioAps.ApellidoPaterno;

            if (nombreInicial != '') {
              if (localStorage.getItem('MI_NOMBRE')) {
                var nombre = localStorage.getItem('MI_NOMBRE');

                if (nombreInicial != nombre) {
                  retorno = nombre;
                } else {
                  retorno = nombreInicial;
                }
              } else {
                retorno = nombreInicial;
              }
            }
          }

          return retorno;
        } //metodos para construir semanas y días

        /*
            estructura
            start: '2020-11-10T00:00:00-04:00',
            end:   '2020-11-10T23:59:59-04:00',
            organization: 'codigo deis 199991',
            patient: 'run sin guion 17000904',
            serviceType: '346' //por el momento es el único
            texto: 'Horas disponibles/horas no disponibles',
          */

      }, {
        key: "construyeSemana",
        value: function construyeSemana(runPaciente, organization, fechaInicio) {
          //fecha hora actual
          //en moment el formato T se usa moment().format() sin parametros
          //la fecha actual debe considerar la hora siempre buscar desde el día siguiente
          this.semanas = [];
          var actual = fechaInicio;
          var fechaInicioSemana = new Date(actual.getFullYear(), actual.getMonth(), actual.getDate(), 0, 0, 0, 0);
          var fechaInicioSemanaH = new Date(actual.getFullYear(), actual.getMonth(), actual.getDate(), 23, 59, 0, 0);
          var inicioSemanaM = moment__WEBPACK_IMPORTED_MODULE_5__(fechaInicioSemana).add(1, 'day');
          console.log(inicioSemanaM.format());
          var inicioSemanaH = moment__WEBPACK_IMPORTED_MODULE_5__(fechaInicioSemanaH).add(7, 'day');
          console.log(inicioSemanaH.format());
          var diff = inicioSemanaH.diff(inicioSemanaM, 'days');
          console.log(diff);
          this.semana.start = inicioSemanaM.format();
          this.semana.end = inicioSemanaH.format(); //texto de la semana

          this.semana.texto = 'Semana entre el ' + inicioSemanaM.format('DD-MM-YYYY') + ' hasta ' + inicioSemanaH.format('DD-MM-YYYY');
          /*         var entidadCompleta = {
                      start: inicioSemanaM.format(),
                      end: inicioSemanaH.format(),
                  }; */

          if (diff > 0) {
            for (var i = 0; i <= diff; i++) {
              //volvemos a procesar fechas locales
              var fechaInicioLocal = new Date(inicioSemanaM.year(), inicioSemanaM.month(), inicioSemanaM.date(), 0, 0, 0, 0);
              var fechaTerminoLocal = new Date(inicioSemanaM.year(), inicioSemanaM.month(), inicioSemanaM.date(), 23, 59, 0, 0);
              var fechaInicioLocalM = moment__WEBPACK_IMPORTED_MODULE_5__(fechaInicioLocal).add(i, 'day');
              var fechaTerminoLocalM = moment__WEBPACK_IMPORTED_MODULE_5__(fechaTerminoLocal).add(i, 'day');
              console.log('inicio local ' + fechaInicioLocalM.format() + ' termino local ' + fechaTerminoLocalM.format());
              var entidad = {
                start: fechaInicioLocalM.format(),
                end: fechaTerminoLocalM.format(),
                organization: organization,
                patient: runPaciente,
                serviceType: '346',
                texto: fechaInicioLocalM.format('DD'),
                diaStr: fechaInicioLocalM.format('ddd'),
                selected: false,
                horaInicio: fechaInicioLocalM.format('HH:mm'),
                horaTermino: fechaTerminoLocalM.format('HH:mm')
              };

              if (i == 0) {
                entidad.selected = true;
              }

              this.semanas.push(entidad); //console.log('vuelta ' + i);
            }
          }

          console.log(this.semanas);
          this.semana.semanas = this.semanas;
        } //inserta citas integracion a los eventos ya creados del mes

        /*
        {
        Eventos: [{
            Color: "#FF6666"
            DetalleEventoMes: {
                DescripcionPrincipal: "Examen ginecológico (general) (de rutina)"
                DescripcionSecundaria: "Consulta Morbilidad Gineco-Obstetrica "
                FechaHora: "2020-11-12T14:08:00"
                Lugar: "CESFAM Dr. Hernán Alessandri"
                NombrePaciente: "Pamela Andrea Drouilly Sandoval"
                Subtitulo: "Atención Realizada"
                Titulo: "Atención"
            }
            HoraInicioFin: "14:08"
            Imagen: "diagnostico.png"
            ListaFarmacos: null
            NombrePrincipal: "Examen ginecológico (general) (de rutina)"
            NombreSecundario: "Consulta Morbilidad Gineco-Obstetrica "
        }]
        FechaCompleta: "2020-11-01T00:00:00"
        Id: 1
        Mostrar: false
        NombreDia: "domingo"
        NombreDiaReducido: "dom."
        NumeroDia: 1}
        */

      }, {
        key: "insertaCitasAEventos",
        value: function insertaCitasAEventos(arrCitas, arrEventos, nombrePaciente) {
          //SE ME ESTAN DUPLICANDO LAS CITAS
          //OJO REVISAR.
          if (arrEventos && arrEventos.length > 0) {
            arrEventos.forEach(function (evento) {
              arrCitas.forEach(function (cita) {
                var fechaEvento = moment__WEBPACK_IMPORTED_MODULE_5__(evento.FechaCompleta).format('YYYY-MM-DD');
                var fechaCita = moment__WEBPACK_IMPORTED_MODULE_5__(cita.FechaHoraInicio).format('YYYY-MM-DD');

                if (fechaEvento == fechaCita) {
                  //coinciden hay que agregar eventos
                  var entidadEventoAgregar = {
                    Color: "#FF6666",
                    HoraInicioFin: moment__WEBPACK_IMPORTED_MODULE_5__(cita.FechaHoraInicio).format('HH:mm'),
                    Imagen: "cita.png",
                    ListaFarmacos: null,
                    NombrePrincipal: "Consulta Médica Web",
                    NombreSecundario: "Consulta Médica Web",
                    DetalleEventoMes: {
                      DescripcionPrincipal: 'Profesional: ' + cita.NombresMedico + ' ' + cita.ApellidosMedico,
                      DescripcionSecundaria: "Consulta Médica Web",
                      FechaHora: cita.FechaHoraInicio,
                      Lugar: cita.Servicio.Nombre,
                      NombrePaciente: nombrePaciente,
                      Subtitulo: "Próxima Cita",
                      Titulo: "Cita"
                    }
                  };
                  evento.Eventos.push(entidadEventoAgregar);
                }
              });
            });
          }
        } //operacion 

      }, {
        key: "traduceString",
        value: function traduceString(entrada) {
          var retorno = '';

          switch (entrada.toUpperCase()) {
            //estados de cita
            case 'CANCELLED':
              retorno = 'Cancelada';
              break;

            case 'PROPOSED':
              retorno = 'Propuesta';
              break;

            case 'BOOKED':
              retorno = 'Reservada';
              break;

            case 'CONFIRMED':
              retorno = 'Confirmada';
              break;

            case 'FULLFILED':
              retorno = 'Finalizada';
              break;

            case 'NOSHOW':
              retorno = 'No se presentó';
              break;

            default:
              retorno = '';
              break;
          }

          return retorno;
        }
      }, {
        key: "convertirHoraInt",
        value: function convertirHoraInt(hora, minuto) {
          var retorno = 0;
          var minutoStr = '';

          if (minuto < 10) {
            minutoStr = '0' + minuto.toString();
          } else {
            minutoStr = minuto.toString();
          }

          retorno = parseInt(hora.toString() + minutoStr);
          return retorno;
        }
      }, {
        key: "encriptar",
        value: function encriptar(texto) {
          return btoa(unescape(encodeURIComponent(texto)));
        }
      }, {
        key: "desencriptar",
        value: function desencriptar(texto) {
          return decodeURIComponent(escape(atob(texto)));
        } //validación de rut

      }, {
        key: "Rut",
        value: function Rut(texto) {
          var largo;
          var tmpstr = "";

          for (var i = 0; i < texto.length; i++) {
            if (texto.charAt(i) != ' ' && texto.charAt(i) != '.' && texto.charAt(i) != '-') tmpstr = tmpstr + texto.charAt(i);
          }

          texto = tmpstr;
          largo = texto.length;

          if (largo < 2) {
            //this.presentToast("Debe ingresar el run completo", "bottom", 5000)
            return false;
          }

          for (var i = 0; i < largo; i++) {
            if (texto.charAt(i) != "0" && texto.charAt(i) != "1" && texto.charAt(i) != "2" && texto.charAt(i) != "3" && texto.charAt(i) != "4" && texto.charAt(i) != "5" && texto.charAt(i) != "6" && texto.charAt(i) != "7" && texto.charAt(i) != "8" && texto.charAt(i) != "9" && texto.charAt(i) != "k" && texto.charAt(i) != "K") {
              //this.presentToast("El valor ingresado no corresponde a un R.U.N valido", "bottom", 5000);
              return false;
            }
          }

          var invertido = "";

          for (i = largo - 1, j = 0; i >= 0; i--, j++) {
            invertido = invertido + texto.charAt(i);
          }

          var dtexto = "";
          dtexto = dtexto + invertido.charAt(0);
          dtexto = dtexto + '-';
          var cnt = 0;

          for (var i = 1, j = 2; i < largo; i++, j++) {
            if (cnt == 3) {
              dtexto = dtexto + '.';
              j++;
              dtexto = dtexto + invertido.charAt(i);
              cnt = 1;
            } else {
              dtexto = dtexto + invertido.charAt(i);
              cnt++;
            }
          }

          invertido = "";

          for (i = dtexto.length - 1, j = 0; i >= 0; i--, j++) {
            invertido = invertido + dtexto.charAt(i);
          } //hay que ver que hace esto
          //window.document.form1.rut.value = invertido.toUpperCase()		


          if (this.revisarDigito2(texto)) return true;
          return false;
        }
      }, {
        key: "revisarDigito",
        value: function revisarDigito(dvr) {
          var dv = dvr + "";

          if (dv != '0' && dv != '1' && dv != '2' && dv != '3' && dv != '4' && dv != '5' && dv != '6' && dv != '7' && dv != '8' && dv != '9' && dv != 'k' && dv != 'K') {
            //this.presentToast("Debe ingresar un digito verificador valido", "bottom", 5000);
            return false;
          }

          return true;
        }
      }, {
        key: "revisarDigito2",
        value: function revisarDigito2(crut) {
          var rut;
          var dv = '';
          var dvi;
          var largo = crut.length;

          if (largo < 2) {
            //this.presentToast("Debe ingresar el run completo", "bottom", 5000)
            return false;
          }

          if (largo > 2) rut = crut.substring(0, largo - 1);else rut = crut.charAt(0);
          dv = crut.charAt(largo - 1);
          this.revisarDigito(dv);
          if (rut == null || dv == null) return 0;
          var dvr = '0';
          var suma = 0;
          var mul = 2;

          for (var i = rut.length - 1; i >= 0; i--) {
            suma = suma + rut.charAt(i) * mul;
            if (mul == 7) mul = 2;else mul++;
          }

          var res = suma % 11;
          if (res == 1) dvr = 'k';else if (res == 0) dvr = '0';else {
            dvi = 11 - res;
            dvr = dvi + "";
          }

          if (dvr != dv.toLowerCase()) {
            //this.presentToast("EL run es incorrecto", "bottom", 5000)
            return false;
          }

          return true;
        }
      }, {
        key: "entregaIdDispositivo",
        value: function entregaIdDispositivo() {
          var token = '';

          if (localStorage.getItem('token_dispositivo')) {
            token = localStorage.getItem('token_dispositivo');
          } else {
            if (this.isAppOnDevice()) {
              token = this.device.uuid;
            } else {
              token = (Math.random() * (1000000 - 1) + 1).toString() + ' web';
            }
          }

          return token;
        }
      }, {
        key: "obtenerParametrosApp",
        value: function obtenerParametrosApp(esProduccion) {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee3() {
            var strProd;
            return regeneratorRuntime.wrap(function _callee3$(_context3) {
              while (1) {
                switch (_context3.prev = _context3.next) {
                  case 0:
                    strProd = '0';

                    if (esProduccion) {
                      strProd = '1';
                    }

                    if (!this.isAppOnDevice()) {
                      //llamada web
                      this.servicioGeo.getParametros(strProd).subscribe(function (response) {
                        //procesar
                        console.log(response);
                        localStorage.setItem('PARAMETROS_APP', JSON.stringify(response));
                      });
                    } else {
                      this.servicioGeo.getParametrosNative(strProd).then(function (response) {
                        //procesar
                        var data = JSON.parse(response.data);
                        localStorage.setItem('PARAMETROS_APP', JSON.stringify(data));
                        console.log(data);
                      });
                    }

                  case 3:
                  case "end":
                    return _context3.stop();
                }
              }
            }, _callee3, this);
          }));
        } //para registrar los movimientos

      }, {
        key: "registrarMovimiento",
        value: function registrarMovimiento(rssId, modulo) {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee4() {
            return regeneratorRuntime.wrap(function _callee4$(_context4) {
              while (1) {
                switch (_context4.prev = _context4.next) {
                  case 0:
                    if (!this.isAppOnDevice()) {
                      //llamada web
                      this.servicioGeo.postMovimientoApp(rssId, modulo).subscribe(function (response) {
                        //procesar
                        console.log('Movimiento registrado ' + modulo + ' Id: ' + response);
                      });
                    } else {
                      //llamada nativa
                      this.servicioGeo.postMovimientoAppNative(rssId, modulo).then(function (response) {
                        //procesar
                        var data = JSON.parse(response.data);
                        console.log('Movimiento registrado ' + modulo + ' Id: ' + data);
                      });
                    }

                  case 1:
                  case "end":
                    return _context4.stop();
                }
              }
            }, _callee4, this);
          }));
        }
      }, {
        key: "entregaTokenFCM",
        value: function entregaTokenFCM() {
          var token = '';

          if (localStorage.getItem('TOKEN_FIREBASE_MESSAGE')) {
            token = localStorage.getItem('TOKEN_FIREBASE_MESSAGE');
          }

          return token;
        } //proceso que entrega un arreglo de elementos para la pagina home
        //ya vienen ordenados, hay que setear algunas propiedades de estilos
        //y otras cosas

      }, {
        key: "entregaArregloHome",
        value: function entregaArregloHome(data) {
          var arr = [];

          if (data && data.length > 0) {
            data.forEach(function (elemento) {
              //primero los 2 más favoritos
              if (elemento.Orden == 1 || elemento.Orden == 2) {
                elemento.Favorito = true;
              } else {
                elemento.Favorito = false;
              } //segundo las imagenes


              if (elemento.NombreModulo == 'CALENDARIO') {
                elemento.Imagen = './assets/imgs_svg/calendario-01.svg';
              } else if (elemento.NombreModulo == 'ANTECEDENTES') {
                elemento.Imagen = './assets/imgs_svg/antecedentes.svg';
              } else if (elemento.NombreModulo == 'EXAMENES') {
                elemento.Imagen = './assets/imgs_svg/examenes-de-salud.svg';
              } else if (elemento.NombreModulo == 'INTERCONSULTAS') {
                elemento.Imagen = './assets/imgs_svg/interconsulta_desactivado.svg';
              } //tercero la clase de la imagen


              elemento.ClaseImagen = 'imgs-home';
              arr.push(elemento);
            });
          }

          return arr;
        }
      }, {
        key: "actualizarContactabilidad",
        value: function actualizarContactabilidad(contactabilidad) {
          //buscamos al usuario en local sttorage   
          if (localStorage.getItem('UsuarioAps')) {
            var usu = JSON.parse(localStorage.getItem('UsuarioAps'));

            if (usu) {
              if (usu.Rut == contactabilidad.Run) {
                usu.Contactabilidad = contactabilidad;
                localStorage.setItem('UsuarioAps', JSON.stringify(usu));
              }
            }
          }

          if (localStorage.getItem('UsuariosFamilia')) {
            var existe = false;
            var usuarios = JSON.parse(localStorage.getItem('UsuariosFamilia'));

            if (usuarios && usuarios.length > 0) {
              for (var i = 0; i < usuarios.length; i++) {
                if (usuarios[i].Rut == contactabilidad.Run) {
                  usuarios[i].Contactabilidad = contactabilidad;
                  existe = true;
                }
              }
            }

            if (existe) {
              localStorage.setItem('UsuariosFamilia', JSON.stringify(usuarios));
            }
          }
        } //entrega true si tiene familia asociada

      }, {
        key: "tieneFamilia",
        value: function tieneFamilia() {
          var retorno = false;

          if (localStorage.getItem('UsuariosFamilia')) {
            var existe = false;
            var usuarios = JSON.parse(localStorage.getItem('UsuariosFamilia'));

            if (usuarios && usuarios.length > 0) {
              retorno = true;
            }
          }

          return retorno;
        }
      }, {
        key: "entregaUsuario",
        value: function entregaUsuario(id) {
          //buscamos al usuario en local sttorage
          var usuario = null;

          if (localStorage.getItem('UsuarioAps')) {
            var usu = JSON.parse(localStorage.getItem('UsuarioAps'));

            if (usu) {
              if (usu.Id == id) {
                usuario = usu;
              }
            }
          }

          if (localStorage.getItem('UsuariosFamilia')) {
            var existe = false;
            var usuarios = JSON.parse(localStorage.getItem('UsuariosFamilia'));

            if (usuarios && usuarios.length > 0) {
              for (var i = 0; i < usuarios.length; i++) {
                if (usuarios[i].Id == id) {
                  usuario = usuarios[i];
                }
              }
            }
          }

          return usuario;
        }
      }, {
        key: "entregaUsuarioNombre",
        value: function entregaUsuarioNombre(nombre) {
          //buscamos al usuario en local sttorage
          var usuario = null;

          if (localStorage.getItem('UsuarioAps')) {
            var usu = JSON.parse(localStorage.getItem('UsuarioAps'));

            if (usu) {
              var nombreComparar = usu.Nombres + ' ' + usu.ApellidoPaterno + ' ' + usu.ApellidoMaterno;

              if (nombreComparar.toUpperCase() == nombre.toUpperCase()) {
                usuario = usu;
              }
            }
          }

          if (localStorage.getItem('UsuariosFamilia')) {
            var existe = false;
            var usuarios = JSON.parse(localStorage.getItem('UsuariosFamilia'));

            if (usuarios && usuarios.length > 0) {
              for (var i = 0; i < usuarios.length; i++) {
                var _nombreComparar = usuarios[i].Nombres + ' ' + usuarios[i].ApellidoPaterno + ' ' + usuarios[i].ApellidoMaterno;

                if (_nombreComparar.toUpperCase() == nombre.toUpperCase()) {
                  usuario = usuarios[i];
                }
              }
            }
          }

          return usuario;
        }
      }, {
        key: "entregaArregloUsuarios",
        value: function entregaArregloUsuarios() {
          var arr = [];

          if (localStorage.getItem('UsuarioAps')) {
            var usu = JSON.parse(localStorage.getItem('UsuarioAps'));

            if (usu) {
              arr.push(usu);
            }
          }

          if (localStorage.getItem('UsuariosFamilia')) {
            var existe = false;
            var usuarios = JSON.parse(localStorage.getItem('UsuariosFamilia'));

            if (usuarios && usuarios.length > 0) {
              for (var i = 0; i < usuarios.length; i++) {
                arr.push(usuarios[i]);
              }
            }
          }

          return arr;
        }
      }, {
        key: "removeCitaNotificacionesLocales",
        value: function removeCitaNotificacionesLocales(idCita) {
          if (localStorage.getItem('NOTIFICACIONES_LOCALES_EVENTOS')) {
            var listaEventos = JSON.parse(localStorage.getItem('NOTIFICACIONES_LOCALES_EVENTOS'));

            if (listaEventos != null && listaEventos.length > 0) {
              var listaSinElemento = listaEventos.filter(function (p) {
                return p.Id != idCita;
              }); //esta es la nueva lista

              if (listaSinElemento && listaSinElemento.length > 0) {
                localStorage.setItem('NOTIFICACIONES_LOCALES_EVENTOS', JSON.stringify(listaSinElemento));
              }
            }
          }
        } //entrega y setea los parametros de token y otros

      }, {
        key: "crearTokenPlano",
        value: function crearTokenPlano() {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee5() {
            var entidad, tokenDispositivo;
            return regeneratorRuntime.wrap(function _callee5$(_context5) {
              while (1) {
                switch (_context5.prev = _context5.next) {
                  case 0:
                    entidad = {
                      tokenDispositivo: '',
                      versionAppName: '',
                      versionNumber: '',
                      plataforma: ''
                    };

                    if (this.isAppOnDevice()) {
                      _context5.next = 11;
                      break;
                    }

                    //web
                    //guardar local storage
                    if (!localStorage.getItem('token_dispositivo')) {
                      //crear token para web
                      entidad.tokenDispositivo = (Math.random() * (1000000 - 1) + 1).toString() + ' web';
                      localStorage.setItem('token_dispositivo', entidad.tokenDispositivo);
                    } else {
                      entidad.tokenDispositivo = localStorage.getItem('token_dispositivo');
                    }

                    entidad.versionAppName = "Mi salud familiar";
                    entidad.versionNumber = "0.0";
                    entidad.plataforma = "Web"; //loader.dismiss();
                    //otras variables

                    localStorage.setItem('version_app_name', entidad.versionAppName);
                    localStorage.setItem('version_number', entidad.versionNumber);
                    localStorage.setItem('plataforma', entidad.plataforma);
                    _context5.next = 37;
                    break;

                  case 11:
                    if (!this.platform.is('ios')) {
                      _context5.next = 21;
                      break;
                    }

                    _context5.next = 14;
                    return this.appVersion.getAppName();

                  case 14:
                    entidad.versionAppName = _context5.sent;
                    _context5.next = 17;
                    return this.appVersion.getVersionNumber();

                  case 17:
                    entidad.versionNumber = _context5.sent;
                    entidad.plataforma = "iOS";
                    _context5.next = 32;
                    break;

                  case 21:
                    if (!this.platform.is('android')) {
                      _context5.next = 31;
                      break;
                    }

                    _context5.next = 24;
                    return this.appVersion.getAppName();

                  case 24:
                    entidad.versionAppName = _context5.sent;
                    _context5.next = 27;
                    return this.appVersion.getVersionNumber();

                  case 27:
                    entidad.versionNumber = _context5.sent;
                    entidad.plataforma = "Android";
                    _context5.next = 32;
                    break;

                  case 31:
                    if (this.platform.is('mobileweb')) {
                      entidad.versionAppName = "Mi salud familiar";
                      entidad.versionNumber = "0.0";
                      entidad.plataforma = "Web";
                    } else {
                      entidad.versionAppName = "Mi salud familiar";
                      entidad.versionNumber = "0.0";
                      entidad.plataforma = "No informado";
                    }

                  case 32:
                    //crear token para web
                    tokenDispositivo = this.device.uuid;
                    localStorage.setItem('token_dispositivo', tokenDispositivo); //otras variables

                    localStorage.setItem('version_app_name', entidad.versionAppName);
                    localStorage.setItem('version_number', entidad.versionNumber);
                    localStorage.setItem('plataforma', entidad.plataforma);

                  case 37:
                  case "end":
                    return _context5.stop();
                }
              }
            }, _callee5, this);
          }));
        }
      }, {
        key: "necesitaActualizarDatosPaciente",
        value: function necesitaActualizarDatosPaciente(uspId) {
          var retorno = true;
          var fechaActual = moment__WEBPACK_IMPORTED_MODULE_5__();
          var fechaUltimaActualizacion = moment__WEBPACK_IMPORTED_MODULE_5__();

          if (localStorage.getItem('ANTECEDENTES')) {
            //tiene antecedentes, pero puede que no tenga antecddentes el usuario aps, en este caso hay que acrualizar
            var tiene = false;
            var antecedentes = JSON.parse(localStorage.getItem('ANTECEDENTES'));

            if (antecedentes && antecedentes.length > 0) {
              var arrUsuarioTiene = antecedentes.filter(function (p) {
                return p.UsuarioAps.Id == uspId;
              });

              if (arrUsuarioTiene && arrUsuarioTiene.length > 0) {
                tiene = true;
              }
            }

            if (tiene == false) {
              retorno = true;
            } else {
              if (localStorage.getItem('FECHA_ACTUALIZACION_ANTECEDENTES')) {
                fechaUltimaActualizacion = moment__WEBPACK_IMPORTED_MODULE_5__(localStorage.getItem('FECHA_ACTUALIZACION_ANTECEDENTES'));
                var diferencia = fechaActual.diff(fechaUltimaActualizacion, 'days');

                if (diferencia < 1) {
                  retorno = false;
                }
              }
            }
          }

          return retorno;
        }
      }, {
        key: "necesitaActualizarAlergiasPacientes",
        value: function necesitaActualizarAlergiasPacientes(uspId) {
          var retorno = true;
          var fechaActual = moment__WEBPACK_IMPORTED_MODULE_5__();
          var fechaUltimaActualizacion = moment__WEBPACK_IMPORTED_MODULE_5__();
          var tiene = false;
          var alergias = JSON.parse(localStorage.getItem('ALERGIAS'));

          if (alergias && alergias.length > 0) {
            var arrUsuarioTiene = alergias.filter(function (p) {
              return p.UsuarioAps.Id == uspId;
            });

            if (arrUsuarioTiene && arrUsuarioTiene.length > 0) {
              tiene = true;
            }
          }

          if (tiene == false) {
            retorno = true;
          } else {
            if (localStorage.getItem('ALERGIAS')) {
              if (localStorage.getItem('FECHA_ACTUALIZACION_ALERGIAS')) {
                fechaUltimaActualizacion = moment__WEBPACK_IMPORTED_MODULE_5__(localStorage.getItem('FECHA_ACTUALIZACION_ALERGIAS'));
                var diferencia = fechaActual.diff(fechaUltimaActualizacion, 'days');

                if (diferencia < 1) {
                  retorno = false;
                }
              }
            }
          }

          return retorno;
        }
      }, {
        key: "necesitaActualizarMorbidosPacientes",
        value: function necesitaActualizarMorbidosPacientes(uspId) {
          var retorno = true;
          var fechaActual = moment__WEBPACK_IMPORTED_MODULE_5__();
          var fechaUltimaActualizacion = moment__WEBPACK_IMPORTED_MODULE_5__();
          var tiene = false;
          var morbidos = JSON.parse(localStorage.getItem('MORBIDOS'));

          if (morbidos && morbidos.length > 0) {
            var arrUsuarioTiene = morbidos.filter(function (p) {
              return p.UsuarioAps.Id == uspId;
            });

            if (arrUsuarioTiene && arrUsuarioTiene.length > 0) {
              tiene = true;
            }
          }

          if (tiene == false) {
            retorno = true;
          } else {
            if (localStorage.getItem('MORBIDOS')) {
              if (localStorage.getItem('FECHA_ACTUALIZACION_MORBIDOS')) {
                fechaUltimaActualizacion = moment__WEBPACK_IMPORTED_MODULE_5__(localStorage.getItem('FECHA_ACTUALIZACION_MORBIDOS'));
                var diferencia = fechaActual.diff(fechaUltimaActualizacion, 'days');

                if (diferencia < 1) {
                  retorno = false;
                }
              }
            }
          }

          return retorno;
        }
      }, {
        key: "entregaArregloDatosPaciente",
        value: function entregaArregloDatosPaciente(uspId) {
          var antecedentes = [];

          if (localStorage.getItem('ANTECEDENTES')) {
            var arreglo = JSON.parse(localStorage.getItem('ANTECEDENTES'));

            if (arreglo && arreglo.length > 0) {
              for (var s in arreglo) {
                if (arreglo[s].UsuarioAps.Id == uspId) {
                  antecedentes = arreglo[s].Mediciones;
                }
              }
            }
          }

          return antecedentes;
        }
      }, {
        key: "entregaArregloAlergiasPaciente",
        value: function entregaArregloAlergiasPaciente(uspId) {
          var alergias = [];

          if (localStorage.getItem('ALERGIAS')) {
            var arreglo = JSON.parse(localStorage.getItem('ALERGIAS'));

            if (arreglo && arreglo.length > 0) {
              for (var s in arreglo) {
                if (arreglo[s].UsuarioAps.Id == uspId) {
                  alergias = arreglo[s].Alergias;
                }
              }
            }
          }

          return alergias;
        }
      }, {
        key: "entregaArregloMorbidosPaciente",
        value: function entregaArregloMorbidosPaciente(uspId) {
          var morbidos = [];

          if (localStorage.getItem('MORBIDOS')) {
            var arreglo = JSON.parse(localStorage.getItem('MORBIDOS'));

            if (arreglo && arreglo.length > 0) {
              for (var s in arreglo) {
                if (arreglo[s].UsuarioAps.Id == uspId) {
                  morbidos = arreglo[s].Morbidos;
                }
              }
            }
          }

          return morbidos;
        }
      }]);

      return ServicioUtiles;
    }();

    ServicioUtiles.ctorParameters = function () {
      return [{
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["Platform"]
      }, {
        type: _ionic_native_app_version_ngx__WEBPACK_IMPORTED_MODULE_3__["AppVersion"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ToastController"]
      }, {
        type: _ionic_native_device_ngx__WEBPACK_IMPORTED_MODULE_4__["Device"]
      }, {
        type: _services_ServicioGeo__WEBPACK_IMPORTED_MODULE_7__["ServicioGeo"]
      }];
    };

    ServicioUtiles = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])()], ServicioUtiles);
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


    __webpack_exports__["default"] = ".u-text-avatar {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  width: 100%;\n  height: 100%;\n  max-width: 46px;\n  max-height: 46px;\n  border-radius: 500px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy92aWN0b3Jjb3JvbmFkby9EZXNrdG9wL21pRmFtaWxpYV9wcmUvc3JjL2RpcmVjdGl2ZXMvdGV4dC1hdmF0YXIvdGV4dC1hdmF0YXIuc2NzcyIsInNyYy9kaXJlY3RpdmVzL3RleHQtYXZhdGFyL3RleHQtYXZhdGFyLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxhQUFBO0VBQ0EsdUJBQUE7RUFDQSxtQkFBQTtFQUVBLFdBQUE7RUFDQSxZQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0VBQ0Esb0JBQUE7QUNBRiIsImZpbGUiOiJzcmMvZGlyZWN0aXZlcy90ZXh0LWF2YXRhci90ZXh0LWF2YXRhci5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnUtdGV4dC1hdmF0YXIge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAvLyBiYWNrZ3JvdW5kLWNvbG9yOiBhbnRpcXVld2hpdGU7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgaGVpZ2h0OiAxMDAlO1xyXG4gIG1heC13aWR0aDogNDZweDtcclxuICBtYXgtaGVpZ2h0OiA0NnB4O1xyXG4gIGJvcmRlci1yYWRpdXM6IDUwMHB4O1xyXG59IiwiLnUtdGV4dC1hdmF0YXIge1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMTAwJTtcbiAgbWF4LXdpZHRoOiA0NnB4O1xuICBtYXgtaGVpZ2h0OiA0NnB4O1xuICBib3JkZXItcmFkaXVzOiA1MDBweDtcbn0iXX0= */";
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
  },

  /***/
  "./src/environments/environment.ts":
  /*!*****************************************!*\
    !*** ./src/environments/environment.ts ***!
    \*****************************************/

  /*! exports provided: environment */

  /***/
  function srcEnvironmentsEnvironmentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "environment", function () {
      return environment;
    }); // This file can be replaced during build by using the `fileReplacements` array.
    // `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
    // The list of file replacements can be found in `angular.json`.


    var environment = {
      production: false,
      API_ENDPOINT: 'https://preapp.rayensalud.com/MiFamilia/Api/',
      URL_FOTOS: 'https://preapp.rayensalud.com/MiFamilia/',
      //API_ENDPOINT: 'http://190.151.14.101:8065/Api/',
      //URL_FOTOS: 'http://190.151.14.101:8065/',
      //API_ENDPOINT: 'http://localhost:27563/Api/',
      //API_ENDPOINT: 'http://localhost:1960/Api/',
      //API_ENDPOINT: 'https://10.211.55.5:45456/Api/',
      //URL_FOTOS: 'http://localhost:27563/',
      API_KEY_MAPA: 'AIzaSyAqx2BInVZJP-xhUh5oSUgKSPh3rpB_Rzc',
      USA_CALENDARIO: false,
      HORAS_FECHA_INICIO: 3,
      TIEMPO_CONSULTA_NOTIFICACIONES: 2000
    };
    /*
     * For easier debugging in development mode, you can import the following file
     * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
     *
     * This import should be commented out in production mode because it will have a negative impact
     * on performance if an error is thrown.
     */
    // import 'zone.js/dist/zone-error';  // Included with Angular CLI.

    /***/
  },

  /***/
  "./src/environments/firebaseconfig.ts":
  /*!********************************************!*\
    !*** ./src/environments/firebaseconfig.ts ***!
    \********************************************/

  /*! exports provided: firebaseConfig */

  /***/
  function srcEnvironmentsFirebaseconfigTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "firebaseConfig", function () {
      return firebaseConfig;
    });

    var firebaseConfig = {
      apiKey: "AIzaSyAkKRvqQ2fq7r8L1a-hG0_A31owEcxbXIM",
      authDomain: "mifamiliaapp.firebaseapp.com",
      projectId: "mifamiliaapp",
      storageBucket: "mifamiliaapp.appspot.com",
      messagingSenderId: "1034586005863",
      appId: "1:1034586005863:web:6fa4c50650d31b427d8fc2",
      measurementId: "G-D5P9RNNYRT"
    };
    /***/
  },

  /***/
  "./src/main.ts":
  /*!*********************!*\
    !*** ./src/main.ts ***!
    \*********************/

  /*! no exports provided */

  /***/
  function srcMainTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/platform-browser-dynamic */
    "./node_modules/@angular/platform-browser-dynamic/__ivy_ngcc__/fesm2015/platform-browser-dynamic.js");
    /* harmony import */


    var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./app/app.module */
    "./src/app/app.module.ts");
    /* harmony import */


    var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./environments/environment */
    "./src/environments/environment.ts");

    if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
      Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
    }

    Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])["catch"](function (err) {
      return console.log(err);
    });
    /***/
  },

  /***/
  0:
  /*!***************************!*\
    !*** multi ./src/main.ts ***!
    \***************************/

  /*! no static exports found */

  /***/
  function _(module, exports, __webpack_require__) {
    module.exports = __webpack_require__(
    /*! /Users/victorcoronado/Desktop/miFamilia_pre/src/main.ts */
    "./src/main.ts");
    /***/
  }
}, [[0, "runtime", "vendor"]]]);
//# sourceMappingURL=main-es5.js.map