import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';

import { AffixDirective } from './affix.directive';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { PlatformComponent, PlatformOverviewComponent, PlatformTechspecsComponent, PlatformGettingStartedComponent, PlatformDownloadsComponent } from './platform/platform.component';
import { SimulatorComponent, SimulatorOverviewComponent, SimulatorGettingStartedComponent, SimulatorDocumentationComponent, SimulatorExamplesComponent } from './simulator/simulator.component';
import { ShowcaseComponent } from './showcase/showcase.component';
import { ExploreComponent } from './explore/explore.component';
import { AboutComponent } from './about/about.component';
import { BreathMonitorComponent } from './showcase/breath-monitor/breath-monitor.component';

@NgModule({
	imports: [
		BrowserModule,
		AppRoutingModule
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
		AboutComponent,
		BreathMonitorComponent
	],
	bootstrap: [AppComponent]
})
export class AppModule {}
