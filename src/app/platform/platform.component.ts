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
