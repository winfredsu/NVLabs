import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
	moduleId: module.id,
	selector: 'nvlabs-about',
	templateUrl: './about.component.html'
})
export class AboutComponent implements OnInit {
	lat: number = 40.005217;
	lng: number = 116.336007;
	zoom: number = 13;
  styleArray = [{
      featureType: "all",
      stylers: [{
          saturation: -80
      }]
  }, {
      featureType: "road.arterial",
      elementType: "geometry",
      stylers: [{
          hue: "#00ffee"
      }, {
          saturation: 50
      }]
  }, {
      featureType: "poi.business",
      elementType: "labels",
      stylers: [{
          visibility: "off"
      }]
  }];

	constructor(title: Title) {
		title.setTitle('About | NVLabs');
	}

	ngOnInit(): void {
		$("#sponsor-list").owlCarousel({
			itemsDesktop: [1200,4],
			itemsDesktopSmall: [991,3],
			itemsTablet: [767,3],
			itemsTabletSmall: [625,2],
			itemsMobile: [479,2]
		});
	}
}

