import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Title } from '@angular/platform-browser';

@Component({
	moduleId: module.id,
	selector: 'nvlabs-showcase',
	templateUrl: './showcase.component.html'
})
export class ShowcaseComponent {
	constructor( router: Router, title: Title ) {
		if ( router.url === '/showcase') {
			title.setTitle('Showcase | NVLabs');
		}
	}	
}
