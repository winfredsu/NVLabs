"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var platform_browser_1 = require("@angular/platform-browser");
var PlatformComponent = (function () {
    function PlatformComponent(title) {
        title.setTitle('Platform | NVLabs');
    }
    PlatformComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'nvlabs-platform',
            templateUrl: './platform.component.html'
        }),
        __metadata("design:paramtypes", [platform_browser_1.Title])
    ], PlatformComponent);
    return PlatformComponent;
}());
exports.PlatformComponent = PlatformComponent;
var PlatformOverviewComponent = (function () {
    function PlatformOverviewComponent() {
    }
    PlatformOverviewComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'nvlabs-platform-overview',
            templateUrl: './platform-overview.component.html'
        })
    ], PlatformOverviewComponent);
    return PlatformOverviewComponent;
}());
exports.PlatformOverviewComponent = PlatformOverviewComponent;
var PlatformTechspecsComponent = (function () {
    function PlatformTechspecsComponent() {
    }
    PlatformTechspecsComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'nvlabs-platform-techspecs',
            templateUrl: './platform-techspecs.component.html'
        })
    ], PlatformTechspecsComponent);
    return PlatformTechspecsComponent;
}());
exports.PlatformTechspecsComponent = PlatformTechspecsComponent;
var PlatformGettingStartedComponent = (function () {
    function PlatformGettingStartedComponent() {
    }
    PlatformGettingStartedComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'nvlabs-platform-getting-started',
            templateUrl: './platform-getting-started.component.html'
        })
    ], PlatformGettingStartedComponent);
    return PlatformGettingStartedComponent;
}());
exports.PlatformGettingStartedComponent = PlatformGettingStartedComponent;
var PlatformDownloadsComponent = (function () {
    function PlatformDownloadsComponent() {
    }
    PlatformDownloadsComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'nvlabs-platform-downloads',
            templateUrl: './platform-downloads.component.html'
        })
    ], PlatformDownloadsComponent);
    return PlatformDownloadsComponent;
}());
exports.PlatformDownloadsComponent = PlatformDownloadsComponent;
//# sourceMappingURL=platform.component.js.map