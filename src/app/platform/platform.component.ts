import { Component } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
	moduleId: module.id,
	selector: 'nvlabs-platform',
	templateUrl: './platform.component.html'
})
export class PlatformComponent {
	constructor(title: Title) {
		title.setTitle('Platform | NVLabs');
	}
}

@Component({
	moduleId: module.id,
	selector: 'nvlabs-platform-overview',
	templateUrl: './platform-overview.component.html'
})
export class PlatformOverviewComponent {

}

@Component({
	moduleId: module.id,
	selector: 'nvlabs-platform-techspecs',
	templateUrl: './platform-techspecs.component.html'
})
export class PlatformTechspecsComponent {

}

@Component({
	moduleId: module.id,
	selector: 'nvlabs-platform-getting-started',
	templateUrl: './platform-getting-started.component.html'
})
export class PlatformGettingStartedComponent {

}

@Component({
	moduleId: module.id,
	selector: 'nvlabs-platform-downloads',
	templateUrl: './platform-downloads.component.html'
})
export class PlatformDownloadsComponent {

}
