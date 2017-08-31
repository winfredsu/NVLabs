"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var platform_browser_1 = require("@angular/platform-browser");
var app_routing_module_1 = require("./app-routing.module");
var core_2 = require("@agm/core");
var affix_directive_1 = require("./affix.directive");
var app_component_1 = require("./app.component");
var home_component_1 = require("./home/home.component");
var platform_component_1 = require("./platform/platform.component");
var simulator_component_1 = require("./simulator/simulator.component");
var showcase_component_1 = require("./showcase/showcase.component");
var explore_component_1 = require("./explore/explore.component");
var about_component_1 = require("./about/about.component");
var breath_monitor_component_1 = require("./showcase/breath-monitor/breath-monitor.component");
var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        core_1.NgModule({
            imports: [
                platform_browser_1.BrowserModule,
                app_routing_module_1.AppRoutingModule,
                core_2.AgmCoreModule.forRoot({
                    apiKey: 
                })
            ],
            declarations: [
                affix_directive_1.AffixDirective,
                app_component_1.AppComponent,
                home_component_1.HomeComponent,
                platform_component_1.PlatformComponent,
                platform_component_1.PlatformOverviewComponent,
                platform_component_1.PlatformTechspecsComponent,
                platform_component_1.PlatformDownloadsComponent,
                platform_component_1.PlatformGettingStartedComponent,
                simulator_component_1.SimulatorComponent,
                simulator_component_1.SimulatorOverviewComponent,
                simulator_component_1.SimulatorGettingStartedComponent,
                simulator_component_1.SimulatorDocumentationComponent,
                simulator_component_1.SimulatorExamplesComponent,
                showcase_component_1.ShowcaseComponent,
                explore_component_1.ExploreComponent,
                about_component_1.AboutComponent,
                breath_monitor_component_1.BreathMonitorComponent
            ],
            bootstrap: [app_component_1.AppComponent]
        })
    ], AppModule);
    return AppModule;
}());
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map