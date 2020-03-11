import { __decorate } from "tslib";
import { Component, ViewChild, Output, Input, EventEmitter, ChangeDetectionStrategy } from '@angular/core';
import { MatCalendar } from '@angular/material/datepicker';
import { ConfigStoreService } from '../services/config-store.service';
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
export { CalendarWrapperComponent };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2FsZW5kYXItd3JhcHBlci5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9uZy1tYXQtZGF0ZXJhbmdlLXBpY2tlci8iLCJzb3VyY2VzIjpbInNyYy9hcHAvbW9kdWxlcy9uZ3gtbWF0LWRycC9jYWxlbmRhci13cmFwcGVyL2NhbGVuZGFyLXdyYXBwZXIuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxPQUFPLEVBQ0wsU0FBUyxFQUNULFNBQVMsRUFDVCxNQUFNLEVBQ04sS0FBSyxFQUNMLFlBQVksRUFDWix1QkFBdUIsRUFHeEIsTUFBTSxlQUFlLENBQUM7QUFDdkIsT0FBTyxFQUFFLFdBQVcsRUFBRSxNQUFNLDhCQUE4QixDQUFDO0FBQzNELE9BQU8sRUFBRSxrQkFBa0IsRUFBRSxNQUFNLGtDQUFrQyxDQUFDO0FBUXRFLElBQWEsd0JBQXdCLEdBQXJDLE1BQWEsd0JBQXdCO0lBY25DLFlBQW9CLFdBQStCO1FBQS9CLGdCQUFXLEdBQVgsV0FBVyxDQUFvQjtRQVQxQyx1QkFBa0IsR0FBdUIsSUFBSSxZQUFZLEVBQVEsQ0FBQztRQU8zRSxrQkFBYSxHQUFHLENBQUMsQ0FBTyxFQUFFLEVBQUUsQ0FBQyxJQUFJLENBQUM7UUFHaEMsSUFBSSxDQUFDLFVBQVUsR0FBRyxXQUFXLENBQUMsYUFBYSxDQUFDLE1BQU0sQ0FBQztRQUNuRCxJQUFJLFdBQVcsQ0FBQyxhQUFhLENBQUMsZUFBZSxFQUFFO1lBQzdDLElBQUksQ0FBQyxhQUFhLEdBQUcsQ0FBQyxDQUFPLEVBQVcsRUFBRTtnQkFDeEMsTUFBTSxHQUFHLEdBQUcsQ0FBQyxDQUFDLE1BQU0sRUFBRSxDQUFDO2dCQUN2QixPQUFPLEdBQUcsS0FBSyxDQUFDLElBQUksR0FBRyxLQUFLLENBQUMsQ0FBQztZQUNoQyxDQUFDLENBQUM7U0FDSDtJQUNILENBQUM7SUFFRCxXQUFXLENBQUMsT0FBc0I7UUFDaEMsa0NBQWtDO1FBQ2xDLElBQUksQ0FBQyxXQUFXLENBQUMsVUFBVSxHQUFHLE9BQU8sQ0FBQyxZQUFZLENBQUMsWUFBWSxDQUFDO0lBQ2xFLENBQUM7SUFFRCxnQkFBZ0IsQ0FBQyxJQUFJO1FBQ25CLElBQUksQ0FBQyxrQkFBa0IsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7SUFDckMsQ0FBQztJQUVELGNBQWMsQ0FBQyxDQUFDLElBQUcsQ0FBQztJQUVwQixlQUFlLENBQUMsQ0FBQyxJQUFHLENBQUM7Q0FDdEIsQ0FBQTs7WUF0QmtDLGtCQUFrQjs7QUFabkQ7SUFEQyxTQUFTLENBQUMsV0FBVyxFQUFFLEVBQUMsTUFBTSxFQUFFLEtBQUssRUFBQyxDQUFDOzZEQUNUO0FBRy9CO0lBREMsTUFBTSxFQUFFO29FQUNrRTtBQUdsRTtJQUFSLEtBQUssRUFBRTs4REFBb0I7QUFDbkI7SUFBUixLQUFLLEVBQUU7NkRBQXFCO0FBQ3BCO0lBQVIsS0FBSyxFQUFFO3lEQUFlO0FBQ2Q7SUFBUixLQUFLLEVBQUU7eURBQWU7QUFYWix3QkFBd0I7SUFOcEMsU0FBUyxDQUFDO1FBQ1QsUUFBUSxFQUFFLGtCQUFrQjtRQUM1Qix1cUJBQWdEO1FBRWhELGVBQWUsRUFBRSx1QkFBdUIsQ0FBQyxNQUFNOztLQUNoRCxDQUFDO0dBQ1csd0JBQXdCLENBb0NwQztTQXBDWSx3QkFBd0IiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1xyXG4gIENvbXBvbmVudCxcclxuICBWaWV3Q2hpbGQsXHJcbiAgT3V0cHV0LFxyXG4gIElucHV0LFxyXG4gIEV2ZW50RW1pdHRlcixcclxuICBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSxcclxuICBPbkNoYW5nZXMsXHJcbiAgU2ltcGxlQ2hhbmdlc1xyXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBNYXRDYWxlbmRhciB9IGZyb20gJ0Bhbmd1bGFyL21hdGVyaWFsL2RhdGVwaWNrZXInO1xyXG5pbXBvcnQgeyBDb25maWdTdG9yZVNlcnZpY2UgfSBmcm9tICcuLi9zZXJ2aWNlcy9jb25maWctc3RvcmUuc2VydmljZSc7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICBzZWxlY3RvcjogJ2NhbGVuZGFyLXdyYXBwZXInLFxyXG4gIHRlbXBsYXRlVXJsOiAnLi9jYWxlbmRhci13cmFwcGVyLmNvbXBvbmVudC5odG1sJyxcclxuICBzdHlsZVVybHM6IFsnLi9jYWxlbmRhci13cmFwcGVyLmNvbXBvbmVudC5jc3MnXSxcclxuICBjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaFxyXG59KVxyXG5leHBvcnQgY2xhc3MgQ2FsZW5kYXJXcmFwcGVyQ29tcG9uZW50IGltcGxlbWVudHMgT25DaGFuZ2VzIHtcclxuICBAVmlld0NoaWxkKE1hdENhbGVuZGFyLCB7c3RhdGljOiBmYWxzZX0pXHJcbiAgbWF0Q2FsZW5kYXI6IE1hdENhbGVuZGFyPERhdGU+O1xyXG5cclxuICBAT3V0cHV0KClcclxuICByZWFkb25seSBzZWxlY3RlZERhdGVDaGFuZ2U6IEV2ZW50RW1pdHRlcjxEYXRlPiA9IG5ldyBFdmVudEVtaXR0ZXI8RGF0ZT4oKTtcclxuXHJcbiAgZGF0ZUZvcm1hdDogc3RyaW5nO1xyXG4gIEBJbnB1dCgpIHNlbGVjdGVkRGF0ZTogRGF0ZTtcclxuICBASW5wdXQoKSBwcmVmaXhMYWJlbDogc3RyaW5nO1xyXG4gIEBJbnB1dCgpIG1pbkRhdGU6IERhdGU7XHJcbiAgQElucHV0KCkgbWF4RGF0ZTogRGF0ZTtcclxuICB3ZWVrZW5kRmlsdGVyID0gKGQ6IERhdGUpID0+IHRydWU7XHJcblxyXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgY29uZmlnU3RvcmU6IENvbmZpZ1N0b3JlU2VydmljZSkge1xyXG4gICAgdGhpcy5kYXRlRm9ybWF0ID0gY29uZmlnU3RvcmUubmd4RHJwT3B0aW9ucy5mb3JtYXQ7XHJcbiAgICBpZiAoY29uZmlnU3RvcmUubmd4RHJwT3B0aW9ucy5leGNsdWRlV2Vla2VuZHMpIHtcclxuICAgICAgdGhpcy53ZWVrZW5kRmlsdGVyID0gKGQ6IERhdGUpOiBib29sZWFuID0+IHtcclxuICAgICAgICBjb25zdCBkYXkgPSBkLmdldERheSgpO1xyXG4gICAgICAgIHJldHVybiBkYXkgIT09IDAgJiYgZGF5ICE9PSA2O1xyXG4gICAgICB9O1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgbmdPbkNoYW5nZXMoY2hhbmdlczogU2ltcGxlQ2hhbmdlcykge1xyXG4gICAgLy8gTmVjZXNzYXJ5IHRvIGZvcmNlIHZpZXcgcmVmcmVzaFxyXG4gICAgdGhpcy5tYXRDYWxlbmRhci5hY3RpdmVEYXRlID0gY2hhbmdlcy5zZWxlY3RlZERhdGUuY3VycmVudFZhbHVlO1xyXG4gIH1cclxuXHJcbiAgb25TZWxlY3RlZENoYW5nZShkYXRlKSB7XHJcbiAgICB0aGlzLnNlbGVjdGVkRGF0ZUNoYW5nZS5lbWl0KGRhdGUpO1xyXG4gIH1cclxuXHJcbiAgb25ZZWFyU2VsZWN0ZWQoZSkge31cclxuXHJcbiAgb25Vc2VyU2VsZWN0aW9uKGUpIHt9XHJcbn1cclxuIl19