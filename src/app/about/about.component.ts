import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
	moduleId: module.id,
	selector: 'nvlabs-about',
	templateUrl: './about.component.html'
})
export class AboutComponent implements OnInit {
	constructor(title: Title) {
		title.setTitle('About | NVLabs');
	}

	ngOnInit(): void {
		$("#sponsor-list").owlCarousel({
			items: 4,
			itemsDesktop: [1200,4],
			itemsDesktopSmall: [991,3],
			itemsTablet: [767,3],
			itemsTabletSmall: [625,2],
			itemsMobile: [479,2]
		});
	}
}

