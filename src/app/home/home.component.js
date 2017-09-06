var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
import { Component, HostListener, Inject, Input } from '@angular/core';
import { DOCUMENT, Title } from '@angular/platform-browser';
import { AppComponent } from '../app.component';
var HomeComponent = /** @class */ (function () {
    function HomeComponent(document, appComponent, title) {
        this.document = document;
        this.appComponent = appComponent;
        this.title = title;
        title.setTitle('NVLabs');
    }
    HomeComponent.prototype.onWindowScroll = function () {
        if (this.document.body.scrollTop > 60) {
            // add a page-on-scroll class to header 
            //console.log($event);
            this.appComponent.addClass('page-on-scroll');
        }
        else {
            // remove page-on-scroll class 
            this.appComponent.removeClass('page-on-scroll');
        }
    };
    HomeComponent.prototype.onResize = function (event) {
        this.height = event.target.innerHeight;
    };
    HomeComponent.prototype.ngOnInit = function () {
        this.appComponent.removeClass('page-on-scroll');
        this.height = window.innerHeight;
    };
    HomeComponent.prototype.ngOnDestroy = function () {
        this.appComponent.addClass('page-on-scroll');
    };
    __decorate([
        HostListener('window:scroll', []),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", void 0)
    ], HomeComponent.prototype, "onWindowScroll", null);
    __decorate([
        HostListener('window:resize', ['$event']),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object]),
        __metadata("design:returntype", void 0)
    ], HomeComponent.prototype, "onResize", null);
    HomeComponent = __decorate([
        Component({
            moduleId: module.id,
            selector: 'nvlabs-home',
            templateUrl: './home.component.html'
            // styleUrls: ['./app.component.css']	
        }),
        __param(0, Inject(DOCUMENT)),
        __param(1, Input('AppComponent')),
        __metadata("design:paramtypes", [Document,
            AppComponent,
            Title])
    ], HomeComponent);
    return HomeComponent;
}());
export { HomeComponent };
//# sourceMappingURL=home.component.js.map