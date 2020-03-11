import { __decorate } from "tslib";
import { Component, ViewChild, Output, Input, EventEmitter, ChangeDetectionStrategy } from '@angular/core';
import { MatCalendar } from '@angular/material/datepicker';
import { ConfigStoreService } from '../services/config-store.service';
var CalendarWrapperComponent = /** @class */ (function () {
    function CalendarWrapperComponent(configStore) {
        this.configStore = configStore;
        this.selectedDateChange = new EventEmitter();
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
    return CalendarWrapperComponent;
}());
export { CalendarWrapperComponent };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2FsZW5kYXItd3JhcHBlci5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9uZy1tYXQtZGF0ZXJhbmdlLXBpY2tlci8iLCJzb3VyY2VzIjpbInNyYy9hcHAvbW9kdWxlcy9uZ3gtbWF0LWRycC9jYWxlbmRhci13cmFwcGVyL2NhbGVuZGFyLXdyYXBwZXIuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxPQUFPLEVBQ0wsU0FBUyxFQUNULFNBQVMsRUFDVCxNQUFNLEVBQ04sS0FBSyxFQUNMLFlBQVksRUFDWix1QkFBdUIsRUFHeEIsTUFBTSxlQUFlLENBQUM7QUFDdkIsT0FBTyxFQUFFLFdBQVcsRUFBRSxNQUFNLDhCQUE4QixDQUFDO0FBQzNELE9BQU8sRUFBRSxrQkFBa0IsRUFBRSxNQUFNLGtDQUFrQyxDQUFDO0FBUXRFO0lBY0Usa0NBQW9CLFdBQStCO1FBQS9CLGdCQUFXLEdBQVgsV0FBVyxDQUFvQjtRQVQxQyx1QkFBa0IsR0FBdUIsSUFBSSxZQUFZLEVBQVEsQ0FBQztRQU8zRSxrQkFBYSxHQUFHLFVBQUMsQ0FBTyxJQUFLLE9BQUEsSUFBSSxFQUFKLENBQUksQ0FBQztRQUdoQyxJQUFJLENBQUMsVUFBVSxHQUFHLFdBQVcsQ0FBQyxhQUFhLENBQUMsTUFBTSxDQUFDO1FBQ25ELElBQUksV0FBVyxDQUFDLGFBQWEsQ0FBQyxlQUFlLEVBQUU7WUFDN0MsSUFBSSxDQUFDLGFBQWEsR0FBRyxVQUFDLENBQU87Z0JBQzNCLElBQU0sR0FBRyxHQUFHLENBQUMsQ0FBQyxNQUFNLEVBQUUsQ0FBQztnQkFDdkIsT0FBTyxHQUFHLEtBQUssQ0FBQyxJQUFJLEdBQUcsS0FBSyxDQUFDLENBQUM7WUFDaEMsQ0FBQyxDQUFDO1NBQ0g7SUFDSCxDQUFDO0lBRUQsOENBQVcsR0FBWCxVQUFZLE9BQXNCO1FBQ2hDLGtDQUFrQztRQUNsQyxJQUFJLENBQUMsV0FBVyxDQUFDLFVBQVUsR0FBRyxPQUFPLENBQUMsWUFBWSxDQUFDLFlBQVksQ0FBQztJQUNsRSxDQUFDO0lBRUQsbURBQWdCLEdBQWhCLFVBQWlCLElBQUk7UUFDbkIsSUFBSSxDQUFDLGtCQUFrQixDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUNyQyxDQUFDO0lBRUQsaURBQWMsR0FBZCxVQUFlLENBQUMsSUFBRyxDQUFDO0lBRXBCLGtEQUFlLEdBQWYsVUFBZ0IsQ0FBQyxJQUFHLENBQUM7O2dCQXJCWSxrQkFBa0I7O0lBWm5EO1FBREMsU0FBUyxDQUFDLFdBQVcsRUFBRSxFQUFDLE1BQU0sRUFBRSxLQUFLLEVBQUMsQ0FBQztpRUFDVDtJQUcvQjtRQURDLE1BQU0sRUFBRTt3RUFDa0U7SUFHbEU7UUFBUixLQUFLLEVBQUU7a0VBQW9CO0lBQ25CO1FBQVIsS0FBSyxFQUFFO2lFQUFxQjtJQUNwQjtRQUFSLEtBQUssRUFBRTs2REFBZTtJQUNkO1FBQVIsS0FBSyxFQUFFOzZEQUFlO0lBWFosd0JBQXdCO1FBTnBDLFNBQVMsQ0FBQztZQUNULFFBQVEsRUFBRSxrQkFBa0I7WUFDNUIsdXFCQUFnRDtZQUVoRCxlQUFlLEVBQUUsdUJBQXVCLENBQUMsTUFBTTs7U0FDaEQsQ0FBQztPQUNXLHdCQUF3QixDQW9DcEM7SUFBRCwrQkFBQztDQUFBLEFBcENELElBb0NDO1NBcENZLHdCQUF3QiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7XHJcbiAgQ29tcG9uZW50LFxyXG4gIFZpZXdDaGlsZCxcclxuICBPdXRwdXQsXHJcbiAgSW5wdXQsXHJcbiAgRXZlbnRFbWl0dGVyLFxyXG4gIENoYW5nZURldGVjdGlvblN0cmF0ZWd5LFxyXG4gIE9uQ2hhbmdlcyxcclxuICBTaW1wbGVDaGFuZ2VzXHJcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IE1hdENhbGVuZGFyIH0gZnJvbSAnQGFuZ3VsYXIvbWF0ZXJpYWwvZGF0ZXBpY2tlcic7XHJcbmltcG9ydCB7IENvbmZpZ1N0b3JlU2VydmljZSB9IGZyb20gJy4uL3NlcnZpY2VzL2NvbmZpZy1zdG9yZS5zZXJ2aWNlJztcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gIHNlbGVjdG9yOiAnY2FsZW5kYXItd3JhcHBlcicsXHJcbiAgdGVtcGxhdGVVcmw6ICcuL2NhbGVuZGFyLXdyYXBwZXIuY29tcG9uZW50Lmh0bWwnLFxyXG4gIHN0eWxlVXJsczogWycuL2NhbGVuZGFyLXdyYXBwZXIuY29tcG9uZW50LmNzcyddLFxyXG4gIGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBDYWxlbmRhcldyYXBwZXJDb21wb25lbnQgaW1wbGVtZW50cyBPbkNoYW5nZXMge1xyXG4gIEBWaWV3Q2hpbGQoTWF0Q2FsZW5kYXIsIHtzdGF0aWM6IGZhbHNlfSlcclxuICBtYXRDYWxlbmRhcjogTWF0Q2FsZW5kYXI8RGF0ZT47XHJcblxyXG4gIEBPdXRwdXQoKVxyXG4gIHJlYWRvbmx5IHNlbGVjdGVkRGF0ZUNoYW5nZTogRXZlbnRFbWl0dGVyPERhdGU+ID0gbmV3IEV2ZW50RW1pdHRlcjxEYXRlPigpO1xyXG5cclxuICBkYXRlRm9ybWF0OiBzdHJpbmc7XHJcbiAgQElucHV0KCkgc2VsZWN0ZWREYXRlOiBEYXRlO1xyXG4gIEBJbnB1dCgpIHByZWZpeExhYmVsOiBzdHJpbmc7XHJcbiAgQElucHV0KCkgbWluRGF0ZTogRGF0ZTtcclxuICBASW5wdXQoKSBtYXhEYXRlOiBEYXRlO1xyXG4gIHdlZWtlbmRGaWx0ZXIgPSAoZDogRGF0ZSkgPT4gdHJ1ZTtcclxuXHJcbiAgY29uc3RydWN0b3IocHJpdmF0ZSBjb25maWdTdG9yZTogQ29uZmlnU3RvcmVTZXJ2aWNlKSB7XHJcbiAgICB0aGlzLmRhdGVGb3JtYXQgPSBjb25maWdTdG9yZS5uZ3hEcnBPcHRpb25zLmZvcm1hdDtcclxuICAgIGlmIChjb25maWdTdG9yZS5uZ3hEcnBPcHRpb25zLmV4Y2x1ZGVXZWVrZW5kcykge1xyXG4gICAgICB0aGlzLndlZWtlbmRGaWx0ZXIgPSAoZDogRGF0ZSk6IGJvb2xlYW4gPT4ge1xyXG4gICAgICAgIGNvbnN0IGRheSA9IGQuZ2V0RGF5KCk7XHJcbiAgICAgICAgcmV0dXJuIGRheSAhPT0gMCAmJiBkYXkgIT09IDY7XHJcbiAgICAgIH07XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBuZ09uQ2hhbmdlcyhjaGFuZ2VzOiBTaW1wbGVDaGFuZ2VzKSB7XHJcbiAgICAvLyBOZWNlc3NhcnkgdG8gZm9yY2UgdmlldyByZWZyZXNoXHJcbiAgICB0aGlzLm1hdENhbGVuZGFyLmFjdGl2ZURhdGUgPSBjaGFuZ2VzLnNlbGVjdGVkRGF0ZS5jdXJyZW50VmFsdWU7XHJcbiAgfVxyXG5cclxuICBvblNlbGVjdGVkQ2hhbmdlKGRhdGUpIHtcclxuICAgIHRoaXMuc2VsZWN0ZWREYXRlQ2hhbmdlLmVtaXQoZGF0ZSk7XHJcbiAgfVxyXG5cclxuICBvblllYXJTZWxlY3RlZChlKSB7fVxyXG5cclxuICBvblVzZXJTZWxlY3Rpb24oZSkge31cclxufVxyXG4iXX0=