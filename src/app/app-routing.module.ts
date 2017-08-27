import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { PlatformComponent } from './platform/platform.component';
import { SimulatorComponent } from './simulator/simulator.component';
import { ShowcaseComponent } from './showcase/showcase.component';
import { BreathMonitorComponent } from './showcase/breath-monitor/breath-monitor.component';

const routes: Routes = [
	{ path: '', redirectTo: '/home', pathMatch: 'full' },
	{ path: 'home', component: HomeComponent },
	{ path: 'platform', component: PlatformComponent },
	{ path: 'simulator', component: SimulatorComponent },
	{ path: 'showcase', component: ShowcaseComponent },
	{ path: 'showcase/breath-monitor', component: BreathMonitorComponent }
];

@NgModule({
	imports: [ RouterModule.forRoot(routes) ],
	exports: [ RouterModule ]
})
export class AppRoutingModule {}


