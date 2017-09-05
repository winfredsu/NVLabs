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
var router_1 = require("@angular/router");
var platform_browser_1 = require("@angular/platform-browser");
var ShowcaseComponent = /** @class */ (function () {
    function ShowcaseComponent(router, title) {
        if (router.url === '/showcase') {
            title.setTitle('Showcase | NVLabs');
        }
    }
    ShowcaseComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'nvlabs-showcase',
            templateUrl: './showcase.component.html'
        }),
        __metadata("design:paramtypes", [router_1.Router, platform_browser_1.Title])
    ], ShowcaseComponent);
    return ShowcaseComponent;
}());
exports.ShowcaseComponent = ShowcaseComponent;
var SelfPoweredWearablesComponent = /** @class */ (function () {
    function SelfPoweredWearablesComponent() {
    }
    SelfPoweredWearablesComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'nvlabs-self-powered-wearables',
            templateUrl: './self-powered-wearables.component.html'
        })
    ], SelfPoweredWearablesComponent);
    return SelfPoweredWearablesComponent;
}());
exports.SelfPoweredWearablesComponent = SelfPoweredWearablesComponent;
var TransientComputingComponent = /** @class */ (function () {
    function TransientComputingComponent() {
    }
    TransientComputingComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'nvlabs-transient-computing',
            templateUrl: './transient-computing.component.html'
        })
    ], TransientComputingComponent);
    return TransientComputingComponent;
}());
exports.TransientComputingComponent = TransientComputingComponent;
var LowPowerIoTComponent = /** @class */ (function () {
    function LowPowerIoTComponent() {
    }
    LowPowerIoTComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'nvlabs-low-power-iot',
            templateUrl: './low-power-iot.component.html'
        })
    ], LowPowerIoTComponent);
    return LowPowerIoTComponent;
}());
exports.LowPowerIoTComponent = LowPowerIoTComponent;
//# sourceMappingURL=showcase.component.js.map