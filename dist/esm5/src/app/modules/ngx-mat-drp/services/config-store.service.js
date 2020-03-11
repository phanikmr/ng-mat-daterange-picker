import { __assign, __decorate } from "tslib";
import { Injectable } from '@angular/core';
var ConfigStoreService = /** @class */ (function () {
    function ConfigStoreService() {
        this.defaultOptions = {
            excludeWeekends: false,
            animation: true,
            locale: 'en-US',
            fromMinMax: { fromDate: null, toDate: null },
            toMinMax: { fromDate: null, toDate: null }
        };
    }
    Object.defineProperty(ConfigStoreService.prototype, "ngxDrpOptions", {
        get: function () {
            return this._ngxDrpOptions;
        },
        set: function (options) {
            this._ngxDrpOptions = __assign(__assign({}, this.defaultOptions), options);
        },
        enumerable: true,
        configurable: true
    });
    ConfigStoreService = __decorate([
        Injectable()
    ], ConfigStoreService);
    return ConfigStoreService;
}());
export { ConfigStoreService };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29uZmlnLXN0b3JlLnNlcnZpY2UuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9uZy1tYXQtZGF0ZXJhbmdlLXBpY2tlci8iLCJzb3VyY2VzIjpbInNyYy9hcHAvbW9kdWxlcy9uZ3gtbWF0LWRycC9zZXJ2aWNlcy9jb25maWctc3RvcmUuc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUkzQztJQVVFO1FBUlEsbUJBQWMsR0FBRztZQUN2QixlQUFlLEVBQUUsS0FBSztZQUN0QixTQUFTLEVBQUUsSUFBSTtZQUNmLE1BQU0sRUFBRSxPQUFPO1lBQ2YsVUFBVSxFQUFFLEVBQUUsUUFBUSxFQUFFLElBQUksRUFBRSxNQUFNLEVBQUUsSUFBSSxFQUFFO1lBQzVDLFFBQVEsRUFBRSxFQUFFLFFBQVEsRUFBRSxJQUFJLEVBQUUsTUFBTSxFQUFFLElBQUksRUFBRTtTQUMzQyxDQUFDO0lBRWEsQ0FBQztJQUVoQixzQkFBSSw2Q0FBYTthQUFqQjtZQUNFLE9BQU8sSUFBSSxDQUFDLGNBQWMsQ0FBQztRQUM3QixDQUFDO2FBRUQsVUFBa0IsT0FBc0I7WUFDdEMsSUFBSSxDQUFDLGNBQWMseUJBQVEsSUFBSSxDQUFDLGNBQWMsR0FBSyxPQUFPLENBQUUsQ0FBQztRQUMvRCxDQUFDOzs7T0FKQTtJQWRVLGtCQUFrQjtRQUQ5QixVQUFVLEVBQUU7T0FDQSxrQkFBa0IsQ0FtQjlCO0lBQUQseUJBQUM7Q0FBQSxBQW5CRCxJQW1CQztTQW5CWSxrQkFBa0IiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IE5neERycE9wdGlvbnMgfSBmcm9tICcuLi9tb2RlbC9tb2RlbCc7XHJcblxyXG5ASW5qZWN0YWJsZSgpXHJcbmV4cG9ydCBjbGFzcyBDb25maWdTdG9yZVNlcnZpY2Uge1xyXG4gIHByaXZhdGUgX25neERycE9wdGlvbnM6IE5neERycE9wdGlvbnM7XHJcbiAgcHJpdmF0ZSBkZWZhdWx0T3B0aW9ucyA9IHtcclxuICAgIGV4Y2x1ZGVXZWVrZW5kczogZmFsc2UsXHJcbiAgICBhbmltYXRpb246IHRydWUsXHJcbiAgICBsb2NhbGU6ICdlbi1VUycsXHJcbiAgICBmcm9tTWluTWF4OiB7IGZyb21EYXRlOiBudWxsLCB0b0RhdGU6IG51bGwgfSxcclxuICAgIHRvTWluTWF4OiB7IGZyb21EYXRlOiBudWxsLCB0b0RhdGU6IG51bGwgfVxyXG4gIH07XHJcblxyXG4gIGNvbnN0cnVjdG9yKCkge31cclxuXHJcbiAgZ2V0IG5neERycE9wdGlvbnMoKTogTmd4RHJwT3B0aW9ucyB7XHJcbiAgICByZXR1cm4gdGhpcy5fbmd4RHJwT3B0aW9ucztcclxuICB9XHJcblxyXG4gIHNldCBuZ3hEcnBPcHRpb25zKG9wdGlvbnM6IE5neERycE9wdGlvbnMpIHtcclxuICAgIHRoaXMuX25neERycE9wdGlvbnMgPSB7IC4uLnRoaXMuZGVmYXVsdE9wdGlvbnMsIC4uLm9wdGlvbnMgfTtcclxuICB9XHJcbn1cclxuIl19