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

@NgModule({
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
export class AppModule {}
