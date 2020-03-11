import { __decorate } from "tslib";
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgxMatDrpComponent } from './ngx-mat-drp/ngx-mat-drp.component';
import { PickerOverlayComponent } from './picker-overlay/picker-overlay.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatTooltipModule } from '@angular/material/tooltip';
import { OverlayModule } from '@angular/cdk/overlay';
import { CalendarWrapperComponent } from './calendar-wrapper/calendar-wrapper.component';
import { PresetsComponent } from './presets/presets.component';
import { DATE } from './services/range-store.service';
var ɵ0 = new Date();
var NgxMatDrpModule = /** @class */ (function () {
    function NgxMatDrpModule() {
    }
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
    return NgxMatDrpModule;
}());
export { NgxMatDrpModule };
export { ɵ0 };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmd4LW1hdC1kcnAubW9kdWxlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vbmctbWF0LWRhdGVyYW5nZS1waWNrZXIvIiwic291cmNlcyI6WyJzcmMvYXBwL21vZHVsZXMvbmd4LW1hdC1kcnAvbmd4LW1hdC1kcnAubW9kdWxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxPQUFPLEVBQUUsUUFBUSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ3pDLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUMvQyxPQUFPLEVBQUUsa0JBQWtCLEVBQUUsTUFBTSxxQ0FBcUMsQ0FBQztBQUN6RSxPQUFPLEVBQUUsc0JBQXNCLEVBQUUsTUFBTSwyQ0FBMkMsQ0FBQztBQUVuRixPQUFPLEVBQUUsa0JBQWtCLEVBQUUsTUFBTSw4QkFBOEIsQ0FBQztBQUNsRSxPQUFPLEVBQUUsbUJBQW1CLEVBQUUsTUFBTSw4QkFBOEIsQ0FBQztBQUNuRSxPQUFPLEVBQUUsbUJBQW1CLEVBQUUsTUFBTSx3QkFBd0IsQ0FBQztBQUM3RCxPQUFPLEVBQUUsY0FBYyxFQUFFLE1BQU0seUJBQXlCLENBQUM7QUFDekQsT0FBTyxFQUFFLGVBQWUsRUFBRSxNQUFNLDBCQUEwQixDQUFDO0FBQzNELE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLDJCQUEyQixDQUFDO0FBQzdELE9BQU8sRUFBRSxhQUFhLEVBQUUsTUFBTSxzQkFBc0IsQ0FBQztBQUVyRCxPQUFPLEVBQUUsd0JBQXdCLEVBQUUsTUFBTSwrQ0FBK0MsQ0FBQztBQUN6RixPQUFPLEVBQUUsZ0JBQWdCLEVBQUUsTUFBTSw2QkFBNkIsQ0FBQztBQUMvRCxPQUFPLEVBQUUsSUFBSSxFQUFFLE1BQU0sZ0NBQWdDLENBQUM7U0FvQnhCLElBQUksSUFBSSxFQUFFO0FBS3hDO0lBQUE7SUFBK0IsQ0FBQztJQUFuQixlQUFlO1FBdkIzQixRQUFRLENBQUM7WUFDUixPQUFPLEVBQUU7Z0JBQ1AsWUFBWTtnQkFDWixrQkFBa0I7Z0JBQ2xCLG1CQUFtQjtnQkFDbkIsbUJBQW1CO2dCQUNuQixjQUFjO2dCQUNkLGVBQWU7Z0JBQ2YsZ0JBQWdCO2dCQUNoQixhQUFhO2FBQ2Q7WUFDRCxZQUFZLEVBQUU7Z0JBQ1osa0JBQWtCO2dCQUNsQix3QkFBd0I7Z0JBQ3hCLHNCQUFzQjtnQkFDdEIsZ0JBQWdCO2FBQ2pCO1lBQ0QsU0FBUyxFQUFFO2dCQUNULEVBQUMsT0FBTyxFQUFFLElBQUksRUFBRSxRQUFRLElBQVksRUFBQzthQUN0QztZQUNELGVBQWUsRUFBRSxDQUFDLHNCQUFzQixDQUFDO1lBQ3pDLE9BQU8sRUFBRSxDQUFDLGtCQUFrQixDQUFDO1NBQzlCLENBQUM7T0FDVyxlQUFlLENBQUk7SUFBRCxzQkFBQztDQUFBLEFBQWhDLElBQWdDO1NBQW5CLGVBQWUiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBOZ01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBDb21tb25Nb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xyXG5pbXBvcnQgeyBOZ3hNYXREcnBDb21wb25lbnQgfSBmcm9tICcuL25neC1tYXQtZHJwL25neC1tYXQtZHJwLmNvbXBvbmVudCc7XHJcbmltcG9ydCB7IFBpY2tlck92ZXJsYXlDb21wb25lbnQgfSBmcm9tICcuL3BpY2tlci1vdmVybGF5L3BpY2tlci1vdmVybGF5LmNvbXBvbmVudCc7XHJcblxyXG5pbXBvcnQgeyBNYXRGb3JtRmllbGRNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9tYXRlcmlhbC9mb3JtLWZpZWxkJztcclxuaW1wb3J0IHsgTWF0RGF0ZXBpY2tlck1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL21hdGVyaWFsL2RhdGVwaWNrZXInO1xyXG5pbXBvcnQgeyBNYXROYXRpdmVEYXRlTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvbWF0ZXJpYWwvY29yZSc7XHJcbmltcG9ydCB7IE1hdElucHV0TW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvbWF0ZXJpYWwvaW5wdXQnO1xyXG5pbXBvcnQgeyBNYXRCdXR0b25Nb2R1bGUgfSBmcm9tICdAYW5ndWxhci9tYXRlcmlhbC9idXR0b24nO1xyXG5pbXBvcnQgeyBNYXRUb29sdGlwTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvbWF0ZXJpYWwvdG9vbHRpcCc7XHJcbmltcG9ydCB7IE92ZXJsYXlNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jZGsvb3ZlcmxheSc7XHJcblxyXG5pbXBvcnQgeyBDYWxlbmRhcldyYXBwZXJDb21wb25lbnQgfSBmcm9tICcuL2NhbGVuZGFyLXdyYXBwZXIvY2FsZW5kYXItd3JhcHBlci5jb21wb25lbnQnO1xyXG5pbXBvcnQgeyBQcmVzZXRzQ29tcG9uZW50IH0gZnJvbSAnLi9wcmVzZXRzL3ByZXNldHMuY29tcG9uZW50JztcclxuaW1wb3J0IHsgREFURSB9IGZyb20gJy4vc2VydmljZXMvcmFuZ2Utc3RvcmUuc2VydmljZSc7XHJcblxyXG5ATmdNb2R1bGUoe1xyXG4gIGltcG9ydHM6IFtcclxuICAgIENvbW1vbk1vZHVsZSxcclxuICAgIE1hdEZvcm1GaWVsZE1vZHVsZSxcclxuICAgIE1hdERhdGVwaWNrZXJNb2R1bGUsXHJcbiAgICBNYXROYXRpdmVEYXRlTW9kdWxlLFxyXG4gICAgTWF0SW5wdXRNb2R1bGUsXHJcbiAgICBNYXRCdXR0b25Nb2R1bGUsXHJcbiAgICBNYXRUb29sdGlwTW9kdWxlLFxyXG4gICAgT3ZlcmxheU1vZHVsZVxyXG4gIF0sXHJcbiAgZGVjbGFyYXRpb25zOiBbXHJcbiAgICBOZ3hNYXREcnBDb21wb25lbnQsXHJcbiAgICBDYWxlbmRhcldyYXBwZXJDb21wb25lbnQsXHJcbiAgICBQaWNrZXJPdmVybGF5Q29tcG9uZW50LFxyXG4gICAgUHJlc2V0c0NvbXBvbmVudFxyXG4gIF0sXHJcbiAgcHJvdmlkZXJzOiBbXHJcbiAgICB7cHJvdmlkZTogREFURSwgdXNlVmFsdWU6IG5ldyBEYXRlKCl9XHJcbiAgXSxcclxuICBlbnRyeUNvbXBvbmVudHM6IFtQaWNrZXJPdmVybGF5Q29tcG9uZW50XSxcclxuICBleHBvcnRzOiBbTmd4TWF0RHJwQ29tcG9uZW50XVxyXG59KVxyXG5leHBvcnQgY2xhc3MgTmd4TWF0RHJwTW9kdWxlIHsgfVxyXG4iXX0=