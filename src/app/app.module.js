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
var animations_1 = require("@angular/platform-browser/animations");
var app_routing_module_1 = require("./app-routing.module");
var core_2 = require("@agm/core");
var material_1 = require("@angular/material");
var affix_directive_1 = require("./affix.directive");
var app_component_1 = require("./app.component");
var home_component_1 = require("./home/home.component");
var platform_component_1 = require("./platform/platform.component");
var simulator_component_1 = require("./simulator/simulator.component");
var showcase_component_1 = require("./showcase/showcase.component");
var explore_component_1 = require("./explore/explore.component");
var about_component_1 = require("./about/about.component");
var terms_component_1 = require("./terms/terms.component");
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        core_1.NgModule({
            imports: [
                material_1.MdDialogModule,
                platform_browser_1.BrowserModule,
                app_routing_module_1.AppRoutingModule,
                animations_1.BrowserAnimationsModule,
                core_2.AgmCoreModule.forRoot({
                    apiKey: 'AIzaSyDFquj9AnLZG3zPXBPdovChfCxujtu2V8E'
                })
            ],
            declarations: [
                affix_directive_1.AffixDirective,
                app_component_1.AppComponent,
                home_component_1.HomeComponent,
                home_component_1.NVPOneMinuteDialog,
                platform_component_1.PlatformComponent,
                platform_component_1.PlatformOverviewComponent,
                platform_component_1.PlatformTechspecsComponent,
                platform_component_1.PlatformDownloadsComponent,
                platform_component_1.PlatformGettingStartedComponent,
                simulator_component_1.SimulatorComponent,
                simulator_component_1.SimulatorOverviewComponent,
                simulator_component_1.SimulatorGettingStartedComponent,
                simulator_component_1.SimulatorConceptAndStructureComponent,
                simulator_component_1.SimulatorExampleComponent,
                showcase_component_1.ShowcaseComponent,
                showcase_component_1.SelfPoweredWearablesComponent,
                showcase_component_1.TransientComputingComponent,
                showcase_component_1.LowPowerIoTComponent,
                explore_component_1.ExploreComponent,
                explore_component_1.NVPFundamentalsComponent,
                explore_component_1.RecommendedReadingComponent,
                about_component_1.AboutComponent,
                terms_component_1.TermsComponent,
            ],
            providers: [],
            entryComponents: [
                home_component_1.NVPOneMinuteDialog
            ],
            bootstrap: [app_component_1.AppComponent]
        })
    ], AppModule);
    return AppModule;
}());
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map