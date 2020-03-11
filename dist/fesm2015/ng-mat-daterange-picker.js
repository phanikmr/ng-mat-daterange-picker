import { __decorate, __param } from 'tslib';
import { InjectionToken, Inject, Injectable, Component, ViewEncapsulation, Injector, EventEmitter, ChangeDetectorRef, ViewChild, Output, Input, ChangeDetectionStrategy, NgModule } from '@angular/core';
import { DatePipe, CommonModule } from '@angular/common';
import { OverlayRef, OverlayConfig, Overlay, OverlayModule } from '@angular/cdk/overlay';
import { ComponentPortal, PortalInjector } from '@angular/cdk/portal';
import { takeWhile } from 'rxjs/operators';
import { Subject } from 'rxjs';
import { trigger, state, style, transition, group, animate } from '@angular/animations';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatCalendar, MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatTooltipModule } from '@angular/material/tooltip';

/* import { DATE } from '../ngx-drp.module'; */
const DATE = new InjectionToken('date');
let RangeStoreService = class RangeStoreService {
    constructor(_fromDate, _toDate) {
        this._fromDate = _fromDate;
        this._toDate = _toDate;
        this.rangeUpdate$ = new Subject();
    }
    /* set fromDate(fromDate:Date) {
      this._fromDate = fromDate;
    } */
    get fromDate() {
        return this._fromDate;
    }
    /* set toDate(toDate:Date) {
      this._toDate = toDate;
    } */
    get toDate() {
        return this._toDate;
    }
    updateRange(fromDate = this._fromDate, toDate = this._toDate) {
        this._fromDate = fromDate;
        this._toDate = toDate;
        this.rangeUpdate$.next({ fromDate: this._fromDate, toDate: this._toDate });
    }
};
RangeStoreService.ctorParameters = () => [
    { type: Date, decorators: [{ type: Inject, args: [DATE,] }] },
    { type: Date, decorators: [{ type: Inject, args: [DATE,] }] }
];
RangeStoreService = __decorate([
    Injectable(),
    __param(0, Inject(DATE)),
    __param(1, Inject(DATE))
], RangeStoreService);

let ConfigStoreService = class ConfigStoreService {
    constructor() {
        this.defaultOptions = {
            excludeWeekends: false,
            animation: true,
            locale: 'en-US',
            fromMinMax: { fromDate: null, toDate: null },
            toMinMax: { fromDate: null, toDate: null }
        };
    }
    get ngxDrpOptions() {
        return this._ngxDrpOptions;
    }
    set ngxDrpOptions(options) {
        this._ngxDrpOptions = Object.assign(Object.assign({}, this.defaultOptions), options);
    }
};
ConfigStoreService = __decorate([
    Injectable()
], ConfigStoreService);

const pickerOverlayAnimations = {
    /** Transforms the height of the picker overlay content. */
    transformPanel: trigger('transformPickerOverlay', [
        state('void', style({ opacity: 0, transform: 'scale(1, 0)' })),
        state('enter', style({ opacity: 1, transform: 'scale(1, 1)' })),
        transition('void => enter', group([
            animate('400ms cubic-bezier(0.25, 0.8, 0.25, 1)')
        ])),
        transition('* => void', animate('100ms linear', style({ opacity: 0 })))
    ])
};

let PickerOverlayComponent = class PickerOverlayComponent {
    constructor(rangeStoreService, configStoreService, overlayRef) {
        this.rangeStoreService = rangeStoreService;
        this.configStoreService = configStoreService;
        this.overlayRef = overlayRef;
        this.presets = [];
    }
    ngOnInit() {
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
        ({
            fromDate: this.fromMinDate,
            toDate: this.fromMaxDate
        } = this.configStoreService.ngxDrpOptions.fromMinMax);
        ({
            fromDate: this.toMinDate,
            toDate: this.toMaxDate
        } = this.configStoreService.ngxDrpOptions.toMinMax);
    }
    updateFromDate(date) {
        this.fromDate = date;
    }
    updateToDate(date) {
        this.toDate = date;
    }
    updateRangeByPreset(presetItem) {
        this.updateFromDate(presetItem.range.fromDate);
        this.updateToDate(presetItem.range.toDate);
    }
    applyNewDates(e) {
        this.rangeStoreService.updateRange(this.fromDate, this.toDate);
        this.disposeOverLay();
    }
    discardNewDates(e) {
        // this.rangeStoreService.updateRange();
        this.disposeOverLay();
    }
    disposeOverLay() {
        this.overlayRef.dispose();
    }
};
PickerOverlayComponent.ctorParameters = () => [
    { type: RangeStoreService },
    { type: ConfigStoreService },
    { type: OverlayRef }
];
PickerOverlayComponent = __decorate([
    Component({
        selector: 'ngx-mat-drp-picker-overlay',
        template: "<div [@transformPickerOverlay]=\"shouldAnimate\" class=\"ngx-mat-drp-calendar-container\">\r\n\r\n  <div class=\"ngx-mat-drp-calendar-item\">\r\n    <calendar-wrapper \r\n    [prefixLabel]=\"startDatePrefix\"\r\n    [selectedDate]=\"fromDate\"\r\n    [minDate]=\"fromMinDate\"\r\n    [maxDate]=\"fromMaxDate\"\r\n    (selectedDateChange)=\"updateFromDate($event)\">\r\n  </calendar-wrapper>\r\n  </div>\r\n  <div class=\"ngx-mat-drp-calendar-item\">\r\n    <calendar-wrapper \r\n    [prefixLabel]=\"endDatePrefix\"\r\n    [selectedDate]=\"toDate\"\r\n    [minDate]=\"toMinDate\"\r\n    [maxDate]=\"toMaxDate\" \r\n    (selectedDateChange)=\"updateToDate($event)\">\r\n  </calendar-wrapper>\r\n  </div>\r\n  <div class=\"ngx-mat-drp-calendar-item\">\r\n    <div class=\"ngx-mat-drp-menu\">\r\n      <mat-drp-presets [presets]=\"presets\" (presetChanged)=\"updateRangeByPreset($event)\"></mat-drp-presets>\r\n      <div class=\"ngx-mat-drp-controls\">\r\n        <button mat-button color=\"primary\" (click)=\"applyNewDates($event)\">{{applyLabel}}</button>\r\n        <button mat-button (click)=\"discardNewDates($event)\">{{cancelLabel}}</button>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n",
        animations: [pickerOverlayAnimations.transformPanel],
        encapsulation: ViewEncapsulation.None,
        styles: [".ngx-mat-drp-calendar-container{display:-webkit-box;display:flex;justify-content:space-around;min-width:650px;height:300px}.ngx-mat-drp-calendar-item{flex-basis:33.33%;min-width:210px;padding:1em;font-family:Roboto,\"Helvetica Neue\",sans-serif;font-size:14px;font-weight:400}.ngx-mat-drp-menu{height:100%}.ngx-mat-drp-controls{display:-webkit-box;display:flex;justify-content:space-around;margin:10% auto}.ngx-mat-drp-overlay{box-shadow:0 5px 5px -3px rgba(0,0,0,.2),0 8px 10px 1px rgba(0,0,0,.14),0 3px 14px 2px rgba(0,0,0,.12);background:#fff;border-radius:2px}.ngx-mat-drp-overlay-backdrop{background-color:rgba(0,0,0,.2);opacity:.2}"]
    })
], PickerOverlayComponent);

const DEFAULT_CONFIG = {
    panelClass: 'ngx-mat-drp-overlay',
    hasBackdrop: true,
    backdropClass: 'ngx-mat-drp-overlay-backdrop',
    shouldCloseOnBackdropClick: true
};
let CalendarOverlayService = class CalendarOverlayService {
    constructor(overlay, injector) {
        this.overlay = overlay;
        this.injector = injector;
    }
    open(config = {}, hostElemRef) {
        this.hostElemRef = hostElemRef;
        const overlayConfig = Object.assign(Object.assign({}, DEFAULT_CONFIG), config);
        const overlayRef = this.createOverlay(overlayConfig);
        const portalInjector = this.createInjector(overlayRef);
        const calendarPortal = new ComponentPortal(PickerOverlayComponent, null, portalInjector);
        overlayRef.attach(calendarPortal);
        overlayRef
            .backdropClick()
            .pipe(takeWhile(() => overlayConfig.shouldCloseOnBackdropClick))
            .subscribe(() => overlayRef.dispose());
        return overlayRef;
    }
    createOverlay(config) {
        const overlayConfig = this.getOverlayConfig(config);
        return this.overlay.create(overlayConfig);
    }
    getOverlayConfig(config) {
        const positionStrategy = this.overlay
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
        const overlayConfig = new OverlayConfig({
            hasBackdrop: config.hasBackdrop,
            backdropClass: config.backdropClass,
            panelClass: config.panelClass,
            scrollStrategy: this.overlay.scrollStrategies.block(),
            positionStrategy
        });
        return overlayConfig;
    }
    createInjector(overlayRef) {
        const injectionTokens = new WeakMap();
        injectionTokens.set(OverlayRef, overlayRef);
        return new PortalInjector(this.injector, injectionTokens);
    }
};
CalendarOverlayService.ctorParameters = () => [
    { type: Overlay },
    { type: Injector }
];
CalendarOverlayService = __decorate([
    Injectable()
], CalendarOverlayService);

let NgxMatDrpComponent = class NgxMatDrpComponent {
    constructor(changeDetectionRef, calendarOverlayService, rangeStoreService, configStoreService, datePipe) {
        this.changeDetectionRef = changeDetectionRef;
        this.calendarOverlayService = calendarOverlayService;
        this.rangeStoreService = rangeStoreService;
        this.configStoreService = configStoreService;
        this.datePipe = datePipe;
        this.selectedDateRangeChanged = new EventEmitter();
        this.selectedDateRange = '';
    }
    ngOnInit() {
        this.configStoreService.ngxDrpOptions = this.options;
        this.options.placeholder = this.options.placeholder || 'Choose a date';
        this.rangeUpdate$ = this.rangeStoreService.rangeUpdate$.subscribe(range => {
            const from = this.formatToDateString(range.fromDate, this.options.format);
            const to = this.formatToDateString(range.toDate, this.options.format);
            this.selectedDateRange = `${from} - ${to}`;
            this.selectedDateRangeChanged.emit(range);
        });
        this.rangeStoreService.updateRange(this.options.range.fromDate, this.options.range.toDate);
        this.changeDetectionRef.detectChanges();
    }
    ngOnDestroy() {
        if (this.rangeUpdate$) {
            this.rangeUpdate$.unsubscribe();
        }
    }
    formatToDateString(date, format) {
        return this.datePipe.transform(date, format);
    }
    openCalendar(event) {
        const overlayRef = this.calendarOverlayService.open(this.options.calendarOverlayConfig, this.calendarInput);
    }
    resetDates(range) {
        this.rangeStoreService.updateRange(range.fromDate, range.toDate);
    }
};
NgxMatDrpComponent.ctorParameters = () => [
    { type: ChangeDetectorRef },
    { type: CalendarOverlayService },
    { type: RangeStoreService },
    { type: ConfigStoreService },
    { type: DatePipe }
];
__decorate([
    ViewChild('calendarInput', { static: false })
], NgxMatDrpComponent.prototype, "calendarInput", void 0);
__decorate([
    Output()
], NgxMatDrpComponent.prototype, "selectedDateRangeChanged", void 0);
__decorate([
    Input()
], NgxMatDrpComponent.prototype, "options", void 0);
NgxMatDrpComponent = __decorate([
    Component({
        selector: 'ngx-mat-drp',
        template: "<div> \r\n  \r\n  <mat-form-field class=\"ngx-mat-drp-date-display\">\r\n    <input class=\"ngx-mat-drp-date-input\"\r\n          matInput [placeholder]=\"options.placeholder\"\r\n          [value]=\"selectedDateRange\"\r\n          [matTooltip]=\"selectedDateRange\"\r\n          (click)=\"openCalendar($event)\"\r\n          readonly\r\n          #calendarInput >\r\n    <div matSuffix \r\n          class=\"ngx-mat-drp-calendar\"\r\n          (click)=\"openCalendar($event)\">\r\n    </div>\r\n  </mat-form-field>\r\n  \r\n</div>    \r\n",
        providers: [
            CalendarOverlayService,
            RangeStoreService,
            ConfigStoreService,
            DatePipe
        ],
        changeDetection: ChangeDetectionStrategy.OnPush,
        styles: [".ngx-mat-drp-date-display{min-width:230px}.ngx-mat-drp-date-input{text-overflow:ellipsis;color:#4169e1}.ngx-mat-drp-calendar{background-image:url('data:image/svg+xml,<svg fill=\"#000000\" height=\"24\" viewBox=\"0 0 24 24\" width=\"24\" xmlns=\"http://www.w3.org/2000/svg\">    <path d=\"M9 11H7v2h2v-2zm4 0h-2v2h2v-2zm4 0h-2v2h2v-2zm2-7h-1V2h-2v2H8V2H6v2H5c-1.11 0-1.99.9-1.99 2L3 20c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 16H5V9h14v11z\"/>    <path d=\"M0 0h24v24H0z\" fill=\"none\"/></svg>');width:24px;height:24px}"]
    })
], NgxMatDrpComponent);

let CalendarWrapperComponent = class CalendarWrapperComponent {
    constructor(configStore) {
        this.configStore = configStore;
        this.selectedDateChange = new EventEmitter();
        this.weekendFilter = (d) => true;
        this.dateFormat = configStore.ngxDrpOptions.format;
        if (configStore.ngxDrpOptions.excludeWeekends) {
            this.weekendFilter = (d) => {
                const day = d.getDay();
                return day !== 0 && day !== 6;
            };
        }
    }
    ngOnChanges(changes) {
        // Necessary to force view refresh
        this.matCalendar.activeDate = changes.selectedDate.currentValue;
    }
    onSelectedChange(date) {
        this.selectedDateChange.emit(date);
    }
    onYearSelected(e) { }
    onUserSelection(e) { }
};
CalendarWrapperComponent.ctorParameters = () => [
    { type: ConfigStoreService }
];
__decorate([
    ViewChild(MatCalendar, { static: false })
], CalendarWrapperComponent.prototype, "matCalendar", void 0);
__decorate([
    Output()
], CalendarWrapperComponent.prototype, "selectedDateChange", void 0);
__decorate([
    Input()
], CalendarWrapperComponent.prototype, "selectedDate", void 0);
__decorate([
    Input()
], CalendarWrapperComponent.prototype, "prefixLabel", void 0);
__decorate([
    Input()
], CalendarWrapperComponent.prototype, "minDate", void 0);
__decorate([
    Input()
], CalendarWrapperComponent.prototype, "maxDate", void 0);
CalendarWrapperComponent = __decorate([
    Component({
        selector: 'calendar-wrapper',
        template: "<div>\r\n\r\n  <!-- <mat-divider></mat-divider> -->\r\n  <span class=\"ngx-mat-drp-date-label\">\r\n    <label>{{prefixLabel}}</label>\r\n    <label class=\"ngx-mat-drp-selected-date-label\">{{selectedDate | date:dateFormat}}</label>\r\n  </span>\r\n  <!-- <mat-divider></mat-divider> -->\r\n\r\n  <mat-calendar \r\n    [startAt]=\"selectedDate\"\r\n    [selected]=\"selectedDate\"\r\n    [minDate]=\"minDate\"\r\n    [maxDate]=\"maxDate\"\r\n    (selectedChange)=\"onSelectedChange($event)\"\r\n    (yearSelected)=\"onYearSelected($event)\"\r\n    (_userSelection)=\"onUserSelection($event)\"\r\n    [dateFilter]=\"weekendFilter\">\r\n  </mat-calendar>\r\n\r\n</div>",
        changeDetection: ChangeDetectionStrategy.OnPush,
        styles: [".ngx-mat-drp-date-label{background:#fafafa;margin:15px;padding:4px 2px;width:100%;font-size:14px;font-weight:500}.ngx-mat-drp-selected-date-label{color:rgba(0,0,0,.38);padding-left:5%}"]
    })
], CalendarWrapperComponent);

let PresetsComponent = class PresetsComponent {
    constructor() {
        this.presetChanged = new EventEmitter();
    }
    ngOnInit() { }
    setPresetPeriod(event) {
        this.presetChanged.emit(event);
    }
};
__decorate([
    Input()
], PresetsComponent.prototype, "presets", void 0);
__decorate([
    Output()
], PresetsComponent.prototype, "presetChanged", void 0);
PresetsComponent = __decorate([
    Component({
        selector: 'mat-drp-presets',
        template: "<div>\r\n  <ul class=\"ngx-mat-drp-presets-list\">\r\n    <li *ngFor=\"let preset of presets\" (click)=\"setPresetPeriod(preset)\"> {{preset.presetLabel}} </li>\r\n  </ul>\r\n</div>",
        changeDetection: ChangeDetectionStrategy.OnPush,
        styles: [".ngx-mat-drp-presets-list{list-style-type:none;margin:0;padding:0}.ngx-mat-drp-presets-list li{margin:5px 0;padding:4%;cursor:pointer;background:#fafafa;color:#3f51b5;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}.ngx-mat-drp-presets-list li:hover{background:#3f51b5;color:#fff}"]
    })
], PresetsComponent);

const ɵ0 = new Date();
let NgxMatDrpModule = class NgxMatDrpModule {
};
NgxMatDrpModule = __decorate([
    NgModule({
        imports: [
            CommonModule,
            MatFormFieldModule,
            MatDatepickerModule,
            MatNativeDateModule,
            MatInputModule,
            MatButtonModule,
            MatTooltipModule,
            OverlayModule
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

/**
 * Generated bundle index. Do not edit.
 */

export { CalendarOverlayService, CalendarWrapperComponent, ConfigStoreService, DATE, NgxMatDrpComponent, NgxMatDrpModule, PickerOverlayComponent, PresetsComponent, RangeStoreService, ɵ0, pickerOverlayAnimations as ɵa };
//# sourceMappingURL=ng-mat-daterange-picker.js.map
