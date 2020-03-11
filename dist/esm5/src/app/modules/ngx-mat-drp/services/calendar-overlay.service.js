import { __assign, __decorate } from "tslib";
import { Injectable, ElementRef, Injector } from '@angular/core';
import { Overlay, OverlayConfig, OverlayRef } from '@angular/cdk/overlay';
import { ComponentPortal, PortalInjector } from '@angular/cdk/portal';
import { takeWhile } from 'rxjs/operators';
import { PickerOverlayComponent } from '../picker-overlay/picker-overlay.component';
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
        var calendarPortal = new ComponentPortal(PickerOverlayComponent, null, portalInjector);
        overlayRef.attach(calendarPortal);
        overlayRef
            .backdropClick()
            .pipe(takeWhile(function () { return overlayConfig.shouldCloseOnBackdropClick; }))
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
        var overlayConfig = new OverlayConfig({
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
        injectionTokens.set(OverlayRef, overlayRef);
        return new PortalInjector(this.injector, injectionTokens);
    };
    CalendarOverlayService.ctorParameters = function () { return [
        { type: Overlay },
        { type: Injector }
    ]; };
    CalendarOverlayService = __decorate([
        Injectable()
    ], CalendarOverlayService);
    return CalendarOverlayService;
}());
export { CalendarOverlayService };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2FsZW5kYXItb3ZlcmxheS5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vbmctbWF0LWRhdGVyYW5nZS1waWNrZXIvIiwic291cmNlcyI6WyJzcmMvYXBwL21vZHVsZXMvbmd4LW1hdC1kcnAvc2VydmljZXMvY2FsZW5kYXItb3ZlcmxheS5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLFVBQVUsRUFBRSxRQUFRLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDakUsT0FBTyxFQUFFLE9BQU8sRUFBRSxhQUFhLEVBQUUsVUFBVSxFQUFFLE1BQU0sc0JBQXNCLENBQUM7QUFDMUUsT0FBTyxFQUFFLGVBQWUsRUFBRSxjQUFjLEVBQUUsTUFBTSxxQkFBcUIsQ0FBQztBQUV0RSxPQUFPLEVBQUUsU0FBUyxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFDM0MsT0FBTyxFQUFFLHNCQUFzQixFQUFFLE1BQU0sNENBQTRDLENBQUM7QUFFcEYsSUFBTSxjQUFjLEdBQTBCO0lBQzVDLFVBQVUsRUFBRSxxQkFBcUI7SUFDakMsV0FBVyxFQUFFLElBQUk7SUFDakIsYUFBYSxFQUFFLDhCQUE4QjtJQUM3QywwQkFBMEIsRUFBRSxJQUFJO0NBQ2pDLENBQUM7QUFHRjtJQUdFLGdDQUFvQixPQUFnQixFQUFVLFFBQWtCO1FBQTVDLFlBQU8sR0FBUCxPQUFPLENBQVM7UUFBVSxhQUFRLEdBQVIsUUFBUSxDQUFVO0lBQUcsQ0FBQztJQUVwRSxxQ0FBSSxHQUFKLFVBQ0UsTUFBa0MsRUFDbEMsV0FBdUI7UUFEdkIsdUJBQUEsRUFBQSxXQUFrQztRQUdsQyxJQUFJLENBQUMsV0FBVyxHQUFHLFdBQVcsQ0FBQztRQUMvQixJQUFNLGFBQWEseUJBQVEsY0FBYyxHQUFLLE1BQU0sQ0FBRSxDQUFDO1FBQ3ZELElBQU0sVUFBVSxHQUFHLElBQUksQ0FBQyxhQUFhLENBQUMsYUFBYSxDQUFDLENBQUM7UUFDckQsSUFBTSxjQUFjLEdBQUcsSUFBSSxDQUFDLGNBQWMsQ0FBQyxVQUFVLENBQUMsQ0FBQztRQUN2RCxJQUFNLGNBQWMsR0FBRyxJQUFJLGVBQWUsQ0FDeEMsc0JBQXNCLEVBQ3RCLElBQUksRUFDSixjQUFjLENBQ2YsQ0FBQztRQUNGLFVBQVUsQ0FBQyxNQUFNLENBQUMsY0FBYyxDQUFDLENBQUM7UUFFbEMsVUFBVTthQUNQLGFBQWEsRUFBRTthQUNmLElBQUksQ0FBQyxTQUFTLENBQUMsY0FBTSxPQUFBLGFBQWEsQ0FBQywwQkFBMEIsRUFBeEMsQ0FBd0MsQ0FBQyxDQUFDO2FBQy9ELFNBQVMsQ0FBQyxjQUFNLE9BQUEsVUFBVSxDQUFDLE9BQU8sRUFBRSxFQUFwQixDQUFvQixDQUFDLENBQUM7UUFFekMsT0FBTyxVQUFVLENBQUM7SUFDcEIsQ0FBQztJQUVPLDhDQUFhLEdBQXJCLFVBQXNCLE1BQTZCO1FBQ2pELElBQU0sYUFBYSxHQUFHLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxNQUFNLENBQUMsQ0FBQztRQUNwRCxPQUFPLElBQUksQ0FBQyxPQUFPLENBQUMsTUFBTSxDQUFDLGFBQWEsQ0FBQyxDQUFDO0lBQzVDLENBQUM7SUFFTyxpREFBZ0IsR0FBeEIsVUFBeUIsTUFBNkI7UUFDcEQsSUFBTSxnQkFBZ0IsR0FBRyxJQUFJLENBQUMsT0FBTzthQUNsQyxRQUFRLEVBQUU7YUFDVixtQkFBbUIsQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDO2FBQ3JDLHNCQUFzQixDQUFDLEtBQUssQ0FBQzthQUM3QixrQkFBa0IsQ0FBQyxDQUFDLENBQUM7YUFDckIsa0JBQWtCLENBQUMsRUFBRSxDQUFDO2FBQ3RCLGFBQWEsQ0FBQztZQUNiO2dCQUNFLE9BQU8sRUFBRSxPQUFPO2dCQUNoQixPQUFPLEVBQUUsUUFBUTtnQkFDakIsUUFBUSxFQUFFLE9BQU87Z0JBQ2pCLFFBQVEsRUFBRSxLQUFLO2FBQ2hCO1lBQ0Q7Z0JBQ0UsT0FBTyxFQUFFLE9BQU87Z0JBQ2hCLE9BQU8sRUFBRSxLQUFLO2dCQUNkLFFBQVEsRUFBRSxPQUFPO2dCQUNqQixRQUFRLEVBQUUsUUFBUTthQUNuQjtZQUNEO2dCQUNFLE9BQU8sRUFBRSxLQUFLO2dCQUNkLE9BQU8sRUFBRSxRQUFRO2dCQUNqQixRQUFRLEVBQUUsS0FBSztnQkFDZixRQUFRLEVBQUUsS0FBSzthQUNoQjtZQUNEO2dCQUNFLE9BQU8sRUFBRSxLQUFLO2dCQUNkLE9BQU8sRUFBRSxLQUFLO2dCQUNkLFFBQVEsRUFBRSxLQUFLO2dCQUNmLFFBQVEsRUFBRSxRQUFRO2FBQ25CO1NBQ0YsQ0FBQyxDQUFDO1FBRUwsSUFBTSxhQUFhLEdBQUcsSUFBSSxhQUFhLENBQUM7WUFDdEMsV0FBVyxFQUFFLE1BQU0sQ0FBQyxXQUFXO1lBQy9CLGFBQWEsRUFBRSxNQUFNLENBQUMsYUFBYTtZQUNuQyxVQUFVLEVBQUUsTUFBTSxDQUFDLFVBQVU7WUFDN0IsY0FBYyxFQUFFLElBQUksQ0FBQyxPQUFPLENBQUMsZ0JBQWdCLENBQUMsS0FBSyxFQUFFO1lBQ3JELGdCQUFnQixrQkFBQTtTQUNqQixDQUFDLENBQUM7UUFFSCxPQUFPLGFBQWEsQ0FBQztJQUN2QixDQUFDO0lBRU8sK0NBQWMsR0FBdEIsVUFBdUIsVUFBc0I7UUFDM0MsSUFBTSxlQUFlLEdBQUcsSUFBSSxPQUFPLEVBQUUsQ0FBQztRQUN0QyxlQUFlLENBQUMsR0FBRyxDQUFDLFVBQVUsRUFBRSxVQUFVLENBQUMsQ0FBQztRQUU1QyxPQUFPLElBQUksY0FBYyxDQUFDLElBQUksQ0FBQyxRQUFRLEVBQUUsZUFBZSxDQUFDLENBQUM7SUFDNUQsQ0FBQzs7Z0JBaEY0QixPQUFPO2dCQUFvQixRQUFROztJQUhyRCxzQkFBc0I7UUFEbEMsVUFBVSxFQUFFO09BQ0Esc0JBQXNCLENBb0ZsQztJQUFELDZCQUFDO0NBQUEsQUFwRkQsSUFvRkM7U0FwRlksc0JBQXNCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSwgRWxlbWVudFJlZiwgSW5qZWN0b3IgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgT3ZlcmxheSwgT3ZlcmxheUNvbmZpZywgT3ZlcmxheVJlZiB9IGZyb20gJ0Bhbmd1bGFyL2Nkay9vdmVybGF5JztcclxuaW1wb3J0IHsgQ29tcG9uZW50UG9ydGFsLCBQb3J0YWxJbmplY3RvciB9IGZyb20gJ0Bhbmd1bGFyL2Nkay9wb3J0YWwnO1xyXG5pbXBvcnQgeyBOZ3hEcnBPcHRpb25zLCBDYWxlbmRhck92ZXJsYXlDb25maWcgfSBmcm9tICcuLi9tb2RlbC9tb2RlbCc7XHJcbmltcG9ydCB7IHRha2VXaGlsZSB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcclxuaW1wb3J0IHsgUGlja2VyT3ZlcmxheUNvbXBvbmVudCB9IGZyb20gJy4uL3BpY2tlci1vdmVybGF5L3BpY2tlci1vdmVybGF5LmNvbXBvbmVudCc7XHJcblxyXG5jb25zdCBERUZBVUxUX0NPTkZJRzogQ2FsZW5kYXJPdmVybGF5Q29uZmlnID0ge1xyXG4gIHBhbmVsQ2xhc3M6ICduZ3gtbWF0LWRycC1vdmVybGF5JyxcclxuICBoYXNCYWNrZHJvcDogdHJ1ZSxcclxuICBiYWNrZHJvcENsYXNzOiAnbmd4LW1hdC1kcnAtb3ZlcmxheS1iYWNrZHJvcCcsXHJcbiAgc2hvdWxkQ2xvc2VPbkJhY2tkcm9wQ2xpY2s6IHRydWVcclxufTtcclxuXHJcbkBJbmplY3RhYmxlKClcclxuZXhwb3J0IGNsYXNzIENhbGVuZGFyT3ZlcmxheVNlcnZpY2Uge1xyXG4gIHByaXZhdGUgaG9zdEVsZW1SZWY6IEVsZW1lbnRSZWY7XHJcblxyXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgb3ZlcmxheTogT3ZlcmxheSwgcHJpdmF0ZSBpbmplY3RvcjogSW5qZWN0b3IpIHt9XHJcblxyXG4gIG9wZW4oXHJcbiAgICBjb25maWc6IENhbGVuZGFyT3ZlcmxheUNvbmZpZyA9IHt9LFxyXG4gICAgaG9zdEVsZW1SZWY6IEVsZW1lbnRSZWZcclxuICApOiBPdmVybGF5UmVmIHtcclxuICAgIHRoaXMuaG9zdEVsZW1SZWYgPSBob3N0RWxlbVJlZjtcclxuICAgIGNvbnN0IG92ZXJsYXlDb25maWcgPSB7IC4uLkRFRkFVTFRfQ09ORklHLCAuLi5jb25maWcgfTtcclxuICAgIGNvbnN0IG92ZXJsYXlSZWYgPSB0aGlzLmNyZWF0ZU92ZXJsYXkob3ZlcmxheUNvbmZpZyk7XHJcbiAgICBjb25zdCBwb3J0YWxJbmplY3RvciA9IHRoaXMuY3JlYXRlSW5qZWN0b3Iob3ZlcmxheVJlZik7XHJcbiAgICBjb25zdCBjYWxlbmRhclBvcnRhbCA9IG5ldyBDb21wb25lbnRQb3J0YWwoXHJcbiAgICAgIFBpY2tlck92ZXJsYXlDb21wb25lbnQsXHJcbiAgICAgIG51bGwsXHJcbiAgICAgIHBvcnRhbEluamVjdG9yXHJcbiAgICApO1xyXG4gICAgb3ZlcmxheVJlZi5hdHRhY2goY2FsZW5kYXJQb3J0YWwpO1xyXG5cclxuICAgIG92ZXJsYXlSZWZcclxuICAgICAgLmJhY2tkcm9wQ2xpY2soKVxyXG4gICAgICAucGlwZSh0YWtlV2hpbGUoKCkgPT4gb3ZlcmxheUNvbmZpZy5zaG91bGRDbG9zZU9uQmFja2Ryb3BDbGljaykpXHJcbiAgICAgIC5zdWJzY3JpYmUoKCkgPT4gb3ZlcmxheVJlZi5kaXNwb3NlKCkpO1xyXG5cclxuICAgIHJldHVybiBvdmVybGF5UmVmO1xyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBjcmVhdGVPdmVybGF5KGNvbmZpZzogQ2FsZW5kYXJPdmVybGF5Q29uZmlnKTogT3ZlcmxheVJlZiB7XHJcbiAgICBjb25zdCBvdmVybGF5Q29uZmlnID0gdGhpcy5nZXRPdmVybGF5Q29uZmlnKGNvbmZpZyk7XHJcbiAgICByZXR1cm4gdGhpcy5vdmVybGF5LmNyZWF0ZShvdmVybGF5Q29uZmlnKTtcclxuICB9XHJcblxyXG4gIHByaXZhdGUgZ2V0T3ZlcmxheUNvbmZpZyhjb25maWc6IENhbGVuZGFyT3ZlcmxheUNvbmZpZyk6IE92ZXJsYXlDb25maWcge1xyXG4gICAgY29uc3QgcG9zaXRpb25TdHJhdGVneSA9IHRoaXMub3ZlcmxheVxyXG4gICAgICAucG9zaXRpb24oKVxyXG4gICAgICAuZmxleGlibGVDb25uZWN0ZWRUbyh0aGlzLmhvc3RFbGVtUmVmKVxyXG4gICAgICAud2l0aEZsZXhpYmxlRGltZW5zaW9ucyhmYWxzZSlcclxuICAgICAgLndpdGhWaWV3cG9ydE1hcmdpbig4KVxyXG4gICAgICAud2l0aERlZmF1bHRPZmZzZXRZKDEyKVxyXG4gICAgICAud2l0aFBvc2l0aW9ucyhbXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgb3JpZ2luWDogJ3N0YXJ0JyxcclxuICAgICAgICAgIG9yaWdpblk6ICdib3R0b20nLFxyXG4gICAgICAgICAgb3ZlcmxheVg6ICdzdGFydCcsXHJcbiAgICAgICAgICBvdmVybGF5WTogJ3RvcCdcclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgIG9yaWdpblg6ICdzdGFydCcsXHJcbiAgICAgICAgICBvcmlnaW5ZOiAndG9wJyxcclxuICAgICAgICAgIG92ZXJsYXlYOiAnc3RhcnQnLFxyXG4gICAgICAgICAgb3ZlcmxheVk6ICdib3R0b20nXHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICBvcmlnaW5YOiAnZW5kJyxcclxuICAgICAgICAgIG9yaWdpblk6ICdib3R0b20nLFxyXG4gICAgICAgICAgb3ZlcmxheVg6ICdlbmQnLFxyXG4gICAgICAgICAgb3ZlcmxheVk6ICd0b3AnXHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICBvcmlnaW5YOiAnZW5kJyxcclxuICAgICAgICAgIG9yaWdpblk6ICd0b3AnLFxyXG4gICAgICAgICAgb3ZlcmxheVg6ICdlbmQnLFxyXG4gICAgICAgICAgb3ZlcmxheVk6ICdib3R0b20nXHJcbiAgICAgICAgfVxyXG4gICAgICBdKTtcclxuXHJcbiAgICBjb25zdCBvdmVybGF5Q29uZmlnID0gbmV3IE92ZXJsYXlDb25maWcoe1xyXG4gICAgICBoYXNCYWNrZHJvcDogY29uZmlnLmhhc0JhY2tkcm9wLFxyXG4gICAgICBiYWNrZHJvcENsYXNzOiBjb25maWcuYmFja2Ryb3BDbGFzcyxcclxuICAgICAgcGFuZWxDbGFzczogY29uZmlnLnBhbmVsQ2xhc3MsXHJcbiAgICAgIHNjcm9sbFN0cmF0ZWd5OiB0aGlzLm92ZXJsYXkuc2Nyb2xsU3RyYXRlZ2llcy5ibG9jaygpLFxyXG4gICAgICBwb3NpdGlvblN0cmF0ZWd5XHJcbiAgICB9KTtcclxuXHJcbiAgICByZXR1cm4gb3ZlcmxheUNvbmZpZztcclxuICB9XHJcblxyXG4gIHByaXZhdGUgY3JlYXRlSW5qZWN0b3Iob3ZlcmxheVJlZjogT3ZlcmxheVJlZik6IFBvcnRhbEluamVjdG9yIHtcclxuICAgIGNvbnN0IGluamVjdGlvblRva2VucyA9IG5ldyBXZWFrTWFwKCk7XHJcbiAgICBpbmplY3Rpb25Ub2tlbnMuc2V0KE92ZXJsYXlSZWYsIG92ZXJsYXlSZWYpO1xyXG5cclxuICAgIHJldHVybiBuZXcgUG9ydGFsSW5qZWN0b3IodGhpcy5pbmplY3RvciwgaW5qZWN0aW9uVG9rZW5zKTtcclxuICB9XHJcbn1cclxuIl19