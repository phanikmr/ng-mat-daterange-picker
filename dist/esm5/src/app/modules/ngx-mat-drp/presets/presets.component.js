import { __decorate } from "tslib";
import { Component, Output, EventEmitter, Input, ChangeDetectionStrategy } from '@angular/core';
var PresetsComponent = /** @class */ (function () {
    function PresetsComponent() {
        this.presetChanged = new EventEmitter();
    }
    PresetsComponent.prototype.ngOnInit = function () { };
    PresetsComponent.prototype.setPresetPeriod = function (event) {
        this.presetChanged.emit(event);
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
    return PresetsComponent;
}());
export { PresetsComponent };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicHJlc2V0cy5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9uZy1tYXQtZGF0ZXJhbmdlLXBpY2tlci8iLCJzb3VyY2VzIjpbInNyYy9hcHAvbW9kdWxlcy9uZ3gtbWF0LWRycC9wcmVzZXRzL3ByZXNldHMuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxPQUFPLEVBQ0wsU0FBUyxFQUVULE1BQU0sRUFDTixZQUFZLEVBQ1osS0FBSyxFQUNMLHVCQUF1QixFQUV4QixNQUFNLGVBQWUsQ0FBQztBQVN2QjtJQU1FO1FBRlMsa0JBQWEsR0FBc0IsSUFBSSxZQUFZLEVBQU8sQ0FBQztJQUVyRCxDQUFDO0lBRWhCLG1DQUFRLEdBQVIsY0FBWSxDQUFDO0lBRWIsMENBQWUsR0FBZixVQUFnQixLQUFLO1FBQ25CLElBQUksQ0FBQyxhQUFhLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDO0lBQ2pDLENBQUM7SUFWRDtRQURDLEtBQUssRUFBRTtxREFDbUI7SUFFM0I7UUFEQyxNQUFNLEVBQUU7MkRBQzJEO0lBSnpELGdCQUFnQjtRQU41QixTQUFTLENBQUM7WUFDVCxRQUFRLEVBQUUsaUJBQWlCO1lBQzNCLGlNQUF1QztZQUV2QyxlQUFlLEVBQUUsdUJBQXVCLENBQUMsTUFBTTs7U0FDaEQsQ0FBQztPQUNXLGdCQUFnQixDQWE1QjtJQUFELHVCQUFDO0NBQUEsQUFiRCxJQWFDO1NBYlksZ0JBQWdCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtcclxuICBDb21wb25lbnQsXHJcbiAgT25Jbml0LFxyXG4gIE91dHB1dCxcclxuICBFdmVudEVtaXR0ZXIsXHJcbiAgSW5wdXQsXHJcbiAgQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3ksXHJcbiAgVmlld0VuY2Fwc3VsYXRpb25cclxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgUHJlc2V0SXRlbSB9IGZyb20gJy4uL21vZGVsL21vZGVsJztcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gIHNlbGVjdG9yOiAnbWF0LWRycC1wcmVzZXRzJyxcclxuICB0ZW1wbGF0ZVVybDogJy4vcHJlc2V0cy5jb21wb25lbnQuaHRtbCcsXHJcbiAgc3R5bGVVcmxzOiBbJy4vcHJlc2V0cy5jb21wb25lbnQuY3NzJ10sXHJcbiAgY2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2hcclxufSlcclxuZXhwb3J0IGNsYXNzIFByZXNldHNDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xyXG4gIEBJbnB1dCgpXHJcbiAgcHJlc2V0czogQXJyYXk8UHJlc2V0SXRlbT47XHJcbiAgQE91dHB1dCgpXHJcbiAgcmVhZG9ubHkgcHJlc2V0Q2hhbmdlZDogRXZlbnRFbWl0dGVyPGFueT4gPSBuZXcgRXZlbnRFbWl0dGVyPGFueT4oKTtcclxuXHJcbiAgY29uc3RydWN0b3IoKSB7fVxyXG5cclxuICBuZ09uSW5pdCgpIHt9XHJcblxyXG4gIHNldFByZXNldFBlcmlvZChldmVudCkge1xyXG4gICAgdGhpcy5wcmVzZXRDaGFuZ2VkLmVtaXQoZXZlbnQpO1xyXG4gIH1cclxufVxyXG4iXX0=