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
var SimulatorComponent = (function () {
    function SimulatorComponent(title) {
        title.setTitle('Simulator | NVLabs');
    }
    SimulatorComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'nvlabs-simulator',
            templateUrl: './simulator.component.html'
        }),
        __metadata("design:paramtypes", [platform_browser_1.Title])
    ], SimulatorComponent);
    return SimulatorComponent;
}());
exports.SimulatorComponent = SimulatorComponent;
var SimulatorOverviewComponent = (function () {
    function SimulatorOverviewComponent() {
    }
    SimulatorOverviewComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'nvlabs-simulator-overview',
            templateUrl: './simulator-overview.component.html'
        })
    ], SimulatorOverviewComponent);
    return SimulatorOverviewComponent;
}());
exports.SimulatorOverviewComponent = SimulatorOverviewComponent;
var SimulatorGettingStartedComponent = (function () {
    function SimulatorGettingStartedComponent() {
    }
    SimulatorGettingStartedComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'nvlabs-simulator-getting-started',
            templateUrl: './simulator-getting-started.component.html'
        })
    ], SimulatorGettingStartedComponent);
    return SimulatorGettingStartedComponent;
}());
exports.SimulatorGettingStartedComponent = SimulatorGettingStartedComponent;
var SimulatorDocumentationComponent = (function () {
    function SimulatorDocumentationComponent() {
    }
    SimulatorDocumentationComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'nvlabs-simulator-documentation',
            templateUrl: './simulator-documentation.component.html'
        })
    ], SimulatorDocumentationComponent);
    return SimulatorDocumentationComponent;
}());
exports.SimulatorDocumentationComponent = SimulatorDocumentationComponent;
var SimulatorExamplesComponent = (function () {
    function SimulatorExamplesComponent() {
    }
    SimulatorExamplesComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'nvlabs-simulator-examples',
            templateUrl: './simulator-examples.component.html'
        })
    ], SimulatorExamplesComponent);
    return SimulatorExamplesComponent;
}());
exports.SimulatorExamplesComponent = SimulatorExamplesComponent;
//# sourceMappingURL=simulator.component.js.map