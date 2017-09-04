import { Directive, ElementRef, HostListener, Input, Inject } from '@angular/core';
import { DOCUMENT } from '@angular/platform-browser';

@Directive({ selector: '[tabOnClickScroll]' })
export class TabOnClickScroll {
	constructor(
		@Inject(DOCUMENT) private document: Document,
		private el: ElementRef) {}

	@Input('tabOnClickScroll') scrollY: number;

	@HostListener('click', [])
	onClick() {
		if (this.document.body.scrollTop < this.scrollY || 
			this.el.nativeElement.classList.contains('active')) {
		} else {
			window.scrollTo(0, this.scrollY);
		}
	}
}
