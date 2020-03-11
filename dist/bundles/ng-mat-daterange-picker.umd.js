(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/core'), require('@angular/common'), require('@angular/cdk/overlay'), require('@angular/cdk/portal'), require('rxjs/operators'), require('rxjs'), require('@angular/animations'), require('@angular/material/form-field'), require('@angular/material/datepicker'), require('@angular/material/core'), require('@angular/material/input'), require('@angular/material/button'), require('@angular/material/tooltip')) :
    typeof define === 'function' && define.amd ? define('ng-mat-daterange-picker', ['exports', '@angular/core', '@angular/common', '@angular/cdk/overlay', '@angular/cdk/portal', 'rxjs/operators', 'rxjs', '@angular/animations', '@angular/material/form-field', '@angular/material/datepicker', '@angular/material/core', '@angular/material/input', '@angular/material/button', '@angular/material/tooltip'], factory) :
    (global = global || self, factory(global['ng-mat-daterange-picker'] = {}, global.ng.core, global.ng.common, global.ng.cdk.overlay, global.ng.cdk.portal, global.rxjs.operators, global.rxjs, global.ng.animations, global.ng.material.formField, global.ng.material.datepicker, global.ng.material.core, global.ng.material.input, global.ng.material.button, global.ng.material.tooltip));
}(this, (function (exports, core, common, overlay, portal, operators, rxjs, animations, formField, datepicker, core$1, input, button, tooltip) { 'use strict';

    /*! *****************************************************************************
    Copyright (c) Microsoft Corporation. All rights reserved.
    Licensed under the Apache License, Version 2.0 (the "License"); you may not use
    this file except in compliance with the License. You may obtain a copy of the
    License at http://www.apache.org/licenses/LICENSE-2.0

    THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
    KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
    WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
    MERCHANTABLITY OR NON-INFRINGEMENT.

    See the Apache Version 2.0 License for specific language governing permissions
    and limitations under the License.
    ***************************************************************************** */
    /* global Reflect, Promise */

    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };

    function __extends(d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    }

    var __assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
        return t;
    };

    function __rest(s, e) {
        var t = {};
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
            t[p] = s[p];
        if (s != null && typeof Object.getOwnPropertySymbols === "function")
            for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) if (e.indexOf(p[i]) < 0)
                t[p[i]] = s[p[i]];
        return t;
    }

    function __decorate(decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    }

    function __param(paramIndex, decorator) {
        return function (target, key) { decorator(target, key, paramIndex); }
    }

    function __metadata(metadataKey, metadataValue) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(metadataKey, metadataValue);
    }

    function __awaiter(thisArg, _arguments, P, generator) {
        return new (P || (P = Promise))(function (resolve, reject) {
            function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
            function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
            function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
            step((generator = generator.apply(thisArg, _arguments || [])).next());
        });
    }

    function __generator(thisArg, body) {
        var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
        return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
        function verb(n) { return function (v) { return step([n, v]); }; }
        function step(op) {
            if (f) throw new TypeError("Generator is already executing.");
            while (_) try {
                if (f = 1, y && (t = y[op[0] & 2 ? "return" : op[0] ? "throw" : "next"]) && !(t = t.call(y, op[1])).done) return t;
                if (y = 0, t) op = [0, t.value];
                switch (op[0]) {
                    case 0: case 1: t = op; break;
                    case 4: _.label++; return { value: op[1], done: false };
                    case 5: _.label++; y = op[1]; op = [0]; continue;
                    case 7: op = _.ops.pop(); _.trys.pop(); continue;
                    default:
                        if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                        if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                        if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                        if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                        if (t[2]) _.ops.pop();
                        _.trys.pop(); continue;
                }
                op = body.call(thisArg, _);
            } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
            if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
        }
    }

    function __exportStar(m, exports) {
        for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
    }

    function __values(o) {
        var m = typeof Symbol === "function" && o[Symbol.iterator], i = 0;
        if (m) return m.call(o);
        return {
            next: function () {
                if (o && i >= o.length) o = void 0;
                return { value: o && o[i++], done: !o };
            }
        };
    }

    function __read(o, n) {
        var m = typeof Symbol === "function" && o[Symbol.iterator];
        if (!m) return o;
        var i = m.call(o), r, ar = [], e;
        try {
            while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
        }
        catch (error) { e = { error: error }; }
        finally {
            try {
                if (r && !r.done && (m = i["return"])) m.call(i);
            }
            finally { if (e) throw e.error; }
        }
        return ar;
    }

    function __spread() {
        for (var ar = [], i = 0; i < arguments.length; i++)
            ar = ar.concat(__read(arguments[i]));
        return ar;
    }

    function __await(v) {
        return this instanceof __await ? (this.v = v, this) : new __await(v);
    }

    function __asyncGenerator(thisArg, _arguments, generator) {
        if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
        var g = generator.apply(thisArg, _arguments || []), i, q = [];
        return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i;
        function verb(n) { if (g[n]) i[n] = function (v) { return new Promise(function (a, b) { q.push([n, v, a, b]) > 1 || resume(n, v); }); }; }
        function resume(n, v) { try { step(g[n](v)); } catch (e) { settle(q[0][3], e); } }
        function step(r) { r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r);  }
        function fulfill(value) { resume("next", value); }
        function reject(value) { resume("throw", value); }
        function settle(f, v) { if (f(v), q.shift(), q.length) resume(q[0][0], q[0][1]); }
    }

    function __asyncDelegator(o) {
        var i, p;
        return i = {}, verb("next"), verb("throw", function (e) { throw e; }), verb("return"), i[Symbol.iterator] = function () { return this; }, i;
        function verb(n, f) { if (o[n]) i[n] = function (v) { return (p = !p) ? { value: __await(o[n](v)), done: n === "return" } : f ? f(v) : v; }; }
    }

    function __asyncValues(o) {
        if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
        var m = o[Symbol.asyncIterator];
        return m ? m.call(o) : typeof __values === "function" ? __values(o) : o[Symbol.iterator]();
    }

    function __makeTemplateObject(cooked, raw) {
        if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
        return cooked;
    };

    function __importStar(mod) {
        if (mod && mod.__esModule) return mod;
        var result = {};
        if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
        result.default = mod;
        return result;
    }

    function __importDefault(mod) {
        return (mod && mod.__esModule) ? mod : { default: mod };
    }

    /* import { DATE } from '../ngx-drp.module'; */
    var DATE = new core.InjectionToken('date');
    var RangeStoreService = /** @class */ (function () {
        function RangeStoreService(_fromDate, _toDate) {
            this._fromDate = _fromDate;
            this._toDate = _toDate;
            this.rangeUpdate$ = new rxjs.Subject();
        }
        Object.defineProperty(RangeStoreService.prototype, "fromDate", {
            /* set fromDate(fromDate:Date) {
              this._fromDate = fromDate;
            } */
            get: function () {
                return this._fromDate;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(RangeStoreService.prototype, "toDate", {
            /* set toDate(toDate:Date) {
              this._toDate = toDate;
            } */
            get: function () {
                return this._toDate;
            },
            enumerable: true,
            configurable: true
        });
        RangeStoreService.prototype.updateRange = function (fromDate, toDate) {
            if (fromDate === void 0) { fromDate = this._fromDate; }
            if (toDate === void 0) { toDate = this._toDate; }
            this._fromDate = fromDate;
            this._toDate = toDate;
            this.rangeUpdate$.next({ fromDate: this._fromDate, toDate: this._toDate });
        };
        RangeStoreService.ctorParameters = function () { return [
            { type: Date, decorators: [{ type: core.Inject, args: [DATE,] }] },
            { type: Date, decorators: [{ type: core.Inject, args: [DATE,] }] }
        ]; };
        RangeStoreService = __decorate([
            core.Injectable(),
            __param(0, core.Inject(DATE)),
            __param(1, core.Inject(DATE))
        ], RangeStoreService);
        return RangeStoreService;
    }());

    var ConfigStoreService = /** @class */ (function () {
        function ConfigStoreService() {
            this.defaultOptions = {
                excludeWeekends: false,
                animation: true,
                locale: 'en-US',
                fromMinMax: { fromDate: null, toDate: null },
                toMinMax: { fromDate: null, toDate: null }
            };
        }
        Object.defineProperty(ConfigStoreService.prototype, "ngxDrpOptions", {
            get: function () {
                return this._ngxDrpOptions;
            },
            set: function (options) {
                this._ngxDrpOptions = __assign(__assign({}, this.defaultOptions), options);
            },
            enumerable: true,
            configurable: true
        });
        ConfigStoreService = __decorate([
            core.Injectable()
        ], ConfigStoreService);
        return ConfigStoreService;
    }());

    var pickerOverlayAnimations = {
        /** Transforms the height of the picker overlay content. */
        transformPanel: animations.trigger('transformPickerOverlay', [
            animations.state('void', animations.style({ opacity: 0, transform: 'scale(1, 0)' })),
            animations.state('enter', animations.style({ opacity: 1, transform: 'scale(1, 1)' })),
            animations.transition('void => enter', animations.group([
                animations.animate('400ms cubic-bezier(0.25, 0.8, 0.25, 1)')
            ])),
            animations.transition('* => void', animations.animate('100ms linear', animations.style({ opacity: 0 })))
        ])
    };

    var PickerOverlayComponent = /** @class */ (function () {
        function PickerOverlayComponent(rangeStoreService, configStoreService, overlayRef) {
            this.rangeStoreService = rangeStoreService;
            this.configStoreService = configStoreService;
            this.overlayRef = overlayRef;
            this.presets = [];
        }
        PickerOverlayComponent.prototype.ngOnInit = function () {
            var _a, _b;
            this.fromDate = this.rangeStoreService.fromDate;
            this.toDate = this.rangeStoreService.toDate;
            this.startDatePrefix = this.configStoreService.ngxDrpOptions.startDatePrefix || 'FROM:';
            this.endDatePrefix = this.configStoreService.ngxDrpOptions.endDatePrefix || 'TO:';
            this.applyLabel = this.configStoreService.ngxDrpOptions.applyLabel || 'Apply';
            this.cancelLabel = this.configStoreService.ngxDrpOptions.cancelLabel || 'Cancel';
            this.presets = this.configStoreService.ngxDrpOptions.presets;
            this.shouldAnimate = this.configStoreService.ngxDrpOptions.animation
                ? 'enter'
                : 'noop';
            (_a = this.configStoreService.ngxDrpOptions.fromMinMax, this.fromMinDate = _a.fromDate, this.fromMaxDate = _a.toDate);
            (_b = this.configStoreService.ngxDrpOptions.toMinMax, this.toMinDate = _b.fromDate, this.toMaxDate = _b.toDate);
        };
        PickerOverlayComponent.prototype.updateFromDate = function (date) {
            this.fromDate = date;
        };
        PickerOverlayComponent.prototype.updateToDate = function (date) {
            this.toDate = date;
        };
        PickerOverlayComponent.prototype.updateRangeByPreset = function (presetItem) {
            this.updateFromDate(presetItem.range.fromDate);
            this.updateToDate(presetItem.range.toDate);
        };
        PickerOverlayComponent.prototype.applyNewDates = function (e) {
            this.rangeStoreService.updateRange(this.fromDate, this.toDate);
            this.disposeOverLay();
        };
        PickerOverlayComponent.prototype.discardNewDates = function (e) {
            // this.rangeStoreService.updateRange();
            this.disposeOverLay();
        };
        PickerOverlayComponent.prototype.disposeOverLay = function () {
            this.overlayRef.dispose();
        };
        PickerOverlayComponent.ctorParameters = function () { return [
            { type: RangeStoreService },
            { type: ConfigStoreService },
            { type: overlay.OverlayRef }
        ]; };
        PickerOverlayComponent = __decorate([
            core.Component({
                selector: 'ngx-mat-drp-picker-overlay',
                template: "<div [@transformPickerOverlay]=\"shouldAnimate\" class=\"ngx-mat-drp-calendar-container\">\r\n\r\n  <div class=\"ngx-mat-drp-calendar-item\">\r\n    <calendar-wrapper \r\n    [prefixLabel]=\"startDatePrefix\"\r\n    [selectedDate]=\"fromDate\"\r\n    [minDate]=\"fromMinDate\"\r\n    [maxDate]=\"fromMaxDate\"\r\n    (selectedDateChange)=\"updateFromDate($event)\">\r\n  </calendar-wrapper>\r\n  </div>\r\n  <div class=\"ngx-mat-drp-calendar-item\">\r\n    <calendar-wrapper \r\n    [prefixLabel]=\"endDatePrefix\"\r\n    [selectedDate]=\"toDate\"\r\n    [minDate]=\"toMinDate\"\r\n    [maxDate]=\"toMaxDate\" \r\n    (selectedDateChange)=\"updateToDate($event)\">\r\n  </calendar-wrapper>\r\n  </div>\r\n  <div class=\"ngx-mat-drp-calendar-item\">\r\n    <div class=\"ngx-mat-drp-menu\">\r\n      <mat-drp-presets [presets]=\"presets\" (presetChanged)=\"updateRangeByPreset($event)\"></mat-drp-presets>\r\n      <div class=\"ngx-mat-drp-controls\">\r\n        <button mat-button color=\"primary\" (click)=\"applyNewDates($event)\">{{applyLabel}}</button>\r\n        <button mat-button (click)=\"discardNewDates($event)\">{{cancelLabel}}</button>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n",
                animations: [pickerOverlayAnimations.transformPanel],
                encapsulation: core.ViewEncapsulation.None,
                styles: [".ngx-mat-drp-calendar-container{display:-webkit-box;display:flex;justify-content:space-around;min-width:650px;height:300px}.ngx-mat-drp-calendar-item{flex-basis:33.33%;min-width:210px;padding:1em;font-family:Roboto,\"Helvetica Neue\",sans-serif;font-size:14px;font-weight:400}.ngx-mat-drp-menu{height:100%}.ngx-mat-drp-controls{display:-webkit-box;display:flex;justify-content:space-around;margin:10% auto}.ngx-mat-drp-overlay{box-shadow:0 5px 5px -3px rgba(0,0,0,.2),0 8px 10px 1px rgba(0,0,0,.14),0 3px 14px 2px rgba(0,0,0,.12);background:#fff;border-radius:2px}.ngx-mat-drp-overlay-backdrop{background-color:rgba(0,0,0,.2);opacity:.2}"]
            })
        ], PickerOverlayComponent);
        return PickerOverlayComponent;
    }());

    var DEFAULT_CONFIG = {
        panelClass: 'ngx-mat-drp-overlay',
        hasBackdrop: true,
        backdropClass: 'ngx-mat-drp-overlay-backdrop',
        shouldCloseOnBackdropClick: true
    };
    var CalendarOverlayService = /** @class */ (function () {
        function CalendarOverlayService(overlay, injector) {
            this.overlay = overlay;
            this.injector = injector;
        }
        CalendarOverlayService.prototype.open = function (config, hostElemRef) {
            if (config === void 0) { config = {}; }
            this.hostElemRef = hostElemRef;
            var overlayConfig = __assign(__assign({}, DEFAULT_CONFIG), config);
            var overlayRef = this.createOverlay(overlayConfig);
            var portalInjector = this.createInjector(overlayRef);
            var calendarPortal = new portal.ComponentPortal(PickerOverlayComponent, null, portalInjector);
            overlayRef.attach(calendarPortal);
            overlayRef
                .backdropClick()
                .pipe(operators.takeWhile(function () { return overlayConfig.shouldCloseOnBackdropClick; }))
                .subscribe(function () { return overlayRef.dispose(); });
            return overlayRef;
        };
        CalendarOverlayService.prototype.createOverlay = function (config) {
            var overlayConfig = this.getOverlayConfig(config);
            return this.overlay.create(overlayConfig);
        };
        CalendarOverlayService.prototype.getOverlayConfig = function (config) {
            var positionStrategy = this.overlay
                .position()
                .flexibleConnectedTo(this.hostElemRef)
                .withFlexibleDimensions(false)
                .withViewportMargin(8)
                .withDefaultOffsetY(12)
                .withPositions([
                {
                    originX: 'start',
                    originY: 'bottom',
                    overlayX: 'start',
                    overlayY: 'top'
                },
                {
                    originX: 'start',
                    originY: 'top',
                    overlayX: 'start',
                    overlayY: 'bottom'
                },
                {
                    originX: 'end',
                    originY: 'bottom',
                    overlayX: 'end',
                    overlayY: 'top'
                },
                {
                    originX: 'end',
                    originY: 'top',
                    overlayX: 'end',
                    overlayY: 'bottom'
                }
            ]);
            var overlayConfig = new overlay.OverlayConfig({
                hasBackdrop: config.hasBackdrop,
                backdropClass: config.backdropClass,
                panelClass: config.panelClass,
                scrollStrategy: this.overlay.scrollStrategies.block(),
                positionStrategy: positionStrategy
            });
            return overlayConfig;
        };
        CalendarOverlayService.prototype.createInjector = function (overlayRef) {
            var injectionTokens = new WeakMap();
            injectionTokens.set(overlay.OverlayRef, overlayRef);
            return new portal.PortalInjector(this.injector, injectionTokens);
        };
        CalendarOverlayService.ctorParameters = function () { return [
            { type: overlay.Overlay },
            { type: core.Injector }
        ]; };
        CalendarOverlayService = __decorate([
            core.Injectable()
        ], CalendarOverlayService);
        return CalendarOverlayService;
    }());

    var NgxMatDrpComponent = /** @class */ (function () {
        function NgxMatDrpComponent(changeDetectionRef, calendarOverlayService, rangeStoreService, configStoreService, datePipe) {
            this.changeDetectionRef = changeDetectionRef;
            this.calendarOverlayService = calendarOverlayService;
            this.rangeStoreService = rangeStoreService;
            this.configStoreService = configStoreService;
            this.datePipe = datePipe;
            this.selectedDateRangeChanged = new core.EventEmitter();
            this.selectedDateRange = '';
        }
        NgxMatDrpComponent.prototype.ngOnInit = function () {
            var _this = this;
            this.configStoreService.ngxDrpOptions = this.options;
            this.options.placeholder = this.options.placeholder || 'Choose a date';
            this.rangeUpdate$ = this.rangeStoreService.rangeUpdate$.subscribe(function (range) {
                var from = _this.formatToDateString(range.fromDate, _this.options.format);
                var to = _this.formatToDateString(range.toDate, _this.options.format);
                _this.selectedDateRange = from + " - " + to;
                _this.selectedDateRangeChanged.emit(range);
            });
            this.rangeStoreService.updateRange(this.options.range.fromDate, this.options.range.toDate);
            this.changeDetectionRef.detectChanges();
        };
        NgxMatDrpComponent.prototype.ngOnDestroy = function () {
            if (this.rangeUpdate$) {
                this.rangeUpdate$.unsubscribe();
            }
        };
        NgxMatDrpComponent.prototype.formatToDateString = function (date, format) {
            return this.datePipe.transform(date, format);
        };
        NgxMatDrpComponent.prototype.openCalendar = function (event) {
            var overlayRef = this.calendarOverlayService.open(this.options.calendarOverlayConfig, this.calendarInput);
        };
        NgxMatDrpComponent.prototype.resetDates = function (range) {
            this.rangeStoreService.updateRange(range.fromDate, range.toDate);
        };
        NgxMatDrpComponent.ctorParameters = function () { return [
            { type: core.ChangeDetectorRef },
            { type: CalendarOverlayService },
            { type: RangeStoreService },
            { type: ConfigStoreService },
            { type: common.DatePipe }
        ]; };
        __decorate([
            core.ViewChild('calendarInput', { static: false })
        ], NgxMatDrpComponent.prototype, "calendarInput", void 0);
        __decorate([
            core.Output()
        ], NgxMatDrpComponent.prototype, "selectedDateRangeChanged", void 0);
        __decorate([
            core.Input()
        ], NgxMatDrpComponent.prototype, "options", void 0);
        NgxMatDrpComponent = __decorate([
            core.Component({
                selector: 'ngx-mat-drp',
                template: "<div> \r\n  \r\n  <mat-form-field class=\"ngx-mat-drp-date-display\">\r\n    <input class=\"ngx-mat-drp-date-input\"\r\n          matInput [placeholder]=\"options.placeholder\"\r\n          [value]=\"selectedDateRange\"\r\n          [matTooltip]=\"selectedDateRange\"\r\n          (click)=\"openCalendar($event)\"\r\n          readonly\r\n          #calendarInput >\r\n    <div matSuffix \r\n          class=\"ngx-mat-drp-calendar\"\r\n          (click)=\"openCalendar($event)\">\r\n    </div>\r\n  </mat-form-field>\r\n  \r\n</div>    \r\n",
                providers: [
                    CalendarOverlayService,
                    RangeStoreService,
                    ConfigStoreService,
                    common.DatePipe
                ],
                changeDetection: core.ChangeDetectionStrategy.OnPush,
                styles: [".ngx-mat-drp-date-display{min-width:230px}.ngx-mat-drp-date-input{text-overflow:ellipsis;color:#4169e1}.ngx-mat-drp-calendar{background-image:url('data:image/svg+xml,<svg fill=\"#000000\" height=\"24\" viewBox=\"0 0 24 24\" width=\"24\" xmlns=\"http://www.w3.org/2000/svg\">    <path d=\"M9 11H7v2h2v-2zm4 0h-2v2h2v-2zm4 0h-2v2h2v-2zm2-7h-1V2h-2v2H8V2H6v2H5c-1.11 0-1.99.9-1.99 2L3 20c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 16H5V9h14v11z\"/>    <path d=\"M0 0h24v24H0z\" fill=\"none\"/></svg>');width:24px;height:24px}"]
            })
        ], NgxMatDrpComponent);
        return NgxMatDrpComponent;
    }());

    var CalendarWrapperComponent = /** @class */ (function () {
        function CalendarWrapperComponent(configStore) {
            this.configStore = configStore;
            this.selectedDateChange = new core.EventEmitter();
            this.weekendFilter = function (d) { return true; };
            this.dateFormat = configStore.ngxDrpOptions.format;
            if (configStore.ngxDrpOptions.excludeWeekends) {
                this.weekendFilter = function (d) {
                    var day = d.getDay();
                    return day !== 0 && day !== 6;
                };
            }
        }
        CalendarWrapperComponent.prototype.ngOnChanges = function (changes) {
            // Necessary to force view refresh
            this.matCalendar.activeDate = changes.selectedDate.currentValue;
        };
        CalendarWrapperComponent.prototype.onSelectedChange = function (date) {
            this.selectedDateChange.emit(date);
        };
        CalendarWrapperComponent.prototype.onYearSelected = function (e) { };
        CalendarWrapperComponent.prototype.onUserSelection = function (e) { };
        CalendarWrapperComponent.ctorParameters = function () { return [
            { type: ConfigStoreService }
        ]; };
        __decorate([
            core.ViewChild(datepicker.MatCalendar, { static: false })
        ], CalendarWrapperComponent.prototype, "matCalendar", void 0);
        __decorate([
            core.Output()
        ], CalendarWrapperComponent.prototype, "selectedDateChange", void 0);
        __decorate([
            core.Input()
        ], CalendarWrapperComponent.prototype, "selectedDate", void 0);
        __decorate([
            core.Input()
        ], CalendarWrapperComponent.prototype, "prefixLabel", void 0);
        __decorate([
            core.Input()
        ], CalendarWrapperComponent.prototype, "minDate", void 0);
        __decorate([
            core.Input()
        ], CalendarWrapperComponent.prototype, "maxDate", void 0);
        CalendarWrapperComponent = __decorate([
            core.Component({
                selector: 'calendar-wrapper',
                template: "<div>\r\n\r\n  <!-- <mat-divider></mat-divider> -->\r\n  <span class=\"ngx-mat-drp-date-label\">\r\n    <label>{{prefixLabel}}</label>\r\n    <label class=\"ngx-mat-drp-selected-date-label\">{{selectedDate | date:dateFormat}}</label>\r\n  </span>\r\n  <!-- <mat-divider></mat-divider> -->\r\n\r\n  <mat-calendar \r\n    [startAt]=\"selectedDate\"\r\n    [selected]=\"selectedDate\"\r\n    [minDate]=\"minDate\"\r\n    [maxDate]=\"maxDate\"\r\n    (selectedChange)=\"onSelectedChange($event)\"\r\n    (yearSelected)=\"onYearSelected($event)\"\r\n    (_userSelection)=\"onUserSelection($event)\"\r\n    [dateFilter]=\"weekendFilter\">\r\n  </mat-calendar>\r\n\r\n</div>",
                changeDetection: core.ChangeDetectionStrategy.OnPush,
                styles: [".ngx-mat-drp-date-label{background:#fafafa;margin:15px;padding:4px 2px;width:100%;font-size:14px;font-weight:500}.ngx-mat-drp-selected-date-label{color:rgba(0,0,0,.38);padding-left:5%}"]
            })
        ], CalendarWrapperComponent);
        return CalendarWrapperComponent;
    }());

    var PresetsComponent = /** @class */ (function () {
        function PresetsComponent() {
            this.presetChanged = new core.EventEmitter();
        }
        PresetsComponent.prototype.ngOnInit = function () { };
        PresetsComponent.prototype.setPresetPeriod = function (event) {
            this.presetChanged.emit(event);
        };
        __decorate([
            core.Input()
        ], PresetsComponent.prototype, "presets", void 0);
        __decorate([
            core.Output()
        ], PresetsComponent.prototype, "presetChanged", void 0);
        PresetsComponent = __decorate([
            core.Component({
                selector: 'mat-drp-presets',
                template: "<div>\r\n  <ul class=\"ngx-mat-drp-presets-list\">\r\n    <li *ngFor=\"let preset of presets\" (click)=\"setPresetPeriod(preset)\"> {{preset.presetLabel}} </li>\r\n  </ul>\r\n</div>",
                changeDetection: core.ChangeDetectionStrategy.OnPush,
                styles: [".ngx-mat-drp-presets-list{list-style-type:none;margin:0;padding:0}.ngx-mat-drp-presets-list li{margin:5px 0;padding:4%;cursor:pointer;background:#fafafa;color:#3f51b5;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}.ngx-mat-drp-presets-list li:hover{background:#3f51b5;color:#fff}"]
            })
        ], PresetsComponent);
        return PresetsComponent;
    }());

    var ɵ0 = new Date();
    var NgxMatDrpModule = /** @class */ (function () {
        function NgxMatDrpModule() {
        }
        NgxMatDrpModule = __decorate([
            core.NgModule({
                imports: [
                    common.CommonModule,
                    formField.MatFormFieldModule,
                    datepicker.MatDatepickerModule,
                    core$1.MatNativeDateModule,
                    input.MatInputModule,
                    button.MatButtonModule,
                    tooltip.MatTooltipModule,
                    overlay.OverlayModule
                ],
                declarations: [
                    NgxMatDrpComponent,
                    CalendarWrapperComponent,
                    PickerOverlayComponent,
                    PresetsComponent
                ],
                providers: [
                    { provide: DATE, useValue: ɵ0 }
                ],
                entryComponents: [PickerOverlayComponent],
                exports: [NgxMatDrpComponent]
            })
        ], NgxMatDrpModule);
        return NgxMatDrpModule;
    }());

    exports.CalendarOverlayService = CalendarOverlayService;
    exports.CalendarWrapperComponent = CalendarWrapperComponent;
    exports.ConfigStoreService = ConfigStoreService;
    exports.DATE = DATE;
    exports.NgxMatDrpComponent = NgxMatDrpComponent;
    exports.NgxMatDrpModule = NgxMatDrpModule;
    exports.PickerOverlayComponent = PickerOverlayComponent;
    exports.PresetsComponent = PresetsComponent;
    exports.RangeStoreService = RangeStoreService;
    exports.ɵ0 = ɵ0;
    exports.ɵa = pickerOverlayAnimations;

    Object.defineProperty(exports, '__esModule', { value: true });

})));
//# sourceMappingURL=ng-mat-daterange-picker.umd.js.map
