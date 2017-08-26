import { Component, OnInit, HostListener, Inject, Input, OnDestroy } from '@angular/core';
import { DOCUMENT, Title } from '@angular/platform-browser';
import { AppComponent } from '../app.component';

@Component({
	moduleId: module.id,
	selector: 'nvlabs-home',
	templateUrl: './home.component.html'
	// styleUrls: ['./app.component.css']	
})
export class HomeComponent implements OnInit, OnDestroy {
	constructor(
		@Inject(DOCUMENT) private document: Document,
		@Input('AppComponent') private appComponent: AppComponent, 
		private title: Title) {
		title.setTitle('NVLabs');
	}
	@HostListener('window:scroll', [])
	onWindowScroll() {
		if (this.document.body.scrollTop > 60) {
			// add a page-on-scroll class to header 
			//console.log($event);
			this.appComponent.addClass('page-on-scroll');
		} else {
			// remove page-on-scroll class 
			this.appComponent.removeClass('page-on-scroll');
		}
	}

	ngOnInit() {
		this.appComponent.removeClass('page-on-scroll');
	}

	ngOnDestroy() {
		this.appComponent.addClass('page-on-scroll');
	}
}
