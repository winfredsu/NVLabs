"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var home_component_1 = require("./home/home.component");
var platform_component_1 = require("./platform/platform.component");
var simulator_component_1 = require("./simulator/simulator.component");
var showcase_component_1 = require("./showcase/showcase.component");
var explore_component_1 = require("./explore/explore.component");
var about_component_1 = require("./about/about.component");
var breath_monitor_component_1 = require("./showcase/breath-monitor/breath-monitor.component");
var routes = [
    { path: '', redirectTo: '/home', pathMatch: 'full' },
    { path: 'home', component: home_component_1.HomeComponent },
    { path: 'platform', component: platform_component_1.PlatformComponent,
        children: [
            { path: '', redirectTo: 'overview', pathMatch: 'full' },
            { path: 'overview', component: platform_component_1.PlatformOverviewComponent },
            { path: 'getting-started', component: platform_component_1.PlatformGettingStartedComponent },
            { path: 'techspecs', component: platform_component_1.PlatformTechspecsComponent },
            { path: 'downloads', component: platform_component_1.PlatformDownloadsComponent }
        ]
    },
    { path: 'simulator', component: simulator_component_1.SimulatorComponent,
        children: [
            { path: '', redirectTo: 'overview', pathMatch: 'full' },
            { path: 'overview', component: simulator_component_1.SimulatorOverviewComponent },
            { path: 'getting-started', component: simulator_component_1.SimulatorGettingStartedComponent },
            { path: 'documentation', component: simulator_component_1.SimulatorDocumentationComponent },
            { path: 'examples', component: simulator_component_1.SimulatorExamplesComponent }
        ]
    },
    { path: 'showcase', component: showcase_component_1.ShowcaseComponent },
    { path: 'showcase/breath-monitor', component: breath_monitor_component_1.BreathMonitorComponent },
    { path: 'explore', component: explore_component_1.ExploreComponent },
    { path: 'about', component: about_component_1.AboutComponent }
];
var AppRoutingModule = (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        core_1.NgModule({
            imports: [router_1.RouterModule.forRoot(routes)],
            exports: [router_1.RouterModule]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());
exports.AppRoutingModule = AppRoutingModule;
//# sourceMappingURL=app-routing.module.js.map