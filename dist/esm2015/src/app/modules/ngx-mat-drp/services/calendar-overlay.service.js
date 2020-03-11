import { __decorate } from "tslib";
import { Injectable, ElementRef, Injector } from '@angular/core';
import { Overlay, OverlayConfig, OverlayRef } from '@angular/cdk/overlay';
import { ComponentPortal, PortalInjector } from '@angular/cdk/portal';
import { takeWhile } from 'rxjs/operators';
import { PickerOverlayComponent } from '../picker-overlay/picker-overlay.component';
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
export { CalendarOverlayService };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2FsZW5kYXItb3ZlcmxheS5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vbmctbWF0LWRhdGVyYW5nZS1waWNrZXIvIiwic291cmNlcyI6WyJzcmMvYXBwL21vZHVsZXMvbmd4LW1hdC1kcnAvc2VydmljZXMvY2FsZW5kYXItb3ZlcmxheS5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLFVBQVUsRUFBRSxRQUFRLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDakUsT0FBTyxFQUFFLE9BQU8sRUFBRSxhQUFhLEVBQUUsVUFBVSxFQUFFLE1BQU0sc0JBQXNCLENBQUM7QUFDMUUsT0FBTyxFQUFFLGVBQWUsRUFBRSxjQUFjLEVBQUUsTUFBTSxxQkFBcUIsQ0FBQztBQUV0RSxPQUFPLEVBQUUsU0FBUyxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFDM0MsT0FBTyxFQUFFLHNCQUFzQixFQUFFLE1BQU0sNENBQTRDLENBQUM7QUFFcEYsTUFBTSxjQUFjLEdBQTBCO0lBQzVDLFVBQVUsRUFBRSxxQkFBcUI7SUFDakMsV0FBVyxFQUFFLElBQUk7SUFDakIsYUFBYSxFQUFFLDhCQUE4QjtJQUM3QywwQkFBMEIsRUFBRSxJQUFJO0NBQ2pDLENBQUM7QUFHRixJQUFhLHNCQUFzQixHQUFuQyxNQUFhLHNCQUFzQjtJQUdqQyxZQUFvQixPQUFnQixFQUFVLFFBQWtCO1FBQTVDLFlBQU8sR0FBUCxPQUFPLENBQVM7UUFBVSxhQUFRLEdBQVIsUUFBUSxDQUFVO0lBQUcsQ0FBQztJQUVwRSxJQUFJLENBQ0YsU0FBZ0MsRUFBRSxFQUNsQyxXQUF1QjtRQUV2QixJQUFJLENBQUMsV0FBVyxHQUFHLFdBQVcsQ0FBQztRQUMvQixNQUFNLGFBQWEsbUNBQVEsY0FBYyxHQUFLLE1BQU0sQ0FBRSxDQUFDO1FBQ3ZELE1BQU0sVUFBVSxHQUFHLElBQUksQ0FBQyxhQUFhLENBQUMsYUFBYSxDQUFDLENBQUM7UUFDckQsTUFBTSxjQUFjLEdBQUcsSUFBSSxDQUFDLGNBQWMsQ0FBQyxVQUFVLENBQUMsQ0FBQztRQUN2RCxNQUFNLGNBQWMsR0FBRyxJQUFJLGVBQWUsQ0FDeEMsc0JBQXNCLEVBQ3RCLElBQUksRUFDSixjQUFjLENBQ2YsQ0FBQztRQUNGLFVBQVUsQ0FBQyxNQUFNLENBQUMsY0FBYyxDQUFDLENBQUM7UUFFbEMsVUFBVTthQUNQLGFBQWEsRUFBRTthQUNmLElBQUksQ0FBQyxTQUFTLENBQUMsR0FBRyxFQUFFLENBQUMsYUFBYSxDQUFDLDBCQUEwQixDQUFDLENBQUM7YUFDL0QsU0FBUyxDQUFDLEdBQUcsRUFBRSxDQUFDLFVBQVUsQ0FBQyxPQUFPLEVBQUUsQ0FBQyxDQUFDO1FBRXpDLE9BQU8sVUFBVSxDQUFDO0lBQ3BCLENBQUM7SUFFTyxhQUFhLENBQUMsTUFBNkI7UUFDakQsTUFBTSxhQUFhLEdBQUcsSUFBSSxDQUFDLGdCQUFnQixDQUFDLE1BQU0sQ0FBQyxDQUFDO1FBQ3BELE9BQU8sSUFBSSxDQUFDLE9BQU8sQ0FBQyxNQUFNLENBQUMsYUFBYSxDQUFDLENBQUM7SUFDNUMsQ0FBQztJQUVPLGdCQUFnQixDQUFDLE1BQTZCO1FBQ3BELE1BQU0sZ0JBQWdCLEdBQUcsSUFBSSxDQUFDLE9BQU87YUFDbEMsUUFBUSxFQUFFO2FBQ1YsbUJBQW1CLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQzthQUNyQyxzQkFBc0IsQ0FBQyxLQUFLLENBQUM7YUFDN0Isa0JBQWtCLENBQUMsQ0FBQyxDQUFDO2FBQ3JCLGtCQUFrQixDQUFDLEVBQUUsQ0FBQzthQUN0QixhQUFhLENBQUM7WUFDYjtnQkFDRSxPQUFPLEVBQUUsT0FBTztnQkFDaEIsT0FBTyxFQUFFLFFBQVE7Z0JBQ2pCLFFBQVEsRUFBRSxPQUFPO2dCQUNqQixRQUFRLEVBQUUsS0FBSzthQUNoQjtZQUNEO2dCQUNFLE9BQU8sRUFBRSxPQUFPO2dCQUNoQixPQUFPLEVBQUUsS0FBSztnQkFDZCxRQUFRLEVBQUUsT0FBTztnQkFDakIsUUFBUSxFQUFFLFFBQVE7YUFDbkI7WUFDRDtnQkFDRSxPQUFPLEVBQUUsS0FBSztnQkFDZCxPQUFPLEVBQUUsUUFBUTtnQkFDakIsUUFBUSxFQUFFLEtBQUs7Z0JBQ2YsUUFBUSxFQUFFLEtBQUs7YUFDaEI7WUFDRDtnQkFDRSxPQUFPLEVBQUUsS0FBSztnQkFDZCxPQUFPLEVBQUUsS0FBSztnQkFDZCxRQUFRLEVBQUUsS0FBSztnQkFDZixRQUFRLEVBQUUsUUFBUTthQUNuQjtTQUNGLENBQUMsQ0FBQztRQUVMLE1BQU0sYUFBYSxHQUFHLElBQUksYUFBYSxDQUFDO1lBQ3RDLFdBQVcsRUFBRSxNQUFNLENBQUMsV0FBVztZQUMvQixhQUFhLEVBQUUsTUFBTSxDQUFDLGFBQWE7WUFDbkMsVUFBVSxFQUFFLE1BQU0sQ0FBQyxVQUFVO1lBQzdCLGNBQWMsRUFBRSxJQUFJLENBQUMsT0FBTyxDQUFDLGdCQUFnQixDQUFDLEtBQUssRUFBRTtZQUNyRCxnQkFBZ0I7U0FDakIsQ0FBQyxDQUFDO1FBRUgsT0FBTyxhQUFhLENBQUM7SUFDdkIsQ0FBQztJQUVPLGNBQWMsQ0FBQyxVQUFzQjtRQUMzQyxNQUFNLGVBQWUsR0FBRyxJQUFJLE9BQU8sRUFBRSxDQUFDO1FBQ3RDLGVBQWUsQ0FBQyxHQUFHLENBQUMsVUFBVSxFQUFFLFVBQVUsQ0FBQyxDQUFDO1FBRTVDLE9BQU8sSUFBSSxjQUFjLENBQUMsSUFBSSxDQUFDLFFBQVEsRUFBRSxlQUFlLENBQUMsQ0FBQztJQUM1RCxDQUFDO0NBQ0YsQ0FBQTs7WUFqRjhCLE9BQU87WUFBb0IsUUFBUTs7QUFIckQsc0JBQXNCO0lBRGxDLFVBQVUsRUFBRTtHQUNBLHNCQUFzQixDQW9GbEM7U0FwRlksc0JBQXNCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSwgRWxlbWVudFJlZiwgSW5qZWN0b3IgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgT3ZlcmxheSwgT3ZlcmxheUNvbmZpZywgT3ZlcmxheVJlZiB9IGZyb20gJ0Bhbmd1bGFyL2Nkay9vdmVybGF5JztcclxuaW1wb3J0IHsgQ29tcG9uZW50UG9ydGFsLCBQb3J0YWxJbmplY3RvciB9IGZyb20gJ0Bhbmd1bGFyL2Nkay9wb3J0YWwnO1xyXG5pbXBvcnQgeyBOZ3hEcnBPcHRpb25zLCBDYWxlbmRhck92ZXJsYXlDb25maWcgfSBmcm9tICcuLi9tb2RlbC9tb2RlbCc7XHJcbmltcG9ydCB7IHRha2VXaGlsZSB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcclxuaW1wb3J0IHsgUGlja2VyT3ZlcmxheUNvbXBvbmVudCB9IGZyb20gJy4uL3BpY2tlci1vdmVybGF5L3BpY2tlci1vdmVybGF5LmNvbXBvbmVudCc7XHJcblxyXG5jb25zdCBERUZBVUxUX0NPTkZJRzogQ2FsZW5kYXJPdmVybGF5Q29uZmlnID0ge1xyXG4gIHBhbmVsQ2xhc3M6ICduZ3gtbWF0LWRycC1vdmVybGF5JyxcclxuICBoYXNCYWNrZHJvcDogdHJ1ZSxcclxuICBiYWNrZHJvcENsYXNzOiAnbmd4LW1hdC1kcnAtb3ZlcmxheS1iYWNrZHJvcCcsXHJcbiAgc2hvdWxkQ2xvc2VPbkJhY2tkcm9wQ2xpY2s6IHRydWVcclxufTtcclxuXHJcbkBJbmplY3RhYmxlKClcclxuZXhwb3J0IGNsYXNzIENhbGVuZGFyT3ZlcmxheVNlcnZpY2Uge1xyXG4gIHByaXZhdGUgaG9zdEVsZW1SZWY6IEVsZW1lbnRSZWY7XHJcblxyXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgb3ZlcmxheTogT3ZlcmxheSwgcHJpdmF0ZSBpbmplY3RvcjogSW5qZWN0b3IpIHt9XHJcblxyXG4gIG9wZW4oXHJcbiAgICBjb25maWc6IENhbGVuZGFyT3ZlcmxheUNvbmZpZyA9IHt9LFxyXG4gICAgaG9zdEVsZW1SZWY6IEVsZW1lbnRSZWZcclxuICApOiBPdmVybGF5UmVmIHtcclxuICAgIHRoaXMuaG9zdEVsZW1SZWYgPSBob3N0RWxlbVJlZjtcclxuICAgIGNvbnN0IG92ZXJsYXlDb25maWcgPSB7IC4uLkRFRkFVTFRfQ09ORklHLCAuLi5jb25maWcgfTtcclxuICAgIGNvbnN0IG92ZXJsYXlSZWYgPSB0aGlzLmNyZWF0ZU92ZXJsYXkob3ZlcmxheUNvbmZpZyk7XHJcbiAgICBjb25zdCBwb3J0YWxJbmplY3RvciA9IHRoaXMuY3JlYXRlSW5qZWN0b3Iob3ZlcmxheVJlZik7XHJcbiAgICBjb25zdCBjYWxlbmRhclBvcnRhbCA9IG5ldyBDb21wb25lbnRQb3J0YWwoXHJcbiAgICAgIFBpY2tlck92ZXJsYXlDb21wb25lbnQsXHJcbiAgICAgIG51bGwsXHJcbiAgICAgIHBvcnRhbEluamVjdG9yXHJcbiAgICApO1xyXG4gICAgb3ZlcmxheVJlZi5hdHRhY2goY2FsZW5kYXJQb3J0YWwpO1xyXG5cclxuICAgIG92ZXJsYXlSZWZcclxuICAgICAgLmJhY2tkcm9wQ2xpY2soKVxyXG4gICAgICAucGlwZSh0YWtlV2hpbGUoKCkgPT4gb3ZlcmxheUNvbmZpZy5zaG91bGRDbG9zZU9uQmFja2Ryb3BDbGljaykpXHJcbiAgICAgIC5zdWJzY3JpYmUoKCkgPT4gb3ZlcmxheVJlZi5kaXNwb3NlKCkpO1xyXG5cclxuICAgIHJldHVybiBvdmVybGF5UmVmO1xyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBjcmVhdGVPdmVybGF5KGNvbmZpZzogQ2FsZW5kYXJPdmVybGF5Q29uZmlnKTogT3ZlcmxheVJlZiB7XHJcbiAgICBjb25zdCBvdmVybGF5Q29uZmlnID0gdGhpcy5nZXRPdmVybGF5Q29uZmlnKGNvbmZpZyk7XHJcbiAgICByZXR1cm4gdGhpcy5vdmVybGF5LmNyZWF0ZShvdmVybGF5Q29uZmlnKTtcclxuICB9XHJcblxyXG4gIHByaXZhdGUgZ2V0T3ZlcmxheUNvbmZpZyhjb25maWc6IENhbGVuZGFyT3ZlcmxheUNvbmZpZyk6IE92ZXJsYXlDb25maWcge1xyXG4gICAgY29uc3QgcG9zaXRpb25TdHJhdGVneSA9IHRoaXMub3ZlcmxheVxyXG4gICAgICAucG9zaXRpb24oKVxyXG4gICAgICAuZmxleGlibGVDb25uZWN0ZWRUbyh0aGlzLmhvc3RFbGVtUmVmKVxyXG4gICAgICAud2l0aEZsZXhpYmxlRGltZW5zaW9ucyhmYWxzZSlcclxuICAgICAgLndpdGhWaWV3cG9ydE1hcmdpbig4KVxyXG4gICAgICAud2l0aERlZmF1bHRPZmZzZXRZKDEyKVxyXG4gICAgICAud2l0aFBvc2l0aW9ucyhbXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgb3JpZ2luWDogJ3N0YXJ0JyxcclxuICAgICAgICAgIG9yaWdpblk6ICdib3R0b20nLFxyXG4gICAgICAgICAgb3ZlcmxheVg6ICdzdGFydCcsXHJcbiAgICAgICAgICBvdmVybGF5WTogJ3RvcCdcclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgIG9yaWdpblg6ICdzdGFydCcsXHJcbiAgICAgICAgICBvcmlnaW5ZOiAndG9wJyxcclxuICAgICAgICAgIG92ZXJsYXlYOiAnc3RhcnQnLFxyXG4gICAgICAgICAgb3ZlcmxheVk6ICdib3R0b20nXHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICBvcmlnaW5YOiAnZW5kJyxcclxuICAgICAgICAgIG9yaWdpblk6ICdib3R0b20nLFxyXG4gICAgICAgICAgb3ZlcmxheVg6ICdlbmQnLFxyXG4gICAgICAgICAgb3ZlcmxheVk6ICd0b3AnXHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICBvcmlnaW5YOiAnZW5kJyxcclxuICAgICAgICAgIG9yaWdpblk6ICd0b3AnLFxyXG4gICAgICAgICAgb3ZlcmxheVg6ICdlbmQnLFxyXG4gICAgICAgICAgb3ZlcmxheVk6ICdib3R0b20nXHJcbiAgICAgICAgfVxyXG4gICAgICBdKTtcclxuXHJcbiAgICBjb25zdCBvdmVybGF5Q29uZmlnID0gbmV3IE92ZXJsYXlDb25maWcoe1xyXG4gICAgICBoYXNCYWNrZHJvcDogY29uZmlnLmhhc0JhY2tkcm9wLFxyXG4gICAgICBiYWNrZHJvcENsYXNzOiBjb25maWcuYmFja2Ryb3BDbGFzcyxcclxuICAgICAgcGFuZWxDbGFzczogY29uZmlnLnBhbmVsQ2xhc3MsXHJcbiAgICAgIHNjcm9sbFN0cmF0ZWd5OiB0aGlzLm92ZXJsYXkuc2Nyb2xsU3RyYXRlZ2llcy5ibG9jaygpLFxyXG4gICAgICBwb3NpdGlvblN0cmF0ZWd5XHJcbiAgICB9KTtcclxuXHJcbiAgICByZXR1cm4gb3ZlcmxheUNvbmZpZztcclxuICB9XHJcblxyXG4gIHByaXZhdGUgY3JlYXRlSW5qZWN0b3Iob3ZlcmxheVJlZjogT3ZlcmxheVJlZik6IFBvcnRhbEluamVjdG9yIHtcclxuICAgIGNvbnN0IGluamVjdGlvblRva2VucyA9IG5ldyBXZWFrTWFwKCk7XHJcbiAgICBpbmplY3Rpb25Ub2tlbnMuc2V0KE92ZXJsYXlSZWYsIG92ZXJsYXlSZWYpO1xyXG5cclxuICAgIHJldHVybiBuZXcgUG9ydGFsSW5qZWN0b3IodGhpcy5pbmplY3RvciwgaW5qZWN0aW9uVG9rZW5zKTtcclxuICB9XHJcbn1cclxuIl19