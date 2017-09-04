var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AgmCoreModule } from '@agm/core';
import { AffixDirective } from './affix.directive';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { PlatformComponent, PlatformOverviewComponent, PlatformTechspecsComponent, PlatformGettingStartedComponent, PlatformDownloadsComponent } from './platform/platform.component';
import { SimulatorComponent, SimulatorOverviewComponent, SimulatorGettingStartedComponent, SimulatorDocumentationComponent, SimulatorExamplesComponent } from './simulator/simulator.component';
import { ShowcaseComponent } from './showcase/showcase.component';
import { ExploreComponent } from './explore/explore.component';
import { RecommendedReadingComponent } from './explore/recommended-reading/recommended-reading.component';
import { AboutComponent } from './about/about.component';
import { BreathMonitorComponent } from './showcase/breath-monitor/breath-monitor.component';
import { TermsComponent } from './terms/terms.component';
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        NgModule({
            imports: [
                BrowserModule,
                AppRoutingModule,
                AgmCoreModule.forRoot({
                    apiKey: 'AIzaSyDFquj9AnLZG3zPXBPdovChfCxujtu2V8E'
                })
            ],
            declarations: [
                AffixDirective,
                AppComponent,
                HomeComponent,
                PlatformComponent,
                PlatformOverviewComponent,
                PlatformTechspecsComponent,
                PlatformDownloadsComponent,
                PlatformGettingStartedComponent,
                SimulatorComponent,
                SimulatorOverviewComponent,
                SimulatorGettingStartedComponent,
                SimulatorDocumentationComponent,
                SimulatorExamplesComponent,
                ShowcaseComponent,
                ExploreComponent,
                RecommendedReadingComponent,
                AboutComponent,
                BreathMonitorComponent,
                TermsComponent,
            ],
            bootstrap: [AppComponent]
        })
    ], AppModule);
    return AppModule;
}());
export { AppModule };
//# sourceMappingURL=app.module.js.map