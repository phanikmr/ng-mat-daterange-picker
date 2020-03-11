import { __decorate } from "tslib";
import { Injectable } from '@angular/core';
let ConfigStoreService = class ConfigStoreService {
    constructor() {
        this.defaultOptions = {
            excludeWeekends: false,
            animation: true,
            locale: 'en-US',
            fromMinMax: { fromDate: null, toDate: null },
            toMinMax: { fromDate: null, toDate: null }
        };
    }
    get ngxDrpOptions() {
        return this._ngxDrpOptions;
    }
    set ngxDrpOptions(options) {
        this._ngxDrpOptions = Object.assign(Object.assign({}, this.defaultOptions), options);
    }
};
ConfigStoreService = __decorate([
    Injectable()
], ConfigStoreService);
export { ConfigStoreService };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29uZmlnLXN0b3JlLnNlcnZpY2UuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9uZy1tYXQtZGF0ZXJhbmdlLXBpY2tlci8iLCJzb3VyY2VzIjpbInNyYy9hcHAvbW9kdWxlcy9uZ3gtbWF0LWRycC9zZXJ2aWNlcy9jb25maWctc3RvcmUuc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUkzQyxJQUFhLGtCQUFrQixHQUEvQixNQUFhLGtCQUFrQjtJQVU3QjtRQVJRLG1CQUFjLEdBQUc7WUFDdkIsZUFBZSxFQUFFLEtBQUs7WUFDdEIsU0FBUyxFQUFFLElBQUk7WUFDZixNQUFNLEVBQUUsT0FBTztZQUNmLFVBQVUsRUFBRSxFQUFFLFFBQVEsRUFBRSxJQUFJLEVBQUUsTUFBTSxFQUFFLElBQUksRUFBRTtZQUM1QyxRQUFRLEVBQUUsRUFBRSxRQUFRLEVBQUUsSUFBSSxFQUFFLE1BQU0sRUFBRSxJQUFJLEVBQUU7U0FDM0MsQ0FBQztJQUVhLENBQUM7SUFFaEIsSUFBSSxhQUFhO1FBQ2YsT0FBTyxJQUFJLENBQUMsY0FBYyxDQUFDO0lBQzdCLENBQUM7SUFFRCxJQUFJLGFBQWEsQ0FBQyxPQUFzQjtRQUN0QyxJQUFJLENBQUMsY0FBYyxtQ0FBUSxJQUFJLENBQUMsY0FBYyxHQUFLLE9BQU8sQ0FBRSxDQUFDO0lBQy9ELENBQUM7Q0FDRixDQUFBO0FBbkJZLGtCQUFrQjtJQUQ5QixVQUFVLEVBQUU7R0FDQSxrQkFBa0IsQ0FtQjlCO1NBbkJZLGtCQUFrQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgTmd4RHJwT3B0aW9ucyB9IGZyb20gJy4uL21vZGVsL21vZGVsJztcclxuXHJcbkBJbmplY3RhYmxlKClcclxuZXhwb3J0IGNsYXNzIENvbmZpZ1N0b3JlU2VydmljZSB7XHJcbiAgcHJpdmF0ZSBfbmd4RHJwT3B0aW9uczogTmd4RHJwT3B0aW9ucztcclxuICBwcml2YXRlIGRlZmF1bHRPcHRpb25zID0ge1xyXG4gICAgZXhjbHVkZVdlZWtlbmRzOiBmYWxzZSxcclxuICAgIGFuaW1hdGlvbjogdHJ1ZSxcclxuICAgIGxvY2FsZTogJ2VuLVVTJyxcclxuICAgIGZyb21NaW5NYXg6IHsgZnJvbURhdGU6IG51bGwsIHRvRGF0ZTogbnVsbCB9LFxyXG4gICAgdG9NaW5NYXg6IHsgZnJvbURhdGU6IG51bGwsIHRvRGF0ZTogbnVsbCB9XHJcbiAgfTtcclxuXHJcbiAgY29uc3RydWN0b3IoKSB7fVxyXG5cclxuICBnZXQgbmd4RHJwT3B0aW9ucygpOiBOZ3hEcnBPcHRpb25zIHtcclxuICAgIHJldHVybiB0aGlzLl9uZ3hEcnBPcHRpb25zO1xyXG4gIH1cclxuXHJcbiAgc2V0IG5neERycE9wdGlvbnMob3B0aW9uczogTmd4RHJwT3B0aW9ucykge1xyXG4gICAgdGhpcy5fbmd4RHJwT3B0aW9ucyA9IHsgLi4udGhpcy5kZWZhdWx0T3B0aW9ucywgLi4ub3B0aW9ucyB9O1xyXG4gIH1cclxufVxyXG4iXX0=