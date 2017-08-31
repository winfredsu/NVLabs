import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { PlatformComponent, PlatformOverviewComponent, PlatformTechspecsComponent, PlatformGettingStartedComponent, PlatformDownloadsComponent } from './platform/platform.component';
import { SimulatorComponent, SimulatorOverviewComponent, SimulatorGettingStartedComponent, SimulatorDocumentationComponent, SimulatorExamplesComponent } from './simulator/simulator.component';
import { ShowcaseComponent } from './showcase/showcase.component';
import { ExploreComponent } from './explore/explore.component';
import { AboutComponent } from './about/about.component';
import { BreathMonitorComponent } from './showcase/breath-monitor/breath-monitor.component';

const routes: Routes = [
	{ path: '', redirectTo: '/home', pathMatch: 'full' },
	{ path: 'home', component: HomeComponent },
	{ path: 'platform', component: PlatformComponent,
		children: [
			{ path: '', redirectTo: 'overview', pathMatch: 'full' },
			{ path: 'overview', component: PlatformOverviewComponent },
			{ path: 'getting-started', component: PlatformGettingStartedComponent },
			{ path: 'techspecs', component: PlatformTechspecsComponent },
			{ path: 'downloads', component: PlatformDownloadsComponent }
		]	
	},
	{ path: 'simulator', component: SimulatorComponent,
		children: [
			{ path: '', redirectTo: 'overview', pathMatch: 'full' },
			{ path: 'overview', component: SimulatorOverviewComponent },
			{ path: 'getting-started', component: SimulatorGettingStartedComponent },
			{ path: 'documentation', component: SimulatorDocumentationComponent },
			{ path: 'examples', component: SimulatorExamplesComponent }	
		]
	},
	{ path: 'showcase', component: ShowcaseComponent },
	{ path: 'showcase/breath-monitor', component: BreathMonitorComponent },
	{ path: 'explore', component: ExploreComponent },
	{ path: 'about', component: AboutComponent }
];

@NgModule({
	imports: [ RouterModule.forRoot(routes) ],
	exports: [ RouterModule ]
})
export class AppRoutingModule {}


