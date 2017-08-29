import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Title } from '@angular/platform-browser';

@Component({
	moduleId: module.id,
	selector: 'nvlabs-explore',
	templateUrl: './explore.component.html'
})
export class ExploreComponent {
	constructor(router: Router, title: Title) {
		if(router.url === '/explore') {
			title.setTitle('Explore | NVLabs');
		}
}
