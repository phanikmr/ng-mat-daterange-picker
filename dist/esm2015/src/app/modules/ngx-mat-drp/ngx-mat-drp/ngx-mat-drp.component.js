import { __decorate } from "tslib";
import { Component, OnInit, ViewChild, Output, EventEmitter, Input, OnDestroy, ChangeDetectionStrategy, ChangeDetectorRef } from '@angular/core';
import { DatePipe } from '@angular/common';
import { CalendarOverlayService } from '../services/calendar-overlay.service';
import { RangeStoreService } from '../services/range-store.service';
import { ConfigStoreService } from '../services/config-store.service';
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
export { NgxMatDrpComponent };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmd4LW1hdC1kcnAuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vbmctbWF0LWRhdGVyYW5nZS1waWNrZXIvIiwic291cmNlcyI6WyJzcmMvYXBwL21vZHVsZXMvbmd4LW1hdC1kcnAvbmd4LW1hdC1kcnAvbmd4LW1hdC1kcnAuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxPQUFPLEVBQ0wsU0FBUyxFQUNULE1BQU0sRUFDTixTQUFTLEVBQ1QsTUFBTSxFQUNOLFlBQVksRUFDWixLQUFLLEVBQ0wsU0FBUyxFQUNULHVCQUF1QixFQUN2QixpQkFBaUIsRUFDbEIsTUFBTSxlQUFlLENBQUM7QUFDdkIsT0FBTyxFQUFFLFFBQVEsRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBRTNDLE9BQU8sRUFBRSxzQkFBc0IsRUFBRSxNQUFNLHNDQUFzQyxDQUFDO0FBQzlFLE9BQU8sRUFBRSxpQkFBaUIsRUFBRSxNQUFNLGlDQUFpQyxDQUFDO0FBRXBFLE9BQU8sRUFBRSxrQkFBa0IsRUFBRSxNQUFNLGtDQUFrQyxDQUFDO0FBZXRFLElBQWEsa0JBQWtCLEdBQS9CLE1BQWEsa0JBQWtCO0lBVTdCLFlBQ1Usa0JBQXFDLEVBQ3JDLHNCQUE4QyxFQUMvQyxpQkFBb0MsRUFDcEMsa0JBQXNDLEVBQ3JDLFFBQWtCO1FBSmxCLHVCQUFrQixHQUFsQixrQkFBa0IsQ0FBbUI7UUFDckMsMkJBQXNCLEdBQXRCLHNCQUFzQixDQUF3QjtRQUMvQyxzQkFBaUIsR0FBakIsaUJBQWlCLENBQW1CO1FBQ3BDLHVCQUFrQixHQUFsQixrQkFBa0IsQ0FBb0I7UUFDckMsYUFBUSxHQUFSLFFBQVEsQ0FBVTtRQVhuQiw2QkFBd0IsR0FBd0IsSUFBSSxZQUFZLEVBQVMsQ0FBQztRQUluRixzQkFBaUIsR0FBRyxFQUFFLENBQUM7SUFRcEIsQ0FBQztJQUVKLFFBQVE7UUFDTixJQUFJLENBQUMsa0JBQWtCLENBQUMsYUFBYSxHQUFHLElBQUksQ0FBQyxPQUFPLENBQUM7UUFDckQsSUFBSSxDQUFDLE9BQU8sQ0FBQyxXQUFXLEdBQUcsSUFBSSxDQUFDLE9BQU8sQ0FBQyxXQUFXLElBQUksZUFBZSxDQUFDO1FBQ3ZFLElBQUksQ0FBQyxZQUFZLEdBQUcsSUFBSSxDQUFDLGlCQUFpQixDQUFDLFlBQVksQ0FBQyxTQUFTLENBQUMsS0FBSyxDQUFDLEVBQUU7WUFDeEUsTUFBTSxJQUFJLEdBQVcsSUFBSSxDQUFDLGtCQUFrQixDQUMxQyxLQUFLLENBQUMsUUFBUSxFQUNkLElBQUksQ0FBQyxPQUFPLENBQUMsTUFBTSxDQUNwQixDQUFDO1lBQ0YsTUFBTSxFQUFFLEdBQVcsSUFBSSxDQUFDLGtCQUFrQixDQUN4QyxLQUFLLENBQUMsTUFBTSxFQUNaLElBQUksQ0FBQyxPQUFPLENBQUMsTUFBTSxDQUNwQixDQUFDO1lBQ0YsSUFBSSxDQUFDLGlCQUFpQixHQUFHLEdBQUcsSUFBSSxNQUFNLEVBQUUsRUFBRSxDQUFDO1lBQzNDLElBQUksQ0FBQyx3QkFBd0IsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUM7UUFDNUMsQ0FBQyxDQUFDLENBQUM7UUFFSCxJQUFJLENBQUMsaUJBQWlCLENBQUMsV0FBVyxDQUNoQyxJQUFJLENBQUMsT0FBTyxDQUFDLEtBQUssQ0FBQyxRQUFRLEVBQzNCLElBQUksQ0FBQyxPQUFPLENBQUMsS0FBSyxDQUFDLE1BQU0sQ0FDMUIsQ0FBQztRQUNGLElBQUksQ0FBQyxrQkFBa0IsQ0FBQyxhQUFhLEVBQUUsQ0FBQztJQUMxQyxDQUFDO0lBRUQsV0FBVztRQUNULElBQUksSUFBSSxDQUFDLFlBQVksRUFBRTtZQUNyQixJQUFJLENBQUMsWUFBWSxDQUFDLFdBQVcsRUFBRSxDQUFDO1NBQ2pDO0lBQ0gsQ0FBQztJQUVPLGtCQUFrQixDQUFDLElBQVUsRUFBRSxNQUFjO1FBQ25ELE9BQU8sSUFBSSxDQUFDLFFBQVEsQ0FBQyxTQUFTLENBQUMsSUFBSSxFQUFFLE1BQU0sQ0FBQyxDQUFDO0lBQy9DLENBQUM7SUFFRCxZQUFZLENBQUMsS0FBSztRQUNoQixNQUFNLFVBQVUsR0FBZSxJQUFJLENBQUMsc0JBQXNCLENBQUMsSUFBSSxDQUM3RCxJQUFJLENBQUMsT0FBTyxDQUFDLHFCQUFxQixFQUNsQyxJQUFJLENBQUMsYUFBYSxDQUNuQixDQUFDO0lBQ0osQ0FBQztJQUVNLFVBQVUsQ0FBQyxLQUFZO1FBQzVCLElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxXQUFXLENBQ2hDLEtBQUssQ0FBQyxRQUFRLEVBQ2QsS0FBSyxDQUFDLE1BQU0sQ0FDYixDQUFDO0lBQ0osQ0FBQztDQUNGLENBQUE7O1lBckQrQixpQkFBaUI7WUFDYixzQkFBc0I7WUFDNUIsaUJBQWlCO1lBQ2hCLGtCQUFrQjtZQUMzQixRQUFROztBQWI1QjtJQURDLFNBQVMsQ0FBQyxlQUFlLEVBQUUsRUFBQyxNQUFNLEVBQUUsS0FBSyxFQUFDLENBQUM7eURBQzlCO0FBRWQ7SUFEQyxNQUFNLEVBQUU7b0VBQzBFO0FBRW5GO0lBREMsS0FBSyxFQUFFO21EQUNlO0FBTlosa0JBQWtCO0lBWjlCLFNBQVMsQ0FBQztRQUNULFFBQVEsRUFBRSxhQUFhO1FBQ3ZCLHdpQkFBMkM7UUFFM0MsU0FBUyxFQUFFO1lBQ1Qsc0JBQXNCO1lBQ3RCLGlCQUFpQjtZQUNqQixrQkFBa0I7WUFDbEIsUUFBUTtTQUNUO1FBQ0QsZUFBZSxFQUFFLHVCQUF1QixDQUFDLE1BQU07O0tBQ2hELENBQUM7R0FDVyxrQkFBa0IsQ0FnRTlCO1NBaEVZLGtCQUFrQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7XHJcbiAgQ29tcG9uZW50LFxyXG4gIE9uSW5pdCxcclxuICBWaWV3Q2hpbGQsXHJcbiAgT3V0cHV0LFxyXG4gIEV2ZW50RW1pdHRlcixcclxuICBJbnB1dCxcclxuICBPbkRlc3Ryb3ksXHJcbiAgQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3ksXHJcbiAgQ2hhbmdlRGV0ZWN0b3JSZWZcclxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgRGF0ZVBpcGUgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xyXG5pbXBvcnQgeyBPdmVybGF5UmVmIH0gZnJvbSAnQGFuZ3VsYXIvY2RrL292ZXJsYXknO1xyXG5pbXBvcnQgeyBDYWxlbmRhck92ZXJsYXlTZXJ2aWNlIH0gZnJvbSAnLi4vc2VydmljZXMvY2FsZW5kYXItb3ZlcmxheS5zZXJ2aWNlJztcclxuaW1wb3J0IHsgUmFuZ2VTdG9yZVNlcnZpY2UgfSBmcm9tICcuLi9zZXJ2aWNlcy9yYW5nZS1zdG9yZS5zZXJ2aWNlJztcclxuaW1wb3J0IHsgUmFuZ2UsIE5neERycE9wdGlvbnMgfSBmcm9tICcuLi9tb2RlbC9tb2RlbCc7XHJcbmltcG9ydCB7IENvbmZpZ1N0b3JlU2VydmljZSB9IGZyb20gJy4uL3NlcnZpY2VzL2NvbmZpZy1zdG9yZS5zZXJ2aWNlJztcclxuaW1wb3J0IHsgU3Vic2NyaXB0aW9uIH0gZnJvbSAncnhqcyc7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICBzZWxlY3RvcjogJ25neC1tYXQtZHJwJyxcclxuICB0ZW1wbGF0ZVVybDogJy4vbmd4LW1hdC1kcnAuY29tcG9uZW50Lmh0bWwnLFxyXG4gIHN0eWxlVXJsczogWycuL25neC1tYXQtZHJwLmNvbXBvbmVudC5jc3MnXSxcclxuICBwcm92aWRlcnM6IFtcclxuICAgIENhbGVuZGFyT3ZlcmxheVNlcnZpY2UsXHJcbiAgICBSYW5nZVN0b3JlU2VydmljZSxcclxuICAgIENvbmZpZ1N0b3JlU2VydmljZSxcclxuICAgIERhdGVQaXBlXHJcbiAgXSxcclxuICBjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaFxyXG59KVxyXG5leHBvcnQgY2xhc3MgTmd4TWF0RHJwQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0LCBPbkRlc3Ryb3kge1xyXG4gIEBWaWV3Q2hpbGQoJ2NhbGVuZGFySW5wdXQnLCB7c3RhdGljOiBmYWxzZX0pXHJcbiAgY2FsZW5kYXJJbnB1dDtcclxuICBAT3V0cHV0KClcclxuICByZWFkb25seSBzZWxlY3RlZERhdGVSYW5nZUNoYW5nZWQ6IEV2ZW50RW1pdHRlcjxSYW5nZT4gPSBuZXcgRXZlbnRFbWl0dGVyPFJhbmdlPigpO1xyXG4gIEBJbnB1dCgpXHJcbiAgb3B0aW9uczogTmd4RHJwT3B0aW9ucztcclxuICBwcml2YXRlIHJhbmdlVXBkYXRlJDogU3Vic2NyaXB0aW9uO1xyXG4gIHNlbGVjdGVkRGF0ZVJhbmdlID0gJyc7XHJcblxyXG4gIGNvbnN0cnVjdG9yKFxyXG4gICAgcHJpdmF0ZSBjaGFuZ2VEZXRlY3Rpb25SZWY6IENoYW5nZURldGVjdG9yUmVmLFxyXG4gICAgcHJpdmF0ZSBjYWxlbmRhck92ZXJsYXlTZXJ2aWNlOiBDYWxlbmRhck92ZXJsYXlTZXJ2aWNlLFxyXG4gICAgcHVibGljIHJhbmdlU3RvcmVTZXJ2aWNlOiBSYW5nZVN0b3JlU2VydmljZSxcclxuICAgIHB1YmxpYyBjb25maWdTdG9yZVNlcnZpY2U6IENvbmZpZ1N0b3JlU2VydmljZSxcclxuICAgIHByaXZhdGUgZGF0ZVBpcGU6IERhdGVQaXBlXHJcbiAgKSB7fVxyXG5cclxuICBuZ09uSW5pdCgpIHtcclxuICAgIHRoaXMuY29uZmlnU3RvcmVTZXJ2aWNlLm5neERycE9wdGlvbnMgPSB0aGlzLm9wdGlvbnM7XHJcbiAgICB0aGlzLm9wdGlvbnMucGxhY2Vob2xkZXIgPSB0aGlzLm9wdGlvbnMucGxhY2Vob2xkZXIgfHwgJ0Nob29zZSBhIGRhdGUnO1xyXG4gICAgdGhpcy5yYW5nZVVwZGF0ZSQgPSB0aGlzLnJhbmdlU3RvcmVTZXJ2aWNlLnJhbmdlVXBkYXRlJC5zdWJzY3JpYmUocmFuZ2UgPT4ge1xyXG4gICAgICBjb25zdCBmcm9tOiBzdHJpbmcgPSB0aGlzLmZvcm1hdFRvRGF0ZVN0cmluZyhcclxuICAgICAgICByYW5nZS5mcm9tRGF0ZSxcclxuICAgICAgICB0aGlzLm9wdGlvbnMuZm9ybWF0XHJcbiAgICAgICk7XHJcbiAgICAgIGNvbnN0IHRvOiBzdHJpbmcgPSB0aGlzLmZvcm1hdFRvRGF0ZVN0cmluZyhcclxuICAgICAgICByYW5nZS50b0RhdGUsXHJcbiAgICAgICAgdGhpcy5vcHRpb25zLmZvcm1hdFxyXG4gICAgICApO1xyXG4gICAgICB0aGlzLnNlbGVjdGVkRGF0ZVJhbmdlID0gYCR7ZnJvbX0gLSAke3RvfWA7XHJcbiAgICAgIHRoaXMuc2VsZWN0ZWREYXRlUmFuZ2VDaGFuZ2VkLmVtaXQocmFuZ2UpO1xyXG4gICAgfSk7XHJcblxyXG4gICAgdGhpcy5yYW5nZVN0b3JlU2VydmljZS51cGRhdGVSYW5nZShcclxuICAgICAgdGhpcy5vcHRpb25zLnJhbmdlLmZyb21EYXRlLFxyXG4gICAgICB0aGlzLm9wdGlvbnMucmFuZ2UudG9EYXRlXHJcbiAgICApO1xyXG4gICAgdGhpcy5jaGFuZ2VEZXRlY3Rpb25SZWYuZGV0ZWN0Q2hhbmdlcygpO1xyXG4gIH1cclxuXHJcbiAgbmdPbkRlc3Ryb3koKSB7XHJcbiAgICBpZiAodGhpcy5yYW5nZVVwZGF0ZSQpIHtcclxuICAgICAgdGhpcy5yYW5nZVVwZGF0ZSQudW5zdWJzY3JpYmUoKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIHByaXZhdGUgZm9ybWF0VG9EYXRlU3RyaW5nKGRhdGU6IERhdGUsIGZvcm1hdDogc3RyaW5nKTogc3RyaW5nIHtcclxuICAgIHJldHVybiB0aGlzLmRhdGVQaXBlLnRyYW5zZm9ybShkYXRlLCBmb3JtYXQpO1xyXG4gIH1cclxuXHJcbiAgb3BlbkNhbGVuZGFyKGV2ZW50KSB7XHJcbiAgICBjb25zdCBvdmVybGF5UmVmOiBPdmVybGF5UmVmID0gdGhpcy5jYWxlbmRhck92ZXJsYXlTZXJ2aWNlLm9wZW4oXHJcbiAgICAgIHRoaXMub3B0aW9ucy5jYWxlbmRhck92ZXJsYXlDb25maWcsXHJcbiAgICAgIHRoaXMuY2FsZW5kYXJJbnB1dFxyXG4gICAgKTtcclxuICB9XHJcblxyXG4gIHB1YmxpYyByZXNldERhdGVzKHJhbmdlOiBSYW5nZSkge1xyXG4gICAgdGhpcy5yYW5nZVN0b3JlU2VydmljZS51cGRhdGVSYW5nZShcclxuICAgICAgcmFuZ2UuZnJvbURhdGUsXHJcbiAgICAgIHJhbmdlLnRvRGF0ZVxyXG4gICAgKTtcclxuICB9XHJcbn1cclxuIl19