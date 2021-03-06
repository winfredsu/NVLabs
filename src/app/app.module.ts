import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AgmCoreModule } from '@agm/core';
import { MdDialogModule } from '@angular/material';

import { AffixDirective } from './affix.directive';

import { AppComponent } from './app.component';
import { HomeComponent, NVPOneMinuteDialog } from './home/home.component';
import { PlatformComponent, PlatformOverviewComponent, PlatformTechspecsComponent, PlatformGettingStartedComponent, PlatformDownloadsComponent, BuyNowDialog } from './platform/platform.component';
import { SimulatorComponent, SimulatorOverviewComponent, SimulatorGettingStartedComponent, SimulatorConceptAndStructureComponent, SimulatorExampleComponent } from './simulator/simulator.component';
import { ShowcaseComponent, SelfPoweredWearablesComponent, TransientComputingComponent, LowPowerIoTComponent } from './showcase/showcase.component';
import { ExploreComponent, RecommendedReadingComponent, NVPFundamentalsComponent } from './explore/explore.component';
import { AboutComponent } from './about/about.component';
import { TermsComponent } from './terms/terms.component';

@NgModule({
	imports: [
		MdDialogModule,
		BrowserModule,
		AppRoutingModule,
		BrowserAnimationsModule,
		AgmCoreModule.forRoot({
			apiKey: 'AIzaSyDFquj9AnLZG3zPXBPdovChfCxujtu2V8E' 
		})
	],
	declarations: [

		AffixDirective,
		AppComponent,
		HomeComponent,
		NVPOneMinuteDialog,	
		PlatformComponent,
		BuyNowDialog,
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
	providers: [
	],
	entryComponents: [
	NVPOneMinuteDialog,
	BuyNowDialog,
	],
	bootstrap: [AppComponent]
})
export class AppModule {}
