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

@Component({
	moduleId: module.id,
	selector: 'nvlabs-simulator-overview',
	templateUrl: './simulator-overview.component.html'
})
export class SimulatorOverviewComponent {

}

@Component({
	moduleId: module.id,
	selector: 'nvlabs-simulator-getting-started',
	templateUrl: './simulator-getting-started.component.html'
})
export class SimulatorGettingStartedComponent {

}

@Component({
	moduleId: module.id,
	selector: 'nvlabs-simulator-documentation',
	templateUrl: './simulator-documentation.component.html'
})
export class SimulatorDocumentationComponent {

}

@Component({
	moduleId: module.id,
	selector: 'nvlabs-simulator-examples',
	templateUrl: './simulator-examples.component.html'
})
export class SimulatorExamplesComponent {

}
