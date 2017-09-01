import { Component } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
	moduleId: module.id,
	selector: 'nvlabs-recommended-reading',
	templateUrl: './recommended-reading.component.html'
})
export class RecommendedReadingComponent {
	constructor(title:Title){
		title.setTitle('Recommended Reading | NVLabs');
	}
}
