import { __decorate } from "tslib";
import { Component, Output, EventEmitter, Input, ChangeDetectionStrategy } from '@angular/core';
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
export { PresetsComponent };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicHJlc2V0cy5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9uZy1tYXQtZGF0ZXJhbmdlLXBpY2tlci8iLCJzb3VyY2VzIjpbInNyYy9hcHAvbW9kdWxlcy9uZ3gtbWF0LWRycC9wcmVzZXRzL3ByZXNldHMuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxPQUFPLEVBQ0wsU0FBUyxFQUVULE1BQU0sRUFDTixZQUFZLEVBQ1osS0FBSyxFQUNMLHVCQUF1QixFQUV4QixNQUFNLGVBQWUsQ0FBQztBQVN2QixJQUFhLGdCQUFnQixHQUE3QixNQUFhLGdCQUFnQjtJQU0zQjtRQUZTLGtCQUFhLEdBQXNCLElBQUksWUFBWSxFQUFPLENBQUM7SUFFckQsQ0FBQztJQUVoQixRQUFRLEtBQUksQ0FBQztJQUViLGVBQWUsQ0FBQyxLQUFLO1FBQ25CLElBQUksQ0FBQyxhQUFhLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDO0lBQ2pDLENBQUM7Q0FDRixDQUFBO0FBWEM7SUFEQyxLQUFLLEVBQUU7aURBQ21CO0FBRTNCO0lBREMsTUFBTSxFQUFFO3VEQUMyRDtBQUp6RCxnQkFBZ0I7SUFONUIsU0FBUyxDQUFDO1FBQ1QsUUFBUSxFQUFFLGlCQUFpQjtRQUMzQixpTUFBdUM7UUFFdkMsZUFBZSxFQUFFLHVCQUF1QixDQUFDLE1BQU07O0tBQ2hELENBQUM7R0FDVyxnQkFBZ0IsQ0FhNUI7U0FiWSxnQkFBZ0IiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1xyXG4gIENvbXBvbmVudCxcclxuICBPbkluaXQsXHJcbiAgT3V0cHV0LFxyXG4gIEV2ZW50RW1pdHRlcixcclxuICBJbnB1dCxcclxuICBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSxcclxuICBWaWV3RW5jYXBzdWxhdGlvblxyXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBQcmVzZXRJdGVtIH0gZnJvbSAnLi4vbW9kZWwvbW9kZWwnO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgc2VsZWN0b3I6ICdtYXQtZHJwLXByZXNldHMnLFxyXG4gIHRlbXBsYXRlVXJsOiAnLi9wcmVzZXRzLmNvbXBvbmVudC5odG1sJyxcclxuICBzdHlsZVVybHM6IFsnLi9wcmVzZXRzLmNvbXBvbmVudC5jc3MnXSxcclxuICBjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaFxyXG59KVxyXG5leHBvcnQgY2xhc3MgUHJlc2V0c0NvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XHJcbiAgQElucHV0KClcclxuICBwcmVzZXRzOiBBcnJheTxQcmVzZXRJdGVtPjtcclxuICBAT3V0cHV0KClcclxuICByZWFkb25seSBwcmVzZXRDaGFuZ2VkOiBFdmVudEVtaXR0ZXI8YW55PiA9IG5ldyBFdmVudEVtaXR0ZXI8YW55PigpO1xyXG5cclxuICBjb25zdHJ1Y3RvcigpIHt9XHJcblxyXG4gIG5nT25Jbml0KCkge31cclxuXHJcbiAgc2V0UHJlc2V0UGVyaW9kKGV2ZW50KSB7XHJcbiAgICB0aGlzLnByZXNldENoYW5nZWQuZW1pdChldmVudCk7XHJcbiAgfVxyXG59XHJcbiJdfQ==