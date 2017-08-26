import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';

import { AffixDirective } from './affix.directive';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { PlatformComponent } from './platform/platform.component';
import { SimulatorComponent } from './simulator/simulator.component';

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
		SimulatorComponent
	],
	bootstrap: [AppComponent]
})
export class AppModule {}
