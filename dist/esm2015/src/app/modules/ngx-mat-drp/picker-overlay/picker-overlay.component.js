import { __decorate } from "tslib";
import { Component, ViewEncapsulation } from '@angular/core';
import { RangeStoreService } from '../services/range-store.service';
import { OverlayRef } from '@angular/cdk/overlay';
import { ConfigStoreService } from '../services/config-store.service';
import { pickerOverlayAnimations } from './picker-overlay.animations';
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
export { PickerOverlayComponent };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGlja2VyLW92ZXJsYXkuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vbmctbWF0LWRhdGVyYW5nZS1waWNrZXIvIiwic291cmNlcyI6WyJzcmMvYXBwL21vZHVsZXMvbmd4LW1hdC1kcnAvcGlja2VyLW92ZXJsYXkvcGlja2VyLW92ZXJsYXkuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFVLGlCQUFpQixFQUFFLE1BQU0sZUFBZSxDQUFDO0FBRXJFLE9BQU8sRUFBRSxpQkFBaUIsRUFBRSxNQUFNLGlDQUFpQyxDQUFDO0FBQ3BFLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxzQkFBc0IsQ0FBQztBQUNsRCxPQUFPLEVBQUUsa0JBQWtCLEVBQUUsTUFBTSxrQ0FBa0MsQ0FBQztBQUN0RSxPQUFPLEVBQUUsdUJBQXVCLEVBQUUsTUFBTSw2QkFBNkIsQ0FBQztBQVN0RSxJQUFhLHNCQUFzQixHQUFuQyxNQUFhLHNCQUFzQjtJQWNqQyxZQUNVLGlCQUFvQyxFQUNwQyxrQkFBc0MsRUFDdEMsVUFBc0I7UUFGdEIsc0JBQWlCLEdBQWpCLGlCQUFpQixDQUFtQjtRQUNwQyx1QkFBa0IsR0FBbEIsa0JBQWtCLENBQW9CO1FBQ3RDLGVBQVUsR0FBVixVQUFVLENBQVk7UUFWaEMsWUFBTyxHQUFzQixFQUFFLENBQUM7SUFXN0IsQ0FBQztJQUVKLFFBQVE7UUFDTixJQUFJLENBQUMsUUFBUSxHQUFHLElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxRQUFRLENBQUM7UUFDaEQsSUFBSSxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUMsaUJBQWlCLENBQUMsTUFBTSxDQUFDO1FBQzVDLElBQUksQ0FBQyxlQUFlLEdBQUcsSUFBSSxDQUFDLGtCQUFrQixDQUFDLGFBQWEsQ0FBQyxlQUFlLElBQUksT0FBTyxDQUFDO1FBQ3hGLElBQUksQ0FBQyxhQUFhLEdBQUcsSUFBSSxDQUFDLGtCQUFrQixDQUFDLGFBQWEsQ0FBQyxhQUFhLElBQUksS0FBSyxDQUFDO1FBQ2xGLElBQUksQ0FBQyxVQUFVLEdBQUcsSUFBSSxDQUFDLGtCQUFrQixDQUFDLGFBQWEsQ0FBQyxVQUFVLElBQUksT0FBTyxDQUFDO1FBQzlFLElBQUksQ0FBQyxXQUFXLEdBQUcsSUFBSSxDQUFDLGtCQUFrQixDQUFDLGFBQWEsQ0FBQyxXQUFXLElBQUksUUFBUSxDQUFDO1FBQ2pGLElBQUksQ0FBQyxPQUFPLEdBQUcsSUFBSSxDQUFDLGtCQUFrQixDQUFDLGFBQWEsQ0FBQyxPQUFPLENBQUM7UUFDN0QsSUFBSSxDQUFDLGFBQWEsR0FBRyxJQUFJLENBQUMsa0JBQWtCLENBQUMsYUFBYSxDQUFDLFNBQVM7WUFDbEUsQ0FBQyxDQUFDLE9BQU87WUFDVCxDQUFDLENBQUMsTUFBTSxDQUFDO1FBQ1gsQ0FBQztZQUNDLFFBQVEsRUFBRSxJQUFJLENBQUMsV0FBVztZQUMxQixNQUFNLEVBQUUsSUFBSSxDQUFDLFdBQVc7U0FDekIsR0FBRyxJQUFJLENBQUMsa0JBQWtCLENBQUMsYUFBYSxDQUFDLFVBQVUsQ0FBQyxDQUFDO1FBQ3RELENBQUM7WUFDQyxRQUFRLEVBQUUsSUFBSSxDQUFDLFNBQVM7WUFDeEIsTUFBTSxFQUFFLElBQUksQ0FBQyxTQUFTO1NBQ3ZCLEdBQUcsSUFBSSxDQUFDLGtCQUFrQixDQUFDLGFBQWEsQ0FBQyxRQUFRLENBQUMsQ0FBQztJQUN0RCxDQUFDO0lBRUQsY0FBYyxDQUFDLElBQUk7UUFDakIsSUFBSSxDQUFDLFFBQVEsR0FBRyxJQUFJLENBQUM7SUFDdkIsQ0FBQztJQUVELFlBQVksQ0FBQyxJQUFJO1FBQ2YsSUFBSSxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUM7SUFDckIsQ0FBQztJQUVELG1CQUFtQixDQUFDLFVBQXNCO1FBQ3hDLElBQUksQ0FBQyxjQUFjLENBQUMsVUFBVSxDQUFDLEtBQUssQ0FBQyxRQUFRLENBQUMsQ0FBQztRQUMvQyxJQUFJLENBQUMsWUFBWSxDQUFDLFVBQVUsQ0FBQyxLQUFLLENBQUMsTUFBTSxDQUFDLENBQUM7SUFDN0MsQ0FBQztJQUVELGFBQWEsQ0FBQyxDQUFDO1FBQ2IsSUFBSSxDQUFDLGlCQUFpQixDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsUUFBUSxFQUFFLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQztRQUMvRCxJQUFJLENBQUMsY0FBYyxFQUFFLENBQUM7SUFDeEIsQ0FBQztJQUVELGVBQWUsQ0FBQyxDQUFDO1FBQ2Ysd0NBQXdDO1FBQ3hDLElBQUksQ0FBQyxjQUFjLEVBQUUsQ0FBQztJQUN4QixDQUFDO0lBRU8sY0FBYztRQUNwQixJQUFJLENBQUMsVUFBVSxDQUFDLE9BQU8sRUFBRSxDQUFDO0lBQzVCLENBQUM7Q0FDRixDQUFBOztZQXBEOEIsaUJBQWlCO1lBQ2hCLGtCQUFrQjtZQUMxQixVQUFVOztBQWpCckIsc0JBQXNCO0lBUGxDLFNBQVMsQ0FBQztRQUNULFFBQVEsRUFBRSw0QkFBNEI7UUFDdEMsOHJDQUE4QztRQUU5QyxVQUFVLEVBQUUsQ0FBQyx1QkFBdUIsQ0FBQyxjQUFjLENBQUM7UUFDcEQsYUFBYSxFQUFFLGlCQUFpQixDQUFDLElBQUk7O0tBQ3RDLENBQUM7R0FDVyxzQkFBc0IsQ0FtRWxDO1NBbkVZLHNCQUFzQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0LCBWaWV3RW5jYXBzdWxhdGlvbiB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBQcmVzZXRJdGVtLCBOZ3hEcnBPcHRpb25zIH0gZnJvbSAnLi4vbW9kZWwvbW9kZWwnO1xyXG5pbXBvcnQgeyBSYW5nZVN0b3JlU2VydmljZSB9IGZyb20gJy4uL3NlcnZpY2VzL3JhbmdlLXN0b3JlLnNlcnZpY2UnO1xyXG5pbXBvcnQgeyBPdmVybGF5UmVmIH0gZnJvbSAnQGFuZ3VsYXIvY2RrL292ZXJsYXknO1xyXG5pbXBvcnQgeyBDb25maWdTdG9yZVNlcnZpY2UgfSBmcm9tICcuLi9zZXJ2aWNlcy9jb25maWctc3RvcmUuc2VydmljZSc7XHJcbmltcG9ydCB7IHBpY2tlck92ZXJsYXlBbmltYXRpb25zIH0gZnJvbSAnLi9waWNrZXItb3ZlcmxheS5hbmltYXRpb25zJztcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gIHNlbGVjdG9yOiAnbmd4LW1hdC1kcnAtcGlja2VyLW92ZXJsYXknLFxyXG4gIHRlbXBsYXRlVXJsOiAnLi9waWNrZXItb3ZlcmxheS5jb21wb25lbnQuaHRtbCcsXHJcbiAgc3R5bGVVcmxzOiBbJy4vcGlja2VyLW92ZXJsYXkuY29tcG9uZW50LmNzcyddLFxyXG4gIGFuaW1hdGlvbnM6IFtwaWNrZXJPdmVybGF5QW5pbWF0aW9ucy50cmFuc2Zvcm1QYW5lbF0sXHJcbiAgZW5jYXBzdWxhdGlvbjogVmlld0VuY2Fwc3VsYXRpb24uTm9uZVxyXG59KVxyXG5leHBvcnQgY2xhc3MgUGlja2VyT3ZlcmxheUNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XHJcbiAgZnJvbURhdGU6IERhdGU7XHJcbiAgdG9EYXRlOiBEYXRlO1xyXG4gIGZyb21NaW5EYXRlOiBEYXRlO1xyXG4gIGZyb21NYXhEYXRlOiBEYXRlO1xyXG4gIHRvTWluRGF0ZTogRGF0ZTtcclxuICB0b01heERhdGU6IERhdGU7XHJcbiAgcHJlc2V0czogQXJyYXk8UHJlc2V0SXRlbT4gPSBbXTtcclxuICBzdGFydERhdGVQcmVmaXg6IHN0cmluZztcclxuICBlbmREYXRlUHJlZml4OiBzdHJpbmc7XHJcbiAgYXBwbHlMYWJlbDogc3RyaW5nO1xyXG4gIGNhbmNlbExhYmVsOiBzdHJpbmc7XHJcbiAgc2hvdWxkQW5pbWF0ZTogc3RyaW5nO1xyXG5cclxuICBjb25zdHJ1Y3RvcihcclxuICAgIHByaXZhdGUgcmFuZ2VTdG9yZVNlcnZpY2U6IFJhbmdlU3RvcmVTZXJ2aWNlLFxyXG4gICAgcHJpdmF0ZSBjb25maWdTdG9yZVNlcnZpY2U6IENvbmZpZ1N0b3JlU2VydmljZSxcclxuICAgIHByaXZhdGUgb3ZlcmxheVJlZjogT3ZlcmxheVJlZlxyXG4gICkge31cclxuXHJcbiAgbmdPbkluaXQoKSB7XHJcbiAgICB0aGlzLmZyb21EYXRlID0gdGhpcy5yYW5nZVN0b3JlU2VydmljZS5mcm9tRGF0ZTtcclxuICAgIHRoaXMudG9EYXRlID0gdGhpcy5yYW5nZVN0b3JlU2VydmljZS50b0RhdGU7XHJcbiAgICB0aGlzLnN0YXJ0RGF0ZVByZWZpeCA9IHRoaXMuY29uZmlnU3RvcmVTZXJ2aWNlLm5neERycE9wdGlvbnMuc3RhcnREYXRlUHJlZml4IHx8ICdGUk9NOic7XHJcbiAgICB0aGlzLmVuZERhdGVQcmVmaXggPSB0aGlzLmNvbmZpZ1N0b3JlU2VydmljZS5uZ3hEcnBPcHRpb25zLmVuZERhdGVQcmVmaXggfHwgJ1RPOic7XHJcbiAgICB0aGlzLmFwcGx5TGFiZWwgPSB0aGlzLmNvbmZpZ1N0b3JlU2VydmljZS5uZ3hEcnBPcHRpb25zLmFwcGx5TGFiZWwgfHwgJ0FwcGx5JztcclxuICAgIHRoaXMuY2FuY2VsTGFiZWwgPSB0aGlzLmNvbmZpZ1N0b3JlU2VydmljZS5uZ3hEcnBPcHRpb25zLmNhbmNlbExhYmVsIHx8ICdDYW5jZWwnO1xyXG4gICAgdGhpcy5wcmVzZXRzID0gdGhpcy5jb25maWdTdG9yZVNlcnZpY2Uubmd4RHJwT3B0aW9ucy5wcmVzZXRzO1xyXG4gICAgdGhpcy5zaG91bGRBbmltYXRlID0gdGhpcy5jb25maWdTdG9yZVNlcnZpY2Uubmd4RHJwT3B0aW9ucy5hbmltYXRpb25cclxuICAgICAgPyAnZW50ZXInXHJcbiAgICAgIDogJ25vb3AnO1xyXG4gICAgKHtcclxuICAgICAgZnJvbURhdGU6IHRoaXMuZnJvbU1pbkRhdGUsXHJcbiAgICAgIHRvRGF0ZTogdGhpcy5mcm9tTWF4RGF0ZVxyXG4gICAgfSA9IHRoaXMuY29uZmlnU3RvcmVTZXJ2aWNlLm5neERycE9wdGlvbnMuZnJvbU1pbk1heCk7XHJcbiAgICAoe1xyXG4gICAgICBmcm9tRGF0ZTogdGhpcy50b01pbkRhdGUsXHJcbiAgICAgIHRvRGF0ZTogdGhpcy50b01heERhdGVcclxuICAgIH0gPSB0aGlzLmNvbmZpZ1N0b3JlU2VydmljZS5uZ3hEcnBPcHRpb25zLnRvTWluTWF4KTtcclxuICB9XHJcblxyXG4gIHVwZGF0ZUZyb21EYXRlKGRhdGUpIHtcclxuICAgIHRoaXMuZnJvbURhdGUgPSBkYXRlO1xyXG4gIH1cclxuXHJcbiAgdXBkYXRlVG9EYXRlKGRhdGUpIHtcclxuICAgIHRoaXMudG9EYXRlID0gZGF0ZTtcclxuICB9XHJcblxyXG4gIHVwZGF0ZVJhbmdlQnlQcmVzZXQocHJlc2V0SXRlbTogUHJlc2V0SXRlbSkge1xyXG4gICAgdGhpcy51cGRhdGVGcm9tRGF0ZShwcmVzZXRJdGVtLnJhbmdlLmZyb21EYXRlKTtcclxuICAgIHRoaXMudXBkYXRlVG9EYXRlKHByZXNldEl0ZW0ucmFuZ2UudG9EYXRlKTtcclxuICB9XHJcblxyXG4gIGFwcGx5TmV3RGF0ZXMoZSkge1xyXG4gICAgdGhpcy5yYW5nZVN0b3JlU2VydmljZS51cGRhdGVSYW5nZSh0aGlzLmZyb21EYXRlLCB0aGlzLnRvRGF0ZSk7XHJcbiAgICB0aGlzLmRpc3Bvc2VPdmVyTGF5KCk7XHJcbiAgfVxyXG5cclxuICBkaXNjYXJkTmV3RGF0ZXMoZSkge1xyXG4gICAgLy8gdGhpcy5yYW5nZVN0b3JlU2VydmljZS51cGRhdGVSYW5nZSgpO1xyXG4gICAgdGhpcy5kaXNwb3NlT3ZlckxheSgpO1xyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBkaXNwb3NlT3ZlckxheSgpIHtcclxuICAgIHRoaXMub3ZlcmxheVJlZi5kaXNwb3NlKCk7XHJcbiAgfVxyXG59XHJcbiJdfQ==