import { __decorate, __param } from "tslib";
import { Injectable, Inject, InjectionToken } from '@angular/core';
import { Subject } from 'rxjs';
/* import { DATE } from '../ngx-drp.module'; */
export var DATE = new InjectionToken('date');
var RangeStoreService = /** @class */ (function () {
    function RangeStoreService(_fromDate, _toDate) {
        this._fromDate = _fromDate;
        this._toDate = _toDate;
        this.rangeUpdate$ = new Subject();
    }
    Object.defineProperty(RangeStoreService.prototype, "fromDate", {
        /* set fromDate(fromDate:Date) {
          this._fromDate = fromDate;
        } */
        get: function () {
            return this._fromDate;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(RangeStoreService.prototype, "toDate", {
        /* set toDate(toDate:Date) {
          this._toDate = toDate;
        } */
        get: function () {
            return this._toDate;
        },
        enumerable: true,
        configurable: true
    });
    RangeStoreService.prototype.updateRange = function (fromDate, toDate) {
        if (fromDate === void 0) { fromDate = this._fromDate; }
        if (toDate === void 0) { toDate = this._toDate; }
        this._fromDate = fromDate;
        this._toDate = toDate;
        this.rangeUpdate$.next({ fromDate: this._fromDate, toDate: this._toDate });
    };
    RangeStoreService.ctorParameters = function () { return [
        { type: Date, decorators: [{ type: Inject, args: [DATE,] }] },
        { type: Date, decorators: [{ type: Inject, args: [DATE,] }] }
    ]; };
    RangeStoreService = __decorate([
        Injectable(),
        __param(0, Inject(DATE)),
        __param(1, Inject(DATE))
    ], RangeStoreService);
    return RangeStoreService;
}());
export { RangeStoreService };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmFuZ2Utc3RvcmUuc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25nLW1hdC1kYXRlcmFuZ2UtcGlja2VyLyIsInNvdXJjZXMiOlsic3JjL2FwcC9tb2R1bGVzL25neC1tYXQtZHJwL3NlcnZpY2VzL3JhbmdlLXN0b3JlLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxFQUFFLGNBQWMsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUVuRSxPQUFPLEVBQUUsT0FBTyxFQUFFLE1BQU0sTUFBTSxDQUFDO0FBQy9CLCtDQUErQztBQUUvQyxNQUFNLENBQUMsSUFBTSxJQUFJLEdBQUcsSUFBSSxjQUFjLENBQU8sTUFBTSxDQUFDLENBQUM7QUFHckQ7SUFHRSwyQkFDd0IsU0FBZSxFQUNmLE9BQWE7UUFEYixjQUFTLEdBQVQsU0FBUyxDQUFNO1FBQ2YsWUFBTyxHQUFQLE9BQU8sQ0FBTTtRQUpyQyxpQkFBWSxHQUFtQixJQUFJLE9BQU8sRUFBUyxDQUFDO0lBS2pELENBQUM7SUFNSixzQkFBSSx1Q0FBUTtRQUpaOztZQUVJO2FBRUo7WUFDRSxPQUFPLElBQUksQ0FBQyxTQUFTLENBQUM7UUFDeEIsQ0FBQzs7O09BQUE7SUFNRCxzQkFBSSxxQ0FBTTtRQUpWOztZQUVJO2FBRUo7WUFDRSxPQUFPLElBQUksQ0FBQyxPQUFPLENBQUM7UUFDdEIsQ0FBQzs7O09BQUE7SUFFRCx1Q0FBVyxHQUFYLFVBQVksUUFBK0IsRUFBRSxNQUEyQjtRQUE1RCx5QkFBQSxFQUFBLFdBQWlCLElBQUksQ0FBQyxTQUFTO1FBQUUsdUJBQUEsRUFBQSxTQUFlLElBQUksQ0FBQyxPQUFPO1FBQ3RFLElBQUksQ0FBQyxTQUFTLEdBQUcsUUFBUSxDQUFDO1FBQzFCLElBQUksQ0FBQyxPQUFPLEdBQUcsTUFBTSxDQUFDO1FBQ3RCLElBQUksQ0FBQyxZQUFZLENBQUMsSUFBSSxDQUFDLEVBQUUsUUFBUSxFQUFFLElBQUksQ0FBQyxTQUFTLEVBQUUsTUFBTSxFQUFFLElBQUksQ0FBQyxPQUFPLEVBQUUsQ0FBQyxDQUFDO0lBQzdFLENBQUM7O2dCQXhCa0MsSUFBSSx1QkFBcEMsTUFBTSxTQUFDLElBQUk7Z0JBQ21CLElBQUksdUJBQWxDLE1BQU0sU0FBQyxJQUFJOztJQUxILGlCQUFpQjtRQUQ3QixVQUFVLEVBQUU7UUFLUixXQUFBLE1BQU0sQ0FBQyxJQUFJLENBQUMsQ0FBQTtRQUNaLFdBQUEsTUFBTSxDQUFDLElBQUksQ0FBQyxDQUFBO09BTEosaUJBQWlCLENBNkI3QjtJQUFELHdCQUFDO0NBQUEsQUE3QkQsSUE2QkM7U0E3QlksaUJBQWlCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSwgSW5qZWN0LCBJbmplY3Rpb25Ub2tlbiB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBSYW5nZSB9IGZyb20gJy4uL21vZGVsL21vZGVsJztcclxuaW1wb3J0IHsgU3ViamVjdCB9IGZyb20gJ3J4anMnO1xyXG4vKiBpbXBvcnQgeyBEQVRFIH0gZnJvbSAnLi4vbmd4LWRycC5tb2R1bGUnOyAqL1xyXG5cclxuZXhwb3J0IGNvbnN0IERBVEUgPSBuZXcgSW5qZWN0aW9uVG9rZW48RGF0ZT4oJ2RhdGUnKTtcclxuXHJcbkBJbmplY3RhYmxlKClcclxuZXhwb3J0IGNsYXNzIFJhbmdlU3RvcmVTZXJ2aWNlIHtcclxuICByYW5nZVVwZGF0ZSQ6IFN1YmplY3Q8UmFuZ2U+ID0gbmV3IFN1YmplY3Q8UmFuZ2U+KCk7XHJcblxyXG4gIGNvbnN0cnVjdG9yKFxyXG4gICAgQEluamVjdChEQVRFKSBwcml2YXRlIF9mcm9tRGF0ZTogRGF0ZSxcclxuICAgIEBJbmplY3QoREFURSkgcHJpdmF0ZSBfdG9EYXRlOiBEYXRlXHJcbiAgKSB7fVxyXG5cclxuICAvKiBzZXQgZnJvbURhdGUoZnJvbURhdGU6RGF0ZSkge1xyXG4gICAgdGhpcy5fZnJvbURhdGUgPSBmcm9tRGF0ZTtcclxuICB9ICovXHJcblxyXG4gIGdldCBmcm9tRGF0ZSgpOiBEYXRlIHtcclxuICAgIHJldHVybiB0aGlzLl9mcm9tRGF0ZTtcclxuICB9XHJcblxyXG4gIC8qIHNldCB0b0RhdGUodG9EYXRlOkRhdGUpIHtcclxuICAgIHRoaXMuX3RvRGF0ZSA9IHRvRGF0ZTtcclxuICB9ICovXHJcblxyXG4gIGdldCB0b0RhdGUoKTogRGF0ZSB7XHJcbiAgICByZXR1cm4gdGhpcy5fdG9EYXRlO1xyXG4gIH1cclxuXHJcbiAgdXBkYXRlUmFuZ2UoZnJvbURhdGU6IERhdGUgPSB0aGlzLl9mcm9tRGF0ZSwgdG9EYXRlOiBEYXRlID0gdGhpcy5fdG9EYXRlKSB7XHJcbiAgICB0aGlzLl9mcm9tRGF0ZSA9IGZyb21EYXRlO1xyXG4gICAgdGhpcy5fdG9EYXRlID0gdG9EYXRlO1xyXG4gICAgdGhpcy5yYW5nZVVwZGF0ZSQubmV4dCh7IGZyb21EYXRlOiB0aGlzLl9mcm9tRGF0ZSwgdG9EYXRlOiB0aGlzLl90b0RhdGUgfSk7XHJcbiAgfVxyXG59XHJcbiJdfQ==