import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AgmCoreModule } from '@agm/core';

import { AffixDirective } from './affix.directive';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { PlatformComponent, PlatformOverviewComponent, PlatformTechspecsComponent, PlatformGettingStartedComponent, PlatformDownloadsComponent } from './platform/platform.component';
import { SimulatorComponent, SimulatorOverviewComponent, SimulatorGettingStartedComponent, SimulatorConceptAndStructureComponent, SimulatorExampleComponent } from './simulator/simulator.component';
import { ShowcaseComponent, SelfPoweredWearablesComponent, TransientComputingComponent, LowPowerIoTComponent } from './showcase/showcase.component';
import { ExploreComponent, RecommendedReadingComponent, NVPFundamentalsComponent } from './explore/explore.component';
import { AboutComponent } from './about/about.component';
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
		SimulatorConceptAndStructureComponent,
		SimulatorExampleComponent,
		ShowcaseComponent,
		SelfPoweredWearablesComponent,
		TransientComputingComponent,
		LowPowerIoTComponent,
		ExploreComponent,
		NVPFundamentalsComponent,
		RecommendedReadingComponent,
		AboutComponent,
		TermsComponent,
	],
	bootstrap: [AppComponent]
})
export class AppModule {}
