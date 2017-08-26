import { Component, ElementRef, OnInit } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';

@Component({
	moduleId: module.id,
	selector: 'nvlabs-app',
	templateUrl: './app.component.html'
})
export class AppComponent implements OnInit {

	constructor(
		private el: ElementRef,
		private router: Router) {}

	public addClass(className: string) {
		this.el.nativeElement.classList.add(className);
	}

	public removeClass(className: string) {
		this.el.nativeElement.classList.remove(className);
	}

	ngOnInit() {
		this.addClass('page-on-scroll');
		this.router.events.subscribe((evt) => {
			if (!(evt instanceof NavigationEnd)) {
				return;
			}
			window.scrollTo(0, 0)
		});
	}
}
