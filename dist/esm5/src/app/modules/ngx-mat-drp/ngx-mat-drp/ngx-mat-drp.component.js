import { __decorate } from "tslib";
import { Component, OnInit, ViewChild, Output, EventEmitter, Input, OnDestroy, ChangeDetectionStrategy, ChangeDetectorRef } from '@angular/core';
import { DatePipe } from '@angular/common';
import { CalendarOverlayService } from '../services/calendar-overlay.service';
import { RangeStoreService } from '../services/range-store.service';
import { ConfigStoreService } from '../services/config-store.service';
var NgxMatDrpComponent = /** @class */ (function () {
    function NgxMatDrpComponent(changeDetectionRef, calendarOverlayService, rangeStoreService, configStoreService, datePipe) {
        this.changeDetectionRef = changeDetectionRef;
        this.calendarOverlayService = calendarOverlayService;
        this.rangeStoreService = rangeStoreService;
        this.configStoreService = configStoreService;
        this.datePipe = datePipe;
        this.selectedDateRangeChanged = new EventEmitter();
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
        { type: ChangeDetectorRef },
        { type: CalendarOverlayService },
        { type: RangeStoreService },
        { type: ConfigStoreService },
        { type: DatePipe }
    ]; };
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
    return NgxMatDrpComponent;
}());
export { NgxMatDrpComponent };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmd4LW1hdC1kcnAuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vbmctbWF0LWRhdGVyYW5nZS1waWNrZXIvIiwic291cmNlcyI6WyJzcmMvYXBwL21vZHVsZXMvbmd4LW1hdC1kcnAvbmd4LW1hdC1kcnAvbmd4LW1hdC1kcnAuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxPQUFPLEVBQ0wsU0FBUyxFQUNULE1BQU0sRUFDTixTQUFTLEVBQ1QsTUFBTSxFQUNOLFlBQVksRUFDWixLQUFLLEVBQ0wsU0FBUyxFQUNULHVCQUF1QixFQUN2QixpQkFBaUIsRUFDbEIsTUFBTSxlQUFlLENBQUM7QUFDdkIsT0FBTyxFQUFFLFFBQVEsRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBRTNDLE9BQU8sRUFBRSxzQkFBc0IsRUFBRSxNQUFNLHNDQUFzQyxDQUFDO0FBQzlFLE9BQU8sRUFBRSxpQkFBaUIsRUFBRSxNQUFNLGlDQUFpQyxDQUFDO0FBRXBFLE9BQU8sRUFBRSxrQkFBa0IsRUFBRSxNQUFNLGtDQUFrQyxDQUFDO0FBZXRFO0lBVUUsNEJBQ1Usa0JBQXFDLEVBQ3JDLHNCQUE4QyxFQUMvQyxpQkFBb0MsRUFDcEMsa0JBQXNDLEVBQ3JDLFFBQWtCO1FBSmxCLHVCQUFrQixHQUFsQixrQkFBa0IsQ0FBbUI7UUFDckMsMkJBQXNCLEdBQXRCLHNCQUFzQixDQUF3QjtRQUMvQyxzQkFBaUIsR0FBakIsaUJBQWlCLENBQW1CO1FBQ3BDLHVCQUFrQixHQUFsQixrQkFBa0IsQ0FBb0I7UUFDckMsYUFBUSxHQUFSLFFBQVEsQ0FBVTtRQVhuQiw2QkFBd0IsR0FBd0IsSUFBSSxZQUFZLEVBQVMsQ0FBQztRQUluRixzQkFBaUIsR0FBRyxFQUFFLENBQUM7SUFRcEIsQ0FBQztJQUVKLHFDQUFRLEdBQVI7UUFBQSxpQkFxQkM7UUFwQkMsSUFBSSxDQUFDLGtCQUFrQixDQUFDLGFBQWEsR0FBRyxJQUFJLENBQUMsT0FBTyxDQUFDO1FBQ3JELElBQUksQ0FBQyxPQUFPLENBQUMsV0FBVyxHQUFHLElBQUksQ0FBQyxPQUFPLENBQUMsV0FBVyxJQUFJLGVBQWUsQ0FBQztRQUN2RSxJQUFJLENBQUMsWUFBWSxHQUFHLElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxZQUFZLENBQUMsU0FBUyxDQUFDLFVBQUEsS0FBSztZQUNyRSxJQUFNLElBQUksR0FBVyxLQUFJLENBQUMsa0JBQWtCLENBQzFDLEtBQUssQ0FBQyxRQUFRLEVBQ2QsS0FBSSxDQUFDLE9BQU8sQ0FBQyxNQUFNLENBQ3BCLENBQUM7WUFDRixJQUFNLEVBQUUsR0FBVyxLQUFJLENBQUMsa0JBQWtCLENBQ3hDLEtBQUssQ0FBQyxNQUFNLEVBQ1osS0FBSSxDQUFDLE9BQU8sQ0FBQyxNQUFNLENBQ3BCLENBQUM7WUFDRixLQUFJLENBQUMsaUJBQWlCLEdBQU0sSUFBSSxXQUFNLEVBQUksQ0FBQztZQUMzQyxLQUFJLENBQUMsd0JBQXdCLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDO1FBQzVDLENBQUMsQ0FBQyxDQUFDO1FBRUgsSUFBSSxDQUFDLGlCQUFpQixDQUFDLFdBQVcsQ0FDaEMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxLQUFLLENBQUMsUUFBUSxFQUMzQixJQUFJLENBQUMsT0FBTyxDQUFDLEtBQUssQ0FBQyxNQUFNLENBQzFCLENBQUM7UUFDRixJQUFJLENBQUMsa0JBQWtCLENBQUMsYUFBYSxFQUFFLENBQUM7SUFDMUMsQ0FBQztJQUVELHdDQUFXLEdBQVg7UUFDRSxJQUFJLElBQUksQ0FBQyxZQUFZLEVBQUU7WUFDckIsSUFBSSxDQUFDLFlBQVksQ0FBQyxXQUFXLEVBQUUsQ0FBQztTQUNqQztJQUNILENBQUM7SUFFTywrQ0FBa0IsR0FBMUIsVUFBMkIsSUFBVSxFQUFFLE1BQWM7UUFDbkQsT0FBTyxJQUFJLENBQUMsUUFBUSxDQUFDLFNBQVMsQ0FBQyxJQUFJLEVBQUUsTUFBTSxDQUFDLENBQUM7SUFDL0MsQ0FBQztJQUVELHlDQUFZLEdBQVosVUFBYSxLQUFLO1FBQ2hCLElBQU0sVUFBVSxHQUFlLElBQUksQ0FBQyxzQkFBc0IsQ0FBQyxJQUFJLENBQzdELElBQUksQ0FBQyxPQUFPLENBQUMscUJBQXFCLEVBQ2xDLElBQUksQ0FBQyxhQUFhLENBQ25CLENBQUM7SUFDSixDQUFDO0lBRU0sdUNBQVUsR0FBakIsVUFBa0IsS0FBWTtRQUM1QixJQUFJLENBQUMsaUJBQWlCLENBQUMsV0FBVyxDQUNoQyxLQUFLLENBQUMsUUFBUSxFQUNkLEtBQUssQ0FBQyxNQUFNLENBQ2IsQ0FBQztJQUNKLENBQUM7O2dCQXBENkIsaUJBQWlCO2dCQUNiLHNCQUFzQjtnQkFDNUIsaUJBQWlCO2dCQUNoQixrQkFBa0I7Z0JBQzNCLFFBQVE7O0lBYjVCO1FBREMsU0FBUyxDQUFDLGVBQWUsRUFBRSxFQUFDLE1BQU0sRUFBRSxLQUFLLEVBQUMsQ0FBQzs2REFDOUI7SUFFZDtRQURDLE1BQU0sRUFBRTt3RUFDMEU7SUFFbkY7UUFEQyxLQUFLLEVBQUU7dURBQ2U7SUFOWixrQkFBa0I7UUFaOUIsU0FBUyxDQUFDO1lBQ1QsUUFBUSxFQUFFLGFBQWE7WUFDdkIsd2lCQUEyQztZQUUzQyxTQUFTLEVBQUU7Z0JBQ1Qsc0JBQXNCO2dCQUN0QixpQkFBaUI7Z0JBQ2pCLGtCQUFrQjtnQkFDbEIsUUFBUTthQUNUO1lBQ0QsZUFBZSxFQUFFLHVCQUF1QixDQUFDLE1BQU07O1NBQ2hELENBQUM7T0FDVyxrQkFBa0IsQ0FnRTlCO0lBQUQseUJBQUM7Q0FBQSxBQWhFRCxJQWdFQztTQWhFWSxrQkFBa0IiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1xyXG4gIENvbXBvbmVudCxcclxuICBPbkluaXQsXHJcbiAgVmlld0NoaWxkLFxyXG4gIE91dHB1dCxcclxuICBFdmVudEVtaXR0ZXIsXHJcbiAgSW5wdXQsXHJcbiAgT25EZXN0cm95LFxyXG4gIENoYW5nZURldGVjdGlvblN0cmF0ZWd5LFxyXG4gIENoYW5nZURldGVjdG9yUmVmXHJcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IERhdGVQaXBlIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcclxuaW1wb3J0IHsgT3ZlcmxheVJlZiB9IGZyb20gJ0Bhbmd1bGFyL2Nkay9vdmVybGF5JztcclxuaW1wb3J0IHsgQ2FsZW5kYXJPdmVybGF5U2VydmljZSB9IGZyb20gJy4uL3NlcnZpY2VzL2NhbGVuZGFyLW92ZXJsYXkuc2VydmljZSc7XHJcbmltcG9ydCB7IFJhbmdlU3RvcmVTZXJ2aWNlIH0gZnJvbSAnLi4vc2VydmljZXMvcmFuZ2Utc3RvcmUuc2VydmljZSc7XHJcbmltcG9ydCB7IFJhbmdlLCBOZ3hEcnBPcHRpb25zIH0gZnJvbSAnLi4vbW9kZWwvbW9kZWwnO1xyXG5pbXBvcnQgeyBDb25maWdTdG9yZVNlcnZpY2UgfSBmcm9tICcuLi9zZXJ2aWNlcy9jb25maWctc3RvcmUuc2VydmljZSc7XHJcbmltcG9ydCB7IFN1YnNjcmlwdGlvbiB9IGZyb20gJ3J4anMnO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgc2VsZWN0b3I6ICduZ3gtbWF0LWRycCcsXHJcbiAgdGVtcGxhdGVVcmw6ICcuL25neC1tYXQtZHJwLmNvbXBvbmVudC5odG1sJyxcclxuICBzdHlsZVVybHM6IFsnLi9uZ3gtbWF0LWRycC5jb21wb25lbnQuY3NzJ10sXHJcbiAgcHJvdmlkZXJzOiBbXHJcbiAgICBDYWxlbmRhck92ZXJsYXlTZXJ2aWNlLFxyXG4gICAgUmFuZ2VTdG9yZVNlcnZpY2UsXHJcbiAgICBDb25maWdTdG9yZVNlcnZpY2UsXHJcbiAgICBEYXRlUGlwZVxyXG4gIF0sXHJcbiAgY2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2hcclxufSlcclxuZXhwb3J0IGNsYXNzIE5neE1hdERycENvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCwgT25EZXN0cm95IHtcclxuICBAVmlld0NoaWxkKCdjYWxlbmRhcklucHV0Jywge3N0YXRpYzogZmFsc2V9KVxyXG4gIGNhbGVuZGFySW5wdXQ7XHJcbiAgQE91dHB1dCgpXHJcbiAgcmVhZG9ubHkgc2VsZWN0ZWREYXRlUmFuZ2VDaGFuZ2VkOiBFdmVudEVtaXR0ZXI8UmFuZ2U+ID0gbmV3IEV2ZW50RW1pdHRlcjxSYW5nZT4oKTtcclxuICBASW5wdXQoKVxyXG4gIG9wdGlvbnM6IE5neERycE9wdGlvbnM7XHJcbiAgcHJpdmF0ZSByYW5nZVVwZGF0ZSQ6IFN1YnNjcmlwdGlvbjtcclxuICBzZWxlY3RlZERhdGVSYW5nZSA9ICcnO1xyXG5cclxuICBjb25zdHJ1Y3RvcihcclxuICAgIHByaXZhdGUgY2hhbmdlRGV0ZWN0aW9uUmVmOiBDaGFuZ2VEZXRlY3RvclJlZixcclxuICAgIHByaXZhdGUgY2FsZW5kYXJPdmVybGF5U2VydmljZTogQ2FsZW5kYXJPdmVybGF5U2VydmljZSxcclxuICAgIHB1YmxpYyByYW5nZVN0b3JlU2VydmljZTogUmFuZ2VTdG9yZVNlcnZpY2UsXHJcbiAgICBwdWJsaWMgY29uZmlnU3RvcmVTZXJ2aWNlOiBDb25maWdTdG9yZVNlcnZpY2UsXHJcbiAgICBwcml2YXRlIGRhdGVQaXBlOiBEYXRlUGlwZVxyXG4gICkge31cclxuXHJcbiAgbmdPbkluaXQoKSB7XHJcbiAgICB0aGlzLmNvbmZpZ1N0b3JlU2VydmljZS5uZ3hEcnBPcHRpb25zID0gdGhpcy5vcHRpb25zO1xyXG4gICAgdGhpcy5vcHRpb25zLnBsYWNlaG9sZGVyID0gdGhpcy5vcHRpb25zLnBsYWNlaG9sZGVyIHx8ICdDaG9vc2UgYSBkYXRlJztcclxuICAgIHRoaXMucmFuZ2VVcGRhdGUkID0gdGhpcy5yYW5nZVN0b3JlU2VydmljZS5yYW5nZVVwZGF0ZSQuc3Vic2NyaWJlKHJhbmdlID0+IHtcclxuICAgICAgY29uc3QgZnJvbTogc3RyaW5nID0gdGhpcy5mb3JtYXRUb0RhdGVTdHJpbmcoXHJcbiAgICAgICAgcmFuZ2UuZnJvbURhdGUsXHJcbiAgICAgICAgdGhpcy5vcHRpb25zLmZvcm1hdFxyXG4gICAgICApO1xyXG4gICAgICBjb25zdCB0bzogc3RyaW5nID0gdGhpcy5mb3JtYXRUb0RhdGVTdHJpbmcoXHJcbiAgICAgICAgcmFuZ2UudG9EYXRlLFxyXG4gICAgICAgIHRoaXMub3B0aW9ucy5mb3JtYXRcclxuICAgICAgKTtcclxuICAgICAgdGhpcy5zZWxlY3RlZERhdGVSYW5nZSA9IGAke2Zyb219IC0gJHt0b31gO1xyXG4gICAgICB0aGlzLnNlbGVjdGVkRGF0ZVJhbmdlQ2hhbmdlZC5lbWl0KHJhbmdlKTtcclxuICAgIH0pO1xyXG5cclxuICAgIHRoaXMucmFuZ2VTdG9yZVNlcnZpY2UudXBkYXRlUmFuZ2UoXHJcbiAgICAgIHRoaXMub3B0aW9ucy5yYW5nZS5mcm9tRGF0ZSxcclxuICAgICAgdGhpcy5vcHRpb25zLnJhbmdlLnRvRGF0ZVxyXG4gICAgKTtcclxuICAgIHRoaXMuY2hhbmdlRGV0ZWN0aW9uUmVmLmRldGVjdENoYW5nZXMoKTtcclxuICB9XHJcblxyXG4gIG5nT25EZXN0cm95KCkge1xyXG4gICAgaWYgKHRoaXMucmFuZ2VVcGRhdGUkKSB7XHJcbiAgICAgIHRoaXMucmFuZ2VVcGRhdGUkLnVuc3Vic2NyaWJlKCk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIGZvcm1hdFRvRGF0ZVN0cmluZyhkYXRlOiBEYXRlLCBmb3JtYXQ6IHN0cmluZyk6IHN0cmluZyB7XHJcbiAgICByZXR1cm4gdGhpcy5kYXRlUGlwZS50cmFuc2Zvcm0oZGF0ZSwgZm9ybWF0KTtcclxuICB9XHJcblxyXG4gIG9wZW5DYWxlbmRhcihldmVudCkge1xyXG4gICAgY29uc3Qgb3ZlcmxheVJlZjogT3ZlcmxheVJlZiA9IHRoaXMuY2FsZW5kYXJPdmVybGF5U2VydmljZS5vcGVuKFxyXG4gICAgICB0aGlzLm9wdGlvbnMuY2FsZW5kYXJPdmVybGF5Q29uZmlnLFxyXG4gICAgICB0aGlzLmNhbGVuZGFySW5wdXRcclxuICAgICk7XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgcmVzZXREYXRlcyhyYW5nZTogUmFuZ2UpIHtcclxuICAgIHRoaXMucmFuZ2VTdG9yZVNlcnZpY2UudXBkYXRlUmFuZ2UoXHJcbiAgICAgIHJhbmdlLmZyb21EYXRlLFxyXG4gICAgICByYW5nZS50b0RhdGVcclxuICAgICk7XHJcbiAgfVxyXG59XHJcbiJdfQ==