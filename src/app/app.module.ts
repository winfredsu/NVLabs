import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';

import { AffixDirective } from './affix.directive';
import { TabOnClickScroll } from './tabOnClickScroll.directive';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { PlatformComponent } from './platform/platform.component';
import { SimulatorComponent } from './simulator/simulator.component';
import { ShowcaseComponent } from './showcase/showcase.component';
import { BreathMonitorComponent } from './showcase/breath-monitor/breath-monitor.component';

@NgModule({
	imports: [
		BrowserModule,
		AppRoutingModule
	],
	declarations: [
		AffixDirective,
		TabOnClickScroll,
		AppComponent,
		HomeComponent,
		PlatformComponent,
		SimulatorComponent,
		ShowcaseComponent,
		BreathMonitorComponent
	],
	bootstrap: [AppComponent]
})
export class AppModule {}
