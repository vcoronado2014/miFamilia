function _get(target, property, receiver) { if (typeof Reflect !== "undefined" && Reflect.get) { _get = Reflect.get; } else { _get = function _get(target, property, receiver) { var base = _superPropBase(target, property); if (!base) return; var desc = Object.getOwnPropertyDescriptor(base, property); if (desc.get) { return desc.get.call(receiver); } return desc.value; }; } return _get(target, property, receiver || target); }

function _superPropBase(object, property) { while (!Object.prototype.hasOwnProperty.call(object, property)) { object = _getPrototypeOf(object); if (object === null) break; } return object; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (typeof call === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["registro-uno-registro-uno-module"], {
  /***/
  "./node_modules/@angular/cdk/__ivy_ngcc__/fesm2015/accordion.js":
  /*!**********************************************************************!*\
    !*** ./node_modules/@angular/cdk/__ivy_ngcc__/fesm2015/accordion.js ***!
    \**********************************************************************/

  /*! exports provided: CdkAccordion, CdkAccordionItem, CdkAccordionModule */

  /***/
  function node_modulesAngularCdk__ivy_ngcc__Fesm2015AccordionJs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CdkAccordion", function () {
      return CdkAccordion;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CdkAccordionItem", function () {
      return CdkAccordionItem;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CdkAccordionModule", function () {
      return CdkAccordionModule;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_cdk_collections__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/cdk/collections */
    "./node_modules/@angular/cdk/__ivy_ngcc__/fesm2015/collections.js");
    /* harmony import */


    var _angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/cdk/coercion */
    "./node_modules/@angular/cdk/fesm2015/coercion.js");
    /* harmony import */


    var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! rxjs */
    "./node_modules/rxjs/_esm2015/index.js");
    /**
     * @fileoverview added by tsickle
     * Generated from: src/cdk/accordion/accordion.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /**
     * Used to generate unique ID for each accordion.
     * @type {?}
     */


    var nextId = 0;
    /**
     * Directive whose purpose is to manage the expanded state of CdkAccordionItem children.
     */

    var CdkAccordion = /*#__PURE__*/function () {
      function CdkAccordion() {
        _classCallCheck(this, CdkAccordion);

        /**
         * Emits when the state of the accordion changes
         */
        this._stateChanges = new rxjs__WEBPACK_IMPORTED_MODULE_3__["Subject"]();
        /**
         * Stream that emits true/false when openAll/closeAll is triggered.
         */

        this._openCloseAllActions = new rxjs__WEBPACK_IMPORTED_MODULE_3__["Subject"]();
        /**
         * A readonly id value to use for unique selection coordination.
         */

        this.id = "cdk-accordion-".concat(nextId++);
        this._multi = false;
      }
      /**
       * Whether the accordion should allow multiple expanded accordion items simultaneously.
       * @return {?}
       */


      _createClass(CdkAccordion, [{
        key: "openAll",

        /**
         * Opens all enabled accordion items in an accordion where multi is enabled.
         * @return {?}
         */
        value: function openAll() {
          this._openCloseAll(true);
        }
        /**
         * Closes all enabled accordion items in an accordion where multi is enabled.
         * @return {?}
         */

      }, {
        key: "closeAll",
        value: function closeAll() {
          this._openCloseAll(false);
        }
        /**
         * @param {?} changes
         * @return {?}
         */

      }, {
        key: "ngOnChanges",
        value: function ngOnChanges(changes) {
          this._stateChanges.next(changes);
        }
        /**
         * @return {?}
         */

      }, {
        key: "ngOnDestroy",
        value: function ngOnDestroy() {
          this._stateChanges.complete();
        }
        /**
         * @private
         * @param {?} expanded
         * @return {?}
         */

      }, {
        key: "_openCloseAll",
        value: function _openCloseAll(expanded) {
          if (this.multi) {
            this._openCloseAllActions.next(expanded);
          }
        }
      }, {
        key: "multi",
        get: function get() {
          return this._multi;
        }
        /**
         * @param {?} multi
         * @return {?}
         */
        ,
        set: function set(multi) {
          this._multi = Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_2__["coerceBooleanProperty"])(multi);
        }
      }]);

      return CdkAccordion;
    }();

    CdkAccordion.ɵfac = function CdkAccordion_Factory(t) {
      return new (t || CdkAccordion)();
    };

    CdkAccordion.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({
      type: CdkAccordion,
      selectors: [["cdk-accordion"], ["", "cdkAccordion", ""]],
      inputs: {
        multi: "multi"
      },
      exportAs: ["cdkAccordion"],
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵNgOnChangesFeature"]]
    });
    CdkAccordion.propDecorators = {
      multi: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
      }]
    };
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CdkAccordion, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"],
        args: [{
          selector: 'cdk-accordion, [cdkAccordion]',
          exportAs: 'cdkAccordion'
        }]
      }], function () {
        return [];
      }, {
        multi: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }]
      });
    })();

    if (false) {}
    /**
     * @fileoverview added by tsickle
     * Generated from: src/cdk/accordion/accordion-item.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /**
     * Used to generate unique ID for each accordion item.
     * @type {?}
     */


    var nextId$1 = 0;
    var ɵ0 = undefined;
    /**
     * An basic directive expected to be extended and decorated as a component.  Sets up all
     * events and attributes needed to be managed by a CdkAccordion parent.
     */

    var CdkAccordionItem = /*#__PURE__*/function () {
      /**
       * @param {?} accordion
       * @param {?} _changeDetectorRef
       * @param {?} _expansionDispatcher
       */
      function CdkAccordionItem(accordion, _changeDetectorRef, _expansionDispatcher) {
        var _this = this;

        _classCallCheck(this, CdkAccordionItem);

        this.accordion = accordion;
        this._changeDetectorRef = _changeDetectorRef;
        this._expansionDispatcher = _expansionDispatcher;
        /**
         * Subscription to openAll/closeAll events.
         */

        this._openCloseAllSubscription = rxjs__WEBPACK_IMPORTED_MODULE_3__["Subscription"].EMPTY;
        /**
         * Event emitted every time the AccordionItem is closed.
         */

        this.closed = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        /**
         * Event emitted every time the AccordionItem is opened.
         */

        this.opened = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        /**
         * Event emitted when the AccordionItem is destroyed.
         */

        this.destroyed = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        /**
         * Emits whenever the expanded state of the accordion changes.
         * Primarily used to facilitate two-way binding.
         * \@docs-private
         */

        this.expandedChange = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        /**
         * The unique AccordionItem id.
         */

        this.id = "cdk-accordion-child-".concat(nextId$1++);
        this._expanded = false;
        this._disabled = false;
        /**
         * Unregister function for _expansionDispatcher.
         */

        this._removeUniqueSelectionListener =
        /**
        * @return {?}
        */
        function () {};

        this._removeUniqueSelectionListener = _expansionDispatcher.listen(
        /**
        * @param {?} id
        * @param {?} accordionId
        * @return {?}
        */
        function (id, accordionId) {
          if (_this.accordion && !_this.accordion.multi && _this.accordion.id === accordionId && _this.id !== id) {
            _this.expanded = false;
          }
        }); // When an accordion item is hosted in an accordion, subscribe to open/close events.

        if (this.accordion) {
          this._openCloseAllSubscription = this._subscribeToOpenCloseAllActions();
        }
      }
      /**
       * Whether the AccordionItem is expanded.
       * @return {?}
       */


      _createClass(CdkAccordionItem, [{
        key: "ngOnDestroy",

        /**
         * Emits an event for the accordion item being destroyed.
         * @return {?}
         */
        value: function ngOnDestroy() {
          this.opened.complete();
          this.closed.complete();
          this.destroyed.emit();
          this.destroyed.complete();

          this._removeUniqueSelectionListener();

          this._openCloseAllSubscription.unsubscribe();
        }
        /**
         * Toggles the expanded state of the accordion item.
         * @return {?}
         */

      }, {
        key: "toggle",
        value: function toggle() {
          if (!this.disabled) {
            this.expanded = !this.expanded;
          }
        }
        /**
         * Sets the expanded state of the accordion item to false.
         * @return {?}
         */

      }, {
        key: "close",
        value: function close() {
          if (!this.disabled) {
            this.expanded = false;
          }
        }
        /**
         * Sets the expanded state of the accordion item to true.
         * @return {?}
         */

      }, {
        key: "open",
        value: function open() {
          if (!this.disabled) {
            this.expanded = true;
          }
        }
        /**
         * @private
         * @return {?}
         */

      }, {
        key: "_subscribeToOpenCloseAllActions",
        value: function _subscribeToOpenCloseAllActions() {
          var _this2 = this;

          return this.accordion._openCloseAllActions.subscribe(
          /**
          * @param {?} expanded
          * @return {?}
          */
          function (expanded) {
            // Only change expanded state if item is enabled
            if (!_this2.disabled) {
              _this2.expanded = expanded;
            }
          });
        }
      }, {
        key: "expanded",
        get: function get() {
          return this._expanded;
        }
        /**
         * @param {?} expanded
         * @return {?}
         */
        ,
        set: function set(expanded) {
          expanded = Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_2__["coerceBooleanProperty"])(expanded); // Only emit events and update the internal value if the value changes.

          if (this._expanded !== expanded) {
            this._expanded = expanded;
            this.expandedChange.emit(expanded);

            if (expanded) {
              this.opened.emit();
              /**
               * In the unique selection dispatcher, the id parameter is the id of the CdkAccordionItem,
               * the name value is the id of the accordion.
               * @type {?}
               */

              var accordionId = this.accordion ? this.accordion.id : this.id;

              this._expansionDispatcher.notify(this.id, accordionId);
            } else {
              this.closed.emit();
            } // Ensures that the animation will run when the value is set outside of an `@Input`.
            // This includes cases like the open, close and toggle methods.


            this._changeDetectorRef.markForCheck();
          }
        }
        /**
         * Whether the AccordionItem is disabled.
         * @return {?}
         */

      }, {
        key: "disabled",
        get: function get() {
          return this._disabled;
        }
        /**
         * @param {?} disabled
         * @return {?}
         */
        ,
        set: function set(disabled) {
          this._disabled = Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_2__["coerceBooleanProperty"])(disabled);
        }
      }]);

      return CdkAccordionItem;
    }();

    CdkAccordionItem.ɵfac = function CdkAccordionItem_Factory(t) {
      return new (t || CdkAccordionItem)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](CdkAccordion, 12), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_cdk_collections__WEBPACK_IMPORTED_MODULE_1__["UniqueSelectionDispatcher"]));
    };

    CdkAccordionItem.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({
      type: CdkAccordionItem,
      selectors: [["cdk-accordion-item"], ["", "cdkAccordionItem", ""]],
      inputs: {
        expanded: "expanded",
        disabled: "disabled"
      },
      outputs: {
        closed: "closed",
        opened: "opened",
        destroyed: "destroyed",
        expandedChange: "expandedChange"
      },
      exportAs: ["cdkAccordionItem"],
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵProvidersFeature"]([// Provide CdkAccordion as undefined to prevent nested accordion items from registering
      // to the same accordion.
      {
        provide: CdkAccordion,
        useValue: ɵ0
      }])]
    });
    /** @nocollapse */

    CdkAccordionItem.ctorParameters = function () {
      return [{
        type: CdkAccordion,
        decorators: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"]
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["SkipSelf"]
        }]
      }, {
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"]
      }, {
        type: _angular_cdk_collections__WEBPACK_IMPORTED_MODULE_1__["UniqueSelectionDispatcher"]
      }];
    };

    CdkAccordionItem.propDecorators = {
      closed: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
      }],
      opened: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
      }],
      destroyed: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
      }],
      expandedChange: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
      }],
      expanded: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
      }],
      disabled: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
      }]
    };
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CdkAccordionItem, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"],
        args: [{
          selector: 'cdk-accordion-item, [cdkAccordionItem]',
          exportAs: 'cdkAccordionItem',
          providers: [// Provide CdkAccordion as undefined to prevent nested accordion items from registering
          // to the same accordion.
          {
            provide: CdkAccordion,
            useValue: ɵ0
          }]
        }]
      }], function () {
        return [{
          type: CdkAccordion,
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"]
          }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["SkipSelf"]
          }]
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"]
        }, {
          type: _angular_cdk_collections__WEBPACK_IMPORTED_MODULE_1__["UniqueSelectionDispatcher"]
        }];
      }, {
        closed: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }],
        opened: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }],
        destroyed: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }],
        expandedChange: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }],
        expanded: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        disabled: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }]
      });
    })();

    if (false) {}
    /**
     * @fileoverview added by tsickle
     * Generated from: src/cdk/accordion/accordion-module.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */


    var CdkAccordionModule = function CdkAccordionModule() {
      _classCallCheck(this, CdkAccordionModule);
    };

    CdkAccordionModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
      type: CdkAccordionModule
    });
    CdkAccordionModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
      factory: function CdkAccordionModule_Factory(t) {
        return new (t || CdkAccordionModule)();
      }
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](CdkAccordionModule, {
        declarations: [CdkAccordion, CdkAccordionItem],
        exports: [CdkAccordion, CdkAccordionItem]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CdkAccordionModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
          exports: [CdkAccordion, CdkAccordionItem],
          declarations: [CdkAccordion, CdkAccordionItem]
        }]
      }], null, null);
    })();
    /**
     * @fileoverview added by tsickle
     * Generated from: src/cdk/accordion/public-api.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /**
     * Generated bundle index. Do not edit.
     */
    //# sourceMappingURL=accordion.js.map

    /***/

  },

  /***/
  "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/expansion.js":
  /*!***************************************************************************!*\
    !*** ./node_modules/@angular/material/__ivy_ngcc__/fesm2015/expansion.js ***!
    \***************************************************************************/

  /*! exports provided: EXPANSION_PANEL_ANIMATION_TIMING, MAT_ACCORDION, MAT_EXPANSION_PANEL_DEFAULT_OPTIONS, MatAccordion, MatExpansionModule, MatExpansionPanel, MatExpansionPanelActionRow, MatExpansionPanelContent, MatExpansionPanelDescription, MatExpansionPanelHeader, MatExpansionPanelTitle, matExpansionAnimations */

  /***/
  function node_modulesAngularMaterial__ivy_ngcc__Fesm2015ExpansionJs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "EXPANSION_PANEL_ANIMATION_TIMING", function () {
      return EXPANSION_PANEL_ANIMATION_TIMING;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MAT_ACCORDION", function () {
      return MAT_ACCORDION;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MAT_EXPANSION_PANEL_DEFAULT_OPTIONS", function () {
      return MAT_EXPANSION_PANEL_DEFAULT_OPTIONS;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MatAccordion", function () {
      return MatAccordion;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MatExpansionModule", function () {
      return MatExpansionModule;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MatExpansionPanel", function () {
      return MatExpansionPanel;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MatExpansionPanelActionRow", function () {
      return MatExpansionPanelActionRow;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MatExpansionPanelContent", function () {
      return MatExpansionPanelContent;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MatExpansionPanelDescription", function () {
      return MatExpansionPanelDescription;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MatExpansionPanelHeader", function () {
      return MatExpansionPanelHeader;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MatExpansionPanelTitle", function () {
      return MatExpansionPanelTitle;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "matExpansionAnimations", function () {
      return matExpansionAnimations;
    });
    /* harmony import */


    var _angular_cdk_accordion__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/cdk/accordion */
    "./node_modules/@angular/cdk/__ivy_ngcc__/fesm2015/accordion.js");
    /* harmony import */


    var _angular_cdk_portal__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/cdk/portal */
    "./node_modules/@angular/cdk/__ivy_ngcc__/fesm2015/portal.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/cdk/coercion */
    "./node_modules/@angular/cdk/fesm2015/coercion.js");
    /* harmony import */


    var _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/cdk/a11y */
    "./node_modules/@angular/cdk/__ivy_ngcc__/fesm2015/a11y.js");
    /* harmony import */


    var _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @angular/cdk/keycodes */
    "./node_modules/@angular/cdk/__ivy_ngcc__/fesm2015/keycodes.js");
    /* harmony import */


    var rxjs_operators__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! rxjs/operators */
    "./node_modules/rxjs/_esm2015/operators/index.js");
    /* harmony import */


    var rxjs__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! rxjs */
    "./node_modules/rxjs/_esm2015/index.js");
    /* harmony import */


    var _angular_animations__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! @angular/animations */
    "./node_modules/@angular/animations/__ivy_ngcc__/fesm2015/animations.js");
    /* harmony import */


    var _angular_cdk_collections__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! @angular/cdk/collections */
    "./node_modules/@angular/cdk/__ivy_ngcc__/fesm2015/collections.js");
    /* harmony import */


    var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! @angular/platform-browser/animations */
    "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/animations.js");
    /**
     * @fileoverview added by tsickle
     * Generated from: src/material/expansion/accordion-base.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /**
     * Base interface for a `MatAccordion`.
     * \@docs-private
     * @record
     */


    var _c0 = ["body"];

    function MatExpansionPanel_ng_template_5_Template(rf, ctx) {}

    var _c1 = [[["mat-expansion-panel-header"]], "*", [["mat-action-row"]]];
    var _c2 = ["mat-expansion-panel-header", "*", "mat-action-row"];

    var _c3 = function _c3(a0, a1) {
      return {
        collapsedHeight: a0,
        expandedHeight: a1
      };
    };

    var _c4 = function _c4(a0, a1) {
      return {
        value: a0,
        params: a1
      };
    };

    function MatExpansionPanelHeader_span_4_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](0, "span", 2);
      }

      if (rf & 2) {
        var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("@indicatorRotate", ctx_r0._getExpandedState());
      }
    }

    var _c5 = [[["mat-panel-title"]], [["mat-panel-description"]], "*"];
    var _c6 = ["mat-panel-title", "mat-panel-description", "*"];

    function MatAccordionBase() {}

    if (false) {}
    /**
     * Token used to provide a `MatAccordion` to `MatExpansionPanel`.
     * Used primarily to avoid circular imports between `MatAccordion` and `MatExpansionPanel`.
     * @type {?}
     */


    var MAT_ACCORDION = new _angular_core__WEBPACK_IMPORTED_MODULE_3__["InjectionToken"]('MAT_ACCORDION');
    /**
     * @fileoverview added by tsickle
     * Generated from: src/material/expansion/expansion-animations.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /**
     * Time and timing curve for expansion panel animations.
     * @type {?}
     */

    var EXPANSION_PANEL_ANIMATION_TIMING = '225ms cubic-bezier(0.4,0.0,0.2,1)';
    /**
     * Animations used by the Material expansion panel.
     *
     * A bug in angular animation's `state` when ViewContainers are moved using ViewContainerRef.move()
     * causes the animation state of moved components to become `void` upon exit, and not update again
     * upon reentry into the DOM.  This can lead a to situation for the expansion panel where the state
     * of the panel is `expanded` or `collapsed` but the animation state is `void`.
     *
     * To correctly handle animating to the next state, we animate between `void` and `collapsed` which
     * are defined to have the same styles. Since angular animates from the current styles to the
     * destination state's style definition, in situations where we are moving from `void`'s styles to
     * `collapsed` this acts a noop since no style values change.
     *
     * In the case where angular's animation state is out of sync with the expansion panel's state, the
     * expansion panel being `expanded` and angular animations being `void`, the animation from the
     * `expanded`'s effective styles (though in a `void` animation state) to the collapsed state will
     * occur as expected.
     *
     * Angular Bug: https://github.com/angular/angular/issues/18847
     *
     * \@docs-private
     * @type {?}
     */

    var matExpansionAnimations = {
      /**
       * Animation that rotates the indicator arrow.
       */
      indicatorRotate: Object(_angular_animations__WEBPACK_IMPORTED_MODULE_9__["trigger"])('indicatorRotate', [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_9__["state"])('collapsed, void', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_9__["style"])({
        transform: 'rotate(0deg)'
      })), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_9__["state"])('expanded', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_9__["style"])({
        transform: 'rotate(180deg)'
      })), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_9__["transition"])('expanded <=> collapsed, void => collapsed', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_9__["animate"])(EXPANSION_PANEL_ANIMATION_TIMING))]),

      /**
       * Animation that expands and collapses the panel header height.
       */
      expansionHeaderHeight: Object(_angular_animations__WEBPACK_IMPORTED_MODULE_9__["trigger"])('expansionHeight', [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_9__["state"])('collapsed, void', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_9__["style"])({
        height: '{{collapsedHeight}}'
      }), {
        params: {
          collapsedHeight: '48px'
        }
      }), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_9__["state"])('expanded', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_9__["style"])({
        height: '{{expandedHeight}}'
      }), {
        params: {
          expandedHeight: '64px'
        }
      }), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_9__["transition"])('expanded <=> collapsed, void => collapsed', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_9__["group"])([Object(_angular_animations__WEBPACK_IMPORTED_MODULE_9__["query"])('@indicatorRotate', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_9__["animateChild"])(), {
        optional: true
      }), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_9__["animate"])(EXPANSION_PANEL_ANIMATION_TIMING)]))]),

      /**
       * Animation that expands and collapses the panel content.
       */
      bodyExpansion: Object(_angular_animations__WEBPACK_IMPORTED_MODULE_9__["trigger"])('bodyExpansion', [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_9__["state"])('collapsed, void', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_9__["style"])({
        height: '0px',
        visibility: 'hidden'
      })), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_9__["state"])('expanded', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_9__["style"])({
        height: '*',
        visibility: 'visible'
      })), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_9__["transition"])('expanded <=> collapsed, void => collapsed', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_9__["animate"])(EXPANSION_PANEL_ANIMATION_TIMING))])
    };
    /**
     * @fileoverview added by tsickle
     * Generated from: src/material/expansion/expansion-panel-content.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /**
     * Expansion panel content that will be rendered lazily
     * after the panel is opened for the first time.
     */

    var MatExpansionPanelContent =
    /**
     * @param {?} _template
     */
    function MatExpansionPanelContent(_template) {
      _classCallCheck(this, MatExpansionPanelContent);

      this._template = _template;
    };

    MatExpansionPanelContent.ɵfac = function MatExpansionPanelContent_Factory(t) {
      return new (t || MatExpansionPanelContent)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["TemplateRef"]));
    };

    MatExpansionPanelContent.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineDirective"]({
      type: MatExpansionPanelContent,
      selectors: [["ng-template", "matExpansionPanelContent", ""]]
    });
    /** @nocollapse */

    MatExpansionPanelContent.ctorParameters = function () {
      return [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["TemplateRef"]
      }];
    };
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵsetClassMetadata"](MatExpansionPanelContent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Directive"],
        args: [{
          selector: 'ng-template[matExpansionPanelContent]'
        }]
      }], function () {
        return [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["TemplateRef"]
        }];
      }, null);
    })();

    if (false) {}
    /**
     * @fileoverview added by tsickle
     * Generated from: src/material/expansion/expansion-panel.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /**
     * Counter for generating unique element ids.
     * @type {?}
     */


    var uniqueId = 0;
    /**
     * Object that can be used to override the default options
     * for all of the expansion panels in a module.
     * @record
     */

    function MatExpansionPanelDefaultOptions() {}

    if (false) {}
    /**
     * Injection token that can be used to configure the defalt
     * options for the expansion panel component.
     * @type {?}
     */


    var MAT_EXPANSION_PANEL_DEFAULT_OPTIONS = new _angular_core__WEBPACK_IMPORTED_MODULE_3__["InjectionToken"]('MAT_EXPANSION_PANEL_DEFAULT_OPTIONS');
    var ɵ0 = undefined;
    /**
     * `<mat-expansion-panel>`
     *
     * This component can be used as a single element to show expandable content, or as one of
     * multiple children of an element with the MatAccordion directive attached.
     */

    var MatExpansionPanel = /*#__PURE__*/function (_angular_cdk_accordio) {
      _inherits(MatExpansionPanel, _angular_cdk_accordio);

      var _super = _createSuper(MatExpansionPanel);

      /**
       * @param {?} accordion
       * @param {?} _changeDetectorRef
       * @param {?} _uniqueSelectionDispatcher
       * @param {?} _viewContainerRef
       * @param {?} _document
       * @param {?} _animationMode
       * @param {?=} defaultOptions
       */
      function MatExpansionPanel(accordion, _changeDetectorRef, _uniqueSelectionDispatcher, _viewContainerRef, _document, _animationMode, defaultOptions) {
        var _this3;

        _classCallCheck(this, MatExpansionPanel);

        _this3 = _super.call(this, accordion, _changeDetectorRef, _uniqueSelectionDispatcher);
        _this3._viewContainerRef = _viewContainerRef;
        _this3._animationMode = _animationMode;
        _this3._hideToggle = false;
        /**
         * An event emitted after the body's expansion animation happens.
         */

        _this3.afterExpand = new _angular_core__WEBPACK_IMPORTED_MODULE_3__["EventEmitter"]();
        /**
         * An event emitted after the body's collapse animation happens.
         */

        _this3.afterCollapse = new _angular_core__WEBPACK_IMPORTED_MODULE_3__["EventEmitter"]();
        /**
         * Stream that emits for changes in `\@Input` properties.
         */

        _this3._inputChanges = new rxjs__WEBPACK_IMPORTED_MODULE_8__["Subject"]();
        /**
         * ID for the associated header element. Used for a11y labelling.
         */

        _this3._headerId = "mat-expansion-panel-header-".concat(uniqueId++);
        /**
         * Stream of body animation done events.
         */

        _this3._bodyAnimationDone = new rxjs__WEBPACK_IMPORTED_MODULE_8__["Subject"]();
        _this3.accordion = accordion;
        _this3._document = _document; // We need a Subject with distinctUntilChanged, because the `done` event
        // fires twice on some browsers. See https://github.com/angular/angular/issues/24084

        _this3._bodyAnimationDone.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["distinctUntilChanged"])(
        /**
        * @param {?} x
        * @param {?} y
        * @return {?}
        */
        function (x, y) {
          return x.fromState === y.fromState && x.toState === y.toState;
        })).subscribe(
        /**
        * @param {?} event
        * @return {?}
        */
        function (event) {
          if (event.fromState !== 'void') {
            if (event.toState === 'expanded') {
              _this3.afterExpand.emit();
            } else if (event.toState === 'collapsed') {
              _this3.afterCollapse.emit();
            }
          }
        });

        if (defaultOptions) {
          _this3.hideToggle = defaultOptions.hideToggle;
        }

        return _this3;
      }
      /**
       * Whether the toggle indicator should be hidden.
       * @return {?}
       */


      _createClass(MatExpansionPanel, [{
        key: "_hasSpacing",

        /**
         * Determines whether the expansion panel should have spacing between it and its siblings.
         * @return {?}
         */
        value: function _hasSpacing() {
          if (this.accordion) {
            return this.expanded && this.accordion.displayMode === 'default';
          }

          return false;
        }
        /**
         * Gets the expanded state string.
         * @return {?}
         */

      }, {
        key: "_getExpandedState",
        value: function _getExpandedState() {
          return this.expanded ? 'expanded' : 'collapsed';
        }
        /**
         * Toggles the expanded state of the expansion panel.
         * @return {?}
         */

      }, {
        key: "toggle",
        value: function toggle() {
          this.expanded = !this.expanded;
        }
        /**
         * Sets the expanded state of the expansion panel to false.
         * @return {?}
         */

      }, {
        key: "close",
        value: function close() {
          this.expanded = false;
        }
        /**
         * Sets the expanded state of the expansion panel to true.
         * @return {?}
         */

      }, {
        key: "open",
        value: function open() {
          this.expanded = true;
        }
        /**
         * @return {?}
         */

      }, {
        key: "ngAfterContentInit",
        value: function ngAfterContentInit() {
          var _this4 = this;

          if (this._lazyContent) {
            // Render the content as soon as the panel becomes open.
            this.opened.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["startWith"])(
            /** @type {?} */
            null), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["filter"])(
            /**
            * @return {?}
            */
            function () {
              return _this4.expanded && !_this4._portal;
            }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["take"])(1)).subscribe(
            /**
            * @return {?}
            */
            function () {
              _this4._portal = new _angular_cdk_portal__WEBPACK_IMPORTED_MODULE_1__["TemplatePortal"](_this4._lazyContent._template, _this4._viewContainerRef);
            });
          }
        }
        /**
         * @param {?} changes
         * @return {?}
         */

      }, {
        key: "ngOnChanges",
        value: function ngOnChanges(changes) {
          this._inputChanges.next(changes);
        }
        /**
         * @return {?}
         */

      }, {
        key: "ngOnDestroy",
        value: function ngOnDestroy() {
          _get(_getPrototypeOf(MatExpansionPanel.prototype), "ngOnDestroy", this).call(this);

          this._bodyAnimationDone.complete();

          this._inputChanges.complete();
        }
        /**
         * Checks whether the expansion panel's content contains the currently-focused element.
         * @return {?}
         */

      }, {
        key: "_containsFocus",
        value: function _containsFocus() {
          if (this._body) {
            /** @type {?} */
            var focusedElement = this._document.activeElement;
            /** @type {?} */

            var bodyElement = this._body.nativeElement;
            return focusedElement === bodyElement || bodyElement.contains(focusedElement);
          }

          return false;
        }
      }, {
        key: "hideToggle",
        get: function get() {
          return this._hideToggle || this.accordion && this.accordion.hideToggle;
        }
        /**
         * @param {?} value
         * @return {?}
         */
        ,
        set: function set(value) {
          this._hideToggle = Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_4__["coerceBooleanProperty"])(value);
        }
        /**
         * The position of the expansion indicator.
         * @return {?}
         */

      }, {
        key: "togglePosition",
        get: function get() {
          return this._togglePosition || this.accordion && this.accordion.togglePosition;
        }
        /**
         * @param {?} value
         * @return {?}
         */
        ,
        set: function set(value) {
          this._togglePosition = value;
        }
      }]);

      return MatExpansionPanel;
    }(_angular_cdk_accordion__WEBPACK_IMPORTED_MODULE_0__["CdkAccordionItem"]);

    MatExpansionPanel.ɵfac = function MatExpansionPanel_Factory(t) {
      return new (t || MatExpansionPanel)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](MAT_ACCORDION, 12), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["ChangeDetectorRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_cdk_collections__WEBPACK_IMPORTED_MODULE_10__["UniqueSelectionDispatcher"]), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["ViewContainerRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_common__WEBPACK_IMPORTED_MODULE_2__["DOCUMENT"]), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_11__["ANIMATION_MODULE_TYPE"], 8), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](MAT_EXPANSION_PANEL_DEFAULT_OPTIONS, 8));
    };

    MatExpansionPanel.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({
      type: MatExpansionPanel,
      selectors: [["mat-expansion-panel"]],
      contentQueries: function MatExpansionPanel_ContentQueries(rf, ctx, dirIndex) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵcontentQuery"](dirIndex, MatExpansionPanelContent, true);
        }

        if (rf & 2) {
          var _t;

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵloadQuery"]()) && (ctx._lazyContent = _t.first);
        }
      },
      viewQuery: function MatExpansionPanel_Query(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵviewQuery"](_c0, true);
        }

        if (rf & 2) {
          var _t;

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵloadQuery"]()) && (ctx._body = _t.first);
        }
      },
      hostAttrs: [1, "mat-expansion-panel"],
      hostVars: 6,
      hostBindings: function MatExpansionPanel_HostBindings(rf, ctx) {
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵclassProp"]("mat-expanded", ctx.expanded)("_mat-animation-noopable", ctx._animationMode === "NoopAnimations")("mat-expansion-panel-spacing", ctx._hasSpacing());
        }
      },
      inputs: {
        disabled: "disabled",
        expanded: "expanded",
        hideToggle: "hideToggle",
        togglePosition: "togglePosition"
      },
      outputs: {
        opened: "opened",
        closed: "closed",
        expandedChange: "expandedChange",
        afterExpand: "afterExpand",
        afterCollapse: "afterCollapse"
      },
      exportAs: ["matExpansionPanel"],
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵProvidersFeature"]([// Provide MatAccordion as undefined to prevent nested expansion panels from registering
      // to the same accordion.
      {
        provide: MAT_ACCORDION,
        useValue: ɵ0
      }]), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵInheritDefinitionFeature"], _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵNgOnChangesFeature"]],
      ngContentSelectors: _c2,
      decls: 7,
      vars: 4,
      consts: [["role", "region", 1, "mat-expansion-panel-content", 3, "id"], ["body", ""], [1, "mat-expansion-panel-body"], [3, "cdkPortalOutlet"]],
      template: function MatExpansionPanel_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵprojectionDef"](_c1);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵprojection"](0);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "div", 0, 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("@bodyExpansion.done", function MatExpansionPanel_Template_div_animation_bodyExpansion_done_1_listener($event) {
            return ctx._bodyAnimationDone.next($event);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](3, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵprojection"](4, 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](5, MatExpansionPanel_ng_template_5_Template, 0, 0, "ng-template", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵprojection"](6, 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("@bodyExpansion", ctx._getExpandedState())("id", ctx.id);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵattribute"]("aria-labelledby", ctx._headerId);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("cdkPortalOutlet", ctx._portal);
        }
      },
      directives: [_angular_cdk_portal__WEBPACK_IMPORTED_MODULE_1__["CdkPortalOutlet"]],
      styles: [".mat-expansion-panel{box-sizing:content-box;display:block;margin:0;border-radius:4px;overflow:hidden;transition:margin 225ms cubic-bezier(0.4, 0, 0.2, 1),box-shadow 280ms cubic-bezier(0.4, 0, 0.2, 1);position:relative}.mat-accordion .mat-expansion-panel:not(.mat-expanded),.mat-accordion .mat-expansion-panel:not(.mat-expansion-panel-spacing){border-radius:0}.mat-accordion .mat-expansion-panel:first-of-type{border-top-right-radius:4px;border-top-left-radius:4px}.mat-accordion .mat-expansion-panel:last-of-type{border-bottom-right-radius:4px;border-bottom-left-radius:4px}.cdk-high-contrast-active .mat-expansion-panel{outline:solid 1px}.mat-expansion-panel.ng-animate-disabled,.ng-animate-disabled .mat-expansion-panel,.mat-expansion-panel._mat-animation-noopable{transition:none}.mat-expansion-panel-content{display:flex;flex-direction:column;overflow:visible}.mat-expansion-panel-body{padding:0 24px 16px}.mat-expansion-panel-spacing{margin:16px 0}.mat-accordion>.mat-expansion-panel-spacing:first-child,.mat-accordion>*:first-child:not(.mat-expansion-panel) .mat-expansion-panel-spacing{margin-top:0}.mat-accordion>.mat-expansion-panel-spacing:last-child,.mat-accordion>*:last-child:not(.mat-expansion-panel) .mat-expansion-panel-spacing{margin-bottom:0}.mat-action-row{border-top-style:solid;border-top-width:1px;display:flex;flex-direction:row;justify-content:flex-end;padding:16px 8px 16px 24px}.mat-action-row button.mat-button-base,.mat-action-row button.mat-mdc-button-base{margin-left:8px}[dir=rtl] .mat-action-row button.mat-button-base,[dir=rtl] .mat-action-row button.mat-mdc-button-base{margin-left:0;margin-right:8px}\n"],
      encapsulation: 2,
      data: {
        animation: [matExpansionAnimations.bodyExpansion]
      },
      changeDetection: 0
    });
    /** @nocollapse */

    MatExpansionPanel.ctorParameters = function () {
      return [{
        type: undefined,
        decorators: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Optional"]
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["SkipSelf"]
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Inject"],
          args: [MAT_ACCORDION]
        }]
      }, {
        type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ChangeDetectorRef"]
      }, {
        type: _angular_cdk_collections__WEBPACK_IMPORTED_MODULE_10__["UniqueSelectionDispatcher"]
      }, {
        type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ViewContainerRef"]
      }, {
        type: undefined,
        decorators: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Inject"],
          args: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["DOCUMENT"]]
        }]
      }, {
        type: String,
        decorators: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Optional"]
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Inject"],
          args: [_angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_11__["ANIMATION_MODULE_TYPE"]]
        }]
      }, {
        type: undefined,
        decorators: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Inject"],
          args: [MAT_EXPANSION_PANEL_DEFAULT_OPTIONS]
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Optional"]
        }]
      }];
    };

    MatExpansionPanel.propDecorators = {
      hideToggle: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"]
      }],
      togglePosition: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"]
      }],
      afterExpand: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Output"]
      }],
      afterCollapse: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Output"]
      }],
      _lazyContent: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ContentChild"],
        args: [MatExpansionPanelContent]
      }],
      _body: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ViewChild"],
        args: ['body']
      }]
    };
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵsetClassMetadata"](MatExpansionPanel, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"],
        args: [{
          selector: 'mat-expansion-panel',
          exportAs: 'matExpansionPanel',
          template: "<ng-content select=\"mat-expansion-panel-header\"></ng-content>\n<div class=\"mat-expansion-panel-content\"\n     role=\"region\"\n     [@bodyExpansion]=\"_getExpandedState()\"\n     (@bodyExpansion.done)=\"_bodyAnimationDone.next($event)\"\n     [attr.aria-labelledby]=\"_headerId\"\n     [id]=\"id\"\n     #body>\n  <div class=\"mat-expansion-panel-body\">\n    <ng-content></ng-content>\n    <ng-template [cdkPortalOutlet]=\"_portal\"></ng-template>\n  </div>\n  <ng-content select=\"mat-action-row\"></ng-content>\n</div>\n",
          encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ViewEncapsulation"].None,
          changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ChangeDetectionStrategy"].OnPush,
          inputs: ['disabled', 'expanded'],
          outputs: ['opened', 'closed', 'expandedChange'],
          animations: [matExpansionAnimations.bodyExpansion],
          providers: [// Provide MatAccordion as undefined to prevent nested expansion panels from registering
          // to the same accordion.
          {
            provide: MAT_ACCORDION,
            useValue: ɵ0
          }],
          host: {
            'class': 'mat-expansion-panel',
            '[class.mat-expanded]': 'expanded',
            '[class._mat-animation-noopable]': '_animationMode === "NoopAnimations"',
            '[class.mat-expansion-panel-spacing]': '_hasSpacing()'
          },
          styles: [".mat-expansion-panel{box-sizing:content-box;display:block;margin:0;border-radius:4px;overflow:hidden;transition:margin 225ms cubic-bezier(0.4, 0, 0.2, 1),box-shadow 280ms cubic-bezier(0.4, 0, 0.2, 1);position:relative}.mat-accordion .mat-expansion-panel:not(.mat-expanded),.mat-accordion .mat-expansion-panel:not(.mat-expansion-panel-spacing){border-radius:0}.mat-accordion .mat-expansion-panel:first-of-type{border-top-right-radius:4px;border-top-left-radius:4px}.mat-accordion .mat-expansion-panel:last-of-type{border-bottom-right-radius:4px;border-bottom-left-radius:4px}.cdk-high-contrast-active .mat-expansion-panel{outline:solid 1px}.mat-expansion-panel.ng-animate-disabled,.ng-animate-disabled .mat-expansion-panel,.mat-expansion-panel._mat-animation-noopable{transition:none}.mat-expansion-panel-content{display:flex;flex-direction:column;overflow:visible}.mat-expansion-panel-body{padding:0 24px 16px}.mat-expansion-panel-spacing{margin:16px 0}.mat-accordion>.mat-expansion-panel-spacing:first-child,.mat-accordion>*:first-child:not(.mat-expansion-panel) .mat-expansion-panel-spacing{margin-top:0}.mat-accordion>.mat-expansion-panel-spacing:last-child,.mat-accordion>*:last-child:not(.mat-expansion-panel) .mat-expansion-panel-spacing{margin-bottom:0}.mat-action-row{border-top-style:solid;border-top-width:1px;display:flex;flex-direction:row;justify-content:flex-end;padding:16px 8px 16px 24px}.mat-action-row button.mat-button-base,.mat-action-row button.mat-mdc-button-base{margin-left:8px}[dir=rtl] .mat-action-row button.mat-button-base,[dir=rtl] .mat-action-row button.mat-mdc-button-base{margin-left:0;margin-right:8px}\n"]
        }]
      }], function () {
        return [{
          type: undefined,
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Optional"]
          }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["SkipSelf"]
          }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Inject"],
            args: [MAT_ACCORDION]
          }]
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ChangeDetectorRef"]
        }, {
          type: _angular_cdk_collections__WEBPACK_IMPORTED_MODULE_10__["UniqueSelectionDispatcher"]
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ViewContainerRef"]
        }, {
          type: undefined,
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Inject"],
            args: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["DOCUMENT"]]
          }]
        }, {
          type: String,
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Optional"]
          }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Inject"],
            args: [_angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_11__["ANIMATION_MODULE_TYPE"]]
          }]
        }, {
          type: undefined,
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Inject"],
            args: [MAT_EXPANSION_PANEL_DEFAULT_OPTIONS]
          }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Optional"]
          }]
        }];
      }, {
        afterExpand: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Output"]
        }],
        afterCollapse: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Output"]
        }],
        hideToggle: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"]
        }],
        togglePosition: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"]
        }],
        _lazyContent: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ContentChild"],
          args: [MatExpansionPanelContent]
        }],
        _body: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ViewChild"],
          args: ['body']
        }]
      });
    })();

    if (false) {}

    var MatExpansionPanelActionRow = function MatExpansionPanelActionRow() {
      _classCallCheck(this, MatExpansionPanelActionRow);
    };

    MatExpansionPanelActionRow.ɵfac = function MatExpansionPanelActionRow_Factory(t) {
      return new (t || MatExpansionPanelActionRow)();
    };

    MatExpansionPanelActionRow.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineDirective"]({
      type: MatExpansionPanelActionRow,
      selectors: [["mat-action-row"]],
      hostAttrs: [1, "mat-action-row"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵsetClassMetadata"](MatExpansionPanelActionRow, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Directive"],
        args: [{
          selector: 'mat-action-row',
          host: {
            "class": 'mat-action-row'
          }
        }]
      }], null, null);
    })();
    /**
     * @fileoverview added by tsickle
     * Generated from: src/material/expansion/expansion-panel-header.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /**
     * `<mat-expansion-panel-header>`
     *
     * This component corresponds to the header element of an `<mat-expansion-panel>`.
     */


    var MatExpansionPanelHeader = /*#__PURE__*/function () {
      /**
       * @param {?} panel
       * @param {?} _element
       * @param {?} _focusMonitor
       * @param {?} _changeDetectorRef
       * @param {?=} defaultOptions
       */
      function MatExpansionPanelHeader(panel, _element, _focusMonitor, _changeDetectorRef, defaultOptions) {
        var _this5 = this;

        _classCallCheck(this, MatExpansionPanelHeader);

        this.panel = panel;
        this._element = _element;
        this._focusMonitor = _focusMonitor;
        this._changeDetectorRef = _changeDetectorRef;
        this._parentChangeSubscription = rxjs__WEBPACK_IMPORTED_MODULE_8__["Subscription"].EMPTY;
        /**
         * Whether Angular animations in the panel header should be disabled.
         */

        this._animationsDisabled = true;
        /** @type {?} */

        var accordionHideToggleChange = panel.accordion ? panel.accordion._stateChanges.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["filter"])(
        /**
        * @param {?} changes
        * @return {?}
        */
        function (changes) {
          return !!(changes['hideToggle'] || changes['togglePosition']);
        })) : rxjs__WEBPACK_IMPORTED_MODULE_8__["EMPTY"]; // Since the toggle state depends on an @Input on the panel, we
        // need to subscribe and trigger change detection manually.

        this._parentChangeSubscription = Object(rxjs__WEBPACK_IMPORTED_MODULE_8__["merge"])(panel.opened, panel.closed, accordionHideToggleChange, panel._inputChanges.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["filter"])(
        /**
        * @param {?} changes
        * @return {?}
        */
        function (changes) {
          return !!(changes['hideToggle'] || changes['disabled'] || changes['togglePosition']);
        }))).subscribe(
        /**
        * @return {?}
        */
        function () {
          return _this5._changeDetectorRef.markForCheck();
        }); // Avoids focus being lost if the panel contained the focused element and was closed.

        panel.closed.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["filter"])(
        /**
        * @return {?}
        */
        function () {
          return panel._containsFocus();
        })).subscribe(
        /**
        * @return {?}
        */
        function () {
          return _focusMonitor.focusVia(_element, 'program');
        });

        _focusMonitor.monitor(_element).subscribe(
        /**
        * @param {?} origin
        * @return {?}
        */
        function (origin) {
          if (origin && panel.accordion) {
            panel.accordion._handleHeaderFocus(_this5);
          }
        });

        if (defaultOptions) {
          this.expandedHeight = defaultOptions.expandedHeight;
          this.collapsedHeight = defaultOptions.collapsedHeight;
        }
      }
      /**
       * @return {?}
       */


      _createClass(MatExpansionPanelHeader, [{
        key: "_animationStarted",
        value: function _animationStarted() {
          // Currently the `expansionHeight` animation has a `void => collapsed` transition which is
          // there to work around a bug in Angular (see #13088), however this introduces a different
          // issue. The new transition will cause the header to animate in on init (see #16067), if the
          // consumer has set a header height that is different from the default one. We work around it
          // by disabling animations on the header and re-enabling them after the first animation has run.
          // Note that Angular dispatches animation events even if animations are disabled. Ideally this
          // wouldn't be necessary if we remove the `void => collapsed` transition, but we have to wait
          // for https://github.com/angular/angular/issues/18847 to be resolved.
          this._animationsDisabled = false;
        }
        /**
         * Whether the associated panel is disabled. Implemented as a part of `FocusableOption`.
         * \@docs-private
         * @return {?}
         */

      }, {
        key: "_toggle",

        /**
         * Toggles the expanded state of the panel.
         * @return {?}
         */
        value: function _toggle() {
          if (!this.disabled) {
            this.panel.toggle();
          }
        }
        /**
         * Gets whether the panel is expanded.
         * @return {?}
         */

      }, {
        key: "_isExpanded",
        value: function _isExpanded() {
          return this.panel.expanded;
        }
        /**
         * Gets the expanded state string of the panel.
         * @return {?}
         */

      }, {
        key: "_getExpandedState",
        value: function _getExpandedState() {
          return this.panel._getExpandedState();
        }
        /**
         * Gets the panel id.
         * @return {?}
         */

      }, {
        key: "_getPanelId",
        value: function _getPanelId() {
          return this.panel.id;
        }
        /**
         * Gets the toggle position for the header.
         * @return {?}
         */

      }, {
        key: "_getTogglePosition",
        value: function _getTogglePosition() {
          return this.panel.togglePosition;
        }
        /**
         * Gets whether the expand indicator should be shown.
         * @return {?}
         */

      }, {
        key: "_showToggle",
        value: function _showToggle() {
          return !this.panel.hideToggle && !this.panel.disabled;
        }
        /**
         * Handle keydown event calling to toggle() if appropriate.
         * @param {?} event
         * @return {?}
         */

      }, {
        key: "_keydown",
        value: function _keydown(event) {
          switch (event.keyCode) {
            // Toggle for space and enter keys.
            case _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_6__["SPACE"]:
            case _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_6__["ENTER"]:
              if (!Object(_angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_6__["hasModifierKey"])(event)) {
                event.preventDefault();

                this._toggle();
              }

              break;

            default:
              if (this.panel.accordion) {
                this.panel.accordion._handleHeaderKeydown(event);
              }

              return;
          }
        }
        /**
         * Focuses the panel header. Implemented as a part of `FocusableOption`.
         * \@docs-private
         * @param {?=} origin Origin of the action that triggered the focus.
         * @param {?=} options
         * @return {?}
         */

      }, {
        key: "focus",
        value: function focus() {
          var origin = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'program';
          var options = arguments.length > 1 ? arguments[1] : undefined;

          this._focusMonitor.focusVia(this._element, origin, options);
        }
        /**
         * @return {?}
         */

      }, {
        key: "ngOnDestroy",
        value: function ngOnDestroy() {
          this._parentChangeSubscription.unsubscribe();

          this._focusMonitor.stopMonitoring(this._element);
        }
      }, {
        key: "disabled",
        get: function get() {
          return this.panel.disabled;
        }
      }]);

      return MatExpansionPanelHeader;
    }();

    MatExpansionPanelHeader.ɵfac = function MatExpansionPanelHeader_Factory(t) {
      return new (t || MatExpansionPanelHeader)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](MatExpansionPanel, 1), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["ElementRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_5__["FocusMonitor"]), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["ChangeDetectorRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](MAT_EXPANSION_PANEL_DEFAULT_OPTIONS, 8));
    };

    MatExpansionPanelHeader.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({
      type: MatExpansionPanelHeader,
      selectors: [["mat-expansion-panel-header"]],
      hostAttrs: ["role", "button", 1, "mat-expansion-panel-header", "mat-focus-indicator"],
      hostVars: 19,
      hostBindings: function MatExpansionPanelHeader_HostBindings(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵcomponentHostSyntheticListener"]("@expansionHeight.start", function MatExpansionPanelHeader_animation_expansionHeight_start_HostBindingHandler() {
            return ctx._animationStarted();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function MatExpansionPanelHeader_click_HostBindingHandler() {
            return ctx._toggle();
          })("keydown", function MatExpansionPanelHeader_keydown_HostBindingHandler($event) {
            return ctx._keydown($event);
          });
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵattribute"]("id", ctx.panel._headerId)("tabindex", ctx.disabled ? 0 - 1 : 0)("aria-controls", ctx._getPanelId())("aria-expanded", ctx._isExpanded())("aria-disabled", ctx.panel.disabled);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵupdateSyntheticHostBinding"]("@.disabled", ctx._animationsDisabled)("@expansionHeight", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction2"](16, _c4, ctx._getExpandedState(), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction2"](13, _c3, ctx.collapsedHeight, ctx.expandedHeight)));

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵclassProp"]("mat-expanded", ctx._isExpanded())("mat-expansion-toggle-indicator-after", ctx._getTogglePosition() === "after")("mat-expansion-toggle-indicator-before", ctx._getTogglePosition() === "before");
        }
      },
      inputs: {
        expandedHeight: "expandedHeight",
        collapsedHeight: "collapsedHeight"
      },
      ngContentSelectors: _c6,
      decls: 5,
      vars: 1,
      consts: [[1, "mat-content"], ["class", "mat-expansion-indicator", 4, "ngIf"], [1, "mat-expansion-indicator"]],
      template: function MatExpansionPanelHeader_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵprojectionDef"](_c5);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "span", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵprojection"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵprojection"](2, 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵprojection"](3, 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](4, MatExpansionPanelHeader_span_4_Template, 1, 1, "span", 1);
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx._showToggle());
        }
      },
      directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"]],
      styles: [".mat-expansion-panel-header{display:flex;flex-direction:row;align-items:center;padding:0 24px;border-radius:inherit;position:relative}.mat-expansion-panel-header:focus,.mat-expansion-panel-header:hover{outline:none}.mat-expansion-panel-header.mat-expanded:focus,.mat-expansion-panel-header.mat-expanded:hover{background:inherit}.mat-expansion-panel-header:not([aria-disabled=true]){cursor:pointer}.mat-expansion-panel-header.mat-expansion-toggle-indicator-before{flex-direction:row-reverse}.mat-expansion-panel-header.mat-expansion-toggle-indicator-before .mat-expansion-indicator{margin:0 16px 0 0}[dir=rtl] .mat-expansion-panel-header.mat-expansion-toggle-indicator-before .mat-expansion-indicator{margin:0 0 0 16px}.mat-content{display:flex;flex:1;flex-direction:row;overflow:hidden}.mat-expansion-panel-header-title,.mat-expansion-panel-header-description{display:flex;flex-grow:1;margin-right:16px}[dir=rtl] .mat-expansion-panel-header-title,[dir=rtl] .mat-expansion-panel-header-description{margin-right:0;margin-left:16px}.mat-expansion-panel-header-description{flex-grow:2}.mat-expansion-indicator::after{border-style:solid;border-width:0 2px 2px 0;content:\"\";display:inline-block;padding:3px;transform:rotate(45deg);vertical-align:middle}\n"],
      encapsulation: 2,
      data: {
        animation: [matExpansionAnimations.indicatorRotate, matExpansionAnimations.expansionHeaderHeight]
      },
      changeDetection: 0
    });
    /** @nocollapse */

    MatExpansionPanelHeader.ctorParameters = function () {
      return [{
        type: MatExpansionPanel,
        decorators: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Host"]
        }]
      }, {
        type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ElementRef"]
      }, {
        type: _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_5__["FocusMonitor"]
      }, {
        type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ChangeDetectorRef"]
      }, {
        type: undefined,
        decorators: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Inject"],
          args: [MAT_EXPANSION_PANEL_DEFAULT_OPTIONS]
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Optional"]
        }]
      }];
    };

    MatExpansionPanelHeader.propDecorators = {
      expandedHeight: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"]
      }],
      collapsedHeight: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"]
      }]
    };
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵsetClassMetadata"](MatExpansionPanelHeader, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"],
        args: [{
          selector: 'mat-expansion-panel-header',
          template: "<span class=\"mat-content\">\n  <ng-content select=\"mat-panel-title\"></ng-content>\n  <ng-content select=\"mat-panel-description\"></ng-content>\n  <ng-content></ng-content>\n</span>\n<span [@indicatorRotate]=\"_getExpandedState()\" *ngIf=\"_showToggle()\"\n      class=\"mat-expansion-indicator\"></span>\n",
          encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ViewEncapsulation"].None,
          changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ChangeDetectionStrategy"].OnPush,
          animations: [matExpansionAnimations.indicatorRotate, matExpansionAnimations.expansionHeaderHeight],
          host: {
            'class': 'mat-expansion-panel-header mat-focus-indicator',
            'role': 'button',
            '[attr.id]': 'panel._headerId',
            '[attr.tabindex]': 'disabled ? -1 : 0',
            '[attr.aria-controls]': '_getPanelId()',
            '[attr.aria-expanded]': '_isExpanded()',
            '[attr.aria-disabled]': 'panel.disabled',
            '[class.mat-expanded]': '_isExpanded()',
            '[class.mat-expansion-toggle-indicator-after]': "_getTogglePosition() === 'after'",
            '[class.mat-expansion-toggle-indicator-before]': "_getTogglePosition() === 'before'",
            '(click)': '_toggle()',
            '(keydown)': '_keydown($event)',
            '[@.disabled]': '_animationsDisabled',
            '(@expansionHeight.start)': '_animationStarted()',
            '[@expansionHeight]': "{\n        value: _getExpandedState(),\n        params: {\n          collapsedHeight: collapsedHeight,\n          expandedHeight: expandedHeight\n        }\n    }"
          },
          styles: [".mat-expansion-panel-header{display:flex;flex-direction:row;align-items:center;padding:0 24px;border-radius:inherit;position:relative}.mat-expansion-panel-header:focus,.mat-expansion-panel-header:hover{outline:none}.mat-expansion-panel-header.mat-expanded:focus,.mat-expansion-panel-header.mat-expanded:hover{background:inherit}.mat-expansion-panel-header:not([aria-disabled=true]){cursor:pointer}.mat-expansion-panel-header.mat-expansion-toggle-indicator-before{flex-direction:row-reverse}.mat-expansion-panel-header.mat-expansion-toggle-indicator-before .mat-expansion-indicator{margin:0 16px 0 0}[dir=rtl] .mat-expansion-panel-header.mat-expansion-toggle-indicator-before .mat-expansion-indicator{margin:0 0 0 16px}.mat-content{display:flex;flex:1;flex-direction:row;overflow:hidden}.mat-expansion-panel-header-title,.mat-expansion-panel-header-description{display:flex;flex-grow:1;margin-right:16px}[dir=rtl] .mat-expansion-panel-header-title,[dir=rtl] .mat-expansion-panel-header-description{margin-right:0;margin-left:16px}.mat-expansion-panel-header-description{flex-grow:2}.mat-expansion-indicator::after{border-style:solid;border-width:0 2px 2px 0;content:\"\";display:inline-block;padding:3px;transform:rotate(45deg);vertical-align:middle}\n"]
        }]
      }], function () {
        return [{
          type: MatExpansionPanel,
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Host"]
          }]
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ElementRef"]
        }, {
          type: _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_5__["FocusMonitor"]
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ChangeDetectorRef"]
        }, {
          type: undefined,
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Inject"],
            args: [MAT_EXPANSION_PANEL_DEFAULT_OPTIONS]
          }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Optional"]
          }]
        }];
      }, {
        expandedHeight: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"]
        }],
        collapsedHeight: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"]
        }]
      });
    })();

    if (false) {}
    /**
     * `<mat-panel-description>`
     *
     * This directive is to be used inside of the MatExpansionPanelHeader component.
     */


    var MatExpansionPanelDescription = function MatExpansionPanelDescription() {
      _classCallCheck(this, MatExpansionPanelDescription);
    };

    MatExpansionPanelDescription.ɵfac = function MatExpansionPanelDescription_Factory(t) {
      return new (t || MatExpansionPanelDescription)();
    };

    MatExpansionPanelDescription.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineDirective"]({
      type: MatExpansionPanelDescription,
      selectors: [["mat-panel-description"]],
      hostAttrs: [1, "mat-expansion-panel-header-description"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵsetClassMetadata"](MatExpansionPanelDescription, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Directive"],
        args: [{
          selector: 'mat-panel-description',
          host: {
            "class": 'mat-expansion-panel-header-description'
          }
        }]
      }], null, null);
    })();
    /**
     * `<mat-panel-title>`
     *
     * This directive is to be used inside of the MatExpansionPanelHeader component.
     */


    var MatExpansionPanelTitle = function MatExpansionPanelTitle() {
      _classCallCheck(this, MatExpansionPanelTitle);
    };

    MatExpansionPanelTitle.ɵfac = function MatExpansionPanelTitle_Factory(t) {
      return new (t || MatExpansionPanelTitle)();
    };

    MatExpansionPanelTitle.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineDirective"]({
      type: MatExpansionPanelTitle,
      selectors: [["mat-panel-title"]],
      hostAttrs: [1, "mat-expansion-panel-header-title"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵsetClassMetadata"](MatExpansionPanelTitle, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Directive"],
        args: [{
          selector: 'mat-panel-title',
          host: {
            "class": 'mat-expansion-panel-header-title'
          }
        }]
      }], null, null);
    })();
    /**
     * @fileoverview added by tsickle
     * Generated from: src/material/expansion/accordion.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /**
     * Directive for a Material Design Accordion.
     */


    var MatAccordion = /*#__PURE__*/function (_angular_cdk_accordio2) {
      _inherits(MatAccordion, _angular_cdk_accordio2);

      var _super2 = _createSuper(MatAccordion);

      function MatAccordion() {
        var _this6;

        _classCallCheck(this, MatAccordion);

        _this6 = _super2.apply(this, arguments);
        /**
         * Headers belonging to this accordion.
         */

        _this6._ownHeaders = new _angular_core__WEBPACK_IMPORTED_MODULE_3__["QueryList"]();
        _this6._hideToggle = false;
        /**
         * Display mode used for all expansion panels in the accordion. Currently two display
         * modes exist:
         *  default - a gutter-like spacing is placed around any expanded panel, placing the expanded
         *     panel at a different elevation from the rest of the accordion.
         *  flat - no spacing is placed around expanded panels, showing all panels at the same
         *     elevation.
         */

        _this6.displayMode = 'default';
        /**
         * The position of the expansion indicator.
         */

        _this6.togglePosition = 'after';
        return _this6;
      }
      /**
       * Whether the expansion indicator should be hidden.
       * @return {?}
       */


      _createClass(MatAccordion, [{
        key: "ngAfterContentInit",

        /**
         * @return {?}
         */
        value: function ngAfterContentInit() {
          var _this7 = this;

          this._headers.changes.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["startWith"])(this._headers)).subscribe(
          /**
          * @param {?} headers
          * @return {?}
          */
          function (headers) {
            _this7._ownHeaders.reset(headers.filter(
            /**
            * @param {?} header
            * @return {?}
            */
            function (header) {
              return header.panel.accordion === _this7;
            }));

            _this7._ownHeaders.notifyOnChanges();
          });

          this._keyManager = new _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_5__["FocusKeyManager"](this._ownHeaders).withWrap();
        }
        /**
         * Handles keyboard events coming in from the panel headers.
         * @param {?} event
         * @return {?}
         */

      }, {
        key: "_handleHeaderKeydown",
        value: function _handleHeaderKeydown(event) {
          var keyCode = event.keyCode;
          /** @type {?} */

          var manager = this._keyManager;

          if (keyCode === _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_6__["HOME"]) {
            if (!Object(_angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_6__["hasModifierKey"])(event)) {
              manager.setFirstItemActive();
              event.preventDefault();
            }
          } else if (keyCode === _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_6__["END"]) {
            if (!Object(_angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_6__["hasModifierKey"])(event)) {
              manager.setLastItemActive();
              event.preventDefault();
            }
          } else {
            this._keyManager.onKeydown(event);
          }
        }
        /**
         * @param {?} header
         * @return {?}
         */

      }, {
        key: "_handleHeaderFocus",
        value: function _handleHeaderFocus(header) {
          this._keyManager.updateActiveItem(header);
        }
      }, {
        key: "hideToggle",
        get: function get() {
          return this._hideToggle;
        }
        /**
         * @param {?} show
         * @return {?}
         */
        ,
        set: function set(show) {
          this._hideToggle = Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_4__["coerceBooleanProperty"])(show);
        }
      }]);

      return MatAccordion;
    }(_angular_cdk_accordion__WEBPACK_IMPORTED_MODULE_0__["CdkAccordion"]);

    MatAccordion.ɵfac = function MatAccordion_Factory(t) {
      return ɵMatAccordion_BaseFactory(t || MatAccordion);
    };

    MatAccordion.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineDirective"]({
      type: MatAccordion,
      selectors: [["mat-accordion"]],
      contentQueries: function MatAccordion_ContentQueries(rf, ctx, dirIndex) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵcontentQuery"](dirIndex, MatExpansionPanelHeader, true);
        }

        if (rf & 2) {
          var _t;

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵloadQuery"]()) && (ctx._headers = _t);
        }
      },
      hostAttrs: [1, "mat-accordion"],
      hostVars: 2,
      hostBindings: function MatAccordion_HostBindings(rf, ctx) {
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵclassProp"]("mat-accordion-multi", ctx.multi);
        }
      },
      inputs: {
        multi: "multi",
        displayMode: "displayMode",
        togglePosition: "togglePosition",
        hideToggle: "hideToggle"
      },
      exportAs: ["matAccordion"],
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵProvidersFeature"]([{
        provide: MAT_ACCORDION,
        useExisting: MatAccordion
      }]), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵInheritDefinitionFeature"]]
    });
    MatAccordion.propDecorators = {
      _headers: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ContentChildren"],
        args: [MatExpansionPanelHeader, {
          descendants: true
        }]
      }],
      hideToggle: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"]
      }],
      displayMode: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"]
      }],
      togglePosition: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"]
      }]
    };

    var ɵMatAccordion_BaseFactory = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetInheritedFactory"](MatAccordion);
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵsetClassMetadata"](MatAccordion, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Directive"],
        args: [{
          selector: 'mat-accordion',
          exportAs: 'matAccordion',
          inputs: ['multi'],
          providers: [{
            provide: MAT_ACCORDION,
            useExisting: MatAccordion
          }],
          host: {
            "class": 'mat-accordion',
            // Class binding which is only used by the test harness as there is no other
            // way for the harness to detect if multiple panel support is enabled.
            '[class.mat-accordion-multi]': 'this.multi'
          }
        }]
      }], null, {
        displayMode: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"]
        }],
        togglePosition: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"]
        }],
        hideToggle: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"]
        }],
        _headers: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ContentChildren"],
          args: [MatExpansionPanelHeader, {
            descendants: true
          }]
        }]
      });
    })();

    if (false) {}
    /**
     * @fileoverview added by tsickle
     * Generated from: src/material/expansion/expansion-module.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */


    var MatExpansionModule = function MatExpansionModule() {
      _classCallCheck(this, MatExpansionModule);
    };

    MatExpansionModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineNgModule"]({
      type: MatExpansionModule
    });
    MatExpansionModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjector"]({
      factory: function MatExpansionModule_Factory(t) {
        return new (t || MatExpansionModule)();
      },
      imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_cdk_accordion__WEBPACK_IMPORTED_MODULE_0__["CdkAccordionModule"], _angular_cdk_portal__WEBPACK_IMPORTED_MODULE_1__["PortalModule"]]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsetNgModuleScope"](MatExpansionModule, {
        declarations: function declarations() {
          return [MatAccordion, MatExpansionPanel, MatExpansionPanelActionRow, MatExpansionPanelHeader, MatExpansionPanelTitle, MatExpansionPanelDescription, MatExpansionPanelContent];
        },
        imports: function imports() {
          return [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_cdk_accordion__WEBPACK_IMPORTED_MODULE_0__["CdkAccordionModule"], _angular_cdk_portal__WEBPACK_IMPORTED_MODULE_1__["PortalModule"]];
        },
        exports: function exports() {
          return [MatAccordion, MatExpansionPanel, MatExpansionPanelActionRow, MatExpansionPanelHeader, MatExpansionPanelTitle, MatExpansionPanelDescription, MatExpansionPanelContent];
        }
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵsetClassMetadata"](MatExpansionModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["NgModule"],
        args: [{
          imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_cdk_accordion__WEBPACK_IMPORTED_MODULE_0__["CdkAccordionModule"], _angular_cdk_portal__WEBPACK_IMPORTED_MODULE_1__["PortalModule"]],
          exports: [MatAccordion, MatExpansionPanel, MatExpansionPanelActionRow, MatExpansionPanelHeader, MatExpansionPanelTitle, MatExpansionPanelDescription, MatExpansionPanelContent],
          declarations: [MatAccordion, MatExpansionPanel, MatExpansionPanelActionRow, MatExpansionPanelHeader, MatExpansionPanelTitle, MatExpansionPanelDescription, MatExpansionPanelContent]
        }]
      }], null, null);
    })();
    /**
     * @fileoverview added by tsickle
     * Generated from: src/material/expansion/public-api.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /**
     * Generated bundle index. Do not edit.
     */
    //# sourceMappingURL=expansion.js.map

    /***/

  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/registro-uno/registro-uno.page.html":
  /*!*******************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/registro-uno/registro-uno.page.html ***!
    \*******************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppRegistroUnoRegistroUnoPageHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ion-content [ngClass]=\"{'ion-no-padding':muestraMensaje, 'ion-padding': muestraMensaje == false }\">\n  <ion-row class=\"mt-24\" [hidden]=\"muestraMensaje\">\n    <button mat-icon-button aria-label=\"Example icon-button with a heart icon\" (click)=\"volver()\">\n      <mat-icon>arrow_back_ios</mat-icon>\n    </button>\n  </ion-row>\n  <div [hidden]=\"muestraMensaje\">\n    <ion-row class=\"mt-16\">\n      <h1>Hola, {{nombre}}, un gusto en conocerte</h1>\n    </ion-row>\n    <ion-row>\n      <p class=\"texto-1\">A continuación procederemos a verificar si ya tienes cuenta activa y existen datos clínicos, para\n        esto necesitamos que\n        ingreses tu RUN, fecha de nacimiento y correo electrónico, la dirección de<strong> correo electrónico debe ser la registrada\n        al momento de inscribirte en tu Centro de salud.</strong><br>\n        Existe la posibilidad de validar con clave única, siempre y cuando tu Establecimiento tenga habilitado dicho servicio.\n      </p>\n    </ion-row>\n    <form [formGroup]=\"forma\" novalidate>\n      <!-- run -->\n      <ion-row class=\"mt-16\">\n        <mat-form-field appearance=\"outline\" style=\"width: 100%;\">\n          <mat-label>Run (Sin puntos y con guión)</mat-label>\n          <input matInput placeholder=\"12535301-1\" formControlName=\"run\" name=\"run\" required>\n          <mat-error *ngIf=\"f.run.errors && f.run.errors.required\">Run requerido</mat-error>\n          <mat-error *ngIf=\"f.run.errors && f.run.errors.runInvalido == false\">Rut inválido</mat-error>\n        </mat-form-field>\n      </ion-row>\n      <!-- fecha nacimiento -->\n      <ion-row>\n        <mat-form-field appearance=\"outline\" style=\"width: 100%;\">\n          <mat-label>Seleccione fecha nacimiento</mat-label>\n          <input matInput [matDatepicker]=\"datepicker\"  formControlName=\"fechaNacimiento\" name=\"fechaNacimiento\" required>\n          <mat-datepicker-toggle matSuffix [for]=\"datepicker\"></mat-datepicker-toggle>\n          <mat-datepicker #datepicker>\n          </mat-datepicker>\n          <mat-error *ngIf=\"f.fechaNacimiento.errors && f.fechaNacimiento.errors.required\">Fecha nac requerida</mat-error>\n        </mat-form-field>\n      </ion-row>\n      <ion-row>\n        <mat-form-field appearance=\"outline\" style=\"width: 100%;\">\n          <mat-label>Correo electrónico</mat-label>\n          <input matInput placeholder=\"ejemplo@gmail.com\" formControlName=\"email\" name=\"email\" required>\n          <mat-error [hidden]=\"!(f.email.errors && f.email.errors.required)\">Correo requerido</mat-error>\n          <mat-error [hidden]=\"!(f.email.errors && f.email.errors.pattern)\">Correo inválido</mat-error>\n        </mat-form-field>\n      </ion-row>\n      <ion-row class=\"mt-24\">\n        <button [disabled]=\"forma.invalid\" mat-flat-button color=\"primary\" style=\"width: 90%; margin-left: 5%;\"\n          (click)=\"verificaRegistroCompleto()\">CONTINUAR</button>\n      </ion-row>\n    </form>\n  </div>\n  <div [hidden]=\"!muestraMensaje\">\n    <app-pagina-mensajes [titulo]=\"objetoMensaje.titulo\" [contenido]=\"objetoMensaje.contenido\" [irA]=\"objetoMensaje.irA\"></app-pagina-mensajes>\n  </div>\n\n</ion-content>";
    /***/
  },

  /***/
  "./src/app/registro-uno/registro-uno.module.ts":
  /*!*****************************************************!*\
    !*** ./src/app/registro-uno/registro-uno.module.ts ***!
    \*****************************************************/

  /*! exports provided: RegistroUnoPageModule */

  /***/
  function srcAppRegistroUnoRegistroUnoModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "RegistroUnoPageModule", function () {
      return RegistroUnoPageModule;
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


    var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @angular/material/form-field */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/form-field.js");
    /* harmony import */


    var _angular_material_select__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! @angular/material/select */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/select.js");
    /* harmony import */


    var _angular_material_input__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! @angular/material/input */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/input.js");
    /* harmony import */


    var _angular_material_button__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! @angular/material/button */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/button.js");
    /* harmony import */


    var _angular_material_icon__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! @angular/material/icon */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/icon.js");
    /* harmony import */


    var _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! @angular/material/datepicker */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/datepicker.js");
    /* harmony import */


    var _angular_material_expansion__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
    /*! @angular/material/expansion */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/expansion.js");
    /* harmony import */


    var _angular_material_core__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
    /*! @angular/material/core */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _registro_uno_page__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
    /*! ./registro-uno.page */
    "./src/app/registro-uno/registro-uno.page.ts");
    /* harmony import */


    var _components_components_module__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
    /*! ../components/components.module */
    "./src/app/components/components.module.ts");

    var RegistroUnoPageModule = function RegistroUnoPageModule() {
      _classCallCheck(this, RegistroUnoPageModule);
    };

    RegistroUnoPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_6__["MatFormFieldModule"], _angular_material_select__WEBPACK_IMPORTED_MODULE_7__["MatSelectModule"], _angular_material_input__WEBPACK_IMPORTED_MODULE_8__["MatInputModule"], _angular_material_button__WEBPACK_IMPORTED_MODULE_9__["MatButtonModule"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_10__["MatIconModule"], _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_11__["MatDatepickerModule"], _angular_material_expansion__WEBPACK_IMPORTED_MODULE_12__["MatExpansionModule"], _angular_material_core__WEBPACK_IMPORTED_MODULE_13__["MatNativeDateModule"], _components_components_module__WEBPACK_IMPORTED_MODULE_15__["ComponentsModule"], _angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterModule"].forChild([{
        path: '',
        component: _registro_uno_page__WEBPACK_IMPORTED_MODULE_14__["RegistroUnoPage"]
      }])],
      declarations: [_registro_uno_page__WEBPACK_IMPORTED_MODULE_14__["RegistroUnoPage"]]
    })], RegistroUnoPageModule);
    /***/
  },

  /***/
  "./src/app/registro-uno/registro-uno.page.scss":
  /*!*****************************************************!*\
    !*** ./src/app/registro-uno/registro-uno.page.scss ***!
    \*****************************************************/

  /*! exports provided: default */

  /***/
  function srcAppRegistroUnoRegistroUnoPageScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".mt-16 {\n  margin-top: 16px;\n}\n\n.mt-32 {\n  margin-top: 32px;\n}\n\n.mt-24 {\n  margin-top: 24px;\n}\n\n.mt-80 {\n  margin-top: 5em;\n}\n\n.mt-40 {\n  margin-top: 2.5em;\n}\n\n.mt-36 {\n  margin-top: 2.25em;\n}\n\n.mt-52 {\n  margin-top: 3.25em;\n}\n\n.texto-1 {\n  font-size: 1.2em;\n  color: #575657;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcmVnaXN0cm8tdW5vL0M6XFxEaXNjbyBGXFxhcHBfbWlmYW1pbGlhX2dpdFxcbWlGYW1pbGlhX3ByZS9zcmNcXGFwcFxccmVnaXN0cm8tdW5vXFxyZWdpc3Ryby11bm8ucGFnZS5zY3NzIiwic3JjL2FwcC9yZWdpc3Ryby11bm8vcmVnaXN0cm8tdW5vLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGdCQUFBO0FDQ0o7O0FEQ0E7RUFDSSxnQkFBQTtBQ0VKOztBREFBO0VBQ0ksZ0JBQUE7QUNHSjs7QUREQTtFQUNJLGVBQUE7QUNJSjs7QURGQTtFQUNJLGlCQUFBO0FDS0o7O0FESEE7RUFDSSxrQkFBQTtBQ01KOztBREpBO0VBQ0ksa0JBQUE7QUNPSjs7QURMQTtFQUNJLGdCQUFBO0VBQ0EsY0FBQTtBQ1FKIiwiZmlsZSI6InNyYy9hcHAvcmVnaXN0cm8tdW5vL3JlZ2lzdHJvLXVuby5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIubXQtMTZ7XHJcbiAgICBtYXJnaW4tdG9wOiAxNnB4O1xyXG59XHJcbi5tdC0zMntcclxuICAgIG1hcmdpbi10b3A6IDMycHg7XHJcbn1cclxuLm10LTI0e1xyXG4gICAgbWFyZ2luLXRvcDogMjRweDtcclxufVxyXG4ubXQtODB7XHJcbiAgICBtYXJnaW4tdG9wOiA1ZW07XHJcbn1cclxuLm10LTQwe1xyXG4gICAgbWFyZ2luLXRvcDogMi41ZW07XHJcbn1cclxuLm10LTM2e1xyXG4gICAgbWFyZ2luLXRvcDogMi4yNWVtO1xyXG59XHJcbi5tdC01MntcclxuICAgIG1hcmdpbi10b3A6IDMuMjVlbTtcclxufVxyXG4udGV4dG8tMXtcclxuICAgIGZvbnQtc2l6ZTogMS4yZW07XHJcbiAgICBjb2xvcjogIzU3NTY1NztcclxuICAgIFxyXG59IiwiLm10LTE2IHtcbiAgbWFyZ2luLXRvcDogMTZweDtcbn1cblxuLm10LTMyIHtcbiAgbWFyZ2luLXRvcDogMzJweDtcbn1cblxuLm10LTI0IHtcbiAgbWFyZ2luLXRvcDogMjRweDtcbn1cblxuLm10LTgwIHtcbiAgbWFyZ2luLXRvcDogNWVtO1xufVxuXG4ubXQtNDAge1xuICBtYXJnaW4tdG9wOiAyLjVlbTtcbn1cblxuLm10LTM2IHtcbiAgbWFyZ2luLXRvcDogMi4yNWVtO1xufVxuXG4ubXQtNTIge1xuICBtYXJnaW4tdG9wOiAzLjI1ZW07XG59XG5cbi50ZXh0by0xIHtcbiAgZm9udC1zaXplOiAxLjJlbTtcbiAgY29sb3I6ICM1NzU2NTc7XG59Il19 */";
    /***/
  },

  /***/
  "./src/app/registro-uno/registro-uno.page.ts":
  /*!***************************************************!*\
    !*** ./src/app/registro-uno/registro-uno.page.ts ***!
    \***************************************************/

  /*! exports provided: RegistroUnoPage */

  /***/
  function srcAppRegistroUnoRegistroUnoPageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "RegistroUnoPage", function () {
      return RegistroUnoPage;
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


    var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _app_services_ServicioUtiles__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ../../app/services/ServicioUtiles */
    "./src/app/services/ServicioUtiles.ts");
    /* harmony import */


    var _app_services_ServicioGeo__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ../../app/services/ServicioGeo */
    "./src/app/services/ServicioGeo.ts");
    /* harmony import */


    var _app_services_ServicioParametrosApp__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ../../app/services/ServicioParametrosApp */
    "./src/app/services/ServicioParametrosApp.ts");
    /* harmony import */


    var moment__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! moment */
    "./node_modules/moment/moment.js");
    /* harmony import */


    var moment__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_8__); //servicios


    var RegistroUnoPage = /*#__PURE__*/function () {
      function RegistroUnoPage(navCtrl, utiles, servicioGeo, parametros, loading, formBuilder, activatedRoute, router) {
        var _this8 = this;

        _classCallCheck(this, RegistroUnoPage);

        this.navCtrl = navCtrl;
        this.utiles = utiles;
        this.servicioGeo = servicioGeo;
        this.parametros = parametros;
        this.loading = loading;
        this.formBuilder = formBuilder;
        this.activatedRoute = activatedRoute;
        this.router = router;
        this.nombre = '';
        this.cargando = false; //expresiones regulares

        this.expEmail = /^[^@\s]+@[^@\s]+\.[^@\s]+$/gm;
        this.tipoMovimiento = '1';
        this.estaAgregandoFamilia = false;
        this.paginaAnterior = 'inicio'; //para mostrar la pagina de mensajes

        this.muestraMensaje = false;
        this.objetoMensaje = {
          irA: 'inicio',
          titulo: '',
          contenido: ''
        };

        this.RunValidator = function (fg) {
          var run = fg.get('run').value;

          if (run !== null && run !== "") {
            if (_this8.utiles.Rut(run) == false) {
              _this8.forma.controls.run.setErrors({
                runInvalido: false
              });
            }
          }

          return run !== null ? null : null;
        };
      }

      _createClass(RegistroUnoPage, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this9 = this;

          moment__WEBPACK_IMPORTED_MODULE_8__["locale"]('es');
          this.activatedRoute.queryParams.subscribe(function (params) {
            if (params && params.estaAgregandoFamilia) {
              _this9.estaAgregandoFamilia = true;
            }

            if (params && params.nombre) {
              _this9.nombre = params.nombre;
            }

            if (params && params.modulo) {
              _this9.paginaAnterior = params.modulo;
            }
          });
          this.cargarForma();
        }
      }, {
        key: "cargarForma",
        value: function cargarForma() {
          this.forma = new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormGroup"]({
            'run': new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required]),
            'email': new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].pattern(this.expEmail)]),
            'fechaNacimiento': new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required])
          }, {
            validators: this.RunValidator
          });
        }
      }, {
        key: "volver",
        value: function volver() {
          //this.navCtrl.navigateRoot('nuevo-login');
          var navigationExtras = {
            queryParams: {
              modulo: 'inicio',
              nombre: this.nombre
            }
          };
          this.navCtrl.navigateRoot(['pre-registro-uno'], navigationExtras);
        } //para validar

      }, {
        key: "verificaRegistroCompleto",
        value: function verificaRegistroCompleto() {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
            var _this10 = this;

            var run, idDispositivo, fechaNac, fechaNacStr, loader;
            return regeneratorRuntime.wrap(function _callee2$(_context2) {
              while (1) {
                switch (_context2.prev = _context2.next) {
                  case 0:
                    if (!this.forma.invalid) {
                      _context2.next = 2;
                      break;
                    }

                    return _context2.abrupt("return");

                  case 2:
                    run = this.forma.controls.run.value;
                    idDispositivo = this.utiles.entregaIdDispositivo();
                    fechaNac = moment__WEBPACK_IMPORTED_MODULE_8__(this.forma.controls.fechaNacimiento.value);
                    fechaNacStr = fechaNac.format('DD-MM-YYYY'); //console.log('run registro uno ' + run);
                    //console.log('idispositivo registro uno ' + idDispositivo);
                    //console.log('fecha nac registro uno ' + fechaNac);
                    //console.log('fecha nac registro uno str ' + fechaNacStr);

                    this.cargando = true;
                    _context2.next = 9;
                    return this.loading.create({
                      message: 'Verificando...<br>Registro',
                      duration: 3000
                    });

                  case 9:
                    loader = _context2.sent;
                    _context2.next = 12;
                    return loader.present().then(function () {
                      return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(_this10, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
                        var _this11 = this;

                        return regeneratorRuntime.wrap(function _callee$(_context) {
                          while (1) {
                            switch (_context.prev = _context.next) {
                              case 0:
                                if (!this.utiles.isAppOnDevice()) {
                                  //llamada web
                                  this.servicioGeo.getRegistroAppRun(run, idDispositivo).subscribe(function (response) {
                                    //procesar
                                    _this11.procesarRespuestaRegistroCompleto(response, loader);
                                  });
                                } else {
                                  //llamada nativa
                                  this.servicioGeo.getRegistroAppNativeRun(run, idDispositivo).then(function (response) {
                                    var data = JSON.parse(response.data);

                                    _this11.procesarRespuestaRegistroCompleto(data, loader);
                                  }, function (error) {
                                    _this11.utiles.presentToast('Ocurrió un error de obtención identificador', 'bottom', 4000);

                                    loader.dismiss();
                                  });
                                }

                              case 1:
                              case "end":
                                return _context.stop();
                            }
                          }
                        }, _callee, this);
                      }));
                    });

                  case 12:
                  case "end":
                    return _context2.stop();
                }
              }
            }, _callee2, this);
          }));
        }
      }, {
        key: "verificaRegistro",
        value: function verificaRegistro() {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee4() {
            var _this12 = this;

            var run, idDispositivo, loader;
            return regeneratorRuntime.wrap(function _callee4$(_context4) {
              while (1) {
                switch (_context4.prev = _context4.next) {
                  case 0:
                    run = this.forma.controls.run;
                    idDispositivo = this.utiles.entregaIdDispositivo();
                    this.cargando = true;
                    _context4.next = 5;
                    return this.loading.create({
                      message: 'Verificando...<br>Registro',
                      duration: 3000
                    });

                  case 5:
                    loader = _context4.sent;
                    _context4.next = 8;
                    return loader.present().then(function () {
                      return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(_this12, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee3() {
                        var _this13 = this;

                        return regeneratorRuntime.wrap(function _callee3$(_context3) {
                          while (1) {
                            switch (_context3.prev = _context3.next) {
                              case 0:
                                if (!this.utiles.isAppOnDevice()) {
                                  //llamada web
                                  this.servicioGeo.getRegistroAppRun(run.value, idDispositivo).subscribe(function (response) {
                                    //procesar
                                    _this13.procesarRespuestaRegistro(response, loader);
                                  });
                                } else {
                                  //llamada nativa
                                  this.servicioGeo.getRegistroAppNativeRun(run.value, idDispositivo).then(function (response) {
                                    var data = JSON.parse(response.data);

                                    _this13.procesarRespuestaRegistro(data, loader);
                                  }, function (error) {
                                    _this13.utiles.presentToast('Ocurrió un error de obtención identificador', 'bottom', 4000);

                                    loader.dismiss();
                                  });
                                }

                              case 1:
                              case "end":
                                return _context3.stop();
                            }
                          }
                        }, _callee3, this);
                      }));
                    });

                  case 8:
                  case "end":
                    return _context4.stop();
                }
              }
            }, _callee4, this);
          }));
        }
      }, {
        key: "abrirLogin",
        value: function abrirLogin() {
          this.navCtrl.navigateRoot('nuevo-login');
        }
      }, {
        key: "procesarRespuestaRegistroCompleto",
        value: function procesarRespuestaRegistroCompleto(registro, loader) {
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
              } else {//si esta agregando familia hay que crear lo que corresponde y avisar al
                //usuario que fue creado o no exito
                //console.log('ESTA AGREGANDO FAMILIA');
              }
            } else {
              //su registro esta incompleto, derivarlo a la pagina de registro de la app
              this.registroIncompleto = registro; //pasar como parametro el registro incompleto a la otra pantalla para que pueda completarlo
              //******* LLAMAR A LA PAGINA DE REGISTRO  *************/

              this.utiles.presentToast('Su registro está incompleto', 'middle', 5000);
              loader.dismiss();
              this.irARegistro(this.estaAgregandoFamilia);
            }
          } else {
            //no tiene registro, llamar a la api para buscarlo en rayen
            loader.dismiss(); //llamamos a enrolamiento

            this.verficarEnrolamientoRayenCompleto(); //console.log('Buscarlo en rayen');
          }
        }
      }, {
        key: "procesarRespuestaRegistro",
        value: function procesarRespuestaRegistro(registro, loader) {
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
              } else {//si esta agregando familia hay que crear lo que corresponde y avisar al
                //usuario que fue creado o no exito
                //console.log('ESTA AGREGANDO FAMILIA');
              }
            } else {
              //su registro esta incompleto, derivarlo a la pagina de registro de la app
              this.registroIncompleto = registro; //pasar como parametro el registro incompleto a la otra pantalla para que pueda completarlo
              //******* LLAMAR A LA PAGINA DE REGISTRO  *************/

              this.utiles.presentToast('Su registro está incompleto', 'middle', 5000);
              loader.dismiss();
              this.irARegistro(this.estaAgregandoFamilia);
            }
          } else {
            //no tiene registro, llamar a la api para buscarlo en rayen
            loader.dismiss(); //llamamos a enrolamiento

            this.verficarEnrolamientoRayen(); //console.log('Buscarlo en rayen');
          }
        }
      }, {
        key: "irARegistro",
        value: function irARegistro(agregaFamilia) {
          //enviar registroIncompleto
          if (this.registroIncompleto) {
            var query = {
              usuario: null,
              estaAgregandoFamilia: null
            };
            query = {
              usuario: JSON.stringify(this.registroIncompleto),
              estaAgregandoFamilia: agregaFamilia
            };
            var navigationExtras = {
              queryParams: query
            };
            this.navCtrl.navigateRoot(['registro-usuario'], navigationExtras);
          }
        }
      }, {
        key: "irAClaveUnica",
        value: function irAClaveUnica() {
          //debemos generar un hash de al menos 30 caracteres para enviar a clave unica (state)
          var runUsuario = this.forma.controls.run.value;
          var fecha = moment__WEBPACK_IMPORTED_MODULE_8__().format('DD-MM-YYYY HH:mm');
          var enviar = runUsuario + '|' + fecha + '|' + this.tipoMovimiento;
          var state = this.utiles.encriptar(enviar); //guardamos en el local storage el state

          localStorage.setItem("STATE_CLAVE_UNICA", state);
          var navigationExtras = {
            queryParams: {
              state: state
            }
          }; //this.navCtrl.navigateRoot('login-clave-unica');

          this.navCtrl.navigateRoot(['login-clave-unica'], navigationExtras);
        }
      }, {
        key: "verficarEnrolamientoRayen",
        value: function verficarEnrolamientoRayen() {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee6() {
            var _this14 = this;

            var run, loader;
            return regeneratorRuntime.wrap(function _callee6$(_context6) {
              while (1) {
                switch (_context6.prev = _context6.next) {
                  case 0:
                    run = this.forma.controls.run;
                    this.cargando = true;
                    _context6.next = 4;
                    return this.loading.create({
                      message: 'Verificando...<br>Registro',
                      duration: 3000
                    });

                  case 4:
                    loader = _context6.sent;
                    _context6.next = 7;
                    return loader.present().then(function () {
                      return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(_this14, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee5() {
                        var _this15 = this;

                        return regeneratorRuntime.wrap(function _callee5$(_context5) {
                          while (1) {
                            switch (_context5.prev = _context5.next) {
                              case 0:
                                if (!this.utiles.isAppOnDevice()) {
                                  //llamada web
                                  this.servicioGeo.verificaEnrolamiento(run.value).subscribe(function (response) {
                                    //procesar
                                    //console.log(response);
                                    _this15.procesaRespuestaEnrolamiento(response, loader);
                                  });
                                } else {
                                  //llamada nativa
                                  this.servicioGeo.verificaEnrolamientoNative(run.value).then(function (response) {
                                    var data = JSON.parse(response.data); //console.log(data);

                                    _this15.procesaRespuestaEnrolamiento(data, loader);
                                  }, function (error) {
                                    _this15.utiles.presentToast('Ocurrió un error de obtención identificador', 'bottom', 4000);

                                    loader.dismiss();
                                  });
                                }

                              case 1:
                              case "end":
                                return _context5.stop();
                            }
                          }
                        }, _callee5, this);
                      }));
                    });

                  case 7:
                  case "end":
                    return _context6.stop();
                }
              }
            }, _callee6, this);
          }));
        }
      }, {
        key: "verficarEnrolamientoRayenCompleto",
        value: function verficarEnrolamientoRayenCompleto() {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee8() {
            var _this16 = this;

            var run, fechaNac, fechaNacStr, email, loader;
            return regeneratorRuntime.wrap(function _callee8$(_context8) {
              while (1) {
                switch (_context8.prev = _context8.next) {
                  case 0:
                    run = this.forma.controls.run.value;
                    fechaNac = moment__WEBPACK_IMPORTED_MODULE_8__(this.forma.controls.fechaNacimiento.value);
                    fechaNacStr = fechaNac.format('DD-MM-YYYY');
                    email = this.forma.controls.email.value;
                    this.cargando = true;
                    _context8.next = 7;
                    return this.loading.create({
                      message: 'Verificando...<br>Registro',
                      duration: 3000
                    });

                  case 7:
                    loader = _context8.sent;
                    _context8.next = 10;
                    return loader.present().then(function () {
                      return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(_this16, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee7() {
                        var _this17 = this;

                        return regeneratorRuntime.wrap(function _callee7$(_context7) {
                          while (1) {
                            switch (_context7.prev = _context7.next) {
                              case 0:
                                if (!this.utiles.isAppOnDevice()) {
                                  //llamada web
                                  this.servicioGeo.verificaEnrolamientoCompleto(run, fechaNacStr, email).subscribe(function (response) {
                                    //procesar
                                    //console.log(response);
                                    _this17.procesaRespuestaEnrolamiento(response, loader);
                                  });
                                } else {
                                  //llamada nativa
                                  this.servicioGeo.verificaEnrolamientoCompletoNative(run, fechaNacStr, email).then(function (response) {
                                    var data = JSON.parse(response.data); //console.log(data);

                                    _this17.procesaRespuestaEnrolamiento(data, loader);
                                  }, function (error) {
                                    _this17.utiles.presentToast('Ocurrió un error de obtención identificador', 'bottom', 4000);

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

                  case 10:
                  case "end":
                    return _context8.stop();
                }
              }
            }, _callee8, this);
          }));
        }
      }, {
        key: "procesaRespuestaEnrolamiento",
        value: function procesaRespuestaEnrolamiento(usuarioAps, loader) {
          if (usuarioAps.RespuestaBase.CodigoMensaje == 0) {
            var usuario = usuarioAps.UsuarioAps;
            var preRegistro = usuarioAps.PreRegistro;
            /*       this.registroIncompleto = {
                    Activo: 1,
                    Apellidos: usuario.ApellidoPaterno == null ? '' : usuario.ApellidoPaterno + ' ' + usuario.ApellidoMaterno == null ? '': usuario.ApellidoMaterno,
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
                  } */

            loader.dismiss(); //acá estamos ok deberíamos mandarlo a que complete su fomrulario
            //this.irARegistro(this.estaAgregandoFamilia);
            //ya no vamos directamente al registro, guardamos los datos de validación en el backend
            //en la table de pre-registro
            //lo redirigimos a la pagina de login y le informamos que revise su correo electrónico

            this.muestraMensaje = true; //this.objetoMensaje.irA = this.paginaAnterior;

            this.objetoMensaje.irA = 'inicio';
            this.objetoMensaje.titulo = 'Registro en la app mi familia';
            this.objetoMensaje.contenido = usuarioAps.RespuestaBase.Mensaje; //aca debemos guardar el preregistro

            localStorage.setItem('PRE-REGISTRO', JSON.stringify(preRegistro));
          } else {
            //aca definitivamente debemos enviarlo a clave única
            loader.dismiss(); //no debemos enviarlo a clave unica, debemos validar el mensaje
            //en base a la respuesta del mensaje realizar acciones

            if (this.parametros.USA_CLAVE_UNICA()) {
              //console.log('clave unica');
              this.irAClaveUnica();
            } else {
              this.muestraMensaje = true; //debemos revisar la respuesta, pondremos una pagina intermedia
              //para procesar la respuesta
              //levantar pagina mensajes
              //registro de menor de edad

              if (usuarioAps.RespuestaBase.CodigoMensaje == 8) {
                this.objetoMensaje.irA = this.paginaAnterior;
                this.objetoMensaje.titulo = 'Menor de edad';
                this.objetoMensaje.contenido = 'No puedes registrarte ya que eres menor de edad y el registro para esta aplicación es sólo para mayores.';
              } else if (usuarioAps.RespuestaBase.CodigoMensaje == 9) {
                this.objetoMensaje.irA = this.paginaAnterior;
                this.objetoMensaje.titulo = 'Fecha nacimiento no coincide';
                this.objetoMensaje.contenido = 'La fecha de nacimiento ingresada no coincide con nuestros registros, revísela e inténtelo nuevamente.';
              } else if (usuarioAps.RespuestaBase.CodigoMensaje == 10) {
                this.objetoMensaje.irA = this.paginaAnterior;
                this.objetoMensaje.titulo = 'Email no coincide';
                this.objetoMensaje.contenido = 'El email ingresado no coincide con nuestros registros, revíselo e inténtelo nuevamente.';
              } else if (usuarioAps.RespuestaBase.CodigoMensaje == 11) {
                this.objetoMensaje.irA = this.paginaAnterior;
                this.objetoMensaje.titulo = 'Sin datos de contacto';
                this.objetoMensaje.contenido = 'No cuentas con datos de contacto, te sugerimos actualizarlos en tu centro de salud.';
              } else if (usuarioAps.RespuestaBase.CodigoMensaje == 12) {
                this.objetoMensaje.irA = this.paginaAnterior;
                this.objetoMensaje.titulo = 'Establecimiento sin permisos';
                this.objetoMensaje.contenido = 'El establecimiento en el cual te encuentras inscrito no tiene permisos para usar la aplicacion.';
              } else if (usuarioAps.RespuestaBase.CodigoMensaje == 1) {
                this.objetoMensaje.irA = this.paginaAnterior;
                this.objetoMensaje.titulo = 'Run no encontrado';
                this.objetoMensaje.contenido = 'Por el momento no cuentas con registros de salud en la Red pública, el run digitado no ha sido encontrado.';
              } else {
                this.objetoMensaje.irA = this.paginaAnterior;
                this.objetoMensaje.titulo = 'Mensaje';
                this.objetoMensaje.contenido = usuarioAps.RespuestaBase.Mensaje;
              }
            }
          }
        }
      }, {
        key: "f",
        get: function get() {
          return this.forma.controls;
        }
      }]);

      return RegistroUnoPage;
    }();

    RegistroUnoPage.ctorParameters = function () {
      return [{
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"]
      }, {
        type: _app_services_ServicioUtiles__WEBPACK_IMPORTED_MODULE_5__["ServicioUtiles"]
      }, {
        type: _app_services_ServicioGeo__WEBPACK_IMPORTED_MODULE_6__["ServicioGeo"]
      }, {
        type: _app_services_ServicioParametrosApp__WEBPACK_IMPORTED_MODULE_7__["ServicioParametrosApp"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["LoadingController"]
      }, {
        type: _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]
      }];
    };

    RegistroUnoPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-registro-uno',
      template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! raw-loader!./registro-uno.page.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/registro-uno/registro-uno.page.html"))["default"],
      styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! ./registro-uno.page.scss */
      "./src/app/registro-uno/registro-uno.page.scss"))["default"]]
    })], RegistroUnoPage);
    /***/
  }
}]);
//# sourceMappingURL=registro-uno-registro-uno-module-es5.js.map