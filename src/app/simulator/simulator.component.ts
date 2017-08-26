import { Component } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
	moduleId: module.id,
	selector: 'nvlabs-simulator',
	templateUrl: './simulator.component.html'
})
export class SimulatorComponent {
	constructor(title: Title) {
		title.setTitle('Simulator | NVLabs');
	}
}
